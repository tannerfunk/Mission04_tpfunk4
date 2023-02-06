using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_tpfunk4.Models
{
    public class GradeCalculatorModel
    {
        //This is the validation in the model.
        [Range(0, 100)]
        public float Assignments { get; set; }

        [Range(0, 100)]
        public float Projects { get; set; }

        [Range(0, 100)]
        public float Quizzes { get; set; }

        [Range(0, 100)]
        public float Midterm { get; set; }
        
        [Range(0, 100)]
        public float Final { get; set; }

        [Range(0, 100)]
        public float Intex { get; set; }

    }
}
