 <template>
     <div class="Polaris-Labelled__LabelWrapper">
         <div class="Polaris-Label">
             <label id="titleLabel" for="title" class="Polaris-Label__Text Polaris-Label__RequiredIndicator">
                 <span class="Polaris-Text--root Polaris-Text--bodyMd">{{title}}</span>
             </label>
         </div>
     </div>
</template>

<script>
export default {
    name: "Placeholder",
    props:{title:String,text:String}
}
</script>


