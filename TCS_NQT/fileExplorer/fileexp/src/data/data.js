const explorer = {
    name: "root",
    isFolder: true,
    children: [
        {
            name: "documents",
            isFolder: true,
            children: [
                {
                    name: "file1.txt",
                    isFolder: false
                },
                {
                    name: "file2.txt",
                    isFolder: false
                },
                {
                    name: "subfolder1",
                    isFolder: true,
                    children: [
                        {
                            name: "notes.docx",
                            isFolder: false
                        }
                    ]
                }
            ]
        },
        {
            name: "photos",
            isFolder: true,
            children: [
                {
                    name: "vacation.jpg",
                    isFolder: false
                },
                {
                    name: "subfolder2",
                    isFolder: true,
                    children: [
                        {
                            name: "family.jpg",
                            isFolder: false
                        }
                    ]
                }
            ]
        }
    ]
}

export default explorer;