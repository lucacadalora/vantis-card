var OW=Object.create;var{getPrototypeOf:EW,defineProperty:c9,getOwnPropertyNames:I6,getOwnPropertyDescriptor:DW}=Object,z7=Object.prototype.hasOwnProperty;function B7(J){return this[J]}var n5=(J,Q,$)=>{var Z=I6(Q);for(let K of Z)if(!z7.call(J,K)&&K!=="default")c9(J,K,{get:B7.bind(Q,K),enumerable:!0});if($){for(let K of Z)if(!z7.call($,K)&&K!=="default")c9($,K,{get:B7.bind(Q,K),enumerable:!0});return $}},RW,kW,s5=(J,Q,$)=>{var Z=J!=null&&typeof J==="object";if(Z){var K=Q?RW??=new WeakMap:kW??=new WeakMap,W=K.get(J);if(W)return W}$=J!=null?OW(EW(J)):{};let H=Q||!J||!J.__esModule?c9($,"default",{value:J,enumerable:!0}):$;for(let Y of I6(J))if(!z7.call(H,Y))c9(H,Y,{get:B7.bind(J,Y),enumerable:!0});if(Z)K.set(J,H);return H},i5=(J)=>{var Q=(l$??=new WeakMap).get(J),$;if(Q)return Q;if(Q=c9({},"__esModule",{value:!0}),J&&typeof J==="object"||typeof J==="function"){for(var Z of I6(J))if(!z7.call(Q,Z))c9(Q,Z,{get:B7.bind(J,Z),enumerable:!($=DW(J,Z))||$.enumerable})}return l$.set(J,Q),Q},l$,o5=(J,Q)=>()=>(Q||J((Q={exports:{}}).exports,Q),Q.exports);var LW=(J)=>J;function VW(J,Q){this[J]=LW.bind(null,Q)}var a5=(J,Q)=>{for(var $ in Q)c9(J,$,{get:Q[$],enumerable:!0,configurable:!0,set:VW.bind(Q,$)})};var r5=(J,Q)=>()=>(J&&(Q=J(J=0)),Q);var t5=((J)=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(J,{get:(Q,$)=>(typeof require<"u"?require:Q)[$]}):J)(function(J){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+J+'" is not supported')});var FZ="185";var OZ=0,a6=1,EZ=2;var e8=1,DZ=2,v8=3,y8=0,vJ=1,X9=2,U9=0,J7=1,r6=2,t6=3,e6=4,RZ=5;var f8=100,kZ=101,LZ=102,VZ=103,MZ=104,zZ=200,BZ=201,IZ=202,AZ=203,PZ=204,CZ=205,wZ=206,_Z=207,TZ=208,SZ=209,jZ=210,vZ=211,yZ=212,fZ=213,bZ=214,hZ=0,xZ=1,gZ=2,JQ=3,pZ=4,mZ=5,lZ=6,dZ=7,uZ=0,cZ=1,nZ=2,eJ=0,QQ=1,$Q=2,ZQ=3,Q7=4,KQ=5,WQ=6,HQ=7;var b8=301,r9=302,s7=303,i7=304,$7=306,sZ=1000,o7=1001,iZ=1002,b9=1003,oZ=1004;var Z7=1005;var xJ=1006,a7=1007;var t9=1008;var J9=1009,aZ=1010,rZ=1011,K7=1012,YQ=1013,h9=1014,z9=1015,B9=1016,XQ=1017,UQ=1018,h8=1020,tZ=35902,eZ=35899,JK=1021,QK=1022,q9=1023,e9=1026,J8=1027,$K=1028,qQ=1029,Q8=1030,NQ=1031;var GQ=1033,r7=33776,t7=33777,e7=33778,J6=33779,FQ=35840,OQ=35841,EQ=35842,DQ=35843,RQ=36196,kQ=37492,LQ=37496,VQ=37488,MQ=37489,Q6=37490,zQ=37491,BQ=37808,IQ=37809,AQ=37810,PQ=37811,CQ=37812,wQ=37813,_Q=37814,TQ=37815,SQ=37816,jQ=37817,vQ=37818,yQ=37819,fQ=37820,bQ=37821,hQ=36492,xQ=36494,gQ=36495,pQ=36283,mQ=36284,$6=36285,lQ=36286;var dQ=0,ZK=1,$8="",Z8="srgb",uQ="srgb-linear",cQ="linear",HJ="srgb";var KK=512,WK=513,HK=514,Z6=515,YK=516,XK=517,K6=518,UK=519;var nQ="300 es",sQ=2000;function MW(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function zW(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function t8(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function qK(){let J=t8("canvas");return J.style.display="block",J}var d$={},j8=null;function iQ(...J){let Q="THREE."+J.shift();if(j8)j8("log",Q,...J);else console.log(Q,...J)}function NK(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let $=J[1];if($&&$.isStackTrace)J[0]+=" "+$.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function S0(...J){J=NK(J);let Q="THREE."+J.shift();if(j8)j8("warn",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.warn($.getError(Q));else console.warn(Q,...J)}}function T0(...J){J=NK(J);let Q="THREE."+J.shift();if(j8)j8("error",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.error($.getError(Q));else console.error(Q,...J)}}function a9(...J){let Q=J.join(" ");if(Q in d$)return;d$[Q]=!0,S0(...J)}function GK(J,Q,$){return new Promise(function(Z,K){function W(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:K();break;case J.TIMEOUT_EXPIRED:setTimeout(W,$);break;default:Z()}}setTimeout(W,$)})}var FK={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class I9{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let Z=$[J];if(Z!==void 0){let K=Z.indexOf(Q);if(K!==-1)Z.splice(K,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let Z=$.slice(0);for(let K=0,W=Z.length;K<W;K++)Z[K].call(this,J);J.target=null}}}var _J=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var A6=Math.PI/180,c7=180/Math.PI;function W7(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(_J[J&255]+_J[J>>8&255]+_J[J>>16&255]+_J[J>>24&255]+"-"+_J[Q&255]+_J[Q>>8&255]+"-"+_J[Q>>16&15|64]+_J[Q>>24&255]+"-"+_J[$&63|128]+_J[$>>8&255]+"-"+_J[$>>16&255]+_J[$>>24&255]+_J[Z&255]+_J[Z>>8&255]+_J[Z>>16&255]+_J[Z>>24&255]).toLowerCase()}function c0(J,Q,$){return Math.max(Q,Math.min($,J))}function BW(J,Q){return(J%Q+Q)%Q}function P6(J,Q,$){return(1-$)*J+$*Q}function c8(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function bJ(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}class g0{static{g0.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,Z=J.elements;return this.x=Z[0]*Q+Z[3]*$+Z[6],this.y=Z[1]*Q+Z[4]*$+Z[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=c0(this.x,J.x,Q.x),this.y=c0(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=c0(this.x,J,Q),this.y=c0(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(c0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(c0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),K=this.x-J.x,W=this.y-J.y;return this.x=K*$-W*Z+J.x,this.y=K*Z+W*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class A9{constructor(J=0,Q=0,$=0,Z=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=Z}static slerpFlat(J,Q,$,Z,K,W,H){let Y=$[Z+0],X=$[Z+1],U=$[Z+2],G=$[Z+3],F=K[W+0],N=K[W+1],E=K[W+2],L=K[W+3];if(G!==L||Y!==F||X!==N||U!==E){let B=Y*F+X*N+U*E+G*L;if(B<0)F=-F,N=-N,E=-E,L=-L,B=-B;let q=1-H;if(B<0.9995){let O=Math.acos(B),_=Math.sin(O);q=Math.sin(q*O)/_,H=Math.sin(H*O)/_,Y=Y*q+F*H,X=X*q+N*H,U=U*q+E*H,G=G*q+L*H}else{Y=Y*q+F*H,X=X*q+N*H,U=U*q+E*H,G=G*q+L*H;let O=1/Math.sqrt(Y*Y+X*X+U*U+G*G);Y*=O,X*=O,U*=O,G*=O}}J[Q]=Y,J[Q+1]=X,J[Q+2]=U,J[Q+3]=G}static multiplyQuaternionsFlat(J,Q,$,Z,K,W){let H=$[Z],Y=$[Z+1],X=$[Z+2],U=$[Z+3],G=K[W],F=K[W+1],N=K[W+2],E=K[W+3];return J[Q]=H*E+U*G+Y*N-X*F,J[Q+1]=Y*E+U*F+X*G-H*N,J[Q+2]=X*E+U*N+H*F-Y*G,J[Q+3]=U*E-H*G-Y*F-X*N,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,Z){return this._x=J,this._y=Q,this._z=$,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:Z,_z:K,_order:W}=J,H=Math.cos,Y=Math.sin,X=H($/2),U=H(Z/2),G=H(K/2),F=Y($/2),N=Y(Z/2),E=Y(K/2);switch(W){case"XYZ":this._x=F*U*G+X*N*E,this._y=X*N*G-F*U*E,this._z=X*U*E+F*N*G,this._w=X*U*G-F*N*E;break;case"YXZ":this._x=F*U*G+X*N*E,this._y=X*N*G-F*U*E,this._z=X*U*E-F*N*G,this._w=X*U*G+F*N*E;break;case"ZXY":this._x=F*U*G-X*N*E,this._y=X*N*G+F*U*E,this._z=X*U*E+F*N*G,this._w=X*U*G-F*N*E;break;case"ZYX":this._x=F*U*G-X*N*E,this._y=X*N*G+F*U*E,this._z=X*U*E-F*N*G,this._w=X*U*G+F*N*E;break;case"YZX":this._x=F*U*G+X*N*E,this._y=X*N*G+F*U*E,this._z=X*U*E-F*N*G,this._w=X*U*G-F*N*E;break;case"XZY":this._x=F*U*G-X*N*E,this._y=X*N*G-F*U*E,this._z=X*U*E+F*N*G,this._w=X*U*G+F*N*E;break;default:S0("Quaternion: .setFromEuler() encountered an unknown order: "+W)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,Z=Math.sin($);return this._x=J.x*Z,this._y=J.y*Z,this._z=J.z*Z,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],Z=Q[4],K=Q[8],W=Q[1],H=Q[5],Y=Q[9],X=Q[2],U=Q[6],G=Q[10],F=$+H+G;if(F>0){let N=0.5/Math.sqrt(F+1);this._w=0.25/N,this._x=(U-Y)*N,this._y=(K-X)*N,this._z=(W-Z)*N}else if($>H&&$>G){let N=2*Math.sqrt(1+$-H-G);this._w=(U-Y)/N,this._x=0.25*N,this._y=(Z+W)/N,this._z=(K+X)/N}else if(H>G){let N=2*Math.sqrt(1+H-$-G);this._w=(K-X)/N,this._x=(Z+W)/N,this._y=0.25*N,this._z=(Y+U)/N}else{let N=2*Math.sqrt(1+G-$-H);this._w=(W-Z)/N,this._x=(K+X)/N,this._y=(Y+U)/N,this._z=0.25*N}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(c0(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let Z=Math.min(1,Q/$);return this.slerp(J,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:Z,_z:K,_w:W}=J,H=Q._x,Y=Q._y,X=Q._z,U=Q._w;return this._x=$*U+W*H+Z*X-K*Y,this._y=Z*U+W*Y+K*H-$*X,this._z=K*U+W*X+$*Y-Z*H,this._w=W*U-$*H-Z*Y-K*X,this._onChangeCallback(),this}slerp(J,Q){let{_x:$,_y:Z,_z:K,_w:W}=J,H=this.dot(J);if(H<0)$=-$,Z=-Z,K=-K,W=-W,H=-H;let Y=1-Q;if(H<0.9995){let X=Math.acos(H),U=Math.sin(X);Y=Math.sin(Y*X)/U,Q=Math.sin(Q*X)/U,this._x=this._x*Y+$*Q,this._y=this._y*Y+Z*Q,this._z=this._z*Y+K*Q,this._w=this._w*Y+W*Q,this._onChangeCallback()}else this._x=this._x*Y+$*Q,this._y=this._y*Y+Z*Q,this._z=this._z*Y+K*Q,this._w=this._w*Y+W*Q,this.normalize();return this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),Z=Math.sqrt(1-$),K=Math.sqrt($);return this.set(Z*Math.sin(J),Z*Math.cos(J),K*Math.sin(Q),K*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class f{static{f.prototype.isVector3=!0}constructor(J=0,Q=0,$=0){this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(u$.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(u$.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements;return this.x=K[0]*Q+K[3]*$+K[6]*Z,this.y=K[1]*Q+K[4]*$+K[7]*Z,this.z=K[2]*Q+K[5]*$+K[8]*Z,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements,W=1/(K[3]*Q+K[7]*$+K[11]*Z+K[15]);return this.x=(K[0]*Q+K[4]*$+K[8]*Z+K[12])*W,this.y=(K[1]*Q+K[5]*$+K[9]*Z+K[13])*W,this.z=(K[2]*Q+K[6]*$+K[10]*Z+K[14])*W,this}applyQuaternion(J){let Q=this.x,$=this.y,Z=this.z,K=J.x,W=J.y,H=J.z,Y=J.w,X=2*(W*Z-H*$),U=2*(H*Q-K*Z),G=2*(K*$-W*Q);return this.x=Q+Y*X+W*G-H*U,this.y=$+Y*U+H*X-K*G,this.z=Z+Y*G+K*U-W*X,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements;return this.x=K[0]*Q+K[4]*$+K[8]*Z,this.y=K[1]*Q+K[5]*$+K[9]*Z,this.z=K[2]*Q+K[6]*$+K[10]*Z,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=c0(this.x,J.x,Q.x),this.y=c0(this.y,J.y,Q.y),this.z=c0(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=c0(this.x,J,Q),this.y=c0(this.y,J,Q),this.z=c0(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(c0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:Z,z:K}=J,W=Q.x,H=Q.y,Y=Q.z;return this.x=Z*Y-K*H,this.y=K*W-$*Y,this.z=$*H-Z*W,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return C6.copy(this).projectOnVector(J),this.sub(C6)}reflect(J){return this.sub(C6.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(c0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,Z=this.z-J.z;return Q*Q+$*$+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let Z=Math.sin(Q)*J;return this.x=Z*Math.sin($),this.y=Math.cos(Q)*J,this.z=Z*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),Z=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=Z,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var C6=new f,u$=new A9;class v0{static{v0.prototype.isMatrix3=!0}constructor(J,Q,$,Z,K,W,H,Y,X){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,K,W,H,Y,X)}set(J,Q,$,Z,K,W,H,Y,X){let U=this.elements;return U[0]=J,U[1]=Z,U[2]=H,U[3]=Q,U[4]=K,U[5]=Y,U[6]=$,U[7]=W,U[8]=X,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,K=this.elements,W=$[0],H=$[3],Y=$[6],X=$[1],U=$[4],G=$[7],F=$[2],N=$[5],E=$[8],L=Z[0],B=Z[3],q=Z[6],O=Z[1],_=Z[4],C=Z[7],M=Z[2],A=Z[5],I=Z[8];return K[0]=W*L+H*O+Y*M,K[3]=W*B+H*_+Y*A,K[6]=W*q+H*C+Y*I,K[1]=X*L+U*O+G*M,K[4]=X*B+U*_+G*A,K[7]=X*q+U*C+G*I,K[2]=F*L+N*O+E*M,K[5]=F*B+N*_+E*A,K[8]=F*q+N*C+E*I,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],H=J[5],Y=J[6],X=J[7],U=J[8];return Q*W*U-Q*H*X-$*K*U+$*H*Y+Z*K*X-Z*W*Y}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],H=J[5],Y=J[6],X=J[7],U=J[8],G=U*W-H*X,F=H*Y-U*K,N=X*K-W*Y,E=Q*G+$*F+Z*N;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);let L=1/E;return J[0]=G*L,J[1]=(Z*X-U*$)*L,J[2]=(H*$-Z*W)*L,J[3]=F*L,J[4]=(U*Q-Z*Y)*L,J[5]=(Z*K-H*Q)*L,J[6]=N*L,J[7]=($*Y-X*Q)*L,J[8]=(W*Q-$*K)*L,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,Z,K,W,H){let Y=Math.cos(K),X=Math.sin(K);return this.set($*Y,$*X,-$*(Y*W+X*H)+W+J,-Z*X,Z*Y,-Z*(-X*W+Y*H)+H+Q,0,0,1),this}scale(J,Q){return a9("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(w6.makeScale(J,Q)),this}rotate(J){return a9("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(w6.makeRotation(-J)),this}translate(J,Q){return a9("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(w6.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<9;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var w6=new v0,c$=new v0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),n$=new v0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function IW(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(K,W,H){if(this.enabled===!1||W===H||!W||!H)return K;if(this.spaces[W].transfer==="srgb")K.r=M9(K.r),K.g=M9(K.g),K.b=M9(K.b);if(this.spaces[W].primaries!==this.spaces[H].primaries)K.applyMatrix3(this.spaces[W].toXYZ),K.applyMatrix3(this.spaces[H].fromXYZ);if(this.spaces[H].transfer==="srgb")K.r=S8(K.r),K.g=S8(K.g),K.b=S8(K.b);return K},workingToColorSpace:function(K,W){return this.convert(K,this.workingColorSpace,W)},colorSpaceToWorking:function(K,W){return this.convert(K,W,this.workingColorSpace)},getPrimaries:function(K){return this.spaces[K].primaries},getTransfer:function(K){if(K==="")return"linear";return this.spaces[K].transfer},getToneMappingMode:function(K){return this.spaces[K].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(K,W=this.workingColorSpace){return K.fromArray(this.spaces[W].luminanceCoefficients)},define:function(K){Object.assign(this.spaces,K)},_getMatrix:function(K,W,H){return K.copy(this.spaces[W].toXYZ).multiply(this.spaces[H].fromXYZ)},_getDrawingBufferColorSpace:function(K){return this.spaces[K].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(K=this.workingColorSpace){return this.spaces[K].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(K,W){return a9("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(K,W)},toWorkingColorSpace:function(K,W){return a9("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(K,W)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],Z=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:Z,transfer:"linear",toXYZ:c$,fromXYZ:n$,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:Z,transfer:"srgb",toXYZ:c$,fromXYZ:n$,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var u0=IW();function M9(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function S8(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var k8;class oQ{static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(k8===void 0)k8=t8("canvas");k8.width=J.width,k8.height=J.height;let Z=k8.getContext("2d");if(J instanceof ImageData)Z.putImageData(J,0,0);else Z.drawImage(J,0,0,J.width,J.height);$=k8}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=t8("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let Z=$.getImageData(0,0,J.width,J.height),K=Z.data;for(let W=0;W<K.length;W++)K[W]=M9(K[W]/255)*255;return $.putImageData(Z,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(M9(Q[$]/255)*255);else Q[$]=M9(Q[$]);return{data:Q,width:J.width,height:J.height}}else return S0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var AW=0;class H7{constructor(J=null){this.isSource=!0,Object.defineProperty(this,"id",{value:AW++}),this.uuid=W7(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame<"u"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let K;if(Array.isArray(Z)){K=[];for(let W=0,H=Z.length;W<H;W++)if(Z[W].isDataTexture)K.push(_6(Z[W].image));else K.push(_6(Z[W]))}else K=_6(Z);$.url=K}if(!Q)J.images[this.uuid]=$;return $}}function _6(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return oQ.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return S0("Texture: Unable to serialize Texture."),{}}var PW=0,T6=new f;class CJ extends I9{constructor(J=CJ.DEFAULT_IMAGE,Q=CJ.DEFAULT_MAPPING,$=1001,Z=1001,K=1006,W=1008,H=1023,Y=1009,X=CJ.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:PW++}),this.uuid=W7(),this.name="",this.source=new H7(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=Z,this.magFilter=K,this.minFilter=W,this.anisotropy=X,this.format=H,this.internalFormat=null,this.type=Y,this.offset=new g0(0,0),this.repeat=new g0(1,1),this.center=new g0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new v0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(T6).x}get height(){return this.source.getSize(T6).y}get depth(){return this.source.getSize(T6).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){S0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){S0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(Z&&$&&(Z.isVector2&&$.isVector2))Z.copy($);else if(Z&&$&&(Z.isVector3&&$.isVector3))Z.copy($);else if(Z&&$&&(Z.isMatrix3&&$.isMatrix3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}CJ.DEFAULT_IMAGE=null;CJ.DEFAULT_MAPPING=300;CJ.DEFAULT_ANISOTROPY=1;class NJ{static{NJ.prototype.isVector4=!0}constructor(J=0,Q=0,$=0,Z=1){this.x=J,this.y=Q,this.z=$,this.w=Z}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,Z){return this.x=J,this.y=Q,this.z=$,this.w=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,K=this.w,W=J.elements;return this.x=W[0]*Q+W[4]*$+W[8]*Z+W[12]*K,this.y=W[1]*Q+W[5]*$+W[9]*Z+W[13]*K,this.z=W[2]*Q+W[6]*$+W[10]*Z+W[14]*K,this.w=W[3]*Q+W[7]*$+W[11]*Z+W[15]*K,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,Z,K,W=0.01,H=0.1,Y=J.elements,X=Y[0],U=Y[4],G=Y[8],F=Y[1],N=Y[5],E=Y[9],L=Y[2],B=Y[6],q=Y[10];if(Math.abs(U-F)<0.01&&Math.abs(G-L)<0.01&&Math.abs(E-B)<0.01){if(Math.abs(U+F)<0.1&&Math.abs(G+L)<0.1&&Math.abs(E+B)<0.1&&Math.abs(X+N+q-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let _=(X+1)/2,C=(N+1)/2,M=(q+1)/2,A=(U+F)/4,I=(G+L)/4,w=(E+B)/4;if(_>C&&_>M)if(_<0.01)$=0,Z=0.707106781,K=0.707106781;else $=Math.sqrt(_),Z=A/$,K=I/$;else if(C>M)if(C<0.01)$=0.707106781,Z=0,K=0.707106781;else Z=Math.sqrt(C),$=A/Z,K=w/Z;else if(M<0.01)$=0.707106781,Z=0.707106781,K=0;else K=Math.sqrt(M),$=I/K,Z=w/K;return this.set($,Z,K,Q),this}let O=Math.sqrt((B-E)*(B-E)+(G-L)*(G-L)+(F-U)*(F-U));if(Math.abs(O)<0.001)O=1;return this.x=(B-E)/O,this.y=(G-L)/O,this.z=(F-U)/O,this.w=Math.acos((X+N+q-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=c0(this.x,J.x,Q.x),this.y=c0(this.y,J.y,Q.y),this.z=c0(this.z,J.z,Q.z),this.w=c0(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=c0(this.x,J,Q),this.y=c0(this.y,J,Q),this.z=c0(this.z,J,Q),this.w=c0(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(c0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class aQ extends I9{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new NJ(0,0,J,Q),this.scissorTest=!1,this.viewport=new NJ(0,0,J,Q),this.textures=[];let Z={width:J,height:Q,depth:$.depth},K=new CJ(Z),W=$.count;for(let H=0;H<W;H++)this.textures[H]=K.clone(),this.textures[H].isRenderTargetTexture=!0,this.textures[H].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview,this.useArrayDepthTexture=$.useArrayDepthTexture}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if(J!==null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let Z=0,K=this.textures.length;Z<K;Z++)if(this.textures[Z].image.width=J,this.textures[Z].image.height=Q,this.textures[Z].image.depth=$,this.textures[Z].isData3DTexture!==!0)this.textures[Z].isArrayTexture=this.textures[Z].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let Z=Object.assign({},J.textures[Q].image);this.textures[Q].source=new H7(Z)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,J.depthTexture!==null)this.depthTexture=J.depthTexture.clone();return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nJ extends aQ{constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class W6 extends CJ{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class rQ extends CJ{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class QJ{static{QJ.prototype.isMatrix4=!0}constructor(J,Q,$,Z,K,W,H,Y,X,U,G,F,N,E,L,B){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,K,W,H,Y,X,U,G,F,N,E,L,B)}set(J,Q,$,Z,K,W,H,Y,X,U,G,F,N,E,L,B){let q=this.elements;return q[0]=J,q[4]=Q,q[8]=$,q[12]=Z,q[1]=K,q[5]=W,q[9]=H,q[13]=Y,q[2]=X,q[6]=U,q[10]=G,q[14]=F,q[3]=N,q[7]=E,q[11]=L,q[15]=B,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new QJ().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){if(this.determinantAffine()===0)return J.set(1,0,0),Q.set(0,1,0),$.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let Q=this.elements,$=J.elements,Z=1/L8.setFromMatrixColumn(J,0).length(),K=1/L8.setFromMatrixColumn(J,1).length(),W=1/L8.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*Z,Q[1]=$[1]*Z,Q[2]=$[2]*Z,Q[3]=0,Q[4]=$[4]*K,Q[5]=$[5]*K,Q[6]=$[6]*K,Q[7]=0,Q[8]=$[8]*W,Q[9]=$[9]*W,Q[10]=$[10]*W,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,Z=J.y,K=J.z,W=Math.cos($),H=Math.sin($),Y=Math.cos(Z),X=Math.sin(Z),U=Math.cos(K),G=Math.sin(K);if(J.order==="XYZ"){let F=W*U,N=W*G,E=H*U,L=H*G;Q[0]=Y*U,Q[4]=-Y*G,Q[8]=X,Q[1]=N+E*X,Q[5]=F-L*X,Q[9]=-H*Y,Q[2]=L-F*X,Q[6]=E+N*X,Q[10]=W*Y}else if(J.order==="YXZ"){let F=Y*U,N=Y*G,E=X*U,L=X*G;Q[0]=F+L*H,Q[4]=E*H-N,Q[8]=W*X,Q[1]=W*G,Q[5]=W*U,Q[9]=-H,Q[2]=N*H-E,Q[6]=L+F*H,Q[10]=W*Y}else if(J.order==="ZXY"){let F=Y*U,N=Y*G,E=X*U,L=X*G;Q[0]=F-L*H,Q[4]=-W*G,Q[8]=E+N*H,Q[1]=N+E*H,Q[5]=W*U,Q[9]=L-F*H,Q[2]=-W*X,Q[6]=H,Q[10]=W*Y}else if(J.order==="ZYX"){let F=W*U,N=W*G,E=H*U,L=H*G;Q[0]=Y*U,Q[4]=E*X-N,Q[8]=F*X+L,Q[1]=Y*G,Q[5]=L*X+F,Q[9]=N*X-E,Q[2]=-X,Q[6]=H*Y,Q[10]=W*Y}else if(J.order==="YZX"){let F=W*Y,N=W*X,E=H*Y,L=H*X;Q[0]=Y*U,Q[4]=L-F*G,Q[8]=E*G+N,Q[1]=G,Q[5]=W*U,Q[9]=-H*U,Q[2]=-X*U,Q[6]=N*G+E,Q[10]=F-L*G}else if(J.order==="XZY"){let F=W*Y,N=W*X,E=H*Y,L=H*X;Q[0]=Y*U,Q[4]=-G,Q[8]=X*U,Q[1]=F*G+L,Q[5]=W*U,Q[9]=N*G-E,Q[2]=E*G-N,Q[6]=H*U,Q[10]=L*G+F}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(CW,J,wW)}lookAt(J,Q,$){let Z=this.elements;if(pJ.subVectors(J,Q),pJ.lengthSq()===0)pJ.z=1;if(pJ.normalize(),T9.crossVectors($,pJ),T9.lengthSq()===0){if(Math.abs($.z)===1)pJ.x+=0.0001;else pJ.z+=0.0001;pJ.normalize(),T9.crossVectors($,pJ)}return T9.normalize(),I7.crossVectors(pJ,T9),Z[0]=T9.x,Z[4]=I7.x,Z[8]=pJ.x,Z[1]=T9.y,Z[5]=I7.y,Z[9]=pJ.y,Z[2]=T9.z,Z[6]=I7.z,Z[10]=pJ.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,K=this.elements,W=$[0],H=$[4],Y=$[8],X=$[12],U=$[1],G=$[5],F=$[9],N=$[13],E=$[2],L=$[6],B=$[10],q=$[14],O=$[3],_=$[7],C=$[11],M=$[15],A=Z[0],I=Z[4],w=Z[8],R=Z[12],z=Z[1],d=Z[5],P=Z[9],p=Z[13],a=Z[2],x=Z[6],u=Z[10],i=Z[14],b=Z[3],t=Z[7],J0=Z[11],H0=Z[15];return K[0]=W*A+H*z+Y*a+X*b,K[4]=W*I+H*d+Y*x+X*t,K[8]=W*w+H*P+Y*u+X*J0,K[12]=W*R+H*p+Y*i+X*H0,K[1]=U*A+G*z+F*a+N*b,K[5]=U*I+G*d+F*x+N*t,K[9]=U*w+G*P+F*u+N*J0,K[13]=U*R+G*p+F*i+N*H0,K[2]=E*A+L*z+B*a+q*b,K[6]=E*I+L*d+B*x+q*t,K[10]=E*w+L*P+B*u+q*J0,K[14]=E*R+L*p+B*i+q*H0,K[3]=O*A+_*z+C*a+M*b,K[7]=O*I+_*d+C*x+M*t,K[11]=O*w+_*P+C*u+M*J0,K[15]=O*R+_*p+C*i+M*H0,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],K=J[12],W=J[1],H=J[5],Y=J[9],X=J[13],U=J[2],G=J[6],F=J[10],N=J[14],E=J[3],L=J[7],B=J[11],q=J[15],O=Y*N-X*F,_=H*N-X*G,C=H*F-Y*G,M=W*N-X*U,A=W*F-Y*U,I=W*G-H*U;return Q*(L*O-B*_+q*C)-$*(E*O-B*M+q*A)+Z*(E*_-L*M+q*I)-K*(E*C-L*A+B*I)}determinantAffine(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],K=J[1],W=J[5],H=J[9],Y=J[2],X=J[6],U=J[10];return Q*(W*U-H*X)-$*(K*U-H*Y)+Z*(K*X-W*Y)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let Z=this.elements;if(J.isVector3)Z[12]=J.x,Z[13]=J.y,Z[14]=J.z;else Z[12]=J,Z[13]=Q,Z[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],H=J[5],Y=J[6],X=J[7],U=J[8],G=J[9],F=J[10],N=J[11],E=J[12],L=J[13],B=J[14],q=J[15],O=Q*H-$*W,_=Q*Y-Z*W,C=Q*X-K*W,M=$*Y-Z*H,A=$*X-K*H,I=Z*X-K*Y,w=U*L-G*E,R=U*B-F*E,z=U*q-N*E,d=G*B-F*L,P=G*q-N*L,p=F*q-N*B,a=O*p-_*P+C*d+M*z-A*R+I*w;if(a===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let x=1/a;return J[0]=(H*p-Y*P+X*d)*x,J[1]=(Z*P-$*p-K*d)*x,J[2]=(L*I-B*A+q*M)*x,J[3]=(F*A-G*I-N*M)*x,J[4]=(Y*z-W*p-X*R)*x,J[5]=(Q*p-Z*z+K*R)*x,J[6]=(B*C-E*I-q*_)*x,J[7]=(U*I-F*C+N*_)*x,J[8]=(W*P-H*z+X*w)*x,J[9]=($*z-Q*P-K*w)*x,J[10]=(E*A-L*C+q*O)*x,J[11]=(G*C-U*A-N*O)*x,J[12]=(H*R-W*d-Y*w)*x,J[13]=(Q*d-$*R+Z*w)*x,J[14]=(L*_-E*M-B*O)*x,J[15]=(U*M-G*_+F*O)*x,this}scale(J){let Q=this.elements,$=J.x,Z=J.y,K=J.z;return Q[0]*=$,Q[4]*=Z,Q[8]*=K,Q[1]*=$,Q[5]*=Z,Q[9]*=K,Q[2]*=$,Q[6]*=Z,Q[10]*=K,Q[3]*=$,Q[7]*=Z,Q[11]*=K,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Z=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,Z))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),K=1-$,W=J.x,H=J.y,Y=J.z,X=K*W,U=K*H;return this.set(X*W+$,X*H-Z*Y,X*Y+Z*H,0,X*H+Z*Y,U*H+$,U*Y-Z*W,0,X*Y-Z*H,U*Y+Z*W,K*Y*Y+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,Z,K,W){return this.set(1,$,K,0,J,1,W,0,Q,Z,1,0,0,0,0,1),this}compose(J,Q,$){let Z=this.elements,K=Q._x,W=Q._y,H=Q._z,Y=Q._w,X=K+K,U=W+W,G=H+H,F=K*X,N=K*U,E=K*G,L=W*U,B=W*G,q=H*G,O=Y*X,_=Y*U,C=Y*G,M=$.x,A=$.y,I=$.z;return Z[0]=(1-(L+q))*M,Z[1]=(N+C)*M,Z[2]=(E-_)*M,Z[3]=0,Z[4]=(N-C)*A,Z[5]=(1-(F+q))*A,Z[6]=(B+O)*A,Z[7]=0,Z[8]=(E+_)*I,Z[9]=(B-O)*I,Z[10]=(1-(F+L))*I,Z[11]=0,Z[12]=J.x,Z[13]=J.y,Z[14]=J.z,Z[15]=1,this}decompose(J,Q,$){let Z=this.elements;J.x=Z[12],J.y=Z[13],J.z=Z[14];let K=this.determinantAffine();if(K===0)return $.set(1,1,1),Q.identity(),this;let W=L8.set(Z[0],Z[1],Z[2]).length(),H=L8.set(Z[4],Z[5],Z[6]).length(),Y=L8.set(Z[8],Z[9],Z[10]).length();if(K<0)W=-W;aJ.copy(this);let X=1/W,U=1/H,G=1/Y;return aJ.elements[0]*=X,aJ.elements[1]*=X,aJ.elements[2]*=X,aJ.elements[4]*=U,aJ.elements[5]*=U,aJ.elements[6]*=U,aJ.elements[8]*=G,aJ.elements[9]*=G,aJ.elements[10]*=G,Q.setFromRotationMatrix(aJ),$.x=W,$.y=H,$.z=Y,this}makePerspective(J,Q,$,Z,K,W,H=2000,Y=!1){let X=this.elements,U=2*K/(Q-J),G=2*K/($-Z),F=(Q+J)/(Q-J),N=($+Z)/($-Z),E,L;if(Y)E=K/(W-K),L=W*K/(W-K);else if(H===2000)E=-(W+K)/(W-K),L=-2*W*K/(W-K);else if(H===2001)E=-W/(W-K),L=-W*K/(W-K);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+H);return X[0]=U,X[4]=0,X[8]=F,X[12]=0,X[1]=0,X[5]=G,X[9]=N,X[13]=0,X[2]=0,X[6]=0,X[10]=E,X[14]=L,X[3]=0,X[7]=0,X[11]=-1,X[15]=0,this}makeOrthographic(J,Q,$,Z,K,W,H=2000,Y=!1){let X=this.elements,U=2/(Q-J),G=2/($-Z),F=-(Q+J)/(Q-J),N=-($+Z)/($-Z),E,L;if(Y)E=1/(W-K),L=W/(W-K);else if(H===2000)E=-2/(W-K),L=-(W+K)/(W-K);else if(H===2001)E=-1/(W-K),L=-K/(W-K);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+H);return X[0]=U,X[4]=0,X[8]=0,X[12]=F,X[1]=0,X[5]=G,X[9]=0,X[13]=N,X[2]=0,X[6]=0,X[10]=E,X[14]=L,X[3]=0,X[7]=0,X[11]=0,X[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<16;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var L8=new f,aJ=new QJ,CW=new f(0,0,0),wW=new f(1,1,1),T9=new f,I7=new f,pJ=new f,s$=new QJ,i$=new A9;class Y9{constructor(J=0,Q=0,$=0,Z=Y9.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=Z}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,Z=this._order){return this._x=J,this._y=Q,this._z=$,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let Z=J.elements,K=Z[0],W=Z[4],H=Z[8],Y=Z[1],X=Z[5],U=Z[9],G=Z[2],F=Z[6],N=Z[10];switch(Q){case"XYZ":if(this._y=Math.asin(c0(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(-U,N),this._z=Math.atan2(-W,K);else this._x=Math.atan2(F,X),this._z=0;break;case"YXZ":if(this._x=Math.asin(-c0(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(H,N),this._z=Math.atan2(Y,X);else this._y=Math.atan2(-G,K),this._z=0;break;case"ZXY":if(this._x=Math.asin(c0(F,-1,1)),Math.abs(F)<0.9999999)this._y=Math.atan2(-G,N),this._z=Math.atan2(-W,X);else this._y=0,this._z=Math.atan2(Y,K);break;case"ZYX":if(this._y=Math.asin(-c0(G,-1,1)),Math.abs(G)<0.9999999)this._x=Math.atan2(F,N),this._z=Math.atan2(Y,K);else this._x=0,this._z=Math.atan2(-W,X);break;case"YZX":if(this._z=Math.asin(c0(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,X),this._y=Math.atan2(-G,K);else this._x=0,this._y=Math.atan2(H,N);break;case"XZY":if(this._z=Math.asin(-c0(W,-1,1)),Math.abs(W)<0.9999999)this._x=Math.atan2(F,X),this._y=Math.atan2(H,K);else this._x=Math.atan2(-U,N),this._y=0;break;default:S0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return s$.makeRotationFromQuaternion(J),this.setFromRotationMatrix(s$,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return i$.setFromEuler(this),this.setFromQuaternion(i$,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Y9.DEFAULT_ORDER="XYZ";class Y7{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var _W=0,o$=new f,V8=new A9,E9=new QJ,A7=new f,n8=new f,TW=new f,SW=new A9,a$=new f(1,0,0),r$=new f(0,1,0),t$=new f(0,0,1),e$={type:"added"},jW={type:"removed"},M8={type:"childadded",child:null},S6={type:"childremoved",child:null};class kJ extends I9{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:_W++}),this.uuid=W7(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kJ.DEFAULT_UP.clone();let J=new f,Q=new Y9,$=new A9,Z=new f(1,1,1);function K(){$.setFromEuler(Q,!1)}function W(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(K),$._onChange(W),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new QJ},normalMatrix:{value:new v0}}),this.matrix=new QJ,this.matrixWorld=new QJ,this.matrixAutoUpdate=kJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Y7,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return V8.setFromAxisAngle(J,Q),this.quaternion.multiply(V8),this}rotateOnWorldAxis(J,Q){return V8.setFromAxisAngle(J,Q),this.quaternion.premultiply(V8),this}rotateX(J){return this.rotateOnAxis(a$,J)}rotateY(J){return this.rotateOnAxis(r$,J)}rotateZ(J){return this.rotateOnAxis(t$,J)}translateOnAxis(J,Q){return o$.copy(J).applyQuaternion(this.quaternion),this.position.add(o$.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(a$,J)}translateY(J){return this.translateOnAxis(r$,J)}translateZ(J){return this.translateOnAxis(t$,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(E9.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)A7.copy(J);else A7.set(J,Q,$);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),n8.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)E9.lookAt(n8,A7,this.up);else E9.lookAt(A7,n8,this.up);if(this.quaternion.setFromRotationMatrix(E9),Z)E9.extractRotation(Z.matrixWorld),V8.setFromRotationMatrix(E9),this.quaternion.premultiply(V8.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return T0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(e$),M8.child=J,this.dispatchEvent(M8),M8.child=null;else T0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(jW),S6.child=J,this.dispatchEvent(S6),S6.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),E9.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),E9.multiply(J.parent.matrixWorld);return J.applyMatrix4(E9),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(e$),M8.child=J,this.dispatchEvent(M8),M8.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,Z=this.children.length;$<Z;$++){let W=this.children[$].getObjectByProperty(J,Q);if(W!==void 0)return W}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let Z=this.children;for(let K=0,W=Z.length;K<W;K++)Z[K].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(n8,J,TW),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(n8,SW,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}traverse(J){J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:$,z:Z}=J,K=this.matrix.elements;K[12]+=Q-K[0]*Q-K[4]*$-K[8]*Z,K[13]+=$-K[1]*Q-K[5]*$-K[9]*Z,K[14]+=Z-K[2]*Q-K[6]*$-K[10]*Z}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q,$=!1){let Z=this.parent;if(J===!0&&Z!==null)Z.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||$){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,$=!0}if(Q===!0){let K=this.children;for(let W=0,H=K.length;W<H;W++)K[W].updateWorldMatrix(!1,!0,$)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,this.name!=="")Z.name=this.name;if(this.castShadow===!0)Z.castShadow=!0;if(this.receiveShadow===!0)Z.receiveShadow=!0;if(this.visible===!1)Z.visible=!1;if(this.frustumCulled===!1)Z.frustumCulled=!1;if(this.renderOrder!==0)Z.renderOrder=this.renderOrder;if(this.static!==!1)Z.static=this.static;if(Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.pivot!==null)Z.pivot=this.pivot.toArray();if(this.matrixAutoUpdate===!1)Z.matrixAutoUpdate=!1;if(this.morphTargetDictionary!==void 0)Z.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)Z.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.geometryInfo=this._geometryInfo.map((H)=>({...H,boundingBox:H.boundingBox?H.boundingBox.toJSON():void 0,boundingSphere:H.boundingSphere?H.boundingSphere.toJSON():void 0})),Z.instanceInfo=this._instanceInfo.map((H)=>({...H})),Z.availableInstanceIds=this._availableInstanceIds.slice(),Z.availableGeometryIds=this._availableGeometryIds.slice(),Z.nextIndexStart=this._nextIndexStart,Z.nextVertexStart=this._nextVertexStart,Z.geometryCount=this._geometryCount,Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.matricesTexture=this._matricesTexture.toJSON(J),Z.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)Z.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)Z.boundingBox=this.boundingBox.toJSON()}function K(H,Y){if(H[Y.uuid]===void 0)H[Y.uuid]=Y.toJSON(J);return Y.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=K(J.geometries,this.geometry);let H=this.geometry.parameters;if(H!==void 0&&H.shapes!==void 0){let Y=H.shapes;if(Array.isArray(Y))for(let X=0,U=Y.length;X<U;X++){let G=Y[X];K(J.shapes,G)}else K(J.shapes,Y)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)K(J.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let H=[];for(let Y=0,X=this.material.length;Y<X;Y++)H.push(K(J.materials,this.material[Y]));Z.material=H}else Z.material=K(J.materials,this.material);if(this.children.length>0){Z.children=[];for(let H=0;H<this.children.length;H++)Z.children.push(this.children[H].toJSON(J).object)}if(this.animations.length>0){Z.animations=[];for(let H=0;H<this.animations.length;H++){let Y=this.animations[H];Z.animations.push(K(J.animations,Y))}}if(Q){let H=W(J.geometries),Y=W(J.materials),X=W(J.textures),U=W(J.images),G=W(J.shapes),F=W(J.skeletons),N=W(J.animations),E=W(J.nodes);if(H.length>0)$.geometries=H;if(Y.length>0)$.materials=Y;if(X.length>0)$.textures=X;if(U.length>0)$.images=U;if(G.length>0)$.shapes=G;if(F.length>0)$.skeletons=F;if(N.length>0)$.animations=N;if(E.length>0)$.nodes=E}return $.object=Z,$;function W(H){let Y=[];for(let X in H){let U=H[X];delete U.metadata,Y.push(U)}return Y}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let Z=J.children[$];this.add(Z.clone())}return this}}kJ.DEFAULT_UP=new f(0,1,0);kJ.DEFAULT_MATRIX_AUTO_UPDATE=!0;kJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class jJ extends kJ{constructor(){super();this.isGroup=!0,this.type="Group"}}var vW={type:"move"};class X7{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new jJ,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new jJ,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new f,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new f;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new jJ,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new f,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new f,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let Z=null,K=null,W=null,H=this._targetRay,Y=this._grip,X=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(X&&J.hand){W=!0;for(let L of J.hand.values()){let B=Q.getJointPose(L,$),q=this._getHandJoint(X,L);if(B!==null)q.matrix.fromArray(B.transform.matrix),q.matrix.decompose(q.position,q.rotation,q.scale),q.matrixWorldNeedsUpdate=!0,q.jointRadius=B.radius;q.visible=B!==null}let U=X.joints["index-finger-tip"],G=X.joints["thumb-tip"],F=U.position.distanceTo(G.position),N=0.02,E=0.005;if(X.inputState.pinching&&F>N+E)X.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!X.inputState.pinching&&F<=N-E)X.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(Y!==null&&J.gripSpace){if(K=Q.getPose(J.gripSpace,$),K!==null){if(Y.matrix.fromArray(K.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,K.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(K.linearVelocity);else Y.hasLinearVelocity=!1;if(K.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(K.angularVelocity);else Y.hasAngularVelocity=!1;if(Y.eventsEnabled)Y.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(H!==null){if(Z=Q.getPose(J.targetRaySpace,$),Z===null&&K!==null)Z=K;if(Z!==null){if(H.matrix.fromArray(Z.transform.matrix),H.matrix.decompose(H.position,H.rotation,H.scale),H.matrixWorldNeedsUpdate=!0,Z.linearVelocity)H.hasLinearVelocity=!0,H.linearVelocity.copy(Z.linearVelocity);else H.hasLinearVelocity=!1;if(Z.angularVelocity)H.hasAngularVelocity=!0,H.angularVelocity.copy(Z.angularVelocity);else H.hasAngularVelocity=!1;this.dispatchEvent(vW)}}}if(H!==null)H.visible=Z!==null;if(Y!==null)Y.visible=K!==null;if(X!==null)X.visible=W!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new jJ;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}var OK={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},S9={h:0,s:0,l:0},P7={h:0,s:0,l:0};function j6(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class b0{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let Z=J;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,u0.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,Z=u0.workingColorSpace){return this.r=J,this.g=Q,this.b=$,u0.colorSpaceToWorking(this,Z),this}setHSL(J,Q,$,Z=u0.workingColorSpace){if(J=BW(J,1),Q=c0(Q,0,1),$=c0($,0,1),Q===0)this.r=this.g=this.b=$;else{let K=$<=0.5?$*(1+Q):$+Q-$*Q,W=2*$-K;this.r=j6(W,K,J+0.3333333333333333),this.g=j6(W,K,J),this.b=j6(W,K,J-0.3333333333333333)}return u0.colorSpaceToWorking(this,Z),this}setStyle(J,Q="srgb"){function $(K){if(K===void 0)return;if(parseFloat(K)<1)S0("Color: Alpha component of "+J+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec(J)){let K,W=Z[1],H=Z[2];switch(W){case"rgb":case"rgba":if(K=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(H))return $(K[4]),this.setRGB(Math.min(255,parseInt(K[1],10))/255,Math.min(255,parseInt(K[2],10))/255,Math.min(255,parseInt(K[3],10))/255,Q);if(K=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(H))return $(K[4]),this.setRGB(Math.min(100,parseInt(K[1],10))/100,Math.min(100,parseInt(K[2],10))/100,Math.min(100,parseInt(K[3],10))/100,Q);break;case"hsl":case"hsla":if(K=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(H))return $(K[4]),this.setHSL(parseFloat(K[1])/360,parseFloat(K[2])/100,parseFloat(K[3])/100,Q);break;default:S0("Color: Unknown color model "+J)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec(J)){let K=Z[1],W=K.length;if(W===3)return this.setRGB(parseInt(K.charAt(0),16)/15,parseInt(K.charAt(1),16)/15,parseInt(K.charAt(2),16)/15,Q);else if(W===6)return this.setHex(parseInt(K,16),Q);else S0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=OK[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else S0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=M9(J.r),this.g=M9(J.g),this.b=M9(J.b),this}copyLinearToSRGB(J){return this.r=S8(J.r),this.g=S8(J.g),this.b=S8(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return u0.workingToColorSpace(TJ.copy(this),J),Math.round(c0(TJ.r*255,0,255))*65536+Math.round(c0(TJ.g*255,0,255))*256+Math.round(c0(TJ.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=u0.workingColorSpace){u0.workingToColorSpace(TJ.copy(this),Q);let{r:$,g:Z,b:K}=TJ,W=Math.max($,Z,K),H=Math.min($,Z,K),Y,X,U=(H+W)/2;if(H===W)Y=0,X=0;else{let G=W-H;switch(X=U<=0.5?G/(W+H):G/(2-W-H),W){case $:Y=(Z-K)/G+(Z<K?6:0);break;case Z:Y=(K-$)/G+2;break;case K:Y=($-Z)/G+4;break}Y/=6}return J.h=Y,J.s=X,J.l=U,J}getRGB(J,Q=u0.workingColorSpace){return u0.workingToColorSpace(TJ.copy(this),Q),J.r=TJ.r,J.g=TJ.g,J.b=TJ.b,J}getStyle(J="srgb"){u0.workingToColorSpace(TJ.copy(this),J);let{r:Q,g:$,b:Z}=TJ;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(Z*255)})`}offsetHSL(J,Q,$){return this.getHSL(S9),this.setHSL(S9.h+J,S9.s+Q,S9.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(S9),J.getHSL(P7);let $=P6(S9.h,P7.h,Q),Z=P6(S9.s,P7.s,Q),K=P6(S9.l,P7.l,Q);return this.setHSL($,Z,K),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,Z=this.b,K=J.elements;return this.r=K[0]*Q+K[3]*$+K[6]*Z,this.g=K[1]*Q+K[4]*$+K[7]*Z,this.b=K[2]*Q+K[5]*$+K[8]*Z,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var TJ=new b0;b0.NAMES=OK;class x8 extends kJ{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Y9,this.environmentIntensity=1,this.environmentRotation=new Y9,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)Q.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)Q.object.backgroundIntensity=this.backgroundIntensity;if(Q.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)Q.object.environmentIntensity=this.environmentIntensity;return Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var rJ=new f,D9=new f,v6=new f,R9=new f,z8=new f,B8=new f,JZ=new f,y6=new f,f6=new f,b6=new f,h6=new NJ,x6=new NJ,g6=new NJ;class cJ{constructor(J=new f,Q=new f,$=new f){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,Z){Z.subVectors($,Q),rJ.subVectors(J,Q),Z.cross(rJ);let K=Z.lengthSq();if(K>0)return Z.multiplyScalar(1/Math.sqrt(K));return Z.set(0,0,0)}static getBarycoord(J,Q,$,Z,K){rJ.subVectors(Z,Q),D9.subVectors($,Q),v6.subVectors(J,Q);let W=rJ.dot(rJ),H=rJ.dot(D9),Y=rJ.dot(v6),X=D9.dot(D9),U=D9.dot(v6),G=W*X-H*H;if(G===0)return K.set(0,0,0),null;let F=1/G,N=(X*Y-H*U)*F,E=(W*U-H*Y)*F;return K.set(1-N-E,E,N)}static containsPoint(J,Q,$,Z){if(this.getBarycoord(J,Q,$,Z,R9)===null)return!1;return R9.x>=0&&R9.y>=0&&R9.x+R9.y<=1}static getInterpolation(J,Q,$,Z,K,W,H,Y){if(this.getBarycoord(J,Q,$,Z,R9)===null){if(Y.x=0,Y.y=0,"z"in Y)Y.z=0;if("w"in Y)Y.w=0;return null}return Y.setScalar(0),Y.addScaledVector(K,R9.x),Y.addScaledVector(W,R9.y),Y.addScaledVector(H,R9.z),Y}static getInterpolatedAttribute(J,Q,$,Z,K,W){return h6.setScalar(0),x6.setScalar(0),g6.setScalar(0),h6.fromBufferAttribute(J,Q),x6.fromBufferAttribute(J,$),g6.fromBufferAttribute(J,Z),W.setScalar(0),W.addScaledVector(h6,K.x),W.addScaledVector(x6,K.y),W.addScaledVector(g6,K.z),W}static isFrontFacing(J,Q,$,Z){return rJ.subVectors($,Q),D9.subVectors(J,Q),rJ.cross(D9).dot(Z)<0}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,Z){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[Z]),this}setFromAttributeAndIndices(J,Q,$,Z){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,Z),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return rJ.subVectors(this.c,this.b),D9.subVectors(this.a,this.b),rJ.cross(D9).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return cJ.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return cJ.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,Z,K){return cJ.getInterpolation(J,this.a,this.b,this.c,Q,$,Z,K)}containsPoint(J){return cJ.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return cJ.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,Z=this.b,K=this.c,W,H;z8.subVectors(Z,$),B8.subVectors(K,$),y6.subVectors(J,$);let Y=z8.dot(y6),X=B8.dot(y6);if(Y<=0&&X<=0)return Q.copy($);f6.subVectors(J,Z);let U=z8.dot(f6),G=B8.dot(f6);if(U>=0&&G<=U)return Q.copy(Z);let F=Y*G-U*X;if(F<=0&&Y>=0&&U<=0)return W=Y/(Y-U),Q.copy($).addScaledVector(z8,W);b6.subVectors(J,K);let N=z8.dot(b6),E=B8.dot(b6);if(E>=0&&N<=E)return Q.copy(K);let L=N*X-Y*E;if(L<=0&&X>=0&&E<=0)return H=X/(X-E),Q.copy($).addScaledVector(B8,H);let B=U*E-N*G;if(B<=0&&G-U>=0&&N-E>=0)return JZ.subVectors(K,Z),H=(G-U)/(G-U+(N-E)),Q.copy(Z).addScaledVector(JZ,H);let q=1/(B+L+F);return W=L*q,H=F*q,Q.copy($).addScaledVector(z8,W).addScaledVector(B8,H)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class P9{constructor(J=new f(1/0,1/0,1/0),Q=new f(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(tJ.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(tJ.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=tJ.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let K=$.getAttribute("position");if(Q===!0&&K!==void 0&&J.isInstancedMesh!==!0)for(let W=0,H=K.count;W<H;W++){if(J.isMesh===!0)J.getVertexPosition(W,tJ);else tJ.fromBufferAttribute(K,W);tJ.applyMatrix4(J.matrixWorld),this.expandByPoint(tJ)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();C7.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();C7.copy($.boundingBox)}C7.applyMatrix4(J.matrixWorld),this.union(C7)}}let Z=J.children;for(let K=0,W=Z.length;K<W;K++)this.expandByObject(Z[K],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,tJ),tJ.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(s8),w7.subVectors(this.max,s8),I8.subVectors(J.a,s8),A8.subVectors(J.b,s8),P8.subVectors(J.c,s8),j9.subVectors(A8,I8),v9.subVectors(P8,A8),n9.subVectors(I8,P8);let Q=[0,-j9.z,j9.y,0,-v9.z,v9.y,0,-n9.z,n9.y,j9.z,0,-j9.x,v9.z,0,-v9.x,n9.z,0,-n9.x,-j9.y,j9.x,0,-v9.y,v9.x,0,-n9.y,n9.x,0];if(!p6(Q,I8,A8,P8,w7))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!p6(Q,I8,A8,P8,w7))return!1;return _7.crossVectors(j9,v9),Q=[_7.x,_7.y,_7.z],p6(Q,I8,A8,P8,w7)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,tJ).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(tJ).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return k9[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),k9[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),k9[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),k9[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),k9[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),k9[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),k9[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),k9[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(k9),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var k9=[new f,new f,new f,new f,new f,new f,new f,new f],tJ=new f,C7=new P9,I8=new f,A8=new f,P8=new f,j9=new f,v9=new f,n9=new f,s8=new f,w7=new f,_7=new f,s9=new f;function p6(J,Q,$,Z,K){for(let W=0,H=J.length-3;W<=H;W+=3){s9.fromArray(J,W);let Y=K.x*Math.abs(s9.x)+K.y*Math.abs(s9.y)+K.z*Math.abs(s9.z),X=Q.dot(s9),U=$.dot(s9),G=Z.dot(s9);if(Math.max(-Math.max(X,U,G),Math.min(X,U,G))>Y)return!1}return!0}var RJ=new f,T7=new g0,yW=0;class lJ extends I9{constructor(J,Q,$=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yW++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let Z=0,K=this.itemSize;Z<K;Z++)this.array[J+Z]=Q.array[$+Z];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)T7.fromBufferAttribute(this,Q),T7.applyMatrix3(J),this.setXY(Q,T7.x,T7.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)RJ.fromBufferAttribute(this,Q),RJ.applyMatrix3(J),this.setXYZ(Q,RJ.x,RJ.y,RJ.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)RJ.fromBufferAttribute(this,Q),RJ.applyMatrix4(J),this.setXYZ(Q,RJ.x,RJ.y,RJ.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)RJ.fromBufferAttribute(this,Q),RJ.applyNormalMatrix(J),this.setXYZ(Q,RJ.x,RJ.y,RJ.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)RJ.fromBufferAttribute(this,Q),RJ.transformDirection(J),this.setXYZ(Q,RJ.x,RJ.y,RJ.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=c8($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=bJ($,this.array);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=c8(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=bJ(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=c8(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=bJ(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=c8(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=bJ(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=c8(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=bJ(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=bJ(Q,this.array),$=bJ($,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J*=this.itemSize,this.normalized)Q=bJ(Q,this.array),$=bJ($,this.array),Z=bJ(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this}setXYZW(J,Q,$,Z,K){if(J*=this.itemSize,this.normalized)Q=bJ(Q,this.array),$=bJ($,this.array),Z=bJ(Z,this.array),K=bJ(K,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this.array[J+3]=K,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")J.name=this.name;if(this.usage!==35044)J.usage=this.usage;return J}dispose(){this.dispatchEvent({type:"dispose"})}}class H6 extends lJ{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class Y6 extends lJ{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class hJ extends lJ{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var fW=new P9,i8=new f,m6=new f;class K8{constructor(J=new f,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else fW.setFromPoints(J).getCenter($);let Z=0;for(let K=0,W=J.length;K<W;K++)Z=Math.max(Z,$.distanceToSquared(J[K]));return this.radius=Math.sqrt(Z),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;i8.subVectors(J,this.center);let Q=i8.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),Z=($-this.radius)*0.5;this.center.addScaledVector(i8,Z/$),this.radius+=Z}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else m6.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(i8.copy(J.center).add(m6)),this.expandByPoint(i8.copy(J.center).sub(m6));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var bW=0,uJ=new QJ,l6=new kJ,C8=new f,mJ=new P9,o8=new P9,zJ=new f;class Q9 extends I9{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bW++}),this.uuid=W7(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((MW(J))?Y6:H6)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let K=new v0().getNormalMatrix(J);$.applyNormalMatrix(K),$.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection(J),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return uJ.makeRotationFromQuaternion(J),this.applyMatrix4(uJ),this}rotateX(J){return uJ.makeRotationX(J),this.applyMatrix4(uJ),this}rotateY(J){return uJ.makeRotationY(J),this.applyMatrix4(uJ),this}rotateZ(J){return uJ.makeRotationZ(J),this.applyMatrix4(uJ),this}translate(J,Q,$){return uJ.makeTranslation(J,Q,$),this.applyMatrix4(uJ),this}scale(J,Q,$){return uJ.makeScale(J,Q,$),this.applyMatrix4(uJ),this}lookAt(J){return l6.lookAt(J),l6.updateMatrix(),this.applyMatrix4(l6.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(C8).negate(),this.translate(C8.x,C8.y,C8.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let Z=0,K=J.length;Z<K;Z++){let W=J[Z];$.push(W.x,W.y,W.z||0)}this.setAttribute("position",new hJ($,3))}else{let $=Math.min(J.length,Q.count);for(let Z=0;Z<$;Z++){let K=J[Z];Q.setXYZ(Z,K.x,K.y,K.z||0)}if(J.length>Q.count)S0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new P9;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){T0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new f(-1/0,-1/0,-1/0),new f(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,Z=Q.length;$<Z;$++){let K=Q[$];if(mJ.setFromBufferAttribute(K),this.morphTargetsRelative)zJ.addVectors(this.boundingBox.min,mJ.min),this.boundingBox.expandByPoint(zJ),zJ.addVectors(this.boundingBox.max,mJ.max),this.boundingBox.expandByPoint(zJ);else this.boundingBox.expandByPoint(mJ.min),this.boundingBox.expandByPoint(mJ.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))T0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new K8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){T0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new f,1/0);return}if(J){let $=this.boundingSphere.center;if(mJ.setFromBufferAttribute(J),Q)for(let K=0,W=Q.length;K<W;K++){let H=Q[K];if(o8.setFromBufferAttribute(H),this.morphTargetsRelative)zJ.addVectors(mJ.min,o8.min),mJ.expandByPoint(zJ),zJ.addVectors(mJ.max,o8.max),mJ.expandByPoint(zJ);else mJ.expandByPoint(o8.min),mJ.expandByPoint(o8.max)}mJ.getCenter($);let Z=0;for(let K=0,W=J.count;K<W;K++)zJ.fromBufferAttribute(J,K),Z=Math.max(Z,$.distanceToSquared(zJ));if(Q)for(let K=0,W=Q.length;K<W;K++){let H=Q[K],Y=this.morphTargetsRelative;for(let X=0,U=H.count;X<U;X++){if(zJ.fromBufferAttribute(H,X),Y)C8.fromBufferAttribute(J,X),zJ.add(C8);Z=Math.max(Z,$.distanceToSquared(zJ))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))T0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){T0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:Z,uv:K}=Q,W=this.getAttribute("tangent");if(W===void 0||W.count!==$.count)W=new lJ(new Float32Array(4*$.count),4),this.setAttribute("tangent",W);let H=[],Y=[];for(let w=0;w<$.count;w++)H[w]=new f,Y[w]=new f;let X=new f,U=new f,G=new f,F=new g0,N=new g0,E=new g0,L=new f,B=new f;function q(w,R,z){X.fromBufferAttribute($,w),U.fromBufferAttribute($,R),G.fromBufferAttribute($,z),F.fromBufferAttribute(K,w),N.fromBufferAttribute(K,R),E.fromBufferAttribute(K,z),U.sub(X),G.sub(X),N.sub(F),E.sub(F);let d=1/(N.x*E.y-E.x*N.y);if(!isFinite(d))return;L.copy(U).multiplyScalar(E.y).addScaledVector(G,-N.y).multiplyScalar(d),B.copy(G).multiplyScalar(N.x).addScaledVector(U,-E.x).multiplyScalar(d),H[w].add(L),H[R].add(L),H[z].add(L),Y[w].add(B),Y[R].add(B),Y[z].add(B)}let O=this.groups;if(O.length===0)O=[{start:0,count:J.count}];for(let w=0,R=O.length;w<R;++w){let z=O[w],d=z.start,P=z.count;for(let p=d,a=d+P;p<a;p+=3)q(J.getX(p+0),J.getX(p+1),J.getX(p+2))}let _=new f,C=new f,M=new f,A=new f;function I(w){M.fromBufferAttribute(Z,w),A.copy(M);let R=H[w];_.copy(R),_.sub(M.multiplyScalar(M.dot(R))).normalize(),C.crossVectors(A,R);let d=C.dot(Y[w])<0?-1:1;W.setXYZW(w,_.x,_.y,_.z,d)}for(let w=0,R=O.length;w<R;++w){let z=O[w],d=z.start,P=z.count;for(let p=d,a=d+P;p<a;p+=3)I(J.getX(p+0)),I(J.getX(p+1)),I(J.getX(p+2))}this._transformed=!0}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0||$.count!==Q.count)$=new lJ(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let F=0,N=$.count;F<N;F++)$.setXYZ(F,0,0,0);let Z=new f,K=new f,W=new f,H=new f,Y=new f,X=new f,U=new f,G=new f;if(J)for(let F=0,N=J.count;F<N;F+=3){let E=J.getX(F+0),L=J.getX(F+1),B=J.getX(F+2);Z.fromBufferAttribute(Q,E),K.fromBufferAttribute(Q,L),W.fromBufferAttribute(Q,B),U.subVectors(W,K),G.subVectors(Z,K),U.cross(G),H.fromBufferAttribute($,E),Y.fromBufferAttribute($,L),X.fromBufferAttribute($,B),H.add(U),Y.add(U),X.add(U),$.setXYZ(E,H.x,H.y,H.z),$.setXYZ(L,Y.x,Y.y,Y.z),$.setXYZ(B,X.x,X.y,X.z)}else for(let F=0,N=Q.count;F<N;F+=3)Z.fromBufferAttribute(Q,F+0),K.fromBufferAttribute(Q,F+1),W.fromBufferAttribute(Q,F+2),U.subVectors(W,K),G.subVectors(Z,K),U.cross(G),$.setXYZ(F+0,U.x,U.y,U.z),$.setXYZ(F+1,U.x,U.y,U.z),$.setXYZ(F+2,U.x,U.y,U.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)zJ.fromBufferAttribute(J,Q),zJ.normalize(),J.setXYZ(Q,zJ.x,zJ.y,zJ.z)}toNonIndexed(){function J(H,Y){let{array:X,itemSize:U,normalized:G}=H,F=new X.constructor(Y.length*U),N=0,E=0;for(let L=0,B=Y.length;L<B;L++){if(H.isInterleavedBufferAttribute)N=Y[L]*H.data.stride+H.offset;else N=Y[L]*U;for(let q=0;q<U;q++)F[E++]=X[N++]}return new lJ(F,U,G)}if(this.index===null)return S0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new Q9,$=this.index.array,Z=this.attributes;for(let H in Z){let Y=Z[H],X=J(Y,$);Q.setAttribute(H,X)}let K=this.morphAttributes;for(let H in K){let Y=[],X=K[H];for(let U=0,G=X.length;U<G;U++){let F=X[U],N=J(F,$);Y.push(N)}Q.morphAttributes[H]=Y}Q.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;for(let H=0,Y=W.length;H<Y;H++){let X=W[H];Q.addGroup(X.start,X.count,X.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!=="")J.name=this.name;if(Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let Y=this.parameters;for(let X in Y)if(Y[X]!==void 0)J[X]=Y[X];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let Y in $){let X=$[Y];J.data.attributes[Y]=X.toJSON(J.data)}let Z={},K=!1;for(let Y in this.morphAttributes){let X=this.morphAttributes[Y],U=[];for(let G=0,F=X.length;G<F;G++){let N=X[G];U.push(N.toJSON(J.data))}if(U.length>0)Z[Y]=U,K=!0}if(K)J.data.morphAttributes=Z,J.data.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;if(W.length>0)J.data.groups=JSON.parse(JSON.stringify(W));let H=this.boundingSphere;if(H!==null)J.data.boundingSphere=H.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let Z=J.attributes;for(let X in Z){let U=Z[X];this.setAttribute(X,U.clone(Q))}let K=J.morphAttributes;for(let X in K){let U=[],G=K[X];for(let F=0,N=G.length;F<N;F++)U.push(G[F].clone(Q));this.morphAttributes[X]=U}this.morphTargetsRelative=J.morphTargetsRelative;let W=J.groups;for(let X=0,U=W.length;X<U;X++){let G=W[X];this.addGroup(G.start,G.count,G.materialIndex)}let H=J.boundingBox;if(H!==null)this.boundingBox=H.clone();let Y=J.boundingSphere;if(Y!==null)this.boundingSphere=Y.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}var hW=0;class x9 extends I9{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:hW++}),this.uuid=W7(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new b0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){S0(`Material: parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){S0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set($);else if(Z&&Z.isVector2&&($&&$.isVector2)||Z&&Z.isEuler&&($&&$.isEuler)||Z&&Z.isVector3&&($&&$.isVector3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,this.name!=="")$.name=this.name;if(this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)$.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)$.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)$.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.shadowSide!==null)$.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)$.blending=this.blending;if(this.side!==0)$.side=this.side;if(this.vertexColors===!0)$.vertexColors=!0;if(this.opacity<1)$.opacity=this.opacity;if(this.transparent===!0)$.transparent=!0;if(this.blendSrc!==204)$.blendSrc=this.blendSrc;if(this.blendDst!==205)$.blendDst=this.blendDst;if(this.blendEquation!==100)$.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)$.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)$.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)$.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)$.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)$.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)$.depthFunc=this.depthFunc;if(this.depthTest===!1)$.depthTest=this.depthTest;if(this.depthWrite===!1)$.depthWrite=this.depthWrite;if(this.colorWrite===!1)$.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)$.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)$.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)$.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)$.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)$.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)$.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)$.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)$.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)$.rotation=this.rotation;if(this.polygonOffset===!0)$.polygonOffset=!0;if(this.polygonOffsetFactor!==0)$.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)$.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)$.linewidth=this.linewidth;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.dithering===!0)$.dithering=!0;if(this.alphaTest>0)$.alphaTest=this.alphaTest;if(this.alphaHash===!0)$.alphaHash=!0;if(this.alphaToCoverage===!0)$.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)$.premultipliedAlpha=!0;if(this.forceSinglePass===!0)$.forceSinglePass=!0;if(this.allowOverride===!1)$.allowOverride=!1;if(this.wireframe===!0)$.wireframe=!0;if(this.wireframeLinewidth>1)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)$.flatShading=!0;if(this.visible===!1)$.visible=!1;if(this.toneMapped===!1)$.toneMapped=!1;if(this.fog===!1)$.fog=!1;if(Object.keys(this.userData).length>0)$.userData=this.userData;function Z(K){let W=[];for(let H in K){let Y=K[H];delete Y.metadata,W.push(Y)}return W}if(Q){let K=Z(J.textures),W=Z(J.images);if(K.length>0)$.textures=K;if(W.length>0)$.images=W}return $}fromJSON(J,Q){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new b0().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=J.iridescenceThicknessRange;if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=Q[J.map]||null;if(J.matcap!==void 0)this.matcap=Q[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=Q[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=Q[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=Q[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let $=J.normalScale;if(Array.isArray($)===!1)$=[$,$];this.normalScale=new g0().fromArray($)}if(J.displacementMap!==void 0)this.displacementMap=Q[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=Q[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=Q[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=Q[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=Q[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=Q[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=Q[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=Q[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=Q[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=Q[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=Q[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=Q[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=Q[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=Q[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new g0().fromArray(J.clearcoatNormalScale);if(J.iridescenceMap!==void 0)this.iridescenceMap=Q[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=Q[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=Q[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=Q[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=Q[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=Q[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=Q[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let Z=Q.length;$=Array(Z);for(let K=0;K!==Z;++K)$[K]=Q[K].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}var L9=new f,d6=new f,S7=new f,y9=new f,u6=new f,j7=new f,c6=new f;class X6{constructor(J=new f,Q=new f(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,L9)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=L9.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return L9.copy(this.origin).addScaledVector(this.direction,Q),L9.distanceToSquared(J)}distanceSqToSegment(J,Q,$,Z){d6.copy(J).add(Q).multiplyScalar(0.5),S7.copy(Q).sub(J).normalize(),y9.copy(this.origin).sub(d6);let K=J.distanceTo(Q)*0.5,W=-this.direction.dot(S7),H=y9.dot(this.direction),Y=-y9.dot(S7),X=y9.lengthSq(),U=Math.abs(1-W*W),G,F,N,E;if(U>0)if(G=W*Y-H,F=W*H-Y,E=K*U,G>=0)if(F>=-E)if(F<=E){let L=1/U;G*=L,F*=L,N=G*(G+W*F+2*H)+F*(W*G+F+2*Y)+X}else F=K,G=Math.max(0,-(W*F+H)),N=-G*G+F*(F+2*Y)+X;else F=-K,G=Math.max(0,-(W*F+H)),N=-G*G+F*(F+2*Y)+X;else if(F<=-E)G=Math.max(0,-(-W*K+H)),F=G>0?-K:Math.min(Math.max(-K,-Y),K),N=-G*G+F*(F+2*Y)+X;else if(F<=E)G=0,F=Math.min(Math.max(-K,-Y),K),N=F*(F+2*Y)+X;else G=Math.max(0,-(W*K+H)),F=G>0?K:Math.min(Math.max(-K,-Y),K),N=-G*G+F*(F+2*Y)+X;else F=W>0?-K:K,G=Math.max(0,-(W*F+H)),N=-G*G+F*(F+2*Y)+X;if($)$.copy(this.origin).addScaledVector(this.direction,G);if(Z)Z.copy(d6).addScaledVector(S7,F);return N}intersectSphere(J,Q){L9.subVectors(J.center,this.origin);let $=L9.dot(this.direction),Z=L9.dot(L9)-$*$,K=J.radius*J.radius;if(Z>K)return null;let W=Math.sqrt(K-Z),H=$-W,Y=$+W;if(Y<0)return null;if(H<0)return this.at(Y,Q);return this.at(H,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,Z,K,W,H,Y,X=1/this.direction.x,U=1/this.direction.y,G=1/this.direction.z,F=this.origin;if(X>=0)$=(J.min.x-F.x)*X,Z=(J.max.x-F.x)*X;else $=(J.max.x-F.x)*X,Z=(J.min.x-F.x)*X;if(U>=0)K=(J.min.y-F.y)*U,W=(J.max.y-F.y)*U;else K=(J.max.y-F.y)*U,W=(J.min.y-F.y)*U;if($>W||K>Z)return null;if(K>$||isNaN($))$=K;if(W<Z||isNaN(Z))Z=W;if(G>=0)H=(J.min.z-F.z)*G,Y=(J.max.z-F.z)*G;else H=(J.max.z-F.z)*G,Y=(J.min.z-F.z)*G;if($>Y||H>Z)return null;if(H>$||$!==$)$=H;if(Y<Z||Z!==Z)Z=Y;if(Z<0)return null;return this.at($>=0?$:Z,Q)}intersectsBox(J){return this.intersectBox(J,L9)!==null}intersectTriangle(J,Q,$,Z,K){u6.subVectors(Q,J),j7.subVectors($,J),c6.crossVectors(u6,j7);let W=this.direction.dot(c6),H;if(W>0){if(Z)return null;H=1}else if(W<0)H=-1,W=-W;else return null;y9.subVectors(this.origin,J);let Y=H*this.direction.dot(j7.crossVectors(y9,j7));if(Y<0)return null;let X=H*this.direction.dot(u6.cross(y9));if(X<0)return null;if(Y+X>W)return null;let U=-H*y9.dot(c6);if(U<0)return null;return this.at(U/W,K)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class N9 extends x9{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new b0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Y9,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var QZ=new QJ,i9=new X6,v7=new K8,$Z=new f,y7=new f,f7=new f,b7=new f,n6=new f,h7=new f,ZZ=new f,x7=new f;class j0 extends kJ{constructor(J=new Q9,Q=new N9){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let K=0,W=Z.length;K<W;K++){let H=Z[K].name||String(K);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=K}}}}getVertexPosition(J,Q){let $=this.geometry,Z=$.attributes.position,K=$.morphAttributes.position,W=$.morphTargetsRelative;Q.fromBufferAttribute(Z,J);let H=this.morphTargetInfluences;if(K&&H){h7.set(0,0,0);for(let Y=0,X=K.length;Y<X;Y++){let U=H[Y],G=K[Y];if(U===0)continue;if(n6.fromBufferAttribute(G,J),W)h7.addScaledVector(n6,U);else h7.addScaledVector(n6.sub(Q),U)}Q.add(h7)}return Q}raycast(J,Q){let $=this.geometry,Z=this.material,K=this.matrixWorld;if(Z===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(v7.copy($.boundingSphere),v7.applyMatrix4(K),i9.copy(J.ray).recast(J.near),v7.containsPoint(i9.origin)===!1){if(i9.intersectSphere(v7,$Z)===null)return;if(i9.origin.distanceToSquared($Z)>(J.far-J.near)**2)return}if(QZ.copy(K).invert(),i9.copy(J.ray).applyMatrix4(QZ),$.boundingBox!==null){if(i9.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,i9)}_computeIntersections(J,Q,$){let Z,K=this.geometry,W=this.material,H=K.index,Y=K.attributes.position,X=K.attributes.uv,U=K.attributes.uv1,G=K.attributes.normal,F=K.groups,N=K.drawRange;if(H!==null)if(Array.isArray(W))for(let E=0,L=F.length;E<L;E++){let B=F[E],q=W[B.materialIndex],O=Math.max(B.start,N.start),_=Math.min(H.count,Math.min(B.start+B.count,N.start+N.count));for(let C=O,M=_;C<M;C+=3){let A=H.getX(C),I=H.getX(C+1),w=H.getX(C+2);if(Z=g7(this,q,J,$,X,U,G,A,I,w),Z)Z.faceIndex=Math.floor(C/3),Z.face.materialIndex=B.materialIndex,Q.push(Z)}}else{let E=Math.max(0,N.start),L=Math.min(H.count,N.start+N.count);for(let B=E,q=L;B<q;B+=3){let O=H.getX(B),_=H.getX(B+1),C=H.getX(B+2);if(Z=g7(this,W,J,$,X,U,G,O,_,C),Z)Z.faceIndex=Math.floor(B/3),Q.push(Z)}}else if(Y!==void 0)if(Array.isArray(W))for(let E=0,L=F.length;E<L;E++){let B=F[E],q=W[B.materialIndex],O=Math.max(B.start,N.start),_=Math.min(Y.count,Math.min(B.start+B.count,N.start+N.count));for(let C=O,M=_;C<M;C+=3){let A=C,I=C+1,w=C+2;if(Z=g7(this,q,J,$,X,U,G,A,I,w),Z)Z.faceIndex=Math.floor(C/3),Z.face.materialIndex=B.materialIndex,Q.push(Z)}}else{let E=Math.max(0,N.start),L=Math.min(Y.count,N.start+N.count);for(let B=E,q=L;B<q;B+=3){let O=B,_=B+1,C=B+2;if(Z=g7(this,W,J,$,X,U,G,O,_,C),Z)Z.faceIndex=Math.floor(B/3),Q.push(Z)}}}}function xW(J,Q,$,Z,K,W,H,Y){let X;if(Q.side===1)X=Z.intersectTriangle(H,W,K,!0,Y);else X=Z.intersectTriangle(K,W,H,Q.side===0,Y);if(X===null)return null;x7.copy(Y),x7.applyMatrix4(J.matrixWorld);let U=$.ray.origin.distanceTo(x7);if(U<$.near||U>$.far)return null;return{distance:U,point:x7.clone(),object:J}}function g7(J,Q,$,Z,K,W,H,Y,X,U){J.getVertexPosition(Y,y7),J.getVertexPosition(X,f7),J.getVertexPosition(U,b7);let G=xW(J,Q,$,Z,y7,f7,b7,ZZ);if(G){let F=new f;if(cJ.getBarycoord(ZZ,y7,f7,b7,F),K)G.uv=cJ.getInterpolatedAttribute(K,Y,X,U,F,new g0);if(W)G.uv1=cJ.getInterpolatedAttribute(W,Y,X,U,F,new g0);if(H){if(G.normal=cJ.getInterpolatedAttribute(H,Y,X,U,F,new f),G.normal.dot(Z.direction)>0)G.normal.multiplyScalar(-1)}let N={a:Y,b:X,c:U,normal:new f,materialIndex:0};cJ.getNormal(y7,f7,b7,N.normal),G.face=N,G.barycoord=F}return G}class U6 extends CJ{constructor(J=null,Q=1,$=1,Z,K,W,H,Y,X=1003,U=1003,G,F){super(null,W,H,Y,X,U,Z,K,G,F);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class n7 extends lJ{constructor(J,Q,$,Z=1){super(J,Q,$);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=Z}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var w8=new QJ,KZ=new QJ,p7=[],WZ=new P9,gW=new QJ,a8=new j0,r8=new K8;class g8 extends j0{constructor(J,Q,$){super(J,Q);this.isInstancedMesh=!0,this.instanceMatrix=new n7(new Float32Array($*16),16),this.instanceColor=null,this.morphTexture=null,this.count=$,this.boundingBox=null,this.boundingSphere=null;for(let Z=0;Z<$;Z++)this.setMatrixAt(Z,gW)}computeBoundingBox(){let J=this.geometry,Q=this.count;if(this.boundingBox===null)this.boundingBox=new P9;if(J.boundingBox===null)J.computeBoundingBox();this.boundingBox.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,w8),WZ.copy(J.boundingBox).applyMatrix4(w8),this.boundingBox.union(WZ)}computeBoundingSphere(){let J=this.geometry,Q=this.count;if(this.boundingSphere===null)this.boundingSphere=new K8;if(J.boundingSphere===null)J.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,w8),r8.copy(J.boundingSphere).applyMatrix4(w8),this.boundingSphere.union(r8)}copy(J,Q){if(super.copy(J,Q),this.instanceMatrix.copy(J.instanceMatrix),J.morphTexture!==null)this.morphTexture=J.morphTexture.clone();if(J.instanceColor!==null)this.instanceColor=J.instanceColor.clone();if(this.count=J.count,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}getColorAt(J,Q){if(this.instanceColor===null)return Q.setRGB(1,1,1);else return Q.fromArray(this.instanceColor.array,J*3)}getMatrixAt(J,Q){return Q.fromArray(this.instanceMatrix.array,J*16)}getMorphAt(J,Q){let $=Q.morphTargetInfluences,Z=this.morphTexture.source.data.data,K=$.length+1,W=J*K+1;for(let H=0;H<$.length;H++)$[H]=Z[W+H]}raycast(J,Q){let $=this.matrixWorld,Z=this.count;if(a8.geometry=this.geometry,a8.material=this.material,a8.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(r8.copy(this.boundingSphere),r8.applyMatrix4($),J.ray.intersectsSphere(r8)===!1)return;for(let K=0;K<Z;K++){this.getMatrixAt(K,w8),KZ.multiplyMatrices($,w8),a8.matrixWorld=KZ,a8.raycast(J,p7);for(let W=0,H=p7.length;W<H;W++){let Y=p7[W];Y.instanceId=K,Y.object=this,Q.push(Y)}p7.length=0}}setColorAt(J,Q){if(this.instanceColor===null)this.instanceColor=new n7(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return Q.toArray(this.instanceColor.array,J*3),this}setMatrixAt(J,Q){return Q.toArray(this.instanceMatrix.array,J*16),this}setMorphAt(J,Q){let $=Q.morphTargetInfluences,Z=$.length+1;if(this.morphTexture===null)this.morphTexture=new U6(new Float32Array(Z*this.count),Z,this.count,1028,1015);let K=this.morphTexture.source.data.data,W=0;for(let X=0;X<$.length;X++)W+=$[X];let H=this.geometry.morphTargetsRelative?1:1-W,Y=Z*J;return K[Y]=H,K.set($,Y+1),this}updateMorphTargets(){}dispose(){if(this.dispatchEvent({type:"dispose"}),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var s6=new f,pW=new f,mW=new v0;class V9{constructor(J=new f(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,Z){return this.normal.set(J,Q,$),this.constant=Z,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let Z=s6.subVectors($,Q).cross(pW.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(Z,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,$=!0){let Z=J.delta(s6),K=this.normal.dot(Z);if(K===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let W=-(J.start.dot(this.normal)+this.constant)/K;if($===!0&&(W<0||W>1))return null;return Q.copy(J.start).addScaledVector(Z,W)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||mW.getNormalMatrix(J),Z=this.coplanarPoint(s6).applyMatrix4(J),K=this.normal.applyMatrix3($).normalize();return this.constant=-Z.dot(K),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}}var o9=new K8,lW=new g0(0.5,0.5),m7=new f;class U7{constructor(J=new V9,Q=new V9,$=new V9,Z=new V9,K=new V9,W=new V9){this.planes=[J,Q,$,Z,K,W]}set(J,Q,$,Z,K,W){let H=this.planes;return H[0].copy(J),H[1].copy(Q),H[2].copy($),H[3].copy(Z),H[4].copy(K),H[5].copy(W),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let Z=this.planes,K=J.elements,W=K[0],H=K[1],Y=K[2],X=K[3],U=K[4],G=K[5],F=K[6],N=K[7],E=K[8],L=K[9],B=K[10],q=K[11],O=K[12],_=K[13],C=K[14],M=K[15];if(Z[0].setComponents(X-W,N-U,q-E,M-O).normalize(),Z[1].setComponents(X+W,N+U,q+E,M+O).normalize(),Z[2].setComponents(X+H,N+G,q+L,M+_).normalize(),Z[3].setComponents(X-H,N-G,q-L,M-_).normalize(),$)Z[4].setComponents(Y,F,B,C).normalize(),Z[5].setComponents(X-Y,N-F,q-B,M-C).normalize();else if(Z[4].setComponents(X-Y,N-F,q-B,M-C).normalize(),Q===2000)Z[5].setComponents(X+Y,N+F,q+B,M+C).normalize();else if(Q===2001)Z[5].setComponents(Y,F,B,C).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();o9.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();o9.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(o9)}intersectsSprite(J){o9.center.set(0,0,0);let Q=lW.distanceTo(J.center);return o9.radius=0.7071067811865476+Q,o9.applyMatrix4(J.matrixWorld),this.intersectsSphere(o9)}intersectsSphere(J){let Q=this.planes,$=J.center,Z=-J.radius;for(let K=0;K<6;K++)if(Q[K].distanceToPoint($)<Z)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let Z=Q[$];if(m7.x=Z.normal.x>0?J.max.x:J.min.x,m7.y=Z.normal.y>0?J.max.y:J.min.y,m7.z=Z.normal.z>0?J.max.z:J.min.z,Z.distanceToPoint(m7)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class q6 extends CJ{constructor(J=[],Q=301,$,Z,K,W,H,Y,X,U){super(J,Q,$,Z,K,W,H,Y,X,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class p8 extends CJ{constructor(J,Q,$,Z,K,W,H,Y,X){super(J,Q,$,Z,K,W,H,Y,X);this.isCanvasTexture=!0,this.needsUpdate=!0}}class g9 extends CJ{constructor(J,Q,$=1014,Z,K,W,H=1003,Y=1003,X,U=1026,G=1){if(U!==1026&&U!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let F={width:J,height:Q,depth:G};super(F,Z,K,W,H,Y,U,$,X);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new H7(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);if(this.compareFunction!==null)Q.compareFunction=this.compareFunction;return Q}}class tQ extends g9{constructor(J,Q=1014,$=301,Z,K,W=1003,H=1003,Y,X=1026){let U={width:J,height:J,depth:1},G=[U,U,U,U,U,U];super(J,J,Q,$,Z,K,W,H,Y,X);this.image=G,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class N6 extends CJ{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class FJ extends Q9{constructor(J=1,Q=1,$=1,Z=1,K=1,W=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:Z,heightSegments:K,depthSegments:W};let H=this;Z=Math.floor(Z),K=Math.floor(K),W=Math.floor(W);let Y=[],X=[],U=[],G=[],F=0,N=0;E("z","y","x",-1,-1,$,Q,J,W,K,0),E("z","y","x",1,-1,$,Q,-J,W,K,1),E("x","z","y",1,1,J,$,Q,Z,W,2),E("x","z","y",1,-1,J,$,-Q,Z,W,3),E("x","y","z",1,-1,J,Q,$,Z,K,4),E("x","y","z",-1,-1,J,Q,-$,Z,K,5),this.setIndex(Y),this.setAttribute("position",new hJ(X,3)),this.setAttribute("normal",new hJ(U,3)),this.setAttribute("uv",new hJ(G,2));function E(L,B,q,O,_,C,M,A,I,w,R){let z=C/I,d=M/w,P=C/2,p=M/2,a=A/2,x=I+1,u=w+1,i=0,b=0,t=new f;for(let J0=0;J0<u;J0++){let H0=J0*d-p;for(let V0=0;V0<x;V0++){let k0=V0*z-P;t[L]=k0*O,t[B]=H0*_,t[q]=a,X.push(t.x,t.y,t.z),t[L]=0,t[B]=0,t[q]=A>0?1:-1,U.push(t.x,t.y,t.z),G.push(V0/I),G.push(1-J0/w),i+=1}}for(let J0=0;J0<w;J0++)for(let H0=0;H0<I;H0++){let V0=F+H0+x*J0,k0=F+H0+x*(J0+1),a0=F+(H0+1)+x*(J0+1),t0=F+(H0+1)+x*J0;Y.push(V0,k0,t0),Y.push(k0,a0,t0),b+=6}H.addGroup(N,b,R),N+=b,F+=i}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new FJ(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class p9 extends Q9{constructor(J=1,Q=1,$=1,Z=32,K=1,W=!1,H=0,Y=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:Q,height:$,radialSegments:Z,heightSegments:K,openEnded:W,thetaStart:H,thetaLength:Y};let X=this;Z=Math.floor(Z),K=Math.floor(K);let U=[],G=[],F=[],N=[],E=0,L=[],B=$/2,q=0;if(O(),W===!1){if(J>0)_(!0);if(Q>0)_(!1)}this.setIndex(U),this.setAttribute("position",new hJ(G,3)),this.setAttribute("normal",new hJ(F,3)),this.setAttribute("uv",new hJ(N,2));function O(){let C=new f,M=new f,A=0,I=(Q-J)/$;for(let w=0;w<=K;w++){let R=[],z=w/K,d=z*(Q-J)+J;for(let P=0;P<=Z;P++){let p=P/Z,a=p*Y+H,x=Math.sin(a),u=Math.cos(a);M.x=d*x,M.y=-z*$+B,M.z=d*u,G.push(M.x,M.y,M.z),C.set(x,I,u).normalize(),F.push(C.x,C.y,C.z),N.push(p,1-z),R.push(E++)}L.push(R)}for(let w=0;w<Z;w++)for(let R=0;R<K;R++){let z=L[R][w],d=L[R+1][w],P=L[R+1][w+1],p=L[R][w+1];if(J>0||R!==0)U.push(z,d,p),A+=3;if(Q>0||R!==K-1)U.push(d,P,p),A+=3}X.addGroup(q,A,0),q+=A}function _(C){let M=E,A=new g0,I=new f,w=0,R=C===!0?J:Q,z=C===!0?1:-1;for(let P=1;P<=Z;P++)G.push(0,B*z,0),F.push(0,z,0),N.push(0.5,0.5),E++;let d=E;for(let P=0;P<=Z;P++){let a=P/Z*Y+H,x=Math.cos(a),u=Math.sin(a);I.x=R*u,I.y=B*z,I.z=R*x,G.push(I.x,I.y,I.z),F.push(0,z,0),A.x=x*0.5+0.5,A.y=u*0.5*z+0.5,N.push(A.x,A.y),E++}for(let P=0;P<Z;P++){let p=M+P,a=d+P;if(C===!0)U.push(a,a+1,p);else U.push(a+1,a,p);w+=3}X.addGroup(q,w,C===!0?1:2),q+=w}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new p9(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class $9 extends Q9{constructor(J=1,Q=1,$=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:Z};let K=J/2,W=Q/2,H=Math.floor($),Y=Math.floor(Z),X=H+1,U=Y+1,G=J/H,F=Q/Y,N=[],E=[],L=[],B=[];for(let q=0;q<U;q++){let O=q*F-W;for(let _=0;_<X;_++){let C=_*G-K;E.push(C,-O,0),L.push(0,0,1),B.push(_/H),B.push(1-q/Y)}}for(let q=0;q<Y;q++)for(let O=0;O<H;O++){let _=O+X*q,C=O+X*(q+1),M=O+1+X*(q+1),A=O+1+X*q;N.push(_,C,A),N.push(C,M,A)}this.setIndex(N),this.setAttribute("position",new hJ(E,3)),this.setAttribute("normal",new hJ(L,3)),this.setAttribute("uv",new hJ(B,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new $9(J.width,J.height,J.widthSegments,J.heightSegments)}}function W8(J){let Q={};for(let $ in J){Q[$]={};for(let Z in J[$]){let K=J[$][Z];if(HZ(K))if(K.isRenderTargetTexture)S0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][Z]=null;else Q[$][Z]=K.clone();else if(Array.isArray(K))if(HZ(K[0])){let W=[];for(let H=0,Y=K.length;H<Y;H++)W[H]=K[H].clone();Q[$][Z]=W}else Q[$][Z]=K.slice();else Q[$][Z]=K}}return Q}function yJ(J){let Q={};for(let $=0;$<J.length;$++){let Z=W8(J[$]);for(let K in Z)Q[K]=Z[K]}return Q}function HZ(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function dW(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function eQ(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return u0.workingColorSpace}var EK={clone:W8,merge:yJ},uW=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cW=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sJ extends x9{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uW,this.fragmentShader=cW,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=W8(J.uniforms),this.uniformsGroups=dW(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let Z in this.uniforms){let W=this.uniforms[Z].value;if(W&&W.isTexture)Q.uniforms[Z]={type:"t",value:W.toJSON(J).uuid};else if(W&&W.isColor)Q.uniforms[Z]={type:"c",value:W.getHex()};else if(W&&W.isVector2)Q.uniforms[Z]={type:"v2",value:W.toArray()};else if(W&&W.isVector3)Q.uniforms[Z]={type:"v3",value:W.toArray()};else if(W&&W.isVector4)Q.uniforms[Z]={type:"v4",value:W.toArray()};else if(W&&W.isMatrix3)Q.uniforms[Z]={type:"m3",value:W.toArray()};else if(W&&W.isMatrix4)Q.uniforms[Z]={type:"m4",value:W.toArray()};else Q.uniforms[Z]={value:W}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let Z in this.extensions)if(this.extensions[Z]===!0)$[Z]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}fromJSON(J,Q){if(super.fromJSON(J,Q),J.uniforms!==void 0)for(let $ in J.uniforms){let Z=J.uniforms[$];switch(this.uniforms[$]={},Z.type){case"t":this.uniforms[$].value=Q[Z.value]||null;break;case"c":this.uniforms[$].value=new b0().setHex(Z.value);break;case"v2":this.uniforms[$].value=new g0().fromArray(Z.value);break;case"v3":this.uniforms[$].value=new f().fromArray(Z.value);break;case"v4":this.uniforms[$].value=new NJ().fromArray(Z.value);break;case"m3":this.uniforms[$].value=new v0().fromArray(Z.value);break;case"m4":this.uniforms[$].value=new QJ().fromArray(Z.value);break;default:this.uniforms[$].value=Z.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let $ in J.extensions)this.extensions[$]=J.extensions[$];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class J$ extends sJ{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Z9 extends x9{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new b0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new b0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new g0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Y9,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class H8 extends Z9{constructor(J){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new g0(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return c0(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(Q){this.ior=(1+0.4*Q)/(1-0.4*Q)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new b0(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new b0(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new b0(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(J)}get anisotropy(){return this._anisotropy}set anisotropy(J){if(this._anisotropy>0!==J>0)this.version++;this._anisotropy=J}get clearcoat(){return this._clearcoat}set clearcoat(J){if(this._clearcoat>0!==J>0)this.version++;this._clearcoat=J}get iridescence(){return this._iridescence}set iridescence(J){if(this._iridescence>0!==J>0)this.version++;this._iridescence=J}get dispersion(){return this._dispersion}set dispersion(J){if(this._dispersion>0!==J>0)this.version++;this._dispersion=J}get sheen(){return this._sheen}set sheen(J){if(this._sheen>0!==J>0)this.version++;this._sheen=J}get transmission(){return this._transmission}set transmission(J){if(this._transmission>0!==J>0)this.version++;this._transmission=J}copy(J){return super.copy(J),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=J.anisotropy,this.anisotropyRotation=J.anisotropyRotation,this.anisotropyMap=J.anisotropyMap,this.clearcoat=J.clearcoat,this.clearcoatMap=J.clearcoatMap,this.clearcoatRoughness=J.clearcoatRoughness,this.clearcoatRoughnessMap=J.clearcoatRoughnessMap,this.clearcoatNormalMap=J.clearcoatNormalMap,this.clearcoatNormalScale.copy(J.clearcoatNormalScale),this.dispersion=J.dispersion,this.ior=J.ior,this.iridescence=J.iridescence,this.iridescenceMap=J.iridescenceMap,this.iridescenceIOR=J.iridescenceIOR,this.iridescenceThicknessRange=[...J.iridescenceThicknessRange],this.iridescenceThicknessMap=J.iridescenceThicknessMap,this.sheen=J.sheen,this.sheenColor.copy(J.sheenColor),this.sheenColorMap=J.sheenColorMap,this.sheenRoughness=J.sheenRoughness,this.sheenRoughnessMap=J.sheenRoughnessMap,this.transmission=J.transmission,this.transmissionMap=J.transmissionMap,this.thickness=J.thickness,this.thicknessMap=J.thicknessMap,this.attenuationDistance=J.attenuationDistance,this.attenuationColor.copy(J.attenuationColor),this.specularIntensity=J.specularIntensity,this.specularIntensityMap=J.specularIntensityMap,this.specularColor.copy(J.specularColor),this.specularColorMap=J.specularColorMap,this}}class G6 extends x9{constructor(J){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new b0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new b0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new g0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Y9,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.envMapIntensity=J.envMapIntensity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class Q$ extends x9{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class $$ extends x9{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function l7(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}class Y8{constructor(J,Q,$,Z){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,Z=Q[$],K=Q[$-1];$:{J:{let W;Q:{Z:if(!(J<Z)){for(let H=$+2;;){if(Z===void 0){if(J<K)break Z;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===H)break;if(K=Z,Z=Q[++$],J<Z)break J}W=Q.length;break Q}if(!(J>=K)){let H=Q[1];if(J<H)$=2,K=H;for(let Y=$-2;;){if(K===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===Y)break;if(Z=K,K=Q[--$-1],J>=K)break J}W=$,$=0;break Q}break $}while($<W){let H=$+W>>>1;if(J<Q[H])W=H;else $=H+1}if(Z=Q[$],K=Q[$-1],K===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,K,Z)}return this.interpolate_($,K,J,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,K=J*Z;for(let W=0;W!==Z;++W)Q[W]=$[K+W];return Q}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Z$ extends Y8{constructor(J,Q,$,Z){super(J,Q,$,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let Z=this.parameterPositions,K=J-2,W=J+1,H=Z[K],Y=Z[W];if(H===void 0)switch(this.getSettings_().endingStart){case 2401:K=J,H=2*Q-$;break;case 2402:K=Z.length-2,H=Q+Z[K]-Z[K+1];break;default:K=J,H=$}if(Y===void 0)switch(this.getSettings_().endingEnd){case 2401:W=J,Y=2*$-Q;break;case 2402:W=1,Y=$+Z[1]-Z[0];break;default:W=J-1,Y=Q}let X=($-Q)*0.5,U=this.valueSize;this._weightPrev=X/(Q-H),this._weightNext=X/(Y-$),this._offsetPrev=K*U,this._offsetNext=W*U}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=this._offsetPrev,G=this._offsetNext,F=this._weightPrev,N=this._weightNext,E=($-Q)/(Z-Q),L=E*E,B=L*E,q=-F*B+2*F*L-F*E,O=(1+F)*B+(-1.5-2*F)*L+(-0.5+F)*E+1,_=(-1-N)*B+(1.5+N)*L+0.5*E,C=N*B-N*L;for(let M=0;M!==H;++M)K[M]=q*W[U+M]+O*W[X+M]+_*W[Y+M]+C*W[G+M];return K}}class K$ extends Y8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=($-Q)/(Z-Q),G=1-U;for(let F=0;F!==H;++F)K[F]=W[X+F]*G+W[Y+F]*U;return K}}class W$ extends Y8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J){return this.copySampleValue_(J-1)}}class H$ extends Y8{interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=this.inTangents,G=this.outTangents;if(!U||!G){let E=($-Q)/(Z-Q),L=1-E;for(let B=0;B!==H;++B)K[B]=W[X+B]*L+W[Y+B]*E;return K}let F=H*2,N=J-1;for(let E=0;E!==H;++E){let L=W[X+E],B=W[Y+E],q=N*F+E*2,O=G[q],_=G[q+1],C=J*F+E*2,M=U[C],A=U[C+1],I=($-Q)/(Z-Q),w,R,z,d,P;for(let p=0;p<8;p++){w=I*I,R=w*I,z=1-I,d=z*z,P=d*z;let x=P*Q+3*d*I*O+3*z*w*M+R*Z-$;if(Math.abs(x)<0.0000000001)break;let u=3*d*(O-Q)+6*z*I*(M-O)+3*w*(Z-M);if(Math.abs(u)<0.0000000001)break;I=I-x/u,I=Math.max(0,Math.min(1,I))}K[E]=P*L+3*d*I*_+3*z*w*A+R*B}return K}}class iJ{constructor(J,Q,$,Z){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=l7(Q,this.TimeBufferType),this.values=l7($,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:l7(J.times,Array),values:l7(J.values,Array)};let Z=J.getInterpolation();if(Z!==J.DefaultInterpolation)$.interpolation=Z}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new W$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new K$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new Z$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new H$(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.inTangents=this.settings.inTangents,Q.outTangents=this.settings.outTangents;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return S0("KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]*=J}return this}trim(J,Q){let $=this.times,Z=$.length,K=0,W=Z-1;while(K!==Z&&$[K]<J)++K;while(W!==-1&&$[W]>Q)--W;if(++W,K!==0||W!==Z){if(K>=W)W=Math.max(W,1),K=W-1;let H=this.getValueSize();this.times=$.slice(K,W),this.values=this.values.slice(K*H,W*H)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)T0("KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,Z=this.values,K=$.length;if(K===0)T0("KeyframeTrack: Track is empty.",this),J=!1;let W=null;for(let H=0;H!==K;H++){let Y=$[H];if(typeof Y==="number"&&isNaN(Y)){T0("KeyframeTrack: Time is not a valid number.",this,H,Y),J=!1;break}if(W!==null&&W>Y){T0("KeyframeTrack: Out of order keys.",this,H,Y,W),J=!1;break}W=Y}if(Z!==void 0){if(zW(Z))for(let H=0,Y=Z.length;H!==Y;++H){let X=Z[H];if(isNaN(X)){T0("KeyframeTrack: Value is not a valid number.",this,H,X),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),Z=this.getInterpolation()===2302,K=J.length-1,W=1;for(let H=1;H<K;++H){let Y=!1,X=J[H],U=J[H+1];if(X!==U&&(H!==1||X!==J[0]))if(!Z){let G=H*$,F=G-$,N=G+$;for(let E=0;E!==$;++E){let L=Q[G+E];if(L!==Q[F+E]||L!==Q[N+E]){Y=!0;break}}}else Y=!0;if(Y){if(H!==W){J[W]=J[H];let G=H*$,F=W*$;for(let N=0;N!==$;++N)Q[F+N]=Q[G+N]}++W}}if(K>0){J[W]=J[K];for(let H=K*$,Y=W*$,X=0;X!==$;++X)Q[Y+X]=Q[H+X];++W}if(W!==J.length)this.times=J.slice(0,W),this.values=Q.slice(0,W*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),Z=new this.constructor(this.name,J,Q);return Z.createInterpolant=this.createInterpolant,Z}}iJ.prototype.ValueTypeName="";iJ.prototype.TimeBufferType=Float32Array;iJ.prototype.ValueBufferType=Float32Array;iJ.prototype.DefaultInterpolation=2301;class X8 extends iJ{constructor(J,Q,$){super(J,Q,$)}}X8.prototype.ValueTypeName="bool";X8.prototype.ValueBufferType=Array;X8.prototype.DefaultInterpolation=2300;X8.prototype.InterpolantFactoryMethodLinear=void 0;X8.prototype.InterpolantFactoryMethodSmooth=void 0;class Y$ extends iJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}}Y$.prototype.ValueTypeName="color";class X$ extends iJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}}X$.prototype.ValueTypeName="number";class U$ extends Y8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,H=this.valueSize,Y=($-Q)/(Z-Q),X=J*H;for(let U=X+H;X!==U;X+=4)A9.slerpFlat(K,0,W,X-H,W,X,Y);return K}}class F6 extends iJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}InterpolantFactoryMethodLinear(J){return new U$(this.times,this.values,this.getValueSize(),J)}}F6.prototype.ValueTypeName="quaternion";F6.prototype.InterpolantFactoryMethodSmooth=void 0;class U8 extends iJ{constructor(J,Q,$){super(J,Q,$)}}U8.prototype.ValueTypeName="string";U8.prototype.ValueBufferType=Array;U8.prototype.DefaultInterpolation=2300;U8.prototype.InterpolantFactoryMethodLinear=void 0;U8.prototype.InterpolantFactoryMethodSmooth=void 0;class q$ extends iJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}}q$.prototype.ValueTypeName="vector";class N${constructor(J,Q,$){let Z=this,K=!1,W=0,H=0,Y=void 0,X=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this._abortController=null,this.itemStart=function(U){if(H++,K===!1){if(Z.onStart!==void 0)Z.onStart(U,W,H)}K=!0},this.itemEnd=function(U){if(W++,Z.onProgress!==void 0)Z.onProgress(U,W,H);if(W===H){if(K=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(U){if(Z.onError!==void 0)Z.onError(U)},this.resolveURL=function(U){if(U=U.normalize("NFC"),Y)return Y(U);return U},this.setURLModifier=function(U){return Y=U,this},this.addHandler=function(U,G){return X.push(U,G),this},this.removeHandler=function(U){let G=X.indexOf(U);if(G!==-1)X.splice(G,2);return this},this.getHandler=function(U){for(let G=0,F=X.length;G<F;G+=2){let N=X[G],E=X[G+1];if(N.global)N.lastIndex=0;if(N.test(U))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var DK=new N$;class G${constructor(J){if(this.manager=J!==void 0?J:DK,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let $=this;return new Promise(function(Z,K){$.load(J,Z,Q,K)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}G$.DEFAULT_MATERIAL_NAME="__DEFAULT";class F$ extends kJ{constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new b0(J),this.intensity=Q}dispose(){this.dispatchEvent({type:"dispose"})}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);return Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,Q}}var i6=new QJ,YZ=new f,XZ=new f;class RK{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new g0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new QJ,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new U7,this._frameExtents=new g0(1,1),this._viewportCount=1,this._viewports=[new NJ(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera,$=this.matrix;if(YZ.setFromMatrixPosition(J.matrixWorld),Q.position.copy(YZ),XZ.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(XZ),Q.updateMatrixWorld(),i6.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),this._frustum.setFromProjectionMatrix(i6,Q.coordinateSystem,Q.reversedDepth),Q.coordinateSystem===2001||Q.reversedDepth)$.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,1,0,0,0,0,1);else $.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1);$.multiply(i6)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this.biasNode=J.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};if(this.intensity!==1)J.intensity=this.intensity;if(this.bias!==0)J.bias=this.bias;if(this.normalBias!==0)J.normalBias=this.normalBias;if(this.radius!==1)J.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)J.mapSize=this.mapSize.toArray();return J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var d7=new f,u7=new A9,H9=new f;class O6 extends kJ{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new QJ,this.projectionMatrix=new QJ,this.projectionMatrixInverse=new QJ,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(d7,u7,H9),H9.x===1&&H9.y===1&&H9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(d7,u7,H9.set(1,1,1)).invert()}updateWorldMatrix(J,Q,$=!1){if(super.updateWorldMatrix(J,Q,$),this.matrixWorld.decompose(d7,u7,H9),H9.x===1&&H9.y===1&&H9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(d7,u7,H9.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var f9=new f,UZ=new g0,qZ=new g0;class SJ extends O6{constructor(J=50,Q=1,$=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=Z,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=c7*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(A6*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return c7*2*Math.atan(Math.tan(A6*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){f9.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(f9.x,f9.y).multiplyScalar(-J/f9.z),f9.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(f9.x,f9.y).multiplyScalar(-J/f9.z)}getViewSize(J,Q){return this.getViewBounds(J,UZ,qZ),Q.subVectors(qZ,UZ)}setViewOffset(J,Q,$,Z,K,W){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=K,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(A6*0.5*this.fov)/this.zoom,$=2*Q,Z=this.aspect*$,K=-0.5*Z,W=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Y,fullHeight:X}=W;K+=W.offsetX*Z/Y,Q-=W.offsetY*$/X,Z*=W.width/Y,$*=W.height/X}let H=this.filmOffset;if(H!==0)K+=J*H/this.getFilmWidth();this.projectionMatrix.makePerspective(K,K+Z,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class kK extends RK{constructor(){super(new SJ(90,1,0.5,500));this.isPointLightShadow=!0}}class E6 extends F${constructor(J,Q,$=0,Z=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=$,this.decay=Z,this.shadow=new kK}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.distance=this.distance,Q.object.decay=this.decay,Q.object.shadow=this.shadow.toJSON(),Q}}class D6 extends O6{constructor(J=-1,Q=1,$=1,Z=-1,K=0.1,W=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=Z,this.near=K,this.far=W,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,Z,K,W){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=K,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,K=$-J,W=$+J,H=Z+Q,Y=Z-Q;if(this.view!==null&&this.view.enabled){let X=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;K+=X*this.view.offsetX,W=K+X*this.view.width,H-=U*this.view.offsetY,Y=H-U*this.view.height}this.projectionMatrix.makeOrthographic(K,W,H,Y,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}var _8=-90,T8=1;class O$ extends kJ{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new SJ(_8,T8,J,Q);Z.layers=this.layers,this.add(Z);let K=new SJ(_8,T8,J,Q);K.layers=this.layers,this.add(K);let W=new SJ(_8,T8,J,Q);W.layers=this.layers,this.add(W);let H=new SJ(_8,T8,J,Q);H.layers=this.layers,this.add(H);let Y=new SJ(_8,T8,J,Q);Y.layers=this.layers,this.add(Y);let X=new SJ(_8,T8,J,Q);X.layers=this.layers,this.add(X)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,Z,K,W,H,Y]=Q;for(let X of Q)this.remove(X);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),K.up.set(0,0,-1),K.lookAt(0,1,0),W.up.set(0,0,1),W.lookAt(0,-1,0),H.up.set(0,1,0),H.lookAt(0,0,1),Y.up.set(0,1,0),Y.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),K.up.set(0,0,1),K.lookAt(0,1,0),W.up.set(0,0,-1),W.lookAt(0,-1,0),H.up.set(0,-1,0),H.lookAt(0,0,1),Y.up.set(0,-1,0),Y.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let X of Q)this.add(X),X.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[K,W,H,Y,X,U]=this.children,G=J.getRenderTarget(),F=J.getActiveCubeFace(),N=J.getActiveMipmapLevel(),E=J.xr.enabled;J.xr.enabled=!1;let L=$.texture.generateMipmaps;$.texture.generateMipmaps=!1;let B=!1;if(J.isWebGLRenderer===!0)B=J.state.buffers.depth.getReversed();else B=J.reversedDepthBuffer;if(J.setRenderTarget($,0,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,K),J.setRenderTarget($,1,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,W),J.setRenderTarget($,2,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,H),J.setRenderTarget($,3,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),J.setRenderTarget($,4,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,X),$.texture.generateMipmaps=L,J.setRenderTarget($,5,Z),B&&J.autoClear===!1)J.clearDepth();J.render(Q,U),J.setRenderTarget(G,F,N),J.xr.enabled=E,$.texture.needsPMREMUpdate=!0}}class E$ extends SJ{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}var D$="\\[\\]\\.:\\/",nW=new RegExp("["+D$+"]","g"),R$="[^"+D$+"]",sW="[^"+D$.replace("\\.","")+"]",iW=/((?:WC+[\/:])*)/.source.replace("WC",R$),oW=/(WCOD+)?/.source.replace("WCOD",sW),aW=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",R$),rW=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",R$),tW=new RegExp("^"+iW+oW+aW+rW+"$"),eW=["material","materials","bones","map"];class LK{constructor(J,Q,$){let Z=$||e0.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,Z)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,Z=this._bindings[$];if(Z!==void 0)Z.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,K=$.length;Z!==K;++Z)$[Z].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class e0{constructor(J,Q,$){this.path=Q,this.parsedPath=$||e0.parseTrackName(Q),this.node=e0.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new e0(J,Q,$);else return new e0.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(nW,"")}static parseTrackName(J){let Q=tW.exec(J);if(Q===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},Z=$.nodeName&&$.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let K=$.nodeName.substring(Z+1);if(eW.indexOf(K)!==-1)$.nodeName=$.nodeName.substring(0,Z),$.objectName=K}if($.propertyName===null||$.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(K){for(let W=0;W<K.length;W++){let H=K[W];if(H.name===Q||H.uuid===Q)return H;let Y=$(H.children);if(Y)return Y}return null},Z=$(J.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)J[Q++]=$[Z]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,Z=Q.propertyName,K=Q.propertyIndex;if(!J)J=e0.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){S0("PropertyBinding: No target node found for track: "+this.path+".");return}if($){let X=Q.objectIndex;switch($){case"materials":if(!J.material){T0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){T0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){T0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===X){X=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){T0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){T0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){T0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(X!==void 0){if(J[X]===void 0){T0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[X]}}let W=J[Z];if(W===void 0){let X=Q.nodeName;T0("PropertyBinding: Trying to update property for track: "+X+"."+Z+" but it wasn't found.",J);return}let H=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)H=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)H=this.Versioning.MatrixWorldNeedsUpdate;let Y=this.BindingType.Direct;if(K!==void 0){if(Z==="morphTargetInfluences"){if(!J.geometry){T0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){T0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[K]!==void 0)K=J.morphTargetDictionary[K]}Y=this.BindingType.ArrayElement,this.resolvedProperty=W,this.propertyIndex=K}else if(W.fromArray!==void 0&&W.toArray!==void 0)Y=this.BindingType.HasFromToArray,this.resolvedProperty=W;else if(Array.isArray(W))Y=this.BindingType.EntireArray,this.resolvedProperty=W;else this.propertyName=Z;this.getValue=this.GetterByBindingType[Y],this.setValue=this.SetterByBindingTypeAndVersioning[Y][H]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}e0.Composite=LK;e0.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};e0.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};e0.prototype.GetterByBindingType=[e0.prototype._getValue_direct,e0.prototype._getValue_array,e0.prototype._getValue_arrayElement,e0.prototype._getValue_toArray];e0.prototype.SetterByBindingTypeAndVersioning=[[e0.prototype._setValue_direct,e0.prototype._setValue_direct_setNeedsUpdate,e0.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[e0.prototype._setValue_array,e0.prototype._setValue_array_setNeedsUpdate,e0.prototype._setValue_array_setMatrixWorldNeedsUpdate],[e0.prototype._setValue_arrayElement,e0.prototype._setValue_arrayElement_setNeedsUpdate,e0.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[e0.prototype._setValue_fromArray,e0.prototype._setValue_fromArray_setNeedsUpdate,e0.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Jq=new Float32Array(1);var NZ=new QJ;class R6{constructor(J,Q,$=0,Z=1/0){this.ray=new X6(J,Q),this.near=$,this.far=Z,this.camera=null,this.layers=new Y7,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(J,Q){this.ray.set(J,Q)}setFromCamera(J,Q){if(Q.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(Q.matrixWorld),this.ray.direction.set(J.x,J.y,0.5).unproject(Q).sub(this.ray.origin).normalize(),this.camera=Q;else if(Q.isOrthographicCamera)this.ray.origin.set(J.x,J.y,Q.projectionMatrix.elements[14]).unproject(Q),this.ray.direction.set(0,0,-1).transformDirection(Q.matrixWorld),this.camera=Q;else T0("Raycaster: Unsupported camera type: "+Q.type)}setFromXRController(J){return NZ.identity().extractRotation(J.matrixWorld),this.ray.origin.setFromMatrixPosition(J.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(NZ),this}intersectObject(J,Q=!0,$=[]){return o6(J,this,$,Q),$.sort(GZ),$}intersectObjects(J,Q=!0,$=[]){for(let Z=0,K=J.length;Z<K;Z++)o6(J[Z],this,$,Q);return $.sort(GZ),$}}function GZ(J,Q){return J.distance-Q.distance}function o6(J,Q,$,Z){let K=!0;if(J.layers.test(Q.layers)){if(J.raycast(Q,$)===!1)K=!1}if(K===!0&&Z===!0){let W=J.children;for(let H=0,Y=W.length;H<Y;H++)o6(W[H],Q,$,!0)}}class k${static{k$.prototype.isMatrix2=!0}constructor(J,Q,$,Z){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,$,Z)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let $=0;$<4;$++)this.elements[$]=J[$+Q];return this}set(J,Q,$,Z){let K=this.elements;return K[0]=J,K[2]=Q,K[1]=$,K[3]=Z,this}}function L$(J,Q,$,Z){let K=JH(Z);switch($){case 1021:return J*Q;case 1028:return J*Q/K.components*K.byteLength;case 1029:return J*Q/K.components*K.byteLength;case 1030:return J*Q*2/K.components*K.byteLength;case 1031:return J*Q*2/K.components*K.byteLength;case 1022:return J*Q*3/K.components*K.byteLength;case 1023:return J*Q*4/K.components*K.byteLength;case 1033:return J*Q*4/K.components*K.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function JH(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));if(typeof window<"u")if(window.__THREE__)S0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="185";function lK(){let J=null,Q=!1,$=null,Z=null;function K(W,H){$(W,H),Z=J.requestAnimationFrame(K)}return{start:function(){if(Q===!0)return;if($===null)return;if(J===null)return;Z=J.requestAnimationFrame(K),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(Z);Q=!1},setAnimationLoop:function(W){$=W},setContext:function(W){J=W}}}function QH(J){let Q=new WeakMap;function $(Y,X){let{array:U,usage:G}=Y,F=U.byteLength,N=J.createBuffer();J.bindBuffer(X,N),J.bufferData(X,U,G),Y.onUploadCallback();let E;if(U instanceof Float32Array)E=J.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)E=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(Y.isFloat16BufferAttribute)E=J.HALF_FLOAT;else E=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)E=J.SHORT;else if(U instanceof Uint32Array)E=J.UNSIGNED_INT;else if(U instanceof Int32Array)E=J.INT;else if(U instanceof Int8Array)E=J.BYTE;else if(U instanceof Uint8Array)E=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)E=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:N,type:E,bytesPerElement:U.BYTES_PER_ELEMENT,version:Y.version,size:F}}function Z(Y,X,U){let{array:G,updateRanges:F}=X;if(J.bindBuffer(U,Y),F.length===0)J.bufferSubData(U,0,G);else{F.sort((E,L)=>E.start-L.start);let N=0;for(let E=1;E<F.length;E++){let L=F[N],B=F[E];if(B.start<=L.start+L.count+1)L.count=Math.max(L.count,B.start+B.count-L.start);else++N,F[N]=B}F.length=N+1;for(let E=0,L=F.length;E<L;E++){let B=F[E];J.bufferSubData(U,B.start*G.BYTES_PER_ELEMENT,G,B.start,B.count)}X.clearUpdateRanges()}X.onUploadCallback()}function K(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;return Q.get(Y)}function W(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;let X=Q.get(Y);if(X)J.deleteBuffer(X.buffer),Q.delete(Y)}function H(Y,X){if(Y.isInterleavedBufferAttribute)Y=Y.data;if(Y.isGLBufferAttribute){let G=Q.get(Y);if(!G||G.version<Y.version)Q.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}let U=Q.get(Y);if(U===void 0)Q.set(Y,$(Y,X));else if(U.version<Y.version){if(U.size!==Y.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(U.buffer,Y,X),U.version=Y.version}}return{get:K,remove:W,update:H}}var $H=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ZH=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,KH=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,WH=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,HH=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,YH=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,XH=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,UH=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qH=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,NH=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,GH=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,FH=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,OH=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,EH=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,DH=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,RH=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,kH=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,LH=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,VH=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,MH=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zH=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,BH=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,IH=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,AH=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,PH=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,CH=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,wH=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_H=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,TH=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,SH=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jH="gl_FragColor = linearToOutputTexel( gl_FragColor );",vH=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yH=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,fH=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,bH=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hH=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xH=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gH=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pH=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mH=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lH=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dH=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,uH=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cH=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nH=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sH=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,iH=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,oH=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aH=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rH=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tH=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eH=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,JY=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,QY=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$Y=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ZY=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,KY=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,WY=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,HY=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YY=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XY=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,UY=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qY=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,NY=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,GY=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FY=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,OY=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,EY=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,DY=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RY=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kY=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,LY=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VY=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,MY=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zY=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BY=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IY=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,AY=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,PY=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,CY=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wY=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_Y=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,TY=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,SY=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,jY=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vY=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yY=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fY=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bY=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hY=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xY=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,gY=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pY=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mY=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lY=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dY=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,uY=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cY=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nY=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sY=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iY=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oY=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,aY=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rY=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tY=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eY=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,JX=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,QX=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$X=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ZX=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KX=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WX=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HX=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YX=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XX=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,UX=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qX=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,NX=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,GX=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,FX=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OX=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,EX=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DX=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,RX=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kX=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LX=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VX=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,MX=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zX=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,BX=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,IX=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AX=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PX=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,CX=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wX=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_X=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TX=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,SX=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jX=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vX=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yX=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fX=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,p0={alphahash_fragment:$H,alphahash_pars_fragment:ZH,alphamap_fragment:KH,alphamap_pars_fragment:WH,alphatest_fragment:HH,alphatest_pars_fragment:YH,aomap_fragment:XH,aomap_pars_fragment:UH,batching_pars_vertex:qH,batching_vertex:NH,begin_vertex:GH,beginnormal_vertex:FH,bsdfs:OH,iridescence_fragment:EH,bumpmap_pars_fragment:DH,clipping_planes_fragment:RH,clipping_planes_pars_fragment:kH,clipping_planes_pars_vertex:LH,clipping_planes_vertex:VH,color_fragment:MH,color_pars_fragment:zH,color_pars_vertex:BH,color_vertex:IH,common:AH,cube_uv_reflection_fragment:PH,defaultnormal_vertex:CH,displacementmap_pars_vertex:wH,displacementmap_vertex:_H,emissivemap_fragment:TH,emissivemap_pars_fragment:SH,colorspace_fragment:jH,colorspace_pars_fragment:vH,envmap_fragment:yH,envmap_common_pars_fragment:fH,envmap_pars_fragment:bH,envmap_pars_vertex:hH,envmap_physical_pars_fragment:iH,envmap_vertex:xH,fog_vertex:gH,fog_pars_vertex:pH,fog_fragment:mH,fog_pars_fragment:lH,gradientmap_pars_fragment:dH,lightmap_pars_fragment:uH,lights_lambert_fragment:cH,lights_lambert_pars_fragment:nH,lights_pars_begin:sH,lights_toon_fragment:oH,lights_toon_pars_fragment:aH,lights_phong_fragment:rH,lights_phong_pars_fragment:tH,lights_physical_fragment:eH,lights_physical_pars_fragment:JY,lights_fragment_begin:QY,lights_fragment_maps:$Y,lights_fragment_end:ZY,lightprobes_pars_fragment:KY,logdepthbuf_fragment:WY,logdepthbuf_pars_fragment:HY,logdepthbuf_pars_vertex:YY,logdepthbuf_vertex:XY,map_fragment:UY,map_pars_fragment:qY,map_particle_fragment:NY,map_particle_pars_fragment:GY,metalnessmap_fragment:FY,metalnessmap_pars_fragment:OY,morphinstance_vertex:EY,morphcolor_vertex:DY,morphnormal_vertex:RY,morphtarget_pars_vertex:kY,morphtarget_vertex:LY,normal_fragment_begin:VY,normal_fragment_maps:MY,normal_pars_fragment:zY,normal_pars_vertex:BY,normal_vertex:IY,normalmap_pars_fragment:AY,clearcoat_normal_fragment_begin:PY,clearcoat_normal_fragment_maps:CY,clearcoat_pars_fragment:wY,iridescence_pars_fragment:_Y,opaque_fragment:TY,packing:SY,premultiplied_alpha_fragment:jY,project_vertex:vY,dithering_fragment:yY,dithering_pars_fragment:fY,roughnessmap_fragment:bY,roughnessmap_pars_fragment:hY,shadowmap_pars_fragment:xY,shadowmap_pars_vertex:gY,shadowmap_vertex:pY,shadowmask_pars_fragment:mY,skinbase_vertex:lY,skinning_pars_vertex:dY,skinning_vertex:uY,skinnormal_vertex:cY,specularmap_fragment:nY,specularmap_pars_fragment:sY,tonemapping_fragment:iY,tonemapping_pars_fragment:oY,transmission_fragment:aY,transmission_pars_fragment:rY,uv_pars_fragment:tY,uv_pars_vertex:eY,uv_vertex:JX,worldpos_vertex:QX,background_vert:$X,background_frag:ZX,backgroundCube_vert:KX,backgroundCube_frag:WX,cube_vert:HX,cube_frag:YX,depth_vert:XX,depth_frag:UX,distance_vert:qX,distance_frag:NX,equirect_vert:GX,equirect_frag:FX,linedashed_vert:OX,linedashed_frag:EX,meshbasic_vert:DX,meshbasic_frag:RX,meshlambert_vert:kX,meshlambert_frag:LX,meshmatcap_vert:VX,meshmatcap_frag:MX,meshnormal_vert:zX,meshnormal_frag:BX,meshphong_vert:IX,meshphong_frag:AX,meshphysical_vert:PX,meshphysical_frag:CX,meshtoon_vert:wX,meshtoon_frag:_X,points_vert:TX,points_frag:SX,shadow_vert:jX,shadow_frag:vX,sprite_vert:yX,sprite_frag:fX},U0={common:{diffuse:{value:new b0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new v0},alphaMap:{value:null},alphaMapTransform:{value:new v0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new v0}},envmap:{envMap:{value:null},envMapRotation:{value:new v0},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new v0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new v0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new v0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new v0},normalScale:{value:new g0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new v0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new v0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new v0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new v0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new b0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new f},probesMax:{value:new f},probesResolution:{value:new f}},points:{diffuse:{value:new b0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new v0},alphaTest:{value:0},uvTransform:{value:new v0}},sprite:{diffuse:{value:new b0(16777215)},opacity:{value:1},center:{value:new g0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new v0},alphaMap:{value:null},alphaMapTransform:{value:new v0},alphaTest:{value:0}}},F9={basic:{uniforms:yJ([U0.common,U0.specularmap,U0.envmap,U0.aomap,U0.lightmap,U0.fog]),vertexShader:p0.meshbasic_vert,fragmentShader:p0.meshbasic_frag},lambert:{uniforms:yJ([U0.common,U0.specularmap,U0.envmap,U0.aomap,U0.lightmap,U0.emissivemap,U0.bumpmap,U0.normalmap,U0.displacementmap,U0.fog,U0.lights,{emissive:{value:new b0(0)},envMapIntensity:{value:1}}]),vertexShader:p0.meshlambert_vert,fragmentShader:p0.meshlambert_frag},phong:{uniforms:yJ([U0.common,U0.specularmap,U0.envmap,U0.aomap,U0.lightmap,U0.emissivemap,U0.bumpmap,U0.normalmap,U0.displacementmap,U0.fog,U0.lights,{emissive:{value:new b0(0)},specular:{value:new b0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:p0.meshphong_vert,fragmentShader:p0.meshphong_frag},standard:{uniforms:yJ([U0.common,U0.envmap,U0.aomap,U0.lightmap,U0.emissivemap,U0.bumpmap,U0.normalmap,U0.displacementmap,U0.roughnessmap,U0.metalnessmap,U0.fog,U0.lights,{emissive:{value:new b0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:p0.meshphysical_vert,fragmentShader:p0.meshphysical_frag},toon:{uniforms:yJ([U0.common,U0.aomap,U0.lightmap,U0.emissivemap,U0.bumpmap,U0.normalmap,U0.displacementmap,U0.gradientmap,U0.fog,U0.lights,{emissive:{value:new b0(0)}}]),vertexShader:p0.meshtoon_vert,fragmentShader:p0.meshtoon_frag},matcap:{uniforms:yJ([U0.common,U0.bumpmap,U0.normalmap,U0.displacementmap,U0.fog,{matcap:{value:null}}]),vertexShader:p0.meshmatcap_vert,fragmentShader:p0.meshmatcap_frag},points:{uniforms:yJ([U0.points,U0.fog]),vertexShader:p0.points_vert,fragmentShader:p0.points_frag},dashed:{uniforms:yJ([U0.common,U0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:p0.linedashed_vert,fragmentShader:p0.linedashed_frag},depth:{uniforms:yJ([U0.common,U0.displacementmap]),vertexShader:p0.depth_vert,fragmentShader:p0.depth_frag},normal:{uniforms:yJ([U0.common,U0.bumpmap,U0.normalmap,U0.displacementmap,{opacity:{value:1}}]),vertexShader:p0.meshnormal_vert,fragmentShader:p0.meshnormal_frag},sprite:{uniforms:yJ([U0.sprite,U0.fog]),vertexShader:p0.sprite_vert,fragmentShader:p0.sprite_frag},background:{uniforms:{uvTransform:{value:new v0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:p0.background_vert,fragmentShader:p0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new v0}},vertexShader:p0.backgroundCube_vert,fragmentShader:p0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:p0.cube_vert,fragmentShader:p0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:p0.equirect_vert,fragmentShader:p0.equirect_frag},distance:{uniforms:yJ([U0.common,U0.displacementmap,{referencePosition:{value:new f},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:p0.distance_vert,fragmentShader:p0.distance_frag},shadow:{uniforms:yJ([U0.lights,U0.fog,{color:{value:new b0(0)},opacity:{value:1}}]),vertexShader:p0.shadow_vert,fragmentShader:p0.shadow_frag}};F9.physical={uniforms:yJ([F9.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new v0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new v0},clearcoatNormalScale:{value:new g0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new v0},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new v0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new v0},sheen:{value:0},sheenColor:{value:new b0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new v0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new v0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new v0},transmissionSamplerSize:{value:new g0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new v0},attenuationDistance:{value:0},attenuationColor:{value:new b0(0)},specularColor:{value:new b0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new v0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new v0},anisotropyVector:{value:new g0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new v0}}]),vertexShader:p0.meshphysical_vert,fragmentShader:p0.meshphysical_frag};var k6={r:0,b:0,g:0},bX=new QJ,dK=new v0;dK.set(-1,0,0,0,1,0,0,0,1);function hX(J,Q,$,Z,K,W){let H=new b0(0),Y=K===!0?0:1,X,U,G=null,F=0,N=null;function E(_){let C=_.isScene===!0?_.background:null;if(C&&C.isTexture){let M=_.backgroundBlurriness>0;C=Q.get(C,M)}return C}function L(_){let C=!1,M=E(_);if(M===null)q(H,Y);else if(M&&M.isColor)q(M,1),C=!0;let A=J.xr.getEnvironmentBlendMode();if(A==="additive")$.buffers.color.setClear(0,0,0,1,W);else if(A==="alpha-blend")$.buffers.color.setClear(0,0,0,0,W);if(J.autoClear||C)$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function B(_,C){let M=E(C);if(M&&(M.isCubeTexture||M.mapping===$7)){if(U===void 0)U=new j0(new FJ(1,1,1),new sJ({name:"BackgroundCubeMaterial",uniforms:W8(F9.backgroundCube.uniforms),vertexShader:F9.backgroundCube.vertexShader,fragmentShader:F9.backgroundCube.fragmentShader,side:vJ,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),U.geometry.deleteAttribute("uv"),U.onBeforeRender=function(A,I,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(U.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),Z.update(U);if(U.material.uniforms.envMap.value=M,U.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,U.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,U.material.uniforms.backgroundRotation.value.setFromMatrix4(bX.makeRotationFromEuler(C.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1)U.material.uniforms.backgroundRotation.value.premultiply(dK);if(U.material.toneMapped=u0.getTransfer(M.colorSpace)!==HJ,G!==M||F!==M.version||N!==J.toneMapping)U.material.needsUpdate=!0,G=M,F=M.version,N=J.toneMapping;U.layers.enableAll(),_.unshift(U,U.geometry,U.material,0,0,null)}else if(M&&M.isTexture){if(X===void 0)X=new j0(new $9(2,2),new sJ({name:"BackgroundMaterial",uniforms:W8(F9.background.uniforms),vertexShader:F9.background.vertexShader,fragmentShader:F9.background.fragmentShader,side:y8,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),X.geometry.deleteAttribute("normal"),Object.defineProperty(X.material,"map",{get:function(){return this.uniforms.t2D.value}}),Z.update(X);if(X.material.uniforms.t2D.value=M,X.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,X.material.toneMapped=u0.getTransfer(M.colorSpace)!==HJ,M.matrixAutoUpdate===!0)M.updateMatrix();if(X.material.uniforms.uvTransform.value.copy(M.matrix),G!==M||F!==M.version||N!==J.toneMapping)X.material.needsUpdate=!0,G=M,F=M.version,N=J.toneMapping;X.layers.enableAll(),_.unshift(X,X.geometry,X.material,0,0,null)}}function q(_,C){_.getRGB(k6,eQ(J)),$.buffers.color.setClear(k6.r,k6.g,k6.b,C,W)}function O(){if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0;if(X!==void 0)X.geometry.dispose(),X.material.dispose(),X=void 0}return{getClearColor:function(){return H},setClearColor:function(_,C=1){H.set(_),Y=C,q(H,Y)},getClearAlpha:function(){return Y},setClearAlpha:function(_){Y=_,q(H,Y)},render:L,addToRenderList:B,dispose:O}}function xX(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),Z={},K=N(null),W=K,H=!1;function Y(P,p,a,x,u){let i=!1,b=F(P,x,a,p);if(W!==b)W=b,U(W.object);if(i=E(P,x,a,u),i)L(P,x,a,u);if(u!==null)Q.update(u,J.ELEMENT_ARRAY_BUFFER);if(i||H){if(H=!1,M(P,p,a,x),u!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(u).buffer)}}function X(){return J.createVertexArray()}function U(P){return J.bindVertexArray(P)}function G(P){return J.deleteVertexArray(P)}function F(P,p,a,x){let u=x.wireframe===!0,i=Z[p.id];if(i===void 0)i={},Z[p.id]=i;let b=P.isInstancedMesh===!0?P.id:0,t=i[b];if(t===void 0)t={},i[b]=t;let J0=t[a.id];if(J0===void 0)J0={},t[a.id]=J0;let H0=J0[u];if(H0===void 0)H0=N(X()),J0[u]=H0;return H0}function N(P){let p=[],a=[],x=[];for(let u=0;u<$;u++)p[u]=0,a[u]=0,x[u]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:p,enabledAttributes:a,attributeDivisors:x,object:P,attributes:{},index:null}}function E(P,p,a,x){let u=W.attributes,i=p.attributes,b=0,t=a.getAttributes();for(let J0 in t)if(t[J0].location>=0){let V0=u[J0],k0=i[J0];if(k0===void 0){if(J0==="instanceMatrix"&&P.instanceMatrix)k0=P.instanceMatrix;if(J0==="instanceColor"&&P.instanceColor)k0=P.instanceColor}if(V0===void 0)return!0;if(V0.attribute!==k0)return!0;if(k0&&V0.data!==k0.data)return!0;b++}if(W.attributesNum!==b)return!0;if(W.index!==x)return!0;return!1}function L(P,p,a,x){let u={},i=p.attributes,b=0,t=a.getAttributes();for(let J0 in t)if(t[J0].location>=0){let V0=i[J0];if(V0===void 0){if(J0==="instanceMatrix"&&P.instanceMatrix)V0=P.instanceMatrix;if(J0==="instanceColor"&&P.instanceColor)V0=P.instanceColor}let k0={};if(k0.attribute=V0,V0&&V0.data)k0.data=V0.data;u[J0]=k0,b++}W.attributes=u,W.attributesNum=b,W.index=x}function B(){let P=W.newAttributes;for(let p=0,a=P.length;p<a;p++)P[p]=0}function q(P){O(P,0)}function O(P,p){let{newAttributes:a,enabledAttributes:x,attributeDivisors:u}=W;if(a[P]=1,x[P]===0)J.enableVertexAttribArray(P),x[P]=1;if(u[P]!==p)J.vertexAttribDivisor(P,p),u[P]=p}function _(){let{newAttributes:P,enabledAttributes:p}=W;for(let a=0,x=p.length;a<x;a++)if(p[a]!==P[a])J.disableVertexAttribArray(a),p[a]=0}function C(P,p,a,x,u,i,b){if(b===!0)J.vertexAttribIPointer(P,p,a,u,i);else J.vertexAttribPointer(P,p,a,x,u,i)}function M(P,p,a,x){B();let u=x.attributes,i=a.getAttributes(),b=p.defaultAttributeValues;for(let t in i){let J0=i[t];if(J0.location>=0){let H0=u[t];if(H0===void 0){if(t==="instanceMatrix"&&P.instanceMatrix)H0=P.instanceMatrix;if(t==="instanceColor"&&P.instanceColor)H0=P.instanceColor}if(H0!==void 0){let{normalized:V0,itemSize:k0}=H0,a0=Q.get(H0);if(a0===void 0)continue;let{buffer:t0,type:r,bytesPerElement:Z0}=a0,E0=r===J.INT||r===J.UNSIGNED_INT||H0.gpuType===YQ;if(H0.isInterleavedBufferAttribute){let F0=H0.data,P0=F0.stride,m0=H0.offset;if(F0.isInstancedInterleavedBuffer){for(let h0=0;h0<J0.locationSize;h0++)O(J0.location+h0,F0.meshPerAttribute);if(P.isInstancedMesh!==!0&&x._maxInstanceCount===void 0)x._maxInstanceCount=F0.meshPerAttribute*F0.count}else for(let h0=0;h0<J0.locationSize;h0++)q(J0.location+h0);J.bindBuffer(J.ARRAY_BUFFER,t0);for(let h0=0;h0<J0.locationSize;h0++)C(J0.location+h0,k0/J0.locationSize,r,V0,P0*Z0,(m0+k0/J0.locationSize*h0)*Z0,E0)}else{if(H0.isInstancedBufferAttribute){for(let F0=0;F0<J0.locationSize;F0++)O(J0.location+F0,H0.meshPerAttribute);if(P.isInstancedMesh!==!0&&x._maxInstanceCount===void 0)x._maxInstanceCount=H0.meshPerAttribute*H0.count}else for(let F0=0;F0<J0.locationSize;F0++)q(J0.location+F0);J.bindBuffer(J.ARRAY_BUFFER,t0);for(let F0=0;F0<J0.locationSize;F0++)C(J0.location+F0,k0/J0.locationSize,r,V0,k0*Z0,k0/J0.locationSize*F0*Z0,E0)}}else if(b!==void 0){let V0=b[t];if(V0!==void 0)switch(V0.length){case 2:J.vertexAttrib2fv(J0.location,V0);break;case 3:J.vertexAttrib3fv(J0.location,V0);break;case 4:J.vertexAttrib4fv(J0.location,V0);break;default:J.vertexAttrib1fv(J0.location,V0)}}}}_()}function A(){z();for(let P in Z){let p=Z[P];for(let a in p){let x=p[a];for(let u in x){let i=x[u];for(let b in i)G(i[b].object),delete i[b];delete x[u]}}delete Z[P]}}function I(P){if(Z[P.id]===void 0)return;let p=Z[P.id];for(let a in p){let x=p[a];for(let u in x){let i=x[u];for(let b in i)G(i[b].object),delete i[b];delete x[u]}}delete Z[P.id]}function w(P){for(let p in Z){let a=Z[p];for(let x in a){let u=a[x];if(u[P.id]===void 0)continue;let i=u[P.id];for(let b in i)G(i[b].object),delete i[b];delete u[P.id]}}}function R(P){for(let p in Z){let a=Z[p],x=P.isInstancedMesh===!0?P.id:0,u=a[x];if(u===void 0)continue;for(let i in u){let b=u[i];for(let t in b)G(b[t].object),delete b[t];delete u[i]}if(delete a[x],Object.keys(a).length===0)delete Z[p]}}function z(){if(d(),H=!0,W===K)return;W=K,U(W.object)}function d(){K.geometry=null,K.program=null,K.wireframe=!1}return{setup:Y,reset:z,resetDefaultState:d,dispose:A,releaseStatesOfGeometry:I,releaseStatesOfObject:R,releaseStatesOfProgram:w,initAttributes:B,enableAttribute:q,disableUnusedAttributes:_}}function gX(J,Q,$){let Z;function K(X){Z=X}function W(X,U){J.drawArrays(Z,X,U),$.update(U,Z,1)}function H(X,U,G){if(G===0)return;J.drawArraysInstanced(Z,X,U,G),$.update(U,Z,G)}function Y(X,U,G){if(G===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,X,0,U,0,G);let N=0;for(let E=0;E<G;E++)N+=U[E];$.update(N,Z,1)}this.setMode=K,this.render=W,this.renderInstances=H,this.renderMultiDraw=Y}function pX(J,Q,$,Z){let K;function W(){if(K!==void 0)return K;if(Q.has("EXT_texture_filter_anisotropic")===!0){let w=Q.get("EXT_texture_filter_anisotropic");K=J.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else K=0;return K}function H(w){if(w!==q9&&Z.convert(w)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Y(w){let R=w===B9&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(w!==J9&&Z.convert(w)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==z9&&!R)return!1;return!0}function X(w){if(w==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";w="mediump"}if(w==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=$.precision!==void 0?$.precision:"highp",G=X(U);if(G!==U)S0("WebGLRenderer:",U,"not supported, using",G,"instead."),U=G;let F=$.logarithmicDepthBuffer===!0,N=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control");if($.reversedDepthBuffer===!0&&N===!1)S0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let E=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),L=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),B=J.getParameter(J.MAX_TEXTURE_SIZE),q=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),O=J.getParameter(J.MAX_VERTEX_ATTRIBS),_=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),C=J.getParameter(J.MAX_VARYING_VECTORS),M=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),A=J.getParameter(J.MAX_SAMPLES),I=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:W,getMaxPrecision:X,textureFormatReadable:H,textureTypeReadable:Y,precision:U,logarithmicDepthBuffer:F,reversedDepthBuffer:N,maxTextures:E,maxVertexTextures:L,maxTextureSize:B,maxCubemapSize:q,maxAttributes:O,maxVertexUniforms:_,maxVaryings:C,maxFragmentUniforms:M,maxSamples:A,samples:I}}function mX(J){let Q=this,$=null,Z=0,K=!1,W=!1,H=new V9,Y=new v0,X={value:null,needsUpdate:!1};this.uniform=X,this.numPlanes=0,this.numIntersection=0,this.init=function(F,N){let E=F.length!==0||N||Z!==0||K;return K=N,Z=F.length,E},this.beginShadows=function(){W=!0,G(null)},this.endShadows=function(){W=!1},this.setGlobalState=function(F,N){$=G(F,N,0)},this.setState=function(F,N,E){let{clippingPlanes:L,clipIntersection:B,clipShadows:q}=F,O=J.get(F);if(!K||L===null||L.length===0||W&&!q)if(W)G(null);else U();else{let _=W?0:Z,C=_*4,M=O.clippingState||null;X.value=M,M=G(L,N,C,E);for(let A=0;A!==C;++A)M[A]=$[A];O.clippingState=M,this.numIntersection=B?this.numPlanes:0,this.numPlanes+=_}};function U(){if(X.value!==$)X.value=$,X.needsUpdate=Z>0;Q.numPlanes=Z,Q.numIntersection=0}function G(F,N,E,L){let B=F!==null?F.length:0,q=null;if(B!==0){if(q=X.value,L!==!0||q===null){let O=E+B*4,_=N.matrixWorldInverse;if(Y.getNormalMatrix(_),q===null||q.length<O)q=new Float32Array(O);for(let C=0,M=E;C!==B;++C,M+=4)H.copy(F[C]).applyMatrix4(_,Y),H.normal.toArray(q,M),q[M+3]=H.constant}X.value=q,X.needsUpdate=!0}return Q.numPlanes=B,Q.numIntersection=0,q}}var m9=4,VK=[0.125,0.215,0.35,0.446,0.526,0.582],q8=20,lX=256,q7=new D6,MK=new b0,V$=null,M$=0,z$=0,B$=!1,dX=new f;class O7{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,Q=0,$=0.1,Z=100,K={}){let{size:W=256,position:H=dX}=K;V$=this._renderer.getRenderTarget(),M$=this._renderer.getActiveCubeFace(),z$=this._renderer.getActiveMipmapLevel(),B$=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(W);let Y=this._allocateTargets();if(Y.depthBuffer=!0,this._sceneToCubeUV(J,$,Z,Y,H),Q>0)this._blur(Y,0,0,Q);return this._applyPMREM(Y),this._cleanup(Y),Y}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=IK(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=BK(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget(V$,M$,z$),this._renderer.xr.enabled=B$,J.scissorTest=!1,m8(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===b8||J.mapping===r9)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);V$=this._renderer.getRenderTarget(),M$=this._renderer.getActiveCubeFace(),z$=this._renderer.getActiveMipmapLevel(),B$=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let $=Q||this._allocateTargets();return this._textureToCubeUV(J,$),this._applyPMREM($),this._cleanup($),$}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,$={magFilter:xJ,minFilter:xJ,generateMipmaps:!1,type:B9,format:q9,colorSpace:uQ,depthBuffer:!1},Z=zK(J,Q,$);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=zK(J,Q,$);let{_lodMax:K}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=uX(K)),this._blurMaterial=nX(K,J,Q),this._ggxMaterial=cX(K,J,Q)}return Z}_compileMaterial(J){let Q=new j0(new Q9,J);this._renderer.compile(Q,q7)}_sceneToCubeUV(J,Q,$,Z,K){let Y=new SJ(90,1,Q,$),X=[1,-1,1,1,1,1],U=[1,1,1,-1,-1,-1],G=this._renderer,F=G.autoClear,N=G.toneMapping;if(G.getClearColor(MK),G.toneMapping=eJ,G.autoClear=!1,G.state.buffers.depth.getReversed())G.setRenderTarget(Z),G.clearDepth(),G.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new j0(new FJ,new N9({name:"PMREM.Background",side:vJ,depthWrite:!1,depthTest:!1}));let L=this._backgroundBox,B=L.material,q=!1,O=J.background;if(O){if(O.isColor)B.color.copy(O),J.background=null,q=!0}else B.color.copy(MK),q=!0;for(let _=0;_<6;_++){let C=_%3;if(C===0)Y.up.set(0,X[_],0),Y.position.set(K.x,K.y,K.z),Y.lookAt(K.x+U[_],K.y,K.z);else if(C===1)Y.up.set(0,0,X[_]),Y.position.set(K.x,K.y,K.z),Y.lookAt(K.x,K.y+U[_],K.z);else Y.up.set(0,X[_],0),Y.position.set(K.x,K.y,K.z),Y.lookAt(K.x,K.y,K.z+U[_]);let M=this._cubeSize;if(m8(Z,C*M,_>2?M:0,M,M),G.setRenderTarget(Z),q)G.render(L,Y);G.render(J,Y)}G.toneMapping=N,G.autoClear=F,J.background=O}_textureToCubeUV(J,Q){let $=this._renderer,Z=J.mapping===b8||J.mapping===r9;if(Z){if(this._cubemapMaterial===null)this._cubemapMaterial=IK();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=BK();let K=Z?this._cubemapMaterial:this._equirectMaterial,W=this._lodMeshes[0];W.material=K;let H=K.uniforms;H.envMap.value=J;let Y=this._cubeSize;m8(Q,0,0,3*Y,2*Y),$.setRenderTarget(Q),$.render(W,q7)}_applyPMREM(J){let Q=this._renderer,$=Q.autoClear;Q.autoClear=!1;let Z=this._lodMeshes.length;for(let K=1;K<Z;K++)this._applyGGXFilter(J,K-1,K);Q.autoClear=$}_applyGGXFilter(J,Q,$){let Z=this._renderer,K=this._pingPongRenderTarget,W=this._ggxMaterial,H=this._lodMeshes[$];H.material=W;let Y=W.uniforms,X=$/(this._lodMeshes.length-1),U=Q/(this._lodMeshes.length-1),G=Math.sqrt(X*X-U*U),F=0+X*1.25,N=G*F,{_lodMax:E}=this,L=this._sizeLods[$],B=3*L*($>E-m9?$-E+m9:0),q=4*(this._cubeSize-L);Y.envMap.value=J.texture,Y.roughness.value=N,Y.mipInt.value=E-Q,m8(K,B,q,3*L,2*L),Z.setRenderTarget(K),Z.render(H,q7),Y.envMap.value=K.texture,Y.roughness.value=0,Y.mipInt.value=E-$,m8(J,B,q,3*L,2*L),Z.setRenderTarget(J),Z.render(H,q7)}_blur(J,Q,$,Z,K){let W=this._pingPongRenderTarget;this._halfBlur(J,W,Q,$,Z,"latitudinal",K),this._halfBlur(W,J,$,$,Z,"longitudinal",K)}_halfBlur(J,Q,$,Z,K,W,H){let Y=this._renderer,X=this._blurMaterial;if(W!=="latitudinal"&&W!=="longitudinal")T0("blur direction must be either latitudinal or longitudinal!");let U=3,G=this._lodMeshes[Z];G.material=X;let F=X.uniforms,N=this._sizeLods[$]-1,E=isFinite(K)?Math.PI/(2*N):2*Math.PI/(2*q8-1),L=K/E,B=isFinite(K)?1+Math.floor(U*L):q8;if(B>q8)S0(`sigmaRadians, ${K}, is too large and will clip, as it requested ${B} samples when the maximum is set to ${q8}`);let q=[],O=0;for(let I=0;I<q8;++I){let w=I/L,R=Math.exp(-w*w/2);if(q.push(R),I===0)O+=R;else if(I<B)O+=2*R}for(let I=0;I<q.length;I++)q[I]=q[I]/O;if(F.envMap.value=J.texture,F.samples.value=B,F.weights.value=q,F.latitudinal.value=W==="latitudinal",H)F.poleAxis.value=H;let{_lodMax:_}=this;F.dTheta.value=E,F.mipInt.value=_-$;let C=this._sizeLods[Z],M=3*C*(Z>_-m9?Z-_+m9:0),A=4*(this._cubeSize-C);m8(Q,M,A,3*C,2*C),Y.setRenderTarget(Q),Y.render(G,q7)}}function uX(J){let Q=[],$=[],Z=[],K=J,W=J-m9+1+VK.length;for(let H=0;H<W;H++){let Y=Math.pow(2,K);Q.push(Y);let X=1/Y;if(H>J-m9)X=VK[H-J+m9-1];else if(H===0)X=0;$.push(X);let U=1/(Y-2),G=-U,F=1+U,N=[G,G,F,G,F,F,G,G,F,F,G,F],E=6,L=6,B=3,q=2,O=1,_=new Float32Array(B*L*E),C=new Float32Array(q*L*E),M=new Float32Array(O*L*E);for(let I=0;I<E;I++){let w=I%3*2/3-1,R=I>2?0:-1,z=[w,R,0,w+0.6666666666666666,R,0,w+0.6666666666666666,R+1,0,w,R,0,w+0.6666666666666666,R+1,0,w,R+1,0];_.set(z,B*L*I),C.set(N,q*L*I);let d=[I,I,I,I,I,I];M.set(d,O*L*I)}let A=new Q9;if(A.setAttribute("position",new lJ(_,B)),A.setAttribute("uv",new lJ(C,q)),A.setAttribute("faceIndex",new lJ(M,O)),Z.push(new j0(A,null)),K>m9)K--}return{lodMeshes:Z,sizeLods:Q,sigmas:$}}function zK(J,Q,$){let Z=new nJ(J,Q,$);return Z.texture.mapping=$7,Z.texture.name="PMREM.cubeUv",Z.scissorTest=!0,Z}function m8(J,Q,$,Z,K){J.viewport.set(Q,$,Z,K),J.scissor.set(Q,$,Z,K)}function cX(J,Q,$){return new sJ({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:lX,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:V6(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:U9,depthTest:!1,depthWrite:!1})}function nX(J,Q,$){let Z=new Float32Array(q8),K=new f(0,1,0);return new sJ({name:"SphericalGaussianBlur",defines:{n:q8,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:Z},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:K}},vertexShader:V6(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:U9,depthTest:!1,depthWrite:!1})}function BK(){return new sJ({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:V6(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:U9,depthTest:!1,depthWrite:!1})}function IK(){return new sJ({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:V6(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:U9,depthTest:!1,depthWrite:!1})}function V6(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class w$ extends nJ{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},Z=[$,$,$,$,$,$];this.texture=new q6(Z),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},Z=new FJ(5,5,5),K=new sJ({name:"CubemapFromEquirect",uniforms:W8($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:vJ,blending:U9});K.uniforms.tEquirect.value=Q;let W=new j0(Z,K),H=Q.minFilter;if(Q.minFilter===t9)Q.minFilter=xJ;return new O$(1,10,this).update(J,W),Q.minFilter=H,W.geometry.dispose(),W.material.dispose(),this}clear(J,Q=!0,$=!0,Z=!0){let K=J.getRenderTarget();for(let W=0;W<6;W++)J.setRenderTarget(this,W),J.clear(Q,$,Z);J.setRenderTarget(K)}}function sX(J){let Q=new WeakMap,$=new WeakMap,Z=null;function K(N,E=!1){if(N===null||N===void 0)return null;if(E)return H(N);return W(N)}function W(N){if(N&&N.isTexture){let E=N.mapping;if(E===s7||E===i7)if(Q.has(N)){let L=Q.get(N).texture;return Y(L,N.mapping)}else{let L=N.image;if(L&&L.height>0){let B=new w$(L.height);return B.fromEquirectangularTexture(J,N),Q.set(N,B),N.addEventListener("dispose",U),Y(B.texture,N.mapping)}else return null}}return N}function H(N){if(N&&N.isTexture){let E=N.mapping,L=E===s7||E===i7,B=E===b8||E===r9;if(L||B){let q=$.get(N),O=q!==void 0?q.texture.pmremVersion:0;if(N.isRenderTargetTexture&&N.pmremVersion!==O){if(Z===null)Z=new O7(J);return q=L?Z.fromEquirectangular(N,q):Z.fromCubemap(N,q),q.texture.pmremVersion=N.pmremVersion,$.set(N,q),q.texture}else if(q!==void 0)return q.texture;else{let _=N.image;if(L&&_&&_.height>0||B&&_&&X(_)){if(Z===null)Z=new O7(J);return q=L?Z.fromEquirectangular(N):Z.fromCubemap(N),q.texture.pmremVersion=N.pmremVersion,$.set(N,q),N.addEventListener("dispose",G),q.texture}else return null}}}return N}function Y(N,E){if(E===s7)N.mapping=b8;else if(E===i7)N.mapping=r9;return N}function X(N){let E=0,L=6;for(let B=0;B<L;B++)if(N[B]!==void 0)E++;return E===L}function U(N){let E=N.target;E.removeEventListener("dispose",U);let L=Q.get(E);if(L!==void 0)Q.delete(E),L.dispose()}function G(N){let E=N.target;E.removeEventListener("dispose",G);let L=$.get(E);if(L!==void 0)$.delete(E),L.dispose()}function F(){if(Q=new WeakMap,$=new WeakMap,Z!==null)Z.dispose(),Z=null}return{get:K,dispose:F}}function iX(J){let Q={};function $(Z){if(Q[Z]!==void 0)return Q[Z];let K=J.getExtension(Z);return Q[Z]=K,K}return{has:function(Z){return $(Z)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(Z){let K=$(Z);if(K===null)a9("WebGLRenderer: "+Z+" extension not supported.");return K}}}function oX(J,Q,$,Z){let K={},W=new WeakMap;function H(F){let N=F.target;if(N.index!==null)Q.remove(N.index);for(let L in N.attributes)Q.remove(N.attributes[L]);N.removeEventListener("dispose",H),delete K[N.id];let E=W.get(N);if(E)Q.remove(E),W.delete(N);if(Z.releaseStatesOfGeometry(N),N.isInstancedBufferGeometry===!0)delete N._maxInstanceCount;$.memory.geometries--}function Y(F,N){if(K[N.id]===!0)return N;return N.addEventListener("dispose",H),K[N.id]=!0,$.memory.geometries++,N}function X(F){let N=F.attributes;for(let E in N)Q.update(N[E],J.ARRAY_BUFFER)}function U(F){let N=[],E=F.index,L=F.attributes.position,B=0;if(L===void 0)return;if(E!==null){let _=E.array;B=E.version;for(let C=0,M=_.length;C<M;C+=3){let A=_[C+0],I=_[C+1],w=_[C+2];N.push(A,I,I,w,w,A)}}else{let _=L.array;B=L.version;for(let C=0,M=_.length/3-1;C<M;C+=3){let A=C+0,I=C+1,w=C+2;N.push(A,I,I,w,w,A)}}let q=new(L.count>=65535?Y6:H6)(N,1);q.version=B;let O=W.get(F);if(O)Q.remove(O);W.set(F,q)}function G(F){let N=W.get(F);if(N){let E=F.index;if(E!==null){if(N.version<E.version)U(F)}}else U(F);return W.get(F)}return{get:Y,update:X,getWireframeAttribute:G}}function aX(J,Q,$){let Z;function K(F){Z=F}let W,H;function Y(F){W=F.type,H=F.bytesPerElement}function X(F,N){J.drawElements(Z,N,W,F*H),$.update(N,Z,1)}function U(F,N,E){if(E===0)return;J.drawElementsInstanced(Z,N,W,F*H,E),$.update(N,Z,E)}function G(F,N,E){if(E===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,N,0,W,F,0,E);let B=0;for(let q=0;q<E;q++)B+=N[q];$.update(B,Z,1)}this.setMode=K,this.setIndex=Y,this.render=X,this.renderInstances=U,this.renderMultiDraw=G}function rX(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(W,H,Y){switch($.calls++,H){case J.TRIANGLES:$.triangles+=Y*(W/3);break;case J.LINES:$.lines+=Y*(W/2);break;case J.LINE_STRIP:$.lines+=Y*(W-1);break;case J.LINE_LOOP:$.lines+=Y*W;break;case J.POINTS:$.points+=Y*W;break;default:T0("WebGLInfo: Unknown draw mode:",H);break}}function K(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:K,update:Z}}function tX(J,Q,$){let Z=new WeakMap,K=new NJ;function W(H,Y,X){let U=H.morphTargetInfluences,G=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,F=G!==void 0?G.length:0,N=Z.get(Y);if(N===void 0||N.count!==F){let z=function(){w.dispose(),Z.delete(Y),Y.removeEventListener("dispose",z)};if(N!==void 0)N.texture.dispose();let E=Y.morphAttributes.position!==void 0,L=Y.morphAttributes.normal!==void 0,B=Y.morphAttributes.color!==void 0,q=Y.morphAttributes.position||[],O=Y.morphAttributes.normal||[],_=Y.morphAttributes.color||[],C=0;if(E===!0)C=1;if(L===!0)C=2;if(B===!0)C=3;let M=Y.attributes.position.count*C,A=1;if(M>Q.maxTextureSize)A=Math.ceil(M/Q.maxTextureSize),M=Q.maxTextureSize;let I=new Float32Array(M*A*4*F),w=new W6(I,M,A,F);w.type=z9,w.needsUpdate=!0;let R=C*4;for(let d=0;d<F;d++){let P=q[d],p=O[d],a=_[d],x=M*A*4*d;for(let u=0;u<P.count;u++){let i=u*R;if(E===!0)K.fromBufferAttribute(P,u),I[x+i+0]=K.x,I[x+i+1]=K.y,I[x+i+2]=K.z,I[x+i+3]=0;if(L===!0)K.fromBufferAttribute(p,u),I[x+i+4]=K.x,I[x+i+5]=K.y,I[x+i+6]=K.z,I[x+i+7]=0;if(B===!0)K.fromBufferAttribute(a,u),I[x+i+8]=K.x,I[x+i+9]=K.y,I[x+i+10]=K.z,I[x+i+11]=a.itemSize===4?K.w:1}}N={count:F,texture:w,size:new g0(M,A)},Z.set(Y,N),Y.addEventListener("dispose",z)}if(H.isInstancedMesh===!0&&H.morphTexture!==null)X.getUniforms().setValue(J,"morphTexture",H.morphTexture,$);else{let E=0;for(let B=0;B<U.length;B++)E+=U[B];let L=Y.morphTargetsRelative?1:1-E;X.getUniforms().setValue(J,"morphTargetBaseInfluence",L),X.getUniforms().setValue(J,"morphTargetInfluences",U)}X.getUniforms().setValue(J,"morphTargetsTexture",N.texture,$),X.getUniforms().setValue(J,"morphTargetsTextureSize",N.size)}return{update:W}}function eX(J,Q,$,Z,K){let W=new WeakMap;function H(U){let G=K.render.frame,F=U.geometry,N=Q.get(U,F);if(W.get(N)!==G)Q.update(N),W.set(N,G);if(U.isInstancedMesh){if(U.hasEventListener("dispose",X)===!1)U.addEventListener("dispose",X);if(W.get(U)!==G){if($.update(U.instanceMatrix,J.ARRAY_BUFFER),U.instanceColor!==null)$.update(U.instanceColor,J.ARRAY_BUFFER);W.set(U,G)}}if(U.isSkinnedMesh){let E=U.skeleton;if(W.get(E)!==G)E.update(),W.set(E,G)}return N}function Y(){W=new WeakMap}function X(U){let G=U.target;if(G.removeEventListener("dispose",X),Z.releaseStatesOfObject(G),$.remove(G.instanceMatrix),G.instanceColor!==null)$.remove(G.instanceColor)}return{update:H,dispose:Y}}var JU={[QQ]:"LINEAR_TONE_MAPPING",[$Q]:"REINHARD_TONE_MAPPING",[ZQ]:"CINEON_TONE_MAPPING",[Q7]:"ACES_FILMIC_TONE_MAPPING",[WQ]:"AGX_TONE_MAPPING",[HQ]:"NEUTRAL_TONE_MAPPING",[KQ]:"CUSTOM_TONE_MAPPING"};function QU(J,Q,$,Z,K,W){let H=new nJ(Q,$,{type:J,depthBuffer:K,stencilBuffer:W,samples:Z?4:0,depthTexture:K?new g9(Q,$):void 0}),Y=new nJ(Q,$,{type:B9,depthBuffer:!1,stencilBuffer:!1}),X=new Q9;X.setAttribute("position",new hJ([-1,3,0,-1,-1,0,3,-1,0],3)),X.setAttribute("uv",new hJ([0,2,0,0,2,0],2));let U=new J$({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),G=new j0(X,U),F=new D6(-1,1,1,-1,0,1),N=null,E=null,L=!1,B,q=null,O=[],_=!1;this.setSize=function(C,M){H.setSize(C,M),Y.setSize(C,M);for(let A=0;A<O.length;A++){let I=O[A];if(I.setSize)I.setSize(C,M)}},this.setEffects=function(C){O=C,_=O.length>0&&O[0].isRenderPass===!0;let{width:M,height:A}=H;for(let I=0;I<O.length;I++){let w=O[I];if(w.setSize)w.setSize(M,A)}},this.begin=function(C,M){if(L)return!1;if(C.toneMapping===eJ&&O.length===0)return!1;if(q=M,M!==null){let{width:A,height:I}=M;if(H.width!==A||H.height!==I)this.setSize(A,I)}if(_===!1)C.setRenderTarget(H);return B=C.toneMapping,C.toneMapping=eJ,!0},this.hasRenderPass=function(){return _},this.end=function(C,M){C.toneMapping=B,L=!0;let A=H,I=Y;for(let w=0;w<O.length;w++){let R=O[w];if(R.enabled===!1)continue;if(R.render(C,I,A,M),R.needsSwap!==!1){let z=A;A=I,I=z}}if(N!==C.outputColorSpace||E!==C.toneMapping){if(N=C.outputColorSpace,E=C.toneMapping,U.defines={},u0.getTransfer(N)===HJ)U.defines.SRGB_TRANSFER="";let w=JU[E];if(w)U.defines[w]="";U.needsUpdate=!0}U.uniforms.tDiffuse.value=A.texture,C.setRenderTarget(q),C.render(G,F),q=null,L=!1},this.isCompositing=function(){return L},this.dispose=function(){if(H.depthTexture)H.depthTexture.dispose();H.dispose(),Y.dispose(),X.dispose(),U.dispose()}}var uK=new CJ,P$=new g9(1,1),cK=new W6,nK=new rQ,sK=new q6,AK=[],PK=[],CK=new Float32Array(16),wK=new Float32Array(9),_K=new Float32Array(4);function l8(J,Q,$){let Z=J[0];if(Z<=0||Z>0)return J;let K=Q*$,W=AK[K];if(W===void 0)W=new Float32Array(K),AK[K]=W;if(Q!==0){Z.toArray(W,0);for(let H=1,Y=0;H!==Q;++H)Y+=$,J[H].toArray(W,Y)}return W}function LJ(J,Q){if(J.length!==Q.length)return!1;for(let $=0,Z=J.length;$<Z;$++)if(J[$]!==Q[$])return!1;return!0}function VJ(J,Q){for(let $=0,Z=Q.length;$<Z;$++)J[$]=Q[$]}function M6(J,Q){let $=PK[Q];if($===void 0)$=new Int32Array(Q),PK[Q]=$;for(let Z=0;Z!==Q;++Z)$[Z]=J.allocateTextureUnit();return $}function $U(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function ZU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(LJ($,Q))return;J.uniform2fv(this.addr,Q),VJ($,Q)}}function KU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(LJ($,Q))return;J.uniform3fv(this.addr,Q),VJ($,Q)}}function WU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(LJ($,Q))return;J.uniform4fv(this.addr,Q),VJ($,Q)}}function HU(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(LJ($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),VJ($,Q)}else{if(LJ($,Z))return;_K.set(Z),J.uniformMatrix2fv(this.addr,!1,_K),VJ($,Z)}}function YU(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(LJ($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),VJ($,Q)}else{if(LJ($,Z))return;wK.set(Z),J.uniformMatrix3fv(this.addr,!1,wK),VJ($,Z)}}function XU(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(LJ($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),VJ($,Q)}else{if(LJ($,Z))return;CK.set(Z),J.uniformMatrix4fv(this.addr,!1,CK),VJ($,Z)}}function UU(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function qU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(LJ($,Q))return;J.uniform2iv(this.addr,Q),VJ($,Q)}}function NU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(LJ($,Q))return;J.uniform3iv(this.addr,Q),VJ($,Q)}}function GU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(LJ($,Q))return;J.uniform4iv(this.addr,Q),VJ($,Q)}}function FU(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function OU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(LJ($,Q))return;J.uniform2uiv(this.addr,Q),VJ($,Q)}}function EU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(LJ($,Q))return;J.uniform3uiv(this.addr,Q),VJ($,Q)}}function DU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(LJ($,Q))return;J.uniform4uiv(this.addr,Q),VJ($,Q)}}function RU(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;let W;if(this.type===J.SAMPLER_2D_SHADOW)P$.compareFunction=$.isReversedDepthBuffer()?K6:Z6,W=P$;else W=uK;$.setTexture2D(Q||W,K)}function kU(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTexture3D(Q||nK,K)}function LU(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTextureCube(Q||sK,K)}function VU(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTexture2DArray(Q||cK,K)}function MU(J){switch(J){case 5126:return $U;case 35664:return ZU;case 35665:return KU;case 35666:return WU;case 35674:return HU;case 35675:return YU;case 35676:return XU;case 5124:case 35670:return UU;case 35667:case 35671:return qU;case 35668:case 35672:return NU;case 35669:case 35673:return GU;case 5125:return FU;case 36294:return OU;case 36295:return EU;case 36296:return DU;case 35678:case 36198:case 36298:case 36306:case 35682:return RU;case 35679:case 36299:case 36307:return kU;case 35680:case 36300:case 36308:case 36293:return LU;case 36289:case 36303:case 36311:case 36292:return VU}}function zU(J,Q){J.uniform1fv(this.addr,Q)}function BU(J,Q){let $=l8(Q,this.size,2);J.uniform2fv(this.addr,$)}function IU(J,Q){let $=l8(Q,this.size,3);J.uniform3fv(this.addr,$)}function AU(J,Q){let $=l8(Q,this.size,4);J.uniform4fv(this.addr,$)}function PU(J,Q){let $=l8(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function CU(J,Q){let $=l8(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function wU(J,Q){let $=l8(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function _U(J,Q){J.uniform1iv(this.addr,Q)}function TU(J,Q){J.uniform2iv(this.addr,Q)}function SU(J,Q){J.uniform3iv(this.addr,Q)}function jU(J,Q){J.uniform4iv(this.addr,Q)}function vU(J,Q){J.uniform1uiv(this.addr,Q)}function yU(J,Q){J.uniform2uiv(this.addr,Q)}function fU(J,Q){J.uniform3uiv(this.addr,Q)}function bU(J,Q){J.uniform4uiv(this.addr,Q)}function hU(J,Q,$){let Z=this.cache,K=Q.length,W=M6($,K);if(!LJ(Z,W))J.uniform1iv(this.addr,W),VJ(Z,W);let H;if(this.type===J.SAMPLER_2D_SHADOW)H=P$;else H=uK;for(let Y=0;Y!==K;++Y)$.setTexture2D(Q[Y]||H,W[Y])}function xU(J,Q,$){let Z=this.cache,K=Q.length,W=M6($,K);if(!LJ(Z,W))J.uniform1iv(this.addr,W),VJ(Z,W);for(let H=0;H!==K;++H)$.setTexture3D(Q[H]||nK,W[H])}function gU(J,Q,$){let Z=this.cache,K=Q.length,W=M6($,K);if(!LJ(Z,W))J.uniform1iv(this.addr,W),VJ(Z,W);for(let H=0;H!==K;++H)$.setTextureCube(Q[H]||sK,W[H])}function pU(J,Q,$){let Z=this.cache,K=Q.length,W=M6($,K);if(!LJ(Z,W))J.uniform1iv(this.addr,W),VJ(Z,W);for(let H=0;H!==K;++H)$.setTexture2DArray(Q[H]||cK,W[H])}function mU(J){switch(J){case 5126:return zU;case 35664:return BU;case 35665:return IU;case 35666:return AU;case 35674:return PU;case 35675:return CU;case 35676:return wU;case 5124:case 35670:return _U;case 35667:case 35671:return TU;case 35668:case 35672:return SU;case 35669:case 35673:return jU;case 5125:return vU;case 36294:return yU;case 36295:return fU;case 36296:return bU;case 35678:case 36198:case 36298:case 36306:case 35682:return hU;case 35679:case 36299:case 36307:return xU;case 35680:case 36300:case 36308:case 36293:return gU;case 36289:case 36303:case 36311:case 36292:return pU}}class iK{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=MU(Q.type)}}class oK{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=mU(Q.type)}}class aK{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let Z=this.seq;for(let K=0,W=Z.length;K!==W;++K){let H=Z[K];H.setValue(J,Q[H.id],$)}}}var I$=/(\w+)(\])?(\[|\.)?/g;function TK(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function lU(J,Q,$){let Z=J.name,K=Z.length;I$.lastIndex=0;while(!0){let W=I$.exec(Z),H=I$.lastIndex,Y=W[1],X=W[2]==="]",U=W[3];if(X)Y=Y|0;if(U===void 0||U==="["&&H+2===K){TK($,U===void 0?new iK(Y,J,Q):new oK(Y,J,Q));break}else{let F=$.map[Y];if(F===void 0)F=new aK(Y),TK($,F);$=F}}}class F7{constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let W=0;W<$;++W){let H=J.getActiveUniform(Q,W),Y=J.getUniformLocation(Q,H.name);lU(H,Y,this)}let Z=[],K=[];for(let W of this.seq)if(W.type===J.SAMPLER_2D_SHADOW||W.type===J.SAMPLER_CUBE_SHADOW||W.type===J.SAMPLER_2D_ARRAY_SHADOW)Z.push(W);else K.push(W);if(Z.length>0)this.seq=Z.concat(K)}setValue(J,Q,$,Z){let K=this.map[Q];if(K!==void 0)K.setValue(J,$,Z)}setOptional(J,Q,$){let Z=Q[$];if(Z!==void 0)this.setValue(J,$,Z)}static upload(J,Q,$,Z){for(let K=0,W=Q.length;K!==W;++K){let H=Q[K],Y=$[H.id];if(Y.needsUpdate!==!1)H.setValue(J,Y.value,Z)}}static seqWithValue(J,Q){let $=[];for(let Z=0,K=J.length;Z!==K;++Z){let W=J[Z];if(W.id in Q)$.push(W)}return $}}function SK(J,Q,$){let Z=J.createShader(Q);return J.shaderSource(Z,$),J.compileShader(Z),Z}var dU=37297,uU=0;function cU(J,Q){let $=J.split(`
`),Z=[],K=Math.max(Q-6,0),W=Math.min(Q+6,$.length);for(let H=K;H<W;H++){let Y=H+1;Z.push(`${Y===Q?">":" "} ${Y}: ${$[H]}`)}return Z.join(`
`)}var jK=new v0;function nU(J){u0._getMatrix(jK,u0.workingColorSpace,J);let Q=`mat3( ${jK.elements.map(($)=>$.toFixed(4))} )`;switch(u0.getTransfer(J)){case cQ:return[Q,"LinearTransferOETF"];case HJ:return[Q,"sRGBTransferOETF"];default:return S0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function vK(J,Q,$){let Z=J.getShaderParameter(Q,J.COMPILE_STATUS),W=(J.getShaderInfoLog(Q)||"").trim();if(Z&&W==="")return"";let H=/ERROR: 0:(\d+)/.exec(W);if(H){let Y=parseInt(H[1]);return $.toUpperCase()+`

`+W+`

`+cU(J.getShaderSource(Q),Y)}else return W}function sU(J,Q){let $=nU(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( value.rgb * ${$[0]}, value.a ) );`,"}"].join(`
`)}var iU={[QQ]:"Linear",[$Q]:"Reinhard",[ZQ]:"Cineon",[Q7]:"ACESFilmic",[WQ]:"AgX",[HQ]:"Neutral",[KQ]:"Custom"};function oU(J,Q){let $=iU[Q];if($===void 0)return S0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var L6=new f;function aU(){u0.getLuminanceCoefficients(L6);let J=L6.x.toFixed(4),Q=L6.y.toFixed(4),$=L6.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function rU(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(G7).join(`
`)}function tU(J){let Q=[];for(let $ in J){let Z=J[$];if(Z===!1)continue;Q.push("#define "+$+" "+Z)}return Q.join(`
`)}function eU(J,Q){let $={},Z=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let K=0;K<Z;K++){let W=J.getActiveAttrib(Q,K),H=W.name,Y=1;if(W.type===J.FLOAT_MAT2)Y=2;if(W.type===J.FLOAT_MAT3)Y=3;if(W.type===J.FLOAT_MAT4)Y=4;$[H]={type:W.type,location:J.getAttribLocation(Q,H),locationSize:Y}}return $}function G7(J){return J!==""}function yK(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function fK(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var J5=/^[ \t]*#include +<([\w\d./]+)>/gm;function C$(J){return J.replace(J5,$5)}var Q5=new Map;function $5(J,Q){let $=p0[Q];if($===void 0){let Z=Q5.get(Q);if(Z!==void 0)$=p0[Z],S0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,Z);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+Q+">")}return C$($)}var Z5=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bK(J){return J.replace(Z5,K5)}function K5(J,Q,$,Z){let K="";for(let W=parseInt(Q);W<parseInt($);W++)K+=Z.replace(/\[\s*i\s*\]/g,"[ "+W+" ]").replace(/UNROLLED_LOOP_INDEX/g,W);return K}function hK(J){let Q=`precision ${J.precision} float;
	precision ${J.precision} int;
	precision ${J.precision} sampler2D;
	precision ${J.precision} samplerCube;
	precision ${J.precision} sampler3D;
	precision ${J.precision} sampler2DArray;
	precision ${J.precision} sampler2DShadow;
	precision ${J.precision} samplerCubeShadow;
	precision ${J.precision} sampler2DArrayShadow;
	precision ${J.precision} isampler2D;
	precision ${J.precision} isampler3D;
	precision ${J.precision} isamplerCube;
	precision ${J.precision} isampler2DArray;
	precision ${J.precision} usampler2D;
	precision ${J.precision} usampler3D;
	precision ${J.precision} usamplerCube;
	precision ${J.precision} usampler2DArray;
	`;if(J.precision==="highp")Q+=`
#define HIGH_PRECISION`;else if(J.precision==="mediump")Q+=`
#define MEDIUM_PRECISION`;else if(J.precision==="lowp")Q+=`
#define LOW_PRECISION`;return Q}var W5={[e8]:"SHADOWMAP_TYPE_PCF",[v8]:"SHADOWMAP_TYPE_VSM"};function H5(J){return W5[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Y5={[b8]:"ENVMAP_TYPE_CUBE",[r9]:"ENVMAP_TYPE_CUBE",[$7]:"ENVMAP_TYPE_CUBE_UV"};function X5(J){if(J.envMap===!1)return"ENVMAP_TYPE_CUBE";return Y5[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var U5={[r9]:"ENVMAP_MODE_REFRACTION"};function q5(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return U5[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var N5={[uZ]:"ENVMAP_BLENDING_MULTIPLY",[cZ]:"ENVMAP_BLENDING_MIX",[nZ]:"ENVMAP_BLENDING_ADD"};function G5(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return N5[J.combine]||"ENVMAP_BLENDING_NONE"}function F5(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let $=Math.log2(Q)-2,Z=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,$),112)),texelHeight:Z,maxMip:$}}function O5(J,Q,$,Z){let K=J.getContext(),W=$.defines,H=$.vertexShader,Y=$.fragmentShader,X=H5($),U=X5($),G=q5($),F=G5($),N=F5($),E=rU($),L=tU(W),B=K.createProgram(),q,O,_=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(q=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,L].filter(G7).join(`
`),q.length>0)q+=`
`;if(O=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,L].filter(G7).join(`
`),O.length>0)O+=`
`}else q=[hK($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,L,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+G:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexNormals?"#define HAS_NORMAL":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+X:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(G7).join(`
`),O=[hK($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,L,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+U:"",$.envMap?"#define "+G:"",$.envMap?"#define "+F:"",N?"#define CUBEUV_TEXEL_WIDTH "+N.texelWidth:"",N?"#define CUBEUV_TEXEL_HEIGHT "+N.texelHeight:"",N?"#define CUBEUV_MAX_MIP "+N.maxMip+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor?"#define USE_COLOR":"",$.vertexAlphas||$.batchingColor?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+X:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==eJ?"#define TONE_MAPPING":"",$.toneMapping!==eJ?p0.tonemapping_pars_fragment:"",$.toneMapping!==eJ?oU("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",p0.colorspace_pars_fragment,sU("linearToOutputTexel",$.outputColorSpace),aU(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(G7).join(`
`);if(H=C$(H),H=yK(H,$),H=fK(H,$),Y=C$(Y),Y=yK(Y,$),Y=fK(Y,$),H=bK(H),Y=bK(Y),$.isRawShaderMaterial!==!0)_=`#version 300 es
`,q=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+q,O=["#define varying in",$.glslVersion===nQ?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===nQ?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+O;let C=_+q+H,M=_+O+Y,A=SK(K,K.VERTEX_SHADER,C),I=SK(K,K.FRAGMENT_SHADER,M);if(K.attachShader(B,A),K.attachShader(B,I),$.index0AttributeName!==void 0)K.bindAttribLocation(B,0,$.index0AttributeName);else if($.hasPositionAttribute===!0)K.bindAttribLocation(B,0,"position");K.linkProgram(B);function w(P){if(J.debug.checkShaderErrors){let p=K.getProgramInfoLog(B)||"",a=K.getShaderInfoLog(A)||"",x=K.getShaderInfoLog(I)||"",u=p.trim(),i=a.trim(),b=x.trim(),t=!0,J0=!0;if(K.getProgramParameter(B,K.LINK_STATUS)===!1)if(t=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(K,B,A,I);else{let H0=vK(K,A,"vertex"),V0=vK(K,I,"fragment");T0("WebGLProgram: Shader Error "+K.getError()+" - VALIDATE_STATUS "+K.getProgramParameter(B,K.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+u+`
`+H0+`
`+V0)}else if(u!=="")S0("WebGLProgram: Program Info Log:",u);else if(i===""||b==="")J0=!1;if(J0)P.diagnostics={runnable:t,programLog:u,vertexShader:{log:i,prefix:q},fragmentShader:{log:b,prefix:O}}}K.deleteShader(A),K.deleteShader(I),R=new F7(K,B),z=eU(K,B)}let R;this.getUniforms=function(){if(R===void 0)w(this);return R};let z;this.getAttributes=function(){if(z===void 0)w(this);return z};let d=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(d===!1)d=K.getProgramParameter(B,dU);return d},this.destroy=function(){Z.releaseStatesOfProgram(this),K.deleteProgram(B),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=uU++,this.cacheKey=Q,this.usedTimes=1,this.program=B,this.vertexShader=A,this.fragmentShader=I,this}var E5=0;class rK{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,Q,$){let Z=this._getShaderCacheForMaterial(J);if(Z.has(Q)===!1)Z.add(Q),Q.usedTimes++;if(Z.has($)===!1)Z.add($),$.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new tK(J),Q.set(J,$);return $}}class tK{constructor(J){this.id=E5++,this.code=J,this.usedTimes=0}}function D5(J){return J===Q8||J===Q6||J===$6}function R5(J,Q,$,Z,K,W){let H=new Y7,Y=new rK,X=new Set,U=[],G=new Map,F=Z.logarithmicDepthBuffer,N=Z.precision,E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function L(R){if(X.add(R),R===0)return"uv";return`uv${R}`}function B(R,z,d,P,p,a){let x=P.fog,u=p.geometry,i=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?P.environment:null,b=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap,t=Q.get(R.envMap||i,b),J0=!!t&&t.mapping===$7?t.image.height:null,H0=E[R.type];if(R.precision!==null){if(N=Z.getMaxPrecision(R.precision),N!==R.precision)S0("WebGLProgram.getParameters:",R.precision,"not supported, using",N,"instead.")}let V0=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,k0=V0!==void 0?V0.length:0,a0=0;if(u.morphAttributes.position!==void 0)a0=1;if(u.morphAttributes.normal!==void 0)a0=2;if(u.morphAttributes.color!==void 0)a0=3;let t0,r,Z0,E0;if(H0){let D0=F9[H0];t0=D0.vertexShader,r=D0.fragmentShader}else{t0=R.vertexShader,r=R.fragmentShader;let D0=Y.getVertexShaderStage(R),_0=Y.getFragmentShaderStage(R);Y.update(R,D0,_0),Z0=D0.id,E0=_0.id}let F0=J.getRenderTarget(),P0=J.state.buffers.depth.getReversed(),m0=p.isInstancedMesh===!0,h0=p.isBatchedMesh===!0,x0=!!R.map,r0=!!R.matcap,d0=!!t,y0=!!R.aoMap,UJ=!!R.lightMap,AJ=!!R.bumpMap&&R.wireframe===!1,$J=!!R.normalMap,qJ=!!R.displacementMap,OJ=!!R.emissiveMap,ZJ=!!R.metalnessMap,j=!!R.roughnessMap,MJ=R.anisotropy>0,s0=R.clearcoat>0,o0=R.dispersion>0,V=R.iridescence>0,D=R.sheen>0,T=R.transmission>0,m=MJ&&!!R.anisotropyMap,e=s0&&!!R.clearcoatMap,Q0=s0&&!!R.clearcoatNormalMap,Y0=s0&&!!R.clearcoatRoughnessMap,c=V&&!!R.iridescenceMap,o=V&&!!R.iridescenceThicknessMap,q0=D&&!!R.sheenColorMap,z0=D&&!!R.sheenRoughnessMap,X0=!!R.specularMap,$0=!!R.specularColorMap,M0=!!R.specularIntensityMap,w0=T&&!!R.transmissionMap,n0=T&&!!R.thicknessMap,S=!!R.gradientMap,K0=!!R.alphaMap,s=R.alphaTest>0,W0=!!R.alphaHash,O0=!!R.extensions,v=eJ;if(R.toneMapped){if(F0===null||F0.isXRRenderTarget===!0)v=J.toneMapping}let n={shaderID:H0,shaderType:R.type,shaderName:R.name,vertexShader:t0,fragmentShader:r,defines:R.defines,customVertexShaderID:Z0,customFragmentShaderID:E0,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:N,batching:h0,batchingColor:h0&&p._colorsTexture!==null,instancing:m0,instancingColor:m0&&p.instanceColor!==null,instancingMorph:m0&&p.morphTexture!==null,outputColorSpace:F0===null?J.outputColorSpace:F0.isXRRenderTarget===!0?F0.texture.colorSpace:u0.workingColorSpace,alphaToCoverage:!!R.alphaToCoverage,map:x0,matcap:r0,envMap:d0,envMapMode:d0&&t.mapping,envMapCubeUVHeight:J0,aoMap:y0,lightMap:UJ,bumpMap:AJ,normalMap:$J,displacementMap:qJ,emissiveMap:OJ,normalMapObjectSpace:$J&&R.normalMapType===ZK,normalMapTangentSpace:$J&&R.normalMapType===dQ,packedNormalMap:$J&&R.normalMapType===dQ&&D5(R.normalMap.format),metalnessMap:ZJ,roughnessMap:j,anisotropy:MJ,anisotropyMap:m,clearcoat:s0,clearcoatMap:e,clearcoatNormalMap:Q0,clearcoatRoughnessMap:Y0,dispersion:o0,iridescence:V,iridescenceMap:c,iridescenceThicknessMap:o,sheen:D,sheenColorMap:q0,sheenRoughnessMap:z0,specularMap:X0,specularColorMap:$0,specularIntensityMap:M0,transmission:T,transmissionMap:w0,thicknessMap:n0,gradientMap:S,opaque:R.transparent===!1&&R.blending===J7&&R.alphaToCoverage===!1,alphaMap:K0,alphaTest:s,alphaHash:W0,combine:R.combine,mapUv:x0&&L(R.map.channel),aoMapUv:y0&&L(R.aoMap.channel),lightMapUv:UJ&&L(R.lightMap.channel),bumpMapUv:AJ&&L(R.bumpMap.channel),normalMapUv:$J&&L(R.normalMap.channel),displacementMapUv:qJ&&L(R.displacementMap.channel),emissiveMapUv:OJ&&L(R.emissiveMap.channel),metalnessMapUv:ZJ&&L(R.metalnessMap.channel),roughnessMapUv:j&&L(R.roughnessMap.channel),anisotropyMapUv:m&&L(R.anisotropyMap.channel),clearcoatMapUv:e&&L(R.clearcoatMap.channel),clearcoatNormalMapUv:Q0&&L(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y0&&L(R.clearcoatRoughnessMap.channel),iridescenceMapUv:c&&L(R.iridescenceMap.channel),iridescenceThicknessMapUv:o&&L(R.iridescenceThicknessMap.channel),sheenColorMapUv:q0&&L(R.sheenColorMap.channel),sheenRoughnessMapUv:z0&&L(R.sheenRoughnessMap.channel),specularMapUv:X0&&L(R.specularMap.channel),specularColorMapUv:$0&&L(R.specularColorMap.channel),specularIntensityMapUv:M0&&L(R.specularIntensityMap.channel),transmissionMapUv:w0&&L(R.transmissionMap.channel),thicknessMapUv:n0&&L(R.thicknessMap.channel),alphaMapUv:K0&&L(R.alphaMap.channel),vertexTangents:!!u.attributes.tangent&&($J||MJ),vertexNormals:!!u.attributes.normal,vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!u.attributes.color&&u.attributes.color.itemSize===4,pointsUvs:p.isPoints===!0&&!!u.attributes.uv&&(x0||K0),fog:!!x,useFog:R.fog===!0,fogExp2:!!x&&x.isFogExp2,flatShading:R.wireframe===!1&&(R.flatShading===!0||u.attributes.normal===void 0&&$J===!1&&(R.isMeshLambertMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isMeshPhysicalMaterial)),sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:F,reversedDepthBuffer:P0,skinning:p.isSkinnedMesh===!0,hasPositionAttribute:u.attributes.position!==void 0,morphTargets:u.morphAttributes.position!==void 0,morphNormals:u.morphAttributes.normal!==void 0,morphColors:u.morphAttributes.color!==void 0,morphTargetsCount:k0,morphTextureStride:a0,numDirLights:z.directional.length,numPointLights:z.point.length,numSpotLights:z.spot.length,numSpotLightMaps:z.spotLightMap.length,numRectAreaLights:z.rectArea.length,numHemiLights:z.hemi.length,numDirLightShadows:z.directionalShadowMap.length,numPointLightShadows:z.pointShadowMap.length,numSpotLightShadows:z.spotShadowMap.length,numSpotLightShadowsWithMaps:z.numSpotLightShadowsWithMaps,numLightProbes:z.numLightProbes,numLightProbeGrids:a.length,numClippingPlanes:W.numPlanes,numClipIntersection:W.numIntersection,dithering:R.dithering,shadowMapEnabled:J.shadowMap.enabled&&d.length>0,shadowMapType:J.shadowMap.type,toneMapping:v,decodeVideoTexture:x0&&R.map.isVideoTexture===!0&&u0.getTransfer(R.map.colorSpace)===HJ,decodeVideoTextureEmissive:OJ&&R.emissiveMap.isVideoTexture===!0&&u0.getTransfer(R.emissiveMap.colorSpace)===HJ,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===X9,flipSided:R.side===vJ,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:O0&&R.extensions.clipCullDistance===!0&&$.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(O0&&R.extensions.multiDraw===!0||h0)&&$.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:$.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return n.vertexUv1s=X.has(1),n.vertexUv2s=X.has(2),n.vertexUv3s=X.has(3),X.clear(),n}function q(R){let z=[];if(R.shaderID)z.push(R.shaderID);else z.push(R.customVertexShaderID),z.push(R.customFragmentShaderID);if(R.defines!==void 0)for(let d in R.defines)z.push(d),z.push(R.defines[d]);if(R.isRawShaderMaterial===!1)O(z,R),_(z,R),z.push(J.outputColorSpace);return z.push(R.customProgramCacheKey),z.join()}function O(R,z){R.push(z.precision),R.push(z.outputColorSpace),R.push(z.envMapMode),R.push(z.envMapCubeUVHeight),R.push(z.mapUv),R.push(z.alphaMapUv),R.push(z.lightMapUv),R.push(z.aoMapUv),R.push(z.bumpMapUv),R.push(z.normalMapUv),R.push(z.displacementMapUv),R.push(z.emissiveMapUv),R.push(z.metalnessMapUv),R.push(z.roughnessMapUv),R.push(z.anisotropyMapUv),R.push(z.clearcoatMapUv),R.push(z.clearcoatNormalMapUv),R.push(z.clearcoatRoughnessMapUv),R.push(z.iridescenceMapUv),R.push(z.iridescenceThicknessMapUv),R.push(z.sheenColorMapUv),R.push(z.sheenRoughnessMapUv),R.push(z.specularMapUv),R.push(z.specularColorMapUv),R.push(z.specularIntensityMapUv),R.push(z.transmissionMapUv),R.push(z.thicknessMapUv),R.push(z.combine),R.push(z.fogExp2),R.push(z.sizeAttenuation),R.push(z.morphTargetsCount),R.push(z.morphAttributeCount),R.push(z.numDirLights),R.push(z.numPointLights),R.push(z.numSpotLights),R.push(z.numSpotLightMaps),R.push(z.numHemiLights),R.push(z.numRectAreaLights),R.push(z.numDirLightShadows),R.push(z.numPointLightShadows),R.push(z.numSpotLightShadows),R.push(z.numSpotLightShadowsWithMaps),R.push(z.numLightProbes),R.push(z.shadowMapType),R.push(z.toneMapping),R.push(z.numClippingPlanes),R.push(z.numClipIntersection),R.push(z.depthPacking)}function _(R,z){if(H.disableAll(),z.instancing)H.enable(0);if(z.instancingColor)H.enable(1);if(z.instancingMorph)H.enable(2);if(z.matcap)H.enable(3);if(z.envMap)H.enable(4);if(z.normalMapObjectSpace)H.enable(5);if(z.normalMapTangentSpace)H.enable(6);if(z.clearcoat)H.enable(7);if(z.iridescence)H.enable(8);if(z.alphaTest)H.enable(9);if(z.vertexColors)H.enable(10);if(z.vertexAlphas)H.enable(11);if(z.vertexUv1s)H.enable(12);if(z.vertexUv2s)H.enable(13);if(z.vertexUv3s)H.enable(14);if(z.vertexTangents)H.enable(15);if(z.anisotropy)H.enable(16);if(z.alphaHash)H.enable(17);if(z.batching)H.enable(18);if(z.dispersion)H.enable(19);if(z.batchingColor)H.enable(20);if(z.gradientMap)H.enable(21);if(z.packedNormalMap)H.enable(22);if(z.vertexNormals)H.enable(23);if(R.push(H.mask),H.disableAll(),z.fog)H.enable(0);if(z.useFog)H.enable(1);if(z.flatShading)H.enable(2);if(z.logarithmicDepthBuffer)H.enable(3);if(z.reversedDepthBuffer)H.enable(4);if(z.skinning)H.enable(5);if(z.morphTargets)H.enable(6);if(z.morphNormals)H.enable(7);if(z.morphColors)H.enable(8);if(z.premultipliedAlpha)H.enable(9);if(z.shadowMapEnabled)H.enable(10);if(z.doubleSided)H.enable(11);if(z.flipSided)H.enable(12);if(z.useDepthPacking)H.enable(13);if(z.dithering)H.enable(14);if(z.transmission)H.enable(15);if(z.sheen)H.enable(16);if(z.opaque)H.enable(17);if(z.pointsUvs)H.enable(18);if(z.decodeVideoTexture)H.enable(19);if(z.decodeVideoTextureEmissive)H.enable(20);if(z.alphaToCoverage)H.enable(21);if(z.numLightProbeGrids>0)H.enable(22);if(z.hasPositionAttribute)H.enable(23);R.push(H.mask)}function C(R){let z=E[R.type],d;if(z){let P=F9[z];d=EK.clone(P.uniforms)}else d=R.uniforms;return d}function M(R,z){let d=G.get(z);if(d!==void 0)++d.usedTimes;else d=new O5(J,z,R,K),U.push(d),G.set(z,d);return d}function A(R){if(--R.usedTimes===0){let z=U.indexOf(R);U[z]=U[U.length-1],U.pop(),G.delete(R.cacheKey),R.destroy()}}function I(R){Y.remove(R)}function w(){Y.dispose()}return{getParameters:B,getProgramCacheKey:q,getUniforms:C,acquireProgram:M,releaseProgram:A,releaseShaderCache:I,programs:U,dispose:w}}function k5(){let J=new WeakMap;function Q(H){return J.has(H)}function $(H){let Y=J.get(H);if(Y===void 0)Y={},J.set(H,Y);return Y}function Z(H){J.delete(H)}function K(H,Y,X){J.get(H)[Y]=X}function W(){J=new WeakMap}return{has:Q,get:$,remove:Z,update:K,dispose:W}}function L5(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function xK(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function gK(){let J=[],Q=0,$=[],Z=[],K=[];function W(){Q=0,$.length=0,Z.length=0,K.length=0}function H(N){let E=0;if(N.isInstancedMesh)E+=2;if(N.isSkinnedMesh)E+=1;return E}function Y(N,E,L,B,q,O){let _=J[Q];if(_===void 0)_={id:N.id,object:N,geometry:E,material:L,materialVariant:H(N),groupOrder:B,renderOrder:N.renderOrder,z:q,group:O},J[Q]=_;else _.id=N.id,_.object=N,_.geometry=E,_.material=L,_.materialVariant=H(N),_.groupOrder=B,_.renderOrder=N.renderOrder,_.z=q,_.group=O;return Q++,_}function X(N,E,L,B,q,O){let _=Y(N,E,L,B,q,O);if(L.transmission>0)Z.push(_);else if(L.transparent===!0)K.push(_);else $.push(_)}function U(N,E,L,B,q,O){let _=Y(N,E,L,B,q,O);if(L.transmission>0)Z.unshift(_);else if(L.transparent===!0)K.unshift(_);else $.unshift(_)}function G(N,E,L){if($.length>1)$.sort(N||L5);if(Z.length>1)Z.sort(E||xK);if(K.length>1)K.sort(E||xK);if(L)$.reverse(),Z.reverse(),K.reverse()}function F(){for(let N=Q,E=J.length;N<E;N++){let L=J[N];if(L.id===null)break;L.id=null,L.object=null,L.geometry=null,L.material=null,L.group=null}}return{opaque:$,transmissive:Z,transparent:K,init:W,push:X,unshift:U,finish:F,sort:G}}function V5(){let J=new WeakMap;function Q(Z,K){let W=J.get(Z),H;if(W===void 0)H=new gK,J.set(Z,[H]);else if(K>=W.length)H=new gK,W.push(H);else H=W[K];return H}function $(){J=new WeakMap}return{get:Q,dispose:$}}function M5(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={direction:new f,color:new b0};break;case"SpotLight":$={position:new f,direction:new f,color:new b0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new f,color:new b0,distance:0,decay:0};break;case"HemisphereLight":$={direction:new f,skyColor:new b0,groundColor:new b0};break;case"RectAreaLight":$={color:new b0,position:new f,halfWidth:new f,halfHeight:new f};break}return J[Q.id]=$,$}}}function z5(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new g0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new g0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new g0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var B5=0;function I5(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function A5(J){let Q=new M5,$=z5(),Z={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)Z.probe.push(new f);let K=new f,W=new QJ,H=new QJ;function Y(U){let G=0,F=0,N=0;for(let z=0;z<9;z++)Z.probe[z].set(0,0,0);let E=0,L=0,B=0,q=0,O=0,_=0,C=0,M=0,A=0,I=0,w=0;U.sort(I5);for(let z=0,d=U.length;z<d;z++){let P=U[z],p=P.color,a=P.intensity,x=P.distance,u=null;if(P.shadow&&P.shadow.map)if(P.shadow.map.texture.format===Q8)u=P.shadow.map.texture;else u=P.shadow.map.depthTexture||P.shadow.map.texture;if(P.isAmbientLight)G+=p.r*a,F+=p.g*a,N+=p.b*a;else if(P.isLightProbe){for(let i=0;i<9;i++)Z.probe[i].addScaledVector(P.sh.coefficients[i],a);w++}else if(P.isDirectionalLight){let i=Q.get(P);if(i.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let b=P.shadow,t=$.get(P);t.shadowIntensity=b.intensity,t.shadowBias=b.bias,t.shadowNormalBias=b.normalBias,t.shadowRadius=b.radius,t.shadowMapSize=b.mapSize,Z.directionalShadow[E]=t,Z.directionalShadowMap[E]=u,Z.directionalShadowMatrix[E]=P.shadow.matrix,_++}Z.directional[E]=i,E++}else if(P.isSpotLight){let i=Q.get(P);i.position.setFromMatrixPosition(P.matrixWorld),i.color.copy(p).multiplyScalar(a),i.distance=x,i.coneCos=Math.cos(P.angle),i.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),i.decay=P.decay,Z.spot[B]=i;let b=P.shadow;if(P.map){if(Z.spotLightMap[A]=P.map,A++,b.updateMatrices(P),P.castShadow)I++}if(Z.spotLightMatrix[B]=b.matrix,P.castShadow){let t=$.get(P);t.shadowIntensity=b.intensity,t.shadowBias=b.bias,t.shadowNormalBias=b.normalBias,t.shadowRadius=b.radius,t.shadowMapSize=b.mapSize,Z.spotShadow[B]=t,Z.spotShadowMap[B]=u,M++}B++}else if(P.isRectAreaLight){let i=Q.get(P);i.color.copy(p).multiplyScalar(a),i.halfWidth.set(P.width*0.5,0,0),i.halfHeight.set(0,P.height*0.5,0),Z.rectArea[q]=i,q++}else if(P.isPointLight){let i=Q.get(P);if(i.color.copy(P.color).multiplyScalar(P.intensity),i.distance=P.distance,i.decay=P.decay,P.castShadow){let b=P.shadow,t=$.get(P);t.shadowIntensity=b.intensity,t.shadowBias=b.bias,t.shadowNormalBias=b.normalBias,t.shadowRadius=b.radius,t.shadowMapSize=b.mapSize,t.shadowCameraNear=b.camera.near,t.shadowCameraFar=b.camera.far,Z.pointShadow[L]=t,Z.pointShadowMap[L]=u,Z.pointShadowMatrix[L]=P.shadow.matrix,C++}Z.point[L]=i,L++}else if(P.isHemisphereLight){let i=Q.get(P);i.skyColor.copy(P.color).multiplyScalar(a),i.groundColor.copy(P.groundColor).multiplyScalar(a),Z.hemi[O]=i,O++}}if(q>0)if(J.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=U0.LTC_FLOAT_1,Z.rectAreaLTC2=U0.LTC_FLOAT_2;else Z.rectAreaLTC1=U0.LTC_HALF_1,Z.rectAreaLTC2=U0.LTC_HALF_2;Z.ambient[0]=G,Z.ambient[1]=F,Z.ambient[2]=N;let R=Z.hash;if(R.directionalLength!==E||R.pointLength!==L||R.spotLength!==B||R.rectAreaLength!==q||R.hemiLength!==O||R.numDirectionalShadows!==_||R.numPointShadows!==C||R.numSpotShadows!==M||R.numSpotMaps!==A||R.numLightProbes!==w)Z.directional.length=E,Z.spot.length=B,Z.rectArea.length=q,Z.point.length=L,Z.hemi.length=O,Z.directionalShadow.length=_,Z.directionalShadowMap.length=_,Z.pointShadow.length=C,Z.pointShadowMap.length=C,Z.spotShadow.length=M,Z.spotShadowMap.length=M,Z.directionalShadowMatrix.length=_,Z.pointShadowMatrix.length=C,Z.spotLightMatrix.length=M+A-I,Z.spotLightMap.length=A,Z.numSpotLightShadowsWithMaps=I,Z.numLightProbes=w,R.directionalLength=E,R.pointLength=L,R.spotLength=B,R.rectAreaLength=q,R.hemiLength=O,R.numDirectionalShadows=_,R.numPointShadows=C,R.numSpotShadows=M,R.numSpotMaps=A,R.numLightProbes=w,Z.version=B5++}function X(U,G){let F=0,N=0,E=0,L=0,B=0,q=G.matrixWorldInverse;for(let O=0,_=U.length;O<_;O++){let C=U[O];if(C.isDirectionalLight){let M=Z.directional[F];M.direction.setFromMatrixPosition(C.matrixWorld),K.setFromMatrixPosition(C.target.matrixWorld),M.direction.sub(K),M.direction.transformDirection(q),F++}else if(C.isSpotLight){let M=Z.spot[E];M.position.setFromMatrixPosition(C.matrixWorld),M.position.applyMatrix4(q),M.direction.setFromMatrixPosition(C.matrixWorld),K.setFromMatrixPosition(C.target.matrixWorld),M.direction.sub(K),M.direction.transformDirection(q),E++}else if(C.isRectAreaLight){let M=Z.rectArea[L];M.position.setFromMatrixPosition(C.matrixWorld),M.position.applyMatrix4(q),H.identity(),W.copy(C.matrixWorld),W.premultiply(q),H.extractRotation(W),M.halfWidth.set(C.width*0.5,0,0),M.halfHeight.set(0,C.height*0.5,0),M.halfWidth.applyMatrix4(H),M.halfHeight.applyMatrix4(H),L++}else if(C.isPointLight){let M=Z.point[N];M.position.setFromMatrixPosition(C.matrixWorld),M.position.applyMatrix4(q),N++}else if(C.isHemisphereLight){let M=Z.hemi[B];M.direction.setFromMatrixPosition(C.matrixWorld),M.direction.transformDirection(q),B++}}}return{setup:Y,setupView:X,state:Z}}function pK(J){let Q=new A5(J),$=[],Z=[],K=[];function W(N){F.camera=N,$.length=0,Z.length=0,K.length=0}function H(N){$.push(N)}function Y(N){Z.push(N)}function X(N){K.push(N)}function U(){Q.setup($)}function G(N){Q.setupView($,N)}let F={lightsArray:$,shadowsArray:Z,lightProbeGridArray:K,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:W,state:F,setupLights:U,setupLightsView:G,pushLight:H,pushShadow:Y,pushLightProbeGrid:X}}function P5(J){let Q=new WeakMap;function $(K,W=0){let H=Q.get(K),Y;if(H===void 0)Y=new pK(J),Q.set(K,[Y]);else if(W>=H.length)Y=new pK(J),H.push(Y);else Y=H[W];return Y}function Z(){Q=new WeakMap}return{get:$,dispose:Z}}var C5=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w5=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,_5=[new f(1,0,0),new f(-1,0,0),new f(0,1,0),new f(0,-1,0),new f(0,0,1),new f(0,0,-1)],T5=[new f(0,-1,0),new f(0,-1,0),new f(0,0,1),new f(0,0,-1),new f(0,-1,0),new f(0,-1,0)],mK=new QJ,N7=new f,A$=new f;function S5(J,Q,$){let Z=new U7,K=new g0,W=new g0,H=new NJ,Y=new Q$,X=new $$,U={},G=$.maxTextureSize,F={[y8]:vJ,[vJ]:y8,[X9]:X9},N=new sJ({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new g0},radius:{value:4}},vertexShader:C5,fragmentShader:w5}),E=N.clone();E.defines.HORIZONTAL_PASS=1;let L=new Q9;L.setAttribute("position",new lJ(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let B=new j0(L,N),q=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=e8;let O=this.type;this.render=function(I,w,R){if(q.enabled===!1)return;if(q.autoUpdate===!1&&q.needsUpdate===!1)return;if(I.length===0)return;if(this.type===DZ)S0("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=e8;let z=J.getRenderTarget(),d=J.getActiveCubeFace(),P=J.getActiveMipmapLevel(),p=J.state;if(p.setBlending(U9),p.buffers.depth.getReversed()===!0)p.buffers.color.setClear(0,0,0,0);else p.buffers.color.setClear(1,1,1,1);p.buffers.depth.setTest(!0),p.setScissorTest(!1);let a=O!==this.type;if(a)w.traverse(function(x){if(x.material)if(Array.isArray(x.material))x.material.forEach((u)=>u.needsUpdate=!0);else x.material.needsUpdate=!0});for(let x=0,u=I.length;x<u;x++){let i=I[x],b=i.shadow;if(b===void 0){S0("WebGLShadowMap:",i,"has no shadow.");continue}if(b.autoUpdate===!1&&b.needsUpdate===!1)continue;K.copy(b.mapSize);let t=b.getFrameExtents();if(K.multiply(t),W.copy(b.mapSize),K.x>G||K.y>G){if(K.x>G)W.x=Math.floor(G/t.x),K.x=W.x*t.x,b.mapSize.x=W.x;if(K.y>G)W.y=Math.floor(G/t.y),K.y=W.y*t.y,b.mapSize.y=W.y}let J0=J.state.buffers.depth.getReversed();if(b.camera._reversedDepth=J0,b.map===null||a===!0){if(b.map!==null){if(b.map.depthTexture!==null)b.map.depthTexture.dispose(),b.map.depthTexture=null;b.map.dispose()}if(this.type===v8){if(i.isPointLight){S0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}b.map=new nJ(K.x,K.y,{format:Q8,type:B9,minFilter:xJ,magFilter:xJ,generateMipmaps:!1}),b.map.texture.name=i.name+".shadowMap",b.map.depthTexture=new g9(K.x,K.y,z9),b.map.depthTexture.name=i.name+".shadowMapDepth",b.map.depthTexture.format=e9,b.map.depthTexture.compareFunction=null,b.map.depthTexture.minFilter=b9,b.map.depthTexture.magFilter=b9}else{if(i.isPointLight)b.map=new w$(K.x),b.map.depthTexture=new tQ(K.x,h9);else b.map=new nJ(K.x,K.y),b.map.depthTexture=new g9(K.x,K.y,h9);if(b.map.depthTexture.name=i.name+".shadowMap",b.map.depthTexture.format=e9,this.type===e8)b.map.depthTexture.compareFunction=J0?K6:Z6,b.map.depthTexture.minFilter=xJ,b.map.depthTexture.magFilter=xJ;else b.map.depthTexture.compareFunction=null,b.map.depthTexture.minFilter=b9,b.map.depthTexture.magFilter=b9}b.camera.updateProjectionMatrix()}let H0=b.map.isWebGLCubeRenderTarget?6:1;for(let V0=0;V0<H0;V0++){if(b.map.isWebGLCubeRenderTarget)J.setRenderTarget(b.map,V0),J.clear();else{if(V0===0)J.setRenderTarget(b.map),J.clear();let k0=b.getViewport(V0);H.set(W.x*k0.x,W.y*k0.y,W.x*k0.z,W.y*k0.w),p.viewport(H)}if(i.isPointLight){let{camera:k0,matrix:a0}=b,t0=i.distance||k0.far;if(t0!==k0.far)k0.far=t0,k0.updateProjectionMatrix();N7.setFromMatrixPosition(i.matrixWorld),k0.position.copy(N7),A$.copy(k0.position),A$.add(_5[V0]),k0.up.copy(T5[V0]),k0.lookAt(A$),k0.updateMatrixWorld(),a0.makeTranslation(-N7.x,-N7.y,-N7.z),mK.multiplyMatrices(k0.projectionMatrix,k0.matrixWorldInverse),b._frustum.setFromProjectionMatrix(mK,k0.coordinateSystem,k0.reversedDepth)}else b.updateMatrices(i);Z=b.getFrustum(),M(w,R,b.camera,i,this.type)}if(b.isPointLightShadow!==!0&&this.type===v8)_(b,R);b.needsUpdate=!1}O=this.type,q.needsUpdate=!1,J.setRenderTarget(z,d,P)};function _(I,w){let R=Q.update(B);if(N.defines.VSM_SAMPLES!==I.blurSamples)N.defines.VSM_SAMPLES=I.blurSamples,E.defines.VSM_SAMPLES=I.blurSamples,N.needsUpdate=!0,E.needsUpdate=!0;if(I.mapPass===null)I.mapPass=new nJ(K.x,K.y,{format:Q8,type:B9});N.uniforms.shadow_pass.value=I.map.depthTexture,N.uniforms.resolution.value=I.mapSize,N.uniforms.radius.value=I.radius,J.setRenderTarget(I.mapPass),J.clear(),J.renderBufferDirect(w,null,R,N,B,null),E.uniforms.shadow_pass.value=I.mapPass.texture,E.uniforms.resolution.value=I.mapSize,E.uniforms.radius.value=I.radius,J.setRenderTarget(I.map),J.clear(),J.renderBufferDirect(w,null,R,E,B,null)}function C(I,w,R,z){let d=null,P=R.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(P!==void 0)d=P;else if(d=R.isPointLight===!0?X:Y,J.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let p=d.uuid,a=w.uuid,x=U[p];if(x===void 0)x={},U[p]=x;let u=x[a];if(u===void 0)u=d.clone(),x[a]=u,w.addEventListener("dispose",A);d=u}if(d.visible=w.visible,d.wireframe=w.wireframe,z===v8)d.side=w.shadowSide!==null?w.shadowSide:w.side;else d.side=w.shadowSide!==null?w.shadowSide:F[w.side];if(d.alphaMap=w.alphaMap,d.alphaTest=w.alphaToCoverage===!0?0.5:w.alphaTest,d.map=w.map,d.clipShadows=w.clipShadows,d.clippingPlanes=w.clippingPlanes,d.clipIntersection=w.clipIntersection,d.displacementMap=w.displacementMap,d.displacementScale=w.displacementScale,d.displacementBias=w.displacementBias,d.wireframeLinewidth=w.wireframeLinewidth,d.linewidth=w.linewidth,R.isPointLight===!0&&d.isMeshDistanceMaterial===!0){let p=J.properties.get(d);p.light=R}return d}function M(I,w,R,z,d){if(I.visible===!1)return;if(I.layers.test(w.layers)&&(I.isMesh||I.isLine||I.isPoints)){if((I.castShadow||I.receiveShadow&&d===v8)&&(!I.frustumCulled||Z.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,I.matrixWorld);let a=Q.update(I),x=I.material;if(Array.isArray(x)){let u=a.groups;for(let i=0,b=u.length;i<b;i++){let t=u[i],J0=x[t.materialIndex];if(J0&&J0.visible){let H0=C(I,J0,z,d);I.onBeforeShadow(J,I,w,R,a,H0,t),J.renderBufferDirect(R,null,a,H0,I,t),I.onAfterShadow(J,I,w,R,a,H0,t)}}}else if(x.visible){let u=C(I,x,z,d);I.onBeforeShadow(J,I,w,R,a,u,null),J.renderBufferDirect(R,null,a,u,I,null),I.onAfterShadow(J,I,w,R,a,u,null)}}}let p=I.children;for(let a=0,x=p.length;a<x;a++)M(p[a],w,R,z,d)}function A(I){I.target.removeEventListener("dispose",A);for(let R in U){let z=U[R],d=I.target.uuid;if(d in z)z[d].dispose(),delete z[d]}}}function j5(J,Q){function $(){let S=!1,K0=new NJ,s=null,W0=new NJ(0,0,0,0);return{setMask:function(O0){if(s!==O0&&!S)J.colorMask(O0,O0,O0,O0),s=O0},setLocked:function(O0){S=O0},setClear:function(O0,v,n,D0,_0){if(_0===!0)O0*=D0,v*=D0,n*=D0;if(K0.set(O0,v,n,D0),W0.equals(K0)===!1)J.clearColor(O0,v,n,D0),W0.copy(K0)},reset:function(){S=!1,s=null,W0.set(-1,0,0,0)}}}function Z(){let S=!1,K0=!1,s=null,W0=null,O0=null;return{setReversed:function(v){if(K0!==v){let n=Q.get("EXT_clip_control");if(v)n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT);else n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT);K0=v;let D0=O0;O0=null,this.setClear(D0)}},getReversed:function(){return K0},setTest:function(v){if(v)F0(J.DEPTH_TEST);else P0(J.DEPTH_TEST)},setMask:function(v){if(s!==v&&!S)J.depthMask(v),s=v},setFunc:function(v){if(K0)v=FK[v];if(W0!==v){switch(v){case hZ:J.depthFunc(J.NEVER);break;case xZ:J.depthFunc(J.ALWAYS);break;case gZ:J.depthFunc(J.LESS);break;case JQ:J.depthFunc(J.LEQUAL);break;case pZ:J.depthFunc(J.EQUAL);break;case mZ:J.depthFunc(J.GEQUAL);break;case lZ:J.depthFunc(J.GREATER);break;case dZ:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}W0=v}},setLocked:function(v){S=v},setClear:function(v){if(O0!==v){if(O0=v,K0)v=1-v;J.clearDepth(v)}},reset:function(){S=!1,s=null,W0=null,O0=null,K0=!1}}}function K(){let S=!1,K0=null,s=null,W0=null,O0=null,v=null,n=null,D0=null,_0=null;return{setTest:function(I0){if(!S)if(I0)F0(J.STENCIL_TEST);else P0(J.STENCIL_TEST)},setMask:function(I0){if(K0!==I0&&!S)J.stencilMask(I0),K0=I0},setFunc:function(I0,PJ,O9){if(s!==I0||W0!==PJ||O0!==O9)J.stencilFunc(I0,PJ,O9),s=I0,W0=PJ,O0=O9},setOp:function(I0,PJ,O9){if(v!==I0||n!==PJ||D0!==O9)J.stencilOp(I0,PJ,O9),v=I0,n=PJ,D0=O9},setLocked:function(I0){S=I0},setClear:function(I0){if(_0!==I0)J.clearStencil(I0),_0=I0},reset:function(){S=!1,K0=null,s=null,W0=null,O0=null,v=null,n=null,D0=null,_0=null}}}let W=new $,H=new Z,Y=new K,X=new WeakMap,U=new WeakMap,G={},F={},N={},E=new WeakMap,L=[],B=null,q=!1,O=null,_=null,C=null,M=null,A=null,I=null,w=null,R=new b0(0,0,0),z=0,d=!1,P=null,p=null,a=null,x=null,u=null,i=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),b=!1,t=0,J0=J.getParameter(J.VERSION);if(J0.indexOf("WebGL")!==-1)t=parseFloat(/^WebGL (\d)/.exec(J0)[1]),b=t>=1;else if(J0.indexOf("OpenGL ES")!==-1)t=parseFloat(/^OpenGL ES (\d)/.exec(J0)[1]),b=t>=2;let H0=null,V0={},k0=J.getParameter(J.SCISSOR_BOX),a0=J.getParameter(J.VIEWPORT),t0=new NJ().fromArray(k0),r=new NJ().fromArray(a0);function Z0(S,K0,s,W0){let O0=new Uint8Array(4),v=J.createTexture();J.bindTexture(S,v),J.texParameteri(S,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(S,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let n=0;n<s;n++)if(S===J.TEXTURE_3D||S===J.TEXTURE_2D_ARRAY)J.texImage3D(K0,0,J.RGBA,1,1,W0,0,J.RGBA,J.UNSIGNED_BYTE,O0);else J.texImage2D(K0+n,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,O0);return v}let E0={};E0[J.TEXTURE_2D]=Z0(J.TEXTURE_2D,J.TEXTURE_2D,1),E0[J.TEXTURE_CUBE_MAP]=Z0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),E0[J.TEXTURE_2D_ARRAY]=Z0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),E0[J.TEXTURE_3D]=Z0(J.TEXTURE_3D,J.TEXTURE_3D,1,1),W.setClear(0,0,0,1),H.setClear(1),Y.setClear(0),F0(J.DEPTH_TEST),H.setFunc(JQ),AJ(!1),$J(a6),F0(J.CULL_FACE),y0(U9);function F0(S){if(G[S]!==!0)J.enable(S),G[S]=!0}function P0(S){if(G[S]!==!1)J.disable(S),G[S]=!1}function m0(S,K0){if(N[S]!==K0){if(J.bindFramebuffer(S,K0),N[S]=K0,S===J.DRAW_FRAMEBUFFER)N[J.FRAMEBUFFER]=K0;if(S===J.FRAMEBUFFER)N[J.DRAW_FRAMEBUFFER]=K0;return!0}return!1}function h0(S,K0){let s=L,W0=!1;if(S){if(s=E.get(K0),s===void 0)s=[],E.set(K0,s);let O0=S.textures;if(s.length!==O0.length||s[0]!==J.COLOR_ATTACHMENT0){for(let v=0,n=O0.length;v<n;v++)s[v]=J.COLOR_ATTACHMENT0+v;s.length=O0.length,W0=!0}}else if(s[0]!==J.BACK)s[0]=J.BACK,W0=!0;if(W0)J.drawBuffers(s)}function x0(S){if(B!==S)return J.useProgram(S),B=S,!0;return!1}let r0={[f8]:J.FUNC_ADD,[kZ]:J.FUNC_SUBTRACT,[LZ]:J.FUNC_REVERSE_SUBTRACT};r0[VZ]=J.MIN,r0[MZ]=J.MAX;let d0={[zZ]:J.ZERO,[BZ]:J.ONE,[IZ]:J.SRC_COLOR,[PZ]:J.SRC_ALPHA,[jZ]:J.SRC_ALPHA_SATURATE,[TZ]:J.DST_COLOR,[wZ]:J.DST_ALPHA,[AZ]:J.ONE_MINUS_SRC_COLOR,[CZ]:J.ONE_MINUS_SRC_ALPHA,[SZ]:J.ONE_MINUS_DST_COLOR,[_Z]:J.ONE_MINUS_DST_ALPHA,[vZ]:J.CONSTANT_COLOR,[yZ]:J.ONE_MINUS_CONSTANT_COLOR,[fZ]:J.CONSTANT_ALPHA,[bZ]:J.ONE_MINUS_CONSTANT_ALPHA};function y0(S,K0,s,W0,O0,v,n,D0,_0,I0){if(S===U9){if(q===!0)P0(J.BLEND),q=!1;return}if(q===!1)F0(J.BLEND),q=!0;if(S!==RZ){if(S!==O||I0!==d){if(_!==f8||A!==f8)J.blendEquation(J.FUNC_ADD),_=f8,A=f8;if(I0)switch(S){case J7:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case r6:J.blendFunc(J.ONE,J.ONE);break;case t6:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case e6:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:T0("WebGLState: Invalid blending: ",S);break}else switch(S){case J7:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case r6:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case t6:T0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case e6:T0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:T0("WebGLState: Invalid blending: ",S);break}C=null,M=null,I=null,w=null,R.set(0,0,0),z=0,O=S,d=I0}return}if(O0=O0||K0,v=v||s,n=n||W0,K0!==_||O0!==A)J.blendEquationSeparate(r0[K0],r0[O0]),_=K0,A=O0;if(s!==C||W0!==M||v!==I||n!==w)J.blendFuncSeparate(d0[s],d0[W0],d0[v],d0[n]),C=s,M=W0,I=v,w=n;if(D0.equals(R)===!1||_0!==z)J.blendColor(D0.r,D0.g,D0.b,_0),R.copy(D0),z=_0;O=S,d=!1}function UJ(S,K0){S.side===X9?P0(J.CULL_FACE):F0(J.CULL_FACE);let s=S.side===vJ;if(K0)s=!s;AJ(s),S.blending===J7&&S.transparent===!1?y0(U9):y0(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),H.setFunc(S.depthFunc),H.setTest(S.depthTest),H.setMask(S.depthWrite),W.setMask(S.colorWrite);let W0=S.stencilWrite;if(Y.setTest(W0),W0)Y.setMask(S.stencilWriteMask),Y.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),Y.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass);OJ(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?F0(J.SAMPLE_ALPHA_TO_COVERAGE):P0(J.SAMPLE_ALPHA_TO_COVERAGE)}function AJ(S){if(P!==S){if(S)J.frontFace(J.CW);else J.frontFace(J.CCW);P=S}}function $J(S){if(S!==OZ){if(F0(J.CULL_FACE),S!==p)if(S===a6)J.cullFace(J.BACK);else if(S===EZ)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else P0(J.CULL_FACE);p=S}function qJ(S){if(S!==a){if(b)J.lineWidth(S);a=S}}function OJ(S,K0,s){if(S){if(F0(J.POLYGON_OFFSET_FILL),x!==K0||u!==s){if(x=K0,u=s,H.getReversed())K0=-K0;J.polygonOffset(K0,s)}}else P0(J.POLYGON_OFFSET_FILL)}function ZJ(S){if(S)F0(J.SCISSOR_TEST);else P0(J.SCISSOR_TEST)}function j(S){if(S===void 0)S=J.TEXTURE0+i-1;if(H0!==S)J.activeTexture(S),H0=S}function MJ(S,K0,s){if(s===void 0)if(H0===null)s=J.TEXTURE0+i-1;else s=H0;let W0=V0[s];if(W0===void 0)W0={type:void 0,texture:void 0},V0[s]=W0;if(W0.type!==S||W0.texture!==K0){if(H0!==s)J.activeTexture(s),H0=s;J.bindTexture(S,K0||E0[S]),W0.type=S,W0.texture=K0}}function s0(){let S=V0[H0];if(S!==void 0&&S.type!==void 0)J.bindTexture(S.type,null),S.type=void 0,S.texture=void 0}function o0(){try{J.compressedTexImage2D(...arguments)}catch(S){T0("WebGLState:",S)}}function V(){try{J.compressedTexImage3D(...arguments)}catch(S){T0("WebGLState:",S)}}function D(){try{J.texSubImage2D(...arguments)}catch(S){T0("WebGLState:",S)}}function T(){try{J.texSubImage3D(...arguments)}catch(S){T0("WebGLState:",S)}}function m(){try{J.compressedTexSubImage2D(...arguments)}catch(S){T0("WebGLState:",S)}}function e(){try{J.compressedTexSubImage3D(...arguments)}catch(S){T0("WebGLState:",S)}}function Q0(){try{J.texStorage2D(...arguments)}catch(S){T0("WebGLState:",S)}}function Y0(){try{J.texStorage3D(...arguments)}catch(S){T0("WebGLState:",S)}}function c(){try{J.texImage2D(...arguments)}catch(S){T0("WebGLState:",S)}}function o(){try{J.texImage3D(...arguments)}catch(S){T0("WebGLState:",S)}}function q0(S){if(F[S]!==void 0)return F[S];else return J.getParameter(S)}function z0(S,K0){if(F[S]!==K0)J.pixelStorei(S,K0),F[S]=K0}function X0(S){if(t0.equals(S)===!1)J.scissor(S.x,S.y,S.z,S.w),t0.copy(S)}function $0(S){if(r.equals(S)===!1)J.viewport(S.x,S.y,S.z,S.w),r.copy(S)}function M0(S,K0){let s=U.get(K0);if(s===void 0)s=new WeakMap,U.set(K0,s);let W0=s.get(S);if(W0===void 0)W0=J.getUniformBlockIndex(K0,S.name),s.set(S,W0)}function w0(S,K0){let W0=U.get(K0).get(S);if(X.get(K0)!==W0)J.uniformBlockBinding(K0,W0,S.__bindingPointIndex),X.set(K0,W0)}function n0(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),H.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),G={},F={},H0=null,V0={},N={},E=new WeakMap,L=[],B=null,q=!1,O=null,_=null,C=null,M=null,A=null,I=null,w=null,R=new b0(0,0,0),z=0,d=!1,P=null,p=null,a=null,x=null,u=null,t0.set(0,0,J.canvas.width,J.canvas.height),r.set(0,0,J.canvas.width,J.canvas.height),W.reset(),H.reset(),Y.reset()}return{buffers:{color:W,depth:H,stencil:Y},enable:F0,disable:P0,bindFramebuffer:m0,drawBuffers:h0,useProgram:x0,setBlending:y0,setMaterial:UJ,setFlipSided:AJ,setCullFace:$J,setLineWidth:qJ,setPolygonOffset:OJ,setScissorTest:ZJ,activeTexture:j,bindTexture:MJ,unbindTexture:s0,compressedTexImage2D:o0,compressedTexImage3D:V,texImage2D:c,texImage3D:o,pixelStorei:z0,getParameter:q0,updateUBOMapping:M0,uniformBlockBinding:w0,texStorage2D:Q0,texStorage3D:Y0,texSubImage2D:D,texSubImage3D:T,compressedTexSubImage2D:m,compressedTexSubImage3D:e,scissor:X0,viewport:$0,reset:n0}}function v5(J,Q,$,Z,K,W,H){let Y=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,X=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new g0,G=new WeakMap,F=new Set,N,E=new WeakMap,L=!1;try{L=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(V){}function B(V,D){return L?new OffscreenCanvas(V,D):t8("canvas")}function q(V,D,T){let m=1,e=o0(V);if(e.width>T||e.height>T)m=T/Math.max(e.width,e.height);if(m<1)if(typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&V instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&V instanceof ImageBitmap||typeof VideoFrame<"u"&&V instanceof VideoFrame){let Q0=Math.floor(m*e.width),Y0=Math.floor(m*e.height);if(N===void 0)N=B(Q0,Y0);let c=D?B(Q0,Y0):N;return c.width=Q0,c.height=Y0,c.getContext("2d").drawImage(V,0,0,Q0,Y0),S0("WebGLRenderer: Texture has been resized from ("+e.width+"x"+e.height+") to ("+Q0+"x"+Y0+")."),c}else{if("data"in V)S0("WebGLRenderer: Image in DataTexture is too big ("+e.width+"x"+e.height+").");return V}return V}function O(V){return V.generateMipmaps}function _(V){J.generateMipmap(V)}function C(V){if(V.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(V.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(V.isWebGLArrayRenderTarget||V.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function M(V,D,T,m,e,Q0=!1){if(V!==null){if(J[V]!==void 0)return J[V];S0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+V+"'")}let Y0;if(m){if(Y0=Q.get("EXT_texture_norm16"),!Y0)S0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let c=D;if(D===J.RED){if(T===J.FLOAT)c=J.R32F;if(T===J.HALF_FLOAT)c=J.R16F;if(T===J.UNSIGNED_BYTE)c=J.R8;if(T===J.UNSIGNED_SHORT&&Y0)c=Y0.R16_EXT;if(T===J.SHORT&&Y0)c=Y0.R16_SNORM_EXT}if(D===J.RED_INTEGER){if(T===J.UNSIGNED_BYTE)c=J.R8UI;if(T===J.UNSIGNED_SHORT)c=J.R16UI;if(T===J.UNSIGNED_INT)c=J.R32UI;if(T===J.BYTE)c=J.R8I;if(T===J.SHORT)c=J.R16I;if(T===J.INT)c=J.R32I}if(D===J.RG){if(T===J.FLOAT)c=J.RG32F;if(T===J.HALF_FLOAT)c=J.RG16F;if(T===J.UNSIGNED_BYTE)c=J.RG8;if(T===J.UNSIGNED_SHORT&&Y0)c=Y0.RG16_EXT;if(T===J.SHORT&&Y0)c=Y0.RG16_SNORM_EXT}if(D===J.RG_INTEGER){if(T===J.UNSIGNED_BYTE)c=J.RG8UI;if(T===J.UNSIGNED_SHORT)c=J.RG16UI;if(T===J.UNSIGNED_INT)c=J.RG32UI;if(T===J.BYTE)c=J.RG8I;if(T===J.SHORT)c=J.RG16I;if(T===J.INT)c=J.RG32I}if(D===J.RGB_INTEGER){if(T===J.UNSIGNED_BYTE)c=J.RGB8UI;if(T===J.UNSIGNED_SHORT)c=J.RGB16UI;if(T===J.UNSIGNED_INT)c=J.RGB32UI;if(T===J.BYTE)c=J.RGB8I;if(T===J.SHORT)c=J.RGB16I;if(T===J.INT)c=J.RGB32I}if(D===J.RGBA_INTEGER){if(T===J.UNSIGNED_BYTE)c=J.RGBA8UI;if(T===J.UNSIGNED_SHORT)c=J.RGBA16UI;if(T===J.UNSIGNED_INT)c=J.RGBA32UI;if(T===J.BYTE)c=J.RGBA8I;if(T===J.SHORT)c=J.RGBA16I;if(T===J.INT)c=J.RGBA32I}if(D===J.RGB){if(T===J.UNSIGNED_SHORT&&Y0)c=Y0.RGB16_EXT;if(T===J.SHORT&&Y0)c=Y0.RGB16_SNORM_EXT;if(T===J.UNSIGNED_INT_5_9_9_9_REV)c=J.RGB9_E5;if(T===J.UNSIGNED_INT_10F_11F_11F_REV)c=J.R11F_G11F_B10F}if(D===J.RGBA){let o=Q0?cQ:u0.getTransfer(e);if(T===J.FLOAT)c=J.RGBA32F;if(T===J.HALF_FLOAT)c=J.RGBA16F;if(T===J.UNSIGNED_BYTE)c=o===HJ?J.SRGB8_ALPHA8:J.RGBA8;if(T===J.UNSIGNED_SHORT&&Y0)c=Y0.RGBA16_EXT;if(T===J.SHORT&&Y0)c=Y0.RGBA16_SNORM_EXT;if(T===J.UNSIGNED_SHORT_4_4_4_4)c=J.RGBA4;if(T===J.UNSIGNED_SHORT_5_5_5_1)c=J.RGB5_A1}if(c===J.R16F||c===J.R32F||c===J.RG16F||c===J.RG32F||c===J.RGBA16F||c===J.RGBA32F)Q.get("EXT_color_buffer_float");return c}function A(V,D){let T;if(V){if(D===null||D===h9||D===h8)T=J.DEPTH24_STENCIL8;else if(D===z9)T=J.DEPTH32F_STENCIL8;else if(D===K7)T=J.DEPTH24_STENCIL8,S0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(D===null||D===h9||D===h8)T=J.DEPTH_COMPONENT24;else if(D===z9)T=J.DEPTH_COMPONENT32F;else if(D===K7)T=J.DEPTH_COMPONENT16;return T}function I(V,D){if(O(V)===!0||V.isFramebufferTexture&&V.minFilter!==b9&&V.minFilter!==xJ)return Math.log2(Math.max(D.width,D.height))+1;else if(V.mipmaps!==void 0&&V.mipmaps.length>0)return V.mipmaps.length;else if(V.isCompressedTexture&&Array.isArray(V.image))return D.mipmaps.length;else return 1}function w(V){let D=V.target;if(D.removeEventListener("dispose",w),z(D),D.isVideoTexture)G.delete(D);if(D.isHTMLTexture)F.delete(D)}function R(V){let D=V.target;D.removeEventListener("dispose",R),P(D)}function z(V){let D=Z.get(V);if(D.__webglInit===void 0)return;let T=V.source,m=E.get(T);if(m){let e=m[D.__cacheKey];if(e.usedTimes--,e.usedTimes===0)d(V);if(Object.keys(m).length===0)E.delete(T)}Z.remove(V)}function d(V){let D=Z.get(V);J.deleteTexture(D.__webglTexture);let T=V.source,m=E.get(T);delete m[D.__cacheKey],H.memory.textures--}function P(V){let D=Z.get(V);if(V.depthTexture)V.depthTexture.dispose(),Z.remove(V.depthTexture);if(V.isWebGLCubeRenderTarget)for(let m=0;m<6;m++){if(Array.isArray(D.__webglFramebuffer[m]))for(let e=0;e<D.__webglFramebuffer[m].length;e++)J.deleteFramebuffer(D.__webglFramebuffer[m][e]);else J.deleteFramebuffer(D.__webglFramebuffer[m]);if(D.__webglDepthbuffer)J.deleteRenderbuffer(D.__webglDepthbuffer[m])}else{if(Array.isArray(D.__webglFramebuffer))for(let m=0;m<D.__webglFramebuffer.length;m++)J.deleteFramebuffer(D.__webglFramebuffer[m]);else J.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer)J.deleteRenderbuffer(D.__webglDepthbuffer);if(D.__webglMultisampledFramebuffer)J.deleteFramebuffer(D.__webglMultisampledFramebuffer);if(D.__webglColorRenderbuffer){for(let m=0;m<D.__webglColorRenderbuffer.length;m++)if(D.__webglColorRenderbuffer[m])J.deleteRenderbuffer(D.__webglColorRenderbuffer[m])}if(D.__webglDepthRenderbuffer)J.deleteRenderbuffer(D.__webglDepthRenderbuffer)}let T=V.textures;for(let m=0,e=T.length;m<e;m++){let Q0=Z.get(T[m]);if(Q0.__webglTexture)J.deleteTexture(Q0.__webglTexture),H.memory.textures--;Z.remove(T[m])}Z.remove(V)}let p=0;function a(){p=0}function x(){return p}function u(V){p=V}function i(){let V=p;if(V>=K.maxTextures)S0("WebGLTextures: Trying to use "+V+" texture units while this GPU supports only "+K.maxTextures);return p+=1,V}function b(V){let D=[];return D.push(V.wrapS),D.push(V.wrapT),D.push(V.wrapR||0),D.push(V.magFilter),D.push(V.minFilter),D.push(V.anisotropy),D.push(V.internalFormat),D.push(V.format),D.push(V.type),D.push(V.generateMipmaps),D.push(V.premultiplyAlpha),D.push(V.flipY),D.push(V.unpackAlignment),D.push(V.colorSpace),D.join()}function t(V,D){let T=Z.get(V);if(V.isVideoTexture)MJ(V);if(V.isRenderTargetTexture===!1&&V.isExternalTexture!==!0&&V.version>0&&T.__version!==V.version){let m=V.image;if(m===null)S0("WebGLRenderer: Texture marked for update but no image data found.");else if(m.complete===!1)S0("WebGLRenderer: Texture marked for update but image is incomplete");else{P0(T,V,D);return}}else if(V.isExternalTexture)T.__webglTexture=V.sourceTexture?V.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,T.__webglTexture,J.TEXTURE0+D)}function J0(V,D){let T=Z.get(V);if(V.isRenderTargetTexture===!1&&V.version>0&&T.__version!==V.version){P0(T,V,D);return}else if(V.isExternalTexture)T.__webglTexture=V.sourceTexture?V.sourceTexture:null;$.bindTexture(J.TEXTURE_2D_ARRAY,T.__webglTexture,J.TEXTURE0+D)}function H0(V,D){let T=Z.get(V);if(V.isRenderTargetTexture===!1&&V.version>0&&T.__version!==V.version){P0(T,V,D);return}$.bindTexture(J.TEXTURE_3D,T.__webglTexture,J.TEXTURE0+D)}function V0(V,D){let T=Z.get(V);if(V.isCubeDepthTexture!==!0&&V.version>0&&T.__version!==V.version){m0(T,V,D);return}$.bindTexture(J.TEXTURE_CUBE_MAP,T.__webglTexture,J.TEXTURE0+D)}let k0={[sZ]:J.REPEAT,[o7]:J.CLAMP_TO_EDGE,[iZ]:J.MIRRORED_REPEAT},a0={[b9]:J.NEAREST,[oZ]:J.NEAREST_MIPMAP_NEAREST,[Z7]:J.NEAREST_MIPMAP_LINEAR,[xJ]:J.LINEAR,[a7]:J.LINEAR_MIPMAP_NEAREST,[t9]:J.LINEAR_MIPMAP_LINEAR},t0={[KK]:J.NEVER,[UK]:J.ALWAYS,[WK]:J.LESS,[Z6]:J.LEQUAL,[HK]:J.EQUAL,[K6]:J.GEQUAL,[YK]:J.GREATER,[XK]:J.NOTEQUAL};function r(V,D){if(D.type===z9&&Q.has("OES_texture_float_linear")===!1&&(D.magFilter===xJ||D.magFilter===a7||D.magFilter===Z7||D.magFilter===t9||D.minFilter===xJ||D.minFilter===a7||D.minFilter===Z7||D.minFilter===t9))S0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(V,J.TEXTURE_WRAP_S,k0[D.wrapS]),J.texParameteri(V,J.TEXTURE_WRAP_T,k0[D.wrapT]),V===J.TEXTURE_3D||V===J.TEXTURE_2D_ARRAY)J.texParameteri(V,J.TEXTURE_WRAP_R,k0[D.wrapR]);if(J.texParameteri(V,J.TEXTURE_MAG_FILTER,a0[D.magFilter]),J.texParameteri(V,J.TEXTURE_MIN_FILTER,a0[D.minFilter]),D.compareFunction)J.texParameteri(V,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(V,J.TEXTURE_COMPARE_FUNC,t0[D.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(D.magFilter===b9)return;if(D.minFilter!==Z7&&D.minFilter!==t9)return;if(D.type===z9&&Q.has("OES_texture_float_linear")===!1)return;if(D.anisotropy>1||Z.get(D).__currentAnisotropy){let T=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(V,T.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,K.getMaxAnisotropy())),Z.get(D).__currentAnisotropy=D.anisotropy}}}function Z0(V,D){let T=!1;if(V.__webglInit===void 0)V.__webglInit=!0,D.addEventListener("dispose",w);let m=D.source,e=E.get(m);if(e===void 0)e={},E.set(m,e);let Q0=b(D);if(Q0!==V.__cacheKey){if(e[Q0]===void 0)e[Q0]={texture:J.createTexture(),usedTimes:0},H.memory.textures++,T=!0;e[Q0].usedTimes++;let Y0=e[V.__cacheKey];if(Y0!==void 0){if(e[V.__cacheKey].usedTimes--,Y0.usedTimes===0)d(D)}V.__cacheKey=Q0,V.__webglTexture=e[Q0].texture}return T}function E0(V,D,T){return Math.floor(Math.floor(V/T)/D)}function F0(V,D,T,m){let Q0=V.updateRanges;if(Q0.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,D.width,D.height,T,m,D.data);else{Q0.sort((z0,X0)=>z0.start-X0.start);let Y0=0;for(let z0=1;z0<Q0.length;z0++){let X0=Q0[Y0],$0=Q0[z0],M0=X0.start+X0.count,w0=E0($0.start,D.width,4),n0=E0(X0.start,D.width,4);if($0.start<=M0+1&&w0===n0&&E0($0.start+$0.count-1,D.width,4)===w0)X0.count=Math.max(X0.count,$0.start+$0.count-X0.start);else++Y0,Q0[Y0]=$0}Q0.length=Y0+1;let c=$.getParameter(J.UNPACK_ROW_LENGTH),o=$.getParameter(J.UNPACK_SKIP_PIXELS),q0=$.getParameter(J.UNPACK_SKIP_ROWS);$.pixelStorei(J.UNPACK_ROW_LENGTH,D.width);for(let z0=0,X0=Q0.length;z0<X0;z0++){let $0=Q0[z0],M0=Math.floor($0.start/4),w0=Math.ceil($0.count/4),n0=M0%D.width,S=Math.floor(M0/D.width),K0=w0,s=1;$.pixelStorei(J.UNPACK_SKIP_PIXELS,n0),$.pixelStorei(J.UNPACK_SKIP_ROWS,S),$.texSubImage2D(J.TEXTURE_2D,0,n0,S,K0,1,T,m,D.data)}V.clearUpdateRanges(),$.pixelStorei(J.UNPACK_ROW_LENGTH,c),$.pixelStorei(J.UNPACK_SKIP_PIXELS,o),$.pixelStorei(J.UNPACK_SKIP_ROWS,q0)}}function P0(V,D,T){let m=J.TEXTURE_2D;if(D.isDataArrayTexture||D.isCompressedArrayTexture)m=J.TEXTURE_2D_ARRAY;if(D.isData3DTexture)m=J.TEXTURE_3D;let e=Z0(V,D),Q0=D.source;$.bindTexture(m,V.__webglTexture,J.TEXTURE0+T);let Y0=Z.get(Q0);if(Q0.version!==Y0.__version||e===!0){if($.activeTexture(J.TEXTURE0+T),(typeof ImageBitmap<"u"&&D.image instanceof ImageBitmap)===!1){let s=u0.getPrimaries(u0.workingColorSpace),W0=D.colorSpace===$8?null:u0.getPrimaries(D.colorSpace),O0=D.colorSpace===$8||s===W0?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,D.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,O0)}$.pixelStorei(J.UNPACK_ALIGNMENT,D.unpackAlignment);let o=q(D.image,!1,K.maxTextureSize);o=s0(D,o);let q0=W.convert(D.format,D.colorSpace),z0=W.convert(D.type),X0=M(D.internalFormat,q0,z0,D.normalized,D.colorSpace,D.isVideoTexture);r(m,D);let $0,M0=D.mipmaps,w0=D.isVideoTexture!==!0,n0=Y0.__version===void 0||e===!0,S=Q0.dataReady,K0=I(D,o);if(D.isDepthTexture){if(X0=A(D.format===J8,D.type),n0)if(w0)$.texStorage2D(J.TEXTURE_2D,1,X0,o.width,o.height);else $.texImage2D(J.TEXTURE_2D,0,X0,o.width,o.height,0,q0,z0,null)}else if(D.isDataTexture)if(M0.length>0){if(w0&&n0)$.texStorage2D(J.TEXTURE_2D,K0,X0,M0[0].width,M0[0].height);for(let s=0,W0=M0.length;s<W0;s++)if($0=M0[s],w0){if(S)$.texSubImage2D(J.TEXTURE_2D,s,0,0,$0.width,$0.height,q0,z0,$0.data)}else $.texImage2D(J.TEXTURE_2D,s,X0,$0.width,$0.height,0,q0,z0,$0.data);D.generateMipmaps=!1}else if(w0){if(n0)$.texStorage2D(J.TEXTURE_2D,K0,X0,o.width,o.height);if(S)F0(D,o,q0,z0)}else $.texImage2D(J.TEXTURE_2D,0,X0,o.width,o.height,0,q0,z0,o.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){if(w0&&n0)$.texStorage3D(J.TEXTURE_2D_ARRAY,K0,X0,M0[0].width,M0[0].height,o.depth);for(let s=0,W0=M0.length;s<W0;s++)if($0=M0[s],D.format!==q9)if(q0!==null)if(w0){if(S)if(D.layerUpdates.size>0){let O0=L$($0.width,$0.height,D.format,D.type);for(let v of D.layerUpdates){let n=$0.data.subarray(v*O0/$0.data.BYTES_PER_ELEMENT,(v+1)*O0/$0.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,s,0,0,v,$0.width,$0.height,1,q0,n)}D.clearLayerUpdates()}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,s,0,0,0,$0.width,$0.height,o.depth,q0,$0.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,s,X0,$0.width,$0.height,o.depth,0,$0.data,0,0);else S0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(w0){if(S)$.texSubImage3D(J.TEXTURE_2D_ARRAY,s,0,0,0,$0.width,$0.height,o.depth,q0,z0,$0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,s,X0,$0.width,$0.height,o.depth,0,q0,z0,$0.data)}else{if(w0&&n0)$.texStorage2D(J.TEXTURE_2D,K0,X0,M0[0].width,M0[0].height);for(let s=0,W0=M0.length;s<W0;s++)if($0=M0[s],D.format!==q9)if(q0!==null)if(w0){if(S)$.compressedTexSubImage2D(J.TEXTURE_2D,s,0,0,$0.width,$0.height,q0,$0.data)}else $.compressedTexImage2D(J.TEXTURE_2D,s,X0,$0.width,$0.height,0,$0.data);else S0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(w0){if(S)$.texSubImage2D(J.TEXTURE_2D,s,0,0,$0.width,$0.height,q0,z0,$0.data)}else $.texImage2D(J.TEXTURE_2D,s,X0,$0.width,$0.height,0,q0,z0,$0.data)}else if(D.isDataArrayTexture)if(w0){if(n0)$.texStorage3D(J.TEXTURE_2D_ARRAY,K0,X0,o.width,o.height,o.depth);if(S)if(D.layerUpdates.size>0){let s=L$(o.width,o.height,D.format,D.type);for(let W0 of D.layerUpdates){let O0=o.data.subarray(W0*s/o.data.BYTES_PER_ELEMENT,(W0+1)*s/o.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,W0,o.width,o.height,1,q0,z0,O0)}D.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,o.width,o.height,o.depth,q0,z0,o.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,X0,o.width,o.height,o.depth,0,q0,z0,o.data);else if(D.isData3DTexture)if(w0){if(n0)$.texStorage3D(J.TEXTURE_3D,K0,X0,o.width,o.height,o.depth);if(S)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,o.width,o.height,o.depth,q0,z0,o.data)}else $.texImage3D(J.TEXTURE_3D,0,X0,o.width,o.height,o.depth,0,q0,z0,o.data);else if(D.isFramebufferTexture){if(n0)if(w0)$.texStorage2D(J.TEXTURE_2D,K0,X0,o.width,o.height);else{let{width:s,height:W0}=o;for(let O0=0;O0<K0;O0++)$.texImage2D(J.TEXTURE_2D,O0,X0,s,W0,0,q0,z0,null),s>>=1,W0>>=1}}else if(D.isHTMLTexture){if("texElementImage2D"in J){let s=J.canvas;if(!s.hasAttribute("layoutsubtree"))s.setAttribute("layoutsubtree","true");if(o.parentNode!==s){s.appendChild(o),F.add(D),s.onpaint=(W0)=>{let O0=W0.changedElements;for(let v of F)if(O0.includes(v.image))v.needsUpdate=!0},s.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,o);else{let{RGBA:O0,RGBA:v,UNSIGNED_BYTE:n}=J;J.texElementImage2D(J.TEXTURE_2D,0,O0,v,n,o)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(M0.length>0){if(w0&&n0){let s=o0(M0[0]);$.texStorage2D(J.TEXTURE_2D,K0,X0,s.width,s.height)}for(let s=0,W0=M0.length;s<W0;s++)if($0=M0[s],w0){if(S)$.texSubImage2D(J.TEXTURE_2D,s,0,0,q0,z0,$0)}else $.texImage2D(J.TEXTURE_2D,s,X0,q0,z0,$0);D.generateMipmaps=!1}else if(w0){if(n0){let s=o0(o);$.texStorage2D(J.TEXTURE_2D,K0,X0,s.width,s.height)}if(S)$.texSubImage2D(J.TEXTURE_2D,0,0,0,q0,z0,o)}else $.texImage2D(J.TEXTURE_2D,0,X0,q0,z0,o);if(O(D))_(m);if(Y0.__version=Q0.version,D.onUpdate)D.onUpdate(D)}V.__version=D.version}function m0(V,D,T){if(D.image.length!==6)return;let m=Z0(V,D),e=D.source;$.bindTexture(J.TEXTURE_CUBE_MAP,V.__webglTexture,J.TEXTURE0+T);let Q0=Z.get(e);if(e.version!==Q0.__version||m===!0){$.activeTexture(J.TEXTURE0+T);let Y0=u0.getPrimaries(u0.workingColorSpace),c=D.colorSpace===$8?null:u0.getPrimaries(D.colorSpace),o=D.colorSpace===$8||Y0===c?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,D.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),$.pixelStorei(J.UNPACK_ALIGNMENT,D.unpackAlignment),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,o);let q0=D.isCompressedTexture||D.image[0].isCompressedTexture,z0=D.image[0]&&D.image[0].isDataTexture,X0=[];for(let v=0;v<6;v++){if(!q0&&!z0)X0[v]=q(D.image[v],!0,K.maxCubemapSize);else X0[v]=z0?D.image[v].image:D.image[v];X0[v]=s0(D,X0[v])}let $0=X0[0],M0=W.convert(D.format,D.colorSpace),w0=W.convert(D.type),n0=M(D.internalFormat,M0,w0,D.normalized,D.colorSpace),S=D.isVideoTexture!==!0,K0=Q0.__version===void 0||m===!0,s=e.dataReady,W0=I(D,$0);r(J.TEXTURE_CUBE_MAP,D);let O0;if(q0){if(S&&K0)$.texStorage2D(J.TEXTURE_CUBE_MAP,W0,n0,$0.width,$0.height);for(let v=0;v<6;v++){O0=X0[v].mipmaps;for(let n=0;n<O0.length;n++){let D0=O0[n];if(D.format!==q9)if(M0!==null)if(S){if(s)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+v,n,0,0,D0.width,D0.height,M0,D0.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+v,n,n0,D0.width,D0.height,0,D0.data);else S0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(S){if(s)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+v,n,0,0,D0.width,D0.height,M0,w0,D0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+v,n,n0,D0.width,D0.height,0,M0,w0,D0.data)}}}else{if(O0=D.mipmaps,S&&K0){if(O0.length>0)W0++;let v=o0(X0[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,W0,n0,v.width,v.height)}for(let v=0;v<6;v++)if(z0){if(S){if(s)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+v,0,0,0,X0[v].width,X0[v].height,M0,w0,X0[v].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+v,0,n0,X0[v].width,X0[v].height,0,M0,w0,X0[v].data);for(let n=0;n<O0.length;n++){let _0=O0[n].image[v].image;if(S){if(s)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+v,n+1,0,0,_0.width,_0.height,M0,w0,_0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+v,n+1,n0,_0.width,_0.height,0,M0,w0,_0.data)}}else{if(S){if(s)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+v,0,0,0,M0,w0,X0[v])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+v,0,n0,M0,w0,X0[v]);for(let n=0;n<O0.length;n++){let D0=O0[n];if(S){if(s)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+v,n+1,0,0,M0,w0,D0.image[v])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+v,n+1,n0,M0,w0,D0.image[v])}}}if(O(D))_(J.TEXTURE_CUBE_MAP);if(Q0.__version=e.version,D.onUpdate)D.onUpdate(D)}V.__version=D.version}function h0(V,D,T,m,e,Q0){let Y0=W.convert(T.format,T.colorSpace),c=W.convert(T.type),o=M(T.internalFormat,Y0,c,T.normalized,T.colorSpace),q0=Z.get(D),z0=Z.get(T);if(z0.__renderTarget=D,!q0.__hasExternalTextures){let X0=Math.max(1,D.width>>Q0),$0=Math.max(1,D.height>>Q0);if(e===J.TEXTURE_3D||e===J.TEXTURE_2D_ARRAY)$.texImage3D(e,Q0,o,X0,$0,D.depth,0,Y0,c,null);else $.texImage2D(e,Q0,o,X0,$0,0,Y0,c,null)}if($.bindFramebuffer(J.FRAMEBUFFER,V),j(D))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,m,e,z0.__webglTexture,0,ZJ(D));else if(e===J.TEXTURE_2D||e>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&e<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,m,e,z0.__webglTexture,Q0);$.bindFramebuffer(J.FRAMEBUFFER,null)}function x0(V,D,T){if(J.bindRenderbuffer(J.RENDERBUFFER,V),D.depthBuffer){let m=D.depthTexture,e=m&&m.isDepthTexture?m.type:null,Q0=A(D.stencilBuffer,e),Y0=D.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(j(D))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,ZJ(D),Q0,D.width,D.height);else if(T)J.renderbufferStorageMultisample(J.RENDERBUFFER,ZJ(D),Q0,D.width,D.height);else J.renderbufferStorage(J.RENDERBUFFER,Q0,D.width,D.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,Y0,J.RENDERBUFFER,V)}else{let m=D.textures;for(let e=0;e<m.length;e++){let Q0=m[e],Y0=W.convert(Q0.format,Q0.colorSpace),c=W.convert(Q0.type),o=M(Q0.internalFormat,Y0,c,Q0.normalized,Q0.colorSpace);if(j(D))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,ZJ(D),o,D.width,D.height);else if(T)J.renderbufferStorageMultisample(J.RENDERBUFFER,ZJ(D),o,D.width,D.height);else J.renderbufferStorage(J.RENDERBUFFER,o,D.width,D.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function r0(V,D,T){let m=D.isWebGLCubeRenderTarget===!0;if($.bindFramebuffer(J.FRAMEBUFFER,V),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let e=Z.get(D.depthTexture);if(e.__renderTarget=D,!e.__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0;if(m){if(e.__webglInit===void 0)e.__webglInit=!0,D.depthTexture.addEventListener("dispose",w);if(e.__webglTexture===void 0){e.__webglTexture=J.createTexture(),$.bindTexture(J.TEXTURE_CUBE_MAP,e.__webglTexture),r(J.TEXTURE_CUBE_MAP,D.depthTexture);let q0=W.convert(D.depthTexture.format),z0=W.convert(D.depthTexture.type),X0;if(D.depthTexture.format===e9)X0=J.DEPTH_COMPONENT24;else if(D.depthTexture.format===J8)X0=J.DEPTH24_STENCIL8;for(let $0=0;$0<6;$0++)J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+$0,0,X0,D.width,D.height,0,q0,z0,null)}}else t(D.depthTexture,0);let Q0=e.__webglTexture,Y0=ZJ(D),c=m?J.TEXTURE_CUBE_MAP_POSITIVE_X+T:J.TEXTURE_2D,o=D.depthTexture.format===J8?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(D.depthTexture.format===e9)if(j(D))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,o,c,Q0,0,Y0);else J.framebufferTexture2D(J.FRAMEBUFFER,o,c,Q0,0);else if(D.depthTexture.format===J8)if(j(D))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,o,c,Q0,0,Y0);else J.framebufferTexture2D(J.FRAMEBUFFER,o,c,Q0,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function d0(V){let D=Z.get(V),T=V.isWebGLCubeRenderTarget===!0;if(D.__boundDepthTexture!==V.depthTexture){let m=V.depthTexture;if(D.__depthDisposeCallback)D.__depthDisposeCallback();if(m){let e=()=>{delete D.__boundDepthTexture,delete D.__depthDisposeCallback,m.removeEventListener("dispose",e)};m.addEventListener("dispose",e),D.__depthDisposeCallback=e}D.__boundDepthTexture=m}if(V.depthTexture&&!D.__autoAllocateDepthBuffer)if(T)for(let m=0;m<6;m++)r0(D.__webglFramebuffer[m],V,m);else{let m=V.texture.mipmaps;if(m&&m.length>0)r0(D.__webglFramebuffer[0],V,0);else r0(D.__webglFramebuffer,V,0)}else if(T){D.__webglDepthbuffer=[];for(let m=0;m<6;m++)if($.bindFramebuffer(J.FRAMEBUFFER,D.__webglFramebuffer[m]),D.__webglDepthbuffer[m]===void 0)D.__webglDepthbuffer[m]=J.createRenderbuffer(),x0(D.__webglDepthbuffer[m],V,!1);else{let e=V.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,Q0=D.__webglDepthbuffer[m];J.bindRenderbuffer(J.RENDERBUFFER,Q0),J.framebufferRenderbuffer(J.FRAMEBUFFER,e,J.RENDERBUFFER,Q0)}}else{let m=V.texture.mipmaps;if(m&&m.length>0)$.bindFramebuffer(J.FRAMEBUFFER,D.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,D.__webglFramebuffer);if(D.__webglDepthbuffer===void 0)D.__webglDepthbuffer=J.createRenderbuffer(),x0(D.__webglDepthbuffer,V,!1);else{let e=V.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,Q0=D.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,Q0),J.framebufferRenderbuffer(J.FRAMEBUFFER,e,J.RENDERBUFFER,Q0)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function y0(V,D,T){let m=Z.get(V);if(D!==void 0)h0(m.__webglFramebuffer,V,V.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(T!==void 0)d0(V)}function UJ(V){let D=V.texture,T=Z.get(V),m=Z.get(D);V.addEventListener("dispose",R);let e=V.textures,Q0=V.isWebGLCubeRenderTarget===!0,Y0=e.length>1;if(!Y0){if(m.__webglTexture===void 0)m.__webglTexture=J.createTexture();m.__version=D.version,H.memory.textures++}if(Q0){T.__webglFramebuffer=[];for(let c=0;c<6;c++)if(D.mipmaps&&D.mipmaps.length>0){T.__webglFramebuffer[c]=[];for(let o=0;o<D.mipmaps.length;o++)T.__webglFramebuffer[c][o]=J.createFramebuffer()}else T.__webglFramebuffer[c]=J.createFramebuffer()}else{if(D.mipmaps&&D.mipmaps.length>0){T.__webglFramebuffer=[];for(let c=0;c<D.mipmaps.length;c++)T.__webglFramebuffer[c]=J.createFramebuffer()}else T.__webglFramebuffer=J.createFramebuffer();if(Y0)for(let c=0,o=e.length;c<o;c++){let q0=Z.get(e[c]);if(q0.__webglTexture===void 0)q0.__webglTexture=J.createTexture(),H.memory.textures++}if(V.samples>0&&j(V)===!1){T.__webglMultisampledFramebuffer=J.createFramebuffer(),T.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,T.__webglMultisampledFramebuffer);for(let c=0;c<e.length;c++){let o=e[c];T.__webglColorRenderbuffer[c]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,T.__webglColorRenderbuffer[c]);let q0=W.convert(o.format,o.colorSpace),z0=W.convert(o.type),X0=M(o.internalFormat,q0,z0,o.normalized,o.colorSpace,V.isXRRenderTarget===!0),$0=ZJ(V);J.renderbufferStorageMultisample(J.RENDERBUFFER,$0,X0,V.width,V.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+c,J.RENDERBUFFER,T.__webglColorRenderbuffer[c])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),V.depthBuffer)T.__webglDepthRenderbuffer=J.createRenderbuffer(),x0(T.__webglDepthRenderbuffer,V,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(Q0){$.bindTexture(J.TEXTURE_CUBE_MAP,m.__webglTexture),r(J.TEXTURE_CUBE_MAP,D);for(let c=0;c<6;c++)if(D.mipmaps&&D.mipmaps.length>0)for(let o=0;o<D.mipmaps.length;o++)h0(T.__webglFramebuffer[c][o],V,D,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+c,o);else h0(T.__webglFramebuffer[c],V,D,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+c,0);if(O(D))_(J.TEXTURE_CUBE_MAP);$.unbindTexture()}else if(Y0){for(let c=0,o=e.length;c<o;c++){let q0=e[c],z0=Z.get(q0),X0=J.TEXTURE_2D;if(V.isWebGL3DRenderTarget||V.isWebGLArrayRenderTarget)X0=V.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(X0,z0.__webglTexture),r(X0,q0),h0(T.__webglFramebuffer,V,q0,J.COLOR_ATTACHMENT0+c,X0,0),O(q0))_(X0)}$.unbindTexture()}else{let c=J.TEXTURE_2D;if(V.isWebGL3DRenderTarget||V.isWebGLArrayRenderTarget)c=V.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(c,m.__webglTexture),r(c,D),D.mipmaps&&D.mipmaps.length>0)for(let o=0;o<D.mipmaps.length;o++)h0(T.__webglFramebuffer[o],V,D,J.COLOR_ATTACHMENT0,c,o);else h0(T.__webglFramebuffer,V,D,J.COLOR_ATTACHMENT0,c,0);if(O(D))_(c);$.unbindTexture()}if(V.depthBuffer)d0(V)}function AJ(V){let D=V.textures;for(let T=0,m=D.length;T<m;T++){let e=D[T];if(O(e)){let Q0=C(V),Y0=Z.get(e).__webglTexture;$.bindTexture(Q0,Y0),_(Q0),$.unbindTexture()}}}let $J=[],qJ=[];function OJ(V){if(V.samples>0){if(j(V)===!1){let{textures:D,width:T,height:m}=V,e=J.COLOR_BUFFER_BIT,Q0=V.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,Y0=Z.get(V),c=D.length>1;if(c)for(let q0=0;q0<D.length;q0++)$.bindFramebuffer(J.FRAMEBUFFER,Y0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+q0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,Y0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+q0,J.TEXTURE_2D,null,0);$.bindFramebuffer(J.READ_FRAMEBUFFER,Y0.__webglMultisampledFramebuffer);let o=V.texture.mipmaps;if(o&&o.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,Y0.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,Y0.__webglFramebuffer);for(let q0=0;q0<D.length;q0++){if(V.resolveDepthBuffer){if(V.depthBuffer)e|=J.DEPTH_BUFFER_BIT;if(V.stencilBuffer&&V.resolveStencilBuffer)e|=J.STENCIL_BUFFER_BIT}if(c){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,Y0.__webglColorRenderbuffer[q0]);let z0=Z.get(D[q0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,z0,0)}if(J.blitFramebuffer(0,0,T,m,0,0,T,m,e,J.NEAREST),X===!0){if($J.length=0,qJ.length=0,$J.push(J.COLOR_ATTACHMENT0+q0),V.depthBuffer&&V.resolveDepthBuffer===!1)$J.push(Q0),qJ.push(Q0),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,qJ);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,$J)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),c)for(let q0=0;q0<D.length;q0++){$.bindFramebuffer(J.FRAMEBUFFER,Y0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+q0,J.RENDERBUFFER,Y0.__webglColorRenderbuffer[q0]);let z0=Z.get(D[q0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,Y0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+q0,J.TEXTURE_2D,z0,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,Y0.__webglMultisampledFramebuffer)}else if(V.depthBuffer&&V.resolveDepthBuffer===!1&&X){let D=V.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[D])}}}function ZJ(V){return Math.min(K.maxSamples,V.samples)}function j(V){let D=Z.get(V);return V.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function MJ(V){let D=H.render.frame;if(G.get(V)!==D)G.set(V,D),V.update()}function s0(V,D){let{colorSpace:T,format:m,type:e}=V;if(V.isCompressedTexture===!0||V.isVideoTexture===!0)return D;if(T!==uQ&&T!==$8)if(u0.getTransfer(T)===HJ){if(m!==q9||e!==J9)S0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else T0("WebGLTextures: Unsupported texture color space:",T);return D}function o0(V){if(typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement)U.width=V.naturalWidth||V.width,U.height=V.naturalHeight||V.height;else if(typeof VideoFrame<"u"&&V instanceof VideoFrame)U.width=V.displayWidth,U.height=V.displayHeight;else U.width=V.width,U.height=V.height;return U}this.allocateTextureUnit=i,this.resetTextureUnits=a,this.getTextureUnits=x,this.setTextureUnits=u,this.setTexture2D=t,this.setTexture2DArray=J0,this.setTexture3D=H0,this.setTextureCube=V0,this.rebindTextures=y0,this.setupRenderTarget=UJ,this.updateRenderTargetMipmap=AJ,this.updateMultisampleRenderTarget=OJ,this.setupDepthRenderbuffer=d0,this.setupFrameBufferTexture=h0,this.useMultisampledRTT=j,this.isReversedDepthBuffer=function(){return $.buffers.depth.getReversed()}}function y5(J,Q){function $(Z,K=$8){let W,H=u0.getTransfer(K);if(Z===J9)return J.UNSIGNED_BYTE;if(Z===XQ)return J.UNSIGNED_SHORT_4_4_4_4;if(Z===UQ)return J.UNSIGNED_SHORT_5_5_5_1;if(Z===tZ)return J.UNSIGNED_INT_5_9_9_9_REV;if(Z===eZ)return J.UNSIGNED_INT_10F_11F_11F_REV;if(Z===aZ)return J.BYTE;if(Z===rZ)return J.SHORT;if(Z===K7)return J.UNSIGNED_SHORT;if(Z===YQ)return J.INT;if(Z===h9)return J.UNSIGNED_INT;if(Z===z9)return J.FLOAT;if(Z===B9)return J.HALF_FLOAT;if(Z===JK)return J.ALPHA;if(Z===QK)return J.RGB;if(Z===q9)return J.RGBA;if(Z===e9)return J.DEPTH_COMPONENT;if(Z===J8)return J.DEPTH_STENCIL;if(Z===$K)return J.RED;if(Z===qQ)return J.RED_INTEGER;if(Z===Q8)return J.RG;if(Z===NQ)return J.RG_INTEGER;if(Z===GQ)return J.RGBA_INTEGER;if(Z===r7||Z===t7||Z===e7||Z===J6)if(H===HJ)if(W=Q.get("WEBGL_compressed_texture_s3tc_srgb"),W!==null){if(Z===r7)return W.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===t7)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===e7)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===J6)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(W=Q.get("WEBGL_compressed_texture_s3tc"),W!==null){if(Z===r7)return W.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===t7)return W.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===e7)return W.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===J6)return W.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===FQ||Z===OQ||Z===EQ||Z===DQ)if(W=Q.get("WEBGL_compressed_texture_pvrtc"),W!==null){if(Z===FQ)return W.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===OQ)return W.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===EQ)return W.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===DQ)return W.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===RQ||Z===kQ||Z===LQ||Z===VQ||Z===MQ||Z===Q6||Z===zQ)if(W=Q.get("WEBGL_compressed_texture_etc"),W!==null){if(Z===RQ||Z===kQ)return H===HJ?W.COMPRESSED_SRGB8_ETC2:W.COMPRESSED_RGB8_ETC2;if(Z===LQ)return H===HJ?W.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:W.COMPRESSED_RGBA8_ETC2_EAC;if(Z===VQ)return W.COMPRESSED_R11_EAC;if(Z===MQ)return W.COMPRESSED_SIGNED_R11_EAC;if(Z===Q6)return W.COMPRESSED_RG11_EAC;if(Z===zQ)return W.COMPRESSED_SIGNED_RG11_EAC}else return null;if(Z===BQ||Z===IQ||Z===AQ||Z===PQ||Z===CQ||Z===wQ||Z===_Q||Z===TQ||Z===SQ||Z===jQ||Z===vQ||Z===yQ||Z===fQ||Z===bQ)if(W=Q.get("WEBGL_compressed_texture_astc"),W!==null){if(Z===BQ)return H===HJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:W.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===IQ)return H===HJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:W.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===AQ)return H===HJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:W.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===PQ)return H===HJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:W.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===CQ)return H===HJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:W.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===wQ)return H===HJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:W.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===_Q)return H===HJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:W.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===TQ)return H===HJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:W.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===SQ)return H===HJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:W.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===jQ)return H===HJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:W.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===vQ)return H===HJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:W.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===yQ)return H===HJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:W.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===fQ)return H===HJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:W.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===bQ)return H===HJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:W.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===hQ||Z===xQ||Z===gQ)if(W=Q.get("EXT_texture_compression_bptc"),W!==null){if(Z===hQ)return H===HJ?W.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:W.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===xQ)return W.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===gQ)return W.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===pQ||Z===mQ||Z===$6||Z===lQ)if(W=Q.get("EXT_texture_compression_rgtc"),W!==null){if(Z===pQ)return W.COMPRESSED_RED_RGTC1_EXT;if(Z===mQ)return W.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===$6)return W.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===lQ)return W.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===h8)return J.UNSIGNED_INT_24_8;return J[Z]!==void 0?J[Z]:null}return{convert:$}}var f5=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,b5=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class eK{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new N6(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new sJ({vertexShader:f5,fragmentShader:b5,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new j0(new $9(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class JW extends I9{constructor(J,Q){super();let $=this,Z=null,K=1,W=null,H="local-floor",Y=1,X=null,U=null,G=null,F=null,N=null,E=null,L=typeof XRWebGLBinding<"u",B=new eK,q={},O=Q.getContextAttributes(),_=null,C=null,M=[],A=[],I=new g0,w=null,R=new SJ;R.viewport=new NJ;let z=new SJ;z.viewport=new NJ;let d=[R,z],P=new E$,p=null,a=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(r){let Z0=M[r];if(Z0===void 0)Z0=new X7,M[r]=Z0;return Z0.getTargetRaySpace()},this.getControllerGrip=function(r){let Z0=M[r];if(Z0===void 0)Z0=new X7,M[r]=Z0;return Z0.getGripSpace()},this.getHand=function(r){let Z0=M[r];if(Z0===void 0)Z0=new X7,M[r]=Z0;return Z0.getHandSpace()};function x(r){let Z0=A.indexOf(r.inputSource);if(Z0===-1)return;let E0=M[Z0];if(E0!==void 0)E0.update(r.inputSource,r.frame,X||W),E0.dispatchEvent({type:r.type,data:r.inputSource})}function u(){Z.removeEventListener("select",x),Z.removeEventListener("selectstart",x),Z.removeEventListener("selectend",x),Z.removeEventListener("squeeze",x),Z.removeEventListener("squeezestart",x),Z.removeEventListener("squeezeend",x),Z.removeEventListener("end",u),Z.removeEventListener("inputsourceschange",i);for(let r=0;r<M.length;r++){let Z0=A[r];if(Z0===null)continue;A[r]=null,M[r].disconnect(Z0)}p=null,a=null,B.reset();for(let r in q)delete q[r];J.setRenderTarget(_),N=null,F=null,G=null,Z=null,C=null,t0.stop(),$.isPresenting=!1,J.setPixelRatio(w),J.setSize(I.width,I.height,!1),$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(r){if(K=r,$.isPresenting===!0)S0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(r){if(H=r,$.isPresenting===!0)S0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return X||W},this.setReferenceSpace=function(r){X=r},this.getBaseLayer=function(){return F!==null?F:N},this.getBinding=function(){if(G===null&&L)G=new XRWebGLBinding(Z,Q);return G},this.getFrame=function(){return E},this.getSession=function(){return Z},this.setSession=async function(r){if(Z=r,Z!==null){if(_=J.getRenderTarget(),Z.addEventListener("select",x),Z.addEventListener("selectstart",x),Z.addEventListener("selectend",x),Z.addEventListener("squeeze",x),Z.addEventListener("squeezestart",x),Z.addEventListener("squeezeend",x),Z.addEventListener("end",u),Z.addEventListener("inputsourceschange",i),O.xrCompatible!==!0)await Q.makeXRCompatible();if(w=J.getPixelRatio(),J.getSize(I),!(L&&("createProjectionLayer"in XRWebGLBinding.prototype))){let E0={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:K};N=new XRWebGLLayer(Z,Q,E0),Z.updateRenderState({baseLayer:N}),J.setPixelRatio(1),J.setSize(N.framebufferWidth,N.framebufferHeight,!1),C=new nJ(N.framebufferWidth,N.framebufferHeight,{format:q9,type:J9,colorSpace:J.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:N.ignoreDepthValues===!1,resolveStencilBuffer:N.ignoreDepthValues===!1})}else{let E0=null,F0=null,P0=null;if(O.depth)P0=O.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,E0=O.stencil?J8:e9,F0=O.stencil?h8:h9;let m0={colorFormat:Q.RGBA8,depthFormat:P0,scaleFactor:K};G=this.getBinding(),F=G.createProjectionLayer(m0),Z.updateRenderState({layers:[F]}),J.setPixelRatio(1),J.setSize(F.textureWidth,F.textureHeight,!1),C=new nJ(F.textureWidth,F.textureHeight,{format:q9,type:J9,depthTexture:new g9(F.textureWidth,F.textureHeight,F0,void 0,void 0,void 0,void 0,void 0,void 0,E0),stencilBuffer:O.stencil,colorSpace:J.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:F.ignoreDepthValues===!1,resolveStencilBuffer:F.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(Y),X=null,W=await Z.requestReferenceSpace(H),t0.setContext(Z),t0.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return B.getDepthTexture()};function i(r){for(let Z0=0;Z0<r.removed.length;Z0++){let E0=r.removed[Z0],F0=A.indexOf(E0);if(F0>=0)A[F0]=null,M[F0].disconnect(E0)}for(let Z0=0;Z0<r.added.length;Z0++){let E0=r.added[Z0],F0=A.indexOf(E0);if(F0===-1){for(let m0=0;m0<M.length;m0++)if(m0>=A.length){A.push(E0),F0=m0;break}else if(A[m0]===null){A[m0]=E0,F0=m0;break}if(F0===-1)break}let P0=M[F0];if(P0)P0.connect(E0)}}let b=new f,t=new f;function J0(r,Z0,E0){b.setFromMatrixPosition(Z0.matrixWorld),t.setFromMatrixPosition(E0.matrixWorld);let F0=b.distanceTo(t),P0=Z0.projectionMatrix.elements,m0=E0.projectionMatrix.elements,h0=P0[14]/(P0[10]-1),x0=P0[14]/(P0[10]+1),r0=(P0[9]+1)/P0[5],d0=(P0[9]-1)/P0[5],y0=(P0[8]-1)/P0[0],UJ=(m0[8]+1)/m0[0],AJ=h0*y0,$J=h0*UJ,qJ=F0/(-y0+UJ),OJ=qJ*-y0;if(Z0.matrixWorld.decompose(r.position,r.quaternion,r.scale),r.translateX(OJ),r.translateZ(qJ),r.matrixWorld.compose(r.position,r.quaternion,r.scale),r.matrixWorldInverse.copy(r.matrixWorld).invert(),P0[10]===-1)r.projectionMatrix.copy(Z0.projectionMatrix),r.projectionMatrixInverse.copy(Z0.projectionMatrixInverse);else{let ZJ=h0+qJ,j=x0+qJ,MJ=AJ-OJ,s0=$J+(F0-OJ),o0=r0*x0/j*ZJ,V=d0*x0/j*ZJ;r.projectionMatrix.makePerspective(MJ,s0,o0,V,ZJ,j),r.projectionMatrixInverse.copy(r.projectionMatrix).invert()}}function H0(r,Z0){if(Z0===null)r.matrixWorld.copy(r.matrix);else r.matrixWorld.multiplyMatrices(Z0.matrixWorld,r.matrix);r.matrixWorldInverse.copy(r.matrixWorld).invert()}this.updateCamera=function(r){if(Z===null)return;let{near:Z0,far:E0}=r;if(B.texture!==null){if(B.depthNear>0)Z0=B.depthNear;if(B.depthFar>0)E0=B.depthFar}if(P.near=z.near=R.near=Z0,P.far=z.far=R.far=E0,p!==P.near||a!==P.far)Z.updateRenderState({depthNear:P.near,depthFar:P.far}),p=P.near,a=P.far;P.layers.mask=r.layers.mask|6,R.layers.mask=P.layers.mask&-5,z.layers.mask=P.layers.mask&-3;let F0=r.parent,P0=P.cameras;H0(P,F0);for(let m0=0;m0<P0.length;m0++)H0(P0[m0],F0);if(P0.length===2)J0(P,R,z);else P.projectionMatrix.copy(R.projectionMatrix);V0(r,P,F0)};function V0(r,Z0,E0){if(E0===null)r.matrix.copy(Z0.matrixWorld);else r.matrix.copy(E0.matrixWorld),r.matrix.invert(),r.matrix.multiply(Z0.matrixWorld);if(r.matrix.decompose(r.position,r.quaternion,r.scale),r.updateMatrixWorld(!0),r.projectionMatrix.copy(Z0.projectionMatrix),r.projectionMatrixInverse.copy(Z0.projectionMatrixInverse),r.isPerspectiveCamera)r.fov=c7*2*Math.atan(1/r.projectionMatrix.elements[5]),r.zoom=1}this.getCamera=function(){return P},this.getFoveation=function(){if(F===null&&N===null)return;return Y},this.setFoveation=function(r){if(Y=r,F!==null)F.fixedFoveation=r;if(N!==null&&N.fixedFoveation!==void 0)N.fixedFoveation=r},this.hasDepthSensing=function(){return B.texture!==null},this.getDepthSensingMesh=function(){return B.getMesh(P)},this.getCameraTexture=function(r){return q[r]};let k0=null;function a0(r,Z0){if(U=Z0.getViewerPose(X||W),E=Z0,U!==null){let E0=U.views;if(N!==null)J.setRenderTargetFramebuffer(C,N.framebuffer),J.setRenderTarget(C);let F0=!1;if(E0.length!==P.cameras.length)P.cameras.length=0,F0=!0;for(let x0=0;x0<E0.length;x0++){let r0=E0[x0],d0=null;if(N!==null)d0=N.getViewport(r0);else{let UJ=G.getViewSubImage(F,r0);if(d0=UJ.viewport,x0===0)J.setRenderTargetTextures(C,UJ.colorTexture,UJ.depthStencilTexture),J.setRenderTarget(C)}let y0=d[x0];if(y0===void 0)y0=new SJ,y0.layers.enable(x0),y0.viewport=new NJ,d[x0]=y0;if(y0.matrix.fromArray(r0.transform.matrix),y0.matrix.decompose(y0.position,y0.quaternion,y0.scale),y0.projectionMatrix.fromArray(r0.projectionMatrix),y0.projectionMatrixInverse.copy(y0.projectionMatrix).invert(),y0.viewport.set(d0.x,d0.y,d0.width,d0.height),x0===0)P.matrix.copy(y0.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale);if(F0===!0)P.cameras.push(y0)}let P0=Z.enabledFeatures;if(P0&&P0.includes("depth-sensing")&&Z.depthUsage=="gpu-optimized"&&L){G=$.getBinding();let x0=G.getDepthInformation(E0[0]);if(x0&&x0.isValid&&x0.texture)B.init(x0,Z.renderState)}if(P0&&P0.includes("camera-access")&&L){J.state.unbindTexture(),G=$.getBinding();for(let x0=0;x0<E0.length;x0++){let r0=E0[x0].camera;if(r0){let d0=q[r0];if(!d0)d0=new N6,q[r0]=d0;let y0=G.getCameraImage(r0);d0.sourceTexture=y0}}}}for(let E0=0;E0<M.length;E0++){let F0=A[E0],P0=M[E0];if(F0!==null&&P0!==void 0)P0.update(F0,Z0,X||W)}if(k0)k0(r,Z0);if(Z0.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:Z0});E=null}let t0=new lK;t0.setAnimationLoop(a0),this.setAnimationLoop=function(r){k0=r},this.dispose=function(){}}}var h5=new QJ,QW=new v0;QW.set(-1,0,0,0,1,0,0,0,1);function x5(J,Q){function $(q,O){if(q.matrixAutoUpdate===!0)q.updateMatrix();O.value.copy(q.matrix)}function Z(q,O){if(O.color.getRGB(q.fogColor.value,eQ(J)),O.isFog)q.fogNear.value=O.near,q.fogFar.value=O.far;else if(O.isFogExp2)q.fogDensity.value=O.density}function K(q,O,_,C,M){if(O.isNodeMaterial)O.uniformsNeedUpdate=!1;else if(O.isMeshBasicMaterial)W(q,O);else if(O.isMeshLambertMaterial){if(W(q,O),O.envMap)q.envMapIntensity.value=O.envMapIntensity}else if(O.isMeshToonMaterial)W(q,O),F(q,O);else if(O.isMeshPhongMaterial){if(W(q,O),G(q,O),O.envMap)q.envMapIntensity.value=O.envMapIntensity}else if(O.isMeshStandardMaterial){if(W(q,O),N(q,O),O.isMeshPhysicalMaterial)E(q,O,M)}else if(O.isMeshMatcapMaterial)W(q,O),L(q,O);else if(O.isMeshDepthMaterial)W(q,O);else if(O.isMeshDistanceMaterial)W(q,O),B(q,O);else if(O.isMeshNormalMaterial)W(q,O);else if(O.isLineBasicMaterial){if(H(q,O),O.isLineDashedMaterial)Y(q,O)}else if(O.isPointsMaterial)X(q,O,_,C);else if(O.isSpriteMaterial)U(q,O);else if(O.isShadowMaterial)q.color.value.copy(O.color),q.opacity.value=O.opacity;else if(O.isShaderMaterial)O.uniformsNeedUpdate=!1}function W(q,O){if(q.opacity.value=O.opacity,O.color)q.diffuse.value.copy(O.color);if(O.emissive)q.emissive.value.copy(O.emissive).multiplyScalar(O.emissiveIntensity);if(O.map)q.map.value=O.map,$(O.map,q.mapTransform);if(O.alphaMap)q.alphaMap.value=O.alphaMap,$(O.alphaMap,q.alphaMapTransform);if(O.bumpMap){if(q.bumpMap.value=O.bumpMap,$(O.bumpMap,q.bumpMapTransform),q.bumpScale.value=O.bumpScale,O.side===vJ)q.bumpScale.value*=-1}if(O.normalMap){if(q.normalMap.value=O.normalMap,$(O.normalMap,q.normalMapTransform),q.normalScale.value.copy(O.normalScale),O.side===vJ)q.normalScale.value.negate()}if(O.displacementMap)q.displacementMap.value=O.displacementMap,$(O.displacementMap,q.displacementMapTransform),q.displacementScale.value=O.displacementScale,q.displacementBias.value=O.displacementBias;if(O.emissiveMap)q.emissiveMap.value=O.emissiveMap,$(O.emissiveMap,q.emissiveMapTransform);if(O.specularMap)q.specularMap.value=O.specularMap,$(O.specularMap,q.specularMapTransform);if(O.alphaTest>0)q.alphaTest.value=O.alphaTest;let _=Q.get(O),C=_.envMap,M=_.envMapRotation;if(C){if(q.envMap.value=C,q.envMapRotation.value.setFromMatrix4(h5.makeRotationFromEuler(M)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1)q.envMapRotation.value.premultiply(QW);q.reflectivity.value=O.reflectivity,q.ior.value=O.ior,q.refractionRatio.value=O.refractionRatio}if(O.lightMap)q.lightMap.value=O.lightMap,q.lightMapIntensity.value=O.lightMapIntensity,$(O.lightMap,q.lightMapTransform);if(O.aoMap)q.aoMap.value=O.aoMap,q.aoMapIntensity.value=O.aoMapIntensity,$(O.aoMap,q.aoMapTransform)}function H(q,O){if(q.diffuse.value.copy(O.color),q.opacity.value=O.opacity,O.map)q.map.value=O.map,$(O.map,q.mapTransform)}function Y(q,O){q.dashSize.value=O.dashSize,q.totalSize.value=O.dashSize+O.gapSize,q.scale.value=O.scale}function X(q,O,_,C){if(q.diffuse.value.copy(O.color),q.opacity.value=O.opacity,q.size.value=O.size*_,q.scale.value=C*0.5,O.map)q.map.value=O.map,$(O.map,q.uvTransform);if(O.alphaMap)q.alphaMap.value=O.alphaMap,$(O.alphaMap,q.alphaMapTransform);if(O.alphaTest>0)q.alphaTest.value=O.alphaTest}function U(q,O){if(q.diffuse.value.copy(O.color),q.opacity.value=O.opacity,q.rotation.value=O.rotation,O.map)q.map.value=O.map,$(O.map,q.mapTransform);if(O.alphaMap)q.alphaMap.value=O.alphaMap,$(O.alphaMap,q.alphaMapTransform);if(O.alphaTest>0)q.alphaTest.value=O.alphaTest}function G(q,O){q.specular.value.copy(O.specular),q.shininess.value=Math.max(O.shininess,0.0001)}function F(q,O){if(O.gradientMap)q.gradientMap.value=O.gradientMap}function N(q,O){if(q.metalness.value=O.metalness,O.metalnessMap)q.metalnessMap.value=O.metalnessMap,$(O.metalnessMap,q.metalnessMapTransform);if(q.roughness.value=O.roughness,O.roughnessMap)q.roughnessMap.value=O.roughnessMap,$(O.roughnessMap,q.roughnessMapTransform);if(O.envMap)q.envMapIntensity.value=O.envMapIntensity}function E(q,O,_){if(q.ior.value=O.ior,O.sheen>0){if(q.sheenColor.value.copy(O.sheenColor).multiplyScalar(O.sheen),q.sheenRoughness.value=O.sheenRoughness,O.sheenColorMap)q.sheenColorMap.value=O.sheenColorMap,$(O.sheenColorMap,q.sheenColorMapTransform);if(O.sheenRoughnessMap)q.sheenRoughnessMap.value=O.sheenRoughnessMap,$(O.sheenRoughnessMap,q.sheenRoughnessMapTransform)}if(O.clearcoat>0){if(q.clearcoat.value=O.clearcoat,q.clearcoatRoughness.value=O.clearcoatRoughness,O.clearcoatMap)q.clearcoatMap.value=O.clearcoatMap,$(O.clearcoatMap,q.clearcoatMapTransform);if(O.clearcoatRoughnessMap)q.clearcoatRoughnessMap.value=O.clearcoatRoughnessMap,$(O.clearcoatRoughnessMap,q.clearcoatRoughnessMapTransform);if(O.clearcoatNormalMap){if(q.clearcoatNormalMap.value=O.clearcoatNormalMap,$(O.clearcoatNormalMap,q.clearcoatNormalMapTransform),q.clearcoatNormalScale.value.copy(O.clearcoatNormalScale),O.side===vJ)q.clearcoatNormalScale.value.negate()}}if(O.dispersion>0)q.dispersion.value=O.dispersion;if(O.iridescence>0){if(q.iridescence.value=O.iridescence,q.iridescenceIOR.value=O.iridescenceIOR,q.iridescenceThicknessMinimum.value=O.iridescenceThicknessRange[0],q.iridescenceThicknessMaximum.value=O.iridescenceThicknessRange[1],O.iridescenceMap)q.iridescenceMap.value=O.iridescenceMap,$(O.iridescenceMap,q.iridescenceMapTransform);if(O.iridescenceThicknessMap)q.iridescenceThicknessMap.value=O.iridescenceThicknessMap,$(O.iridescenceThicknessMap,q.iridescenceThicknessMapTransform)}if(O.transmission>0){if(q.transmission.value=O.transmission,q.transmissionSamplerMap.value=_.texture,q.transmissionSamplerSize.value.set(_.width,_.height),O.transmissionMap)q.transmissionMap.value=O.transmissionMap,$(O.transmissionMap,q.transmissionMapTransform);if(q.thickness.value=O.thickness,O.thicknessMap)q.thicknessMap.value=O.thicknessMap,$(O.thicknessMap,q.thicknessMapTransform);q.attenuationDistance.value=O.attenuationDistance,q.attenuationColor.value.copy(O.attenuationColor)}if(O.anisotropy>0){if(q.anisotropyVector.value.set(O.anisotropy*Math.cos(O.anisotropyRotation),O.anisotropy*Math.sin(O.anisotropyRotation)),O.anisotropyMap)q.anisotropyMap.value=O.anisotropyMap,$(O.anisotropyMap,q.anisotropyMapTransform)}if(q.specularIntensity.value=O.specularIntensity,q.specularColor.value.copy(O.specularColor),O.specularColorMap)q.specularColorMap.value=O.specularColorMap,$(O.specularColorMap,q.specularColorMapTransform);if(O.specularIntensityMap)q.specularIntensityMap.value=O.specularIntensityMap,$(O.specularIntensityMap,q.specularIntensityMapTransform)}function L(q,O){if(O.matcap)q.matcap.value=O.matcap}function B(q,O){let _=Q.get(O).light;q.referencePosition.value.setFromMatrixPosition(_.matrixWorld),q.nearDistance.value=_.shadow.camera.near,q.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:K}}function g5(J,Q,$,Z){let K={},W={},H=[],Y=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function X(M,A){let I=A.program;Z.uniformBlockBinding(M,I)}function U(M,A){let I=K[M.id];if(I===void 0)q(M),I=G(M),K[M.id]=I,M.addEventListener("dispose",_);let w=A.program;Z.updateUBOMapping(M,w);let R=Q.render.frame;if(W[M.id]!==R)N(M),W[M.id]=R}function G(M){let A=F();M.__bindingPointIndex=A;let I=J.createBuffer(),w=M.__size,R=M.usage;return J.bindBuffer(J.UNIFORM_BUFFER,I),J.bufferData(J.UNIFORM_BUFFER,w,R),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,A,I),I}function F(){for(let M=0;M<Y;M++)if(H.indexOf(M)===-1)return H.push(M),M;return T0("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function N(M){let A=K[M.id],I=M.uniforms,w=M.__cache;J.bindBuffer(J.UNIFORM_BUFFER,A);for(let R=0,z=I.length;R<z;R++){let d=I[R];if(Array.isArray(d))for(let P=0,p=d.length;P<p;P++)E(d[P],R,P,w);else E(d,R,0,w)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function E(M,A,I,w){if(B(M,A,I,w)===!0){let{__offset:R,value:z}=M;if(Array.isArray(z)){let d=0;for(let P=0;P<z.length;P++){let p=z[P],a=O(p);if(L(p,M.__data,d),typeof p!=="number"&&typeof p!=="boolean"&&!p.isMatrix3&&!ArrayBuffer.isView(p))d+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else L(z,M.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,R,M.__data)}}function L(M,A,I){if(typeof M==="number"||typeof M==="boolean")A[0]=M;else if(M.isMatrix3)A[0]=M.elements[0],A[1]=M.elements[1],A[2]=M.elements[2],A[3]=0,A[4]=M.elements[3],A[5]=M.elements[4],A[6]=M.elements[5],A[7]=0,A[8]=M.elements[6],A[9]=M.elements[7],A[10]=M.elements[8],A[11]=0;else if(ArrayBuffer.isView(M))A.set(new M.constructor(M.buffer,M.byteOffset,A.length));else M.toArray(A,I)}function B(M,A,I,w){let R=M.value,z=A+"_"+I;if(w[z]===void 0){if(typeof R==="number"||typeof R==="boolean")w[z]=R;else if(ArrayBuffer.isView(R))w[z]=R.slice();else w[z]=R.clone();return!0}else{let d=w[z];if(typeof R==="number"||typeof R==="boolean"){if(d!==R)return w[z]=R,!0}else if(ArrayBuffer.isView(R))return!0;else if(d.equals(R)===!1)return d.copy(R),!0}return!1}function q(M){let A=M.uniforms,I=0,w=16;for(let z=0,d=A.length;z<d;z++){let P=Array.isArray(A[z])?A[z]:[A[z]];for(let p=0,a=P.length;p<a;p++){let x=P[p],u=Array.isArray(x.value)?x.value:[x.value];for(let i=0,b=u.length;i<b;i++){let t=u[i],J0=O(t),H0=I%w,V0=H0%J0.boundary,k0=H0+V0;if(I+=V0,k0!==0&&w-k0<J0.storage)I+=w-k0;x.__data=new Float32Array(J0.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=I,I+=J0.storage}}}let R=I%w;if(R>0)I+=w-R;return M.__size=I,M.__cache={},this}function O(M){let A={boundary:0,storage:0};if(typeof M==="number"||typeof M==="boolean")A.boundary=4,A.storage=4;else if(M.isVector2)A.boundary=8,A.storage=8;else if(M.isVector3||M.isColor)A.boundary=16,A.storage=12;else if(M.isVector4)A.boundary=16,A.storage=16;else if(M.isMatrix3)A.boundary=48,A.storage=48;else if(M.isMatrix4)A.boundary=64,A.storage=64;else if(M.isTexture)S0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(M))A.boundary=16,A.storage=M.byteLength;else S0("WebGLRenderer: Unsupported uniform value type.",M);return A}function _(M){let A=M.target;A.removeEventListener("dispose",_);let I=H.indexOf(A.__bindingPointIndex);H.splice(I,1),J.deleteBuffer(K[A.id]),delete K[A.id],delete W[A.id]}function C(){for(let M in K)J.deleteBuffer(K[M]);H=[],K={},W={}}return{bind:X,update:U,dispose:C}}var p5=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),G9=null;function m5(){if(G9===null)G9=new U6(p5,16,16,Q8,B9),G9.name="DFG_LUT",G9.minFilter=xJ,G9.magFilter=xJ,G9.wrapS=o7,G9.wrapT=o7,G9.generateMipmaps=!1,G9.needsUpdate=!0;return G9}class _${constructor(J={}){let{canvas:Q=qK(),context:$=null,depth:Z=!0,stencil:K=!1,alpha:W=!1,antialias:H=!1,premultipliedAlpha:Y=!0,preserveDrawingBuffer:X=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:G=!1,reversedDepthBuffer:F=!1,outputBufferType:N=J9}=J;this.isWebGLRenderer=!0;let E;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=$.getContextAttributes().alpha}else E=W;let L=N,B=new Set([GQ,NQ,qQ]),q=new Set([J9,h9,K7,h8,XQ,UQ]),O=new Uint32Array(4),_=new Int32Array(4),C=new f,M=null,A=null,I=[],w=[],R=null;this.domElement=Q,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=eJ,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let z=this,d=!1,P=null,p=null,a=null,x=null;this._outputColorSpace=Z8;let u=0,i=0,b=null,t=-1,J0=null,H0=new NJ,V0=new NJ,k0=null,a0=new b0(0),t0=0,r=Q.width,Z0=Q.height,E0=1,F0=null,P0=null,m0=new NJ(0,0,r,Z0),h0=new NJ(0,0,r,Z0),x0=!1,r0=new U7,d0=!1,y0=!1,UJ=new QJ,AJ=new f,$J=new NJ,qJ={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},OJ=!1;function ZJ(){return b===null?E0:1}let j=$;function MJ(k,y){return Q.getContext(k,y)}try{let k={alpha:!0,depth:Z,stencil:K,antialias:H,premultipliedAlpha:Y,preserveDrawingBuffer:X,powerPreference:U,failIfMajorPerformanceCaveat:G};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${FZ}`);if(Q.addEventListener("webglcontextlost",D0,!1),Q.addEventListener("webglcontextrestored",_0,!1),Q.addEventListener("webglcontextcreationerror",I0,!1),j===null){if(j=MJ("webgl2",k),j===null)if(MJ("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(k){throw T0("WebGLRenderer: "+k.message),k}let s0,o0,V,D,T,m,e,Q0,Y0,c,o,q0,z0,X0,$0,M0,w0,n0,S,K0,s,W0,O0;function v(){if(s0=new iX(j),s0.init(),s=new y5(j,s0),o0=new pX(j,s0,J,s),V=new j5(j,s0),o0.reversedDepthBuffer&&F)V.buffers.depth.setReversed(!0);p=j.createFramebuffer(),a=j.createFramebuffer(),x=j.createFramebuffer(),D=new rX(j),T=new k5,m=new v5(j,s0,V,T,o0,s,D),e=new sX(z),Q0=new QH(j),W0=new xX(j,Q0),Y0=new oX(j,Q0,D,W0),c=new eX(j,Y0,Q0,W0,D),n0=new tX(j,o0,m),$0=new mX(T),o=new R5(z,e,s0,o0,W0,$0),q0=new x5(z,T),z0=new V5,X0=new P5(s0),w0=new hX(z,e,V,c,E,Y),M0=new S5(z,c,o0),O0=new g5(j,D,o0,V),S=new gX(j,s0,D),K0=new aX(j,s0,D),D.programs=o.programs,z.capabilities=o0,z.extensions=s0,z.properties=T,z.renderLists=z0,z.shadowMap=M0,z.state=V,z.info=D}if(v(),L!==J9)R=new QU(L,Q.width,Q.height,H,Z,K);let n=new JW(z,j);this.xr=n,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){let k=s0.get("WEBGL_lose_context");if(k)k.loseContext()},this.forceContextRestore=function(){let k=s0.get("WEBGL_lose_context");if(k)k.restoreContext()},this.getPixelRatio=function(){return E0},this.setPixelRatio=function(k){if(k===void 0)return;E0=k,this.setSize(r,Z0,!1)},this.getSize=function(k){return k.set(r,Z0)},this.setSize=function(k,y,l=!0){if(n.isPresenting){S0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(r=k,Z0=y,Q.width=Math.floor(k*E0),Q.height=Math.floor(y*E0),l===!0)Q.style.width=k+"px",Q.style.height=y+"px";if(R!==null)R.setSize(Q.width,Q.height);this.setViewport(0,0,k,y)},this.getDrawingBufferSize=function(k){return k.set(r*E0,Z0*E0).floor()},this.setDrawingBufferSize=function(k,y,l){r=k,Z0=y,E0=l,Q.width=Math.floor(k*l),Q.height=Math.floor(y*l),this.setViewport(0,0,k,y)},this.setEffects=function(k){if(L===J9){T0("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(k){for(let y=0;y<k.length;y++)if(k[y].isOutputPass===!0){S0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(k||[])},this.getCurrentViewport=function(k){return k.copy(H0)},this.getViewport=function(k){return k.copy(m0)},this.setViewport=function(k,y,l,h){if(k.isVector4)m0.set(k.x,k.y,k.z,k.w);else m0.set(k,y,l,h);V.viewport(H0.copy(m0).multiplyScalar(E0).round())},this.getScissor=function(k){return k.copy(h0)},this.setScissor=function(k,y,l,h){if(k.isVector4)h0.set(k.x,k.y,k.z,k.w);else h0.set(k,y,l,h);V.scissor(V0.copy(h0).multiplyScalar(E0).round())},this.getScissorTest=function(){return x0},this.setScissorTest=function(k){V.setScissorTest(x0=k)},this.setOpaqueSort=function(k){F0=k},this.setTransparentSort=function(k){P0=k},this.getClearColor=function(k){return k.copy(w0.getClearColor())},this.setClearColor=function(){w0.setClearColor(...arguments)},this.getClearAlpha=function(){return w0.getClearAlpha()},this.setClearAlpha=function(){w0.setClearAlpha(...arguments)},this.clear=function(k=!0,y=!0,l=!0){let h=0;if(k){let g=!1;if(b!==null){let G0=b.texture.format;g=B.has(G0)}if(g){let G0=b.texture.type,L0=q.has(G0),N0=w0.getClearColor(),B0=w0.getClearAlpha(),A0=N0.r,f0=N0.g,l0=N0.b;if(L0)O[0]=A0,O[1]=f0,O[2]=l0,O[3]=B0,j.clearBufferuiv(j.COLOR,0,O);else _[0]=A0,_[1]=f0,_[2]=l0,_[3]=B0,j.clearBufferiv(j.COLOR,0,_)}else h|=j.COLOR_BUFFER_BIT}if(y)h|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(l)h|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(h!==0)j.clear(h)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(k){k.setRenderer(this),P=k},this.dispose=function(){Q.removeEventListener("webglcontextlost",D0,!1),Q.removeEventListener("webglcontextrestored",_0,!1),Q.removeEventListener("webglcontextcreationerror",I0,!1),w0.dispose(),z0.dispose(),X0.dispose(),T.dispose(),e.dispose(),c.dispose(),W0.dispose(),O0.dispose(),o.dispose(),n.dispose(),n.removeEventListener("sessionstart",y$),n.removeEventListener("sessionend",f$),u9.stop()};function D0(k){k.preventDefault(),iQ("WebGLRenderer: Context Lost."),d=!0}function _0(){iQ("WebGLRenderer: Context Restored."),d=!1;let k=D.autoReset,y=M0.enabled,l=M0.autoUpdate,h=M0.needsUpdate,g=M0.type;v(),D.autoReset=k,M0.enabled=y,M0.autoUpdate=l,M0.needsUpdate=h,M0.type=g}function I0(k){T0("WebGLRenderer: A WebGL context could not be created. Reason: ",k.statusMessage)}function PJ(k){let y=k.target;y.removeEventListener("dispose",PJ),O9(y)}function O9(k){XW(k),T.remove(k)}function XW(k){let y=T.get(k).programs;if(y!==void 0){if(y.forEach(function(l){o.releaseProgram(l)}),k.isShaderMaterial)o.releaseShaderCache(k)}}this.renderBufferDirect=function(k,y,l,h,g,G0){if(y===null)y=qJ;let L0=g.isMesh&&g.matrixWorld.determinantAffine()<0,N0=NW(k,y,l,h,g);V.setMaterial(h,L0);let B0=l.index,A0=1;if(h.wireframe===!0){if(B0=Y0.getWireframeAttribute(l),B0===void 0)return;A0=2}let f0=l.drawRange,l0=l.attributes.position,C0=f0.start*A0,JJ=(f0.start+f0.count)*A0;if(G0!==null)C0=Math.max(C0,G0.start*A0),JJ=Math.min(JJ,(G0.start+G0.count)*A0);if(B0!==null)C0=Math.max(C0,0),JJ=Math.min(JJ,B0.count);else if(l0!==void 0&&l0!==null)C0=Math.max(C0,0),JJ=Math.min(JJ,l0.count);let EJ=JJ-C0;if(EJ<0||EJ===1/0)return;W0.setup(g,h,N0,l,B0);let GJ,KJ=S;if(B0!==null)GJ=Q0.get(B0),KJ=K0,KJ.setIndex(GJ);if(g.isMesh)if(h.wireframe===!0)V.setLineWidth(h.wireframeLinewidth*ZJ()),KJ.setMode(j.LINES);else KJ.setMode(j.TRIANGLES);else if(g.isLine){let wJ=h.linewidth;if(wJ===void 0)wJ=1;if(V.setLineWidth(wJ*ZJ()),g.isLineSegments)KJ.setMode(j.LINES);else if(g.isLineLoop)KJ.setMode(j.LINE_LOOP);else KJ.setMode(j.LINE_STRIP)}else if(g.isPoints)KJ.setMode(j.POINTS);else if(g.isSprite)KJ.setMode(j.TRIANGLES);if(g.isBatchedMesh)if(!s0.get("WEBGL_multi_draw")){let{_multiDrawStarts:wJ,_multiDrawCounts:R0,_multiDrawCount:gJ}=g,i0=B0?Q0.get(B0).bytesPerElement:1,dJ=T.get(h).currentProgram.getUniforms();for(let W9=0;W9<gJ;W9++)dJ.setValue(j,"_gl_DrawID",W9),KJ.render(wJ[W9]/i0,R0[W9])}else KJ.renderMultiDraw(g._multiDrawStarts,g._multiDrawCounts,g._multiDrawCount);else if(g.isInstancedMesh)KJ.renderInstances(C0,EJ,g.count);else if(l.isInstancedBufferGeometry){let wJ=l._maxInstanceCount!==void 0?l._maxInstanceCount:1/0,R0=Math.min(l.instanceCount,wJ);KJ.renderInstances(C0,EJ,R0)}else KJ.render(C0,EJ)};function v$(k,y,l){if(k.transparent===!0&&k.side===X9&&k.forceSinglePass===!1)k.side=vJ,k.needsUpdate=!0,M7(k,y,l),k.side=y8,k.needsUpdate=!0,M7(k,y,l),k.side=X9;else M7(k,y,l)}this.compile=function(k,y,l=null){if(l===null)l=k;if(A=X0.get(l),A.init(y),w.push(A),l.traverseVisible(function(g){if(g.isLight&&g.layers.test(y.layers)){if(A.pushLight(g),g.castShadow)A.pushShadow(g)}}),k!==l)k.traverseVisible(function(g){if(g.isLight&&g.layers.test(y.layers)){if(A.pushLight(g),g.castShadow)A.pushShadow(g)}});A.setupLights();let h=new Set;return k.traverse(function(g){if(!(g.isMesh||g.isPoints||g.isLine||g.isSprite))return;let G0=g.material;if(G0)if(Array.isArray(G0))for(let L0=0;L0<G0.length;L0++){let N0=G0[L0];v$(N0,l,g),h.add(N0)}else v$(G0,l,g),h.add(G0)}),A=w.pop(),h},this.compileAsync=function(k,y,l=null){let h=this.compile(k,y,l);return new Promise((g)=>{function G0(){if(h.forEach(function(L0){if(T.get(L0).currentProgram.isReady())h.delete(L0)}),h.size===0){g(k);return}setTimeout(G0,10)}if(s0.get("KHR_parallel_shader_compile")!==null)G0();else setTimeout(G0,10)})};let z6=null;function UW(k){if(z6)z6(k)}function y$(){u9.stop()}function f$(){u9.start()}let u9=new lK;if(u9.setAnimationLoop(UW),typeof self<"u")u9.setContext(self);this.setAnimationLoop=function(k){z6=k,n.setAnimationLoop(k),k===null?u9.stop():u9.start()},n.addEventListener("sessionstart",y$),n.addEventListener("sessionend",f$),this.render=function(k,y){if(y!==void 0&&y.isCamera!==!0){T0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;if(P!==null)P.renderStart(k,y);let l=n.enabled===!0&&n.isPresenting===!0,h=R!==null&&(b===null||l)&&R.begin(z,b);if(k.matrixWorldAutoUpdate===!0)k.updateMatrixWorld();if(y.parent===null&&y.matrixWorldAutoUpdate===!0)y.updateMatrixWorld();if(n.enabled===!0&&n.isPresenting===!0&&(R===null||R.isCompositing()===!1)){if(n.cameraAutoUpdate===!0)n.updateCamera(y);y=n.getCamera()}if(k.isScene===!0)k.onBeforeRender(z,k,y,b);if(A=X0.get(k,w.length),A.init(y),A.state.textureUnits=m.getTextureUnits(),w.push(A),UJ.multiplyMatrices(y.projectionMatrix,y.matrixWorldInverse),r0.setFromProjectionMatrix(UJ,sQ,y.reversedDepth),y0=this.localClippingEnabled,d0=$0.init(this.clippingPlanes,y0),M=z0.get(k,I.length),M.init(),I.push(M),n.enabled===!0&&n.isPresenting===!0){let L0=z.xr.getDepthSensingMesh();if(L0!==null)B6(L0,y,-1/0,z.sortObjects)}if(B6(k,y,0,z.sortObjects),M.finish(),z.sortObjects===!0)M.sort(F0,P0,y.reversedDepth);if(OJ=n.enabled===!1||n.isPresenting===!1||n.hasDepthSensing()===!1,OJ)w0.addToRenderList(M,k);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(d0===!0)$0.beginShadows();let g=A.state.shadowsArray;if(M0.render(g,k,y),d0===!0)$0.endShadows();if((h&&R.hasRenderPass())===!1){let{opaque:L0,transmissive:N0}=M;if(A.setupLights(),y.isArrayCamera){let B0=y.cameras;if(N0.length>0)for(let A0=0,f0=B0.length;A0<f0;A0++){let l0=B0[A0];h$(L0,N0,k,l0)}if(OJ)w0.render(k);for(let A0=0,f0=B0.length;A0<f0;A0++){let l0=B0[A0];b$(M,k,l0,l0.viewport)}}else{if(N0.length>0)h$(L0,N0,k,y);if(OJ)w0.render(k);b$(M,k,y)}}if(b!==null&&i===0)m.updateMultisampleRenderTarget(b),m.updateRenderTargetMipmap(b);if(h)R.end(z);if(k.isScene===!0)k.onAfterRender(z,k,y);if(W0.resetDefaultState(),t=-1,J0=null,w.pop(),w.length>0){if(A=w[w.length-1],m.setTextureUnits(A.state.textureUnits),d0===!0)$0.setGlobalState(z.clippingPlanes,A.state.camera)}else A=null;if(I.pop(),I.length>0)M=I[I.length-1];else M=null;if(P!==null)P.renderEnd()};function B6(k,y,l,h){if(k.visible===!1)return;if(k.layers.test(y.layers)){if(k.isGroup)l=k.renderOrder;else if(k.isLOD){if(k.autoUpdate===!0)k.update(y)}else if(k.isLightProbeGrid)A.pushLightProbeGrid(k);else if(k.isLight){if(A.pushLight(k),k.castShadow)A.pushShadow(k)}else if(k.isSprite){if(!k.frustumCulled||r0.intersectsSprite(k)){if(h)$J.setFromMatrixPosition(k.matrixWorld).applyMatrix4(UJ);let L0=c.update(k),N0=k.material;if(N0.visible)M.push(k,L0,N0,l,$J.z,null)}}else if(k.isMesh||k.isLine||k.isPoints){if(!k.frustumCulled||r0.intersectsObject(k)){let L0=c.update(k),N0=k.material;if(h){if(k.boundingSphere!==void 0){if(k.boundingSphere===null)k.computeBoundingSphere();$J.copy(k.boundingSphere.center)}else{if(L0.boundingSphere===null)L0.computeBoundingSphere();$J.copy(L0.boundingSphere.center)}$J.applyMatrix4(k.matrixWorld).applyMatrix4(UJ)}if(Array.isArray(N0)){let B0=L0.groups;for(let A0=0,f0=B0.length;A0<f0;A0++){let l0=B0[A0],C0=N0[l0.materialIndex];if(C0&&C0.visible)M.push(k,L0,C0,l,$J.z,l0)}}else if(N0.visible)M.push(k,L0,N0,l,$J.z,null)}}}let G0=k.children;for(let L0=0,N0=G0.length;L0<N0;L0++)B6(G0[L0],y,l,h)}function b$(k,y,l,h){let{opaque:g,transmissive:G0,transparent:L0}=k;if(A.setupLightsView(l),d0===!0)$0.setGlobalState(z.clippingPlanes,l);if(h)V.viewport(H0.copy(h));if(g.length>0)V7(g,y,l);if(G0.length>0)V7(G0,y,l);if(L0.length>0)V7(L0,y,l);V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function h$(k,y,l,h){if((l.isScene===!0?l.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[h.id]===void 0){let C0=s0.has("EXT_color_buffer_half_float")||s0.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[h.id]=new nJ(1,1,{generateMipmaps:!0,type:C0?B9:J9,minFilter:t9,samples:Math.max(4,o0.samples),stencilBuffer:K,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:u0.workingColorSpace})}let G0=A.state.transmissionRenderTarget[h.id],L0=h.viewport||H0;G0.setSize(L0.z*z.transmissionResolutionScale,L0.w*z.transmissionResolutionScale);let N0=z.getRenderTarget(),B0=z.getActiveCubeFace(),A0=z.getActiveMipmapLevel();if(z.setRenderTarget(G0),z.getClearColor(a0),t0=z.getClearAlpha(),t0<1)z.setClearColor(16777215,0.5);if(z.clear(),OJ)w0.render(l);let f0=z.toneMapping;z.toneMapping=eJ;let l0=h.viewport;if(h.viewport!==void 0)h.viewport=void 0;if(A.setupLightsView(h),d0===!0)$0.setGlobalState(z.clippingPlanes,h);if(V7(k,l,h),m.updateMultisampleRenderTarget(G0),m.updateRenderTargetMipmap(G0),s0.has("WEBGL_multisampled_render_to_texture")===!1){let C0=!1;for(let JJ=0,EJ=y.length;JJ<EJ;JJ++){let GJ=y[JJ],{object:KJ,geometry:wJ,material:R0,group:gJ}=GJ;if(R0.side===X9&&KJ.layers.test(h.layers)){let i0=R0.side;R0.side=vJ,R0.needsUpdate=!0,x$(KJ,l,h,wJ,R0,gJ),R0.side=i0,R0.needsUpdate=!0,C0=!0}}if(C0===!0)m.updateMultisampleRenderTarget(G0),m.updateRenderTargetMipmap(G0)}if(z.setRenderTarget(N0,B0,A0),z.setClearColor(a0,t0),l0!==void 0)h.viewport=l0;z.toneMapping=f0}function V7(k,y,l){let h=y.isScene===!0?y.overrideMaterial:null;for(let g=0,G0=k.length;g<G0;g++){let L0=k[g],{object:N0,geometry:B0,group:A0}=L0,f0=L0.material;if(f0.allowOverride===!0&&h!==null)f0=h;if(N0.layers.test(l.layers))x$(N0,y,l,B0,f0,A0)}}function x$(k,y,l,h,g,G0){if(k.onBeforeRender(z,y,l,h,g,G0),k.modelViewMatrix.multiplyMatrices(l.matrixWorldInverse,k.matrixWorld),k.normalMatrix.getNormalMatrix(k.modelViewMatrix),g.onBeforeRender(z,y,l,h,k,G0),g.transparent===!0&&g.side===X9&&g.forceSinglePass===!1)g.side=vJ,g.needsUpdate=!0,z.renderBufferDirect(l,y,h,g,k,G0),g.side=y8,g.needsUpdate=!0,z.renderBufferDirect(l,y,h,g,k,G0),g.side=X9;else z.renderBufferDirect(l,y,h,g,k,G0);k.onAfterRender(z,y,l,h,g,G0)}function M7(k,y,l){if(y.isScene!==!0)y=qJ;let h=T.get(k),g=A.state.lights,G0=A.state.shadowsArray,L0=g.state.version,N0=o.getParameters(k,g.state,G0,y,l,A.state.lightProbeGridArray),B0=o.getProgramCacheKey(N0),A0=h.programs;h.environment=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?y.environment:null,h.fog=y.fog;let f0=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap;if(h.envMap=e.get(k.envMap||h.environment,f0),h.envMapRotation=h.environment!==null&&k.envMap===null?y.environmentRotation:k.envMapRotation,A0===void 0)k.addEventListener("dispose",PJ),A0=new Map,h.programs=A0;let l0=A0.get(B0);if(l0!==void 0){if(h.currentProgram===l0&&h.lightsStateVersion===L0)return p$(k,N0),l0}else{if(N0.uniforms=o.getUniforms(k),P!==null&&k.isNodeMaterial)P.build(k,l,N0);k.onBeforeCompile(N0,z),l0=o.acquireProgram(N0,B0),A0.set(B0,l0),h.uniforms=N0.uniforms}let C0=h.uniforms;if(!k.isShaderMaterial&&!k.isRawShaderMaterial||k.clipping===!0)C0.clippingPlanes=$0.uniform;if(p$(k,N0),h.needsLights=FW(k),h.lightsStateVersion=L0,h.needsLights)C0.ambientLightColor.value=g.state.ambient,C0.lightProbe.value=g.state.probe,C0.directionalLights.value=g.state.directional,C0.directionalLightShadows.value=g.state.directionalShadow,C0.spotLights.value=g.state.spot,C0.spotLightShadows.value=g.state.spotShadow,C0.rectAreaLights.value=g.state.rectArea,C0.ltc_1.value=g.state.rectAreaLTC1,C0.ltc_2.value=g.state.rectAreaLTC2,C0.pointLights.value=g.state.point,C0.pointLightShadows.value=g.state.pointShadow,C0.hemisphereLights.value=g.state.hemi,C0.directionalShadowMatrix.value=g.state.directionalShadowMatrix,C0.spotLightMatrix.value=g.state.spotLightMatrix,C0.spotLightMap.value=g.state.spotLightMap,C0.pointShadowMatrix.value=g.state.pointShadowMatrix;return h.lightProbeGrid=A.state.lightProbeGridArray.length>0,h.currentProgram=l0,h.uniformsList=null,l0}function g$(k){if(k.uniformsList===null){let y=k.currentProgram.getUniforms();k.uniformsList=F7.seqWithValue(y.seq,k.uniforms)}return k.uniformsList}function p$(k,y){let l=T.get(k);l.outputColorSpace=y.outputColorSpace,l.batching=y.batching,l.batchingColor=y.batchingColor,l.instancing=y.instancing,l.instancingColor=y.instancingColor,l.instancingMorph=y.instancingMorph,l.skinning=y.skinning,l.morphTargets=y.morphTargets,l.morphNormals=y.morphNormals,l.morphColors=y.morphColors,l.morphTargetsCount=y.morphTargetsCount,l.numClippingPlanes=y.numClippingPlanes,l.numIntersection=y.numClipIntersection,l.vertexAlphas=y.vertexAlphas,l.vertexTangents=y.vertexTangents,l.toneMapping=y.toneMapping}function qW(k,y){if(k.length===0)return null;if(k.length===1)return k[0].texture!==null?k[0]:null;C.setFromMatrixPosition(y.matrixWorld);for(let l=0,h=k.length;l<h;l++){let g=k[l];if(g.texture!==null&&g.boundingBox.containsPoint(C))return g}return null}function NW(k,y,l,h,g){if(y.isScene!==!0)y=qJ;m.resetTextureUnits();let G0=y.fog,L0=h.isMeshStandardMaterial||h.isMeshLambertMaterial||h.isMeshPhongMaterial?y.environment:null,N0=b===null?z.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:u0.workingColorSpace,B0=h.isMeshStandardMaterial||h.isMeshLambertMaterial&&!h.envMap||h.isMeshPhongMaterial&&!h.envMap,A0=e.get(h.envMap||L0,B0),f0=h.vertexColors===!0&&!!l.attributes.color&&l.attributes.color.itemSize===4,l0=!!l.attributes.tangent&&(!!h.normalMap||h.anisotropy>0),C0=!!l.morphAttributes.position,JJ=!!l.morphAttributes.normal,EJ=!!l.morphAttributes.color,GJ=eJ;if(h.toneMapped){if(b===null||b.isXRRenderTarget===!0)GJ=z.toneMapping}let KJ=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,wJ=KJ!==void 0?KJ.length:0,R0=T.get(h),gJ=A.state.lights;if(d0===!0){if(y0===!0||k!==J0){let YJ=k===J0&&h.id===t;$0.setState(h,k,YJ)}}let i0=!1;if(h.version===R0.__version){if(R0.needsLights&&R0.lightsStateVersion!==gJ.state.version)i0=!0;else if(R0.outputColorSpace!==N0)i0=!0;else if(g.isBatchedMesh&&R0.batching===!1)i0=!0;else if(!g.isBatchedMesh&&R0.batching===!0)i0=!0;else if(g.isBatchedMesh&&R0.batchingColor===!0&&g.colorTexture===null)i0=!0;else if(g.isBatchedMesh&&R0.batchingColor===!1&&g.colorTexture!==null)i0=!0;else if(g.isInstancedMesh&&R0.instancing===!1)i0=!0;else if(!g.isInstancedMesh&&R0.instancing===!0)i0=!0;else if(g.isSkinnedMesh&&R0.skinning===!1)i0=!0;else if(!g.isSkinnedMesh&&R0.skinning===!0)i0=!0;else if(g.isInstancedMesh&&R0.instancingColor===!0&&g.instanceColor===null)i0=!0;else if(g.isInstancedMesh&&R0.instancingColor===!1&&g.instanceColor!==null)i0=!0;else if(g.isInstancedMesh&&R0.instancingMorph===!0&&g.morphTexture===null)i0=!0;else if(g.isInstancedMesh&&R0.instancingMorph===!1&&g.morphTexture!==null)i0=!0;else if(R0.envMap!==A0)i0=!0;else if(h.fog===!0&&R0.fog!==G0)i0=!0;else if(R0.numClippingPlanes!==void 0&&(R0.numClippingPlanes!==$0.numPlanes||R0.numIntersection!==$0.numIntersection))i0=!0;else if(R0.vertexAlphas!==f0)i0=!0;else if(R0.vertexTangents!==l0)i0=!0;else if(R0.morphTargets!==C0)i0=!0;else if(R0.morphNormals!==JJ)i0=!0;else if(R0.morphColors!==EJ)i0=!0;else if(R0.toneMapping!==GJ)i0=!0;else if(R0.morphTargetsCount!==wJ)i0=!0;else if(!!R0.lightProbeGrid!==A.state.lightProbeGridArray.length>0)i0=!0}else i0=!0,R0.__version=h.version;let dJ=R0.currentProgram;if(i0===!0){if(dJ=M7(h,y,g),P&&h.isNodeMaterial)P.onUpdateProgram(h,dJ,R0)}let W9=!1,C9=!1,D8=!1,WJ=dJ.getUniforms(),DJ=R0.uniforms;if(V.useProgram(dJ.program))W9=!0,C9=!0,D8=!0;if(h.id!==t)t=h.id,C9=!0;if(R0.needsLights){let YJ=qW(A.state.lightProbeGridArray,g);if(R0.lightProbeGrid!==YJ)R0.lightProbeGrid=YJ,C9=!0}if(W9||J0!==k){if(V.buffers.depth.getReversed()&&k.reversedDepth!==!0)k._reversedDepth=!0,k.updateProjectionMatrix();WJ.setValue(j,"projectionMatrix",k.projectionMatrix),WJ.setValue(j,"viewMatrix",k.matrixWorldInverse);let _9=WJ.map.cameraPosition;if(_9!==void 0)_9.setValue(j,AJ.setFromMatrixPosition(k.matrixWorld));if(o0.logarithmicDepthBuffer)WJ.setValue(j,"logDepthBufFC",2/(Math.log(k.far+1)/Math.LN2));if(h.isMeshPhongMaterial||h.isMeshToonMaterial||h.isMeshLambertMaterial||h.isMeshBasicMaterial||h.isMeshStandardMaterial||h.isShaderMaterial)WJ.setValue(j,"isOrthographic",k.isOrthographicCamera===!0);if(J0!==k)J0=k,C9=!0,D8=!0}if(R0.needsLights){if(gJ.state.directionalShadowMap.length>0)WJ.setValue(j,"directionalShadowMap",gJ.state.directionalShadowMap,m);if(gJ.state.spotShadowMap.length>0)WJ.setValue(j,"spotShadowMap",gJ.state.spotShadowMap,m);if(gJ.state.pointShadowMap.length>0)WJ.setValue(j,"pointShadowMap",gJ.state.pointShadowMap,m)}if(g.isSkinnedMesh){WJ.setOptional(j,g,"bindMatrix"),WJ.setOptional(j,g,"bindMatrixInverse");let YJ=g.skeleton;if(YJ){if(YJ.boneTexture===null)YJ.computeBoneTexture();WJ.setValue(j,"boneTexture",YJ.boneTexture,m)}}if(g.isBatchedMesh){if(WJ.setOptional(j,g,"batchingTexture"),WJ.setValue(j,"batchingTexture",g._matricesTexture,m),WJ.setOptional(j,g,"batchingIdTexture"),WJ.setValue(j,"batchingIdTexture",g._indirectTexture,m),WJ.setOptional(j,g,"batchingColorTexture"),g._colorsTexture!==null)WJ.setValue(j,"batchingColorTexture",g._colorsTexture,m)}let w9=l.morphAttributes;if(w9.position!==void 0||w9.normal!==void 0||w9.color!==void 0)n0.update(g,l,dJ);if(C9||R0.receiveShadow!==g.receiveShadow)R0.receiveShadow=g.receiveShadow,WJ.setValue(j,"receiveShadow",g.receiveShadow);if((h.isMeshStandardMaterial||h.isMeshLambertMaterial||h.isMeshPhongMaterial)&&h.envMap===null&&y.environment!==null)DJ.envMapIntensity.value=y.environmentIntensity;if(DJ.dfgLUT!==void 0)DJ.dfgLUT.value=m5();if(C9){if(WJ.setValue(j,"toneMappingExposure",z.toneMappingExposure),R0.needsLights)GW(DJ,D8);if(G0&&h.fog===!0)q0.refreshFogUniforms(DJ,G0);if(q0.refreshMaterialUniforms(DJ,h,E0,Z0,A.state.transmissionRenderTarget[k.id]),R0.needsLights&&R0.lightProbeGrid){let YJ=R0.lightProbeGrid;DJ.probesSH.value=YJ.texture,DJ.probesMin.value.copy(YJ.boundingBox.min),DJ.probesMax.value.copy(YJ.boundingBox.max),DJ.probesResolution.value.copy(YJ.resolution)}F7.upload(j,g$(R0),DJ,m)}if(h.isShaderMaterial&&h.uniformsNeedUpdate===!0)F7.upload(j,g$(R0),DJ,m),h.uniformsNeedUpdate=!1;if(h.isSpriteMaterial)WJ.setValue(j,"center",g.center);if(WJ.setValue(j,"modelViewMatrix",g.modelViewMatrix),WJ.setValue(j,"normalMatrix",g.normalMatrix),WJ.setValue(j,"modelMatrix",g.matrixWorld),h.uniformsGroups!==void 0){let YJ=h.uniformsGroups;for(let _9=0,R8=YJ.length;_9<R8;_9++){let m$=YJ[_9];O0.update(m$,dJ),O0.bind(m$,dJ)}}return dJ}function GW(k,y){k.ambientLightColor.needsUpdate=y,k.lightProbe.needsUpdate=y,k.directionalLights.needsUpdate=y,k.directionalLightShadows.needsUpdate=y,k.pointLights.needsUpdate=y,k.pointLightShadows.needsUpdate=y,k.spotLights.needsUpdate=y,k.spotLightShadows.needsUpdate=y,k.rectAreaLights.needsUpdate=y,k.hemisphereLights.needsUpdate=y}function FW(k){return k.isMeshLambertMaterial||k.isMeshToonMaterial||k.isMeshPhongMaterial||k.isMeshStandardMaterial||k.isShadowMaterial||k.isShaderMaterial&&k.lights===!0}if(this.getActiveCubeFace=function(){return u},this.getActiveMipmapLevel=function(){return i},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(k,y,l){let h=T.get(k);if(h.__autoAllocateDepthBuffer=k.resolveDepthBuffer===!1,h.__autoAllocateDepthBuffer===!1)h.__useRenderToTexture=!1;T.get(k.texture).__webglTexture=y,T.get(k.depthTexture).__webglTexture=h.__autoAllocateDepthBuffer?void 0:l,h.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(k,y){let l=T.get(k);l.__webglFramebuffer=y,l.__useDefaultFramebuffer=y===void 0},this.setRenderTarget=function(k,y=0,l=0){b=k,u=y,i=l;let h=null,g=!1,G0=!1;if(k){let N0=T.get(k);if(N0.__useDefaultFramebuffer!==void 0){V.bindFramebuffer(j.FRAMEBUFFER,N0.__webglFramebuffer),H0.copy(k.viewport),V0.copy(k.scissor),k0=k.scissorTest,V.viewport(H0),V.scissor(V0),V.setScissorTest(k0),t=-1;return}else if(N0.__webglFramebuffer===void 0)m.setupRenderTarget(k);else if(N0.__hasExternalTextures)m.rebindTextures(k,T.get(k.texture).__webglTexture,T.get(k.depthTexture).__webglTexture);else if(k.depthBuffer){let f0=k.depthTexture;if(N0.__boundDepthTexture!==f0){if(f0!==null&&T.has(f0)&&(k.width!==f0.image.width||k.height!==f0.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");m.setupDepthRenderbuffer(k)}}let B0=k.texture;if(B0.isData3DTexture||B0.isDataArrayTexture||B0.isCompressedArrayTexture)G0=!0;let A0=T.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget){if(Array.isArray(A0[y]))h=A0[y][l];else h=A0[y];g=!0}else if(k.samples>0&&m.useMultisampledRTT(k)===!1)h=T.get(k).__webglMultisampledFramebuffer;else if(Array.isArray(A0))h=A0[l];else h=A0;H0.copy(k.viewport),V0.copy(k.scissor),k0=k.scissorTest}else H0.copy(m0).multiplyScalar(E0).floor(),V0.copy(h0).multiplyScalar(E0).floor(),k0=x0;if(l!==0)h=p;if(V.bindFramebuffer(j.FRAMEBUFFER,h))V.drawBuffers(k,h);if(V.viewport(H0),V.scissor(V0),V.setScissorTest(k0),g){let N0=T.get(k.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+y,N0.__webglTexture,l)}else if(G0){let N0=y;for(let B0=0;B0<k.textures.length;B0++){let A0=T.get(k.textures[B0]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+B0,A0.__webglTexture,l,N0)}}else if(k!==null&&l!==0){let N0=T.get(k.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,N0.__webglTexture,l)}t=-1},this.readRenderTargetPixels=function(k,y,l,h,g,G0,L0,N0=0){if(!(k&&k.isWebGLRenderTarget)){T0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let B0=T.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&L0!==void 0)B0=B0[L0];if(B0){V.bindFramebuffer(j.FRAMEBUFFER,B0);try{let A0=k.textures[N0],f0=A0.format,l0=A0.type;if(k.textures.length>1)j.readBuffer(j.COLOR_ATTACHMENT0+N0);if(!o0.textureFormatReadable(f0)){T0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!o0.textureTypeReadable(l0)){T0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(y>=0&&y<=k.width-h&&(l>=0&&l<=k.height-g))j.readPixels(y,l,h,g,s.convert(f0),s.convert(l0),G0)}finally{let A0=b!==null?T.get(b).__webglFramebuffer:null;V.bindFramebuffer(j.FRAMEBUFFER,A0)}}},this.readRenderTargetPixelsAsync=async function(k,y,l,h,g,G0,L0,N0=0){if(!(k&&k.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let B0=T.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&L0!==void 0)B0=B0[L0];if(B0)if(y>=0&&y<=k.width-h&&(l>=0&&l<=k.height-g)){V.bindFramebuffer(j.FRAMEBUFFER,B0);let A0=k.textures[N0],f0=A0.format,l0=A0.type;if(k.textures.length>1)j.readBuffer(j.COLOR_ATTACHMENT0+N0);if(!o0.textureFormatReadable(f0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!o0.textureTypeReadable(l0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let C0=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,C0),j.bufferData(j.PIXEL_PACK_BUFFER,G0.byteLength,j.STREAM_READ),j.readPixels(y,l,h,g,s.convert(f0),s.convert(l0),0);let JJ=b!==null?T.get(b).__webglFramebuffer:null;V.bindFramebuffer(j.FRAMEBUFFER,JJ);let EJ=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await GK(j,EJ,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,C0),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,G0),j.deleteBuffer(C0),j.deleteSync(EJ),G0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(k,y=null,l=0){let h=Math.pow(2,-l),g=Math.floor(k.image.width*h),G0=Math.floor(k.image.height*h),L0=y!==null?y.x:0,N0=y!==null?y.y:0;m.setTexture2D(k,0),j.copyTexSubImage2D(j.TEXTURE_2D,l,0,0,L0,N0,g,G0),V.unbindTexture()},this.copyTextureToTexture=function(k,y,l=null,h=null,g=0,G0=0){let L0,N0,B0,A0,f0,l0,C0,JJ,EJ,GJ=k.isCompressedTexture?k.mipmaps[G0]:k.image;if(l!==null)L0=l.max.x-l.min.x,N0=l.max.y-l.min.y,B0=l.isBox3?l.max.z-l.min.z:1,A0=l.min.x,f0=l.min.y,l0=l.isBox3?l.min.z:0;else{let DJ=Math.pow(2,-g);if(L0=Math.floor(GJ.width*DJ),N0=Math.floor(GJ.height*DJ),k.isDataArrayTexture)B0=GJ.depth;else if(k.isData3DTexture)B0=Math.floor(GJ.depth*DJ);else B0=1;A0=0,f0=0,l0=0}if(h!==null)C0=h.x,JJ=h.y,EJ=h.z;else C0=0,JJ=0,EJ=0;let KJ=s.convert(y.format),wJ=s.convert(y.type),R0;if(y.isData3DTexture)m.setTexture3D(y,0),R0=j.TEXTURE_3D;else if(y.isDataArrayTexture||y.isCompressedArrayTexture)m.setTexture2DArray(y,0),R0=j.TEXTURE_2D_ARRAY;else m.setTexture2D(y,0),R0=j.TEXTURE_2D;V.activeTexture(j.TEXTURE0),V.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,y.flipY),V.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),V.pixelStorei(j.UNPACK_ALIGNMENT,y.unpackAlignment);let gJ=V.getParameter(j.UNPACK_ROW_LENGTH),i0=V.getParameter(j.UNPACK_IMAGE_HEIGHT),dJ=V.getParameter(j.UNPACK_SKIP_PIXELS),W9=V.getParameter(j.UNPACK_SKIP_ROWS),C9=V.getParameter(j.UNPACK_SKIP_IMAGES);V.pixelStorei(j.UNPACK_ROW_LENGTH,GJ.width),V.pixelStorei(j.UNPACK_IMAGE_HEIGHT,GJ.height),V.pixelStorei(j.UNPACK_SKIP_PIXELS,A0),V.pixelStorei(j.UNPACK_SKIP_ROWS,f0),V.pixelStorei(j.UNPACK_SKIP_IMAGES,l0);let D8=k.isDataArrayTexture||k.isData3DTexture,WJ=y.isDataArrayTexture||y.isData3DTexture;if(k.isDepthTexture){let DJ=T.get(k),w9=T.get(y),YJ=T.get(DJ.__renderTarget),_9=T.get(w9.__renderTarget);V.bindFramebuffer(j.READ_FRAMEBUFFER,YJ.__webglFramebuffer),V.bindFramebuffer(j.DRAW_FRAMEBUFFER,_9.__webglFramebuffer);for(let R8=0;R8<B0;R8++){if(D8)j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,T.get(k).__webglTexture,g,l0+R8),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,T.get(y).__webglTexture,G0,EJ+R8);j.blitFramebuffer(A0,f0,L0,N0,C0,JJ,L0,N0,j.DEPTH_BUFFER_BIT,j.NEAREST)}V.bindFramebuffer(j.READ_FRAMEBUFFER,null),V.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(g!==0||k.isRenderTargetTexture||T.has(k)){let DJ=T.get(k),w9=T.get(y);V.bindFramebuffer(j.READ_FRAMEBUFFER,a),V.bindFramebuffer(j.DRAW_FRAMEBUFFER,x);for(let YJ=0;YJ<B0;YJ++){if(D8)j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,DJ.__webglTexture,g,l0+YJ);else j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,DJ.__webglTexture,g);if(WJ)j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,w9.__webglTexture,G0,EJ+YJ);else j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,w9.__webglTexture,G0);if(g!==0)j.blitFramebuffer(A0,f0,L0,N0,C0,JJ,L0,N0,j.COLOR_BUFFER_BIT,j.NEAREST);else if(WJ)j.copyTexSubImage3D(R0,G0,C0,JJ,EJ+YJ,A0,f0,L0,N0);else j.copyTexSubImage2D(R0,G0,C0,JJ,A0,f0,L0,N0)}V.bindFramebuffer(j.READ_FRAMEBUFFER,null),V.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(WJ)if(k.isDataTexture||k.isData3DTexture)j.texSubImage3D(R0,G0,C0,JJ,EJ,L0,N0,B0,KJ,wJ,GJ.data);else if(y.isCompressedArrayTexture)j.compressedTexSubImage3D(R0,G0,C0,JJ,EJ,L0,N0,B0,KJ,GJ.data);else j.texSubImage3D(R0,G0,C0,JJ,EJ,L0,N0,B0,KJ,wJ,GJ);else if(k.isDataTexture)j.texSubImage2D(j.TEXTURE_2D,G0,C0,JJ,L0,N0,KJ,wJ,GJ.data);else if(k.isCompressedTexture)j.compressedTexSubImage2D(j.TEXTURE_2D,G0,C0,JJ,GJ.width,GJ.height,KJ,GJ.data);else j.texSubImage2D(j.TEXTURE_2D,G0,C0,JJ,L0,N0,KJ,wJ,GJ);if(V.pixelStorei(j.UNPACK_ROW_LENGTH,gJ),V.pixelStorei(j.UNPACK_IMAGE_HEIGHT,i0),V.pixelStorei(j.UNPACK_SKIP_PIXELS,dJ),V.pixelStorei(j.UNPACK_SKIP_ROWS,W9),V.pixelStorei(j.UNPACK_SKIP_IMAGES,C9),G0===0&&y.generateMipmaps)j.generateMipmap(R0);V.unbindTexture()},this.initRenderTarget=function(k){if(T.get(k).__webglFramebuffer===void 0)m.setupRenderTarget(k)},this.initTexture=function(k){if(k.isCubeTexture)m.setTextureCube(k,0);else if(k.isData3DTexture)m.setTexture3D(k,0);else if(k.isDataArrayTexture||k.isCompressedArrayTexture)m.setTexture2DArray(k,0);else m.setTexture2D(k,0);V.unbindTexture()},this.resetState=function(){u=0,i=0,b=null,V.reset(),W0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sQ}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=u0._getDrawingBufferColorSpace(J),Q.unpackColorSpace=u0._getUnpackColorSpace()}}var E7=new f;function oJ(J,Q,$,Z,K,W){let H=2*Math.PI*K/4,Y=Math.max(W-2*K,0),X=Math.PI/4;E7.copy(Q),E7[Z]=0,E7.normalize();let U=0.5*H/(H+Y),G=1-E7.angleTo(J)/X;if(Math.sign(E7[$])===1)return G*U;else return Y/(H+Y)+U+U*(1-G)}class N8 extends FJ{constructor(J=1,Q=1,$=1,Z=2,K=0.1){let W=Z*2+1;K=Math.min(J/2,Q/2,$/2,K);super(1,1,1,W,W,W);if(this.type="RoundedBoxGeometry",this.parameters={width:J,height:Q,depth:$,segments:Z,radius:K},W===1)return;let H=this.toNonIndexed();this.index=null,this.attributes.position=H.attributes.position,this.attributes.normal=H.attributes.normal,this.attributes.uv=H.attributes.uv;let Y=new f,X=new f,U=new f(J,Q,$).divideScalar(2).subScalar(K),G=this.attributes.position.array,F=this.attributes.normal.array,N=this.attributes.uv.array,E=G.length/6,L=new f,B=0.5/W;for(let q=0,O=0;q<G.length;q+=3,O+=2)switch(Y.fromArray(G,q),X.copy(Y),X.x-=Math.sign(X.x)*B,X.y-=Math.sign(X.y)*B,X.z-=Math.sign(X.z)*B,X.normalize(),G[q+0]=U.x*Math.sign(Y.x)+X.x*K,G[q+1]=U.y*Math.sign(Y.y)+X.y*K,G[q+2]=U.z*Math.sign(Y.z)+X.z*K,F[q+0]=X.x,F[q+1]=X.y,F[q+2]=X.z,Math.floor(q/E)){case 0:L.set(1,0,0),N[O+0]=oJ(L,X,"z","y",K,$),N[O+1]=1-oJ(L,X,"y","z",K,Q);break;case 1:L.set(-1,0,0),N[O+0]=1-oJ(L,X,"z","y",K,$),N[O+1]=1-oJ(L,X,"y","z",K,Q);break;case 2:L.set(0,1,0),N[O+0]=1-oJ(L,X,"x","z",K,J),N[O+1]=oJ(L,X,"z","x",K,$);break;case 3:L.set(0,-1,0),N[O+0]=1-oJ(L,X,"x","z",K,J),N[O+1]=1-oJ(L,X,"z","x",K,$);break;case 4:L.set(0,0,1),N[O+0]=1-oJ(L,X,"x","y",K,J),N[O+1]=1-oJ(L,X,"y","x",K,Q);break;case 5:L.set(0,0,-1),N[O+0]=oJ(L,X,"x","y",K,J),N[O+1]=1-oJ(L,X,"y","x",K,Q);break}}static fromJSON(J){return new N8(J.width,J.height,J.depth,J.segments,J.radius)}}class T$ extends x8{constructor(){super();this.name="RoomEnvironment",this.position.y=-3.5;let J=new FJ;J.deleteAttribute("uv");let Q=new Z9({side:vJ}),$=new Z9,Z=new E6(16777215,900,28,2);Z.position.set(0.418,16.199,0.3),this.add(Z);let K=new j0(J,Q);K.position.set(-0.757,13.219,0.717),K.scale.set(31.713,28.305,28.591),this.add(K);let W=new g8(J,$,6),H=new kJ;H.position.set(-10.906,2.009,1.846),H.rotation.set(0,-0.195,0),H.scale.set(2.328,7.905,4.651),H.updateMatrix(),W.setMatrixAt(0,H.matrix),H.position.set(-5.607,-0.754,-0.758),H.rotation.set(0,0.994,0),H.scale.set(1.97,1.534,3.955),H.updateMatrix(),W.setMatrixAt(1,H.matrix),H.position.set(6.167,0.857,7.803),H.rotation.set(0,0.561,0),H.scale.set(3.927,6.285,3.687),H.updateMatrix(),W.setMatrixAt(2,H.matrix),H.position.set(-2.017,0.018,6.124),H.rotation.set(0,0.333,0),H.scale.set(2.002,4.566,2.064),H.updateMatrix(),W.setMatrixAt(3,H.matrix),H.position.set(2.291,-0.756,-2.621),H.rotation.set(0,-0.286,0),H.scale.set(1.546,1.552,1.496),H.updateMatrix(),W.setMatrixAt(4,H.matrix),H.position.set(-2.193,-0.369,-5.547),H.rotation.set(0,0.516,0),H.scale.set(3.875,3.487,2.986),H.updateMatrix(),W.setMatrixAt(5,H.matrix),this.add(W);let Y=new j0(J,d8(50));Y.position.set(-16.116,14.37,8.208),Y.scale.set(0.1,2.428,2.739),this.add(Y);let X=new j0(J,d8(50));X.position.set(-16.109,18.021,-8.207),X.scale.set(0.1,2.425,2.751),this.add(X);let U=new j0(J,d8(17));U.position.set(14.904,12.198,-1.832),U.scale.set(0.15,4.265,6.331),this.add(U);let G=new j0(J,d8(43));G.position.set(-0.462,8.89,14.52),G.scale.set(4.38,5.441,0.088),this.add(G);let F=new j0(J,d8(20));F.position.set(3.235,11.486,-12.541),F.scale.set(2.5,2,0.1),this.add(F);let N=new j0(J,d8(100));N.position.set(0,20,0),N.scale.set(1,0.1,1),this.add(N)}dispose(){let J=new Set;this.traverse((Q)=>{if(Q.isMesh)J.add(Q.geometry),J.add(Q.material)});for(let Q of J)Q.dispose()}}function d8(J){return new G6({color:0,emissive:16777215,emissiveIntensity:J})}var G8=653429,IJ="#09F875",XJ="rgba(9,248,117,0.55)",D7="rgba(9,248,117,0.28)";var j$="#070808",BJ="#F2F4F2",L7="'SF Mono', ui-monospace, Menlo, Consolas, monospace",u8="'Space Grotesk', -apple-system, sans-serif",d9=["HOME","CHAT","SEARCH","X LOOKUP","LEDGER","LANES"],l9=matchMedia("(prefers-reduced-motion: reduce)").matches,$W=null,O8=()=>$W=$W||new(window.AudioContext||window.webkitAudioContext);function K9(J,Q,$,Z=0.045,K="triangle"){let W=O8(),H=W.createOscillator(),Y=W.createGain();H.type=K,H.frequency.value=J,Y.gain.setValueAtTime($,Q),Y.gain.exponentialRampToValueAtTime(0.0001,Q+Z),H.connect(Y),Y.connect(W.destination),H.start(Q),H.stop(Q+Z+0.02)}var fJ={detent(J=0){try{let Q=O8();if(Q.state==="suspended")Q.resume();K9(640+J*46,Q.currentTime+0.01,0.022,0.03)}catch{}},lever(){try{let J=O8();K9(420,J.currentTime+0.01,0.04,0.05),K9(640,J.currentTime+0.06,0.03,0.04)}catch{}},press(){try{let J=O8();K9(120,J.currentTime+0.01,0.09,0.08,"sine"),K9(88,J.currentTime+0.05,0.05,0.09,"sine")}catch{}},ok(){try{let J=O8();K9(660,J.currentTime+0.02,0.05),K9(880,J.currentTime+0.1,0.045)}catch{}},err(){try{let J=O8();K9(220,J.currentTime+0.02,0.05,0.07),K9(180,J.currentTime+0.1,0.05,0.09)}catch{}},dock(){try{let J=O8();K9(240,J.currentTime+0.01,0.05,0.05,"sine"),K9(180,J.currentTime+0.07,0.07,0.06,"sine")}catch{}}};class E8{k;d;v;target;vel=0;constructor(J,Q=120,$=18){this.k=Q;this.d=$;this.v=J,this.target=J}step(J){let Q=-this.k*(this.v-this.target)-this.d*this.vel;return this.vel+=Q*J,this.v+=this.vel*J,this.v}settled(){return Math.abs(this.v-this.target)<0.0001&&Math.abs(this.vel)<0.0001}}var S$=-0.78,ZW=[{x:9.4,y:15.4,w:13.6,h:6.6,r:S$},{x:16.8,y:7.2,w:13.6,h:6.6,r:S$},{x:3.2,y:12,w:2.6,h:24,r:0},{x:19.4,y:20.4,w:11.6,h:4,r:S$}],l5=[{x:12.4,y:15,w:11.4,h:6,r:-0.08},{x:11.6,y:11.8,w:9.2,h:4.2,r:-0.36},{x:5.6,y:13.2,w:2.4,h:9.4,r:0.62},{x:19.6,y:11.2,w:5.4,h:4.6,r:-0.12}],d5=1,R7=(J,Q,$)=>J+(Q-J)*$;var WW=(J)=>J<0.5?2*J*J:1-Math.pow(-2*J+2,2)/2;class HW{state="sleep";t=0;unfold=0;flapRate=0;blinkAt=2.5;hopV=0;hopY=0;tilt=0;set(J){if(this.state===J)return;if(J==="wake"&&this.state!=="sleep")return;if(this.state=J,this.t=0,J==="happy")this.hopV=-46}poke(){if(this.state==="sleep")this.set("wake")}step(J){this.t+=J;let Q=this.state==="sleep"?0:1;if(this.unfold+=(Q-this.unfold)*Math.min(1,J*(this.state==="wake"?7:4)),this.state==="wake"&&this.unfold>0.985)this.set("idle"),this.hopV=-34;if(this.state==="happy"&&this.t>1.5)this.set("idle");if(this.state==="alert"&&this.t>1.1)this.set("idle");if(this.state==="idle"&&this.t>45)this.state="sleep",this.t=0;if(this.hopV+=340*J,this.hopY=Math.max(0,this.hopY-this.hopV*J*0.28),this.hopY===0&&this.hopV>0)this.hopV=0;if(this.state==="happy"&&this.hopY===0&&this.t<1&&this.hopV===0)this.hopV=-40;let $=this.state==="droop"?0.34:0;if(this.tilt+=($-this.tilt)*Math.min(1,J*5),this.t>this.blinkAt)this.blinkAt=this.t+2.5+Math.random()*3.5}wingPhase(J){if(this.state==="work")return Math.sin(J*Math.PI*2*Math.max(2.4,this.flapRate))*0.5;if(this.state==="happy")return Math.sin(J*14)*0.42;if(this.state==="droop")return 0.3;return Math.sin(J*1.7)*0.05}blinking(){return this.state!=="sleep"&&this.t>this.blinkAt-0.09&&this.t<this.blinkAt}draw(J,Q,$,Z,K){let W=Math.floor(K*10)/10,H=WW(Math.min(1,this.unfold)),Y=this.wingPhase(W),X=this.state==="sleep"?1+Math.sin(W*1.2)*0.015:1;J.save(),J.translate(Q+12*Z,$+12*Z+this.hopY*(Z/24)),J.rotate(this.tilt),J.scale(X,X),J.translate(-12*Z,-12*Z);for(let U=0;U<ZW.length;U++){let G=ZW[U],F=l5[U],N=R7(G.r,F.r,H),E=R7(G.x,F.x,H),L=R7(G.y,F.y,H);if(U===d5&&H>0.6)N+=Y*0.7,L-=Y*1.9;let B=R7(G.w,F.w,H),q=R7(G.h,F.h,H);J.save(),J.translate(E*Z,L*Z),J.rotate(N),J.fillStyle=IJ,J.fillRect(-B/2*Z,-q/2*Z,B*Z,q*Z),J.restore()}if(H>0.75){if(J.fillStyle=IJ,J.beginPath(),J.moveTo(22.2*Z,(10.6+this.tilt*2)*Z),J.lineTo(24*Z,(11.4+this.tilt*2)*Z),J.lineTo(22.2*Z,(12.2+this.tilt*2)*Z),J.fill(),!this.blinking())J.fillStyle=j$,J.fillRect(20.2*Z,(10.4+this.tilt*2)*Z,1.3*Z,1.3*Z)}J.restore()}}var F8=1024,k7=640;class YW{canvas=document.createElement("canvas");ctx;tex;vireo=new HW;mode=0;lane="inference";meta=null;history=[];booted=l9;bootT=0;busy=!1;status="";chat=null;search=null;xprof=null;err=null;armed=null;dirty=!0;acc=0;constructor(){this.canvas.width=F8,this.canvas.height=k7,this.ctx=this.canvas.getContext("2d"),this.tex=new p8(this.canvas),this.tex.colorSpace=Z8,this.tex.anisotropy=4}modeName(){return d9[this.mode]}step(J,Q){if(!this.booted){if(this.bootT+=J,this.bootT>1.5)this.booted=!0;this.dirty=!0}if(this.vireo.step(J),this.armed&&Q*1000>this.armed.until)this.armed=null,this.dirty=!0;if(this.chat&&this.chat.shown<this.chat.text.length){let Z=l9?1e9:60;if(this.chat.shown=Math.min(this.chat.text.length,this.chat.shown+Z*J),this.vireo.flapRate=Math.max(2.5,Z/12),this.chat.shown>=this.chat.text.length&&!this.busy)this.vireo.set("idle");this.dirty=!0}this.acc+=J;let $=!this.booted?0.05:0.1;if(this.acc>=$&&(!l9||this.dirty))this.acc=0,this.draw(Q),this.tex.needsUpdate=!0,this.dirty=!1}text(J,Q,$,Z,K=IJ,W=L7,H="500"){this.ctx.fillStyle=K,this.ctx.font=`${H} ${Z}px ${W}`,this.ctx.textBaseline="top",this.ctx.fillText(J,Q,$)}wrap(J,Q){let $=[];for(let Z of J.split(/\n+/)){let K="";for(let W of Z.split(/\s+/))if((K+" "+W).trim().length>Q)$.push(K.trim()),K=W;else K+=" "+W;if(K.trim())$.push(K.trim())}return $}draw(J){let Q=this.ctx;if(Q.fillStyle=j$,Q.fillRect(0,0,F8,k7),!this.booted){let Y=this.bootT,X=Math.min(1,Y/0.55);Q.fillStyle=IJ;let U=[56,30,18];for(let G=0;G<3;G++){let F=-320+(F8+560)*WW(Math.min(1,X*1.3-G*0.09));Q.save(),Q.translate(F,96+G*74),Q.transform(1,0,-0.7,1,0,0),Q.fillRect(0,0,210,U[G]),Q.restore()}if(Y>0.55)this.text("VANTIS WALLET TERMINAL",64,330,40,BJ,u8,"700");if(Y>0.85)this.text("WLT-01 · SESSION OPEN",64,392,22,XJ);if(Y>1.1&&this.meta?.handle)this.text(`CARD DETECTED — @${this.meta.handle}`.toUpperCase(),64,430,22,IJ);return}let $=40;for(let Y=0;Y<d9.length;Y++){let X=Y===this.mode;Q.font=`600 21px ${L7}`;let U=Q.measureText(d9[Y]).width;if(X)Q.fillStyle=IJ,Q.fillRect($-10,26,U+20,36);this.text(d9[Y],$,34,21,X?j$:D7),$+=U+34}let Z=this.meta?`$${(this.meta.main_balance_usd||0).toFixed(2)}`:"$—";Q.font=`600 21px ${L7}`,this.text(`MAIN ${Z}`,F8-40-Q.measureText(`MAIN ${Z}`).width,34,21,XJ),Q.fillStyle=D7,Q.fillRect(40,78,F8-80,2);let K=108,W=this.modeName();if(this.err)this.text("PROBLEM",64,K+8,22,XJ),this.wrap(this.err,52).slice(0,4).forEach((Y,X)=>this.text(Y,64,K+46+X*34,24,BJ));else if(W==="HOME")this.drawHome(K);else if(W==="CHAT")this.drawChat(K);else if(W==="SEARCH")this.drawSearch(K);else if(W==="X LOOKUP")this.drawX(K);else if(W==="LEDGER")this.drawLedger(K);else this.drawLanes(K);Q.fillStyle=D7,Q.fillRect(40,k7-152,F8-80,2),this.vireo.draw(Q,46,k7-150,6.1,J);let H=this.busy?"WORKING…":this.status||"TURN THE KNOB · GREEN KEY FIRES";Q.font=`600 20px ${L7}`,this.text(H,F8-40-Q.measureText(H).width,k7-66,20,this.busy?IJ:XJ)}drawHome(J){let Q=this.meta;this.text("ONE CARD. EVERY RAIL.",64,J+6,22,XJ),this.text(Q?`$${(Q.main_balance_usd||0).toFixed(2)}`:"$—",64,J+44,88,BJ,u8,"700"),this.text("MAIN BALANCE",64,J+150,20,XJ);let $=Q?.lanes?.inference,Z=Q?.lanes?.devtools,K=(W,H,Y,X)=>{this.text(W,460,Y,22,X?IJ:XJ),this.text(`$${H.toFixed(2)}`,700,Y,22,BJ);let U=(Q?.main_balance_usd||0)+($?.balance_usd||0)+(Z?.balance_usd||0),G=U>0?Math.max(4,H/U*280):4;this.ctx.fillStyle=D7,this.ctx.fillRect(460,Y+34,280,8),this.ctx.fillStyle=X?IJ:XJ,this.ctx.fillRect(460,Y+34,G,8)};if($)K("INFERENCE",$.balance_usd,J+44,!0);if(Z)K("DEV TOOLS",Z.balance_usd,J+128,!1);if(Q?.tier)this.text(`TIER ${String(Q.tier).toUpperCase()} · BURNED ${(Q.vantis_burned||0).toFixed(2)} VANTIS`,64,J+196,20,XJ);this.status="GREEN KEY = FUND INFERENCE"}drawChat(J){let Q=this.chat;if(this.armed){this.text("QUOTE",64,J+6,22,XJ),this.text(this.armed.quote,64,J+44,25,BJ),this.text("ARMED — PRESS AGAIN TO FIRE",64,J+100,30,IJ,u8,"700"),this.status="SETTLES FROM REAL USAGE";return}if(!Q){this.text("TEST-FIRE THE RAIL",64,J+6,22,XJ),this.text("DeepSeek V4 Flash. Real call, real cost,",64,J+44,26,BJ),this.text("billed to your Inference lane.",64,J+80,26,BJ),this.text("Type below, then press the green key.",64,J+138,24,XJ),this.status="TYPE A PROMPT · GREEN KEY FIRES";return}this.text("> "+Q.prompt.slice(0,46),64,J+4,22,XJ);let $=Q.text.slice(0,Math.floor(Q.shown)),Z=this.wrap($,62),K=8;if(Z.slice(-K).forEach((W,H)=>this.text(W,64,J+42+H*34,24,BJ)),Q.line&&Q.shown>=Q.text.length)this.text(Q.line,64,J+42+Math.min(Z.length,K)*34+10,20,IJ)}drawSearch(J){let Q=this.search;if(!Q){this.text("WEB SEARCH — EXA CLASS",64,J+6,22,XJ),this.text("One real query against the open web.",64,J+44,26,BJ);let $=this.meta?.tools?.find((Z)=>Z.key==="search");this.text($?`${$.left_today} OF ${$.per_day} ON THE HOUSE TODAY`:"",64,J+100,22,XJ),this.status="TYPE A QUERY · GREEN KEY FIRES";return}this.text("? "+Q.query.slice(0,46),64,J+4,22,XJ),Q.results.slice(0,5).forEach(($,Z)=>{this.text(($.title||"").slice(0,54),64,J+42+Z*62,24,BJ),this.text(($.url||"").replace(/^https?:\/\//,"").slice(0,58),64,J+42+Z*62+28,19,XJ)}),this.text(`${Q.left} LEFT TODAY`,64,J+358,20,IJ)}drawX(J){let Q=this.xprof?.profile;if(!Q){this.text("X PROFILE LOOKUP",64,J+6,22,XJ),this.text("Public metrics for any handle —",64,J+44,26,BJ),this.text("the same read the scoring agent makes.",64,J+80,26,BJ);let Z=this.meta?.tools?.find((K)=>K.key==="x");this.text(Z?.status==="off"?"ROUTE OFFLINE":Z?`${Z.left_today} OF ${Z.per_day} ON THE HOUSE TODAY`:"",64,J+138,22,XJ),this.status="TYPE @HANDLE · GREEN KEY FIRES";return}this.text(`@${Q.handle}`,64,J+4,34,BJ,u8,"700"),this.text(String(Q.name||"").slice(0,40),64,J+50,22,XJ);let $=(Z)=>Z>=1e6?(Z/1e6).toFixed(1)+"M":Z>=1000?(Z/1000).toFixed(1)+"K":String(Z);if(this.text(`${$(Q.followers)} FOLLOWERS · ${$(Q.posts)} POSTS`,64,J+96,26,IJ),Q.created_at)this.text(`SINCE ${String(Q.created_at).slice(0,4)}`,64,J+138,22,XJ);this.wrap(Q.bio||"",58).slice(0,3).forEach((Z,K)=>this.text(Z,64,J+182+K*30,21,BJ))}drawLedger(J){if(this.text("RECENT MOVES",64,J+6,22,XJ),!this.history.length)this.text("Nothing yet — fund a lane, fire a call.",64,J+48,24,BJ);this.history.slice(0,7).forEach((Q,$)=>{let Z=Q.amount_usd>=0?`+$${Q.amount_usd.toFixed(2)}`:`−$${Math.abs(Q.amount_usd).toFixed(2)}`;this.text(Z.padStart(9),64,J+46+$*42,23,Q.amount_usd>=0?IJ:XJ),this.text(String(Q.description||Q.type||"").slice(0,44),220,J+46+$*42,23,BJ)}),this.status="THE FULL LEDGER LIVES IN THE BELL"}drawLanes(J){let Q=this.meta,$=Q?.lanes?.inference,Z=Q?.lanes?.devtools,K=(W,H,Y,X,U,G)=>{let F=this.ctx;F.strokeStyle=X?IJ:D7,F.lineWidth=X?3:2,F.strokeRect(Y,J+10,420,300),this.text(W,Y+28,J+34,24,X?IJ:XJ),this.text(H?`$${H.balance_usd.toFixed(2)}`:"$—",Y+28,J+76,56,BJ,u8,"700"),this.text(H?`SPENT $${H.consumed_usd.toFixed(2)}`:"",Y+28,J+152,20,XJ),this.wrap(G,30).slice(0,3).forEach((N,E)=>this.text(N,Y+28,J+196+E*28,19,U?BJ:XJ))};K("INFERENCE",$,64,this.lane==="inference",!0,"Bills the model rail. Live now."),K("DEV TOOLS",Z,520,this.lane==="devtools",!1,"Metered catalog — routes opening. Fund ahead if you like."),this.status="LEVER PICKS LANE · KEY FUNDS · HOLD = SWEEP"}}function u5(J,Q){let $=document.createElement("canvas");$.width=512,$.height=320;let Z=$.getContext("2d"),K={ink:{top:"#0C0C0B",bottom:"#191917",fg:"#FFFFFF",accent:IJ},carbon:{top:"#151515",bottom:"#2B2B29",fg:"#E8E8E4",accent:IJ},signal:{top:"#0AF77A",bottom:"#05C75F",fg:"#0A0A0A",accent:"#0A0A0A"},mint:{top:"#F2FFF8",bottom:"#BFFADA",fg:"#0A0A0A",accent:"#0B7A3E"},mono:{top:"#FFFFFF",bottom:"#E8E8E2",fg:"#0A0A0A",accent:"#0B7A3E"}},W=K[Q||"ink"]||K.ink,H=Z.createLinearGradient(0,0,512,320);H.addColorStop(0,W.top),H.addColorStop(1,W.bottom),Z.fillStyle=H,Z.fillRect(0,0,512,320),Z.fillStyle=W.accent,Z.fillRect(48,40,14,96),Z.save(),Z.translate(66,118),Z.rotate(-0.78),Z.fillRect(0,-16,118,32),Z.restore(),Z.save(),Z.translate(148,128),Z.rotate(-0.78),Z.fillRect(0,-9,56,18),Z.restore(),Z.font=`700 44px ${u8}`,Z.fillStyle=W.fg,Z.fillText(J?`@${J}`:"VANTIS",44,250),Z.font=`600 20px ${L7}`,Z.fillStyle=W.accent,Z.fillText("VANTIS CARD",46,286);let Y=new p8($);return Y.colorSpace=Z8,Y}function c5(){let J=document.createElement("canvas");J.width=J.height=256;let Q=J.getContext("2d"),$=Q.createRadialGradient(128,128,10,128,128,126);$.addColorStop(0,"rgba(8,10,9,0.5)"),$.addColorStop(0.6,"rgba(8,10,9,0.22)"),$.addColorStop(1,"rgba(8,10,9,0)"),Q.fillStyle=$,Q.fillRect(0,0,256,256);let Z=new p8(J);return Z.colorSpace=Z8,Z}function KW(){let J=document.getElementById("device-stage");if(!J)return;let Q;try{Q=new _$({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{document.body.classList.add("dv-fail");return}Q.setPixelRatio(Math.min(2,devicePixelRatio||1)),Q.outputColorSpace=Z8,Q.toneMapping=Q7,Q.toneMappingExposure=1.12,J.appendChild(Q.domElement),Q.domElement.setAttribute("aria-hidden","true");let $=new x8,Z=new O7(Q);$.environment=Z.fromScene(new T$,0.04).texture;let K=new SJ(30,1,0.1,20);K.position.set(0,0.98,2.9),K.lookAt(0,0.3,0);let W=new H8({color:1118994,roughness:0.52,metalness:0.3,clearcoat:0.28,clearcoatRoughness:0.6,envMapIntensity:0.65}),H=new Z9({color:658186,roughness:0.75,metalness:0.25}),Y=new Z9({color:G8,roughness:0.42,metalness:0,envMapIntensity:0.3,emissive:G8,emissiveIntensity:0.42});Y.toneMapped=!1;let X=new N9({color:G8});X.toneMapped=!1;let U=new b0(1327146),G=new jJ;$.add(G);let F=new jJ,N=new j0(new N8(1.72,0.15,0.86,4,0.045),W);F.add(N),F.position.set(0,0,0.16),F.rotation.x=0.1,G.add(F);let E=new jJ,L=new j0(new N8(1.72,0.82,0.13,4,0.045),W);E.add(L);let B=new j0(new FJ(1.5,0.68,0.02),H);B.position.set(0,0.015,0.062),E.add(B);let q=new YW,O=new j0(new $9(1.42,0.6),new N9({map:q.tex}));O.position.set(0,0.015,0.078),E.add(O);let _=new j0(new $9(1.48,0.66),new H8({color:16777215,transparent:!0,opacity:0.05,roughness:0.12,metalness:0,envMapIntensity:1.6}));_.position.set(0,0.015,0.084),E.add(_),E.position.set(0,0.46,-0.32),E.rotation.x=-0.42,G.add(E);let C=new j0(new FJ(1.66,0.012,0.012),X);C.position.set(0,0.115,-0.3),G.add(C);let M=new jJ,A=new j0(new p9(0.135,0.145,0.1,48),new H8({color:1184787,roughness:0.5,metalness:0.45,clearcoat:0.3,clearcoatRoughness:0.5,envMapIntensity:0.55}));M.add(A);let I=new g8(new FJ(0.012,0.085,0.02),new Z9({color:855565,roughness:0.55,metalness:0.5}),28),w=new kJ;for(let v=0;v<28;v++){let n=v/28*Math.PI*2;w.position.set(Math.cos(n)*0.138,0,Math.sin(n)*0.138),w.rotation.y=-n,w.updateMatrix(),I.setMatrixAt(v,w.matrix)}M.add(I);let R=new j0(new FJ(0.016,0.012,0.09),X);R.position.set(0,0.053,-0.085),M.add(R),M.position.set(0.56,0.13,0.28),F.add(M);let z=new jJ,d=new j0(new N8(0.3,0.075,0.3,3,0.03),Y);z.add(d);let P=new j0(new FJ(0.36,0.02,0.36),H);P.position.y=-0.045,z.add(P),z.position.set(-0.52,0.11,0.3),F.add(z);let p=new jJ,a=new j0(new N8(0.24,0.035,0.1,2,0.015),H);p.add(a);let x=new j0(new p9(0.022,0.028,0.09,16),W);x.position.y=0.05,p.add(x);let u=new j0(new p9(0.034,0.034,0.03,16),Y);u.position.y=0.1,p.add(u),p.position.set(0.05,0.1,0.3),F.add(p);let i=new p9(0.016,0.016,0.02,12),b=new j0(i,new N9({color:G8}));b.position.set(-0.1,0.085,0.3),F.add(b);let t=new j0(i,new N9({color:U}));t.position.set(0.2,0.085,0.3),F.add(t);let J0=new jJ,H0=new j0(new FJ(0.016,0.088,0.008),X);H0.position.set(-0.052,0,0),J0.add(H0);let V0=new j0(new FJ(0.102,0.03,0.008),X);V0.rotation.z=0.78,V0.position.set(-0.006,0,0),J0.add(V0);let k0=new j0(new FJ(0.05,0.018,0.008),X);k0.rotation.z=0.78,k0.position.set(0.052,-0.028,0),J0.add(k0),J0.position.set(0,0.088,0.5),J0.rotation.x=-Math.PI/2+0.1,F.add(J0);let a0=new jJ,t0=new j0(new FJ(0.09,0.03,0.62),H);a0.add(t0);let r=new j0(new FJ(0.094,0.004,0.62),X);r.position.y=0.017,a0.add(r);let Z0=new jJ,E0=new j0(new FJ(0.016,0.54,0.86),new Z9({color:1842716,roughness:0.5,metalness:0.2}));Z0.add(E0);let F0=new H8({roughness:0.38,metalness:0.25,envMapIntensity:0.7}),P0=new j0(new $9(0.86,0.54),F0);P0.rotation.y=Math.PI/2,P0.position.x=0.0085,Z0.add(P0);let m0=new j0(new $9(0.86,0.54),F0);m0.rotation.y=-Math.PI/2,m0.position.x=-0.0085,Z0.add(m0),Z0.rotation.z=-0.06,a0.add(Z0),a0.position.set(0.78,0.05,0.02),a0.rotation.z=0.1,G.add(a0);let h0=new j0(new $9(2.9,1.9),new N9({map:c5(),transparent:!0,depthWrite:!1}));h0.rotation.x=-Math.PI/2,h0.position.y=-0.14,$.add(h0),G.position.y=0.02;let x0=new E8(0,60,14),r0=new E8(0,60,14),d0=new E8(0,170,20),y0=new E8(0,400,24),UJ=new E8(-0.22,240,20),AJ=new E8(l9?0.18:-0.5,90,16),$J={t:0},qJ=(v,n=!1)=>{let D0=(v%d9.length+d9.length)%d9.length;if(D0===q.mode)return;if(q.mode=D0,q.err=null,q.armed=null,q.dirty=!0,d0.target=-D0*(Math.PI*2/8),!n)fJ.detent(D0);q.vireo.poke(),D(),o0(`Mode: ${d9[D0]}`)},OJ=document.getElementById("dv-input-row"),ZJ=document.getElementById("dv-input"),j=document.getElementById("dv-go"),MJ=document.getElementById("dv-alt"),s0=document.getElementById("dv-live"),o0=(v)=>{if(s0)s0.textContent=v},V={CHAT:{ph:"Ask the rail anything…",go:"Fire"},SEARCH:{ph:"Search the open web…",go:"Search"},"X LOOKUP":{ph:"@handle",go:"Look up"}};function D(){let v=q.modeName(),n=V[v];if(OJ)OJ.style.display=n?"flex":"none";if(n&&ZJ)ZJ.placeholder=n.ph;if(n&&j)j.textContent=n.go;if(MJ)if(v==="HOME"||v==="LANES")MJ.style.display="",MJ.textContent=v==="LANES"?"Sweep lane":"Fund lane";else MJ.style.display="none"}async function T(){try{let v=await fetch("/api/playground/meta");if(!v.ok)return;if(q.meta=await v.json(),q.meta?.handle){if(F0.map=u5(q.meta.handle,q.meta.variant),F0.needsUpdate=!0,AJ.target<0.18){if(AJ.target=0.18,!l9)setTimeout(()=>fJ.dock(),380)}}q.dirty=!0}catch{}}async function m(){try{let v=await fetch("/api/credits/history");if(!v.ok)return;let n=await v.json();q.history=n.items||n.transactions||n.rows||[],q.dirty=!0}catch{}}addEventListener("vc-balances",(v)=>{let n=v.detail||{};if(!q.meta)return;let D0=q.meta.main_balance_usd;q.meta.main_balance_usd=n.main??q.meta.main_balance_usd;for(let _0 of n.wallets||[]){let I0=_0.purpose==="inference"?q.meta.lanes?.inference:q.meta.lanes?.devtools;if(I0)I0.balance_usd=_0.balance_usd,I0.consumed_usd=_0.consumed_usd}if(typeof n.main==="number"&&n.main!==D0)q.vireo.set("happy");q.dirty=!0,m()});function e(v){let n=q.meta?.lanes?.[v];return n?{id:n.id,name:v==="inference"?"Inference":"Developer tools"}:null}function Q0(v){let n=e(v);if(!n)return;dispatchEvent(new CustomEvent("vc-device-fund",{detail:n}))}async function Y0(v){let n=e(v);if(!n)return;dispatchEvent(new CustomEvent("vc-device-sweep",{detail:n}))}let c=null,o=!1;function q0(){if(q.busy)return!1;if(V[q.modeName()]&&!(ZJ?.value||"").trim())return ZJ?.focus(),q.vireo.set("alert"),q.dirty=!0,fJ.err(),!1;return!0}async function z0(){if(q.busy)return;let v=q.modeName();if(q.err=null,v==="HOME"){Q0("inference");return}if(v==="LANES"){Q0(q.lane);return}if(v==="LEDGER"){m();return}let n=V[v],D0=(ZJ?.value||"").trim();if(n&&!D0){ZJ?.focus(),q.vireo.set("alert"),fJ.err();return}if(v==="CHAT"&&!q.armed){let I0=(Math.ceil((D0.length+180)/4)*0.14+112.00000000000001)/1e6,PJ=q.meta?.vantis_price_usd?I0/q.meta.vantis_price_usd:null;q.armed={until:performance.now()+3000,quote:`UP TO $${I0.toFixed(6)}${PJ?` · ~${PJ.toFixed(4)} VANTIS`:""} AT LIST`},q.dirty=!0,o0("Armed. Press again to fire.");return}q.armed=null,q.busy=!0,q.vireo.set("work"),q.vireo.flapRate=3,q.dirty=!0;try{if(v==="CHAT"){q.chat={prompt:D0,text:"",shown:0,line:""};let _0=await fetch("/api/playground/fire",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:D0})}),I0=await _0.json();if(!_0.ok){if(q.chat=null,I0.error==="lane_empty")q.err=`Inference lane is empty — it needs about $${(I0.required_usd||0.001).toFixed(4)} for this call. Green key on HOME funds it.`,q.vireo.set("droop");else if(I0.error==="rate_limited")q.err="Easy — a few seconds between fires.",q.vireo.set("alert");else q.err="The rail refused that one. Try again.",q.vireo.set("alert");fJ.err()}else{if(q.chat.text=I0.text||"",q.chat.line=`${(I0.latency_ms/1000).toFixed(1)}s · ${I0.tokens_out} TOK OUT · $${(I0.cost_usd||0).toFixed(6)} → ${(I0.vantis_burned||0).toFixed(4)} VANTIS BURNED`,q.meta?.lanes?.inference)q.meta.lanes.inference.balance_usd=I0.lane_balance_usd;fJ.ok(),o0(`Answer: ${I0.text}`)}}else if(v==="SEARCH"){let _0=await fetch("/api/playground/search",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:D0})}),I0=await _0.json();if(!_0.ok){if(I0.error==="demo_exhausted")q.err="Today's free searches are spent — more tomorrow.";else q.err="Search did not go through.";q.vireo.set("alert"),fJ.err()}else q.search={query:D0,results:I0.results,left:I0.left_today},q.vireo.set("happy"),fJ.ok(),o0(`${I0.results.length} results`)}else if(v==="X LOOKUP"){let _0=await fetch("/api/playground/x",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({handle:D0})}),I0=await _0.json();if(!_0.ok)q.err=I0.error==="demo_exhausted"?"Today's free lookups are spent — more tomorrow.":I0.error==="handle_not_found"?"No such handle — check the spelling.":I0.error==="tool_off"?"This route is offline right now.":"Lookup did not go through.",q.vireo.set("alert"),fJ.err();else q.xprof={profile:I0.profile,left:I0.left_today},q.vireo.set("happy"),fJ.ok(),o0(`@${I0.profile.handle}: ${I0.profile.followers} followers`)}}catch{q.err="Network hiccup — try again.",q.vireo.set("alert"),fJ.err()}finally{if(q.busy=!1,q.vireo.state==="work")q.vireo.set("idle");q.dirty=!0}}let X0=new R6,$0=new g0,M0=null;function w0(v){let n=Q.domElement.getBoundingClientRect();$0.x=(v.clientX-n.left)/n.width*2-1,$0.y=-((v.clientY-n.top)/n.height)*2+1,X0.setFromCamera($0,K);let D0=X0.intersectObjects([A,I,d,a,x,u,P0,m0,E0,O],!1);if(!D0.length)return null;let _0=D0[0].object;if(_0===A||_0===I)return"knob";if(_0===d)return"key";if(_0===a||_0===x||_0===u)return"lever";if(_0===P0||_0===m0||_0===E0)return"card";return"screen"}Q.domElement.addEventListener("pointerdown",(v)=>{let n=w0(v);if(!n)return;if(q.vireo.poke(),n==="knob")M0={x:v.clientX,base:q.mode,acc:0},Q.domElement.setPointerCapture(v.pointerId);else if(n==="key"){if(!q0())return;y0.target=-0.032,fJ.press(),o=!1,c=setTimeout(()=>{if(o=!0,q.modeName()==="LANES")Y0(q.lane)},650)}else if(n==="lever"){if(q.lane=q.lane==="inference"?"devtools":"inference",UJ.target=q.lane==="inference"?-0.22:0.22,fJ.lever(),q.dirty=!0,q.modeName()!=="LANES")qJ(5,!0);o0(`Lane: ${q.lane}`)}else if(n==="card"||n==="screen")qJ(0)}),Q.domElement.addEventListener("pointermove",(v)=>{let n=Q.domElement.getBoundingClientRect(),D0=(v.clientX-n.left)/n.width*2-1,_0=(v.clientY-n.top)/n.height*2-1;if(!l9)r0.target=D0*0.1,x0.target=_0*0.055;if(M0){let I0=v.clientX-M0.x,PJ=Math.round(I0/52);if(PJ!==M0.acc)qJ(M0.base+PJ),M0.acc=PJ}Q.domElement.style.cursor=M0?"grabbing":w0(v)?"pointer":"default"});let n0=(v)=>{if(M0){M0=null;try{Q.domElement.releasePointerCapture(v.pointerId)}catch{}}if(y0.target!==0){if(y0.target=0,clearTimeout(c),!o)z0()}};Q.domElement.addEventListener("pointerup",n0),Q.domElement.addEventListener("pointerleave",(v)=>{if(!M0)x0.target=0,r0.target=0;n0(v)}),Q.domElement.addEventListener("wheel",(v)=>{v.preventDefault(),qJ(q.mode+(v.deltaY>0?1:-1))},{passive:!1});let S=()=>{if(!q0())return;y0.target=-0.032,setTimeout(()=>y0.target=0,130),fJ.press(),z0()};addEventListener("keydown",(v)=>{if(v.target===ZJ){if(v.key==="Enter")v.preventDefault(),S();return}if(v.target?.tagName==="INPUT"||v.target?.tagName==="TEXTAREA")return;if(v.key==="ArrowRight")qJ(q.mode+1);else if(v.key==="ArrowLeft")qJ(q.mode-1);else if(v.key==="Enter")S();else if(v.key.toLowerCase()==="l")q.lane=q.lane==="inference"?"devtools":"inference",UJ.target=q.lane==="inference"?-0.22:0.22,fJ.lever(),q.dirty=!0}),j?.addEventListener("click",S),MJ?.addEventListener("click",()=>{if(q.modeName()==="LANES")Y0(q.lane);else Q0("inference")});function K0(){let v=J.clientWidth,n=Math.max(360,Math.min(640,Math.round(v*0.62)));Q.setSize(v,n),K.aspect=v/n,K.position.z=v<560?3.9:v<760?3.4:3.05,K.updateProjectionMatrix(),q.dirty=!0}new ResizeObserver(K0).observe(J),K0();let s=performance.now(),W0=0;function O0(v){W0=requestAnimationFrame(O0);let n=Math.min(0.25,(v-s)/1000),D0=Math.min(0.05,n);s=v;let _0=v/1000;if($J.t=_0,!l9)G.position.y=0.02+Math.sin(_0*0.9)*0.012,G.rotation.x=x0.step(D0),G.rotation.y=r0.step(D0);M.rotation.y=d0.step(D0),d.position.y=y0.step(D0),x.rotation.z=UJ.step(D0),u.position.x=Math.sin(UJ.v)*0.06,u.rotation.z=UJ.v,Z0.position.y=AJ.step(D0),t.material.color.set(q.lane==="devtools"?G8:1327146),b.material.color.set(q.lane==="inference"?G8:1327146),X.color.setHex(G8).multiplyScalar(q.busy?0.75+Math.sin(_0*9)*0.25:1),q.step(n,_0),Q.render($,K)}if(l9){let v=()=>{q.step(0.03333333333333333,performance.now()/1000),M.rotation.y=d0.target,d.position.y=y0.target,x.rotation.z=UJ.target,Z0.position.y=AJ.target,Q.render($,K)};setInterval(v,250),v()}else W0=requestAnimationFrame(O0),document.addEventListener("visibilitychange",()=>{if(document.hidden)cancelAnimationFrame(W0);else s=performance.now(),W0=requestAnimationFrame(O0)});document.body.classList.add("dv-on"),document.getElementById("dv-console")?.removeAttribute("open"),D(),T().then(m),window.__device={ready:!0,os:q,setMode:(v)=>qJ(v),fire:z0,snapshot:()=>{return Q.render($,K),Q.domElement.toDataURL("image/png")}}}if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",KW);else KW();
