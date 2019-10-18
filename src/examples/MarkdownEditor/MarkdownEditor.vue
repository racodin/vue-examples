<template>
  <div id="editor">
    <textarea :value="input" @input="update"></textarea>
    <div v-html="compiledMarkdown"></div>
  </div>
</template>

<script>
import marked from "marked";
import _ from "lodash";

export default {
  name: "MarkdownEditor",
  data() {
    return {
      input:
        "# 제목 1 \n## 제목 2 \n### 제목 3 \n#### 제목 4 \n##### 제목 5 \n###### 제목 6"
    };
  },
  computed: {
    compiledMarkdown() {
      return marked(this.input, { sanitize: true });
    }
  },
  methods: {
    update: _.debounce(function(e) {
      this.input = e.target.value;
    }, 300)
  }
};
</script>

<style lang="scss" scoped>
#editor {
  height: 100%;
  margin: 0;
  font-family: "Helvetica Neue", Arial, sans-serif;
  color: #333;
}
textarea,
#editor div {
  height: 100%;
  display: inline-block;
  width: 50%;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 20px;
}

textarea {
  border: none;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  border-right: 1px solid #ccc;
  font-size: 14px;
  font-family: "Monaco", courier, monospace;
  padding: 20px;
}
#editor div {
  overflow: hidden;
  overflow-y: auto;
}

code {
  color: #f66;
}
</style>