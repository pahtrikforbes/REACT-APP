﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Veme.Models.DBFirstContext
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Data.Entity.Core.Objects;
    using System.Linq;
    
    public partial class DBFirstContext : DbContext
    {
        public DBFirstContext()
            : base("name=DBFirstContext")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
    
        public virtual int SetCouponCodePurchaseDateTimeById(Nullable<int> productionCodeID)
        {
            var productionCodeIDParameter = productionCodeID.HasValue ?
                new ObjectParameter("ProductionCodeID", productionCodeID) :
                new ObjectParameter("ProductionCodeID", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("SetCouponCodePurchaseDateTimeById", productionCodeIDParameter);
        }
    }
}
