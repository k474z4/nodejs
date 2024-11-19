import fs from "fs";
import { SaveFile } from "./save-file.use-case";


describe('save-file.use-case', () => {

    test('Should save file with default values', () => {

        const saveFile = new SaveFile();
        const options = {
            fileContent: 'Test save file'
        }

        const result = saveFile.execute(options);

        expect(result).toBeTruthy();
        const checkFile = fs


    });


});