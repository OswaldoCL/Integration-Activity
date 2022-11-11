using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace net_test.Models
{
    public class User
    {
        //UserType(Enum)
        public int UserId { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Item { get; set; } = string.Empty;
        public int Quantity { get; set; }
    }
}