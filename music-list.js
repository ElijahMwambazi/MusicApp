const jsmediatags = window.jsmediatags

const file = ""

// TODO: Get song metadata
jsmediatags.read(file, {
    onSuccess: function (tag) {
        console.log(tag)
    },
    onError: function (error) {
        console.log(error)
    }
})