using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace DTG.API.Helpers
{
    public static class Extensions
    {
        public static void AddApplicatinError(this HttpResponse response, string message)
        {
            response.Headers.Add("Application-Error", message);
            response.Headers.Add("Access-Control-Expose-Headers", "Application-Error");
            response.Headers.Add("Access-Control-Allow-Origin", "*");
        }


        public static void AddPagination(this HttpResponse response, int currentPage, int itemsPerPage,
                                         int totalItems, int totalPages)
        {
            var paginationHeader = new PaginationHeader(currentPage, itemsPerPage, totalItems, totalPages);
            var camelCaseFormatter = new JsonSerializerSettings();
            camelCaseFormatter.ContractResolver = new CamelCasePropertyNamesContractResolver();
            response.Headers.Add("Pagination", JsonConvert.SerializeObject(paginationHeader,camelCaseFormatter));
            response.Headers.Add("Access-Control-Expose-Headers", "Pagination");

        }
        public static int CalculateAge(this DateTime dateOfBirth)
        {
            var age = DateTime.Today.Year - dateOfBirth.Year;

            if (dateOfBirth.AddYears(age) > DateTime.Today)
                age--;

            return age;

            // DateTime today = DateTime.Today;

            // int months = today.Month - dateOfBirth.Month;
            // int years = today.Year - dateOfBirth.Year;

            // if (today.Day < dateOfBirth.Day)
            // {
            //     months--;
            // }

            // if (months < 0)
            // {
            //     years--;
            //     months += 12;
            // }

            // int days = (today - dateOfBirth.AddMonths((years * 12) + months)).Days;

            // // return string.Format("{0} year{1}, {2} month{3} and {4} day{5}",
            // //                      years, (years == 1) ? "" : "s",
            // //                      months, (months == 1) ? "" : "s",
            // //                      days, (days == 1) ? "" : "s");
        }


        public static IQueryable<T> ApplyOrdering<T>(this IQueryable<T> query, IQueryObject queryObj, Dictionary<string, Expression<Func<T, object>>> columnsMap)
        {
        if (String.IsNullOrWhiteSpace(queryObj.SortBy) || !columnsMap.ContainsKey(queryObj.SortBy))
          return query;

        if (queryObj.IsSortAscending)
          return query.OrderBy(columnsMap[queryObj.SortBy]);
        else
          return query.OrderByDescending(columnsMap[queryObj.SortBy]);
        }


        public static IQueryable<T> ApplyPaging<T>(this IQueryable<T> query, IQueryObject queryObj) 
        {
         if (queryObj.Page <= 0)
          queryObj.Page = 1; 
          
         if (queryObj.PageSize <= 0)
          queryObj.PageSize = 10; 

         return query.Skip((queryObj.Page - 1) * queryObj.PageSize).Take(queryObj.PageSize);
        }



    }
}