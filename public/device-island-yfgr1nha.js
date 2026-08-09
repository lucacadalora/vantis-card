var FW=Object.create;var{getPrototypeOf:OW,defineProperty:e9,getOwnPropertyNames:S6,getOwnPropertyDescriptor:EW}=Object,S7=Object.prototype.hasOwnProperty;function j7(J){return this[J]}var c5=(J,Q,$)=>{var Z=S6(Q);for(let K of Z)if(!S7.call(J,K)&&K!=="default")e9(J,K,{get:j7.bind(Q,K),enumerable:!0});if($){for(let K of Z)if(!S7.call($,K)&&K!=="default")e9($,K,{get:j7.bind(Q,K),enumerable:!0});return $}},DW,RW,n5=(J,Q,$)=>{var Z=J!=null&&typeof J==="object";if(Z){var K=Q?DW??=new WeakMap:RW??=new WeakMap,W=K.get(J);if(W)return W}$=J!=null?FW(OW(J)):{};let H=Q||!J||!J.__esModule?e9($,"default",{value:J,enumerable:!0}):$;for(let Y of S6(J))if(!S7.call(H,Y))e9(H,Y,{get:j7.bind(J,Y),enumerable:!0});if(Z)K.set(J,H);return H},s5=(J)=>{var Q=(d$??=new WeakMap).get(J),$;if(Q)return Q;if(Q=e9({},"__esModule",{value:!0}),J&&typeof J==="object"||typeof J==="function"){for(var Z of S6(J))if(!S7.call(Q,Z))e9(Q,Z,{get:j7.bind(J,Z),enumerable:!($=EW(J,Z))||$.enumerable})}return d$.set(J,Q),Q},d$,i5=(J,Q)=>()=>(Q||J((Q={exports:{}}).exports,Q),Q.exports);var kW=(J)=>J;function LW(J,Q){this[J]=kW.bind(null,Q)}var o5=(J,Q)=>{for(var $ in Q)e9(J,$,{get:Q[$],enumerable:!0,configurable:!0,set:LW.bind(Q,$)})};var a5=(J,Q)=>()=>(J&&(Q=J(J=0)),Q);var r5=((J)=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(J,{get:(Q,$)=>(typeof require<"u"?require:Q)[$]}):J)(function(J){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+J+'" is not supported')});var OZ="185";var EZ=0,ZQ=1,DZ=2;var X7=1,RZ=2,m8=3,l8=0,xJ=1,D9=2,R9=0,U7=1,KQ=2,WQ=3,HQ=4,kZ=5;var d8=100,LZ=101,VZ=102,MZ=103,zZ=104,BZ=200,IZ=201,AZ=202,PZ=203,CZ=204,_Z=205,wZ=206,TZ=207,SZ=208,jZ=209,yZ=210,vZ=211,fZ=212,bZ=213,hZ=214,xZ=0,gZ=1,pZ=2,YQ=3,mZ=4,lZ=5,dZ=6,uZ=7,cZ=0,nZ=1,sZ=2,Y9=0,XQ=1,UQ=2,qQ=3,q7=4,NQ=5,GQ=6,FQ=7;var u8=301,W8=302,$6=303,Z6=304,N7=306,iZ=1000,K6=1001,oZ=1002,u9=1003,aZ=1004;var G7=1005;var SJ=1006,W6=1007;var H8=1008;var X9=1009,rZ=1010,tZ=1011,F7=1012,OQ=1013,c9=1014,w9=1015,T9=1016,EQ=1017,DQ=1018,c8=1020,eZ=35902,JK=35899,QK=1021,$K=1022,k9=1023,Y8=1026,X8=1027,ZK=1028,RQ=1029,U8=1030,kQ=1031;var LQ=1033,H6=33776,Y6=33777,X6=33778,U6=33779,VQ=35840,MQ=35841,zQ=35842,BQ=35843,IQ=36196,AQ=37492,PQ=37496,CQ=37488,_Q=37489,q6=37490,wQ=37491,TQ=37808,SQ=37809,jQ=37810,yQ=37811,vQ=37812,fQ=37813,bQ=37814,hQ=37815,xQ=37816,gQ=37817,pQ=37818,mQ=37819,lQ=37820,dQ=37821,uQ=36492,cQ=36494,nQ=36495,sQ=36283,iQ=36284,N6=36285,oQ=36286;var aQ=0,KK=1,q8="",N8="srgb",rQ="srgb-linear",tQ="linear",qJ="srgb";var WK=512,HK=513,YK=514,G6=515,XK=516,UK=517,F6=518,qK=519;var eQ="300 es",J$=2000;function VW(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function MW(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function Y7(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function NK(){let J=Y7("canvas");return J.style.display="block",J}var u$={},p8=null;function Q$(...J){let Q="THREE."+J.shift();if(p8)p8("log",Q,...J);else console.log(Q,...J)}function GK(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let $=J[1];if($&&$.isStackTrace)J[0]+=" "+$.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function S0(...J){J=GK(J);let Q="THREE."+J.shift();if(p8)p8("warn",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.warn($.getError(Q));else console.warn(Q,...J)}}function T0(...J){J=GK(J);let Q="THREE."+J.shift();if(p8)p8("error",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.error($.getError(Q));else console.error(Q,...J)}}function K8(...J){let Q=J.join(" ");if(Q in u$)return;u$[Q]=!0,S0(...J)}function FK(J,Q,$){return new Promise(function(Z,K){function W(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:K();break;case J.TIMEOUT_EXPIRED:setTimeout(W,$);break;default:Z()}}setTimeout(W,$)})}var OK={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class S9{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let Z=$[J];if(Z!==void 0){let K=Z.indexOf(Q);if(K!==-1)Z.splice(K,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let Z=$.slice(0);for(let K=0,W=Z.length;K<W;K++)Z[K].call(this,J);J.target=null}}}var vJ=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var j6=Math.PI/180,J6=180/Math.PI;function O7(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(vJ[J&255]+vJ[J>>8&255]+vJ[J>>16&255]+vJ[J>>24&255]+"-"+vJ[Q&255]+vJ[Q>>8&255]+"-"+vJ[Q>>16&15|64]+vJ[Q>>24&255]+"-"+vJ[$&63|128]+vJ[$>>8&255]+"-"+vJ[$>>16&255]+vJ[$>>24&255]+vJ[Z&255]+vJ[Z>>8&255]+vJ[Z>>16&255]+vJ[Z>>24&255]).toLowerCase()}function r0(J,Q,$){return Math.max(Q,Math.min($,J))}function zW(J,Q){return(J%Q+Q)%Q}function y6(J,Q,$){return(1-$)*J+$*Q}function J7(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function mJ(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}class l0{static{l0.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,Z=J.elements;return this.x=Z[0]*Q+Z[3]*$+Z[6],this.y=Z[1]*Q+Z[4]*$+Z[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=r0(this.x,J.x,Q.x),this.y=r0(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=r0(this.x,J,Q),this.y=r0(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(r0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(r0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),K=this.x-J.x,W=this.y-J.y;return this.x=K*$-W*Z+J.x,this.y=K*Z+W*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class j9{constructor(J=0,Q=0,$=0,Z=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=Z}static slerpFlat(J,Q,$,Z,K,W,H){let Y=$[Z+0],X=$[Z+1],U=$[Z+2],G=$[Z+3],F=K[W+0],N=K[W+1],E=K[W+2],L=K[W+3];if(G!==L||Y!==F||X!==N||U!==E){let B=Y*F+X*N+U*E+G*L;if(B<0)F=-F,N=-N,E=-E,L=-L,B=-B;let O=1-H;if(B<0.9995){let q=Math.acos(B),w=Math.sin(q);O=Math.sin(O*q)/w,H=Math.sin(H*q)/w,Y=Y*O+F*H,X=X*O+N*H,U=U*O+E*H,G=G*O+L*H}else{Y=Y*O+F*H,X=X*O+N*H,U=U*O+E*H,G=G*O+L*H;let q=1/Math.sqrt(Y*Y+X*X+U*U+G*G);Y*=q,X*=q,U*=q,G*=q}}J[Q]=Y,J[Q+1]=X,J[Q+2]=U,J[Q+3]=G}static multiplyQuaternionsFlat(J,Q,$,Z,K,W){let H=$[Z],Y=$[Z+1],X=$[Z+2],U=$[Z+3],G=K[W],F=K[W+1],N=K[W+2],E=K[W+3];return J[Q]=H*E+U*G+Y*N-X*F,J[Q+1]=Y*E+U*F+X*G-H*N,J[Q+2]=X*E+U*N+H*F-Y*G,J[Q+3]=U*E-H*G-Y*F-X*N,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,Z){return this._x=J,this._y=Q,this._z=$,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:Z,_z:K,_order:W}=J,H=Math.cos,Y=Math.sin,X=H($/2),U=H(Z/2),G=H(K/2),F=Y($/2),N=Y(Z/2),E=Y(K/2);switch(W){case"XYZ":this._x=F*U*G+X*N*E,this._y=X*N*G-F*U*E,this._z=X*U*E+F*N*G,this._w=X*U*G-F*N*E;break;case"YXZ":this._x=F*U*G+X*N*E,this._y=X*N*G-F*U*E,this._z=X*U*E-F*N*G,this._w=X*U*G+F*N*E;break;case"ZXY":this._x=F*U*G-X*N*E,this._y=X*N*G+F*U*E,this._z=X*U*E+F*N*G,this._w=X*U*G-F*N*E;break;case"ZYX":this._x=F*U*G-X*N*E,this._y=X*N*G+F*U*E,this._z=X*U*E-F*N*G,this._w=X*U*G+F*N*E;break;case"YZX":this._x=F*U*G+X*N*E,this._y=X*N*G+F*U*E,this._z=X*U*E-F*N*G,this._w=X*U*G-F*N*E;break;case"XZY":this._x=F*U*G-X*N*E,this._y=X*N*G-F*U*E,this._z=X*U*E+F*N*G,this._w=X*U*G+F*N*E;break;default:S0("Quaternion: .setFromEuler() encountered an unknown order: "+W)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,Z=Math.sin($);return this._x=J.x*Z,this._y=J.y*Z,this._z=J.z*Z,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],Z=Q[4],K=Q[8],W=Q[1],H=Q[5],Y=Q[9],X=Q[2],U=Q[6],G=Q[10],F=$+H+G;if(F>0){let N=0.5/Math.sqrt(F+1);this._w=0.25/N,this._x=(U-Y)*N,this._y=(K-X)*N,this._z=(W-Z)*N}else if($>H&&$>G){let N=2*Math.sqrt(1+$-H-G);this._w=(U-Y)/N,this._x=0.25*N,this._y=(Z+W)/N,this._z=(K+X)/N}else if(H>G){let N=2*Math.sqrt(1+H-$-G);this._w=(K-X)/N,this._x=(Z+W)/N,this._y=0.25*N,this._z=(Y+U)/N}else{let N=2*Math.sqrt(1+G-$-H);this._w=(W-Z)/N,this._x=(K+X)/N,this._y=(Y+U)/N,this._z=0.25*N}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(r0(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let Z=Math.min(1,Q/$);return this.slerp(J,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:Z,_z:K,_w:W}=J,H=Q._x,Y=Q._y,X=Q._z,U=Q._w;return this._x=$*U+W*H+Z*X-K*Y,this._y=Z*U+W*Y+K*H-$*X,this._z=K*U+W*X+$*Y-Z*H,this._w=W*U-$*H-Z*Y-K*X,this._onChangeCallback(),this}slerp(J,Q){let{_x:$,_y:Z,_z:K,_w:W}=J,H=this.dot(J);if(H<0)$=-$,Z=-Z,K=-K,W=-W,H=-H;let Y=1-Q;if(H<0.9995){let X=Math.acos(H),U=Math.sin(X);Y=Math.sin(Y*X)/U,Q=Math.sin(Q*X)/U,this._x=this._x*Y+$*Q,this._y=this._y*Y+Z*Q,this._z=this._z*Y+K*Q,this._w=this._w*Y+W*Q,this._onChangeCallback()}else this._x=this._x*Y+$*Q,this._y=this._y*Y+Z*Q,this._z=this._z*Y+K*Q,this._w=this._w*Y+W*Q,this.normalize();return this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),Z=Math.sqrt(1-$),K=Math.sqrt($);return this.set(Z*Math.sin(J),Z*Math.cos(J),K*Math.sin(Q),K*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class v{static{v.prototype.isVector3=!0}constructor(J=0,Q=0,$=0){this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(c$.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(c$.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements;return this.x=K[0]*Q+K[3]*$+K[6]*Z,this.y=K[1]*Q+K[4]*$+K[7]*Z,this.z=K[2]*Q+K[5]*$+K[8]*Z,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements,W=1/(K[3]*Q+K[7]*$+K[11]*Z+K[15]);return this.x=(K[0]*Q+K[4]*$+K[8]*Z+K[12])*W,this.y=(K[1]*Q+K[5]*$+K[9]*Z+K[13])*W,this.z=(K[2]*Q+K[6]*$+K[10]*Z+K[14])*W,this}applyQuaternion(J){let Q=this.x,$=this.y,Z=this.z,K=J.x,W=J.y,H=J.z,Y=J.w,X=2*(W*Z-H*$),U=2*(H*Q-K*Z),G=2*(K*$-W*Q);return this.x=Q+Y*X+W*G-H*U,this.y=$+Y*U+H*X-K*G,this.z=Z+Y*G+K*U-W*X,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements;return this.x=K[0]*Q+K[4]*$+K[8]*Z,this.y=K[1]*Q+K[5]*$+K[9]*Z,this.z=K[2]*Q+K[6]*$+K[10]*Z,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=r0(this.x,J.x,Q.x),this.y=r0(this.y,J.y,Q.y),this.z=r0(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=r0(this.x,J,Q),this.y=r0(this.y,J,Q),this.z=r0(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(r0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:Z,z:K}=J,W=Q.x,H=Q.y,Y=Q.z;return this.x=Z*Y-K*H,this.y=K*W-$*Y,this.z=$*H-Z*W,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return v6.copy(this).projectOnVector(J),this.sub(v6)}reflect(J){return this.sub(v6.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(r0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,Z=this.z-J.z;return Q*Q+$*$+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let Z=Math.sin(Q)*J;return this.x=Z*Math.sin($),this.y=Math.cos(Q)*J,this.z=Z*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),Z=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=Z,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var v6=new v,c$=new j9;class y0{static{y0.prototype.isMatrix3=!0}constructor(J,Q,$,Z,K,W,H,Y,X){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,K,W,H,Y,X)}set(J,Q,$,Z,K,W,H,Y,X){let U=this.elements;return U[0]=J,U[1]=Z,U[2]=H,U[3]=Q,U[4]=K,U[5]=Y,U[6]=$,U[7]=W,U[8]=X,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,K=this.elements,W=$[0],H=$[3],Y=$[6],X=$[1],U=$[4],G=$[7],F=$[2],N=$[5],E=$[8],L=Z[0],B=Z[3],O=Z[6],q=Z[1],w=Z[4],C=Z[7],M=Z[2],I=Z[5],A=Z[8];return K[0]=W*L+H*q+Y*M,K[3]=W*B+H*w+Y*I,K[6]=W*O+H*C+Y*A,K[1]=X*L+U*q+G*M,K[4]=X*B+U*w+G*I,K[7]=X*O+U*C+G*A,K[2]=F*L+N*q+E*M,K[5]=F*B+N*w+E*I,K[8]=F*O+N*C+E*A,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],H=J[5],Y=J[6],X=J[7],U=J[8];return Q*W*U-Q*H*X-$*K*U+$*H*Y+Z*K*X-Z*W*Y}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],H=J[5],Y=J[6],X=J[7],U=J[8],G=U*W-H*X,F=H*Y-U*K,N=X*K-W*Y,E=Q*G+$*F+Z*N;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);let L=1/E;return J[0]=G*L,J[1]=(Z*X-U*$)*L,J[2]=(H*$-Z*W)*L,J[3]=F*L,J[4]=(U*Q-Z*Y)*L,J[5]=(Z*K-H*Q)*L,J[6]=N*L,J[7]=($*Y-X*Q)*L,J[8]=(W*Q-$*K)*L,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,Z,K,W,H){let Y=Math.cos(K),X=Math.sin(K);return this.set($*Y,$*X,-$*(Y*W+X*H)+W+J,-Z*X,Z*Y,-Z*(-X*W+Y*H)+H+Q,0,0,1),this}scale(J,Q){return K8("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(f6.makeScale(J,Q)),this}rotate(J){return K8("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(f6.makeRotation(-J)),this}translate(J,Q){return K8("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(f6.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<9;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var f6=new y0,n$=new y0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),s$=new y0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function BW(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(K,W,H){if(this.enabled===!1||W===H||!W||!H)return K;if(this.spaces[W].transfer==="srgb")K.r=_9(K.r),K.g=_9(K.g),K.b=_9(K.b);if(this.spaces[W].primaries!==this.spaces[H].primaries)K.applyMatrix3(this.spaces[W].toXYZ),K.applyMatrix3(this.spaces[H].fromXYZ);if(this.spaces[H].transfer==="srgb")K.r=g8(K.r),K.g=g8(K.g),K.b=g8(K.b);return K},workingToColorSpace:function(K,W){return this.convert(K,this.workingColorSpace,W)},colorSpaceToWorking:function(K,W){return this.convert(K,W,this.workingColorSpace)},getPrimaries:function(K){return this.spaces[K].primaries},getTransfer:function(K){if(K==="")return"linear";return this.spaces[K].transfer},getToneMappingMode:function(K){return this.spaces[K].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(K,W=this.workingColorSpace){return K.fromArray(this.spaces[W].luminanceCoefficients)},define:function(K){Object.assign(this.spaces,K)},_getMatrix:function(K,W,H){return K.copy(this.spaces[W].toXYZ).multiply(this.spaces[H].fromXYZ)},_getDrawingBufferColorSpace:function(K){return this.spaces[K].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(K=this.workingColorSpace){return this.spaces[K].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(K,W){return K8("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(K,W)},toWorkingColorSpace:function(K,W){return K8("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(K,W)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],Z=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:Z,transfer:"linear",toXYZ:n$,fromXYZ:s$,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:Z,transfer:"srgb",toXYZ:n$,fromXYZ:s$,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var i0=BW();function _9(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function g8(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var P8;class $${static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(P8===void 0)P8=Y7("canvas");P8.width=J.width,P8.height=J.height;let Z=P8.getContext("2d");if(J instanceof ImageData)Z.putImageData(J,0,0);else Z.drawImage(J,0,0,J.width,J.height);$=P8}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=Y7("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let Z=$.getImageData(0,0,J.width,J.height),K=Z.data;for(let W=0;W<K.length;W++)K[W]=_9(K[W]/255)*255;return $.putImageData(Z,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(_9(Q[$]/255)*255);else Q[$]=_9(Q[$]);return{data:Q,width:J.width,height:J.height}}else return S0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var IW=0;class E7{constructor(J=null){this.isSource=!0,Object.defineProperty(this,"id",{value:IW++}),this.uuid=O7(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame<"u"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let K;if(Array.isArray(Z)){K=[];for(let W=0,H=Z.length;W<H;W++)if(Z[W].isDataTexture)K.push(b6(Z[W].image));else K.push(b6(Z[W]))}else K=b6(Z);$.url=K}if(!Q)J.images[this.uuid]=$;return $}}function b6(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return $$.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return S0("Texture: Unable to serialize Texture."),{}}var AW=0,h6=new v;class TJ extends S9{constructor(J=TJ.DEFAULT_IMAGE,Q=TJ.DEFAULT_MAPPING,$=1001,Z=1001,K=1006,W=1008,H=1023,Y=1009,X=TJ.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:AW++}),this.uuid=O7(),this.name="",this.source=new E7(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=Z,this.magFilter=K,this.minFilter=W,this.anisotropy=X,this.format=H,this.internalFormat=null,this.type=Y,this.offset=new l0(0,0),this.repeat=new l0(1,1),this.center=new l0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new y0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(h6).x}get height(){return this.source.getSize(h6).y}get depth(){return this.source.getSize(h6).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){S0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){S0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(Z&&$&&(Z.isVector2&&$.isVector2))Z.copy($);else if(Z&&$&&(Z.isVector3&&$.isVector3))Z.copy($);else if(Z&&$&&(Z.isMatrix3&&$.isMatrix3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}TJ.DEFAULT_IMAGE=null;TJ.DEFAULT_MAPPING=300;TJ.DEFAULT_ANISOTROPY=1;class EJ{static{EJ.prototype.isVector4=!0}constructor(J=0,Q=0,$=0,Z=1){this.x=J,this.y=Q,this.z=$,this.w=Z}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,Z){return this.x=J,this.y=Q,this.z=$,this.w=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,K=this.w,W=J.elements;return this.x=W[0]*Q+W[4]*$+W[8]*Z+W[12]*K,this.y=W[1]*Q+W[5]*$+W[9]*Z+W[13]*K,this.z=W[2]*Q+W[6]*$+W[10]*Z+W[14]*K,this.w=W[3]*Q+W[7]*$+W[11]*Z+W[15]*K,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,Z,K,W=0.01,H=0.1,Y=J.elements,X=Y[0],U=Y[4],G=Y[8],F=Y[1],N=Y[5],E=Y[9],L=Y[2],B=Y[6],O=Y[10];if(Math.abs(U-F)<0.01&&Math.abs(G-L)<0.01&&Math.abs(E-B)<0.01){if(Math.abs(U+F)<0.1&&Math.abs(G+L)<0.1&&Math.abs(E+B)<0.1&&Math.abs(X+N+O-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let w=(X+1)/2,C=(N+1)/2,M=(O+1)/2,I=(U+F)/4,A=(G+L)/4,_=(E+B)/4;if(w>C&&w>M)if(w<0.01)$=0,Z=0.707106781,K=0.707106781;else $=Math.sqrt(w),Z=I/$,K=A/$;else if(C>M)if(C<0.01)$=0.707106781,Z=0,K=0.707106781;else Z=Math.sqrt(C),$=I/Z,K=_/Z;else if(M<0.01)$=0.707106781,Z=0.707106781,K=0;else K=Math.sqrt(M),$=A/K,Z=_/K;return this.set($,Z,K,Q),this}let q=Math.sqrt((B-E)*(B-E)+(G-L)*(G-L)+(F-U)*(F-U));if(Math.abs(q)<0.001)q=1;return this.x=(B-E)/q,this.y=(G-L)/q,this.z=(F-U)/q,this.w=Math.acos((X+N+O-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=r0(this.x,J.x,Q.x),this.y=r0(this.y,J.y,Q.y),this.z=r0(this.z,J.z,Q.z),this.w=r0(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=r0(this.x,J,Q),this.y=r0(this.y,J,Q),this.z=r0(this.z,J,Q),this.w=r0(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(r0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Z$ extends S9{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new EJ(0,0,J,Q),this.scissorTest=!1,this.viewport=new EJ(0,0,J,Q),this.textures=[];let Z={width:J,height:Q,depth:$.depth},K=new TJ(Z),W=$.count;for(let H=0;H<W;H++)this.textures[H]=K.clone(),this.textures[H].isRenderTargetTexture=!0,this.textures[H].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview,this.useArrayDepthTexture=$.useArrayDepthTexture}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if(J!==null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let Z=0,K=this.textures.length;Z<K;Z++)if(this.textures[Z].image.width=J,this.textures[Z].image.height=Q,this.textures[Z].image.depth=$,this.textures[Z].isData3DTexture!==!0)this.textures[Z].isArrayTexture=this.textures[Z].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let Z=Object.assign({},J.textures[Q].image);this.textures[Q].source=new E7(Z)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,J.depthTexture!==null)this.depthTexture=J.depthTexture.clone();return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class J9 extends Z${constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class O6 extends TJ{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class K$ extends TJ{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class WJ{static{WJ.prototype.isMatrix4=!0}constructor(J,Q,$,Z,K,W,H,Y,X,U,G,F,N,E,L,B){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,K,W,H,Y,X,U,G,F,N,E,L,B)}set(J,Q,$,Z,K,W,H,Y,X,U,G,F,N,E,L,B){let O=this.elements;return O[0]=J,O[4]=Q,O[8]=$,O[12]=Z,O[1]=K,O[5]=W,O[9]=H,O[13]=Y,O[2]=X,O[6]=U,O[10]=G,O[14]=F,O[3]=N,O[7]=E,O[11]=L,O[15]=B,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new WJ().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){if(this.determinantAffine()===0)return J.set(1,0,0),Q.set(0,1,0),$.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let Q=this.elements,$=J.elements,Z=1/C8.setFromMatrixColumn(J,0).length(),K=1/C8.setFromMatrixColumn(J,1).length(),W=1/C8.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*Z,Q[1]=$[1]*Z,Q[2]=$[2]*Z,Q[3]=0,Q[4]=$[4]*K,Q[5]=$[5]*K,Q[6]=$[6]*K,Q[7]=0,Q[8]=$[8]*W,Q[9]=$[9]*W,Q[10]=$[10]*W,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,Z=J.y,K=J.z,W=Math.cos($),H=Math.sin($),Y=Math.cos(Z),X=Math.sin(Z),U=Math.cos(K),G=Math.sin(K);if(J.order==="XYZ"){let F=W*U,N=W*G,E=H*U,L=H*G;Q[0]=Y*U,Q[4]=-Y*G,Q[8]=X,Q[1]=N+E*X,Q[5]=F-L*X,Q[9]=-H*Y,Q[2]=L-F*X,Q[6]=E+N*X,Q[10]=W*Y}else if(J.order==="YXZ"){let F=Y*U,N=Y*G,E=X*U,L=X*G;Q[0]=F+L*H,Q[4]=E*H-N,Q[8]=W*X,Q[1]=W*G,Q[5]=W*U,Q[9]=-H,Q[2]=N*H-E,Q[6]=L+F*H,Q[10]=W*Y}else if(J.order==="ZXY"){let F=Y*U,N=Y*G,E=X*U,L=X*G;Q[0]=F-L*H,Q[4]=-W*G,Q[8]=E+N*H,Q[1]=N+E*H,Q[5]=W*U,Q[9]=L-F*H,Q[2]=-W*X,Q[6]=H,Q[10]=W*Y}else if(J.order==="ZYX"){let F=W*U,N=W*G,E=H*U,L=H*G;Q[0]=Y*U,Q[4]=E*X-N,Q[8]=F*X+L,Q[1]=Y*G,Q[5]=L*X+F,Q[9]=N*X-E,Q[2]=-X,Q[6]=H*Y,Q[10]=W*Y}else if(J.order==="YZX"){let F=W*Y,N=W*X,E=H*Y,L=H*X;Q[0]=Y*U,Q[4]=L-F*G,Q[8]=E*G+N,Q[1]=G,Q[5]=W*U,Q[9]=-H*U,Q[2]=-X*U,Q[6]=N*G+E,Q[10]=F-L*G}else if(J.order==="XZY"){let F=W*Y,N=W*X,E=H*Y,L=H*X;Q[0]=Y*U,Q[4]=-G,Q[8]=X*U,Q[1]=F*G+L,Q[5]=W*U,Q[9]=N*G-E,Q[2]=E*G-N,Q[6]=H*U,Q[10]=L*G+F}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(PW,J,CW)}lookAt(J,Q,$){let Z=this.elements;if(sJ.subVectors(J,Q),sJ.lengthSq()===0)sJ.z=1;if(sJ.normalize(),x9.crossVectors($,sJ),x9.lengthSq()===0){if(Math.abs($.z)===1)sJ.x+=0.0001;else sJ.z+=0.0001;sJ.normalize(),x9.crossVectors($,sJ)}return x9.normalize(),y7.crossVectors(sJ,x9),Z[0]=x9.x,Z[4]=y7.x,Z[8]=sJ.x,Z[1]=x9.y,Z[5]=y7.y,Z[9]=sJ.y,Z[2]=x9.z,Z[6]=y7.z,Z[10]=sJ.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,K=this.elements,W=$[0],H=$[4],Y=$[8],X=$[12],U=$[1],G=$[5],F=$[9],N=$[13],E=$[2],L=$[6],B=$[10],O=$[14],q=$[3],w=$[7],C=$[11],M=$[15],I=Z[0],A=Z[4],_=Z[8],R=Z[12],z=Z[1],l=Z[5],P=Z[9],g=Z[13],s=Z[2],x=Z[6],u=Z[10],c=Z[14],f=Z[3],t=Z[7],e=Z[11],K0=Z[15];return K[0]=W*I+H*z+Y*s+X*f,K[4]=W*A+H*l+Y*x+X*t,K[8]=W*_+H*P+Y*u+X*e,K[12]=W*R+H*g+Y*c+X*K0,K[1]=U*I+G*z+F*s+N*f,K[5]=U*A+G*l+F*x+N*t,K[9]=U*_+G*P+F*u+N*e,K[13]=U*R+G*g+F*c+N*K0,K[2]=E*I+L*z+B*s+O*f,K[6]=E*A+L*l+B*x+O*t,K[10]=E*_+L*P+B*u+O*e,K[14]=E*R+L*g+B*c+O*K0,K[3]=q*I+w*z+C*s+M*f,K[7]=q*A+w*l+C*x+M*t,K[11]=q*_+w*P+C*u+M*e,K[15]=q*R+w*g+C*c+M*K0,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],K=J[12],W=J[1],H=J[5],Y=J[9],X=J[13],U=J[2],G=J[6],F=J[10],N=J[14],E=J[3],L=J[7],B=J[11],O=J[15],q=Y*N-X*F,w=H*N-X*G,C=H*F-Y*G,M=W*N-X*U,I=W*F-Y*U,A=W*G-H*U;return Q*(L*q-B*w+O*C)-$*(E*q-B*M+O*I)+Z*(E*w-L*M+O*A)-K*(E*C-L*I+B*A)}determinantAffine(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],K=J[1],W=J[5],H=J[9],Y=J[2],X=J[6],U=J[10];return Q*(W*U-H*X)-$*(K*U-H*Y)+Z*(K*X-W*Y)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let Z=this.elements;if(J.isVector3)Z[12]=J.x,Z[13]=J.y,Z[14]=J.z;else Z[12]=J,Z[13]=Q,Z[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],H=J[5],Y=J[6],X=J[7],U=J[8],G=J[9],F=J[10],N=J[11],E=J[12],L=J[13],B=J[14],O=J[15],q=Q*H-$*W,w=Q*Y-Z*W,C=Q*X-K*W,M=$*Y-Z*H,I=$*X-K*H,A=Z*X-K*Y,_=U*L-G*E,R=U*B-F*E,z=U*O-N*E,l=G*B-F*L,P=G*O-N*L,g=F*O-N*B,s=q*g-w*P+C*l+M*z-I*R+A*_;if(s===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let x=1/s;return J[0]=(H*g-Y*P+X*l)*x,J[1]=(Z*P-$*g-K*l)*x,J[2]=(L*A-B*I+O*M)*x,J[3]=(F*I-G*A-N*M)*x,J[4]=(Y*z-W*g-X*R)*x,J[5]=(Q*g-Z*z+K*R)*x,J[6]=(B*C-E*A-O*w)*x,J[7]=(U*A-F*C+N*w)*x,J[8]=(W*P-H*z+X*_)*x,J[9]=($*z-Q*P-K*_)*x,J[10]=(E*I-L*C+O*q)*x,J[11]=(G*C-U*I-N*q)*x,J[12]=(H*R-W*l-Y*_)*x,J[13]=(Q*l-$*R+Z*_)*x,J[14]=(L*w-E*M-B*q)*x,J[15]=(U*M-G*w+F*q)*x,this}scale(J){let Q=this.elements,$=J.x,Z=J.y,K=J.z;return Q[0]*=$,Q[4]*=Z,Q[8]*=K,Q[1]*=$,Q[5]*=Z,Q[9]*=K,Q[2]*=$,Q[6]*=Z,Q[10]*=K,Q[3]*=$,Q[7]*=Z,Q[11]*=K,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Z=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,Z))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),K=1-$,W=J.x,H=J.y,Y=J.z,X=K*W,U=K*H;return this.set(X*W+$,X*H-Z*Y,X*Y+Z*H,0,X*H+Z*Y,U*H+$,U*Y-Z*W,0,X*Y-Z*H,U*Y+Z*W,K*Y*Y+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,Z,K,W){return this.set(1,$,K,0,J,1,W,0,Q,Z,1,0,0,0,0,1),this}compose(J,Q,$){let Z=this.elements,K=Q._x,W=Q._y,H=Q._z,Y=Q._w,X=K+K,U=W+W,G=H+H,F=K*X,N=K*U,E=K*G,L=W*U,B=W*G,O=H*G,q=Y*X,w=Y*U,C=Y*G,M=$.x,I=$.y,A=$.z;return Z[0]=(1-(L+O))*M,Z[1]=(N+C)*M,Z[2]=(E-w)*M,Z[3]=0,Z[4]=(N-C)*I,Z[5]=(1-(F+O))*I,Z[6]=(B+q)*I,Z[7]=0,Z[8]=(E+w)*A,Z[9]=(B-q)*A,Z[10]=(1-(F+L))*A,Z[11]=0,Z[12]=J.x,Z[13]=J.y,Z[14]=J.z,Z[15]=1,this}decompose(J,Q,$){let Z=this.elements;J.x=Z[12],J.y=Z[13],J.z=Z[14];let K=this.determinantAffine();if(K===0)return $.set(1,1,1),Q.identity(),this;let W=C8.set(Z[0],Z[1],Z[2]).length(),H=C8.set(Z[4],Z[5],Z[6]).length(),Y=C8.set(Z[8],Z[9],Z[10]).length();if(K<0)W=-W;K9.copy(this);let X=1/W,U=1/H,G=1/Y;return K9.elements[0]*=X,K9.elements[1]*=X,K9.elements[2]*=X,K9.elements[4]*=U,K9.elements[5]*=U,K9.elements[6]*=U,K9.elements[8]*=G,K9.elements[9]*=G,K9.elements[10]*=G,Q.setFromRotationMatrix(K9),$.x=W,$.y=H,$.z=Y,this}makePerspective(J,Q,$,Z,K,W,H=2000,Y=!1){let X=this.elements,U=2*K/(Q-J),G=2*K/($-Z),F=(Q+J)/(Q-J),N=($+Z)/($-Z),E,L;if(Y)E=K/(W-K),L=W*K/(W-K);else if(H===2000)E=-(W+K)/(W-K),L=-2*W*K/(W-K);else if(H===2001)E=-W/(W-K),L=-W*K/(W-K);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+H);return X[0]=U,X[4]=0,X[8]=F,X[12]=0,X[1]=0,X[5]=G,X[9]=N,X[13]=0,X[2]=0,X[6]=0,X[10]=E,X[14]=L,X[3]=0,X[7]=0,X[11]=-1,X[15]=0,this}makeOrthographic(J,Q,$,Z,K,W,H=2000,Y=!1){let X=this.elements,U=2/(Q-J),G=2/($-Z),F=-(Q+J)/(Q-J),N=-($+Z)/($-Z),E,L;if(Y)E=1/(W-K),L=W/(W-K);else if(H===2000)E=-2/(W-K),L=-(W+K)/(W-K);else if(H===2001)E=-1/(W-K),L=-K/(W-K);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+H);return X[0]=U,X[4]=0,X[8]=0,X[12]=F,X[1]=0,X[5]=G,X[9]=0,X[13]=N,X[2]=0,X[6]=0,X[10]=E,X[14]=L,X[3]=0,X[7]=0,X[11]=0,X[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<16;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var C8=new v,K9=new WJ,PW=new v(0,0,0),CW=new v(1,1,1),x9=new v,y7=new v,sJ=new v,i$=new WJ,o$=new j9;class E9{constructor(J=0,Q=0,$=0,Z=E9.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=Z}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,Z=this._order){return this._x=J,this._y=Q,this._z=$,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let Z=J.elements,K=Z[0],W=Z[4],H=Z[8],Y=Z[1],X=Z[5],U=Z[9],G=Z[2],F=Z[6],N=Z[10];switch(Q){case"XYZ":if(this._y=Math.asin(r0(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(-U,N),this._z=Math.atan2(-W,K);else this._x=Math.atan2(F,X),this._z=0;break;case"YXZ":if(this._x=Math.asin(-r0(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(H,N),this._z=Math.atan2(Y,X);else this._y=Math.atan2(-G,K),this._z=0;break;case"ZXY":if(this._x=Math.asin(r0(F,-1,1)),Math.abs(F)<0.9999999)this._y=Math.atan2(-G,N),this._z=Math.atan2(-W,X);else this._y=0,this._z=Math.atan2(Y,K);break;case"ZYX":if(this._y=Math.asin(-r0(G,-1,1)),Math.abs(G)<0.9999999)this._x=Math.atan2(F,N),this._z=Math.atan2(Y,K);else this._x=0,this._z=Math.atan2(-W,X);break;case"YZX":if(this._z=Math.asin(r0(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,X),this._y=Math.atan2(-G,K);else this._x=0,this._y=Math.atan2(H,N);break;case"XZY":if(this._z=Math.asin(-r0(W,-1,1)),Math.abs(W)<0.9999999)this._x=Math.atan2(F,X),this._y=Math.atan2(H,K);else this._x=Math.atan2(-U,N),this._y=0;break;default:S0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return i$.makeRotationFromQuaternion(J),this.setFromRotationMatrix(i$,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return o$.setFromEuler(this),this.setFromQuaternion(o$,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}E9.DEFAULT_ORDER="XYZ";class D7{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var _W=0,a$=new v,_8=new j9,z9=new WJ,v7=new v,Q7=new v,wW=new v,TW=new j9,r$=new v(1,0,0),t$=new v(0,1,0),e$=new v(0,0,1),JZ={type:"added"},SW={type:"removed"},w8={type:"childadded",child:null},x6={type:"childremoved",child:null};class IJ extends S9{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:_W++}),this.uuid=O7(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=IJ.DEFAULT_UP.clone();let J=new v,Q=new E9,$=new j9,Z=new v(1,1,1);function K(){$.setFromEuler(Q,!1)}function W(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(K),$._onChange(W),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new WJ},normalMatrix:{value:new y0}}),this.matrix=new WJ,this.matrixWorld=new WJ,this.matrixAutoUpdate=IJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=IJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new D7,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return _8.setFromAxisAngle(J,Q),this.quaternion.multiply(_8),this}rotateOnWorldAxis(J,Q){return _8.setFromAxisAngle(J,Q),this.quaternion.premultiply(_8),this}rotateX(J){return this.rotateOnAxis(r$,J)}rotateY(J){return this.rotateOnAxis(t$,J)}rotateZ(J){return this.rotateOnAxis(e$,J)}translateOnAxis(J,Q){return a$.copy(J).applyQuaternion(this.quaternion),this.position.add(a$.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(r$,J)}translateY(J){return this.translateOnAxis(t$,J)}translateZ(J){return this.translateOnAxis(e$,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(z9.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)v7.copy(J);else v7.set(J,Q,$);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),Q7.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)z9.lookAt(Q7,v7,this.up);else z9.lookAt(v7,Q7,this.up);if(this.quaternion.setFromRotationMatrix(z9),Z)z9.extractRotation(Z.matrixWorld),_8.setFromRotationMatrix(z9),this.quaternion.premultiply(_8.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return T0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(JZ),w8.child=J,this.dispatchEvent(w8),w8.child=null;else T0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(SW),x6.child=J,this.dispatchEvent(x6),x6.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),z9.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),z9.multiply(J.parent.matrixWorld);return J.applyMatrix4(z9),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(JZ),w8.child=J,this.dispatchEvent(w8),w8.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,Z=this.children.length;$<Z;$++){let W=this.children[$].getObjectByProperty(J,Q);if(W!==void 0)return W}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let Z=this.children;for(let K=0,W=Z.length;K<W;K++)Z[K].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Q7,J,wW),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Q7,TW,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}traverse(J){J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:$,z:Z}=J,K=this.matrix.elements;K[12]+=Q-K[0]*Q-K[4]*$-K[8]*Z,K[13]+=$-K[1]*Q-K[5]*$-K[9]*Z,K[14]+=Z-K[2]*Q-K[6]*$-K[10]*Z}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q,$=!1){let Z=this.parent;if(J===!0&&Z!==null)Z.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||$){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,$=!0}if(Q===!0){let K=this.children;for(let W=0,H=K.length;W<H;W++)K[W].updateWorldMatrix(!1,!0,$)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,this.name!=="")Z.name=this.name;if(this.castShadow===!0)Z.castShadow=!0;if(this.receiveShadow===!0)Z.receiveShadow=!0;if(this.visible===!1)Z.visible=!1;if(this.frustumCulled===!1)Z.frustumCulled=!1;if(this.renderOrder!==0)Z.renderOrder=this.renderOrder;if(this.static!==!1)Z.static=this.static;if(Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.pivot!==null)Z.pivot=this.pivot.toArray();if(this.matrixAutoUpdate===!1)Z.matrixAutoUpdate=!1;if(this.morphTargetDictionary!==void 0)Z.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)Z.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.geometryInfo=this._geometryInfo.map((H)=>({...H,boundingBox:H.boundingBox?H.boundingBox.toJSON():void 0,boundingSphere:H.boundingSphere?H.boundingSphere.toJSON():void 0})),Z.instanceInfo=this._instanceInfo.map((H)=>({...H})),Z.availableInstanceIds=this._availableInstanceIds.slice(),Z.availableGeometryIds=this._availableGeometryIds.slice(),Z.nextIndexStart=this._nextIndexStart,Z.nextVertexStart=this._nextVertexStart,Z.geometryCount=this._geometryCount,Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.matricesTexture=this._matricesTexture.toJSON(J),Z.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)Z.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)Z.boundingBox=this.boundingBox.toJSON()}function K(H,Y){if(H[Y.uuid]===void 0)H[Y.uuid]=Y.toJSON(J);return Y.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=K(J.geometries,this.geometry);let H=this.geometry.parameters;if(H!==void 0&&H.shapes!==void 0){let Y=H.shapes;if(Array.isArray(Y))for(let X=0,U=Y.length;X<U;X++){let G=Y[X];K(J.shapes,G)}else K(J.shapes,Y)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)K(J.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let H=[];for(let Y=0,X=this.material.length;Y<X;Y++)H.push(K(J.materials,this.material[Y]));Z.material=H}else Z.material=K(J.materials,this.material);if(this.children.length>0){Z.children=[];for(let H=0;H<this.children.length;H++)Z.children.push(this.children[H].toJSON(J).object)}if(this.animations.length>0){Z.animations=[];for(let H=0;H<this.animations.length;H++){let Y=this.animations[H];Z.animations.push(K(J.animations,Y))}}if(Q){let H=W(J.geometries),Y=W(J.materials),X=W(J.textures),U=W(J.images),G=W(J.shapes),F=W(J.skeletons),N=W(J.animations),E=W(J.nodes);if(H.length>0)$.geometries=H;if(Y.length>0)$.materials=Y;if(X.length>0)$.textures=X;if(U.length>0)$.images=U;if(G.length>0)$.shapes=G;if(F.length>0)$.skeletons=F;if(N.length>0)$.animations=N;if(E.length>0)$.nodes=E}return $.object=Z,$;function W(H){let Y=[];for(let X in H){let U=H[X];delete U.metadata,Y.push(U)}return Y}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let Z=J.children[$];this.add(Z.clone())}return this}}IJ.DEFAULT_UP=new v(0,1,0);IJ.DEFAULT_MATRIX_AUTO_UPDATE=!0;IJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class hJ extends IJ{constructor(){super();this.isGroup=!0,this.type="Group"}}var jW={type:"move"};class R7{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new hJ,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new hJ,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new v,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new v;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new hJ,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new v,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new v,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let Z=null,K=null,W=null,H=this._targetRay,Y=this._grip,X=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(X&&J.hand){W=!0;for(let L of J.hand.values()){let B=Q.getJointPose(L,$),O=this._getHandJoint(X,L);if(B!==null)O.matrix.fromArray(B.transform.matrix),O.matrix.decompose(O.position,O.rotation,O.scale),O.matrixWorldNeedsUpdate=!0,O.jointRadius=B.radius;O.visible=B!==null}let U=X.joints["index-finger-tip"],G=X.joints["thumb-tip"],F=U.position.distanceTo(G.position),N=0.02,E=0.005;if(X.inputState.pinching&&F>N+E)X.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!X.inputState.pinching&&F<=N-E)X.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(Y!==null&&J.gripSpace){if(K=Q.getPose(J.gripSpace,$),K!==null){if(Y.matrix.fromArray(K.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,K.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(K.linearVelocity);else Y.hasLinearVelocity=!1;if(K.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(K.angularVelocity);else Y.hasAngularVelocity=!1;if(Y.eventsEnabled)Y.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(H!==null){if(Z=Q.getPose(J.targetRaySpace,$),Z===null&&K!==null)Z=K;if(Z!==null){if(H.matrix.fromArray(Z.transform.matrix),H.matrix.decompose(H.position,H.rotation,H.scale),H.matrixWorldNeedsUpdate=!0,Z.linearVelocity)H.hasLinearVelocity=!0,H.linearVelocity.copy(Z.linearVelocity);else H.hasLinearVelocity=!1;if(Z.angularVelocity)H.hasAngularVelocity=!0,H.angularVelocity.copy(Z.angularVelocity);else H.hasAngularVelocity=!1;this.dispatchEvent(jW)}}}if(H!==null)H.visible=Z!==null;if(Y!==null)Y.visible=K!==null;if(X!==null)X.visible=W!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new hJ;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}var EK={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},g9={h:0,s:0,l:0},f7={h:0,s:0,l:0};function g6(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class d0{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let Z=J;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,i0.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,Z=i0.workingColorSpace){return this.r=J,this.g=Q,this.b=$,i0.colorSpaceToWorking(this,Z),this}setHSL(J,Q,$,Z=i0.workingColorSpace){if(J=zW(J,1),Q=r0(Q,0,1),$=r0($,0,1),Q===0)this.r=this.g=this.b=$;else{let K=$<=0.5?$*(1+Q):$+Q-$*Q,W=2*$-K;this.r=g6(W,K,J+0.3333333333333333),this.g=g6(W,K,J),this.b=g6(W,K,J-0.3333333333333333)}return i0.colorSpaceToWorking(this,Z),this}setStyle(J,Q="srgb"){function $(K){if(K===void 0)return;if(parseFloat(K)<1)S0("Color: Alpha component of "+J+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec(J)){let K,W=Z[1],H=Z[2];switch(W){case"rgb":case"rgba":if(K=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(H))return $(K[4]),this.setRGB(Math.min(255,parseInt(K[1],10))/255,Math.min(255,parseInt(K[2],10))/255,Math.min(255,parseInt(K[3],10))/255,Q);if(K=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(H))return $(K[4]),this.setRGB(Math.min(100,parseInt(K[1],10))/100,Math.min(100,parseInt(K[2],10))/100,Math.min(100,parseInt(K[3],10))/100,Q);break;case"hsl":case"hsla":if(K=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(H))return $(K[4]),this.setHSL(parseFloat(K[1])/360,parseFloat(K[2])/100,parseFloat(K[3])/100,Q);break;default:S0("Color: Unknown color model "+J)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec(J)){let K=Z[1],W=K.length;if(W===3)return this.setRGB(parseInt(K.charAt(0),16)/15,parseInt(K.charAt(1),16)/15,parseInt(K.charAt(2),16)/15,Q);else if(W===6)return this.setHex(parseInt(K,16),Q);else S0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=EK[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else S0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=_9(J.r),this.g=_9(J.g),this.b=_9(J.b),this}copyLinearToSRGB(J){return this.r=g8(J.r),this.g=g8(J.g),this.b=g8(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return i0.workingToColorSpace(fJ.copy(this),J),Math.round(r0(fJ.r*255,0,255))*65536+Math.round(r0(fJ.g*255,0,255))*256+Math.round(r0(fJ.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=i0.workingColorSpace){i0.workingToColorSpace(fJ.copy(this),Q);let{r:$,g:Z,b:K}=fJ,W=Math.max($,Z,K),H=Math.min($,Z,K),Y,X,U=(H+W)/2;if(H===W)Y=0,X=0;else{let G=W-H;switch(X=U<=0.5?G/(W+H):G/(2-W-H),W){case $:Y=(Z-K)/G+(Z<K?6:0);break;case Z:Y=(K-$)/G+2;break;case K:Y=($-Z)/G+4;break}Y/=6}return J.h=Y,J.s=X,J.l=U,J}getRGB(J,Q=i0.workingColorSpace){return i0.workingToColorSpace(fJ.copy(this),Q),J.r=fJ.r,J.g=fJ.g,J.b=fJ.b,J}getStyle(J="srgb"){i0.workingToColorSpace(fJ.copy(this),J);let{r:Q,g:$,b:Z}=fJ;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(Z*255)})`}offsetHSL(J,Q,$){return this.getHSL(g9),this.setHSL(g9.h+J,g9.s+Q,g9.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(g9),J.getHSL(f7);let $=y6(g9.h,f7.h,Q),Z=y6(g9.s,f7.s,Q),K=y6(g9.l,f7.l,Q);return this.setHSL($,Z,K),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,Z=this.b,K=J.elements;return this.r=K[0]*Q+K[3]*$+K[6]*Z,this.g=K[1]*Q+K[4]*$+K[7]*Z,this.b=K[2]*Q+K[5]*$+K[8]*Z,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var fJ=new d0;d0.NAMES=EK;class n8 extends IJ{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new E9,this.environmentIntensity=1,this.environmentRotation=new E9,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)Q.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)Q.object.backgroundIntensity=this.backgroundIntensity;if(Q.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)Q.object.environmentIntensity=this.environmentIntensity;return Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var W9=new v,B9=new v,p6=new v,I9=new v,T8=new v,S8=new v,QZ=new v,m6=new v,l6=new v,d6=new v,u6=new EJ,c6=new EJ,n6=new EJ;class eJ{constructor(J=new v,Q=new v,$=new v){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,Z){Z.subVectors($,Q),W9.subVectors(J,Q),Z.cross(W9);let K=Z.lengthSq();if(K>0)return Z.multiplyScalar(1/Math.sqrt(K));return Z.set(0,0,0)}static getBarycoord(J,Q,$,Z,K){W9.subVectors(Z,Q),B9.subVectors($,Q),p6.subVectors(J,Q);let W=W9.dot(W9),H=W9.dot(B9),Y=W9.dot(p6),X=B9.dot(B9),U=B9.dot(p6),G=W*X-H*H;if(G===0)return K.set(0,0,0),null;let F=1/G,N=(X*Y-H*U)*F,E=(W*U-H*Y)*F;return K.set(1-N-E,E,N)}static containsPoint(J,Q,$,Z){if(this.getBarycoord(J,Q,$,Z,I9)===null)return!1;return I9.x>=0&&I9.y>=0&&I9.x+I9.y<=1}static getInterpolation(J,Q,$,Z,K,W,H,Y){if(this.getBarycoord(J,Q,$,Z,I9)===null){if(Y.x=0,Y.y=0,"z"in Y)Y.z=0;if("w"in Y)Y.w=0;return null}return Y.setScalar(0),Y.addScaledVector(K,I9.x),Y.addScaledVector(W,I9.y),Y.addScaledVector(H,I9.z),Y}static getInterpolatedAttribute(J,Q,$,Z,K,W){return u6.setScalar(0),c6.setScalar(0),n6.setScalar(0),u6.fromBufferAttribute(J,Q),c6.fromBufferAttribute(J,$),n6.fromBufferAttribute(J,Z),W.setScalar(0),W.addScaledVector(u6,K.x),W.addScaledVector(c6,K.y),W.addScaledVector(n6,K.z),W}static isFrontFacing(J,Q,$,Z){return W9.subVectors($,Q),B9.subVectors(J,Q),W9.cross(B9).dot(Z)<0}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,Z){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[Z]),this}setFromAttributeAndIndices(J,Q,$,Z){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,Z),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return W9.subVectors(this.c,this.b),B9.subVectors(this.a,this.b),W9.cross(B9).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return eJ.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return eJ.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,Z,K){return eJ.getInterpolation(J,this.a,this.b,this.c,Q,$,Z,K)}containsPoint(J){return eJ.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return eJ.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,Z=this.b,K=this.c,W,H;T8.subVectors(Z,$),S8.subVectors(K,$),m6.subVectors(J,$);let Y=T8.dot(m6),X=S8.dot(m6);if(Y<=0&&X<=0)return Q.copy($);l6.subVectors(J,Z);let U=T8.dot(l6),G=S8.dot(l6);if(U>=0&&G<=U)return Q.copy(Z);let F=Y*G-U*X;if(F<=0&&Y>=0&&U<=0)return W=Y/(Y-U),Q.copy($).addScaledVector(T8,W);d6.subVectors(J,K);let N=T8.dot(d6),E=S8.dot(d6);if(E>=0&&N<=E)return Q.copy(K);let L=N*X-Y*E;if(L<=0&&X>=0&&E<=0)return H=X/(X-E),Q.copy($).addScaledVector(S8,H);let B=U*E-N*G;if(B<=0&&G-U>=0&&N-E>=0)return QZ.subVectors(K,Z),H=(G-U)/(G-U+(N-E)),Q.copy(Z).addScaledVector(QZ,H);let O=1/(B+L+F);return W=L*O,H=F*O,Q.copy($).addScaledVector(T8,W).addScaledVector(S8,H)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class y9{constructor(J=new v(1/0,1/0,1/0),Q=new v(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(H9.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(H9.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=H9.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let K=$.getAttribute("position");if(Q===!0&&K!==void 0&&J.isInstancedMesh!==!0)for(let W=0,H=K.count;W<H;W++){if(J.isMesh===!0)J.getVertexPosition(W,H9);else H9.fromBufferAttribute(K,W);H9.applyMatrix4(J.matrixWorld),this.expandByPoint(H9)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();b7.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();b7.copy($.boundingBox)}b7.applyMatrix4(J.matrixWorld),this.union(b7)}}let Z=J.children;for(let K=0,W=Z.length;K<W;K++)this.expandByObject(Z[K],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,H9),H9.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter($7),h7.subVectors(this.max,$7),j8.subVectors(J.a,$7),y8.subVectors(J.b,$7),v8.subVectors(J.c,$7),p9.subVectors(y8,j8),m9.subVectors(v8,y8),J8.subVectors(j8,v8);let Q=[0,-p9.z,p9.y,0,-m9.z,m9.y,0,-J8.z,J8.y,p9.z,0,-p9.x,m9.z,0,-m9.x,J8.z,0,-J8.x,-p9.y,p9.x,0,-m9.y,m9.x,0,-J8.y,J8.x,0];if(!s6(Q,j8,y8,v8,h7))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!s6(Q,j8,y8,v8,h7))return!1;return x7.crossVectors(p9,m9),Q=[x7.x,x7.y,x7.z],s6(Q,j8,y8,v8,h7)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,H9).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(H9).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return A9[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),A9[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),A9[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),A9[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),A9[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),A9[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),A9[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),A9[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(A9),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var A9=[new v,new v,new v,new v,new v,new v,new v,new v],H9=new v,b7=new y9,j8=new v,y8=new v,v8=new v,p9=new v,m9=new v,J8=new v,$7=new v,h7=new v,x7=new v,Q8=new v;function s6(J,Q,$,Z,K){for(let W=0,H=J.length-3;W<=H;W+=3){Q8.fromArray(J,W);let Y=K.x*Math.abs(Q8.x)+K.y*Math.abs(Q8.y)+K.z*Math.abs(Q8.z),X=Q.dot(Q8),U=$.dot(Q8),G=Z.dot(Q8);if(Math.max(-Math.max(X,U,G),Math.min(X,U,G))>Y)return!1}return!0}var zJ=new v,g7=new l0,yW=0;class oJ extends S9{constructor(J,Q,$=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yW++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let Z=0,K=this.itemSize;Z<K;Z++)this.array[J+Z]=Q.array[$+Z];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)g7.fromBufferAttribute(this,Q),g7.applyMatrix3(J),this.setXY(Q,g7.x,g7.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)zJ.fromBufferAttribute(this,Q),zJ.applyMatrix3(J),this.setXYZ(Q,zJ.x,zJ.y,zJ.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)zJ.fromBufferAttribute(this,Q),zJ.applyMatrix4(J),this.setXYZ(Q,zJ.x,zJ.y,zJ.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)zJ.fromBufferAttribute(this,Q),zJ.applyNormalMatrix(J),this.setXYZ(Q,zJ.x,zJ.y,zJ.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)zJ.fromBufferAttribute(this,Q),zJ.transformDirection(J),this.setXYZ(Q,zJ.x,zJ.y,zJ.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=J7($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=mJ($,this.array);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=J7(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=mJ(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=J7(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=mJ(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=J7(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=mJ(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=J7(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=mJ(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=mJ(Q,this.array),$=mJ($,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J*=this.itemSize,this.normalized)Q=mJ(Q,this.array),$=mJ($,this.array),Z=mJ(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this}setXYZW(J,Q,$,Z,K){if(J*=this.itemSize,this.normalized)Q=mJ(Q,this.array),$=mJ($,this.array),Z=mJ(Z,this.array),K=mJ(K,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this.array[J+3]=K,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")J.name=this.name;if(this.usage!==35044)J.usage=this.usage;return J}dispose(){this.dispatchEvent({type:"dispose"})}}class E6 extends oJ{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class D6 extends oJ{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class lJ extends oJ{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var vW=new y9,Z7=new v,i6=new v;class G8{constructor(J=new v,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else vW.setFromPoints(J).getCenter($);let Z=0;for(let K=0,W=J.length;K<W;K++)Z=Math.max(Z,$.distanceToSquared(J[K]));return this.radius=Math.sqrt(Z),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;Z7.subVectors(J,this.center);let Q=Z7.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),Z=($-this.radius)*0.5;this.center.addScaledVector(Z7,Z/$),this.radius+=Z}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else i6.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(Z7.copy(J.center).add(i6)),this.expandByPoint(Z7.copy(J.center).sub(i6));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var fW=0,tJ=new WJ,o6=new IJ,f8=new v,iJ=new y9,K7=new y9,CJ=new v;class U9 extends S9{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fW++}),this.uuid=O7(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((VW(J))?D6:E6)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let K=new y0().getNormalMatrix(J);$.applyNormalMatrix(K),$.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection(J),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return tJ.makeRotationFromQuaternion(J),this.applyMatrix4(tJ),this}rotateX(J){return tJ.makeRotationX(J),this.applyMatrix4(tJ),this}rotateY(J){return tJ.makeRotationY(J),this.applyMatrix4(tJ),this}rotateZ(J){return tJ.makeRotationZ(J),this.applyMatrix4(tJ),this}translate(J,Q,$){return tJ.makeTranslation(J,Q,$),this.applyMatrix4(tJ),this}scale(J,Q,$){return tJ.makeScale(J,Q,$),this.applyMatrix4(tJ),this}lookAt(J){return o6.lookAt(J),o6.updateMatrix(),this.applyMatrix4(o6.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(f8).negate(),this.translate(f8.x,f8.y,f8.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let Z=0,K=J.length;Z<K;Z++){let W=J[Z];$.push(W.x,W.y,W.z||0)}this.setAttribute("position",new lJ($,3))}else{let $=Math.min(J.length,Q.count);for(let Z=0;Z<$;Z++){let K=J[Z];Q.setXYZ(Z,K.x,K.y,K.z||0)}if(J.length>Q.count)S0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new y9;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){T0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new v(-1/0,-1/0,-1/0),new v(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,Z=Q.length;$<Z;$++){let K=Q[$];if(iJ.setFromBufferAttribute(K),this.morphTargetsRelative)CJ.addVectors(this.boundingBox.min,iJ.min),this.boundingBox.expandByPoint(CJ),CJ.addVectors(this.boundingBox.max,iJ.max),this.boundingBox.expandByPoint(CJ);else this.boundingBox.expandByPoint(iJ.min),this.boundingBox.expandByPoint(iJ.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))T0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new G8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){T0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new v,1/0);return}if(J){let $=this.boundingSphere.center;if(iJ.setFromBufferAttribute(J),Q)for(let K=0,W=Q.length;K<W;K++){let H=Q[K];if(K7.setFromBufferAttribute(H),this.morphTargetsRelative)CJ.addVectors(iJ.min,K7.min),iJ.expandByPoint(CJ),CJ.addVectors(iJ.max,K7.max),iJ.expandByPoint(CJ);else iJ.expandByPoint(K7.min),iJ.expandByPoint(K7.max)}iJ.getCenter($);let Z=0;for(let K=0,W=J.count;K<W;K++)CJ.fromBufferAttribute(J,K),Z=Math.max(Z,$.distanceToSquared(CJ));if(Q)for(let K=0,W=Q.length;K<W;K++){let H=Q[K],Y=this.morphTargetsRelative;for(let X=0,U=H.count;X<U;X++){if(CJ.fromBufferAttribute(H,X),Y)f8.fromBufferAttribute(J,X),CJ.add(f8);Z=Math.max(Z,$.distanceToSquared(CJ))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))T0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){T0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:Z,uv:K}=Q,W=this.getAttribute("tangent");if(W===void 0||W.count!==$.count)W=new oJ(new Float32Array(4*$.count),4),this.setAttribute("tangent",W);let H=[],Y=[];for(let _=0;_<$.count;_++)H[_]=new v,Y[_]=new v;let X=new v,U=new v,G=new v,F=new l0,N=new l0,E=new l0,L=new v,B=new v;function O(_,R,z){X.fromBufferAttribute($,_),U.fromBufferAttribute($,R),G.fromBufferAttribute($,z),F.fromBufferAttribute(K,_),N.fromBufferAttribute(K,R),E.fromBufferAttribute(K,z),U.sub(X),G.sub(X),N.sub(F),E.sub(F);let l=1/(N.x*E.y-E.x*N.y);if(!isFinite(l))return;L.copy(U).multiplyScalar(E.y).addScaledVector(G,-N.y).multiplyScalar(l),B.copy(G).multiplyScalar(N.x).addScaledVector(U,-E.x).multiplyScalar(l),H[_].add(L),H[R].add(L),H[z].add(L),Y[_].add(B),Y[R].add(B),Y[z].add(B)}let q=this.groups;if(q.length===0)q=[{start:0,count:J.count}];for(let _=0,R=q.length;_<R;++_){let z=q[_],l=z.start,P=z.count;for(let g=l,s=l+P;g<s;g+=3)O(J.getX(g+0),J.getX(g+1),J.getX(g+2))}let w=new v,C=new v,M=new v,I=new v;function A(_){M.fromBufferAttribute(Z,_),I.copy(M);let R=H[_];w.copy(R),w.sub(M.multiplyScalar(M.dot(R))).normalize(),C.crossVectors(I,R);let l=C.dot(Y[_])<0?-1:1;W.setXYZW(_,w.x,w.y,w.z,l)}for(let _=0,R=q.length;_<R;++_){let z=q[_],l=z.start,P=z.count;for(let g=l,s=l+P;g<s;g+=3)A(J.getX(g+0)),A(J.getX(g+1)),A(J.getX(g+2))}this._transformed=!0}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0||$.count!==Q.count)$=new oJ(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let F=0,N=$.count;F<N;F++)$.setXYZ(F,0,0,0);let Z=new v,K=new v,W=new v,H=new v,Y=new v,X=new v,U=new v,G=new v;if(J)for(let F=0,N=J.count;F<N;F+=3){let E=J.getX(F+0),L=J.getX(F+1),B=J.getX(F+2);Z.fromBufferAttribute(Q,E),K.fromBufferAttribute(Q,L),W.fromBufferAttribute(Q,B),U.subVectors(W,K),G.subVectors(Z,K),U.cross(G),H.fromBufferAttribute($,E),Y.fromBufferAttribute($,L),X.fromBufferAttribute($,B),H.add(U),Y.add(U),X.add(U),$.setXYZ(E,H.x,H.y,H.z),$.setXYZ(L,Y.x,Y.y,Y.z),$.setXYZ(B,X.x,X.y,X.z)}else for(let F=0,N=Q.count;F<N;F+=3)Z.fromBufferAttribute(Q,F+0),K.fromBufferAttribute(Q,F+1),W.fromBufferAttribute(Q,F+2),U.subVectors(W,K),G.subVectors(Z,K),U.cross(G),$.setXYZ(F+0,U.x,U.y,U.z),$.setXYZ(F+1,U.x,U.y,U.z),$.setXYZ(F+2,U.x,U.y,U.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)CJ.fromBufferAttribute(J,Q),CJ.normalize(),J.setXYZ(Q,CJ.x,CJ.y,CJ.z)}toNonIndexed(){function J(H,Y){let{array:X,itemSize:U,normalized:G}=H,F=new X.constructor(Y.length*U),N=0,E=0;for(let L=0,B=Y.length;L<B;L++){if(H.isInterleavedBufferAttribute)N=Y[L]*H.data.stride+H.offset;else N=Y[L]*U;for(let O=0;O<U;O++)F[E++]=X[N++]}return new oJ(F,U,G)}if(this.index===null)return S0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new U9,$=this.index.array,Z=this.attributes;for(let H in Z){let Y=Z[H],X=J(Y,$);Q.setAttribute(H,X)}let K=this.morphAttributes;for(let H in K){let Y=[],X=K[H];for(let U=0,G=X.length;U<G;U++){let F=X[U],N=J(F,$);Y.push(N)}Q.morphAttributes[H]=Y}Q.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;for(let H=0,Y=W.length;H<Y;H++){let X=W[H];Q.addGroup(X.start,X.count,X.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!=="")J.name=this.name;if(Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let Y=this.parameters;for(let X in Y)if(Y[X]!==void 0)J[X]=Y[X];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let Y in $){let X=$[Y];J.data.attributes[Y]=X.toJSON(J.data)}let Z={},K=!1;for(let Y in this.morphAttributes){let X=this.morphAttributes[Y],U=[];for(let G=0,F=X.length;G<F;G++){let N=X[G];U.push(N.toJSON(J.data))}if(U.length>0)Z[Y]=U,K=!0}if(K)J.data.morphAttributes=Z,J.data.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;if(W.length>0)J.data.groups=JSON.parse(JSON.stringify(W));let H=this.boundingSphere;if(H!==null)J.data.boundingSphere=H.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let Z=J.attributes;for(let X in Z){let U=Z[X];this.setAttribute(X,U.clone(Q))}let K=J.morphAttributes;for(let X in K){let U=[],G=K[X];for(let F=0,N=G.length;F<N;F++)U.push(G[F].clone(Q));this.morphAttributes[X]=U}this.morphTargetsRelative=J.morphTargetsRelative;let W=J.groups;for(let X=0,U=W.length;X<U;X++){let G=W[X];this.addGroup(G.start,G.count,G.materialIndex)}let H=J.boundingBox;if(H!==null)this.boundingBox=H.clone();let Y=J.boundingSphere;if(Y!==null)this.boundingSphere=Y.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}var bW=0;class n9 extends S9{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:bW++}),this.uuid=O7(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new d0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){S0(`Material: parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){S0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set($);else if(Z&&Z.isVector2&&($&&$.isVector2)||Z&&Z.isEuler&&($&&$.isEuler)||Z&&Z.isVector3&&($&&$.isVector3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,this.name!=="")$.name=this.name;if(this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)$.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)$.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)$.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.shadowSide!==null)$.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)$.blending=this.blending;if(this.side!==0)$.side=this.side;if(this.vertexColors===!0)$.vertexColors=!0;if(this.opacity<1)$.opacity=this.opacity;if(this.transparent===!0)$.transparent=!0;if(this.blendSrc!==204)$.blendSrc=this.blendSrc;if(this.blendDst!==205)$.blendDst=this.blendDst;if(this.blendEquation!==100)$.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)$.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)$.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)$.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)$.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)$.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)$.depthFunc=this.depthFunc;if(this.depthTest===!1)$.depthTest=this.depthTest;if(this.depthWrite===!1)$.depthWrite=this.depthWrite;if(this.colorWrite===!1)$.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)$.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)$.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)$.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)$.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)$.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)$.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)$.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)$.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)$.rotation=this.rotation;if(this.polygonOffset===!0)$.polygonOffset=!0;if(this.polygonOffsetFactor!==0)$.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)$.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)$.linewidth=this.linewidth;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.dithering===!0)$.dithering=!0;if(this.alphaTest>0)$.alphaTest=this.alphaTest;if(this.alphaHash===!0)$.alphaHash=!0;if(this.alphaToCoverage===!0)$.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)$.premultipliedAlpha=!0;if(this.forceSinglePass===!0)$.forceSinglePass=!0;if(this.allowOverride===!1)$.allowOverride=!1;if(this.wireframe===!0)$.wireframe=!0;if(this.wireframeLinewidth>1)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)$.flatShading=!0;if(this.visible===!1)$.visible=!1;if(this.toneMapped===!1)$.toneMapped=!1;if(this.fog===!1)$.fog=!1;if(Object.keys(this.userData).length>0)$.userData=this.userData;function Z(K){let W=[];for(let H in K){let Y=K[H];delete Y.metadata,W.push(Y)}return W}if(Q){let K=Z(J.textures),W=Z(J.images);if(K.length>0)$.textures=K;if(W.length>0)$.images=W}return $}fromJSON(J,Q){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new d0().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=J.iridescenceThicknessRange;if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=Q[J.map]||null;if(J.matcap!==void 0)this.matcap=Q[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=Q[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=Q[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=Q[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let $=J.normalScale;if(Array.isArray($)===!1)$=[$,$];this.normalScale=new l0().fromArray($)}if(J.displacementMap!==void 0)this.displacementMap=Q[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=Q[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=Q[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=Q[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=Q[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=Q[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=Q[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=Q[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=Q[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=Q[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=Q[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=Q[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=Q[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=Q[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new l0().fromArray(J.clearcoatNormalScale);if(J.iridescenceMap!==void 0)this.iridescenceMap=Q[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=Q[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=Q[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=Q[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=Q[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=Q[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=Q[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let Z=Q.length;$=Array(Z);for(let K=0;K!==Z;++K)$[K]=Q[K].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}var P9=new v,a6=new v,p7=new v,l9=new v,r6=new v,m7=new v,t6=new v;class R6{constructor(J=new v,Q=new v(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,P9)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=P9.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return P9.copy(this.origin).addScaledVector(this.direction,Q),P9.distanceToSquared(J)}distanceSqToSegment(J,Q,$,Z){a6.copy(J).add(Q).multiplyScalar(0.5),p7.copy(Q).sub(J).normalize(),l9.copy(this.origin).sub(a6);let K=J.distanceTo(Q)*0.5,W=-this.direction.dot(p7),H=l9.dot(this.direction),Y=-l9.dot(p7),X=l9.lengthSq(),U=Math.abs(1-W*W),G,F,N,E;if(U>0)if(G=W*Y-H,F=W*H-Y,E=K*U,G>=0)if(F>=-E)if(F<=E){let L=1/U;G*=L,F*=L,N=G*(G+W*F+2*H)+F*(W*G+F+2*Y)+X}else F=K,G=Math.max(0,-(W*F+H)),N=-G*G+F*(F+2*Y)+X;else F=-K,G=Math.max(0,-(W*F+H)),N=-G*G+F*(F+2*Y)+X;else if(F<=-E)G=Math.max(0,-(-W*K+H)),F=G>0?-K:Math.min(Math.max(-K,-Y),K),N=-G*G+F*(F+2*Y)+X;else if(F<=E)G=0,F=Math.min(Math.max(-K,-Y),K),N=F*(F+2*Y)+X;else G=Math.max(0,-(W*K+H)),F=G>0?K:Math.min(Math.max(-K,-Y),K),N=-G*G+F*(F+2*Y)+X;else F=W>0?-K:K,G=Math.max(0,-(W*F+H)),N=-G*G+F*(F+2*Y)+X;if($)$.copy(this.origin).addScaledVector(this.direction,G);if(Z)Z.copy(a6).addScaledVector(p7,F);return N}intersectSphere(J,Q){P9.subVectors(J.center,this.origin);let $=P9.dot(this.direction),Z=P9.dot(P9)-$*$,K=J.radius*J.radius;if(Z>K)return null;let W=Math.sqrt(K-Z),H=$-W,Y=$+W;if(Y<0)return null;if(H<0)return this.at(Y,Q);return this.at(H,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,Z,K,W,H,Y,X=1/this.direction.x,U=1/this.direction.y,G=1/this.direction.z,F=this.origin;if(X>=0)$=(J.min.x-F.x)*X,Z=(J.max.x-F.x)*X;else $=(J.max.x-F.x)*X,Z=(J.min.x-F.x)*X;if(U>=0)K=(J.min.y-F.y)*U,W=(J.max.y-F.y)*U;else K=(J.max.y-F.y)*U,W=(J.min.y-F.y)*U;if($>W||K>Z)return null;if(K>$||isNaN($))$=K;if(W<Z||isNaN(Z))Z=W;if(G>=0)H=(J.min.z-F.z)*G,Y=(J.max.z-F.z)*G;else H=(J.max.z-F.z)*G,Y=(J.min.z-F.z)*G;if($>Y||H>Z)return null;if(H>$||$!==$)$=H;if(Y<Z||Z!==Z)Z=Y;if(Z<0)return null;return this.at($>=0?$:Z,Q)}intersectsBox(J){return this.intersectBox(J,P9)!==null}intersectTriangle(J,Q,$,Z,K){r6.subVectors(Q,J),m7.subVectors($,J),t6.crossVectors(r6,m7);let W=this.direction.dot(t6),H;if(W>0){if(Z)return null;H=1}else if(W<0)H=-1,W=-W;else return null;l9.subVectors(this.origin,J);let Y=H*this.direction.dot(m7.crossVectors(l9,m7));if(Y<0)return null;let X=H*this.direction.dot(r6.cross(l9));if(X<0)return null;if(Y+X>W)return null;let U=-H*l9.dot(t6);if(U<0)return null;return this.at(U/W,K)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class q9 extends n9{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new d0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new E9,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var $Z=new WJ,$8=new R6,l7=new G8,ZZ=new v,d7=new v,u7=new v,c7=new v,e6=new v,n7=new v,KZ=new v,s7=new v;class j0 extends IJ{constructor(J=new U9,Q=new q9){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let K=0,W=Z.length;K<W;K++){let H=Z[K].name||String(K);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=K}}}}getVertexPosition(J,Q){let $=this.geometry,Z=$.attributes.position,K=$.morphAttributes.position,W=$.morphTargetsRelative;Q.fromBufferAttribute(Z,J);let H=this.morphTargetInfluences;if(K&&H){n7.set(0,0,0);for(let Y=0,X=K.length;Y<X;Y++){let U=H[Y],G=K[Y];if(U===0)continue;if(e6.fromBufferAttribute(G,J),W)n7.addScaledVector(e6,U);else n7.addScaledVector(e6.sub(Q),U)}Q.add(n7)}return Q}raycast(J,Q){let $=this.geometry,Z=this.material,K=this.matrixWorld;if(Z===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(l7.copy($.boundingSphere),l7.applyMatrix4(K),$8.copy(J.ray).recast(J.near),l7.containsPoint($8.origin)===!1){if($8.intersectSphere(l7,ZZ)===null)return;if($8.origin.distanceToSquared(ZZ)>(J.far-J.near)**2)return}if($Z.copy(K).invert(),$8.copy(J.ray).applyMatrix4($Z),$.boundingBox!==null){if($8.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,$8)}_computeIntersections(J,Q,$){let Z,K=this.geometry,W=this.material,H=K.index,Y=K.attributes.position,X=K.attributes.uv,U=K.attributes.uv1,G=K.attributes.normal,F=K.groups,N=K.drawRange;if(H!==null)if(Array.isArray(W))for(let E=0,L=F.length;E<L;E++){let B=F[E],O=W[B.materialIndex],q=Math.max(B.start,N.start),w=Math.min(H.count,Math.min(B.start+B.count,N.start+N.count));for(let C=q,M=w;C<M;C+=3){let I=H.getX(C),A=H.getX(C+1),_=H.getX(C+2);if(Z=i7(this,O,J,$,X,U,G,I,A,_),Z)Z.faceIndex=Math.floor(C/3),Z.face.materialIndex=B.materialIndex,Q.push(Z)}}else{let E=Math.max(0,N.start),L=Math.min(H.count,N.start+N.count);for(let B=E,O=L;B<O;B+=3){let q=H.getX(B),w=H.getX(B+1),C=H.getX(B+2);if(Z=i7(this,W,J,$,X,U,G,q,w,C),Z)Z.faceIndex=Math.floor(B/3),Q.push(Z)}}else if(Y!==void 0)if(Array.isArray(W))for(let E=0,L=F.length;E<L;E++){let B=F[E],O=W[B.materialIndex],q=Math.max(B.start,N.start),w=Math.min(Y.count,Math.min(B.start+B.count,N.start+N.count));for(let C=q,M=w;C<M;C+=3){let I=C,A=C+1,_=C+2;if(Z=i7(this,O,J,$,X,U,G,I,A,_),Z)Z.faceIndex=Math.floor(C/3),Z.face.materialIndex=B.materialIndex,Q.push(Z)}}else{let E=Math.max(0,N.start),L=Math.min(Y.count,N.start+N.count);for(let B=E,O=L;B<O;B+=3){let q=B,w=B+1,C=B+2;if(Z=i7(this,W,J,$,X,U,G,q,w,C),Z)Z.faceIndex=Math.floor(B/3),Q.push(Z)}}}}function hW(J,Q,$,Z,K,W,H,Y){let X;if(Q.side===1)X=Z.intersectTriangle(H,W,K,!0,Y);else X=Z.intersectTriangle(K,W,H,Q.side===0,Y);if(X===null)return null;s7.copy(Y),s7.applyMatrix4(J.matrixWorld);let U=$.ray.origin.distanceTo(s7);if(U<$.near||U>$.far)return null;return{distance:U,point:s7.clone(),object:J}}function i7(J,Q,$,Z,K,W,H,Y,X,U){J.getVertexPosition(Y,d7),J.getVertexPosition(X,u7),J.getVertexPosition(U,c7);let G=hW(J,Q,$,Z,d7,u7,c7,KZ);if(G){let F=new v;if(eJ.getBarycoord(KZ,d7,u7,c7,F),K)G.uv=eJ.getInterpolatedAttribute(K,Y,X,U,F,new l0);if(W)G.uv1=eJ.getInterpolatedAttribute(W,Y,X,U,F,new l0);if(H){if(G.normal=eJ.getInterpolatedAttribute(H,Y,X,U,F,new v),G.normal.dot(Z.direction)>0)G.normal.multiplyScalar(-1)}let N={a:Y,b:X,c:U,normal:new v,materialIndex:0};eJ.getNormal(d7,u7,c7,N.normal),G.face=N,G.barycoord=F}return G}class k6 extends TJ{constructor(J=null,Q=1,$=1,Z,K,W,H,Y,X=1003,U=1003,G,F){super(null,W,H,Y,X,U,Z,K,G,F);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Q6 extends oJ{constructor(J,Q,$,Z=1){super(J,Q,$);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=Z}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var b8=new WJ,WZ=new WJ,o7=[],HZ=new y9,xW=new WJ,W7=new j0,H7=new G8;class s8 extends j0{constructor(J,Q,$){super(J,Q);this.isInstancedMesh=!0,this.instanceMatrix=new Q6(new Float32Array($*16),16),this.instanceColor=null,this.morphTexture=null,this.count=$,this.boundingBox=null,this.boundingSphere=null;for(let Z=0;Z<$;Z++)this.setMatrixAt(Z,xW)}computeBoundingBox(){let J=this.geometry,Q=this.count;if(this.boundingBox===null)this.boundingBox=new y9;if(J.boundingBox===null)J.computeBoundingBox();this.boundingBox.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,b8),HZ.copy(J.boundingBox).applyMatrix4(b8),this.boundingBox.union(HZ)}computeBoundingSphere(){let J=this.geometry,Q=this.count;if(this.boundingSphere===null)this.boundingSphere=new G8;if(J.boundingSphere===null)J.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,b8),H7.copy(J.boundingSphere).applyMatrix4(b8),this.boundingSphere.union(H7)}copy(J,Q){if(super.copy(J,Q),this.instanceMatrix.copy(J.instanceMatrix),J.morphTexture!==null)this.morphTexture=J.morphTexture.clone();if(J.instanceColor!==null)this.instanceColor=J.instanceColor.clone();if(this.count=J.count,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}getColorAt(J,Q){if(this.instanceColor===null)return Q.setRGB(1,1,1);else return Q.fromArray(this.instanceColor.array,J*3)}getMatrixAt(J,Q){return Q.fromArray(this.instanceMatrix.array,J*16)}getMorphAt(J,Q){let $=Q.morphTargetInfluences,Z=this.morphTexture.source.data.data,K=$.length+1,W=J*K+1;for(let H=0;H<$.length;H++)$[H]=Z[W+H]}raycast(J,Q){let $=this.matrixWorld,Z=this.count;if(W7.geometry=this.geometry,W7.material=this.material,W7.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(H7.copy(this.boundingSphere),H7.applyMatrix4($),J.ray.intersectsSphere(H7)===!1)return;for(let K=0;K<Z;K++){this.getMatrixAt(K,b8),WZ.multiplyMatrices($,b8),W7.matrixWorld=WZ,W7.raycast(J,o7);for(let W=0,H=o7.length;W<H;W++){let Y=o7[W];Y.instanceId=K,Y.object=this,Q.push(Y)}o7.length=0}}setColorAt(J,Q){if(this.instanceColor===null)this.instanceColor=new Q6(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return Q.toArray(this.instanceColor.array,J*3),this}setMatrixAt(J,Q){return Q.toArray(this.instanceMatrix.array,J*16),this}setMorphAt(J,Q){let $=Q.morphTargetInfluences,Z=$.length+1;if(this.morphTexture===null)this.morphTexture=new k6(new Float32Array(Z*this.count),Z,this.count,1028,1015);let K=this.morphTexture.source.data.data,W=0;for(let X=0;X<$.length;X++)W+=$[X];let H=this.geometry.morphTargetsRelative?1:1-W,Y=Z*J;return K[Y]=H,K.set($,Y+1),this}updateMorphTargets(){}dispose(){if(this.dispatchEvent({type:"dispose"}),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var JQ=new v,gW=new v,pW=new y0;class C9{constructor(J=new v(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,Z){return this.normal.set(J,Q,$),this.constant=Z,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let Z=JQ.subVectors($,Q).cross(gW.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(Z,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,$=!0){let Z=J.delta(JQ),K=this.normal.dot(Z);if(K===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let W=-(J.start.dot(this.normal)+this.constant)/K;if($===!0&&(W<0||W>1))return null;return Q.copy(J.start).addScaledVector(Z,W)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||pW.getNormalMatrix(J),Z=this.coplanarPoint(JQ).applyMatrix4(J),K=this.normal.applyMatrix3($).normalize();return this.constant=-Z.dot(K),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}}var Z8=new G8,mW=new l0(0.5,0.5),a7=new v;class k7{constructor(J=new C9,Q=new C9,$=new C9,Z=new C9,K=new C9,W=new C9){this.planes=[J,Q,$,Z,K,W]}set(J,Q,$,Z,K,W){let H=this.planes;return H[0].copy(J),H[1].copy(Q),H[2].copy($),H[3].copy(Z),H[4].copy(K),H[5].copy(W),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let Z=this.planes,K=J.elements,W=K[0],H=K[1],Y=K[2],X=K[3],U=K[4],G=K[5],F=K[6],N=K[7],E=K[8],L=K[9],B=K[10],O=K[11],q=K[12],w=K[13],C=K[14],M=K[15];if(Z[0].setComponents(X-W,N-U,O-E,M-q).normalize(),Z[1].setComponents(X+W,N+U,O+E,M+q).normalize(),Z[2].setComponents(X+H,N+G,O+L,M+w).normalize(),Z[3].setComponents(X-H,N-G,O-L,M-w).normalize(),$)Z[4].setComponents(Y,F,B,C).normalize(),Z[5].setComponents(X-Y,N-F,O-B,M-C).normalize();else if(Z[4].setComponents(X-Y,N-F,O-B,M-C).normalize(),Q===2000)Z[5].setComponents(X+Y,N+F,O+B,M+C).normalize();else if(Q===2001)Z[5].setComponents(Y,F,B,C).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();Z8.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();Z8.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(Z8)}intersectsSprite(J){Z8.center.set(0,0,0);let Q=mW.distanceTo(J.center);return Z8.radius=0.7071067811865476+Q,Z8.applyMatrix4(J.matrixWorld),this.intersectsSphere(Z8)}intersectsSphere(J){let Q=this.planes,$=J.center,Z=-J.radius;for(let K=0;K<6;K++)if(Q[K].distanceToPoint($)<Z)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let Z=Q[$];if(a7.x=Z.normal.x>0?J.max.x:J.min.x,a7.y=Z.normal.y>0?J.max.y:J.min.y,a7.z=Z.normal.z>0?J.max.z:J.min.z,Z.distanceToPoint(a7)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class L6 extends TJ{constructor(J=[],Q=301,$,Z,K,W,H,Y,X,U){super(J,Q,$,Z,K,W,H,Y,X,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class i8 extends TJ{constructor(J,Q,$,Z,K,W,H,Y,X){super(J,Q,$,Z,K,W,H,Y,X);this.isCanvasTexture=!0,this.needsUpdate=!0}}class s9 extends TJ{constructor(J,Q,$=1014,Z,K,W,H=1003,Y=1003,X,U=1026,G=1){if(U!==1026&&U!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let F={width:J,height:Q,depth:G};super(F,Z,K,W,H,Y,U,$,X);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new E7(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);if(this.compareFunction!==null)Q.compareFunction=this.compareFunction;return Q}}class W$ extends s9{constructor(J,Q=1014,$=301,Z,K,W=1003,H=1003,Y,X=1026){let U={width:J,height:J,depth:1},G=[U,U,U,U,U,U];super(J,J,Q,$,Z,K,W,H,Y,X);this.image=G,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class V6 extends TJ{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class DJ extends U9{constructor(J=1,Q=1,$=1,Z=1,K=1,W=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:Z,heightSegments:K,depthSegments:W};let H=this;Z=Math.floor(Z),K=Math.floor(K),W=Math.floor(W);let Y=[],X=[],U=[],G=[],F=0,N=0;E("z","y","x",-1,-1,$,Q,J,W,K,0),E("z","y","x",1,-1,$,Q,-J,W,K,1),E("x","z","y",1,1,J,$,Q,Z,W,2),E("x","z","y",1,-1,J,$,-Q,Z,W,3),E("x","y","z",1,-1,J,Q,$,Z,K,4),E("x","y","z",-1,-1,J,Q,-$,Z,K,5),this.setIndex(Y),this.setAttribute("position",new lJ(X,3)),this.setAttribute("normal",new lJ(U,3)),this.setAttribute("uv",new lJ(G,2));function E(L,B,O,q,w,C,M,I,A,_,R){let z=C/A,l=M/_,P=C/2,g=M/2,s=I/2,x=A+1,u=_+1,c=0,f=0,t=new v;for(let e=0;e<u;e++){let K0=e*l-g;for(let M0=0;M0<x;M0++){let k0=M0*z-P;t[L]=k0*q,t[B]=K0*w,t[O]=s,X.push(t.x,t.y,t.z),t[L]=0,t[B]=0,t[O]=I>0?1:-1,U.push(t.x,t.y,t.z),G.push(M0/A),G.push(1-e/_),c+=1}}for(let e=0;e<_;e++)for(let K0=0;K0<A;K0++){let M0=F+K0+x*e,k0=F+K0+x*(e+1),HJ=F+(K0+1)+x*(e+1),o0=F+(K0+1)+x*e;Y.push(M0,k0,o0),Y.push(k0,HJ,o0),f+=6}H.addGroup(N,f,R),N+=f,F+=c}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new DJ(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class i9 extends U9{constructor(J=1,Q=1,$=1,Z=32,K=1,W=!1,H=0,Y=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:Q,height:$,radialSegments:Z,heightSegments:K,openEnded:W,thetaStart:H,thetaLength:Y};let X=this;Z=Math.floor(Z),K=Math.floor(K);let U=[],G=[],F=[],N=[],E=0,L=[],B=$/2,O=0;if(q(),W===!1){if(J>0)w(!0);if(Q>0)w(!1)}this.setIndex(U),this.setAttribute("position",new lJ(G,3)),this.setAttribute("normal",new lJ(F,3)),this.setAttribute("uv",new lJ(N,2));function q(){let C=new v,M=new v,I=0,A=(Q-J)/$;for(let _=0;_<=K;_++){let R=[],z=_/K,l=z*(Q-J)+J;for(let P=0;P<=Z;P++){let g=P/Z,s=g*Y+H,x=Math.sin(s),u=Math.cos(s);M.x=l*x,M.y=-z*$+B,M.z=l*u,G.push(M.x,M.y,M.z),C.set(x,A,u).normalize(),F.push(C.x,C.y,C.z),N.push(g,1-z),R.push(E++)}L.push(R)}for(let _=0;_<Z;_++)for(let R=0;R<K;R++){let z=L[R][_],l=L[R+1][_],P=L[R+1][_+1],g=L[R][_+1];if(J>0||R!==0)U.push(z,l,g),I+=3;if(Q>0||R!==K-1)U.push(l,P,g),I+=3}X.addGroup(O,I,0),O+=I}function w(C){let M=E,I=new l0,A=new v,_=0,R=C===!0?J:Q,z=C===!0?1:-1;for(let P=1;P<=Z;P++)G.push(0,B*z,0),F.push(0,z,0),N.push(0.5,0.5),E++;let l=E;for(let P=0;P<=Z;P++){let s=P/Z*Y+H,x=Math.cos(s),u=Math.sin(s);A.x=R*u,A.y=B*z,A.z=R*x,G.push(A.x,A.y,A.z),F.push(0,z,0),I.x=x*0.5+0.5,I.y=u*0.5*z+0.5,N.push(I.x,I.y),E++}for(let P=0;P<Z;P++){let g=M+P,s=l+P;if(C===!0)U.push(s,s+1,g);else U.push(s+1,s,g);_+=3}X.addGroup(O,_,C===!0?1:2),O+=_}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new i9(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class N9 extends U9{constructor(J=1,Q=1,$=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:Z};let K=J/2,W=Q/2,H=Math.floor($),Y=Math.floor(Z),X=H+1,U=Y+1,G=J/H,F=Q/Y,N=[],E=[],L=[],B=[];for(let O=0;O<U;O++){let q=O*F-W;for(let w=0;w<X;w++){let C=w*G-K;E.push(C,-q,0),L.push(0,0,1),B.push(w/H),B.push(1-O/Y)}}for(let O=0;O<Y;O++)for(let q=0;q<H;q++){let w=q+X*O,C=q+X*(O+1),M=q+1+X*(O+1),I=q+1+X*O;N.push(w,C,I),N.push(C,M,I)}this.setIndex(N),this.setAttribute("position",new lJ(E,3)),this.setAttribute("normal",new lJ(L,3)),this.setAttribute("uv",new lJ(B,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new N9(J.width,J.height,J.widthSegments,J.heightSegments)}}function F8(J){let Q={};for(let $ in J){Q[$]={};for(let Z in J[$]){let K=J[$][Z];if(YZ(K))if(K.isRenderTargetTexture)S0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][Z]=null;else Q[$][Z]=K.clone();else if(Array.isArray(K))if(YZ(K[0])){let W=[];for(let H=0,Y=K.length;H<Y;H++)W[H]=K[H].clone();Q[$][Z]=W}else Q[$][Z]=K.slice();else Q[$][Z]=K}}return Q}function gJ(J){let Q={};for(let $=0;$<J.length;$++){let Z=F8(J[$]);for(let K in Z)Q[K]=Z[K]}return Q}function YZ(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function lW(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function H$(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return i0.workingColorSpace}var DK={clone:F8,merge:gJ},dW=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uW=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Q9 extends n9{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dW,this.fragmentShader=uW,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=F8(J.uniforms),this.uniformsGroups=lW(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let Z in this.uniforms){let W=this.uniforms[Z].value;if(W&&W.isTexture)Q.uniforms[Z]={type:"t",value:W.toJSON(J).uuid};else if(W&&W.isColor)Q.uniforms[Z]={type:"c",value:W.getHex()};else if(W&&W.isVector2)Q.uniforms[Z]={type:"v2",value:W.toArray()};else if(W&&W.isVector3)Q.uniforms[Z]={type:"v3",value:W.toArray()};else if(W&&W.isVector4)Q.uniforms[Z]={type:"v4",value:W.toArray()};else if(W&&W.isMatrix3)Q.uniforms[Z]={type:"m3",value:W.toArray()};else if(W&&W.isMatrix4)Q.uniforms[Z]={type:"m4",value:W.toArray()};else Q.uniforms[Z]={value:W}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let Z in this.extensions)if(this.extensions[Z]===!0)$[Z]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}fromJSON(J,Q){if(super.fromJSON(J,Q),J.uniforms!==void 0)for(let $ in J.uniforms){let Z=J.uniforms[$];switch(this.uniforms[$]={},Z.type){case"t":this.uniforms[$].value=Q[Z.value]||null;break;case"c":this.uniforms[$].value=new d0().setHex(Z.value);break;case"v2":this.uniforms[$].value=new l0().fromArray(Z.value);break;case"v3":this.uniforms[$].value=new v().fromArray(Z.value);break;case"v4":this.uniforms[$].value=new EJ().fromArray(Z.value);break;case"m3":this.uniforms[$].value=new y0().fromArray(Z.value);break;case"m4":this.uniforms[$].value=new WJ().fromArray(Z.value);break;default:this.uniforms[$].value=Z.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let $ in J.extensions)this.extensions[$]=J.extensions[$];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class Y$ extends Q9{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class dJ extends n9{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new d0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new d0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new l0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new E9,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class M6 extends n9{constructor(J){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new d0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new d0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new l0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new E9,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.envMapIntensity=J.envMapIntensity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class X$ extends n9{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class U$ extends n9{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function r7(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}class O8{constructor(J,Q,$,Z){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,Z=Q[$],K=Q[$-1];$:{J:{let W;Q:{Z:if(!(J<Z)){for(let H=$+2;;){if(Z===void 0){if(J<K)break Z;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===H)break;if(K=Z,Z=Q[++$],J<Z)break J}W=Q.length;break Q}if(!(J>=K)){let H=Q[1];if(J<H)$=2,K=H;for(let Y=$-2;;){if(K===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===Y)break;if(Z=K,K=Q[--$-1],J>=K)break J}W=$,$=0;break Q}break $}while($<W){let H=$+W>>>1;if(J<Q[H])W=H;else $=H+1}if(Z=Q[$],K=Q[$-1],K===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,K,Z)}return this.interpolate_($,K,J,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,K=J*Z;for(let W=0;W!==Z;++W)Q[W]=$[K+W];return Q}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class q$ extends O8{constructor(J,Q,$,Z){super(J,Q,$,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let Z=this.parameterPositions,K=J-2,W=J+1,H=Z[K],Y=Z[W];if(H===void 0)switch(this.getSettings_().endingStart){case 2401:K=J,H=2*Q-$;break;case 2402:K=Z.length-2,H=Q+Z[K]-Z[K+1];break;default:K=J,H=$}if(Y===void 0)switch(this.getSettings_().endingEnd){case 2401:W=J,Y=2*$-Q;break;case 2402:W=1,Y=$+Z[1]-Z[0];break;default:W=J-1,Y=Q}let X=($-Q)*0.5,U=this.valueSize;this._weightPrev=X/(Q-H),this._weightNext=X/(Y-$),this._offsetPrev=K*U,this._offsetNext=W*U}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=this._offsetPrev,G=this._offsetNext,F=this._weightPrev,N=this._weightNext,E=($-Q)/(Z-Q),L=E*E,B=L*E,O=-F*B+2*F*L-F*E,q=(1+F)*B+(-1.5-2*F)*L+(-0.5+F)*E+1,w=(-1-N)*B+(1.5+N)*L+0.5*E,C=N*B-N*L;for(let M=0;M!==H;++M)K[M]=O*W[U+M]+q*W[X+M]+w*W[Y+M]+C*W[G+M];return K}}class N$ extends O8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=($-Q)/(Z-Q),G=1-U;for(let F=0;F!==H;++F)K[F]=W[X+F]*G+W[Y+F]*U;return K}}class G$ extends O8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J){return this.copySampleValue_(J-1)}}class F$ extends O8{interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=this.inTangents,G=this.outTangents;if(!U||!G){let E=($-Q)/(Z-Q),L=1-E;for(let B=0;B!==H;++B)K[B]=W[X+B]*L+W[Y+B]*E;return K}let F=H*2,N=J-1;for(let E=0;E!==H;++E){let L=W[X+E],B=W[Y+E],O=N*F+E*2,q=G[O],w=G[O+1],C=J*F+E*2,M=U[C],I=U[C+1],A=($-Q)/(Z-Q),_,R,z,l,P;for(let g=0;g<8;g++){_=A*A,R=_*A,z=1-A,l=z*z,P=l*z;let x=P*Q+3*l*A*q+3*z*_*M+R*Z-$;if(Math.abs(x)<0.0000000001)break;let u=3*l*(q-Q)+6*z*A*(M-q)+3*_*(Z-M);if(Math.abs(u)<0.0000000001)break;A=A-x/u,A=Math.max(0,Math.min(1,A))}K[E]=P*L+3*l*A*w+3*z*_*I+R*B}return K}}class $9{constructor(J,Q,$,Z){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=r7(Q,this.TimeBufferType),this.values=r7($,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:r7(J.times,Array),values:r7(J.values,Array)};let Z=J.getInterpolation();if(Z!==J.DefaultInterpolation)$.interpolation=Z}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new G$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new N$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new q$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new F$(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.inTangents=this.settings.inTangents,Q.outTangents=this.settings.outTangents;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return S0("KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]*=J}return this}trim(J,Q){let $=this.times,Z=$.length,K=0,W=Z-1;while(K!==Z&&$[K]<J)++K;while(W!==-1&&$[W]>Q)--W;if(++W,K!==0||W!==Z){if(K>=W)W=Math.max(W,1),K=W-1;let H=this.getValueSize();this.times=$.slice(K,W),this.values=this.values.slice(K*H,W*H)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)T0("KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,Z=this.values,K=$.length;if(K===0)T0("KeyframeTrack: Track is empty.",this),J=!1;let W=null;for(let H=0;H!==K;H++){let Y=$[H];if(typeof Y==="number"&&isNaN(Y)){T0("KeyframeTrack: Time is not a valid number.",this,H,Y),J=!1;break}if(W!==null&&W>Y){T0("KeyframeTrack: Out of order keys.",this,H,Y,W),J=!1;break}W=Y}if(Z!==void 0){if(MW(Z))for(let H=0,Y=Z.length;H!==Y;++H){let X=Z[H];if(isNaN(X)){T0("KeyframeTrack: Value is not a valid number.",this,H,X),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),Z=this.getInterpolation()===2302,K=J.length-1,W=1;for(let H=1;H<K;++H){let Y=!1,X=J[H],U=J[H+1];if(X!==U&&(H!==1||X!==J[0]))if(!Z){let G=H*$,F=G-$,N=G+$;for(let E=0;E!==$;++E){let L=Q[G+E];if(L!==Q[F+E]||L!==Q[N+E]){Y=!0;break}}}else Y=!0;if(Y){if(H!==W){J[W]=J[H];let G=H*$,F=W*$;for(let N=0;N!==$;++N)Q[F+N]=Q[G+N]}++W}}if(K>0){J[W]=J[K];for(let H=K*$,Y=W*$,X=0;X!==$;++X)Q[Y+X]=Q[H+X];++W}if(W!==J.length)this.times=J.slice(0,W),this.values=Q.slice(0,W*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),Z=new this.constructor(this.name,J,Q);return Z.createInterpolant=this.createInterpolant,Z}}$9.prototype.ValueTypeName="";$9.prototype.TimeBufferType=Float32Array;$9.prototype.ValueBufferType=Float32Array;$9.prototype.DefaultInterpolation=2301;class E8 extends $9{constructor(J,Q,$){super(J,Q,$)}}E8.prototype.ValueTypeName="bool";E8.prototype.ValueBufferType=Array;E8.prototype.DefaultInterpolation=2300;E8.prototype.InterpolantFactoryMethodLinear=void 0;E8.prototype.InterpolantFactoryMethodSmooth=void 0;class O$ extends $9{constructor(J,Q,$,Z){super(J,Q,$,Z)}}O$.prototype.ValueTypeName="color";class E$ extends $9{constructor(J,Q,$,Z){super(J,Q,$,Z)}}E$.prototype.ValueTypeName="number";class D$ extends O8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,H=this.valueSize,Y=($-Q)/(Z-Q),X=J*H;for(let U=X+H;X!==U;X+=4)j9.slerpFlat(K,0,W,X-H,W,X,Y);return K}}class z6 extends $9{constructor(J,Q,$,Z){super(J,Q,$,Z)}InterpolantFactoryMethodLinear(J){return new D$(this.times,this.values,this.getValueSize(),J)}}z6.prototype.ValueTypeName="quaternion";z6.prototype.InterpolantFactoryMethodSmooth=void 0;class D8 extends $9{constructor(J,Q,$){super(J,Q,$)}}D8.prototype.ValueTypeName="string";D8.prototype.ValueBufferType=Array;D8.prototype.DefaultInterpolation=2300;D8.prototype.InterpolantFactoryMethodLinear=void 0;D8.prototype.InterpolantFactoryMethodSmooth=void 0;class R$ extends $9{constructor(J,Q,$,Z){super(J,Q,$,Z)}}R$.prototype.ValueTypeName="vector";class k${constructor(J,Q,$){let Z=this,K=!1,W=0,H=0,Y=void 0,X=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this._abortController=null,this.itemStart=function(U){if(H++,K===!1){if(Z.onStart!==void 0)Z.onStart(U,W,H)}K=!0},this.itemEnd=function(U){if(W++,Z.onProgress!==void 0)Z.onProgress(U,W,H);if(W===H){if(K=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(U){if(Z.onError!==void 0)Z.onError(U)},this.resolveURL=function(U){if(U=U.normalize("NFC"),Y)return Y(U);return U},this.setURLModifier=function(U){return Y=U,this},this.addHandler=function(U,G){return X.push(U,G),this},this.removeHandler=function(U){let G=X.indexOf(U);if(G!==-1)X.splice(G,2);return this},this.getHandler=function(U){for(let G=0,F=X.length;G<F;G+=2){let N=X[G],E=X[G+1];if(N.global)N.lastIndex=0;if(N.test(U))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var RK=new k$;class L${constructor(J){if(this.manager=J!==void 0?J:RK,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let $=this;return new Promise(function(Z,K){$.load(J,Z,Q,K)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}L$.DEFAULT_MATERIAL_NAME="__DEFAULT";class V$ extends IJ{constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new d0(J),this.intensity=Q}dispose(){this.dispatchEvent({type:"dispose"})}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);return Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,Q}}var QQ=new WJ,XZ=new v,UZ=new v;class kK{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new l0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new WJ,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new k7,this._frameExtents=new l0(1,1),this._viewportCount=1,this._viewports=[new EJ(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera,$=this.matrix;if(XZ.setFromMatrixPosition(J.matrixWorld),Q.position.copy(XZ),UZ.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(UZ),Q.updateMatrixWorld(),QQ.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),this._frustum.setFromProjectionMatrix(QQ,Q.coordinateSystem,Q.reversedDepth),Q.coordinateSystem===2001||Q.reversedDepth)$.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,1,0,0,0,0,1);else $.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1);$.multiply(QQ)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this.biasNode=J.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};if(this.intensity!==1)J.intensity=this.intensity;if(this.bias!==0)J.bias=this.bias;if(this.normalBias!==0)J.normalBias=this.normalBias;if(this.radius!==1)J.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)J.mapSize=this.mapSize.toArray();return J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var t7=new v,e7=new j9,O9=new v;class B6 extends IJ{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new WJ,this.projectionMatrix=new WJ,this.projectionMatrixInverse=new WJ,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(t7,e7,O9),O9.x===1&&O9.y===1&&O9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(t7,e7,O9.set(1,1,1)).invert()}updateWorldMatrix(J,Q,$=!1){if(super.updateWorldMatrix(J,Q,$),this.matrixWorld.decompose(t7,e7,O9),O9.x===1&&O9.y===1&&O9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(t7,e7,O9.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var d9=new v,qZ=new l0,NZ=new l0;class bJ extends B6{constructor(J=50,Q=1,$=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=Z,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=J6*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(j6*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return J6*2*Math.atan(Math.tan(j6*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){d9.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(d9.x,d9.y).multiplyScalar(-J/d9.z),d9.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(d9.x,d9.y).multiplyScalar(-J/d9.z)}getViewSize(J,Q){return this.getViewBounds(J,qZ,NZ),Q.subVectors(NZ,qZ)}setViewOffset(J,Q,$,Z,K,W){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=K,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(j6*0.5*this.fov)/this.zoom,$=2*Q,Z=this.aspect*$,K=-0.5*Z,W=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Y,fullHeight:X}=W;K+=W.offsetX*Z/Y,Q-=W.offsetY*$/X,Z*=W.width/Y,$*=W.height/X}let H=this.filmOffset;if(H!==0)K+=J*H/this.getFilmWidth();this.projectionMatrix.makePerspective(K,K+Z,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class LK extends kK{constructor(){super(new bJ(90,1,0.5,500));this.isPointLightShadow=!0}}class I6 extends V${constructor(J,Q,$=0,Z=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=$,this.decay=Z,this.shadow=new LK}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.distance=this.distance,Q.object.decay=this.decay,Q.object.shadow=this.shadow.toJSON(),Q}}class A6 extends B6{constructor(J=-1,Q=1,$=1,Z=-1,K=0.1,W=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=Z,this.near=K,this.far=W,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,Z,K,W){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=K,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,K=$-J,W=$+J,H=Z+Q,Y=Z-Q;if(this.view!==null&&this.view.enabled){let X=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;K+=X*this.view.offsetX,W=K+X*this.view.width,H-=U*this.view.offsetY,Y=H-U*this.view.height}this.projectionMatrix.makeOrthographic(K,W,H,Y,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}var h8=-90,x8=1;class M$ extends IJ{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new bJ(h8,x8,J,Q);Z.layers=this.layers,this.add(Z);let K=new bJ(h8,x8,J,Q);K.layers=this.layers,this.add(K);let W=new bJ(h8,x8,J,Q);W.layers=this.layers,this.add(W);let H=new bJ(h8,x8,J,Q);H.layers=this.layers,this.add(H);let Y=new bJ(h8,x8,J,Q);Y.layers=this.layers,this.add(Y);let X=new bJ(h8,x8,J,Q);X.layers=this.layers,this.add(X)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,Z,K,W,H,Y]=Q;for(let X of Q)this.remove(X);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),K.up.set(0,0,-1),K.lookAt(0,1,0),W.up.set(0,0,1),W.lookAt(0,-1,0),H.up.set(0,1,0),H.lookAt(0,0,1),Y.up.set(0,1,0),Y.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),K.up.set(0,0,1),K.lookAt(0,1,0),W.up.set(0,0,-1),W.lookAt(0,-1,0),H.up.set(0,-1,0),H.lookAt(0,0,1),Y.up.set(0,-1,0),Y.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let X of Q)this.add(X),X.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[K,W,H,Y,X,U]=this.children,G=J.getRenderTarget(),F=J.getActiveCubeFace(),N=J.getActiveMipmapLevel(),E=J.xr.enabled;J.xr.enabled=!1;let L=$.texture.generateMipmaps;$.texture.generateMipmaps=!1;let B=!1;if(J.isWebGLRenderer===!0)B=J.state.buffers.depth.getReversed();else B=J.reversedDepthBuffer;if(J.setRenderTarget($,0,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,K),J.setRenderTarget($,1,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,W),J.setRenderTarget($,2,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,H),J.setRenderTarget($,3,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),J.setRenderTarget($,4,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,X),$.texture.generateMipmaps=L,J.setRenderTarget($,5,Z),B&&J.autoClear===!1)J.clearDepth();J.render(Q,U),J.setRenderTarget(G,F,N),J.xr.enabled=E,$.texture.needsPMREMUpdate=!0}}class z$ extends bJ{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}var B$="\\[\\]\\.:\\/",cW=new RegExp("["+B$+"]","g"),I$="[^"+B$+"]",nW="[^"+B$.replace("\\.","")+"]",sW=/((?:WC+[\/:])*)/.source.replace("WC",I$),iW=/(WCOD+)?/.source.replace("WCOD",nW),oW=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",I$),aW=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",I$),rW=new RegExp("^"+sW+iW+oW+aW+"$"),tW=["material","materials","bones","map"];class VK{constructor(J,Q,$){let Z=$||$J.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,Z)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,Z=this._bindings[$];if(Z!==void 0)Z.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,K=$.length;Z!==K;++Z)$[Z].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class $J{constructor(J,Q,$){this.path=Q,this.parsedPath=$||$J.parseTrackName(Q),this.node=$J.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new $J(J,Q,$);else return new $J.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(cW,"")}static parseTrackName(J){let Q=rW.exec(J);if(Q===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},Z=$.nodeName&&$.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let K=$.nodeName.substring(Z+1);if(tW.indexOf(K)!==-1)$.nodeName=$.nodeName.substring(0,Z),$.objectName=K}if($.propertyName===null||$.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(K){for(let W=0;W<K.length;W++){let H=K[W];if(H.name===Q||H.uuid===Q)return H;let Y=$(H.children);if(Y)return Y}return null},Z=$(J.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)J[Q++]=$[Z]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,Z=Q.propertyName,K=Q.propertyIndex;if(!J)J=$J.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){S0("PropertyBinding: No target node found for track: "+this.path+".");return}if($){let X=Q.objectIndex;switch($){case"materials":if(!J.material){T0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){T0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){T0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===X){X=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){T0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){T0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){T0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(X!==void 0){if(J[X]===void 0){T0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[X]}}let W=J[Z];if(W===void 0){let X=Q.nodeName;T0("PropertyBinding: Trying to update property for track: "+X+"."+Z+" but it wasn't found.",J);return}let H=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)H=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)H=this.Versioning.MatrixWorldNeedsUpdate;let Y=this.BindingType.Direct;if(K!==void 0){if(Z==="morphTargetInfluences"){if(!J.geometry){T0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){T0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[K]!==void 0)K=J.morphTargetDictionary[K]}Y=this.BindingType.ArrayElement,this.resolvedProperty=W,this.propertyIndex=K}else if(W.fromArray!==void 0&&W.toArray!==void 0)Y=this.BindingType.HasFromToArray,this.resolvedProperty=W;else if(Array.isArray(W))Y=this.BindingType.EntireArray,this.resolvedProperty=W;else this.propertyName=Z;this.getValue=this.GetterByBindingType[Y],this.setValue=this.SetterByBindingTypeAndVersioning[Y][H]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}$J.Composite=VK;$J.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$J.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$J.prototype.GetterByBindingType=[$J.prototype._getValue_direct,$J.prototype._getValue_array,$J.prototype._getValue_arrayElement,$J.prototype._getValue_toArray];$J.prototype.SetterByBindingTypeAndVersioning=[[$J.prototype._setValue_direct,$J.prototype._setValue_direct_setNeedsUpdate,$J.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$J.prototype._setValue_array,$J.prototype._setValue_array_setNeedsUpdate,$J.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$J.prototype._setValue_arrayElement,$J.prototype._setValue_arrayElement_setNeedsUpdate,$J.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$J.prototype._setValue_fromArray,$J.prototype._setValue_fromArray_setNeedsUpdate,$J.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var e5=new Float32Array(1);var GZ=new WJ;class P6{constructor(J,Q,$=0,Z=1/0){this.ray=new R6(J,Q),this.near=$,this.far=Z,this.camera=null,this.layers=new D7,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(J,Q){this.ray.set(J,Q)}setFromCamera(J,Q){if(Q.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(Q.matrixWorld),this.ray.direction.set(J.x,J.y,0.5).unproject(Q).sub(this.ray.origin).normalize(),this.camera=Q;else if(Q.isOrthographicCamera)this.ray.origin.set(J.x,J.y,Q.projectionMatrix.elements[14]).unproject(Q),this.ray.direction.set(0,0,-1).transformDirection(Q.matrixWorld),this.camera=Q;else T0("Raycaster: Unsupported camera type: "+Q.type)}setFromXRController(J){return GZ.identity().extractRotation(J.matrixWorld),this.ray.origin.setFromMatrixPosition(J.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(GZ),this}intersectObject(J,Q=!0,$=[]){return $Q(J,this,$,Q),$.sort(FZ),$}intersectObjects(J,Q=!0,$=[]){for(let Z=0,K=J.length;Z<K;Z++)$Q(J[Z],this,$,Q);return $.sort(FZ),$}}function FZ(J,Q){return J.distance-Q.distance}function $Q(J,Q,$,Z){let K=!0;if(J.layers.test(Q.layers)){if(J.raycast(Q,$)===!1)K=!1}if(K===!0&&Z===!0){let W=J.children;for(let H=0,Y=W.length;H<Y;H++)$Q(W[H],Q,$,!0)}}class A${static{A$.prototype.isMatrix2=!0}constructor(J,Q,$,Z){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,$,Z)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let $=0;$<4;$++)this.elements[$]=J[$+Q];return this}set(J,Q,$,Z){let K=this.elements;return K[0]=J,K[2]=Q,K[1]=$,K[3]=Z,this}}function P$(J,Q,$,Z){let K=eW(Z);switch($){case 1021:return J*Q;case 1028:return J*Q/K.components*K.byteLength;case 1029:return J*Q/K.components*K.byteLength;case 1030:return J*Q*2/K.components*K.byteLength;case 1031:return J*Q*2/K.components*K.byteLength;case 1022:return J*Q*3/K.components*K.byteLength;case 1023:return J*Q*4/K.components*K.byteLength;case 1033:return J*Q*4/K.components*K.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function eW(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));if(typeof window<"u")if(window.__THREE__)S0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="185";function dK(){let J=null,Q=!1,$=null,Z=null;function K(W,H){$(W,H),Z=J.requestAnimationFrame(K)}return{start:function(){if(Q===!0)return;if($===null)return;if(J===null)return;Z=J.requestAnimationFrame(K),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(Z);Q=!1},setAnimationLoop:function(W){$=W},setContext:function(W){J=W}}}function JH(J){let Q=new WeakMap;function $(Y,X){let{array:U,usage:G}=Y,F=U.byteLength,N=J.createBuffer();J.bindBuffer(X,N),J.bufferData(X,U,G),Y.onUploadCallback();let E;if(U instanceof Float32Array)E=J.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)E=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(Y.isFloat16BufferAttribute)E=J.HALF_FLOAT;else E=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)E=J.SHORT;else if(U instanceof Uint32Array)E=J.UNSIGNED_INT;else if(U instanceof Int32Array)E=J.INT;else if(U instanceof Int8Array)E=J.BYTE;else if(U instanceof Uint8Array)E=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)E=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:N,type:E,bytesPerElement:U.BYTES_PER_ELEMENT,version:Y.version,size:F}}function Z(Y,X,U){let{array:G,updateRanges:F}=X;if(J.bindBuffer(U,Y),F.length===0)J.bufferSubData(U,0,G);else{F.sort((E,L)=>E.start-L.start);let N=0;for(let E=1;E<F.length;E++){let L=F[N],B=F[E];if(B.start<=L.start+L.count+1)L.count=Math.max(L.count,B.start+B.count-L.start);else++N,F[N]=B}F.length=N+1;for(let E=0,L=F.length;E<L;E++){let B=F[E];J.bufferSubData(U,B.start*G.BYTES_PER_ELEMENT,G,B.start,B.count)}X.clearUpdateRanges()}X.onUploadCallback()}function K(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;return Q.get(Y)}function W(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;let X=Q.get(Y);if(X)J.deleteBuffer(X.buffer),Q.delete(Y)}function H(Y,X){if(Y.isInterleavedBufferAttribute)Y=Y.data;if(Y.isGLBufferAttribute){let G=Q.get(Y);if(!G||G.version<Y.version)Q.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}let U=Q.get(Y);if(U===void 0)Q.set(Y,$(Y,X));else if(U.version<Y.version){if(U.size!==Y.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(U.buffer,Y,X),U.version=Y.version}}return{get:K,remove:W,update:H}}var QH=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$H=`#ifdef USE_ALPHAHASH
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
#endif`,ZH=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,KH=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WH=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,HH=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,YH=`#ifdef USE_AOMAP
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
#endif`,XH=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,UH=`#ifdef USE_BATCHING
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
#endif`,qH=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,NH=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,GH=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,FH=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,OH=`#ifdef USE_IRIDESCENCE
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
#endif`,EH=`#ifdef USE_BUMPMAP
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
#endif`,DH=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,RH=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kH=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,LH=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,VH=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,MH=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zH=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,BH=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,IH=`#define PI 3.141592653589793
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
} // validated`,AH=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,PH=`vec3 transformedNormal = objectNormal;
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
#endif`,CH=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_H=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wH=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,TH=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,SH="gl_FragColor = linearToOutputTexel( gl_FragColor );",jH=`vec4 LinearTransferOETF( in vec4 value ) {
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
#endif`,vH=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,fH=`#ifdef USE_ENVMAP
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
#endif`,bH=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hH=`#ifdef USE_ENVMAP
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
#endif`,xH=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gH=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pH=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mH=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lH=`#ifdef USE_GRADIENTMAP
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
}`,dH=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uH=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cH=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nH=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,sH=`#ifdef USE_ENVMAP
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
#endif`,iH=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oH=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,aH=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rH=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tH=`PhysicalMaterial material;
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
#endif`,eH=`uniform sampler2D dfgLUT;
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
}`,JY=`
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
#endif`,QY=`#if defined( RE_IndirectDiffuse )
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
#endif`,$Y=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ZY=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,KY=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WY=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HY=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YY=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,XY=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,UY=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qY=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,NY=`#if defined( USE_POINTS_UV )
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
#endif`,GY=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,FY=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,OY=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,EY=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,DY=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RY=`#ifdef USE_MORPHTARGETS
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
#endif`,kY=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LY=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,VY=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,MY=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zY=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BY=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,IY=`#ifdef USE_NORMALMAP
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
#endif`,AY=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,PY=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,CY=`#ifdef USE_CLEARCOATMAP
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
#endif`,wY=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,TY=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,SY=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jY=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yY=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vY=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fY=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bY=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hY=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xY=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gY=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pY=`float getShadowMask() {
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
}`,mY=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lY=`#ifdef USE_SKINNING
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
#endif`,dY=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uY=`#ifdef USE_SKINNING
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
#endif`,cY=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nY=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sY=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iY=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,oY=`#ifdef USE_TRANSMISSION
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
#endif`,aY=`#ifdef USE_TRANSMISSION
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
#endif`,rY=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tY=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eY=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JX=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,QX=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$X=`uniform sampler2D t2D;
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
}`,ZX=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KX=`#ifdef ENVMAP_TYPE_CUBE
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
}`,WX=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HX=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YX=`#include <common>
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
}`,XX=`#if DEPTH_PACKING == 3200
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
}`,UX=`#define DISTANCE
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
}`,qX=`#define DISTANCE
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
}`,NX=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,GX=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FX=`uniform float scale;
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
}`,OX=`uniform vec3 diffuse;
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
}`,EX=`#include <common>
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
}`,DX=`uniform vec3 diffuse;
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
}`,RX=`#define LAMBERT
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
}`,kX=`#define LAMBERT
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
}`,LX=`#define MATCAP
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
}`,VX=`#define MATCAP
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
}`,MX=`#define NORMAL
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
}`,zX=`#define NORMAL
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
}`,BX=`#define PHONG
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
}`,IX=`#define PHONG
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
}`,AX=`#define STANDARD
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
}`,PX=`#define STANDARD
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
}`,CX=`#define TOON
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
}`,wX=`uniform float size;
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
}`,TX=`uniform vec3 diffuse;
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
}`,SX=`#include <common>
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
}`,jX=`uniform vec3 color;
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
}`,vX=`uniform vec3 diffuse;
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
}`,p0={alphahash_fragment:QH,alphahash_pars_fragment:$H,alphamap_fragment:ZH,alphamap_pars_fragment:KH,alphatest_fragment:WH,alphatest_pars_fragment:HH,aomap_fragment:YH,aomap_pars_fragment:XH,batching_pars_vertex:UH,batching_vertex:qH,begin_vertex:NH,beginnormal_vertex:GH,bsdfs:FH,iridescence_fragment:OH,bumpmap_pars_fragment:EH,clipping_planes_fragment:DH,clipping_planes_pars_fragment:RH,clipping_planes_pars_vertex:kH,clipping_planes_vertex:LH,color_fragment:VH,color_pars_fragment:MH,color_pars_vertex:zH,color_vertex:BH,common:IH,cube_uv_reflection_fragment:AH,defaultnormal_vertex:PH,displacementmap_pars_vertex:CH,displacementmap_vertex:_H,emissivemap_fragment:wH,emissivemap_pars_fragment:TH,colorspace_fragment:SH,colorspace_pars_fragment:jH,envmap_fragment:yH,envmap_common_pars_fragment:vH,envmap_pars_fragment:fH,envmap_pars_vertex:bH,envmap_physical_pars_fragment:sH,envmap_vertex:hH,fog_vertex:xH,fog_pars_vertex:gH,fog_fragment:pH,fog_pars_fragment:mH,gradientmap_pars_fragment:lH,lightmap_pars_fragment:dH,lights_lambert_fragment:uH,lights_lambert_pars_fragment:cH,lights_pars_begin:nH,lights_toon_fragment:iH,lights_toon_pars_fragment:oH,lights_phong_fragment:aH,lights_phong_pars_fragment:rH,lights_physical_fragment:tH,lights_physical_pars_fragment:eH,lights_fragment_begin:JY,lights_fragment_maps:QY,lights_fragment_end:$Y,lightprobes_pars_fragment:ZY,logdepthbuf_fragment:KY,logdepthbuf_pars_fragment:WY,logdepthbuf_pars_vertex:HY,logdepthbuf_vertex:YY,map_fragment:XY,map_pars_fragment:UY,map_particle_fragment:qY,map_particle_pars_fragment:NY,metalnessmap_fragment:GY,metalnessmap_pars_fragment:FY,morphinstance_vertex:OY,morphcolor_vertex:EY,morphnormal_vertex:DY,morphtarget_pars_vertex:RY,morphtarget_vertex:kY,normal_fragment_begin:LY,normal_fragment_maps:VY,normal_pars_fragment:MY,normal_pars_vertex:zY,normal_vertex:BY,normalmap_pars_fragment:IY,clearcoat_normal_fragment_begin:AY,clearcoat_normal_fragment_maps:PY,clearcoat_pars_fragment:CY,iridescence_pars_fragment:_Y,opaque_fragment:wY,packing:TY,premultiplied_alpha_fragment:SY,project_vertex:jY,dithering_fragment:yY,dithering_pars_fragment:vY,roughnessmap_fragment:fY,roughnessmap_pars_fragment:bY,shadowmap_pars_fragment:hY,shadowmap_pars_vertex:xY,shadowmap_vertex:gY,shadowmask_pars_fragment:pY,skinbase_vertex:mY,skinning_pars_vertex:lY,skinning_vertex:dY,skinnormal_vertex:uY,specularmap_fragment:cY,specularmap_pars_fragment:nY,tonemapping_fragment:sY,tonemapping_pars_fragment:iY,transmission_fragment:oY,transmission_pars_fragment:aY,uv_pars_fragment:rY,uv_pars_vertex:tY,uv_vertex:eY,worldpos_vertex:JX,background_vert:QX,background_frag:$X,backgroundCube_vert:ZX,backgroundCube_frag:KX,cube_vert:WX,cube_frag:HX,depth_vert:YX,depth_frag:XX,distance_vert:UX,distance_frag:qX,equirect_vert:NX,equirect_frag:GX,linedashed_vert:FX,linedashed_frag:OX,meshbasic_vert:EX,meshbasic_frag:DX,meshlambert_vert:RX,meshlambert_frag:kX,meshmatcap_vert:LX,meshmatcap_frag:VX,meshnormal_vert:MX,meshnormal_frag:zX,meshphong_vert:BX,meshphong_frag:IX,meshphysical_vert:AX,meshphysical_frag:PX,meshtoon_vert:CX,meshtoon_frag:_X,points_vert:wX,points_frag:TX,shadow_vert:SX,shadow_frag:jX,sprite_vert:yX,sprite_frag:vX},G0={common:{diffuse:{value:new d0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new y0},alphaMap:{value:null},alphaMapTransform:{value:new y0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new y0}},envmap:{envMap:{value:null},envMapRotation:{value:new y0},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new y0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new y0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new y0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new y0},normalScale:{value:new l0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new y0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new y0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new y0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new y0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new d0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new v},probesMax:{value:new v},probesResolution:{value:new v}},points:{diffuse:{value:new d0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new y0},alphaTest:{value:0},uvTransform:{value:new y0}},sprite:{diffuse:{value:new d0(16777215)},opacity:{value:1},center:{value:new l0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new y0},alphaMap:{value:null},alphaMapTransform:{value:new y0},alphaTest:{value:0}}},V9={basic:{uniforms:gJ([G0.common,G0.specularmap,G0.envmap,G0.aomap,G0.lightmap,G0.fog]),vertexShader:p0.meshbasic_vert,fragmentShader:p0.meshbasic_frag},lambert:{uniforms:gJ([G0.common,G0.specularmap,G0.envmap,G0.aomap,G0.lightmap,G0.emissivemap,G0.bumpmap,G0.normalmap,G0.displacementmap,G0.fog,G0.lights,{emissive:{value:new d0(0)},envMapIntensity:{value:1}}]),vertexShader:p0.meshlambert_vert,fragmentShader:p0.meshlambert_frag},phong:{uniforms:gJ([G0.common,G0.specularmap,G0.envmap,G0.aomap,G0.lightmap,G0.emissivemap,G0.bumpmap,G0.normalmap,G0.displacementmap,G0.fog,G0.lights,{emissive:{value:new d0(0)},specular:{value:new d0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:p0.meshphong_vert,fragmentShader:p0.meshphong_frag},standard:{uniforms:gJ([G0.common,G0.envmap,G0.aomap,G0.lightmap,G0.emissivemap,G0.bumpmap,G0.normalmap,G0.displacementmap,G0.roughnessmap,G0.metalnessmap,G0.fog,G0.lights,{emissive:{value:new d0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:p0.meshphysical_vert,fragmentShader:p0.meshphysical_frag},toon:{uniforms:gJ([G0.common,G0.aomap,G0.lightmap,G0.emissivemap,G0.bumpmap,G0.normalmap,G0.displacementmap,G0.gradientmap,G0.fog,G0.lights,{emissive:{value:new d0(0)}}]),vertexShader:p0.meshtoon_vert,fragmentShader:p0.meshtoon_frag},matcap:{uniforms:gJ([G0.common,G0.bumpmap,G0.normalmap,G0.displacementmap,G0.fog,{matcap:{value:null}}]),vertexShader:p0.meshmatcap_vert,fragmentShader:p0.meshmatcap_frag},points:{uniforms:gJ([G0.points,G0.fog]),vertexShader:p0.points_vert,fragmentShader:p0.points_frag},dashed:{uniforms:gJ([G0.common,G0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:p0.linedashed_vert,fragmentShader:p0.linedashed_frag},depth:{uniforms:gJ([G0.common,G0.displacementmap]),vertexShader:p0.depth_vert,fragmentShader:p0.depth_frag},normal:{uniforms:gJ([G0.common,G0.bumpmap,G0.normalmap,G0.displacementmap,{opacity:{value:1}}]),vertexShader:p0.meshnormal_vert,fragmentShader:p0.meshnormal_frag},sprite:{uniforms:gJ([G0.sprite,G0.fog]),vertexShader:p0.sprite_vert,fragmentShader:p0.sprite_frag},background:{uniforms:{uvTransform:{value:new y0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:p0.background_vert,fragmentShader:p0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new y0}},vertexShader:p0.backgroundCube_vert,fragmentShader:p0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:p0.cube_vert,fragmentShader:p0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:p0.equirect_vert,fragmentShader:p0.equirect_frag},distance:{uniforms:gJ([G0.common,G0.displacementmap,{referencePosition:{value:new v},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:p0.distance_vert,fragmentShader:p0.distance_frag},shadow:{uniforms:gJ([G0.lights,G0.fog,{color:{value:new d0(0)},opacity:{value:1}}]),vertexShader:p0.shadow_vert,fragmentShader:p0.shadow_frag}};V9.physical={uniforms:gJ([V9.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new y0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new y0},clearcoatNormalScale:{value:new l0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new y0},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new y0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new y0},sheen:{value:0},sheenColor:{value:new d0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new y0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new y0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new y0},transmissionSamplerSize:{value:new l0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new y0},attenuationDistance:{value:0},attenuationColor:{value:new d0(0)},specularColor:{value:new d0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new y0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new y0},anisotropyVector:{value:new l0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new y0}}]),vertexShader:p0.meshphysical_vert,fragmentShader:p0.meshphysical_frag};var C6={r:0,b:0,g:0},fX=new WJ,uK=new y0;uK.set(-1,0,0,0,1,0,0,0,1);function bX(J,Q,$,Z,K,W){let H=new d0(0),Y=K===!0?0:1,X,U,G=null,F=0,N=null;function E(w){let C=w.isScene===!0?w.background:null;if(C&&C.isTexture){let M=w.backgroundBlurriness>0;C=Q.get(C,M)}return C}function L(w){let C=!1,M=E(w);if(M===null)O(H,Y);else if(M&&M.isColor)O(M,1),C=!0;let I=J.xr.getEnvironmentBlendMode();if(I==="additive")$.buffers.color.setClear(0,0,0,1,W);else if(I==="alpha-blend")$.buffers.color.setClear(0,0,0,0,W);if(J.autoClear||C)$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function B(w,C){let M=E(C);if(M&&(M.isCubeTexture||M.mapping===N7)){if(U===void 0)U=new j0(new DJ(1,1,1),new Q9({name:"BackgroundCubeMaterial",uniforms:F8(V9.backgroundCube.uniforms),vertexShader:V9.backgroundCube.vertexShader,fragmentShader:V9.backgroundCube.fragmentShader,side:xJ,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),U.geometry.deleteAttribute("uv"),U.onBeforeRender=function(I,A,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(U.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),Z.update(U);if(U.material.uniforms.envMap.value=M,U.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,U.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,U.material.uniforms.backgroundRotation.value.setFromMatrix4(fX.makeRotationFromEuler(C.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1)U.material.uniforms.backgroundRotation.value.premultiply(uK);if(U.material.toneMapped=i0.getTransfer(M.colorSpace)!==qJ,G!==M||F!==M.version||N!==J.toneMapping)U.material.needsUpdate=!0,G=M,F=M.version,N=J.toneMapping;U.layers.enableAll(),w.unshift(U,U.geometry,U.material,0,0,null)}else if(M&&M.isTexture){if(X===void 0)X=new j0(new N9(2,2),new Q9({name:"BackgroundMaterial",uniforms:F8(V9.background.uniforms),vertexShader:V9.background.vertexShader,fragmentShader:V9.background.fragmentShader,side:l8,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),X.geometry.deleteAttribute("normal"),Object.defineProperty(X.material,"map",{get:function(){return this.uniforms.t2D.value}}),Z.update(X);if(X.material.uniforms.t2D.value=M,X.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,X.material.toneMapped=i0.getTransfer(M.colorSpace)!==qJ,M.matrixAutoUpdate===!0)M.updateMatrix();if(X.material.uniforms.uvTransform.value.copy(M.matrix),G!==M||F!==M.version||N!==J.toneMapping)X.material.needsUpdate=!0,G=M,F=M.version,N=J.toneMapping;X.layers.enableAll(),w.unshift(X,X.geometry,X.material,0,0,null)}}function O(w,C){w.getRGB(C6,H$(J)),$.buffers.color.setClear(C6.r,C6.g,C6.b,C,W)}function q(){if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0;if(X!==void 0)X.geometry.dispose(),X.material.dispose(),X=void 0}return{getClearColor:function(){return H},setClearColor:function(w,C=1){H.set(w),Y=C,O(H,Y)},getClearAlpha:function(){return Y},setClearAlpha:function(w){Y=w,O(H,Y)},render:L,addToRenderList:B,dispose:q}}function hX(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),Z={},K=N(null),W=K,H=!1;function Y(P,g,s,x,u){let c=!1,f=F(P,x,s,g);if(W!==f)W=f,U(W.object);if(c=E(P,x,s,u),c)L(P,x,s,u);if(u!==null)Q.update(u,J.ELEMENT_ARRAY_BUFFER);if(c||H){if(H=!1,M(P,g,s,x),u!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(u).buffer)}}function X(){return J.createVertexArray()}function U(P){return J.bindVertexArray(P)}function G(P){return J.deleteVertexArray(P)}function F(P,g,s,x){let u=x.wireframe===!0,c=Z[g.id];if(c===void 0)c={},Z[g.id]=c;let f=P.isInstancedMesh===!0?P.id:0,t=c[f];if(t===void 0)t={},c[f]=t;let e=t[s.id];if(e===void 0)e={},t[s.id]=e;let K0=e[u];if(K0===void 0)K0=N(X()),e[u]=K0;return K0}function N(P){let g=[],s=[],x=[];for(let u=0;u<$;u++)g[u]=0,s[u]=0,x[u]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:g,enabledAttributes:s,attributeDivisors:x,object:P,attributes:{},index:null}}function E(P,g,s,x){let u=W.attributes,c=g.attributes,f=0,t=s.getAttributes();for(let e in t)if(t[e].location>=0){let M0=u[e],k0=c[e];if(k0===void 0){if(e==="instanceMatrix"&&P.instanceMatrix)k0=P.instanceMatrix;if(e==="instanceColor"&&P.instanceColor)k0=P.instanceColor}if(M0===void 0)return!0;if(M0.attribute!==k0)return!0;if(k0&&M0.data!==k0.data)return!0;f++}if(W.attributesNum!==f)return!0;if(W.index!==x)return!0;return!1}function L(P,g,s,x){let u={},c=g.attributes,f=0,t=s.getAttributes();for(let e in t)if(t[e].location>=0){let M0=c[e];if(M0===void 0){if(e==="instanceMatrix"&&P.instanceMatrix)M0=P.instanceMatrix;if(e==="instanceColor"&&P.instanceColor)M0=P.instanceColor}let k0={};if(k0.attribute=M0,M0&&M0.data)k0.data=M0.data;u[e]=k0,f++}W.attributes=u,W.attributesNum=f,W.index=x}function B(){let P=W.newAttributes;for(let g=0,s=P.length;g<s;g++)P[g]=0}function O(P){q(P,0)}function q(P,g){let{newAttributes:s,enabledAttributes:x,attributeDivisors:u}=W;if(s[P]=1,x[P]===0)J.enableVertexAttribArray(P),x[P]=1;if(u[P]!==g)J.vertexAttribDivisor(P,g),u[P]=g}function w(){let{newAttributes:P,enabledAttributes:g}=W;for(let s=0,x=g.length;s<x;s++)if(g[s]!==P[s])J.disableVertexAttribArray(s),g[s]=0}function C(P,g,s,x,u,c,f){if(f===!0)J.vertexAttribIPointer(P,g,s,u,c);else J.vertexAttribPointer(P,g,s,x,u,c)}function M(P,g,s,x){B();let u=x.attributes,c=s.getAttributes(),f=g.defaultAttributeValues;for(let t in c){let e=c[t];if(e.location>=0){let K0=u[t];if(K0===void 0){if(t==="instanceMatrix"&&P.instanceMatrix)K0=P.instanceMatrix;if(t==="instanceColor"&&P.instanceColor)K0=P.instanceColor}if(K0!==void 0){let{normalized:M0,itemSize:k0}=K0,HJ=Q.get(K0);if(HJ===void 0)continue;let{buffer:o0,type:o,bytesPerElement:W0}=HJ,q0=o===J.INT||o===J.UNSIGNED_INT||K0.gpuType===OQ;if(K0.isInterleavedBufferAttribute){let D0=K0.data,C0=D0.stride,c0=K0.offset;if(D0.isInstancedInterleavedBuffer){for(let b0=0;b0<e.locationSize;b0++)q(e.location+b0,D0.meshPerAttribute);if(P.isInstancedMesh!==!0&&x._maxInstanceCount===void 0)x._maxInstanceCount=D0.meshPerAttribute*D0.count}else for(let b0=0;b0<e.locationSize;b0++)O(e.location+b0);J.bindBuffer(J.ARRAY_BUFFER,o0);for(let b0=0;b0<e.locationSize;b0++)C(e.location+b0,k0/e.locationSize,o,M0,C0*W0,(c0+k0/e.locationSize*b0)*W0,q0)}else{if(K0.isInstancedBufferAttribute){for(let D0=0;D0<e.locationSize;D0++)q(e.location+D0,K0.meshPerAttribute);if(P.isInstancedMesh!==!0&&x._maxInstanceCount===void 0)x._maxInstanceCount=K0.meshPerAttribute*K0.count}else for(let D0=0;D0<e.locationSize;D0++)O(e.location+D0);J.bindBuffer(J.ARRAY_BUFFER,o0);for(let D0=0;D0<e.locationSize;D0++)C(e.location+D0,k0/e.locationSize,o,M0,k0*W0,k0/e.locationSize*D0*W0,q0)}}else if(f!==void 0){let M0=f[t];if(M0!==void 0)switch(M0.length){case 2:J.vertexAttrib2fv(e.location,M0);break;case 3:J.vertexAttrib3fv(e.location,M0);break;case 4:J.vertexAttrib4fv(e.location,M0);break;default:J.vertexAttrib1fv(e.location,M0)}}}}w()}function I(){z();for(let P in Z){let g=Z[P];for(let s in g){let x=g[s];for(let u in x){let c=x[u];for(let f in c)G(c[f].object),delete c[f];delete x[u]}}delete Z[P]}}function A(P){if(Z[P.id]===void 0)return;let g=Z[P.id];for(let s in g){let x=g[s];for(let u in x){let c=x[u];for(let f in c)G(c[f].object),delete c[f];delete x[u]}}delete Z[P.id]}function _(P){for(let g in Z){let s=Z[g];for(let x in s){let u=s[x];if(u[P.id]===void 0)continue;let c=u[P.id];for(let f in c)G(c[f].object),delete c[f];delete u[P.id]}}}function R(P){for(let g in Z){let s=Z[g],x=P.isInstancedMesh===!0?P.id:0,u=s[x];if(u===void 0)continue;for(let c in u){let f=u[c];for(let t in f)G(f[t].object),delete f[t];delete u[c]}if(delete s[x],Object.keys(s).length===0)delete Z[g]}}function z(){if(l(),H=!0,W===K)return;W=K,U(W.object)}function l(){K.geometry=null,K.program=null,K.wireframe=!1}return{setup:Y,reset:z,resetDefaultState:l,dispose:I,releaseStatesOfGeometry:A,releaseStatesOfObject:R,releaseStatesOfProgram:_,initAttributes:B,enableAttribute:O,disableUnusedAttributes:w}}function xX(J,Q,$){let Z;function K(X){Z=X}function W(X,U){J.drawArrays(Z,X,U),$.update(U,Z,1)}function H(X,U,G){if(G===0)return;J.drawArraysInstanced(Z,X,U,G),$.update(U,Z,G)}function Y(X,U,G){if(G===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,X,0,U,0,G);let N=0;for(let E=0;E<G;E++)N+=U[E];$.update(N,Z,1)}this.setMode=K,this.render=W,this.renderInstances=H,this.renderMultiDraw=Y}function gX(J,Q,$,Z){let K;function W(){if(K!==void 0)return K;if(Q.has("EXT_texture_filter_anisotropic")===!0){let _=Q.get("EXT_texture_filter_anisotropic");K=J.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else K=0;return K}function H(_){if(_!==k9&&Z.convert(_)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Y(_){let R=_===T9&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(_!==X9&&Z.convert(_)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&_!==w9&&!R)return!1;return!0}function X(_){if(_==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";_="mediump"}if(_==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=$.precision!==void 0?$.precision:"highp",G=X(U);if(G!==U)S0("WebGLRenderer:",U,"not supported, using",G,"instead."),U=G;let F=$.logarithmicDepthBuffer===!0,N=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control");if($.reversedDepthBuffer===!0&&N===!1)S0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let E=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),L=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),B=J.getParameter(J.MAX_TEXTURE_SIZE),O=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),q=J.getParameter(J.MAX_VERTEX_ATTRIBS),w=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),C=J.getParameter(J.MAX_VARYING_VECTORS),M=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),I=J.getParameter(J.MAX_SAMPLES),A=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:W,getMaxPrecision:X,textureFormatReadable:H,textureTypeReadable:Y,precision:U,logarithmicDepthBuffer:F,reversedDepthBuffer:N,maxTextures:E,maxVertexTextures:L,maxTextureSize:B,maxCubemapSize:O,maxAttributes:q,maxVertexUniforms:w,maxVaryings:C,maxFragmentUniforms:M,maxSamples:I,samples:A}}function pX(J){let Q=this,$=null,Z=0,K=!1,W=!1,H=new C9,Y=new y0,X={value:null,needsUpdate:!1};this.uniform=X,this.numPlanes=0,this.numIntersection=0,this.init=function(F,N){let E=F.length!==0||N||Z!==0||K;return K=N,Z=F.length,E},this.beginShadows=function(){W=!0,G(null)},this.endShadows=function(){W=!1},this.setGlobalState=function(F,N){$=G(F,N,0)},this.setState=function(F,N,E){let{clippingPlanes:L,clipIntersection:B,clipShadows:O}=F,q=J.get(F);if(!K||L===null||L.length===0||W&&!O)if(W)G(null);else U();else{let w=W?0:Z,C=w*4,M=q.clippingState||null;X.value=M,M=G(L,N,C,E);for(let I=0;I!==C;++I)M[I]=$[I];q.clippingState=M,this.numIntersection=B?this.numPlanes:0,this.numPlanes+=w}};function U(){if(X.value!==$)X.value=$,X.needsUpdate=Z>0;Q.numPlanes=Z,Q.numIntersection=0}function G(F,N,E,L){let B=F!==null?F.length:0,O=null;if(B!==0){if(O=X.value,L!==!0||O===null){let q=E+B*4,w=N.matrixWorldInverse;if(Y.getNormalMatrix(w),O===null||O.length<q)O=new Float32Array(q);for(let C=0,M=E;C!==B;++C,M+=4)H.copy(F[C]).applyMatrix4(w,Y),H.normal.toArray(O,M),O[M+3]=H.constant}X.value=O,X.needsUpdate=!0}return Q.numPlanes=B,Q.numIntersection=0,O}}var o9=4,MK=[0.125,0.215,0.35,0.446,0.526,0.582],R8=20,mX=256,L7=new A6,zK=new d0,C$=null,_$=0,w$=0,T$=!1,lX=new v;class B7{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,Q=0,$=0.1,Z=100,K={}){let{size:W=256,position:H=lX}=K;C$=this._renderer.getRenderTarget(),_$=this._renderer.getActiveCubeFace(),w$=this._renderer.getActiveMipmapLevel(),T$=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(W);let Y=this._allocateTargets();if(Y.depthBuffer=!0,this._sceneToCubeUV(J,$,Z,Y,H),Q>0)this._blur(Y,0,0,Q);return this._applyPMREM(Y),this._cleanup(Y),Y}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=AK(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=IK(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget(C$,_$,w$),this._renderer.xr.enabled=T$,J.scissorTest=!1,o8(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===u8||J.mapping===W8)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);C$=this._renderer.getRenderTarget(),_$=this._renderer.getActiveCubeFace(),w$=this._renderer.getActiveMipmapLevel(),T$=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let $=Q||this._allocateTargets();return this._textureToCubeUV(J,$),this._applyPMREM($),this._cleanup($),$}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,$={magFilter:SJ,minFilter:SJ,generateMipmaps:!1,type:T9,format:k9,colorSpace:rQ,depthBuffer:!1},Z=BK(J,Q,$);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=BK(J,Q,$);let{_lodMax:K}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=dX(K)),this._blurMaterial=cX(K,J,Q),this._ggxMaterial=uX(K,J,Q)}return Z}_compileMaterial(J){let Q=new j0(new U9,J);this._renderer.compile(Q,L7)}_sceneToCubeUV(J,Q,$,Z,K){let Y=new bJ(90,1,Q,$),X=[1,-1,1,1,1,1],U=[1,1,1,-1,-1,-1],G=this._renderer,F=G.autoClear,N=G.toneMapping;if(G.getClearColor(zK),G.toneMapping=Y9,G.autoClear=!1,G.state.buffers.depth.getReversed())G.setRenderTarget(Z),G.clearDepth(),G.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new j0(new DJ,new q9({name:"PMREM.Background",side:xJ,depthWrite:!1,depthTest:!1}));let L=this._backgroundBox,B=L.material,O=!1,q=J.background;if(q){if(q.isColor)B.color.copy(q),J.background=null,O=!0}else B.color.copy(zK),O=!0;for(let w=0;w<6;w++){let C=w%3;if(C===0)Y.up.set(0,X[w],0),Y.position.set(K.x,K.y,K.z),Y.lookAt(K.x+U[w],K.y,K.z);else if(C===1)Y.up.set(0,0,X[w]),Y.position.set(K.x,K.y,K.z),Y.lookAt(K.x,K.y+U[w],K.z);else Y.up.set(0,X[w],0),Y.position.set(K.x,K.y,K.z),Y.lookAt(K.x,K.y,K.z+U[w]);let M=this._cubeSize;if(o8(Z,C*M,w>2?M:0,M,M),G.setRenderTarget(Z),O)G.render(L,Y);G.render(J,Y)}G.toneMapping=N,G.autoClear=F,J.background=q}_textureToCubeUV(J,Q){let $=this._renderer,Z=J.mapping===u8||J.mapping===W8;if(Z){if(this._cubemapMaterial===null)this._cubemapMaterial=AK();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=IK();let K=Z?this._cubemapMaterial:this._equirectMaterial,W=this._lodMeshes[0];W.material=K;let H=K.uniforms;H.envMap.value=J;let Y=this._cubeSize;o8(Q,0,0,3*Y,2*Y),$.setRenderTarget(Q),$.render(W,L7)}_applyPMREM(J){let Q=this._renderer,$=Q.autoClear;Q.autoClear=!1;let Z=this._lodMeshes.length;for(let K=1;K<Z;K++)this._applyGGXFilter(J,K-1,K);Q.autoClear=$}_applyGGXFilter(J,Q,$){let Z=this._renderer,K=this._pingPongRenderTarget,W=this._ggxMaterial,H=this._lodMeshes[$];H.material=W;let Y=W.uniforms,X=$/(this._lodMeshes.length-1),U=Q/(this._lodMeshes.length-1),G=Math.sqrt(X*X-U*U),F=0+X*1.25,N=G*F,{_lodMax:E}=this,L=this._sizeLods[$],B=3*L*($>E-o9?$-E+o9:0),O=4*(this._cubeSize-L);Y.envMap.value=J.texture,Y.roughness.value=N,Y.mipInt.value=E-Q,o8(K,B,O,3*L,2*L),Z.setRenderTarget(K),Z.render(H,L7),Y.envMap.value=K.texture,Y.roughness.value=0,Y.mipInt.value=E-$,o8(J,B,O,3*L,2*L),Z.setRenderTarget(J),Z.render(H,L7)}_blur(J,Q,$,Z,K){let W=this._pingPongRenderTarget;this._halfBlur(J,W,Q,$,Z,"latitudinal",K),this._halfBlur(W,J,$,$,Z,"longitudinal",K)}_halfBlur(J,Q,$,Z,K,W,H){let Y=this._renderer,X=this._blurMaterial;if(W!=="latitudinal"&&W!=="longitudinal")T0("blur direction must be either latitudinal or longitudinal!");let U=3,G=this._lodMeshes[Z];G.material=X;let F=X.uniforms,N=this._sizeLods[$]-1,E=isFinite(K)?Math.PI/(2*N):2*Math.PI/(2*R8-1),L=K/E,B=isFinite(K)?1+Math.floor(U*L):R8;if(B>R8)S0(`sigmaRadians, ${K}, is too large and will clip, as it requested ${B} samples when the maximum is set to ${R8}`);let O=[],q=0;for(let A=0;A<R8;++A){let _=A/L,R=Math.exp(-_*_/2);if(O.push(R),A===0)q+=R;else if(A<B)q+=2*R}for(let A=0;A<O.length;A++)O[A]=O[A]/q;if(F.envMap.value=J.texture,F.samples.value=B,F.weights.value=O,F.latitudinal.value=W==="latitudinal",H)F.poleAxis.value=H;let{_lodMax:w}=this;F.dTheta.value=E,F.mipInt.value=w-$;let C=this._sizeLods[Z],M=3*C*(Z>w-o9?Z-w+o9:0),I=4*(this._cubeSize-C);o8(Q,M,I,3*C,2*C),Y.setRenderTarget(Q),Y.render(G,L7)}}function dX(J){let Q=[],$=[],Z=[],K=J,W=J-o9+1+MK.length;for(let H=0;H<W;H++){let Y=Math.pow(2,K);Q.push(Y);let X=1/Y;if(H>J-o9)X=MK[H-J+o9-1];else if(H===0)X=0;$.push(X);let U=1/(Y-2),G=-U,F=1+U,N=[G,G,F,G,F,F,G,G,F,F,G,F],E=6,L=6,B=3,O=2,q=1,w=new Float32Array(B*L*E),C=new Float32Array(O*L*E),M=new Float32Array(q*L*E);for(let A=0;A<E;A++){let _=A%3*2/3-1,R=A>2?0:-1,z=[_,R,0,_+0.6666666666666666,R,0,_+0.6666666666666666,R+1,0,_,R,0,_+0.6666666666666666,R+1,0,_,R+1,0];w.set(z,B*L*A),C.set(N,O*L*A);let l=[A,A,A,A,A,A];M.set(l,q*L*A)}let I=new U9;if(I.setAttribute("position",new oJ(w,B)),I.setAttribute("uv",new oJ(C,O)),I.setAttribute("faceIndex",new oJ(M,q)),Z.push(new j0(I,null)),K>o9)K--}return{lodMeshes:Z,sizeLods:Q,sigmas:$}}function BK(J,Q,$){let Z=new J9(J,Q,$);return Z.texture.mapping=N7,Z.texture.name="PMREM.cubeUv",Z.scissorTest=!0,Z}function o8(J,Q,$,Z,K){J.viewport.set(Q,$,Z,K),J.scissor.set(Q,$,Z,K)}function uX(J,Q,$){return new Q9({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:mX,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:w6(),fragmentShader:`

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
		`,blending:R9,depthTest:!1,depthWrite:!1})}function cX(J,Q,$){let Z=new Float32Array(R8),K=new v(0,1,0);return new Q9({name:"SphericalGaussianBlur",defines:{n:R8,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:Z},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:K}},vertexShader:w6(),fragmentShader:`

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
		`,blending:R9,depthTest:!1,depthWrite:!1})}function IK(){return new Q9({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:w6(),fragmentShader:`

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
		`,blending:R9,depthTest:!1,depthWrite:!1})}function AK(){return new Q9({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:w6(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:R9,depthTest:!1,depthWrite:!1})}function w6(){return`

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
	`}class f$ extends J9{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},Z=[$,$,$,$,$,$];this.texture=new L6(Z),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},Z=new DJ(5,5,5),K=new Q9({name:"CubemapFromEquirect",uniforms:F8($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:xJ,blending:R9});K.uniforms.tEquirect.value=Q;let W=new j0(Z,K),H=Q.minFilter;if(Q.minFilter===H8)Q.minFilter=SJ;return new M$(1,10,this).update(J,W),Q.minFilter=H,W.geometry.dispose(),W.material.dispose(),this}clear(J,Q=!0,$=!0,Z=!0){let K=J.getRenderTarget();for(let W=0;W<6;W++)J.setRenderTarget(this,W),J.clear(Q,$,Z);J.setRenderTarget(K)}}function nX(J){let Q=new WeakMap,$=new WeakMap,Z=null;function K(N,E=!1){if(N===null||N===void 0)return null;if(E)return H(N);return W(N)}function W(N){if(N&&N.isTexture){let E=N.mapping;if(E===$6||E===Z6)if(Q.has(N)){let L=Q.get(N).texture;return Y(L,N.mapping)}else{let L=N.image;if(L&&L.height>0){let B=new f$(L.height);return B.fromEquirectangularTexture(J,N),Q.set(N,B),N.addEventListener("dispose",U),Y(B.texture,N.mapping)}else return null}}return N}function H(N){if(N&&N.isTexture){let E=N.mapping,L=E===$6||E===Z6,B=E===u8||E===W8;if(L||B){let O=$.get(N),q=O!==void 0?O.texture.pmremVersion:0;if(N.isRenderTargetTexture&&N.pmremVersion!==q){if(Z===null)Z=new B7(J);return O=L?Z.fromEquirectangular(N,O):Z.fromCubemap(N,O),O.texture.pmremVersion=N.pmremVersion,$.set(N,O),O.texture}else if(O!==void 0)return O.texture;else{let w=N.image;if(L&&w&&w.height>0||B&&w&&X(w)){if(Z===null)Z=new B7(J);return O=L?Z.fromEquirectangular(N):Z.fromCubemap(N),O.texture.pmremVersion=N.pmremVersion,$.set(N,O),N.addEventListener("dispose",G),O.texture}else return null}}}return N}function Y(N,E){if(E===$6)N.mapping=u8;else if(E===Z6)N.mapping=W8;return N}function X(N){let E=0,L=6;for(let B=0;B<L;B++)if(N[B]!==void 0)E++;return E===L}function U(N){let E=N.target;E.removeEventListener("dispose",U);let L=Q.get(E);if(L!==void 0)Q.delete(E),L.dispose()}function G(N){let E=N.target;E.removeEventListener("dispose",G);let L=$.get(E);if(L!==void 0)$.delete(E),L.dispose()}function F(){if(Q=new WeakMap,$=new WeakMap,Z!==null)Z.dispose(),Z=null}return{get:K,dispose:F}}function sX(J){let Q={};function $(Z){if(Q[Z]!==void 0)return Q[Z];let K=J.getExtension(Z);return Q[Z]=K,K}return{has:function(Z){return $(Z)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(Z){let K=$(Z);if(K===null)K8("WebGLRenderer: "+Z+" extension not supported.");return K}}}function iX(J,Q,$,Z){let K={},W=new WeakMap;function H(F){let N=F.target;if(N.index!==null)Q.remove(N.index);for(let L in N.attributes)Q.remove(N.attributes[L]);N.removeEventListener("dispose",H),delete K[N.id];let E=W.get(N);if(E)Q.remove(E),W.delete(N);if(Z.releaseStatesOfGeometry(N),N.isInstancedBufferGeometry===!0)delete N._maxInstanceCount;$.memory.geometries--}function Y(F,N){if(K[N.id]===!0)return N;return N.addEventListener("dispose",H),K[N.id]=!0,$.memory.geometries++,N}function X(F){let N=F.attributes;for(let E in N)Q.update(N[E],J.ARRAY_BUFFER)}function U(F){let N=[],E=F.index,L=F.attributes.position,B=0;if(L===void 0)return;if(E!==null){let w=E.array;B=E.version;for(let C=0,M=w.length;C<M;C+=3){let I=w[C+0],A=w[C+1],_=w[C+2];N.push(I,A,A,_,_,I)}}else{let w=L.array;B=L.version;for(let C=0,M=w.length/3-1;C<M;C+=3){let I=C+0,A=C+1,_=C+2;N.push(I,A,A,_,_,I)}}let O=new(L.count>=65535?D6:E6)(N,1);O.version=B;let q=W.get(F);if(q)Q.remove(q);W.set(F,O)}function G(F){let N=W.get(F);if(N){let E=F.index;if(E!==null){if(N.version<E.version)U(F)}}else U(F);return W.get(F)}return{get:Y,update:X,getWireframeAttribute:G}}function oX(J,Q,$){let Z;function K(F){Z=F}let W,H;function Y(F){W=F.type,H=F.bytesPerElement}function X(F,N){J.drawElements(Z,N,W,F*H),$.update(N,Z,1)}function U(F,N,E){if(E===0)return;J.drawElementsInstanced(Z,N,W,F*H,E),$.update(N,Z,E)}function G(F,N,E){if(E===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,N,0,W,F,0,E);let B=0;for(let O=0;O<E;O++)B+=N[O];$.update(B,Z,1)}this.setMode=K,this.setIndex=Y,this.render=X,this.renderInstances=U,this.renderMultiDraw=G}function aX(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(W,H,Y){switch($.calls++,H){case J.TRIANGLES:$.triangles+=Y*(W/3);break;case J.LINES:$.lines+=Y*(W/2);break;case J.LINE_STRIP:$.lines+=Y*(W-1);break;case J.LINE_LOOP:$.lines+=Y*W;break;case J.POINTS:$.points+=Y*W;break;default:T0("WebGLInfo: Unknown draw mode:",H);break}}function K(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:K,update:Z}}function rX(J,Q,$){let Z=new WeakMap,K=new EJ;function W(H,Y,X){let U=H.morphTargetInfluences,G=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,F=G!==void 0?G.length:0,N=Z.get(Y);if(N===void 0||N.count!==F){let z=function(){_.dispose(),Z.delete(Y),Y.removeEventListener("dispose",z)};if(N!==void 0)N.texture.dispose();let E=Y.morphAttributes.position!==void 0,L=Y.morphAttributes.normal!==void 0,B=Y.morphAttributes.color!==void 0,O=Y.morphAttributes.position||[],q=Y.morphAttributes.normal||[],w=Y.morphAttributes.color||[],C=0;if(E===!0)C=1;if(L===!0)C=2;if(B===!0)C=3;let M=Y.attributes.position.count*C,I=1;if(M>Q.maxTextureSize)I=Math.ceil(M/Q.maxTextureSize),M=Q.maxTextureSize;let A=new Float32Array(M*I*4*F),_=new O6(A,M,I,F);_.type=w9,_.needsUpdate=!0;let R=C*4;for(let l=0;l<F;l++){let P=O[l],g=q[l],s=w[l],x=M*I*4*l;for(let u=0;u<P.count;u++){let c=u*R;if(E===!0)K.fromBufferAttribute(P,u),A[x+c+0]=K.x,A[x+c+1]=K.y,A[x+c+2]=K.z,A[x+c+3]=0;if(L===!0)K.fromBufferAttribute(g,u),A[x+c+4]=K.x,A[x+c+5]=K.y,A[x+c+6]=K.z,A[x+c+7]=0;if(B===!0)K.fromBufferAttribute(s,u),A[x+c+8]=K.x,A[x+c+9]=K.y,A[x+c+10]=K.z,A[x+c+11]=s.itemSize===4?K.w:1}}N={count:F,texture:_,size:new l0(M,I)},Z.set(Y,N),Y.addEventListener("dispose",z)}if(H.isInstancedMesh===!0&&H.morphTexture!==null)X.getUniforms().setValue(J,"morphTexture",H.morphTexture,$);else{let E=0;for(let B=0;B<U.length;B++)E+=U[B];let L=Y.morphTargetsRelative?1:1-E;X.getUniforms().setValue(J,"morphTargetBaseInfluence",L),X.getUniforms().setValue(J,"morphTargetInfluences",U)}X.getUniforms().setValue(J,"morphTargetsTexture",N.texture,$),X.getUniforms().setValue(J,"morphTargetsTextureSize",N.size)}return{update:W}}function tX(J,Q,$,Z,K){let W=new WeakMap;function H(U){let G=K.render.frame,F=U.geometry,N=Q.get(U,F);if(W.get(N)!==G)Q.update(N),W.set(N,G);if(U.isInstancedMesh){if(U.hasEventListener("dispose",X)===!1)U.addEventListener("dispose",X);if(W.get(U)!==G){if($.update(U.instanceMatrix,J.ARRAY_BUFFER),U.instanceColor!==null)$.update(U.instanceColor,J.ARRAY_BUFFER);W.set(U,G)}}if(U.isSkinnedMesh){let E=U.skeleton;if(W.get(E)!==G)E.update(),W.set(E,G)}return N}function Y(){W=new WeakMap}function X(U){let G=U.target;if(G.removeEventListener("dispose",X),Z.releaseStatesOfObject(G),$.remove(G.instanceMatrix),G.instanceColor!==null)$.remove(G.instanceColor)}return{update:H,dispose:Y}}var eX={[XQ]:"LINEAR_TONE_MAPPING",[UQ]:"REINHARD_TONE_MAPPING",[qQ]:"CINEON_TONE_MAPPING",[q7]:"ACES_FILMIC_TONE_MAPPING",[GQ]:"AGX_TONE_MAPPING",[FQ]:"NEUTRAL_TONE_MAPPING",[NQ]:"CUSTOM_TONE_MAPPING"};function JU(J,Q,$,Z,K,W){let H=new J9(Q,$,{type:J,depthBuffer:K,stencilBuffer:W,samples:Z?4:0,depthTexture:K?new s9(Q,$):void 0}),Y=new J9(Q,$,{type:T9,depthBuffer:!1,stencilBuffer:!1}),X=new U9;X.setAttribute("position",new lJ([-1,3,0,-1,-1,0,3,-1,0],3)),X.setAttribute("uv",new lJ([0,2,0,0,2,0],2));let U=new Y$({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),G=new j0(X,U),F=new A6(-1,1,1,-1,0,1),N=null,E=null,L=!1,B,O=null,q=[],w=!1;this.setSize=function(C,M){H.setSize(C,M),Y.setSize(C,M);for(let I=0;I<q.length;I++){let A=q[I];if(A.setSize)A.setSize(C,M)}},this.setEffects=function(C){q=C,w=q.length>0&&q[0].isRenderPass===!0;let{width:M,height:I}=H;for(let A=0;A<q.length;A++){let _=q[A];if(_.setSize)_.setSize(M,I)}},this.begin=function(C,M){if(L)return!1;if(C.toneMapping===Y9&&q.length===0)return!1;if(O=M,M!==null){let{width:I,height:A}=M;if(H.width!==I||H.height!==A)this.setSize(I,A)}if(w===!1)C.setRenderTarget(H);return B=C.toneMapping,C.toneMapping=Y9,!0},this.hasRenderPass=function(){return w},this.end=function(C,M){C.toneMapping=B,L=!0;let I=H,A=Y;for(let _=0;_<q.length;_++){let R=q[_];if(R.enabled===!1)continue;if(R.render(C,A,I,M),R.needsSwap!==!1){let z=I;I=A,A=z}}if(N!==C.outputColorSpace||E!==C.toneMapping){if(N=C.outputColorSpace,E=C.toneMapping,U.defines={},i0.getTransfer(N)===qJ)U.defines.SRGB_TRANSFER="";let _=eX[E];if(_)U.defines[_]="";U.needsUpdate=!0}U.uniforms.tDiffuse.value=I.texture,C.setRenderTarget(O),C.render(G,F),O=null,L=!1},this.isCompositing=function(){return L},this.dispose=function(){if(H.depthTexture)H.depthTexture.dispose();H.dispose(),Y.dispose(),X.dispose(),U.dispose()}}var cK=new TJ,y$=new s9(1,1),nK=new O6,sK=new K$,iK=new L6,PK=[],CK=[],_K=new Float32Array(16),wK=new Float32Array(9),TK=new Float32Array(4);function a8(J,Q,$){let Z=J[0];if(Z<=0||Z>0)return J;let K=Q*$,W=PK[K];if(W===void 0)W=new Float32Array(K),PK[K]=W;if(Q!==0){Z.toArray(W,0);for(let H=1,Y=0;H!==Q;++H)Y+=$,J[H].toArray(W,Y)}return W}function AJ(J,Q){if(J.length!==Q.length)return!1;for(let $=0,Z=J.length;$<Z;$++)if(J[$]!==Q[$])return!1;return!0}function PJ(J,Q){for(let $=0,Z=Q.length;$<Z;$++)J[$]=Q[$]}function T6(J,Q){let $=CK[Q];if($===void 0)$=new Int32Array(Q),CK[Q]=$;for(let Z=0;Z!==Q;++Z)$[Z]=J.allocateTextureUnit();return $}function QU(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function $U(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(AJ($,Q))return;J.uniform2fv(this.addr,Q),PJ($,Q)}}function ZU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(AJ($,Q))return;J.uniform3fv(this.addr,Q),PJ($,Q)}}function KU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(AJ($,Q))return;J.uniform4fv(this.addr,Q),PJ($,Q)}}function WU(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(AJ($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),PJ($,Q)}else{if(AJ($,Z))return;TK.set(Z),J.uniformMatrix2fv(this.addr,!1,TK),PJ($,Z)}}function HU(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(AJ($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),PJ($,Q)}else{if(AJ($,Z))return;wK.set(Z),J.uniformMatrix3fv(this.addr,!1,wK),PJ($,Z)}}function YU(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(AJ($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),PJ($,Q)}else{if(AJ($,Z))return;_K.set(Z),J.uniformMatrix4fv(this.addr,!1,_K),PJ($,Z)}}function XU(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function UU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(AJ($,Q))return;J.uniform2iv(this.addr,Q),PJ($,Q)}}function qU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(AJ($,Q))return;J.uniform3iv(this.addr,Q),PJ($,Q)}}function NU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(AJ($,Q))return;J.uniform4iv(this.addr,Q),PJ($,Q)}}function GU(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function FU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(AJ($,Q))return;J.uniform2uiv(this.addr,Q),PJ($,Q)}}function OU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(AJ($,Q))return;J.uniform3uiv(this.addr,Q),PJ($,Q)}}function EU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(AJ($,Q))return;J.uniform4uiv(this.addr,Q),PJ($,Q)}}function DU(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;let W;if(this.type===J.SAMPLER_2D_SHADOW)y$.compareFunction=$.isReversedDepthBuffer()?F6:G6,W=y$;else W=cK;$.setTexture2D(Q||W,K)}function RU(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTexture3D(Q||sK,K)}function kU(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTextureCube(Q||iK,K)}function LU(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTexture2DArray(Q||nK,K)}function VU(J){switch(J){case 5126:return QU;case 35664:return $U;case 35665:return ZU;case 35666:return KU;case 35674:return WU;case 35675:return HU;case 35676:return YU;case 5124:case 35670:return XU;case 35667:case 35671:return UU;case 35668:case 35672:return qU;case 35669:case 35673:return NU;case 5125:return GU;case 36294:return FU;case 36295:return OU;case 36296:return EU;case 35678:case 36198:case 36298:case 36306:case 35682:return DU;case 35679:case 36299:case 36307:return RU;case 35680:case 36300:case 36308:case 36293:return kU;case 36289:case 36303:case 36311:case 36292:return LU}}function MU(J,Q){J.uniform1fv(this.addr,Q)}function zU(J,Q){let $=a8(Q,this.size,2);J.uniform2fv(this.addr,$)}function BU(J,Q){let $=a8(Q,this.size,3);J.uniform3fv(this.addr,$)}function IU(J,Q){let $=a8(Q,this.size,4);J.uniform4fv(this.addr,$)}function AU(J,Q){let $=a8(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function PU(J,Q){let $=a8(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function CU(J,Q){let $=a8(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function _U(J,Q){J.uniform1iv(this.addr,Q)}function wU(J,Q){J.uniform2iv(this.addr,Q)}function TU(J,Q){J.uniform3iv(this.addr,Q)}function SU(J,Q){J.uniform4iv(this.addr,Q)}function jU(J,Q){J.uniform1uiv(this.addr,Q)}function yU(J,Q){J.uniform2uiv(this.addr,Q)}function vU(J,Q){J.uniform3uiv(this.addr,Q)}function fU(J,Q){J.uniform4uiv(this.addr,Q)}function bU(J,Q,$){let Z=this.cache,K=Q.length,W=T6($,K);if(!AJ(Z,W))J.uniform1iv(this.addr,W),PJ(Z,W);let H;if(this.type===J.SAMPLER_2D_SHADOW)H=y$;else H=cK;for(let Y=0;Y!==K;++Y)$.setTexture2D(Q[Y]||H,W[Y])}function hU(J,Q,$){let Z=this.cache,K=Q.length,W=T6($,K);if(!AJ(Z,W))J.uniform1iv(this.addr,W),PJ(Z,W);for(let H=0;H!==K;++H)$.setTexture3D(Q[H]||sK,W[H])}function xU(J,Q,$){let Z=this.cache,K=Q.length,W=T6($,K);if(!AJ(Z,W))J.uniform1iv(this.addr,W),PJ(Z,W);for(let H=0;H!==K;++H)$.setTextureCube(Q[H]||iK,W[H])}function gU(J,Q,$){let Z=this.cache,K=Q.length,W=T6($,K);if(!AJ(Z,W))J.uniform1iv(this.addr,W),PJ(Z,W);for(let H=0;H!==K;++H)$.setTexture2DArray(Q[H]||nK,W[H])}function pU(J){switch(J){case 5126:return MU;case 35664:return zU;case 35665:return BU;case 35666:return IU;case 35674:return AU;case 35675:return PU;case 35676:return CU;case 5124:case 35670:return _U;case 35667:case 35671:return wU;case 35668:case 35672:return TU;case 35669:case 35673:return SU;case 5125:return jU;case 36294:return yU;case 36295:return vU;case 36296:return fU;case 35678:case 36198:case 36298:case 36306:case 35682:return bU;case 35679:case 36299:case 36307:return hU;case 35680:case 36300:case 36308:case 36293:return xU;case 36289:case 36303:case 36311:case 36292:return gU}}class oK{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=VU(Q.type)}}class aK{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=pU(Q.type)}}class rK{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let Z=this.seq;for(let K=0,W=Z.length;K!==W;++K){let H=Z[K];H.setValue(J,Q[H.id],$)}}}var S$=/(\w+)(\])?(\[|\.)?/g;function SK(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function mU(J,Q,$){let Z=J.name,K=Z.length;S$.lastIndex=0;while(!0){let W=S$.exec(Z),H=S$.lastIndex,Y=W[1],X=W[2]==="]",U=W[3];if(X)Y=Y|0;if(U===void 0||U==="["&&H+2===K){SK($,U===void 0?new oK(Y,J,Q):new aK(Y,J,Q));break}else{let F=$.map[Y];if(F===void 0)F=new rK(Y),SK($,F);$=F}}}class z7{constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let W=0;W<$;++W){let H=J.getActiveUniform(Q,W),Y=J.getUniformLocation(Q,H.name);mU(H,Y,this)}let Z=[],K=[];for(let W of this.seq)if(W.type===J.SAMPLER_2D_SHADOW||W.type===J.SAMPLER_CUBE_SHADOW||W.type===J.SAMPLER_2D_ARRAY_SHADOW)Z.push(W);else K.push(W);if(Z.length>0)this.seq=Z.concat(K)}setValue(J,Q,$,Z){let K=this.map[Q];if(K!==void 0)K.setValue(J,$,Z)}setOptional(J,Q,$){let Z=Q[$];if(Z!==void 0)this.setValue(J,$,Z)}static upload(J,Q,$,Z){for(let K=0,W=Q.length;K!==W;++K){let H=Q[K],Y=$[H.id];if(Y.needsUpdate!==!1)H.setValue(J,Y.value,Z)}}static seqWithValue(J,Q){let $=[];for(let Z=0,K=J.length;Z!==K;++Z){let W=J[Z];if(W.id in Q)$.push(W)}return $}}function jK(J,Q,$){let Z=J.createShader(Q);return J.shaderSource(Z,$),J.compileShader(Z),Z}var lU=37297,dU=0;function uU(J,Q){let $=J.split(`
`),Z=[],K=Math.max(Q-6,0),W=Math.min(Q+6,$.length);for(let H=K;H<W;H++){let Y=H+1;Z.push(`${Y===Q?">":" "} ${Y}: ${$[H]}`)}return Z.join(`
`)}var yK=new y0;function cU(J){i0._getMatrix(yK,i0.workingColorSpace,J);let Q=`mat3( ${yK.elements.map(($)=>$.toFixed(4))} )`;switch(i0.getTransfer(J)){case tQ:return[Q,"LinearTransferOETF"];case qJ:return[Q,"sRGBTransferOETF"];default:return S0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function vK(J,Q,$){let Z=J.getShaderParameter(Q,J.COMPILE_STATUS),W=(J.getShaderInfoLog(Q)||"").trim();if(Z&&W==="")return"";let H=/ERROR: 0:(\d+)/.exec(W);if(H){let Y=parseInt(H[1]);return $.toUpperCase()+`

`+W+`

`+uU(J.getShaderSource(Q),Y)}else return W}function nU(J,Q){let $=cU(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( value.rgb * ${$[0]}, value.a ) );`,"}"].join(`
`)}var sU={[XQ]:"Linear",[UQ]:"Reinhard",[qQ]:"Cineon",[q7]:"ACESFilmic",[GQ]:"AgX",[FQ]:"Neutral",[NQ]:"Custom"};function iU(J,Q){let $=sU[Q];if($===void 0)return S0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var _6=new v;function oU(){i0.getLuminanceCoefficients(_6);let J=_6.x.toFixed(4),Q=_6.y.toFixed(4),$=_6.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function aU(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(M7).join(`
`)}function rU(J){let Q=[];for(let $ in J){let Z=J[$];if(Z===!1)continue;Q.push("#define "+$+" "+Z)}return Q.join(`
`)}function tU(J,Q){let $={},Z=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let K=0;K<Z;K++){let W=J.getActiveAttrib(Q,K),H=W.name,Y=1;if(W.type===J.FLOAT_MAT2)Y=2;if(W.type===J.FLOAT_MAT3)Y=3;if(W.type===J.FLOAT_MAT4)Y=4;$[H]={type:W.type,location:J.getAttribLocation(Q,H),locationSize:Y}}return $}function M7(J){return J!==""}function fK(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function bK(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var eU=/^[ \t]*#include +<([\w\d./]+)>/gm;function v$(J){return J.replace(eU,Q5)}var J5=new Map;function Q5(J,Q){let $=p0[Q];if($===void 0){let Z=J5.get(Q);if(Z!==void 0)$=p0[Z],S0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,Z);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+Q+">")}return v$($)}var $5=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hK(J){return J.replace($5,Z5)}function Z5(J,Q,$,Z){let K="";for(let W=parseInt(Q);W<parseInt($);W++)K+=Z.replace(/\[\s*i\s*\]/g,"[ "+W+" ]").replace(/UNROLLED_LOOP_INDEX/g,W);return K}function xK(J){let Q=`precision ${J.precision} float;
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
#define LOW_PRECISION`;return Q}var K5={[X7]:"SHADOWMAP_TYPE_PCF",[m8]:"SHADOWMAP_TYPE_VSM"};function W5(J){return K5[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var H5={[u8]:"ENVMAP_TYPE_CUBE",[W8]:"ENVMAP_TYPE_CUBE",[N7]:"ENVMAP_TYPE_CUBE_UV"};function Y5(J){if(J.envMap===!1)return"ENVMAP_TYPE_CUBE";return H5[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var X5={[W8]:"ENVMAP_MODE_REFRACTION"};function U5(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return X5[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var q5={[cZ]:"ENVMAP_BLENDING_MULTIPLY",[nZ]:"ENVMAP_BLENDING_MIX",[sZ]:"ENVMAP_BLENDING_ADD"};function N5(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return q5[J.combine]||"ENVMAP_BLENDING_NONE"}function G5(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let $=Math.log2(Q)-2,Z=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,$),112)),texelHeight:Z,maxMip:$}}function F5(J,Q,$,Z){let K=J.getContext(),W=$.defines,H=$.vertexShader,Y=$.fragmentShader,X=W5($),U=Y5($),G=U5($),F=N5($),N=G5($),E=aU($),L=rU(W),B=K.createProgram(),O,q,w=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(O=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,L].filter(M7).join(`
`),O.length>0)O+=`
`;if(q=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,L].filter(M7).join(`
`),q.length>0)q+=`
`}else O=[xK($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,L,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+G:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexNormals?"#define HAS_NORMAL":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+X:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(M7).join(`
`),q=[xK($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,L,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+U:"",$.envMap?"#define "+G:"",$.envMap?"#define "+F:"",N?"#define CUBEUV_TEXEL_WIDTH "+N.texelWidth:"",N?"#define CUBEUV_TEXEL_HEIGHT "+N.texelHeight:"",N?"#define CUBEUV_MAX_MIP "+N.maxMip+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor?"#define USE_COLOR":"",$.vertexAlphas||$.batchingColor?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+X:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==Y9?"#define TONE_MAPPING":"",$.toneMapping!==Y9?p0.tonemapping_pars_fragment:"",$.toneMapping!==Y9?iU("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",p0.colorspace_pars_fragment,nU("linearToOutputTexel",$.outputColorSpace),oU(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(M7).join(`
`);if(H=v$(H),H=fK(H,$),H=bK(H,$),Y=v$(Y),Y=fK(Y,$),Y=bK(Y,$),H=hK(H),Y=hK(Y),$.isRawShaderMaterial!==!0)w=`#version 300 es
`,O=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+O,q=["#define varying in",$.glslVersion===eQ?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===eQ?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+q;let C=w+O+H,M=w+q+Y,I=jK(K,K.VERTEX_SHADER,C),A=jK(K,K.FRAGMENT_SHADER,M);if(K.attachShader(B,I),K.attachShader(B,A),$.index0AttributeName!==void 0)K.bindAttribLocation(B,0,$.index0AttributeName);else if($.hasPositionAttribute===!0)K.bindAttribLocation(B,0,"position");K.linkProgram(B);function _(P){if(J.debug.checkShaderErrors){let g=K.getProgramInfoLog(B)||"",s=K.getShaderInfoLog(I)||"",x=K.getShaderInfoLog(A)||"",u=g.trim(),c=s.trim(),f=x.trim(),t=!0,e=!0;if(K.getProgramParameter(B,K.LINK_STATUS)===!1)if(t=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(K,B,I,A);else{let K0=vK(K,I,"vertex"),M0=vK(K,A,"fragment");T0("WebGLProgram: Shader Error "+K.getError()+" - VALIDATE_STATUS "+K.getProgramParameter(B,K.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+u+`
`+K0+`
`+M0)}else if(u!=="")S0("WebGLProgram: Program Info Log:",u);else if(c===""||f==="")e=!1;if(e)P.diagnostics={runnable:t,programLog:u,vertexShader:{log:c,prefix:O},fragmentShader:{log:f,prefix:q}}}K.deleteShader(I),K.deleteShader(A),R=new z7(K,B),z=tU(K,B)}let R;this.getUniforms=function(){if(R===void 0)_(this);return R};let z;this.getAttributes=function(){if(z===void 0)_(this);return z};let l=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(l===!1)l=K.getProgramParameter(B,lU);return l},this.destroy=function(){Z.releaseStatesOfProgram(this),K.deleteProgram(B),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=dU++,this.cacheKey=Q,this.usedTimes=1,this.program=B,this.vertexShader=I,this.fragmentShader=A,this}var O5=0;class tK{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,Q,$){let Z=this._getShaderCacheForMaterial(J);if(Z.has(Q)===!1)Z.add(Q),Q.usedTimes++;if(Z.has($)===!1)Z.add($),$.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new eK(J),Q.set(J,$);return $}}class eK{constructor(J){this.id=O5++,this.code=J,this.usedTimes=0}}function E5(J){return J===U8||J===q6||J===N6}function D5(J,Q,$,Z,K,W){let H=new D7,Y=new tK,X=new Set,U=[],G=new Map,F=Z.logarithmicDepthBuffer,N=Z.precision,E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function L(R){if(X.add(R),R===0)return"uv";return`uv${R}`}function B(R,z,l,P,g,s){let x=P.fog,u=g.geometry,c=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?P.environment:null,f=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap,t=Q.get(R.envMap||c,f),e=!!t&&t.mapping===N7?t.image.height:null,K0=E[R.type];if(R.precision!==null){if(N=Z.getMaxPrecision(R.precision),N!==R.precision)S0("WebGLProgram.getParameters:",R.precision,"not supported, using",N,"instead.")}let M0=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,k0=M0!==void 0?M0.length:0,HJ=0;if(u.morphAttributes.position!==void 0)HJ=1;if(u.morphAttributes.normal!==void 0)HJ=2;if(u.morphAttributes.color!==void 0)HJ=3;let o0,o,W0,q0;if(K0){let w0=V9[K0];o0=w0.vertexShader,o=w0.fragmentShader}else{o0=R.vertexShader,o=R.fragmentShader;let w0=Y.getVertexShaderStage(R),OJ=Y.getFragmentShaderStage(R);Y.update(R,w0,OJ),W0=w0.id,q0=OJ.id}let D0=J.getRenderTarget(),C0=J.state.buffers.depth.getReversed(),c0=g.isInstancedMesh===!0,b0=g.isBatchedMesh===!0,g0=!!R.map,e0=!!R.matcap,u0=!!t,h0=!!R.aoMap,YJ=!!R.lightMap,MJ=!!R.bumpMap&&R.wireframe===!1,JJ=!!R.normalMap,BJ=!!R.displacementMap,NJ=!!R.emissiveMap,RJ=!!R.metalnessMap,S=!!R.roughnessMap,jJ=R.anisotropy>0,s0=R.clearcoat>0,ZJ=R.dispersion>0,V=R.iridescence>0,D=R.sheen>0,T=R.transmission>0,p=jJ&&!!R.anisotropyMap,r=s0&&!!R.clearcoatMap,$0=s0&&!!R.clearcoatNormalMap,Y0=s0&&!!R.clearcoatRoughnessMap,d=V&&!!R.iridescenceMap,i=V&&!!R.iridescenceThicknessMap,N0=D&&!!R.sheenColorMap,z0=D&&!!R.sheenRoughnessMap,X0=!!R.specularMap,Q0=!!R.specularColorMap,A0=!!R.specularIntensityMap,_0=T&&!!R.transmissionMap,v0=T&&!!R.thicknessMap,j=!!R.gradientMap,Z0=!!R.alphaMap,n=R.alphaTest>0,H0=!!R.alphaHash,E0=!!R.extensions,a=Y9;if(R.toneMapped){if(D0===null||D0.isXRRenderTarget===!0)a=J.toneMapping}let U0={shaderID:K0,shaderType:R.type,shaderName:R.name,vertexShader:o0,fragmentShader:o,defines:R.defines,customVertexShaderID:W0,customFragmentShaderID:q0,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:N,batching:b0,batchingColor:b0&&g._colorsTexture!==null,instancing:c0,instancingColor:c0&&g.instanceColor!==null,instancingMorph:c0&&g.morphTexture!==null,outputColorSpace:D0===null?J.outputColorSpace:D0.isXRRenderTarget===!0?D0.texture.colorSpace:i0.workingColorSpace,alphaToCoverage:!!R.alphaToCoverage,map:g0,matcap:e0,envMap:u0,envMapMode:u0&&t.mapping,envMapCubeUVHeight:e,aoMap:h0,lightMap:YJ,bumpMap:MJ,normalMap:JJ,displacementMap:BJ,emissiveMap:NJ,normalMapObjectSpace:JJ&&R.normalMapType===KK,normalMapTangentSpace:JJ&&R.normalMapType===aQ,packedNormalMap:JJ&&R.normalMapType===aQ&&E5(R.normalMap.format),metalnessMap:RJ,roughnessMap:S,anisotropy:jJ,anisotropyMap:p,clearcoat:s0,clearcoatMap:r,clearcoatNormalMap:$0,clearcoatRoughnessMap:Y0,dispersion:ZJ,iridescence:V,iridescenceMap:d,iridescenceThicknessMap:i,sheen:D,sheenColorMap:N0,sheenRoughnessMap:z0,specularMap:X0,specularColorMap:Q0,specularIntensityMap:A0,transmission:T,transmissionMap:_0,thicknessMap:v0,gradientMap:j,opaque:R.transparent===!1&&R.blending===U7&&R.alphaToCoverage===!1,alphaMap:Z0,alphaTest:n,alphaHash:H0,combine:R.combine,mapUv:g0&&L(R.map.channel),aoMapUv:h0&&L(R.aoMap.channel),lightMapUv:YJ&&L(R.lightMap.channel),bumpMapUv:MJ&&L(R.bumpMap.channel),normalMapUv:JJ&&L(R.normalMap.channel),displacementMapUv:BJ&&L(R.displacementMap.channel),emissiveMapUv:NJ&&L(R.emissiveMap.channel),metalnessMapUv:RJ&&L(R.metalnessMap.channel),roughnessMapUv:S&&L(R.roughnessMap.channel),anisotropyMapUv:p&&L(R.anisotropyMap.channel),clearcoatMapUv:r&&L(R.clearcoatMap.channel),clearcoatNormalMapUv:$0&&L(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y0&&L(R.clearcoatRoughnessMap.channel),iridescenceMapUv:d&&L(R.iridescenceMap.channel),iridescenceThicknessMapUv:i&&L(R.iridescenceThicknessMap.channel),sheenColorMapUv:N0&&L(R.sheenColorMap.channel),sheenRoughnessMapUv:z0&&L(R.sheenRoughnessMap.channel),specularMapUv:X0&&L(R.specularMap.channel),specularColorMapUv:Q0&&L(R.specularColorMap.channel),specularIntensityMapUv:A0&&L(R.specularIntensityMap.channel),transmissionMapUv:_0&&L(R.transmissionMap.channel),thicknessMapUv:v0&&L(R.thicknessMap.channel),alphaMapUv:Z0&&L(R.alphaMap.channel),vertexTangents:!!u.attributes.tangent&&(JJ||jJ),vertexNormals:!!u.attributes.normal,vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!u.attributes.color&&u.attributes.color.itemSize===4,pointsUvs:g.isPoints===!0&&!!u.attributes.uv&&(g0||Z0),fog:!!x,useFog:R.fog===!0,fogExp2:!!x&&x.isFogExp2,flatShading:R.wireframe===!1&&(R.flatShading===!0||u.attributes.normal===void 0&&JJ===!1&&(R.isMeshLambertMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isMeshPhysicalMaterial)),sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:F,reversedDepthBuffer:C0,skinning:g.isSkinnedMesh===!0,hasPositionAttribute:u.attributes.position!==void 0,morphTargets:u.morphAttributes.position!==void 0,morphNormals:u.morphAttributes.normal!==void 0,morphColors:u.morphAttributes.color!==void 0,morphTargetsCount:k0,morphTextureStride:HJ,numDirLights:z.directional.length,numPointLights:z.point.length,numSpotLights:z.spot.length,numSpotLightMaps:z.spotLightMap.length,numRectAreaLights:z.rectArea.length,numHemiLights:z.hemi.length,numDirLightShadows:z.directionalShadowMap.length,numPointLightShadows:z.pointShadowMap.length,numSpotLightShadows:z.spotShadowMap.length,numSpotLightShadowsWithMaps:z.numSpotLightShadowsWithMaps,numLightProbes:z.numLightProbes,numLightProbeGrids:s.length,numClippingPlanes:W.numPlanes,numClipIntersection:W.numIntersection,dithering:R.dithering,shadowMapEnabled:J.shadowMap.enabled&&l.length>0,shadowMapType:J.shadowMap.type,toneMapping:a,decodeVideoTexture:g0&&R.map.isVideoTexture===!0&&i0.getTransfer(R.map.colorSpace)===qJ,decodeVideoTextureEmissive:NJ&&R.emissiveMap.isVideoTexture===!0&&i0.getTransfer(R.emissiveMap.colorSpace)===qJ,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===D9,flipSided:R.side===xJ,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:E0&&R.extensions.clipCullDistance===!0&&$.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(E0&&R.extensions.multiDraw===!0||b0)&&$.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:$.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return U0.vertexUv1s=X.has(1),U0.vertexUv2s=X.has(2),U0.vertexUv3s=X.has(3),X.clear(),U0}function O(R){let z=[];if(R.shaderID)z.push(R.shaderID);else z.push(R.customVertexShaderID),z.push(R.customFragmentShaderID);if(R.defines!==void 0)for(let l in R.defines)z.push(l),z.push(R.defines[l]);if(R.isRawShaderMaterial===!1)q(z,R),w(z,R),z.push(J.outputColorSpace);return z.push(R.customProgramCacheKey),z.join()}function q(R,z){R.push(z.precision),R.push(z.outputColorSpace),R.push(z.envMapMode),R.push(z.envMapCubeUVHeight),R.push(z.mapUv),R.push(z.alphaMapUv),R.push(z.lightMapUv),R.push(z.aoMapUv),R.push(z.bumpMapUv),R.push(z.normalMapUv),R.push(z.displacementMapUv),R.push(z.emissiveMapUv),R.push(z.metalnessMapUv),R.push(z.roughnessMapUv),R.push(z.anisotropyMapUv),R.push(z.clearcoatMapUv),R.push(z.clearcoatNormalMapUv),R.push(z.clearcoatRoughnessMapUv),R.push(z.iridescenceMapUv),R.push(z.iridescenceThicknessMapUv),R.push(z.sheenColorMapUv),R.push(z.sheenRoughnessMapUv),R.push(z.specularMapUv),R.push(z.specularColorMapUv),R.push(z.specularIntensityMapUv),R.push(z.transmissionMapUv),R.push(z.thicknessMapUv),R.push(z.combine),R.push(z.fogExp2),R.push(z.sizeAttenuation),R.push(z.morphTargetsCount),R.push(z.morphAttributeCount),R.push(z.numDirLights),R.push(z.numPointLights),R.push(z.numSpotLights),R.push(z.numSpotLightMaps),R.push(z.numHemiLights),R.push(z.numRectAreaLights),R.push(z.numDirLightShadows),R.push(z.numPointLightShadows),R.push(z.numSpotLightShadows),R.push(z.numSpotLightShadowsWithMaps),R.push(z.numLightProbes),R.push(z.shadowMapType),R.push(z.toneMapping),R.push(z.numClippingPlanes),R.push(z.numClipIntersection),R.push(z.depthPacking)}function w(R,z){if(H.disableAll(),z.instancing)H.enable(0);if(z.instancingColor)H.enable(1);if(z.instancingMorph)H.enable(2);if(z.matcap)H.enable(3);if(z.envMap)H.enable(4);if(z.normalMapObjectSpace)H.enable(5);if(z.normalMapTangentSpace)H.enable(6);if(z.clearcoat)H.enable(7);if(z.iridescence)H.enable(8);if(z.alphaTest)H.enable(9);if(z.vertexColors)H.enable(10);if(z.vertexAlphas)H.enable(11);if(z.vertexUv1s)H.enable(12);if(z.vertexUv2s)H.enable(13);if(z.vertexUv3s)H.enable(14);if(z.vertexTangents)H.enable(15);if(z.anisotropy)H.enable(16);if(z.alphaHash)H.enable(17);if(z.batching)H.enable(18);if(z.dispersion)H.enable(19);if(z.batchingColor)H.enable(20);if(z.gradientMap)H.enable(21);if(z.packedNormalMap)H.enable(22);if(z.vertexNormals)H.enable(23);if(R.push(H.mask),H.disableAll(),z.fog)H.enable(0);if(z.useFog)H.enable(1);if(z.flatShading)H.enable(2);if(z.logarithmicDepthBuffer)H.enable(3);if(z.reversedDepthBuffer)H.enable(4);if(z.skinning)H.enable(5);if(z.morphTargets)H.enable(6);if(z.morphNormals)H.enable(7);if(z.morphColors)H.enable(8);if(z.premultipliedAlpha)H.enable(9);if(z.shadowMapEnabled)H.enable(10);if(z.doubleSided)H.enable(11);if(z.flipSided)H.enable(12);if(z.useDepthPacking)H.enable(13);if(z.dithering)H.enable(14);if(z.transmission)H.enable(15);if(z.sheen)H.enable(16);if(z.opaque)H.enable(17);if(z.pointsUvs)H.enable(18);if(z.decodeVideoTexture)H.enable(19);if(z.decodeVideoTextureEmissive)H.enable(20);if(z.alphaToCoverage)H.enable(21);if(z.numLightProbeGrids>0)H.enable(22);if(z.hasPositionAttribute)H.enable(23);R.push(H.mask)}function C(R){let z=E[R.type],l;if(z){let P=V9[z];l=DK.clone(P.uniforms)}else l=R.uniforms;return l}function M(R,z){let l=G.get(z);if(l!==void 0)++l.usedTimes;else l=new F5(J,z,R,K),U.push(l),G.set(z,l);return l}function I(R){if(--R.usedTimes===0){let z=U.indexOf(R);U[z]=U[U.length-1],U.pop(),G.delete(R.cacheKey),R.destroy()}}function A(R){Y.remove(R)}function _(){Y.dispose()}return{getParameters:B,getProgramCacheKey:O,getUniforms:C,acquireProgram:M,releaseProgram:I,releaseShaderCache:A,programs:U,dispose:_}}function R5(){let J=new WeakMap;function Q(H){return J.has(H)}function $(H){let Y=J.get(H);if(Y===void 0)Y={},J.set(H,Y);return Y}function Z(H){J.delete(H)}function K(H,Y,X){J.get(H)[Y]=X}function W(){J=new WeakMap}return{has:Q,get:$,remove:Z,update:K,dispose:W}}function k5(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function gK(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function pK(){let J=[],Q=0,$=[],Z=[],K=[];function W(){Q=0,$.length=0,Z.length=0,K.length=0}function H(N){let E=0;if(N.isInstancedMesh)E+=2;if(N.isSkinnedMesh)E+=1;return E}function Y(N,E,L,B,O,q){let w=J[Q];if(w===void 0)w={id:N.id,object:N,geometry:E,material:L,materialVariant:H(N),groupOrder:B,renderOrder:N.renderOrder,z:O,group:q},J[Q]=w;else w.id=N.id,w.object=N,w.geometry=E,w.material=L,w.materialVariant=H(N),w.groupOrder=B,w.renderOrder=N.renderOrder,w.z=O,w.group=q;return Q++,w}function X(N,E,L,B,O,q){let w=Y(N,E,L,B,O,q);if(L.transmission>0)Z.push(w);else if(L.transparent===!0)K.push(w);else $.push(w)}function U(N,E,L,B,O,q){let w=Y(N,E,L,B,O,q);if(L.transmission>0)Z.unshift(w);else if(L.transparent===!0)K.unshift(w);else $.unshift(w)}function G(N,E,L){if($.length>1)$.sort(N||k5);if(Z.length>1)Z.sort(E||gK);if(K.length>1)K.sort(E||gK);if(L)$.reverse(),Z.reverse(),K.reverse()}function F(){for(let N=Q,E=J.length;N<E;N++){let L=J[N];if(L.id===null)break;L.id=null,L.object=null,L.geometry=null,L.material=null,L.group=null}}return{opaque:$,transmissive:Z,transparent:K,init:W,push:X,unshift:U,finish:F,sort:G}}function L5(){let J=new WeakMap;function Q(Z,K){let W=J.get(Z),H;if(W===void 0)H=new pK,J.set(Z,[H]);else if(K>=W.length)H=new pK,W.push(H);else H=W[K];return H}function $(){J=new WeakMap}return{get:Q,dispose:$}}function V5(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={direction:new v,color:new d0};break;case"SpotLight":$={position:new v,direction:new v,color:new d0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new v,color:new d0,distance:0,decay:0};break;case"HemisphereLight":$={direction:new v,skyColor:new d0,groundColor:new d0};break;case"RectAreaLight":$={color:new d0,position:new v,halfWidth:new v,halfHeight:new v};break}return J[Q.id]=$,$}}}function M5(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new l0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new l0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new l0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var z5=0;function B5(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function I5(J){let Q=new V5,$=M5(),Z={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)Z.probe.push(new v);let K=new v,W=new WJ,H=new WJ;function Y(U){let G=0,F=0,N=0;for(let z=0;z<9;z++)Z.probe[z].set(0,0,0);let E=0,L=0,B=0,O=0,q=0,w=0,C=0,M=0,I=0,A=0,_=0;U.sort(B5);for(let z=0,l=U.length;z<l;z++){let P=U[z],g=P.color,s=P.intensity,x=P.distance,u=null;if(P.shadow&&P.shadow.map)if(P.shadow.map.texture.format===U8)u=P.shadow.map.texture;else u=P.shadow.map.depthTexture||P.shadow.map.texture;if(P.isAmbientLight)G+=g.r*s,F+=g.g*s,N+=g.b*s;else if(P.isLightProbe){for(let c=0;c<9;c++)Z.probe[c].addScaledVector(P.sh.coefficients[c],s);_++}else if(P.isDirectionalLight){let c=Q.get(P);if(c.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let f=P.shadow,t=$.get(P);t.shadowIntensity=f.intensity,t.shadowBias=f.bias,t.shadowNormalBias=f.normalBias,t.shadowRadius=f.radius,t.shadowMapSize=f.mapSize,Z.directionalShadow[E]=t,Z.directionalShadowMap[E]=u,Z.directionalShadowMatrix[E]=P.shadow.matrix,w++}Z.directional[E]=c,E++}else if(P.isSpotLight){let c=Q.get(P);c.position.setFromMatrixPosition(P.matrixWorld),c.color.copy(g).multiplyScalar(s),c.distance=x,c.coneCos=Math.cos(P.angle),c.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),c.decay=P.decay,Z.spot[B]=c;let f=P.shadow;if(P.map){if(Z.spotLightMap[I]=P.map,I++,f.updateMatrices(P),P.castShadow)A++}if(Z.spotLightMatrix[B]=f.matrix,P.castShadow){let t=$.get(P);t.shadowIntensity=f.intensity,t.shadowBias=f.bias,t.shadowNormalBias=f.normalBias,t.shadowRadius=f.radius,t.shadowMapSize=f.mapSize,Z.spotShadow[B]=t,Z.spotShadowMap[B]=u,M++}B++}else if(P.isRectAreaLight){let c=Q.get(P);c.color.copy(g).multiplyScalar(s),c.halfWidth.set(P.width*0.5,0,0),c.halfHeight.set(0,P.height*0.5,0),Z.rectArea[O]=c,O++}else if(P.isPointLight){let c=Q.get(P);if(c.color.copy(P.color).multiplyScalar(P.intensity),c.distance=P.distance,c.decay=P.decay,P.castShadow){let f=P.shadow,t=$.get(P);t.shadowIntensity=f.intensity,t.shadowBias=f.bias,t.shadowNormalBias=f.normalBias,t.shadowRadius=f.radius,t.shadowMapSize=f.mapSize,t.shadowCameraNear=f.camera.near,t.shadowCameraFar=f.camera.far,Z.pointShadow[L]=t,Z.pointShadowMap[L]=u,Z.pointShadowMatrix[L]=P.shadow.matrix,C++}Z.point[L]=c,L++}else if(P.isHemisphereLight){let c=Q.get(P);c.skyColor.copy(P.color).multiplyScalar(s),c.groundColor.copy(P.groundColor).multiplyScalar(s),Z.hemi[q]=c,q++}}if(O>0)if(J.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=G0.LTC_FLOAT_1,Z.rectAreaLTC2=G0.LTC_FLOAT_2;else Z.rectAreaLTC1=G0.LTC_HALF_1,Z.rectAreaLTC2=G0.LTC_HALF_2;Z.ambient[0]=G,Z.ambient[1]=F,Z.ambient[2]=N;let R=Z.hash;if(R.directionalLength!==E||R.pointLength!==L||R.spotLength!==B||R.rectAreaLength!==O||R.hemiLength!==q||R.numDirectionalShadows!==w||R.numPointShadows!==C||R.numSpotShadows!==M||R.numSpotMaps!==I||R.numLightProbes!==_)Z.directional.length=E,Z.spot.length=B,Z.rectArea.length=O,Z.point.length=L,Z.hemi.length=q,Z.directionalShadow.length=w,Z.directionalShadowMap.length=w,Z.pointShadow.length=C,Z.pointShadowMap.length=C,Z.spotShadow.length=M,Z.spotShadowMap.length=M,Z.directionalShadowMatrix.length=w,Z.pointShadowMatrix.length=C,Z.spotLightMatrix.length=M+I-A,Z.spotLightMap.length=I,Z.numSpotLightShadowsWithMaps=A,Z.numLightProbes=_,R.directionalLength=E,R.pointLength=L,R.spotLength=B,R.rectAreaLength=O,R.hemiLength=q,R.numDirectionalShadows=w,R.numPointShadows=C,R.numSpotShadows=M,R.numSpotMaps=I,R.numLightProbes=_,Z.version=z5++}function X(U,G){let F=0,N=0,E=0,L=0,B=0,O=G.matrixWorldInverse;for(let q=0,w=U.length;q<w;q++){let C=U[q];if(C.isDirectionalLight){let M=Z.directional[F];M.direction.setFromMatrixPosition(C.matrixWorld),K.setFromMatrixPosition(C.target.matrixWorld),M.direction.sub(K),M.direction.transformDirection(O),F++}else if(C.isSpotLight){let M=Z.spot[E];M.position.setFromMatrixPosition(C.matrixWorld),M.position.applyMatrix4(O),M.direction.setFromMatrixPosition(C.matrixWorld),K.setFromMatrixPosition(C.target.matrixWorld),M.direction.sub(K),M.direction.transformDirection(O),E++}else if(C.isRectAreaLight){let M=Z.rectArea[L];M.position.setFromMatrixPosition(C.matrixWorld),M.position.applyMatrix4(O),H.identity(),W.copy(C.matrixWorld),W.premultiply(O),H.extractRotation(W),M.halfWidth.set(C.width*0.5,0,0),M.halfHeight.set(0,C.height*0.5,0),M.halfWidth.applyMatrix4(H),M.halfHeight.applyMatrix4(H),L++}else if(C.isPointLight){let M=Z.point[N];M.position.setFromMatrixPosition(C.matrixWorld),M.position.applyMatrix4(O),N++}else if(C.isHemisphereLight){let M=Z.hemi[B];M.direction.setFromMatrixPosition(C.matrixWorld),M.direction.transformDirection(O),B++}}}return{setup:Y,setupView:X,state:Z}}function mK(J){let Q=new I5(J),$=[],Z=[],K=[];function W(N){F.camera=N,$.length=0,Z.length=0,K.length=0}function H(N){$.push(N)}function Y(N){Z.push(N)}function X(N){K.push(N)}function U(){Q.setup($)}function G(N){Q.setupView($,N)}let F={lightsArray:$,shadowsArray:Z,lightProbeGridArray:K,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:W,state:F,setupLights:U,setupLightsView:G,pushLight:H,pushShadow:Y,pushLightProbeGrid:X}}function A5(J){let Q=new WeakMap;function $(K,W=0){let H=Q.get(K),Y;if(H===void 0)Y=new mK(J),Q.set(K,[Y]);else if(W>=H.length)Y=new mK(J),H.push(Y);else Y=H[W];return Y}function Z(){Q=new WeakMap}return{get:$,dispose:Z}}var P5=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C5=`uniform sampler2D shadow_pass;
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
}`,_5=[new v(1,0,0),new v(-1,0,0),new v(0,1,0),new v(0,-1,0),new v(0,0,1),new v(0,0,-1)],w5=[new v(0,-1,0),new v(0,-1,0),new v(0,0,1),new v(0,0,-1),new v(0,-1,0),new v(0,-1,0)],lK=new WJ,V7=new v,j$=new v;function T5(J,Q,$){let Z=new k7,K=new l0,W=new l0,H=new EJ,Y=new X$,X=new U$,U={},G=$.maxTextureSize,F={[l8]:xJ,[xJ]:l8,[D9]:D9},N=new Q9({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new l0},radius:{value:4}},vertexShader:P5,fragmentShader:C5}),E=N.clone();E.defines.HORIZONTAL_PASS=1;let L=new U9;L.setAttribute("position",new oJ(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let B=new j0(L,N),O=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=X7;let q=this.type;this.render=function(A,_,R){if(O.enabled===!1)return;if(O.autoUpdate===!1&&O.needsUpdate===!1)return;if(A.length===0)return;if(this.type===RZ)S0("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=X7;let z=J.getRenderTarget(),l=J.getActiveCubeFace(),P=J.getActiveMipmapLevel(),g=J.state;if(g.setBlending(R9),g.buffers.depth.getReversed()===!0)g.buffers.color.setClear(0,0,0,0);else g.buffers.color.setClear(1,1,1,1);g.buffers.depth.setTest(!0),g.setScissorTest(!1);let s=q!==this.type;if(s)_.traverse(function(x){if(x.material)if(Array.isArray(x.material))x.material.forEach((u)=>u.needsUpdate=!0);else x.material.needsUpdate=!0});for(let x=0,u=A.length;x<u;x++){let c=A[x],f=c.shadow;if(f===void 0){S0("WebGLShadowMap:",c,"has no shadow.");continue}if(f.autoUpdate===!1&&f.needsUpdate===!1)continue;K.copy(f.mapSize);let t=f.getFrameExtents();if(K.multiply(t),W.copy(f.mapSize),K.x>G||K.y>G){if(K.x>G)W.x=Math.floor(G/t.x),K.x=W.x*t.x,f.mapSize.x=W.x;if(K.y>G)W.y=Math.floor(G/t.y),K.y=W.y*t.y,f.mapSize.y=W.y}let e=J.state.buffers.depth.getReversed();if(f.camera._reversedDepth=e,f.map===null||s===!0){if(f.map!==null){if(f.map.depthTexture!==null)f.map.depthTexture.dispose(),f.map.depthTexture=null;f.map.dispose()}if(this.type===m8){if(c.isPointLight){S0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}f.map=new J9(K.x,K.y,{format:U8,type:T9,minFilter:SJ,magFilter:SJ,generateMipmaps:!1}),f.map.texture.name=c.name+".shadowMap",f.map.depthTexture=new s9(K.x,K.y,w9),f.map.depthTexture.name=c.name+".shadowMapDepth",f.map.depthTexture.format=Y8,f.map.depthTexture.compareFunction=null,f.map.depthTexture.minFilter=u9,f.map.depthTexture.magFilter=u9}else{if(c.isPointLight)f.map=new f$(K.x),f.map.depthTexture=new W$(K.x,c9);else f.map=new J9(K.x,K.y),f.map.depthTexture=new s9(K.x,K.y,c9);if(f.map.depthTexture.name=c.name+".shadowMap",f.map.depthTexture.format=Y8,this.type===X7)f.map.depthTexture.compareFunction=e?F6:G6,f.map.depthTexture.minFilter=SJ,f.map.depthTexture.magFilter=SJ;else f.map.depthTexture.compareFunction=null,f.map.depthTexture.minFilter=u9,f.map.depthTexture.magFilter=u9}f.camera.updateProjectionMatrix()}let K0=f.map.isWebGLCubeRenderTarget?6:1;for(let M0=0;M0<K0;M0++){if(f.map.isWebGLCubeRenderTarget)J.setRenderTarget(f.map,M0),J.clear();else{if(M0===0)J.setRenderTarget(f.map),J.clear();let k0=f.getViewport(M0);H.set(W.x*k0.x,W.y*k0.y,W.x*k0.z,W.y*k0.w),g.viewport(H)}if(c.isPointLight){let{camera:k0,matrix:HJ}=f,o0=c.distance||k0.far;if(o0!==k0.far)k0.far=o0,k0.updateProjectionMatrix();V7.setFromMatrixPosition(c.matrixWorld),k0.position.copy(V7),j$.copy(k0.position),j$.add(_5[M0]),k0.up.copy(w5[M0]),k0.lookAt(j$),k0.updateMatrixWorld(),HJ.makeTranslation(-V7.x,-V7.y,-V7.z),lK.multiplyMatrices(k0.projectionMatrix,k0.matrixWorldInverse),f._frustum.setFromProjectionMatrix(lK,k0.coordinateSystem,k0.reversedDepth)}else f.updateMatrices(c);Z=f.getFrustum(),M(_,R,f.camera,c,this.type)}if(f.isPointLightShadow!==!0&&this.type===m8)w(f,R);f.needsUpdate=!1}q=this.type,O.needsUpdate=!1,J.setRenderTarget(z,l,P)};function w(A,_){let R=Q.update(B);if(N.defines.VSM_SAMPLES!==A.blurSamples)N.defines.VSM_SAMPLES=A.blurSamples,E.defines.VSM_SAMPLES=A.blurSamples,N.needsUpdate=!0,E.needsUpdate=!0;if(A.mapPass===null)A.mapPass=new J9(K.x,K.y,{format:U8,type:T9});N.uniforms.shadow_pass.value=A.map.depthTexture,N.uniforms.resolution.value=A.mapSize,N.uniforms.radius.value=A.radius,J.setRenderTarget(A.mapPass),J.clear(),J.renderBufferDirect(_,null,R,N,B,null),E.uniforms.shadow_pass.value=A.mapPass.texture,E.uniforms.resolution.value=A.mapSize,E.uniforms.radius.value=A.radius,J.setRenderTarget(A.map),J.clear(),J.renderBufferDirect(_,null,R,E,B,null)}function C(A,_,R,z){let l=null,P=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)l=P;else if(l=R.isPointLight===!0?X:Y,J.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let g=l.uuid,s=_.uuid,x=U[g];if(x===void 0)x={},U[g]=x;let u=x[s];if(u===void 0)u=l.clone(),x[s]=u,_.addEventListener("dispose",I);l=u}if(l.visible=_.visible,l.wireframe=_.wireframe,z===m8)l.side=_.shadowSide!==null?_.shadowSide:_.side;else l.side=_.shadowSide!==null?_.shadowSide:F[_.side];if(l.alphaMap=_.alphaMap,l.alphaTest=_.alphaToCoverage===!0?0.5:_.alphaTest,l.map=_.map,l.clipShadows=_.clipShadows,l.clippingPlanes=_.clippingPlanes,l.clipIntersection=_.clipIntersection,l.displacementMap=_.displacementMap,l.displacementScale=_.displacementScale,l.displacementBias=_.displacementBias,l.wireframeLinewidth=_.wireframeLinewidth,l.linewidth=_.linewidth,R.isPointLight===!0&&l.isMeshDistanceMaterial===!0){let g=J.properties.get(l);g.light=R}return l}function M(A,_,R,z,l){if(A.visible===!1)return;if(A.layers.test(_.layers)&&(A.isMesh||A.isLine||A.isPoints)){if((A.castShadow||A.receiveShadow&&l===m8)&&(!A.frustumCulled||Z.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);let s=Q.update(A),x=A.material;if(Array.isArray(x)){let u=s.groups;for(let c=0,f=u.length;c<f;c++){let t=u[c],e=x[t.materialIndex];if(e&&e.visible){let K0=C(A,e,z,l);A.onBeforeShadow(J,A,_,R,s,K0,t),J.renderBufferDirect(R,null,s,K0,A,t),A.onAfterShadow(J,A,_,R,s,K0,t)}}}else if(x.visible){let u=C(A,x,z,l);A.onBeforeShadow(J,A,_,R,s,u,null),J.renderBufferDirect(R,null,s,u,A,null),A.onAfterShadow(J,A,_,R,s,u,null)}}}let g=A.children;for(let s=0,x=g.length;s<x;s++)M(g[s],_,R,z,l)}function I(A){A.target.removeEventListener("dispose",I);for(let R in U){let z=U[R],l=A.target.uuid;if(l in z)z[l].dispose(),delete z[l]}}}function S5(J,Q){function $(){let j=!1,Z0=new EJ,n=null,H0=new EJ(0,0,0,0);return{setMask:function(E0){if(n!==E0&&!j)J.colorMask(E0,E0,E0,E0),n=E0},setLocked:function(E0){j=E0},setClear:function(E0,a,U0,w0,OJ){if(OJ===!0)E0*=w0,a*=w0,U0*=w0;if(Z0.set(E0,a,U0,w0),H0.equals(Z0)===!1)J.clearColor(E0,a,U0,w0),H0.copy(Z0)},reset:function(){j=!1,n=null,H0.set(-1,0,0,0)}}}function Z(){let j=!1,Z0=!1,n=null,H0=null,E0=null;return{setReversed:function(a){if(Z0!==a){let U0=Q.get("EXT_clip_control");if(a)U0.clipControlEXT(U0.LOWER_LEFT_EXT,U0.ZERO_TO_ONE_EXT);else U0.clipControlEXT(U0.LOWER_LEFT_EXT,U0.NEGATIVE_ONE_TO_ONE_EXT);Z0=a;let w0=E0;E0=null,this.setClear(w0)}},getReversed:function(){return Z0},setTest:function(a){if(a)D0(J.DEPTH_TEST);else C0(J.DEPTH_TEST)},setMask:function(a){if(n!==a&&!j)J.depthMask(a),n=a},setFunc:function(a){if(Z0)a=OK[a];if(H0!==a){switch(a){case xZ:J.depthFunc(J.NEVER);break;case gZ:J.depthFunc(J.ALWAYS);break;case pZ:J.depthFunc(J.LESS);break;case YQ:J.depthFunc(J.LEQUAL);break;case mZ:J.depthFunc(J.EQUAL);break;case lZ:J.depthFunc(J.GEQUAL);break;case dZ:J.depthFunc(J.GREATER);break;case uZ:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}H0=a}},setLocked:function(a){j=a},setClear:function(a){if(E0!==a){if(E0=a,Z0)a=1-a;J.clearDepth(a)}},reset:function(){j=!1,n=null,H0=null,E0=null,Z0=!1}}}function K(){let j=!1,Z0=null,n=null,H0=null,E0=null,a=null,U0=null,w0=null,OJ=null;return{setTest:function(QJ){if(!j)if(QJ)D0(J.STENCIL_TEST);else C0(J.STENCIL_TEST)},setMask:function(QJ){if(Z0!==QJ&&!j)J.stencilMask(QJ),Z0=QJ},setFunc:function(QJ,uJ,cJ){if(n!==QJ||H0!==uJ||E0!==cJ)J.stencilFunc(QJ,uJ,cJ),n=QJ,H0=uJ,E0=cJ},setOp:function(QJ,uJ,cJ){if(a!==QJ||U0!==uJ||w0!==cJ)J.stencilOp(QJ,uJ,cJ),a=QJ,U0=uJ,w0=cJ},setLocked:function(QJ){j=QJ},setClear:function(QJ){if(OJ!==QJ)J.clearStencil(QJ),OJ=QJ},reset:function(){j=!1,Z0=null,n=null,H0=null,E0=null,a=null,U0=null,w0=null,OJ=null}}}let W=new $,H=new Z,Y=new K,X=new WeakMap,U=new WeakMap,G={},F={},N={},E=new WeakMap,L=[],B=null,O=!1,q=null,w=null,C=null,M=null,I=null,A=null,_=null,R=new d0(0,0,0),z=0,l=!1,P=null,g=null,s=null,x=null,u=null,c=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),f=!1,t=0,e=J.getParameter(J.VERSION);if(e.indexOf("WebGL")!==-1)t=parseFloat(/^WebGL (\d)/.exec(e)[1]),f=t>=1;else if(e.indexOf("OpenGL ES")!==-1)t=parseFloat(/^OpenGL ES (\d)/.exec(e)[1]),f=t>=2;let K0=null,M0={},k0=J.getParameter(J.SCISSOR_BOX),HJ=J.getParameter(J.VIEWPORT),o0=new EJ().fromArray(k0),o=new EJ().fromArray(HJ);function W0(j,Z0,n,H0){let E0=new Uint8Array(4),a=J.createTexture();J.bindTexture(j,a),J.texParameteri(j,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(j,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let U0=0;U0<n;U0++)if(j===J.TEXTURE_3D||j===J.TEXTURE_2D_ARRAY)J.texImage3D(Z0,0,J.RGBA,1,1,H0,0,J.RGBA,J.UNSIGNED_BYTE,E0);else J.texImage2D(Z0+U0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,E0);return a}let q0={};q0[J.TEXTURE_2D]=W0(J.TEXTURE_2D,J.TEXTURE_2D,1),q0[J.TEXTURE_CUBE_MAP]=W0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),q0[J.TEXTURE_2D_ARRAY]=W0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),q0[J.TEXTURE_3D]=W0(J.TEXTURE_3D,J.TEXTURE_3D,1,1),W.setClear(0,0,0,1),H.setClear(1),Y.setClear(0),D0(J.DEPTH_TEST),H.setFunc(YQ),MJ(!1),JJ(ZQ),D0(J.CULL_FACE),h0(R9);function D0(j){if(G[j]!==!0)J.enable(j),G[j]=!0}function C0(j){if(G[j]!==!1)J.disable(j),G[j]=!1}function c0(j,Z0){if(N[j]!==Z0){if(J.bindFramebuffer(j,Z0),N[j]=Z0,j===J.DRAW_FRAMEBUFFER)N[J.FRAMEBUFFER]=Z0;if(j===J.FRAMEBUFFER)N[J.DRAW_FRAMEBUFFER]=Z0;return!0}return!1}function b0(j,Z0){let n=L,H0=!1;if(j){if(n=E.get(Z0),n===void 0)n=[],E.set(Z0,n);let E0=j.textures;if(n.length!==E0.length||n[0]!==J.COLOR_ATTACHMENT0){for(let a=0,U0=E0.length;a<U0;a++)n[a]=J.COLOR_ATTACHMENT0+a;n.length=E0.length,H0=!0}}else if(n[0]!==J.BACK)n[0]=J.BACK,H0=!0;if(H0)J.drawBuffers(n)}function g0(j){if(B!==j)return J.useProgram(j),B=j,!0;return!1}let e0={[d8]:J.FUNC_ADD,[LZ]:J.FUNC_SUBTRACT,[VZ]:J.FUNC_REVERSE_SUBTRACT};e0[MZ]=J.MIN,e0[zZ]=J.MAX;let u0={[BZ]:J.ZERO,[IZ]:J.ONE,[AZ]:J.SRC_COLOR,[CZ]:J.SRC_ALPHA,[yZ]:J.SRC_ALPHA_SATURATE,[SZ]:J.DST_COLOR,[wZ]:J.DST_ALPHA,[PZ]:J.ONE_MINUS_SRC_COLOR,[_Z]:J.ONE_MINUS_SRC_ALPHA,[jZ]:J.ONE_MINUS_DST_COLOR,[TZ]:J.ONE_MINUS_DST_ALPHA,[vZ]:J.CONSTANT_COLOR,[fZ]:J.ONE_MINUS_CONSTANT_COLOR,[bZ]:J.CONSTANT_ALPHA,[hZ]:J.ONE_MINUS_CONSTANT_ALPHA};function h0(j,Z0,n,H0,E0,a,U0,w0,OJ,QJ){if(j===R9){if(O===!0)C0(J.BLEND),O=!1;return}if(O===!1)D0(J.BLEND),O=!0;if(j!==kZ){if(j!==q||QJ!==l){if(w!==d8||I!==d8)J.blendEquation(J.FUNC_ADD),w=d8,I=d8;if(QJ)switch(j){case U7:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case KQ:J.blendFunc(J.ONE,J.ONE);break;case WQ:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case HQ:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:T0("WebGLState: Invalid blending: ",j);break}else switch(j){case U7:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case KQ:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case WQ:T0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case HQ:T0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:T0("WebGLState: Invalid blending: ",j);break}C=null,M=null,A=null,_=null,R.set(0,0,0),z=0,q=j,l=QJ}return}if(E0=E0||Z0,a=a||n,U0=U0||H0,Z0!==w||E0!==I)J.blendEquationSeparate(e0[Z0],e0[E0]),w=Z0,I=E0;if(n!==C||H0!==M||a!==A||U0!==_)J.blendFuncSeparate(u0[n],u0[H0],u0[a],u0[U0]),C=n,M=H0,A=a,_=U0;if(w0.equals(R)===!1||OJ!==z)J.blendColor(w0.r,w0.g,w0.b,OJ),R.copy(w0),z=OJ;q=j,l=!1}function YJ(j,Z0){j.side===D9?C0(J.CULL_FACE):D0(J.CULL_FACE);let n=j.side===xJ;if(Z0)n=!n;MJ(n),j.blending===U7&&j.transparent===!1?h0(R9):h0(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),H.setFunc(j.depthFunc),H.setTest(j.depthTest),H.setMask(j.depthWrite),W.setMask(j.colorWrite);let H0=j.stencilWrite;if(Y.setTest(H0),H0)Y.setMask(j.stencilWriteMask),Y.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),Y.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass);NJ(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?D0(J.SAMPLE_ALPHA_TO_COVERAGE):C0(J.SAMPLE_ALPHA_TO_COVERAGE)}function MJ(j){if(P!==j){if(j)J.frontFace(J.CW);else J.frontFace(J.CCW);P=j}}function JJ(j){if(j!==EZ){if(D0(J.CULL_FACE),j!==g)if(j===ZQ)J.cullFace(J.BACK);else if(j===DZ)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else C0(J.CULL_FACE);g=j}function BJ(j){if(j!==s){if(f)J.lineWidth(j);s=j}}function NJ(j,Z0,n){if(j){if(D0(J.POLYGON_OFFSET_FILL),x!==Z0||u!==n){if(x=Z0,u=n,H.getReversed())Z0=-Z0;J.polygonOffset(Z0,n)}}else C0(J.POLYGON_OFFSET_FILL)}function RJ(j){if(j)D0(J.SCISSOR_TEST);else C0(J.SCISSOR_TEST)}function S(j){if(j===void 0)j=J.TEXTURE0+c-1;if(K0!==j)J.activeTexture(j),K0=j}function jJ(j,Z0,n){if(n===void 0)if(K0===null)n=J.TEXTURE0+c-1;else n=K0;let H0=M0[n];if(H0===void 0)H0={type:void 0,texture:void 0},M0[n]=H0;if(H0.type!==j||H0.texture!==Z0){if(K0!==n)J.activeTexture(n),K0=n;J.bindTexture(j,Z0||q0[j]),H0.type=j,H0.texture=Z0}}function s0(){let j=M0[K0];if(j!==void 0&&j.type!==void 0)J.bindTexture(j.type,null),j.type=void 0,j.texture=void 0}function ZJ(){try{J.compressedTexImage2D(...arguments)}catch(j){T0("WebGLState:",j)}}function V(){try{J.compressedTexImage3D(...arguments)}catch(j){T0("WebGLState:",j)}}function D(){try{J.texSubImage2D(...arguments)}catch(j){T0("WebGLState:",j)}}function T(){try{J.texSubImage3D(...arguments)}catch(j){T0("WebGLState:",j)}}function p(){try{J.compressedTexSubImage2D(...arguments)}catch(j){T0("WebGLState:",j)}}function r(){try{J.compressedTexSubImage3D(...arguments)}catch(j){T0("WebGLState:",j)}}function $0(){try{J.texStorage2D(...arguments)}catch(j){T0("WebGLState:",j)}}function Y0(){try{J.texStorage3D(...arguments)}catch(j){T0("WebGLState:",j)}}function d(){try{J.texImage2D(...arguments)}catch(j){T0("WebGLState:",j)}}function i(){try{J.texImage3D(...arguments)}catch(j){T0("WebGLState:",j)}}function N0(j){if(F[j]!==void 0)return F[j];else return J.getParameter(j)}function z0(j,Z0){if(F[j]!==Z0)J.pixelStorei(j,Z0),F[j]=Z0}function X0(j){if(o0.equals(j)===!1)J.scissor(j.x,j.y,j.z,j.w),o0.copy(j)}function Q0(j){if(o.equals(j)===!1)J.viewport(j.x,j.y,j.z,j.w),o.copy(j)}function A0(j,Z0){let n=U.get(Z0);if(n===void 0)n=new WeakMap,U.set(Z0,n);let H0=n.get(j);if(H0===void 0)H0=J.getUniformBlockIndex(Z0,j.name),n.set(j,H0)}function _0(j,Z0){let H0=U.get(Z0).get(j);if(X.get(Z0)!==H0)J.uniformBlockBinding(Z0,H0,j.__bindingPointIndex),X.set(Z0,H0)}function v0(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),H.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),G={},F={},K0=null,M0={},N={},E=new WeakMap,L=[],B=null,O=!1,q=null,w=null,C=null,M=null,I=null,A=null,_=null,R=new d0(0,0,0),z=0,l=!1,P=null,g=null,s=null,x=null,u=null,o0.set(0,0,J.canvas.width,J.canvas.height),o.set(0,0,J.canvas.width,J.canvas.height),W.reset(),H.reset(),Y.reset()}return{buffers:{color:W,depth:H,stencil:Y},enable:D0,disable:C0,bindFramebuffer:c0,drawBuffers:b0,useProgram:g0,setBlending:h0,setMaterial:YJ,setFlipSided:MJ,setCullFace:JJ,setLineWidth:BJ,setPolygonOffset:NJ,setScissorTest:RJ,activeTexture:S,bindTexture:jJ,unbindTexture:s0,compressedTexImage2D:ZJ,compressedTexImage3D:V,texImage2D:d,texImage3D:i,pixelStorei:z0,getParameter:N0,updateUBOMapping:A0,uniformBlockBinding:_0,texStorage2D:$0,texStorage3D:Y0,texSubImage2D:D,texSubImage3D:T,compressedTexSubImage2D:p,compressedTexSubImage3D:r,scissor:X0,viewport:Q0,reset:v0}}function j5(J,Q,$,Z,K,W,H){let Y=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,X=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new l0,G=new WeakMap,F=new Set,N,E=new WeakMap,L=!1;try{L=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(V){}function B(V,D){return L?new OffscreenCanvas(V,D):Y7("canvas")}function O(V,D,T){let p=1,r=ZJ(V);if(r.width>T||r.height>T)p=T/Math.max(r.width,r.height);if(p<1)if(typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&V instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&V instanceof ImageBitmap||typeof VideoFrame<"u"&&V instanceof VideoFrame){let $0=Math.floor(p*r.width),Y0=Math.floor(p*r.height);if(N===void 0)N=B($0,Y0);let d=D?B($0,Y0):N;return d.width=$0,d.height=Y0,d.getContext("2d").drawImage(V,0,0,$0,Y0),S0("WebGLRenderer: Texture has been resized from ("+r.width+"x"+r.height+") to ("+$0+"x"+Y0+")."),d}else{if("data"in V)S0("WebGLRenderer: Image in DataTexture is too big ("+r.width+"x"+r.height+").");return V}return V}function q(V){return V.generateMipmaps}function w(V){J.generateMipmap(V)}function C(V){if(V.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(V.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(V.isWebGLArrayRenderTarget||V.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function M(V,D,T,p,r,$0=!1){if(V!==null){if(J[V]!==void 0)return J[V];S0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+V+"'")}let Y0;if(p){if(Y0=Q.get("EXT_texture_norm16"),!Y0)S0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let d=D;if(D===J.RED){if(T===J.FLOAT)d=J.R32F;if(T===J.HALF_FLOAT)d=J.R16F;if(T===J.UNSIGNED_BYTE)d=J.R8;if(T===J.UNSIGNED_SHORT&&Y0)d=Y0.R16_EXT;if(T===J.SHORT&&Y0)d=Y0.R16_SNORM_EXT}if(D===J.RED_INTEGER){if(T===J.UNSIGNED_BYTE)d=J.R8UI;if(T===J.UNSIGNED_SHORT)d=J.R16UI;if(T===J.UNSIGNED_INT)d=J.R32UI;if(T===J.BYTE)d=J.R8I;if(T===J.SHORT)d=J.R16I;if(T===J.INT)d=J.R32I}if(D===J.RG){if(T===J.FLOAT)d=J.RG32F;if(T===J.HALF_FLOAT)d=J.RG16F;if(T===J.UNSIGNED_BYTE)d=J.RG8;if(T===J.UNSIGNED_SHORT&&Y0)d=Y0.RG16_EXT;if(T===J.SHORT&&Y0)d=Y0.RG16_SNORM_EXT}if(D===J.RG_INTEGER){if(T===J.UNSIGNED_BYTE)d=J.RG8UI;if(T===J.UNSIGNED_SHORT)d=J.RG16UI;if(T===J.UNSIGNED_INT)d=J.RG32UI;if(T===J.BYTE)d=J.RG8I;if(T===J.SHORT)d=J.RG16I;if(T===J.INT)d=J.RG32I}if(D===J.RGB_INTEGER){if(T===J.UNSIGNED_BYTE)d=J.RGB8UI;if(T===J.UNSIGNED_SHORT)d=J.RGB16UI;if(T===J.UNSIGNED_INT)d=J.RGB32UI;if(T===J.BYTE)d=J.RGB8I;if(T===J.SHORT)d=J.RGB16I;if(T===J.INT)d=J.RGB32I}if(D===J.RGBA_INTEGER){if(T===J.UNSIGNED_BYTE)d=J.RGBA8UI;if(T===J.UNSIGNED_SHORT)d=J.RGBA16UI;if(T===J.UNSIGNED_INT)d=J.RGBA32UI;if(T===J.BYTE)d=J.RGBA8I;if(T===J.SHORT)d=J.RGBA16I;if(T===J.INT)d=J.RGBA32I}if(D===J.RGB){if(T===J.UNSIGNED_SHORT&&Y0)d=Y0.RGB16_EXT;if(T===J.SHORT&&Y0)d=Y0.RGB16_SNORM_EXT;if(T===J.UNSIGNED_INT_5_9_9_9_REV)d=J.RGB9_E5;if(T===J.UNSIGNED_INT_10F_11F_11F_REV)d=J.R11F_G11F_B10F}if(D===J.RGBA){let i=$0?tQ:i0.getTransfer(r);if(T===J.FLOAT)d=J.RGBA32F;if(T===J.HALF_FLOAT)d=J.RGBA16F;if(T===J.UNSIGNED_BYTE)d=i===qJ?J.SRGB8_ALPHA8:J.RGBA8;if(T===J.UNSIGNED_SHORT&&Y0)d=Y0.RGBA16_EXT;if(T===J.SHORT&&Y0)d=Y0.RGBA16_SNORM_EXT;if(T===J.UNSIGNED_SHORT_4_4_4_4)d=J.RGBA4;if(T===J.UNSIGNED_SHORT_5_5_5_1)d=J.RGB5_A1}if(d===J.R16F||d===J.R32F||d===J.RG16F||d===J.RG32F||d===J.RGBA16F||d===J.RGBA32F)Q.get("EXT_color_buffer_float");return d}function I(V,D){let T;if(V){if(D===null||D===c9||D===c8)T=J.DEPTH24_STENCIL8;else if(D===w9)T=J.DEPTH32F_STENCIL8;else if(D===F7)T=J.DEPTH24_STENCIL8,S0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(D===null||D===c9||D===c8)T=J.DEPTH_COMPONENT24;else if(D===w9)T=J.DEPTH_COMPONENT32F;else if(D===F7)T=J.DEPTH_COMPONENT16;return T}function A(V,D){if(q(V)===!0||V.isFramebufferTexture&&V.minFilter!==u9&&V.minFilter!==SJ)return Math.log2(Math.max(D.width,D.height))+1;else if(V.mipmaps!==void 0&&V.mipmaps.length>0)return V.mipmaps.length;else if(V.isCompressedTexture&&Array.isArray(V.image))return D.mipmaps.length;else return 1}function _(V){let D=V.target;if(D.removeEventListener("dispose",_),z(D),D.isVideoTexture)G.delete(D);if(D.isHTMLTexture)F.delete(D)}function R(V){let D=V.target;D.removeEventListener("dispose",R),P(D)}function z(V){let D=Z.get(V);if(D.__webglInit===void 0)return;let T=V.source,p=E.get(T);if(p){let r=p[D.__cacheKey];if(r.usedTimes--,r.usedTimes===0)l(V);if(Object.keys(p).length===0)E.delete(T)}Z.remove(V)}function l(V){let D=Z.get(V);J.deleteTexture(D.__webglTexture);let T=V.source,p=E.get(T);delete p[D.__cacheKey],H.memory.textures--}function P(V){let D=Z.get(V);if(V.depthTexture)V.depthTexture.dispose(),Z.remove(V.depthTexture);if(V.isWebGLCubeRenderTarget)for(let p=0;p<6;p++){if(Array.isArray(D.__webglFramebuffer[p]))for(let r=0;r<D.__webglFramebuffer[p].length;r++)J.deleteFramebuffer(D.__webglFramebuffer[p][r]);else J.deleteFramebuffer(D.__webglFramebuffer[p]);if(D.__webglDepthbuffer)J.deleteRenderbuffer(D.__webglDepthbuffer[p])}else{if(Array.isArray(D.__webglFramebuffer))for(let p=0;p<D.__webglFramebuffer.length;p++)J.deleteFramebuffer(D.__webglFramebuffer[p]);else J.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer)J.deleteRenderbuffer(D.__webglDepthbuffer);if(D.__webglMultisampledFramebuffer)J.deleteFramebuffer(D.__webglMultisampledFramebuffer);if(D.__webglColorRenderbuffer){for(let p=0;p<D.__webglColorRenderbuffer.length;p++)if(D.__webglColorRenderbuffer[p])J.deleteRenderbuffer(D.__webglColorRenderbuffer[p])}if(D.__webglDepthRenderbuffer)J.deleteRenderbuffer(D.__webglDepthRenderbuffer)}let T=V.textures;for(let p=0,r=T.length;p<r;p++){let $0=Z.get(T[p]);if($0.__webglTexture)J.deleteTexture($0.__webglTexture),H.memory.textures--;Z.remove(T[p])}Z.remove(V)}let g=0;function s(){g=0}function x(){return g}function u(V){g=V}function c(){let V=g;if(V>=K.maxTextures)S0("WebGLTextures: Trying to use "+V+" texture units while this GPU supports only "+K.maxTextures);return g+=1,V}function f(V){let D=[];return D.push(V.wrapS),D.push(V.wrapT),D.push(V.wrapR||0),D.push(V.magFilter),D.push(V.minFilter),D.push(V.anisotropy),D.push(V.internalFormat),D.push(V.format),D.push(V.type),D.push(V.generateMipmaps),D.push(V.premultiplyAlpha),D.push(V.flipY),D.push(V.unpackAlignment),D.push(V.colorSpace),D.join()}function t(V,D){let T=Z.get(V);if(V.isVideoTexture)jJ(V);if(V.isRenderTargetTexture===!1&&V.isExternalTexture!==!0&&V.version>0&&T.__version!==V.version){let p=V.image;if(p===null)S0("WebGLRenderer: Texture marked for update but no image data found.");else if(p.complete===!1)S0("WebGLRenderer: Texture marked for update but image is incomplete");else{C0(T,V,D);return}}else if(V.isExternalTexture)T.__webglTexture=V.sourceTexture?V.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,T.__webglTexture,J.TEXTURE0+D)}function e(V,D){let T=Z.get(V);if(V.isRenderTargetTexture===!1&&V.version>0&&T.__version!==V.version){C0(T,V,D);return}else if(V.isExternalTexture)T.__webglTexture=V.sourceTexture?V.sourceTexture:null;$.bindTexture(J.TEXTURE_2D_ARRAY,T.__webglTexture,J.TEXTURE0+D)}function K0(V,D){let T=Z.get(V);if(V.isRenderTargetTexture===!1&&V.version>0&&T.__version!==V.version){C0(T,V,D);return}$.bindTexture(J.TEXTURE_3D,T.__webglTexture,J.TEXTURE0+D)}function M0(V,D){let T=Z.get(V);if(V.isCubeDepthTexture!==!0&&V.version>0&&T.__version!==V.version){c0(T,V,D);return}$.bindTexture(J.TEXTURE_CUBE_MAP,T.__webglTexture,J.TEXTURE0+D)}let k0={[iZ]:J.REPEAT,[K6]:J.CLAMP_TO_EDGE,[oZ]:J.MIRRORED_REPEAT},HJ={[u9]:J.NEAREST,[aZ]:J.NEAREST_MIPMAP_NEAREST,[G7]:J.NEAREST_MIPMAP_LINEAR,[SJ]:J.LINEAR,[W6]:J.LINEAR_MIPMAP_NEAREST,[H8]:J.LINEAR_MIPMAP_LINEAR},o0={[WK]:J.NEVER,[qK]:J.ALWAYS,[HK]:J.LESS,[G6]:J.LEQUAL,[YK]:J.EQUAL,[F6]:J.GEQUAL,[XK]:J.GREATER,[UK]:J.NOTEQUAL};function o(V,D){if(D.type===w9&&Q.has("OES_texture_float_linear")===!1&&(D.magFilter===SJ||D.magFilter===W6||D.magFilter===G7||D.magFilter===H8||D.minFilter===SJ||D.minFilter===W6||D.minFilter===G7||D.minFilter===H8))S0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(V,J.TEXTURE_WRAP_S,k0[D.wrapS]),J.texParameteri(V,J.TEXTURE_WRAP_T,k0[D.wrapT]),V===J.TEXTURE_3D||V===J.TEXTURE_2D_ARRAY)J.texParameteri(V,J.TEXTURE_WRAP_R,k0[D.wrapR]);if(J.texParameteri(V,J.TEXTURE_MAG_FILTER,HJ[D.magFilter]),J.texParameteri(V,J.TEXTURE_MIN_FILTER,HJ[D.minFilter]),D.compareFunction)J.texParameteri(V,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(V,J.TEXTURE_COMPARE_FUNC,o0[D.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(D.magFilter===u9)return;if(D.minFilter!==G7&&D.minFilter!==H8)return;if(D.type===w9&&Q.has("OES_texture_float_linear")===!1)return;if(D.anisotropy>1||Z.get(D).__currentAnisotropy){let T=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(V,T.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,K.getMaxAnisotropy())),Z.get(D).__currentAnisotropy=D.anisotropy}}}function W0(V,D){let T=!1;if(V.__webglInit===void 0)V.__webglInit=!0,D.addEventListener("dispose",_);let p=D.source,r=E.get(p);if(r===void 0)r={},E.set(p,r);let $0=f(D);if($0!==V.__cacheKey){if(r[$0]===void 0)r[$0]={texture:J.createTexture(),usedTimes:0},H.memory.textures++,T=!0;r[$0].usedTimes++;let Y0=r[V.__cacheKey];if(Y0!==void 0){if(r[V.__cacheKey].usedTimes--,Y0.usedTimes===0)l(D)}V.__cacheKey=$0,V.__webglTexture=r[$0].texture}return T}function q0(V,D,T){return Math.floor(Math.floor(V/T)/D)}function D0(V,D,T,p){let $0=V.updateRanges;if($0.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,D.width,D.height,T,p,D.data);else{$0.sort((z0,X0)=>z0.start-X0.start);let Y0=0;for(let z0=1;z0<$0.length;z0++){let X0=$0[Y0],Q0=$0[z0],A0=X0.start+X0.count,_0=q0(Q0.start,D.width,4),v0=q0(X0.start,D.width,4);if(Q0.start<=A0+1&&_0===v0&&q0(Q0.start+Q0.count-1,D.width,4)===_0)X0.count=Math.max(X0.count,Q0.start+Q0.count-X0.start);else++Y0,$0[Y0]=Q0}$0.length=Y0+1;let d=$.getParameter(J.UNPACK_ROW_LENGTH),i=$.getParameter(J.UNPACK_SKIP_PIXELS),N0=$.getParameter(J.UNPACK_SKIP_ROWS);$.pixelStorei(J.UNPACK_ROW_LENGTH,D.width);for(let z0=0,X0=$0.length;z0<X0;z0++){let Q0=$0[z0],A0=Math.floor(Q0.start/4),_0=Math.ceil(Q0.count/4),v0=A0%D.width,j=Math.floor(A0/D.width),Z0=_0,n=1;$.pixelStorei(J.UNPACK_SKIP_PIXELS,v0),$.pixelStorei(J.UNPACK_SKIP_ROWS,j),$.texSubImage2D(J.TEXTURE_2D,0,v0,j,Z0,1,T,p,D.data)}V.clearUpdateRanges(),$.pixelStorei(J.UNPACK_ROW_LENGTH,d),$.pixelStorei(J.UNPACK_SKIP_PIXELS,i),$.pixelStorei(J.UNPACK_SKIP_ROWS,N0)}}function C0(V,D,T){let p=J.TEXTURE_2D;if(D.isDataArrayTexture||D.isCompressedArrayTexture)p=J.TEXTURE_2D_ARRAY;if(D.isData3DTexture)p=J.TEXTURE_3D;let r=W0(V,D),$0=D.source;$.bindTexture(p,V.__webglTexture,J.TEXTURE0+T);let Y0=Z.get($0);if($0.version!==Y0.__version||r===!0){if($.activeTexture(J.TEXTURE0+T),(typeof ImageBitmap<"u"&&D.image instanceof ImageBitmap)===!1){let n=i0.getPrimaries(i0.workingColorSpace),H0=D.colorSpace===q8?null:i0.getPrimaries(D.colorSpace),E0=D.colorSpace===q8||n===H0?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,D.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,E0)}$.pixelStorei(J.UNPACK_ALIGNMENT,D.unpackAlignment);let i=O(D.image,!1,K.maxTextureSize);i=s0(D,i);let N0=W.convert(D.format,D.colorSpace),z0=W.convert(D.type),X0=M(D.internalFormat,N0,z0,D.normalized,D.colorSpace,D.isVideoTexture);o(p,D);let Q0,A0=D.mipmaps,_0=D.isVideoTexture!==!0,v0=Y0.__version===void 0||r===!0,j=$0.dataReady,Z0=A(D,i);if(D.isDepthTexture){if(X0=I(D.format===X8,D.type),v0)if(_0)$.texStorage2D(J.TEXTURE_2D,1,X0,i.width,i.height);else $.texImage2D(J.TEXTURE_2D,0,X0,i.width,i.height,0,N0,z0,null)}else if(D.isDataTexture)if(A0.length>0){if(_0&&v0)$.texStorage2D(J.TEXTURE_2D,Z0,X0,A0[0].width,A0[0].height);for(let n=0,H0=A0.length;n<H0;n++)if(Q0=A0[n],_0){if(j)$.texSubImage2D(J.TEXTURE_2D,n,0,0,Q0.width,Q0.height,N0,z0,Q0.data)}else $.texImage2D(J.TEXTURE_2D,n,X0,Q0.width,Q0.height,0,N0,z0,Q0.data);D.generateMipmaps=!1}else if(_0){if(v0)$.texStorage2D(J.TEXTURE_2D,Z0,X0,i.width,i.height);if(j)D0(D,i,N0,z0)}else $.texImage2D(J.TEXTURE_2D,0,X0,i.width,i.height,0,N0,z0,i.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){if(_0&&v0)$.texStorage3D(J.TEXTURE_2D_ARRAY,Z0,X0,A0[0].width,A0[0].height,i.depth);for(let n=0,H0=A0.length;n<H0;n++)if(Q0=A0[n],D.format!==k9)if(N0!==null)if(_0){if(j)if(D.layerUpdates.size>0){let E0=P$(Q0.width,Q0.height,D.format,D.type);for(let a of D.layerUpdates){let U0=Q0.data.subarray(a*E0/Q0.data.BYTES_PER_ELEMENT,(a+1)*E0/Q0.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,n,0,0,a,Q0.width,Q0.height,1,N0,U0)}D.clearLayerUpdates()}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,n,0,0,0,Q0.width,Q0.height,i.depth,N0,Q0.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,n,X0,Q0.width,Q0.height,i.depth,0,Q0.data,0,0);else S0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(_0){if(j)$.texSubImage3D(J.TEXTURE_2D_ARRAY,n,0,0,0,Q0.width,Q0.height,i.depth,N0,z0,Q0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,n,X0,Q0.width,Q0.height,i.depth,0,N0,z0,Q0.data)}else{if(_0&&v0)$.texStorage2D(J.TEXTURE_2D,Z0,X0,A0[0].width,A0[0].height);for(let n=0,H0=A0.length;n<H0;n++)if(Q0=A0[n],D.format!==k9)if(N0!==null)if(_0){if(j)$.compressedTexSubImage2D(J.TEXTURE_2D,n,0,0,Q0.width,Q0.height,N0,Q0.data)}else $.compressedTexImage2D(J.TEXTURE_2D,n,X0,Q0.width,Q0.height,0,Q0.data);else S0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(_0){if(j)$.texSubImage2D(J.TEXTURE_2D,n,0,0,Q0.width,Q0.height,N0,z0,Q0.data)}else $.texImage2D(J.TEXTURE_2D,n,X0,Q0.width,Q0.height,0,N0,z0,Q0.data)}else if(D.isDataArrayTexture)if(_0){if(v0)$.texStorage3D(J.TEXTURE_2D_ARRAY,Z0,X0,i.width,i.height,i.depth);if(j)if(D.layerUpdates.size>0){let n=P$(i.width,i.height,D.format,D.type);for(let H0 of D.layerUpdates){let E0=i.data.subarray(H0*n/i.data.BYTES_PER_ELEMENT,(H0+1)*n/i.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,H0,i.width,i.height,1,N0,z0,E0)}D.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,i.width,i.height,i.depth,N0,z0,i.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,X0,i.width,i.height,i.depth,0,N0,z0,i.data);else if(D.isData3DTexture)if(_0){if(v0)$.texStorage3D(J.TEXTURE_3D,Z0,X0,i.width,i.height,i.depth);if(j)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,i.width,i.height,i.depth,N0,z0,i.data)}else $.texImage3D(J.TEXTURE_3D,0,X0,i.width,i.height,i.depth,0,N0,z0,i.data);else if(D.isFramebufferTexture){if(v0)if(_0)$.texStorage2D(J.TEXTURE_2D,Z0,X0,i.width,i.height);else{let{width:n,height:H0}=i;for(let E0=0;E0<Z0;E0++)$.texImage2D(J.TEXTURE_2D,E0,X0,n,H0,0,N0,z0,null),n>>=1,H0>>=1}}else if(D.isHTMLTexture){if("texElementImage2D"in J){let n=J.canvas;if(!n.hasAttribute("layoutsubtree"))n.setAttribute("layoutsubtree","true");if(i.parentNode!==n){n.appendChild(i),F.add(D),n.onpaint=(H0)=>{let E0=H0.changedElements;for(let a of F)if(E0.includes(a.image))a.needsUpdate=!0},n.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,i);else{let{RGBA:E0,RGBA:a,UNSIGNED_BYTE:U0}=J;J.texElementImage2D(J.TEXTURE_2D,0,E0,a,U0,i)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(A0.length>0){if(_0&&v0){let n=ZJ(A0[0]);$.texStorage2D(J.TEXTURE_2D,Z0,X0,n.width,n.height)}for(let n=0,H0=A0.length;n<H0;n++)if(Q0=A0[n],_0){if(j)$.texSubImage2D(J.TEXTURE_2D,n,0,0,N0,z0,Q0)}else $.texImage2D(J.TEXTURE_2D,n,X0,N0,z0,Q0);D.generateMipmaps=!1}else if(_0){if(v0){let n=ZJ(i);$.texStorage2D(J.TEXTURE_2D,Z0,X0,n.width,n.height)}if(j)$.texSubImage2D(J.TEXTURE_2D,0,0,0,N0,z0,i)}else $.texImage2D(J.TEXTURE_2D,0,X0,N0,z0,i);if(q(D))w(p);if(Y0.__version=$0.version,D.onUpdate)D.onUpdate(D)}V.__version=D.version}function c0(V,D,T){if(D.image.length!==6)return;let p=W0(V,D),r=D.source;$.bindTexture(J.TEXTURE_CUBE_MAP,V.__webglTexture,J.TEXTURE0+T);let $0=Z.get(r);if(r.version!==$0.__version||p===!0){$.activeTexture(J.TEXTURE0+T);let Y0=i0.getPrimaries(i0.workingColorSpace),d=D.colorSpace===q8?null:i0.getPrimaries(D.colorSpace),i=D.colorSpace===q8||Y0===d?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,D.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),$.pixelStorei(J.UNPACK_ALIGNMENT,D.unpackAlignment),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,i);let N0=D.isCompressedTexture||D.image[0].isCompressedTexture,z0=D.image[0]&&D.image[0].isDataTexture,X0=[];for(let a=0;a<6;a++){if(!N0&&!z0)X0[a]=O(D.image[a],!0,K.maxCubemapSize);else X0[a]=z0?D.image[a].image:D.image[a];X0[a]=s0(D,X0[a])}let Q0=X0[0],A0=W.convert(D.format,D.colorSpace),_0=W.convert(D.type),v0=M(D.internalFormat,A0,_0,D.normalized,D.colorSpace),j=D.isVideoTexture!==!0,Z0=$0.__version===void 0||p===!0,n=r.dataReady,H0=A(D,Q0);o(J.TEXTURE_CUBE_MAP,D);let E0;if(N0){if(j&&Z0)$.texStorage2D(J.TEXTURE_CUBE_MAP,H0,v0,Q0.width,Q0.height);for(let a=0;a<6;a++){E0=X0[a].mipmaps;for(let U0=0;U0<E0.length;U0++){let w0=E0[U0];if(D.format!==k9)if(A0!==null)if(j){if(n)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+a,U0,0,0,w0.width,w0.height,A0,w0.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+a,U0,v0,w0.width,w0.height,0,w0.data);else S0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(j){if(n)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+a,U0,0,0,w0.width,w0.height,A0,_0,w0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+a,U0,v0,w0.width,w0.height,0,A0,_0,w0.data)}}}else{if(E0=D.mipmaps,j&&Z0){if(E0.length>0)H0++;let a=ZJ(X0[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,H0,v0,a.width,a.height)}for(let a=0;a<6;a++)if(z0){if(j){if(n)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+a,0,0,0,X0[a].width,X0[a].height,A0,_0,X0[a].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+a,0,v0,X0[a].width,X0[a].height,0,A0,_0,X0[a].data);for(let U0=0;U0<E0.length;U0++){let OJ=E0[U0].image[a].image;if(j){if(n)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+a,U0+1,0,0,OJ.width,OJ.height,A0,_0,OJ.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+a,U0+1,v0,OJ.width,OJ.height,0,A0,_0,OJ.data)}}else{if(j){if(n)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+a,0,0,0,A0,_0,X0[a])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+a,0,v0,A0,_0,X0[a]);for(let U0=0;U0<E0.length;U0++){let w0=E0[U0];if(j){if(n)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+a,U0+1,0,0,A0,_0,w0.image[a])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+a,U0+1,v0,A0,_0,w0.image[a])}}}if(q(D))w(J.TEXTURE_CUBE_MAP);if($0.__version=r.version,D.onUpdate)D.onUpdate(D)}V.__version=D.version}function b0(V,D,T,p,r,$0){let Y0=W.convert(T.format,T.colorSpace),d=W.convert(T.type),i=M(T.internalFormat,Y0,d,T.normalized,T.colorSpace),N0=Z.get(D),z0=Z.get(T);if(z0.__renderTarget=D,!N0.__hasExternalTextures){let X0=Math.max(1,D.width>>$0),Q0=Math.max(1,D.height>>$0);if(r===J.TEXTURE_3D||r===J.TEXTURE_2D_ARRAY)$.texImage3D(r,$0,i,X0,Q0,D.depth,0,Y0,d,null);else $.texImage2D(r,$0,i,X0,Q0,0,Y0,d,null)}if($.bindFramebuffer(J.FRAMEBUFFER,V),S(D))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,p,r,z0.__webglTexture,0,RJ(D));else if(r===J.TEXTURE_2D||r>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&r<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,p,r,z0.__webglTexture,$0);$.bindFramebuffer(J.FRAMEBUFFER,null)}function g0(V,D,T){if(J.bindRenderbuffer(J.RENDERBUFFER,V),D.depthBuffer){let p=D.depthTexture,r=p&&p.isDepthTexture?p.type:null,$0=I(D.stencilBuffer,r),Y0=D.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(S(D))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,RJ(D),$0,D.width,D.height);else if(T)J.renderbufferStorageMultisample(J.RENDERBUFFER,RJ(D),$0,D.width,D.height);else J.renderbufferStorage(J.RENDERBUFFER,$0,D.width,D.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,Y0,J.RENDERBUFFER,V)}else{let p=D.textures;for(let r=0;r<p.length;r++){let $0=p[r],Y0=W.convert($0.format,$0.colorSpace),d=W.convert($0.type),i=M($0.internalFormat,Y0,d,$0.normalized,$0.colorSpace);if(S(D))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,RJ(D),i,D.width,D.height);else if(T)J.renderbufferStorageMultisample(J.RENDERBUFFER,RJ(D),i,D.width,D.height);else J.renderbufferStorage(J.RENDERBUFFER,i,D.width,D.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function e0(V,D,T){let p=D.isWebGLCubeRenderTarget===!0;if($.bindFramebuffer(J.FRAMEBUFFER,V),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let r=Z.get(D.depthTexture);if(r.__renderTarget=D,!r.__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0;if(p){if(r.__webglInit===void 0)r.__webglInit=!0,D.depthTexture.addEventListener("dispose",_);if(r.__webglTexture===void 0){r.__webglTexture=J.createTexture(),$.bindTexture(J.TEXTURE_CUBE_MAP,r.__webglTexture),o(J.TEXTURE_CUBE_MAP,D.depthTexture);let N0=W.convert(D.depthTexture.format),z0=W.convert(D.depthTexture.type),X0;if(D.depthTexture.format===Y8)X0=J.DEPTH_COMPONENT24;else if(D.depthTexture.format===X8)X0=J.DEPTH24_STENCIL8;for(let Q0=0;Q0<6;Q0++)J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Q0,0,X0,D.width,D.height,0,N0,z0,null)}}else t(D.depthTexture,0);let $0=r.__webglTexture,Y0=RJ(D),d=p?J.TEXTURE_CUBE_MAP_POSITIVE_X+T:J.TEXTURE_2D,i=D.depthTexture.format===X8?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(D.depthTexture.format===Y8)if(S(D))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,i,d,$0,0,Y0);else J.framebufferTexture2D(J.FRAMEBUFFER,i,d,$0,0);else if(D.depthTexture.format===X8)if(S(D))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,i,d,$0,0,Y0);else J.framebufferTexture2D(J.FRAMEBUFFER,i,d,$0,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function u0(V){let D=Z.get(V),T=V.isWebGLCubeRenderTarget===!0;if(D.__boundDepthTexture!==V.depthTexture){let p=V.depthTexture;if(D.__depthDisposeCallback)D.__depthDisposeCallback();if(p){let r=()=>{delete D.__boundDepthTexture,delete D.__depthDisposeCallback,p.removeEventListener("dispose",r)};p.addEventListener("dispose",r),D.__depthDisposeCallback=r}D.__boundDepthTexture=p}if(V.depthTexture&&!D.__autoAllocateDepthBuffer)if(T)for(let p=0;p<6;p++)e0(D.__webglFramebuffer[p],V,p);else{let p=V.texture.mipmaps;if(p&&p.length>0)e0(D.__webglFramebuffer[0],V,0);else e0(D.__webglFramebuffer,V,0)}else if(T){D.__webglDepthbuffer=[];for(let p=0;p<6;p++)if($.bindFramebuffer(J.FRAMEBUFFER,D.__webglFramebuffer[p]),D.__webglDepthbuffer[p]===void 0)D.__webglDepthbuffer[p]=J.createRenderbuffer(),g0(D.__webglDepthbuffer[p],V,!1);else{let r=V.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,$0=D.__webglDepthbuffer[p];J.bindRenderbuffer(J.RENDERBUFFER,$0),J.framebufferRenderbuffer(J.FRAMEBUFFER,r,J.RENDERBUFFER,$0)}}else{let p=V.texture.mipmaps;if(p&&p.length>0)$.bindFramebuffer(J.FRAMEBUFFER,D.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,D.__webglFramebuffer);if(D.__webglDepthbuffer===void 0)D.__webglDepthbuffer=J.createRenderbuffer(),g0(D.__webglDepthbuffer,V,!1);else{let r=V.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,$0=D.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,$0),J.framebufferRenderbuffer(J.FRAMEBUFFER,r,J.RENDERBUFFER,$0)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function h0(V,D,T){let p=Z.get(V);if(D!==void 0)b0(p.__webglFramebuffer,V,V.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(T!==void 0)u0(V)}function YJ(V){let D=V.texture,T=Z.get(V),p=Z.get(D);V.addEventListener("dispose",R);let r=V.textures,$0=V.isWebGLCubeRenderTarget===!0,Y0=r.length>1;if(!Y0){if(p.__webglTexture===void 0)p.__webglTexture=J.createTexture();p.__version=D.version,H.memory.textures++}if($0){T.__webglFramebuffer=[];for(let d=0;d<6;d++)if(D.mipmaps&&D.mipmaps.length>0){T.__webglFramebuffer[d]=[];for(let i=0;i<D.mipmaps.length;i++)T.__webglFramebuffer[d][i]=J.createFramebuffer()}else T.__webglFramebuffer[d]=J.createFramebuffer()}else{if(D.mipmaps&&D.mipmaps.length>0){T.__webglFramebuffer=[];for(let d=0;d<D.mipmaps.length;d++)T.__webglFramebuffer[d]=J.createFramebuffer()}else T.__webglFramebuffer=J.createFramebuffer();if(Y0)for(let d=0,i=r.length;d<i;d++){let N0=Z.get(r[d]);if(N0.__webglTexture===void 0)N0.__webglTexture=J.createTexture(),H.memory.textures++}if(V.samples>0&&S(V)===!1){T.__webglMultisampledFramebuffer=J.createFramebuffer(),T.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,T.__webglMultisampledFramebuffer);for(let d=0;d<r.length;d++){let i=r[d];T.__webglColorRenderbuffer[d]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,T.__webglColorRenderbuffer[d]);let N0=W.convert(i.format,i.colorSpace),z0=W.convert(i.type),X0=M(i.internalFormat,N0,z0,i.normalized,i.colorSpace,V.isXRRenderTarget===!0),Q0=RJ(V);J.renderbufferStorageMultisample(J.RENDERBUFFER,Q0,X0,V.width,V.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+d,J.RENDERBUFFER,T.__webglColorRenderbuffer[d])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),V.depthBuffer)T.__webglDepthRenderbuffer=J.createRenderbuffer(),g0(T.__webglDepthRenderbuffer,V,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if($0){$.bindTexture(J.TEXTURE_CUBE_MAP,p.__webglTexture),o(J.TEXTURE_CUBE_MAP,D);for(let d=0;d<6;d++)if(D.mipmaps&&D.mipmaps.length>0)for(let i=0;i<D.mipmaps.length;i++)b0(T.__webglFramebuffer[d][i],V,D,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+d,i);else b0(T.__webglFramebuffer[d],V,D,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+d,0);if(q(D))w(J.TEXTURE_CUBE_MAP);$.unbindTexture()}else if(Y0){for(let d=0,i=r.length;d<i;d++){let N0=r[d],z0=Z.get(N0),X0=J.TEXTURE_2D;if(V.isWebGL3DRenderTarget||V.isWebGLArrayRenderTarget)X0=V.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(X0,z0.__webglTexture),o(X0,N0),b0(T.__webglFramebuffer,V,N0,J.COLOR_ATTACHMENT0+d,X0,0),q(N0))w(X0)}$.unbindTexture()}else{let d=J.TEXTURE_2D;if(V.isWebGL3DRenderTarget||V.isWebGLArrayRenderTarget)d=V.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(d,p.__webglTexture),o(d,D),D.mipmaps&&D.mipmaps.length>0)for(let i=0;i<D.mipmaps.length;i++)b0(T.__webglFramebuffer[i],V,D,J.COLOR_ATTACHMENT0,d,i);else b0(T.__webglFramebuffer,V,D,J.COLOR_ATTACHMENT0,d,0);if(q(D))w(d);$.unbindTexture()}if(V.depthBuffer)u0(V)}function MJ(V){let D=V.textures;for(let T=0,p=D.length;T<p;T++){let r=D[T];if(q(r)){let $0=C(V),Y0=Z.get(r).__webglTexture;$.bindTexture($0,Y0),w($0),$.unbindTexture()}}}let JJ=[],BJ=[];function NJ(V){if(V.samples>0){if(S(V)===!1){let{textures:D,width:T,height:p}=V,r=J.COLOR_BUFFER_BIT,$0=V.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,Y0=Z.get(V),d=D.length>1;if(d)for(let N0=0;N0<D.length;N0++)$.bindFramebuffer(J.FRAMEBUFFER,Y0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+N0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,Y0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+N0,J.TEXTURE_2D,null,0);$.bindFramebuffer(J.READ_FRAMEBUFFER,Y0.__webglMultisampledFramebuffer);let i=V.texture.mipmaps;if(i&&i.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,Y0.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,Y0.__webglFramebuffer);for(let N0=0;N0<D.length;N0++){if(V.resolveDepthBuffer){if(V.depthBuffer)r|=J.DEPTH_BUFFER_BIT;if(V.stencilBuffer&&V.resolveStencilBuffer)r|=J.STENCIL_BUFFER_BIT}if(d){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,Y0.__webglColorRenderbuffer[N0]);let z0=Z.get(D[N0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,z0,0)}if(J.blitFramebuffer(0,0,T,p,0,0,T,p,r,J.NEAREST),X===!0){if(JJ.length=0,BJ.length=0,JJ.push(J.COLOR_ATTACHMENT0+N0),V.depthBuffer&&V.resolveDepthBuffer===!1)JJ.push($0),BJ.push($0),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,BJ);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,JJ)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),d)for(let N0=0;N0<D.length;N0++){$.bindFramebuffer(J.FRAMEBUFFER,Y0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+N0,J.RENDERBUFFER,Y0.__webglColorRenderbuffer[N0]);let z0=Z.get(D[N0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,Y0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+N0,J.TEXTURE_2D,z0,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,Y0.__webglMultisampledFramebuffer)}else if(V.depthBuffer&&V.resolveDepthBuffer===!1&&X){let D=V.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[D])}}}function RJ(V){return Math.min(K.maxSamples,V.samples)}function S(V){let D=Z.get(V);return V.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function jJ(V){let D=H.render.frame;if(G.get(V)!==D)G.set(V,D),V.update()}function s0(V,D){let{colorSpace:T,format:p,type:r}=V;if(V.isCompressedTexture===!0||V.isVideoTexture===!0)return D;if(T!==rQ&&T!==q8)if(i0.getTransfer(T)===qJ){if(p!==k9||r!==X9)S0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else T0("WebGLTextures: Unsupported texture color space:",T);return D}function ZJ(V){if(typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement)U.width=V.naturalWidth||V.width,U.height=V.naturalHeight||V.height;else if(typeof VideoFrame<"u"&&V instanceof VideoFrame)U.width=V.displayWidth,U.height=V.displayHeight;else U.width=V.width,U.height=V.height;return U}this.allocateTextureUnit=c,this.resetTextureUnits=s,this.getTextureUnits=x,this.setTextureUnits=u,this.setTexture2D=t,this.setTexture2DArray=e,this.setTexture3D=K0,this.setTextureCube=M0,this.rebindTextures=h0,this.setupRenderTarget=YJ,this.updateRenderTargetMipmap=MJ,this.updateMultisampleRenderTarget=NJ,this.setupDepthRenderbuffer=u0,this.setupFrameBufferTexture=b0,this.useMultisampledRTT=S,this.isReversedDepthBuffer=function(){return $.buffers.depth.getReversed()}}function y5(J,Q){function $(Z,K=q8){let W,H=i0.getTransfer(K);if(Z===X9)return J.UNSIGNED_BYTE;if(Z===EQ)return J.UNSIGNED_SHORT_4_4_4_4;if(Z===DQ)return J.UNSIGNED_SHORT_5_5_5_1;if(Z===eZ)return J.UNSIGNED_INT_5_9_9_9_REV;if(Z===JK)return J.UNSIGNED_INT_10F_11F_11F_REV;if(Z===rZ)return J.BYTE;if(Z===tZ)return J.SHORT;if(Z===F7)return J.UNSIGNED_SHORT;if(Z===OQ)return J.INT;if(Z===c9)return J.UNSIGNED_INT;if(Z===w9)return J.FLOAT;if(Z===T9)return J.HALF_FLOAT;if(Z===QK)return J.ALPHA;if(Z===$K)return J.RGB;if(Z===k9)return J.RGBA;if(Z===Y8)return J.DEPTH_COMPONENT;if(Z===X8)return J.DEPTH_STENCIL;if(Z===ZK)return J.RED;if(Z===RQ)return J.RED_INTEGER;if(Z===U8)return J.RG;if(Z===kQ)return J.RG_INTEGER;if(Z===LQ)return J.RGBA_INTEGER;if(Z===H6||Z===Y6||Z===X6||Z===U6)if(H===qJ)if(W=Q.get("WEBGL_compressed_texture_s3tc_srgb"),W!==null){if(Z===H6)return W.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===Y6)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===X6)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===U6)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(W=Q.get("WEBGL_compressed_texture_s3tc"),W!==null){if(Z===H6)return W.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===Y6)return W.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===X6)return W.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===U6)return W.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===VQ||Z===MQ||Z===zQ||Z===BQ)if(W=Q.get("WEBGL_compressed_texture_pvrtc"),W!==null){if(Z===VQ)return W.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===MQ)return W.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===zQ)return W.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===BQ)return W.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===IQ||Z===AQ||Z===PQ||Z===CQ||Z===_Q||Z===q6||Z===wQ)if(W=Q.get("WEBGL_compressed_texture_etc"),W!==null){if(Z===IQ||Z===AQ)return H===qJ?W.COMPRESSED_SRGB8_ETC2:W.COMPRESSED_RGB8_ETC2;if(Z===PQ)return H===qJ?W.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:W.COMPRESSED_RGBA8_ETC2_EAC;if(Z===CQ)return W.COMPRESSED_R11_EAC;if(Z===_Q)return W.COMPRESSED_SIGNED_R11_EAC;if(Z===q6)return W.COMPRESSED_RG11_EAC;if(Z===wQ)return W.COMPRESSED_SIGNED_RG11_EAC}else return null;if(Z===TQ||Z===SQ||Z===jQ||Z===yQ||Z===vQ||Z===fQ||Z===bQ||Z===hQ||Z===xQ||Z===gQ||Z===pQ||Z===mQ||Z===lQ||Z===dQ)if(W=Q.get("WEBGL_compressed_texture_astc"),W!==null){if(Z===TQ)return H===qJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:W.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===SQ)return H===qJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:W.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===jQ)return H===qJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:W.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===yQ)return H===qJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:W.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===vQ)return H===qJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:W.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===fQ)return H===qJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:W.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===bQ)return H===qJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:W.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===hQ)return H===qJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:W.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===xQ)return H===qJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:W.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===gQ)return H===qJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:W.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===pQ)return H===qJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:W.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===mQ)return H===qJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:W.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===lQ)return H===qJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:W.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===dQ)return H===qJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:W.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===uQ||Z===cQ||Z===nQ)if(W=Q.get("EXT_texture_compression_bptc"),W!==null){if(Z===uQ)return H===qJ?W.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:W.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===cQ)return W.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===nQ)return W.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===sQ||Z===iQ||Z===N6||Z===oQ)if(W=Q.get("EXT_texture_compression_rgtc"),W!==null){if(Z===sQ)return W.COMPRESSED_RED_RGTC1_EXT;if(Z===iQ)return W.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===N6)return W.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===oQ)return W.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===c8)return J.UNSIGNED_INT_24_8;return J[Z]!==void 0?J[Z]:null}return{convert:$}}var v5=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,f5=`
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

}`;class JW{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new V6(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new Q9({vertexShader:v5,fragmentShader:f5,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new j0(new N9(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class QW extends S9{constructor(J,Q){super();let $=this,Z=null,K=1,W=null,H="local-floor",Y=1,X=null,U=null,G=null,F=null,N=null,E=null,L=typeof XRWebGLBinding<"u",B=new JW,O={},q=Q.getContextAttributes(),w=null,C=null,M=[],I=[],A=new l0,_=null,R=new bJ;R.viewport=new EJ;let z=new bJ;z.viewport=new EJ;let l=[R,z],P=new z$,g=null,s=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(o){let W0=M[o];if(W0===void 0)W0=new R7,M[o]=W0;return W0.getTargetRaySpace()},this.getControllerGrip=function(o){let W0=M[o];if(W0===void 0)W0=new R7,M[o]=W0;return W0.getGripSpace()},this.getHand=function(o){let W0=M[o];if(W0===void 0)W0=new R7,M[o]=W0;return W0.getHandSpace()};function x(o){let W0=I.indexOf(o.inputSource);if(W0===-1)return;let q0=M[W0];if(q0!==void 0)q0.update(o.inputSource,o.frame,X||W),q0.dispatchEvent({type:o.type,data:o.inputSource})}function u(){Z.removeEventListener("select",x),Z.removeEventListener("selectstart",x),Z.removeEventListener("selectend",x),Z.removeEventListener("squeeze",x),Z.removeEventListener("squeezestart",x),Z.removeEventListener("squeezeend",x),Z.removeEventListener("end",u),Z.removeEventListener("inputsourceschange",c);for(let o=0;o<M.length;o++){let W0=I[o];if(W0===null)continue;I[o]=null,M[o].disconnect(W0)}g=null,s=null,B.reset();for(let o in O)delete O[o];J.setRenderTarget(w),N=null,F=null,G=null,Z=null,C=null,o0.stop(),$.isPresenting=!1,J.setPixelRatio(_),J.setSize(A.width,A.height,!1),$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(o){if(K=o,$.isPresenting===!0)S0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(o){if(H=o,$.isPresenting===!0)S0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return X||W},this.setReferenceSpace=function(o){X=o},this.getBaseLayer=function(){return F!==null?F:N},this.getBinding=function(){if(G===null&&L)G=new XRWebGLBinding(Z,Q);return G},this.getFrame=function(){return E},this.getSession=function(){return Z},this.setSession=async function(o){if(Z=o,Z!==null){if(w=J.getRenderTarget(),Z.addEventListener("select",x),Z.addEventListener("selectstart",x),Z.addEventListener("selectend",x),Z.addEventListener("squeeze",x),Z.addEventListener("squeezestart",x),Z.addEventListener("squeezeend",x),Z.addEventListener("end",u),Z.addEventListener("inputsourceschange",c),q.xrCompatible!==!0)await Q.makeXRCompatible();if(_=J.getPixelRatio(),J.getSize(A),!(L&&("createProjectionLayer"in XRWebGLBinding.prototype))){let q0={antialias:q.antialias,alpha:!0,depth:q.depth,stencil:q.stencil,framebufferScaleFactor:K};N=new XRWebGLLayer(Z,Q,q0),Z.updateRenderState({baseLayer:N}),J.setPixelRatio(1),J.setSize(N.framebufferWidth,N.framebufferHeight,!1),C=new J9(N.framebufferWidth,N.framebufferHeight,{format:k9,type:X9,colorSpace:J.outputColorSpace,stencilBuffer:q.stencil,resolveDepthBuffer:N.ignoreDepthValues===!1,resolveStencilBuffer:N.ignoreDepthValues===!1})}else{let q0=null,D0=null,C0=null;if(q.depth)C0=q.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,q0=q.stencil?X8:Y8,D0=q.stencil?c8:c9;let c0={colorFormat:Q.RGBA8,depthFormat:C0,scaleFactor:K};G=this.getBinding(),F=G.createProjectionLayer(c0),Z.updateRenderState({layers:[F]}),J.setPixelRatio(1),J.setSize(F.textureWidth,F.textureHeight,!1),C=new J9(F.textureWidth,F.textureHeight,{format:k9,type:X9,depthTexture:new s9(F.textureWidth,F.textureHeight,D0,void 0,void 0,void 0,void 0,void 0,void 0,q0),stencilBuffer:q.stencil,colorSpace:J.outputColorSpace,samples:q.antialias?4:0,resolveDepthBuffer:F.ignoreDepthValues===!1,resolveStencilBuffer:F.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(Y),X=null,W=await Z.requestReferenceSpace(H),o0.setContext(Z),o0.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return B.getDepthTexture()};function c(o){for(let W0=0;W0<o.removed.length;W0++){let q0=o.removed[W0],D0=I.indexOf(q0);if(D0>=0)I[D0]=null,M[D0].disconnect(q0)}for(let W0=0;W0<o.added.length;W0++){let q0=o.added[W0],D0=I.indexOf(q0);if(D0===-1){for(let c0=0;c0<M.length;c0++)if(c0>=I.length){I.push(q0),D0=c0;break}else if(I[c0]===null){I[c0]=q0,D0=c0;break}if(D0===-1)break}let C0=M[D0];if(C0)C0.connect(q0)}}let f=new v,t=new v;function e(o,W0,q0){f.setFromMatrixPosition(W0.matrixWorld),t.setFromMatrixPosition(q0.matrixWorld);let D0=f.distanceTo(t),C0=W0.projectionMatrix.elements,c0=q0.projectionMatrix.elements,b0=C0[14]/(C0[10]-1),g0=C0[14]/(C0[10]+1),e0=(C0[9]+1)/C0[5],u0=(C0[9]-1)/C0[5],h0=(C0[8]-1)/C0[0],YJ=(c0[8]+1)/c0[0],MJ=b0*h0,JJ=b0*YJ,BJ=D0/(-h0+YJ),NJ=BJ*-h0;if(W0.matrixWorld.decompose(o.position,o.quaternion,o.scale),o.translateX(NJ),o.translateZ(BJ),o.matrixWorld.compose(o.position,o.quaternion,o.scale),o.matrixWorldInverse.copy(o.matrixWorld).invert(),C0[10]===-1)o.projectionMatrix.copy(W0.projectionMatrix),o.projectionMatrixInverse.copy(W0.projectionMatrixInverse);else{let RJ=b0+BJ,S=g0+BJ,jJ=MJ-NJ,s0=JJ+(D0-NJ),ZJ=e0*g0/S*RJ,V=u0*g0/S*RJ;o.projectionMatrix.makePerspective(jJ,s0,ZJ,V,RJ,S),o.projectionMatrixInverse.copy(o.projectionMatrix).invert()}}function K0(o,W0){if(W0===null)o.matrixWorld.copy(o.matrix);else o.matrixWorld.multiplyMatrices(W0.matrixWorld,o.matrix);o.matrixWorldInverse.copy(o.matrixWorld).invert()}this.updateCamera=function(o){if(Z===null)return;let{near:W0,far:q0}=o;if(B.texture!==null){if(B.depthNear>0)W0=B.depthNear;if(B.depthFar>0)q0=B.depthFar}if(P.near=z.near=R.near=W0,P.far=z.far=R.far=q0,g!==P.near||s!==P.far)Z.updateRenderState({depthNear:P.near,depthFar:P.far}),g=P.near,s=P.far;P.layers.mask=o.layers.mask|6,R.layers.mask=P.layers.mask&-5,z.layers.mask=P.layers.mask&-3;let D0=o.parent,C0=P.cameras;K0(P,D0);for(let c0=0;c0<C0.length;c0++)K0(C0[c0],D0);if(C0.length===2)e(P,R,z);else P.projectionMatrix.copy(R.projectionMatrix);M0(o,P,D0)};function M0(o,W0,q0){if(q0===null)o.matrix.copy(W0.matrixWorld);else o.matrix.copy(q0.matrixWorld),o.matrix.invert(),o.matrix.multiply(W0.matrixWorld);if(o.matrix.decompose(o.position,o.quaternion,o.scale),o.updateMatrixWorld(!0),o.projectionMatrix.copy(W0.projectionMatrix),o.projectionMatrixInverse.copy(W0.projectionMatrixInverse),o.isPerspectiveCamera)o.fov=J6*2*Math.atan(1/o.projectionMatrix.elements[5]),o.zoom=1}this.getCamera=function(){return P},this.getFoveation=function(){if(F===null&&N===null)return;return Y},this.setFoveation=function(o){if(Y=o,F!==null)F.fixedFoveation=o;if(N!==null&&N.fixedFoveation!==void 0)N.fixedFoveation=o},this.hasDepthSensing=function(){return B.texture!==null},this.getDepthSensingMesh=function(){return B.getMesh(P)},this.getCameraTexture=function(o){return O[o]};let k0=null;function HJ(o,W0){if(U=W0.getViewerPose(X||W),E=W0,U!==null){let q0=U.views;if(N!==null)J.setRenderTargetFramebuffer(C,N.framebuffer),J.setRenderTarget(C);let D0=!1;if(q0.length!==P.cameras.length)P.cameras.length=0,D0=!0;for(let g0=0;g0<q0.length;g0++){let e0=q0[g0],u0=null;if(N!==null)u0=N.getViewport(e0);else{let YJ=G.getViewSubImage(F,e0);if(u0=YJ.viewport,g0===0)J.setRenderTargetTextures(C,YJ.colorTexture,YJ.depthStencilTexture),J.setRenderTarget(C)}let h0=l[g0];if(h0===void 0)h0=new bJ,h0.layers.enable(g0),h0.viewport=new EJ,l[g0]=h0;if(h0.matrix.fromArray(e0.transform.matrix),h0.matrix.decompose(h0.position,h0.quaternion,h0.scale),h0.projectionMatrix.fromArray(e0.projectionMatrix),h0.projectionMatrixInverse.copy(h0.projectionMatrix).invert(),h0.viewport.set(u0.x,u0.y,u0.width,u0.height),g0===0)P.matrix.copy(h0.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale);if(D0===!0)P.cameras.push(h0)}let C0=Z.enabledFeatures;if(C0&&C0.includes("depth-sensing")&&Z.depthUsage=="gpu-optimized"&&L){G=$.getBinding();let g0=G.getDepthInformation(q0[0]);if(g0&&g0.isValid&&g0.texture)B.init(g0,Z.renderState)}if(C0&&C0.includes("camera-access")&&L){J.state.unbindTexture(),G=$.getBinding();for(let g0=0;g0<q0.length;g0++){let e0=q0[g0].camera;if(e0){let u0=O[e0];if(!u0)u0=new V6,O[e0]=u0;let h0=G.getCameraImage(e0);u0.sourceTexture=h0}}}}for(let q0=0;q0<M.length;q0++){let D0=I[q0],C0=M[q0];if(D0!==null&&C0!==void 0)C0.update(D0,W0,X||W)}if(k0)k0(o,W0);if(W0.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:W0});E=null}let o0=new dK;o0.setAnimationLoop(HJ),this.setAnimationLoop=function(o){k0=o},this.dispose=function(){}}}var b5=new WJ,$W=new y0;$W.set(-1,0,0,0,1,0,0,0,1);function h5(J,Q){function $(O,q){if(O.matrixAutoUpdate===!0)O.updateMatrix();q.value.copy(O.matrix)}function Z(O,q){if(q.color.getRGB(O.fogColor.value,H$(J)),q.isFog)O.fogNear.value=q.near,O.fogFar.value=q.far;else if(q.isFogExp2)O.fogDensity.value=q.density}function K(O,q,w,C,M){if(q.isNodeMaterial)q.uniformsNeedUpdate=!1;else if(q.isMeshBasicMaterial)W(O,q);else if(q.isMeshLambertMaterial){if(W(O,q),q.envMap)O.envMapIntensity.value=q.envMapIntensity}else if(q.isMeshToonMaterial)W(O,q),F(O,q);else if(q.isMeshPhongMaterial){if(W(O,q),G(O,q),q.envMap)O.envMapIntensity.value=q.envMapIntensity}else if(q.isMeshStandardMaterial){if(W(O,q),N(O,q),q.isMeshPhysicalMaterial)E(O,q,M)}else if(q.isMeshMatcapMaterial)W(O,q),L(O,q);else if(q.isMeshDepthMaterial)W(O,q);else if(q.isMeshDistanceMaterial)W(O,q),B(O,q);else if(q.isMeshNormalMaterial)W(O,q);else if(q.isLineBasicMaterial){if(H(O,q),q.isLineDashedMaterial)Y(O,q)}else if(q.isPointsMaterial)X(O,q,w,C);else if(q.isSpriteMaterial)U(O,q);else if(q.isShadowMaterial)O.color.value.copy(q.color),O.opacity.value=q.opacity;else if(q.isShaderMaterial)q.uniformsNeedUpdate=!1}function W(O,q){if(O.opacity.value=q.opacity,q.color)O.diffuse.value.copy(q.color);if(q.emissive)O.emissive.value.copy(q.emissive).multiplyScalar(q.emissiveIntensity);if(q.map)O.map.value=q.map,$(q.map,O.mapTransform);if(q.alphaMap)O.alphaMap.value=q.alphaMap,$(q.alphaMap,O.alphaMapTransform);if(q.bumpMap){if(O.bumpMap.value=q.bumpMap,$(q.bumpMap,O.bumpMapTransform),O.bumpScale.value=q.bumpScale,q.side===xJ)O.bumpScale.value*=-1}if(q.normalMap){if(O.normalMap.value=q.normalMap,$(q.normalMap,O.normalMapTransform),O.normalScale.value.copy(q.normalScale),q.side===xJ)O.normalScale.value.negate()}if(q.displacementMap)O.displacementMap.value=q.displacementMap,$(q.displacementMap,O.displacementMapTransform),O.displacementScale.value=q.displacementScale,O.displacementBias.value=q.displacementBias;if(q.emissiveMap)O.emissiveMap.value=q.emissiveMap,$(q.emissiveMap,O.emissiveMapTransform);if(q.specularMap)O.specularMap.value=q.specularMap,$(q.specularMap,O.specularMapTransform);if(q.alphaTest>0)O.alphaTest.value=q.alphaTest;let w=Q.get(q),C=w.envMap,M=w.envMapRotation;if(C){if(O.envMap.value=C,O.envMapRotation.value.setFromMatrix4(b5.makeRotationFromEuler(M)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1)O.envMapRotation.value.premultiply($W);O.reflectivity.value=q.reflectivity,O.ior.value=q.ior,O.refractionRatio.value=q.refractionRatio}if(q.lightMap)O.lightMap.value=q.lightMap,O.lightMapIntensity.value=q.lightMapIntensity,$(q.lightMap,O.lightMapTransform);if(q.aoMap)O.aoMap.value=q.aoMap,O.aoMapIntensity.value=q.aoMapIntensity,$(q.aoMap,O.aoMapTransform)}function H(O,q){if(O.diffuse.value.copy(q.color),O.opacity.value=q.opacity,q.map)O.map.value=q.map,$(q.map,O.mapTransform)}function Y(O,q){O.dashSize.value=q.dashSize,O.totalSize.value=q.dashSize+q.gapSize,O.scale.value=q.scale}function X(O,q,w,C){if(O.diffuse.value.copy(q.color),O.opacity.value=q.opacity,O.size.value=q.size*w,O.scale.value=C*0.5,q.map)O.map.value=q.map,$(q.map,O.uvTransform);if(q.alphaMap)O.alphaMap.value=q.alphaMap,$(q.alphaMap,O.alphaMapTransform);if(q.alphaTest>0)O.alphaTest.value=q.alphaTest}function U(O,q){if(O.diffuse.value.copy(q.color),O.opacity.value=q.opacity,O.rotation.value=q.rotation,q.map)O.map.value=q.map,$(q.map,O.mapTransform);if(q.alphaMap)O.alphaMap.value=q.alphaMap,$(q.alphaMap,O.alphaMapTransform);if(q.alphaTest>0)O.alphaTest.value=q.alphaTest}function G(O,q){O.specular.value.copy(q.specular),O.shininess.value=Math.max(q.shininess,0.0001)}function F(O,q){if(q.gradientMap)O.gradientMap.value=q.gradientMap}function N(O,q){if(O.metalness.value=q.metalness,q.metalnessMap)O.metalnessMap.value=q.metalnessMap,$(q.metalnessMap,O.metalnessMapTransform);if(O.roughness.value=q.roughness,q.roughnessMap)O.roughnessMap.value=q.roughnessMap,$(q.roughnessMap,O.roughnessMapTransform);if(q.envMap)O.envMapIntensity.value=q.envMapIntensity}function E(O,q,w){if(O.ior.value=q.ior,q.sheen>0){if(O.sheenColor.value.copy(q.sheenColor).multiplyScalar(q.sheen),O.sheenRoughness.value=q.sheenRoughness,q.sheenColorMap)O.sheenColorMap.value=q.sheenColorMap,$(q.sheenColorMap,O.sheenColorMapTransform);if(q.sheenRoughnessMap)O.sheenRoughnessMap.value=q.sheenRoughnessMap,$(q.sheenRoughnessMap,O.sheenRoughnessMapTransform)}if(q.clearcoat>0){if(O.clearcoat.value=q.clearcoat,O.clearcoatRoughness.value=q.clearcoatRoughness,q.clearcoatMap)O.clearcoatMap.value=q.clearcoatMap,$(q.clearcoatMap,O.clearcoatMapTransform);if(q.clearcoatRoughnessMap)O.clearcoatRoughnessMap.value=q.clearcoatRoughnessMap,$(q.clearcoatRoughnessMap,O.clearcoatRoughnessMapTransform);if(q.clearcoatNormalMap){if(O.clearcoatNormalMap.value=q.clearcoatNormalMap,$(q.clearcoatNormalMap,O.clearcoatNormalMapTransform),O.clearcoatNormalScale.value.copy(q.clearcoatNormalScale),q.side===xJ)O.clearcoatNormalScale.value.negate()}}if(q.dispersion>0)O.dispersion.value=q.dispersion;if(q.iridescence>0){if(O.iridescence.value=q.iridescence,O.iridescenceIOR.value=q.iridescenceIOR,O.iridescenceThicknessMinimum.value=q.iridescenceThicknessRange[0],O.iridescenceThicknessMaximum.value=q.iridescenceThicknessRange[1],q.iridescenceMap)O.iridescenceMap.value=q.iridescenceMap,$(q.iridescenceMap,O.iridescenceMapTransform);if(q.iridescenceThicknessMap)O.iridescenceThicknessMap.value=q.iridescenceThicknessMap,$(q.iridescenceThicknessMap,O.iridescenceThicknessMapTransform)}if(q.transmission>0){if(O.transmission.value=q.transmission,O.transmissionSamplerMap.value=w.texture,O.transmissionSamplerSize.value.set(w.width,w.height),q.transmissionMap)O.transmissionMap.value=q.transmissionMap,$(q.transmissionMap,O.transmissionMapTransform);if(O.thickness.value=q.thickness,q.thicknessMap)O.thicknessMap.value=q.thicknessMap,$(q.thicknessMap,O.thicknessMapTransform);O.attenuationDistance.value=q.attenuationDistance,O.attenuationColor.value.copy(q.attenuationColor)}if(q.anisotropy>0){if(O.anisotropyVector.value.set(q.anisotropy*Math.cos(q.anisotropyRotation),q.anisotropy*Math.sin(q.anisotropyRotation)),q.anisotropyMap)O.anisotropyMap.value=q.anisotropyMap,$(q.anisotropyMap,O.anisotropyMapTransform)}if(O.specularIntensity.value=q.specularIntensity,O.specularColor.value.copy(q.specularColor),q.specularColorMap)O.specularColorMap.value=q.specularColorMap,$(q.specularColorMap,O.specularColorMapTransform);if(q.specularIntensityMap)O.specularIntensityMap.value=q.specularIntensityMap,$(q.specularIntensityMap,O.specularIntensityMapTransform)}function L(O,q){if(q.matcap)O.matcap.value=q.matcap}function B(O,q){let w=Q.get(q).light;O.referencePosition.value.setFromMatrixPosition(w.matrixWorld),O.nearDistance.value=w.shadow.camera.near,O.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:K}}function x5(J,Q,$,Z){let K={},W={},H=[],Y=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function X(M,I){let A=I.program;Z.uniformBlockBinding(M,A)}function U(M,I){let A=K[M.id];if(A===void 0)O(M),A=G(M),K[M.id]=A,M.addEventListener("dispose",w);let _=I.program;Z.updateUBOMapping(M,_);let R=Q.render.frame;if(W[M.id]!==R)N(M),W[M.id]=R}function G(M){let I=F();M.__bindingPointIndex=I;let A=J.createBuffer(),_=M.__size,R=M.usage;return J.bindBuffer(J.UNIFORM_BUFFER,A),J.bufferData(J.UNIFORM_BUFFER,_,R),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,I,A),A}function F(){for(let M=0;M<Y;M++)if(H.indexOf(M)===-1)return H.push(M),M;return T0("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function N(M){let I=K[M.id],A=M.uniforms,_=M.__cache;J.bindBuffer(J.UNIFORM_BUFFER,I);for(let R=0,z=A.length;R<z;R++){let l=A[R];if(Array.isArray(l))for(let P=0,g=l.length;P<g;P++)E(l[P],R,P,_);else E(l,R,0,_)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function E(M,I,A,_){if(B(M,I,A,_)===!0){let{__offset:R,value:z}=M;if(Array.isArray(z)){let l=0;for(let P=0;P<z.length;P++){let g=z[P],s=q(g);if(L(g,M.__data,l),typeof g!=="number"&&typeof g!=="boolean"&&!g.isMatrix3&&!ArrayBuffer.isView(g))l+=s.storage/Float32Array.BYTES_PER_ELEMENT}}else L(z,M.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,R,M.__data)}}function L(M,I,A){if(typeof M==="number"||typeof M==="boolean")I[0]=M;else if(M.isMatrix3)I[0]=M.elements[0],I[1]=M.elements[1],I[2]=M.elements[2],I[3]=0,I[4]=M.elements[3],I[5]=M.elements[4],I[6]=M.elements[5],I[7]=0,I[8]=M.elements[6],I[9]=M.elements[7],I[10]=M.elements[8],I[11]=0;else if(ArrayBuffer.isView(M))I.set(new M.constructor(M.buffer,M.byteOffset,I.length));else M.toArray(I,A)}function B(M,I,A,_){let R=M.value,z=I+"_"+A;if(_[z]===void 0){if(typeof R==="number"||typeof R==="boolean")_[z]=R;else if(ArrayBuffer.isView(R))_[z]=R.slice();else _[z]=R.clone();return!0}else{let l=_[z];if(typeof R==="number"||typeof R==="boolean"){if(l!==R)return _[z]=R,!0}else if(ArrayBuffer.isView(R))return!0;else if(l.equals(R)===!1)return l.copy(R),!0}return!1}function O(M){let I=M.uniforms,A=0,_=16;for(let z=0,l=I.length;z<l;z++){let P=Array.isArray(I[z])?I[z]:[I[z]];for(let g=0,s=P.length;g<s;g++){let x=P[g],u=Array.isArray(x.value)?x.value:[x.value];for(let c=0,f=u.length;c<f;c++){let t=u[c],e=q(t),K0=A%_,M0=K0%e.boundary,k0=K0+M0;if(A+=M0,k0!==0&&_-k0<e.storage)A+=_-k0;x.__data=new Float32Array(e.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=A,A+=e.storage}}}let R=A%_;if(R>0)A+=_-R;return M.__size=A,M.__cache={},this}function q(M){let I={boundary:0,storage:0};if(typeof M==="number"||typeof M==="boolean")I.boundary=4,I.storage=4;else if(M.isVector2)I.boundary=8,I.storage=8;else if(M.isVector3||M.isColor)I.boundary=16,I.storage=12;else if(M.isVector4)I.boundary=16,I.storage=16;else if(M.isMatrix3)I.boundary=48,I.storage=48;else if(M.isMatrix4)I.boundary=64,I.storage=64;else if(M.isTexture)S0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(M))I.boundary=16,I.storage=M.byteLength;else S0("WebGLRenderer: Unsupported uniform value type.",M);return I}function w(M){let I=M.target;I.removeEventListener("dispose",w);let A=H.indexOf(I.__bindingPointIndex);H.splice(A,1),J.deleteBuffer(K[I.id]),delete K[I.id],delete W[I.id]}function C(){for(let M in K)J.deleteBuffer(K[M]);H=[],K={},W={}}return{bind:X,update:U,dispose:C}}var g5=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),L9=null;function p5(){if(L9===null)L9=new k6(g5,16,16,U8,T9),L9.name="DFG_LUT",L9.minFilter=SJ,L9.magFilter=SJ,L9.wrapS=K6,L9.wrapT=K6,L9.generateMipmaps=!1,L9.needsUpdate=!0;return L9}class b${constructor(J={}){let{canvas:Q=NK(),context:$=null,depth:Z=!0,stencil:K=!1,alpha:W=!1,antialias:H=!1,premultipliedAlpha:Y=!0,preserveDrawingBuffer:X=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:G=!1,reversedDepthBuffer:F=!1,outputBufferType:N=X9}=J;this.isWebGLRenderer=!0;let E;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=$.getContextAttributes().alpha}else E=W;let L=N,B=new Set([LQ,kQ,RQ]),O=new Set([X9,c9,F7,c8,EQ,DQ]),q=new Uint32Array(4),w=new Int32Array(4),C=new v,M=null,I=null,A=[],_=[],R=null;this.domElement=Q,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Y9,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let z=this,l=!1,P=null,g=null,s=null,x=null;this._outputColorSpace=N8;let u=0,c=0,f=null,t=-1,e=null,K0=new EJ,M0=new EJ,k0=null,HJ=new d0(0),o0=0,o=Q.width,W0=Q.height,q0=1,D0=null,C0=null,c0=new EJ(0,0,o,W0),b0=new EJ(0,0,o,W0),g0=!1,e0=new k7,u0=!1,h0=!1,YJ=new WJ,MJ=new v,JJ=new EJ,BJ={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},NJ=!1;function RJ(){return f===null?q0:1}let S=$;function jJ(k,y){return Q.getContext(k,y)}try{let k={alpha:!0,depth:Z,stencil:K,antialias:H,premultipliedAlpha:Y,preserveDrawingBuffer:X,powerPreference:U,failIfMajorPerformanceCaveat:G};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${OZ}`);if(Q.addEventListener("webglcontextlost",w0,!1),Q.addEventListener("webglcontextrestored",OJ,!1),Q.addEventListener("webglcontextcreationerror",QJ,!1),S===null){if(S=jJ("webgl2",k),S===null)if(jJ("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(k){throw T0("WebGLRenderer: "+k.message),k}let s0,ZJ,V,D,T,p,r,$0,Y0,d,i,N0,z0,X0,Q0,A0,_0,v0,j,Z0,n,H0,E0;function a(){if(s0=new sX(S),s0.init(),n=new y5(S,s0),ZJ=new gX(S,s0,J,n),V=new S5(S,s0),ZJ.reversedDepthBuffer&&F)V.buffers.depth.setReversed(!0);g=S.createFramebuffer(),s=S.createFramebuffer(),x=S.createFramebuffer(),D=new aX(S),T=new R5,p=new j5(S,s0,V,T,ZJ,n,D),r=new nX(z),$0=new JH(S),H0=new hX(S,$0),Y0=new iX(S,$0,D,H0),d=new tX(S,Y0,$0,H0,D),v0=new rX(S,ZJ,p),Q0=new pX(T),i=new D5(z,r,s0,ZJ,H0,Q0),N0=new h5(z,T),z0=new L5,X0=new A5(s0),_0=new bX(z,r,V,d,E,Y),A0=new T5(z,d,ZJ),E0=new x5(S,D,ZJ,V),j=new xX(S,s0,D),Z0=new oX(S,s0,D),D.programs=i.programs,z.capabilities=ZJ,z.extensions=s0,z.properties=T,z.renderLists=z0,z.shadowMap=A0,z.state=V,z.info=D}if(a(),L!==X9)R=new JU(L,Q.width,Q.height,H,Z,K);let U0=new QW(z,S);this.xr=U0,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){let k=s0.get("WEBGL_lose_context");if(k)k.loseContext()},this.forceContextRestore=function(){let k=s0.get("WEBGL_lose_context");if(k)k.restoreContext()},this.getPixelRatio=function(){return q0},this.setPixelRatio=function(k){if(k===void 0)return;q0=k,this.setSize(o,W0,!1)},this.getSize=function(k){return k.set(o,W0)},this.setSize=function(k,y,m=!0){if(U0.isPresenting){S0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(o=k,W0=y,Q.width=Math.floor(k*q0),Q.height=Math.floor(y*q0),m===!0)Q.style.width=k+"px",Q.style.height=y+"px";if(R!==null)R.setSize(Q.width,Q.height);this.setViewport(0,0,k,y)},this.getDrawingBufferSize=function(k){return k.set(o*q0,W0*q0).floor()},this.setDrawingBufferSize=function(k,y,m){o=k,W0=y,q0=m,Q.width=Math.floor(k*m),Q.height=Math.floor(y*m),this.setViewport(0,0,k,y)},this.setEffects=function(k){if(L===X9){T0("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(k){for(let y=0;y<k.length;y++)if(k[y].isOutputPass===!0){S0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(k||[])},this.getCurrentViewport=function(k){return k.copy(K0)},this.getViewport=function(k){return k.copy(c0)},this.setViewport=function(k,y,m,b){if(k.isVector4)c0.set(k.x,k.y,k.z,k.w);else c0.set(k,y,m,b);V.viewport(K0.copy(c0).multiplyScalar(q0).round())},this.getScissor=function(k){return k.copy(b0)},this.setScissor=function(k,y,m,b){if(k.isVector4)b0.set(k.x,k.y,k.z,k.w);else b0.set(k,y,m,b);V.scissor(M0.copy(b0).multiplyScalar(q0).round())},this.getScissorTest=function(){return g0},this.setScissorTest=function(k){V.setScissorTest(g0=k)},this.setOpaqueSort=function(k){D0=k},this.setTransparentSort=function(k){C0=k},this.getClearColor=function(k){return k.copy(_0.getClearColor())},this.setClearColor=function(){_0.setClearColor(...arguments)},this.getClearAlpha=function(){return _0.getClearAlpha()},this.setClearAlpha=function(){_0.setClearAlpha(...arguments)},this.clear=function(k=!0,y=!0,m=!0){let b=0;if(k){let h=!1;if(f!==null){let O0=f.texture.format;h=B.has(O0)}if(h){let O0=f.texture.type,L0=O.has(O0),F0=_0.getClearColor(),B0=_0.getClearAlpha(),I0=F0.r,f0=F0.g,m0=F0.b;if(L0)q[0]=I0,q[1]=f0,q[2]=m0,q[3]=B0,S.clearBufferuiv(S.COLOR,0,q);else w[0]=I0,w[1]=f0,w[2]=m0,w[3]=B0,S.clearBufferiv(S.COLOR,0,w)}else b|=S.COLOR_BUFFER_BIT}if(y)b|=S.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(m)b|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(b!==0)S.clear(b)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(k){k.setRenderer(this),P=k},this.dispose=function(){Q.removeEventListener("webglcontextlost",w0,!1),Q.removeEventListener("webglcontextrestored",OJ,!1),Q.removeEventListener("webglcontextcreationerror",QJ,!1),_0.dispose(),z0.dispose(),X0.dispose(),T.dispose(),r.dispose(),d.dispose(),H0.dispose(),E0.dispose(),i.dispose(),U0.dispose(),U0.removeEventListener("sessionstart",V0),U0.removeEventListener("sessionend",n0),a0.stop()};function w0(k){k.preventDefault(),Q$("WebGLRenderer: Context Lost."),l=!0}function OJ(){Q$("WebGLRenderer: Context Restored."),l=!1;let k=D.autoReset,y=A0.enabled,m=A0.autoUpdate,b=A0.needsUpdate,h=A0.type;a(),D.autoReset=k,A0.enabled=y,A0.autoUpdate=m,A0.needsUpdate=b,A0.type=h}function QJ(k){T0("WebGLRenderer: A WebGL context could not be created. Reason: ",k.statusMessage)}function uJ(k){let y=k.target;y.removeEventListener("dispose",uJ),cJ(y)}function cJ(k){e8(k),T.remove(k)}function e8(k){let y=T.get(k).programs;if(y!==void 0){if(y.forEach(function(m){i.releaseProgram(m)}),k.isShaderMaterial)i.releaseShaderCache(k)}}this.renderBufferDirect=function(k,y,m,b,h,O0){if(y===null)y=BJ;let L0=h.isMesh&&h.matrixWorld.determinantAffine()<0,F0=qW(k,y,m,b,h);V.setMaterial(b,L0);let B0=m.index,I0=1;if(b.wireframe===!0){if(B0=Y0.getWireframeAttribute(m),B0===void 0)return;I0=2}let f0=m.drawRange,m0=m.attributes.position,P0=f0.start*I0,KJ=(f0.start+f0.count)*I0;if(O0!==null)P0=Math.max(P0,O0.start*I0),KJ=Math.min(KJ,(O0.start+O0.count)*I0);if(B0!==null)P0=Math.max(P0,0),KJ=Math.min(KJ,B0.count);else if(m0!==void 0&&m0!==null)P0=Math.max(P0,0),KJ=Math.min(KJ,m0.count);let LJ=KJ-P0;if(LJ<0||LJ===1/0)return;H0.setup(h,b,F0,m,B0);let kJ,XJ=j;if(B0!==null)kJ=$0.get(B0),XJ=Z0,XJ.setIndex(kJ);if(h.isMesh)if(b.wireframe===!0)V.setLineWidth(b.wireframeLinewidth*RJ()),XJ.setMode(S.LINES);else XJ.setMode(S.TRIANGLES);else if(h.isLine){let yJ=b.linewidth;if(yJ===void 0)yJ=1;if(V.setLineWidth(yJ*RJ()),h.isLineSegments)XJ.setMode(S.LINES);else if(h.isLineLoop)XJ.setMode(S.LINE_LOOP);else XJ.setMode(S.LINE_STRIP)}else if(h.isPoints)XJ.setMode(S.POINTS);else if(h.isSprite)XJ.setMode(S.TRIANGLES);if(h.isBatchedMesh)if(!s0.get("WEBGL_multi_draw")){let{_multiDrawStarts:yJ,_multiDrawCounts:R0,_multiDrawCount:nJ}=h,t0=B0?$0.get(B0).bytesPerElement:1,rJ=T.get(b).currentProgram.getUniforms();for(let F9=0;F9<nJ;F9++)rJ.setValue(S,"_gl_DrawID",F9),XJ.render(yJ[F9]/t0,R0[F9])}else XJ.renderMultiDraw(h._multiDrawStarts,h._multiDrawCounts,h._multiDrawCount);else if(h.isInstancedMesh)XJ.renderInstances(P0,LJ,h.count);else if(m.isInstancedBufferGeometry){let yJ=m._maxInstanceCount!==void 0?m._maxInstanceCount:1/0,R0=Math.min(m.instanceCount,yJ);XJ.renderInstances(P0,LJ,R0)}else XJ.render(P0,LJ)};function w7(k,y,m){if(k.transparent===!0&&k.side===D9&&k.forceSinglePass===!1)k.side=xJ,k.needsUpdate=!0,T7(k,y,m),k.side=l8,k.needsUpdate=!0,T7(k,y,m),k.side=D9;else T7(k,y,m)}this.compile=function(k,y,m=null){if(m===null)m=k;if(I=X0.get(m),I.init(y),_.push(I),m.traverseVisible(function(h){if(h.isLight&&h.layers.test(y.layers)){if(I.pushLight(h),h.castShadow)I.pushShadow(h)}}),k!==m)k.traverseVisible(function(h){if(h.isLight&&h.layers.test(y.layers)){if(I.pushLight(h),h.castShadow)I.pushShadow(h)}});I.setupLights();let b=new Set;return k.traverse(function(h){if(!(h.isMesh||h.isPoints||h.isLine||h.isSprite))return;let O0=h.material;if(O0)if(Array.isArray(O0))for(let L0=0;L0<O0.length;L0++){let F0=O0[L0];w7(F0,m,h),b.add(F0)}else w7(O0,m,h),b.add(O0)}),I=_.pop(),b},this.compileAsync=function(k,y,m=null){let b=this.compile(k,y,m);return new Promise((h)=>{function O0(){if(b.forEach(function(L0){if(T.get(L0).currentProgram.isReady())b.delete(L0)}),b.size===0){h(k);return}setTimeout(O0,10)}if(s0.get("KHR_parallel_shader_compile")!==null)O0();else setTimeout(O0,10)})};let B8=null;function J0(k){if(B8)B8(k)}function V0(){a0.stop()}function n0(){a0.start()}let a0=new dK;if(a0.setAnimationLoop(J0),typeof self<"u")a0.setContext(self);this.setAnimationLoop=function(k){B8=k,U0.setAnimationLoop(k),k===null?a0.stop():a0.start()},U0.addEventListener("sessionstart",V0),U0.addEventListener("sessionend",n0),this.render=function(k,y){if(y!==void 0&&y.isCamera!==!0){T0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(l===!0)return;if(P!==null)P.renderStart(k,y);let m=U0.enabled===!0&&U0.isPresenting===!0,b=R!==null&&(f===null||m)&&R.begin(z,f);if(k.matrixWorldAutoUpdate===!0)k.updateMatrixWorld();if(y.parent===null&&y.matrixWorldAutoUpdate===!0)y.updateMatrixWorld();if(U0.enabled===!0&&U0.isPresenting===!0&&(R===null||R.isCompositing()===!1)){if(U0.cameraAutoUpdate===!0)U0.updateCamera(y);y=U0.getCamera()}if(k.isScene===!0)k.onBeforeRender(z,k,y,f);if(I=X0.get(k,_.length),I.init(y),I.state.textureUnits=p.getTextureUnits(),_.push(I),YJ.multiplyMatrices(y.projectionMatrix,y.matrixWorldInverse),e0.setFromProjectionMatrix(YJ,J$,y.reversedDepth),h0=this.localClippingEnabled,u0=Q0.init(this.clippingPlanes,h0),M=z0.get(k,A.length),M.init(),A.push(M),U0.enabled===!0&&U0.isPresenting===!0){let L0=z.xr.getDepthSensingMesh();if(L0!==null)x0(L0,y,-1/0,z.sortObjects)}if(x0(k,y,0,z.sortObjects),M.finish(),z.sortObjects===!0)M.sort(D0,C0,y.reversedDepth);if(NJ=U0.enabled===!1||U0.isPresenting===!1||U0.hasDepthSensing()===!1,NJ)_0.addToRenderList(M,k);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(u0===!0)Q0.beginShadows();let h=I.state.shadowsArray;if(A0.render(h,k,y),u0===!0)Q0.endShadows();if((b&&R.hasRenderPass())===!1){let{opaque:L0,transmissive:F0}=M;if(I.setupLights(),y.isArrayCamera){let B0=y.cameras;if(F0.length>0)for(let I0=0,f0=B0.length;I0<f0;I0++){let m0=B0[I0];M9(L0,F0,k,m0)}if(NJ)_0.render(k);for(let I0=0,f0=B0.length;I0<f0;I0++){let m0=B0[I0];aJ(M,k,m0,m0.viewport)}}else{if(F0.length>0)M9(L0,F0,k,y);if(NJ)_0.render(k);aJ(M,k,y)}}if(f!==null&&c===0)p.updateMultisampleRenderTarget(f),p.updateRenderTargetMipmap(f);if(b)R.end(z);if(k.isScene===!0)k.onAfterRender(z,k,y);if(H0.resetDefaultState(),t=-1,e=null,_.pop(),_.length>0){if(I=_[_.length-1],p.setTextureUnits(I.state.textureUnits),u0===!0)Q0.setGlobalState(z.clippingPlanes,I.state.camera)}else I=null;if(A.pop(),A.length>0)M=A[A.length-1];else M=null;if(P!==null)P.renderEnd()};function x0(k,y,m,b){if(k.visible===!1)return;if(k.layers.test(y.layers)){if(k.isGroup)m=k.renderOrder;else if(k.isLOD){if(k.autoUpdate===!0)k.update(y)}else if(k.isLightProbeGrid)I.pushLightProbeGrid(k);else if(k.isLight){if(I.pushLight(k),k.castShadow)I.pushShadow(k)}else if(k.isSprite){if(!k.frustumCulled||e0.intersectsSprite(k)){if(b)JJ.setFromMatrixPosition(k.matrixWorld).applyMatrix4(YJ);let L0=d.update(k),F0=k.material;if(F0.visible)M.push(k,L0,F0,m,JJ.z,null)}}else if(k.isMesh||k.isLine||k.isPoints){if(!k.frustumCulled||e0.intersectsObject(k)){let L0=d.update(k),F0=k.material;if(b){if(k.boundingSphere!==void 0){if(k.boundingSphere===null)k.computeBoundingSphere();JJ.copy(k.boundingSphere.center)}else{if(L0.boundingSphere===null)L0.computeBoundingSphere();JJ.copy(L0.boundingSphere.center)}JJ.applyMatrix4(k.matrixWorld).applyMatrix4(YJ)}if(Array.isArray(F0)){let B0=L0.groups;for(let I0=0,f0=B0.length;I0<f0;I0++){let m0=B0[I0],P0=F0[m0.materialIndex];if(P0&&P0.visible)M.push(k,L0,P0,m,JJ.z,m0)}}else if(F0.visible)M.push(k,L0,F0,m,JJ.z,null)}}}let O0=k.children;for(let L0=0,F0=O0.length;L0<F0;L0++)x0(O0[L0],y,m,b)}function aJ(k,y,m,b){let{opaque:h,transmissive:O0,transparent:L0}=k;if(I.setupLightsView(m),u0===!0)Q0.setGlobalState(z.clippingPlanes,m);if(b)V.viewport(K0.copy(b));if(h.length>0)v9(h,y,m);if(O0.length>0)v9(O0,y,m);if(L0.length>0)v9(L0,y,m);V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function M9(k,y,m,b){if((m.isScene===!0?m.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[b.id]===void 0){let P0=s0.has("EXT_color_buffer_half_float")||s0.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[b.id]=new J9(1,1,{generateMipmaps:!0,type:P0?T9:X9,minFilter:H8,samples:Math.max(4,ZJ.samples),stencilBuffer:K,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:i0.workingColorSpace})}let O0=I.state.transmissionRenderTarget[b.id],L0=b.viewport||K0;O0.setSize(L0.z*z.transmissionResolutionScale,L0.w*z.transmissionResolutionScale);let F0=z.getRenderTarget(),B0=z.getActiveCubeFace(),I0=z.getActiveMipmapLevel();if(z.setRenderTarget(O0),z.getClearColor(HJ),o0=z.getClearAlpha(),o0<1)z.setClearColor(16777215,0.5);if(z.clear(),NJ)_0.render(m);let f0=z.toneMapping;z.toneMapping=Y9;let m0=b.viewport;if(b.viewport!==void 0)b.viewport=void 0;if(I.setupLightsView(b),u0===!0)Q0.setGlobalState(z.clippingPlanes,b);if(v9(k,m,b),p.updateMultisampleRenderTarget(O0),p.updateRenderTargetMipmap(O0),s0.has("WEBGL_multisampled_render_to_texture")===!1){let P0=!1;for(let KJ=0,LJ=y.length;KJ<LJ;KJ++){let kJ=y[KJ],{object:XJ,geometry:yJ,material:R0,group:nJ}=kJ;if(R0.side===D9&&XJ.layers.test(b.layers)){let t0=R0.side;R0.side=xJ,R0.needsUpdate=!0,t9(XJ,m,b,yJ,R0,nJ),R0.side=t0,R0.needsUpdate=!0,P0=!0}}if(P0===!0)p.updateMultisampleRenderTarget(O0),p.updateRenderTargetMipmap(O0)}if(z.setRenderTarget(F0,B0,I0),z.setClearColor(HJ,o0),m0!==void 0)b.viewport=m0;z.toneMapping=f0}function v9(k,y,m){let b=y.isScene===!0?y.overrideMaterial:null;for(let h=0,O0=k.length;h<O0;h++){let L0=k[h],{object:F0,geometry:B0,group:I0}=L0,f0=L0.material;if(f0.allowOverride===!0&&b!==null)f0=b;if(F0.layers.test(m.layers))t9(F0,y,m,B0,f0,I0)}}function t9(k,y,m,b,h,O0){if(k.onBeforeRender(z,y,m,b,h,O0),k.modelViewMatrix.multiplyMatrices(m.matrixWorldInverse,k.matrixWorld),k.normalMatrix.getNormalMatrix(k.modelViewMatrix),h.onBeforeRender(z,y,m,b,k,O0),h.transparent===!0&&h.side===D9&&h.forceSinglePass===!1)h.side=xJ,h.needsUpdate=!0,z.renderBufferDirect(m,y,b,h,k,O0),h.side=l8,h.needsUpdate=!0,z.renderBufferDirect(m,y,b,h,k,O0),h.side=D9;else z.renderBufferDirect(m,y,b,h,k,O0);k.onAfterRender(z,y,m,b,h,O0)}function T7(k,y,m){if(y.isScene!==!0)y=BJ;let b=T.get(k),h=I.state.lights,O0=I.state.shadowsArray,L0=h.state.version,F0=i.getParameters(k,h.state,O0,y,m,I.state.lightProbeGridArray),B0=i.getProgramCacheKey(F0),I0=b.programs;b.environment=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?y.environment:null,b.fog=y.fog;let f0=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap;if(b.envMap=r.get(k.envMap||b.environment,f0),b.envMapRotation=b.environment!==null&&k.envMap===null?y.environmentRotation:k.envMapRotation,I0===void 0)k.addEventListener("dispose",uJ),I0=new Map,b.programs=I0;let m0=I0.get(B0);if(m0!==void 0){if(b.currentProgram===m0&&b.lightsStateVersion===L0)return m$(k,F0),m0}else{if(F0.uniforms=i.getUniforms(k),P!==null&&k.isNodeMaterial)P.build(k,m,F0);k.onBeforeCompile(F0,z),m0=i.acquireProgram(F0,B0),I0.set(B0,m0),b.uniforms=F0.uniforms}let P0=b.uniforms;if(!k.isShaderMaterial&&!k.isRawShaderMaterial||k.clipping===!0)P0.clippingPlanes=Q0.uniform;if(m$(k,F0),b.needsLights=GW(k),b.lightsStateVersion=L0,b.needsLights)P0.ambientLightColor.value=h.state.ambient,P0.lightProbe.value=h.state.probe,P0.directionalLights.value=h.state.directional,P0.directionalLightShadows.value=h.state.directionalShadow,P0.spotLights.value=h.state.spot,P0.spotLightShadows.value=h.state.spotShadow,P0.rectAreaLights.value=h.state.rectArea,P0.ltc_1.value=h.state.rectAreaLTC1,P0.ltc_2.value=h.state.rectAreaLTC2,P0.pointLights.value=h.state.point,P0.pointLightShadows.value=h.state.pointShadow,P0.hemisphereLights.value=h.state.hemi,P0.directionalShadowMatrix.value=h.state.directionalShadowMatrix,P0.spotLightMatrix.value=h.state.spotLightMatrix,P0.spotLightMap.value=h.state.spotLightMap,P0.pointShadowMatrix.value=h.state.pointShadowMatrix;return b.lightProbeGrid=I.state.lightProbeGridArray.length>0,b.currentProgram=m0,b.uniformsList=null,m0}function p$(k){if(k.uniformsList===null){let y=k.currentProgram.getUniforms();k.uniformsList=z7.seqWithValue(y.seq,k.uniforms)}return k.uniformsList}function m$(k,y){let m=T.get(k);m.outputColorSpace=y.outputColorSpace,m.batching=y.batching,m.batchingColor=y.batchingColor,m.instancing=y.instancing,m.instancingColor=y.instancingColor,m.instancingMorph=y.instancingMorph,m.skinning=y.skinning,m.morphTargets=y.morphTargets,m.morphNormals=y.morphNormals,m.morphColors=y.morphColors,m.morphTargetsCount=y.morphTargetsCount,m.numClippingPlanes=y.numClippingPlanes,m.numIntersection=y.numClipIntersection,m.vertexAlphas=y.vertexAlphas,m.vertexTangents=y.vertexTangents,m.toneMapping=y.toneMapping}function UW(k,y){if(k.length===0)return null;if(k.length===1)return k[0].texture!==null?k[0]:null;C.setFromMatrixPosition(y.matrixWorld);for(let m=0,b=k.length;m<b;m++){let h=k[m];if(h.texture!==null&&h.boundingBox.containsPoint(C))return h}return null}function qW(k,y,m,b,h){if(y.isScene!==!0)y=BJ;p.resetTextureUnits();let O0=y.fog,L0=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?y.environment:null,F0=f===null?z.outputColorSpace:f.isXRRenderTarget===!0?f.texture.colorSpace:i0.workingColorSpace,B0=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,I0=r.get(b.envMap||L0,B0),f0=b.vertexColors===!0&&!!m.attributes.color&&m.attributes.color.itemSize===4,m0=!!m.attributes.tangent&&(!!b.normalMap||b.anisotropy>0),P0=!!m.morphAttributes.position,KJ=!!m.morphAttributes.normal,LJ=!!m.morphAttributes.color,kJ=Y9;if(b.toneMapped){if(f===null||f.isXRRenderTarget===!0)kJ=z.toneMapping}let XJ=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,yJ=XJ!==void 0?XJ.length:0,R0=T.get(b),nJ=I.state.lights;if(u0===!0){if(h0===!0||k!==e){let GJ=k===e&&b.id===t;Q0.setState(b,k,GJ)}}let t0=!1;if(b.version===R0.__version){if(R0.needsLights&&R0.lightsStateVersion!==nJ.state.version)t0=!0;else if(R0.outputColorSpace!==F0)t0=!0;else if(h.isBatchedMesh&&R0.batching===!1)t0=!0;else if(!h.isBatchedMesh&&R0.batching===!0)t0=!0;else if(h.isBatchedMesh&&R0.batchingColor===!0&&h.colorTexture===null)t0=!0;else if(h.isBatchedMesh&&R0.batchingColor===!1&&h.colorTexture!==null)t0=!0;else if(h.isInstancedMesh&&R0.instancing===!1)t0=!0;else if(!h.isInstancedMesh&&R0.instancing===!0)t0=!0;else if(h.isSkinnedMesh&&R0.skinning===!1)t0=!0;else if(!h.isSkinnedMesh&&R0.skinning===!0)t0=!0;else if(h.isInstancedMesh&&R0.instancingColor===!0&&h.instanceColor===null)t0=!0;else if(h.isInstancedMesh&&R0.instancingColor===!1&&h.instanceColor!==null)t0=!0;else if(h.isInstancedMesh&&R0.instancingMorph===!0&&h.morphTexture===null)t0=!0;else if(h.isInstancedMesh&&R0.instancingMorph===!1&&h.morphTexture!==null)t0=!0;else if(R0.envMap!==I0)t0=!0;else if(b.fog===!0&&R0.fog!==O0)t0=!0;else if(R0.numClippingPlanes!==void 0&&(R0.numClippingPlanes!==Q0.numPlanes||R0.numIntersection!==Q0.numIntersection))t0=!0;else if(R0.vertexAlphas!==f0)t0=!0;else if(R0.vertexTangents!==m0)t0=!0;else if(R0.morphTargets!==P0)t0=!0;else if(R0.morphNormals!==KJ)t0=!0;else if(R0.morphColors!==LJ)t0=!0;else if(R0.toneMapping!==kJ)t0=!0;else if(R0.morphTargetsCount!==yJ)t0=!0;else if(!!R0.lightProbeGrid!==I.state.lightProbeGridArray.length>0)t0=!0}else t0=!0,R0.__version=b.version;let rJ=R0.currentProgram;if(t0===!0){if(rJ=T7(b,y,h),P&&b.isNodeMaterial)P.onUpdateProgram(b,rJ,R0)}let F9=!1,f9=!1,I8=!1,UJ=rJ.getUniforms(),VJ=R0.uniforms;if(V.useProgram(rJ.program))F9=!0,f9=!0,I8=!0;if(b.id!==t)t=b.id,f9=!0;if(R0.needsLights){let GJ=UW(I.state.lightProbeGridArray,h);if(R0.lightProbeGrid!==GJ)R0.lightProbeGrid=GJ,f9=!0}if(F9||e!==k){if(V.buffers.depth.getReversed()&&k.reversedDepth!==!0)k._reversedDepth=!0,k.updateProjectionMatrix();UJ.setValue(S,"projectionMatrix",k.projectionMatrix),UJ.setValue(S,"viewMatrix",k.matrixWorldInverse);let h9=UJ.map.cameraPosition;if(h9!==void 0)h9.setValue(S,MJ.setFromMatrixPosition(k.matrixWorld));if(ZJ.logarithmicDepthBuffer)UJ.setValue(S,"logDepthBufFC",2/(Math.log(k.far+1)/Math.LN2));if(b.isMeshPhongMaterial||b.isMeshToonMaterial||b.isMeshLambertMaterial||b.isMeshBasicMaterial||b.isMeshStandardMaterial||b.isShaderMaterial)UJ.setValue(S,"isOrthographic",k.isOrthographicCamera===!0);if(e!==k)e=k,f9=!0,I8=!0}if(R0.needsLights){if(nJ.state.directionalShadowMap.length>0)UJ.setValue(S,"directionalShadowMap",nJ.state.directionalShadowMap,p);if(nJ.state.spotShadowMap.length>0)UJ.setValue(S,"spotShadowMap",nJ.state.spotShadowMap,p);if(nJ.state.pointShadowMap.length>0)UJ.setValue(S,"pointShadowMap",nJ.state.pointShadowMap,p)}if(h.isSkinnedMesh){UJ.setOptional(S,h,"bindMatrix"),UJ.setOptional(S,h,"bindMatrixInverse");let GJ=h.skeleton;if(GJ){if(GJ.boneTexture===null)GJ.computeBoneTexture();UJ.setValue(S,"boneTexture",GJ.boneTexture,p)}}if(h.isBatchedMesh){if(UJ.setOptional(S,h,"batchingTexture"),UJ.setValue(S,"batchingTexture",h._matricesTexture,p),UJ.setOptional(S,h,"batchingIdTexture"),UJ.setValue(S,"batchingIdTexture",h._indirectTexture,p),UJ.setOptional(S,h,"batchingColorTexture"),h._colorsTexture!==null)UJ.setValue(S,"batchingColorTexture",h._colorsTexture,p)}let b9=m.morphAttributes;if(b9.position!==void 0||b9.normal!==void 0||b9.color!==void 0)v0.update(h,m,rJ);if(f9||R0.receiveShadow!==h.receiveShadow)R0.receiveShadow=h.receiveShadow,UJ.setValue(S,"receiveShadow",h.receiveShadow);if((b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial)&&b.envMap===null&&y.environment!==null)VJ.envMapIntensity.value=y.environmentIntensity;if(VJ.dfgLUT!==void 0)VJ.dfgLUT.value=p5();if(f9){if(UJ.setValue(S,"toneMappingExposure",z.toneMappingExposure),R0.needsLights)NW(VJ,I8);if(O0&&b.fog===!0)N0.refreshFogUniforms(VJ,O0);if(N0.refreshMaterialUniforms(VJ,b,q0,W0,I.state.transmissionRenderTarget[k.id]),R0.needsLights&&R0.lightProbeGrid){let GJ=R0.lightProbeGrid;VJ.probesSH.value=GJ.texture,VJ.probesMin.value.copy(GJ.boundingBox.min),VJ.probesMax.value.copy(GJ.boundingBox.max),VJ.probesResolution.value.copy(GJ.resolution)}z7.upload(S,p$(R0),VJ,p)}if(b.isShaderMaterial&&b.uniformsNeedUpdate===!0)z7.upload(S,p$(R0),VJ,p),b.uniformsNeedUpdate=!1;if(b.isSpriteMaterial)UJ.setValue(S,"center",h.center);if(UJ.setValue(S,"modelViewMatrix",h.modelViewMatrix),UJ.setValue(S,"normalMatrix",h.normalMatrix),UJ.setValue(S,"modelMatrix",h.matrixWorld),b.uniformsGroups!==void 0){let GJ=b.uniformsGroups;for(let h9=0,A8=GJ.length;h9<A8;h9++){let l$=GJ[h9];E0.update(l$,rJ),E0.bind(l$,rJ)}}return rJ}function NW(k,y){k.ambientLightColor.needsUpdate=y,k.lightProbe.needsUpdate=y,k.directionalLights.needsUpdate=y,k.directionalLightShadows.needsUpdate=y,k.pointLights.needsUpdate=y,k.pointLightShadows.needsUpdate=y,k.spotLights.needsUpdate=y,k.spotLightShadows.needsUpdate=y,k.rectAreaLights.needsUpdate=y,k.hemisphereLights.needsUpdate=y}function GW(k){return k.isMeshLambertMaterial||k.isMeshToonMaterial||k.isMeshPhongMaterial||k.isMeshStandardMaterial||k.isShadowMaterial||k.isShaderMaterial&&k.lights===!0}if(this.getActiveCubeFace=function(){return u},this.getActiveMipmapLevel=function(){return c},this.getRenderTarget=function(){return f},this.setRenderTargetTextures=function(k,y,m){let b=T.get(k);if(b.__autoAllocateDepthBuffer=k.resolveDepthBuffer===!1,b.__autoAllocateDepthBuffer===!1)b.__useRenderToTexture=!1;T.get(k.texture).__webglTexture=y,T.get(k.depthTexture).__webglTexture=b.__autoAllocateDepthBuffer?void 0:m,b.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(k,y){let m=T.get(k);m.__webglFramebuffer=y,m.__useDefaultFramebuffer=y===void 0},this.setRenderTarget=function(k,y=0,m=0){f=k,u=y,c=m;let b=null,h=!1,O0=!1;if(k){let F0=T.get(k);if(F0.__useDefaultFramebuffer!==void 0){V.bindFramebuffer(S.FRAMEBUFFER,F0.__webglFramebuffer),K0.copy(k.viewport),M0.copy(k.scissor),k0=k.scissorTest,V.viewport(K0),V.scissor(M0),V.setScissorTest(k0),t=-1;return}else if(F0.__webglFramebuffer===void 0)p.setupRenderTarget(k);else if(F0.__hasExternalTextures)p.rebindTextures(k,T.get(k.texture).__webglTexture,T.get(k.depthTexture).__webglTexture);else if(k.depthBuffer){let f0=k.depthTexture;if(F0.__boundDepthTexture!==f0){if(f0!==null&&T.has(f0)&&(k.width!==f0.image.width||k.height!==f0.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");p.setupDepthRenderbuffer(k)}}let B0=k.texture;if(B0.isData3DTexture||B0.isDataArrayTexture||B0.isCompressedArrayTexture)O0=!0;let I0=T.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget){if(Array.isArray(I0[y]))b=I0[y][m];else b=I0[y];h=!0}else if(k.samples>0&&p.useMultisampledRTT(k)===!1)b=T.get(k).__webglMultisampledFramebuffer;else if(Array.isArray(I0))b=I0[m];else b=I0;K0.copy(k.viewport),M0.copy(k.scissor),k0=k.scissorTest}else K0.copy(c0).multiplyScalar(q0).floor(),M0.copy(b0).multiplyScalar(q0).floor(),k0=g0;if(m!==0)b=g;if(V.bindFramebuffer(S.FRAMEBUFFER,b))V.drawBuffers(k,b);if(V.viewport(K0),V.scissor(M0),V.setScissorTest(k0),h){let F0=T.get(k.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+y,F0.__webglTexture,m)}else if(O0){let F0=y;for(let B0=0;B0<k.textures.length;B0++){let I0=T.get(k.textures[B0]);S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0+B0,I0.__webglTexture,m,F0)}}else if(k!==null&&m!==0){let F0=T.get(k.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,F0.__webglTexture,m)}t=-1},this.readRenderTargetPixels=function(k,y,m,b,h,O0,L0,F0=0){if(!(k&&k.isWebGLRenderTarget)){T0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let B0=T.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&L0!==void 0)B0=B0[L0];if(B0){V.bindFramebuffer(S.FRAMEBUFFER,B0);try{let I0=k.textures[F0],f0=I0.format,m0=I0.type;if(k.textures.length>1)S.readBuffer(S.COLOR_ATTACHMENT0+F0);if(!ZJ.textureFormatReadable(f0)){T0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ZJ.textureTypeReadable(m0)){T0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(y>=0&&y<=k.width-b&&(m>=0&&m<=k.height-h))S.readPixels(y,m,b,h,n.convert(f0),n.convert(m0),O0)}finally{let I0=f!==null?T.get(f).__webglFramebuffer:null;V.bindFramebuffer(S.FRAMEBUFFER,I0)}}},this.readRenderTargetPixelsAsync=async function(k,y,m,b,h,O0,L0,F0=0){if(!(k&&k.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let B0=T.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&L0!==void 0)B0=B0[L0];if(B0)if(y>=0&&y<=k.width-b&&(m>=0&&m<=k.height-h)){V.bindFramebuffer(S.FRAMEBUFFER,B0);let I0=k.textures[F0],f0=I0.format,m0=I0.type;if(k.textures.length>1)S.readBuffer(S.COLOR_ATTACHMENT0+F0);if(!ZJ.textureFormatReadable(f0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ZJ.textureTypeReadable(m0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let P0=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,P0),S.bufferData(S.PIXEL_PACK_BUFFER,O0.byteLength,S.STREAM_READ),S.readPixels(y,m,b,h,n.convert(f0),n.convert(m0),0);let KJ=f!==null?T.get(f).__webglFramebuffer:null;V.bindFramebuffer(S.FRAMEBUFFER,KJ);let LJ=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await FK(S,LJ,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,P0),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,O0),S.deleteBuffer(P0),S.deleteSync(LJ),O0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(k,y=null,m=0){let b=Math.pow(2,-m),h=Math.floor(k.image.width*b),O0=Math.floor(k.image.height*b),L0=y!==null?y.x:0,F0=y!==null?y.y:0;p.setTexture2D(k,0),S.copyTexSubImage2D(S.TEXTURE_2D,m,0,0,L0,F0,h,O0),V.unbindTexture()},this.copyTextureToTexture=function(k,y,m=null,b=null,h=0,O0=0){let L0,F0,B0,I0,f0,m0,P0,KJ,LJ,kJ=k.isCompressedTexture?k.mipmaps[O0]:k.image;if(m!==null)L0=m.max.x-m.min.x,F0=m.max.y-m.min.y,B0=m.isBox3?m.max.z-m.min.z:1,I0=m.min.x,f0=m.min.y,m0=m.isBox3?m.min.z:0;else{let VJ=Math.pow(2,-h);if(L0=Math.floor(kJ.width*VJ),F0=Math.floor(kJ.height*VJ),k.isDataArrayTexture)B0=kJ.depth;else if(k.isData3DTexture)B0=Math.floor(kJ.depth*VJ);else B0=1;I0=0,f0=0,m0=0}if(b!==null)P0=b.x,KJ=b.y,LJ=b.z;else P0=0,KJ=0,LJ=0;let XJ=n.convert(y.format),yJ=n.convert(y.type),R0;if(y.isData3DTexture)p.setTexture3D(y,0),R0=S.TEXTURE_3D;else if(y.isDataArrayTexture||y.isCompressedArrayTexture)p.setTexture2DArray(y,0),R0=S.TEXTURE_2D_ARRAY;else p.setTexture2D(y,0),R0=S.TEXTURE_2D;V.activeTexture(S.TEXTURE0),V.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,y.flipY),V.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),V.pixelStorei(S.UNPACK_ALIGNMENT,y.unpackAlignment);let nJ=V.getParameter(S.UNPACK_ROW_LENGTH),t0=V.getParameter(S.UNPACK_IMAGE_HEIGHT),rJ=V.getParameter(S.UNPACK_SKIP_PIXELS),F9=V.getParameter(S.UNPACK_SKIP_ROWS),f9=V.getParameter(S.UNPACK_SKIP_IMAGES);V.pixelStorei(S.UNPACK_ROW_LENGTH,kJ.width),V.pixelStorei(S.UNPACK_IMAGE_HEIGHT,kJ.height),V.pixelStorei(S.UNPACK_SKIP_PIXELS,I0),V.pixelStorei(S.UNPACK_SKIP_ROWS,f0),V.pixelStorei(S.UNPACK_SKIP_IMAGES,m0);let I8=k.isDataArrayTexture||k.isData3DTexture,UJ=y.isDataArrayTexture||y.isData3DTexture;if(k.isDepthTexture){let VJ=T.get(k),b9=T.get(y),GJ=T.get(VJ.__renderTarget),h9=T.get(b9.__renderTarget);V.bindFramebuffer(S.READ_FRAMEBUFFER,GJ.__webglFramebuffer),V.bindFramebuffer(S.DRAW_FRAMEBUFFER,h9.__webglFramebuffer);for(let A8=0;A8<B0;A8++){if(I8)S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,T.get(k).__webglTexture,h,m0+A8),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,T.get(y).__webglTexture,O0,LJ+A8);S.blitFramebuffer(I0,f0,L0,F0,P0,KJ,L0,F0,S.DEPTH_BUFFER_BIT,S.NEAREST)}V.bindFramebuffer(S.READ_FRAMEBUFFER,null),V.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(h!==0||k.isRenderTargetTexture||T.has(k)){let VJ=T.get(k),b9=T.get(y);V.bindFramebuffer(S.READ_FRAMEBUFFER,s),V.bindFramebuffer(S.DRAW_FRAMEBUFFER,x);for(let GJ=0;GJ<B0;GJ++){if(I8)S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,VJ.__webglTexture,h,m0+GJ);else S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,VJ.__webglTexture,h);if(UJ)S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,b9.__webglTexture,O0,LJ+GJ);else S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,b9.__webglTexture,O0);if(h!==0)S.blitFramebuffer(I0,f0,L0,F0,P0,KJ,L0,F0,S.COLOR_BUFFER_BIT,S.NEAREST);else if(UJ)S.copyTexSubImage3D(R0,O0,P0,KJ,LJ+GJ,I0,f0,L0,F0);else S.copyTexSubImage2D(R0,O0,P0,KJ,I0,f0,L0,F0)}V.bindFramebuffer(S.READ_FRAMEBUFFER,null),V.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(UJ)if(k.isDataTexture||k.isData3DTexture)S.texSubImage3D(R0,O0,P0,KJ,LJ,L0,F0,B0,XJ,yJ,kJ.data);else if(y.isCompressedArrayTexture)S.compressedTexSubImage3D(R0,O0,P0,KJ,LJ,L0,F0,B0,XJ,kJ.data);else S.texSubImage3D(R0,O0,P0,KJ,LJ,L0,F0,B0,XJ,yJ,kJ);else if(k.isDataTexture)S.texSubImage2D(S.TEXTURE_2D,O0,P0,KJ,L0,F0,XJ,yJ,kJ.data);else if(k.isCompressedTexture)S.compressedTexSubImage2D(S.TEXTURE_2D,O0,P0,KJ,kJ.width,kJ.height,XJ,kJ.data);else S.texSubImage2D(S.TEXTURE_2D,O0,P0,KJ,L0,F0,XJ,yJ,kJ);if(V.pixelStorei(S.UNPACK_ROW_LENGTH,nJ),V.pixelStorei(S.UNPACK_IMAGE_HEIGHT,t0),V.pixelStorei(S.UNPACK_SKIP_PIXELS,rJ),V.pixelStorei(S.UNPACK_SKIP_ROWS,F9),V.pixelStorei(S.UNPACK_SKIP_IMAGES,f9),O0===0&&y.generateMipmaps)S.generateMipmap(R0);V.unbindTexture()},this.initRenderTarget=function(k){if(T.get(k).__webglFramebuffer===void 0)p.setupRenderTarget(k)},this.initTexture=function(k){if(k.isCubeTexture)p.setTextureCube(k,0);else if(k.isData3DTexture)p.setTexture3D(k,0);else if(k.isDataArrayTexture||k.isCompressedArrayTexture)p.setTexture2DArray(k,0);else p.setTexture2D(k,0);V.unbindTexture()},this.resetState=function(){u=0,c=0,f=null,V.reset(),H0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return J$}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=i0._getDrawingBufferColorSpace(J),Q.unpackColorSpace=i0._getUnpackColorSpace()}}var I7=new v;function Z9(J,Q,$,Z,K,W){let H=2*Math.PI*K/4,Y=Math.max(W-2*K,0),X=Math.PI/4;I7.copy(Q),I7[Z]=0,I7.normalize();let U=0.5*H/(H+Y),G=1-I7.angleTo(J)/X;if(Math.sign(I7[$])===1)return G*U;else return Y/(H+Y)+U+U*(1-G)}class k8 extends DJ{constructor(J=1,Q=1,$=1,Z=2,K=0.1){let W=Z*2+1;K=Math.min(J/2,Q/2,$/2,K);super(1,1,1,W,W,W);if(this.type="RoundedBoxGeometry",this.parameters={width:J,height:Q,depth:$,segments:Z,radius:K},W===1)return;let H=this.toNonIndexed();this.index=null,this.attributes.position=H.attributes.position,this.attributes.normal=H.attributes.normal,this.attributes.uv=H.attributes.uv;let Y=new v,X=new v,U=new v(J,Q,$).divideScalar(2).subScalar(K),G=this.attributes.position.array,F=this.attributes.normal.array,N=this.attributes.uv.array,E=G.length/6,L=new v,B=0.5/W;for(let O=0,q=0;O<G.length;O+=3,q+=2)switch(Y.fromArray(G,O),X.copy(Y),X.x-=Math.sign(X.x)*B,X.y-=Math.sign(X.y)*B,X.z-=Math.sign(X.z)*B,X.normalize(),G[O+0]=U.x*Math.sign(Y.x)+X.x*K,G[O+1]=U.y*Math.sign(Y.y)+X.y*K,G[O+2]=U.z*Math.sign(Y.z)+X.z*K,F[O+0]=X.x,F[O+1]=X.y,F[O+2]=X.z,Math.floor(O/E)){case 0:L.set(1,0,0),N[q+0]=Z9(L,X,"z","y",K,$),N[q+1]=1-Z9(L,X,"y","z",K,Q);break;case 1:L.set(-1,0,0),N[q+0]=1-Z9(L,X,"z","y",K,$),N[q+1]=1-Z9(L,X,"y","z",K,Q);break;case 2:L.set(0,1,0),N[q+0]=1-Z9(L,X,"x","z",K,J),N[q+1]=Z9(L,X,"z","x",K,$);break;case 3:L.set(0,-1,0),N[q+0]=1-Z9(L,X,"x","z",K,J),N[q+1]=1-Z9(L,X,"z","x",K,$);break;case 4:L.set(0,0,1),N[q+0]=1-Z9(L,X,"x","y",K,J),N[q+1]=1-Z9(L,X,"y","x",K,Q);break;case 5:L.set(0,0,-1),N[q+0]=Z9(L,X,"x","y",K,J),N[q+1]=1-Z9(L,X,"y","x",K,Q);break}}static fromJSON(J){return new k8(J.width,J.height,J.depth,J.segments,J.radius)}}class h$ extends n8{constructor(){super();this.name="RoomEnvironment",this.position.y=-3.5;let J=new DJ;J.deleteAttribute("uv");let Q=new dJ({side:xJ}),$=new dJ,Z=new I6(16777215,900,28,2);Z.position.set(0.418,16.199,0.3),this.add(Z);let K=new j0(J,Q);K.position.set(-0.757,13.219,0.717),K.scale.set(31.713,28.305,28.591),this.add(K);let W=new s8(J,$,6),H=new IJ;H.position.set(-10.906,2.009,1.846),H.rotation.set(0,-0.195,0),H.scale.set(2.328,7.905,4.651),H.updateMatrix(),W.setMatrixAt(0,H.matrix),H.position.set(-5.607,-0.754,-0.758),H.rotation.set(0,0.994,0),H.scale.set(1.97,1.534,3.955),H.updateMatrix(),W.setMatrixAt(1,H.matrix),H.position.set(6.167,0.857,7.803),H.rotation.set(0,0.561,0),H.scale.set(3.927,6.285,3.687),H.updateMatrix(),W.setMatrixAt(2,H.matrix),H.position.set(-2.017,0.018,6.124),H.rotation.set(0,0.333,0),H.scale.set(2.002,4.566,2.064),H.updateMatrix(),W.setMatrixAt(3,H.matrix),H.position.set(2.291,-0.756,-2.621),H.rotation.set(0,-0.286,0),H.scale.set(1.546,1.552,1.496),H.updateMatrix(),W.setMatrixAt(4,H.matrix),H.position.set(-2.193,-0.369,-5.547),H.rotation.set(0,0.516,0),H.scale.set(3.875,3.487,2.986),H.updateMatrix(),W.setMatrixAt(5,H.matrix),this.add(W);let Y=new j0(J,r8(50));Y.position.set(-16.116,14.37,8.208),Y.scale.set(0.1,2.428,2.739),this.add(Y);let X=new j0(J,r8(50));X.position.set(-16.109,18.021,-8.207),X.scale.set(0.1,2.425,2.751),this.add(X);let U=new j0(J,r8(17));U.position.set(14.904,12.198,-1.832),U.scale.set(0.15,4.265,6.331),this.add(U);let G=new j0(J,r8(43));G.position.set(-0.462,8.89,14.52),G.scale.set(4.38,5.441,0.088),this.add(G);let F=new j0(J,r8(20));F.position.set(3.235,11.486,-12.541),F.scale.set(2.5,2,0.1),this.add(F);let N=new j0(J,r8(100));N.position.set(0,20,0),N.scale.set(1,0.1,1),this.add(N)}dispose(){let J=new Set;this.traverse((Q)=>{if(Q.isMesh)J.add(Q.geometry),J.add(Q.material)});for(let Q of J)Q.dispose()}}function r8(J){return new M6({color:0,emissive:16777215,emissiveIntensity:J})}var L8=653429,wJ="#09F875",FJ="rgba(9,248,117,0.55)",A7="rgba(9,248,117,0.28)";var g$="#070808",_J="#F2F4F2",_7="'SF Mono', ui-monospace, Menlo, Consolas, monospace",t8="'Space Grotesk', -apple-system, sans-serif",r9=["HOME","CHAT","SEARCH","X LOOKUP","LEDGER","LANES"],a9=matchMedia("(prefers-reduced-motion: reduce)").matches,ZW=null,M8=()=>ZW=ZW||new(window.AudioContext||window.webkitAudioContext);function G9(J,Q,$,Z=0.045,K="triangle"){let W=M8(),H=W.createOscillator(),Y=W.createGain();H.type=K,H.frequency.value=J,Y.gain.setValueAtTime($,Q),Y.gain.exponentialRampToValueAtTime(0.0001,Q+Z),H.connect(Y),Y.connect(W.destination),H.start(Q),H.stop(Q+Z+0.02)}var pJ={detent(J=0){try{let Q=M8();if(Q.state==="suspended")Q.resume();G9(640+J*46,Q.currentTime+0.01,0.022,0.03)}catch{}},lever(){try{let J=M8();G9(420,J.currentTime+0.01,0.04,0.05),G9(640,J.currentTime+0.06,0.03,0.04)}catch{}},press(){try{let J=M8();G9(120,J.currentTime+0.01,0.09,0.08,"sine"),G9(88,J.currentTime+0.05,0.05,0.09,"sine")}catch{}},ok(){try{let J=M8();G9(660,J.currentTime+0.02,0.05),G9(880,J.currentTime+0.1,0.045)}catch{}},err(){try{let J=M8();G9(220,J.currentTime+0.02,0.05,0.07),G9(180,J.currentTime+0.1,0.05,0.09)}catch{}},dock(){try{let J=M8();G9(240,J.currentTime+0.01,0.05,0.05,"sine"),G9(180,J.currentTime+0.07,0.07,0.06,"sine")}catch{}}};class z8{k;d;v;target;vel=0;constructor(J,Q=120,$=18){this.k=Q;this.d=$;this.v=J,this.target=J}step(J){let Q=-this.k*(this.v-this.target)-this.d*this.vel;return this.vel+=Q*J,this.v+=this.vel*J,this.v}settled(){return Math.abs(this.v-this.target)<0.0001&&Math.abs(this.vel)<0.0001}}var x$=-0.78,KW=[{x:9.4,y:15.4,w:13.6,h:6.6,r:x$},{x:16.8,y:7.2,w:13.6,h:6.6,r:x$},{x:3.2,y:12,w:2.6,h:24,r:0},{x:19.4,y:20.4,w:11.6,h:4,r:x$}],m5=[{x:12.4,y:15,w:11.4,h:6,r:-0.08},{x:11.6,y:11.8,w:9.2,h:4.2,r:-0.36},{x:5.6,y:13.2,w:2.4,h:9.4,r:0.62},{x:19.6,y:11.2,w:5.4,h:4.6,r:-0.12}],l5=1,P7=(J,Q,$)=>J+(Q-J)*$;var HW=(J)=>J<0.5?2*J*J:1-Math.pow(-2*J+2,2)/2;class YW{state="sleep";t=0;unfold=0;flapRate=0;blinkAt=2.5;hopV=0;hopY=0;tilt=0;set(J){if(this.state===J)return;if(J==="wake"&&this.state!=="sleep")return;if(this.state=J,this.t=0,J==="happy")this.hopV=-46}poke(){if(this.state==="sleep")this.set("wake")}step(J){this.t+=J;let Q=this.state==="sleep"?0:1;if(this.unfold+=(Q-this.unfold)*Math.min(1,J*(this.state==="wake"?7:4)),this.state==="wake"&&this.unfold>0.985)this.set("idle"),this.hopV=-34;if(this.state==="happy"&&this.t>1.5)this.set("idle");if(this.state==="alert"&&this.t>1.1)this.set("idle");if(this.state==="idle"&&this.t>45)this.state="sleep",this.t=0;if(this.hopV+=340*J,this.hopY=Math.max(0,this.hopY-this.hopV*J*0.28),this.hopY===0&&this.hopV>0)this.hopV=0;if(this.state==="happy"&&this.hopY===0&&this.t<1&&this.hopV===0)this.hopV=-40;let $=this.state==="droop"?0.34:0;if(this.tilt+=($-this.tilt)*Math.min(1,J*5),this.t>this.blinkAt)this.blinkAt=this.t+2.5+Math.random()*3.5}wingPhase(J){if(this.state==="work")return Math.sin(J*Math.PI*2*Math.max(2.4,this.flapRate))*0.5;if(this.state==="happy")return Math.sin(J*14)*0.42;if(this.state==="droop")return 0.3;return Math.sin(J*1.7)*0.05}blinking(){return this.state!=="sleep"&&this.t>this.blinkAt-0.09&&this.t<this.blinkAt}draw(J,Q,$,Z,K){let W=Math.floor(K*10)/10,H=HW(Math.min(1,this.unfold)),Y=this.wingPhase(W),X=this.state==="sleep"?1+Math.sin(W*1.2)*0.015:1;J.save(),J.translate(Q+12*Z,$+12*Z+this.hopY*(Z/24)),J.rotate(this.tilt),J.scale(X,X),J.translate(-12*Z,-12*Z);for(let U=0;U<KW.length;U++){let G=KW[U],F=m5[U],N=P7(G.r,F.r,H),E=P7(G.x,F.x,H),L=P7(G.y,F.y,H);if(U===l5&&H>0.6)N+=Y*0.7,L-=Y*1.9;let B=P7(G.w,F.w,H),O=P7(G.h,F.h,H);J.save(),J.translate(E*Z,L*Z),J.rotate(N),J.fillStyle=wJ,J.fillRect(-B/2*Z,-O/2*Z,B*Z,O*Z),J.restore()}if(H>0.75){if(J.fillStyle=wJ,J.beginPath(),J.moveTo(22.2*Z,(10.6+this.tilt*2)*Z),J.lineTo(24*Z,(11.4+this.tilt*2)*Z),J.lineTo(22.2*Z,(12.2+this.tilt*2)*Z),J.fill(),!this.blinking())J.fillStyle=g$,J.fillRect(20.2*Z,(10.4+this.tilt*2)*Z,1.3*Z,1.3*Z)}J.restore()}}var V8=1024,C7=640;class XW{canvas=document.createElement("canvas");ctx;tex;vireo=new YW;mode=0;lane="inference";meta=null;history=[];booted=a9;bootT=0;busy=!1;status="";chat=null;search=null;xprof=null;err=null;armed=null;dirty=!0;acc=0;lastKey="";constructor(){this.canvas.width=V8,this.canvas.height=C7,this.ctx=this.canvas.getContext("2d"),this.tex=new i8(this.canvas),this.tex.colorSpace=N8,this.tex.generateMipmaps=!1,this.tex.minFilter=SJ}modeName(){return r9[this.mode]}frameKey(J){let Q=this.vireo,$=Q.state!=="sleep"||Q.unfold>0.001,Z=!this.booted||$||this.busy?Math.floor(J*10):0,K=this.meta;return[this.mode,this.lane,this.booted,this.busy,this.err,this.status,this.armed?.quote,Z,Q.state,this.chat?`${this.chat.prompt}|${Math.floor(this.chat.shown)}|${this.chat.line}`:"",this.search?.query,this.search?.results?.length,this.xprof?.profile?.handle,this.history.length,K?`${K.main_balance_usd}|${K.lanes?.inference?.balance_usd}|${K.lanes?.devtools?.balance_usd}|${K.handle}`:""].join("~")}step(J,Q){if(!this.booted){if(this.bootT+=J,this.bootT>1.5)this.booted=!0}if(this.vireo.step(J),this.armed&&Q*1000>this.armed.until)this.armed=null;if(this.chat&&this.chat.shown<this.chat.text.length){let Z=a9?1e9:60;if(this.chat.shown=Math.min(this.chat.text.length,this.chat.shown+Z*J),this.vireo.flapRate=Math.max(2.5,Z/12),this.chat.shown>=this.chat.text.length&&!this.busy)this.vireo.set("idle")}this.acc+=J;let $=!this.booted?0.05:0.1;if(this.acc>=$){this.acc=0;let Z=this.frameKey(Q);if(Z!==this.lastKey)return this.lastKey=Z,this.draw(Q),this.tex.needsUpdate=!0,this.dirty=!1,!0}return!1}text(J,Q,$,Z,K=wJ,W=_7,H="500"){this.ctx.fillStyle=K,this.ctx.font=`${H} ${Z}px ${W}`,this.ctx.textBaseline="top",this.ctx.fillText(J,Q,$)}wrap(J,Q){let $=[];for(let Z of J.split(/\n+/)){let K="";for(let W of Z.split(/\s+/))if((K+" "+W).trim().length>Q)$.push(K.trim()),K=W;else K+=" "+W;if(K.trim())$.push(K.trim())}return $}draw(J){let Q=this.ctx;if(Q.fillStyle=g$,Q.fillRect(0,0,V8,C7),!this.booted){let Y=this.bootT,X=Math.min(1,Y/0.55);Q.fillStyle=wJ;let U=[56,30,18];for(let G=0;G<3;G++){let F=-320+(V8+560)*HW(Math.min(1,X*1.3-G*0.09));Q.save(),Q.translate(F,96+G*74),Q.transform(1,0,-0.7,1,0,0),Q.fillRect(0,0,210,U[G]),Q.restore()}if(Y>0.55)this.text("VANTIS WALLET TERMINAL",64,330,40,_J,t8,"700");if(Y>0.85)this.text("WLT-01 · SESSION OPEN",64,392,22,FJ);if(Y>1.1&&this.meta?.handle)this.text(`CARD DETECTED — @${this.meta.handle}`.toUpperCase(),64,430,22,wJ);return}let $=40;for(let Y=0;Y<r9.length;Y++){let X=Y===this.mode;Q.font=`600 21px ${_7}`;let U=Q.measureText(r9[Y]).width;if(X)Q.fillStyle=wJ,Q.fillRect($-10,26,U+20,36);this.text(r9[Y],$,34,21,X?g$:A7),$+=U+34}let Z=this.meta?`$${(this.meta.main_balance_usd||0).toFixed(2)}`:"$—";Q.font=`600 21px ${_7}`,this.text(`MAIN ${Z}`,V8-40-Q.measureText(`MAIN ${Z}`).width,34,21,FJ),Q.fillStyle=A7,Q.fillRect(40,78,V8-80,2);let K=108,W=this.modeName();if(this.err)this.text("PROBLEM",64,K+8,22,FJ),this.wrap(this.err,52).slice(0,4).forEach((Y,X)=>this.text(Y,64,K+46+X*34,24,_J));else if(W==="HOME")this.drawHome(K);else if(W==="CHAT")this.drawChat(K);else if(W==="SEARCH")this.drawSearch(K);else if(W==="X LOOKUP")this.drawX(K);else if(W==="LEDGER")this.drawLedger(K);else this.drawLanes(K);Q.fillStyle=A7,Q.fillRect(40,C7-152,V8-80,2),this.vireo.draw(Q,46,C7-150,6.1,J);let H=this.busy?"WORKING…":this.status||"TURN THE KNOB · GREEN KEY FIRES";Q.font=`600 20px ${_7}`,this.text(H,V8-40-Q.measureText(H).width,C7-66,20,this.busy?wJ:FJ)}drawHome(J){let Q=this.meta;this.text("ONE CARD. EVERY RAIL.",64,J+6,22,FJ),this.text(Q?`$${(Q.main_balance_usd||0).toFixed(2)}`:"$—",64,J+44,88,_J,t8,"700"),this.text("MAIN BALANCE",64,J+150,20,FJ);let $=Q?.lanes?.inference,Z=Q?.lanes?.devtools,K=(W,H,Y,X)=>{this.text(W,460,Y,22,X?wJ:FJ),this.text(`$${H.toFixed(2)}`,700,Y,22,_J);let U=(Q?.main_balance_usd||0)+($?.balance_usd||0)+(Z?.balance_usd||0),G=U>0?Math.max(4,H/U*280):4;this.ctx.fillStyle=A7,this.ctx.fillRect(460,Y+34,280,8),this.ctx.fillStyle=X?wJ:FJ,this.ctx.fillRect(460,Y+34,G,8)};if($)K("INFERENCE",$.balance_usd,J+44,!0);if(Z)K("DEV TOOLS",Z.balance_usd,J+128,!1);if(Q?.tier)this.text(`TIER ${String(Q.tier).toUpperCase()} · BURNED ${(Q.vantis_burned||0).toFixed(2)} VANTIS`,64,J+196,20,FJ);this.status="GREEN KEY = FUND INFERENCE"}drawChat(J){let Q=this.chat;if(this.armed){this.text("QUOTE",64,J+6,22,FJ),this.text(this.armed.quote,64,J+44,25,_J),this.text("ARMED — PRESS AGAIN TO FIRE",64,J+100,30,wJ,t8,"700"),this.status="SETTLES FROM REAL USAGE";return}if(!Q){this.text("TEST-FIRE THE RAIL",64,J+6,22,FJ),this.text("DeepSeek V4 Flash. Real call, real cost,",64,J+44,26,_J),this.text("billed to your Inference lane.",64,J+80,26,_J),this.text("Type below, then press the green key.",64,J+138,24,FJ),this.status="TYPE A PROMPT · GREEN KEY FIRES";return}this.text("> "+Q.prompt.slice(0,46),64,J+4,22,FJ);let $=Q.text.slice(0,Math.floor(Q.shown)),Z=this.wrap($,62),K=8;if(Z.slice(-K).forEach((W,H)=>this.text(W,64,J+42+H*34,24,_J)),Q.line&&Q.shown>=Q.text.length)this.text(Q.line,64,J+42+Math.min(Z.length,K)*34+10,20,wJ)}drawSearch(J){let Q=this.search;if(!Q){this.text("WEB SEARCH — EXA CLASS",64,J+6,22,FJ),this.text("One real query against the open web.",64,J+44,26,_J);let $=this.meta?.tools?.find((Z)=>Z.key==="search");this.text($?`${$.left_today} OF ${$.per_day} ON THE HOUSE TODAY`:"",64,J+100,22,FJ),this.status="TYPE A QUERY · GREEN KEY FIRES";return}this.text("? "+Q.query.slice(0,46),64,J+4,22,FJ),Q.results.slice(0,5).forEach(($,Z)=>{this.text(($.title||"").slice(0,54),64,J+42+Z*62,24,_J),this.text(($.url||"").replace(/^https?:\/\//,"").slice(0,58),64,J+42+Z*62+28,19,FJ)}),this.text(`${Q.left} LEFT TODAY`,64,J+358,20,wJ)}drawX(J){let Q=this.xprof?.profile;if(!Q){this.text("X PROFILE LOOKUP",64,J+6,22,FJ),this.text("Public metrics for any handle —",64,J+44,26,_J),this.text("the same read the scoring agent makes.",64,J+80,26,_J);let Z=this.meta?.tools?.find((K)=>K.key==="x");this.text(Z?.status==="off"?"ROUTE OFFLINE":Z?`${Z.left_today} OF ${Z.per_day} ON THE HOUSE TODAY`:"",64,J+138,22,FJ),this.status="TYPE @HANDLE · GREEN KEY FIRES";return}this.text(`@${Q.handle}`,64,J+4,34,_J,t8,"700"),this.text(String(Q.name||"").slice(0,40),64,J+50,22,FJ);let $=(Z)=>Z>=1e6?(Z/1e6).toFixed(1)+"M":Z>=1000?(Z/1000).toFixed(1)+"K":String(Z);if(this.text(`${$(Q.followers)} FOLLOWERS · ${$(Q.posts)} POSTS`,64,J+96,26,wJ),Q.created_at)this.text(`SINCE ${String(Q.created_at).slice(0,4)}`,64,J+138,22,FJ);this.wrap(Q.bio||"",58).slice(0,3).forEach((Z,K)=>this.text(Z,64,J+182+K*30,21,_J))}drawLedger(J){if(this.text("RECENT MOVES",64,J+6,22,FJ),!this.history.length)this.text("Nothing yet — fund a lane, fire a call.",64,J+48,24,_J);this.history.slice(0,7).forEach((Q,$)=>{let Z=Q.amount_usd>=0?`+$${Q.amount_usd.toFixed(2)}`:`−$${Math.abs(Q.amount_usd).toFixed(2)}`;this.text(Z.padStart(9),64,J+46+$*42,23,Q.amount_usd>=0?wJ:FJ),this.text(String(Q.description||Q.type||"").slice(0,44),220,J+46+$*42,23,_J)}),this.status="THE FULL LEDGER LIVES IN THE BELL"}drawLanes(J){let Q=this.meta,$=Q?.lanes?.inference,Z=Q?.lanes?.devtools,K=(W,H,Y,X,U,G)=>{let F=this.ctx;F.strokeStyle=X?wJ:A7,F.lineWidth=X?3:2,F.strokeRect(Y,J+10,420,300),this.text(W,Y+28,J+34,24,X?wJ:FJ),this.text(H?`$${H.balance_usd.toFixed(2)}`:"$—",Y+28,J+76,56,_J,t8,"700"),this.text(H?`SPENT $${H.consumed_usd.toFixed(2)}`:"",Y+28,J+152,20,FJ),this.wrap(G,30).slice(0,3).forEach((N,E)=>this.text(N,Y+28,J+196+E*28,19,U?_J:FJ))};K("INFERENCE",$,64,this.lane==="inference",!0,"Bills the model rail. Live now."),K("DEV TOOLS",Z,520,this.lane==="devtools",!1,"Metered catalog — routes opening. Fund ahead if you like."),this.status="LEVER PICKS LANE · KEY FUNDS · HOLD = SWEEP"}}function d5(J,Q){let $=document.createElement("canvas");$.width=512,$.height=320;let Z=$.getContext("2d"),K={ink:{top:"#0C0C0B",bottom:"#191917",fg:"#FFFFFF",accent:wJ},carbon:{top:"#151515",bottom:"#2B2B29",fg:"#E8E8E4",accent:wJ},signal:{top:"#0AF77A",bottom:"#05C75F",fg:"#0A0A0A",accent:"#0A0A0A"},mint:{top:"#F2FFF8",bottom:"#BFFADA",fg:"#0A0A0A",accent:"#0B7A3E"},mono:{top:"#FFFFFF",bottom:"#E8E8E2",fg:"#0A0A0A",accent:"#0B7A3E"}},W=K[Q||"ink"]||K.ink,H=Z.createLinearGradient(0,0,512,320);H.addColorStop(0,W.top),H.addColorStop(1,W.bottom),Z.fillStyle=H,Z.fillRect(0,0,512,320),Z.fillStyle=W.accent,Z.fillRect(48,40,14,96),Z.save(),Z.translate(66,118),Z.rotate(-0.78),Z.fillRect(0,-16,118,32),Z.restore(),Z.save(),Z.translate(148,128),Z.rotate(-0.78),Z.fillRect(0,-9,56,18),Z.restore(),Z.font=`700 44px ${t8}`,Z.fillStyle=W.fg,Z.fillText(J?`@${J}`:"VANTIS",44,250),Z.font=`600 20px ${_7}`,Z.fillStyle=W.accent,Z.fillText("VANTIS CARD",46,286);let Y=new i8($);return Y.colorSpace=N8,Y.generateMipmaps=!1,Y.minFilter=SJ,Y}function u5(){let J=document.createElement("canvas");J.width=J.height=256;let Q=J.getContext("2d"),$=Q.createRadialGradient(128,128,10,128,128,126);$.addColorStop(0,"rgba(8,10,9,0.5)"),$.addColorStop(0.6,"rgba(8,10,9,0.22)"),$.addColorStop(1,"rgba(8,10,9,0)"),Q.fillStyle=$,Q.fillRect(0,0,256,256);let Z=new i8(J);return Z.colorSpace=N8,Z}function WW(){let J=document.getElementById("device-stage");if(!J)return;let Q=Math.min(1.5,devicePixelRatio||1),$;try{$=new b$({antialias:Q<1.5,alpha:!0,powerPreference:"high-performance"})}catch{document.body.classList.add("dv-fail");return}$.setPixelRatio(Q),$.outputColorSpace=N8,$.toneMapping=q7,$.toneMappingExposure=1.12,J.appendChild($.domElement),$.domElement.setAttribute("aria-hidden","true");let Z=new n8,K=new B7($);Z.environment=K.fromScene(new h$,0.04).texture;let W=new bJ(30,1,0.1,20);W.position.set(0,0.98,2.9),W.lookAt(0,0.3,0);let H=new dJ({color:1118994,roughness:0.52,metalness:0.3,envMapIntensity:0.65}),Y=new dJ({color:658186,roughness:0.75,metalness:0.25}),X=new dJ({color:L8,roughness:0.42,metalness:0,envMapIntensity:0.3,emissive:L8,emissiveIntensity:0.42});X.toneMapped=!1;let U=new q9({color:L8});U.toneMapped=!1;let G=new d0(1327146),F=new hJ;Z.add(F);let N=new hJ,E=new j0(new k8(1.72,0.15,0.86,4,0.045),H);N.add(E),N.position.set(0,0,0.16),N.rotation.x=0.1,F.add(N);let L=new hJ,B=new j0(new k8(1.72,0.82,0.13,4,0.045),H);L.add(B);let O=new j0(new DJ(1.5,0.68,0.02),Y);O.position.set(0,0.015,0.062),L.add(O);let q=new XW,w=new j0(new N9(1.42,0.6),new q9({map:q.tex}));w.position.set(0,0.015,0.078),L.add(w);let C=new j0(new N9(1.48,0.66),new dJ({color:16777215,transparent:!0,opacity:0.05,roughness:0.12,metalness:0,envMapIntensity:1.6}));C.position.set(0,0.015,0.084),L.add(C),L.position.set(0,0.46,-0.32),L.rotation.x=-0.42,F.add(L);let M=new j0(new DJ(1.66,0.012,0.012),U);M.position.set(0,0.115,-0.3),F.add(M);let I=new hJ,A=new j0(new i9(0.135,0.145,0.1,48),new dJ({color:1184787,roughness:0.5,metalness:0.45,envMapIntensity:0.55}));I.add(A);let _=new s8(new DJ(0.012,0.085,0.02),new dJ({color:855565,roughness:0.55,metalness:0.5}),28),R=new IJ;for(let J0=0;J0<28;J0++){let V0=J0/28*Math.PI*2;R.position.set(Math.cos(V0)*0.138,0,Math.sin(V0)*0.138),R.rotation.y=-V0,R.updateMatrix(),_.setMatrixAt(J0,R.matrix)}I.add(_);let z=new j0(new DJ(0.016,0.012,0.09),U);z.position.set(0,0.053,-0.085),I.add(z),I.position.set(0.56,0.13,0.28),N.add(I);let l=new hJ,P=new j0(new k8(0.3,0.075,0.3,3,0.03),X);l.add(P);let g=new j0(new DJ(0.36,0.02,0.36),Y);g.position.y=-0.045,l.add(g),l.position.set(-0.52,0.11,0.3),N.add(l);let s=new hJ,x=new j0(new k8(0.24,0.035,0.1,2,0.015),Y);s.add(x);let u=new j0(new i9(0.022,0.028,0.09,16),H);u.position.y=0.05,s.add(u);let c=new j0(new i9(0.034,0.034,0.03,16),X);c.position.y=0.1,s.add(c),s.position.set(0.05,0.1,0.3),N.add(s);let f=new i9(0.016,0.016,0.02,12),t=new j0(f,new q9({color:L8}));t.position.set(-0.1,0.085,0.3),N.add(t);let e=new j0(f,new q9({color:G}));e.position.set(0.2,0.085,0.3),N.add(e);let K0=new hJ,M0=new j0(new DJ(0.016,0.088,0.008),U);M0.position.set(-0.052,0,0),K0.add(M0);let k0=new j0(new DJ(0.102,0.03,0.008),U);k0.rotation.z=0.78,k0.position.set(-0.006,0,0),K0.add(k0);let HJ=new j0(new DJ(0.05,0.018,0.008),U);HJ.rotation.z=0.78,HJ.position.set(0.052,-0.028,0),K0.add(HJ),K0.position.set(0,0.088,0.5),K0.rotation.x=-Math.PI/2+0.1,N.add(K0);let o0=new hJ,o=new j0(new DJ(0.09,0.03,0.62),Y);o0.add(o);let W0=new j0(new DJ(0.094,0.004,0.62),U);W0.position.y=0.017,o0.add(W0);let q0=new hJ,D0=new j0(new DJ(0.016,0.54,0.86),new dJ({color:1842716,roughness:0.5,metalness:0.2}));q0.add(D0);let C0=new dJ({roughness:0.38,metalness:0.25,envMapIntensity:0.7}),c0=new j0(new N9(0.86,0.54),C0);c0.rotation.y=Math.PI/2,c0.position.x=0.0085,q0.add(c0);let b0=new j0(new N9(0.86,0.54),C0);b0.rotation.y=-Math.PI/2,b0.position.x=-0.0085,q0.add(b0),q0.rotation.z=-0.06,o0.add(q0),o0.position.set(0.78,0.05,0.02),o0.rotation.z=0.1,F.add(o0);let g0=new j0(new N9(2.9,1.9),new q9({map:u5(),transparent:!0,depthWrite:!1}));g0.rotation.x=-Math.PI/2,g0.position.y=-0.14,Z.add(g0),F.position.y=0.02;let e0=new z8(0,60,14),u0=new z8(0,60,14),h0=new z8(0,170,20),YJ=new z8(0,400,24),MJ=new z8(-0.22,240,20),JJ=new z8(a9?0.18:-0.5,90,16),BJ={t:0},NJ=(J0,V0=!1)=>{let n0=(J0%r9.length+r9.length)%r9.length;if(n0===q.mode)return;if(q.mode=n0,q.err=null,q.armed=null,q.dirty=!0,h0.target=-n0*(Math.PI*2/8),!V0)pJ.detent(n0);q.vireo.poke(),T(),V(`Mode: ${r9[n0]}`)},RJ=document.getElementById("dv-input-row"),S=document.getElementById("dv-input"),jJ=document.getElementById("dv-go"),s0=document.getElementById("dv-alt"),ZJ=document.getElementById("dv-live"),V=(J0)=>{if(ZJ)ZJ.textContent=J0},D={CHAT:{ph:"Ask the rail anything…",go:"Fire"},SEARCH:{ph:"Search the open web…",go:"Search"},"X LOOKUP":{ph:"@handle",go:"Look up"}};function T(){let J0=q.modeName(),V0=D[J0];if(RJ)RJ.style.display=V0?"flex":"none";if(V0&&S)S.placeholder=V0.ph;if(V0&&jJ)jJ.textContent=V0.go;if(s0)if(J0==="HOME"||J0==="LANES")s0.style.display="",s0.textContent=J0==="LANES"?"Sweep lane":"Fund lane";else s0.style.display="none"}async function p(){try{let J0=await fetch("/api/playground/meta");if(!J0.ok)return;if(q.meta=await J0.json(),q.meta?.handle){if(C0.map=d5(q.meta.handle,q.meta.variant),C0.needsUpdate=!0,JJ.target<0.18){if(JJ.target=0.18,!a9)setTimeout(()=>pJ.dock(),380)}}q.dirty=!0}catch{}}async function r(){try{let J0=await fetch("/api/credits/history");if(!J0.ok)return;let V0=await J0.json();q.history=V0.entries||[],q.dirty=!0}catch{}}addEventListener("vc-balances",(J0)=>{let V0=J0.detail||{};if(!q.meta)return;let n0=q.meta.main_balance_usd;q.meta.main_balance_usd=V0.main??q.meta.main_balance_usd;for(let a0 of V0.wallets||[]){let x0=a0.purpose==="inference"?q.meta.lanes?.inference:q.meta.lanes?.devtools;if(x0)x0.balance_usd=a0.balance_usd,x0.consumed_usd=a0.consumed_usd}if(typeof V0.main==="number"&&V0.main!==n0)q.vireo.set("happy");q.dirty=!0,r()});function $0(J0){let V0=q.meta?.lanes?.[J0];return V0?{id:V0.id,name:J0==="inference"?"Inference":"Developer tools"}:null}function Y0(J0){let V0=$0(J0);if(!V0)return;dispatchEvent(new CustomEvent("vc-device-fund",{detail:V0}))}async function d(J0){let V0=$0(J0);if(!V0)return;dispatchEvent(new CustomEvent("vc-device-sweep",{detail:V0}))}let i=null,N0=!1;function z0(){if(q.busy)return!1;if(D[q.modeName()]&&!(S?.value||"").trim())return S?.focus(),q.vireo.set("alert"),q.dirty=!0,pJ.err(),!1;return!0}async function X0(){if(q.busy)return;let J0=q.modeName();if(q.err=null,J0==="HOME"){Y0("inference");return}if(J0==="LANES"){Y0(q.lane);return}if(J0==="LEDGER"){r();return}let V0=D[J0],n0=(S?.value||"").trim();if(V0&&!n0){S?.focus(),q.vireo.set("alert"),pJ.err();return}if(J0==="CHAT"&&!q.armed){let x0=(Math.ceil((n0.length+180)/4)*0.14+112.00000000000001)/1e6,aJ=q.meta?.vantis_price_usd?x0/q.meta.vantis_price_usd:null;q.armed={until:performance.now()+3000,quote:`UP TO $${x0.toFixed(6)}${aJ?` · ~${aJ.toFixed(4)} VANTIS`:""} AT LIST`},q.dirty=!0,V("Armed. Press again to fire.");return}q.armed=null,q.busy=!0,q.vireo.set("work"),q.vireo.flapRate=3,q.dirty=!0;try{if(J0==="CHAT"){q.chat={prompt:n0,text:"",shown:0,line:""};let a0=await fetch("/api/playground/fire",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:n0})}),x0=await a0.json();if(!a0.ok){if(q.chat=null,x0.error==="lane_empty")q.err=`Inference lane is empty — it needs about $${(x0.required_usd||0.001).toFixed(4)} for this call. Green key on HOME funds it.`,q.vireo.set("droop");else if(x0.error==="rate_limited")q.err="Easy — a few seconds between fires.",q.vireo.set("alert");else q.err="The rail refused that one. Try again.",q.vireo.set("alert");pJ.err()}else{if(q.chat.text=x0.text||"",q.chat.line=`${(x0.latency_ms/1000).toFixed(1)}s · ${x0.tokens_out} TOK OUT · $${(x0.cost_usd||0).toFixed(6)} → ${(x0.vantis_burned||0).toFixed(4)} VANTIS BURNED`,q.meta?.lanes?.inference)q.meta.lanes.inference.balance_usd=x0.lane_balance_usd;pJ.ok(),V(`Answer: ${x0.text}`)}}else if(J0==="SEARCH"){let a0=await fetch("/api/playground/search",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:n0})}),x0=await a0.json();if(!a0.ok){if(x0.error==="demo_exhausted")q.err="Today's free searches are spent — more tomorrow.";else q.err="Search did not go through.";q.vireo.set("alert"),pJ.err()}else q.search={query:n0,results:x0.results,left:x0.left_today},q.vireo.set("happy"),pJ.ok(),V(`${x0.results.length} results`)}else if(J0==="X LOOKUP"){let a0=await fetch("/api/playground/x",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({handle:n0})}),x0=await a0.json();if(!a0.ok)q.err=x0.error==="demo_exhausted"?"Today's free lookups are spent — more tomorrow.":x0.error==="handle_not_found"?"No such handle — check the spelling.":x0.error==="tool_off"?"This route is offline right now.":"Lookup did not go through.",q.vireo.set("alert"),pJ.err();else q.xprof={profile:x0.profile,left:x0.left_today},q.vireo.set("happy"),pJ.ok(),V(`@${x0.profile.handle}: ${x0.profile.followers} followers`)}}catch{q.err="Network hiccup — try again.",q.vireo.set("alert"),pJ.err()}finally{if(q.busy=!1,q.vireo.state==="work")q.vireo.set("idle");q.dirty=!0}}let Q0=-1e9,A0=new P6,_0=new l0,v0=null,j=new q9({visible:!1}),Z0=(J0,V0,n0,a0,x0,aJ=0,M9=0,v9=0)=>{let t9=new j0(new DJ(V0,n0,a0),j);return t9.position.set(aJ,M9,v9),t9.userData.hit=J0,x0.add(t9),t9},n=[Z0("knob",0.34,0.16,0.34,I),Z0("key",0.34,0.14,0.34,l),Z0("lever",0.26,0.2,0.14,s,0,0.06,0),Z0("card",0.1,0.6,0.9,o0,0,0.28,0),Z0("screen",1.44,0.62,0.06,L,0,0.015,0.08)];function H0(J0){let V0=$.domElement.getBoundingClientRect();_0.x=(J0.clientX-V0.left)/V0.width*2-1,_0.y=-((J0.clientY-V0.top)/V0.height)*2+1,A0.setFromCamera(_0,W);let n0=A0.intersectObjects(n,!1);return n0.length?n0[0].object.userData.hit:null}$.domElement.addEventListener("pointerdown",(J0)=>{Q0=performance.now();let V0=H0(J0);if(!V0)return;if(q.vireo.poke(),V0==="knob")v0={x:J0.clientX,base:q.mode,acc:0},$.domElement.setPointerCapture(J0.pointerId);else if(V0==="key"){if(!z0())return;YJ.target=-0.032,pJ.press(),N0=!1,i=setTimeout(()=>{if(N0=!0,q.modeName()==="LANES")d(q.lane)},650)}else if(V0==="lever"){if(q.lane=q.lane==="inference"?"devtools":"inference",MJ.target=q.lane==="inference"?-0.22:0.22,pJ.lever(),q.dirty=!0,q.modeName()!=="LANES")NJ(5,!0);V(`Lane: ${q.lane}`)}else if(V0==="card"||V0==="screen")NJ(0)});let E0=0,a=null;$.domElement.addEventListener("pointermove",(J0)=>{Q0=performance.now();let V0=$.domElement.getBoundingClientRect(),n0=(J0.clientX-V0.left)/V0.width*2-1,a0=(J0.clientY-V0.top)/V0.height*2-1;if(!a9)u0.target=n0*0.1,e0.target=a0*0.055;if(v0){let aJ=J0.clientX-v0.x,M9=Math.round(aJ/52);if(M9!==v0.acc)NJ(v0.base+M9),v0.acc=M9;$.domElement.style.cursor="grabbing";return}let x0=performance.now();if(x0-E0>80)E0=x0,a=H0(J0),$.domElement.style.cursor=a?"pointer":"default"});let U0=(J0)=>{if(v0){v0=null;try{$.domElement.releasePointerCapture(J0.pointerId)}catch{}}if(YJ.target!==0){if(YJ.target=0,clearTimeout(i),!N0)X0()}};$.domElement.addEventListener("pointerup",U0),$.domElement.addEventListener("pointerleave",(J0)=>{if(!v0)e0.target=0,u0.target=0;U0(J0)});let w0=0,OJ=null;$.domElement.addEventListener("wheel",(J0)=>{if(a!=="knob"&&!v0)return;J0.preventDefault(),w0+=J0.deltaY,clearTimeout(OJ),OJ=setTimeout(()=>w0=0,200);while(Math.abs(w0)>=100)NJ(q.mode+(w0>0?1:-1)),w0-=Math.sign(w0)*100},{passive:!1});let QJ=()=>{if(!z0())return;YJ.target=-0.032,setTimeout(()=>YJ.target=0,130),pJ.press(),X0()};addEventListener("keydown",(J0)=>{if(J0.target===S){if(J0.key==="Enter")J0.preventDefault(),QJ();return}if(J0.target?.tagName==="INPUT"||J0.target?.tagName==="TEXTAREA")return;if(J0.key==="ArrowRight")NJ(q.mode+1);else if(J0.key==="ArrowLeft")NJ(q.mode-1);else if(J0.key==="Enter")QJ();else if(J0.key.toLowerCase()==="l")q.lane=q.lane==="inference"?"devtools":"inference",MJ.target=q.lane==="inference"?-0.22:0.22,pJ.lever(),q.dirty=!0}),jJ?.addEventListener("click",QJ),s0?.addEventListener("click",()=>{if(q.modeName()==="LANES")d(q.lane);else Y0("inference")});function uJ(){let J0=J.clientWidth,V0=Math.max(360,Math.min(640,Math.round(J0*0.62)));$.setSize(J0,V0),W.aspect=J0/V0,W.position.z=J0<560?3.9:J0<760?3.4:3.05,W.updateProjectionMatrix(),q.dirty=!0}new ResizeObserver(uJ).observe(J),uJ();let cJ=performance.now(),e8=0,w7=[e0,u0,h0,YJ,MJ,JJ];function B8(J0){e8=requestAnimationFrame(B8);let V0=Math.min(0.25,(J0-cJ)/1000),n0=Math.min(0.05,V0);cJ=J0;let a0=J0/1000;BJ.t=a0;let x0=q.step(V0,a0),aJ=J0-Q0<2500;if(!(!q.booted||q.busy||x0||aJ||w7.some((v9)=>!v9.settled())))if(Math.abs(F.position.y-0.02)>0.0004)F.position.y+=(0.02-F.position.y)*Math.min(1,n0*3);else return;else if(!a9&&aJ)F.position.y=0.02+Math.sin(a0*0.9)*0.012;if(!a9)F.rotation.x=e0.step(n0),F.rotation.y=u0.step(n0);I.rotation.y=h0.step(n0),P.position.y=YJ.step(n0),u.rotation.z=MJ.step(n0),c.position.x=Math.sin(MJ.v)*0.06,c.rotation.z=MJ.v,q0.position.y=JJ.step(n0),e.material.color.set(q.lane==="devtools"?L8:1327146),t.material.color.set(q.lane==="inference"?L8:1327146),U.color.setHex(L8).multiplyScalar(q.busy?0.75+Math.sin(a0*9)*0.25:1),$.render(Z,W)}if(a9){let J0=()=>{q.step(0.03333333333333333,performance.now()/1000),I.rotation.y=h0.target,P.position.y=YJ.target,u.rotation.z=MJ.target,q0.position.y=JJ.target,$.render(Z,W)};setInterval(J0,250),J0()}else{let J0=!0,V0=!1,n0=()=>{let a0=J0&&!document.hidden;if(a0&&!V0)V0=!0,cJ=performance.now(),e8=requestAnimationFrame(B8);else if(!a0&&V0)V0=!1,cancelAnimationFrame(e8)};new IntersectionObserver((a0)=>{J0=a0[0]?.isIntersecting!==!1,n0()},{threshold:0.02}).observe(J),document.addEventListener("visibilitychange",n0),n0()}document.body.classList.add("dv-on"),document.getElementById("dv-console")?.removeAttribute("open"),T(),p().then(r),window.__device={ready:!0,os:q,setMode:(J0)=>NJ(J0),pickAt:(J0,V0)=>H0({clientX:J0,clientY:V0}),frames:()=>$.info.render.frame,fire:X0,snapshot:()=>{return $.render(Z,W),$.domElement.toDataURL("image/png")}}}if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",WW);else WW();
