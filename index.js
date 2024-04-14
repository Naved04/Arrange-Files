import fs from "fs/promises"
import fsn from "fs"
import path from "path"

let basepath = "C:\\Users\\Admin-PC\\Desktop\\Project\\ArrangeFiles"
let files = await fs.readdir(basepath)

for (const item of files) {
    let items = item.split(".")
    let ext = items[item.split(".").length - 1]

    if (ext != "js" && ext != "json" && items.length > 1) {
        if (fsn.existsSync(path.join(basepath, ext))) {
            fs.rename(item, path.join(basepath, ext, item))
        }
        else {
            fs.mkdir(ext)
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
    }
    console.log(item)
}
