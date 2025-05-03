// Initialise Variables to Use Later in the Code

let waitingForName = false;
let usersname = "";
let waitingForBudget = false;
let userBudget = 0;
let waitingForCategoryChoice = false;
let waitingForSubjectYear = false;
let waitingForLanguagePreference = false;
let selectedYear = null;
let waitingForYear9Electives = false;
let year9Electives = [];
let year9Units = 0;
let waitingForMoreYear9Help = false;
let waitingForElectiveInterest = false;
let waitingForYear10Electives = false;
let waitingForYear10Interest = false;
let year10Electives = [];
let waitingForMoreYear10Help = false;
let waitingForYear10Help = false;
let waitingForSeniorPathway = false;
let seniorYear = null;
let atarPathway = null;
let selectedSubjectsY11Y12 = [];
let waitingForSeniorSubjects = false;
let waitingForSeniorHelp = false;
let waitingForNextHelpResponse = false;
let waitingForSportType = false;
let waitingForSportYear = false;
let selectedSport = null;
let waitingForGeneralInfoChoice = false;
let waitingForStaffQuery = false;
let waitingForDirections = false;
let directionStep = 0;
let fromLocation = "";



// Menu and Prices for canteen
const menu = {
    "Banana Bread": 4.5, "Beef Jerky": 3.5, "Red Rock Deli Chips": 3.5, "Fruit - whole fresh": 1.0,
    "Fruit Cup": 4.0, "Large Cookie": 4.0, "Large Muffin": 4.0, "Pringles": 3.5, "Crispy Snack Bag": 3.0,
    "Sandwiches - Assorted": 6.5, "Sauce": 0.5, "Sushi 5pc": 6.7, "Vegie Chips": 3.0, "Wraps - Assorted": 6.0,
    "Yoghurt": 3.0, "Deep Spring Water 375ml": 4.0, "Fruit Juice Box - 250ml": 3.0, "Glee 250ml": 3.3,
    "Kirks Sugar Free can": 4.0, "Popper Juice 250ml": 3.0, "Sparkling Water 250ml": 3.5, "Water 600ml": 4.5,
    "Water Pump 750ml": 5.5, "Emma & Tom 450ml": 4.5, "Flavoured Milk 300ml": 4.0, "Flavoured Milk 600ml": 5.5,
    "Powerade": 6.0, "Up & Go – Chocolate": 4.0, "Icecream - Zooper": 2.0, "Lemon/Rasberry IcyPoles": 3.0,
    "Milo Cup": 4.0, "Grain Waves": 4.0, "Jelly Cup": 3.5, "Hot Meal Special (e.g. Miss Mac's Sausage Roll or Miss Mac's Beef Pie)": 5.5,
    "Hot Meal Special (e.g. Pasta, rice, noodles)": 8.5, "Hot meal special (e.g. fried chicken)": 9.0,
    "Lolly bag": 3.5, "Hi-Chew": 4.0, "Milkybar": 4.0, "Cadbury Chocolate": 4.0, "Mentos": 4.0
};

// A chip is a snack so class it in categories

const categoryMap = {
    "Snacks": ["Beef Jerky", "Red Rock Deli Chips", "Pringles", "Vegie Chips", "Grain Waves", "Sauce", "Crispy Snack Bag"],
    "Desserts": ["Fruit Cup", "Large Cookie", "Large Muffin", "Icecream - Zooper", "Lemon/Rasberry IcyPoles", "Milo Cup", "Jelly Cup", "Yoghurt"],
    "Drinks": ["Deep Spring Water 375ml", "Fruit Juice Box - 250ml", "Glee 250ml", "Kirks Sugar Free can", "Popper Juice 250ml", "Sparkling Water 250ml", "Water 600ml", "Water Pump 750ml", "Emma & Tom 450ml", "Flavoured Milk 300ml", "Flavoured Milk 600ml", "Powerade", "Up & Go – Chocolate"],
    "Meals": ["Banana Bread", "Fruit - whole fresh", "Sandwiches - Assorted", "Sushi 5pc", "Wraps - Assorted", "Hot Meal Special (e.g. Miss Mac's Sausage Roll or Miss Mac's Beef Pie)", "Hot Meal Special (e.g. Pasta, rice, noodles)", "Hot meal special (e.g. fried chicken)"],
    "Lollies": ["Lolly bag", "Hi-Chew", "Milkybar", "Cadbury Chocolate", "Mentos"]
};

// Let the user say other stuff too

const itemAliases = {
    // Snacks
    "jerky": "Beef Jerky",
    "packet of jerky": "Beef Jerky",
    "beef jerky": "Beef Jerky",

    "chips": "Red Rock Deli Chips",
    "red rock deli": "Red Rock Deli Chips",
    "bag of chips": "Red Rock Deli Chips",

    "fruit": "Fruit - whole fresh",
    "fresh fruit": "Fruit - whole fresh",

    "fruit cup": "Fruit Cup",

    "cookie": "Large Cookie",
    "large cookie": "Large Cookie",

    "muffin": "Large Muffin",
    "large muffin": "Large Muffin",

    "pringles can": "Pringles",
    "pringles": "Pringles",

    "sandwich": "Sandwiches - Assorted",
    "sandwiches": "Sandwiches - Assorted",

    "sauce": "Sauce",
    "sauce packet": "Sauce",

    "sushi": "Sushi 5pc",
    "sushi pack": "Sushi 5pc",

    "vegie chips": "Vegie Chips",

    "wrap": "Wraps - Assorted",
    "wraps": "Wraps - Assorted",

    "yoghurt": "Yoghurt",

    "banana bread": "Banana Bread",

    "grain waves": "Grain Waves",
    "jelly cup": "Jelly Cup",

    // Drinks
    "water": "Deep Spring Water 375ml",
    "water 375ml": "Deep Spring Water 375ml",
    "spring water": "Deep Spring Water 375ml",
    "water bottle": "Deep Spring Water 375ml",

    "juice": "Fruit Juice Box - 250ml",
    "juice box": "Fruit Juice Box - 250ml",
    "fruit juice": "Fruit Juice Box - 250ml",

    "glee": "Glee 250ml",

    "kirks": "Kirks Sugar Free can",
    "kirks can": "Kirks Sugar Free can",

    "popper juice": "Popper Juice 250ml",

    "sparkling water": "Sparkling Water 250ml",
    "bottle of sparkling water": "Sparkling Water 250ml",
    "sparkling water bottle": "Sparkling Water 250ml",

    "large water": "Water 600ml",
    "large water bottle": "Water 600ml",

    "pump": "Water Pump 750ml",
    "pump bottle": "Water Pump 750ml",
    "pump water": "Water Pump 750ml",

    "emma and tom": "Emma & Tom 450ml",
    "emma & tom": "Emma & Tom 450ml",
    "emma&tom": "Emma & Tom 450ml",

    "choc milk": "Flavoured Milk 300ml",
    "choccy milk": "Flavoured Milk 300ml",
    "choc chill": "Flavoured Milk 300ml",
    "banana chill": "Flavoured Milk 300ml",
    "strawberry chill": "Flavoured Milk 300ml",
    "small choc milk": "Flavoured Milk 300ml",
    "small choccy milk": "Flavoured Milk 300ml",
    "small flavoured milk": "Flavoured Milk 300ml",

    "large choc milk": "Flavoured Milk 600ml",
    "large choccy milk": "Flavoured Milk 600ml",
    "large choc chill": "Flavoured Milk 600ml",
    "large banana chill": "Flavoured Milk 600ml",
    "large strawberry chill": "Flavoured Milk 600ml",
    "large mocha chill": "Flavoured Milk 600ml",
    "large peppermint chill": "Flavoured Milk 600ml",
    "large flavoured milk": "Flavoured Milk 600ml",

    "powerade": "Powerade",
    
    "up & go": "Up & Go – Chocolate",
    "up and go": "Up & Go – Chocolate",
    "up&go": "Up & Go – Chocolate",

    // Icecream
    "zooper": "Icecream - Zooper",
    "zooper dooper": "Icecream - Zooper",

    "icypole": "Lemon/Rasberry IcyPoles",

    "milo cup": "Milo Cup"
};

// Just for fun
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// To use later, converts strings to title case (first letter caps)
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
    });
}

// Reset variables for resetting the chat
function resetState() {
    waitingForName = false;
    usersname = "";
    waitingForBudget = false;
    userBudget = 0;
    waitingForCategoryChoice = false;
}

// Set up what the bot's going to say

function getBotResponse(input) {
    input = input.trim().toLowerCase();
    
    // General responses, setting up for stuff
    if (["hi", "hello", "hey", "hola", "hey there", "hello!", "hi!", "hey!", "hey there!", "sup", "wassup"].includes(input)) {
        return usersname ? `Hello there ${toTitleCase(usersname)}, I'm ChurchieBot.` : (waitingForName = true, "Hello there, I'm ChurchieBot. What's your name?");
    }
    
    if (input.includes("canteen")) {
        return "I can definitely help you with the canteen! Type 'order' if you want help ordering, or any item name to know its price.";
    }

    if (input.includes("order")) {
        waitingForBudget = true;
        return "Okay, how much money do you have to spend? Answer in the format 'I have $___ to spend'";
    }

    // For funnies
    if (input === "ccgs1910-h^js9j*2hru#") {
        return "Congratulations you have now unlocked the backend of the ChurchieBot. The full code for the chatbot can be accessed at https://bitly.com/98K8eH";
    }

    // Utilities
    const now = new Date();
    if (input.includes("time")) {
        let hrs = now.getHours(), mins = now.getMinutes(), ampm = hrs >= 12 ? "PM" : "AM";
        hrs = hrs % 12 || 12;
        return `The time now is ${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')} ${ampm}`;
    }

    if (input.includes("date")) {
        return "The date today is " + now.toDateString();
    }

    // Random stuff
    if (input.includes("random number")) return Math.random();
    if (input.includes("kill")) return "Hey man, that's mean!";
    if (input.includes("trash")) return "Hey I'm trying my best here, you can do whatever you want man.";
    if (input.includes("random integer")) return getRandomInt(1000);

    // So the user can ask for help
    if (input.includes("help")) return "How can I help you today? <br>For each of these options, enter the word in the brackets.<br>- Canteen (canteen)<br>- Sport (sport)<br>- Subjects (subject)<br>- General Information (info)";
    
    // Ask the user how they're doineg
    if (
        [
            "how are you", "how are you?", "how are you doing", "how are you doing?", "how's it going", "how's it going?", "how do you feel", "what's up", "how r u", "how are u", "you good", "are you okay", "how is everything", "how's life", "how’s your day", "how are things", "how do you do", "how are ya", "what’s going on", "how's stuff"
        ].includes(input.toLowerCase())
    ) {
        return `I'm doing good – how about you?<br><br>
        How are you feeling today? Click a face below to let me know:<br><br>
        😊 (Great!)<br>
        🙂 (Good)<br>
        😐 (Okay)<br>
        🙁 (Not so good)<br>
        😢 (Bad)<br><br>
        Just type the face or mood you feel!`;
    }

    // Appropriate responses depending on how they're feeling
    if (["😊", "great", "feeling great", "great!"].includes(input.toLowerCase())) {
        return "Awesome to hear! Keep smiling 😊";
    }
    
    if (["🙂", "good", "feeling good"].includes(input.toLowerCase())) {
        return "Glad you're doing well! Keep it up 🙂";
    }
    
    if (["😐", "okay", "meh"].includes(input.toLowerCase())) {
        return "That's fair – hope your day picks up from here!";
    }
    
    if (["🙁", "not so good", "feeling down"].includes(input.toLowerCase())) {
        return "Sorry to hear that. Take a break if you can, and remember it’s okay to feel this way.";
    }
    
    if (["😢", "bad", "feeling bad"].includes(input.toLowerCase())) {
        return "I'm here for you. If you're really struggling, talk to someone you trust. You're not alone 💙";
    }
        
    // Basic math with operations + - * /
    
    const mathMatch = input.match(/^(-?\d+(\.\d+)?)\s*([\+\-\*\/])\s*(-?\d+(\.\d+)?)$/);
    if (mathMatch) {
        const [ , a, , op, b ] = mathMatch;
        const x = parseFloat(a), y = parseFloat(b);
        return { '+': x + y, '-': x - y, '*': x * y, '/': y !== 0 ? x / y : "Cannot divide by zero" }[op];
    }

    // Special commands
    if (input.includes("change background")) return "__UPLOAD_CHAT_BG__";
    if (input.includes("reset background")) return "__RESET_CHAT_BG__";
    if (input.includes("reset size of chat window")) return "__RESET_CHAT_SIZE__";
    if (input.includes("full screen")) return "__MAKE_FULLSCREEN__";
    if (input.includes("reset chat")) {
        resetState();
        return "___DELETE_CHAT____";
    }
    

    // Name setup
    if (waitingForName) {
        usersname = toTitleCase(input);
        waitingForName = false;
        return `Hey there ${usersname}, how can I help you today? <br>For each of these options, enter the word in the brackets.<br>- Canteen (canteen)<br>- Sport (sport)<br>- Subjects (subject)<br>- General Information (info)`;
    }


    // 
    //░█████╗░░█████╗░███╗░░██╗████████╗███████╗███████╗███╗░░██╗  ██████╗░░█████╗░████████╗
    //██╔══██╗██╔══██╗████╗░██║╚══██╔══╝██╔════╝██╔════╝████╗░██║  ██╔══██╗██╔══██╗╚══██╔══╝
    //██║░░╚═╝███████║██╔██╗██║░░░██║░░░█████╗░░█████╗░░██╔██╗██║  ██████╦╝██║░░██║░░░██║░░░
    //██║░░██╗██╔══██║██║╚████║░░░██║░░░██╔══╝░░██╔══╝░░██║╚████║  ██╔══██╗██║░░██║░░░██║░░░
    //╚█████╔╝██║░░██║██║░╚███║░░░██║░░░███████╗███████╗██║░╚███║  ██████╦╝╚█████╔╝░░░██║░░░
    //░╚════╝░╚═╝░░╚═╝╚═╝░░╚══╝░░░╚═╝░░░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═════╝░░╚════╝░░░░╚═╝░░░
    
        // Budget setup (category selection mode)
        if (waitingForCategoryChoice) {
            const nums = input.match(/\d/g);
            const catMap = { '1': 'Snacks', '2': 'Desserts', '3': 'Drinks', '4': 'Meals', '5': 'Lollies' };
            let response = "";
    
            if (!nums || nums.some(n => !catMap[n])) {
                return "Please enter only numbers 1 to 5. You can enter more than one, like: 1, 2";
            }
    
            nums.forEach(num => {
                const cat = catMap[num];
                const items = categoryMap[cat].filter(i => menu[i] <= userBudget);
                if (items.length) {
                    response += `\n${cat} you can buy:\n`;
                    items.forEach(item => response += `- ${item} ($${menu[item].toFixed(2)})\n`);
                }
            });
    
            waitingForCategoryChoice = false;
            return response ? response.trim().replace(/\n/g, "<br>") : "There are no items in those categories within your budget.";
        }
    
        // Budget evaluation
        if (waitingForBudget) {
            const match = input.match(/\$?(\d+(\.\d{1,2})?)/);
            if (match) {
                userBudget = parseFloat(match[1]);
                waitingForBudget = false;
    
                if (userBudget < Math.min(...Object.values(menu))) {
                    return "You don't have enough money to buy anything in the canteen. To get more money, ask your parents to top up your My Student Account.";
                }
    
                // Trigger category selection
                waitingForCategoryChoice = true;
                return "What type of food would you like to eat? Enter a number 1-5 for:<br>1. Snacks<br>2. Desserts<br>3. Drinks<br>4. Meals<br>5. Lollies";
            } else {
                return "Sorry, I couldn't understand your amount. Please try again like 'I have $5 to spend'.";
            }
        }
    
        // Cost inquiry
        const costMatch = input.match(/^(?:how much does (?:a|an)?\s*|how much is (?:a|an)?\s*|what(?:'s| is) the (?:cost|price) of\s*|cost of\s*|price of\s*|how much for\s*|)?(.+?)(?:\s+costs? how much|\s+cost|\s+price)?\??$/i);
        if (costMatch) {
            let query = costMatch[1].trim();
            if (itemAliases[query]) {
                query = itemAliases[query];
            }
        
            if (menu[query]) {
                return `${query} costs $${menu[query].toFixed(2)}`;
            }
        
        }
    
    //
    //░██████╗██╗░░░██╗██████╗░░░░░░██╗███████╗░█████╗░████████╗  ██████╗░░█████╗░████████╗
    //██╔════╝██║░░░██║██╔══██╗░░░░░██║██╔════╝██╔══██╗╚══██╔══╝  ██╔══██╗██╔══██╗╚══██╔══╝
    //╚█████╗░██║░░░██║██████╦╝░░░░░██║█████╗░░██║░░╚═╝░░░██║░░░  ██████╦╝██║░░██║░░░██║░░░
    //░╚═══██╗██║░░░██║██╔══██╗██╗░░██║██╔══╝░░██║░░██╗░░░██║░░░  ██╔══██╗██║░░██║░░░██║░░░
    //██████╔╝╚██████╔╝██████╦╝╚█████╔╝███████╗╚█████╔╝░░░██║░░░  ██████╦╝╚█████╔╝░░░██║░░░
    //╚═════╝░░╚═════╝░╚═════╝░░╚════╝░╚══════╝░╚════╝░░░░╚═╝░░░  ╚═════╝░░╚════╝░░░░╚═╝░░░

    // Trigger subject mode
    if (input.includes("subject")) {
        waitingForSubjectYear = true;
        return "What year are you choosing subjects for? (Enter a number between 7 and 12)";
    }


    // YEAR LEVEL selection
    if (waitingForSubjectYear) {
        const yearMatch = input.match(/\b(7|8|9|10|11|12)\b/);
        if (!yearMatch) return "Please enter a valid year level (7 to 12).";
        
        selectedYear = parseInt(yearMatch[1]);
        waitingForSubjectYear = false;

        if (selectedYear <= 8) {
            waitingForLanguagePreference = true;
            return "Do you prefer a challenge, cultural richness, or future travel opportunities?";
        }

        if (selectedYear === 9) {
            waitingForYear9Electives = true;
            waitingForElectiveInterest = true;
            year9Electives = [];
            year9Units = 0;
            return "You're selecting Year 9 electives. You need a total of 5 units. Would you like help based on your interests? (yes/no)";
        }

        if (selectedYear === 10) {
            waitingForYear10Electives = true;
            waitingForYear10Help = true;
            year10Electives = [];
            return "You're selecting 2 electives for Year 10. Want help based on your interests? (yes/no)";
        }

        if (selectedYear >= 11) {
            waitingForSeniorPathway = true;
            seniorYear = selectedYear;
            return "Are you aiming for an ATAR or Non-ATAR pathway? (Enter 'ATAR' or 'General'):";
        }
    }

    // === YEAR 7–8: Language Suggestion ===
    if (waitingForLanguagePreference) {
        waitingForLanguagePreference = false;
        input = input.toLowerCase();

        if (input.includes("challenge")) return "A suggested subject for you would be Chinese.";
        if (input.includes("culture") || input.includes("richness")) return "A suggested subject for you would be French.";
        if (input.includes("travel") || input.includes("future")) return "A suggested subject for you would be Japanese.";

        return "Please enter one of challenge, culture or travel. To try again, please enter 'subject' again.";
    }

    // === YEAR 9: Elective Selection ===

    if (waitingForElectiveInterest && /^[1-7]$/.test(input.trim())) {
        waitingForElectiveInterest = false;
        const suggestions = {
            "1": "How about 'App Development', 'Algorithmic Programming', 'Systems and Networking', or 'Data Security'?",
            "2": "Try 'Drama – Full Year' or 'Drama – Half Year'.",
            "3": "Maybe 'Visual Art – Atelier (Half Year)', 'Visual Art – Atelier (Full Year)', 'Digital Photography', or 'Graphic Design'.",
            "4": "You could consider 'Astrophysics' or 'Psychology'.",
            "5": "Check out 'D & T – Engineering' or 'D & T Mechatronics' or 'D & T – Materials'.",
            "6": "If you're a bit better at music, try out 'Music – Extension'. If not, you can go for 'Music – General'.",
            "7": "There's many options. You can try out 'Chinese', 'Japanese', 'French' or 'Philosophy'."
        };
        return suggestions[input.trim()];
    }

    if (waitingForElectiveInterest && input.toLowerCase().includes("yes")) {
        return "Great! Do you enjoy:<br>1. Coding?<br>2. Drama?<br>3. Art or design?<br>4. Science topics?<br>5. Engineering or robotics?<br>6. Music?<br>7. Languages or Philosophy?<br>Reply with a number and I’ll help.";
    }

    if (waitingForElectiveInterest && input.toLowerCase().includes("no")) {
        waitingForElectiveInterest = false;
        return "Okay! Please start listing subjects you'd like to take. I’ll track your total units.";
    }

    // Suggestions
    if (waitingForMoreYear9Help && input.toLowerCase() === "yes") {
        waitingForMoreYear9Help = false;
        waitingForElectiveInterest = true;
        return "Great! Do you enjoy:<br>1. Coding?<br>2. Drama?<br>3. Art or design?<br>4. Science topics?<br>5. Engineering or robotics?<br>6. Music?<br>7. Languages or Philosophy?<br>Reply with a number and I’ll help.";
    }

    if (waitingForMoreYear9Help && input.toLowerCase() === "no") {
        waitingForMoreYear9Help = false;
        return "No problem. Keep entering subject names and I’ll track your units.";
    }

    // Intilalise subjects
    if (waitingForYear9Electives && year9Units < 5 && !waitingForElectiveInterest) {
        const inputLower = input.toLowerCase();

        const subjects = {
            "algorithmic programming": [1, "cs"], "app development": [1, "cs"],
            "bioinformatics": [1, "cs"], "data security": [1, "cs"], "systems and networking": [1, "cs"],
            "drama – full year": [2, "drama"], "drama – half year": [1, "drama"],
            "music – extension": [1, "music"], "music – general": [1, "music"],
            "astrophysics": [1, "science"], "psychology": [1, "science"],
            "digital photography": [1, "art"], "graphic design": [1, "art"],
            "visual art – atelier (half year)": [1, "art"], "visual art – atelier (full year)": [2, "art_full"],
            "d & t – engineering": [1, "dt"], "d & t – materials": [1, "dt"], "d & t mechatronics": [1, "dt"],
            "creative writing": [1, "gen"], "philosophy": [1, "gen"],
            "chinese": [2, "lang"], "french": [2, "lang"], "japanese": [2, "lang"]
        };

        const restrictions = {
            cs: 0, drama: 0, music: 0, science: 0, art: 0, art_full: 0, dt: 0
        };

        year9Electives.forEach(sub => {
            const tag = subjects[sub][1];
            if (restrictions[tag] !== undefined) restrictions[tag]++;
        });
        
        // Restrictions for the Subject Selection
        for (const [subj, [units, tag]] of Object.entries(subjects)) {
            if (inputLower.includes(subj.toLowerCase())) {
                if (year9Electives.includes(subj)) return "You've already chosen that.";
                if (year9Units + units > 5) return `Adding ${subj} would exceed 5 units.`;
                if (tag === "cs" && restrictions.cs >= 2) return "You can only choose up to 2 units from Computer Science.";
                if (tag === "drama" && restrictions.drama >= 1) return "You can only choose one Drama subject.";
                if (tag === "music" && restrictions.music >= 1) return "You can only choose one Music subject.";
                if (tag === "science" && restrictions.science >= 1) return "You can only choose one Science elective.";
                if (tag === "art" && restrictions.art_full > 0) return "You can't combine half-year Art with Full-Year Visual Art.";
                if (tag === "art_full" && restrictions.art > 0) return "You can't combine Full-Year Visual Art with other Art electives.";
                if (tag === "art" && restrictions.art >= 2) return "You can only select up to 2 half-year Art electives.";
                if (tag === "dt" && restrictions.dt >= 2) return "You can only select up to 2 D&T electives.";

                year9Electives.push(subj);
                year9Units += units;
                restrictions[tag]++;

                if (year9Units === 5) {
                    waitingForYear9Electives = false;
                    return `You're all set! You selected 5 units: ${year9Electives.map(toTitleCase).join(", ")}`;
                }

                waitingForMoreYear9Help = true;
                return `${toTitleCase(subj)} added. You now have ${year9Units} unit(s). Would you like more help choosing subjects? (yes/no)`;
            }
        }

        return "I couldn’t match that subject. Try 'Astrophysics', 'App Development', or 'Visual Art'.";
    }

    // === YEAR 10: Electives ===

    if (waitingForYear10Help && input.includes("yes")) {
        waitingForYear10Help = false;
        waitingForYear10Interest = true;
        return "Tell me if you're interested in:<br>1. Cybersecurity/AI<br>2. Business<br>3. Art/Design<br>4. Engineering<br>5. Marine Science or PE";
    }

    if (waitingForYear10Help && input.includes("no")) {
        waitingForYear10Help = false;
        waitingForYear10Interest = true;
        // Return a predefined response to the user
        return "Okay, go ahead and list your subject.";
    }


    // Handle numeric interest answers (before matching subjects)
    if (waitingForYear10Interest && /^[1-5]$/.test(input.trim())) {
        waitingForYear10Interest = false;
        const suggestions = {
            "1": "Try 'Data Science & Artificial Intelligence' or 'Ethical Hacking & Data Security'.",
            "2": "Try 'Investing & Enterprise' or 'Global Perspectives'.",
            "3": "Try 'Visual Art', 'Drama', or 'Digital Media'.",
            "4": "Try 'Mechatronics – Arduino Powered Buggies' or 'Design & Technology – Materials'.",
            "5": "Try 'Marine Science' or 'Sports Science'."
        };
        return suggestions[input.trim()];
    }

    // Handle follow-up help after first subject
    if (waitingForMoreYear10Help && input.toLowerCase() === "yes") {
        waitingForMoreYear10Help = false;
        waitingForYear10Interest = true;
        return "Great! Tell me if you're interested in:<br>1. Cybersecurity/AI<br>2. Business<br>3. Art/Design<br>4. Engineering<br>5. Marine Science or PE";
    }

    if (waitingForMoreYear10Help && input.toLowerCase() === "no") {
        waitingForMoreYear10Help = false;
        return "No problem. Go ahead and enter another subject.";
    }

    // Subject selection logic
    if (waitingForYear10Electives && year10Electives.length < 2) {
        const inputLower = input.toLowerCase();

        const year10Subjects = {
            "english": "core", "mathematics": "core", "humanities": "core",
            "chinese": "Languages", "french": "Languages", "japanese": "Languages",
            "data science & artificial intelligence": "Data Science", "ethical hacking & data security": "Data Science",
            "design & technology – materials": "Design and Technology", "mechatronics – arduino powered buggies": "Design and Technology",
            "global perspectives": "Humanities", "investing & enterprise": "Humanities",
            "drama": "arts", "digital media": "arts", "visual art": "arts",
            "marine science": "science", "sports science": "pe",
            "music advanced": "music", "music general": "music"
        };

        const groupLimits = {};
        year10Electives.forEach(sub => {
            const group = year10Subjects[sub];
            if (groupLimits[group]) groupLimits[group]++;
            else groupLimits[group] = 1;
        });

        for (const [subj, group] of Object.entries(year10Subjects)) {
            if (inputLower.includes(subj.toLowerCase())) {
                if (year10Electives.includes(subj)) return "You've already picked that.";
                if (groupLimits[group] >= 1) return `Only one subject from the '${group}' group allowed.`;

                year10Electives.push(subj);
                groupLimits[group] = 1;

                if (year10Electives.length === 2) {
                    waitingForYear10Electives = false;
                    return `You're all set for Year 10! You selected: ${year10Electives.map(toTitleCase).join(", ")}`;
                }

                waitingForMoreYear10Help = true;
                return `${toTitleCase(subj)} added. Would you like help choosing your next elective? (yes/no)`;
            }
        }

        return "I didn’t recognize that. Try something like 'French', 'Ethical Hacking', or 'Marine Science'.";
    }


    // === YEAR 11–12: ATAR / General Pathway Selection ===

    if ((selectedYear === 11 || selectedYear === 12) && !waitingForSeniorPathway && atarPathway === null) {
        waitingForSeniorPathway = true;
        seniorYear = selectedYear;
        return "Are you aiming for an ATAR or Non-ATAR pathway? (Enter 'ATAR' or 'General'):";
    }

    if (waitingForSeniorPathway && atarPathway === null) {
        const val = input.trim().toLowerCase();

        if (val === "atar") {
            atarPathway = true;
        } else if (val === "general" || val === "non-atar" || val === "non atar") {
            atarPathway = false;
        } else {
            return "Please enter one of 'ATAR' or 'General'.";
        }

        waitingForSeniorPathway = false;
        waitingForSeniorSubjects = true;
        waitingForSeniorHelp = true;
        selectedSubjectsY11Y12 = [];

        return `Great! You're on the ${atarPathway ? "ATAR" : "General"} pathway. Would you like help choosing your subjects? (yes/no)`;
    }

    // === Handle initial help prompt (first time help offered) ===
    if (waitingForSeniorHelp && input.toLowerCase().includes("yes")) {
        waitingForSeniorHelp = false;
        return "Do you like:<br>1. Maths/Science<br>2. Creative Arts<br>3. Humanities<br>4. Tech/Engineering<br>5. Sport/PE?<br>Tell me and I’ll suggest something!";
    }

    if (waitingForSeniorHelp && input.toLowerCase().includes("no")) {
        waitingForSeniorHelp = false;
        return "No problem! Type a subject to add it.";
    }

    // === Handle numeric suggestion selection (category) ===
    if (waitingForSeniorSubjects && /^[1-5]$/.test(input.trim())) {
        const suggestions = {
            "1": ["Maths Methods", "Physics", "Chemistry"],
            "2": ["Visual Arts", "Music", "Drama"],
            "3": ["Modern History", "Politics & Law", "Philosophy"],
            "4": ["Engineering Studies", "Computer Science", "Design"],
            "5": ["Physical Education Studies", "Health Studies"]
        };

        const chosen = suggestions[input.trim()];
        return `Based on your interest, you might like: ${chosen.join(", ")}.\nType one to add it to your subjects.`;
    }

    // === Handle yes/no response after each subject (do you want help picking next?) ===
    if (waitingForNextHelpResponse) {
        const val = input.trim().toLowerCase();
        if (val === "yes") {
            waitingForNextHelpResponse = false;
            waitingForSeniorHelp = true;
            return "Do you like:<br>1. Maths/Science<br>n2. Creative Arts<br>3. Humanities<br>4. Tech/Engineering<br>5. Sport/PE?<br>Tell me and I’ll suggest something!";
        } else if (val === "no") {
            waitingForNextHelpResponse = false;
            return "Okay! Type your next subject.";
        } else {
            return "Please reply with 'yes' or 'no'.";
        }
    }

    // === Main subject selection ===
    if (waitingForSeniorSubjects && selectedSubjectsY11Y12.length < 6) {
        const inputLower = input.toLowerCase();

        const subjectGroups = {
            "english": ["english", "a"], "literature": ["english", "a"], "eald": ["english", "a"],
            "maths applications": ["math", "b"], "maths methods": ["math", "b"], "maths specialist": ["math", "b"],
            "physics": ["science", "b"], "chemistry": ["science", "b"], "biology": ["science", "b"],
            "psychology": ["science", "b"], "marine & maritime studies": ["science", "b"],
            "computer science": ["tech", "b"], "engineering studies": ["tech", "b"],
            "visual arts": ["arts", "a"], "media production": ["arts", "a"], "design": ["arts", "a"],
            "music": ["arts", "a"], "drama": ["arts", "a"],
            "economics": ["humanities", "a"], "business": ["humanities", "a"],
            "philosophy": ["humanities", "a"], "politics & law": ["humanities", "a"],
            "ancient history": ["humanities", "a"], "modern history": ["humanities", "a"],
            "physical education studies": ["sport", "b"], "health studies": ["sport", "b"]
        };

        // Restrictions and full code for choosing
        for (const [subj, [group, list]] of Object.entries(subjectGroups)) {
            if (inputLower.includes(subj)) {
                if (selectedSubjectsY11Y12.includes(subj)) {
                    return "You've already selected that.";
                }

                if (atarPathway && group === "math") {
                    const mathCount = selectedSubjectsY11Y12.filter(s => subjectGroups[s]?.[0] === "math").length;
                    if (mathCount >= 2) return "You can’t pick more than 2 Maths subjects for ATAR.";
                }

                selectedSubjectsY11Y12.push(subj);

                if (selectedSubjectsY11Y12.length === 6) {
                    const englishOk = selectedSubjectsY11Y12.some(s => subjectGroups[s]?.[0] === "english");
                    const listBok = selectedSubjectsY11Y12.some(s => subjectGroups[s]?.[1] === "b");

                    if (!englishOk) return "⚠️ You must include at least one English subject.";
                    if (!listBok) return "⚠️ You must include at least one List B subject (Math, Science, Tech).";

                    waitingForSeniorSubjects = false;
                    return `✅ Done! Your Year ${seniorYear} subjects are: ${selectedSubjectsY11Y12.map(toTitleCase).join(", ")}`;
                }

                waitingForNextHelpResponse = true;
                return `${toTitleCase(subj)} added. You’ve picked ${selectedSubjectsY11Y12.length} of 6.\nWould you like help picking your next subject? (yes/no)`;
            }
        }

        return "I didn’t recognize that subject. Try 'Maths Methods', 'Literature', or 'Engineering Studies'.";
    }

    //░██████╗██████╗░░█████╗░██████╗░████████╗  ██████╗░░█████╗░████████╗
    //██╔════╝██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝  ██╔══██╗██╔══██╗╚══██╔══╝
    //╚█████╗░██████╔╝██║░░██║██████╔╝░░░██║░░░  ██████╦╝██║░░██║░░░██║░░░
    //░╚═══██╗██╔═══╝░██║░░██║██╔══██╗░░░██║░░░  ██╔══██╗██║░░██║░░░██║░░░
    //██████╔╝██║░░░░░╚█████╔╝██║░░██║░░░██║░░░  ██████╦╝╚█████╔╝░░░██║░░░
    //╚═════╝░╚═╝░░░░░░╚════╝░╚═╝░░╚═╝░░░╚═╝░░░  ╚═════╝░░╚════╝░░░░╚═╝░░░


    // === SPORT TRAINING SELECTION ===
    if (input.includes("sport")) {
        waitingForSportType = true;
        return "What sport are you interested in?<br>1. AFL<br>2. Badminton<br>3. Cross Country<br>4. Hockey<br>5. Rugby<br>6. Sailing<br>7. Soccer<br>8. Surfing<br>Or enter 9 to see all First Team trainings.";
    }

    if (waitingForSportType) {
        const sportOptions = {
            "1": "afl",
            "2": "badminton",
            "3": "cross country",
            "4": "hockey",
            "5": "rugby",
            "6": "sailing",
            "7": "soccer",
            "8": "surfing",
            "9": "all"
        };
    
        const choice = input.trim();
        if (!sportOptions[choice]) return "Please enter a number 1–9.";
    
        selectedSport = sportOptions[choice];
        waitingForSportType = false;
    
        if (selectedSport === "all") {
            return `Here are the First Team training times:<br>
    - AFL 1st: Tue & Thu Lunch (V1 + Snr/Jnr Oval)<br>
    - Badminton 1st: Tue & Thu 3:15–5:00pm (Gym South)<br>
    - Cross Country: Tue 3:30–5:00pm & Thu 6:45–8:00am (Various)<br>
    - Hockey 1st: Mon & Wed 3:30–5:00pm (UWA Turf)<br>
    - Rugby 1st: Tue & Thu 3:30–5:30pm (St John’s Rugby 1)<br>
    - Sailing Teams: Tue 3:30–5:15pm (Royal Freshwater Bay YC)<br>
    - Soccer 1st: Mon 7–8am (Prep Oval), Tue & Thu 3:30–5:15pm (SJW Soccer 3)`;
        }
    
        waitingForSportYear = true;
        return "What year group are you interested in?<br>1. Year 7<br>2. Year 8<br>3. Year 9<br>4. Year 10<br>5. All-school teams (Firsts/Seconds/etc)";
    }

    if (waitingForSportYear) {
        waitingForSportYear = false;
    
        const sportTimetables = {
            "afl": {
                "1": "7A/B: Wed 3:30–5:00pm (Clarkson Oval)",
                "2": "8A/B: Wed 3:30–5:00pm (Giles Oval)",
                "3": "9A/B: Wed 3:30–5:00pm (Battye Oval)",
                "4": "10A: Tue & Thu 3:30–5:15pm (Clarkson Oval)<br>10B: Tue 3:30–5:15pm (Giles Oval)",
                "5": "1st: Tue & Thu Lunch (V1 + Snr/Jnr Oval)<br>2nd: Thu 3:30–5:15pm (Giles)<br>3rd/4th: Thu 3:30–5:15pm (Clarkson)"
            },
            "badminton": {
                "1": "7ths/8ths: Mon 6:45–8:00am (Gym South)",
                "2": "7ths/8ths: Mon 6:45–8:00am (Gym South)",
                "3": "10C/D: Mon 3:15–4:30pm<br>10A/B: Wed 6:45–8:00am",
                "4": "10A/B: Wed 6:45–8:00am<br>10C/D: Mon 3:15–4:30pm",
                "5": "1st/2nd: Tue & Thu 3:15–5:00pm<br>3rd/4th: Thu 6:45–8:00am<br>5th/6th: Fri 6:45–8:00am"
            },
            "cross country": {
                "1": "Years 7–9: Tue 3:30–4:30pm (Various venues)",
                "2": "Years 7–9: Tue 3:30–4:30pm (Various venues)",
                "3": "Years 7–9: Tue 3:30–4:30pm (Various venues)",
                "4": "1st team: Tue 3:30–5:00pm & Thu 6:45–8:00am",
                "5": "1st team: Tue 3:30–5:00pm & Thu 6:45–8:00am"
            },
            "hockey": {
                "1": "7A/B/C: Tue 3:30–5:00pm (UWA Turf)",
                "2": "8A/B/C: Thu 3:30–4:30pm",
                "3": "9A/B/C: Thu 3:30–4:30pm",
                "4": "N/A",
                "5": "1st: Mon & Wed 3:30–5:00pm<br>2nd: Wed 3:30–5:00pm<br>3rd/4th: Tue 3:30–5:00pm"
            },
            "rugby": {
                "1": "7A: Wed 3:30–5:00pm (Rugby 2)",
                "2": "8/9A & 8/9B: Wed 3:30–5:00pm (Rugby 1)",
                "3": "8/9A & 8/9B: Wed 3:30–5:00pm (Rugby 1)",
                "4": "N/A",
                "5": "1st: Tue & Thu 3:30–5:30pm (Rugby 1)<br>Gym Wed 6:45–7:45am"
            },
            "sailing": {
                "1": "Year 7s: Tue 3:30–5:15pm & Fri 1:30–4:00pm (Royal Freshwater Bay YC)",
                "2": "N/A",
                "3": "N/A",
                "4": "N/A",
                "5": "Teams Racing: Tue 3:30–5:15pm (Royal Freshwater Bay YC)"
            },
            "soccer": {
                "1": "7A–F: Wed 3:30–5:00pm (SJW Soccer 1–3)",
                "2": "8A–D: Tue 3:30–5:00pm (SJW Soccer & Rugby fields)",
                "3": "9A–D: Thu 3:30–5:00pm (SJW Soccer & Rugby fields)",
                "4": "10A–D: Thu 3:30–5:15pm (SJW Soccer 1/4)",
                "5": "1st: Mon 7–8am, Tue & Thu 3:30–5:15pm (SJW Soccer 3)<br>2nd–6th: Tue 3:30–5:15pm"
            },
            "surfing": {
                "1": "Full Squad: TBC",
                "2": "Full Squad: TBC",
                "3": "Full Squad: TBC",
                "4": "Full Squad: TBC",
                "5": "Full Squad: TBC"
            }
        };
    
        const groupMap = { "1": "Year 7", "2": "Year 8", "3": "Year 9", "4": "Year 10", "5": "All-school" };
        const groupChoice = input.trim();
    
        if (!["1", "2", "3", "4", "5"].includes(groupChoice)) return "Please enter a number 1–5 for your year group.";
    
        const result = sportTimetables[selectedSport]?.[groupChoice];
        return result ? `${toTitleCase(selectedSport)} – ${groupMap[groupChoice]} Training:<br>${result}` : "No training data available for that choice.";
    }
    

        
        //██╗███╗░░██╗███████╗░█████╗░  ██████╗░░█████╗░████████╗
        //██║████╗░██║██╔════╝██╔══██╗  ██╔══██╗██╔══██╗╚══██╔══╝
        //██║██╔██╗██║█████╗░░██║░░██║  ██████╦╝██║░░██║░░░██║░░░
        //██║██║╚████║██╔══╝░░██║░░██║  ██╔══██╗██║░░██║░░░██║░░░
        //██║██║░╚███║██║░░░░░╚█████╔╝  ██████╦╝╚█████╔╝░░░██║░░░
        //╚═╝╚═╝░░╚══╝╚═╝░░░░░░╚════╝░  ╚═════╝░░╚════╝░░░░╚═╝░░░
        
        // === STAFF INFO TRIGGER ===


        const locations = [
            "S Block", "Q Block", "M Block", "N Block", "Chapel",
            "F Block", "Music", "L Block", "V Block", "Sport Block", "Refectory", "R Block"
        ];
        
        const numberedLocations = {
            "1": "S Block",
            "2": "Q Block",
            "3": "M Block",
            "4": "N Block",
            "5": "Chapel",
            "6": "F Block",
            "7": "Music",
            "8": "L Block",
            "9": "V Block",
            "10": "Sport Block",
            "11": "Refectory",
            "12": "R Block",
        };
        
        
        const directions = {
            "S Block to Q Block": "Facing opposite direction from Stirling Highway, walk forward on the ground level for around 99m then take a right and go up the stairs, and turn left.",
            "S Block to M Block": "Facing opposite direction from Stirling Highway, walk forward on the ground level for around 214m then take a right and go up the stairs, and turn right.",
            "S Block to N Block": "Face south, walk 360m forward, then turn right and you should see the large three-levelled building that is N Block.",
            "S Block to Chapel": "Face south, walk 773m forward, then turn right, walk 150m and you should see a large building with an antenna on the top.",
            "S Block to F Block": "Face south and walk 562m forward, then turn right past the Sandover on your left to get to F Block",
            "S Block to Music": "Face opposite from Stirling Highway, walk 615m forward, turn right and walk 50m to find the three-storied Music Block (this is old music, new music coming soon!).",
            "S Block to L Block": "Go up the stairs on S Block, then walk 315m - on your right are L6 and L7 and the rest of the classrooms are straight ahead.",
            "S Block to V Block": "On the ground floor of S block, face North-West and walk 184m to find the large building which is sport, and V block is the classes underneath.",
            "S Block to Sport Block": "On the ground floor of S block, face North-West and walk 176m to find the large building which is sport.",
            "S Block to Refectory": "From S Block, head West for approximately 161m to reach Refectory.",
            "S Block to R Block": "Facing opposite direction from Stirling Hwy, walk forward on the ground level for around 146m, take the stairs up.",
            "Q Block to S Block": "Go down the stairs, turn left and walk on the ground level for 99m.",
            "Q Block to M Block": "Walk forward 143m and M block is just in front.",
            "Q Block to N Block": "Go down the stairs, take a left then another left, then another left to face South, then walk 280m to find the three-levelled N Block.",
            "Q Block to Chapel": "Face south, go down the stairs, walk 714m forward, then turn right, walk 150m and you should see the chapel.",
            "Q Block to F Block": "Face south, go down the stairs and walk 491m forward, then turn right past the Sandover on your left to get to F Block",
            "Q Block to Music": "Face opposite from Stirling Highway, walk 571m forward, turn right and walk 50m to find the three-storied Music Block (this is old music, new music coming soon!).",
            "Q Block to L Block": "Walk 255m - on your right are L6 and L7 and the rest of the classrooms are straight ahead.",
            "Q Block to V Block": "Go down the stairs, walk forward 75m, face North-West (turn left) and walk 202m to find the large building which is sport, and V block is the classes underneath.",
            "Q Block to Sport Block": "On the ground floor of S block, face North-West and walk 167m to find the large building which is sport.",
            "Q Block to Refectory": "From Q Block, go down the stairs and walk 115m to reach the Refectory.",
            "Q Block to R Block": "Facing opposite direction from Stirling Hwy, walk forward on the ground level for around 75m, take the stairs up.",
            "M Block to S Block": "From M Block, head East for approximately 214m to reach S Block.",
            "M Block to Q Block": "From M Block, head East for approximately 143m to reach Q Block.",
            "M Block to N Block": "From M Block, head West for approximately 146m to reach N Block.",
            "M Block to Chapel": "From M Block, head West for approximately 571m to reach Chapel.",
            "M Block to F Block": "From M Block, head West for approximately 350m to reach F Block.",
            "M Block to Music": "From M Block, head South-West for approximately 432m to reach Music.",
            "M Block to L Block": "Go up the stairs, walk 113m - on your right are L6 and L7 and the rest of the classrooms are straight ahead.",
            "M Block to V Block": "From M Block, head East for approximately 343m to reach V Block.",
            "M Block to Sport Block": "From M Block, head North-East for approximately 304m to reach Sport Block.",
            "M Block to Refectory": "From M Block, head South-East for approximately 65m to reach Refectory.",
            "M Block to R Block": "From M Block, head East for approximately 70m to reach R Block.",
            "N Block to S Block": "From N Block, head East for approximately 360m to reach S Block.",
            "N Block to Q Block": "From N Block, head East for 280m, then go up the stairs to reach Q Block.",
            "N Block to M Block": "From N Block, head East for approximately 146m to reach M Block.",
            "N Block to Chapel": "From N Block, head West for approximately 447m to reach Chapel.",
            "N Block to F Block": "From N Block, head West for approximately 214m to reach F Block.",
            "N Block to Music": "From N Block, head South-West for approximately 342m to reach Music.",
            "N Block to L Block": "Go up the stairs, walk 91m - on your right are L6 and L7 and the rest of the classrooms are straight ahead.",
            "N Block to V Block": "From N Block, head East for approximately 472m to reach V Block.",
            "N Block to Sport Block": "From N Block, head East for approximately 427m to reach Sport Block.",
            "N Block to Refectory": "From N Block, head South-East for approximately 207m to reach Refectory.",
            "N Block to R Block": "From N Block, head East for approximately 214m to reach R Block.",
            "Chapel to S Block": "From Chapel, head East for approximately 773m to reach S Block.",
            "Chapel to Q Block": "From Chapel, head East for 714m, then go up the stairs to reach Q Block.",
            "Chapel to M Block": "From Chapel, head East for approximately 571m to reach M Block.",
            "Chapel to N Block": "From Chapel, head East for approximately 447m to reach N Block.",
            "Chapel to F Block": "From Chapel, head North-East for approximately 238m to reach F Block.",
            "Chapel to Music": "Exit the Chapel and walk straight ahead past the flagpole; Music is the red brick building on your left.",
            "Chapel to L Block": "Go up the stairs, walk 460m - on your right are L6 and L7 and the rest of the classrooms are straight ahead.",
            "Chapel to V Block": "From Chapel, head East for approximately 913m to reach V Block.",
            "Chapel to Sport Block": "From Chapel, head East for approximately 871m to reach Sport Block.",
            "Chapel to Refectory": "From Chapel, head East for approximately 613m to reach Refectory.",
            "Chapel to R Block": "From Chapel, head East for approximately 640m to reach R Block.",
            "F Block to S Block": "From F Block, head East for approximately 562m to reach S Block.",
            "F Block to Q Block": "From F Block, head East for 491m, then go up the stairs to reach Q Block.",
            "F Block to M Block": "From F Block, head East for approximately 350m to reach M Block.",
            "F Block to N Block": "Head towards stirling Highway until you reach Science.",
            "F Block to Chapel": "From F Block, head South-West for approximately 238m to reach Chapel.",
            "F Block to Music": "From F Block, head South for approximately 199m to reach Music.",
            "F Block to L Block": "Go up the stairs, walk 249m - on your right are L6 and L7 and the rest of the classrooms are straight ahead.",
            "F Block to V Block": "From F Block, head East for approximately 686m to reach V Block.",
            "F Block to Sport Block": "From F Block, head East for approximately 641m to reach Sport Block.",
            "F Block to Refectory": "From F Block, head East for approximately 401m to reach Refectory.",
            "F Block to R Block": "From F Block, head East for approximately 420m to reach R Block.",
            "Music to S Block": "From Music, head East for approximately 615m to reach S Block.",
            "Music to Q Block": "From Music, head North-East for 571m, then go up the stairs to reach Q Block.",
            "Music to M Block": "From Music, head North-East for approximately 432m to reach M Block.",
            "Music to N Block": "From Music, head North-East for approximately 342m to reach N Block.",
            "Music to Chapel": "From Music, head North-West for approximately 194m to reach Chapel.",
            "Music to F Block": "From Music, head North for approximately 199m to reach F Block.",
            "Music to L Block": "Go up the stairs, walk 320m - on your right are L6 and L7 and the rest of the classrooms are straight ahead.",
            "Music to V Block": "From Music, head East for approximately 772m to reach V Block.",
            "Music to Sport Block": "From Music, head North-East for approximately 736m to reach Sport Block.",
            "Music to Refectory": "From Music, head East for approximately 461m to reach Refectory.",
            "Music to R Block": "From Music, head North-East for approximately 495m to reach R Block.",
            "L Block to S Block": "From L Block, head East for approximately 315m to reach S Block.",
            "L Block to Q Block": "From L Block, head East for approximately 255m to reach Q Block.",
            "L Block to M Block": "From L Block, head East for approximately 113m to reach M Block.",
            "L Block to N Block": "From L Block, head North-West for approximately 91m to reach N Block.",
            "L Block to Chapel": "From L Block, head West for approximately 460m to reach Chapel.",
            "L Block to F Block": "From L Block, head West for approximately 249m to reach F Block.",
            "L Block to Music": "From L Block, head South-West for approximately 320m to reach Music.",
            "L Block to V Block": "From L Block, head East for approximately 456m to reach V Block.",
            "L Block to Sport Block": "From L Block, head North-East for approximately 417m to reach Sport Block.",
            "L Block to Refectory": "From L Block, head East for approximately 154m to reach Refectory.",
            "L Block to R Block": "From L Block, head East for approximately 180m to reach R Block.",
            "V Block to S Block": "From V Block, head South-West for approximately 184m to reach S Block.",
            "V Block to Q Block": "From V Block, head West for 202m, then go up the stairs to reach Q Block.",
            "V Block to M Block": "From V Block, head West for approximately 343m to reach M Block.",
            "V Block to N Block": "From V Block, head West for approximately 472m to reach N Block.",
            "V Block to Chapel": "From V Block, head West for approximately 913m to reach Chapel.",
            "V Block to F Block": "From V Block, head West for approximately 686m to reach F Block.",
            "V Block to Music": "From V Block, head West for approximately 772m to reach Music.",
            "V Block to L Block": "Go up the stairs, walk 456m - on your right are L6 and L7 and the rest of the classrooms are straight ahead.",
            "V Block to Sport Block": "From V Block, head North-West for approximately 53m to reach Sport Block.",
            "V Block to Refectory": "From V Block, head South-West for approximately 313m to reach Refectory.",
            "V Block to R Block": "From V Block, head West for approximately 277m to reach R Block.",
            "Sport Block to S Block": "From Sport Block, head South-West for approximately 176m to reach S Block.",
            "Sport Block to Q Block": "From Sport Block, head South-West for 167m, then go up the stairs to reach Q Block.",
            "Sport Block to M Block": "From Sport Block, head South-West for approximately 304m to reach M Block.",
            "Sport Block to N Block": "From Sport Block, head West for approximately 427m to reach N Block.",
            "Sport Block to Chapel": "From Sport Block, head West for approximately 871m to reach Chapel.",
            "Sport Block to F Block": "From Sport Block, head West for approximately 641m to reach F Block.",
            "Sport Block to Music": "From Sport Block, head South-West for approximately 736m to reach Music.",
            "Sport Block to L Block": "Go up the stairs, walk 417m - on your right are L6 and L7 and the rest of the classrooms are straight ahead.",
            "Sport Block to V Block": "From Sport Block, head South-East for approximately 53m to reach V Block.",
            "Sport Block to Refectory": "From Sport Block, head South-West for approximately 282m to reach Refectory.",
            "Sport Block to R Block": "From Sport Block, head South-West for approximately 241m to reach R Block.",
            "Refectory to S Block": "From Refectory, head East for approximately 161m to reach S Block.",
            "Refectory to Q Block": "From the Refectory, go up the stairs and walk 115m to reach Q Block.",
            "Refectory to M Block": "From Refectory, head North-West for approximately 65m to reach M Block.",
            "Refectory to N Block": "From Refectory, head North-West for approximately 207m to reach N Block.",
            "Refectory to Chapel": "From Refectory, head West for approximately 613m to reach Chapel.",
            "Refectory to F Block": "From Refectory, head West for approximately 401m to reach F Block.",
            "Refectory to Music": "From Refectory, head West for approximately 461m to reach Music.",
            "Refectory to L Block": "Go up the stairs, walk 154m - on your right are L6 and L7 and the rest of the classrooms are straight ahead.",
            "Refectory to V Block": "From Refectory, head North-East for approximately 313m to reach V Block.",
            "Refectory to Sport Block": "From Refectory, head North-East for approximately 282m to reach Sport Block.",
            "Refectory to R Block": "From the Refectory, go up the stairs and walk 47m to R Block.",
            "R Block to S Block": "From R Block, head East for approximately 146m to reach S Block.",
            "R Block to Q Block": "From R Block, head East for 75m, then go up the stairs to reach Q Block.",
            "R Block to M Block": "From R Block, head West for approximately 70m to reach M Block.",
            "R Block to N Block": "From R Block, head West for approximately 214m to reach N Block.",
            "R Block to Chapel": "From R Block, head West for approximately 640m to reach Chapel.",
            "R Block to F Block": "From R Block, head West for approximately 420m to reach F Block.",
            "R Block to Music": "From R Block, head South-West for approximately 495m to reach Music.",
            "R Block to L Block": "Go up the stairs, walk 180m - on your right are L6 and L7 and the rest of the classrooms are straight ahead.",
            "R Block to V Block": "From R Block, head East for approximately 277m to reach V Block.",
            "R Block to Sport Block": "From R Block, head North-East for approximately 241m to reach Sport Block.",
            "R Block to Refectory": "From R Block, go down the stairs and walk 47m to the Refectory."
        }
        
        const staffInfo = {
            "1": `Mr Alan Jones – Principal<br>Principal since 2016, with leadership experience across several schools in Hobart and Melbourne. Initiated CCGS’s membership with the Council of International Schools.`,
            "2": `Mr Mark Morrissy – Deputy Principal, Head of Senior School<br>Joined CCGS in 1990. Leads Senior School and supports whole school operations. Former Moyes House Head.`,
            "3": `Dr Steven Males – Head of Preparatory School<br>Over 20 years experience in boys’ education. PhD on one-to-one laptop impact. Previously at Aquinas College.`,
            "4": `Mr Mahendra Vaswani – Deputy Principal, Director of Studies<br>Oversees curriculum, staffing, timetables. Nearly 20 years experience including at Hale and Trinity.`,
            "5": `Ms Lana King – Director of HR & Strategic Projects<br>Leads strategy, appraisal, professional development. Background in private/public sector HR leadership.`,
            "6": `Ms Joanne Wheeler – Director of Communication and Engagement<br>Oversees marketing, PR, alumni, and admissions. 15+ years in corporate communication.`,
            "7": `Mr Jamie Foster – Director of Planning and Co-Curricular<br>Joined in 2005. Background in Japanese, English and Humanities. Involved in Indigenous Program and sport.`,
            "8": `Ms Halina Dorward – Director of Advancement<br>Leads philanthropy and major fundraising. Background in educational fundraising, most recently at UWA.`,
            "9": `Mr Geoffrey Alagoda – Director of Information & Learning Technologies<br>Manages ICT planning and support to enable excellence in learning and teaching.`,
            "10": `Ms Philippa Quigley – Chief Financial Officer<br>Leads finance and facilities. Chartered Accountant with global experience. Holds a Master’s in Finance.`,
            "11": `Reverend Nicholas Russell – School Chaplain<br>Over 25 years in youth ministry. Background in RE and English teaching. Divinity degree with First-Class Honours.`,
            "12": `Mr Noel Patterson – Computer Science Teacher<br>Teaches Computer Science and runs the Duke of Edinburgh and Esports. Also mentors 10DSC1 class — creators of ChurchieBot, best in the world!!`
        };
        
        if (input.includes("info")) {
            waitingForGeneralInfoChoice = true;
            return `Would you like:<br>1. Executive staff member information<br>2. Directions to your classes<br>Please type 1 or 2.`;
        }
    
        if (waitingForGeneralInfoChoice) {
            if (input === "1") {
                waitingForGeneralInfoChoice = false;
                waitingForStaffQuery = true;
                return `Which executive staff member would you like info on?<br>1. Mr Jones<br>2. Mr Morrissy<br>3. Dr Males<br>4. Mr Vaswani<br>5. Ms King<br>6. Ms Wheeler<br>7. Mr Foster<br>8. Ms Dorward<br>9. Mr Alagoda<br>10. Ms Quigley<br>11. Reverend Russell<br>12. Mr Patterson`;
            } else if (input === "2") {
                waitingForGeneralInfoChoice = false;
                waitingForDirections = true;
                directionStep = 1;
                return `Where are you starting from?<br>` + Object.entries(numberedLocations).map(([num, loc]) => `${num}. ${loc}`).join("<br>");
            } else {
                return "Please enter either 1 or 2.";
            }
        }
    
        if (waitingForStaffQuery) {
            const choice = input.trim();
            if (staffInfo[choice]) {
                waitingForStaffQuery = false;
                return staffInfo[choice];
            }
            return "Please enter a number from 1 to 12 to get info on a staff member.";
        }
    
        if (waitingForDirections) {
            if (directionStep === 1) {
                const raw = input.trim().toLowerCase();
                fromLocation = numberedLocations[raw] || locations.find(loc => loc.toLowerCase() === raw);
                if (!fromLocation) {
                    return "That starting location isn't recognised. Try again using a number or a name from this list:<br>" + Object.entries(numberedLocations).map(([num, loc]) => `${num}. ${loc}`).join("<br>");
                }
                directionStep = 2;
                return `Great! Now where are you going?<br>` + Object.entries(numberedLocations).map(([num, loc]) => `${num}. ${loc}`).join("<br>");
            } else if (directionStep === 2) {
                const raw = input.trim().toLowerCase();
                const toLocation = numberedLocations[raw] || locations.find(loc => loc.toLowerCase() === raw);
                if (!toLocation) {
                    return "That destination isn't recognised. Try again using a number or a name from this list:<br>" + Object.entries(numberedLocations).map(([num, loc]) => `${num}. ${loc}`).join("<br>");
                }
        
                waitingForDirections = false;
                directionStep = 0;
        
                const key = `${fromLocation} to ${toLocation}`;
                if (directions[key]) {
                    return directions[key];
                } else {
                    return `I don't have detailed directions from ${fromLocation} to ${toLocation} yet, but head in that general direction and look for signs or ask a staff member if needed.`;
                }
            }
        }
        

    return "Sorry, I didn't catch that - I only have limited functionality. Type 'canteen', 'sport', 'subject' or 'info' for help on those options.";
}

