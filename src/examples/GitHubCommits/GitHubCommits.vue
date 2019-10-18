<template>
  <div id="demo">
    <h1>Latest Commits</h1>
    <template v-for="branch in branches">
      <input
        type="radio"
        :id="branch"
        :value="branch"
        name="branch"
        v-model="currentBranch"
        :key="branch.id"
      />
      <label :for="branch" :key="branch.id">{{ branch }}</label>
    </template>
    <p>racodin/MOM@{{ currentBranch }}</p>
    <ul>
      <li v-for="record in commits" :key="record.id">
        <a :href="record.html_url" target="_blank" class="commit">{{ record.sha.slice(0, 7) }}</a>
        -
        <span class="message">{{ record.commit.message | truncate }}</span>
        <br />by
        <span class="author">
          <a :href="record.author.html_url" target="_blank">{{ record.commit.author.name }}</a>
        </span>
        at
        <span class="date">{{ record.commit.author.date | formatDate }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
var apiURL = "https://api.github.com/repos/racodin/MOM/commits?per_page=3&sha=";

export default {
  name: "GitHubCommits",
  data() {
    return {
      // branches: ["master", "dev"],
      branches: ["master"],
      currentBranch: "master",
      commits: null
    };
  },
  created: function() {
    this.fetchData();
  },
  watch: {
    currentBranch: "fetchData"
  },
  filters: {
    truncate: function(v) {
      var newline = v.indexOf("\n");
      return newline > 0 ? v.slice(0, newline) : v;
    },
    formatDate: function(v) {
      return v.replace(/T|Z/g, " ");
    }
  },
  methods: {
    fetchData: function() {
      var xhr = new XMLHttpRequest();
      var self = this;
      xhr.open("GET", apiURL + self.currentBranch);
      xhr.onload = function() {
        self.commits = JSON.parse(xhr.responseText);
        window.console.log(self.commits[0].html_url);
      };
      xhr.send();
    }
  }
};
</script>

<style lang="scss" scoped>
#demo {
  padding: 0 40px;
  font-family: "Helvetica", Arial, sans-serif;
}
a {
  text-decoration: none;
  color: #f66;
}
li {
  line-height: 1.5em;
  margin-bottom: 20px;
}
.author,
.date {
  font-weight: bold;
}
.author {
  a {
    color: #0366d6;
  }
}
</style>