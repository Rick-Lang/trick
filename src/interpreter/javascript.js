import RickLangParser from '../lib/RickLangParser.js';
import RickLangLexer from '../lib/RickLangLexer.js';
import RickLangListener from "../lib/RickLangListener.js";
import * as fs from "fs";
import Antlr4 from "antlr4";

// Have fun implementing it!
// I won't do it, thanks for contributing
class JSListener extends RickLangListener {
    constructor() {
        super();
    }
}

const filePath = process.argv[2];
const input = fs.readFileSync(filePath).toString();
const chars = new Antlr4.InputStream(input);
const lexer = new RickLangLexer(chars);
const tokens = new Antlr4.CommonTokenStream(lexer);
const parser = new RickLangParser(tokens);
parser.addParseListener(new JSListener());
parser.program();