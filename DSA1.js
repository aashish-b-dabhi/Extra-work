let a = [14, 31, 28, 67, 65, 78, 58]

            // addElement

            // let value1 = 29;
            // let ind1 = 3;
            
            // for (let i = a.length - 1; i >= ind1; i--) {

            //     a[i + 1] = a[i]

            //     if (i == ind1) {
            //         a[ind1] = value1
            //     }

            // }
            
            // let last = 92;

            // a[a.length] = last

            // console.log(a);


            // removeElement 

            let ind = 2 
            for(let i = ind; i<a.length-1; i++){
                 
                a[i] = a[i+1];
            }
            a.length = a.length-1
            console.log(a);