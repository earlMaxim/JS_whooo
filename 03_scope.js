function fA(){
    let a = 1;
    function fB(){
        let b = 2;
        function fC(){
            let c = 3;

            console.log('fc', a, b, c)
        }
        fC()
        console.log('fb', a, b)
    }
    fB()
    console.log('fa', a)
}

fA()
