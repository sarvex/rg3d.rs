<template>
    <div>
        <page-title :typed="['Use rust to build games.', 'Deploy to multiple platforms.', 'Enjoy the full featured editor.']" text="Fyrox Game Engine">
            <v-btn class="mt-4" color="primary" depressed  href="https://fyrox-book.github.io/fyrox/beginning/scripting.html">
                <span>Start creating games</span>
            </v-btn>
        </page-title>
        <features-list src="features" />
        <v-container class="text-center pt-16 pb-16 mb-16">
            <h2 class="mt-3 mb-2">FyroxEd</h2>
            <v-row class="mt-5">
                <v-col cols="12" md="6" class="mb-sm-16">
                    <v-img
                        width="80%"
                        max-width="450px"
                        class="rusty-editor__image rusty-editor__image-1"
                        lazy-src="/assets/rusty_editor_ll.jpg"
                        src="/assets/rusty_editor.jpg"
                        :eager="true"
                    />
                    <v-img
                        width="80%"
                        max-width="450px"
                        class="rusty-editor__image rusty-editor__image-2"
                        lazy-src="/assets/rusty_editor_2_ll.jpg"
                        src="/assets/rusty_editor_2.jpg"
                        :eager="true"
                    />
                </v-col>
                <v-col
                    cols="12"
                    md="6"
                    class="mt-md-n16 align-self-center text-justify"
                >
                    <p>
                        What would be a game engine without scene editor eh?
                        Don't worry. For this purpose We provide our own editor - 
                        FyroxEd. It allows you to create your game scenes
                        in no time. Supporting tons of features, you're ready to
                        create games of tomorrow, today.
                    </p>
                </v-col>

                <v-row justify="center">
                    <v-btn 
                        color="primary"
                        href="https://fyrox-book.github.io/fyrox/beginning/editor_overview.html"
                    >
                        <span>Learn How To Use The Editor</span>
                    </v-btn>
                </v-row>        

            </v-row>
        </v-container>
     
        <v-container class="text-center pt-16 pb-16">
            <h2 class="mt-3 mb-2">Examples</h2>
            <p>The engine offers a large set of examples covering most aspects of game development.</p>
            
            <v-row justify="center">
                <v-col cols="12" class="text-center mb-16">
                <v-btn 
                    color="primary"
                    href="/examples.html"
                >
                    See Full List Of Examples
                </v-btn>
                </v-col>
            </v-row>
        </v-container>

        <sponsors />

    </div>
</template>

<script>
import FeaturesList from "../components/FeaturesList";
import Sponsors from "../components/Sponsors";

export default {
    components: { FeaturesList, Sponsors },
};
</script>

<style>
.rusty-editor__image-1 {
    margin-left: auto;
    margin-right: 30%;
}

.rusty-editor__image-2 {
    margin-right: 5%;
    margin-left: auto;
    margin-top: -15%;
    z-index: 2;
}

.typed-element {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
}
</style>
