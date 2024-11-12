export const content = {
    "introduction0":
        "This website will act as a platform for discussing a " +
        "hypothetical <b>spaced repetition</b> based Computer-Assisted Pronunciation Training (CAPT) " + 
        "application, with an emphasis on " +
        "improving a learner's <b>pronunciation</b> of a second language (L2).",
    "introduction1":
        "The <b>goal</b> of the application is to <b>improve a learner's ability to pronounce " +
        "words or phrases in an L2</b> by catching any errors in pronunciation that a learner would have otherwise " +
        "initially made. The thought process behind this is that catching such errors as soon as possible will " +
        "alleviate the problems caused by the <b>fossilisation</b> [1] of these mispronunciations " +
        "later in a learner's education.",
    "introduction2":
        "<b>Our proposal:</b> the use of " +
        "<b>speech synthesis</b> to help <i>teach</i> the correct pronunciation of a word or phrase " +
        "on a spaced repetition flashcard, and <b>Automatic Speech Recognition</b> (ASR) to <i>correct</i> " +
        "any errors in said pronunciation.",
    "introduction3":
        "Every <i>recall session</i>, a user will be prompted to recall a set of words or phrases from their L1. " + 
        "After recalling each word's L2 counterpart, the user will get the chance to have the " +
        "word synthesised so that they can hear how it is meant to be pronounced.",
    "introduction4":
        "After the synthesis task, a user will be prompted to sound out each L2 word before " +
        "moving on to the next stage. This could be a possible source of data to determine a learner's increase in performance " +
        "from using the application.",
    "introduction5":
        "<b>Spaced repetition</b> and its positive effects for SLA (among many other disciplines) " +
        "have been well established for many years [2, 3, 4, 5].",
    "introduction6":
        "The use of <b>Automatic Speech Recognition</b> in SLA environments has been " +
        "getting more viable in recent years. Research has proven ASRs a capable means " +
        "of pronunciation training [6, 7, 8, 9].",
    "introduction7":
        "<b>Speech synthesis</b> is already utilised in language learning environments and " +
        "has shown promising potential for use in the classroom [9].",
    "pipeline0":
        "The learner must <b>recall</b> the card presented to them. They may give a rating of either " + 
        "<i>[EASY]</i>, <i>[HARD]</i>, or <i>[NO RECALL]</i>. The answer here has no bearing on the rest of the tasks but " +
        "will effect the <b>Inter-Study Interval (ISI)</b> between the the current and future recall session. <i>[NO RECALL]</i> " +
        "will result in the card having to be recalled again before the recall session is over.",
    "pipeline1":
        "The learner may or may not <b>listen</b> to the synthesised recording of the recalled " + 
        "word or phrase. The learner has the ability to play it as many times as they wish. ",
    "pipeline2":
        "To complete the process and move on to the next card in the deck, the learner " +
        "must correctly <b>pronounce</b> the card's content (one could imagine a threshold of 'correctness' being used). " +
        "The entire process outlined here will " + 
        "continue until all cards in the deck are recalled with. ",
    "eval0":
        "<b>Methodology: </b>" +
        "In order to find out how effective our proposed CAPT app is, " + 
        "we should be measuring the <b>performance</b> of learners before and after (pre- and post-tests) using our application " + 
        "and how much <b>time</b> they spend using our application. However, there are some things we need " + 
        "to consider.",
    "eval1":
        "<b>Setting: </b>" + 
        "Ideally, we would want to conduct our study on participants that will not be learning the pre- and post-test " + 
        "content from any other sources. However, it is often a lot easier to get " + 
        "participants currently engaged in an active education, unfortunately adding a variable to our findings. " + 
        "Despite this, seeing as our situation is hypothetical, we will say that our sample of participants will " +
        "be <b>solely using our application</b> to assist their pronunciation, and that we will use other similar " + 
        "CAPT studies to compare our findings with.",
    "eval2":
        "An obvious factor that is important to be considered is our application's time <b>efficiency</b>. " +
        "Other than the improved retention of information that using spaced repetition study strategies facilitates, " + 
        "spaced repetition is very efficient in terms of time spent studying and overall performance [11], and so " + 
        "time spent using the application should be measured and compared to the final results.",
    "eval3":
        "We can see that in order to evaluate our CAPT application properly, there are a few things we need to be wary of. " + 
        "All of the following variables can be measured and evaluated using some sort of control group or " + 
        "by collecting data from each participant in the app itself: " + 

        "<ul><li>The performance of the participants before and after using the app (app analytics).</li>  " + 
        "<li>The total time efficiency of our application (app analytics).</li>" +
        "<li>The effect an educator being present may have on our findings (control/existing apps).</li></ul>",
    "eval4":
        "Throughout this discussion, we looked at the benefits and advantages of using such a " + 
        "hypothetical CAPT application, how it would work, and how it would be evaluated. " +
        "You will find all references on the next page. Thank you for taking the time to read this website!",
    "theory0":
        "So, <b>what theory should be take into account when designing our CAPT app?</b> " +
        "Considering the goal of our application is to teach/instruct a learner about " + 
        "the correct pronunciation of an L2 word/phrase, " +
        "we can look to the First Principles of Instruction (FPI) [12] to guide us." +
        "<ol>" +
        "<li><b>Problem centered:</b> Give the learner a <b>desire</b> " +
            "to learn by making the tasks relevant and applicable to the real world.</li>" +
        "<br>" +
        "<li><b>Activation:</b> Facilitate learning by making learners <b>apply</b> their " + 
            "existing knowledge.</li>" +
        "<br>" +
        "<li><b>Demonstration:</b> Give the learners <b>new knowledge</b> in order to " + 
            "promote learning.</li>" +
        "<br>" +
        "<li><b>Application:</b> Further develop learning through the learner " + 
            "<b>applying this new information.</b></li>" +
        "<br>" +
        "<li><b>Integration: </b> Foster learning by <b>integrating</b> this new knowledge into " + 
            "learners' worlds.</li>" +
        "</ol>",
    "theory1":
        "<b>Principle 1</b> is not a huge problem for us as " +
        "a learner will get a lot <b>further</b> speaking an L2 with better pronunciation. " + 
        "Also, depending on the setting, there may already be some element of <b>intrinsic desire</b> " +
        "in the learner to be better at pronouncing an L2 already." +
        "<br>" + 
        "<br>" + 
        "<b>Principle 2</b> is really where our application comes into play. Spaced repetition " +
        "was basically invented to target this principle. We will see this in practice " + 
        "in <i>Task 1 (Recalling a word or phrase)</i> of our app, " + 
        "and to a lesser extent <i>Task 3 (Pronouncing the word or phrase)</i>." +
        "<br>" + 
        "<br>" + 
        "<b>Principle 3</b> is where the thought process behind <i>Task 2</i> came from. " +
        "We are <b>showing</b> a learner the <b>correct</b> pronunciation of a word" +
        "using speech synthesis." +
        "<br>" + 
        "<br>" + 
        "<b>Principle 4</b> will be covered by <i>Task 3</i>, as the user will have " +
        "to <b>apply</b> what they've just learned in order to move on to the next stage. " +
        "This application will come in the form of a learner pronouncing the synthesised " +
        "word, and having an ASR grading their pronunciation as being acceptable or not. " +
        "<br>" + 
        "<br>" + 
        "<b>Principle 5</b> could be accounted for by having some sort of " +
        "'stats' screen at the end of each recall session so that a learner " +
        "may reflect on their performance."
};
