using System.Linq;
using AutoMapper;
using DTG.API.Controllers.Reources;
using DTG.API.Dtos;
using DTG.API.Models;

namespace DTG.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {

            // Users Mapping //
            CreateMap<User, UserForListDto>()
                .ForMember(dest => dest.PhotoUrl, opt => { 
                    opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url);
                })
                .ForMember(dest => dest.Age, opt => {
                opt.ResolveUsing(d => d.DateOfBirth.CalculateAge());
                });
                

            CreateMap<User, UserForDetailDto>()
                .ForMember(dest => dest.PhotoUrl, opt => { 
                    opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url);
                })
                .ForMember(dest => dest.Age, opt => {
                opt.ResolveUsing(d => d.DateOfBirth.CalculateAge());
                });

            CreateMap<MemberPhoto, PhotoForDetailDto>();

            CreateMap<Contact, ContactForListDto>().ReverseMap();

            CreateMap<UserForUpdateDto, User>();
            CreateMap<PhotoForCreationDto, MemberPhoto>();
            CreateMap<MemberPhoto, PhotoForReturnDto>();
            CreateMap<UserForRegisterDto, User>();

            CreateMap<MessageForCreationDto, Message>().ReverseMap();
            CreateMap<Message, MessageToReturnDto>()
            .ForMember(m => m.SenderPhotoUrl, opt => 
            opt.MapFrom( u => u.Sender.Photos.FirstOrDefault(p => p.IsMain).Url))

               .ForMember(m => m.RecipientPhotoUrl, opt => 
            opt.MapFrom( u => u.Recipient.Photos.FirstOrDefault(p => p.IsMain).Url));

 

            // Vehicle Mapping //
             // Domain to API Resource
            CreateMap<VehiclePhoto, VehiclePhotoResource>();
            CreateMap(typeof(QueryResult<>), typeof(QueryResultResource<>));
            CreateMap<Make, MakeResource>();
            CreateMap<Make, KeyValuePairResource>();
            CreateMap<Model, KeyValuePairResource>();
            CreateMap<Feature, KeyValuePairResource>();
            CreateMap<Vehicle, SaveVehicleResource>()
              .ForMember(vr => vr.Contact, opt => opt.MapFrom(v => new ContactResource { Name = v.ContactName, Email = v.ContactEmail, Phone = v.ContactPhone } ))
              .ForMember(vr => vr.Features, opt => opt.MapFrom(v => v.Features.Select(vf => vf.FeatureId)));
           
            CreateMap<Vehicle, VehicleResource>()
              .ForMember(vr => vr.Make, opt => opt.MapFrom(v => v.Model.Make))
              .ForMember(vr => vr.CreatedByUserId, opt => opt.MapFrom(v => v.CreatedByUserId))
              .ForMember(vr => vr.ProjectBudget, opt => opt.MapFrom(v => v.ProjectBudget))
              .ForMember(vr => vr.LowestProjectBid, opt => opt.MapFrom(v => v.LowestProjectBid))
              .ForMember(vr => vr.Contact, opt => opt.MapFrom(v => new ContactResource { Name = v.ContactName, Email = v.ContactEmail, Phone = v.ContactPhone } ))
              .ForMember(vr => vr.Features, opt => opt.MapFrom(v => v.Features.Select(vf => new KeyValuePairResource { Id = vf.Feature.Id, Name = vf.Feature.Name })));

            // API Resource to Domain
            CreateMap<VehicleQueryResource, VehicleQuery>();
            CreateMap<SaveVehicleResource, Vehicle>()
              .ForMember(v => v.Id, opt => opt.Ignore())
              .ForMember(v => v.CreatedByUserId, opt => opt.MapFrom(vr => vr.CreatedByUserId))
              .ForMember(v => v.ProjectBudget, opt => opt.MapFrom(vr => vr.ProjectBudget))
              .ForMember(v => v.LowestProjectBid, opt => opt.MapFrom(vr => vr.LowestProjectBid))
              .ForMember(v => v.ContactName, opt => opt.MapFrom(vr => vr.Contact.Name))
              .ForMember(v => v.ContactEmail, opt => opt.MapFrom(vr => vr.Contact.Email))
              .ForMember(v => v.ContactPhone, opt => opt.MapFrom(vr => vr.Contact.Phone))
              .ForMember(v => v.Features, opt => opt.Ignore())
              .AfterMap((vr, v) => {
                // Remove unselected features
                var removedFeatures = v.Features.Where(f => !vr.Features.Contains(f.FeatureId)).ToList();
                foreach (var f in removedFeatures)
                  v.Features.Remove(f);

                // Add new features
                var addedFeatures = vr.Features.Where(id => !v.Features.Any(f => f.FeatureId == id)).Select(id => new VehicleFeature { FeatureId = id }).ToList();   
                foreach (var f in addedFeatures)
                    v.Features.Add(f);
            });


        }
    }
}