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
        "The learner must <b>recall (activation)</b> the card presented to them. They may give a rating of either " + 
        "<i>[EASY]</i>, <i>[HARD]</i>, or <i>[NO RECALL]</i>. The answer here has no bearing on the rest of the tasks but " +
        "will effect the <b>Inter-Study Interval (ISI)</b> between the the current and future recall session. <i>[NO RECALL]</i> " +
        "will result in the card having to be recalled again before the recall session is over.",
    "pipeline1":
        "The learner may or may not <b>listen (demonstration)</b> to the synthesised recording of the recalled " + 
        "word or phrase. The learner has the ability to play it as many times as they wish. ",
    "pipeline2":
        "To complete the process and move on to the next card in the deck, the learner " +
        "must correctly <b>pronounce (application)</b> the card's content (one could imagine a threshold of 'correctness' being used). " +
        "The entire process outlined here will " + 
        "continue until all cards in the deck are recalled. ",
    "theory0":
        "So, <b>what theory should we take into account to help justify putting any effort into " + 
        "actually making our proposed CAPT app?</b> " +
        "Considering the goal of our application is to teach/instruct a learner about " + 
        "the correct pronunciation of an L2 word/phrase, " +
        "we can look to the First Principles of Instruction (FPI) [12] to guide us." +
        "<ol>" +
        "<li><b style='color: #245d7d'><u>Problem centered:</u></b> Give the learner a <b>desire</b> " +
            "to learn by making the tasks relevant and applicable to the real world.</li>" +
        "<br>" +
        "<li><b style='color: #213441'><u>Activation:</u></b> Facilitate learning by making learners <b>apply</b> their " + 
            "existing knowledge.</li>" +
        "<br>" +
        "<li><b style='color: #48774b'><u>Demonstration:</u></b> Give the learners <b>new knowledge</b> in order to " + 
            "promote learning.</li>" +
        "<br>" +
        "<li><b style='color: #649b64'><u>Application:</u></b> Further develop learning through the learner " + 
            "<b>applying this new information.</b></li>" +
        "<br>" +
        "<li><b style='color: #ee484a'><u>Integration:</u> </b> Foster learning by <b>integrating</b> this new knowledge into " + 
            "learners' worlds.</li>" +
        "</ol>",
    "theory1":
        "Being <b>problem centered</b> is not a problem for us as " +
        "a learner will get a lot <b>further</b> when speaking an L2 in the real word " + 
        "if they have better pronunciation. " + 
        "<br>" + 
        "<br>" + 
        "<b>Activation</b> is where our application really shines. We will see this in practice " + 
        "in <i>Task 1 (Recalling a word or phrase)</i> of our app, " + 
        "and to a lesser extent <i>Task 3 (Pronouncing the word or phrase)</i>." +
        "<br>" + 
        "<br>" + 
        "<b>Demonstration</b> is where the thought process behind <i>Task 2</i> came from. " +
        "We are <b>showing</b> a learner the <b>correct</b> pronunciation of a word " +
        "using speech synthesis." +
        "<br>" + 
        "<br>" + 
        "<b>Application</b> will be covered by <i>Task 3</i>, as the user will have " +
        "to <b>apply</b> what they've just learned in order to move on to the next stage. " +
        "This application will come in the form of a learner pronouncing the synthesised " +
        "word, and having an ASR grade their pronunciation as acceptable or not. " +
        "<br>" + 
        "<br>" + 
        "<b>Integration</b> could be achieved by having some sort of " +
        "'stats' screen at the end of each recall session so that a learner " +
        "may reflect on their performance, and where exactly they went wrong.",
    "eval0":
        "We have so far decided that we will be <b>targeting learners</b> who wish to " + 
        "<b>improve their pronunciation</b> of some L2. We have also backed up our desire to " + 
        "start developing the application with <b>evidence of each component in the application working " +
        "within their own respective environments</b>. Finally, we <b>verified</b> that each step in the <b>process</b> " +
        "could potentially help to achieve this goal of training learners to pronounce words/phrases correctly by adhering " + 
        "to the tried-and-tested <b>FPI</b>. " + 
        "Now we need to ask ourselves: <b>how can we reliably develop and evaluate our application?</b>",
    "eval1":
        "<b>Learner performance</b> is one way to measure how 'successful' our app is. " + 
        "Performance may be best measured by comparing the results of our experimental " +
        "group to a control group in a pre- and post-test environment. " +
        "These results would also then be compared to similar CAPT applications' performances. ",
    "eval2":
        "Another important measure of success is just seeing how users " +
        "<b>feel about the app in terms of usability.</b> This can be " + 
        "achieved through questionnaires, interviews, surveys, etc. " +
        "<b>Good theory will only take you so far if </b><i>nobody</i> " + 
        "wants to use the tool you made.",
    "eval3":
        "Once we choose one of these methods of evaluation, we can perform some " +
        "iterative design process, improving as we go, until we reach some desired " +
        "<b>threshold</b> of acceptability for performance and usability. " +
        "With each bit of user feedback that is obtained, the application can be improved. " +
        "This should be done until the acceptability threshold has been met. " +
        "Then, the application can move on to being tested by a larger user to see if the theory is " +
        "holding up.",
    "eval4":
        "After all of the theory, designing, developing, prototyping, iterating, and " +
        "tweaking, we should hopefully have a functional CAPT application that satisfies " + 
        "our expectations!",
};
