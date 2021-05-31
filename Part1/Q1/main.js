//inputを改行と空白を削除してoutputにコピーするプログラム

const copy_string = function(input){
    console.log(input)

    let output = ""

    const replace = input.replace(/\r?\n/g, '')
    const replace2 = replace.replace(/ /g, "")

    //replace2をoutputにコピー
    output = replace2.slice()
    console.log(output)
}

copy_string(" ")
