import fs from "fs";
import { SaveFile } from "./save-file.use-case";


describe('save-file.use-case', () => {

    // Propiedades elevadas para custom options test **JS SCOPE**
    const customOptions = {
        fileContent: 'custom content',
        fileDestination: 'custom-outputs/file-destination',
        fileName: 'custom-table-name',
    }

    const customFilePath = `${customOptions.fileDestination}/${customOptions.fileName}.txt`;

    // Clean up, despues de cada ciclo eliminamos la carpeta utilizada para hacer pruebas y asi evitar tanto archivos basura como falsos positivos
    afterEach(() => {
        // Alternativa a try catch
        const outputFolderExists = fs.existsSync('outputs');
        if (outputFolderExists) fs.rmSync('outputs', { recursive: true });

        const customOutputFolderExists = fs.existsSync(customOptions.fileDestination);
        if (customOutputFolderExists) fs.rmSync(customOptions.fileDestination, { recursive: true });
    });


    test('Should save file with default values', () => {

        const saveFile = new SaveFile();
        const filePath = 'outputs/table.txt'
        const options = {
            fileContent: 'Test save file'
        }

        const result = saveFile.execute(options);
        const fileExists = fs.existsSync(filePath); // Si ya existe, borrar archivo antes de evaluar.
        const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });

        expect(result).toBeTruthy();
        expect(fileExists).toBe(true);
        expect(fileContent).toBe(options.fileContent);

    });


    test('should save file with custom values', () => {


        const saveFile = new SaveFile();


        const result = saveFile.execute(customOptions);
        const fileExists = fs.existsSync(customFilePath);
        const fileContent = fs.readFileSync(customFilePath, { encoding: 'utf-8' });

        expect(result).toBeTruthy();
        expect(fileExists).toBeTruthy();
        expect(fileContent).toBe(customOptions.fileContent);

    });

    test('Should return false if directory could not be created', () => {

        const saveFile = new SaveFile();
        // agrega un spy al metodo mkdirSync del filesystem ** Reemplazamos la funcionalidad con mockimplementation y ejecutamos sus parametros **
        const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(
            () => { throw new Error('This is a custom error message from testing'); }
        );

        const result = saveFile.execute(customOptions);

        expect(result).toBe(false);

        // mockimplementation sobreescribe la funcionalidad y afecta a los siguientes test, para hacer una limpieza restauramos la funcion a su estado original con mockRestore() sobre la variable que contenga la configuracion del spy
        mkdirSpy.mockRestore();

    });

    test('Should return false if file could not be created', () => {

        const saveFile = new SaveFile();
        const writeFileSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(
            () => { throw new Error('This is a custom writting error message from testing'); }
        );

        const result = saveFile.execute({ fileContent: 'lalala' });

        expect(result).toBe(false);

        writeFileSpy.mockRestore();

    });


});