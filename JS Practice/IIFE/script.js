// module pattern
// module pattern me jo bhi banayenge woh IIFE ke andar banayenge, woh private ho jaata h aur IIFE ke andar se ek object return krna parta h. Object ke andar woh sbb chiz rehta h jo hmmko bahar se access krwana h jo private hi rkhna h woh object ke andar nhi daalna h
// use case of module pattern
// agar koi chiz hmm nhi chahte ki bahar se access ho meaning ki private rahe tbb module pattern use krna parta h

let bank = (function () {
    let bankBalance = 11000;
    function checkBalance() {
        console.log(bankBalance);

    };
    function setBalance(val) {
        bankBalance = val;
    }
    function withdrawBalance(val) {
        if (val <= bankBalance) {
            bankBalance -= val;

        }
        else {
            console.log("Limit Exceeded");

        }

    }
    return {
        setBalance,
        checkBalance,
        withdrawBalance,
    }

})();

bank.checkBalance();


// revealing module pattern 
// almost same h module pattern ke tarah just return krne ka tareeka thoda alg h mtlb ki return me jo object varibles/function return kr rha h woh variables/function ka naam change kr dene se woh revealing module pattern bann jaata h 

let Bank = (function () {
    let bankBalance = 11000;
    function checkBalance() {
        console.log(bankBalance);

    };
    function setBalance(val) {
        bankBalance = val;
    }
    function withdrawBalance(val) {
        if (val <= bankBalance) {
            bankBalance -= val;

        }
        else {
            console.log("Limit Exceeded");

        }

    }
    return {
        set: setBalance,
        check: checkBalance,
        withdraw: withdrawBalance,
    }

})();

Bank.check();


// Factory Function Pattern

function createProduct(name, price) {
    let stock = 10;
    return {
        name,
        price,
        buy(qty) {
            if (qty > stock) console.log("Product ordered Exceeded stock limit") 
            else {
                stock -= qty;
                console.log(`${qty} Booked, ${stock} left`);
            }

        },
        refill(qty) {
            stock += qty;
            console.log(`Stock Updated. Total Stock ${stock}`);
        },
        
    }
}

let cycle = createProduct("cycle", 5000)
cycle.buy(8);