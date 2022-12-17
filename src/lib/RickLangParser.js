// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';
import RickLangListener from './RickLangListener.js';
import RickLangVisitor from './RickLangVisitor.js';

const serializedATN = [4,1,54,324,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,1,0,5,0,64,8,0,10,0,12,0,67,9,0,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,81,8,1,1,2,5,2,84,8,2,10,2,
12,2,87,9,2,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,3,4,99,8,4,1,4,1,4,1,
4,1,4,1,4,1,5,1,5,1,5,1,5,3,5,110,8,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,
6,1,6,1,6,3,6,123,8,6,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,9,1,
9,1,9,1,9,1,9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,12,1,13,1,13,1,13,1,13,
1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,
15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,
3,15,182,8,15,1,16,1,16,1,16,5,16,187,8,16,10,16,12,16,190,9,16,1,17,1,17,
1,17,1,17,1,17,1,17,5,17,198,8,17,10,17,12,17,201,9,17,1,18,1,18,1,18,1,
18,1,18,1,18,5,18,209,8,18,10,18,12,18,212,9,18,1,19,1,19,1,19,3,19,217,
8,19,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,
20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,5,20,240,8,20,10,20,12,20,243,9,20,
1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,5,21,254,8,21,10,21,12,21,257,
9,21,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,5,22,271,
8,22,10,22,12,22,274,9,22,1,23,1,23,1,23,1,23,1,23,1,23,5,23,282,8,23,10,
23,12,23,285,9,23,1,24,1,24,1,24,1,24,3,24,291,8,24,1,25,1,25,1,26,1,26,
3,26,297,8,26,1,27,1,27,1,27,1,27,1,27,1,27,3,27,305,8,27,1,28,1,28,1,28,
1,28,1,28,1,28,3,28,313,8,28,1,29,1,29,1,29,3,29,318,8,29,1,29,1,29,1,30,
1,30,1,30,0,6,34,36,40,42,44,46,31,0,2,4,6,8,10,12,14,16,18,20,22,24,26,
28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,0,2,1,0,6,7,2,0,8,9,53,
54,337,0,65,1,0,0,0,2,80,1,0,0,0,4,85,1,0,0,0,6,88,1,0,0,0,8,94,1,0,0,0,
10,105,1,0,0,0,12,111,1,0,0,0,14,124,1,0,0,0,16,130,1,0,0,0,18,135,1,0,0,
0,20,141,1,0,0,0,22,143,1,0,0,0,24,145,1,0,0,0,26,148,1,0,0,0,28,152,1,0,
0,0,30,181,1,0,0,0,32,183,1,0,0,0,34,191,1,0,0,0,36,202,1,0,0,0,38,216,1,
0,0,0,40,218,1,0,0,0,42,244,1,0,0,0,44,258,1,0,0,0,46,275,1,0,0,0,48,290,
1,0,0,0,50,292,1,0,0,0,52,296,1,0,0,0,54,304,1,0,0,0,56,312,1,0,0,0,58,314,
1,0,0,0,60,321,1,0,0,0,62,64,3,2,1,0,63,62,1,0,0,0,64,67,1,0,0,0,65,63,1,
0,0,0,65,66,1,0,0,0,66,1,1,0,0,0,67,65,1,0,0,0,68,81,3,6,3,0,69,81,3,8,4,
0,70,81,3,12,6,0,71,81,3,14,7,0,72,81,3,16,8,0,73,81,3,18,9,0,74,81,3,20,
10,0,75,81,3,22,11,0,76,81,3,24,12,0,77,81,3,26,13,0,78,81,3,28,14,0,79,
81,3,10,5,0,80,68,1,0,0,0,80,69,1,0,0,0,80,70,1,0,0,0,80,71,1,0,0,0,80,72,
1,0,0,0,80,73,1,0,0,0,80,74,1,0,0,0,80,75,1,0,0,0,80,76,1,0,0,0,80,77,1,
0,0,0,80,78,1,0,0,0,80,79,1,0,0,0,81,3,1,0,0,0,82,84,3,2,1,0,83,82,1,0,0,
0,84,87,1,0,0,0,85,83,1,0,0,0,85,86,1,0,0,0,86,5,1,0,0,0,87,85,1,0,0,0,88,
89,5,24,0,0,89,90,5,54,0,0,90,91,5,25,0,0,91,92,5,1,0,0,92,93,5,52,0,0,93,
7,1,0,0,0,94,95,5,15,0,0,95,96,5,52,0,0,96,98,5,44,0,0,97,99,3,32,16,0,98,
97,1,0,0,0,98,99,1,0,0,0,99,100,1,0,0,0,100,101,5,45,0,0,101,102,5,46,0,
0,102,103,3,4,2,0,103,104,5,47,0,0,104,9,1,0,0,0,105,106,5,13,0,0,106,109,
5,52,0,0,107,108,5,14,0,0,108,110,3,30,15,0,109,107,1,0,0,0,109,110,1,0,
0,0,110,11,1,0,0,0,111,112,5,17,0,0,112,113,3,30,15,0,113,114,5,16,0,0,114,
115,5,46,0,0,115,116,3,4,2,0,116,122,5,47,0,0,117,118,5,18,0,0,118,119,5,
46,0,0,119,120,3,4,2,0,120,121,5,47,0,0,121,123,1,0,0,0,122,117,1,0,0,0,
122,123,1,0,0,0,123,13,1,0,0,0,124,125,5,21,0,0,125,126,3,30,15,0,126,127,
5,46,0,0,127,128,3,4,2,0,128,129,5,47,0,0,129,15,1,0,0,0,130,131,5,22,0,
0,131,132,5,46,0,0,132,133,3,4,2,0,133,134,5,47,0,0,134,17,1,0,0,0,135,136,
5,23,0,0,136,137,5,52,0,0,137,138,5,46,0,0,138,139,3,4,2,0,139,140,5,47,
0,0,140,19,1,0,0,0,141,142,5,26,0,0,142,21,1,0,0,0,143,144,5,27,0,0,144,
23,1,0,0,0,145,146,5,28,0,0,146,147,3,30,15,0,147,25,1,0,0,0,148,149,5,19,
0,0,149,150,3,30,15,0,150,151,5,20,0,0,151,27,1,0,0,0,152,153,3,30,15,0,
153,29,1,0,0,0,154,155,3,54,27,0,155,156,5,14,0,0,156,157,3,30,15,0,157,
182,1,0,0,0,158,159,3,54,27,0,159,160,5,2,0,0,160,161,3,30,15,0,161,182,
1,0,0,0,162,163,3,54,27,0,163,164,5,3,0,0,164,165,3,30,15,0,165,182,1,0,
0,0,166,167,3,54,27,0,167,168,5,4,0,0,168,169,3,30,15,0,169,182,1,0,0,0,
170,171,3,54,27,0,171,172,5,5,0,0,172,173,3,30,15,0,173,182,1,0,0,0,174,
175,3,54,27,0,175,176,5,6,0,0,176,182,1,0,0,0,177,178,3,54,27,0,178,179,
5,7,0,0,179,182,1,0,0,0,180,182,3,34,17,0,181,154,1,0,0,0,181,158,1,0,0,
0,181,162,1,0,0,0,181,166,1,0,0,0,181,170,1,0,0,0,181,174,1,0,0,0,181,177,
1,0,0,0,181,180,1,0,0,0,182,31,1,0,0,0,183,188,3,30,15,0,184,185,5,50,0,
0,185,187,3,30,15,0,186,184,1,0,0,0,187,190,1,0,0,0,188,186,1,0,0,0,188,
189,1,0,0,0,189,33,1,0,0,0,190,188,1,0,0,0,191,192,6,17,-1,0,192,193,3,36,
18,0,193,199,1,0,0,0,194,195,10,2,0,0,195,196,5,36,0,0,196,198,3,36,18,0,
197,194,1,0,0,0,198,201,1,0,0,0,199,197,1,0,0,0,199,200,1,0,0,0,200,35,1,
0,0,0,201,199,1,0,0,0,202,203,6,18,-1,0,203,204,3,38,19,0,204,210,1,0,0,
0,205,206,10,2,0,0,206,207,5,35,0,0,207,209,3,38,19,0,208,205,1,0,0,0,209,
212,1,0,0,0,210,208,1,0,0,0,210,211,1,0,0,0,211,37,1,0,0,0,212,210,1,0,0,
0,213,214,5,37,0,0,214,217,3,48,24,0,215,217,3,40,20,0,216,213,1,0,0,0,216,
215,1,0,0,0,217,39,1,0,0,0,218,219,6,20,-1,0,219,220,3,42,21,0,220,241,1,
0,0,0,221,222,10,7,0,0,222,223,5,29,0,0,223,240,3,42,21,0,224,225,10,6,0,
0,225,226,5,30,0,0,226,240,3,42,21,0,227,228,10,5,0,0,228,229,5,31,0,0,229,
240,3,42,21,0,230,231,10,4,0,0,231,232,5,32,0,0,232,240,3,42,21,0,233,234,
10,3,0,0,234,235,5,33,0,0,235,240,3,42,21,0,236,237,10,2,0,0,237,238,5,34,
0,0,238,240,3,42,21,0,239,221,1,0,0,0,239,224,1,0,0,0,239,227,1,0,0,0,239,
230,1,0,0,0,239,233,1,0,0,0,239,236,1,0,0,0,240,243,1,0,0,0,241,239,1,0,
0,0,241,242,1,0,0,0,242,41,1,0,0,0,243,241,1,0,0,0,244,245,6,21,-1,0,245,
246,3,44,22,0,246,255,1,0,0,0,247,248,10,3,0,0,248,249,5,38,0,0,249,254,
3,44,22,0,250,251,10,2,0,0,251,252,5,39,0,0,252,254,3,44,22,0,253,247,1,
0,0,0,253,250,1,0,0,0,254,257,1,0,0,0,255,253,1,0,0,0,255,256,1,0,0,0,256,
43,1,0,0,0,257,255,1,0,0,0,258,259,6,22,-1,0,259,260,3,46,23,0,260,272,1,
0,0,0,261,262,10,4,0,0,262,263,5,40,0,0,263,271,3,48,24,0,264,265,10,3,0,
0,265,266,5,41,0,0,266,271,3,48,24,0,267,268,10,2,0,0,268,269,5,42,0,0,269,
271,3,48,24,0,270,261,1,0,0,0,270,264,1,0,0,0,270,267,1,0,0,0,271,274,1,
0,0,0,272,270,1,0,0,0,272,273,1,0,0,0,273,45,1,0,0,0,274,272,1,0,0,0,275,
276,6,23,-1,0,276,277,3,48,24,0,277,283,1,0,0,0,278,279,10,2,0,0,279,280,
5,43,0,0,280,282,3,48,24,0,281,278,1,0,0,0,282,285,1,0,0,0,283,281,1,0,0,
0,283,284,1,0,0,0,284,47,1,0,0,0,285,283,1,0,0,0,286,287,3,50,25,0,287,288,
3,48,24,0,288,291,1,0,0,0,289,291,3,52,26,0,290,286,1,0,0,0,290,289,1,0,
0,0,291,49,1,0,0,0,292,293,7,0,0,0,293,51,1,0,0,0,294,297,3,56,28,0,295,
297,3,54,27,0,296,294,1,0,0,0,296,295,1,0,0,0,297,53,1,0,0,0,298,305,5,52,
0,0,299,300,5,52,0,0,300,301,5,48,0,0,301,302,3,30,15,0,302,303,5,49,0,0,
303,305,1,0,0,0,304,298,1,0,0,0,304,299,1,0,0,0,305,55,1,0,0,0,306,307,5,
44,0,0,307,308,3,30,15,0,308,309,5,45,0,0,309,313,1,0,0,0,310,313,3,58,29,
0,311,313,3,60,30,0,312,306,1,0,0,0,312,310,1,0,0,0,312,311,1,0,0,0,313,
57,1,0,0,0,314,315,5,52,0,0,315,317,5,44,0,0,316,318,3,32,16,0,317,316,1,
0,0,0,317,318,1,0,0,0,318,319,1,0,0,0,319,320,5,45,0,0,320,59,1,0,0,0,321,
322,7,1,0,0,322,61,1,0,0,0,23,65,80,85,98,109,122,181,188,199,210,216,239,
241,253,255,270,272,283,290,296,304,312,317];


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
    static ruleNames = [ "program", "statement", "stmtList", "importStmt", 
                         "funStmt", "varStmt", "ifStmt", "whileStmt", "tryStmt", 
                         "catchStmt", "breakStmt", "continueStmt", "printStmt", 
                         "returnStmt", "exprStmt", "expr", "exprList", "simpleExpr", 
                         "andExpr", "unaryRelExpr", "relExpr", "addExpr", 
                         "multExpr", "powExpr", "unaryExpr", "unaryOp", 
                         "factor", "mutable", "immutable", "call", "constant" ];

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
    	case 17:
    	    		return this.simpleExpr_sempred(localctx, predIndex);
    	case 18:
    	    		return this.andExpr_sempred(localctx, predIndex);
    	case 20:
    	    		return this.relExpr_sempred(localctx, predIndex);
    	case 21:
    	    		return this.addExpr_sempred(localctx, predIndex);
    	case 22:
    	    		return this.multExpr_sempred(localctx, predIndex);
    	case 23:
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
	        this.state = 65;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & 501916608) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & 229505) !== 0)) {
	            this.state = 62;
	            this.statement();
	            this.state = 67;
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
	        this.state = 80;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 24:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 68;
	            this.importStmt();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 69;
	            this.funStmt();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 70;
	            this.ifStmt();
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 71;
	            this.whileStmt();
	            break;
	        case 22:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 72;
	            this.tryStmt();
	            break;
	        case 23:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 73;
	            this.catchStmt();
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 74;
	            this.breakStmt();
	            break;
	        case 27:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 75;
	            this.continueStmt();
	            break;
	        case 28:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 76;
	            this.printStmt();
	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 77;
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
	            this.state = 78;
	            this.exprStmt();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 79;
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



	stmtList() {
	    let localctx = new StmtListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, RickLangParser.RULE_stmtList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & 501916608) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & 229505) !== 0)) {
	            this.state = 82;
	            this.statement();
	            this.state = 87;
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



	importStmt() {
	    let localctx = new ImportStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, RickLangParser.RULE_importStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 88;
	        this.match(RickLangParser.IMPORTOP);
	        this.state = 89;
	        localctx.fName = this.match(RickLangParser.STRINGCONST);
	        this.state = 90;
	        this.match(RickLangParser.IMPORTCL);
	        this.state = 91;
	        this.match(RickLangParser.T__0);
	        this.state = 92;
	        localctx.fAlias = this.match(RickLangParser.ID);
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
	    this.enterRule(localctx, 8, RickLangParser.RULE_funStmt);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        this.match(RickLangParser.FUN);
	        this.state = 95;
	        localctx.funName = this.match(RickLangParser.ID);
	        this.state = 96;
	        this.match(RickLangParser.LPAREN);
	        this.state = 98;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 960) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & 229505) !== 0)) {
	            this.state = 97;
	            localctx.funParams = this.exprList();
	        }

	        this.state = 100;
	        this.match(RickLangParser.RPAREN);
	        this.state = 101;
	        this.match(RickLangParser.LBRACE);
	        this.state = 102;
	        localctx.funBlock = this.stmtList();
	        this.state = 103;
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
	    this.enterRule(localctx, 10, RickLangParser.RULE_varStmt);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 105;
	        this.match(RickLangParser.LET);
	        this.state = 106;
	        localctx.varName = this.match(RickLangParser.ID);
	        this.state = 109;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===14) {
	            this.state = 107;
	            this.match(RickLangParser.ASSIGN);
	            this.state = 108;
	            localctx.varVal = this.expr();
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
	    this.enterRule(localctx, 12, RickLangParser.RULE_ifStmt);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        this.match(RickLangParser.IF);
	        this.state = 112;
	        localctx.ifCondition = this.expr();
	        this.state = 113;
	        this.match(RickLangParser.THEN);
	        this.state = 114;
	        this.match(RickLangParser.LBRACE);
	        this.state = 115;
	        localctx.ifBlock = this.stmtList();
	        this.state = 116;
	        this.match(RickLangParser.RBRACE);
	        this.state = 122;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===18) {
	            this.state = 117;
	            this.match(RickLangParser.ELSE);
	            this.state = 118;
	            this.match(RickLangParser.LBRACE);
	            this.state = 119;
	            localctx.elseBlock = this.stmtList();
	            this.state = 120;
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
	    this.enterRule(localctx, 14, RickLangParser.RULE_whileStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 124;
	        this.match(RickLangParser.WHILE);
	        this.state = 125;
	        localctx.whileCondition = this.expr();
	        this.state = 126;
	        this.match(RickLangParser.LBRACE);
	        this.state = 127;
	        localctx.whileBlock = this.stmtList();
	        this.state = 128;
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
	    this.enterRule(localctx, 16, RickLangParser.RULE_tryStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 130;
	        this.match(RickLangParser.TRY);
	        this.state = 131;
	        this.match(RickLangParser.LBRACE);
	        this.state = 132;
	        localctx.tryBlock = this.stmtList();
	        this.state = 133;
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
	    this.enterRule(localctx, 18, RickLangParser.RULE_catchStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 135;
	        this.match(RickLangParser.CATCH);
	        this.state = 136;
	        localctx.errName = this.match(RickLangParser.ID);
	        this.state = 137;
	        this.match(RickLangParser.LBRACE);
	        this.state = 138;
	        localctx.catchBlock = this.stmtList();
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



	breakStmt() {
	    let localctx = new BreakStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, RickLangParser.RULE_breakStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 141;
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
	    this.enterRule(localctx, 22, RickLangParser.RULE_continueStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 143;
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
	    this.enterRule(localctx, 24, RickLangParser.RULE_printStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 145;
	        this.match(RickLangParser.PRINT);
	        this.state = 146;
	        localctx.printVal = this.expr();
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
	    this.enterRule(localctx, 26, RickLangParser.RULE_returnStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 148;
	        this.match(RickLangParser.RETURNOP);
	        this.state = 149;
	        localctx.returnVal = this.expr();
	        this.state = 150;
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
	    this.enterRule(localctx, 28, RickLangParser.RULE_exprStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 152;
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
	    this.enterRule(localctx, 30, RickLangParser.RULE_expr);
	    try {
	        this.state = 181;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 154;
	            localctx.left = this.mutable();
	            this.state = 155;
	            localctx.op = this.match(RickLangParser.ASSIGN);
	            this.state = 156;
	            localctx.right = this.expr();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 158;
	            localctx.left = this.mutable();
	            this.state = 159;
	            localctx.op = this.match(RickLangParser.T__1);
	            this.state = 160;
	            localctx.right = this.expr();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 162;
	            localctx.left = this.mutable();
	            this.state = 163;
	            localctx.op = this.match(RickLangParser.T__2);
	            this.state = 164;
	            localctx.right = this.expr();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 166;
	            localctx.left = this.mutable();
	            this.state = 167;
	            localctx.op = this.match(RickLangParser.T__3);
	            this.state = 168;
	            localctx.right = this.expr();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 170;
	            localctx.left = this.mutable();
	            this.state = 171;
	            localctx.op = this.match(RickLangParser.T__4);
	            this.state = 172;
	            localctx.right = this.expr();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 174;
	            localctx.left = this.mutable();
	            this.state = 175;
	            localctx.op = this.match(RickLangParser.T__5);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 177;
	            localctx.left = this.mutable();
	            this.state = 178;
	            localctx.op = this.match(RickLangParser.T__6);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 180;
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
	    this.enterRule(localctx, 32, RickLangParser.RULE_exprList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 183;
	        this.expr();
	        this.state = 188;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===50) {
	            this.state = 184;
	            this.match(RickLangParser.COMMA);
	            this.state = 185;
	            this.expr();
	            this.state = 190;
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
	    const _startState = 34;
	    this.enterRecursionRule(localctx, 34, RickLangParser.RULE_simpleExpr, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 192;
	        this.andExpr(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 199;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new SimpleExprContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, RickLangParser.RULE_simpleExpr);
	                this.state = 194;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 195;
	                this.match(RickLangParser.OR);
	                this.state = 196;
	                this.andExpr(0); 
	            }
	            this.state = 201;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
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
	    const _startState = 36;
	    this.enterRecursionRule(localctx, 36, RickLangParser.RULE_andExpr, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 203;
	        this.unaryRelExpr();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 210;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new AndExprContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, RickLangParser.RULE_andExpr);
	                this.state = 205;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 206;
	                this.match(RickLangParser.AND);
	                this.state = 207;
	                this.unaryRelExpr(); 
	            }
	            this.state = 212;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
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
	    this.enterRule(localctx, 38, RickLangParser.RULE_unaryRelExpr);
	    try {
	        this.state = 216;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 37:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 213;
	            this.match(RickLangParser.NOT);
	            this.state = 214;
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
	            this.state = 215;
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
	    const _startState = 40;
	    this.enterRecursionRule(localctx, 40, RickLangParser.RULE_relExpr, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 219;
	        this.addExpr(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 241;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 239;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new RelExprContext(this, _parentctx, _parentState);
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, RickLangParser.RULE_relExpr);
	                    this.state = 221;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 222;
	                    localctx.op = this.match(RickLangParser.GT);
	                    this.state = 223;
	                    localctx.right = this.addExpr(0);
	                    break;

	                case 2:
	                    localctx = new RelExprContext(this, _parentctx, _parentState);
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, RickLangParser.RULE_relExpr);
	                    this.state = 224;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 225;
	                    localctx.op = this.match(RickLangParser.LT);
	                    this.state = 226;
	                    localctx.right = this.addExpr(0);
	                    break;

	                case 3:
	                    localctx = new RelExprContext(this, _parentctx, _parentState);
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, RickLangParser.RULE_relExpr);
	                    this.state = 227;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 228;
	                    localctx.op = this.match(RickLangParser.GE);
	                    this.state = 229;
	                    localctx.right = this.addExpr(0);
	                    break;

	                case 4:
	                    localctx = new RelExprContext(this, _parentctx, _parentState);
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, RickLangParser.RULE_relExpr);
	                    this.state = 230;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 231;
	                    localctx.op = this.match(RickLangParser.LE);
	                    this.state = 232;
	                    localctx.right = this.addExpr(0);
	                    break;

	                case 5:
	                    localctx = new RelExprContext(this, _parentctx, _parentState);
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, RickLangParser.RULE_relExpr);
	                    this.state = 233;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 234;
	                    localctx.op = this.match(RickLangParser.EQ);
	                    this.state = 235;
	                    localctx.right = this.addExpr(0);
	                    break;

	                case 6:
	                    localctx = new RelExprContext(this, _parentctx, _parentState);
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, RickLangParser.RULE_relExpr);
	                    this.state = 236;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 237;
	                    localctx.op = this.match(RickLangParser.NE);
	                    this.state = 238;
	                    localctx.right = this.addExpr(0);
	                    break;

	                } 
	            }
	            this.state = 243;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
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
	    const _startState = 42;
	    this.enterRecursionRule(localctx, 42, RickLangParser.RULE_addExpr, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 245;
	        this.multExpr(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 255;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 253;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new AddExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, RickLangParser.RULE_addExpr);
	                    this.state = 247;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 248;
	                    this.match(RickLangParser.PLUS);
	                    this.state = 249;
	                    this.multExpr(0);
	                    break;

	                case 2:
	                    localctx = new AddExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, RickLangParser.RULE_addExpr);
	                    this.state = 250;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 251;
	                    this.match(RickLangParser.MINUS);
	                    this.state = 252;
	                    this.multExpr(0);
	                    break;

	                } 
	            }
	            this.state = 257;
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


	multExpr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new MultExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 44;
	    this.enterRecursionRule(localctx, 44, RickLangParser.RULE_multExpr, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 259;
	        this.powExpr(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 272;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 270;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MultExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, RickLangParser.RULE_multExpr);
	                    this.state = 261;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 262;
	                    this.match(RickLangParser.MULT);
	                    this.state = 263;
	                    this.unaryExpr();
	                    break;

	                case 2:
	                    localctx = new MultExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, RickLangParser.RULE_multExpr);
	                    this.state = 264;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 265;
	                    this.match(RickLangParser.DIV);
	                    this.state = 266;
	                    this.unaryExpr();
	                    break;

	                case 3:
	                    localctx = new MultExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, RickLangParser.RULE_multExpr);
	                    this.state = 267;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 268;
	                    this.match(RickLangParser.MOD);
	                    this.state = 269;
	                    this.unaryExpr();
	                    break;

	                } 
	            }
	            this.state = 274;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
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
	    const _startState = 46;
	    this.enterRecursionRule(localctx, 46, RickLangParser.RULE_powExpr, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 276;
	        this.unaryExpr();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 283;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new PowExprContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, RickLangParser.RULE_powExpr);
	                this.state = 278;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 279;
	                this.match(RickLangParser.POW);
	                this.state = 280;
	                this.unaryExpr(); 
	            }
	            this.state = 285;
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



	unaryExpr() {
	    let localctx = new UnaryExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, RickLangParser.RULE_unaryExpr);
	    try {
	        this.state = 290;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	        case 7:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 286;
	            this.unaryOp();
	            this.state = 287;
	            this.unaryExpr();
	            break;
	        case 8:
	        case 9:
	        case 44:
	        case 52:
	        case 53:
	        case 54:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 289;
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
	    this.enterRule(localctx, 50, RickLangParser.RULE_unaryOp);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 292;
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
	    this.enterRule(localctx, 52, RickLangParser.RULE_factor);
	    try {
	        this.state = 296;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 294;
	            this.immutable();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 295;
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
	    this.enterRule(localctx, 54, RickLangParser.RULE_mutable);
	    try {
	        this.state = 304;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 298;
	            this.match(RickLangParser.ID);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 299;
	            this.match(RickLangParser.ID);
	            this.state = 300;
	            this.match(RickLangParser.LBRACKET);
	            this.state = 301;
	            this.expr();
	            this.state = 302;
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
	    this.enterRule(localctx, 56, RickLangParser.RULE_immutable);
	    try {
	        this.state = 312;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 44:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 306;
	            this.match(RickLangParser.LPAREN);
	            this.state = 307;
	            this.expr();
	            this.state = 308;
	            this.match(RickLangParser.RPAREN);
	            break;
	        case 52:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 310;
	            this.call();
	            break;
	        case 8:
	        case 9:
	        case 53:
	        case 54:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 311;
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
	    this.enterRule(localctx, 58, RickLangParser.RULE_call);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 314;
	        this.match(RickLangParser.ID);
	        this.state = 315;
	        this.match(RickLangParser.LPAREN);
	        this.state = 317;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 960) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & 229505) !== 0)) {
	            this.state = 316;
	            this.exprList();
	        }

	        this.state = 319;
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
	    this.enterRule(localctx, 60, RickLangParser.RULE_constant);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 321;
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
RickLangParser.RULE_stmtList = 2;
RickLangParser.RULE_importStmt = 3;
RickLangParser.RULE_funStmt = 4;
RickLangParser.RULE_varStmt = 5;
RickLangParser.RULE_ifStmt = 6;
RickLangParser.RULE_whileStmt = 7;
RickLangParser.RULE_tryStmt = 8;
RickLangParser.RULE_catchStmt = 9;
RickLangParser.RULE_breakStmt = 10;
RickLangParser.RULE_continueStmt = 11;
RickLangParser.RULE_printStmt = 12;
RickLangParser.RULE_returnStmt = 13;
RickLangParser.RULE_exprStmt = 14;
RickLangParser.RULE_expr = 15;
RickLangParser.RULE_exprList = 16;
RickLangParser.RULE_simpleExpr = 17;
RickLangParser.RULE_andExpr = 18;
RickLangParser.RULE_unaryRelExpr = 19;
RickLangParser.RULE_relExpr = 20;
RickLangParser.RULE_addExpr = 21;
RickLangParser.RULE_multExpr = 22;
RickLangParser.RULE_powExpr = 23;
RickLangParser.RULE_unaryExpr = 24;
RickLangParser.RULE_unaryOp = 25;
RickLangParser.RULE_factor = 26;
RickLangParser.RULE_mutable = 27;
RickLangParser.RULE_immutable = 28;
RickLangParser.RULE_call = 29;
RickLangParser.RULE_constant = 30;

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



class StmtListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_stmtList;
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
	        listener.enterStmtList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitStmtList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RickLangVisitor ) {
	        return visitor.visitStmtList(this);
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
        this.fName = null; // Token
        this.fAlias = null; // Token
    }

	IMPORTOP() {
	    return this.getToken(RickLangParser.IMPORTOP, 0);
	};

	IMPORTCL() {
	    return this.getToken(RickLangParser.IMPORTCL, 0);
	};

	STRINGCONST() {
	    return this.getToken(RickLangParser.STRINGCONST, 0);
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
        this.funName = null; // Token
        this.funParams = null; // ExprListContext
        this.funBlock = null; // StmtListContext
    }

	FUN() {
	    return this.getToken(RickLangParser.FUN, 0);
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

	ID() {
	    return this.getToken(RickLangParser.ID, 0);
	};

	stmtList() {
	    return this.getTypedRuleContext(StmtListContext,0);
	};

	exprList() {
	    return this.getTypedRuleContext(ExprListContext,0);
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
        this.varName = null; // Token
        this.varVal = null; // ExprContext
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
        this.ifCondition = null; // ExprContext
        this.ifBlock = null; // StmtListContext
        this.elseBlock = null; // StmtListContext
    }

	IF() {
	    return this.getToken(RickLangParser.IF, 0);
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


	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	stmtList = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StmtListContext);
	    } else {
	        return this.getTypedRuleContext(StmtListContext,i);
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
        this.whileCondition = null; // ExprContext
        this.whileBlock = null; // StmtListContext
    }

	WHILE() {
	    return this.getToken(RickLangParser.WHILE, 0);
	};

	LBRACE() {
	    return this.getToken(RickLangParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(RickLangParser.RBRACE, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	stmtList() {
	    return this.getTypedRuleContext(StmtListContext,0);
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
        this.tryBlock = null; // StmtListContext
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

	stmtList() {
	    return this.getTypedRuleContext(StmtListContext,0);
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
        this.errName = null; // Token
        this.catchBlock = null; // StmtListContext
    }

	CATCH() {
	    return this.getToken(RickLangParser.CATCH, 0);
	};

	LBRACE() {
	    return this.getToken(RickLangParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(RickLangParser.RBRACE, 0);
	};

	ID() {
	    return this.getToken(RickLangParser.ID, 0);
	};

	stmtList() {
	    return this.getTypedRuleContext(StmtListContext,0);
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
        this.printVal = null; // ExprContext
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
        this.returnVal = null; // ExprContext
    }

	RETURNOP() {
	    return this.getToken(RickLangParser.RETURNOP, 0);
	};

	RETURNCL() {
	    return this.getToken(RickLangParser.RETURNCL, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
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
        this.left = null; // MutableContext
        this.op = null; // Token
        this.right = null; // ExprContext
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

	simpleExpr() {
	    return this.getTypedRuleContext(SimpleExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RickLangVisitor ) {
	        return visitor.visitExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



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
RickLangParser.StmtListContext = StmtListContext; 
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
