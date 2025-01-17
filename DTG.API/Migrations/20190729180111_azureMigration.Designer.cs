﻿// <auto-generated />
using DTG.API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;

namespace DTG.API.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20190729180111_azureMigration")]
    partial class azureMigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.1-rtm-125")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("DTG.API.Models.Bids", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("BidDate");

                    b.Property<int>("BidderId");

                    b.Property<decimal>("Bidvalue");

                    b.Property<int>("VehicleId");

                    b.HasKey("Id");

                    b.HasIndex("VehicleId");

                    b.ToTable("Bids");
                });

            modelBuilder.Entity("DTG.API.Models.Contact", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Cellular");

                    b.Property<string>("Email");

                    b.Property<string>("Extension");

                    b.Property<string>("TelephoneNumber");

                    b.Property<int?>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Contact");
                });

            modelBuilder.Entity("DTG.API.Models.Feature", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(255);

                    b.HasKey("Id");

                    b.ToTable("Features");
                });

            modelBuilder.Entity("DTG.API.Models.Like", b =>
                {
                    b.Property<int>("LikerId");

                    b.Property<int>("LikeeId");

                    b.HasKey("LikerId", "LikeeId");

                    b.HasIndex("LikeeId");

                    b.ToTable("Likes");
                });

            modelBuilder.Entity("DTG.API.Models.Make", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(255);

                    b.HasKey("Id");

                    b.ToTable("Makes");
                });

            modelBuilder.Entity("DTG.API.Models.MemberPhoto", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("DateAdded");

                    b.Property<string>("Description");

                    b.Property<bool>("IsMain");

                    b.Property<string>("PublicId");

                    b.Property<string>("Url");

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Photos");
                });

            modelBuilder.Entity("DTG.API.Models.Message", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Content");

                    b.Property<DateTime?>("DateRead");

                    b.Property<bool>("IsRead");

                    b.Property<DateTime>("MessageSent");

                    b.Property<bool>("RecipientDeleted");

                    b.Property<int>("RecipientId");

                    b.Property<bool>("SenderDeleted");

                    b.Property<int>("SenderId");

                    b.HasKey("Id");

                    b.HasIndex("RecipientId");

                    b.HasIndex("SenderId");

                    b.ToTable("Messages");
                });

            modelBuilder.Entity("DTG.API.Models.Model", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("MakeId");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(255);

                    b.HasKey("Id");

                    b.HasIndex("MakeId");

                    b.ToTable("Models");
                });

            modelBuilder.Entity("DTG.API.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Cellular");

                    b.Property<string>("City");

                    b.Property<string>("Country");

                    b.Property<DateTime>("Created");

                    b.Property<string>("CurrentRole");

                    b.Property<DateTime>("DateOfBirth");

                    b.Property<DateTime>("DateOfEmployment");

                    b.Property<string>("Email");

                    b.Property<string>("Extension");

                    b.Property<string>("FirstName");

                    b.Property<string>("Gender");

                    b.Property<string>("Interests");

                    b.Property<string>("Introduction");

                    b.Property<string>("KnownAs");

                    b.Property<string>("KnownAsLast");

                    b.Property<DateTime>("LastActive");

                    b.Property<string>("LastName");

                    b.Property<string>("LookingFor");

                    b.Property<byte[]>("PasswordHash");

                    b.Property<byte[]>("PasswordSalt");

                    b.Property<string>("TelephoneNumber");

                    b.Property<string>("Username");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("DTG.API.Models.Value", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Values");
                });

            modelBuilder.Entity("DTG.API.Models.Vehicle", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ContactEmail")
                        .HasMaxLength(255);

                    b.Property<string>("ContactName")
                        .IsRequired()
                        .HasMaxLength(255);

                    b.Property<string>("ContactPhone")
                        .IsRequired()
                        .HasMaxLength(255);

                    b.Property<int>("CreatedByUserId");

                    b.Property<bool>("IsRegistered");

                    b.Property<DateTime>("LastUpdate");

                    b.Property<decimal>("LowestProjectBid");

                    b.Property<int>("ModelId");

                    b.Property<decimal>("ProjectBudget");

                    b.Property<DateTime>("ProjectEndDate");

                    b.Property<DateTime>("ProjectStartDate");

                    b.HasKey("Id");

                    b.HasIndex("ModelId");

                    b.ToTable("Vehicles");
                });

            modelBuilder.Entity("DTG.API.Models.VehicleFeature", b =>
                {
                    b.Property<int>("VehicleId");

                    b.Property<int>("FeatureId");

                    b.HasKey("VehicleId", "FeatureId");

                    b.HasIndex("FeatureId");

                    b.ToTable("VehicleFeatures");
                });

            modelBuilder.Entity("DTG.API.Models.VehiclePhoto", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("FileName")
                        .IsRequired()
                        .HasMaxLength(255);

                    b.Property<int>("VehicleId");

                    b.HasKey("Id");

                    b.HasIndex("VehicleId");

                    b.ToTable("VehiclePhotos");
                });

            modelBuilder.Entity("DTG.API.Models.Bids", b =>
                {
                    b.HasOne("DTG.API.Models.Vehicle", "Vehicle")
                        .WithMany("Bids")
                        .HasForeignKey("VehicleId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("DTG.API.Models.Contact", b =>
                {
                    b.HasOne("DTG.API.Models.User")
                        .WithMany("Contact")
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("DTG.API.Models.Like", b =>
                {
                    b.HasOne("DTG.API.Models.User", "Liker")
                        .WithMany("Likee")
                        .HasForeignKey("LikeeId")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.HasOne("DTG.API.Models.User", "Likee")
                        .WithMany("Liker")
                        .HasForeignKey("LikerId")
                        .OnDelete(DeleteBehavior.Restrict);
                });

            modelBuilder.Entity("DTG.API.Models.MemberPhoto", b =>
                {
                    b.HasOne("DTG.API.Models.User", "User")
                        .WithMany("Photos")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("DTG.API.Models.Message", b =>
                {
                    b.HasOne("DTG.API.Models.User", "Recipient")
                        .WithMany("MessagesReceived")
                        .HasForeignKey("RecipientId")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.HasOne("DTG.API.Models.User", "Sender")
                        .WithMany("MessagesSent")
                        .HasForeignKey("SenderId")
                        .OnDelete(DeleteBehavior.Restrict);
                });

            modelBuilder.Entity("DTG.API.Models.Model", b =>
                {
                    b.HasOne("DTG.API.Models.Make", "Make")
                        .WithMany("Models")
                        .HasForeignKey("MakeId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("DTG.API.Models.Vehicle", b =>
                {
                    b.HasOne("DTG.API.Models.Model", "Model")
                        .WithMany()
                        .HasForeignKey("ModelId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("DTG.API.Models.VehicleFeature", b =>
                {
                    b.HasOne("DTG.API.Models.Feature", "Feature")
                        .WithMany()
                        .HasForeignKey("FeatureId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("DTG.API.Models.Vehicle", "Vehicle")
                        .WithMany("Features")
                        .HasForeignKey("VehicleId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("DTG.API.Models.VehiclePhoto", b =>
                {
                    b.HasOne("DTG.API.Models.Vehicle")
                        .WithMany("VehiclePhotos")
                        .HasForeignKey("VehicleId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
