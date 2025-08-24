// Global Scope
console.log("Before declaration, a =", a); // undefined (due to var hoisting)
var a = 10; // hoisted, initialized later

console.log("After declaration, a =", a);

const b = 11; // in Script scope (not hoisted like var)

function d() {
    console.log("Inside d() start");

    //Temporal Dead Zone for 'c' here.
    const c = 12; // Will be stored in Local memory of d. but before initialization it can't accessed.
    console.log("c =", c);

    e(); // call inner function

    function e() {
        console.log("Inside e()", c); // if we use c in this function then closure of d will be created else
            // it don't store c.

        // TDZ for 'f' here
        const f = 13;
        console.log("f =", f);

        function y() {
            console.log("Inside y()"); // as we don't use f in y so it's closure won't be store f.
            const u = 15;
            console.log("u =", u);
        }

        // Call y so u is allocated
        y();
    }

    console.log("Inside d() end");
}

// Execution starts here
d();


// var is functional scope.
// const,let are block scoped.