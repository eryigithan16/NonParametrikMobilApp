const nemene = require('nemene');

export const chiSquareGoodnessOfFit = (values) => {

//const values = [90, 50, 60, 70, 30];
const result = nemene.ChiSquareGoodnessOfFit({ observed: values });
console.log(result);
return result;
};

export const kolmogorovSmirnov = (values, ort, sd) => {

//const values = [1.6, 2.4, 2.45, 1.9, 2.7, 2.1, 2.4, 2.4, 2.7, 1.9, 2.8, 2.7, 1.7,
//                1.7, 2.0, 3.1, 3.2, 3.0, 2.8, 2.6, 2.4, 2.7, 1.9, 2.9, 2.5, 2.6,
// 			      1.8, 3.4, 2.5, 2.75];
console.log('ortalama',ort);
console.log('s sapma',sd);
const result = nemene.KolmogorovSmirnovGoodnessOfFit({ observed: values, mean: ort, standardDeviation: sd });
console.log(result);
return result

};

export const lilliefors = (values) => {
    //const values = [1.6, 2.4, 2.45, 1.9, 2.7, 2.1, 2.4, 2.4, 2.7, 1.9, 2.8, 2.7, 1.7,
//                1.7, 2.0, 3.1, 3.2, 3.0, 2.8, 2.6, 2.4, 2.7, 1.9, 2.9, 2.5, 2.6,
// 			      1.8, 3.4, 2.5, 2.75];
const result = nemene.Lilliefors({ observed: values});
console.log(result);
return result
};

export const levene = (values) => {
//const values = [
  //              [20, 24, 20, 18, 18],
    //            [16, 19, 15, 15, 15],
      //          [24, 24, 30, 21, 21],
        //        [17, 22, 17, 15, 14]
          //     ];
const result = nemene.Levene({ observed: values});
console.log(result);
return result

};