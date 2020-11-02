console.log("[1] hello world")
$file.save("/a/helloworld.txt", "z moment", () => {console.log("[2] file should be copied")})
