import rewire from "rewire"
const copy_files = rewire("./copy-files")
const copyFiles = copy_files.__get__("copyFiles")
const getNormalizedInstruction = copy_files.__get__("getNormalizedInstruction")
const prepareFilePath = copy_files.__get__("prepareFilePath")
// @ponicode
describe("copyFiles", () => {
    test("0", () => {
        let callFunction: any = () => {
            copyFiles("Michael")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            copyFiles("Edmond")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            copyFiles(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            copyFiles("Anas")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            copyFiles("Jean-Philippe")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            copyFiles(-Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getNormalizedInstruction", () => {
    test("0", () => {
        let callFunction: any = () => {
            getNormalizedInstruction()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("prepareFilePath", () => {
    test("0", () => {
        let callFunction: any = () => {
            prepareFilePath(56784)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            prepareFilePath("/tmp/payment_invoice.ogg.cmc")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            prepareFilePath("/etc/ppp/pre_emptive_manager.efif.bcpio")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            prepareFilePath(12)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            prepareFilePath("/net/panel.dvi.crd")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            prepareFilePath(Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
