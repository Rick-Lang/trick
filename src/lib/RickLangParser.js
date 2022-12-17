// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';
import RickLangListener from './RickLangListener.js';
import RickLangVisitor from './RickLangVisitor.js';


    package src.lib;

const serializedATN = [4,1,54,345,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,1,0,5,0,62,8,0,10,0,12,0,65,9,0,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,79,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,
3,1,3,1,3,3,3,91,8,3,1,3,1,3,1,3,5,3,96,8,3,10,3,12,3,99,9,3,1,3,1,3,1,4,
1,4,1,4,1,4,3,4,107,8,4,1,5,1,5,1,5,1,5,1,5,5,5,114,8,5,10,5,12,5,117,9,
5,1,5,1,5,1,5,1,5,5,5,123,8,5,10,5,12,5,126,9,5,1,5,3,5,129,8,5,1,6,1,6,
1,6,1,6,5,6,135,8,6,10,6,12,6,138,9,6,1,6,1,6,1,7,1,7,1,7,5,7,145,8,7,10,
7,12,7,148,9,7,1,7,1,7,1,8,1,8,1,8,1,8,5,8,156,8,8,10,8,12,8,159,9,8,1,8,
1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,13,1,13,1,14,
1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,
14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,3,14,203,8,14,
1,15,1,15,1,15,5,15,208,8,15,10,15,12,15,211,9,15,1,16,1,16,1,16,1,16,1,
16,1,16,5,16,219,8,16,10,16,12,16,222,9,16,1,17,1,17,1,17,1,17,1,17,1,17,
5,17,230,8,17,10,17,12,17,233,9,17,1,18,1,18,1,18,3,18,238,8,18,1,19,1,19,
1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,
19,1,19,1,19,1,19,1,19,5,19,261,8,19,10,19,12,19,264,9,19,1,20,1,20,1,20,
1,20,1,20,1,20,1,20,1,20,1,20,5,20,275,8,20,10,20,12,20,278,9,20,1,21,1,
21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,5,21,292,8,21,10,21,
12,21,295,9,21,1,22,1,22,1,22,1,22,1,22,1,22,5,22,303,8,22,10,22,12,22,306,
9,22,1,23,1,23,1,23,1,23,3,23,312,8,23,1,24,1,24,1,25,1,25,3,25,318,8,25,
1,26,1,26,1,26,1,26,1,26,1,26,3,26,326,8,26,1,27,1,27,1,27,1,27,1,27,1,27,
3,27,334,8,27,1,28,1,28,1,28,3,28,339,8,28,1,28,1,28,1,29,1,29,1,29,0,6,
32,34,38,40,42,44,30,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,
38,40,42,44,46,48,50,52,54,56,58,0,2,1,0,6,7,2,0,8,9,53,54,364,0,63,1,0,
0,0,2,78,1,0,0,0,4,80,1,0,0,0,6,86,1,0,0,0,8,102,1,0,0,0,10,108,1,0,0,0,
12,130,1,0,0,0,14,141,1,0,0,0,16,151,1,0,0,0,18,162,1,0,0,0,20,164,1,0,0,
0,22,166,1,0,0,0,24,169,1,0,0,0,26,173,1,0,0,0,28,202,1,0,0,0,30,204,1,0,
0,0,32,212,1,0,0,0,34,223,1,0,0,0,36,237,1,0,0,0,38,239,1,0,0,0,40,265,1,
0,0,0,42,279,1,0,0,0,44,296,1,0,0,0,46,311,1,0,0,0,48,313,1,0,0,0,50,317,
1,0,0,0,52,325,1,0,0,0,54,333,1,0,0,0,56,335,1,0,0,0,58,342,1,0,0,0,60,62,
3,2,1,0,61,60,1,0,0,0,62,65,1,0,0,0,63,61,1,0,0,0,63,64,1,0,0,0,64,1,1,0,
0,0,65,63,1,0,0,0,66,79,3,4,2,0,67,79,3,6,3,0,68,79,3,10,5,0,69,79,3,12,
6,0,70,79,3,14,7,0,71,79,3,16,8,0,72,79,3,18,9,0,73,79,3,20,10,0,74,79,3,
22,11,0,75,79,3,24,12,0,76,79,3,26,13,0,77,79,3,8,4,0,78,66,1,0,0,0,78,67,
1,0,0,0,78,68,1,0,0,0,78,69,1,0,0,0,78,70,1,0,0,0,78,71,1,0,0,0,78,72,1,
0,0,0,78,73,1,0,0,0,78,74,1,0,0,0,78,75,1,0,0,0,78,76,1,0,0,0,78,77,1,0,
0,0,79,3,1,0,0,0,80,81,5,24,0,0,81,82,5,54,0,0,82,83,5,25,0,0,83,84,5,1,
0,0,84,85,5,52,0,0,85,5,1,0,0,0,86,87,5,15,0,0,87,88,5,52,0,0,88,90,5,44,
0,0,89,91,3,30,15,0,90,89,1,0,0,0,90,91,1,0,0,0,91,92,1,0,0,0,92,93,5,45,
0,0,93,97,5,46,0,0,94,96,3,2,1,0,95,94,1,0,0,0,96,99,1,0,0,0,97,95,1,0,0,
0,97,98,1,0,0,0,98,100,1,0,0,0,99,97,1,0,0,0,100,101,5,47,0,0,101,7,1,0,
0,0,102,103,5,13,0,0,103,106,5,52,0,0,104,105,5,14,0,0,105,107,3,28,14,0,
106,104,1,0,0,0,106,107,1,0,0,0,107,9,1,0,0,0,108,109,5,17,0,0,109,110,3,
28,14,0,110,111,5,16,0,0,111,115,5,46,0,0,112,114,3,2,1,0,113,112,1,0,0,
0,114,117,1,0,0,0,115,113,1,0,0,0,115,116,1,0,0,0,116,118,1,0,0,0,117,115,
1,0,0,0,118,128,5,47,0,0,119,120,5,18,0,0,120,124,5,46,0,0,121,123,3,2,1,
0,122,121,1,0,0,0,123,126,1,0,0,0,124,122,1,0,0,0,124,125,1,0,0,0,125,127,
1,0,0,0,126,124,1,0,0,0,127,129,5,47,0,0,128,119,1,0,0,0,128,129,1,0,0,0,
129,11,1,0,0,0,130,131,5,21,0,0,131,132,3,28,14,0,132,136,5,46,0,0,133,135,
3,2,1,0,134,133,1,0,0,0,135,138,1,0,0,0,136,134,1,0,0,0,136,137,1,0,0,0,
137,139,1,0,0,0,138,136,1,0,0,0,139,140,5,47,0,0,140,13,1,0,0,0,141,142,
5,22,0,0,142,146,5,46,0,0,143,145,3,2,1,0,144,143,1,0,0,0,145,148,1,0,0,
0,146,144,1,0,0,0,146,147,1,0,0,0,147,149,1,0,0,0,148,146,1,0,0,0,149,150,
5,47,0,0,150,15,1,0,0,0,151,152,5,23,0,0,152,153,5,52,0,0,153,157,5,46,0,
0,154,156,3,2,1,0,155,154,1,0,0,0,156,159,1,0,0,0,157,155,1,0,0,0,157,158,
1,0,0,0,158,160,1,0,0,0,159,157,1,0,0,0,160,161,5,47,0,0,161,17,1,0,0,0,
162,163,5,26,0,0,163,19,1,0,0,0,164,165,5,27,0,0,165,21,1,0,0,0,166,167,
5,28,0,0,167,168,3,28,14,0,168,23,1,0,0,0,169,170,5,19,0,0,170,171,3,28,
14,0,171,172,5,20,0,0,172,25,1,0,0,0,173,174,3,28,14,0,174,27,1,0,0,0,175,
176,3,52,26,0,176,177,5,14,0,0,177,178,3,28,14,0,178,203,1,0,0,0,179,180,
3,52,26,0,180,181,5,2,0,0,181,182,3,28,14,0,182,203,1,0,0,0,183,184,3,52,
26,0,184,185,5,3,0,0,185,186,3,28,14,0,186,203,1,0,0,0,187,188,3,52,26,0,
188,189,5,4,0,0,189,190,3,28,14,0,190,203,1,0,0,0,191,192,3,52,26,0,192,
193,5,5,0,0,193,194,3,28,14,0,194,203,1,0,0,0,195,196,3,52,26,0,196,197,
5,6,0,0,197,203,1,0,0,0,198,199,3,52,26,0,199,200,5,7,0,0,200,203,1,0,0,
0,201,203,3,32,16,0,202,175,1,0,0,0,202,179,1,0,0,0,202,183,1,0,0,0,202,
187,1,0,0,0,202,191,1,0,0,0,202,195,1,0,0,0,202,198,1,0,0,0,202,201,1,0,
0,0,203,29,1,0,0,0,204,209,3,28,14,0,205,206,5,50,0,0,206,208,3,28,14,0,
207,205,1,0,0,0,208,211,1,0,0,0,209,207,1,0,0,0,209,210,1,0,0,0,210,31,1,
0,0,0,211,209,1,0,0,0,212,213,6,16,-1,0,213,214,3,34,17,0,214,220,1,0,0,
0,215,216,10,2,0,0,216,217,5,36,0,0,217,219,3,34,17,0,218,215,1,0,0,0,219,
222,1,0,0,0,220,218,1,0,0,0,220,221,1,0,0,0,221,33,1,0,0,0,222,220,1,0,0,
0,223,224,6,17,-1,0,224,225,3,36,18,0,225,231,1,0,0,0,226,227,10,2,0,0,227,
228,5,35,0,0,228,230,3,36,18,0,229,226,1,0,0,0,230,233,1,0,0,0,231,229,1,
0,0,0,231,232,1,0,0,0,232,35,1,0,0,0,233,231,1,0,0,0,234,235,5,37,0,0,235,
238,3,46,23,0,236,238,3,38,19,0,237,234,1,0,0,0,237,236,1,0,0,0,238,37,1,
0,0,0,239,240,6,19,-1,0,240,241,3,40,20,0,241,262,1,0,0,0,242,243,10,7,0,
0,243,244,5,29,0,0,244,261,3,40,20,0,245,246,10,6,0,0,246,247,5,30,0,0,247,
261,3,40,20,0,248,249,10,5,0,0,249,250,5,31,0,0,250,261,3,40,20,0,251,252,
10,4,0,0,252,253,5,32,0,0,253,261,3,40,20,0,254,255,10,3,0,0,255,256,5,33,
0,0,256,261,3,40,20,0,257,258,10,2,0,0,258,259,5,34,0,0,259,261,3,40,20,
0,260,242,1,0,0,0,260,245,1,0,0,0,260,248,1,0,0,0,260,251,1,0,0,0,260,254,
1,0,0,0,260,257,1,0,0,0,261,264,1,0,0,0,262,260,1,0,0,0,262,263,1,0,0,0,
263,39,1,0,0,0,264,262,1,0,0,0,265,266,6,20,-1,0,266,267,3,42,21,0,267,276,
1,0,0,0,268,269,10,3,0,0,269,270,5,38,0,0,270,275,3,42,21,0,271,272,10,2,
0,0,272,273,5,39,0,0,273,275,3,42,21,0,274,268,1,0,0,0,274,271,1,0,0,0,275,
278,1,0,0,0,276,274,1,0,0,0,276,277,1,0,0,0,277,41,1,0,0,0,278,276,1,0,0,
0,279,280,6,21,-1,0,280,281,3,44,22,0,281,293,1,0,0,0,282,283,10,4,0,0,283,
284,5,40,0,0,284,292,3,46,23,0,285,286,10,3,0,0,286,287,5,41,0,0,287,292,
3,46,23,0,288,289,10,2,0,0,289,290,5,42,0,0,290,292,3,46,23,0,291,282,1,
0,0,0,291,285,1,0,0,0,291,288,1,0,0,0,292,295,1,0,0,0,293,291,1,0,0,0,293,
294,1,0,0,0,294,43,1,0,0,0,295,293,1,0,0,0,296,297,6,22,-1,0,297,298,3,46,
23,0,298,304,1,0,0,0,299,300,10,2,0,0,300,301,5,43,0,0,301,303,3,46,23,0,
302,299,1,0,0,0,303,306,1,0,0,0,304,302,1,0,0,0,304,305,1,0,0,0,305,45,1,
0,0,0,306,304,1,0,0,0,307,308,3,48,24,0,308,309,3,46,23,0,309,312,1,0,0,
0,310,312,3,50,25,0,311,307,1,0,0,0,311,310,1,0,0,0,312,47,1,0,0,0,313,314,
7,0,0,0,314,49,1,0,0,0,315,318,3,54,27,0,316,318,3,52,26,0,317,315,1,0,0,
0,317,316,1,0,0,0,318,51,1,0,0,0,319,326,5,52,0,0,320,321,5,52,0,0,321,322,
5,48,0,0,322,323,3,28,14,0,323,324,5,49,0,0,324,326,1,0,0,0,325,319,1,0,
0,0,325,320,1,0,0,0,326,53,1,0,0,0,327,328,5,44,0,0,328,329,3,28,14,0,329,
330,5,45,0,0,330,334,1,0,0,0,331,334,3,56,28,0,332,334,3,58,29,0,333,327,
1,0,0,0,333,331,1,0,0,0,333,332,1,0,0,0,334,55,1,0,0,0,335,336,5,52,0,0,
336,338,5,44,0,0,337,339,3,30,15,0,338,337,1,0,0,0,338,339,1,0,0,0,339,340,
1,0,0,0,340,341,5,45,0,0,341,57,1,0,0,0,342,343,7,1,0,0,343,59,1,0,0,0,28,
63,78,90,97,106,115,124,128,136,146,157,202,209,220,231,237,260,262,274,
276,291,293,304,311,317,325,333,338];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class RickLangParser extends antlr4.Parser {

    static grammarFileName = "java-escape";
    static literalNames = [ null, "'as'", "'+='", "'-='", "'*='", "'/='", 
                            "'++'", "'--'", "'true'", "'false'", null, null, 
                            null, "'give'", "'up'", "'gonna'", "'then'", 
                            "'andifuaskmehowimfeeling'", "'wheneveryouneedsomebody'", 
                            "'whenigivemy'", "'itwillbecompletely'", "'togetherforeverwith'", 
                            "'thereaintnomistaking'", "'iftheyevergetudown'", 
                            "'weknowthe'", "'andwe'regonnaplayit'", "'desertu'", 
                            "'runaround'", "'ijustwannatelluhowimfeeling'", 
                            "'greaterthan'", "'lessthan'", "'greaterthanequalto'", 
                            "'lessthanequalto'", "'is'", "'aint'", "'and'", 
                            "'or'", "'not'", "'+'", "'-'", "'*'", "'/'", 
                            "'%'", "'^'", "'('", "')'", "'{'", "'}'", "'['", 
                            "']'", "','" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, "WS", "COMMENT", "INLINECOMMENT", 
                             "LET", "ASSIGN", "FUN", "THEN", "IF", "ELSE", 
                             "RETURNOP", "RETURNCL", "WHILE", "TRY", "CATCH", 
                             "IMPORTOP", "IMPORTCL", "BREAK", "CONTINUE", 
                             "PRINT", "GT", "LT", "GE", "LE", "EQ", "NE", 
                             "AND", "OR", "NOT", "PLUS", "MINUS", "MULT", 
                             "DIV", "MOD", "POW", "LPAREN", "RPAREN", "LBRACE", 
                             "RBRACE", "LBRACKET", "RBRACKET", "COMMA", 
                             "QUOTES", "ID", "NUMCONST", "STRINGCONST" ];
    static ruleNames = [ "program", "statement", "importStmt", "funStmt", 
                         "varStmt", "ifStmt", "whileStmt", "tryStmt", "catchStmt", 
                         "breakStmt", "continueStmt", "printStmt", "returnStmt", 
                         "exprStmt", "expr", "exprList", "simpleExpr", "andExpr", 
                         "unaryRelExpr", "relExpr", "addExpr", "multExpr", 
                         "powExpr", "unaryExpr", "unaryOp", "factor", "mutable", 
                         "immutable", "call", "constant" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = RickLangParser.ruleNames;
        this.literalNames = RickLangParser.literalNames;
        this.symbolicNames = RickLangParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 16:
    	    		return this.simpleExpr_sempred(localctx, predIndex);
    	case 17:
    	    		return this.andExpr_sempred(localctx, predIndex);
    	case 19:
    	    		return this.relExpr_sempred(localctx, predIndex);
    	case 20:
    	    		return this.addExpr_sempred(localctx, predIndex);
    	case 21:
    	    		return this.multExpr_sempred(localctx, predIndex);
    	case 22:
    	    		return this.powExpr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    simpleExpr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    andExpr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 1:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    relExpr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 2:
    			return this.precpred(this._ctx, 7);
    		case 3:
    			return this.precpred(this._ctx, 6);
    		case 4:
    			return this.precpred(this._ctx, 5);
    		case 5:
    			return this.precpred(this._ctx, 4);
    		case 6:
    			return this.precpred(this._ctx, 3);
    		case 7:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    addExpr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 8:
    			return this.precpred(this._ctx, 3);
    		case 9:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    multExpr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 10:
    			return this.precpred(this._ctx, 4);
    		case 11:
    			return this.precpred(this._ctx, 3);
    		case 12:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    powExpr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 13:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, RickLangParser.RULE_program);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & 501916608) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & 229505) !== 0)) {
	            this.state = 60;
	            this.statement();
	            this.state = 65;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, RickLangParser.RULE_statement);
	    try {
	        this.state = 78;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 24:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 66;
	            this.importStmt();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 67;
	            this.funStmt();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 68;
	            this.ifStmt();
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 69;
	            this.whileStmt();
	            break;
	        case 22:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 70;
	            this.tryStmt();
	            break;
	        case 23:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 71;
	            this.catchStmt();
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 72;
	            this.breakStmt();
	            break;
	        case 27:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 73;
	            this.continueStmt();
	            break;
	        case 28:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 74;
	            this.printStmt();
	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 75;
	            this.returnStmt();
	            break;
	        case 6:
	        case 7:
	        case 8:
	        case 9:
	        case 37:
	        case 44:
	        case 52:
	        case 53:
	        case 54:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 76;
	            this.exprStmt();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 77;
	            this.varStmt();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	importStmt() {
	    let localctx = new ImportStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, RickLangParser.RULE_importStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        this.match(RickLangParser.IMPORTOP);
	        this.state = 81;
	        this.match(RickLangParser.STRINGCONST);
	        this.state = 82;
	        this.match(RickLangParser.IMPORTCL);
	        this.state = 83;
	        this.match(RickLangParser.T__0);
	        this.state = 84;
	        this.match(RickLangParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funStmt() {
	    let localctx = new FunStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, RickLangParser.RULE_funStmt);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this.match(RickLangParser.FUN);
	        this.state = 87;
	        this.match(RickLangParser.ID);
	        this.state = 88;
	        this.match(RickLangParser.LPAREN);
	        this.state = 90;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 960) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & 229505) !== 0)) {
	            this.state = 89;
	            this.exprList();
	        }

	        this.state = 92;
	        this.match(RickLangParser.RPAREN);
	        this.state = 93;
	        this.match(RickLangParser.LBRACE);
	        this.state = 97;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & 501916608) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & 229505) !== 0)) {
	            this.state = 94;
	            this.statement();
	            this.state = 99;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 100;
	        this.match(RickLangParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	varStmt() {
	    let localctx = new VarStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, RickLangParser.RULE_varStmt);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        this.match(RickLangParser.LET);
	        this.state = 103;
	        this.match(RickLangParser.ID);
	        this.state = 106;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===14) {
	            this.state = 104;
	            this.match(RickLangParser.ASSIGN);
	            this.state = 105;
	            this.expr();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifStmt() {
	    let localctx = new IfStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, RickLangParser.RULE_ifStmt);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 108;
	        this.match(RickLangParser.IF);
	        this.state = 109;
	        this.expr();
	        this.state = 110;
	        this.match(RickLangParser.THEN);
	        this.state = 111;
	        this.match(RickLangParser.LBRACE);
	        this.state = 115;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & 501916608) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & 229505) !== 0)) {
	            this.state = 112;
	            this.statement();
	            this.state = 117;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 118;
	        this.match(RickLangParser.RBRACE);
	        this.state = 128;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===18) {
	            this.state = 119;
	            this.match(RickLangParser.ELSE);
	            this.state = 120;
	            this.match(RickLangParser.LBRACE);
	            this.state = 124;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & 501916608) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & 229505) !== 0)) {
	                this.state = 121;
	                this.statement();
	                this.state = 126;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 127;
	            this.match(RickLangParser.RBRACE);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	whileStmt() {
	    let localctx = new WhileStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, RickLangParser.RULE_whileStmt);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 130;
	        this.match(RickLangParser.WHILE);
	        this.state = 131;
	        this.expr();
	        this.state = 132;
	        this.match(RickLangParser.LBRACE);
	        this.state = 136;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & 501916608) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & 229505) !== 0)) {
	            this.state = 133;
	            this.statement();
	            this.state = 138;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 139;
	        this.match(RickLangParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tryStmt() {
	    let localctx = new TryStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, RickLangParser.RULE_tryStmt);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 141;
	        this.match(RickLangParser.TRY);
	        this.state = 142;
	        this.match(RickLangParser.LBRACE);
	        this.state = 146;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & 501916608) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & 229505) !== 0)) {
	            this.state = 143;
	            this.statement();
	            this.state = 148;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 149;
	        this.match(RickLangParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	catchStmt() {
	    let localctx = new CatchStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, RickLangParser.RULE_catchStmt);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 151;
	        this.match(RickLangParser.CATCH);
	        this.state = 152;
	        this.match(RickLangParser.ID);
	        this.state = 153;
	        this.match(RickLangParser.LBRACE);
	        this.state = 157;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & 501916608) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & 229505) !== 0)) {
	            this.state = 154;
	            this.statement();
	            this.state = 159;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 160;
	        this.match(RickLangParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	breakStmt() {
	    let localctx = new BreakStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, RickLangParser.RULE_breakStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 162;
	        this.match(RickLangParser.BREAK);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	continueStmt() {
	    let localctx = new ContinueStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, RickLangParser.RULE_continueStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 164;
	        this.match(RickLangParser.CONTINUE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	printStmt() {
	    let localctx = new PrintStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, RickLangParser.RULE_printStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 166;
	        this.match(RickLangParser.PRINT);
	        this.state = 167;
	        this.expr();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	returnStmt() {
	    let localctx = new ReturnStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, RickLangParser.RULE_returnStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 169;
	        this.match(RickLangParser.RETURNOP);
	        this.state = 170;
	        this.expr();
	        this.state = 171;
	        this.match(RickLangParser.RETURNCL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	exprStmt() {
	    let localctx = new ExprStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, RickLangParser.RULE_exprStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 173;
	        this.expr();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expr() {
	    let localctx = new ExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, RickLangParser.RULE_expr);
	    try {
	        this.state = 202;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new AssignExprContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 175;
	            localctx.left = this.mutable();
	            this.state = 176;
	            localctx.op = this.match(RickLangParser.ASSIGN);
	            this.state = 177;
	            localctx.right = this.expr();
	            break;

	        case 2:
	            localctx = new AddAssignExprContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 179;
	            localctx.left = this.mutable();
	            this.state = 180;
	            localctx.op = this.match(RickLangParser.T__1);
	            this.state = 181;
	            localctx.right = this.expr();
	            break;

	        case 3:
	            localctx = new SubAssignExprContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 183;
	            localctx.left = this.mutable();
	            this.state = 184;
	            localctx.op = this.match(RickLangParser.T__2);
	            this.state = 185;
	            localctx.right = this.expr();
	            break;

	        case 4:
	            localctx = new MulAssignExprContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 187;
	            localctx.left = this.mutable();
	            this.state = 188;
	            localctx.op = this.match(RickLangParser.T__3);
	            this.state = 189;
	            localctx.right = this.expr();
	            break;

	        case 5:
	            localctx = new DivAssignExprContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 191;
	            localctx.left = this.mutable();
	            this.state = 192;
	            localctx.op = this.match(RickLangParser.T__4);
	            this.state = 193;
	            localctx.right = this.expr();
	            break;

	        case 6:
	            localctx = new IncExprContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 195;
	            localctx.left = this.mutable();
	            this.state = 196;
	            localctx.op = this.match(RickLangParser.T__5);
	            break;

	        case 7:
	            localctx = new DecExprContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 198;
	            localctx.left = this.mutable();
	            this.state = 199;
	            localctx.op = this.match(RickLangParser.T__6);
	            break;

	        case 8:
	            localctx = new SimpleExpr_Context(this, localctx);
	            this.enterOuterAlt(localctx, 8);
	            this.state = 201;
	            this.simpleExpr(0);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	exprList() {
	    let localctx = new ExprListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, RickLangParser.RULE_exprList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 204;
	        this.expr();
	        this.state = 209;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===50) {
	            this.state = 205;
	            this.match(RickLangParser.COMMA);
	            this.state = 206;
	            this.expr();
	            this.state = 211;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	simpleExpr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new SimpleExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 32;
	    this.enterRecursionRule(localctx, 32, RickLangParser.RULE_simpleExpr, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 213;
	        this.andExpr(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 220;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new SimpleExprContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, RickLangParser.RULE_simpleExpr);
	                this.state = 215;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 216;
	                this.match(RickLangParser.OR);
	                this.state = 217;
	                this.andExpr(0); 
	            }
	            this.state = 222;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	andExpr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new AndExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 34;
	    this.enterRecursionRule(localctx, 34, RickLangParser.RULE_andExpr, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 224;
	        this.unaryRelExpr();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 231;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new AndExprContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, RickLangParser.RULE_andExpr);
	                this.state = 226;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 227;
	                this.match(RickLangParser.AND);
	                this.state = 228;
	                this.unaryRelExpr(); 
	            }
	            this.state = 233;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	unaryRelExpr() {
	    let localctx = new UnaryRelExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, RickLangParser.RULE_unaryRelExpr);
	    try {
	        this.state = 237;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 37:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 234;
	            this.match(RickLangParser.NOT);
	            this.state = 235;
	            this.unaryExpr();
	            break;
	        case 6:
	        case 7:
	        case 8:
	        case 9:
	        case 44:
	        case 52:
	        case 53:
	        case 54:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 236;
	            this.relExpr(0);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	relExpr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new RelExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 38;
	    this.enterRecursionRule(localctx, 38, RickLangParser.RULE_relExpr, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 240;
	        this.addExpr(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 262;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 260;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new RelExprContext(this, _parentctx, _parentState);
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, RickLangParser.RULE_relExpr);
	                    this.state = 242;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 243;
	                    localctx.op = this.match(RickLangParser.GT);
	                    this.state = 244;
	                    localctx.right = this.addExpr(0);
	                    break;

	                case 2:
	                    localctx = new RelExprContext(this, _parentctx, _parentState);
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, RickLangParser.RULE_relExpr);
	                    this.state = 245;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 246;
	                    localctx.op = this.match(RickLangParser.LT);
	                    this.state = 247;
	                    localctx.right = this.addExpr(0);
	                    break;

	                case 3:
	                    localctx = new RelExprContext(this, _parentctx, _parentState);
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, RickLangParser.RULE_relExpr);
	                    this.state = 248;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 249;
	                    localctx.op = this.match(RickLangParser.GE);
	                    this.state = 250;
	                    localctx.right = this.addExpr(0);
	                    break;

	                case 4:
	                    localctx = new RelExprContext(this, _parentctx, _parentState);
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, RickLangParser.RULE_relExpr);
	                    this.state = 251;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 252;
	                    localctx.op = this.match(RickLangParser.LE);
	                    this.state = 253;
	                    localctx.right = this.addExpr(0);
	                    break;

	                case 5:
	                    localctx = new RelExprContext(this, _parentctx, _parentState);
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, RickLangParser.RULE_relExpr);
	                    this.state = 254;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 255;
	                    localctx.op = this.match(RickLangParser.EQ);
	                    this.state = 256;
	                    localctx.right = this.addExpr(0);
	                    break;

	                case 6:
	                    localctx = new RelExprContext(this, _parentctx, _parentState);
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, RickLangParser.RULE_relExpr);
	                    this.state = 257;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 258;
	                    localctx.op = this.match(RickLangParser.NE);
	                    this.state = 259;
	                    localctx.right = this.addExpr(0);
	                    break;

	                } 
	            }
	            this.state = 264;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	addExpr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new AddExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 40;
	    this.enterRecursionRule(localctx, 40, RickLangParser.RULE_addExpr, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 266;
	        this.multExpr(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 276;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 274;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new AddExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, RickLangParser.RULE_addExpr);
	                    this.state = 268;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 269;
	                    this.match(RickLangParser.PLUS);
	                    this.state = 270;
	                    this.multExpr(0);
	                    break;

	                case 2:
	                    localctx = new AddExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, RickLangParser.RULE_addExpr);
	                    this.state = 271;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 272;
	                    this.match(RickLangParser.MINUS);
	                    this.state = 273;
	                    this.multExpr(0);
	                    break;

	                } 
	            }
	            this.state = 278;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	multExpr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new MultExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 42;
	    this.enterRecursionRule(localctx, 42, RickLangParser.RULE_multExpr, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 280;
	        this.powExpr(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 293;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 291;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MultExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, RickLangParser.RULE_multExpr);
	                    this.state = 282;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 283;
	                    this.match(RickLangParser.MULT);
	                    this.state = 284;
	                    this.unaryExpr();
	                    break;

	                case 2:
	                    localctx = new MultExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, RickLangParser.RULE_multExpr);
	                    this.state = 285;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 286;
	                    this.match(RickLangParser.DIV);
	                    this.state = 287;
	                    this.unaryExpr();
	                    break;

	                case 3:
	                    localctx = new MultExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, RickLangParser.RULE_multExpr);
	                    this.state = 288;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 289;
	                    this.match(RickLangParser.MOD);
	                    this.state = 290;
	                    this.unaryExpr();
	                    break;

	                } 
	            }
	            this.state = 295;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,21,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	powExpr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new PowExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 44;
	    this.enterRecursionRule(localctx, 44, RickLangParser.RULE_powExpr, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 297;
	        this.unaryExpr();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 304;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,22,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new PowExprContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, RickLangParser.RULE_powExpr);
	                this.state = 299;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 300;
	                this.match(RickLangParser.POW);
	                this.state = 301;
	                this.unaryExpr(); 
	            }
	            this.state = 306;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,22,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	unaryExpr() {
	    let localctx = new UnaryExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, RickLangParser.RULE_unaryExpr);
	    try {
	        this.state = 311;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	        case 7:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 307;
	            this.unaryOp();
	            this.state = 308;
	            this.unaryExpr();
	            break;
	        case 8:
	        case 9:
	        case 44:
	        case 52:
	        case 53:
	        case 54:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 310;
	            this.factor();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	unaryOp() {
	    let localctx = new UnaryOpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, RickLangParser.RULE_unaryOp);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 313;
	        _la = this._input.LA(1);
	        if(!(_la===6 || _la===7)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	factor() {
	    let localctx = new FactorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, RickLangParser.RULE_factor);
	    try {
	        this.state = 317;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 315;
	            this.immutable();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 316;
	            this.mutable();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mutable() {
	    let localctx = new MutableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, RickLangParser.RULE_mutable);
	    try {
	        this.state = 325;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 319;
	            this.match(RickLangParser.ID);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 320;
	            this.match(RickLangParser.ID);
	            this.state = 321;
	            this.match(RickLangParser.LBRACKET);
	            this.state = 322;
	            this.expr();
	            this.state = 323;
	            this.match(RickLangParser.RBRACKET);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	immutable() {
	    let localctx = new ImmutableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, RickLangParser.RULE_immutable);
	    try {
	        this.state = 333;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 44:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 327;
	            this.match(RickLangParser.LPAREN);
	            this.state = 328;
	            this.expr();
	            this.state = 329;
	            this.match(RickLangParser.RPAREN);
	            break;
	        case 52:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 331;
	            this.call();
	            break;
	        case 8:
	        case 9:
	        case 53:
	        case 54:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 332;
	            this.constant();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	call() {
	    let localctx = new CallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, RickLangParser.RULE_call);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 335;
	        this.match(RickLangParser.ID);
	        this.state = 336;
	        this.match(RickLangParser.LPAREN);
	        this.state = 338;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 960) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & 229505) !== 0)) {
	            this.state = 337;
	            this.exprList();
	        }

	        this.state = 340;
	        this.match(RickLangParser.RPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	constant() {
	    let localctx = new ConstantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, RickLangParser.RULE_constant);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 342;
	        _la = this._input.LA(1);
	        if(!(_la===8 || _la===9 || _la===53 || _la===54)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

RickLangParser.EOF = antlr4.Token.EOF;
RickLangParser.T__0 = 1;
RickLangParser.T__1 = 2;
RickLangParser.T__2 = 3;
RickLangParser.T__3 = 4;
RickLangParser.T__4 = 5;
RickLangParser.T__5 = 6;
RickLangParser.T__6 = 7;
RickLangParser.T__7 = 8;
RickLangParser.T__8 = 9;
RickLangParser.WS = 10;
RickLangParser.COMMENT = 11;
RickLangParser.INLINECOMMENT = 12;
RickLangParser.LET = 13;
RickLangParser.ASSIGN = 14;
RickLangParser.FUN = 15;
RickLangParser.THEN = 16;
RickLangParser.IF = 17;
RickLangParser.ELSE = 18;
RickLangParser.RETURNOP = 19;
RickLangParser.RETURNCL = 20;
RickLangParser.WHILE = 21;
RickLangParser.TRY = 22;
RickLangParser.CATCH = 23;
RickLangParser.IMPORTOP = 24;
RickLangParser.IMPORTCL = 25;
RickLangParser.BREAK = 26;
RickLangParser.CONTINUE = 27;
RickLangParser.PRINT = 28;
RickLangParser.GT = 29;
RickLangParser.LT = 30;
RickLangParser.GE = 31;
RickLangParser.LE = 32;
RickLangParser.EQ = 33;
RickLangParser.NE = 34;
RickLangParser.AND = 35;
RickLangParser.OR = 36;
RickLangParser.NOT = 37;
RickLangParser.PLUS = 38;
RickLangParser.MINUS = 39;
RickLangParser.MULT = 40;
RickLangParser.DIV = 41;
RickLangParser.MOD = 42;
RickLangParser.POW = 43;
RickLangParser.LPAREN = 44;
RickLangParser.RPAREN = 45;
RickLangParser.LBRACE = 46;
RickLangParser.RBRACE = 47;
RickLangParser.LBRACKET = 48;
RickLangParser.RBRACKET = 49;
RickLangParser.COMMA = 50;
RickLangParser.QUOTES = 51;
RickLangParser.ID = 52;
RickLangParser.NUMCONST = 53;
RickLangParser.STRINGCONST = 54;

RickLangParser.RULE_program = 0;
RickLangParser.RULE_statement = 1;
RickLangParser.RULE_importStmt = 2;
RickLangParser.RULE_funStmt = 3;
RickLangParser.RULE_varStmt = 4;
RickLangParser.RULE_ifStmt = 5;
RickLangParser.RULE_whileStmt = 6;
RickLangParser.RULE_tryStmt = 7;
RickLangParser.RULE_catchStmt = 8;
RickLangParser.RULE_breakStmt = 9;
RickLangParser.RULE_continueStmt = 10;
RickLangParser.RULE_printStmt = 11;
RickLangParser.RULE_returnStmt = 12;
RickLangParser.RULE_exprStmt = 13;
RickLangParser.RULE_expr = 14;
RickLangParser.RULE_exprList = 15;
RickLangParser.RULE_simpleExpr = 16;
RickLangParser.RULE_andExpr = 17;
RickLangParser.RULE_unaryRelExpr = 18;
RickLangParser.RULE_relExpr = 19;
RickLangParser.RULE_addExpr = 20;
RickLangParser.RULE_multExpr = 21;
RickLangParser.RULE_powExpr = 22;
RickLangParser.RULE_unaryExpr = 23;
RickLangParser.RULE_unaryOp = 24;
RickLangParser.RULE_factor = 25;
RickLangParser.RULE_mutable = 26;
RickLangParser.RULE_immutable = 27;
RickLangParser.RULE_call = 28;
RickLangParser.RULE_constant = 29;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_program;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RickLangVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_statement;
    }

	importStmt() {
	    return this.getTypedRuleContext(ImportStmtContext,0);
	};

	funStmt() {
	    return this.getTypedRuleContext(FunStmtContext,0);
	};

	ifStmt() {
	    return this.getTypedRuleContext(IfStmtContext,0);
	};

	whileStmt() {
	    return this.getTypedRuleContext(WhileStmtContext,0);
	};

	tryStmt() {
	    return this.getTypedRuleContext(TryStmtContext,0);
	};

	catchStmt() {
	    return this.getTypedRuleContext(CatchStmtContext,0);
	};

	breakStmt() {
	    return this.getTypedRuleContext(BreakStmtContext,0);
	};

	continueStmt() {
	    return this.getTypedRuleContext(ContinueStmtContext,0);
	};

	printStmt() {
	    return this.getTypedRuleContext(PrintStmtContext,0);
	};

	returnStmt() {
	    return this.getTypedRuleContext(ReturnStmtContext,0);
	};

	exprStmt() {
	    return this.getTypedRuleContext(ExprStmtContext,0);
	};

	varStmt() {
	    return this.getTypedRuleContext(VarStmtContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RickLangVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImportStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_importStmt;
    }

	IMPORTOP() {
	    return this.getToken(RickLangParser.IMPORTOP, 0);
	};

	STRINGCONST() {
	    return this.getToken(RickLangParser.STRINGCONST, 0);
	};

	IMPORTCL() {
	    return this.getToken(RickLangParser.IMPORTCL, 0);
	};

	ID() {
	    return this.getToken(RickLangParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterImportStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitImportStmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RickLangVisitor ) {
	        return visitor.visitImportStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_funStmt;
    }

	FUN() {
	    return this.getToken(RickLangParser.FUN, 0);
	};

	ID() {
	    return this.getToken(RickLangParser.ID, 0);
	};

	LPAREN() {
	    return this.getToken(RickLangParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(RickLangParser.RPAREN, 0);
	};

	LBRACE() {
	    return this.getToken(RickLangParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(RickLangParser.RBRACE, 0);
	};

	exprList() {
	    return this.getTypedRuleContext(ExprListContext,0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterFunStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitFunStmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RickLangVisitor ) {
	        return visitor.visitFunStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VarStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_varStmt;
    }

	LET() {
	    return this.getToken(RickLangParser.LET, 0);
	};

	ID() {
	    return this.getToken(RickLangParser.ID, 0);
	};

	ASSIGN() {
	    return this.getToken(RickLangParser.ASSIGN, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterVarStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitVarStmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RickLangVisitor ) {
	        return visitor.visitVarStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_ifStmt;
    }

	IF() {
	    return this.getToken(RickLangParser.IF, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	THEN() {
	    return this.getToken(RickLangParser.THEN, 0);
	};

	LBRACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RickLangParser.LBRACE);
	    } else {
	        return this.getToken(RickLangParser.LBRACE, i);
	    }
	};


	RBRACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RickLangParser.RBRACE);
	    } else {
	        return this.getToken(RickLangParser.RBRACE, i);
	    }
	};


	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	ELSE() {
	    return this.getToken(RickLangParser.ELSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterIfStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitIfStmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RickLangVisitor ) {
	        return visitor.visitIfStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WhileStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_whileStmt;
    }

	WHILE() {
	    return this.getToken(RickLangParser.WHILE, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	LBRACE() {
	    return this.getToken(RickLangParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(RickLangParser.RBRACE, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterWhileStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitWhileStmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RickLangVisitor ) {
	        return visitor.visitWhileStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TryStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_tryStmt;
    }

	TRY() {
	    return this.getToken(RickLangParser.TRY, 0);
	};

	LBRACE() {
	    return this.getToken(RickLangParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(RickLangParser.RBRACE, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterTryStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitTryStmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RickLangVisitor ) {
	        return visitor.visitTryStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CatchStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_catchStmt;
    }

	CATCH() {
	    return this.getToken(RickLangParser.CATCH, 0);
	};

	ID() {
	    return this.getToken(RickLangParser.ID, 0);
	};

	LBRACE() {
	    return this.getToken(RickLangParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(RickLangParser.RBRACE, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterCatchStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitCatchStmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RickLangVisitor ) {
	        return visitor.visitCatchStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BreakStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_breakStmt;
    }

	BREAK() {
	    return this.getToken(RickLangParser.BREAK, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterBreakStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitBreakStmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RickLangVisitor ) {
	        return visitor.visitBreakStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ContinueStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_continueStmt;
    }

	CONTINUE() {
	    return this.getToken(RickLangParser.CONTINUE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterContinueStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitContinueStmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RickLangVisitor ) {
	        return visitor.visitContinueStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrintStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_printStmt;
    }

	PRINT() {
	    return this.getToken(RickLangParser.PRINT, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterPrintStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitPrintStmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RickLangVisitor ) {
	        return visitor.visitPrintStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ReturnStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_returnStmt;
    }

	RETURNOP() {
	    return this.getToken(RickLangParser.RETURNOP, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	RETURNCL() {
	    return this.getToken(RickLangParser.RETURNCL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterReturnStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitReturnStmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RickLangVisitor ) {
	        return visitor.visitReturnStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_exprStmt;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterExprStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitExprStmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RickLangVisitor ) {
	        return visitor.visitExprStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_expr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class DecExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // MutableContext;
        this.op = null; // Token;
        super.copyFrom(ctx);
    }

	mutable() {
	    return this.getTypedRuleContext(MutableContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterDecExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitDecExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RickLangVisitor ) {
	        return visitor.visitDecExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RickLangParser.DecExprContext = DecExprContext;

class IncExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // MutableContext;
        this.op = null; // Token;
        super.copyFrom(ctx);
    }

	mutable() {
	    return this.getTypedRuleContext(MutableContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterIncExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitIncExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RickLangVisitor ) {
	        return visitor.visitIncExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RickLangParser.IncExprContext = IncExprContext;

class SimpleExpr_Context extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	simpleExpr() {
	    return this.getTypedRuleContext(SimpleExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterSimpleExpr_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitSimpleExpr_(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RickLangVisitor ) {
	        return visitor.visitSimpleExpr_(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RickLangParser.SimpleExpr_Context = SimpleExpr_Context;

class DivAssignExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // MutableContext;
        this.op = null; // Token;
        this.right = null; // ExprContext;
        super.copyFrom(ctx);
    }

	mutable() {
	    return this.getTypedRuleContext(MutableContext,0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterDivAssignExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitDivAssignExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RickLangVisitor ) {
	        return visitor.visitDivAssignExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RickLangParser.DivAssignExprContext = DivAssignExprContext;

class SubAssignExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // MutableContext;
        this.op = null; // Token;
        this.right = null; // ExprContext;
        super.copyFrom(ctx);
    }

	mutable() {
	    return this.getTypedRuleContext(MutableContext,0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterSubAssignExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitSubAssignExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RickLangVisitor ) {
	        return visitor.visitSubAssignExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RickLangParser.SubAssignExprContext = SubAssignExprContext;

class MulAssignExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // MutableContext;
        this.op = null; // Token;
        this.right = null; // ExprContext;
        super.copyFrom(ctx);
    }

	mutable() {
	    return this.getTypedRuleContext(MutableContext,0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterMulAssignExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitMulAssignExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RickLangVisitor ) {
	        return visitor.visitMulAssignExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RickLangParser.MulAssignExprContext = MulAssignExprContext;

class AssignExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // MutableContext;
        this.op = null; // Token;
        this.right = null; // ExprContext;
        super.copyFrom(ctx);
    }

	mutable() {
	    return this.getTypedRuleContext(MutableContext,0);
	};

	ASSIGN() {
	    return this.getToken(RickLangParser.ASSIGN, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterAssignExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitAssignExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RickLangVisitor ) {
	        return visitor.visitAssignExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RickLangParser.AssignExprContext = AssignExprContext;

class AddAssignExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // MutableContext;
        this.op = null; // Token;
        this.right = null; // ExprContext;
        super.copyFrom(ctx);
    }

	mutable() {
	    return this.getTypedRuleContext(MutableContext,0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterAddAssignExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitAddAssignExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RickLangVisitor ) {
	        return visitor.visitAddAssignExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RickLangParser.AddAssignExprContext = AddAssignExprContext;

class ExprListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_exprList;
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RickLangParser.COMMA);
	    } else {
	        return this.getToken(RickLangParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterExprList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitExprList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RickLangVisitor ) {
	        return visitor.visitExprList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SimpleExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_simpleExpr;
    }

	andExpr() {
	    return this.getTypedRuleContext(AndExprContext,0);
	};

	simpleExpr() {
	    return this.getTypedRuleContext(SimpleExprContext,0);
	};

	OR() {
	    return this.getToken(RickLangParser.OR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterSimpleExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitSimpleExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RickLangVisitor ) {
	        return visitor.visitSimpleExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AndExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_andExpr;
    }

	unaryRelExpr() {
	    return this.getTypedRuleContext(UnaryRelExprContext,0);
	};

	andExpr() {
	    return this.getTypedRuleContext(AndExprContext,0);
	};

	AND() {
	    return this.getToken(RickLangParser.AND, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterAndExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitAndExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RickLangVisitor ) {
	        return visitor.visitAndExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class UnaryRelExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_unaryRelExpr;
    }

	NOT() {
	    return this.getToken(RickLangParser.NOT, 0);
	};

	unaryExpr() {
	    return this.getTypedRuleContext(UnaryExprContext,0);
	};

	relExpr() {
	    return this.getTypedRuleContext(RelExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterUnaryRelExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitUnaryRelExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RickLangVisitor ) {
	        return visitor.visitUnaryRelExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RelExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_relExpr;
        this.left = null; // RelExprContext
        this.op = null; // Token
        this.right = null; // AddExprContext
    }

	addExpr() {
	    return this.getTypedRuleContext(AddExprContext,0);
	};

	relExpr() {
	    return this.getTypedRuleContext(RelExprContext,0);
	};

	GT() {
	    return this.getToken(RickLangParser.GT, 0);
	};

	LT() {
	    return this.getToken(RickLangParser.LT, 0);
	};

	GE() {
	    return this.getToken(RickLangParser.GE, 0);
	};

	LE() {
	    return this.getToken(RickLangParser.LE, 0);
	};

	EQ() {
	    return this.getToken(RickLangParser.EQ, 0);
	};

	NE() {
	    return this.getToken(RickLangParser.NE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterRelExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitRelExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RickLangVisitor ) {
	        return visitor.visitRelExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AddExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_addExpr;
    }

	multExpr() {
	    return this.getTypedRuleContext(MultExprContext,0);
	};

	addExpr() {
	    return this.getTypedRuleContext(AddExprContext,0);
	};

	PLUS() {
	    return this.getToken(RickLangParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(RickLangParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterAddExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitAddExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RickLangVisitor ) {
	        return visitor.visitAddExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MultExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_multExpr;
    }

	powExpr() {
	    return this.getTypedRuleContext(PowExprContext,0);
	};

	multExpr() {
	    return this.getTypedRuleContext(MultExprContext,0);
	};

	MULT() {
	    return this.getToken(RickLangParser.MULT, 0);
	};

	unaryExpr() {
	    return this.getTypedRuleContext(UnaryExprContext,0);
	};

	DIV() {
	    return this.getToken(RickLangParser.DIV, 0);
	};

	MOD() {
	    return this.getToken(RickLangParser.MOD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterMultExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitMultExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RickLangVisitor ) {
	        return visitor.visitMultExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PowExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_powExpr;
    }

	unaryExpr() {
	    return this.getTypedRuleContext(UnaryExprContext,0);
	};

	powExpr() {
	    return this.getTypedRuleContext(PowExprContext,0);
	};

	POW() {
	    return this.getToken(RickLangParser.POW, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterPowExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitPowExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RickLangVisitor ) {
	        return visitor.visitPowExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class UnaryExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_unaryExpr;
    }

	unaryOp() {
	    return this.getTypedRuleContext(UnaryOpContext,0);
	};

	unaryExpr() {
	    return this.getTypedRuleContext(UnaryExprContext,0);
	};

	factor() {
	    return this.getTypedRuleContext(FactorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterUnaryExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitUnaryExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RickLangVisitor ) {
	        return visitor.visitUnaryExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class UnaryOpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_unaryOp;
    }


	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterUnaryOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitUnaryOp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RickLangVisitor ) {
	        return visitor.visitUnaryOp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FactorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_factor;
    }

	immutable() {
	    return this.getTypedRuleContext(ImmutableContext,0);
	};

	mutable() {
	    return this.getTypedRuleContext(MutableContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterFactor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitFactor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RickLangVisitor ) {
	        return visitor.visitFactor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MutableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_mutable;
    }

	ID() {
	    return this.getToken(RickLangParser.ID, 0);
	};

	LBRACKET() {
	    return this.getToken(RickLangParser.LBRACKET, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	RBRACKET() {
	    return this.getToken(RickLangParser.RBRACKET, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterMutable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitMutable(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RickLangVisitor ) {
	        return visitor.visitMutable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImmutableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_immutable;
    }

	LPAREN() {
	    return this.getToken(RickLangParser.LPAREN, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	RPAREN() {
	    return this.getToken(RickLangParser.RPAREN, 0);
	};

	call() {
	    return this.getTypedRuleContext(CallContext,0);
	};

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterImmutable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitImmutable(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RickLangVisitor ) {
	        return visitor.visitImmutable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_call;
    }

	ID() {
	    return this.getToken(RickLangParser.ID, 0);
	};

	LPAREN() {
	    return this.getToken(RickLangParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(RickLangParser.RPAREN, 0);
	};

	exprList() {
	    return this.getTypedRuleContext(ExprListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitCall(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RickLangVisitor ) {
	        return visitor.visitCall(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConstantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_constant;
    }

	NUMCONST() {
	    return this.getToken(RickLangParser.NUMCONST, 0);
	};

	STRINGCONST() {
	    return this.getToken(RickLangParser.STRINGCONST, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterConstant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitConstant(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RickLangVisitor ) {
	        return visitor.visitConstant(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




RickLangParser.ProgramContext = ProgramContext; 
RickLangParser.StatementContext = StatementContext; 
RickLangParser.ImportStmtContext = ImportStmtContext; 
RickLangParser.FunStmtContext = FunStmtContext; 
RickLangParser.VarStmtContext = VarStmtContext; 
RickLangParser.IfStmtContext = IfStmtContext; 
RickLangParser.WhileStmtContext = WhileStmtContext; 
RickLangParser.TryStmtContext = TryStmtContext; 
RickLangParser.CatchStmtContext = CatchStmtContext; 
RickLangParser.BreakStmtContext = BreakStmtContext; 
RickLangParser.ContinueStmtContext = ContinueStmtContext; 
RickLangParser.PrintStmtContext = PrintStmtContext; 
RickLangParser.ReturnStmtContext = ReturnStmtContext; 
RickLangParser.ExprStmtContext = ExprStmtContext; 
RickLangParser.ExprContext = ExprContext; 
RickLangParser.ExprListContext = ExprListContext; 
RickLangParser.SimpleExprContext = SimpleExprContext; 
RickLangParser.AndExprContext = AndExprContext; 
RickLangParser.UnaryRelExprContext = UnaryRelExprContext; 
RickLangParser.RelExprContext = RelExprContext; 
RickLangParser.AddExprContext = AddExprContext; 
RickLangParser.MultExprContext = MultExprContext; 
RickLangParser.PowExprContext = PowExprContext; 
RickLangParser.UnaryExprContext = UnaryExprContext; 
RickLangParser.UnaryOpContext = UnaryOpContext; 
RickLangParser.FactorContext = FactorContext; 
RickLangParser.MutableContext = MutableContext; 
RickLangParser.ImmutableContext = ImmutableContext; 
RickLangParser.CallContext = CallContext; 
RickLangParser.ConstantContext = ConstantContext; 
