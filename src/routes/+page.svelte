<script>
    import LangContainer from "$lib/components/LangContainer.svelte";
    import TypingEffect from "$lib/components/TypingEffect.svelte";
    import SimpleCard from "$lib/components/SimpleCard.svelte";
    import { _ } from 'svelte-i18n';
</script>
    
<section class="flex flex-col md:flex-row pt-12 md:pt-24 pb-8 md:pb-12 px-4 md:px-12 min-h-svh">
    <div class="flex items-center justify-center w-full md:w-1/3 px-4 md:px-6 mb-8 md:mb-0">
        <span class="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-zinc-50 text-center md:text-left">
            {$_('home.title')}
        </span>
    </div>
    
    <div class="flex items-center justify-center flex-grow text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        <div class="flex flex-wrap justify-center items-center gap-1">
            <span class="text-zinc-50">{$_('home.subtitle1')}</span>
            <TypingEffect />
            <span class="text-zinc-50">{$_('home.subtitle2')}</span>
        </div>
    </div>
</section>

<section id="about" class="flex p-4 md:p-6 bg-slate-300 min-h-svh">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-center justify-center px-4 md:px-6">
        <div class="col-span-1 md:col-span-2">
            <span class="text-2xl md:text-3xl lg:text-4xl text-justify">
                {$_('home.intro')}
            </span>
        </div>
        <div class="col-span-1 md:col-span-2 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <SimpleCard 
                iconName = "question-mark"
                cardTitle = {$_('home.card1.title')}
                cardContent = {$_('home.card1.description')}
            />
            <SimpleCard 
                iconName = "bulb"
                cardTitle = {$_('home.card2.title')}
                cardContent = {$_('home.card2.description')}
            />
        </div>
    </div>
</section>

<section id="start" class="flex flex-col justify-center items-center min-h-[60vh] p-4">
    <span class="text-xl md:text-2xl text-zinc-50 mb-4 text-center">{$_('home.subtitle3')}</span>
    <LangContainer />
</section>
