<template>
    <div class="Polaris-ButtonGroup">

        <div class="Polaris-ButtonGroup__Item Polaris-ButtonGroup__Item--plain">

            <button @click="duplicateItem"  class="Polaris-Button Polaris-Button--iconOnly Polaris-Button--variantPlain">
                <span class="Polaris-Button__Content">
                    <span class="Polaris-Button__Icon">
                        <span class="Polaris-Icon">
                            <svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true"><path d="M11.25 8.5c-.414 0-.75.336-.75.75v1.25h-1.25c-.414 0-.75.336-.75.75s.336.75.75.75h1.25v1.25c0 .414.336.75.75.75s.75-.336.75-.75v-1.25h1.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-1.25v-1.25c0-.414-.336-.75-.75-.75Z"></path><path fill-rule="evenodd" d="M8.75 16.5c-1.438 0-2.618-1.104-2.74-2.51-1.406-.122-2.51-1.302-2.51-2.74v-5c0-1.519 1.231-2.75 2.75-2.75h5c1.438 0 2.618 1.104 2.74 2.51 1.406.122 2.51 1.302 2.51 2.74v5c0 1.519-1.231 2.75-2.75 2.75h-5Zm0-10.5c-1.519 0-2.75 1.231-2.75 2.75v3.725c-.57-.116-1-.62-1-1.225v-5c0-.69.56-1.25 1.25-1.25h5c.605 0 1.11.43 1.225 1h-3.725Zm0 1.5c-.69 0-1.25.56-1.25 1.25v5c0 .69.56 1.25 1.25 1.25h5c.69 0 1.25-.56 1.25-1.25v-5c0-.69-.56-1.25-1.25-1.25h-5Z"></path></svg>
                        </span>
                    </span>
                </span>
            </button>

        </div>

        <div class="Polaris-ButtonGroup__Item Polaris-ButtonGroup__Item--plain">

            <button @click="editItem"  data-polaris-unstyled="true" class="Polaris-Button Polaris-Button--iconOnly Polaris-Button--variantPlain" >
                <span class="Polaris-Button__Content">
                    <span class="Polaris-Button__Icon">
                        <span class="Polaris-Icon"><svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true"><path fill-rule="evenodd" d="M15.655 4.344a2.695 2.695 0 0 0-3.81 0l-.599.599-.009-.009-1.06 1.06.008.01-5.88 5.88a2.75 2.75 0 0 0-.805 1.944v1.922a.75.75 0 0 0 .75.75h1.922a2.75 2.75 0 0 0 1.944-.806l7.54-7.539a2.695 2.695 0 0 0 0-3.81Zm-4.409 2.72-5.88 5.88a1.25 1.25 0 0 0-.366.884v1.172h1.172c.331 0 .65-.132.883-.366l5.88-5.88-1.689-1.69Zm2.75.629.599-.599a1.195 1.195 0 1 0-1.69-1.689l-.598.599 1.69 1.689Z"></path></svg></span>
                    </span>
                </span>
            </button>

        </div>

        <div class="Polaris-ButtonGroup__Item Polaris-ButtonGroup__Item--plain">

            <button @click="deleteItem"  class="Polaris-Button Polaris-Button--iconOnly Polaris-Button--variantPlain" type="button">
                <span class="Polaris-Button__Content">
                    <span class="Polaris-Button__Icon">
                        <span class="Polaris-Icon"><svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true"><path d="M11.5 8.25a.75.75 0 0 1 .75.75v4.25a.75.75 0 0 1-1.5 0v-4.25a.75.75 0 0 1 .75-.75Z"></path><path d="M9.25 9a.75.75 0 0 0-1.5 0v4.25a.75.75 0 0 0 1.5 0v-4.25Z"></path><path fill-rule="evenodd" d="M7.25 5.25a2.75 2.75 0 0 1 5.5 0h3a.75.75 0 0 1 0 1.5h-.75v5.45c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311c-.642.327-1.482.327-3.162.327h-.4c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311c-.327-.642-.327-1.482-.327-3.162v-5.45h-.75a.75.75 0 0 1 0-1.5h3Zm1.5 0a1.25 1.25 0 1 1 2.5 0h-2.5Zm-2.25 1.5h7v5.45c0 .865-.001 1.423-.036 1.848-.033.408-.09.559-.128.633a1.5 1.5 0 0 1-.655.655c-.074.038-.225.095-.633.128-.425.035-.983.036-1.848.036h-.4c-.865 0-1.423-.001-1.848-.036-.408-.033-.559-.09-.633-.128a1.5 1.5 0 0 1-.656-.655c-.037-.074-.094-.225-.127-.633-.035-.425-.036-.983-.036-1.848v-5.45Z"></path></svg></span>
                    </span>
                </span>
            </button>

        </div>

    </div>
</template>
<script>



export default {
    methods: {
        duplicateItem() {
            this.$emit('duplicate');
        },
        editItem() {
            this.$emit('edit');
        },
        deleteItem() {
            this.$emit('delete');
        },

    }
}
</script>

