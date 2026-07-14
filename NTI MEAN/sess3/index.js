let myName = "Ahmed Ali";
        console.log("1.", myName.length);

        let sentence = "I am learning JavaScript";
        console.log("2. Upper:", sentence.toUpperCase());
        console.log("   Lower:", sentence.toLowerCase());

        let email = "student@nti.com";
        console.log("3.", email.includes("@"));

        let word = "JavaScript";
        console.log("4. First:", word[0]);
        console.log("   Last:", word[word.length - 1]);

        let text = "This is a bad day";
        console.log("5.", text.replace("bad", "good"));

        let love = "I love coding";
        console.log("6.", love.split(" ").join("-"));

        let messy = " nti egypt training ";
        console.log("7.", messy.trim().toUpperCase().replace("EGYPT", "CAIRO"));

        console.log("8.", parseFloat("45.8"));

        let num = 7.6;
        console.log("9. Round:", Math.round(num));
        console.log("   Floor:", Math.floor(num));
        console.log("   Ceil:", Math.ceil(num));

        console.log("10. Max:", Math.max(12, 5, 28, 9));
        console.log("    Min:", Math.min(12, 5, 28, 9));

        let random = Math.floor(Math.random() * 20) + 1;
        console.log("11.", random);

        let price = 19.4567;
        console.log("12.", price.toFixed(2));

        let nums = [];
        for(let i = 0; i < 5; i++) {
            nums.push(Math.floor(Math.random() * 50) + 1);
        }
        let avg = (nums.reduce((a, b) => a + b, 0) / 5).toFixed(2);
        console.log("13. Numbers:", nums);
        console.log("    Max:", Math.max(...nums));
        console.log("    Min:", Math.min(...nums));
        console.log("    Avg:", avg);

        console.log("14:");
        for(let i = 1; i <= 20; i++) console.log(i);

        console.log("\n15:");
        for(let i = 1; i <= 15; i++) if(i % 2 === 1) console.log(i);

        console.log("\n16:");
        let count = 10;
        while(count >= 1) {
            console.log(count);
            count--;
        }

        console.log("\n17:");
        let names = ["Sara", "Omar", "Mona", "Youssef"];
        for(let name of names) console.log(name);

        console.log("\n18:");
        for(let i = 1; i <= 10; i++) {
            if(i === 7) break;
            console.log(i);
        }

        console.log("\n19:");
        for(let i = 1; i <= 3; i++) {
            for(let j = 1; j <= 3; j++) {
                console.log(i + " * " + j + " = " + (i * j));
            }
        }

        console.log("\n20:");
        for(let i = 1; i <= 30; i++) {
            if(i === 25) break;
            if(i % 3 === 0) continue;
            console.log(i);
        }

        console.log("\n21:");
        let hello = "HELLO";
        for(let i = 0; i < hello.length; i++) console.log(hello[i]);

        let numbers = [10, 20, 30, 40];
        let sum = 0;
        for(let i = 0; i < numbers.length; i++) sum += numbers[i];
        console.log("22.", sum);

        let text2 = "JavaScript is amazing and awesome";
        let countA = 0;
        for(let i = 0; i < text2.length; i++) {
            if(text2[i].toLowerCase() === "a") countA++;
        }
        console.log("23.", countA);

        console.log("24:");
        let grades = [70, 85, 92, 60, 77, 88];
        for(let g of grades) if(g % 2 === 0) console.log(g);

        console.log("25:");
        for(let i = 1; i <= 4; i++) {
            let line = "";
            for(let j = 1; j <= i; j++) line += "* ";
            console.log(line);
        }

        console.log("26:");
        let students = ["ahmed", "sara", "omar", "laila", "hassan"];
        let counter = 0;
        for(let i = 0; i < students.length; i++) {
            let upper = students[i].toUpperCase();
            if(upper.startsWith("A") || upper.startsWith("S")) {
                console.log(upper);
                counter++;
            }
        }
        console.log("Matched:", counter);