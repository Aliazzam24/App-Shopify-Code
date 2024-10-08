
<template>

    <div class="Polaris-Labelled__HelpText">
        <span class="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--break Polaris-Text--subdued">
            <div>
                <p class="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--subdued">
                    <span>{{title}}</span>
                </p>
            </div>
        </span>
    </div>
</template>
<script>
export default {
    props:{
        title:String,text:String}
}
</script>


