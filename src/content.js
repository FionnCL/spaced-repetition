export const content = {
    "introduction0":
        "This website will act as a platform for discussing a " +
        "hypothetical <b>spaced repetition</b> based Computer-Assisted Pronunciation Training (CAPT) " + 
        "application, with an emphasis on " +
        "improving a learner's <b>pronunciation</b> of a second language (L2).",
    "introduction1":
        "The <b>goal</b> of the application is to <b>improve a learners ability to pronounce " +
        "words/phrases in an L2</b> by catching any errors in pronunciation that a learner would have otherwise " +
        "initially made. The thought process behind this is that catching such errors as soon as possible will " +
        "will alleviate the problems caused by the <b>fossilization</b> [1] of these mispronunciations " +
        "later in a learners education.",
    "introduction2":
        "<b>Our proposal:</b> the use of " +
        "<b>Speech Synthesis</b> to help <i>teach</i> the correct pronunciation of a word/phrase " +
        "on spaced repetition flashcard, and <b>Automatic Speech Recognition</b>(ASR) to <i>correct</i> " +
        "any errors in said pronunciation.",
    "introduction3":
        "Every <i>recall session</i>, a user will be prompted to remember a set of words or phrases from their L1. " + 
        "Upon correctly remembering each word's L2 counterpart, the user will get the chance to have the " +
        "word synthesized.",
    "introduction4":
        "After each correct recall, a user will be prompted to sound out each word in order to " +
        "move on to the next stage. This would be our a possible source of data for a learner's increase in performance " +
        "when using the application.",
    "introduction5":
        "<b>Spaced repetition</b> and its positive effects for SLA (among many other disciplines) " +
        "have been well established for many years [2, 3, 4, 5].",
    "introduction6":
        "The use of <b>Automatic Speech Recognition</b> in SLA environments has been " +
        "getting more viable in recent years. Research has proven ASRs a capable means " +
        "of pronunciation training [6, 7, 8].",
    "introduction7":
        "<b>Speech synthesis</b> is already used heavily in language learning environments " +
        "and can now rival the quality of human pronunciation [9], depending on the model.",
    "pipeline0":
        "The learner must <b>recall</b> the card presented to them. The may give a rating of either " + 
        "<i>[EASY]</i>, <i>[HARD]</i>, or <i>[NO RECALL]</i>. The answer here has no bearing on the rest of the tasks, but " +
        "will effect the <b>Inter-Study Interval (ISI)</b> between the the current and future recall session. <i>[NO RECALL]</i> " +
        "will result in the card having to be recalled again before the recall session is over.",
    "pipeline1":
        "The learner may or may not <b>listen</b> to the synthesized recording of the recalled " + 
        "word or phrase. The learner has the ability play it as many times as they wish. ",
    "pipeline2":
        "To complete the process and move on to the next card in the deck, the learner " +
        "must correctly <b>pronounce</b> the card's content(one could imagine a threshold of 'correctness' being used). " +
        "The entire process outlined here will " + 
        "continue until all cards in the deck are recalled with. ",
    "eval0":
        "<b>Methodology: </b>" +
        "In order to find out how effective our propsed CAPT app is, " + 
        "we should be measuring the <b>performance</b> of learners before and after using our application, " + 
        "how much <b>time</b> they spend using our application. There are some things we need to watch out for when " + 
        "conduction the overall study however, which we will discuss now",
    "eval1":
        "<b>Setting: </b>" + 
        "spaced repetition applications work best with <b>an educator</b> present [10]. " + 
        "Additionally, a large number of existing studies utilize a teacher-CAPT structure, " + 
        "allowing us to evaluate our application with existing technologies. " + 
        "This is why we would choose to <b>evaluate</b> our application using participants in a classroom environment. ",
    "eval2":
        "An obvious factor that is important to be considered is our application's time <b>efficiency</b>. " +
        "Other than the improved retention of information using spaced repetition study strategies, " + 
        "spaced repetition is very efficient in terms of time spent studing and overall performance [11], and so " + 
        "this is finding that should be evaluated appropriately.",
    "eval3":
        "We can see that in order to evaluate our CAPT application properly there are a few things we need to be wary of. " + 
        "All of the following factors can be evaluated using a control group or data collection from the app itself: " + 

        "<ul><li>The performance of the participants before and after using the app.</li>  " + 
        "<li>The effect an educator being present may have on our findings.</li>" + 
        "<li>The total time efficiency of our application(time over performace)</li>",
};
