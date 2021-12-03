<script>
const host = "http://ez-memo.test"
const base = "/api"
export default {
  name: "ApiRouter",
  data() {
    return {
      routes: {
        register: host + base + '/v1/auth/register',
        login: host + '/oauth/token',
        createMemo: host + base + '/v1/memos',
        createUserMemo: host + base + '/v1/user/memos',
        updateMemo: function (id) {
          return host + base + '/v1/memos/' + id
        },
        updateUserMemo: function (id) {
          return host + base + '/v1/user/memos/' + id
        },
        deleteMemo: function (id) {
          return host + base + '/v1/memos/' + id
        },
        deleteUserMemo: function (id) {
          return host + base + '/v1/user/memos/' + id
        },
        viewMemo: host + base + '/v1/memos',
        listMemo: host + base + '/v1/memos/list',
        listUserMemo: host + base + '/v1/user/memos/list'
      }
    }
  }
}
</script>