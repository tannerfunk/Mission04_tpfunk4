using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_tpfunk4.Models
{
    public class GradeCalculatorModel
    {
        [Required]
        public float Assignments { get; set; }

        [Required]
        public float Projects { get; set; }

        [Required]
        public float Quizzes { get; set; }

        [Required]
        public float Midterm { get; set; }

        [Required]
        //[Max SOmething!!]
        public float Final { get; set; }

        [Required]
        public float Intex { get; set; }

    }
}
