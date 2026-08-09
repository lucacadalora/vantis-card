var EW=Object.create;var{getPrototypeOf:RW,defineProperty:e9,getOwnPropertyNames:p6,getOwnPropertyDescriptor:kW}=Object,b7=Object.prototype.hasOwnProperty;function h7(J){return this[J]}var t5=(J,Q,$)=>{var Z=p6(Q);for(let K of Z)if(!b7.call(J,K)&&K!=="default")e9(J,K,{get:h7.bind(Q,K),enumerable:!0});if($){for(let K of Z)if(!b7.call($,K)&&K!=="default")e9($,K,{get:h7.bind(Q,K),enumerable:!0});return $}},LW,VW,e5=(J,Q,$)=>{var Z=J!=null&&typeof J==="object";if(Z){var K=Q?LW??=new WeakMap:VW??=new WeakMap,W=K.get(J);if(W)return W}$=J!=null?EW(RW(J)):{};let X=Q||!J||!J.__esModule?e9($,"default",{value:J,enumerable:!0}):$;for(let Y of p6(J))if(!b7.call(X,Y))e9(X,Y,{get:h7.bind(J,Y),enumerable:!0});if(Z)K.set(J,X);return X},Jq=(J)=>{var Q=(t$??=new WeakMap).get(J),$;if(Q)return Q;if(Q=e9({},"__esModule",{value:!0}),J&&typeof J==="object"||typeof J==="function"){for(var Z of p6(J))if(!b7.call(Q,Z))e9(Q,Z,{get:h7.bind(J,Z),enumerable:!($=kW(J,Z))||$.enumerable})}return t$.set(J,Q),Q},t$,Qq=(J,Q)=>()=>(Q||J((Q={exports:{}}).exports,Q),Q.exports);var MW=(J)=>J;function zW(J,Q){this[J]=MW.bind(null,Q)}var $q=(J,Q)=>{for(var $ in Q)e9(J,$,{get:Q[$],enumerable:!0,configurable:!0,set:zW.bind(Q,$)})};var Zq=(J,Q)=>()=>(J&&(Q=J(J=0)),Q);var Kq=((J)=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(J,{get:(Q,$)=>(typeof require<"u"?require:Q)[$]}):J)(function(J){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+J+'" is not supported')});var BZ="185";var IZ=0,NQ=1,AZ=2;var F7=1,PZ=2,u8=3,c8=0,yJ=1,D9=2,E9=0,O7=1,FQ=2,OQ=3,DQ=4,CZ=5;var n8=100,_Z=101,wZ=102,TZ=103,SZ=104,jZ=200,vZ=201,fZ=202,yZ=203,bZ=204,hZ=205,xZ=206,gZ=207,pZ=208,mZ=209,lZ=210,dZ=211,uZ=212,cZ=213,nZ=214,sZ=0,iZ=1,oZ=2,EQ=3,aZ=4,rZ=5,tZ=6,eZ=7,JK=0,QK=1,$K=2,Y9=0,RQ=1,kQ=2,LQ=3,D7=4,VQ=5,MQ=6,zQ=7;var s8=301,W8=302,Y6=303,H6=304,E7=306,ZK=1000,U6=1001,KK=1002,c9=1003,WK=1004;var R7=1005;var VJ=1006,q6=1007;var X8=1008;var H9=1009,XK=1010,YK=1011,k7=1012,BQ=1013,n9=1014,_9=1015,w9=1016,IQ=1017,AQ=1018,i8=1020,HK=35902,UK=35899,qK=1021,GK=1022,R9=1023,Y8=1026,H8=1027,NK=1028,PQ=1029,U8=1030,CQ=1031;var _Q=1033,G6=33776,N6=33777,F6=33778,O6=33779,wQ=35840,TQ=35841,SQ=35842,jQ=35843,vQ=36196,fQ=37492,yQ=37496,bQ=37488,hQ=37489,D6=37490,xQ=37491,gQ=37808,pQ=37809,mQ=37810,lQ=37811,dQ=37812,uQ=37813,cQ=37814,nQ=37815,sQ=37816,iQ=37817,oQ=37818,aQ=37819,rQ=37820,tQ=37821,eQ=36492,J$=36494,Q$=36495,$$=36283,Z$=36284,E6=36285,K$=36286;var W$=0,FK=1,q8="",k9="srgb",X$="srgb-linear",Y$="linear",YJ="srgb";var OK=512,DK=513,EK=514,R6=515,RK=516,kK=517,k6=518,LK=519;var H$="300 es",U$=2000;function BW(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function IW(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function N7(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function VK(){let J=N7("canvas");return J.style.display="block",J}var e$={},d8=null;function q$(...J){let Q="THREE."+J.shift();if(d8)d8("log",Q,...J);else console.log(Q,...J)}function MK(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let $=J[1];if($&&$.isStackTrace)J[0]+=" "+$.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function T0(...J){J=MK(J);let Q="THREE."+J.shift();if(d8)d8("warn",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.warn($.getError(Q));else console.warn(Q,...J)}}function w0(...J){J=MK(J);let Q="THREE."+J.shift();if(d8)d8("error",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.error($.getError(Q));else console.error(Q,...J)}}function K8(...J){let Q=J.join(" ");if(Q in e$)return;e$[Q]=!0,T0(...J)}function zK(J,Q,$){return new Promise(function(Z,K){function W(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:K();break;case J.TIMEOUT_EXPIRED:setTimeout(W,$);break;default:Z()}}setTimeout(W,$)})}var BK={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class T9{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let Z=$[J];if(Z!==void 0){let K=Z.indexOf(Q);if(K!==-1)Z.splice(K,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let Z=$.slice(0);for(let K=0,W=Z.length;K<W;K++)Z[K].call(this,J);J.target=null}}}var jJ=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var m6=Math.PI/180,W6=180/Math.PI;function L7(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(jJ[J&255]+jJ[J>>8&255]+jJ[J>>16&255]+jJ[J>>24&255]+"-"+jJ[Q&255]+jJ[Q>>8&255]+"-"+jJ[Q>>16&15|64]+jJ[Q>>24&255]+"-"+jJ[$&63|128]+jJ[$>>8&255]+"-"+jJ[$>>16&255]+jJ[$>>24&255]+jJ[Z&255]+jJ[Z>>8&255]+jJ[Z>>16&255]+jJ[Z>>24&255]).toLowerCase()}function n0(J,Q,$){return Math.max(Q,Math.min($,J))}function AW(J,Q){return(J%Q+Q)%Q}function l6(J,Q,$){return(1-$)*J+$*Q}function W7(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function mJ(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}class p0{static{p0.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,Z=J.elements;return this.x=Z[0]*Q+Z[3]*$+Z[6],this.y=Z[1]*Q+Z[4]*$+Z[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=n0(this.x,J.x,Q.x),this.y=n0(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=n0(this.x,J,Q),this.y=n0(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(n0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(n0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),K=this.x-J.x,W=this.y-J.y;return this.x=K*$-W*Z+J.x,this.y=K*Z+W*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class S9{constructor(J=0,Q=0,$=0,Z=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=Z}static slerpFlat(J,Q,$,Z,K,W,X){let Y=$[Z+0],H=$[Z+1],U=$[Z+2],G=$[Z+3],F=K[W+0],q=K[W+1],E=K[W+2],L=K[W+3];if(G!==L||Y!==F||H!==q||U!==E){let I=Y*F+H*q+U*E+G*L;if(I<0)F=-F,q=-q,E=-E,L=-L,I=-I;let D=1-X;if(I<0.9995){let O=Math.acos(I),T=Math.sin(O);D=Math.sin(D*O)/T,X=Math.sin(X*O)/T,Y=Y*D+F*X,H=H*D+q*X,U=U*D+E*X,G=G*D+L*X}else{Y=Y*D+F*X,H=H*D+q*X,U=U*D+E*X,G=G*D+L*X;let O=1/Math.sqrt(Y*Y+H*H+U*U+G*G);Y*=O,H*=O,U*=O,G*=O}}J[Q]=Y,J[Q+1]=H,J[Q+2]=U,J[Q+3]=G}static multiplyQuaternionsFlat(J,Q,$,Z,K,W){let X=$[Z],Y=$[Z+1],H=$[Z+2],U=$[Z+3],G=K[W],F=K[W+1],q=K[W+2],E=K[W+3];return J[Q]=X*E+U*G+Y*q-H*F,J[Q+1]=Y*E+U*F+H*G-X*q,J[Q+2]=H*E+U*q+X*F-Y*G,J[Q+3]=U*E-X*G-Y*F-H*q,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,Z){return this._x=J,this._y=Q,this._z=$,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:Z,_z:K,_order:W}=J,X=Math.cos,Y=Math.sin,H=X($/2),U=X(Z/2),G=X(K/2),F=Y($/2),q=Y(Z/2),E=Y(K/2);switch(W){case"XYZ":this._x=F*U*G+H*q*E,this._y=H*q*G-F*U*E,this._z=H*U*E+F*q*G,this._w=H*U*G-F*q*E;break;case"YXZ":this._x=F*U*G+H*q*E,this._y=H*q*G-F*U*E,this._z=H*U*E-F*q*G,this._w=H*U*G+F*q*E;break;case"ZXY":this._x=F*U*G-H*q*E,this._y=H*q*G+F*U*E,this._z=H*U*E+F*q*G,this._w=H*U*G-F*q*E;break;case"ZYX":this._x=F*U*G-H*q*E,this._y=H*q*G+F*U*E,this._z=H*U*E-F*q*G,this._w=H*U*G+F*q*E;break;case"YZX":this._x=F*U*G+H*q*E,this._y=H*q*G+F*U*E,this._z=H*U*E-F*q*G,this._w=H*U*G-F*q*E;break;case"XZY":this._x=F*U*G-H*q*E,this._y=H*q*G-F*U*E,this._z=H*U*E+F*q*G,this._w=H*U*G+F*q*E;break;default:T0("Quaternion: .setFromEuler() encountered an unknown order: "+W)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,Z=Math.sin($);return this._x=J.x*Z,this._y=J.y*Z,this._z=J.z*Z,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],Z=Q[4],K=Q[8],W=Q[1],X=Q[5],Y=Q[9],H=Q[2],U=Q[6],G=Q[10],F=$+X+G;if(F>0){let q=0.5/Math.sqrt(F+1);this._w=0.25/q,this._x=(U-Y)*q,this._y=(K-H)*q,this._z=(W-Z)*q}else if($>X&&$>G){let q=2*Math.sqrt(1+$-X-G);this._w=(U-Y)/q,this._x=0.25*q,this._y=(Z+W)/q,this._z=(K+H)/q}else if(X>G){let q=2*Math.sqrt(1+X-$-G);this._w=(K-H)/q,this._x=(Z+W)/q,this._y=0.25*q,this._z=(Y+U)/q}else{let q=2*Math.sqrt(1+G-$-X);this._w=(W-Z)/q,this._x=(K+H)/q,this._y=(Y+U)/q,this._z=0.25*q}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(n0(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let Z=Math.min(1,Q/$);return this.slerp(J,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:Z,_z:K,_w:W}=J,X=Q._x,Y=Q._y,H=Q._z,U=Q._w;return this._x=$*U+W*X+Z*H-K*Y,this._y=Z*U+W*Y+K*X-$*H,this._z=K*U+W*H+$*Y-Z*X,this._w=W*U-$*X-Z*Y-K*H,this._onChangeCallback(),this}slerp(J,Q){let{_x:$,_y:Z,_z:K,_w:W}=J,X=this.dot(J);if(X<0)$=-$,Z=-Z,K=-K,W=-W,X=-X;let Y=1-Q;if(X<0.9995){let H=Math.acos(X),U=Math.sin(H);Y=Math.sin(Y*H)/U,Q=Math.sin(Q*H)/U,this._x=this._x*Y+$*Q,this._y=this._y*Y+Z*Q,this._z=this._z*Y+K*Q,this._w=this._w*Y+W*Q,this._onChangeCallback()}else this._x=this._x*Y+$*Q,this._y=this._y*Y+Z*Q,this._z=this._z*Y+K*Q,this._w=this._w*Y+W*Q,this.normalize();return this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),Z=Math.sqrt(1-$),K=Math.sqrt($);return this.set(Z*Math.sin(J),Z*Math.cos(J),K*Math.sin(Q),K*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class h{static{h.prototype.isVector3=!0}constructor(J=0,Q=0,$=0){this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(JZ.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(JZ.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements;return this.x=K[0]*Q+K[3]*$+K[6]*Z,this.y=K[1]*Q+K[4]*$+K[7]*Z,this.z=K[2]*Q+K[5]*$+K[8]*Z,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements,W=1/(K[3]*Q+K[7]*$+K[11]*Z+K[15]);return this.x=(K[0]*Q+K[4]*$+K[8]*Z+K[12])*W,this.y=(K[1]*Q+K[5]*$+K[9]*Z+K[13])*W,this.z=(K[2]*Q+K[6]*$+K[10]*Z+K[14])*W,this}applyQuaternion(J){let Q=this.x,$=this.y,Z=this.z,K=J.x,W=J.y,X=J.z,Y=J.w,H=2*(W*Z-X*$),U=2*(X*Q-K*Z),G=2*(K*$-W*Q);return this.x=Q+Y*H+W*G-X*U,this.y=$+Y*U+X*H-K*G,this.z=Z+Y*G+K*U-W*H,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements;return this.x=K[0]*Q+K[4]*$+K[8]*Z,this.y=K[1]*Q+K[5]*$+K[9]*Z,this.z=K[2]*Q+K[6]*$+K[10]*Z,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=n0(this.x,J.x,Q.x),this.y=n0(this.y,J.y,Q.y),this.z=n0(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=n0(this.x,J,Q),this.y=n0(this.y,J,Q),this.z=n0(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(n0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:Z,z:K}=J,W=Q.x,X=Q.y,Y=Q.z;return this.x=Z*Y-K*X,this.y=K*W-$*Y,this.z=$*X-Z*W,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return d6.copy(this).projectOnVector(J),this.sub(d6)}reflect(J){return this.sub(d6.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(n0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,Z=this.z-J.z;return Q*Q+$*$+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let Z=Math.sin(Q)*J;return this.x=Z*Math.sin($),this.y=Math.cos(Q)*J,this.z=Z*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),Z=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=Z,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var d6=new h,JZ=new S9;class j0{static{j0.prototype.isMatrix3=!0}constructor(J,Q,$,Z,K,W,X,Y,H){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,K,W,X,Y,H)}set(J,Q,$,Z,K,W,X,Y,H){let U=this.elements;return U[0]=J,U[1]=Z,U[2]=X,U[3]=Q,U[4]=K,U[5]=Y,U[6]=$,U[7]=W,U[8]=H,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,K=this.elements,W=$[0],X=$[3],Y=$[6],H=$[1],U=$[4],G=$[7],F=$[2],q=$[5],E=$[8],L=Z[0],I=Z[3],D=Z[6],O=Z[1],T=Z[4],M=Z[7],z=Z[2],_=Z[5],P=Z[8];return K[0]=W*L+X*O+Y*z,K[3]=W*I+X*T+Y*_,K[6]=W*D+X*M+Y*P,K[1]=H*L+U*O+G*z,K[4]=H*I+U*T+G*_,K[7]=H*D+U*M+G*P,K[2]=F*L+q*O+E*z,K[5]=F*I+q*T+E*_,K[8]=F*D+q*M+E*P,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],X=J[5],Y=J[6],H=J[7],U=J[8];return Q*W*U-Q*X*H-$*K*U+$*X*Y+Z*K*H-Z*W*Y}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],X=J[5],Y=J[6],H=J[7],U=J[8],G=U*W-X*H,F=X*Y-U*K,q=H*K-W*Y,E=Q*G+$*F+Z*q;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);let L=1/E;return J[0]=G*L,J[1]=(Z*H-U*$)*L,J[2]=(X*$-Z*W)*L,J[3]=F*L,J[4]=(U*Q-Z*Y)*L,J[5]=(Z*K-X*Q)*L,J[6]=q*L,J[7]=($*Y-H*Q)*L,J[8]=(W*Q-$*K)*L,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,Z,K,W,X){let Y=Math.cos(K),H=Math.sin(K);return this.set($*Y,$*H,-$*(Y*W+H*X)+W+J,-Z*H,Z*Y,-Z*(-H*W+Y*X)+X+Q,0,0,1),this}scale(J,Q){return K8("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(u6.makeScale(J,Q)),this}rotate(J){return K8("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(u6.makeRotation(-J)),this}translate(J,Q){return K8("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(u6.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<9;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var u6=new j0,QZ=new j0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),$Z=new j0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function PW(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(K,W,X){if(this.enabled===!1||W===X||!W||!X)return K;if(this.spaces[W].transfer==="srgb")K.r=C9(K.r),K.g=C9(K.g),K.b=C9(K.b);if(this.spaces[W].primaries!==this.spaces[X].primaries)K.applyMatrix3(this.spaces[W].toXYZ),K.applyMatrix3(this.spaces[X].fromXYZ);if(this.spaces[X].transfer==="srgb")K.r=l8(K.r),K.g=l8(K.g),K.b=l8(K.b);return K},workingToColorSpace:function(K,W){return this.convert(K,this.workingColorSpace,W)},colorSpaceToWorking:function(K,W){return this.convert(K,W,this.workingColorSpace)},getPrimaries:function(K){return this.spaces[K].primaries},getTransfer:function(K){if(K==="")return"linear";return this.spaces[K].transfer},getToneMappingMode:function(K){return this.spaces[K].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(K,W=this.workingColorSpace){return K.fromArray(this.spaces[W].luminanceCoefficients)},define:function(K){Object.assign(this.spaces,K)},_getMatrix:function(K,W,X){return K.copy(this.spaces[W].toXYZ).multiply(this.spaces[X].fromXYZ)},_getDrawingBufferColorSpace:function(K){return this.spaces[K].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(K=this.workingColorSpace){return this.spaces[K].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(K,W){return K8("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(K,W)},toWorkingColorSpace:function(K,W){return K8("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(K,W)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],Z=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:Z,transfer:"linear",toXYZ:QZ,fromXYZ:$Z,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:Z,transfer:"srgb",toXYZ:QZ,fromXYZ:$Z,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var u0=PW();function C9(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function l8(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var w8;class G${static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(w8===void 0)w8=N7("canvas");w8.width=J.width,w8.height=J.height;let Z=w8.getContext("2d");if(J instanceof ImageData)Z.putImageData(J,0,0);else Z.drawImage(J,0,0,J.width,J.height);$=w8}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=N7("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let Z=$.getImageData(0,0,J.width,J.height),K=Z.data;for(let W=0;W<K.length;W++)K[W]=C9(K[W]/255)*255;return $.putImageData(Z,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(C9(Q[$]/255)*255);else Q[$]=C9(Q[$]);return{data:Q,width:J.width,height:J.height}}else return T0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var CW=0;class V7{constructor(J=null){this.isSource=!0,Object.defineProperty(this,"id",{value:CW++}),this.uuid=L7(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame<"u"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let K;if(Array.isArray(Z)){K=[];for(let W=0,X=Z.length;W<X;W++)if(Z[W].isDataTexture)K.push(c6(Z[W].image));else K.push(c6(Z[W]))}else K=c6(Z);$.url=K}if(!Q)J.images[this.uuid]=$;return $}}function c6(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return G$.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return T0("Texture: Unable to serialize Texture."),{}}var _W=0,n6=new h;class _J extends T9{constructor(J=_J.DEFAULT_IMAGE,Q=_J.DEFAULT_MAPPING,$=1001,Z=1001,K=1006,W=1008,X=1023,Y=1009,H=_J.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:_W++}),this.uuid=L7(),this.name="",this.source=new V7(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=Z,this.magFilter=K,this.minFilter=W,this.anisotropy=H,this.format=X,this.internalFormat=null,this.type=Y,this.offset=new p0(0,0),this.repeat=new p0(1,1),this.center=new p0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new j0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(n6).x}get height(){return this.source.getSize(n6).y}get depth(){return this.source.getSize(n6).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){T0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){T0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(Z&&$&&(Z.isVector2&&$.isVector2))Z.copy($);else if(Z&&$&&(Z.isVector3&&$.isVector3))Z.copy($);else if(Z&&$&&(Z.isMatrix3&&$.isMatrix3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}_J.DEFAULT_IMAGE=null;_J.DEFAULT_MAPPING=300;_J.DEFAULT_ANISOTROPY=1;class UJ{static{UJ.prototype.isVector4=!0}constructor(J=0,Q=0,$=0,Z=1){this.x=J,this.y=Q,this.z=$,this.w=Z}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,Z){return this.x=J,this.y=Q,this.z=$,this.w=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,K=this.w,W=J.elements;return this.x=W[0]*Q+W[4]*$+W[8]*Z+W[12]*K,this.y=W[1]*Q+W[5]*$+W[9]*Z+W[13]*K,this.z=W[2]*Q+W[6]*$+W[10]*Z+W[14]*K,this.w=W[3]*Q+W[7]*$+W[11]*Z+W[15]*K,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,Z,K,W=0.01,X=0.1,Y=J.elements,H=Y[0],U=Y[4],G=Y[8],F=Y[1],q=Y[5],E=Y[9],L=Y[2],I=Y[6],D=Y[10];if(Math.abs(U-F)<0.01&&Math.abs(G-L)<0.01&&Math.abs(E-I)<0.01){if(Math.abs(U+F)<0.1&&Math.abs(G+L)<0.1&&Math.abs(E+I)<0.1&&Math.abs(H+q+D-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let T=(H+1)/2,M=(q+1)/2,z=(D+1)/2,_=(U+F)/4,P=(G+L)/4,w=(E+I)/4;if(T>M&&T>z)if(T<0.01)$=0,Z=0.707106781,K=0.707106781;else $=Math.sqrt(T),Z=_/$,K=P/$;else if(M>z)if(M<0.01)$=0.707106781,Z=0,K=0.707106781;else Z=Math.sqrt(M),$=_/Z,K=w/Z;else if(z<0.01)$=0.707106781,Z=0.707106781,K=0;else K=Math.sqrt(z),$=P/K,Z=w/K;return this.set($,Z,K,Q),this}let O=Math.sqrt((I-E)*(I-E)+(G-L)*(G-L)+(F-U)*(F-U));if(Math.abs(O)<0.001)O=1;return this.x=(I-E)/O,this.y=(G-L)/O,this.z=(F-U)/O,this.w=Math.acos((H+q+D-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=n0(this.x,J.x,Q.x),this.y=n0(this.y,J.y,Q.y),this.z=n0(this.z,J.z,Q.z),this.w=n0(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=n0(this.x,J,Q),this.y=n0(this.y,J,Q),this.z=n0(this.z,J,Q),this.w=n0(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(n0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class N$ extends T9{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new UJ(0,0,J,Q),this.scissorTest=!1,this.viewport=new UJ(0,0,J,Q),this.textures=[];let Z={width:J,height:Q,depth:$.depth},K=new _J(Z),W=$.count;for(let X=0;X<W;X++)this.textures[X]=K.clone(),this.textures[X].isRenderTargetTexture=!0,this.textures[X].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview,this.useArrayDepthTexture=$.useArrayDepthTexture}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if(J!==null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let Z=0,K=this.textures.length;Z<K;Z++)if(this.textures[Z].image.width=J,this.textures[Z].image.height=Q,this.textures[Z].image.depth=$,this.textures[Z].isData3DTexture!==!0)this.textures[Z].isArrayTexture=this.textures[Z].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let Z=Object.assign({},J.textures[Q].image);this.textures[Q].source=new V7(Z)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,J.depthTexture!==null)this.depthTexture=J.depthTexture.clone();return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rJ extends N${constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class L6 extends _J{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class F$ extends _J{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ZJ{static{ZJ.prototype.isMatrix4=!0}constructor(J,Q,$,Z,K,W,X,Y,H,U,G,F,q,E,L,I){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,K,W,X,Y,H,U,G,F,q,E,L,I)}set(J,Q,$,Z,K,W,X,Y,H,U,G,F,q,E,L,I){let D=this.elements;return D[0]=J,D[4]=Q,D[8]=$,D[12]=Z,D[1]=K,D[5]=W,D[9]=X,D[13]=Y,D[2]=H,D[6]=U,D[10]=G,D[14]=F,D[3]=q,D[7]=E,D[11]=L,D[15]=I,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ZJ().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){if(this.determinantAffine()===0)return J.set(1,0,0),Q.set(0,1,0),$.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let Q=this.elements,$=J.elements,Z=1/T8.setFromMatrixColumn(J,0).length(),K=1/T8.setFromMatrixColumn(J,1).length(),W=1/T8.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*Z,Q[1]=$[1]*Z,Q[2]=$[2]*Z,Q[3]=0,Q[4]=$[4]*K,Q[5]=$[5]*K,Q[6]=$[6]*K,Q[7]=0,Q[8]=$[8]*W,Q[9]=$[9]*W,Q[10]=$[10]*W,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,Z=J.y,K=J.z,W=Math.cos($),X=Math.sin($),Y=Math.cos(Z),H=Math.sin(Z),U=Math.cos(K),G=Math.sin(K);if(J.order==="XYZ"){let F=W*U,q=W*G,E=X*U,L=X*G;Q[0]=Y*U,Q[4]=-Y*G,Q[8]=H,Q[1]=q+E*H,Q[5]=F-L*H,Q[9]=-X*Y,Q[2]=L-F*H,Q[6]=E+q*H,Q[10]=W*Y}else if(J.order==="YXZ"){let F=Y*U,q=Y*G,E=H*U,L=H*G;Q[0]=F+L*X,Q[4]=E*X-q,Q[8]=W*H,Q[1]=W*G,Q[5]=W*U,Q[9]=-X,Q[2]=q*X-E,Q[6]=L+F*X,Q[10]=W*Y}else if(J.order==="ZXY"){let F=Y*U,q=Y*G,E=H*U,L=H*G;Q[0]=F-L*X,Q[4]=-W*G,Q[8]=E+q*X,Q[1]=q+E*X,Q[5]=W*U,Q[9]=L-F*X,Q[2]=-W*H,Q[6]=X,Q[10]=W*Y}else if(J.order==="ZYX"){let F=W*U,q=W*G,E=X*U,L=X*G;Q[0]=Y*U,Q[4]=E*H-q,Q[8]=F*H+L,Q[1]=Y*G,Q[5]=L*H+F,Q[9]=q*H-E,Q[2]=-H,Q[6]=X*Y,Q[10]=W*Y}else if(J.order==="YZX"){let F=W*Y,q=W*H,E=X*Y,L=X*H;Q[0]=Y*U,Q[4]=L-F*G,Q[8]=E*G+q,Q[1]=G,Q[5]=W*U,Q[9]=-X*U,Q[2]=-H*U,Q[6]=q*G+E,Q[10]=F-L*G}else if(J.order==="XZY"){let F=W*Y,q=W*H,E=X*Y,L=X*H;Q[0]=Y*U,Q[4]=-G,Q[8]=H*U,Q[1]=F*G+L,Q[5]=W*U,Q[9]=q*G-E,Q[2]=E*G-q,Q[6]=X*U,Q[10]=L*G+F}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(wW,J,TW)}lookAt(J,Q,$){let Z=this.elements;if(uJ.subVectors(J,Q),uJ.lengthSq()===0)uJ.z=1;if(uJ.normalize(),g9.crossVectors($,uJ),g9.lengthSq()===0){if(Math.abs($.z)===1)uJ.x+=0.0001;else uJ.z+=0.0001;uJ.normalize(),g9.crossVectors($,uJ)}return g9.normalize(),x7.crossVectors(uJ,g9),Z[0]=g9.x,Z[4]=x7.x,Z[8]=uJ.x,Z[1]=g9.y,Z[5]=x7.y,Z[9]=uJ.y,Z[2]=g9.z,Z[6]=x7.z,Z[10]=uJ.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,K=this.elements,W=$[0],X=$[4],Y=$[8],H=$[12],U=$[1],G=$[5],F=$[9],q=$[13],E=$[2],L=$[6],I=$[10],D=$[14],O=$[3],T=$[7],M=$[11],z=$[15],_=Z[0],P=Z[4],w=Z[8],k=Z[12],B=Z[1],l=Z[5],C=Z[9],m=Z[13],o=Z[2],x=Z[6],u=Z[10],c=Z[14],g=Z[3],t=Z[7],$0=Z[11],G0=Z[15];return K[0]=W*_+X*B+Y*o+H*g,K[4]=W*P+X*l+Y*x+H*t,K[8]=W*w+X*C+Y*u+H*$0,K[12]=W*k+X*m+Y*c+H*G0,K[1]=U*_+G*B+F*o+q*g,K[5]=U*P+G*l+F*x+q*t,K[9]=U*w+G*C+F*u+q*$0,K[13]=U*k+G*m+F*c+q*G0,K[2]=E*_+L*B+I*o+D*g,K[6]=E*P+L*l+I*x+D*t,K[10]=E*w+L*C+I*u+D*$0,K[14]=E*k+L*m+I*c+D*G0,K[3]=O*_+T*B+M*o+z*g,K[7]=O*P+T*l+M*x+z*t,K[11]=O*w+T*C+M*u+z*$0,K[15]=O*k+T*m+M*c+z*G0,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],K=J[12],W=J[1],X=J[5],Y=J[9],H=J[13],U=J[2],G=J[6],F=J[10],q=J[14],E=J[3],L=J[7],I=J[11],D=J[15],O=Y*q-H*F,T=X*q-H*G,M=X*F-Y*G,z=W*q-H*U,_=W*F-Y*U,P=W*G-X*U;return Q*(L*O-I*T+D*M)-$*(E*O-I*z+D*_)+Z*(E*T-L*z+D*P)-K*(E*M-L*_+I*P)}determinantAffine(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],K=J[1],W=J[5],X=J[9],Y=J[2],H=J[6],U=J[10];return Q*(W*U-X*H)-$*(K*U-X*Y)+Z*(K*H-W*Y)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let Z=this.elements;if(J.isVector3)Z[12]=J.x,Z[13]=J.y,Z[14]=J.z;else Z[12]=J,Z[13]=Q,Z[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],X=J[5],Y=J[6],H=J[7],U=J[8],G=J[9],F=J[10],q=J[11],E=J[12],L=J[13],I=J[14],D=J[15],O=Q*X-$*W,T=Q*Y-Z*W,M=Q*H-K*W,z=$*Y-Z*X,_=$*H-K*X,P=Z*H-K*Y,w=U*L-G*E,k=U*I-F*E,B=U*D-q*E,l=G*I-F*L,C=G*D-q*L,m=F*D-q*I,o=O*m-T*C+M*l+z*B-_*k+P*w;if(o===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let x=1/o;return J[0]=(X*m-Y*C+H*l)*x,J[1]=(Z*C-$*m-K*l)*x,J[2]=(L*P-I*_+D*z)*x,J[3]=(F*_-G*P-q*z)*x,J[4]=(Y*B-W*m-H*k)*x,J[5]=(Q*m-Z*B+K*k)*x,J[6]=(I*M-E*P-D*T)*x,J[7]=(U*P-F*M+q*T)*x,J[8]=(W*C-X*B+H*w)*x,J[9]=($*B-Q*C-K*w)*x,J[10]=(E*_-L*M+D*O)*x,J[11]=(G*M-U*_-q*O)*x,J[12]=(X*k-W*l-Y*w)*x,J[13]=(Q*l-$*k+Z*w)*x,J[14]=(L*T-E*z-I*O)*x,J[15]=(U*z-G*T+F*O)*x,this}scale(J){let Q=this.elements,$=J.x,Z=J.y,K=J.z;return Q[0]*=$,Q[4]*=Z,Q[8]*=K,Q[1]*=$,Q[5]*=Z,Q[9]*=K,Q[2]*=$,Q[6]*=Z,Q[10]*=K,Q[3]*=$,Q[7]*=Z,Q[11]*=K,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Z=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,Z))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),K=1-$,W=J.x,X=J.y,Y=J.z,H=K*W,U=K*X;return this.set(H*W+$,H*X-Z*Y,H*Y+Z*X,0,H*X+Z*Y,U*X+$,U*Y-Z*W,0,H*Y-Z*X,U*Y+Z*W,K*Y*Y+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,Z,K,W){return this.set(1,$,K,0,J,1,W,0,Q,Z,1,0,0,0,0,1),this}compose(J,Q,$){let Z=this.elements,K=Q._x,W=Q._y,X=Q._z,Y=Q._w,H=K+K,U=W+W,G=X+X,F=K*H,q=K*U,E=K*G,L=W*U,I=W*G,D=X*G,O=Y*H,T=Y*U,M=Y*G,z=$.x,_=$.y,P=$.z;return Z[0]=(1-(L+D))*z,Z[1]=(q+M)*z,Z[2]=(E-T)*z,Z[3]=0,Z[4]=(q-M)*_,Z[5]=(1-(F+D))*_,Z[6]=(I+O)*_,Z[7]=0,Z[8]=(E+T)*P,Z[9]=(I-O)*P,Z[10]=(1-(F+L))*P,Z[11]=0,Z[12]=J.x,Z[13]=J.y,Z[14]=J.z,Z[15]=1,this}decompose(J,Q,$){let Z=this.elements;J.x=Z[12],J.y=Z[13],J.z=Z[14];let K=this.determinantAffine();if(K===0)return $.set(1,1,1),Q.identity(),this;let W=T8.set(Z[0],Z[1],Z[2]).length(),X=T8.set(Z[4],Z[5],Z[6]).length(),Y=T8.set(Z[8],Z[9],Z[10]).length();if(K<0)W=-W;K9.copy(this);let H=1/W,U=1/X,G=1/Y;return K9.elements[0]*=H,K9.elements[1]*=H,K9.elements[2]*=H,K9.elements[4]*=U,K9.elements[5]*=U,K9.elements[6]*=U,K9.elements[8]*=G,K9.elements[9]*=G,K9.elements[10]*=G,Q.setFromRotationMatrix(K9),$.x=W,$.y=X,$.z=Y,this}makePerspective(J,Q,$,Z,K,W,X=2000,Y=!1){let H=this.elements,U=2*K/(Q-J),G=2*K/($-Z),F=(Q+J)/(Q-J),q=($+Z)/($-Z),E,L;if(Y)E=K/(W-K),L=W*K/(W-K);else if(X===2000)E=-(W+K)/(W-K),L=-2*W*K/(W-K);else if(X===2001)E=-W/(W-K),L=-W*K/(W-K);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+X);return H[0]=U,H[4]=0,H[8]=F,H[12]=0,H[1]=0,H[5]=G,H[9]=q,H[13]=0,H[2]=0,H[6]=0,H[10]=E,H[14]=L,H[3]=0,H[7]=0,H[11]=-1,H[15]=0,this}makeOrthographic(J,Q,$,Z,K,W,X=2000,Y=!1){let H=this.elements,U=2/(Q-J),G=2/($-Z),F=-(Q+J)/(Q-J),q=-($+Z)/($-Z),E,L;if(Y)E=1/(W-K),L=W/(W-K);else if(X===2000)E=-2/(W-K),L=-(W+K)/(W-K);else if(X===2001)E=-1/(W-K),L=-K/(W-K);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+X);return H[0]=U,H[4]=0,H[8]=0,H[12]=F,H[1]=0,H[5]=G,H[9]=0,H[13]=q,H[2]=0,H[6]=0,H[10]=E,H[14]=L,H[3]=0,H[7]=0,H[11]=0,H[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<16;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var T8=new h,K9=new ZJ,wW=new h(0,0,0),TW=new h(1,1,1),g9=new h,x7=new h,uJ=new h,ZZ=new ZJ,KZ=new S9;class O9{constructor(J=0,Q=0,$=0,Z=O9.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=Z}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,Z=this._order){return this._x=J,this._y=Q,this._z=$,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let Z=J.elements,K=Z[0],W=Z[4],X=Z[8],Y=Z[1],H=Z[5],U=Z[9],G=Z[2],F=Z[6],q=Z[10];switch(Q){case"XYZ":if(this._y=Math.asin(n0(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-U,q),this._z=Math.atan2(-W,K);else this._x=Math.atan2(F,H),this._z=0;break;case"YXZ":if(this._x=Math.asin(-n0(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(X,q),this._z=Math.atan2(Y,H);else this._y=Math.atan2(-G,K),this._z=0;break;case"ZXY":if(this._x=Math.asin(n0(F,-1,1)),Math.abs(F)<0.9999999)this._y=Math.atan2(-G,q),this._z=Math.atan2(-W,H);else this._y=0,this._z=Math.atan2(Y,K);break;case"ZYX":if(this._y=Math.asin(-n0(G,-1,1)),Math.abs(G)<0.9999999)this._x=Math.atan2(F,q),this._z=Math.atan2(Y,K);else this._x=0,this._z=Math.atan2(-W,H);break;case"YZX":if(this._z=Math.asin(n0(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,H),this._y=Math.atan2(-G,K);else this._x=0,this._y=Math.atan2(X,q);break;case"XZY":if(this._z=Math.asin(-n0(W,-1,1)),Math.abs(W)<0.9999999)this._x=Math.atan2(F,H),this._y=Math.atan2(X,K);else this._x=Math.atan2(-U,q),this._y=0;break;default:T0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return ZZ.makeRotationFromQuaternion(J),this.setFromRotationMatrix(ZZ,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return KZ.setFromEuler(this),this.setFromQuaternion(KZ,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}O9.DEFAULT_ORDER="XYZ";class M7{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var SW=0,WZ=new h,S8=new S9,M9=new ZJ,g7=new h,X7=new h,jW=new h,vW=new S9,XZ=new h(1,0,0),YZ=new h(0,1,0),HZ=new h(0,0,1),UZ={type:"added"},fW={type:"removed"},j8={type:"childadded",child:null},s6={type:"childremoved",child:null};class RJ extends T9{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:SW++}),this.uuid=L7(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=RJ.DEFAULT_UP.clone();let J=new h,Q=new O9,$=new S9,Z=new h(1,1,1);function K(){$.setFromEuler(Q,!1)}function W(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(K),$._onChange(W),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new ZJ},normalMatrix:{value:new j0}}),this.matrix=new ZJ,this.matrixWorld=new ZJ,this.matrixAutoUpdate=RJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=RJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new M7,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return S8.setFromAxisAngle(J,Q),this.quaternion.multiply(S8),this}rotateOnWorldAxis(J,Q){return S8.setFromAxisAngle(J,Q),this.quaternion.premultiply(S8),this}rotateX(J){return this.rotateOnAxis(XZ,J)}rotateY(J){return this.rotateOnAxis(YZ,J)}rotateZ(J){return this.rotateOnAxis(HZ,J)}translateOnAxis(J,Q){return WZ.copy(J).applyQuaternion(this.quaternion),this.position.add(WZ.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(XZ,J)}translateY(J){return this.translateOnAxis(YZ,J)}translateZ(J){return this.translateOnAxis(HZ,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(M9.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)g7.copy(J);else g7.set(J,Q,$);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),X7.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)M9.lookAt(X7,g7,this.up);else M9.lookAt(g7,X7,this.up);if(this.quaternion.setFromRotationMatrix(M9),Z)M9.extractRotation(Z.matrixWorld),S8.setFromRotationMatrix(M9),this.quaternion.premultiply(S8.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return w0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(UZ),j8.child=J,this.dispatchEvent(j8),j8.child=null;else w0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(fW),s6.child=J,this.dispatchEvent(s6),s6.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),M9.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),M9.multiply(J.parent.matrixWorld);return J.applyMatrix4(M9),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(UZ),j8.child=J,this.dispatchEvent(j8),j8.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,Z=this.children.length;$<Z;$++){let W=this.children[$].getObjectByProperty(J,Q);if(W!==void 0)return W}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let Z=this.children;for(let K=0,W=Z.length;K<W;K++)Z[K].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(X7,J,jW),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(X7,vW,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}traverse(J){J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:$,z:Z}=J,K=this.matrix.elements;K[12]+=Q-K[0]*Q-K[4]*$-K[8]*Z,K[13]+=$-K[1]*Q-K[5]*$-K[9]*Z,K[14]+=Z-K[2]*Q-K[6]*$-K[10]*Z}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q,$=!1){let Z=this.parent;if(J===!0&&Z!==null)Z.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||$){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,$=!0}if(Q===!0){let K=this.children;for(let W=0,X=K.length;W<X;W++)K[W].updateWorldMatrix(!1,!0,$)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,this.name!=="")Z.name=this.name;if(this.castShadow===!0)Z.castShadow=!0;if(this.receiveShadow===!0)Z.receiveShadow=!0;if(this.visible===!1)Z.visible=!1;if(this.frustumCulled===!1)Z.frustumCulled=!1;if(this.renderOrder!==0)Z.renderOrder=this.renderOrder;if(this.static!==!1)Z.static=this.static;if(Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.pivot!==null)Z.pivot=this.pivot.toArray();if(this.matrixAutoUpdate===!1)Z.matrixAutoUpdate=!1;if(this.morphTargetDictionary!==void 0)Z.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)Z.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.geometryInfo=this._geometryInfo.map((X)=>({...X,boundingBox:X.boundingBox?X.boundingBox.toJSON():void 0,boundingSphere:X.boundingSphere?X.boundingSphere.toJSON():void 0})),Z.instanceInfo=this._instanceInfo.map((X)=>({...X})),Z.availableInstanceIds=this._availableInstanceIds.slice(),Z.availableGeometryIds=this._availableGeometryIds.slice(),Z.nextIndexStart=this._nextIndexStart,Z.nextVertexStart=this._nextVertexStart,Z.geometryCount=this._geometryCount,Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.matricesTexture=this._matricesTexture.toJSON(J),Z.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)Z.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)Z.boundingBox=this.boundingBox.toJSON()}function K(X,Y){if(X[Y.uuid]===void 0)X[Y.uuid]=Y.toJSON(J);return Y.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=K(J.geometries,this.geometry);let X=this.geometry.parameters;if(X!==void 0&&X.shapes!==void 0){let Y=X.shapes;if(Array.isArray(Y))for(let H=0,U=Y.length;H<U;H++){let G=Y[H];K(J.shapes,G)}else K(J.shapes,Y)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)K(J.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let X=[];for(let Y=0,H=this.material.length;Y<H;Y++)X.push(K(J.materials,this.material[Y]));Z.material=X}else Z.material=K(J.materials,this.material);if(this.children.length>0){Z.children=[];for(let X=0;X<this.children.length;X++)Z.children.push(this.children[X].toJSON(J).object)}if(this.animations.length>0){Z.animations=[];for(let X=0;X<this.animations.length;X++){let Y=this.animations[X];Z.animations.push(K(J.animations,Y))}}if(Q){let X=W(J.geometries),Y=W(J.materials),H=W(J.textures),U=W(J.images),G=W(J.shapes),F=W(J.skeletons),q=W(J.animations),E=W(J.nodes);if(X.length>0)$.geometries=X;if(Y.length>0)$.materials=Y;if(H.length>0)$.textures=H;if(U.length>0)$.images=U;if(G.length>0)$.shapes=G;if(F.length>0)$.skeletons=F;if(q.length>0)$.animations=q;if(E.length>0)$.nodes=E}return $.object=Z,$;function W(X){let Y=[];for(let H in X){let U=X[H];delete U.metadata,Y.push(U)}return Y}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let Z=J.children[$];this.add(Z.clone())}return this}}RJ.DEFAULT_UP=new h(0,1,0);RJ.DEFAULT_MATRIX_AUTO_UPDATE=!0;RJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class hJ extends RJ{constructor(){super();this.isGroup=!0,this.type="Group"}}var yW={type:"move"};class z7{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new hJ,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new hJ,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new h,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new h;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new hJ,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new h,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new h,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let Z=null,K=null,W=null,X=this._targetRay,Y=this._grip,H=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(H&&J.hand){W=!0;for(let L of J.hand.values()){let I=Q.getJointPose(L,$),D=this._getHandJoint(H,L);if(I!==null)D.matrix.fromArray(I.transform.matrix),D.matrix.decompose(D.position,D.rotation,D.scale),D.matrixWorldNeedsUpdate=!0,D.jointRadius=I.radius;D.visible=I!==null}let U=H.joints["index-finger-tip"],G=H.joints["thumb-tip"],F=U.position.distanceTo(G.position),q=0.02,E=0.005;if(H.inputState.pinching&&F>q+E)H.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!H.inputState.pinching&&F<=q-E)H.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(Y!==null&&J.gripSpace){if(K=Q.getPose(J.gripSpace,$),K!==null){if(Y.matrix.fromArray(K.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,K.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(K.linearVelocity);else Y.hasLinearVelocity=!1;if(K.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(K.angularVelocity);else Y.hasAngularVelocity=!1;if(Y.eventsEnabled)Y.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(X!==null){if(Z=Q.getPose(J.targetRaySpace,$),Z===null&&K!==null)Z=K;if(Z!==null){if(X.matrix.fromArray(Z.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.matrixWorldNeedsUpdate=!0,Z.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(Z.linearVelocity);else X.hasLinearVelocity=!1;if(Z.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(Z.angularVelocity);else X.hasAngularVelocity=!1;this.dispatchEvent(yW)}}}if(X!==null)X.visible=Z!==null;if(Y!==null)Y.visible=K!==null;if(H!==null)H.visible=W!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new hJ;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}var IK={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},p9={h:0,s:0,l:0},p7={h:0,s:0,l:0};function i6(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class m0{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let Z=J;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,u0.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,Z=u0.workingColorSpace){return this.r=J,this.g=Q,this.b=$,u0.colorSpaceToWorking(this,Z),this}setHSL(J,Q,$,Z=u0.workingColorSpace){if(J=AW(J,1),Q=n0(Q,0,1),$=n0($,0,1),Q===0)this.r=this.g=this.b=$;else{let K=$<=0.5?$*(1+Q):$+Q-$*Q,W=2*$-K;this.r=i6(W,K,J+0.3333333333333333),this.g=i6(W,K,J),this.b=i6(W,K,J-0.3333333333333333)}return u0.colorSpaceToWorking(this,Z),this}setStyle(J,Q="srgb"){function $(K){if(K===void 0)return;if(parseFloat(K)<1)T0("Color: Alpha component of "+J+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec(J)){let K,W=Z[1],X=Z[2];switch(W){case"rgb":case"rgba":if(K=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(K[4]),this.setRGB(Math.min(255,parseInt(K[1],10))/255,Math.min(255,parseInt(K[2],10))/255,Math.min(255,parseInt(K[3],10))/255,Q);if(K=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(K[4]),this.setRGB(Math.min(100,parseInt(K[1],10))/100,Math.min(100,parseInt(K[2],10))/100,Math.min(100,parseInt(K[3],10))/100,Q);break;case"hsl":case"hsla":if(K=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(K[4]),this.setHSL(parseFloat(K[1])/360,parseFloat(K[2])/100,parseFloat(K[3])/100,Q);break;default:T0("Color: Unknown color model "+J)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec(J)){let K=Z[1],W=K.length;if(W===3)return this.setRGB(parseInt(K.charAt(0),16)/15,parseInt(K.charAt(1),16)/15,parseInt(K.charAt(2),16)/15,Q);else if(W===6)return this.setHex(parseInt(K,16),Q);else T0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=IK[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else T0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=C9(J.r),this.g=C9(J.g),this.b=C9(J.b),this}copyLinearToSRGB(J){return this.r=l8(J.r),this.g=l8(J.g),this.b=l8(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return u0.workingToColorSpace(vJ.copy(this),J),Math.round(n0(vJ.r*255,0,255))*65536+Math.round(n0(vJ.g*255,0,255))*256+Math.round(n0(vJ.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=u0.workingColorSpace){u0.workingToColorSpace(vJ.copy(this),Q);let{r:$,g:Z,b:K}=vJ,W=Math.max($,Z,K),X=Math.min($,Z,K),Y,H,U=(X+W)/2;if(X===W)Y=0,H=0;else{let G=W-X;switch(H=U<=0.5?G/(W+X):G/(2-W-X),W){case $:Y=(Z-K)/G+(Z<K?6:0);break;case Z:Y=(K-$)/G+2;break;case K:Y=($-Z)/G+4;break}Y/=6}return J.h=Y,J.s=H,J.l=U,J}getRGB(J,Q=u0.workingColorSpace){return u0.workingToColorSpace(vJ.copy(this),Q),J.r=vJ.r,J.g=vJ.g,J.b=vJ.b,J}getStyle(J="srgb"){u0.workingToColorSpace(vJ.copy(this),J);let{r:Q,g:$,b:Z}=vJ;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(Z*255)})`}offsetHSL(J,Q,$){return this.getHSL(p9),this.setHSL(p9.h+J,p9.s+Q,p9.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(p9),J.getHSL(p7);let $=l6(p9.h,p7.h,Q),Z=l6(p9.s,p7.s,Q),K=l6(p9.l,p7.l,Q);return this.setHSL($,Z,K),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,Z=this.b,K=J.elements;return this.r=K[0]*Q+K[3]*$+K[6]*Z,this.g=K[1]*Q+K[4]*$+K[7]*Z,this.b=K[2]*Q+K[5]*$+K[8]*Z,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var vJ=new m0;m0.NAMES=IK;class o8 extends RJ{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new O9,this.environmentIntensity=1,this.environmentRotation=new O9,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)Q.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)Q.object.backgroundIntensity=this.backgroundIntensity;if(Q.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)Q.object.environmentIntensity=this.environmentIntensity;return Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var W9=new h,z9=new h,o6=new h,B9=new h,v8=new h,f8=new h,qZ=new h,a6=new h,r6=new h,t6=new h,e6=new UJ,JQ=new UJ,QQ=new UJ;class aJ{constructor(J=new h,Q=new h,$=new h){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,Z){Z.subVectors($,Q),W9.subVectors(J,Q),Z.cross(W9);let K=Z.lengthSq();if(K>0)return Z.multiplyScalar(1/Math.sqrt(K));return Z.set(0,0,0)}static getBarycoord(J,Q,$,Z,K){W9.subVectors(Z,Q),z9.subVectors($,Q),o6.subVectors(J,Q);let W=W9.dot(W9),X=W9.dot(z9),Y=W9.dot(o6),H=z9.dot(z9),U=z9.dot(o6),G=W*H-X*X;if(G===0)return K.set(0,0,0),null;let F=1/G,q=(H*Y-X*U)*F,E=(W*U-X*Y)*F;return K.set(1-q-E,E,q)}static containsPoint(J,Q,$,Z){if(this.getBarycoord(J,Q,$,Z,B9)===null)return!1;return B9.x>=0&&B9.y>=0&&B9.x+B9.y<=1}static getInterpolation(J,Q,$,Z,K,W,X,Y){if(this.getBarycoord(J,Q,$,Z,B9)===null){if(Y.x=0,Y.y=0,"z"in Y)Y.z=0;if("w"in Y)Y.w=0;return null}return Y.setScalar(0),Y.addScaledVector(K,B9.x),Y.addScaledVector(W,B9.y),Y.addScaledVector(X,B9.z),Y}static getInterpolatedAttribute(J,Q,$,Z,K,W){return e6.setScalar(0),JQ.setScalar(0),QQ.setScalar(0),e6.fromBufferAttribute(J,Q),JQ.fromBufferAttribute(J,$),QQ.fromBufferAttribute(J,Z),W.setScalar(0),W.addScaledVector(e6,K.x),W.addScaledVector(JQ,K.y),W.addScaledVector(QQ,K.z),W}static isFrontFacing(J,Q,$,Z){return W9.subVectors($,Q),z9.subVectors(J,Q),W9.cross(z9).dot(Z)<0}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,Z){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[Z]),this}setFromAttributeAndIndices(J,Q,$,Z){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,Z),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return W9.subVectors(this.c,this.b),z9.subVectors(this.a,this.b),W9.cross(z9).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return aJ.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return aJ.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,Z,K){return aJ.getInterpolation(J,this.a,this.b,this.c,Q,$,Z,K)}containsPoint(J){return aJ.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return aJ.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,Z=this.b,K=this.c,W,X;v8.subVectors(Z,$),f8.subVectors(K,$),a6.subVectors(J,$);let Y=v8.dot(a6),H=f8.dot(a6);if(Y<=0&&H<=0)return Q.copy($);r6.subVectors(J,Z);let U=v8.dot(r6),G=f8.dot(r6);if(U>=0&&G<=U)return Q.copy(Z);let F=Y*G-U*H;if(F<=0&&Y>=0&&U<=0)return W=Y/(Y-U),Q.copy($).addScaledVector(v8,W);t6.subVectors(J,K);let q=v8.dot(t6),E=f8.dot(t6);if(E>=0&&q<=E)return Q.copy(K);let L=q*H-Y*E;if(L<=0&&H>=0&&E<=0)return X=H/(H-E),Q.copy($).addScaledVector(f8,X);let I=U*E-q*G;if(I<=0&&G-U>=0&&q-E>=0)return qZ.subVectors(K,Z),X=(G-U)/(G-U+(q-E)),Q.copy(Z).addScaledVector(qZ,X);let D=1/(I+L+F);return W=L*D,X=F*D,Q.copy($).addScaledVector(v8,W).addScaledVector(f8,X)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class j9{constructor(J=new h(1/0,1/0,1/0),Q=new h(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(X9.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(X9.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=X9.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let K=$.getAttribute("position");if(Q===!0&&K!==void 0&&J.isInstancedMesh!==!0)for(let W=0,X=K.count;W<X;W++){if(J.isMesh===!0)J.getVertexPosition(W,X9);else X9.fromBufferAttribute(K,W);X9.applyMatrix4(J.matrixWorld),this.expandByPoint(X9)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();m7.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();m7.copy($.boundingBox)}m7.applyMatrix4(J.matrixWorld),this.union(m7)}}let Z=J.children;for(let K=0,W=Z.length;K<W;K++)this.expandByObject(Z[K],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,X9),X9.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(Y7),l7.subVectors(this.max,Y7),y8.subVectors(J.a,Y7),b8.subVectors(J.b,Y7),h8.subVectors(J.c,Y7),m9.subVectors(b8,y8),l9.subVectors(h8,b8),J8.subVectors(y8,h8);let Q=[0,-m9.z,m9.y,0,-l9.z,l9.y,0,-J8.z,J8.y,m9.z,0,-m9.x,l9.z,0,-l9.x,J8.z,0,-J8.x,-m9.y,m9.x,0,-l9.y,l9.x,0,-J8.y,J8.x,0];if(!$Q(Q,y8,b8,h8,l7))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!$Q(Q,y8,b8,h8,l7))return!1;return d7.crossVectors(m9,l9),Q=[d7.x,d7.y,d7.z],$Q(Q,y8,b8,h8,l7)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,X9).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(X9).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return I9[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),I9[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),I9[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),I9[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),I9[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),I9[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),I9[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),I9[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(I9),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var I9=[new h,new h,new h,new h,new h,new h,new h,new h],X9=new h,m7=new j9,y8=new h,b8=new h,h8=new h,m9=new h,l9=new h,J8=new h,Y7=new h,l7=new h,d7=new h,Q8=new h;function $Q(J,Q,$,Z,K){for(let W=0,X=J.length-3;W<=X;W+=3){Q8.fromArray(J,W);let Y=K.x*Math.abs(Q8.x)+K.y*Math.abs(Q8.y)+K.z*Math.abs(Q8.z),H=Q.dot(Q8),U=$.dot(Q8),G=Z.dot(Q8);if(Math.max(-Math.max(H,U,G),Math.min(H,U,G))>Y)return!1}return!0}var LJ=new h,u7=new p0,bW=0;class nJ extends T9{constructor(J,Q,$=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bW++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let Z=0,K=this.itemSize;Z<K;Z++)this.array[J+Z]=Q.array[$+Z];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)u7.fromBufferAttribute(this,Q),u7.applyMatrix3(J),this.setXY(Q,u7.x,u7.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)LJ.fromBufferAttribute(this,Q),LJ.applyMatrix3(J),this.setXYZ(Q,LJ.x,LJ.y,LJ.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)LJ.fromBufferAttribute(this,Q),LJ.applyMatrix4(J),this.setXYZ(Q,LJ.x,LJ.y,LJ.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)LJ.fromBufferAttribute(this,Q),LJ.applyNormalMatrix(J),this.setXYZ(Q,LJ.x,LJ.y,LJ.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)LJ.fromBufferAttribute(this,Q),LJ.transformDirection(J),this.setXYZ(Q,LJ.x,LJ.y,LJ.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=W7($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=mJ($,this.array);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=W7(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=mJ(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=W7(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=mJ(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=W7(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=mJ(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=W7(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=mJ(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=mJ(Q,this.array),$=mJ($,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J*=this.itemSize,this.normalized)Q=mJ(Q,this.array),$=mJ($,this.array),Z=mJ(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this}setXYZW(J,Q,$,Z,K){if(J*=this.itemSize,this.normalized)Q=mJ(Q,this.array),$=mJ($,this.array),Z=mJ(Z,this.array),K=mJ(K,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this.array[J+3]=K,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")J.name=this.name;if(this.usage!==35044)J.usage=this.usage;return J}dispose(){this.dispatchEvent({type:"dispose"})}}class V6 extends nJ{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class M6 extends nJ{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class lJ extends nJ{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var hW=new j9,H7=new h,ZQ=new h;class G8{constructor(J=new h,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else hW.setFromPoints(J).getCenter($);let Z=0;for(let K=0,W=J.length;K<W;K++)Z=Math.max(Z,$.distanceToSquared(J[K]));return this.radius=Math.sqrt(Z),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;H7.subVectors(J,this.center);let Q=H7.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),Z=($-this.radius)*0.5;this.center.addScaledVector(H7,Z/$),this.radius+=Z}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else ZQ.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(H7.copy(J.center).add(ZQ)),this.expandByPoint(H7.copy(J.center).sub(ZQ));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var xW=0,oJ=new ZJ,KQ=new RJ,x8=new h,cJ=new j9,U7=new j9,PJ=new h;class U9 extends T9{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xW++}),this.uuid=L7(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((BW(J))?M6:V6)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let K=new j0().getNormalMatrix(J);$.applyNormalMatrix(K),$.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection(J),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return oJ.makeRotationFromQuaternion(J),this.applyMatrix4(oJ),this}rotateX(J){return oJ.makeRotationX(J),this.applyMatrix4(oJ),this}rotateY(J){return oJ.makeRotationY(J),this.applyMatrix4(oJ),this}rotateZ(J){return oJ.makeRotationZ(J),this.applyMatrix4(oJ),this}translate(J,Q,$){return oJ.makeTranslation(J,Q,$),this.applyMatrix4(oJ),this}scale(J,Q,$){return oJ.makeScale(J,Q,$),this.applyMatrix4(oJ),this}lookAt(J){return KQ.lookAt(J),KQ.updateMatrix(),this.applyMatrix4(KQ.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(x8).negate(),this.translate(x8.x,x8.y,x8.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let Z=0,K=J.length;Z<K;Z++){let W=J[Z];$.push(W.x,W.y,W.z||0)}this.setAttribute("position",new lJ($,3))}else{let $=Math.min(J.length,Q.count);for(let Z=0;Z<$;Z++){let K=J[Z];Q.setXYZ(Z,K.x,K.y,K.z||0)}if(J.length>Q.count)T0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new j9;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){w0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new h(-1/0,-1/0,-1/0),new h(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,Z=Q.length;$<Z;$++){let K=Q[$];if(cJ.setFromBufferAttribute(K),this.morphTargetsRelative)PJ.addVectors(this.boundingBox.min,cJ.min),this.boundingBox.expandByPoint(PJ),PJ.addVectors(this.boundingBox.max,cJ.max),this.boundingBox.expandByPoint(PJ);else this.boundingBox.expandByPoint(cJ.min),this.boundingBox.expandByPoint(cJ.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))w0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new G8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){w0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new h,1/0);return}if(J){let $=this.boundingSphere.center;if(cJ.setFromBufferAttribute(J),Q)for(let K=0,W=Q.length;K<W;K++){let X=Q[K];if(U7.setFromBufferAttribute(X),this.morphTargetsRelative)PJ.addVectors(cJ.min,U7.min),cJ.expandByPoint(PJ),PJ.addVectors(cJ.max,U7.max),cJ.expandByPoint(PJ);else cJ.expandByPoint(U7.min),cJ.expandByPoint(U7.max)}cJ.getCenter($);let Z=0;for(let K=0,W=J.count;K<W;K++)PJ.fromBufferAttribute(J,K),Z=Math.max(Z,$.distanceToSquared(PJ));if(Q)for(let K=0,W=Q.length;K<W;K++){let X=Q[K],Y=this.morphTargetsRelative;for(let H=0,U=X.count;H<U;H++){if(PJ.fromBufferAttribute(X,H),Y)x8.fromBufferAttribute(J,H),PJ.add(x8);Z=Math.max(Z,$.distanceToSquared(PJ))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))w0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){w0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:Z,uv:K}=Q,W=this.getAttribute("tangent");if(W===void 0||W.count!==$.count)W=new nJ(new Float32Array(4*$.count),4),this.setAttribute("tangent",W);let X=[],Y=[];for(let w=0;w<$.count;w++)X[w]=new h,Y[w]=new h;let H=new h,U=new h,G=new h,F=new p0,q=new p0,E=new p0,L=new h,I=new h;function D(w,k,B){H.fromBufferAttribute($,w),U.fromBufferAttribute($,k),G.fromBufferAttribute($,B),F.fromBufferAttribute(K,w),q.fromBufferAttribute(K,k),E.fromBufferAttribute(K,B),U.sub(H),G.sub(H),q.sub(F),E.sub(F);let l=1/(q.x*E.y-E.x*q.y);if(!isFinite(l))return;L.copy(U).multiplyScalar(E.y).addScaledVector(G,-q.y).multiplyScalar(l),I.copy(G).multiplyScalar(q.x).addScaledVector(U,-E.x).multiplyScalar(l),X[w].add(L),X[k].add(L),X[B].add(L),Y[w].add(I),Y[k].add(I),Y[B].add(I)}let O=this.groups;if(O.length===0)O=[{start:0,count:J.count}];for(let w=0,k=O.length;w<k;++w){let B=O[w],l=B.start,C=B.count;for(let m=l,o=l+C;m<o;m+=3)D(J.getX(m+0),J.getX(m+1),J.getX(m+2))}let T=new h,M=new h,z=new h,_=new h;function P(w){z.fromBufferAttribute(Z,w),_.copy(z);let k=X[w];T.copy(k),T.sub(z.multiplyScalar(z.dot(k))).normalize(),M.crossVectors(_,k);let l=M.dot(Y[w])<0?-1:1;W.setXYZW(w,T.x,T.y,T.z,l)}for(let w=0,k=O.length;w<k;++w){let B=O[w],l=B.start,C=B.count;for(let m=l,o=l+C;m<o;m+=3)P(J.getX(m+0)),P(J.getX(m+1)),P(J.getX(m+2))}this._transformed=!0}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0||$.count!==Q.count)$=new nJ(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let F=0,q=$.count;F<q;F++)$.setXYZ(F,0,0,0);let Z=new h,K=new h,W=new h,X=new h,Y=new h,H=new h,U=new h,G=new h;if(J)for(let F=0,q=J.count;F<q;F+=3){let E=J.getX(F+0),L=J.getX(F+1),I=J.getX(F+2);Z.fromBufferAttribute(Q,E),K.fromBufferAttribute(Q,L),W.fromBufferAttribute(Q,I),U.subVectors(W,K),G.subVectors(Z,K),U.cross(G),X.fromBufferAttribute($,E),Y.fromBufferAttribute($,L),H.fromBufferAttribute($,I),X.add(U),Y.add(U),H.add(U),$.setXYZ(E,X.x,X.y,X.z),$.setXYZ(L,Y.x,Y.y,Y.z),$.setXYZ(I,H.x,H.y,H.z)}else for(let F=0,q=Q.count;F<q;F+=3)Z.fromBufferAttribute(Q,F+0),K.fromBufferAttribute(Q,F+1),W.fromBufferAttribute(Q,F+2),U.subVectors(W,K),G.subVectors(Z,K),U.cross(G),$.setXYZ(F+0,U.x,U.y,U.z),$.setXYZ(F+1,U.x,U.y,U.z),$.setXYZ(F+2,U.x,U.y,U.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)PJ.fromBufferAttribute(J,Q),PJ.normalize(),J.setXYZ(Q,PJ.x,PJ.y,PJ.z)}toNonIndexed(){function J(X,Y){let{array:H,itemSize:U,normalized:G}=X,F=new H.constructor(Y.length*U),q=0,E=0;for(let L=0,I=Y.length;L<I;L++){if(X.isInterleavedBufferAttribute)q=Y[L]*X.data.stride+X.offset;else q=Y[L]*U;for(let D=0;D<U;D++)F[E++]=H[q++]}return new nJ(F,U,G)}if(this.index===null)return T0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new U9,$=this.index.array,Z=this.attributes;for(let X in Z){let Y=Z[X],H=J(Y,$);Q.setAttribute(X,H)}let K=this.morphAttributes;for(let X in K){let Y=[],H=K[X];for(let U=0,G=H.length;U<G;U++){let F=H[U],q=J(F,$);Y.push(q)}Q.morphAttributes[X]=Y}Q.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;for(let X=0,Y=W.length;X<Y;X++){let H=W[X];Q.addGroup(H.start,H.count,H.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!=="")J.name=this.name;if(Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let Y=this.parameters;for(let H in Y)if(Y[H]!==void 0)J[H]=Y[H];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let Y in $){let H=$[Y];J.data.attributes[Y]=H.toJSON(J.data)}let Z={},K=!1;for(let Y in this.morphAttributes){let H=this.morphAttributes[Y],U=[];for(let G=0,F=H.length;G<F;G++){let q=H[G];U.push(q.toJSON(J.data))}if(U.length>0)Z[Y]=U,K=!0}if(K)J.data.morphAttributes=Z,J.data.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;if(W.length>0)J.data.groups=JSON.parse(JSON.stringify(W));let X=this.boundingSphere;if(X!==null)J.data.boundingSphere=X.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let Z=J.attributes;for(let H in Z){let U=Z[H];this.setAttribute(H,U.clone(Q))}let K=J.morphAttributes;for(let H in K){let U=[],G=K[H];for(let F=0,q=G.length;F<q;F++)U.push(G[F].clone(Q));this.morphAttributes[H]=U}this.morphTargetsRelative=J.morphTargetsRelative;let W=J.groups;for(let H=0,U=W.length;H<U;H++){let G=W[H];this.addGroup(G.start,G.count,G.materialIndex)}let X=J.boundingBox;if(X!==null)this.boundingBox=X.clone();let Y=J.boundingSphere;if(Y!==null)this.boundingSphere=Y.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}var gW=0;class s9 extends T9{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:gW++}),this.uuid=L7(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new m0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){T0(`Material: parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){T0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set($);else if(Z&&Z.isVector2&&($&&$.isVector2)||Z&&Z.isEuler&&($&&$.isEuler)||Z&&Z.isVector3&&($&&$.isVector3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,this.name!=="")$.name=this.name;if(this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)$.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)$.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)$.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.shadowSide!==null)$.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)$.blending=this.blending;if(this.side!==0)$.side=this.side;if(this.vertexColors===!0)$.vertexColors=!0;if(this.opacity<1)$.opacity=this.opacity;if(this.transparent===!0)$.transparent=!0;if(this.blendSrc!==204)$.blendSrc=this.blendSrc;if(this.blendDst!==205)$.blendDst=this.blendDst;if(this.blendEquation!==100)$.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)$.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)$.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)$.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)$.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)$.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)$.depthFunc=this.depthFunc;if(this.depthTest===!1)$.depthTest=this.depthTest;if(this.depthWrite===!1)$.depthWrite=this.depthWrite;if(this.colorWrite===!1)$.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)$.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)$.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)$.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)$.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)$.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)$.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)$.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)$.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)$.rotation=this.rotation;if(this.polygonOffset===!0)$.polygonOffset=!0;if(this.polygonOffsetFactor!==0)$.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)$.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)$.linewidth=this.linewidth;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.dithering===!0)$.dithering=!0;if(this.alphaTest>0)$.alphaTest=this.alphaTest;if(this.alphaHash===!0)$.alphaHash=!0;if(this.alphaToCoverage===!0)$.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)$.premultipliedAlpha=!0;if(this.forceSinglePass===!0)$.forceSinglePass=!0;if(this.allowOverride===!1)$.allowOverride=!1;if(this.wireframe===!0)$.wireframe=!0;if(this.wireframeLinewidth>1)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)$.flatShading=!0;if(this.visible===!1)$.visible=!1;if(this.toneMapped===!1)$.toneMapped=!1;if(this.fog===!1)$.fog=!1;if(Object.keys(this.userData).length>0)$.userData=this.userData;function Z(K){let W=[];for(let X in K){let Y=K[X];delete Y.metadata,W.push(Y)}return W}if(Q){let K=Z(J.textures),W=Z(J.images);if(K.length>0)$.textures=K;if(W.length>0)$.images=W}return $}fromJSON(J,Q){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new m0().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=J.iridescenceThicknessRange;if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=Q[J.map]||null;if(J.matcap!==void 0)this.matcap=Q[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=Q[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=Q[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=Q[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let $=J.normalScale;if(Array.isArray($)===!1)$=[$,$];this.normalScale=new p0().fromArray($)}if(J.displacementMap!==void 0)this.displacementMap=Q[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=Q[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=Q[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=Q[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=Q[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=Q[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=Q[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=Q[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=Q[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=Q[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=Q[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=Q[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=Q[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=Q[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new p0().fromArray(J.clearcoatNormalScale);if(J.iridescenceMap!==void 0)this.iridescenceMap=Q[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=Q[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=Q[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=Q[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=Q[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=Q[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=Q[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let Z=Q.length;$=Array(Z);for(let K=0;K!==Z;++K)$[K]=Q[K].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}var A9=new h,WQ=new h,c7=new h,d9=new h,XQ=new h,n7=new h,YQ=new h;class z6{constructor(J=new h,Q=new h(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,A9)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=A9.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return A9.copy(this.origin).addScaledVector(this.direction,Q),A9.distanceToSquared(J)}distanceSqToSegment(J,Q,$,Z){WQ.copy(J).add(Q).multiplyScalar(0.5),c7.copy(Q).sub(J).normalize(),d9.copy(this.origin).sub(WQ);let K=J.distanceTo(Q)*0.5,W=-this.direction.dot(c7),X=d9.dot(this.direction),Y=-d9.dot(c7),H=d9.lengthSq(),U=Math.abs(1-W*W),G,F,q,E;if(U>0)if(G=W*Y-X,F=W*X-Y,E=K*U,G>=0)if(F>=-E)if(F<=E){let L=1/U;G*=L,F*=L,q=G*(G+W*F+2*X)+F*(W*G+F+2*Y)+H}else F=K,G=Math.max(0,-(W*F+X)),q=-G*G+F*(F+2*Y)+H;else F=-K,G=Math.max(0,-(W*F+X)),q=-G*G+F*(F+2*Y)+H;else if(F<=-E)G=Math.max(0,-(-W*K+X)),F=G>0?-K:Math.min(Math.max(-K,-Y),K),q=-G*G+F*(F+2*Y)+H;else if(F<=E)G=0,F=Math.min(Math.max(-K,-Y),K),q=F*(F+2*Y)+H;else G=Math.max(0,-(W*K+X)),F=G>0?K:Math.min(Math.max(-K,-Y),K),q=-G*G+F*(F+2*Y)+H;else F=W>0?-K:K,G=Math.max(0,-(W*F+X)),q=-G*G+F*(F+2*Y)+H;if($)$.copy(this.origin).addScaledVector(this.direction,G);if(Z)Z.copy(WQ).addScaledVector(c7,F);return q}intersectSphere(J,Q){A9.subVectors(J.center,this.origin);let $=A9.dot(this.direction),Z=A9.dot(A9)-$*$,K=J.radius*J.radius;if(Z>K)return null;let W=Math.sqrt(K-Z),X=$-W,Y=$+W;if(Y<0)return null;if(X<0)return this.at(Y,Q);return this.at(X,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,Z,K,W,X,Y,H=1/this.direction.x,U=1/this.direction.y,G=1/this.direction.z,F=this.origin;if(H>=0)$=(J.min.x-F.x)*H,Z=(J.max.x-F.x)*H;else $=(J.max.x-F.x)*H,Z=(J.min.x-F.x)*H;if(U>=0)K=(J.min.y-F.y)*U,W=(J.max.y-F.y)*U;else K=(J.max.y-F.y)*U,W=(J.min.y-F.y)*U;if($>W||K>Z)return null;if(K>$||isNaN($))$=K;if(W<Z||isNaN(Z))Z=W;if(G>=0)X=(J.min.z-F.z)*G,Y=(J.max.z-F.z)*G;else X=(J.max.z-F.z)*G,Y=(J.min.z-F.z)*G;if($>Y||X>Z)return null;if(X>$||$!==$)$=X;if(Y<Z||Z!==Z)Z=Y;if(Z<0)return null;return this.at($>=0?$:Z,Q)}intersectsBox(J){return this.intersectBox(J,A9)!==null}intersectTriangle(J,Q,$,Z,K){XQ.subVectors(Q,J),n7.subVectors($,J),YQ.crossVectors(XQ,n7);let W=this.direction.dot(YQ),X;if(W>0){if(Z)return null;X=1}else if(W<0)X=-1,W=-W;else return null;d9.subVectors(this.origin,J);let Y=X*this.direction.dot(n7.crossVectors(d9,n7));if(Y<0)return null;let H=X*this.direction.dot(XQ.cross(d9));if(H<0)return null;if(Y+H>W)return null;let U=-X*d9.dot(YQ);if(U<0)return null;return this.at(U/W,K)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xJ extends s9{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new m0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new O9,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var GZ=new ZJ,$8=new z6,s7=new G8,NZ=new h,i7=new h,o7=new h,a7=new h,HQ=new h,r7=new h,FZ=new h,t7=new h;class S0 extends RJ{constructor(J=new U9,Q=new xJ){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let K=0,W=Z.length;K<W;K++){let X=Z[K].name||String(K);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=K}}}}getVertexPosition(J,Q){let $=this.geometry,Z=$.attributes.position,K=$.morphAttributes.position,W=$.morphTargetsRelative;Q.fromBufferAttribute(Z,J);let X=this.morphTargetInfluences;if(K&&X){r7.set(0,0,0);for(let Y=0,H=K.length;Y<H;Y++){let U=X[Y],G=K[Y];if(U===0)continue;if(HQ.fromBufferAttribute(G,J),W)r7.addScaledVector(HQ,U);else r7.addScaledVector(HQ.sub(Q),U)}Q.add(r7)}return Q}raycast(J,Q){let $=this.geometry,Z=this.material,K=this.matrixWorld;if(Z===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(s7.copy($.boundingSphere),s7.applyMatrix4(K),$8.copy(J.ray).recast(J.near),s7.containsPoint($8.origin)===!1){if($8.intersectSphere(s7,NZ)===null)return;if($8.origin.distanceToSquared(NZ)>(J.far-J.near)**2)return}if(GZ.copy(K).invert(),$8.copy(J.ray).applyMatrix4(GZ),$.boundingBox!==null){if($8.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,$8)}_computeIntersections(J,Q,$){let Z,K=this.geometry,W=this.material,X=K.index,Y=K.attributes.position,H=K.attributes.uv,U=K.attributes.uv1,G=K.attributes.normal,F=K.groups,q=K.drawRange;if(X!==null)if(Array.isArray(W))for(let E=0,L=F.length;E<L;E++){let I=F[E],D=W[I.materialIndex],O=Math.max(I.start,q.start),T=Math.min(X.count,Math.min(I.start+I.count,q.start+q.count));for(let M=O,z=T;M<z;M+=3){let _=X.getX(M),P=X.getX(M+1),w=X.getX(M+2);if(Z=e7(this,D,J,$,H,U,G,_,P,w),Z)Z.faceIndex=Math.floor(M/3),Z.face.materialIndex=I.materialIndex,Q.push(Z)}}else{let E=Math.max(0,q.start),L=Math.min(X.count,q.start+q.count);for(let I=E,D=L;I<D;I+=3){let O=X.getX(I),T=X.getX(I+1),M=X.getX(I+2);if(Z=e7(this,W,J,$,H,U,G,O,T,M),Z)Z.faceIndex=Math.floor(I/3),Q.push(Z)}}else if(Y!==void 0)if(Array.isArray(W))for(let E=0,L=F.length;E<L;E++){let I=F[E],D=W[I.materialIndex],O=Math.max(I.start,q.start),T=Math.min(Y.count,Math.min(I.start+I.count,q.start+q.count));for(let M=O,z=T;M<z;M+=3){let _=M,P=M+1,w=M+2;if(Z=e7(this,D,J,$,H,U,G,_,P,w),Z)Z.faceIndex=Math.floor(M/3),Z.face.materialIndex=I.materialIndex,Q.push(Z)}}else{let E=Math.max(0,q.start),L=Math.min(Y.count,q.start+q.count);for(let I=E,D=L;I<D;I+=3){let O=I,T=I+1,M=I+2;if(Z=e7(this,W,J,$,H,U,G,O,T,M),Z)Z.faceIndex=Math.floor(I/3),Q.push(Z)}}}}function pW(J,Q,$,Z,K,W,X,Y){let H;if(Q.side===1)H=Z.intersectTriangle(X,W,K,!0,Y);else H=Z.intersectTriangle(K,W,X,Q.side===0,Y);if(H===null)return null;t7.copy(Y),t7.applyMatrix4(J.matrixWorld);let U=$.ray.origin.distanceTo(t7);if(U<$.near||U>$.far)return null;return{distance:U,point:t7.clone(),object:J}}function e7(J,Q,$,Z,K,W,X,Y,H,U){J.getVertexPosition(Y,i7),J.getVertexPosition(H,o7),J.getVertexPosition(U,a7);let G=pW(J,Q,$,Z,i7,o7,a7,FZ);if(G){let F=new h;if(aJ.getBarycoord(FZ,i7,o7,a7,F),K)G.uv=aJ.getInterpolatedAttribute(K,Y,H,U,F,new p0);if(W)G.uv1=aJ.getInterpolatedAttribute(W,Y,H,U,F,new p0);if(X){if(G.normal=aJ.getInterpolatedAttribute(X,Y,H,U,F,new h),G.normal.dot(Z.direction)>0)G.normal.multiplyScalar(-1)}let q={a:Y,b:H,c:U,normal:new h,materialIndex:0};aJ.getNormal(i7,o7,a7,q.normal),G.face=q,G.barycoord=F}return G}class B6 extends _J{constructor(J=null,Q=1,$=1,Z,K,W,X,Y,H=1003,U=1003,G,F){super(null,W,X,Y,H,U,Z,K,G,F);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class X6 extends nJ{constructor(J,Q,$,Z=1){super(J,Q,$);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=Z}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var g8=new ZJ,OZ=new ZJ,J6=[],DZ=new j9,mW=new ZJ,q7=new S0,G7=new G8;class a8 extends S0{constructor(J,Q,$){super(J,Q);this.isInstancedMesh=!0,this.instanceMatrix=new X6(new Float32Array($*16),16),this.instanceColor=null,this.morphTexture=null,this.count=$,this.boundingBox=null,this.boundingSphere=null;for(let Z=0;Z<$;Z++)this.setMatrixAt(Z,mW)}computeBoundingBox(){let J=this.geometry,Q=this.count;if(this.boundingBox===null)this.boundingBox=new j9;if(J.boundingBox===null)J.computeBoundingBox();this.boundingBox.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,g8),DZ.copy(J.boundingBox).applyMatrix4(g8),this.boundingBox.union(DZ)}computeBoundingSphere(){let J=this.geometry,Q=this.count;if(this.boundingSphere===null)this.boundingSphere=new G8;if(J.boundingSphere===null)J.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,g8),G7.copy(J.boundingSphere).applyMatrix4(g8),this.boundingSphere.union(G7)}copy(J,Q){if(super.copy(J,Q),this.instanceMatrix.copy(J.instanceMatrix),J.morphTexture!==null)this.morphTexture=J.morphTexture.clone();if(J.instanceColor!==null)this.instanceColor=J.instanceColor.clone();if(this.count=J.count,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}getColorAt(J,Q){if(this.instanceColor===null)return Q.setRGB(1,1,1);else return Q.fromArray(this.instanceColor.array,J*3)}getMatrixAt(J,Q){return Q.fromArray(this.instanceMatrix.array,J*16)}getMorphAt(J,Q){let $=Q.morphTargetInfluences,Z=this.morphTexture.source.data.data,K=$.length+1,W=J*K+1;for(let X=0;X<$.length;X++)$[X]=Z[W+X]}raycast(J,Q){let $=this.matrixWorld,Z=this.count;if(q7.geometry=this.geometry,q7.material=this.material,q7.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(G7.copy(this.boundingSphere),G7.applyMatrix4($),J.ray.intersectsSphere(G7)===!1)return;for(let K=0;K<Z;K++){this.getMatrixAt(K,g8),OZ.multiplyMatrices($,g8),q7.matrixWorld=OZ,q7.raycast(J,J6);for(let W=0,X=J6.length;W<X;W++){let Y=J6[W];Y.instanceId=K,Y.object=this,Q.push(Y)}J6.length=0}}setColorAt(J,Q){if(this.instanceColor===null)this.instanceColor=new X6(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return Q.toArray(this.instanceColor.array,J*3),this}setMatrixAt(J,Q){return Q.toArray(this.instanceMatrix.array,J*16),this}setMorphAt(J,Q){let $=Q.morphTargetInfluences,Z=$.length+1;if(this.morphTexture===null)this.morphTexture=new B6(new Float32Array(Z*this.count),Z,this.count,1028,1015);let K=this.morphTexture.source.data.data,W=0;for(let H=0;H<$.length;H++)W+=$[H];let X=this.geometry.morphTargetsRelative?1:1-W,Y=Z*J;return K[Y]=X,K.set($,Y+1),this}updateMorphTargets(){}dispose(){if(this.dispatchEvent({type:"dispose"}),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var UQ=new h,lW=new h,dW=new j0;class P9{constructor(J=new h(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,Z){return this.normal.set(J,Q,$),this.constant=Z,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let Z=UQ.subVectors($,Q).cross(lW.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(Z,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,$=!0){let Z=J.delta(UQ),K=this.normal.dot(Z);if(K===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let W=-(J.start.dot(this.normal)+this.constant)/K;if($===!0&&(W<0||W>1))return null;return Q.copy(J.start).addScaledVector(Z,W)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||dW.getNormalMatrix(J),Z=this.coplanarPoint(UQ).applyMatrix4(J),K=this.normal.applyMatrix3($).normalize();return this.constant=-Z.dot(K),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}}var Z8=new G8,uW=new p0(0.5,0.5),Q6=new h;class B7{constructor(J=new P9,Q=new P9,$=new P9,Z=new P9,K=new P9,W=new P9){this.planes=[J,Q,$,Z,K,W]}set(J,Q,$,Z,K,W){let X=this.planes;return X[0].copy(J),X[1].copy(Q),X[2].copy($),X[3].copy(Z),X[4].copy(K),X[5].copy(W),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let Z=this.planes,K=J.elements,W=K[0],X=K[1],Y=K[2],H=K[3],U=K[4],G=K[5],F=K[6],q=K[7],E=K[8],L=K[9],I=K[10],D=K[11],O=K[12],T=K[13],M=K[14],z=K[15];if(Z[0].setComponents(H-W,q-U,D-E,z-O).normalize(),Z[1].setComponents(H+W,q+U,D+E,z+O).normalize(),Z[2].setComponents(H+X,q+G,D+L,z+T).normalize(),Z[3].setComponents(H-X,q-G,D-L,z-T).normalize(),$)Z[4].setComponents(Y,F,I,M).normalize(),Z[5].setComponents(H-Y,q-F,D-I,z-M).normalize();else if(Z[4].setComponents(H-Y,q-F,D-I,z-M).normalize(),Q===2000)Z[5].setComponents(H+Y,q+F,D+I,z+M).normalize();else if(Q===2001)Z[5].setComponents(Y,F,I,M).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();Z8.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();Z8.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(Z8)}intersectsSprite(J){Z8.center.set(0,0,0);let Q=uW.distanceTo(J.center);return Z8.radius=0.7071067811865476+Q,Z8.applyMatrix4(J.matrixWorld),this.intersectsSphere(Z8)}intersectsSphere(J){let Q=this.planes,$=J.center,Z=-J.radius;for(let K=0;K<6;K++)if(Q[K].distanceToPoint($)<Z)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let Z=Q[$];if(Q6.x=Z.normal.x>0?J.max.x:J.min.x,Q6.y=Z.normal.y>0?J.max.y:J.min.y,Q6.z=Z.normal.z>0?J.max.z:J.min.z,Z.distanceToPoint(Q6)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class I6 extends _J{constructor(J=[],Q=301,$,Z,K,W,X,Y,H,U){super(J,Q,$,Z,K,W,X,Y,H,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class v9 extends _J{constructor(J,Q,$,Z,K,W,X,Y,H){super(J,Q,$,Z,K,W,X,Y,H);this.isCanvasTexture=!0,this.needsUpdate=!0}}class i9 extends _J{constructor(J,Q,$=1014,Z,K,W,X=1003,Y=1003,H,U=1026,G=1){if(U!==1026&&U!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let F={width:J,height:Q,depth:G};super(F,Z,K,W,X,Y,U,$,H);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new V7(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);if(this.compareFunction!==null)Q.compareFunction=this.compareFunction;return Q}}class O$ extends i9{constructor(J,Q=1014,$=301,Z,K,W=1003,X=1003,Y,H=1026){let U={width:J,height:J,depth:1},G=[U,U,U,U,U,U];super(J,J,Q,$,Z,K,W,X,Y,H);this.image=G,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class A6 extends _J{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class BJ extends U9{constructor(J=1,Q=1,$=1,Z=1,K=1,W=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:Z,heightSegments:K,depthSegments:W};let X=this;Z=Math.floor(Z),K=Math.floor(K),W=Math.floor(W);let Y=[],H=[],U=[],G=[],F=0,q=0;E("z","y","x",-1,-1,$,Q,J,W,K,0),E("z","y","x",1,-1,$,Q,-J,W,K,1),E("x","z","y",1,1,J,$,Q,Z,W,2),E("x","z","y",1,-1,J,$,-Q,Z,W,3),E("x","y","z",1,-1,J,Q,$,Z,K,4),E("x","y","z",-1,-1,J,Q,-$,Z,K,5),this.setIndex(Y),this.setAttribute("position",new lJ(H,3)),this.setAttribute("normal",new lJ(U,3)),this.setAttribute("uv",new lJ(G,2));function E(L,I,D,O,T,M,z,_,P,w,k){let B=M/P,l=z/w,C=M/2,m=z/2,o=_/2,x=P+1,u=w+1,c=0,g=0,t=new h;for(let $0=0;$0<u;$0++){let G0=$0*l-m;for(let k0=0;k0<x;k0++){let M0=k0*B-C;t[L]=M0*O,t[I]=G0*T,t[D]=o,H.push(t.x,t.y,t.z),t[L]=0,t[I]=0,t[D]=_>0?1:-1,U.push(t.x,t.y,t.z),G.push(k0/P),G.push(1-$0/w),c+=1}}for(let $0=0;$0<w;$0++)for(let G0=0;G0<P;G0++){let k0=F+G0+x*$0,M0=F+G0+x*($0+1),a0=F+(G0+1)+x*($0+1),r0=F+(G0+1)+x*$0;Y.push(k0,M0,r0),Y.push(M0,a0,r0),g+=6}X.addGroup(q,g,k),q+=g,F+=c}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new BJ(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class N8 extends U9{constructor(J=1,Q=1,$=1,Z=32,K=1,W=!1,X=0,Y=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:Q,height:$,radialSegments:Z,heightSegments:K,openEnded:W,thetaStart:X,thetaLength:Y};let H=this;Z=Math.floor(Z),K=Math.floor(K);let U=[],G=[],F=[],q=[],E=0,L=[],I=$/2,D=0;if(O(),W===!1){if(J>0)T(!0);if(Q>0)T(!1)}this.setIndex(U),this.setAttribute("position",new lJ(G,3)),this.setAttribute("normal",new lJ(F,3)),this.setAttribute("uv",new lJ(q,2));function O(){let M=new h,z=new h,_=0,P=(Q-J)/$;for(let w=0;w<=K;w++){let k=[],B=w/K,l=B*(Q-J)+J;for(let C=0;C<=Z;C++){let m=C/Z,o=m*Y+X,x=Math.sin(o),u=Math.cos(o);z.x=l*x,z.y=-B*$+I,z.z=l*u,G.push(z.x,z.y,z.z),M.set(x,P,u).normalize(),F.push(M.x,M.y,M.z),q.push(m,1-B),k.push(E++)}L.push(k)}for(let w=0;w<Z;w++)for(let k=0;k<K;k++){let B=L[k][w],l=L[k+1][w],C=L[k+1][w+1],m=L[k][w+1];if(J>0||k!==0)U.push(B,l,m),_+=3;if(Q>0||k!==K-1)U.push(l,C,m),_+=3}H.addGroup(D,_,0),D+=_}function T(M){let z=E,_=new p0,P=new h,w=0,k=M===!0?J:Q,B=M===!0?1:-1;for(let C=1;C<=Z;C++)G.push(0,I*B,0),F.push(0,B,0),q.push(0.5,0.5),E++;let l=E;for(let C=0;C<=Z;C++){let o=C/Z*Y+X,x=Math.cos(o),u=Math.sin(o);P.x=k*u,P.y=I*B,P.z=k*x,G.push(P.x,P.y,P.z),F.push(0,B,0),_.x=x*0.5+0.5,_.y=u*0.5*B+0.5,q.push(_.x,_.y),E++}for(let C=0;C<Z;C++){let m=z+C,o=l+C;if(M===!0)U.push(o,o+1,m);else U.push(o+1,o,m);w+=3}H.addGroup(D,w,M===!0?1:2),D+=w}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new N8(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class sJ extends U9{constructor(J=1,Q=1,$=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:Z};let K=J/2,W=Q/2,X=Math.floor($),Y=Math.floor(Z),H=X+1,U=Y+1,G=J/X,F=Q/Y,q=[],E=[],L=[],I=[];for(let D=0;D<U;D++){let O=D*F-W;for(let T=0;T<H;T++){let M=T*G-K;E.push(M,-O,0),L.push(0,0,1),I.push(T/X),I.push(1-D/Y)}}for(let D=0;D<Y;D++)for(let O=0;O<X;O++){let T=O+H*D,M=O+H*(D+1),z=O+1+H*(D+1),_=O+1+H*D;q.push(T,M,_),q.push(M,z,_)}this.setIndex(q),this.setAttribute("position",new lJ(E,3)),this.setAttribute("normal",new lJ(L,3)),this.setAttribute("uv",new lJ(I,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new sJ(J.width,J.height,J.widthSegments,J.heightSegments)}}function F8(J){let Q={};for(let $ in J){Q[$]={};for(let Z in J[$]){let K=J[$][Z];if(EZ(K))if(K.isRenderTargetTexture)T0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][Z]=null;else Q[$][Z]=K.clone();else if(Array.isArray(K))if(EZ(K[0])){let W=[];for(let X=0,Y=K.length;X<Y;X++)W[X]=K[X].clone();Q[$][Z]=W}else Q[$][Z]=K.slice();else Q[$][Z]=K}}return Q}function bJ(J){let Q={};for(let $=0;$<J.length;$++){let Z=F8(J[$]);for(let K in Z)Q[K]=Z[K]}return Q}function EZ(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function cW(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function D$(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return u0.workingColorSpace}var AK={clone:F8,merge:bJ},nW=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sW=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tJ extends s9{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nW,this.fragmentShader=sW,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=F8(J.uniforms),this.uniformsGroups=cW(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let Z in this.uniforms){let W=this.uniforms[Z].value;if(W&&W.isTexture)Q.uniforms[Z]={type:"t",value:W.toJSON(J).uuid};else if(W&&W.isColor)Q.uniforms[Z]={type:"c",value:W.getHex()};else if(W&&W.isVector2)Q.uniforms[Z]={type:"v2",value:W.toArray()};else if(W&&W.isVector3)Q.uniforms[Z]={type:"v3",value:W.toArray()};else if(W&&W.isVector4)Q.uniforms[Z]={type:"v4",value:W.toArray()};else if(W&&W.isMatrix3)Q.uniforms[Z]={type:"m3",value:W.toArray()};else if(W&&W.isMatrix4)Q.uniforms[Z]={type:"m4",value:W.toArray()};else Q.uniforms[Z]={value:W}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let Z in this.extensions)if(this.extensions[Z]===!0)$[Z]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}fromJSON(J,Q){if(super.fromJSON(J,Q),J.uniforms!==void 0)for(let $ in J.uniforms){let Z=J.uniforms[$];switch(this.uniforms[$]={},Z.type){case"t":this.uniforms[$].value=Q[Z.value]||null;break;case"c":this.uniforms[$].value=new m0().setHex(Z.value);break;case"v2":this.uniforms[$].value=new p0().fromArray(Z.value);break;case"v3":this.uniforms[$].value=new h().fromArray(Z.value);break;case"v4":this.uniforms[$].value=new UJ().fromArray(Z.value);break;case"m3":this.uniforms[$].value=new j0().fromArray(Z.value);break;case"m4":this.uniforms[$].value=new ZJ().fromArray(Z.value);break;default:this.uniforms[$].value=Z.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let $ in J.extensions)this.extensions[$]=J.extensions[$];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class E$ extends tJ{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class gJ extends s9{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new m0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new m0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new p0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new O9,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class P6 extends s9{constructor(J){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new m0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new m0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new p0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new O9,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.envMapIntensity=J.envMapIntensity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class R$ extends s9{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class k$ extends s9{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function $6(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}class O8{constructor(J,Q,$,Z){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,Z=Q[$],K=Q[$-1];$:{J:{let W;Q:{Z:if(!(J<Z)){for(let X=$+2;;){if(Z===void 0){if(J<K)break Z;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===X)break;if(K=Z,Z=Q[++$],J<Z)break J}W=Q.length;break Q}if(!(J>=K)){let X=Q[1];if(J<X)$=2,K=X;for(let Y=$-2;;){if(K===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===Y)break;if(Z=K,K=Q[--$-1],J>=K)break J}W=$,$=0;break Q}break $}while($<W){let X=$+W>>>1;if(J<Q[X])W=X;else $=X+1}if(Z=Q[$],K=Q[$-1],K===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,K,Z)}return this.interpolate_($,K,J,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,K=J*Z;for(let W=0;W!==Z;++W)Q[W]=$[K+W];return Q}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class L$ extends O8{constructor(J,Q,$,Z){super(J,Q,$,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let Z=this.parameterPositions,K=J-2,W=J+1,X=Z[K],Y=Z[W];if(X===void 0)switch(this.getSettings_().endingStart){case 2401:K=J,X=2*Q-$;break;case 2402:K=Z.length-2,X=Q+Z[K]-Z[K+1];break;default:K=J,X=$}if(Y===void 0)switch(this.getSettings_().endingEnd){case 2401:W=J,Y=2*$-Q;break;case 2402:W=1,Y=$+Z[1]-Z[0];break;default:W=J-1,Y=Q}let H=($-Q)*0.5,U=this.valueSize;this._weightPrev=H/(Q-X),this._weightNext=H/(Y-$),this._offsetPrev=K*U,this._offsetNext=W*U}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,U=this._offsetPrev,G=this._offsetNext,F=this._weightPrev,q=this._weightNext,E=($-Q)/(Z-Q),L=E*E,I=L*E,D=-F*I+2*F*L-F*E,O=(1+F)*I+(-1.5-2*F)*L+(-0.5+F)*E+1,T=(-1-q)*I+(1.5+q)*L+0.5*E,M=q*I-q*L;for(let z=0;z!==X;++z)K[z]=D*W[U+z]+O*W[H+z]+T*W[Y+z]+M*W[G+z];return K}}class V$ extends O8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,U=($-Q)/(Z-Q),G=1-U;for(let F=0;F!==X;++F)K[F]=W[H+F]*G+W[Y+F]*U;return K}}class M$ extends O8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J){return this.copySampleValue_(J-1)}}class z$ extends O8{interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,U=this.inTangents,G=this.outTangents;if(!U||!G){let E=($-Q)/(Z-Q),L=1-E;for(let I=0;I!==X;++I)K[I]=W[H+I]*L+W[Y+I]*E;return K}let F=X*2,q=J-1;for(let E=0;E!==X;++E){let L=W[H+E],I=W[Y+E],D=q*F+E*2,O=G[D],T=G[D+1],M=J*F+E*2,z=U[M],_=U[M+1],P=($-Q)/(Z-Q),w,k,B,l,C;for(let m=0;m<8;m++){w=P*P,k=w*P,B=1-P,l=B*B,C=l*B;let x=C*Q+3*l*P*O+3*B*w*z+k*Z-$;if(Math.abs(x)<0.0000000001)break;let u=3*l*(O-Q)+6*B*P*(z-O)+3*w*(Z-z);if(Math.abs(u)<0.0000000001)break;P=P-x/u,P=Math.max(0,Math.min(1,P))}K[E]=C*L+3*l*P*T+3*B*w*_+k*I}return K}}class eJ{constructor(J,Q,$,Z){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=$6(Q,this.TimeBufferType),this.values=$6($,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:$6(J.times,Array),values:$6(J.values,Array)};let Z=J.getInterpolation();if(Z!==J.DefaultInterpolation)$.interpolation=Z}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new M$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new V$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new L$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new z$(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.inTangents=this.settings.inTangents,Q.outTangents=this.settings.outTangents;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return T0("KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]*=J}return this}trim(J,Q){let $=this.times,Z=$.length,K=0,W=Z-1;while(K!==Z&&$[K]<J)++K;while(W!==-1&&$[W]>Q)--W;if(++W,K!==0||W!==Z){if(K>=W)W=Math.max(W,1),K=W-1;let X=this.getValueSize();this.times=$.slice(K,W),this.values=this.values.slice(K*X,W*X)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)w0("KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,Z=this.values,K=$.length;if(K===0)w0("KeyframeTrack: Track is empty.",this),J=!1;let W=null;for(let X=0;X!==K;X++){let Y=$[X];if(typeof Y==="number"&&isNaN(Y)){w0("KeyframeTrack: Time is not a valid number.",this,X,Y),J=!1;break}if(W!==null&&W>Y){w0("KeyframeTrack: Out of order keys.",this,X,Y,W),J=!1;break}W=Y}if(Z!==void 0){if(IW(Z))for(let X=0,Y=Z.length;X!==Y;++X){let H=Z[X];if(isNaN(H)){w0("KeyframeTrack: Value is not a valid number.",this,X,H),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),Z=this.getInterpolation()===2302,K=J.length-1,W=1;for(let X=1;X<K;++X){let Y=!1,H=J[X],U=J[X+1];if(H!==U&&(X!==1||H!==J[0]))if(!Z){let G=X*$,F=G-$,q=G+$;for(let E=0;E!==$;++E){let L=Q[G+E];if(L!==Q[F+E]||L!==Q[q+E]){Y=!0;break}}}else Y=!0;if(Y){if(X!==W){J[W]=J[X];let G=X*$,F=W*$;for(let q=0;q!==$;++q)Q[F+q]=Q[G+q]}++W}}if(K>0){J[W]=J[K];for(let X=K*$,Y=W*$,H=0;H!==$;++H)Q[Y+H]=Q[X+H];++W}if(W!==J.length)this.times=J.slice(0,W),this.values=Q.slice(0,W*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),Z=new this.constructor(this.name,J,Q);return Z.createInterpolant=this.createInterpolant,Z}}eJ.prototype.ValueTypeName="";eJ.prototype.TimeBufferType=Float32Array;eJ.prototype.ValueBufferType=Float32Array;eJ.prototype.DefaultInterpolation=2301;class D8 extends eJ{constructor(J,Q,$){super(J,Q,$)}}D8.prototype.ValueTypeName="bool";D8.prototype.ValueBufferType=Array;D8.prototype.DefaultInterpolation=2300;D8.prototype.InterpolantFactoryMethodLinear=void 0;D8.prototype.InterpolantFactoryMethodSmooth=void 0;class B$ extends eJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}}B$.prototype.ValueTypeName="color";class I$ extends eJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}}I$.prototype.ValueTypeName="number";class A$ extends O8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=($-Q)/(Z-Q),H=J*X;for(let U=H+X;H!==U;H+=4)S9.slerpFlat(K,0,W,H-X,W,H,Y);return K}}class C6 extends eJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}InterpolantFactoryMethodLinear(J){return new A$(this.times,this.values,this.getValueSize(),J)}}C6.prototype.ValueTypeName="quaternion";C6.prototype.InterpolantFactoryMethodSmooth=void 0;class E8 extends eJ{constructor(J,Q,$){super(J,Q,$)}}E8.prototype.ValueTypeName="string";E8.prototype.ValueBufferType=Array;E8.prototype.DefaultInterpolation=2300;E8.prototype.InterpolantFactoryMethodLinear=void 0;E8.prototype.InterpolantFactoryMethodSmooth=void 0;class P$ extends eJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}}P$.prototype.ValueTypeName="vector";class C${constructor(J,Q,$){let Z=this,K=!1,W=0,X=0,Y=void 0,H=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this._abortController=null,this.itemStart=function(U){if(X++,K===!1){if(Z.onStart!==void 0)Z.onStart(U,W,X)}K=!0},this.itemEnd=function(U){if(W++,Z.onProgress!==void 0)Z.onProgress(U,W,X);if(W===X){if(K=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(U){if(Z.onError!==void 0)Z.onError(U)},this.resolveURL=function(U){if(U=U.normalize("NFC"),Y)return Y(U);return U},this.setURLModifier=function(U){return Y=U,this},this.addHandler=function(U,G){return H.push(U,G),this},this.removeHandler=function(U){let G=H.indexOf(U);if(G!==-1)H.splice(G,2);return this},this.getHandler=function(U){for(let G=0,F=H.length;G<F;G+=2){let q=H[G],E=H[G+1];if(q.global)q.lastIndex=0;if(q.test(U))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var PK=new C$;class _${constructor(J){if(this.manager=J!==void 0?J:PK,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let $=this;return new Promise(function(Z,K){$.load(J,Z,Q,K)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}_$.DEFAULT_MATERIAL_NAME="__DEFAULT";class _6 extends RJ{constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new m0(J),this.intensity=Q}dispose(){this.dispatchEvent({type:"dispose"})}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);return Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,Q}}var qQ=new ZJ,RZ=new h,kZ=new h;class w${constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new p0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new ZJ,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new B7,this._frameExtents=new p0(1,1),this._viewportCount=1,this._viewports=[new UJ(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera,$=this.matrix;if(RZ.setFromMatrixPosition(J.matrixWorld),Q.position.copy(RZ),kZ.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(kZ),Q.updateMatrixWorld(),qQ.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qQ,Q.coordinateSystem,Q.reversedDepth),Q.coordinateSystem===2001||Q.reversedDepth)$.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,1,0,0,0,0,1);else $.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1);$.multiply(qQ)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this.biasNode=J.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};if(this.intensity!==1)J.intensity=this.intensity;if(this.bias!==0)J.bias=this.bias;if(this.normalBias!==0)J.normalBias=this.normalBias;if(this.radius!==1)J.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)J.mapSize=this.mapSize.toArray();return J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var Z6=new h,K6=new S9,F9=new h;class w6 extends RJ{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ZJ,this.projectionMatrix=new ZJ,this.projectionMatrixInverse=new ZJ,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(Z6,K6,F9),F9.x===1&&F9.y===1&&F9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Z6,K6,F9.set(1,1,1)).invert()}updateWorldMatrix(J,Q,$=!1){if(super.updateWorldMatrix(J,Q,$),this.matrixWorld.decompose(Z6,K6,F9),F9.x===1&&F9.y===1&&F9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Z6,K6,F9.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var u9=new h,LZ=new p0,VZ=new p0;class fJ extends w6{constructor(J=50,Q=1,$=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=Z,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=W6*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(m6*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return W6*2*Math.atan(Math.tan(m6*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){u9.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(u9.x,u9.y).multiplyScalar(-J/u9.z),u9.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(u9.x,u9.y).multiplyScalar(-J/u9.z)}getViewSize(J,Q){return this.getViewBounds(J,LZ,VZ),Q.subVectors(VZ,LZ)}setViewOffset(J,Q,$,Z,K,W){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=K,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(m6*0.5*this.fov)/this.zoom,$=2*Q,Z=this.aspect*$,K=-0.5*Z,W=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Y,fullHeight:H}=W;K+=W.offsetX*Z/Y,Q-=W.offsetY*$/H,Z*=W.width/Y,$*=W.height/H}let X=this.filmOffset;if(X!==0)K+=J*X/this.getFilmWidth();this.projectionMatrix.makePerspective(K,K+Z,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class CK extends w${constructor(){super(new fJ(90,1,0.5,500));this.isPointLightShadow=!0}}class T6 extends _6{constructor(J,Q,$=0,Z=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=$,this.decay=Z,this.shadow=new CK}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.distance=this.distance,Q.object.decay=this.decay,Q.object.shadow=this.shadow.toJSON(),Q}}class I7 extends w6{constructor(J=-1,Q=1,$=1,Z=-1,K=0.1,W=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=Z,this.near=K,this.far=W,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,Z,K,W){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=K,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,K=$-J,W=$+J,X=Z+Q,Y=Z-Q;if(this.view!==null&&this.view.enabled){let H=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;K+=H*this.view.offsetX,W=K+H*this.view.width,X-=U*this.view.offsetY,Y=X-U*this.view.height}this.projectionMatrix.makeOrthographic(K,W,X,Y,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class _K extends w${constructor(){super(new I7(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class A7 extends _6{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(RJ.DEFAULT_UP),this.updateMatrix(),this.target=new RJ,this.shadow=new _K}dispose(){super.dispose(),this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.shadow=this.shadow.toJSON(),Q.object.target=this.target.uuid,Q}}var p8=-90,m8=1;class T$ extends RJ{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new fJ(p8,m8,J,Q);Z.layers=this.layers,this.add(Z);let K=new fJ(p8,m8,J,Q);K.layers=this.layers,this.add(K);let W=new fJ(p8,m8,J,Q);W.layers=this.layers,this.add(W);let X=new fJ(p8,m8,J,Q);X.layers=this.layers,this.add(X);let Y=new fJ(p8,m8,J,Q);Y.layers=this.layers,this.add(Y);let H=new fJ(p8,m8,J,Q);H.layers=this.layers,this.add(H)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,Z,K,W,X,Y]=Q;for(let H of Q)this.remove(H);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),K.up.set(0,0,-1),K.lookAt(0,1,0),W.up.set(0,0,1),W.lookAt(0,-1,0),X.up.set(0,1,0),X.lookAt(0,0,1),Y.up.set(0,1,0),Y.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),K.up.set(0,0,1),K.lookAt(0,1,0),W.up.set(0,0,-1),W.lookAt(0,-1,0),X.up.set(0,-1,0),X.lookAt(0,0,1),Y.up.set(0,-1,0),Y.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let H of Q)this.add(H),H.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[K,W,X,Y,H,U]=this.children,G=J.getRenderTarget(),F=J.getActiveCubeFace(),q=J.getActiveMipmapLevel(),E=J.xr.enabled;J.xr.enabled=!1;let L=$.texture.generateMipmaps;$.texture.generateMipmaps=!1;let I=!1;if(J.isWebGLRenderer===!0)I=J.state.buffers.depth.getReversed();else I=J.reversedDepthBuffer;if(J.setRenderTarget($,0,Z),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,K),J.setRenderTarget($,1,Z),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,W),J.setRenderTarget($,2,Z),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,X),J.setRenderTarget($,3,Z),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),J.setRenderTarget($,4,Z),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,H),$.texture.generateMipmaps=L,J.setRenderTarget($,5,Z),I&&J.autoClear===!1)J.clearDepth();J.render(Q,U),J.setRenderTarget(G,F,q),J.xr.enabled=E,$.texture.needsPMREMUpdate=!0}}class S$ extends fJ{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}var j$="\\[\\]\\.:\\/",iW=new RegExp("["+j$+"]","g"),v$="[^"+j$+"]",oW="[^"+j$.replace("\\.","")+"]",aW=/((?:WC+[\/:])*)/.source.replace("WC",v$),rW=/(WCOD+)?/.source.replace("WCOD",oW),tW=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",v$),eW=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",v$),JX=new RegExp("^"+aW+rW+tW+eW+"$"),QX=["material","materials","bones","map"];class wK{constructor(J,Q,$){let Z=$||JJ.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,Z)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,Z=this._bindings[$];if(Z!==void 0)Z.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,K=$.length;Z!==K;++Z)$[Z].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class JJ{constructor(J,Q,$){this.path=Q,this.parsedPath=$||JJ.parseTrackName(Q),this.node=JJ.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new JJ(J,Q,$);else return new JJ.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(iW,"")}static parseTrackName(J){let Q=JX.exec(J);if(Q===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},Z=$.nodeName&&$.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let K=$.nodeName.substring(Z+1);if(QX.indexOf(K)!==-1)$.nodeName=$.nodeName.substring(0,Z),$.objectName=K}if($.propertyName===null||$.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(K){for(let W=0;W<K.length;W++){let X=K[W];if(X.name===Q||X.uuid===Q)return X;let Y=$(X.children);if(Y)return Y}return null},Z=$(J.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)J[Q++]=$[Z]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,Z=Q.propertyName,K=Q.propertyIndex;if(!J)J=JJ.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){T0("PropertyBinding: No target node found for track: "+this.path+".");return}if($){let H=Q.objectIndex;switch($){case"materials":if(!J.material){w0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){w0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){w0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===H){H=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){w0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){w0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){w0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(H!==void 0){if(J[H]===void 0){w0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[H]}}let W=J[Z];if(W===void 0){let H=Q.nodeName;w0("PropertyBinding: Trying to update property for track: "+H+"."+Z+" but it wasn't found.",J);return}let X=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)X=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)X=this.Versioning.MatrixWorldNeedsUpdate;let Y=this.BindingType.Direct;if(K!==void 0){if(Z==="morphTargetInfluences"){if(!J.geometry){w0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){w0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[K]!==void 0)K=J.morphTargetDictionary[K]}Y=this.BindingType.ArrayElement,this.resolvedProperty=W,this.propertyIndex=K}else if(W.fromArray!==void 0&&W.toArray!==void 0)Y=this.BindingType.HasFromToArray,this.resolvedProperty=W;else if(Array.isArray(W))Y=this.BindingType.EntireArray,this.resolvedProperty=W;else this.propertyName=Z;this.getValue=this.GetterByBindingType[Y],this.setValue=this.SetterByBindingTypeAndVersioning[Y][X]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}JJ.Composite=wK;JJ.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};JJ.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};JJ.prototype.GetterByBindingType=[JJ.prototype._getValue_direct,JJ.prototype._getValue_array,JJ.prototype._getValue_arrayElement,JJ.prototype._getValue_toArray];JJ.prototype.SetterByBindingTypeAndVersioning=[[JJ.prototype._setValue_direct,JJ.prototype._setValue_direct_setNeedsUpdate,JJ.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[JJ.prototype._setValue_array,JJ.prototype._setValue_array_setNeedsUpdate,JJ.prototype._setValue_array_setMatrixWorldNeedsUpdate],[JJ.prototype._setValue_arrayElement,JJ.prototype._setValue_arrayElement_setNeedsUpdate,JJ.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[JJ.prototype._setValue_fromArray,JJ.prototype._setValue_fromArray_setNeedsUpdate,JJ.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Xq=new Float32Array(1);var MZ=new ZJ;class S6{constructor(J,Q,$=0,Z=1/0){this.ray=new z6(J,Q),this.near=$,this.far=Z,this.camera=null,this.layers=new M7,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(J,Q){this.ray.set(J,Q)}setFromCamera(J,Q){if(Q.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(Q.matrixWorld),this.ray.direction.set(J.x,J.y,0.5).unproject(Q).sub(this.ray.origin).normalize(),this.camera=Q;else if(Q.isOrthographicCamera)this.ray.origin.set(J.x,J.y,Q.projectionMatrix.elements[14]).unproject(Q),this.ray.direction.set(0,0,-1).transformDirection(Q.matrixWorld),this.camera=Q;else w0("Raycaster: Unsupported camera type: "+Q.type)}setFromXRController(J){return MZ.identity().extractRotation(J.matrixWorld),this.ray.origin.setFromMatrixPosition(J.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(MZ),this}intersectObject(J,Q=!0,$=[]){return GQ(J,this,$,Q),$.sort(zZ),$}intersectObjects(J,Q=!0,$=[]){for(let Z=0,K=J.length;Z<K;Z++)GQ(J[Z],this,$,Q);return $.sort(zZ),$}}function zZ(J,Q){return J.distance-Q.distance}function GQ(J,Q,$,Z){let K=!0;if(J.layers.test(Q.layers)){if(J.raycast(Q,$)===!1)K=!1}if(K===!0&&Z===!0){let W=J.children;for(let X=0,Y=W.length;X<Y;X++)GQ(W[X],Q,$,!0)}}class f${static{f$.prototype.isMatrix2=!0}constructor(J,Q,$,Z){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,$,Z)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let $=0;$<4;$++)this.elements[$]=J[$+Q];return this}set(J,Q,$,Z){let K=this.elements;return K[0]=J,K[2]=Q,K[1]=$,K[3]=Z,this}}function y$(J,Q,$,Z){let K=$X(Z);switch($){case 1021:return J*Q;case 1028:return J*Q/K.components*K.byteLength;case 1029:return J*Q/K.components*K.byteLength;case 1030:return J*Q*2/K.components*K.byteLength;case 1031:return J*Q*2/K.components*K.byteLength;case 1022:return J*Q*3/K.components*K.byteLength;case 1023:return J*Q*4/K.components*K.byteLength;case 1033:return J*Q*4/K.components*K.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function $X(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));if(typeof window<"u")if(window.__THREE__)T0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="185";function tK(){let J=null,Q=!1,$=null,Z=null;function K(W,X){$(W,X),Z=J.requestAnimationFrame(K)}return{start:function(){if(Q===!0)return;if($===null)return;if(J===null)return;Z=J.requestAnimationFrame(K),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(Z);Q=!1},setAnimationLoop:function(W){$=W},setContext:function(W){J=W}}}function ZX(J){let Q=new WeakMap;function $(Y,H){let{array:U,usage:G}=Y,F=U.byteLength,q=J.createBuffer();J.bindBuffer(H,q),J.bufferData(H,U,G),Y.onUploadCallback();let E;if(U instanceof Float32Array)E=J.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)E=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(Y.isFloat16BufferAttribute)E=J.HALF_FLOAT;else E=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)E=J.SHORT;else if(U instanceof Uint32Array)E=J.UNSIGNED_INT;else if(U instanceof Int32Array)E=J.INT;else if(U instanceof Int8Array)E=J.BYTE;else if(U instanceof Uint8Array)E=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)E=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:q,type:E,bytesPerElement:U.BYTES_PER_ELEMENT,version:Y.version,size:F}}function Z(Y,H,U){let{array:G,updateRanges:F}=H;if(J.bindBuffer(U,Y),F.length===0)J.bufferSubData(U,0,G);else{F.sort((E,L)=>E.start-L.start);let q=0;for(let E=1;E<F.length;E++){let L=F[q],I=F[E];if(I.start<=L.start+L.count+1)L.count=Math.max(L.count,I.start+I.count-L.start);else++q,F[q]=I}F.length=q+1;for(let E=0,L=F.length;E<L;E++){let I=F[E];J.bufferSubData(U,I.start*G.BYTES_PER_ELEMENT,G,I.start,I.count)}H.clearUpdateRanges()}H.onUploadCallback()}function K(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;return Q.get(Y)}function W(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;let H=Q.get(Y);if(H)J.deleteBuffer(H.buffer),Q.delete(Y)}function X(Y,H){if(Y.isInterleavedBufferAttribute)Y=Y.data;if(Y.isGLBufferAttribute){let G=Q.get(Y);if(!G||G.version<Y.version)Q.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}let U=Q.get(Y);if(U===void 0)Q.set(Y,$(Y,H));else if(U.version<Y.version){if(U.size!==Y.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(U.buffer,Y,H),U.version=Y.version}}return{get:K,remove:W,update:X}}var KX=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,WX=`#ifdef USE_ALPHAHASH
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
#endif`,XX=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,YX=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,HX=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,UX=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qX=`#ifdef USE_AOMAP
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
#endif`,GX=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,NX=`#ifdef USE_BATCHING
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
#endif`,FX=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,OX=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,DX=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,EX=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,RX=`#ifdef USE_IRIDESCENCE
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
#endif`,kX=`#ifdef USE_BUMPMAP
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
#endif`,LX=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,VX=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,MX=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zX=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,BX=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,IX=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,AX=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,PX=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,CX=`#define PI 3.141592653589793
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
} // validated`,_X=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wX=`vec3 transformedNormal = objectNormal;
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
#endif`,TX=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,SX=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jX=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vX=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fX="gl_FragColor = linearToOutputTexel( gl_FragColor );",yX=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bX=`#ifdef USE_ENVMAP
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
#endif`,hX=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,xX=`#ifdef USE_ENVMAP
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
#endif`,gX=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pX=`#ifdef USE_ENVMAP
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
#endif`,mX=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lX=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dX=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uX=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cX=`#ifdef USE_GRADIENTMAP
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
}`,nX=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sX=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iX=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oX=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,aX=`#ifdef USE_ENVMAP
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
#endif`,rX=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tX=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eX=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,JY=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,QY=`PhysicalMaterial material;
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
#endif`,$Y=`uniform sampler2D dfgLUT;
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
}`,ZY=`
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
#endif`,KY=`#if defined( RE_IndirectDiffuse )
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
#endif`,WY=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,XY=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,YY=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,HY=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UY=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qY=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,GY=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,NY=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,FY=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,OY=`#if defined( USE_POINTS_UV )
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
#endif`,DY=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,EY=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,RY=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kY=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,LY=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VY=`#ifdef USE_MORPHTARGETS
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
#endif`,MY=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zY=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,BY=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,IY=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AY=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PY=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,CY=`#ifdef USE_NORMALMAP
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
#endif`,_Y=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wY=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,TY=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,SY=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jY=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vY=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fY=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yY=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bY=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hY=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xY=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gY=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pY=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mY=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lY=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dY=`float getShadowMask() {
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
}`,uY=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cY=`#ifdef USE_SKINNING
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
#endif`,nY=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sY=`#ifdef USE_SKINNING
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
#endif`,iY=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oY=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aY=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rY=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tY=`#ifdef USE_TRANSMISSION
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
#endif`,eY=`#ifdef USE_TRANSMISSION
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
#endif`,JH=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QH=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$H=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZH=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,KH=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WH=`uniform sampler2D t2D;
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
}`,XH=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YH=`#ifdef ENVMAP_TYPE_CUBE
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
}`,HH=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UH=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qH=`#include <common>
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
}`,GH=`#if DEPTH_PACKING == 3200
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
}`,NH=`#define DISTANCE
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
}`,FH=`#define DISTANCE
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
}`,OH=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,DH=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EH=`uniform float scale;
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
}`,RH=`uniform vec3 diffuse;
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
}`,kH=`#include <common>
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
}`,LH=`uniform vec3 diffuse;
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
}`,VH=`#define LAMBERT
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
}`,MH=`#define LAMBERT
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
}`,zH=`#define MATCAP
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
}`,BH=`#define MATCAP
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
}`,IH=`#define NORMAL
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
}`,AH=`#define NORMAL
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
}`,PH=`#define PHONG
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
}`,CH=`#define PHONG
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
}`,_H=`#define STANDARD
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
}`,wH=`#define STANDARD
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
}`,TH=`#define TOON
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
}`,SH=`#define TOON
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
}`,jH=`uniform float size;
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
}`,vH=`uniform vec3 diffuse;
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
}`,fH=`#include <common>
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
}`,yH=`uniform vec3 color;
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
}`,bH=`uniform float rotation;
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
}`,hH=`uniform vec3 diffuse;
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
}`,h0={alphahash_fragment:KX,alphahash_pars_fragment:WX,alphamap_fragment:XX,alphamap_pars_fragment:YX,alphatest_fragment:HX,alphatest_pars_fragment:UX,aomap_fragment:qX,aomap_pars_fragment:GX,batching_pars_vertex:NX,batching_vertex:FX,begin_vertex:OX,beginnormal_vertex:DX,bsdfs:EX,iridescence_fragment:RX,bumpmap_pars_fragment:kX,clipping_planes_fragment:LX,clipping_planes_pars_fragment:VX,clipping_planes_pars_vertex:MX,clipping_planes_vertex:zX,color_fragment:BX,color_pars_fragment:IX,color_pars_vertex:AX,color_vertex:PX,common:CX,cube_uv_reflection_fragment:_X,defaultnormal_vertex:wX,displacementmap_pars_vertex:TX,displacementmap_vertex:SX,emissivemap_fragment:jX,emissivemap_pars_fragment:vX,colorspace_fragment:fX,colorspace_pars_fragment:yX,envmap_fragment:bX,envmap_common_pars_fragment:hX,envmap_pars_fragment:xX,envmap_pars_vertex:gX,envmap_physical_pars_fragment:aX,envmap_vertex:pX,fog_vertex:mX,fog_pars_vertex:lX,fog_fragment:dX,fog_pars_fragment:uX,gradientmap_pars_fragment:cX,lightmap_pars_fragment:nX,lights_lambert_fragment:sX,lights_lambert_pars_fragment:iX,lights_pars_begin:oX,lights_toon_fragment:rX,lights_toon_pars_fragment:tX,lights_phong_fragment:eX,lights_phong_pars_fragment:JY,lights_physical_fragment:QY,lights_physical_pars_fragment:$Y,lights_fragment_begin:ZY,lights_fragment_maps:KY,lights_fragment_end:WY,lightprobes_pars_fragment:XY,logdepthbuf_fragment:YY,logdepthbuf_pars_fragment:HY,logdepthbuf_pars_vertex:UY,logdepthbuf_vertex:qY,map_fragment:GY,map_pars_fragment:NY,map_particle_fragment:FY,map_particle_pars_fragment:OY,metalnessmap_fragment:DY,metalnessmap_pars_fragment:EY,morphinstance_vertex:RY,morphcolor_vertex:kY,morphnormal_vertex:LY,morphtarget_pars_vertex:VY,morphtarget_vertex:MY,normal_fragment_begin:zY,normal_fragment_maps:BY,normal_pars_fragment:IY,normal_pars_vertex:AY,normal_vertex:PY,normalmap_pars_fragment:CY,clearcoat_normal_fragment_begin:_Y,clearcoat_normal_fragment_maps:wY,clearcoat_pars_fragment:TY,iridescence_pars_fragment:SY,opaque_fragment:jY,packing:vY,premultiplied_alpha_fragment:fY,project_vertex:yY,dithering_fragment:bY,dithering_pars_fragment:hY,roughnessmap_fragment:xY,roughnessmap_pars_fragment:gY,shadowmap_pars_fragment:pY,shadowmap_pars_vertex:mY,shadowmap_vertex:lY,shadowmask_pars_fragment:dY,skinbase_vertex:uY,skinning_pars_vertex:cY,skinning_vertex:nY,skinnormal_vertex:sY,specularmap_fragment:iY,specularmap_pars_fragment:oY,tonemapping_fragment:aY,tonemapping_pars_fragment:rY,transmission_fragment:tY,transmission_pars_fragment:eY,uv_pars_fragment:JH,uv_pars_vertex:QH,uv_vertex:$H,worldpos_vertex:ZH,background_vert:KH,background_frag:WH,backgroundCube_vert:XH,backgroundCube_frag:YH,cube_vert:HH,cube_frag:UH,depth_vert:qH,depth_frag:GH,distance_vert:NH,distance_frag:FH,equirect_vert:OH,equirect_frag:DH,linedashed_vert:EH,linedashed_frag:RH,meshbasic_vert:kH,meshbasic_frag:LH,meshlambert_vert:VH,meshlambert_frag:MH,meshmatcap_vert:zH,meshmatcap_frag:BH,meshnormal_vert:IH,meshnormal_frag:AH,meshphong_vert:PH,meshphong_frag:CH,meshphysical_vert:_H,meshphysical_frag:wH,meshtoon_vert:TH,meshtoon_frag:SH,points_vert:jH,points_frag:vH,shadow_vert:fH,shadow_frag:yH,sprite_vert:bH,sprite_frag:hH},O0={common:{diffuse:{value:new m0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new j0},alphaMap:{value:null},alphaMapTransform:{value:new j0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new j0}},envmap:{envMap:{value:null},envMapRotation:{value:new j0},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new j0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new j0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new j0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new j0},normalScale:{value:new p0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new j0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new j0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new j0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new j0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new m0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new h},probesMax:{value:new h},probesResolution:{value:new h}},points:{diffuse:{value:new m0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new j0},alphaTest:{value:0},uvTransform:{value:new j0}},sprite:{diffuse:{value:new m0(16777215)},opacity:{value:1},center:{value:new p0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new j0},alphaMap:{value:null},alphaMapTransform:{value:new j0},alphaTest:{value:0}}},V9={basic:{uniforms:bJ([O0.common,O0.specularmap,O0.envmap,O0.aomap,O0.lightmap,O0.fog]),vertexShader:h0.meshbasic_vert,fragmentShader:h0.meshbasic_frag},lambert:{uniforms:bJ([O0.common,O0.specularmap,O0.envmap,O0.aomap,O0.lightmap,O0.emissivemap,O0.bumpmap,O0.normalmap,O0.displacementmap,O0.fog,O0.lights,{emissive:{value:new m0(0)},envMapIntensity:{value:1}}]),vertexShader:h0.meshlambert_vert,fragmentShader:h0.meshlambert_frag},phong:{uniforms:bJ([O0.common,O0.specularmap,O0.envmap,O0.aomap,O0.lightmap,O0.emissivemap,O0.bumpmap,O0.normalmap,O0.displacementmap,O0.fog,O0.lights,{emissive:{value:new m0(0)},specular:{value:new m0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:h0.meshphong_vert,fragmentShader:h0.meshphong_frag},standard:{uniforms:bJ([O0.common,O0.envmap,O0.aomap,O0.lightmap,O0.emissivemap,O0.bumpmap,O0.normalmap,O0.displacementmap,O0.roughnessmap,O0.metalnessmap,O0.fog,O0.lights,{emissive:{value:new m0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:h0.meshphysical_vert,fragmentShader:h0.meshphysical_frag},toon:{uniforms:bJ([O0.common,O0.aomap,O0.lightmap,O0.emissivemap,O0.bumpmap,O0.normalmap,O0.displacementmap,O0.gradientmap,O0.fog,O0.lights,{emissive:{value:new m0(0)}}]),vertexShader:h0.meshtoon_vert,fragmentShader:h0.meshtoon_frag},matcap:{uniforms:bJ([O0.common,O0.bumpmap,O0.normalmap,O0.displacementmap,O0.fog,{matcap:{value:null}}]),vertexShader:h0.meshmatcap_vert,fragmentShader:h0.meshmatcap_frag},points:{uniforms:bJ([O0.points,O0.fog]),vertexShader:h0.points_vert,fragmentShader:h0.points_frag},dashed:{uniforms:bJ([O0.common,O0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:h0.linedashed_vert,fragmentShader:h0.linedashed_frag},depth:{uniforms:bJ([O0.common,O0.displacementmap]),vertexShader:h0.depth_vert,fragmentShader:h0.depth_frag},normal:{uniforms:bJ([O0.common,O0.bumpmap,O0.normalmap,O0.displacementmap,{opacity:{value:1}}]),vertexShader:h0.meshnormal_vert,fragmentShader:h0.meshnormal_frag},sprite:{uniforms:bJ([O0.sprite,O0.fog]),vertexShader:h0.sprite_vert,fragmentShader:h0.sprite_frag},background:{uniforms:{uvTransform:{value:new j0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:h0.background_vert,fragmentShader:h0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new j0}},vertexShader:h0.backgroundCube_vert,fragmentShader:h0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:h0.cube_vert,fragmentShader:h0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:h0.equirect_vert,fragmentShader:h0.equirect_frag},distance:{uniforms:bJ([O0.common,O0.displacementmap,{referencePosition:{value:new h},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:h0.distance_vert,fragmentShader:h0.distance_frag},shadow:{uniforms:bJ([O0.lights,O0.fog,{color:{value:new m0(0)},opacity:{value:1}}]),vertexShader:h0.shadow_vert,fragmentShader:h0.shadow_frag}};V9.physical={uniforms:bJ([V9.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new j0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new j0},clearcoatNormalScale:{value:new p0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new j0},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new j0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new j0},sheen:{value:0},sheenColor:{value:new m0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new j0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new j0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new j0},transmissionSamplerSize:{value:new p0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new j0},attenuationDistance:{value:0},attenuationColor:{value:new m0(0)},specularColor:{value:new m0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new j0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new j0},anisotropyVector:{value:new p0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new j0}}]),vertexShader:h0.meshphysical_vert,fragmentShader:h0.meshphysical_frag};var j6={r:0,b:0,g:0},xH=new ZJ,eK=new j0;eK.set(-1,0,0,0,1,0,0,0,1);function gH(J,Q,$,Z,K,W){let X=new m0(0),Y=K===!0?0:1,H,U,G=null,F=0,q=null;function E(T){let M=T.isScene===!0?T.background:null;if(M&&M.isTexture){let z=T.backgroundBlurriness>0;M=Q.get(M,z)}return M}function L(T){let M=!1,z=E(T);if(z===null)D(X,Y);else if(z&&z.isColor)D(z,1),M=!0;let _=J.xr.getEnvironmentBlendMode();if(_==="additive")$.buffers.color.setClear(0,0,0,1,W);else if(_==="alpha-blend")$.buffers.color.setClear(0,0,0,0,W);if(J.autoClear||M)$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function I(T,M){let z=E(M);if(z&&(z.isCubeTexture||z.mapping===E7)){if(U===void 0)U=new S0(new BJ(1,1,1),new tJ({name:"BackgroundCubeMaterial",uniforms:F8(V9.backgroundCube.uniforms),vertexShader:V9.backgroundCube.vertexShader,fragmentShader:V9.backgroundCube.fragmentShader,side:yJ,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),U.geometry.deleteAttribute("uv"),U.onBeforeRender=function(_,P,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(U.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),Z.update(U);if(U.material.uniforms.envMap.value=z,U.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,U.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,U.material.uniforms.backgroundRotation.value.setFromMatrix4(xH.makeRotationFromEuler(M.backgroundRotation)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1)U.material.uniforms.backgroundRotation.value.premultiply(eK);if(U.material.toneMapped=u0.getTransfer(z.colorSpace)!==YJ,G!==z||F!==z.version||q!==J.toneMapping)U.material.needsUpdate=!0,G=z,F=z.version,q=J.toneMapping;U.layers.enableAll(),T.unshift(U,U.geometry,U.material,0,0,null)}else if(z&&z.isTexture){if(H===void 0)H=new S0(new sJ(2,2),new tJ({name:"BackgroundMaterial",uniforms:F8(V9.background.uniforms),vertexShader:V9.background.vertexShader,fragmentShader:V9.background.fragmentShader,side:c8,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),H.geometry.deleteAttribute("normal"),Object.defineProperty(H.material,"map",{get:function(){return this.uniforms.t2D.value}}),Z.update(H);if(H.material.uniforms.t2D.value=z,H.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,H.material.toneMapped=u0.getTransfer(z.colorSpace)!==YJ,z.matrixAutoUpdate===!0)z.updateMatrix();if(H.material.uniforms.uvTransform.value.copy(z.matrix),G!==z||F!==z.version||q!==J.toneMapping)H.material.needsUpdate=!0,G=z,F=z.version,q=J.toneMapping;H.layers.enableAll(),T.unshift(H,H.geometry,H.material,0,0,null)}}function D(T,M){T.getRGB(j6,D$(J)),$.buffers.color.setClear(j6.r,j6.g,j6.b,M,W)}function O(){if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0;if(H!==void 0)H.geometry.dispose(),H.material.dispose(),H=void 0}return{getClearColor:function(){return X},setClearColor:function(T,M=1){X.set(T),Y=M,D(X,Y)},getClearAlpha:function(){return Y},setClearAlpha:function(T){Y=T,D(X,Y)},render:L,addToRenderList:I,dispose:O}}function pH(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),Z={},K=q(null),W=K,X=!1;function Y(C,m,o,x,u){let c=!1,g=F(C,x,o,m);if(W!==g)W=g,U(W.object);if(c=E(C,x,o,u),c)L(C,x,o,u);if(u!==null)Q.update(u,J.ELEMENT_ARRAY_BUFFER);if(c||X){if(X=!1,z(C,m,o,x),u!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(u).buffer)}}function H(){return J.createVertexArray()}function U(C){return J.bindVertexArray(C)}function G(C){return J.deleteVertexArray(C)}function F(C,m,o,x){let u=x.wireframe===!0,c=Z[m.id];if(c===void 0)c={},Z[m.id]=c;let g=C.isInstancedMesh===!0?C.id:0,t=c[g];if(t===void 0)t={},c[g]=t;let $0=t[o.id];if($0===void 0)$0={},t[o.id]=$0;let G0=$0[u];if(G0===void 0)G0=q(H()),$0[u]=G0;return G0}function q(C){let m=[],o=[],x=[];for(let u=0;u<$;u++)m[u]=0,o[u]=0,x[u]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:m,enabledAttributes:o,attributeDivisors:x,object:C,attributes:{},index:null}}function E(C,m,o,x){let u=W.attributes,c=m.attributes,g=0,t=o.getAttributes();for(let $0 in t)if(t[$0].location>=0){let k0=u[$0],M0=c[$0];if(M0===void 0){if($0==="instanceMatrix"&&C.instanceMatrix)M0=C.instanceMatrix;if($0==="instanceColor"&&C.instanceColor)M0=C.instanceColor}if(k0===void 0)return!0;if(k0.attribute!==M0)return!0;if(M0&&k0.data!==M0.data)return!0;g++}if(W.attributesNum!==g)return!0;if(W.index!==x)return!0;return!1}function L(C,m,o,x){let u={},c=m.attributes,g=0,t=o.getAttributes();for(let $0 in t)if(t[$0].location>=0){let k0=c[$0];if(k0===void 0){if($0==="instanceMatrix"&&C.instanceMatrix)k0=C.instanceMatrix;if($0==="instanceColor"&&C.instanceColor)k0=C.instanceColor}let M0={};if(M0.attribute=k0,k0&&k0.data)M0.data=k0.data;u[$0]=M0,g++}W.attributes=u,W.attributesNum=g,W.index=x}function I(){let C=W.newAttributes;for(let m=0,o=C.length;m<o;m++)C[m]=0}function D(C){O(C,0)}function O(C,m){let{newAttributes:o,enabledAttributes:x,attributeDivisors:u}=W;if(o[C]=1,x[C]===0)J.enableVertexAttribArray(C),x[C]=1;if(u[C]!==m)J.vertexAttribDivisor(C,m),u[C]=m}function T(){let{newAttributes:C,enabledAttributes:m}=W;for(let o=0,x=m.length;o<x;o++)if(m[o]!==C[o])J.disableVertexAttribArray(o),m[o]=0}function M(C,m,o,x,u,c,g){if(g===!0)J.vertexAttribIPointer(C,m,o,u,c);else J.vertexAttribPointer(C,m,o,x,u,c)}function z(C,m,o,x){I();let u=x.attributes,c=o.getAttributes(),g=m.defaultAttributeValues;for(let t in c){let $0=c[t];if($0.location>=0){let G0=u[t];if(G0===void 0){if(t==="instanceMatrix"&&C.instanceMatrix)G0=C.instanceMatrix;if(t==="instanceColor"&&C.instanceColor)G0=C.instanceColor}if(G0!==void 0){let{normalized:k0,itemSize:M0}=G0,a0=Q.get(G0);if(a0===void 0)continue;let{buffer:r0,type:i,bytesPerElement:X0}=a0,E0=i===J.INT||i===J.UNSIGNED_INT||G0.gpuType===BQ;if(G0.isInterleavedBufferAttribute){let R0=G0.data,A0=R0.stride,x0=G0.offset;if(R0.isInstancedInterleavedBuffer){for(let v0=0;v0<$0.locationSize;v0++)O($0.location+v0,R0.meshPerAttribute);if(C.isInstancedMesh!==!0&&x._maxInstanceCount===void 0)x._maxInstanceCount=R0.meshPerAttribute*R0.count}else for(let v0=0;v0<$0.locationSize;v0++)D($0.location+v0);J.bindBuffer(J.ARRAY_BUFFER,r0);for(let v0=0;v0<$0.locationSize;v0++)M($0.location+v0,M0/$0.locationSize,i,k0,A0*X0,(x0+M0/$0.locationSize*v0)*X0,E0)}else{if(G0.isInstancedBufferAttribute){for(let R0=0;R0<$0.locationSize;R0++)O($0.location+R0,G0.meshPerAttribute);if(C.isInstancedMesh!==!0&&x._maxInstanceCount===void 0)x._maxInstanceCount=G0.meshPerAttribute*G0.count}else for(let R0=0;R0<$0.locationSize;R0++)D($0.location+R0);J.bindBuffer(J.ARRAY_BUFFER,r0);for(let R0=0;R0<$0.locationSize;R0++)M($0.location+R0,M0/$0.locationSize,i,k0,M0*X0,M0/$0.locationSize*R0*X0,E0)}}else if(g!==void 0){let k0=g[t];if(k0!==void 0)switch(k0.length){case 2:J.vertexAttrib2fv($0.location,k0);break;case 3:J.vertexAttrib3fv($0.location,k0);break;case 4:J.vertexAttrib4fv($0.location,k0);break;default:J.vertexAttrib1fv($0.location,k0)}}}}T()}function _(){B();for(let C in Z){let m=Z[C];for(let o in m){let x=m[o];for(let u in x){let c=x[u];for(let g in c)G(c[g].object),delete c[g];delete x[u]}}delete Z[C]}}function P(C){if(Z[C.id]===void 0)return;let m=Z[C.id];for(let o in m){let x=m[o];for(let u in x){let c=x[u];for(let g in c)G(c[g].object),delete c[g];delete x[u]}}delete Z[C.id]}function w(C){for(let m in Z){let o=Z[m];for(let x in o){let u=o[x];if(u[C.id]===void 0)continue;let c=u[C.id];for(let g in c)G(c[g].object),delete c[g];delete u[C.id]}}}function k(C){for(let m in Z){let o=Z[m],x=C.isInstancedMesh===!0?C.id:0,u=o[x];if(u===void 0)continue;for(let c in u){let g=u[c];for(let t in g)G(g[t].object),delete g[t];delete u[c]}if(delete o[x],Object.keys(o).length===0)delete Z[m]}}function B(){if(l(),X=!0,W===K)return;W=K,U(W.object)}function l(){K.geometry=null,K.program=null,K.wireframe=!1}return{setup:Y,reset:B,resetDefaultState:l,dispose:_,releaseStatesOfGeometry:P,releaseStatesOfObject:k,releaseStatesOfProgram:w,initAttributes:I,enableAttribute:D,disableUnusedAttributes:T}}function mH(J,Q,$){let Z;function K(H){Z=H}function W(H,U){J.drawArrays(Z,H,U),$.update(U,Z,1)}function X(H,U,G){if(G===0)return;J.drawArraysInstanced(Z,H,U,G),$.update(U,Z,G)}function Y(H,U,G){if(G===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,H,0,U,0,G);let q=0;for(let E=0;E<G;E++)q+=U[E];$.update(q,Z,1)}this.setMode=K,this.render=W,this.renderInstances=X,this.renderMultiDraw=Y}function lH(J,Q,$,Z){let K;function W(){if(K!==void 0)return K;if(Q.has("EXT_texture_filter_anisotropic")===!0){let w=Q.get("EXT_texture_filter_anisotropic");K=J.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else K=0;return K}function X(w){if(w!==R9&&Z.convert(w)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Y(w){let k=w===w9&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(w!==H9&&Z.convert(w)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==_9&&!k)return!1;return!0}function H(w){if(w==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";w="mediump"}if(w==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=$.precision!==void 0?$.precision:"highp",G=H(U);if(G!==U)T0("WebGLRenderer:",U,"not supported, using",G,"instead."),U=G;let F=$.logarithmicDepthBuffer===!0,q=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control");if($.reversedDepthBuffer===!0&&q===!1)T0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let E=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),L=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),I=J.getParameter(J.MAX_TEXTURE_SIZE),D=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),O=J.getParameter(J.MAX_VERTEX_ATTRIBS),T=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),M=J.getParameter(J.MAX_VARYING_VECTORS),z=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),_=J.getParameter(J.MAX_SAMPLES),P=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:W,getMaxPrecision:H,textureFormatReadable:X,textureTypeReadable:Y,precision:U,logarithmicDepthBuffer:F,reversedDepthBuffer:q,maxTextures:E,maxVertexTextures:L,maxTextureSize:I,maxCubemapSize:D,maxAttributes:O,maxVertexUniforms:T,maxVaryings:M,maxFragmentUniforms:z,maxSamples:_,samples:P}}function dH(J){let Q=this,$=null,Z=0,K=!1,W=!1,X=new P9,Y=new j0,H={value:null,needsUpdate:!1};this.uniform=H,this.numPlanes=0,this.numIntersection=0,this.init=function(F,q){let E=F.length!==0||q||Z!==0||K;return K=q,Z=F.length,E},this.beginShadows=function(){W=!0,G(null)},this.endShadows=function(){W=!1},this.setGlobalState=function(F,q){$=G(F,q,0)},this.setState=function(F,q,E){let{clippingPlanes:L,clipIntersection:I,clipShadows:D}=F,O=J.get(F);if(!K||L===null||L.length===0||W&&!D)if(W)G(null);else U();else{let T=W?0:Z,M=T*4,z=O.clippingState||null;H.value=z,z=G(L,q,M,E);for(let _=0;_!==M;++_)z[_]=$[_];O.clippingState=z,this.numIntersection=I?this.numPlanes:0,this.numPlanes+=T}};function U(){if(H.value!==$)H.value=$,H.needsUpdate=Z>0;Q.numPlanes=Z,Q.numIntersection=0}function G(F,q,E,L){let I=F!==null?F.length:0,D=null;if(I!==0){if(D=H.value,L!==!0||D===null){let O=E+I*4,T=q.matrixWorldInverse;if(Y.getNormalMatrix(T),D===null||D.length<O)D=new Float32Array(O);for(let M=0,z=E;M!==I;++M,z+=4)X.copy(F[M]).applyMatrix4(T,Y),X.normal.toArray(D,z),D[z+3]=X.constant}H.value=D,H.needsUpdate=!0}return Q.numPlanes=I,Q.numIntersection=0,D}}var o9=4,TK=[0.125,0.215,0.35,0.446,0.526,0.582],R8=20,uH=256,P7=new I7,SK=new m0,b$=null,h$=0,x$=0,g$=!1,cH=new h;class T7{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,Q=0,$=0.1,Z=100,K={}){let{size:W=256,position:X=cH}=K;b$=this._renderer.getRenderTarget(),h$=this._renderer.getActiveCubeFace(),x$=this._renderer.getActiveMipmapLevel(),g$=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(W);let Y=this._allocateTargets();if(Y.depthBuffer=!0,this._sceneToCubeUV(J,$,Z,Y,X),Q>0)this._blur(Y,0,0,Q);return this._applyPMREM(Y),this._cleanup(Y),Y}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=fK(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=vK(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget(b$,h$,x$),this._renderer.xr.enabled=g$,J.scissorTest=!1,r8(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===s8||J.mapping===W8)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);b$=this._renderer.getRenderTarget(),h$=this._renderer.getActiveCubeFace(),x$=this._renderer.getActiveMipmapLevel(),g$=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let $=Q||this._allocateTargets();return this._textureToCubeUV(J,$),this._applyPMREM($),this._cleanup($),$}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,$={magFilter:VJ,minFilter:VJ,generateMipmaps:!1,type:w9,format:R9,colorSpace:X$,depthBuffer:!1},Z=jK(J,Q,$);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=jK(J,Q,$);let{_lodMax:K}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=nH(K)),this._blurMaterial=iH(K,J,Q),this._ggxMaterial=sH(K,J,Q)}return Z}_compileMaterial(J){let Q=new S0(new U9,J);this._renderer.compile(Q,P7)}_sceneToCubeUV(J,Q,$,Z,K){let Y=new fJ(90,1,Q,$),H=[1,-1,1,1,1,1],U=[1,1,1,-1,-1,-1],G=this._renderer,F=G.autoClear,q=G.toneMapping;if(G.getClearColor(SK),G.toneMapping=Y9,G.autoClear=!1,G.state.buffers.depth.getReversed())G.setRenderTarget(Z),G.clearDepth(),G.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new S0(new BJ,new xJ({name:"PMREM.Background",side:yJ,depthWrite:!1,depthTest:!1}));let L=this._backgroundBox,I=L.material,D=!1,O=J.background;if(O){if(O.isColor)I.color.copy(O),J.background=null,D=!0}else I.color.copy(SK),D=!0;for(let T=0;T<6;T++){let M=T%3;if(M===0)Y.up.set(0,H[T],0),Y.position.set(K.x,K.y,K.z),Y.lookAt(K.x+U[T],K.y,K.z);else if(M===1)Y.up.set(0,0,H[T]),Y.position.set(K.x,K.y,K.z),Y.lookAt(K.x,K.y+U[T],K.z);else Y.up.set(0,H[T],0),Y.position.set(K.x,K.y,K.z),Y.lookAt(K.x,K.y,K.z+U[T]);let z=this._cubeSize;if(r8(Z,M*z,T>2?z:0,z,z),G.setRenderTarget(Z),D)G.render(L,Y);G.render(J,Y)}G.toneMapping=q,G.autoClear=F,J.background=O}_textureToCubeUV(J,Q){let $=this._renderer,Z=J.mapping===s8||J.mapping===W8;if(Z){if(this._cubemapMaterial===null)this._cubemapMaterial=fK();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=vK();let K=Z?this._cubemapMaterial:this._equirectMaterial,W=this._lodMeshes[0];W.material=K;let X=K.uniforms;X.envMap.value=J;let Y=this._cubeSize;r8(Q,0,0,3*Y,2*Y),$.setRenderTarget(Q),$.render(W,P7)}_applyPMREM(J){let Q=this._renderer,$=Q.autoClear;Q.autoClear=!1;let Z=this._lodMeshes.length;for(let K=1;K<Z;K++)this._applyGGXFilter(J,K-1,K);Q.autoClear=$}_applyGGXFilter(J,Q,$){let Z=this._renderer,K=this._pingPongRenderTarget,W=this._ggxMaterial,X=this._lodMeshes[$];X.material=W;let Y=W.uniforms,H=$/(this._lodMeshes.length-1),U=Q/(this._lodMeshes.length-1),G=Math.sqrt(H*H-U*U),F=0+H*1.25,q=G*F,{_lodMax:E}=this,L=this._sizeLods[$],I=3*L*($>E-o9?$-E+o9:0),D=4*(this._cubeSize-L);Y.envMap.value=J.texture,Y.roughness.value=q,Y.mipInt.value=E-Q,r8(K,I,D,3*L,2*L),Z.setRenderTarget(K),Z.render(X,P7),Y.envMap.value=K.texture,Y.roughness.value=0,Y.mipInt.value=E-$,r8(J,I,D,3*L,2*L),Z.setRenderTarget(J),Z.render(X,P7)}_blur(J,Q,$,Z,K){let W=this._pingPongRenderTarget;this._halfBlur(J,W,Q,$,Z,"latitudinal",K),this._halfBlur(W,J,$,$,Z,"longitudinal",K)}_halfBlur(J,Q,$,Z,K,W,X){let Y=this._renderer,H=this._blurMaterial;if(W!=="latitudinal"&&W!=="longitudinal")w0("blur direction must be either latitudinal or longitudinal!");let U=3,G=this._lodMeshes[Z];G.material=H;let F=H.uniforms,q=this._sizeLods[$]-1,E=isFinite(K)?Math.PI/(2*q):2*Math.PI/(2*R8-1),L=K/E,I=isFinite(K)?1+Math.floor(U*L):R8;if(I>R8)T0(`sigmaRadians, ${K}, is too large and will clip, as it requested ${I} samples when the maximum is set to ${R8}`);let D=[],O=0;for(let P=0;P<R8;++P){let w=P/L,k=Math.exp(-w*w/2);if(D.push(k),P===0)O+=k;else if(P<I)O+=2*k}for(let P=0;P<D.length;P++)D[P]=D[P]/O;if(F.envMap.value=J.texture,F.samples.value=I,F.weights.value=D,F.latitudinal.value=W==="latitudinal",X)F.poleAxis.value=X;let{_lodMax:T}=this;F.dTheta.value=E,F.mipInt.value=T-$;let M=this._sizeLods[Z],z=3*M*(Z>T-o9?Z-T+o9:0),_=4*(this._cubeSize-M);r8(Q,z,_,3*M,2*M),Y.setRenderTarget(Q),Y.render(G,P7)}}function nH(J){let Q=[],$=[],Z=[],K=J,W=J-o9+1+TK.length;for(let X=0;X<W;X++){let Y=Math.pow(2,K);Q.push(Y);let H=1/Y;if(X>J-o9)H=TK[X-J+o9-1];else if(X===0)H=0;$.push(H);let U=1/(Y-2),G=-U,F=1+U,q=[G,G,F,G,F,F,G,G,F,F,G,F],E=6,L=6,I=3,D=2,O=1,T=new Float32Array(I*L*E),M=new Float32Array(D*L*E),z=new Float32Array(O*L*E);for(let P=0;P<E;P++){let w=P%3*2/3-1,k=P>2?0:-1,B=[w,k,0,w+0.6666666666666666,k,0,w+0.6666666666666666,k+1,0,w,k,0,w+0.6666666666666666,k+1,0,w,k+1,0];T.set(B,I*L*P),M.set(q,D*L*P);let l=[P,P,P,P,P,P];z.set(l,O*L*P)}let _=new U9;if(_.setAttribute("position",new nJ(T,I)),_.setAttribute("uv",new nJ(M,D)),_.setAttribute("faceIndex",new nJ(z,O)),Z.push(new S0(_,null)),K>o9)K--}return{lodMeshes:Z,sizeLods:Q,sigmas:$}}function jK(J,Q,$){let Z=new rJ(J,Q,$);return Z.texture.mapping=E7,Z.texture.name="PMREM.cubeUv",Z.scissorTest=!0,Z}function r8(J,Q,$,Z,K){J.viewport.set(Q,$,Z,K),J.scissor.set(Q,$,Z,K)}function sH(J,Q,$){return new tJ({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:uH,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:f6(),fragmentShader:`

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
		`,blending:E9,depthTest:!1,depthWrite:!1})}function iH(J,Q,$){let Z=new Float32Array(R8),K=new h(0,1,0);return new tJ({name:"SphericalGaussianBlur",defines:{n:R8,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:Z},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:K}},vertexShader:f6(),fragmentShader:`

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
		`,blending:E9,depthTest:!1,depthWrite:!1})}function vK(){return new tJ({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:f6(),fragmentShader:`

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
		`,blending:E9,depthTest:!1,depthWrite:!1})}function fK(){return new tJ({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:f6(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:E9,depthTest:!1,depthWrite:!1})}function f6(){return`

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
	`}class u$ extends rJ{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},Z=[$,$,$,$,$,$];this.texture=new I6(Z),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},Z=new BJ(5,5,5),K=new tJ({name:"CubemapFromEquirect",uniforms:F8($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:yJ,blending:E9});K.uniforms.tEquirect.value=Q;let W=new S0(Z,K),X=Q.minFilter;if(Q.minFilter===X8)Q.minFilter=VJ;return new T$(1,10,this).update(J,W),Q.minFilter=X,W.geometry.dispose(),W.material.dispose(),this}clear(J,Q=!0,$=!0,Z=!0){let K=J.getRenderTarget();for(let W=0;W<6;W++)J.setRenderTarget(this,W),J.clear(Q,$,Z);J.setRenderTarget(K)}}function oH(J){let Q=new WeakMap,$=new WeakMap,Z=null;function K(q,E=!1){if(q===null||q===void 0)return null;if(E)return X(q);return W(q)}function W(q){if(q&&q.isTexture){let E=q.mapping;if(E===Y6||E===H6)if(Q.has(q)){let L=Q.get(q).texture;return Y(L,q.mapping)}else{let L=q.image;if(L&&L.height>0){let I=new u$(L.height);return I.fromEquirectangularTexture(J,q),Q.set(q,I),q.addEventListener("dispose",U),Y(I.texture,q.mapping)}else return null}}return q}function X(q){if(q&&q.isTexture){let E=q.mapping,L=E===Y6||E===H6,I=E===s8||E===W8;if(L||I){let D=$.get(q),O=D!==void 0?D.texture.pmremVersion:0;if(q.isRenderTargetTexture&&q.pmremVersion!==O){if(Z===null)Z=new T7(J);return D=L?Z.fromEquirectangular(q,D):Z.fromCubemap(q,D),D.texture.pmremVersion=q.pmremVersion,$.set(q,D),D.texture}else if(D!==void 0)return D.texture;else{let T=q.image;if(L&&T&&T.height>0||I&&T&&H(T)){if(Z===null)Z=new T7(J);return D=L?Z.fromEquirectangular(q):Z.fromCubemap(q),D.texture.pmremVersion=q.pmremVersion,$.set(q,D),q.addEventListener("dispose",G),D.texture}else return null}}}return q}function Y(q,E){if(E===Y6)q.mapping=s8;else if(E===H6)q.mapping=W8;return q}function H(q){let E=0,L=6;for(let I=0;I<L;I++)if(q[I]!==void 0)E++;return E===L}function U(q){let E=q.target;E.removeEventListener("dispose",U);let L=Q.get(E);if(L!==void 0)Q.delete(E),L.dispose()}function G(q){let E=q.target;E.removeEventListener("dispose",G);let L=$.get(E);if(L!==void 0)$.delete(E),L.dispose()}function F(){if(Q=new WeakMap,$=new WeakMap,Z!==null)Z.dispose(),Z=null}return{get:K,dispose:F}}function aH(J){let Q={};function $(Z){if(Q[Z]!==void 0)return Q[Z];let K=J.getExtension(Z);return Q[Z]=K,K}return{has:function(Z){return $(Z)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(Z){let K=$(Z);if(K===null)K8("WebGLRenderer: "+Z+" extension not supported.");return K}}}function rH(J,Q,$,Z){let K={},W=new WeakMap;function X(F){let q=F.target;if(q.index!==null)Q.remove(q.index);for(let L in q.attributes)Q.remove(q.attributes[L]);q.removeEventListener("dispose",X),delete K[q.id];let E=W.get(q);if(E)Q.remove(E),W.delete(q);if(Z.releaseStatesOfGeometry(q),q.isInstancedBufferGeometry===!0)delete q._maxInstanceCount;$.memory.geometries--}function Y(F,q){if(K[q.id]===!0)return q;return q.addEventListener("dispose",X),K[q.id]=!0,$.memory.geometries++,q}function H(F){let q=F.attributes;for(let E in q)Q.update(q[E],J.ARRAY_BUFFER)}function U(F){let q=[],E=F.index,L=F.attributes.position,I=0;if(L===void 0)return;if(E!==null){let T=E.array;I=E.version;for(let M=0,z=T.length;M<z;M+=3){let _=T[M+0],P=T[M+1],w=T[M+2];q.push(_,P,P,w,w,_)}}else{let T=L.array;I=L.version;for(let M=0,z=T.length/3-1;M<z;M+=3){let _=M+0,P=M+1,w=M+2;q.push(_,P,P,w,w,_)}}let D=new(L.count>=65535?M6:V6)(q,1);D.version=I;let O=W.get(F);if(O)Q.remove(O);W.set(F,D)}function G(F){let q=W.get(F);if(q){let E=F.index;if(E!==null){if(q.version<E.version)U(F)}}else U(F);return W.get(F)}return{get:Y,update:H,getWireframeAttribute:G}}function tH(J,Q,$){let Z;function K(F){Z=F}let W,X;function Y(F){W=F.type,X=F.bytesPerElement}function H(F,q){J.drawElements(Z,q,W,F*X),$.update(q,Z,1)}function U(F,q,E){if(E===0)return;J.drawElementsInstanced(Z,q,W,F*X,E),$.update(q,Z,E)}function G(F,q,E){if(E===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,q,0,W,F,0,E);let I=0;for(let D=0;D<E;D++)I+=q[D];$.update(I,Z,1)}this.setMode=K,this.setIndex=Y,this.render=H,this.renderInstances=U,this.renderMultiDraw=G}function eH(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(W,X,Y){switch($.calls++,X){case J.TRIANGLES:$.triangles+=Y*(W/3);break;case J.LINES:$.lines+=Y*(W/2);break;case J.LINE_STRIP:$.lines+=Y*(W-1);break;case J.LINE_LOOP:$.lines+=Y*W;break;case J.POINTS:$.points+=Y*W;break;default:w0("WebGLInfo: Unknown draw mode:",X);break}}function K(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:K,update:Z}}function JU(J,Q,$){let Z=new WeakMap,K=new UJ;function W(X,Y,H){let U=X.morphTargetInfluences,G=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,F=G!==void 0?G.length:0,q=Z.get(Y);if(q===void 0||q.count!==F){let B=function(){w.dispose(),Z.delete(Y),Y.removeEventListener("dispose",B)};if(q!==void 0)q.texture.dispose();let E=Y.morphAttributes.position!==void 0,L=Y.morphAttributes.normal!==void 0,I=Y.morphAttributes.color!==void 0,D=Y.morphAttributes.position||[],O=Y.morphAttributes.normal||[],T=Y.morphAttributes.color||[],M=0;if(E===!0)M=1;if(L===!0)M=2;if(I===!0)M=3;let z=Y.attributes.position.count*M,_=1;if(z>Q.maxTextureSize)_=Math.ceil(z/Q.maxTextureSize),z=Q.maxTextureSize;let P=new Float32Array(z*_*4*F),w=new L6(P,z,_,F);w.type=_9,w.needsUpdate=!0;let k=M*4;for(let l=0;l<F;l++){let C=D[l],m=O[l],o=T[l],x=z*_*4*l;for(let u=0;u<C.count;u++){let c=u*k;if(E===!0)K.fromBufferAttribute(C,u),P[x+c+0]=K.x,P[x+c+1]=K.y,P[x+c+2]=K.z,P[x+c+3]=0;if(L===!0)K.fromBufferAttribute(m,u),P[x+c+4]=K.x,P[x+c+5]=K.y,P[x+c+6]=K.z,P[x+c+7]=0;if(I===!0)K.fromBufferAttribute(o,u),P[x+c+8]=K.x,P[x+c+9]=K.y,P[x+c+10]=K.z,P[x+c+11]=o.itemSize===4?K.w:1}}q={count:F,texture:w,size:new p0(z,_)},Z.set(Y,q),Y.addEventListener("dispose",B)}if(X.isInstancedMesh===!0&&X.morphTexture!==null)H.getUniforms().setValue(J,"morphTexture",X.morphTexture,$);else{let E=0;for(let I=0;I<U.length;I++)E+=U[I];let L=Y.morphTargetsRelative?1:1-E;H.getUniforms().setValue(J,"morphTargetBaseInfluence",L),H.getUniforms().setValue(J,"morphTargetInfluences",U)}H.getUniforms().setValue(J,"morphTargetsTexture",q.texture,$),H.getUniforms().setValue(J,"morphTargetsTextureSize",q.size)}return{update:W}}function QU(J,Q,$,Z,K){let W=new WeakMap;function X(U){let G=K.render.frame,F=U.geometry,q=Q.get(U,F);if(W.get(q)!==G)Q.update(q),W.set(q,G);if(U.isInstancedMesh){if(U.hasEventListener("dispose",H)===!1)U.addEventListener("dispose",H);if(W.get(U)!==G){if($.update(U.instanceMatrix,J.ARRAY_BUFFER),U.instanceColor!==null)$.update(U.instanceColor,J.ARRAY_BUFFER);W.set(U,G)}}if(U.isSkinnedMesh){let E=U.skeleton;if(W.get(E)!==G)E.update(),W.set(E,G)}return q}function Y(){W=new WeakMap}function H(U){let G=U.target;if(G.removeEventListener("dispose",H),Z.releaseStatesOfObject(G),$.remove(G.instanceMatrix),G.instanceColor!==null)$.remove(G.instanceColor)}return{update:X,dispose:Y}}var $U={[RQ]:"LINEAR_TONE_MAPPING",[kQ]:"REINHARD_TONE_MAPPING",[LQ]:"CINEON_TONE_MAPPING",[D7]:"ACES_FILMIC_TONE_MAPPING",[MQ]:"AGX_TONE_MAPPING",[zQ]:"NEUTRAL_TONE_MAPPING",[VQ]:"CUSTOM_TONE_MAPPING"};function ZU(J,Q,$,Z,K,W){let X=new rJ(Q,$,{type:J,depthBuffer:K,stencilBuffer:W,samples:Z?4:0,depthTexture:K?new i9(Q,$):void 0}),Y=new rJ(Q,$,{type:w9,depthBuffer:!1,stencilBuffer:!1}),H=new U9;H.setAttribute("position",new lJ([-1,3,0,-1,-1,0,3,-1,0],3)),H.setAttribute("uv",new lJ([0,2,0,0,2,0],2));let U=new E$({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),G=new S0(H,U),F=new I7(-1,1,1,-1,0,1),q=null,E=null,L=!1,I,D=null,O=[],T=!1;this.setSize=function(M,z){X.setSize(M,z),Y.setSize(M,z);for(let _=0;_<O.length;_++){let P=O[_];if(P.setSize)P.setSize(M,z)}},this.setEffects=function(M){O=M,T=O.length>0&&O[0].isRenderPass===!0;let{width:z,height:_}=X;for(let P=0;P<O.length;P++){let w=O[P];if(w.setSize)w.setSize(z,_)}},this.begin=function(M,z){if(L)return!1;if(M.toneMapping===Y9&&O.length===0)return!1;if(D=z,z!==null){let{width:_,height:P}=z;if(X.width!==_||X.height!==P)this.setSize(_,P)}if(T===!1)M.setRenderTarget(X);return I=M.toneMapping,M.toneMapping=Y9,!0},this.hasRenderPass=function(){return T},this.end=function(M,z){M.toneMapping=I,L=!0;let _=X,P=Y;for(let w=0;w<O.length;w++){let k=O[w];if(k.enabled===!1)continue;if(k.render(M,P,_,z),k.needsSwap!==!1){let B=_;_=P,P=B}}if(q!==M.outputColorSpace||E!==M.toneMapping){if(q=M.outputColorSpace,E=M.toneMapping,U.defines={},u0.getTransfer(q)===YJ)U.defines.SRGB_TRANSFER="";let w=$U[E];if(w)U.defines[w]="";U.needsUpdate=!0}U.uniforms.tDiffuse.value=_.texture,M.setRenderTarget(D),M.render(G,F),D=null,L=!1},this.isCompositing=function(){return L},this.dispose=function(){if(X.depthTexture)X.depthTexture.dispose();X.dispose(),Y.dispose(),H.dispose(),U.dispose()}}var JW=new _J,l$=new i9(1,1),QW=new L6,$W=new F$,ZW=new I6,yK=[],bK=[],hK=new Float32Array(16),xK=new Float32Array(9),gK=new Float32Array(4);function t8(J,Q,$){let Z=J[0];if(Z<=0||Z>0)return J;let K=Q*$,W=yK[K];if(W===void 0)W=new Float32Array(K),yK[K]=W;if(Q!==0){Z.toArray(W,0);for(let X=1,Y=0;X!==Q;++X)Y+=$,J[X].toArray(W,Y)}return W}function IJ(J,Q){if(J.length!==Q.length)return!1;for(let $=0,Z=J.length;$<Z;$++)if(J[$]!==Q[$])return!1;return!0}function AJ(J,Q){for(let $=0,Z=Q.length;$<Z;$++)J[$]=Q[$]}function y6(J,Q){let $=bK[Q];if($===void 0)$=new Int32Array(Q),bK[Q]=$;for(let Z=0;Z!==Q;++Z)$[Z]=J.allocateTextureUnit();return $}function KU(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function WU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(IJ($,Q))return;J.uniform2fv(this.addr,Q),AJ($,Q)}}function XU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(IJ($,Q))return;J.uniform3fv(this.addr,Q),AJ($,Q)}}function YU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(IJ($,Q))return;J.uniform4fv(this.addr,Q),AJ($,Q)}}function HU(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(IJ($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),AJ($,Q)}else{if(IJ($,Z))return;gK.set(Z),J.uniformMatrix2fv(this.addr,!1,gK),AJ($,Z)}}function UU(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(IJ($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),AJ($,Q)}else{if(IJ($,Z))return;xK.set(Z),J.uniformMatrix3fv(this.addr,!1,xK),AJ($,Z)}}function qU(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(IJ($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),AJ($,Q)}else{if(IJ($,Z))return;hK.set(Z),J.uniformMatrix4fv(this.addr,!1,hK),AJ($,Z)}}function GU(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function NU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(IJ($,Q))return;J.uniform2iv(this.addr,Q),AJ($,Q)}}function FU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(IJ($,Q))return;J.uniform3iv(this.addr,Q),AJ($,Q)}}function OU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(IJ($,Q))return;J.uniform4iv(this.addr,Q),AJ($,Q)}}function DU(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function EU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(IJ($,Q))return;J.uniform2uiv(this.addr,Q),AJ($,Q)}}function RU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(IJ($,Q))return;J.uniform3uiv(this.addr,Q),AJ($,Q)}}function kU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(IJ($,Q))return;J.uniform4uiv(this.addr,Q),AJ($,Q)}}function LU(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;let W;if(this.type===J.SAMPLER_2D_SHADOW)l$.compareFunction=$.isReversedDepthBuffer()?k6:R6,W=l$;else W=JW;$.setTexture2D(Q||W,K)}function VU(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTexture3D(Q||$W,K)}function MU(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTextureCube(Q||ZW,K)}function zU(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTexture2DArray(Q||QW,K)}function BU(J){switch(J){case 5126:return KU;case 35664:return WU;case 35665:return XU;case 35666:return YU;case 35674:return HU;case 35675:return UU;case 35676:return qU;case 5124:case 35670:return GU;case 35667:case 35671:return NU;case 35668:case 35672:return FU;case 35669:case 35673:return OU;case 5125:return DU;case 36294:return EU;case 36295:return RU;case 36296:return kU;case 35678:case 36198:case 36298:case 36306:case 35682:return LU;case 35679:case 36299:case 36307:return VU;case 35680:case 36300:case 36308:case 36293:return MU;case 36289:case 36303:case 36311:case 36292:return zU}}function IU(J,Q){J.uniform1fv(this.addr,Q)}function AU(J,Q){let $=t8(Q,this.size,2);J.uniform2fv(this.addr,$)}function PU(J,Q){let $=t8(Q,this.size,3);J.uniform3fv(this.addr,$)}function CU(J,Q){let $=t8(Q,this.size,4);J.uniform4fv(this.addr,$)}function _U(J,Q){let $=t8(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function wU(J,Q){let $=t8(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function TU(J,Q){let $=t8(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function SU(J,Q){J.uniform1iv(this.addr,Q)}function jU(J,Q){J.uniform2iv(this.addr,Q)}function vU(J,Q){J.uniform3iv(this.addr,Q)}function fU(J,Q){J.uniform4iv(this.addr,Q)}function yU(J,Q){J.uniform1uiv(this.addr,Q)}function bU(J,Q){J.uniform2uiv(this.addr,Q)}function hU(J,Q){J.uniform3uiv(this.addr,Q)}function xU(J,Q){J.uniform4uiv(this.addr,Q)}function gU(J,Q,$){let Z=this.cache,K=Q.length,W=y6($,K);if(!IJ(Z,W))J.uniform1iv(this.addr,W),AJ(Z,W);let X;if(this.type===J.SAMPLER_2D_SHADOW)X=l$;else X=JW;for(let Y=0;Y!==K;++Y)$.setTexture2D(Q[Y]||X,W[Y])}function pU(J,Q,$){let Z=this.cache,K=Q.length,W=y6($,K);if(!IJ(Z,W))J.uniform1iv(this.addr,W),AJ(Z,W);for(let X=0;X!==K;++X)$.setTexture3D(Q[X]||$W,W[X])}function mU(J,Q,$){let Z=this.cache,K=Q.length,W=y6($,K);if(!IJ(Z,W))J.uniform1iv(this.addr,W),AJ(Z,W);for(let X=0;X!==K;++X)$.setTextureCube(Q[X]||ZW,W[X])}function lU(J,Q,$){let Z=this.cache,K=Q.length,W=y6($,K);if(!IJ(Z,W))J.uniform1iv(this.addr,W),AJ(Z,W);for(let X=0;X!==K;++X)$.setTexture2DArray(Q[X]||QW,W[X])}function dU(J){switch(J){case 5126:return IU;case 35664:return AU;case 35665:return PU;case 35666:return CU;case 35674:return _U;case 35675:return wU;case 35676:return TU;case 5124:case 35670:return SU;case 35667:case 35671:return jU;case 35668:case 35672:return vU;case 35669:case 35673:return fU;case 5125:return yU;case 36294:return bU;case 36295:return hU;case 36296:return xU;case 35678:case 36198:case 36298:case 36306:case 35682:return gU;case 35679:case 36299:case 36307:return pU;case 35680:case 36300:case 36308:case 36293:return mU;case 36289:case 36303:case 36311:case 36292:return lU}}class KW{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=BU(Q.type)}}class WW{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=dU(Q.type)}}class XW{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let Z=this.seq;for(let K=0,W=Z.length;K!==W;++K){let X=Z[K];X.setValue(J,Q[X.id],$)}}}var p$=/(\w+)(\])?(\[|\.)?/g;function pK(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function uU(J,Q,$){let Z=J.name,K=Z.length;p$.lastIndex=0;while(!0){let W=p$.exec(Z),X=p$.lastIndex,Y=W[1],H=W[2]==="]",U=W[3];if(H)Y=Y|0;if(U===void 0||U==="["&&X+2===K){pK($,U===void 0?new KW(Y,J,Q):new WW(Y,J,Q));break}else{let F=$.map[Y];if(F===void 0)F=new XW(Y),pK($,F);$=F}}}class w7{constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let W=0;W<$;++W){let X=J.getActiveUniform(Q,W),Y=J.getUniformLocation(Q,X.name);uU(X,Y,this)}let Z=[],K=[];for(let W of this.seq)if(W.type===J.SAMPLER_2D_SHADOW||W.type===J.SAMPLER_CUBE_SHADOW||W.type===J.SAMPLER_2D_ARRAY_SHADOW)Z.push(W);else K.push(W);if(Z.length>0)this.seq=Z.concat(K)}setValue(J,Q,$,Z){let K=this.map[Q];if(K!==void 0)K.setValue(J,$,Z)}setOptional(J,Q,$){let Z=Q[$];if(Z!==void 0)this.setValue(J,$,Z)}static upload(J,Q,$,Z){for(let K=0,W=Q.length;K!==W;++K){let X=Q[K],Y=$[X.id];if(Y.needsUpdate!==!1)X.setValue(J,Y.value,Z)}}static seqWithValue(J,Q){let $=[];for(let Z=0,K=J.length;Z!==K;++Z){let W=J[Z];if(W.id in Q)$.push(W)}return $}}function mK(J,Q,$){let Z=J.createShader(Q);return J.shaderSource(Z,$),J.compileShader(Z),Z}var cU=37297,nU=0;function sU(J,Q){let $=J.split(`
`),Z=[],K=Math.max(Q-6,0),W=Math.min(Q+6,$.length);for(let X=K;X<W;X++){let Y=X+1;Z.push(`${Y===Q?">":" "} ${Y}: ${$[X]}`)}return Z.join(`
`)}var lK=new j0;function iU(J){u0._getMatrix(lK,u0.workingColorSpace,J);let Q=`mat3( ${lK.elements.map(($)=>$.toFixed(4))} )`;switch(u0.getTransfer(J)){case Y$:return[Q,"LinearTransferOETF"];case YJ:return[Q,"sRGBTransferOETF"];default:return T0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function dK(J,Q,$){let Z=J.getShaderParameter(Q,J.COMPILE_STATUS),W=(J.getShaderInfoLog(Q)||"").trim();if(Z&&W==="")return"";let X=/ERROR: 0:(\d+)/.exec(W);if(X){let Y=parseInt(X[1]);return $.toUpperCase()+`

`+W+`

`+sU(J.getShaderSource(Q),Y)}else return W}function oU(J,Q){let $=iU(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( value.rgb * ${$[0]}, value.a ) );`,"}"].join(`
`)}var aU={[RQ]:"Linear",[kQ]:"Reinhard",[LQ]:"Cineon",[D7]:"ACESFilmic",[MQ]:"AgX",[zQ]:"Neutral",[VQ]:"Custom"};function rU(J,Q){let $=aU[Q];if($===void 0)return T0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var v6=new h;function tU(){u0.getLuminanceCoefficients(v6);let J=v6.x.toFixed(4),Q=v6.y.toFixed(4),$=v6.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function eU(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_7).join(`
`)}function J5(J){let Q=[];for(let $ in J){let Z=J[$];if(Z===!1)continue;Q.push("#define "+$+" "+Z)}return Q.join(`
`)}function Q5(J,Q){let $={},Z=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let K=0;K<Z;K++){let W=J.getActiveAttrib(Q,K),X=W.name,Y=1;if(W.type===J.FLOAT_MAT2)Y=2;if(W.type===J.FLOAT_MAT3)Y=3;if(W.type===J.FLOAT_MAT4)Y=4;$[X]={type:W.type,location:J.getAttribLocation(Q,X),locationSize:Y}}return $}function _7(J){return J!==""}function uK(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function cK(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var $5=/^[ \t]*#include +<([\w\d./]+)>/gm;function d$(J){return J.replace($5,K5)}var Z5=new Map;function K5(J,Q){let $=h0[Q];if($===void 0){let Z=Z5.get(Q);if(Z!==void 0)$=h0[Z],T0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,Z);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+Q+">")}return d$($)}var W5=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nK(J){return J.replace(W5,X5)}function X5(J,Q,$,Z){let K="";for(let W=parseInt(Q);W<parseInt($);W++)K+=Z.replace(/\[\s*i\s*\]/g,"[ "+W+" ]").replace(/UNROLLED_LOOP_INDEX/g,W);return K}function sK(J){let Q=`precision ${J.precision} float;
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
#define LOW_PRECISION`;return Q}var Y5={[F7]:"SHADOWMAP_TYPE_PCF",[u8]:"SHADOWMAP_TYPE_VSM"};function H5(J){return Y5[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var U5={[s8]:"ENVMAP_TYPE_CUBE",[W8]:"ENVMAP_TYPE_CUBE",[E7]:"ENVMAP_TYPE_CUBE_UV"};function q5(J){if(J.envMap===!1)return"ENVMAP_TYPE_CUBE";return U5[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var G5={[W8]:"ENVMAP_MODE_REFRACTION"};function N5(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return G5[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var F5={[JK]:"ENVMAP_BLENDING_MULTIPLY",[QK]:"ENVMAP_BLENDING_MIX",[$K]:"ENVMAP_BLENDING_ADD"};function O5(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return F5[J.combine]||"ENVMAP_BLENDING_NONE"}function D5(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let $=Math.log2(Q)-2,Z=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,$),112)),texelHeight:Z,maxMip:$}}function E5(J,Q,$,Z){let K=J.getContext(),W=$.defines,X=$.vertexShader,Y=$.fragmentShader,H=H5($),U=q5($),G=N5($),F=O5($),q=D5($),E=eU($),L=J5(W),I=K.createProgram(),D,O,T=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(D=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,L].filter(_7).join(`
`),D.length>0)D+=`
`;if(O=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,L].filter(_7).join(`
`),O.length>0)O+=`
`}else D=[sK($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,L,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+G:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexNormals?"#define HAS_NORMAL":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+H:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(_7).join(`
`),O=[sK($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,L,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+U:"",$.envMap?"#define "+G:"",$.envMap?"#define "+F:"",q?"#define CUBEUV_TEXEL_WIDTH "+q.texelWidth:"",q?"#define CUBEUV_TEXEL_HEIGHT "+q.texelHeight:"",q?"#define CUBEUV_MAX_MIP "+q.maxMip+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor?"#define USE_COLOR":"",$.vertexAlphas||$.batchingColor?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+H:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==Y9?"#define TONE_MAPPING":"",$.toneMapping!==Y9?h0.tonemapping_pars_fragment:"",$.toneMapping!==Y9?rU("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",h0.colorspace_pars_fragment,oU("linearToOutputTexel",$.outputColorSpace),tU(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(_7).join(`
`);if(X=d$(X),X=uK(X,$),X=cK(X,$),Y=d$(Y),Y=uK(Y,$),Y=cK(Y,$),X=nK(X),Y=nK(Y),$.isRawShaderMaterial!==!0)T=`#version 300 es
`,D=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+D,O=["#define varying in",$.glslVersion===H$?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===H$?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+O;let M=T+D+X,z=T+O+Y,_=mK(K,K.VERTEX_SHADER,M),P=mK(K,K.FRAGMENT_SHADER,z);if(K.attachShader(I,_),K.attachShader(I,P),$.index0AttributeName!==void 0)K.bindAttribLocation(I,0,$.index0AttributeName);else if($.hasPositionAttribute===!0)K.bindAttribLocation(I,0,"position");K.linkProgram(I);function w(C){if(J.debug.checkShaderErrors){let m=K.getProgramInfoLog(I)||"",o=K.getShaderInfoLog(_)||"",x=K.getShaderInfoLog(P)||"",u=m.trim(),c=o.trim(),g=x.trim(),t=!0,$0=!0;if(K.getProgramParameter(I,K.LINK_STATUS)===!1)if(t=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(K,I,_,P);else{let G0=dK(K,_,"vertex"),k0=dK(K,P,"fragment");w0("WebGLProgram: Shader Error "+K.getError()+" - VALIDATE_STATUS "+K.getProgramParameter(I,K.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+u+`
`+G0+`
`+k0)}else if(u!=="")T0("WebGLProgram: Program Info Log:",u);else if(c===""||g==="")$0=!1;if($0)C.diagnostics={runnable:t,programLog:u,vertexShader:{log:c,prefix:D},fragmentShader:{log:g,prefix:O}}}K.deleteShader(_),K.deleteShader(P),k=new w7(K,I),B=Q5(K,I)}let k;this.getUniforms=function(){if(k===void 0)w(this);return k};let B;this.getAttributes=function(){if(B===void 0)w(this);return B};let l=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(l===!1)l=K.getProgramParameter(I,cU);return l},this.destroy=function(){Z.releaseStatesOfProgram(this),K.deleteProgram(I),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=nU++,this.cacheKey=Q,this.usedTimes=1,this.program=I,this.vertexShader=_,this.fragmentShader=P,this}var R5=0;class YW{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,Q,$){let Z=this._getShaderCacheForMaterial(J);if(Z.has(Q)===!1)Z.add(Q),Q.usedTimes++;if(Z.has($)===!1)Z.add($),$.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new HW(J),Q.set(J,$);return $}}class HW{constructor(J){this.id=R5++,this.code=J,this.usedTimes=0}}function k5(J){return J===U8||J===D6||J===E6}function L5(J,Q,$,Z,K,W){let X=new M7,Y=new YW,H=new Set,U=[],G=new Map,F=Z.logarithmicDepthBuffer,q=Z.precision,E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function L(k){if(H.add(k),k===0)return"uv";return`uv${k}`}function I(k,B,l,C,m,o){let x=C.fog,u=m.geometry,c=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?C.environment:null,g=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,t=Q.get(k.envMap||c,g),$0=!!t&&t.mapping===E7?t.image.height:null,G0=E[k.type];if(k.precision!==null){if(q=Z.getMaxPrecision(k.precision),q!==k.precision)T0("WebGLProgram.getParameters:",k.precision,"not supported, using",q,"instead.")}let k0=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,M0=k0!==void 0?k0.length:0,a0=0;if(u.morphAttributes.position!==void 0)a0=1;if(u.morphAttributes.normal!==void 0)a0=2;if(u.morphAttributes.color!==void 0)a0=3;let r0,i,X0,E0;if(G0){let _0=V9[G0];r0=_0.vertexShader,i=_0.fragmentShader}else{r0=k.vertexShader,i=k.fragmentShader;let _0=Y.getVertexShaderStage(k),i0=Y.getFragmentShaderStage(k);Y.update(k,_0,i0),X0=_0.id,E0=i0.id}let R0=J.getRenderTarget(),A0=J.state.buffers.depth.getReversed(),x0=m.isInstancedMesh===!0,v0=m.isBatchedMesh===!0,y0=!!k.map,t0=!!k.matcap,b0=!!t,l0=!!k.aoMap,FJ=!!k.lightMap,zJ=!!k.bumpMap&&k.wireframe===!1,KJ=!!k.normalMap,GJ=!!k.displacementMap,OJ=!!k.emissiveMap,qJ=!!k.metalnessMap,v=!!k.roughnessMap,CJ=k.anisotropy>0,c0=k.clearcoat>0,s0=k.dispersion>0,V=k.iridescence>0,R=k.sheen>0,S=k.transmission>0,p=CJ&&!!k.anisotropyMap,e=c0&&!!k.clearcoatMap,Q0=c0&&!!k.clearcoatNormalMap,H0=c0&&!!k.clearcoatRoughnessMap,d=V&&!!k.iridescenceMap,s=V&&!!k.iridescenceThicknessMap,U0=R&&!!k.sheenColorMap,z0=R&&!!k.sheenRoughnessMap,N0=!!k.specularMap,Z0=!!k.specularColorMap,I0=!!k.specularIntensityMap,C0=S&&!!k.transmissionMap,d0=S&&!!k.thicknessMap,f=!!k.gradientMap,W0=!!k.alphaMap,n=k.alphaTest>0,q0=!!k.alphaHash,D0=!!k.extensions,r=Y9;if(k.toneMapped){if(R0===null||R0.isXRRenderTarget===!0)r=J.toneMapping}let Y0={shaderID:G0,shaderType:k.type,shaderName:k.name,vertexShader:r0,fragmentShader:i,defines:k.defines,customVertexShaderID:X0,customFragmentShaderID:E0,isRawShaderMaterial:k.isRawShaderMaterial===!0,glslVersion:k.glslVersion,precision:q,batching:v0,batchingColor:v0&&m._colorsTexture!==null,instancing:x0,instancingColor:x0&&m.instanceColor!==null,instancingMorph:x0&&m.morphTexture!==null,outputColorSpace:R0===null?J.outputColorSpace:R0.isXRRenderTarget===!0?R0.texture.colorSpace:u0.workingColorSpace,alphaToCoverage:!!k.alphaToCoverage,map:y0,matcap:t0,envMap:b0,envMapMode:b0&&t.mapping,envMapCubeUVHeight:$0,aoMap:l0,lightMap:FJ,bumpMap:zJ,normalMap:KJ,displacementMap:GJ,emissiveMap:OJ,normalMapObjectSpace:KJ&&k.normalMapType===FK,normalMapTangentSpace:KJ&&k.normalMapType===W$,packedNormalMap:KJ&&k.normalMapType===W$&&k5(k.normalMap.format),metalnessMap:qJ,roughnessMap:v,anisotropy:CJ,anisotropyMap:p,clearcoat:c0,clearcoatMap:e,clearcoatNormalMap:Q0,clearcoatRoughnessMap:H0,dispersion:s0,iridescence:V,iridescenceMap:d,iridescenceThicknessMap:s,sheen:R,sheenColorMap:U0,sheenRoughnessMap:z0,specularMap:N0,specularColorMap:Z0,specularIntensityMap:I0,transmission:S,transmissionMap:C0,thicknessMap:d0,gradientMap:f,opaque:k.transparent===!1&&k.blending===O7&&k.alphaToCoverage===!1,alphaMap:W0,alphaTest:n,alphaHash:q0,combine:k.combine,mapUv:y0&&L(k.map.channel),aoMapUv:l0&&L(k.aoMap.channel),lightMapUv:FJ&&L(k.lightMap.channel),bumpMapUv:zJ&&L(k.bumpMap.channel),normalMapUv:KJ&&L(k.normalMap.channel),displacementMapUv:GJ&&L(k.displacementMap.channel),emissiveMapUv:OJ&&L(k.emissiveMap.channel),metalnessMapUv:qJ&&L(k.metalnessMap.channel),roughnessMapUv:v&&L(k.roughnessMap.channel),anisotropyMapUv:p&&L(k.anisotropyMap.channel),clearcoatMapUv:e&&L(k.clearcoatMap.channel),clearcoatNormalMapUv:Q0&&L(k.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H0&&L(k.clearcoatRoughnessMap.channel),iridescenceMapUv:d&&L(k.iridescenceMap.channel),iridescenceThicknessMapUv:s&&L(k.iridescenceThicknessMap.channel),sheenColorMapUv:U0&&L(k.sheenColorMap.channel),sheenRoughnessMapUv:z0&&L(k.sheenRoughnessMap.channel),specularMapUv:N0&&L(k.specularMap.channel),specularColorMapUv:Z0&&L(k.specularColorMap.channel),specularIntensityMapUv:I0&&L(k.specularIntensityMap.channel),transmissionMapUv:C0&&L(k.transmissionMap.channel),thicknessMapUv:d0&&L(k.thicknessMap.channel),alphaMapUv:W0&&L(k.alphaMap.channel),vertexTangents:!!u.attributes.tangent&&(KJ||CJ),vertexNormals:!!u.attributes.normal,vertexColors:k.vertexColors,vertexAlphas:k.vertexColors===!0&&!!u.attributes.color&&u.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!u.attributes.uv&&(y0||W0),fog:!!x,useFog:k.fog===!0,fogExp2:!!x&&x.isFogExp2,flatShading:k.wireframe===!1&&(k.flatShading===!0||u.attributes.normal===void 0&&KJ===!1&&(k.isMeshLambertMaterial||k.isMeshPhongMaterial||k.isMeshStandardMaterial||k.isMeshPhysicalMaterial)),sizeAttenuation:k.sizeAttenuation===!0,logarithmicDepthBuffer:F,reversedDepthBuffer:A0,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:u.attributes.position!==void 0,morphTargets:u.morphAttributes.position!==void 0,morphNormals:u.morphAttributes.normal!==void 0,morphColors:u.morphAttributes.color!==void 0,morphTargetsCount:M0,morphTextureStride:a0,numDirLights:B.directional.length,numPointLights:B.point.length,numSpotLights:B.spot.length,numSpotLightMaps:B.spotLightMap.length,numRectAreaLights:B.rectArea.length,numHemiLights:B.hemi.length,numDirLightShadows:B.directionalShadowMap.length,numPointLightShadows:B.pointShadowMap.length,numSpotLightShadows:B.spotShadowMap.length,numSpotLightShadowsWithMaps:B.numSpotLightShadowsWithMaps,numLightProbes:B.numLightProbes,numLightProbeGrids:o.length,numClippingPlanes:W.numPlanes,numClipIntersection:W.numIntersection,dithering:k.dithering,shadowMapEnabled:J.shadowMap.enabled&&l.length>0,shadowMapType:J.shadowMap.type,toneMapping:r,decodeVideoTexture:y0&&k.map.isVideoTexture===!0&&u0.getTransfer(k.map.colorSpace)===YJ,decodeVideoTextureEmissive:OJ&&k.emissiveMap.isVideoTexture===!0&&u0.getTransfer(k.emissiveMap.colorSpace)===YJ,premultipliedAlpha:k.premultipliedAlpha,doubleSided:k.side===D9,flipSided:k.side===yJ,useDepthPacking:k.depthPacking>=0,depthPacking:k.depthPacking||0,index0AttributeName:k.index0AttributeName,extensionClipCullDistance:D0&&k.extensions.clipCullDistance===!0&&$.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(D0&&k.extensions.multiDraw===!0||v0)&&$.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:$.has("KHR_parallel_shader_compile"),customProgramCacheKey:k.customProgramCacheKey()};return Y0.vertexUv1s=H.has(1),Y0.vertexUv2s=H.has(2),Y0.vertexUv3s=H.has(3),H.clear(),Y0}function D(k){let B=[];if(k.shaderID)B.push(k.shaderID);else B.push(k.customVertexShaderID),B.push(k.customFragmentShaderID);if(k.defines!==void 0)for(let l in k.defines)B.push(l),B.push(k.defines[l]);if(k.isRawShaderMaterial===!1)O(B,k),T(B,k),B.push(J.outputColorSpace);return B.push(k.customProgramCacheKey),B.join()}function O(k,B){k.push(B.precision),k.push(B.outputColorSpace),k.push(B.envMapMode),k.push(B.envMapCubeUVHeight),k.push(B.mapUv),k.push(B.alphaMapUv),k.push(B.lightMapUv),k.push(B.aoMapUv),k.push(B.bumpMapUv),k.push(B.normalMapUv),k.push(B.displacementMapUv),k.push(B.emissiveMapUv),k.push(B.metalnessMapUv),k.push(B.roughnessMapUv),k.push(B.anisotropyMapUv),k.push(B.clearcoatMapUv),k.push(B.clearcoatNormalMapUv),k.push(B.clearcoatRoughnessMapUv),k.push(B.iridescenceMapUv),k.push(B.iridescenceThicknessMapUv),k.push(B.sheenColorMapUv),k.push(B.sheenRoughnessMapUv),k.push(B.specularMapUv),k.push(B.specularColorMapUv),k.push(B.specularIntensityMapUv),k.push(B.transmissionMapUv),k.push(B.thicknessMapUv),k.push(B.combine),k.push(B.fogExp2),k.push(B.sizeAttenuation),k.push(B.morphTargetsCount),k.push(B.morphAttributeCount),k.push(B.numDirLights),k.push(B.numPointLights),k.push(B.numSpotLights),k.push(B.numSpotLightMaps),k.push(B.numHemiLights),k.push(B.numRectAreaLights),k.push(B.numDirLightShadows),k.push(B.numPointLightShadows),k.push(B.numSpotLightShadows),k.push(B.numSpotLightShadowsWithMaps),k.push(B.numLightProbes),k.push(B.shadowMapType),k.push(B.toneMapping),k.push(B.numClippingPlanes),k.push(B.numClipIntersection),k.push(B.depthPacking)}function T(k,B){if(X.disableAll(),B.instancing)X.enable(0);if(B.instancingColor)X.enable(1);if(B.instancingMorph)X.enable(2);if(B.matcap)X.enable(3);if(B.envMap)X.enable(4);if(B.normalMapObjectSpace)X.enable(5);if(B.normalMapTangentSpace)X.enable(6);if(B.clearcoat)X.enable(7);if(B.iridescence)X.enable(8);if(B.alphaTest)X.enable(9);if(B.vertexColors)X.enable(10);if(B.vertexAlphas)X.enable(11);if(B.vertexUv1s)X.enable(12);if(B.vertexUv2s)X.enable(13);if(B.vertexUv3s)X.enable(14);if(B.vertexTangents)X.enable(15);if(B.anisotropy)X.enable(16);if(B.alphaHash)X.enable(17);if(B.batching)X.enable(18);if(B.dispersion)X.enable(19);if(B.batchingColor)X.enable(20);if(B.gradientMap)X.enable(21);if(B.packedNormalMap)X.enable(22);if(B.vertexNormals)X.enable(23);if(k.push(X.mask),X.disableAll(),B.fog)X.enable(0);if(B.useFog)X.enable(1);if(B.flatShading)X.enable(2);if(B.logarithmicDepthBuffer)X.enable(3);if(B.reversedDepthBuffer)X.enable(4);if(B.skinning)X.enable(5);if(B.morphTargets)X.enable(6);if(B.morphNormals)X.enable(7);if(B.morphColors)X.enable(8);if(B.premultipliedAlpha)X.enable(9);if(B.shadowMapEnabled)X.enable(10);if(B.doubleSided)X.enable(11);if(B.flipSided)X.enable(12);if(B.useDepthPacking)X.enable(13);if(B.dithering)X.enable(14);if(B.transmission)X.enable(15);if(B.sheen)X.enable(16);if(B.opaque)X.enable(17);if(B.pointsUvs)X.enable(18);if(B.decodeVideoTexture)X.enable(19);if(B.decodeVideoTextureEmissive)X.enable(20);if(B.alphaToCoverage)X.enable(21);if(B.numLightProbeGrids>0)X.enable(22);if(B.hasPositionAttribute)X.enable(23);k.push(X.mask)}function M(k){let B=E[k.type],l;if(B){let C=V9[B];l=AK.clone(C.uniforms)}else l=k.uniforms;return l}function z(k,B){let l=G.get(B);if(l!==void 0)++l.usedTimes;else l=new E5(J,B,k,K),U.push(l),G.set(B,l);return l}function _(k){if(--k.usedTimes===0){let B=U.indexOf(k);U[B]=U[U.length-1],U.pop(),G.delete(k.cacheKey),k.destroy()}}function P(k){Y.remove(k)}function w(){Y.dispose()}return{getParameters:I,getProgramCacheKey:D,getUniforms:M,acquireProgram:z,releaseProgram:_,releaseShaderCache:P,programs:U,dispose:w}}function V5(){let J=new WeakMap;function Q(X){return J.has(X)}function $(X){let Y=J.get(X);if(Y===void 0)Y={},J.set(X,Y);return Y}function Z(X){J.delete(X)}function K(X,Y,H){J.get(X)[Y]=H}function W(){J=new WeakMap}return{has:Q,get:$,remove:Z,update:K,dispose:W}}function M5(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function iK(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function oK(){let J=[],Q=0,$=[],Z=[],K=[];function W(){Q=0,$.length=0,Z.length=0,K.length=0}function X(q){let E=0;if(q.isInstancedMesh)E+=2;if(q.isSkinnedMesh)E+=1;return E}function Y(q,E,L,I,D,O){let T=J[Q];if(T===void 0)T={id:q.id,object:q,geometry:E,material:L,materialVariant:X(q),groupOrder:I,renderOrder:q.renderOrder,z:D,group:O},J[Q]=T;else T.id=q.id,T.object=q,T.geometry=E,T.material=L,T.materialVariant=X(q),T.groupOrder=I,T.renderOrder=q.renderOrder,T.z=D,T.group=O;return Q++,T}function H(q,E,L,I,D,O){let T=Y(q,E,L,I,D,O);if(L.transmission>0)Z.push(T);else if(L.transparent===!0)K.push(T);else $.push(T)}function U(q,E,L,I,D,O){let T=Y(q,E,L,I,D,O);if(L.transmission>0)Z.unshift(T);else if(L.transparent===!0)K.unshift(T);else $.unshift(T)}function G(q,E,L){if($.length>1)$.sort(q||M5);if(Z.length>1)Z.sort(E||iK);if(K.length>1)K.sort(E||iK);if(L)$.reverse(),Z.reverse(),K.reverse()}function F(){for(let q=Q,E=J.length;q<E;q++){let L=J[q];if(L.id===null)break;L.id=null,L.object=null,L.geometry=null,L.material=null,L.group=null}}return{opaque:$,transmissive:Z,transparent:K,init:W,push:H,unshift:U,finish:F,sort:G}}function z5(){let J=new WeakMap;function Q(Z,K){let W=J.get(Z),X;if(W===void 0)X=new oK,J.set(Z,[X]);else if(K>=W.length)X=new oK,W.push(X);else X=W[K];return X}function $(){J=new WeakMap}return{get:Q,dispose:$}}function B5(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={direction:new h,color:new m0};break;case"SpotLight":$={position:new h,direction:new h,color:new m0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new h,color:new m0,distance:0,decay:0};break;case"HemisphereLight":$={direction:new h,skyColor:new m0,groundColor:new m0};break;case"RectAreaLight":$={color:new m0,position:new h,halfWidth:new h,halfHeight:new h};break}return J[Q.id]=$,$}}}function I5(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new p0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new p0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new p0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var A5=0;function P5(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function C5(J){let Q=new B5,$=I5(),Z={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)Z.probe.push(new h);let K=new h,W=new ZJ,X=new ZJ;function Y(U){let G=0,F=0,q=0;for(let B=0;B<9;B++)Z.probe[B].set(0,0,0);let E=0,L=0,I=0,D=0,O=0,T=0,M=0,z=0,_=0,P=0,w=0;U.sort(P5);for(let B=0,l=U.length;B<l;B++){let C=U[B],m=C.color,o=C.intensity,x=C.distance,u=null;if(C.shadow&&C.shadow.map)if(C.shadow.map.texture.format===U8)u=C.shadow.map.texture;else u=C.shadow.map.depthTexture||C.shadow.map.texture;if(C.isAmbientLight)G+=m.r*o,F+=m.g*o,q+=m.b*o;else if(C.isLightProbe){for(let c=0;c<9;c++)Z.probe[c].addScaledVector(C.sh.coefficients[c],o);w++}else if(C.isDirectionalLight){let c=Q.get(C);if(c.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let g=C.shadow,t=$.get(C);t.shadowIntensity=g.intensity,t.shadowBias=g.bias,t.shadowNormalBias=g.normalBias,t.shadowRadius=g.radius,t.shadowMapSize=g.mapSize,Z.directionalShadow[E]=t,Z.directionalShadowMap[E]=u,Z.directionalShadowMatrix[E]=C.shadow.matrix,T++}Z.directional[E]=c,E++}else if(C.isSpotLight){let c=Q.get(C);c.position.setFromMatrixPosition(C.matrixWorld),c.color.copy(m).multiplyScalar(o),c.distance=x,c.coneCos=Math.cos(C.angle),c.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),c.decay=C.decay,Z.spot[I]=c;let g=C.shadow;if(C.map){if(Z.spotLightMap[_]=C.map,_++,g.updateMatrices(C),C.castShadow)P++}if(Z.spotLightMatrix[I]=g.matrix,C.castShadow){let t=$.get(C);t.shadowIntensity=g.intensity,t.shadowBias=g.bias,t.shadowNormalBias=g.normalBias,t.shadowRadius=g.radius,t.shadowMapSize=g.mapSize,Z.spotShadow[I]=t,Z.spotShadowMap[I]=u,z++}I++}else if(C.isRectAreaLight){let c=Q.get(C);c.color.copy(m).multiplyScalar(o),c.halfWidth.set(C.width*0.5,0,0),c.halfHeight.set(0,C.height*0.5,0),Z.rectArea[D]=c,D++}else if(C.isPointLight){let c=Q.get(C);if(c.color.copy(C.color).multiplyScalar(C.intensity),c.distance=C.distance,c.decay=C.decay,C.castShadow){let g=C.shadow,t=$.get(C);t.shadowIntensity=g.intensity,t.shadowBias=g.bias,t.shadowNormalBias=g.normalBias,t.shadowRadius=g.radius,t.shadowMapSize=g.mapSize,t.shadowCameraNear=g.camera.near,t.shadowCameraFar=g.camera.far,Z.pointShadow[L]=t,Z.pointShadowMap[L]=u,Z.pointShadowMatrix[L]=C.shadow.matrix,M++}Z.point[L]=c,L++}else if(C.isHemisphereLight){let c=Q.get(C);c.skyColor.copy(C.color).multiplyScalar(o),c.groundColor.copy(C.groundColor).multiplyScalar(o),Z.hemi[O]=c,O++}}if(D>0)if(J.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=O0.LTC_FLOAT_1,Z.rectAreaLTC2=O0.LTC_FLOAT_2;else Z.rectAreaLTC1=O0.LTC_HALF_1,Z.rectAreaLTC2=O0.LTC_HALF_2;Z.ambient[0]=G,Z.ambient[1]=F,Z.ambient[2]=q;let k=Z.hash;if(k.directionalLength!==E||k.pointLength!==L||k.spotLength!==I||k.rectAreaLength!==D||k.hemiLength!==O||k.numDirectionalShadows!==T||k.numPointShadows!==M||k.numSpotShadows!==z||k.numSpotMaps!==_||k.numLightProbes!==w)Z.directional.length=E,Z.spot.length=I,Z.rectArea.length=D,Z.point.length=L,Z.hemi.length=O,Z.directionalShadow.length=T,Z.directionalShadowMap.length=T,Z.pointShadow.length=M,Z.pointShadowMap.length=M,Z.spotShadow.length=z,Z.spotShadowMap.length=z,Z.directionalShadowMatrix.length=T,Z.pointShadowMatrix.length=M,Z.spotLightMatrix.length=z+_-P,Z.spotLightMap.length=_,Z.numSpotLightShadowsWithMaps=P,Z.numLightProbes=w,k.directionalLength=E,k.pointLength=L,k.spotLength=I,k.rectAreaLength=D,k.hemiLength=O,k.numDirectionalShadows=T,k.numPointShadows=M,k.numSpotShadows=z,k.numSpotMaps=_,k.numLightProbes=w,Z.version=A5++}function H(U,G){let F=0,q=0,E=0,L=0,I=0,D=G.matrixWorldInverse;for(let O=0,T=U.length;O<T;O++){let M=U[O];if(M.isDirectionalLight){let z=Z.directional[F];z.direction.setFromMatrixPosition(M.matrixWorld),K.setFromMatrixPosition(M.target.matrixWorld),z.direction.sub(K),z.direction.transformDirection(D),F++}else if(M.isSpotLight){let z=Z.spot[E];z.position.setFromMatrixPosition(M.matrixWorld),z.position.applyMatrix4(D),z.direction.setFromMatrixPosition(M.matrixWorld),K.setFromMatrixPosition(M.target.matrixWorld),z.direction.sub(K),z.direction.transformDirection(D),E++}else if(M.isRectAreaLight){let z=Z.rectArea[L];z.position.setFromMatrixPosition(M.matrixWorld),z.position.applyMatrix4(D),X.identity(),W.copy(M.matrixWorld),W.premultiply(D),X.extractRotation(W),z.halfWidth.set(M.width*0.5,0,0),z.halfHeight.set(0,M.height*0.5,0),z.halfWidth.applyMatrix4(X),z.halfHeight.applyMatrix4(X),L++}else if(M.isPointLight){let z=Z.point[q];z.position.setFromMatrixPosition(M.matrixWorld),z.position.applyMatrix4(D),q++}else if(M.isHemisphereLight){let z=Z.hemi[I];z.direction.setFromMatrixPosition(M.matrixWorld),z.direction.transformDirection(D),I++}}}return{setup:Y,setupView:H,state:Z}}function aK(J){let Q=new C5(J),$=[],Z=[],K=[];function W(q){F.camera=q,$.length=0,Z.length=0,K.length=0}function X(q){$.push(q)}function Y(q){Z.push(q)}function H(q){K.push(q)}function U(){Q.setup($)}function G(q){Q.setupView($,q)}let F={lightsArray:$,shadowsArray:Z,lightProbeGridArray:K,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:W,state:F,setupLights:U,setupLightsView:G,pushLight:X,pushShadow:Y,pushLightProbeGrid:H}}function _5(J){let Q=new WeakMap;function $(K,W=0){let X=Q.get(K),Y;if(X===void 0)Y=new aK(J),Q.set(K,[Y]);else if(W>=X.length)Y=new aK(J),X.push(Y);else Y=X[W];return Y}function Z(){Q=new WeakMap}return{get:$,dispose:Z}}var w5=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,T5=`uniform sampler2D shadow_pass;
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
}`,S5=[new h(1,0,0),new h(-1,0,0),new h(0,1,0),new h(0,-1,0),new h(0,0,1),new h(0,0,-1)],j5=[new h(0,-1,0),new h(0,-1,0),new h(0,0,1),new h(0,0,-1),new h(0,-1,0),new h(0,-1,0)],rK=new ZJ,C7=new h,m$=new h;function v5(J,Q,$){let Z=new B7,K=new p0,W=new p0,X=new UJ,Y=new R$,H=new k$,U={},G=$.maxTextureSize,F={[c8]:yJ,[yJ]:c8,[D9]:D9},q=new tJ({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new p0},radius:{value:4}},vertexShader:w5,fragmentShader:T5}),E=q.clone();E.defines.HORIZONTAL_PASS=1;let L=new U9;L.setAttribute("position",new nJ(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let I=new S0(L,q),D=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=F7;let O=this.type;this.render=function(P,w,k){if(D.enabled===!1)return;if(D.autoUpdate===!1&&D.needsUpdate===!1)return;if(P.length===0)return;if(this.type===PZ)T0("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=F7;let B=J.getRenderTarget(),l=J.getActiveCubeFace(),C=J.getActiveMipmapLevel(),m=J.state;if(m.setBlending(E9),m.buffers.depth.getReversed()===!0)m.buffers.color.setClear(0,0,0,0);else m.buffers.color.setClear(1,1,1,1);m.buffers.depth.setTest(!0),m.setScissorTest(!1);let o=O!==this.type;if(o)w.traverse(function(x){if(x.material)if(Array.isArray(x.material))x.material.forEach((u)=>u.needsUpdate=!0);else x.material.needsUpdate=!0});for(let x=0,u=P.length;x<u;x++){let c=P[x],g=c.shadow;if(g===void 0){T0("WebGLShadowMap:",c,"has no shadow.");continue}if(g.autoUpdate===!1&&g.needsUpdate===!1)continue;K.copy(g.mapSize);let t=g.getFrameExtents();if(K.multiply(t),W.copy(g.mapSize),K.x>G||K.y>G){if(K.x>G)W.x=Math.floor(G/t.x),K.x=W.x*t.x,g.mapSize.x=W.x;if(K.y>G)W.y=Math.floor(G/t.y),K.y=W.y*t.y,g.mapSize.y=W.y}let $0=J.state.buffers.depth.getReversed();if(g.camera._reversedDepth=$0,g.map===null||o===!0){if(g.map!==null){if(g.map.depthTexture!==null)g.map.depthTexture.dispose(),g.map.depthTexture=null;g.map.dispose()}if(this.type===u8){if(c.isPointLight){T0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}g.map=new rJ(K.x,K.y,{format:U8,type:w9,minFilter:VJ,magFilter:VJ,generateMipmaps:!1}),g.map.texture.name=c.name+".shadowMap",g.map.depthTexture=new i9(K.x,K.y,_9),g.map.depthTexture.name=c.name+".shadowMapDepth",g.map.depthTexture.format=Y8,g.map.depthTexture.compareFunction=null,g.map.depthTexture.minFilter=c9,g.map.depthTexture.magFilter=c9}else{if(c.isPointLight)g.map=new u$(K.x),g.map.depthTexture=new O$(K.x,n9);else g.map=new rJ(K.x,K.y),g.map.depthTexture=new i9(K.x,K.y,n9);if(g.map.depthTexture.name=c.name+".shadowMap",g.map.depthTexture.format=Y8,this.type===F7)g.map.depthTexture.compareFunction=$0?k6:R6,g.map.depthTexture.minFilter=VJ,g.map.depthTexture.magFilter=VJ;else g.map.depthTexture.compareFunction=null,g.map.depthTexture.minFilter=c9,g.map.depthTexture.magFilter=c9}g.camera.updateProjectionMatrix()}let G0=g.map.isWebGLCubeRenderTarget?6:1;for(let k0=0;k0<G0;k0++){if(g.map.isWebGLCubeRenderTarget)J.setRenderTarget(g.map,k0),J.clear();else{if(k0===0)J.setRenderTarget(g.map),J.clear();let M0=g.getViewport(k0);X.set(W.x*M0.x,W.y*M0.y,W.x*M0.z,W.y*M0.w),m.viewport(X)}if(c.isPointLight){let{camera:M0,matrix:a0}=g,r0=c.distance||M0.far;if(r0!==M0.far)M0.far=r0,M0.updateProjectionMatrix();C7.setFromMatrixPosition(c.matrixWorld),M0.position.copy(C7),m$.copy(M0.position),m$.add(S5[k0]),M0.up.copy(j5[k0]),M0.lookAt(m$),M0.updateMatrixWorld(),a0.makeTranslation(-C7.x,-C7.y,-C7.z),rK.multiplyMatrices(M0.projectionMatrix,M0.matrixWorldInverse),g._frustum.setFromProjectionMatrix(rK,M0.coordinateSystem,M0.reversedDepth)}else g.updateMatrices(c);Z=g.getFrustum(),z(w,k,g.camera,c,this.type)}if(g.isPointLightShadow!==!0&&this.type===u8)T(g,k);g.needsUpdate=!1}O=this.type,D.needsUpdate=!1,J.setRenderTarget(B,l,C)};function T(P,w){let k=Q.update(I);if(q.defines.VSM_SAMPLES!==P.blurSamples)q.defines.VSM_SAMPLES=P.blurSamples,E.defines.VSM_SAMPLES=P.blurSamples,q.needsUpdate=!0,E.needsUpdate=!0;if(P.mapPass===null)P.mapPass=new rJ(K.x,K.y,{format:U8,type:w9});q.uniforms.shadow_pass.value=P.map.depthTexture,q.uniforms.resolution.value=P.mapSize,q.uniforms.radius.value=P.radius,J.setRenderTarget(P.mapPass),J.clear(),J.renderBufferDirect(w,null,k,q,I,null),E.uniforms.shadow_pass.value=P.mapPass.texture,E.uniforms.resolution.value=P.mapSize,E.uniforms.radius.value=P.radius,J.setRenderTarget(P.map),J.clear(),J.renderBufferDirect(w,null,k,E,I,null)}function M(P,w,k,B){let l=null,C=k.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(C!==void 0)l=C;else if(l=k.isPointLight===!0?H:Y,J.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let m=l.uuid,o=w.uuid,x=U[m];if(x===void 0)x={},U[m]=x;let u=x[o];if(u===void 0)u=l.clone(),x[o]=u,w.addEventListener("dispose",_);l=u}if(l.visible=w.visible,l.wireframe=w.wireframe,B===u8)l.side=w.shadowSide!==null?w.shadowSide:w.side;else l.side=w.shadowSide!==null?w.shadowSide:F[w.side];if(l.alphaMap=w.alphaMap,l.alphaTest=w.alphaToCoverage===!0?0.5:w.alphaTest,l.map=w.map,l.clipShadows=w.clipShadows,l.clippingPlanes=w.clippingPlanes,l.clipIntersection=w.clipIntersection,l.displacementMap=w.displacementMap,l.displacementScale=w.displacementScale,l.displacementBias=w.displacementBias,l.wireframeLinewidth=w.wireframeLinewidth,l.linewidth=w.linewidth,k.isPointLight===!0&&l.isMeshDistanceMaterial===!0){let m=J.properties.get(l);m.light=k}return l}function z(P,w,k,B,l){if(P.visible===!1)return;if(P.layers.test(w.layers)&&(P.isMesh||P.isLine||P.isPoints)){if((P.castShadow||P.receiveShadow&&l===u8)&&(!P.frustumCulled||Z.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,P.matrixWorld);let o=Q.update(P),x=P.material;if(Array.isArray(x)){let u=o.groups;for(let c=0,g=u.length;c<g;c++){let t=u[c],$0=x[t.materialIndex];if($0&&$0.visible){let G0=M(P,$0,B,l);P.onBeforeShadow(J,P,w,k,o,G0,t),J.renderBufferDirect(k,null,o,G0,P,t),P.onAfterShadow(J,P,w,k,o,G0,t)}}}else if(x.visible){let u=M(P,x,B,l);P.onBeforeShadow(J,P,w,k,o,u,null),J.renderBufferDirect(k,null,o,u,P,null),P.onAfterShadow(J,P,w,k,o,u,null)}}}let m=P.children;for(let o=0,x=m.length;o<x;o++)z(m[o],w,k,B,l)}function _(P){P.target.removeEventListener("dispose",_);for(let k in U){let B=U[k],l=P.target.uuid;if(l in B)B[l].dispose(),delete B[l]}}}function f5(J,Q){function $(){let f=!1,W0=new UJ,n=null,q0=new UJ(0,0,0,0);return{setMask:function(D0){if(n!==D0&&!f)J.colorMask(D0,D0,D0,D0),n=D0},setLocked:function(D0){f=D0},setClear:function(D0,r,Y0,_0,i0){if(i0===!0)D0*=_0,r*=_0,Y0*=_0;if(W0.set(D0,r,Y0,_0),q0.equals(W0)===!1)J.clearColor(D0,r,Y0,_0),q0.copy(W0)},reset:function(){f=!1,n=null,q0.set(-1,0,0,0)}}}function Z(){let f=!1,W0=!1,n=null,q0=null,D0=null;return{setReversed:function(r){if(W0!==r){let Y0=Q.get("EXT_clip_control");if(r)Y0.clipControlEXT(Y0.LOWER_LEFT_EXT,Y0.ZERO_TO_ONE_EXT);else Y0.clipControlEXT(Y0.LOWER_LEFT_EXT,Y0.NEGATIVE_ONE_TO_ONE_EXT);W0=r;let _0=D0;D0=null,this.setClear(_0)}},getReversed:function(){return W0},setTest:function(r){if(r)R0(J.DEPTH_TEST);else A0(J.DEPTH_TEST)},setMask:function(r){if(n!==r&&!f)J.depthMask(r),n=r},setFunc:function(r){if(W0)r=BK[r];if(q0!==r){switch(r){case sZ:J.depthFunc(J.NEVER);break;case iZ:J.depthFunc(J.ALWAYS);break;case oZ:J.depthFunc(J.LESS);break;case EQ:J.depthFunc(J.LEQUAL);break;case aZ:J.depthFunc(J.EQUAL);break;case rZ:J.depthFunc(J.GEQUAL);break;case tZ:J.depthFunc(J.GREATER);break;case eZ:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}q0=r}},setLocked:function(r){f=r},setClear:function(r){if(D0!==r){if(D0=r,W0)r=1-r;J.clearDepth(r)}},reset:function(){f=!1,n=null,q0=null,D0=null,W0=!1}}}function K(){let f=!1,W0=null,n=null,q0=null,D0=null,r=null,Y0=null,_0=null,i0=null;return{setTest:function(QJ){if(!f)if(QJ)R0(J.STENCIL_TEST);else A0(J.STENCIL_TEST)},setMask:function(QJ){if(W0!==QJ&&!f)J.stencilMask(QJ),W0=QJ},setFunc:function(QJ,TJ,Z9){if(n!==QJ||q0!==TJ||D0!==Z9)J.stencilFunc(QJ,TJ,Z9),n=QJ,q0=TJ,D0=Z9},setOp:function(QJ,TJ,Z9){if(r!==QJ||Y0!==TJ||_0!==Z9)J.stencilOp(QJ,TJ,Z9),r=QJ,Y0=TJ,_0=Z9},setLocked:function(QJ){f=QJ},setClear:function(QJ){if(i0!==QJ)J.clearStencil(QJ),i0=QJ},reset:function(){f=!1,W0=null,n=null,q0=null,D0=null,r=null,Y0=null,_0=null,i0=null}}}let W=new $,X=new Z,Y=new K,H=new WeakMap,U=new WeakMap,G={},F={},q={},E=new WeakMap,L=[],I=null,D=!1,O=null,T=null,M=null,z=null,_=null,P=null,w=null,k=new m0(0,0,0),B=0,l=!1,C=null,m=null,o=null,x=null,u=null,c=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),g=!1,t=0,$0=J.getParameter(J.VERSION);if($0.indexOf("WebGL")!==-1)t=parseFloat(/^WebGL (\d)/.exec($0)[1]),g=t>=1;else if($0.indexOf("OpenGL ES")!==-1)t=parseFloat(/^OpenGL ES (\d)/.exec($0)[1]),g=t>=2;let G0=null,k0={},M0=J.getParameter(J.SCISSOR_BOX),a0=J.getParameter(J.VIEWPORT),r0=new UJ().fromArray(M0),i=new UJ().fromArray(a0);function X0(f,W0,n,q0){let D0=new Uint8Array(4),r=J.createTexture();J.bindTexture(f,r),J.texParameteri(f,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(f,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let Y0=0;Y0<n;Y0++)if(f===J.TEXTURE_3D||f===J.TEXTURE_2D_ARRAY)J.texImage3D(W0,0,J.RGBA,1,1,q0,0,J.RGBA,J.UNSIGNED_BYTE,D0);else J.texImage2D(W0+Y0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,D0);return r}let E0={};E0[J.TEXTURE_2D]=X0(J.TEXTURE_2D,J.TEXTURE_2D,1),E0[J.TEXTURE_CUBE_MAP]=X0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),E0[J.TEXTURE_2D_ARRAY]=X0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),E0[J.TEXTURE_3D]=X0(J.TEXTURE_3D,J.TEXTURE_3D,1,1),W.setClear(0,0,0,1),X.setClear(1),Y.setClear(0),R0(J.DEPTH_TEST),X.setFunc(EQ),zJ(!1),KJ(NQ),R0(J.CULL_FACE),l0(E9);function R0(f){if(G[f]!==!0)J.enable(f),G[f]=!0}function A0(f){if(G[f]!==!1)J.disable(f),G[f]=!1}function x0(f,W0){if(q[f]!==W0){if(J.bindFramebuffer(f,W0),q[f]=W0,f===J.DRAW_FRAMEBUFFER)q[J.FRAMEBUFFER]=W0;if(f===J.FRAMEBUFFER)q[J.DRAW_FRAMEBUFFER]=W0;return!0}return!1}function v0(f,W0){let n=L,q0=!1;if(f){if(n=E.get(W0),n===void 0)n=[],E.set(W0,n);let D0=f.textures;if(n.length!==D0.length||n[0]!==J.COLOR_ATTACHMENT0){for(let r=0,Y0=D0.length;r<Y0;r++)n[r]=J.COLOR_ATTACHMENT0+r;n.length=D0.length,q0=!0}}else if(n[0]!==J.BACK)n[0]=J.BACK,q0=!0;if(q0)J.drawBuffers(n)}function y0(f){if(I!==f)return J.useProgram(f),I=f,!0;return!1}let t0={[n8]:J.FUNC_ADD,[_Z]:J.FUNC_SUBTRACT,[wZ]:J.FUNC_REVERSE_SUBTRACT};t0[TZ]=J.MIN,t0[SZ]=J.MAX;let b0={[jZ]:J.ZERO,[vZ]:J.ONE,[fZ]:J.SRC_COLOR,[bZ]:J.SRC_ALPHA,[lZ]:J.SRC_ALPHA_SATURATE,[pZ]:J.DST_COLOR,[xZ]:J.DST_ALPHA,[yZ]:J.ONE_MINUS_SRC_COLOR,[hZ]:J.ONE_MINUS_SRC_ALPHA,[mZ]:J.ONE_MINUS_DST_COLOR,[gZ]:J.ONE_MINUS_DST_ALPHA,[dZ]:J.CONSTANT_COLOR,[uZ]:J.ONE_MINUS_CONSTANT_COLOR,[cZ]:J.CONSTANT_ALPHA,[nZ]:J.ONE_MINUS_CONSTANT_ALPHA};function l0(f,W0,n,q0,D0,r,Y0,_0,i0,QJ){if(f===E9){if(D===!0)A0(J.BLEND),D=!1;return}if(D===!1)R0(J.BLEND),D=!0;if(f!==CZ){if(f!==O||QJ!==l){if(T!==n8||_!==n8)J.blendEquation(J.FUNC_ADD),T=n8,_=n8;if(QJ)switch(f){case O7:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case FQ:J.blendFunc(J.ONE,J.ONE);break;case OQ:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case DQ:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:w0("WebGLState: Invalid blending: ",f);break}else switch(f){case O7:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case FQ:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case OQ:w0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case DQ:w0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:w0("WebGLState: Invalid blending: ",f);break}M=null,z=null,P=null,w=null,k.set(0,0,0),B=0,O=f,l=QJ}return}if(D0=D0||W0,r=r||n,Y0=Y0||q0,W0!==T||D0!==_)J.blendEquationSeparate(t0[W0],t0[D0]),T=W0,_=D0;if(n!==M||q0!==z||r!==P||Y0!==w)J.blendFuncSeparate(b0[n],b0[q0],b0[r],b0[Y0]),M=n,z=q0,P=r,w=Y0;if(_0.equals(k)===!1||i0!==B)J.blendColor(_0.r,_0.g,_0.b,i0),k.copy(_0),B=i0;O=f,l=!1}function FJ(f,W0){f.side===D9?A0(J.CULL_FACE):R0(J.CULL_FACE);let n=f.side===yJ;if(W0)n=!n;zJ(n),f.blending===O7&&f.transparent===!1?l0(E9):l0(f.blending,f.blendEquation,f.blendSrc,f.blendDst,f.blendEquationAlpha,f.blendSrcAlpha,f.blendDstAlpha,f.blendColor,f.blendAlpha,f.premultipliedAlpha),X.setFunc(f.depthFunc),X.setTest(f.depthTest),X.setMask(f.depthWrite),W.setMask(f.colorWrite);let q0=f.stencilWrite;if(Y.setTest(q0),q0)Y.setMask(f.stencilWriteMask),Y.setFunc(f.stencilFunc,f.stencilRef,f.stencilFuncMask),Y.setOp(f.stencilFail,f.stencilZFail,f.stencilZPass);OJ(f.polygonOffset,f.polygonOffsetFactor,f.polygonOffsetUnits),f.alphaToCoverage===!0?R0(J.SAMPLE_ALPHA_TO_COVERAGE):A0(J.SAMPLE_ALPHA_TO_COVERAGE)}function zJ(f){if(C!==f){if(f)J.frontFace(J.CW);else J.frontFace(J.CCW);C=f}}function KJ(f){if(f!==IZ){if(R0(J.CULL_FACE),f!==m)if(f===NQ)J.cullFace(J.BACK);else if(f===AZ)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else A0(J.CULL_FACE);m=f}function GJ(f){if(f!==o){if(g)J.lineWidth(f);o=f}}function OJ(f,W0,n){if(f){if(R0(J.POLYGON_OFFSET_FILL),x!==W0||u!==n){if(x=W0,u=n,X.getReversed())W0=-W0;J.polygonOffset(W0,n)}}else A0(J.POLYGON_OFFSET_FILL)}function qJ(f){if(f)R0(J.SCISSOR_TEST);else A0(J.SCISSOR_TEST)}function v(f){if(f===void 0)f=J.TEXTURE0+c-1;if(G0!==f)J.activeTexture(f),G0=f}function CJ(f,W0,n){if(n===void 0)if(G0===null)n=J.TEXTURE0+c-1;else n=G0;let q0=k0[n];if(q0===void 0)q0={type:void 0,texture:void 0},k0[n]=q0;if(q0.type!==f||q0.texture!==W0){if(G0!==n)J.activeTexture(n),G0=n;J.bindTexture(f,W0||E0[f]),q0.type=f,q0.texture=W0}}function c0(){let f=k0[G0];if(f!==void 0&&f.type!==void 0)J.bindTexture(f.type,null),f.type=void 0,f.texture=void 0}function s0(){try{J.compressedTexImage2D(...arguments)}catch(f){w0("WebGLState:",f)}}function V(){try{J.compressedTexImage3D(...arguments)}catch(f){w0("WebGLState:",f)}}function R(){try{J.texSubImage2D(...arguments)}catch(f){w0("WebGLState:",f)}}function S(){try{J.texSubImage3D(...arguments)}catch(f){w0("WebGLState:",f)}}function p(){try{J.compressedTexSubImage2D(...arguments)}catch(f){w0("WebGLState:",f)}}function e(){try{J.compressedTexSubImage3D(...arguments)}catch(f){w0("WebGLState:",f)}}function Q0(){try{J.texStorage2D(...arguments)}catch(f){w0("WebGLState:",f)}}function H0(){try{J.texStorage3D(...arguments)}catch(f){w0("WebGLState:",f)}}function d(){try{J.texImage2D(...arguments)}catch(f){w0("WebGLState:",f)}}function s(){try{J.texImage3D(...arguments)}catch(f){w0("WebGLState:",f)}}function U0(f){if(F[f]!==void 0)return F[f];else return J.getParameter(f)}function z0(f,W0){if(F[f]!==W0)J.pixelStorei(f,W0),F[f]=W0}function N0(f){if(r0.equals(f)===!1)J.scissor(f.x,f.y,f.z,f.w),r0.copy(f)}function Z0(f){if(i.equals(f)===!1)J.viewport(f.x,f.y,f.z,f.w),i.copy(f)}function I0(f,W0){let n=U.get(W0);if(n===void 0)n=new WeakMap,U.set(W0,n);let q0=n.get(f);if(q0===void 0)q0=J.getUniformBlockIndex(W0,f.name),n.set(f,q0)}function C0(f,W0){let q0=U.get(W0).get(f);if(H.get(W0)!==q0)J.uniformBlockBinding(W0,q0,f.__bindingPointIndex),H.set(W0,q0)}function d0(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),X.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),G={},F={},G0=null,k0={},q={},E=new WeakMap,L=[],I=null,D=!1,O=null,T=null,M=null,z=null,_=null,P=null,w=null,k=new m0(0,0,0),B=0,l=!1,C=null,m=null,o=null,x=null,u=null,r0.set(0,0,J.canvas.width,J.canvas.height),i.set(0,0,J.canvas.width,J.canvas.height),W.reset(),X.reset(),Y.reset()}return{buffers:{color:W,depth:X,stencil:Y},enable:R0,disable:A0,bindFramebuffer:x0,drawBuffers:v0,useProgram:y0,setBlending:l0,setMaterial:FJ,setFlipSided:zJ,setCullFace:KJ,setLineWidth:GJ,setPolygonOffset:OJ,setScissorTest:qJ,activeTexture:v,bindTexture:CJ,unbindTexture:c0,compressedTexImage2D:s0,compressedTexImage3D:V,texImage2D:d,texImage3D:s,pixelStorei:z0,getParameter:U0,updateUBOMapping:I0,uniformBlockBinding:C0,texStorage2D:Q0,texStorage3D:H0,texSubImage2D:R,texSubImage3D:S,compressedTexSubImage2D:p,compressedTexSubImage3D:e,scissor:N0,viewport:Z0,reset:d0}}function y5(J,Q,$,Z,K,W,X){let Y=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,H=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new p0,G=new WeakMap,F=new Set,q,E=new WeakMap,L=!1;try{L=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(V){}function I(V,R){return L?new OffscreenCanvas(V,R):N7("canvas")}function D(V,R,S){let p=1,e=s0(V);if(e.width>S||e.height>S)p=S/Math.max(e.width,e.height);if(p<1)if(typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&V instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&V instanceof ImageBitmap||typeof VideoFrame<"u"&&V instanceof VideoFrame){let Q0=Math.floor(p*e.width),H0=Math.floor(p*e.height);if(q===void 0)q=I(Q0,H0);let d=R?I(Q0,H0):q;return d.width=Q0,d.height=H0,d.getContext("2d").drawImage(V,0,0,Q0,H0),T0("WebGLRenderer: Texture has been resized from ("+e.width+"x"+e.height+") to ("+Q0+"x"+H0+")."),d}else{if("data"in V)T0("WebGLRenderer: Image in DataTexture is too big ("+e.width+"x"+e.height+").");return V}return V}function O(V){return V.generateMipmaps}function T(V){J.generateMipmap(V)}function M(V){if(V.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(V.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(V.isWebGLArrayRenderTarget||V.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function z(V,R,S,p,e,Q0=!1){if(V!==null){if(J[V]!==void 0)return J[V];T0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+V+"'")}let H0;if(p){if(H0=Q.get("EXT_texture_norm16"),!H0)T0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let d=R;if(R===J.RED){if(S===J.FLOAT)d=J.R32F;if(S===J.HALF_FLOAT)d=J.R16F;if(S===J.UNSIGNED_BYTE)d=J.R8;if(S===J.UNSIGNED_SHORT&&H0)d=H0.R16_EXT;if(S===J.SHORT&&H0)d=H0.R16_SNORM_EXT}if(R===J.RED_INTEGER){if(S===J.UNSIGNED_BYTE)d=J.R8UI;if(S===J.UNSIGNED_SHORT)d=J.R16UI;if(S===J.UNSIGNED_INT)d=J.R32UI;if(S===J.BYTE)d=J.R8I;if(S===J.SHORT)d=J.R16I;if(S===J.INT)d=J.R32I}if(R===J.RG){if(S===J.FLOAT)d=J.RG32F;if(S===J.HALF_FLOAT)d=J.RG16F;if(S===J.UNSIGNED_BYTE)d=J.RG8;if(S===J.UNSIGNED_SHORT&&H0)d=H0.RG16_EXT;if(S===J.SHORT&&H0)d=H0.RG16_SNORM_EXT}if(R===J.RG_INTEGER){if(S===J.UNSIGNED_BYTE)d=J.RG8UI;if(S===J.UNSIGNED_SHORT)d=J.RG16UI;if(S===J.UNSIGNED_INT)d=J.RG32UI;if(S===J.BYTE)d=J.RG8I;if(S===J.SHORT)d=J.RG16I;if(S===J.INT)d=J.RG32I}if(R===J.RGB_INTEGER){if(S===J.UNSIGNED_BYTE)d=J.RGB8UI;if(S===J.UNSIGNED_SHORT)d=J.RGB16UI;if(S===J.UNSIGNED_INT)d=J.RGB32UI;if(S===J.BYTE)d=J.RGB8I;if(S===J.SHORT)d=J.RGB16I;if(S===J.INT)d=J.RGB32I}if(R===J.RGBA_INTEGER){if(S===J.UNSIGNED_BYTE)d=J.RGBA8UI;if(S===J.UNSIGNED_SHORT)d=J.RGBA16UI;if(S===J.UNSIGNED_INT)d=J.RGBA32UI;if(S===J.BYTE)d=J.RGBA8I;if(S===J.SHORT)d=J.RGBA16I;if(S===J.INT)d=J.RGBA32I}if(R===J.RGB){if(S===J.UNSIGNED_SHORT&&H0)d=H0.RGB16_EXT;if(S===J.SHORT&&H0)d=H0.RGB16_SNORM_EXT;if(S===J.UNSIGNED_INT_5_9_9_9_REV)d=J.RGB9_E5;if(S===J.UNSIGNED_INT_10F_11F_11F_REV)d=J.R11F_G11F_B10F}if(R===J.RGBA){let s=Q0?Y$:u0.getTransfer(e);if(S===J.FLOAT)d=J.RGBA32F;if(S===J.HALF_FLOAT)d=J.RGBA16F;if(S===J.UNSIGNED_BYTE)d=s===YJ?J.SRGB8_ALPHA8:J.RGBA8;if(S===J.UNSIGNED_SHORT&&H0)d=H0.RGBA16_EXT;if(S===J.SHORT&&H0)d=H0.RGBA16_SNORM_EXT;if(S===J.UNSIGNED_SHORT_4_4_4_4)d=J.RGBA4;if(S===J.UNSIGNED_SHORT_5_5_5_1)d=J.RGB5_A1}if(d===J.R16F||d===J.R32F||d===J.RG16F||d===J.RG32F||d===J.RGBA16F||d===J.RGBA32F)Q.get("EXT_color_buffer_float");return d}function _(V,R){let S;if(V){if(R===null||R===n9||R===i8)S=J.DEPTH24_STENCIL8;else if(R===_9)S=J.DEPTH32F_STENCIL8;else if(R===k7)S=J.DEPTH24_STENCIL8,T0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(R===null||R===n9||R===i8)S=J.DEPTH_COMPONENT24;else if(R===_9)S=J.DEPTH_COMPONENT32F;else if(R===k7)S=J.DEPTH_COMPONENT16;return S}function P(V,R){if(O(V)===!0||V.isFramebufferTexture&&V.minFilter!==c9&&V.minFilter!==VJ)return Math.log2(Math.max(R.width,R.height))+1;else if(V.mipmaps!==void 0&&V.mipmaps.length>0)return V.mipmaps.length;else if(V.isCompressedTexture&&Array.isArray(V.image))return R.mipmaps.length;else return 1}function w(V){let R=V.target;if(R.removeEventListener("dispose",w),B(R),R.isVideoTexture)G.delete(R);if(R.isHTMLTexture)F.delete(R)}function k(V){let R=V.target;R.removeEventListener("dispose",k),C(R)}function B(V){let R=Z.get(V);if(R.__webglInit===void 0)return;let S=V.source,p=E.get(S);if(p){let e=p[R.__cacheKey];if(e.usedTimes--,e.usedTimes===0)l(V);if(Object.keys(p).length===0)E.delete(S)}Z.remove(V)}function l(V){let R=Z.get(V);J.deleteTexture(R.__webglTexture);let S=V.source,p=E.get(S);delete p[R.__cacheKey],X.memory.textures--}function C(V){let R=Z.get(V);if(V.depthTexture)V.depthTexture.dispose(),Z.remove(V.depthTexture);if(V.isWebGLCubeRenderTarget)for(let p=0;p<6;p++){if(Array.isArray(R.__webglFramebuffer[p]))for(let e=0;e<R.__webglFramebuffer[p].length;e++)J.deleteFramebuffer(R.__webglFramebuffer[p][e]);else J.deleteFramebuffer(R.__webglFramebuffer[p]);if(R.__webglDepthbuffer)J.deleteRenderbuffer(R.__webglDepthbuffer[p])}else{if(Array.isArray(R.__webglFramebuffer))for(let p=0;p<R.__webglFramebuffer.length;p++)J.deleteFramebuffer(R.__webglFramebuffer[p]);else J.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer)J.deleteRenderbuffer(R.__webglDepthbuffer);if(R.__webglMultisampledFramebuffer)J.deleteFramebuffer(R.__webglMultisampledFramebuffer);if(R.__webglColorRenderbuffer){for(let p=0;p<R.__webglColorRenderbuffer.length;p++)if(R.__webglColorRenderbuffer[p])J.deleteRenderbuffer(R.__webglColorRenderbuffer[p])}if(R.__webglDepthRenderbuffer)J.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let S=V.textures;for(let p=0,e=S.length;p<e;p++){let Q0=Z.get(S[p]);if(Q0.__webglTexture)J.deleteTexture(Q0.__webglTexture),X.memory.textures--;Z.remove(S[p])}Z.remove(V)}let m=0;function o(){m=0}function x(){return m}function u(V){m=V}function c(){let V=m;if(V>=K.maxTextures)T0("WebGLTextures: Trying to use "+V+" texture units while this GPU supports only "+K.maxTextures);return m+=1,V}function g(V){let R=[];return R.push(V.wrapS),R.push(V.wrapT),R.push(V.wrapR||0),R.push(V.magFilter),R.push(V.minFilter),R.push(V.anisotropy),R.push(V.internalFormat),R.push(V.format),R.push(V.type),R.push(V.generateMipmaps),R.push(V.premultiplyAlpha),R.push(V.flipY),R.push(V.unpackAlignment),R.push(V.colorSpace),R.join()}function t(V,R){let S=Z.get(V);if(V.isVideoTexture)CJ(V);if(V.isRenderTargetTexture===!1&&V.isExternalTexture!==!0&&V.version>0&&S.__version!==V.version){let p=V.image;if(p===null)T0("WebGLRenderer: Texture marked for update but no image data found.");else if(p.complete===!1)T0("WebGLRenderer: Texture marked for update but image is incomplete");else{A0(S,V,R);return}}else if(V.isExternalTexture)S.__webglTexture=V.sourceTexture?V.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,S.__webglTexture,J.TEXTURE0+R)}function $0(V,R){let S=Z.get(V);if(V.isRenderTargetTexture===!1&&V.version>0&&S.__version!==V.version){A0(S,V,R);return}else if(V.isExternalTexture)S.__webglTexture=V.sourceTexture?V.sourceTexture:null;$.bindTexture(J.TEXTURE_2D_ARRAY,S.__webglTexture,J.TEXTURE0+R)}function G0(V,R){let S=Z.get(V);if(V.isRenderTargetTexture===!1&&V.version>0&&S.__version!==V.version){A0(S,V,R);return}$.bindTexture(J.TEXTURE_3D,S.__webglTexture,J.TEXTURE0+R)}function k0(V,R){let S=Z.get(V);if(V.isCubeDepthTexture!==!0&&V.version>0&&S.__version!==V.version){x0(S,V,R);return}$.bindTexture(J.TEXTURE_CUBE_MAP,S.__webglTexture,J.TEXTURE0+R)}let M0={[ZK]:J.REPEAT,[U6]:J.CLAMP_TO_EDGE,[KK]:J.MIRRORED_REPEAT},a0={[c9]:J.NEAREST,[WK]:J.NEAREST_MIPMAP_NEAREST,[R7]:J.NEAREST_MIPMAP_LINEAR,[VJ]:J.LINEAR,[q6]:J.LINEAR_MIPMAP_NEAREST,[X8]:J.LINEAR_MIPMAP_LINEAR},r0={[OK]:J.NEVER,[LK]:J.ALWAYS,[DK]:J.LESS,[R6]:J.LEQUAL,[EK]:J.EQUAL,[k6]:J.GEQUAL,[RK]:J.GREATER,[kK]:J.NOTEQUAL};function i(V,R){if(R.type===_9&&Q.has("OES_texture_float_linear")===!1&&(R.magFilter===VJ||R.magFilter===q6||R.magFilter===R7||R.magFilter===X8||R.minFilter===VJ||R.minFilter===q6||R.minFilter===R7||R.minFilter===X8))T0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(V,J.TEXTURE_WRAP_S,M0[R.wrapS]),J.texParameteri(V,J.TEXTURE_WRAP_T,M0[R.wrapT]),V===J.TEXTURE_3D||V===J.TEXTURE_2D_ARRAY)J.texParameteri(V,J.TEXTURE_WRAP_R,M0[R.wrapR]);if(J.texParameteri(V,J.TEXTURE_MAG_FILTER,a0[R.magFilter]),J.texParameteri(V,J.TEXTURE_MIN_FILTER,a0[R.minFilter]),R.compareFunction)J.texParameteri(V,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(V,J.TEXTURE_COMPARE_FUNC,r0[R.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===c9)return;if(R.minFilter!==R7&&R.minFilter!==X8)return;if(R.type===_9&&Q.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||Z.get(R).__currentAnisotropy){let S=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(V,S.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,K.getMaxAnisotropy())),Z.get(R).__currentAnisotropy=R.anisotropy}}}function X0(V,R){let S=!1;if(V.__webglInit===void 0)V.__webglInit=!0,R.addEventListener("dispose",w);let p=R.source,e=E.get(p);if(e===void 0)e={},E.set(p,e);let Q0=g(R);if(Q0!==V.__cacheKey){if(e[Q0]===void 0)e[Q0]={texture:J.createTexture(),usedTimes:0},X.memory.textures++,S=!0;e[Q0].usedTimes++;let H0=e[V.__cacheKey];if(H0!==void 0){if(e[V.__cacheKey].usedTimes--,H0.usedTimes===0)l(R)}V.__cacheKey=Q0,V.__webglTexture=e[Q0].texture}return S}function E0(V,R,S){return Math.floor(Math.floor(V/S)/R)}function R0(V,R,S,p){let Q0=V.updateRanges;if(Q0.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,R.width,R.height,S,p,R.data);else{Q0.sort((z0,N0)=>z0.start-N0.start);let H0=0;for(let z0=1;z0<Q0.length;z0++){let N0=Q0[H0],Z0=Q0[z0],I0=N0.start+N0.count,C0=E0(Z0.start,R.width,4),d0=E0(N0.start,R.width,4);if(Z0.start<=I0+1&&C0===d0&&E0(Z0.start+Z0.count-1,R.width,4)===C0)N0.count=Math.max(N0.count,Z0.start+Z0.count-N0.start);else++H0,Q0[H0]=Z0}Q0.length=H0+1;let d=$.getParameter(J.UNPACK_ROW_LENGTH),s=$.getParameter(J.UNPACK_SKIP_PIXELS),U0=$.getParameter(J.UNPACK_SKIP_ROWS);$.pixelStorei(J.UNPACK_ROW_LENGTH,R.width);for(let z0=0,N0=Q0.length;z0<N0;z0++){let Z0=Q0[z0],I0=Math.floor(Z0.start/4),C0=Math.ceil(Z0.count/4),d0=I0%R.width,f=Math.floor(I0/R.width),W0=C0,n=1;$.pixelStorei(J.UNPACK_SKIP_PIXELS,d0),$.pixelStorei(J.UNPACK_SKIP_ROWS,f),$.texSubImage2D(J.TEXTURE_2D,0,d0,f,W0,1,S,p,R.data)}V.clearUpdateRanges(),$.pixelStorei(J.UNPACK_ROW_LENGTH,d),$.pixelStorei(J.UNPACK_SKIP_PIXELS,s),$.pixelStorei(J.UNPACK_SKIP_ROWS,U0)}}function A0(V,R,S){let p=J.TEXTURE_2D;if(R.isDataArrayTexture||R.isCompressedArrayTexture)p=J.TEXTURE_2D_ARRAY;if(R.isData3DTexture)p=J.TEXTURE_3D;let e=X0(V,R),Q0=R.source;$.bindTexture(p,V.__webglTexture,J.TEXTURE0+S);let H0=Z.get(Q0);if(Q0.version!==H0.__version||e===!0){if($.activeTexture(J.TEXTURE0+S),(typeof ImageBitmap<"u"&&R.image instanceof ImageBitmap)===!1){let n=u0.getPrimaries(u0.workingColorSpace),q0=R.colorSpace===q8?null:u0.getPrimaries(R.colorSpace),D0=R.colorSpace===q8||n===q0?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,R.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,D0)}$.pixelStorei(J.UNPACK_ALIGNMENT,R.unpackAlignment);let s=D(R.image,!1,K.maxTextureSize);s=c0(R,s);let U0=W.convert(R.format,R.colorSpace),z0=W.convert(R.type),N0=z(R.internalFormat,U0,z0,R.normalized,R.colorSpace,R.isVideoTexture);i(p,R);let Z0,I0=R.mipmaps,C0=R.isVideoTexture!==!0,d0=H0.__version===void 0||e===!0,f=Q0.dataReady,W0=P(R,s);if(R.isDepthTexture){if(N0=_(R.format===H8,R.type),d0)if(C0)$.texStorage2D(J.TEXTURE_2D,1,N0,s.width,s.height);else $.texImage2D(J.TEXTURE_2D,0,N0,s.width,s.height,0,U0,z0,null)}else if(R.isDataTexture)if(I0.length>0){if(C0&&d0)$.texStorage2D(J.TEXTURE_2D,W0,N0,I0[0].width,I0[0].height);for(let n=0,q0=I0.length;n<q0;n++)if(Z0=I0[n],C0){if(f)$.texSubImage2D(J.TEXTURE_2D,n,0,0,Z0.width,Z0.height,U0,z0,Z0.data)}else $.texImage2D(J.TEXTURE_2D,n,N0,Z0.width,Z0.height,0,U0,z0,Z0.data);R.generateMipmaps=!1}else if(C0){if(d0)$.texStorage2D(J.TEXTURE_2D,W0,N0,s.width,s.height);if(f)R0(R,s,U0,z0)}else $.texImage2D(J.TEXTURE_2D,0,N0,s.width,s.height,0,U0,z0,s.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){if(C0&&d0)$.texStorage3D(J.TEXTURE_2D_ARRAY,W0,N0,I0[0].width,I0[0].height,s.depth);for(let n=0,q0=I0.length;n<q0;n++)if(Z0=I0[n],R.format!==R9)if(U0!==null)if(C0){if(f)if(R.layerUpdates.size>0){let D0=y$(Z0.width,Z0.height,R.format,R.type);for(let r of R.layerUpdates){let Y0=Z0.data.subarray(r*D0/Z0.data.BYTES_PER_ELEMENT,(r+1)*D0/Z0.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,n,0,0,r,Z0.width,Z0.height,1,U0,Y0)}R.clearLayerUpdates()}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,n,0,0,0,Z0.width,Z0.height,s.depth,U0,Z0.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,n,N0,Z0.width,Z0.height,s.depth,0,Z0.data,0,0);else T0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(C0){if(f)$.texSubImage3D(J.TEXTURE_2D_ARRAY,n,0,0,0,Z0.width,Z0.height,s.depth,U0,z0,Z0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,n,N0,Z0.width,Z0.height,s.depth,0,U0,z0,Z0.data)}else{if(C0&&d0)$.texStorage2D(J.TEXTURE_2D,W0,N0,I0[0].width,I0[0].height);for(let n=0,q0=I0.length;n<q0;n++)if(Z0=I0[n],R.format!==R9)if(U0!==null)if(C0){if(f)$.compressedTexSubImage2D(J.TEXTURE_2D,n,0,0,Z0.width,Z0.height,U0,Z0.data)}else $.compressedTexImage2D(J.TEXTURE_2D,n,N0,Z0.width,Z0.height,0,Z0.data);else T0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(C0){if(f)$.texSubImage2D(J.TEXTURE_2D,n,0,0,Z0.width,Z0.height,U0,z0,Z0.data)}else $.texImage2D(J.TEXTURE_2D,n,N0,Z0.width,Z0.height,0,U0,z0,Z0.data)}else if(R.isDataArrayTexture)if(C0){if(d0)$.texStorage3D(J.TEXTURE_2D_ARRAY,W0,N0,s.width,s.height,s.depth);if(f)if(R.layerUpdates.size>0){let n=y$(s.width,s.height,R.format,R.type);for(let q0 of R.layerUpdates){let D0=s.data.subarray(q0*n/s.data.BYTES_PER_ELEMENT,(q0+1)*n/s.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,q0,s.width,s.height,1,U0,z0,D0)}R.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,s.width,s.height,s.depth,U0,z0,s.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,N0,s.width,s.height,s.depth,0,U0,z0,s.data);else if(R.isData3DTexture)if(C0){if(d0)$.texStorage3D(J.TEXTURE_3D,W0,N0,s.width,s.height,s.depth);if(f)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,s.width,s.height,s.depth,U0,z0,s.data)}else $.texImage3D(J.TEXTURE_3D,0,N0,s.width,s.height,s.depth,0,U0,z0,s.data);else if(R.isFramebufferTexture){if(d0)if(C0)$.texStorage2D(J.TEXTURE_2D,W0,N0,s.width,s.height);else{let{width:n,height:q0}=s;for(let D0=0;D0<W0;D0++)$.texImage2D(J.TEXTURE_2D,D0,N0,n,q0,0,U0,z0,null),n>>=1,q0>>=1}}else if(R.isHTMLTexture){if("texElementImage2D"in J){let n=J.canvas;if(!n.hasAttribute("layoutsubtree"))n.setAttribute("layoutsubtree","true");if(s.parentNode!==n){n.appendChild(s),F.add(R),n.onpaint=(q0)=>{let D0=q0.changedElements;for(let r of F)if(D0.includes(r.image))r.needsUpdate=!0},n.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,s);else{let{RGBA:D0,RGBA:r,UNSIGNED_BYTE:Y0}=J;J.texElementImage2D(J.TEXTURE_2D,0,D0,r,Y0,s)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(I0.length>0){if(C0&&d0){let n=s0(I0[0]);$.texStorage2D(J.TEXTURE_2D,W0,N0,n.width,n.height)}for(let n=0,q0=I0.length;n<q0;n++)if(Z0=I0[n],C0){if(f)$.texSubImage2D(J.TEXTURE_2D,n,0,0,U0,z0,Z0)}else $.texImage2D(J.TEXTURE_2D,n,N0,U0,z0,Z0);R.generateMipmaps=!1}else if(C0){if(d0){let n=s0(s);$.texStorage2D(J.TEXTURE_2D,W0,N0,n.width,n.height)}if(f)$.texSubImage2D(J.TEXTURE_2D,0,0,0,U0,z0,s)}else $.texImage2D(J.TEXTURE_2D,0,N0,U0,z0,s);if(O(R))T(p);if(H0.__version=Q0.version,R.onUpdate)R.onUpdate(R)}V.__version=R.version}function x0(V,R,S){if(R.image.length!==6)return;let p=X0(V,R),e=R.source;$.bindTexture(J.TEXTURE_CUBE_MAP,V.__webglTexture,J.TEXTURE0+S);let Q0=Z.get(e);if(e.version!==Q0.__version||p===!0){$.activeTexture(J.TEXTURE0+S);let H0=u0.getPrimaries(u0.workingColorSpace),d=R.colorSpace===q8?null:u0.getPrimaries(R.colorSpace),s=R.colorSpace===q8||H0===d?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,R.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),$.pixelStorei(J.UNPACK_ALIGNMENT,R.unpackAlignment),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let U0=R.isCompressedTexture||R.image[0].isCompressedTexture,z0=R.image[0]&&R.image[0].isDataTexture,N0=[];for(let r=0;r<6;r++){if(!U0&&!z0)N0[r]=D(R.image[r],!0,K.maxCubemapSize);else N0[r]=z0?R.image[r].image:R.image[r];N0[r]=c0(R,N0[r])}let Z0=N0[0],I0=W.convert(R.format,R.colorSpace),C0=W.convert(R.type),d0=z(R.internalFormat,I0,C0,R.normalized,R.colorSpace),f=R.isVideoTexture!==!0,W0=Q0.__version===void 0||p===!0,n=e.dataReady,q0=P(R,Z0);i(J.TEXTURE_CUBE_MAP,R);let D0;if(U0){if(f&&W0)$.texStorage2D(J.TEXTURE_CUBE_MAP,q0,d0,Z0.width,Z0.height);for(let r=0;r<6;r++){D0=N0[r].mipmaps;for(let Y0=0;Y0<D0.length;Y0++){let _0=D0[Y0];if(R.format!==R9)if(I0!==null)if(f){if(n)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+r,Y0,0,0,_0.width,_0.height,I0,_0.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+r,Y0,d0,_0.width,_0.height,0,_0.data);else T0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(f){if(n)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+r,Y0,0,0,_0.width,_0.height,I0,C0,_0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+r,Y0,d0,_0.width,_0.height,0,I0,C0,_0.data)}}}else{if(D0=R.mipmaps,f&&W0){if(D0.length>0)q0++;let r=s0(N0[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,q0,d0,r.width,r.height)}for(let r=0;r<6;r++)if(z0){if(f){if(n)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,0,0,N0[r].width,N0[r].height,I0,C0,N0[r].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,d0,N0[r].width,N0[r].height,0,I0,C0,N0[r].data);for(let Y0=0;Y0<D0.length;Y0++){let i0=D0[Y0].image[r].image;if(f){if(n)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+r,Y0+1,0,0,i0.width,i0.height,I0,C0,i0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+r,Y0+1,d0,i0.width,i0.height,0,I0,C0,i0.data)}}else{if(f){if(n)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,0,0,I0,C0,N0[r])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,d0,I0,C0,N0[r]);for(let Y0=0;Y0<D0.length;Y0++){let _0=D0[Y0];if(f){if(n)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+r,Y0+1,0,0,I0,C0,_0.image[r])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+r,Y0+1,d0,I0,C0,_0.image[r])}}}if(O(R))T(J.TEXTURE_CUBE_MAP);if(Q0.__version=e.version,R.onUpdate)R.onUpdate(R)}V.__version=R.version}function v0(V,R,S,p,e,Q0){let H0=W.convert(S.format,S.colorSpace),d=W.convert(S.type),s=z(S.internalFormat,H0,d,S.normalized,S.colorSpace),U0=Z.get(R),z0=Z.get(S);if(z0.__renderTarget=R,!U0.__hasExternalTextures){let N0=Math.max(1,R.width>>Q0),Z0=Math.max(1,R.height>>Q0);if(e===J.TEXTURE_3D||e===J.TEXTURE_2D_ARRAY)$.texImage3D(e,Q0,s,N0,Z0,R.depth,0,H0,d,null);else $.texImage2D(e,Q0,s,N0,Z0,0,H0,d,null)}if($.bindFramebuffer(J.FRAMEBUFFER,V),v(R))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,p,e,z0.__webglTexture,0,qJ(R));else if(e===J.TEXTURE_2D||e>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&e<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,p,e,z0.__webglTexture,Q0);$.bindFramebuffer(J.FRAMEBUFFER,null)}function y0(V,R,S){if(J.bindRenderbuffer(J.RENDERBUFFER,V),R.depthBuffer){let p=R.depthTexture,e=p&&p.isDepthTexture?p.type:null,Q0=_(R.stencilBuffer,e),H0=R.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(v(R))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,qJ(R),Q0,R.width,R.height);else if(S)J.renderbufferStorageMultisample(J.RENDERBUFFER,qJ(R),Q0,R.width,R.height);else J.renderbufferStorage(J.RENDERBUFFER,Q0,R.width,R.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,H0,J.RENDERBUFFER,V)}else{let p=R.textures;for(let e=0;e<p.length;e++){let Q0=p[e],H0=W.convert(Q0.format,Q0.colorSpace),d=W.convert(Q0.type),s=z(Q0.internalFormat,H0,d,Q0.normalized,Q0.colorSpace);if(v(R))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,qJ(R),s,R.width,R.height);else if(S)J.renderbufferStorageMultisample(J.RENDERBUFFER,qJ(R),s,R.width,R.height);else J.renderbufferStorage(J.RENDERBUFFER,s,R.width,R.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function t0(V,R,S){let p=R.isWebGLCubeRenderTarget===!0;if($.bindFramebuffer(J.FRAMEBUFFER,V),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let e=Z.get(R.depthTexture);if(e.__renderTarget=R,!e.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0;if(p){if(e.__webglInit===void 0)e.__webglInit=!0,R.depthTexture.addEventListener("dispose",w);if(e.__webglTexture===void 0){e.__webglTexture=J.createTexture(),$.bindTexture(J.TEXTURE_CUBE_MAP,e.__webglTexture),i(J.TEXTURE_CUBE_MAP,R.depthTexture);let U0=W.convert(R.depthTexture.format),z0=W.convert(R.depthTexture.type),N0;if(R.depthTexture.format===Y8)N0=J.DEPTH_COMPONENT24;else if(R.depthTexture.format===H8)N0=J.DEPTH24_STENCIL8;for(let Z0=0;Z0<6;Z0++)J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Z0,0,N0,R.width,R.height,0,U0,z0,null)}}else t(R.depthTexture,0);let Q0=e.__webglTexture,H0=qJ(R),d=p?J.TEXTURE_CUBE_MAP_POSITIVE_X+S:J.TEXTURE_2D,s=R.depthTexture.format===H8?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(R.depthTexture.format===Y8)if(v(R))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,s,d,Q0,0,H0);else J.framebufferTexture2D(J.FRAMEBUFFER,s,d,Q0,0);else if(R.depthTexture.format===H8)if(v(R))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,s,d,Q0,0,H0);else J.framebufferTexture2D(J.FRAMEBUFFER,s,d,Q0,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function b0(V){let R=Z.get(V),S=V.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==V.depthTexture){let p=V.depthTexture;if(R.__depthDisposeCallback)R.__depthDisposeCallback();if(p){let e=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,p.removeEventListener("dispose",e)};p.addEventListener("dispose",e),R.__depthDisposeCallback=e}R.__boundDepthTexture=p}if(V.depthTexture&&!R.__autoAllocateDepthBuffer)if(S)for(let p=0;p<6;p++)t0(R.__webglFramebuffer[p],V,p);else{let p=V.texture.mipmaps;if(p&&p.length>0)t0(R.__webglFramebuffer[0],V,0);else t0(R.__webglFramebuffer,V,0)}else if(S){R.__webglDepthbuffer=[];for(let p=0;p<6;p++)if($.bindFramebuffer(J.FRAMEBUFFER,R.__webglFramebuffer[p]),R.__webglDepthbuffer[p]===void 0)R.__webglDepthbuffer[p]=J.createRenderbuffer(),y0(R.__webglDepthbuffer[p],V,!1);else{let e=V.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,Q0=R.__webglDepthbuffer[p];J.bindRenderbuffer(J.RENDERBUFFER,Q0),J.framebufferRenderbuffer(J.FRAMEBUFFER,e,J.RENDERBUFFER,Q0)}}else{let p=V.texture.mipmaps;if(p&&p.length>0)$.bindFramebuffer(J.FRAMEBUFFER,R.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,R.__webglFramebuffer);if(R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=J.createRenderbuffer(),y0(R.__webglDepthbuffer,V,!1);else{let e=V.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,Q0=R.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,Q0),J.framebufferRenderbuffer(J.FRAMEBUFFER,e,J.RENDERBUFFER,Q0)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function l0(V,R,S){let p=Z.get(V);if(R!==void 0)v0(p.__webglFramebuffer,V,V.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(S!==void 0)b0(V)}function FJ(V){let R=V.texture,S=Z.get(V),p=Z.get(R);V.addEventListener("dispose",k);let e=V.textures,Q0=V.isWebGLCubeRenderTarget===!0,H0=e.length>1;if(!H0){if(p.__webglTexture===void 0)p.__webglTexture=J.createTexture();p.__version=R.version,X.memory.textures++}if(Q0){S.__webglFramebuffer=[];for(let d=0;d<6;d++)if(R.mipmaps&&R.mipmaps.length>0){S.__webglFramebuffer[d]=[];for(let s=0;s<R.mipmaps.length;s++)S.__webglFramebuffer[d][s]=J.createFramebuffer()}else S.__webglFramebuffer[d]=J.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){S.__webglFramebuffer=[];for(let d=0;d<R.mipmaps.length;d++)S.__webglFramebuffer[d]=J.createFramebuffer()}else S.__webglFramebuffer=J.createFramebuffer();if(H0)for(let d=0,s=e.length;d<s;d++){let U0=Z.get(e[d]);if(U0.__webglTexture===void 0)U0.__webglTexture=J.createTexture(),X.memory.textures++}if(V.samples>0&&v(V)===!1){S.__webglMultisampledFramebuffer=J.createFramebuffer(),S.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,S.__webglMultisampledFramebuffer);for(let d=0;d<e.length;d++){let s=e[d];S.__webglColorRenderbuffer[d]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,S.__webglColorRenderbuffer[d]);let U0=W.convert(s.format,s.colorSpace),z0=W.convert(s.type),N0=z(s.internalFormat,U0,z0,s.normalized,s.colorSpace,V.isXRRenderTarget===!0),Z0=qJ(V);J.renderbufferStorageMultisample(J.RENDERBUFFER,Z0,N0,V.width,V.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+d,J.RENDERBUFFER,S.__webglColorRenderbuffer[d])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),V.depthBuffer)S.__webglDepthRenderbuffer=J.createRenderbuffer(),y0(S.__webglDepthRenderbuffer,V,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(Q0){$.bindTexture(J.TEXTURE_CUBE_MAP,p.__webglTexture),i(J.TEXTURE_CUBE_MAP,R);for(let d=0;d<6;d++)if(R.mipmaps&&R.mipmaps.length>0)for(let s=0;s<R.mipmaps.length;s++)v0(S.__webglFramebuffer[d][s],V,R,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+d,s);else v0(S.__webglFramebuffer[d],V,R,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+d,0);if(O(R))T(J.TEXTURE_CUBE_MAP);$.unbindTexture()}else if(H0){for(let d=0,s=e.length;d<s;d++){let U0=e[d],z0=Z.get(U0),N0=J.TEXTURE_2D;if(V.isWebGL3DRenderTarget||V.isWebGLArrayRenderTarget)N0=V.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(N0,z0.__webglTexture),i(N0,U0),v0(S.__webglFramebuffer,V,U0,J.COLOR_ATTACHMENT0+d,N0,0),O(U0))T(N0)}$.unbindTexture()}else{let d=J.TEXTURE_2D;if(V.isWebGL3DRenderTarget||V.isWebGLArrayRenderTarget)d=V.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(d,p.__webglTexture),i(d,R),R.mipmaps&&R.mipmaps.length>0)for(let s=0;s<R.mipmaps.length;s++)v0(S.__webglFramebuffer[s],V,R,J.COLOR_ATTACHMENT0,d,s);else v0(S.__webglFramebuffer,V,R,J.COLOR_ATTACHMENT0,d,0);if(O(R))T(d);$.unbindTexture()}if(V.depthBuffer)b0(V)}function zJ(V){let R=V.textures;for(let S=0,p=R.length;S<p;S++){let e=R[S];if(O(e)){let Q0=M(V),H0=Z.get(e).__webglTexture;$.bindTexture(Q0,H0),T(Q0),$.unbindTexture()}}}let KJ=[],GJ=[];function OJ(V){if(V.samples>0){if(v(V)===!1){let{textures:R,width:S,height:p}=V,e=J.COLOR_BUFFER_BIT,Q0=V.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,H0=Z.get(V),d=R.length>1;if(d)for(let U0=0;U0<R.length;U0++)$.bindFramebuffer(J.FRAMEBUFFER,H0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+U0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,H0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+U0,J.TEXTURE_2D,null,0);$.bindFramebuffer(J.READ_FRAMEBUFFER,H0.__webglMultisampledFramebuffer);let s=V.texture.mipmaps;if(s&&s.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,H0.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,H0.__webglFramebuffer);for(let U0=0;U0<R.length;U0++){if(V.resolveDepthBuffer){if(V.depthBuffer)e|=J.DEPTH_BUFFER_BIT;if(V.stencilBuffer&&V.resolveStencilBuffer)e|=J.STENCIL_BUFFER_BIT}if(d){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,H0.__webglColorRenderbuffer[U0]);let z0=Z.get(R[U0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,z0,0)}if(J.blitFramebuffer(0,0,S,p,0,0,S,p,e,J.NEAREST),H===!0){if(KJ.length=0,GJ.length=0,KJ.push(J.COLOR_ATTACHMENT0+U0),V.depthBuffer&&V.resolveDepthBuffer===!1)KJ.push(Q0),GJ.push(Q0),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,GJ);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,KJ)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),d)for(let U0=0;U0<R.length;U0++){$.bindFramebuffer(J.FRAMEBUFFER,H0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+U0,J.RENDERBUFFER,H0.__webglColorRenderbuffer[U0]);let z0=Z.get(R[U0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,H0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+U0,J.TEXTURE_2D,z0,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,H0.__webglMultisampledFramebuffer)}else if(V.depthBuffer&&V.resolveDepthBuffer===!1&&H){let R=V.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[R])}}}function qJ(V){return Math.min(K.maxSamples,V.samples)}function v(V){let R=Z.get(V);return V.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function CJ(V){let R=X.render.frame;if(G.get(V)!==R)G.set(V,R),V.update()}function c0(V,R){let{colorSpace:S,format:p,type:e}=V;if(V.isCompressedTexture===!0||V.isVideoTexture===!0)return R;if(S!==X$&&S!==q8)if(u0.getTransfer(S)===YJ){if(p!==R9||e!==H9)T0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else w0("WebGLTextures: Unsupported texture color space:",S);return R}function s0(V){if(typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement)U.width=V.naturalWidth||V.width,U.height=V.naturalHeight||V.height;else if(typeof VideoFrame<"u"&&V instanceof VideoFrame)U.width=V.displayWidth,U.height=V.displayHeight;else U.width=V.width,U.height=V.height;return U}this.allocateTextureUnit=c,this.resetTextureUnits=o,this.getTextureUnits=x,this.setTextureUnits=u,this.setTexture2D=t,this.setTexture2DArray=$0,this.setTexture3D=G0,this.setTextureCube=k0,this.rebindTextures=l0,this.setupRenderTarget=FJ,this.updateRenderTargetMipmap=zJ,this.updateMultisampleRenderTarget=OJ,this.setupDepthRenderbuffer=b0,this.setupFrameBufferTexture=v0,this.useMultisampledRTT=v,this.isReversedDepthBuffer=function(){return $.buffers.depth.getReversed()}}function b5(J,Q){function $(Z,K=q8){let W,X=u0.getTransfer(K);if(Z===H9)return J.UNSIGNED_BYTE;if(Z===IQ)return J.UNSIGNED_SHORT_4_4_4_4;if(Z===AQ)return J.UNSIGNED_SHORT_5_5_5_1;if(Z===HK)return J.UNSIGNED_INT_5_9_9_9_REV;if(Z===UK)return J.UNSIGNED_INT_10F_11F_11F_REV;if(Z===XK)return J.BYTE;if(Z===YK)return J.SHORT;if(Z===k7)return J.UNSIGNED_SHORT;if(Z===BQ)return J.INT;if(Z===n9)return J.UNSIGNED_INT;if(Z===_9)return J.FLOAT;if(Z===w9)return J.HALF_FLOAT;if(Z===qK)return J.ALPHA;if(Z===GK)return J.RGB;if(Z===R9)return J.RGBA;if(Z===Y8)return J.DEPTH_COMPONENT;if(Z===H8)return J.DEPTH_STENCIL;if(Z===NK)return J.RED;if(Z===PQ)return J.RED_INTEGER;if(Z===U8)return J.RG;if(Z===CQ)return J.RG_INTEGER;if(Z===_Q)return J.RGBA_INTEGER;if(Z===G6||Z===N6||Z===F6||Z===O6)if(X===YJ)if(W=Q.get("WEBGL_compressed_texture_s3tc_srgb"),W!==null){if(Z===G6)return W.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===N6)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===F6)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===O6)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(W=Q.get("WEBGL_compressed_texture_s3tc"),W!==null){if(Z===G6)return W.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===N6)return W.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===F6)return W.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===O6)return W.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===wQ||Z===TQ||Z===SQ||Z===jQ)if(W=Q.get("WEBGL_compressed_texture_pvrtc"),W!==null){if(Z===wQ)return W.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===TQ)return W.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===SQ)return W.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===jQ)return W.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===vQ||Z===fQ||Z===yQ||Z===bQ||Z===hQ||Z===D6||Z===xQ)if(W=Q.get("WEBGL_compressed_texture_etc"),W!==null){if(Z===vQ||Z===fQ)return X===YJ?W.COMPRESSED_SRGB8_ETC2:W.COMPRESSED_RGB8_ETC2;if(Z===yQ)return X===YJ?W.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:W.COMPRESSED_RGBA8_ETC2_EAC;if(Z===bQ)return W.COMPRESSED_R11_EAC;if(Z===hQ)return W.COMPRESSED_SIGNED_R11_EAC;if(Z===D6)return W.COMPRESSED_RG11_EAC;if(Z===xQ)return W.COMPRESSED_SIGNED_RG11_EAC}else return null;if(Z===gQ||Z===pQ||Z===mQ||Z===lQ||Z===dQ||Z===uQ||Z===cQ||Z===nQ||Z===sQ||Z===iQ||Z===oQ||Z===aQ||Z===rQ||Z===tQ)if(W=Q.get("WEBGL_compressed_texture_astc"),W!==null){if(Z===gQ)return X===YJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:W.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===pQ)return X===YJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:W.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===mQ)return X===YJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:W.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===lQ)return X===YJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:W.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===dQ)return X===YJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:W.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===uQ)return X===YJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:W.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===cQ)return X===YJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:W.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===nQ)return X===YJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:W.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===sQ)return X===YJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:W.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===iQ)return X===YJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:W.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===oQ)return X===YJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:W.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===aQ)return X===YJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:W.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===rQ)return X===YJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:W.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===tQ)return X===YJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:W.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===eQ||Z===J$||Z===Q$)if(W=Q.get("EXT_texture_compression_bptc"),W!==null){if(Z===eQ)return X===YJ?W.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:W.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===J$)return W.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===Q$)return W.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===$$||Z===Z$||Z===E6||Z===K$)if(W=Q.get("EXT_texture_compression_rgtc"),W!==null){if(Z===$$)return W.COMPRESSED_RED_RGTC1_EXT;if(Z===Z$)return W.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===E6)return W.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===K$)return W.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===i8)return J.UNSIGNED_INT_24_8;return J[Z]!==void 0?J[Z]:null}return{convert:$}}var h5=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,x5=`
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

}`;class UW{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new A6(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new tJ({vertexShader:h5,fragmentShader:x5,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new S0(new sJ(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qW extends T9{constructor(J,Q){super();let $=this,Z=null,K=1,W=null,X="local-floor",Y=1,H=null,U=null,G=null,F=null,q=null,E=null,L=typeof XRWebGLBinding<"u",I=new UW,D={},O=Q.getContextAttributes(),T=null,M=null,z=[],_=[],P=new p0,w=null,k=new fJ;k.viewport=new UJ;let B=new fJ;B.viewport=new UJ;let l=[k,B],C=new S$,m=null,o=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(i){let X0=z[i];if(X0===void 0)X0=new z7,z[i]=X0;return X0.getTargetRaySpace()},this.getControllerGrip=function(i){let X0=z[i];if(X0===void 0)X0=new z7,z[i]=X0;return X0.getGripSpace()},this.getHand=function(i){let X0=z[i];if(X0===void 0)X0=new z7,z[i]=X0;return X0.getHandSpace()};function x(i){let X0=_.indexOf(i.inputSource);if(X0===-1)return;let E0=z[X0];if(E0!==void 0)E0.update(i.inputSource,i.frame,H||W),E0.dispatchEvent({type:i.type,data:i.inputSource})}function u(){Z.removeEventListener("select",x),Z.removeEventListener("selectstart",x),Z.removeEventListener("selectend",x),Z.removeEventListener("squeeze",x),Z.removeEventListener("squeezestart",x),Z.removeEventListener("squeezeend",x),Z.removeEventListener("end",u),Z.removeEventListener("inputsourceschange",c);for(let i=0;i<z.length;i++){let X0=_[i];if(X0===null)continue;_[i]=null,z[i].disconnect(X0)}m=null,o=null,I.reset();for(let i in D)delete D[i];J.setRenderTarget(T),q=null,F=null,G=null,Z=null,M=null,r0.stop(),$.isPresenting=!1,J.setPixelRatio(w),J.setSize(P.width,P.height,!1),$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(i){if(K=i,$.isPresenting===!0)T0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(i){if(X=i,$.isPresenting===!0)T0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return H||W},this.setReferenceSpace=function(i){H=i},this.getBaseLayer=function(){return F!==null?F:q},this.getBinding=function(){if(G===null&&L)G=new XRWebGLBinding(Z,Q);return G},this.getFrame=function(){return E},this.getSession=function(){return Z},this.setSession=async function(i){if(Z=i,Z!==null){if(T=J.getRenderTarget(),Z.addEventListener("select",x),Z.addEventListener("selectstart",x),Z.addEventListener("selectend",x),Z.addEventListener("squeeze",x),Z.addEventListener("squeezestart",x),Z.addEventListener("squeezeend",x),Z.addEventListener("end",u),Z.addEventListener("inputsourceschange",c),O.xrCompatible!==!0)await Q.makeXRCompatible();if(w=J.getPixelRatio(),J.getSize(P),!(L&&("createProjectionLayer"in XRWebGLBinding.prototype))){let E0={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:K};q=new XRWebGLLayer(Z,Q,E0),Z.updateRenderState({baseLayer:q}),J.setPixelRatio(1),J.setSize(q.framebufferWidth,q.framebufferHeight,!1),M=new rJ(q.framebufferWidth,q.framebufferHeight,{format:R9,type:H9,colorSpace:J.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:q.ignoreDepthValues===!1,resolveStencilBuffer:q.ignoreDepthValues===!1})}else{let E0=null,R0=null,A0=null;if(O.depth)A0=O.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,E0=O.stencil?H8:Y8,R0=O.stencil?i8:n9;let x0={colorFormat:Q.RGBA8,depthFormat:A0,scaleFactor:K};G=this.getBinding(),F=G.createProjectionLayer(x0),Z.updateRenderState({layers:[F]}),J.setPixelRatio(1),J.setSize(F.textureWidth,F.textureHeight,!1),M=new rJ(F.textureWidth,F.textureHeight,{format:R9,type:H9,depthTexture:new i9(F.textureWidth,F.textureHeight,R0,void 0,void 0,void 0,void 0,void 0,void 0,E0),stencilBuffer:O.stencil,colorSpace:J.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:F.ignoreDepthValues===!1,resolveStencilBuffer:F.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(Y),H=null,W=await Z.requestReferenceSpace(X),r0.setContext(Z),r0.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return I.getDepthTexture()};function c(i){for(let X0=0;X0<i.removed.length;X0++){let E0=i.removed[X0],R0=_.indexOf(E0);if(R0>=0)_[R0]=null,z[R0].disconnect(E0)}for(let X0=0;X0<i.added.length;X0++){let E0=i.added[X0],R0=_.indexOf(E0);if(R0===-1){for(let x0=0;x0<z.length;x0++)if(x0>=_.length){_.push(E0),R0=x0;break}else if(_[x0]===null){_[x0]=E0,R0=x0;break}if(R0===-1)break}let A0=z[R0];if(A0)A0.connect(E0)}}let g=new h,t=new h;function $0(i,X0,E0){g.setFromMatrixPosition(X0.matrixWorld),t.setFromMatrixPosition(E0.matrixWorld);let R0=g.distanceTo(t),A0=X0.projectionMatrix.elements,x0=E0.projectionMatrix.elements,v0=A0[14]/(A0[10]-1),y0=A0[14]/(A0[10]+1),t0=(A0[9]+1)/A0[5],b0=(A0[9]-1)/A0[5],l0=(A0[8]-1)/A0[0],FJ=(x0[8]+1)/x0[0],zJ=v0*l0,KJ=v0*FJ,GJ=R0/(-l0+FJ),OJ=GJ*-l0;if(X0.matrixWorld.decompose(i.position,i.quaternion,i.scale),i.translateX(OJ),i.translateZ(GJ),i.matrixWorld.compose(i.position,i.quaternion,i.scale),i.matrixWorldInverse.copy(i.matrixWorld).invert(),A0[10]===-1)i.projectionMatrix.copy(X0.projectionMatrix),i.projectionMatrixInverse.copy(X0.projectionMatrixInverse);else{let qJ=v0+GJ,v=y0+GJ,CJ=zJ-OJ,c0=KJ+(R0-OJ),s0=t0*y0/v*qJ,V=b0*y0/v*qJ;i.projectionMatrix.makePerspective(CJ,c0,s0,V,qJ,v),i.projectionMatrixInverse.copy(i.projectionMatrix).invert()}}function G0(i,X0){if(X0===null)i.matrixWorld.copy(i.matrix);else i.matrixWorld.multiplyMatrices(X0.matrixWorld,i.matrix);i.matrixWorldInverse.copy(i.matrixWorld).invert()}this.updateCamera=function(i){if(Z===null)return;let{near:X0,far:E0}=i;if(I.texture!==null){if(I.depthNear>0)X0=I.depthNear;if(I.depthFar>0)E0=I.depthFar}if(C.near=B.near=k.near=X0,C.far=B.far=k.far=E0,m!==C.near||o!==C.far)Z.updateRenderState({depthNear:C.near,depthFar:C.far}),m=C.near,o=C.far;C.layers.mask=i.layers.mask|6,k.layers.mask=C.layers.mask&-5,B.layers.mask=C.layers.mask&-3;let R0=i.parent,A0=C.cameras;G0(C,R0);for(let x0=0;x0<A0.length;x0++)G0(A0[x0],R0);if(A0.length===2)$0(C,k,B);else C.projectionMatrix.copy(k.projectionMatrix);k0(i,C,R0)};function k0(i,X0,E0){if(E0===null)i.matrix.copy(X0.matrixWorld);else i.matrix.copy(E0.matrixWorld),i.matrix.invert(),i.matrix.multiply(X0.matrixWorld);if(i.matrix.decompose(i.position,i.quaternion,i.scale),i.updateMatrixWorld(!0),i.projectionMatrix.copy(X0.projectionMatrix),i.projectionMatrixInverse.copy(X0.projectionMatrixInverse),i.isPerspectiveCamera)i.fov=W6*2*Math.atan(1/i.projectionMatrix.elements[5]),i.zoom=1}this.getCamera=function(){return C},this.getFoveation=function(){if(F===null&&q===null)return;return Y},this.setFoveation=function(i){if(Y=i,F!==null)F.fixedFoveation=i;if(q!==null&&q.fixedFoveation!==void 0)q.fixedFoveation=i},this.hasDepthSensing=function(){return I.texture!==null},this.getDepthSensingMesh=function(){return I.getMesh(C)},this.getCameraTexture=function(i){return D[i]};let M0=null;function a0(i,X0){if(U=X0.getViewerPose(H||W),E=X0,U!==null){let E0=U.views;if(q!==null)J.setRenderTargetFramebuffer(M,q.framebuffer),J.setRenderTarget(M);let R0=!1;if(E0.length!==C.cameras.length)C.cameras.length=0,R0=!0;for(let y0=0;y0<E0.length;y0++){let t0=E0[y0],b0=null;if(q!==null)b0=q.getViewport(t0);else{let FJ=G.getViewSubImage(F,t0);if(b0=FJ.viewport,y0===0)J.setRenderTargetTextures(M,FJ.colorTexture,FJ.depthStencilTexture),J.setRenderTarget(M)}let l0=l[y0];if(l0===void 0)l0=new fJ,l0.layers.enable(y0),l0.viewport=new UJ,l[y0]=l0;if(l0.matrix.fromArray(t0.transform.matrix),l0.matrix.decompose(l0.position,l0.quaternion,l0.scale),l0.projectionMatrix.fromArray(t0.projectionMatrix),l0.projectionMatrixInverse.copy(l0.projectionMatrix).invert(),l0.viewport.set(b0.x,b0.y,b0.width,b0.height),y0===0)C.matrix.copy(l0.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale);if(R0===!0)C.cameras.push(l0)}let A0=Z.enabledFeatures;if(A0&&A0.includes("depth-sensing")&&Z.depthUsage=="gpu-optimized"&&L){G=$.getBinding();let y0=G.getDepthInformation(E0[0]);if(y0&&y0.isValid&&y0.texture)I.init(y0,Z.renderState)}if(A0&&A0.includes("camera-access")&&L){J.state.unbindTexture(),G=$.getBinding();for(let y0=0;y0<E0.length;y0++){let t0=E0[y0].camera;if(t0){let b0=D[t0];if(!b0)b0=new A6,D[t0]=b0;let l0=G.getCameraImage(t0);b0.sourceTexture=l0}}}}for(let E0=0;E0<z.length;E0++){let R0=_[E0],A0=z[E0];if(R0!==null&&A0!==void 0)A0.update(R0,X0,H||W)}if(M0)M0(i,X0);if(X0.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:X0});E=null}let r0=new tK;r0.setAnimationLoop(a0),this.setAnimationLoop=function(i){M0=i},this.dispose=function(){}}}var g5=new ZJ,GW=new j0;GW.set(-1,0,0,0,1,0,0,0,1);function p5(J,Q){function $(D,O){if(D.matrixAutoUpdate===!0)D.updateMatrix();O.value.copy(D.matrix)}function Z(D,O){if(O.color.getRGB(D.fogColor.value,D$(J)),O.isFog)D.fogNear.value=O.near,D.fogFar.value=O.far;else if(O.isFogExp2)D.fogDensity.value=O.density}function K(D,O,T,M,z){if(O.isNodeMaterial)O.uniformsNeedUpdate=!1;else if(O.isMeshBasicMaterial)W(D,O);else if(O.isMeshLambertMaterial){if(W(D,O),O.envMap)D.envMapIntensity.value=O.envMapIntensity}else if(O.isMeshToonMaterial)W(D,O),F(D,O);else if(O.isMeshPhongMaterial){if(W(D,O),G(D,O),O.envMap)D.envMapIntensity.value=O.envMapIntensity}else if(O.isMeshStandardMaterial){if(W(D,O),q(D,O),O.isMeshPhysicalMaterial)E(D,O,z)}else if(O.isMeshMatcapMaterial)W(D,O),L(D,O);else if(O.isMeshDepthMaterial)W(D,O);else if(O.isMeshDistanceMaterial)W(D,O),I(D,O);else if(O.isMeshNormalMaterial)W(D,O);else if(O.isLineBasicMaterial){if(X(D,O),O.isLineDashedMaterial)Y(D,O)}else if(O.isPointsMaterial)H(D,O,T,M);else if(O.isSpriteMaterial)U(D,O);else if(O.isShadowMaterial)D.color.value.copy(O.color),D.opacity.value=O.opacity;else if(O.isShaderMaterial)O.uniformsNeedUpdate=!1}function W(D,O){if(D.opacity.value=O.opacity,O.color)D.diffuse.value.copy(O.color);if(O.emissive)D.emissive.value.copy(O.emissive).multiplyScalar(O.emissiveIntensity);if(O.map)D.map.value=O.map,$(O.map,D.mapTransform);if(O.alphaMap)D.alphaMap.value=O.alphaMap,$(O.alphaMap,D.alphaMapTransform);if(O.bumpMap){if(D.bumpMap.value=O.bumpMap,$(O.bumpMap,D.bumpMapTransform),D.bumpScale.value=O.bumpScale,O.side===yJ)D.bumpScale.value*=-1}if(O.normalMap){if(D.normalMap.value=O.normalMap,$(O.normalMap,D.normalMapTransform),D.normalScale.value.copy(O.normalScale),O.side===yJ)D.normalScale.value.negate()}if(O.displacementMap)D.displacementMap.value=O.displacementMap,$(O.displacementMap,D.displacementMapTransform),D.displacementScale.value=O.displacementScale,D.displacementBias.value=O.displacementBias;if(O.emissiveMap)D.emissiveMap.value=O.emissiveMap,$(O.emissiveMap,D.emissiveMapTransform);if(O.specularMap)D.specularMap.value=O.specularMap,$(O.specularMap,D.specularMapTransform);if(O.alphaTest>0)D.alphaTest.value=O.alphaTest;let T=Q.get(O),M=T.envMap,z=T.envMapRotation;if(M){if(D.envMap.value=M,D.envMapRotation.value.setFromMatrix4(g5.makeRotationFromEuler(z)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1)D.envMapRotation.value.premultiply(GW);D.reflectivity.value=O.reflectivity,D.ior.value=O.ior,D.refractionRatio.value=O.refractionRatio}if(O.lightMap)D.lightMap.value=O.lightMap,D.lightMapIntensity.value=O.lightMapIntensity,$(O.lightMap,D.lightMapTransform);if(O.aoMap)D.aoMap.value=O.aoMap,D.aoMapIntensity.value=O.aoMapIntensity,$(O.aoMap,D.aoMapTransform)}function X(D,O){if(D.diffuse.value.copy(O.color),D.opacity.value=O.opacity,O.map)D.map.value=O.map,$(O.map,D.mapTransform)}function Y(D,O){D.dashSize.value=O.dashSize,D.totalSize.value=O.dashSize+O.gapSize,D.scale.value=O.scale}function H(D,O,T,M){if(D.diffuse.value.copy(O.color),D.opacity.value=O.opacity,D.size.value=O.size*T,D.scale.value=M*0.5,O.map)D.map.value=O.map,$(O.map,D.uvTransform);if(O.alphaMap)D.alphaMap.value=O.alphaMap,$(O.alphaMap,D.alphaMapTransform);if(O.alphaTest>0)D.alphaTest.value=O.alphaTest}function U(D,O){if(D.diffuse.value.copy(O.color),D.opacity.value=O.opacity,D.rotation.value=O.rotation,O.map)D.map.value=O.map,$(O.map,D.mapTransform);if(O.alphaMap)D.alphaMap.value=O.alphaMap,$(O.alphaMap,D.alphaMapTransform);if(O.alphaTest>0)D.alphaTest.value=O.alphaTest}function G(D,O){D.specular.value.copy(O.specular),D.shininess.value=Math.max(O.shininess,0.0001)}function F(D,O){if(O.gradientMap)D.gradientMap.value=O.gradientMap}function q(D,O){if(D.metalness.value=O.metalness,O.metalnessMap)D.metalnessMap.value=O.metalnessMap,$(O.metalnessMap,D.metalnessMapTransform);if(D.roughness.value=O.roughness,O.roughnessMap)D.roughnessMap.value=O.roughnessMap,$(O.roughnessMap,D.roughnessMapTransform);if(O.envMap)D.envMapIntensity.value=O.envMapIntensity}function E(D,O,T){if(D.ior.value=O.ior,O.sheen>0){if(D.sheenColor.value.copy(O.sheenColor).multiplyScalar(O.sheen),D.sheenRoughness.value=O.sheenRoughness,O.sheenColorMap)D.sheenColorMap.value=O.sheenColorMap,$(O.sheenColorMap,D.sheenColorMapTransform);if(O.sheenRoughnessMap)D.sheenRoughnessMap.value=O.sheenRoughnessMap,$(O.sheenRoughnessMap,D.sheenRoughnessMapTransform)}if(O.clearcoat>0){if(D.clearcoat.value=O.clearcoat,D.clearcoatRoughness.value=O.clearcoatRoughness,O.clearcoatMap)D.clearcoatMap.value=O.clearcoatMap,$(O.clearcoatMap,D.clearcoatMapTransform);if(O.clearcoatRoughnessMap)D.clearcoatRoughnessMap.value=O.clearcoatRoughnessMap,$(O.clearcoatRoughnessMap,D.clearcoatRoughnessMapTransform);if(O.clearcoatNormalMap){if(D.clearcoatNormalMap.value=O.clearcoatNormalMap,$(O.clearcoatNormalMap,D.clearcoatNormalMapTransform),D.clearcoatNormalScale.value.copy(O.clearcoatNormalScale),O.side===yJ)D.clearcoatNormalScale.value.negate()}}if(O.dispersion>0)D.dispersion.value=O.dispersion;if(O.iridescence>0){if(D.iridescence.value=O.iridescence,D.iridescenceIOR.value=O.iridescenceIOR,D.iridescenceThicknessMinimum.value=O.iridescenceThicknessRange[0],D.iridescenceThicknessMaximum.value=O.iridescenceThicknessRange[1],O.iridescenceMap)D.iridescenceMap.value=O.iridescenceMap,$(O.iridescenceMap,D.iridescenceMapTransform);if(O.iridescenceThicknessMap)D.iridescenceThicknessMap.value=O.iridescenceThicknessMap,$(O.iridescenceThicknessMap,D.iridescenceThicknessMapTransform)}if(O.transmission>0){if(D.transmission.value=O.transmission,D.transmissionSamplerMap.value=T.texture,D.transmissionSamplerSize.value.set(T.width,T.height),O.transmissionMap)D.transmissionMap.value=O.transmissionMap,$(O.transmissionMap,D.transmissionMapTransform);if(D.thickness.value=O.thickness,O.thicknessMap)D.thicknessMap.value=O.thicknessMap,$(O.thicknessMap,D.thicknessMapTransform);D.attenuationDistance.value=O.attenuationDistance,D.attenuationColor.value.copy(O.attenuationColor)}if(O.anisotropy>0){if(D.anisotropyVector.value.set(O.anisotropy*Math.cos(O.anisotropyRotation),O.anisotropy*Math.sin(O.anisotropyRotation)),O.anisotropyMap)D.anisotropyMap.value=O.anisotropyMap,$(O.anisotropyMap,D.anisotropyMapTransform)}if(D.specularIntensity.value=O.specularIntensity,D.specularColor.value.copy(O.specularColor),O.specularColorMap)D.specularColorMap.value=O.specularColorMap,$(O.specularColorMap,D.specularColorMapTransform);if(O.specularIntensityMap)D.specularIntensityMap.value=O.specularIntensityMap,$(O.specularIntensityMap,D.specularIntensityMapTransform)}function L(D,O){if(O.matcap)D.matcap.value=O.matcap}function I(D,O){let T=Q.get(O).light;D.referencePosition.value.setFromMatrixPosition(T.matrixWorld),D.nearDistance.value=T.shadow.camera.near,D.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:K}}function m5(J,Q,$,Z){let K={},W={},X=[],Y=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function H(z,_){let P=_.program;Z.uniformBlockBinding(z,P)}function U(z,_){let P=K[z.id];if(P===void 0)D(z),P=G(z),K[z.id]=P,z.addEventListener("dispose",T);let w=_.program;Z.updateUBOMapping(z,w);let k=Q.render.frame;if(W[z.id]!==k)q(z),W[z.id]=k}function G(z){let _=F();z.__bindingPointIndex=_;let P=J.createBuffer(),w=z.__size,k=z.usage;return J.bindBuffer(J.UNIFORM_BUFFER,P),J.bufferData(J.UNIFORM_BUFFER,w,k),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,_,P),P}function F(){for(let z=0;z<Y;z++)if(X.indexOf(z)===-1)return X.push(z),z;return w0("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function q(z){let _=K[z.id],P=z.uniforms,w=z.__cache;J.bindBuffer(J.UNIFORM_BUFFER,_);for(let k=0,B=P.length;k<B;k++){let l=P[k];if(Array.isArray(l))for(let C=0,m=l.length;C<m;C++)E(l[C],k,C,w);else E(l,k,0,w)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function E(z,_,P,w){if(I(z,_,P,w)===!0){let{__offset:k,value:B}=z;if(Array.isArray(B)){let l=0;for(let C=0;C<B.length;C++){let m=B[C],o=O(m);if(L(m,z.__data,l),typeof m!=="number"&&typeof m!=="boolean"&&!m.isMatrix3&&!ArrayBuffer.isView(m))l+=o.storage/Float32Array.BYTES_PER_ELEMENT}}else L(B,z.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,k,z.__data)}}function L(z,_,P){if(typeof z==="number"||typeof z==="boolean")_[0]=z;else if(z.isMatrix3)_[0]=z.elements[0],_[1]=z.elements[1],_[2]=z.elements[2],_[3]=0,_[4]=z.elements[3],_[5]=z.elements[4],_[6]=z.elements[5],_[7]=0,_[8]=z.elements[6],_[9]=z.elements[7],_[10]=z.elements[8],_[11]=0;else if(ArrayBuffer.isView(z))_.set(new z.constructor(z.buffer,z.byteOffset,_.length));else z.toArray(_,P)}function I(z,_,P,w){let k=z.value,B=_+"_"+P;if(w[B]===void 0){if(typeof k==="number"||typeof k==="boolean")w[B]=k;else if(ArrayBuffer.isView(k))w[B]=k.slice();else w[B]=k.clone();return!0}else{let l=w[B];if(typeof k==="number"||typeof k==="boolean"){if(l!==k)return w[B]=k,!0}else if(ArrayBuffer.isView(k))return!0;else if(l.equals(k)===!1)return l.copy(k),!0}return!1}function D(z){let _=z.uniforms,P=0,w=16;for(let B=0,l=_.length;B<l;B++){let C=Array.isArray(_[B])?_[B]:[_[B]];for(let m=0,o=C.length;m<o;m++){let x=C[m],u=Array.isArray(x.value)?x.value:[x.value];for(let c=0,g=u.length;c<g;c++){let t=u[c],$0=O(t),G0=P%w,k0=G0%$0.boundary,M0=G0+k0;if(P+=k0,M0!==0&&w-M0<$0.storage)P+=w-M0;x.__data=new Float32Array($0.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=P,P+=$0.storage}}}let k=P%w;if(k>0)P+=w-k;return z.__size=P,z.__cache={},this}function O(z){let _={boundary:0,storage:0};if(typeof z==="number"||typeof z==="boolean")_.boundary=4,_.storage=4;else if(z.isVector2)_.boundary=8,_.storage=8;else if(z.isVector3||z.isColor)_.boundary=16,_.storage=12;else if(z.isVector4)_.boundary=16,_.storage=16;else if(z.isMatrix3)_.boundary=48,_.storage=48;else if(z.isMatrix4)_.boundary=64,_.storage=64;else if(z.isTexture)T0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(z))_.boundary=16,_.storage=z.byteLength;else T0("WebGLRenderer: Unsupported uniform value type.",z);return _}function T(z){let _=z.target;_.removeEventListener("dispose",T);let P=X.indexOf(_.__bindingPointIndex);X.splice(P,1),J.deleteBuffer(K[_.id]),delete K[_.id],delete W[_.id]}function M(){for(let z in K)J.deleteBuffer(K[z]);X=[],K={},W={}}return{bind:H,update:U,dispose:M}}var l5=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),L9=null;function d5(){if(L9===null)L9=new B6(l5,16,16,U8,w9),L9.name="DFG_LUT",L9.minFilter=VJ,L9.magFilter=VJ,L9.wrapS=U6,L9.wrapT=U6,L9.generateMipmaps=!1,L9.needsUpdate=!0;return L9}class c${constructor(J={}){let{canvas:Q=VK(),context:$=null,depth:Z=!0,stencil:K=!1,alpha:W=!1,antialias:X=!1,premultipliedAlpha:Y=!0,preserveDrawingBuffer:H=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:G=!1,reversedDepthBuffer:F=!1,outputBufferType:q=H9}=J;this.isWebGLRenderer=!0;let E;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=$.getContextAttributes().alpha}else E=W;let L=q,I=new Set([_Q,CQ,PQ]),D=new Set([H9,n9,k7,i8,IQ,AQ]),O=new Uint32Array(4),T=new Int32Array(4),M=new h,z=null,_=null,P=[],w=[],k=null;this.domElement=Q,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Y9,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let B=this,l=!1,C=null,m=null,o=null,x=null;this._outputColorSpace=k9;let u=0,c=0,g=null,t=-1,$0=null,G0=new UJ,k0=new UJ,M0=null,a0=new m0(0),r0=0,i=Q.width,X0=Q.height,E0=1,R0=null,A0=null,x0=new UJ(0,0,i,X0),v0=new UJ(0,0,i,X0),y0=!1,t0=new B7,b0=!1,l0=!1,FJ=new ZJ,zJ=new h,KJ=new UJ,GJ={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},OJ=!1;function qJ(){return g===null?E0:1}let v=$;function CJ(N,A){return Q.getContext(N,A)}try{let N={alpha:!0,depth:Z,stencil:K,antialias:X,premultipliedAlpha:Y,preserveDrawingBuffer:H,powerPreference:U,failIfMajorPerformanceCaveat:G};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${BZ}`);if(Q.addEventListener("webglcontextlost",_0,!1),Q.addEventListener("webglcontextrestored",i0,!1),Q.addEventListener("webglcontextcreationerror",QJ,!1),v===null){if(v=CJ("webgl2",N),v===null)if(CJ("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(N){throw w0("WebGLRenderer: "+N.message),N}let c0,s0,V,R,S,p,e,Q0,H0,d,s,U0,z0,N0,Z0,I0,C0,d0,f,W0,n,q0,D0;function r(){if(c0=new aH(v),c0.init(),n=new b5(v,c0),s0=new lH(v,c0,J,n),V=new f5(v,c0),s0.reversedDepthBuffer&&F)V.buffers.depth.setReversed(!0);m=v.createFramebuffer(),o=v.createFramebuffer(),x=v.createFramebuffer(),R=new eH(v),S=new V5,p=new y5(v,c0,V,S,s0,n,R),e=new oH(B),Q0=new ZX(v),q0=new pH(v,Q0),H0=new rH(v,Q0,R,q0),d=new QU(v,H0,Q0,q0,R),d0=new JU(v,s0,p),Z0=new dH(S),s=new L5(B,e,c0,s0,q0,Z0),U0=new p5(B,S),z0=new z5,N0=new _5(c0),C0=new gH(B,e,V,d,E,Y),I0=new v5(B,d,s0),D0=new m5(v,R,s0,V),f=new mH(v,c0,R),W0=new tH(v,c0,R),R.programs=s.programs,B.capabilities=s0,B.extensions=c0,B.properties=S,B.renderLists=z0,B.shadowMap=I0,B.state=V,B.info=R}if(r(),L!==H9)k=new ZU(L,Q.width,Q.height,X,Z,K);let Y0=new qW(B,v);this.xr=Y0,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){let N=c0.get("WEBGL_lose_context");if(N)N.loseContext()},this.forceContextRestore=function(){let N=c0.get("WEBGL_lose_context");if(N)N.restoreContext()},this.getPixelRatio=function(){return E0},this.setPixelRatio=function(N){if(N===void 0)return;E0=N,this.setSize(i,X0,!1)},this.getSize=function(N){return N.set(i,X0)},this.setSize=function(N,A,y=!0){if(Y0.isPresenting){T0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(i=N,X0=A,Q.width=Math.floor(N*E0),Q.height=Math.floor(A*E0),y===!0)Q.style.width=N+"px",Q.style.height=A+"px";if(k!==null)k.setSize(Q.width,Q.height);this.setViewport(0,0,N,A)},this.getDrawingBufferSize=function(N){return N.set(i*E0,X0*E0).floor()},this.setDrawingBufferSize=function(N,A,y){i=N,X0=A,E0=y,Q.width=Math.floor(N*y),Q.height=Math.floor(A*y),this.setViewport(0,0,N,A)},this.setEffects=function(N){if(L===H9){w0("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let A=0;A<N.length;A++)if(N[A].isOutputPass===!0){T0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(G0)},this.getViewport=function(N){return N.copy(x0)},this.setViewport=function(N,A,y,j){if(N.isVector4)x0.set(N.x,N.y,N.z,N.w);else x0.set(N,A,y,j);V.viewport(G0.copy(x0).multiplyScalar(E0).round())},this.getScissor=function(N){return N.copy(v0)},this.setScissor=function(N,A,y,j){if(N.isVector4)v0.set(N.x,N.y,N.z,N.w);else v0.set(N,A,y,j);V.scissor(k0.copy(v0).multiplyScalar(E0).round())},this.getScissorTest=function(){return y0},this.setScissorTest=function(N){V.setScissorTest(y0=N)},this.setOpaqueSort=function(N){R0=N},this.setTransparentSort=function(N){A0=N},this.getClearColor=function(N){return N.copy(C0.getClearColor())},this.setClearColor=function(){C0.setClearColor(...arguments)},this.getClearAlpha=function(){return C0.getClearAlpha()},this.setClearAlpha=function(){C0.setClearAlpha(...arguments)},this.clear=function(N=!0,A=!0,y=!0){let j=0;if(N){let b=!1;if(g!==null){let J0=g.texture.format;b=I.has(J0)}if(b){let J0=g.texture.type,F0=D.has(J0),K0=C0.getClearColor(),V0=C0.getClearAlpha(),B0=K0.r,f0=K0.g,g0=K0.b;if(F0)O[0]=B0,O[1]=f0,O[2]=g0,O[3]=V0,v.clearBufferuiv(v.COLOR,0,O);else T[0]=B0,T[1]=f0,T[2]=g0,T[3]=V0,v.clearBufferiv(v.COLOR,0,T)}else j|=v.COLOR_BUFFER_BIT}if(A)j|=v.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(y)j|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(j!==0)v.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(N){N.setRenderer(this),C=N},this.dispose=function(){Q.removeEventListener("webglcontextlost",_0,!1),Q.removeEventListener("webglcontextrestored",i0,!1),Q.removeEventListener("webglcontextcreationerror",QJ,!1),C0.dispose(),z0.dispose(),N0.dispose(),S.dispose(),e.dispose(),d.dispose(),q0.dispose(),D0.dispose(),s.dispose(),Y0.dispose(),Y0.removeEventListener("sessionstart",z8),Y0.removeEventListener("sessionend",$7),pJ.stop()};function _0(N){N.preventDefault(),q$("WebGLRenderer: Context Lost."),l=!0}function i0(){q$("WebGLRenderer: Context Restored."),l=!1;let N=R.autoReset,A=I0.enabled,y=I0.autoUpdate,j=I0.needsUpdate,b=I0.type;r(),R.autoReset=N,I0.enabled=A,I0.autoUpdate=y,I0.needsUpdate=j,I0.type=b}function QJ(N){w0("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function TJ(N){let A=N.target;A.removeEventListener("dispose",TJ),Z9(A)}function Z9(N){J7(N),S.remove(N)}function J7(N){let A=S.get(N).programs;if(A!==void 0){if(A.forEach(function(y){s.releaseProgram(y)}),N.isShaderMaterial)s.releaseShaderCache(N)}}this.renderBufferDirect=function(N,A,y,j,b,J0){if(A===null)A=GJ;let F0=b.isMesh&&b.matrixWorld.determinantAffine()<0,K0=g6(N,A,y,j,b);V.setMaterial(j,F0);let V0=y.index,B0=1;if(j.wireframe===!0){if(V0=H0.getWireframeAttribute(y),V0===void 0)return;B0=2}let f0=y.drawRange,g0=y.attributes.position,P0=f0.start*B0,$J=(f0.start+f0.count)*B0;if(J0!==null)P0=Math.max(P0,J0.start*B0),$J=Math.min($J,(J0.start+J0.count)*B0);if(V0!==null)P0=Math.max(P0,0),$J=Math.min($J,V0.count);else if(g0!==void 0&&g0!==null)P0=Math.max(P0,0),$J=Math.min($J,g0.count);let DJ=$J-P0;if(DJ<0||DJ===1/0)return;q0.setup(b,j,K0,y,V0);let NJ,WJ=f;if(V0!==null)NJ=Q0.get(V0),WJ=W0,WJ.setIndex(NJ);if(b.isMesh)if(j.wireframe===!0)V.setLineWidth(j.wireframeLinewidth*qJ()),WJ.setMode(v.LINES);else WJ.setMode(v.TRIANGLES);else if(b.isLine){let SJ=j.linewidth;if(SJ===void 0)SJ=1;if(V.setLineWidth(SJ*qJ()),b.isLineSegments)WJ.setMode(v.LINES);else if(b.isLineLoop)WJ.setMode(v.LINE_LOOP);else WJ.setMode(v.LINE_STRIP)}else if(b.isPoints)WJ.setMode(v.POINTS);else if(b.isSprite)WJ.setMode(v.TRIANGLES);if(b.isBatchedMesh)if(!c0.get("WEBGL_multi_draw")){let{_multiDrawStarts:SJ,_multiDrawCounts:L0,_multiDrawCount:dJ}=b,o0=V0?Q0.get(V0).bytesPerElement:1,iJ=S.get(j).currentProgram.getUniforms();for(let N9=0;N9<dJ;N9++)iJ.setValue(v,"_gl_DrawID",N9),WJ.render(SJ[N9]/o0,L0[N9])}else WJ.renderMultiDraw(b._multiDrawStarts,b._multiDrawCounts,b._multiDrawCount);else if(b.isInstancedMesh)WJ.renderInstances(P0,DJ,b.count);else if(y.isInstancedBufferGeometry){let SJ=y._maxInstanceCount!==void 0?y._maxInstanceCount:1/0,L0=Math.min(y.instanceCount,SJ);WJ.renderInstances(P0,DJ,L0)}else WJ.render(P0,DJ)};function v7(N,A,y){if(N.transparent===!0&&N.side===D9&&N.forceSinglePass===!1)N.side=yJ,N.needsUpdate=!0,P8(N,A,y),N.side=c8,N.needsUpdate=!0,P8(N,A,y),N.side=D9;else P8(N,A,y)}this.compile=function(N,A,y=null){if(y===null)y=N;if(_=N0.get(y),_.init(A),w.push(_),y.traverseVisible(function(b){if(b.isLight&&b.layers.test(A.layers)){if(_.pushLight(b),b.castShadow)_.pushShadow(b)}}),N!==y)N.traverseVisible(function(b){if(b.isLight&&b.layers.test(A.layers)){if(_.pushLight(b),b.castShadow)_.pushShadow(b)}});_.setupLights();let j=new Set;return N.traverse(function(b){if(!(b.isMesh||b.isPoints||b.isLine||b.isSprite))return;let J0=b.material;if(J0)if(Array.isArray(J0))for(let F0=0;F0<J0.length;F0++){let K0=J0[F0];v7(K0,y,b),j.add(K0)}else v7(J0,y,b),j.add(J0)}),_=w.pop(),j},this.compileAsync=function(N,A,y=null){let j=this.compile(N,A,y);return new Promise((b)=>{function J0(){if(j.forEach(function(F0){if(S.get(F0).currentProgram.isReady())j.delete(F0)}),j.size===0){b(N);return}setTimeout(J0,10)}if(c0.get("KHR_parallel_shader_compile")!==null)J0();else setTimeout(J0,10)})};let Q7=null;function f7(N){if(Q7)Q7(N)}function z8(){pJ.stop()}function $7(){pJ.start()}let pJ=new tK;if(pJ.setAnimationLoop(f7),typeof self<"u")pJ.setContext(self);this.setAnimationLoop=function(N){Q7=N,Y0.setAnimationLoop(N),N===null?pJ.stop():pJ.start()},Y0.addEventListener("sessionstart",z8),Y0.addEventListener("sessionend",$7),this.render=function(N,A){if(A!==void 0&&A.isCamera!==!0){w0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(l===!0)return;if(C!==null)C.renderStart(N,A);let y=Y0.enabled===!0&&Y0.isPresenting===!0,j=k!==null&&(g===null||y)&&k.begin(B,g);if(N.matrixWorldAutoUpdate===!0)N.updateMatrixWorld();if(A.parent===null&&A.matrixWorldAutoUpdate===!0)A.updateMatrixWorld();if(Y0.enabled===!0&&Y0.isPresenting===!0&&(k===null||k.isCompositing()===!1)){if(Y0.cameraAutoUpdate===!0)Y0.updateCamera(A);A=Y0.getCamera()}if(N.isScene===!0)N.onBeforeRender(B,N,A,g);if(_=N0.get(N,w.length),_.init(A),_.state.textureUnits=p.getTextureUnits(),w.push(_),FJ.multiplyMatrices(A.projectionMatrix,A.matrixWorldInverse),t0.setFromProjectionMatrix(FJ,U$,A.reversedDepth),l0=this.localClippingEnabled,b0=Z0.init(this.clippingPlanes,l0),z=z0.get(N,P.length),z.init(),P.push(z),Y0.enabled===!0&&Y0.isPresenting===!0){let F0=B.xr.getDepthSensingMesh();if(F0!==null)B8(F0,A,-1/0,B.sortObjects)}if(B8(N,A,0,B.sortObjects),z.finish(),B.sortObjects===!0)z.sort(R0,A0,A.reversedDepth);if(OJ=Y0.enabled===!1||Y0.isPresenting===!1||Y0.hasDepthSensing()===!1,OJ)C0.addToRenderList(z,N);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(b0===!0)Z0.beginShadows();let b=_.state.shadowsArray;if(I0.render(b,N,A),b0===!0)Z0.endShadows();if((j&&k.hasRenderPass())===!1){let{opaque:F0,transmissive:K0}=z;if(_.setupLights(),A.isArrayCamera){let V0=A.cameras;if(K0.length>0)for(let B0=0,f0=V0.length;B0<f0;B0++){let g0=V0[B0];Z7(F0,K0,N,g0)}if(OJ)C0.render(N);for(let B0=0,f0=V0.length;B0<f0;B0++){let g0=V0[B0];I8(z,N,g0,g0.viewport)}}else{if(K0.length>0)Z7(F0,K0,N,A);if(OJ)C0.render(N);I8(z,N,A)}}if(g!==null&&c===0)p.updateMultisampleRenderTarget(g),p.updateRenderTargetMipmap(g);if(j)k.end(B);if(N.isScene===!0)N.onAfterRender(B,N,A);if(q0.resetDefaultState(),t=-1,$0=null,w.pop(),w.length>0){if(_=w[w.length-1],p.setTextureUnits(_.state.textureUnits),b0===!0)Z0.setGlobalState(B.clippingPlanes,_.state.camera)}else _=null;if(P.pop(),P.length>0)z=P[P.length-1];else z=null;if(C!==null)C.renderEnd()};function B8(N,A,y,j){if(N.visible===!1)return;if(N.layers.test(A.layers)){if(N.isGroup)y=N.renderOrder;else if(N.isLOD){if(N.autoUpdate===!0)N.update(A)}else if(N.isLightProbeGrid)_.pushLightProbeGrid(N);else if(N.isLight){if(_.pushLight(N),N.castShadow)_.pushShadow(N)}else if(N.isSprite){if(!N.frustumCulled||t0.intersectsSprite(N)){if(j)KJ.setFromMatrixPosition(N.matrixWorld).applyMatrix4(FJ);let F0=d.update(N),K0=N.material;if(K0.visible)z.push(N,F0,K0,y,KJ.z,null)}}else if(N.isMesh||N.isLine||N.isPoints){if(!N.frustumCulled||t0.intersectsObject(N)){let F0=d.update(N),K0=N.material;if(j){if(N.boundingSphere!==void 0){if(N.boundingSphere===null)N.computeBoundingSphere();KJ.copy(N.boundingSphere.center)}else{if(F0.boundingSphere===null)F0.computeBoundingSphere();KJ.copy(F0.boundingSphere.center)}KJ.applyMatrix4(N.matrixWorld).applyMatrix4(FJ)}if(Array.isArray(K0)){let V0=F0.groups;for(let B0=0,f0=V0.length;B0<f0;B0++){let g0=V0[B0],P0=K0[g0.materialIndex];if(P0&&P0.visible)z.push(N,F0,P0,y,KJ.z,g0)}}else if(K0.visible)z.push(N,F0,K0,y,KJ.z,null)}}}let J0=N.children;for(let F0=0,K0=J0.length;F0<K0;F0++)B8(J0[F0],A,y,j)}function I8(N,A,y,j){let{opaque:b,transmissive:J0,transparent:F0}=N;if(_.setupLightsView(y),b0===!0)Z0.setGlobalState(B.clippingPlanes,y);if(j)V.viewport(G0.copy(j));if(b.length>0)y9(b,A,y);if(J0.length>0)y9(J0,A,y);if(F0.length>0)y9(F0,A,y);V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function Z7(N,A,y,j){if((y.isScene===!0?y.overrideMaterial:null)!==null)return;if(_.state.transmissionRenderTarget[j.id]===void 0){let P0=c0.has("EXT_color_buffer_half_float")||c0.has("EXT_color_buffer_float");_.state.transmissionRenderTarget[j.id]=new rJ(1,1,{generateMipmaps:!0,type:P0?w9:H9,minFilter:X8,samples:Math.max(4,s0.samples),stencilBuffer:K,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:u0.workingColorSpace})}let J0=_.state.transmissionRenderTarget[j.id],F0=j.viewport||G0;J0.setSize(F0.z*B.transmissionResolutionScale,F0.w*B.transmissionResolutionScale);let K0=B.getRenderTarget(),V0=B.getActiveCubeFace(),B0=B.getActiveMipmapLevel();if(B.setRenderTarget(J0),B.getClearColor(a0),r0=B.getClearAlpha(),r0<1)B.setClearColor(16777215,0.5);if(B.clear(),OJ)C0.render(y);let f0=B.toneMapping;B.toneMapping=Y9;let g0=j.viewport;if(j.viewport!==void 0)j.viewport=void 0;if(_.setupLightsView(j),b0===!0)Z0.setGlobalState(B.clippingPlanes,j);if(y9(N,y,j),p.updateMultisampleRenderTarget(J0),p.updateRenderTargetMipmap(J0),c0.has("WEBGL_multisampled_render_to_texture")===!1){let P0=!1;for(let $J=0,DJ=A.length;$J<DJ;$J++){let NJ=A[$J],{object:WJ,geometry:SJ,material:L0,group:dJ}=NJ;if(L0.side===D9&&WJ.layers.test(j.layers)){let o0=L0.side;L0.side=yJ,L0.needsUpdate=!0,A8(WJ,y,j,SJ,L0,dJ),L0.side=o0,L0.needsUpdate=!0,P0=!0}}if(P0===!0)p.updateMultisampleRenderTarget(J0),p.updateRenderTargetMipmap(J0)}if(B.setRenderTarget(K0,V0,B0),B.setClearColor(a0,r0),g0!==void 0)j.viewport=g0;B.toneMapping=f0}function y9(N,A,y){let j=A.isScene===!0?A.overrideMaterial:null;for(let b=0,J0=N.length;b<J0;b++){let F0=N[b],{object:K0,geometry:V0,group:B0}=F0,f0=F0.material;if(f0.allowOverride===!0&&j!==null)f0=j;if(K0.layers.test(y.layers))A8(K0,A,y,V0,f0,B0)}}function A8(N,A,y,j,b,J0){if(N.onBeforeRender(B,A,y,j,b,J0),N.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),b.onBeforeRender(B,A,y,j,N,J0),b.transparent===!0&&b.side===D9&&b.forceSinglePass===!1)b.side=yJ,b.needsUpdate=!0,B.renderBufferDirect(y,A,j,b,N,J0),b.side=c8,b.needsUpdate=!0,B.renderBufferDirect(y,A,j,b,N,J0),b.side=D9;else B.renderBufferDirect(y,A,j,b,N,J0);N.onAfterRender(B,A,y,j,b,J0)}function P8(N,A,y){if(A.isScene!==!0)A=GJ;let j=S.get(N),b=_.state.lights,J0=_.state.shadowsArray,F0=b.state.version,K0=s.getParameters(N,b.state,J0,A,y,_.state.lightProbeGridArray),V0=s.getProgramCacheKey(K0),B0=j.programs;j.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?A.environment:null,j.fog=A.fog;let f0=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;if(j.envMap=e.get(N.envMap||j.environment,f0),j.envMapRotation=j.environment!==null&&N.envMap===null?A.environmentRotation:N.envMapRotation,B0===void 0)N.addEventListener("dispose",TJ),B0=new Map,j.programs=B0;let g0=B0.get(V0);if(g0!==void 0){if(j.currentProgram===g0&&j.lightsStateVersion===F0)return t9(N,K0),g0}else{if(K0.uniforms=s.getUniforms(N),C!==null&&N.isNodeMaterial)C.build(N,y,K0);N.onBeforeCompile(K0,B),g0=s.acquireProgram(K0,V0),B0.set(V0,g0),j.uniforms=K0.uniforms}let P0=j.uniforms;if(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)P0.clippingPlanes=Z0.uniform;if(t9(N,K0),j.needsLights=a(N),j.lightsStateVersion=F0,j.needsLights)P0.ambientLightColor.value=b.state.ambient,P0.lightProbe.value=b.state.probe,P0.directionalLights.value=b.state.directional,P0.directionalLightShadows.value=b.state.directionalShadow,P0.spotLights.value=b.state.spot,P0.spotLightShadows.value=b.state.spotShadow,P0.rectAreaLights.value=b.state.rectArea,P0.ltc_1.value=b.state.rectAreaLTC1,P0.ltc_2.value=b.state.rectAreaLTC2,P0.pointLights.value=b.state.point,P0.pointLightShadows.value=b.state.pointShadow,P0.hemisphereLights.value=b.state.hemi,P0.directionalShadowMatrix.value=b.state.directionalShadowMatrix,P0.spotLightMatrix.value=b.state.spotLightMatrix,P0.spotLightMap.value=b.state.spotLightMap,P0.pointShadowMatrix.value=b.state.pointShadowMatrix;return j.lightProbeGrid=_.state.lightProbeGridArray.length>0,j.currentProgram=g0,j.uniformsList=null,g0}function K7(N){if(N.uniformsList===null){let A=N.currentProgram.getUniforms();N.uniformsList=w7.seqWithValue(A.seq,N.uniforms)}return N.uniformsList}function t9(N,A){let y=S.get(N);y.outputColorSpace=A.outputColorSpace,y.batching=A.batching,y.batchingColor=A.batchingColor,y.instancing=A.instancing,y.instancingColor=A.instancingColor,y.instancingMorph=A.instancingMorph,y.skinning=A.skinning,y.morphTargets=A.morphTargets,y.morphNormals=A.morphNormals,y.morphColors=A.morphColors,y.morphTargetsCount=A.morphTargetsCount,y.numClippingPlanes=A.numClippingPlanes,y.numIntersection=A.numClipIntersection,y.vertexAlphas=A.vertexAlphas,y.vertexTangents=A.vertexTangents,y.toneMapping=A.toneMapping}function x6(N,A){if(N.length===0)return null;if(N.length===1)return N[0].texture!==null?N[0]:null;M.setFromMatrixPosition(A.matrixWorld);for(let y=0,j=N.length;y<j;y++){let b=N[y];if(b.texture!==null&&b.boundingBox.containsPoint(M))return b}return null}function g6(N,A,y,j,b){if(A.isScene!==!0)A=GJ;p.resetTextureUnits();let J0=A.fog,F0=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?A.environment:null,K0=g===null?B.outputColorSpace:g.isXRRenderTarget===!0?g.texture.colorSpace:u0.workingColorSpace,V0=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,B0=e.get(j.envMap||F0,V0),f0=j.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,g0=!!y.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),P0=!!y.morphAttributes.position,$J=!!y.morphAttributes.normal,DJ=!!y.morphAttributes.color,NJ=Y9;if(j.toneMapped){if(g===null||g.isXRRenderTarget===!0)NJ=B.toneMapping}let WJ=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,SJ=WJ!==void 0?WJ.length:0,L0=S.get(j),dJ=_.state.lights;if(b0===!0){if(l0===!0||N!==$0){let HJ=N===$0&&j.id===t;Z0.setState(j,N,HJ)}}let o0=!1;if(j.version===L0.__version){if(L0.needsLights&&L0.lightsStateVersion!==dJ.state.version)o0=!0;else if(L0.outputColorSpace!==K0)o0=!0;else if(b.isBatchedMesh&&L0.batching===!1)o0=!0;else if(!b.isBatchedMesh&&L0.batching===!0)o0=!0;else if(b.isBatchedMesh&&L0.batchingColor===!0&&b.colorTexture===null)o0=!0;else if(b.isBatchedMesh&&L0.batchingColor===!1&&b.colorTexture!==null)o0=!0;else if(b.isInstancedMesh&&L0.instancing===!1)o0=!0;else if(!b.isInstancedMesh&&L0.instancing===!0)o0=!0;else if(b.isSkinnedMesh&&L0.skinning===!1)o0=!0;else if(!b.isSkinnedMesh&&L0.skinning===!0)o0=!0;else if(b.isInstancedMesh&&L0.instancingColor===!0&&b.instanceColor===null)o0=!0;else if(b.isInstancedMesh&&L0.instancingColor===!1&&b.instanceColor!==null)o0=!0;else if(b.isInstancedMesh&&L0.instancingMorph===!0&&b.morphTexture===null)o0=!0;else if(b.isInstancedMesh&&L0.instancingMorph===!1&&b.morphTexture!==null)o0=!0;else if(L0.envMap!==B0)o0=!0;else if(j.fog===!0&&L0.fog!==J0)o0=!0;else if(L0.numClippingPlanes!==void 0&&(L0.numClippingPlanes!==Z0.numPlanes||L0.numIntersection!==Z0.numIntersection))o0=!0;else if(L0.vertexAlphas!==f0)o0=!0;else if(L0.vertexTangents!==g0)o0=!0;else if(L0.morphTargets!==P0)o0=!0;else if(L0.morphNormals!==$J)o0=!0;else if(L0.morphColors!==DJ)o0=!0;else if(L0.toneMapping!==NJ)o0=!0;else if(L0.morphTargetsCount!==SJ)o0=!0;else if(!!L0.lightProbeGrid!==_.state.lightProbeGridArray.length>0)o0=!0}else o0=!0,L0.__version=j.version;let iJ=L0.currentProgram;if(o0===!0){if(iJ=P8(j,A,b),C&&j.isNodeMaterial)C.onUpdateProgram(j,iJ,L0)}let N9=!1,b9=!1,C8=!1,XJ=iJ.getUniforms(),EJ=L0.uniforms;if(V.useProgram(iJ.program))N9=!0,b9=!0,C8=!0;if(j.id!==t)t=j.id,b9=!0;if(L0.needsLights){let HJ=x6(_.state.lightProbeGridArray,b);if(L0.lightProbeGrid!==HJ)L0.lightProbeGrid=HJ,b9=!0}if(N9||$0!==N){if(V.buffers.depth.getReversed()&&N.reversedDepth!==!0)N._reversedDepth=!0,N.updateProjectionMatrix();XJ.setValue(v,"projectionMatrix",N.projectionMatrix),XJ.setValue(v,"viewMatrix",N.matrixWorldInverse);let x9=XJ.map.cameraPosition;if(x9!==void 0)x9.setValue(v,zJ.setFromMatrixPosition(N.matrixWorld));if(s0.logarithmicDepthBuffer)XJ.setValue(v,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2));if(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)XJ.setValue(v,"isOrthographic",N.isOrthographicCamera===!0);if($0!==N)$0=N,b9=!0,C8=!0}if(L0.needsLights){if(dJ.state.directionalShadowMap.length>0)XJ.setValue(v,"directionalShadowMap",dJ.state.directionalShadowMap,p);if(dJ.state.spotShadowMap.length>0)XJ.setValue(v,"spotShadowMap",dJ.state.spotShadowMap,p);if(dJ.state.pointShadowMap.length>0)XJ.setValue(v,"pointShadowMap",dJ.state.pointShadowMap,p)}if(b.isSkinnedMesh){XJ.setOptional(v,b,"bindMatrix"),XJ.setOptional(v,b,"bindMatrixInverse");let HJ=b.skeleton;if(HJ){if(HJ.boneTexture===null)HJ.computeBoneTexture();XJ.setValue(v,"boneTexture",HJ.boneTexture,p)}}if(b.isBatchedMesh){if(XJ.setOptional(v,b,"batchingTexture"),XJ.setValue(v,"batchingTexture",b._matricesTexture,p),XJ.setOptional(v,b,"batchingIdTexture"),XJ.setValue(v,"batchingIdTexture",b._indirectTexture,p),XJ.setOptional(v,b,"batchingColorTexture"),b._colorsTexture!==null)XJ.setValue(v,"batchingColorTexture",b._colorsTexture,p)}let h9=y.morphAttributes;if(h9.position!==void 0||h9.normal!==void 0||h9.color!==void 0)d0.update(b,y,iJ);if(b9||L0.receiveShadow!==b.receiveShadow)L0.receiveShadow=b.receiveShadow,XJ.setValue(v,"receiveShadow",b.receiveShadow);if((j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&A.environment!==null)EJ.envMapIntensity.value=A.environmentIntensity;if(EJ.dfgLUT!==void 0)EJ.dfgLUT.value=d5();if(b9){if(XJ.setValue(v,"toneMappingExposure",B.toneMappingExposure),L0.needsLights)y7(EJ,C8);if(J0&&j.fog===!0)U0.refreshFogUniforms(EJ,J0);if(U0.refreshMaterialUniforms(EJ,j,E0,X0,_.state.transmissionRenderTarget[N.id]),L0.needsLights&&L0.lightProbeGrid){let HJ=L0.lightProbeGrid;EJ.probesSH.value=HJ.texture,EJ.probesMin.value.copy(HJ.boundingBox.min),EJ.probesMax.value.copy(HJ.boundingBox.max),EJ.probesResolution.value.copy(HJ.resolution)}w7.upload(v,K7(L0),EJ,p)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0)w7.upload(v,K7(L0),EJ,p),j.uniformsNeedUpdate=!1;if(j.isSpriteMaterial)XJ.setValue(v,"center",b.center);if(XJ.setValue(v,"modelViewMatrix",b.modelViewMatrix),XJ.setValue(v,"normalMatrix",b.normalMatrix),XJ.setValue(v,"modelMatrix",b.matrixWorld),j.uniformsGroups!==void 0){let HJ=j.uniformsGroups;for(let x9=0,_8=HJ.length;x9<_8;x9++){let r$=HJ[x9];D0.update(r$,iJ),D0.bind(r$,iJ)}}return iJ}function y7(N,A){N.ambientLightColor.needsUpdate=A,N.lightProbe.needsUpdate=A,N.directionalLights.needsUpdate=A,N.directionalLightShadows.needsUpdate=A,N.pointLights.needsUpdate=A,N.pointLightShadows.needsUpdate=A,N.spotLights.needsUpdate=A,N.spotLightShadows.needsUpdate=A,N.rectAreaLights.needsUpdate=A,N.hemisphereLights.needsUpdate=A}function a(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}if(this.getActiveCubeFace=function(){return u},this.getActiveMipmapLevel=function(){return c},this.getRenderTarget=function(){return g},this.setRenderTargetTextures=function(N,A,y){let j=S.get(N);if(j.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1)j.__useRenderToTexture=!1;S.get(N.texture).__webglTexture=A,S.get(N.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:y,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,A){let y=S.get(N);y.__webglFramebuffer=A,y.__useDefaultFramebuffer=A===void 0},this.setRenderTarget=function(N,A=0,y=0){g=N,u=A,c=y;let j=null,b=!1,J0=!1;if(N){let K0=S.get(N);if(K0.__useDefaultFramebuffer!==void 0){V.bindFramebuffer(v.FRAMEBUFFER,K0.__webglFramebuffer),G0.copy(N.viewport),k0.copy(N.scissor),M0=N.scissorTest,V.viewport(G0),V.scissor(k0),V.setScissorTest(M0),t=-1;return}else if(K0.__webglFramebuffer===void 0)p.setupRenderTarget(N);else if(K0.__hasExternalTextures)p.rebindTextures(N,S.get(N.texture).__webglTexture,S.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){let f0=N.depthTexture;if(K0.__boundDepthTexture!==f0){if(f0!==null&&S.has(f0)&&(N.width!==f0.image.width||N.height!==f0.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");p.setupDepthRenderbuffer(N)}}let V0=N.texture;if(V0.isData3DTexture||V0.isDataArrayTexture||V0.isCompressedArrayTexture)J0=!0;let B0=S.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget){if(Array.isArray(B0[A]))j=B0[A][y];else j=B0[A];b=!0}else if(N.samples>0&&p.useMultisampledRTT(N)===!1)j=S.get(N).__webglMultisampledFramebuffer;else if(Array.isArray(B0))j=B0[y];else j=B0;G0.copy(N.viewport),k0.copy(N.scissor),M0=N.scissorTest}else G0.copy(x0).multiplyScalar(E0).floor(),k0.copy(v0).multiplyScalar(E0).floor(),M0=y0;if(y!==0)j=m;if(V.bindFramebuffer(v.FRAMEBUFFER,j))V.drawBuffers(N,j);if(V.viewport(G0),V.scissor(k0),V.setScissorTest(M0),b){let K0=S.get(N.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+A,K0.__webglTexture,y)}else if(J0){let K0=A;for(let V0=0;V0<N.textures.length;V0++){let B0=S.get(N.textures[V0]);v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0+V0,B0.__webglTexture,y,K0)}}else if(N!==null&&y!==0){let K0=S.get(N.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,K0.__webglTexture,y)}t=-1},this.readRenderTargetPixels=function(N,A,y,j,b,J0,F0,K0=0){if(!(N&&N.isWebGLRenderTarget)){w0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let V0=S.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&F0!==void 0)V0=V0[F0];if(V0){V.bindFramebuffer(v.FRAMEBUFFER,V0);try{let B0=N.textures[K0],f0=B0.format,g0=B0.type;if(N.textures.length>1)v.readBuffer(v.COLOR_ATTACHMENT0+K0);if(!s0.textureFormatReadable(f0)){w0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!s0.textureTypeReadable(g0)){w0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(A>=0&&A<=N.width-j&&(y>=0&&y<=N.height-b))v.readPixels(A,y,j,b,n.convert(f0),n.convert(g0),J0)}finally{let B0=g!==null?S.get(g).__webglFramebuffer:null;V.bindFramebuffer(v.FRAMEBUFFER,B0)}}},this.readRenderTargetPixelsAsync=async function(N,A,y,j,b,J0,F0,K0=0){if(!(N&&N.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let V0=S.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&F0!==void 0)V0=V0[F0];if(V0)if(A>=0&&A<=N.width-j&&(y>=0&&y<=N.height-b)){V.bindFramebuffer(v.FRAMEBUFFER,V0);let B0=N.textures[K0],f0=B0.format,g0=B0.type;if(N.textures.length>1)v.readBuffer(v.COLOR_ATTACHMENT0+K0);if(!s0.textureFormatReadable(f0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!s0.textureTypeReadable(g0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let P0=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,P0),v.bufferData(v.PIXEL_PACK_BUFFER,J0.byteLength,v.STREAM_READ),v.readPixels(A,y,j,b,n.convert(f0),n.convert(g0),0);let $J=g!==null?S.get(g).__webglFramebuffer:null;V.bindFramebuffer(v.FRAMEBUFFER,$J);let DJ=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await zK(v,DJ,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,P0),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,J0),v.deleteBuffer(P0),v.deleteSync(DJ),J0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,A=null,y=0){let j=Math.pow(2,-y),b=Math.floor(N.image.width*j),J0=Math.floor(N.image.height*j),F0=A!==null?A.x:0,K0=A!==null?A.y:0;p.setTexture2D(N,0),v.copyTexSubImage2D(v.TEXTURE_2D,y,0,0,F0,K0,b,J0),V.unbindTexture()},this.copyTextureToTexture=function(N,A,y=null,j=null,b=0,J0=0){let F0,K0,V0,B0,f0,g0,P0,$J,DJ,NJ=N.isCompressedTexture?N.mipmaps[J0]:N.image;if(y!==null)F0=y.max.x-y.min.x,K0=y.max.y-y.min.y,V0=y.isBox3?y.max.z-y.min.z:1,B0=y.min.x,f0=y.min.y,g0=y.isBox3?y.min.z:0;else{let EJ=Math.pow(2,-b);if(F0=Math.floor(NJ.width*EJ),K0=Math.floor(NJ.height*EJ),N.isDataArrayTexture)V0=NJ.depth;else if(N.isData3DTexture)V0=Math.floor(NJ.depth*EJ);else V0=1;B0=0,f0=0,g0=0}if(j!==null)P0=j.x,$J=j.y,DJ=j.z;else P0=0,$J=0,DJ=0;let WJ=n.convert(A.format),SJ=n.convert(A.type),L0;if(A.isData3DTexture)p.setTexture3D(A,0),L0=v.TEXTURE_3D;else if(A.isDataArrayTexture||A.isCompressedArrayTexture)p.setTexture2DArray(A,0),L0=v.TEXTURE_2D_ARRAY;else p.setTexture2D(A,0),L0=v.TEXTURE_2D;V.activeTexture(v.TEXTURE0),V.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,A.flipY),V.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),V.pixelStorei(v.UNPACK_ALIGNMENT,A.unpackAlignment);let dJ=V.getParameter(v.UNPACK_ROW_LENGTH),o0=V.getParameter(v.UNPACK_IMAGE_HEIGHT),iJ=V.getParameter(v.UNPACK_SKIP_PIXELS),N9=V.getParameter(v.UNPACK_SKIP_ROWS),b9=V.getParameter(v.UNPACK_SKIP_IMAGES);V.pixelStorei(v.UNPACK_ROW_LENGTH,NJ.width),V.pixelStorei(v.UNPACK_IMAGE_HEIGHT,NJ.height),V.pixelStorei(v.UNPACK_SKIP_PIXELS,B0),V.pixelStorei(v.UNPACK_SKIP_ROWS,f0),V.pixelStorei(v.UNPACK_SKIP_IMAGES,g0);let C8=N.isDataArrayTexture||N.isData3DTexture,XJ=A.isDataArrayTexture||A.isData3DTexture;if(N.isDepthTexture){let EJ=S.get(N),h9=S.get(A),HJ=S.get(EJ.__renderTarget),x9=S.get(h9.__renderTarget);V.bindFramebuffer(v.READ_FRAMEBUFFER,HJ.__webglFramebuffer),V.bindFramebuffer(v.DRAW_FRAMEBUFFER,x9.__webglFramebuffer);for(let _8=0;_8<V0;_8++){if(C8)v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,S.get(N).__webglTexture,b,g0+_8),v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,S.get(A).__webglTexture,J0,DJ+_8);v.blitFramebuffer(B0,f0,F0,K0,P0,$J,F0,K0,v.DEPTH_BUFFER_BIT,v.NEAREST)}V.bindFramebuffer(v.READ_FRAMEBUFFER,null),V.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(b!==0||N.isRenderTargetTexture||S.has(N)){let EJ=S.get(N),h9=S.get(A);V.bindFramebuffer(v.READ_FRAMEBUFFER,o),V.bindFramebuffer(v.DRAW_FRAMEBUFFER,x);for(let HJ=0;HJ<V0;HJ++){if(C8)v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,EJ.__webglTexture,b,g0+HJ);else v.framebufferTexture2D(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,EJ.__webglTexture,b);if(XJ)v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,h9.__webglTexture,J0,DJ+HJ);else v.framebufferTexture2D(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,h9.__webglTexture,J0);if(b!==0)v.blitFramebuffer(B0,f0,F0,K0,P0,$J,F0,K0,v.COLOR_BUFFER_BIT,v.NEAREST);else if(XJ)v.copyTexSubImage3D(L0,J0,P0,$J,DJ+HJ,B0,f0,F0,K0);else v.copyTexSubImage2D(L0,J0,P0,$J,B0,f0,F0,K0)}V.bindFramebuffer(v.READ_FRAMEBUFFER,null),V.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(XJ)if(N.isDataTexture||N.isData3DTexture)v.texSubImage3D(L0,J0,P0,$J,DJ,F0,K0,V0,WJ,SJ,NJ.data);else if(A.isCompressedArrayTexture)v.compressedTexSubImage3D(L0,J0,P0,$J,DJ,F0,K0,V0,WJ,NJ.data);else v.texSubImage3D(L0,J0,P0,$J,DJ,F0,K0,V0,WJ,SJ,NJ);else if(N.isDataTexture)v.texSubImage2D(v.TEXTURE_2D,J0,P0,$J,F0,K0,WJ,SJ,NJ.data);else if(N.isCompressedTexture)v.compressedTexSubImage2D(v.TEXTURE_2D,J0,P0,$J,NJ.width,NJ.height,WJ,NJ.data);else v.texSubImage2D(v.TEXTURE_2D,J0,P0,$J,F0,K0,WJ,SJ,NJ);if(V.pixelStorei(v.UNPACK_ROW_LENGTH,dJ),V.pixelStorei(v.UNPACK_IMAGE_HEIGHT,o0),V.pixelStorei(v.UNPACK_SKIP_PIXELS,iJ),V.pixelStorei(v.UNPACK_SKIP_ROWS,N9),V.pixelStorei(v.UNPACK_SKIP_IMAGES,b9),J0===0&&A.generateMipmaps)v.generateMipmap(L0);V.unbindTexture()},this.initRenderTarget=function(N){if(S.get(N).__webglFramebuffer===void 0)p.setupRenderTarget(N)},this.initTexture=function(N){if(N.isCubeTexture)p.setTextureCube(N,0);else if(N.isData3DTexture)p.setTexture3D(N,0);else if(N.isDataArrayTexture||N.isCompressedArrayTexture)p.setTexture2DArray(N,0);else p.setTexture2D(N,0);V.unbindTexture()},this.resetState=function(){u=0,c=0,g=null,V.reset(),q0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return U$}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=u0._getDrawingBufferColorSpace(J),Q.unpackColorSpace=u0._getUnpackColorSpace()}}var S7=new h;function J9(J,Q,$,Z,K,W){let X=2*Math.PI*K/4,Y=Math.max(W-2*K,0),H=Math.PI/4;S7.copy(Q),S7[Z]=0,S7.normalize();let U=0.5*X/(X+Y),G=1-S7.angleTo(J)/H;if(Math.sign(S7[$])===1)return G*U;else return Y/(X+Y)+U+U*(1-G)}class f9 extends BJ{constructor(J=1,Q=1,$=1,Z=2,K=0.1){let W=Z*2+1;K=Math.min(J/2,Q/2,$/2,K);super(1,1,1,W,W,W);if(this.type="RoundedBoxGeometry",this.parameters={width:J,height:Q,depth:$,segments:Z,radius:K},W===1)return;let X=this.toNonIndexed();this.index=null,this.attributes.position=X.attributes.position,this.attributes.normal=X.attributes.normal,this.attributes.uv=X.attributes.uv;let Y=new h,H=new h,U=new h(J,Q,$).divideScalar(2).subScalar(K),G=this.attributes.position.array,F=this.attributes.normal.array,q=this.attributes.uv.array,E=G.length/6,L=new h,I=0.5/W;for(let D=0,O=0;D<G.length;D+=3,O+=2)switch(Y.fromArray(G,D),H.copy(Y),H.x-=Math.sign(H.x)*I,H.y-=Math.sign(H.y)*I,H.z-=Math.sign(H.z)*I,H.normalize(),G[D+0]=U.x*Math.sign(Y.x)+H.x*K,G[D+1]=U.y*Math.sign(Y.y)+H.y*K,G[D+2]=U.z*Math.sign(Y.z)+H.z*K,F[D+0]=H.x,F[D+1]=H.y,F[D+2]=H.z,Math.floor(D/E)){case 0:L.set(1,0,0),q[O+0]=J9(L,H,"z","y",K,$),q[O+1]=1-J9(L,H,"y","z",K,Q);break;case 1:L.set(-1,0,0),q[O+0]=1-J9(L,H,"z","y",K,$),q[O+1]=1-J9(L,H,"y","z",K,Q);break;case 2:L.set(0,1,0),q[O+0]=1-J9(L,H,"x","z",K,J),q[O+1]=J9(L,H,"z","x",K,$);break;case 3:L.set(0,-1,0),q[O+0]=1-J9(L,H,"x","z",K,J),q[O+1]=1-J9(L,H,"z","x",K,$);break;case 4:L.set(0,0,1),q[O+0]=1-J9(L,H,"x","y",K,J),q[O+1]=1-J9(L,H,"y","x",K,Q);break;case 5:L.set(0,0,-1),q[O+0]=J9(L,H,"x","y",K,J),q[O+1]=1-J9(L,H,"y","x",K,Q);break}}static fromJSON(J){return new f9(J.width,J.height,J.depth,J.segments,J.radius)}}class n$ extends o8{constructor(){super();this.name="RoomEnvironment",this.position.y=-3.5;let J=new BJ;J.deleteAttribute("uv");let Q=new gJ({side:yJ}),$=new gJ,Z=new T6(16777215,900,28,2);Z.position.set(0.418,16.199,0.3),this.add(Z);let K=new S0(J,Q);K.position.set(-0.757,13.219,0.717),K.scale.set(31.713,28.305,28.591),this.add(K);let W=new a8(J,$,6),X=new RJ;X.position.set(-10.906,2.009,1.846),X.rotation.set(0,-0.195,0),X.scale.set(2.328,7.905,4.651),X.updateMatrix(),W.setMatrixAt(0,X.matrix),X.position.set(-5.607,-0.754,-0.758),X.rotation.set(0,0.994,0),X.scale.set(1.97,1.534,3.955),X.updateMatrix(),W.setMatrixAt(1,X.matrix),X.position.set(6.167,0.857,7.803),X.rotation.set(0,0.561,0),X.scale.set(3.927,6.285,3.687),X.updateMatrix(),W.setMatrixAt(2,X.matrix),X.position.set(-2.017,0.018,6.124),X.rotation.set(0,0.333,0),X.scale.set(2.002,4.566,2.064),X.updateMatrix(),W.setMatrixAt(3,X.matrix),X.position.set(2.291,-0.756,-2.621),X.rotation.set(0,-0.286,0),X.scale.set(1.546,1.552,1.496),X.updateMatrix(),W.setMatrixAt(4,X.matrix),X.position.set(-2.193,-0.369,-5.547),X.rotation.set(0,0.516,0),X.scale.set(3.875,3.487,2.986),X.updateMatrix(),W.setMatrixAt(5,X.matrix),this.add(W);let Y=new S0(J,e8(50));Y.position.set(-16.116,14.37,8.208),Y.scale.set(0.1,2.428,2.739),this.add(Y);let H=new S0(J,e8(50));H.position.set(-16.109,18.021,-8.207),H.scale.set(0.1,2.425,2.751),this.add(H);let U=new S0(J,e8(17));U.position.set(14.904,12.198,-1.832),U.scale.set(0.15,4.265,6.331),this.add(U);let G=new S0(J,e8(43));G.position.set(-0.462,8.89,14.52),G.scale.set(4.38,5.441,0.088),this.add(G);let F=new S0(J,e8(20));F.position.set(3.235,11.486,-12.541),F.scale.set(2.5,2,0.1),this.add(F);let q=new S0(J,e8(100));q.position.set(0,20,0),q.scale.set(1,0.1,1),this.add(q)}dispose(){let J=new Set;this.traverse((Q)=>{if(Q.isMesh)J.add(Q.geometry),J.add(Q.material)});for(let Q of J)Q.dispose()}}function e8(J){return new P6({color:0,emissive:16777215,emissiveIntensity:J})}var k8=653429,kJ="#09F875",e0="rgba(9,248,117,0.55)",s$="rgba(9,248,117,0.28)",u5="#0A0A0A",a$="#070808",MJ="#F2F4F2",M8="'SF Mono', ui-monospace, Menlo, Consolas, monospace",a9="'Space Grotesk', -apple-system, sans-serif",r9=["HOME","CHAT","SEARCH","X LOOKUP","LEDGER","LANES"],$9=matchMedia("(prefers-reduced-motion: reduce)").matches,NW=null,L8=()=>NW=NW||new(window.AudioContext||window.webkitAudioContext);function q9(J,Q,$,Z=0.045,K="triangle"){let W=L8(),X=W.createOscillator(),Y=W.createGain();X.type=K,X.frequency.value=J,Y.gain.setValueAtTime($,Q),Y.gain.exponentialRampToValueAtTime(0.0001,Q+Z),X.connect(Y),Y.connect(W.destination),X.start(Q),X.stop(Q+Z+0.02)}var wJ={detent(J=0){try{let Q=L8();if(Q.state==="suspended")Q.resume();q9(640+J*46,Q.currentTime+0.01,0.022,0.03)}catch{}},lever(){try{let J=L8();q9(420,J.currentTime+0.01,0.04,0.05),q9(640,J.currentTime+0.06,0.03,0.04)}catch{}},press(){try{let J=L8();q9(120,J.currentTime+0.01,0.09,0.08,"sine"),q9(88,J.currentTime+0.05,0.05,0.09,"sine")}catch{}},ok(){try{let J=L8();q9(660,J.currentTime+0.02,0.05),q9(880,J.currentTime+0.1,0.045)}catch{}},err(){try{let J=L8();q9(220,J.currentTime+0.02,0.05,0.07),q9(180,J.currentTime+0.1,0.05,0.09)}catch{}},dock(){try{let J=L8();q9(240,J.currentTime+0.01,0.05,0.05,"sine"),q9(180,J.currentTime+0.07,0.07,0.06,"sine")}catch{}}};class V8{k;d;v;target;vel=0;constructor(J,Q=120,$=18){this.k=Q;this.d=$;this.v=J,this.target=J}step(J){let Q=-this.k*(this.v-this.target)-this.d*this.vel;return this.vel+=Q*J,this.v+=this.vel*J,this.v}settled(){return Math.abs(this.v-this.target)<0.0001&&Math.abs(this.vel)<0.0001}}var c5=[new Path2D("M20 0 L47 1 L47 213 L238 23 L239 104 L90 253 L0 253 L0 20 Z"),new Path2D("M238 151 L239 215 L203 253 L134 253 Z")],b6={w:240,h:254};function h6(J,Q,$,Z,K,W=1){J.save(),J.globalAlpha=W,J.translate(Q,$),J.scale(Z/b6.w,Z/b6.w),J.fillStyle=K;for(let X of c5)J.fill(X);J.restore()}var n5=[[5,8,12,7],[12,3,6,6],[1,6,3,3],[3,8,3,3]],s5=[[18,5,3,2]],i$=[[6,4,8,4]],i5=[[6,9,8,4]],o$=[[7,12,7,3]],j7=[15.2,4.6,1.6,1.6];class OW{state="sleep";t=0;unfold=0;flapRate=0;blinkAt=2.5;hopV=0;hopY=0;set(J){if(this.state===J)return;if(J==="wake"&&this.state!=="sleep")return;if(this.state=J,this.t=0,J==="happy")this.hopV=-46}poke(){if(this.state==="sleep")this.set("wake")}step(J){this.t+=J;let Q=this.state==="sleep"?0:1;if(this.unfold+=(Q-this.unfold)*Math.min(1,J*(this.state==="wake"?9:5)),this.state==="wake"&&this.unfold>0.98)this.set("idle"),this.hopV=-34;if(this.state==="happy"&&this.t>1.5)this.set("idle");if(this.state==="alert"&&this.t>1.1)this.set("idle");if(this.state==="idle"&&this.t>45)this.state="sleep",this.t=0;if(this.hopV+=340*J,this.hopY=Math.max(0,this.hopY-this.hopV*J*0.28),this.hopY===0&&this.hopV>0)this.hopV=0;if(this.state==="happy"&&this.hopY===0&&this.t<1&&this.hopV===0)this.hopV=-40;if(this.t>this.blinkAt)this.blinkAt=this.t+2.5+Math.random()*3.5}blinking(){return this.state!=="sleep"&&this.t>this.blinkAt-0.12&&this.t<this.blinkAt}wingCells(J){if(this.state==="work"){let Q=Math.max(3,this.flapRate);return Math.floor(J*Q*2)%2?i$:o$}if(this.state==="happy")return Math.floor(J*8)%2?i$:o$;if(this.state==="droop")return o$;return Math.floor(J)%7===6?i$:i5}draw(J,Q,$,Z,K){let W=Math.floor(K*10)/10,X=1-Math.min(1,this.unfold*1.6),Y=Math.max(0,this.unfold*1.4-0.4),H=18*Z;if(X>0.01){let U=1+Math.sin(W*1.1)*0.012,G=15*Z*U;h6(J,Q+(24*Z-G)/2,$+H-G*(b6.h/b6.w),G,kJ,X)}if(Y>0.01){let U=this.state==="droop",G=this.state==="idle"&&Math.floor(W*2)%4===3?0.6:0;J.save(),J.globalAlpha=Y,J.fillStyle=kJ;let F=(q,E,L,I,D=0)=>{let O=Q+q*Z,T=$+(E+G-this.hopY/24)*Z;if(D>0)J.beginPath(),J.roundRect(O,T,L*Z,I*Z,D*Z),J.fill();else J.fillRect(O,T,L*Z,I*Z)};for(let[q,E,L,I]of n5){let D=U&&q>=12&&E<=4?E+2:E;F(q,D,L,I,Math.min(L,I)*0.42)}for(let[q,E,L,I]of s5)F(q,U?E+2:E,L,I,0.6);for(let[q,E,L,I]of this.wingCells(W))F(q,U?E+2:E,L,I,1.1);if(!this.blinking()){J.fillStyle=a$;let q=U?j7[1]+2:j7[1];J.fillRect(Q+j7[0]*Z,$+(q+G-this.hopY/24)*Z,j7[2]*Z,j7[3]*Z)}J.restore()}}}var o5=(J)=>J<0.5?2*J*J:1-Math.pow(-2*J+2,2)/2,Q9=1024,G9=768;class DW{canvas=document.createElement("canvas");ctx;tex;vireo=new OW;mode=0;lane="inference";meta=null;history=[];booted=$9;bootT=0;powered=$9;busy=!1;status="";chat=null;search=null;xprof=null;err=null;armed=null;tabRects=[];lastDrawAt=-1e9;dirty=!0;acc=0;lastKey="";constructor(){this.canvas.width=Q9,this.canvas.height=G9,this.ctx=this.canvas.getContext("2d"),this.tex=new v9(this.canvas),this.tex.colorSpace=k9,this.tex.generateMipmaps=!1,this.tex.minFilter=VJ}modeName(){return r9[this.mode]}frameKey(J){let Q=this.vireo,$=Q.state!=="sleep"||Q.unfold>0.001,Z=!this.powered?Math.floor(J*2):!this.booted||$||this.busy?Math.floor(J*10):0,K=this.meta;return[this.mode,this.lane,this.powered,this.booted,this.busy,this.err,this.status,this.armed?.quote,Z,Q.state,this.chat?`${this.chat.prompt}|${Math.floor(this.chat.shown)}|${this.chat.line}`:"",this.search?.query,this.search?.results?.length,this.xprof?.profile?.handle,this.history.length,K?`${K.main_balance_usd}|${K.lanes?.inference?.balance_usd}|${K.lanes?.devtools?.balance_usd}|${K.handle}`:""].join("~")}step(J,Q){if(this.powered&&!this.booted){if(this.bootT+=J,this.bootT>1.5)this.booted=!0}if(this.vireo.step(J),this.armed&&Q*1000>this.armed.until)this.armed=null;if(this.chat&&this.chat.shown<this.chat.text.length){let Z=$9?1e9:60;if(this.chat.shown=Math.min(this.chat.text.length,this.chat.shown+Z*J),this.vireo.flapRate=Math.max(2.5,Z/12),this.chat.shown>=this.chat.text.length&&!this.busy)this.vireo.set("idle")}this.acc+=J;let $=!this.booted?0.05:0.1;if(this.acc>=$){this.acc=0;let Z=this.frameKey(Q);if(Z!==this.lastKey||Q-this.lastDrawAt>2)return this.lastKey=Z,this.lastDrawAt=Q,this.draw(Q),this.tex.needsUpdate=!0,this.dirty=!1,!0}return!1}text(J,Q,$,Z,K=kJ,W=M8,X="500"){this.ctx.fillStyle=K,this.ctx.font=`${X} ${Z}px ${W}`,this.ctx.textBaseline="top",this.ctx.fillText(J,Q,$)}wrap(J,Q){let $=[];for(let Z of J.split(/\n+/)){let K="";for(let W of Z.split(/\s+/))if((K+" "+W).trim().length>Q)$.push(K.trim()),K=W;else K+=" "+W;if(K.trim())$.push(K.trim())}return $}draw(J){let Q=this.ctx;if(Q.fillStyle=a$,Q.fillRect(0,0,Q9,G9),!this.powered){if(Math.floor(J*2)%2===0)Q.fillStyle=kJ,Q.fillRect(Q9/2-14,G9/2-24,28,7);this.text("READING CARD",Q9/2-84,G9/2+12,21,e0);return}if(!this.booted){let Y=this.bootT,H=Math.min(1,Y/0.55);Q.fillStyle=kJ;let U=[56,30,18];for(let G=0;G<3;G++){let F=-320+(Q9+560)*o5(Math.min(1,H*1.3-G*0.09));Q.save(),Q.translate(F,96+G*74),Q.transform(1,0,-0.7,1,0,0),Q.fillRect(0,0,210,U[G]),Q.restore()}if(Y>0.55)this.text("VANTIS WALLET TERMINAL",64,G9*0.52,40,MJ,a9,"700");if(Y>0.85)this.text("WLT-01 · SESSION OPEN",64,G9*0.52+62,22,e0);if(Y>1.1&&this.meta?.handle)this.text(`CARD ACCEPTED — @${String(this.meta.handle).replace(/^@+/,"")}`.toUpperCase(),64,G9*0.52+100,22,kJ);return}this.tabRects=[];let $=44;for(let Y=0;Y<r9.length;Y++){let H=Y===this.mode;Q.font=`600 22px ${M8}`;let U=Q.measureText(r9[Y]).width;if(H)Q.fillStyle=kJ,Q.beginPath(),Q.roundRect($-14,24,U+28,40,8),Q.fill();this.text(r9[Y],$,33,22,H?a$:e0),this.tabRects.push({x:$-14,y:16,w:U+28,h:56,mode:Y}),$+=U+42}let Z=this.meta?`$${(this.meta.main_balance_usd||0).toFixed(2)}`:"$—";Q.font=`600 22px ${M8}`,this.text(`MAIN ${Z}`,Q9-44-Q.measureText(`MAIN ${Z}`).width,33,22,MJ),Q.fillStyle=s$,Q.fillRect(44,80,Q9-88,2);let K=108,W=this.modeName();if(this.err)this.text("PROBLEM",64,K+8,22,e0),this.wrap(this.err,52).slice(0,4).forEach((Y,H)=>this.text(Y,64,K+46+H*34,24,MJ));else if(W==="HOME")this.drawHome(K);else if(W==="CHAT")this.drawChat(K);else if(W==="SEARCH")this.drawSearch(K);else if(W==="X LOOKUP")this.drawX(K);else if(W==="LEDGER")this.drawLedger(K);else this.drawLanes(K);Q.fillStyle=s$,Q.fillRect(44,G9-140,Q9-88,2),this.vireo.draw(Q,52,G9-126,6,J);let X=this.busy?"WORKING…":this.status||"TAP A TAB · GREEN KEY FIRES";Q.font=`600 21px ${M8}`,this.text(X,Q9-44-Q.measureText(X).width,G9-72,21,this.busy?kJ:e0)}drawHome(J){let Q=this.meta,$=Q?.lanes?.inference,Z=Q?.lanes?.devtools;if(this.text("ONE CARD. EVERY RAIL.",44,J+2,21,e0),this.text(Q?`$${(Q.main_balance_usd||0).toFixed(2)}`:"$—",44,J+34,104,MJ,a9,"700"),this.text("MAIN BALANCE",46,J+156,20,e0),Q?.tier){let X=this.ctx;X.font=`600 20px ${M8}`;let Y=`TIER ${String(Q.tier).toUpperCase()}`,H=X.measureText(Y).width;X.strokeStyle=e0,X.lineWidth=2,X.beginPath(),X.roundRect(44,J+198,H+28,38,19),X.stroke(),this.text(Y,58,J+207,20,kJ),this.text(`${(Q.vantis_burned||0).toFixed(2)} VANTIS BURNED`,94+H,J+207,20,e0)}let K=(X,Y,H,U)=>{let G=this.ctx;this.text(X,560,H,22,U?kJ:e0);let F=Y?`$${Y.balance_usd.toFixed(2)}`:"$—";G.font=`700 30px ${a9}`,this.text(F,Q9-44-G.measureText(F).width,H-6,30,MJ,a9,"700");let q=Math.max(0.01,(Q?.main_balance_usd||0)+($?.balance_usd||0)+(Z?.balance_usd||0)),E=Math.max(6,(Y?.balance_usd||0)/q*420);G.fillStyle="rgba(9,248,117,0.16)",G.fillRect(560,H+44,420,10),G.fillStyle=U?kJ:e0,G.fillRect(560,H+44,E,10),this.text(U?"LIVE — BILLS THE MODEL RAIL":"ROUTES OPENING — FUND AHEAD",560,H+68,18,e0)};K("INFERENCE",$,J+10,!0),K("DEV TOOLS",Z,J+130,!1);let W=this.history[0];if(W){let X=W.amount_usd>=0?`+$${W.amount_usd.toFixed(2)}`:`−$${Math.abs(W.amount_usd).toFixed(2)}`;this.text("LAST MOVE",44,J+268,18,e0),this.text(`${X}  ${String(W.description||"").slice(0,52)}`,200,J+268,20,MJ)}this.status="GREEN KEY = FUND INFERENCE"}drawChat(J){let Q=this.chat;if(this.armed){this.text("QUOTE",64,J+6,22,e0),this.text(this.armed.quote,64,J+44,25,MJ),this.text("ARMED — PRESS AGAIN TO FIRE",64,J+100,30,kJ,a9,"700"),this.status="SETTLES FROM REAL USAGE";return}if(!Q){this.text("TEST-FIRE THE RAIL",64,J+6,22,e0),this.text("DeepSeek V4 Flash. Real call, real cost,",64,J+44,26,MJ),this.text("billed to your Inference lane.",64,J+80,26,MJ),this.text("Type below, then press the green key.",64,J+138,24,e0),this.status="TYPE A PROMPT · GREEN KEY FIRES";return}this.text("> "+Q.prompt.slice(0,46),64,J+4,22,e0);let $=Q.text.slice(0,Math.floor(Q.shown)),Z=this.wrap($,62),K=8;if(Z.slice(-K).forEach((W,X)=>this.text(W,64,J+42+X*34,24,MJ)),Q.line&&Q.shown>=Q.text.length)this.text(Q.line,64,J+42+Math.min(Z.length,K)*34+10,20,kJ)}drawSearch(J){let Q=this.search;if(!Q){this.text("WEB SEARCH — EXA CLASS",64,J+6,22,e0),this.text("One real query against the open web.",64,J+44,26,MJ);let $=this.meta?.tools?.find((Z)=>Z.key==="search");this.text($?`${$.left_today} OF ${$.per_day} ON THE HOUSE TODAY`:"",64,J+100,22,e0),this.status="TYPE A QUERY · GREEN KEY FIRES";return}this.text("? "+Q.query.slice(0,46),64,J+4,22,e0),Q.results.slice(0,5).forEach(($,Z)=>{this.text(($.title||"").slice(0,54),64,J+42+Z*62,24,MJ),this.text(($.url||"").replace(/^https?:\/\//,"").slice(0,58),64,J+42+Z*62+28,19,e0)}),this.text(`${Q.left} LEFT TODAY`,64,J+358,20,kJ)}drawX(J){let Q=this.xprof?.profile;if(!Q){this.text("X PROFILE LOOKUP",64,J+6,22,e0),this.text("Public metrics for any handle —",64,J+44,26,MJ),this.text("the same read the scoring agent makes.",64,J+80,26,MJ);let Z=this.meta?.tools?.find((K)=>K.key==="x");this.text(Z?.status==="off"?"ROUTE OFFLINE":Z?`${Z.left_today} OF ${Z.per_day} ON THE HOUSE TODAY`:"",64,J+138,22,e0),this.status="TYPE @HANDLE · GREEN KEY FIRES";return}this.text(`@${Q.handle}`,64,J+4,34,MJ,a9,"700"),this.text(String(Q.name||"").slice(0,40),64,J+50,22,e0);let $=(Z)=>Z>=1e6?(Z/1e6).toFixed(1)+"M":Z>=1000?(Z/1000).toFixed(1)+"K":String(Z);if(this.text(`${$(Q.followers)} FOLLOWERS · ${$(Q.posts)} POSTS`,64,J+96,26,kJ),Q.created_at)this.text(`SINCE ${String(Q.created_at).slice(0,4)}`,64,J+138,22,e0);this.wrap(Q.bio||"",58).slice(0,3).forEach((Z,K)=>this.text(Z,64,J+182+K*30,21,MJ))}drawLedger(J){if(this.text("RECENT MOVES",64,J+6,22,e0),!this.history.length)this.text("Nothing yet — fund a lane, fire a call.",64,J+48,24,MJ);this.history.slice(0,7).forEach((Q,$)=>{let Z=Q.amount_usd>=0?`+$${Q.amount_usd.toFixed(2)}`:`−$${Math.abs(Q.amount_usd).toFixed(2)}`;this.text(Z.padStart(9),64,J+46+$*42,23,Q.amount_usd>=0?kJ:e0),this.text(String(Q.description||Q.type||"").slice(0,44),220,J+46+$*42,23,MJ)}),this.status="THE FULL LEDGER LIVES IN THE BELL"}drawLanes(J){let Q=this.meta,$=Q?.lanes?.inference,Z=Q?.lanes?.devtools,K=(W,X,Y,H,U,G)=>{let F=this.ctx;F.strokeStyle=H?kJ:s$,F.lineWidth=H?3:2,F.strokeRect(Y,J+10,420,300),this.text(W,Y+28,J+34,24,H?kJ:e0),this.text(X?`$${X.balance_usd.toFixed(2)}`:"$—",Y+28,J+76,56,MJ,a9,"700"),this.text(X?`SPENT $${X.consumed_usd.toFixed(2)}`:"",Y+28,J+152,20,e0),this.wrap(G,30).slice(0,3).forEach((q,E)=>this.text(q,Y+28,J+196+E*28,19,U?MJ:e0))};K("INFERENCE",$,64,this.lane==="inference",!0,"Bills the model rail. Live now."),K("DEV TOOLS",Z,520,this.lane==="devtools",!1,"Metered catalog — routes opening. Fund ahead if you like."),this.status="LEVER PICKS LANE · KEY FUNDS · HOLD = SWEEP"}}function a5(J,Q){let $=document.createElement("canvas");$.width=512,$.height=684;let Z=$.getContext("2d"),K={ink:{top:"#0C0C0B",bottom:"#191917",fg:"#FFFFFF",accent:kJ},carbon:{top:"#151515",bottom:"#2B2B29",fg:"#E8E8E4",accent:kJ},signal:{top:"#0AF77A",bottom:"#05C75F",fg:"#0A0A0A",accent:"#0A0A0A"},mint:{top:"#F2FFF8",bottom:"#BFFADA",fg:"#0A0A0A",accent:"#0B7A3E"},mono:{top:"#FFFFFF",bottom:"#E8E8E2",fg:"#0A0A0A",accent:"#0B7A3E"}},W=K[Q||"ink"]||K.ink,X=Z.createLinearGradient(0,0,512,684);X.addColorStop(0,W.top),X.addColorStop(1,W.bottom),Z.fillStyle=X,Z.fillRect(0,0,512,684);let Y=(J||"").replace(/^@+/,"");h6(Z,40,36,88,W.accent),Z.font=`700 44px ${a9}`,Z.fillStyle=W.fg,Z.fillText(Y?`@${Y}`:"VANTIS",152,96),Z.font=`600 20px ${M8}`,Z.fillStyle=W.accent,Z.fillText("VANTIS CARD",154,134),Z.fillStyle=W.accent,Z.globalAlpha=0.28,Z.fillRect(0,176,512,3),Z.globalAlpha=1;let H=new v9($);return H.colorSpace=k9,H.generateMipmaps=!1,H.minFilter=VJ,H}function r5(){let J=document.createElement("canvas");J.width=J.height=256;let Q=J.getContext("2d"),$=Q.createRadialGradient(128,128,10,128,128,126);$.addColorStop(0,"rgba(8,10,9,0.5)"),$.addColorStop(0.6,"rgba(8,10,9,0.22)"),$.addColorStop(1,"rgba(8,10,9,0)"),Q.fillStyle=$,Q.fillRect(0,0,256,256);let Z=new v9(J);return Z.colorSpace=k9,Z}function FW(){let J=document.getElementById("device-stage");if(!J)return;let Q=Math.min(1.5,devicePixelRatio||1),$;try{$=new c$({antialias:Q<1.5,alpha:!0,powerPreference:"high-performance"})}catch{document.body.classList.add("dv-fail");return}$.setPixelRatio(Q),$.outputColorSpace=k9,$.toneMapping=D7,$.toneMappingExposure=1.12,J.appendChild($.domElement),$.domElement.setAttribute("aria-hidden","true");let Z=new o8,K=new T7($);Z.environment=K.fromScene(new n$,0.04).texture;let W=new A7(16777215,1.35);W.position.set(-1.6,2.4,1.8),Z.add(W);let X=new A7(14680046,0.25);X.position.set(1.8,0.6,1.2),Z.add(X);let Y=new fJ(28,1,0.1,20);Y.position.set(0,0.94,4.35),Y.lookAt(0,0.8,0);function H(a,N,A="rgba(9,248,117,0.65)"){let y=document.createElement("canvas"),j=Math.max(64,a.length*N*0.75),b=N*2;y.width=j*2,y.height=b*2;let J0=y.getContext("2d");J0.scale(2,2),J0.font=`600 ${N}px ${M8}`,J0.fillStyle=A,J0.textBaseline="middle",J0.textAlign="center",J0.fillText(a,j/2,b/2);let F0=new v9(y);F0.colorSpace=k9,F0.generateMipmaps=!1,F0.minFilter=VJ;let K0=new S0(new sJ(j/640,b/640),new xJ({map:F0,transparent:!0}));return K0.material.toneMapped=!1,K0}let U=new gJ({color:1382166,roughness:0.48,metalness:0.35,envMapIntensity:0.85}),G=new gJ({color:658186,roughness:0.75,metalness:0.25}),F=new gJ({color:k8,roughness:0.42,metalness:0,envMapIntensity:0.3,emissive:k8,emissiveIntensity:0.42});F.toneMapped=!1;let q=new xJ({color:k8});q.toneMapped=!1;let E=new m0(1327146),L=new hJ;Z.add(L);let I=new hJ,D=new S0(new f9(0.94,1.64,0.13,4,0.05),U);I.add(D),I.position.set(0,0.86,0),I.rotation.x=-0.09,L.add(I);let O=I,T=new S0(new BJ(0.82,0.64,0.02),G);T.position.set(0,0.4,0.062),I.add(T);let M=new DW,z=new S0(new sJ(0.76,0.57),new xJ({map:M.tex}));z.position.set(0,0.4,0.076),I.add(z);let _=new S0(new sJ(0.8,0.61),new gJ({color:16777215,transparent:!0,opacity:0.045,roughness:0.12,metalness:0,envMapIntensity:1.5}));_.position.set(0,0.4,0.082),I.add(_);let P=new S0(new BJ(0.86,0.01,0.012),q);P.position.set(0,0.03,0.066),I.add(P);let w=new hJ,k=new S0(new f9(0.26,0.26,0.07,3,0.024),F);w.add(k);let B=document.createElement("canvas");B.width=B.height=128,h6(B.getContext("2d"),28,24,72,u5);let l=new v9(B);l.colorSpace=k9,l.generateMipmaps=!1,l.minFilter=VJ;let C=new S0(new sJ(0.12,0.12),new xJ({map:l,transparent:!0}));C.material.toneMapped=!1,C.position.z=0.037,k.add(C);let m=new S0(new BJ(0.32,0.32,0.02),G);m.position.z=-0.028,w.add(m),w.position.set(-0.24,-0.33,0.075),I.add(w);let o=H("FIRE",12);o.position.set(-0.24,-0.53,0.07),I.add(o);let x=new hJ,u=new S0(new N8(0.15,0.15,0.075,48),new gJ({color:1645338,roughness:0.45,metalness:0.5,envMapIntensity:0.8}));u.rotation.x=Math.PI/2,x.add(u);let c=new S0(new N8(0.132,0.132,0.014,40),new gJ({color:1053201,roughness:0.35,metalness:0.6,envMapIntensity:0.9}));c.rotation.x=Math.PI/2,c.position.z=0.042,x.add(c);let g=new a8(new BJ(0.016,0.03,0.062),new gJ({color:1711131,roughness:0.5,metalness:0.5,envMapIntensity:0.7}),28),t=new RJ;for(let a=0;a<28;a++){let N=a/28*Math.PI*2;t.position.set(Math.cos(N)*0.152,Math.sin(N)*0.152,0),t.rotation.z=N,t.updateMatrix(),g.setMatrixAt(a,t.matrix)}x.add(g);let $0=new S0(new BJ(0.014,0.07,0.012),q);$0.position.set(0,0.096,0.05),x.add($0),x.position.set(0.24,-0.33,0.075),I.add(x);let G0=H("DIAL",12);G0.position.set(0.24,-0.53,0.07),I.add(G0);let k0=new hJ,M0=new S0(new f9(0.24,0.09,0.03,2,0.012),G);k0.add(M0);let a0=new hJ,r0=new S0(new BJ(0.04,0.09,0.04),new gJ({color:1645338,roughness:0.45,metalness:0.5,envMapIntensity:0.8}));r0.position.y=0.045,a0.add(r0);let i=new S0(new f9(0.065,0.05,0.05,2,0.014),F);i.position.y=0.1,a0.add(i),a0.position.z=0.03,k0.add(a0),k0.position.set(0,-0.13,0.07),I.add(k0);let X0=H("INF",11);X0.position.set(-0.2,-0.1,0.07),I.add(X0);let E0=H("DEV",11);E0.position.set(0.2,-0.1,0.07),I.add(E0);let R0=new N8(0.012,0.012,0.014,12),A0=new S0(R0,new xJ({color:k8}));A0.material.toneMapped=!1,A0.rotation.x=Math.PI/2,A0.position.set(-0.2,-0.16,0.07),I.add(A0);let x0=new S0(R0,new xJ({color:E}));x0.material.toneMapped=!1,x0.rotation.x=Math.PI/2,x0.position.set(0.2,-0.16,0.07),I.add(x0);let v0=document.createElement("canvas");v0.width=240,v0.height=254,h6(v0.getContext("2d"),0,0,240,kJ);let y0=new v9(v0);y0.colorSpace=k9,y0.generateMipmaps=!1,y0.minFilter=VJ;let t0=new S0(new sJ(0.08,0.0847),new xJ({map:y0,transparent:!0}));t0.material.toneMapped=!1,t0.position.set(0,-0.66,0.07),I.add(t0);let b0=new hJ;b0.position.set(0.2,0.84,0),I.add(b0);let l0=new S0(new f9(0.56,0.07,0.11,2,0.02),G);b0.add(l0);let FJ=new S0(new BJ(0.5,0.005,0.004),q);FJ.position.set(0,0.037,0.056),b0.add(FJ);let zJ=new hJ,KJ=new S0(new f9(0.48,0.5,0.02,2,0.01),new gJ({color:1645337,roughness:0.45,metalness:0.3,envMapIntensity:0.8}));zJ.add(KJ);let GJ=new xJ;GJ.toneMapped=!1;let OJ=new S0(new sJ(0.46,0.48),GJ);OJ.position.z=0.0115,zJ.add(OJ),zJ.position.y=-0.06,b0.add(zJ);let qJ=new S0(new sJ(2.4,1.6),new xJ({map:r5(),transparent:!0,depthWrite:!1}));qJ.rotation.x=-Math.PI/2,qJ.position.y=-0.12,Z.add(qJ),L.position.y=0.02;let v=new V8(0,60,14),CJ=new V8(0,60,14),c0=new V8(0,170,20),s0=new V8(0,400,24),V=new V8(-0.22,240,20),R=new V8($9?-0.06:0.62,70,13),S={t:0},p=(a,N=!1)=>{let A=(a%r9.length+r9.length)%r9.length;if(A===M.mode)return;if(M.mode=A,M.err=null,M.armed=null,M.dirty=!0,c0.target=-A*(Math.PI*2/8),!N)wJ.detent(A);M.vireo.poke(),N0(),U0(`Mode: ${r9[A]}`)},e=document.getElementById("dv-input-row"),Q0=document.getElementById("dv-input"),H0=document.getElementById("dv-go"),d=document.getElementById("dv-alt"),s=document.getElementById("dv-live"),U0=(a)=>{if(s)s.textContent=a},z0={CHAT:{ph:"Ask the rail anything…",go:"Fire"},SEARCH:{ph:"Search the open web…",go:"Search"},"X LOOKUP":{ph:"@handle",go:"Look up"}};function N0(){let a=M.modeName(),N=z0[a];if(e)e.style.display=N?"flex":"none";if(N&&Q0)Q0.placeholder=N.ph;if(N&&H0)H0.textContent=N.go;if(d)if(a==="HOME"||a==="LANES")d.style.display="",d.textContent=a==="LANES"?"Sweep lane":"Fund lane";else d.style.display="none"}async function Z0(){try{let a=await fetch("/api/playground/meta");if(!a.ok)return;if(M.meta=await a.json(),M.meta?.handle){if(GJ.map=a5(M.meta.handle,M.meta.variant),GJ.needsUpdate=!0,R.target>0){if(R.target=-0.06,!$9)setTimeout(()=>wJ.dock(),420);setTimeout(()=>{M.powered=!0},$9?0:750)}}M.dirty=!0}catch{}}async function I0(){try{let a=await fetch("/api/credits/history");if(!a.ok)return;let N=await a.json();M.history=N.entries||[],M.dirty=!0}catch{}}addEventListener("vc-balances",(a)=>{let N=a.detail||{};if(!M.meta)return;let A=M.meta.main_balance_usd;M.meta.main_balance_usd=N.main??M.meta.main_balance_usd;for(let y of N.wallets||[]){let j=y.purpose==="inference"?M.meta.lanes?.inference:M.meta.lanes?.devtools;if(j)j.balance_usd=y.balance_usd,j.consumed_usd=y.consumed_usd}if(typeof N.main==="number"&&N.main!==A)M.vireo.set("happy");M.dirty=!0,I0()});function C0(a){let N=M.meta?.lanes?.[a];return N?{id:N.id,name:a==="inference"?"Inference":"Developer tools"}:null}function d0(a){let N=C0(a);if(!N)return;dispatchEvent(new CustomEvent("vc-device-fund",{detail:N}))}async function f(a){let N=C0(a);if(!N)return;dispatchEvent(new CustomEvent("vc-device-sweep",{detail:N}))}let W0=null,n=!1;function q0(){if(M.busy)return!1;if(z0[M.modeName()]&&!(Q0?.value||"").trim())return Q0?.focus(),M.vireo.set("alert"),M.dirty=!0,wJ.err(),!1;return!0}async function D0(){if(M.busy)return;let a=M.modeName();if(M.err=null,a==="HOME"){d0("inference");return}if(a==="LANES"){d0(M.lane);return}if(a==="LEDGER"){I0();return}let N=z0[a],A=(Q0?.value||"").trim();if(N&&!A){Q0?.focus(),M.vireo.set("alert"),wJ.err();return}if(a==="CHAT"&&!M.armed){let j=(Math.ceil((A.length+180)/4)*0.14+112.00000000000001)/1e6,b=M.meta?.vantis_price_usd?j/M.meta.vantis_price_usd:null;M.armed={until:performance.now()+3000,quote:`UP TO $${j.toFixed(6)}${b?` · ~${b.toFixed(4)} VANTIS`:""} AT LIST`},M.dirty=!0,U0("Armed. Press again to fire.");return}M.armed=null,M.busy=!0,M.vireo.set("work"),M.vireo.flapRate=3,M.dirty=!0;try{if(a==="CHAT"){M.chat={prompt:A,text:"",shown:0,line:""};let y=await fetch("/api/playground/fire",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:A})}),j=await y.json();if(!y.ok){if(M.chat=null,j.error==="lane_empty")M.err=`Inference lane is empty — it needs about $${(j.required_usd||0.001).toFixed(4)} for this call. Green key on HOME funds it.`,M.vireo.set("droop");else if(j.error==="rate_limited")M.err="Easy — a few seconds between fires.",M.vireo.set("alert");else M.err="The rail refused that one. Try again.",M.vireo.set("alert");wJ.err()}else{if(M.chat.text=j.text||"",M.chat.line=`${(j.latency_ms/1000).toFixed(1)}s · ${j.tokens_out} TOK OUT · $${(j.cost_usd||0).toFixed(6)} → ${(j.vantis_burned||0).toFixed(4)} VANTIS BURNED`,M.meta?.lanes?.inference)M.meta.lanes.inference.balance_usd=j.lane_balance_usd;wJ.ok(),U0(`Answer: ${j.text}`)}}else if(a==="SEARCH"){let y=await fetch("/api/playground/search",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:A})}),j=await y.json();if(!y.ok){if(j.error==="demo_exhausted")M.err="Today's free searches are spent — more tomorrow.";else M.err="Search did not go through.";M.vireo.set("alert"),wJ.err()}else M.search={query:A,results:j.results,left:j.left_today},M.vireo.set("happy"),wJ.ok(),U0(`${j.results.length} results`)}else if(a==="X LOOKUP"){let y=await fetch("/api/playground/x",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({handle:A})}),j=await y.json();if(!y.ok)M.err=j.error==="demo_exhausted"?"Today's free lookups are spent — more tomorrow.":j.error==="handle_not_found"?"No such handle — check the spelling.":j.error==="tool_off"?"This route is offline right now.":"Lookup did not go through.",M.vireo.set("alert"),wJ.err();else M.xprof={profile:j.profile,left:j.left_today},M.vireo.set("happy"),wJ.ok(),U0(`@${j.profile.handle}: ${j.profile.followers} followers`)}}catch{M.err="Network hiccup — try again.",M.vireo.set("alert"),wJ.err()}finally{if(M.busy=!1,M.vireo.state==="work")M.vireo.set("idle");M.dirty=!0}}let r=-1e9,Y0=new S6,_0=new p0,i0=null,QJ=new xJ({visible:!1}),TJ=(a,N,A,y,j,b=0,J0=0,F0=0)=>{let K0=new S0(new BJ(N,A,y),QJ);return K0.position.set(b,J0,F0),K0.userData.hit=a,j.add(K0),K0},Z9=[TJ("knob",0.38,0.38,0.22,x),TJ("key",0.36,0.36,0.2,w),TJ("lever",0.3,0.26,0.18,k0,0,0.06,0.03),TJ("card",0.6,0.3,0.24,b0,0,0.1,0.02),TJ("screen",0.8,0.61,0.06,O,0,0.4,0.08)];function J7(a){let N=$.domElement.getBoundingClientRect();_0.x=(a.clientX-N.left)/N.width*2-1,_0.y=-((a.clientY-N.top)/N.height)*2+1,Y0.setFromCamera(_0,Y);let A=Y0.intersectObjects(Z9,!1);return A.length?A[0].object.userData.hit:null}function v7(a){let N=$.domElement.getBoundingClientRect();_0.x=(a.clientX-N.left)/N.width*2-1,_0.y=-((a.clientY-N.top)/N.height)*2+1,Y0.setFromCamera(_0,Y);let A=Y0.intersectObject(z,!1)[0];if(!A?.uv)return null;return{cx:A.uv.x*Q9,cy:(1-A.uv.y)*G9}}function Q7(a){let N=v7(a);if(!N)return;for(let A of M.tabRects)if(N.cx>=A.x&&N.cx<=A.x+A.w&&N.cy>=A.y&&N.cy<=A.y+A.h){p(A.mode);return}if(M.modeName()==="LANES"&&N.cy>100&&N.cy<460){let A=N.cx<Q9/2?"inference":"devtools";if(A!==M.lane)M.lane=A,V.target=A==="inference"?-0.22:0.22,wJ.lever(),M.dirty=!0,U0(`Lane: ${M.lane}`)}}$.domElement.addEventListener("pointerdown",(a)=>{r=performance.now();let N=J7(a);if(!N)return;if(M.vireo.poke(),N==="knob")i0={x:a.clientX,base:M.mode,acc:0},$.domElement.setPointerCapture(a.pointerId);else if(N==="key"){if(!q0())return;s0.target=-0.032,wJ.press(),n=!1,W0=setTimeout(()=>{if(n=!0,M.modeName()==="LANES")f(M.lane)},650)}else if(N==="lever"){if(M.lane=M.lane==="inference"?"devtools":"inference",V.target=M.lane==="inference"?-0.22:0.22,wJ.lever(),M.dirty=!0,M.modeName()!=="LANES")p(5,!0);U0(`Lane: ${M.lane}`)}else if(N==="screen")Q7(a);else if(N==="card")p(0)});let f7=0,z8=null;$.domElement.addEventListener("pointermove",(a)=>{r=performance.now();let N=$.domElement.getBoundingClientRect(),A=(a.clientX-N.left)/N.width*2-1,y=(a.clientY-N.top)/N.height*2-1;if(!$9)CJ.target=A*0.1,v.target=y*0.055;if(i0){let b=a.clientX-i0.x,J0=Math.round(b/52);if(J0!==i0.acc)p(i0.base+J0),i0.acc=J0;$.domElement.style.cursor="grabbing";return}let j=performance.now();if(j-f7>80)f7=j,z8=J7(a),$.domElement.style.cursor=z8?"pointer":"default"});let $7=(a)=>{if(i0){i0=null;try{$.domElement.releasePointerCapture(a.pointerId)}catch{}}if(s0.target!==0){if(s0.target=0,clearTimeout(W0),!n)D0()}};$.domElement.addEventListener("pointerup",$7),$.domElement.addEventListener("pointerleave",(a)=>{if(!i0)v.target=0,CJ.target=0;$7(a)});let pJ=0,B8=null;$.domElement.addEventListener("wheel",(a)=>{if(z8!=="knob"&&!i0)return;a.preventDefault(),pJ+=a.deltaY,clearTimeout(B8),B8=setTimeout(()=>pJ=0,200);while(Math.abs(pJ)>=100)p(M.mode+(pJ>0?1:-1)),pJ-=Math.sign(pJ)*100},{passive:!1});let I8=()=>{if(!q0())return;s0.target=-0.032,setTimeout(()=>s0.target=0,130),wJ.press(),D0()};addEventListener("keydown",(a)=>{if(a.target===Q0){if(a.key==="Enter")a.preventDefault(),I8();return}if(a.target?.tagName==="INPUT"||a.target?.tagName==="TEXTAREA")return;if(a.key==="ArrowRight")p(M.mode+1);else if(a.key==="ArrowLeft")p(M.mode-1);else if(a.key==="Enter")I8();else if(a.key.toLowerCase()==="l")M.lane=M.lane==="inference"?"devtools":"inference",V.target=M.lane==="inference"?-0.22:0.22,wJ.lever(),M.dirty=!0}),H0?.addEventListener("click",I8),d?.addEventListener("click",()=>{if(M.modeName()==="LANES")f(M.lane);else d0("inference")});function Z7(){let a=J.clientWidth,N=Math.max(480,Math.min(780,Math.round(a*0.82)));$.setSize(a,N),Y.aspect=a/N,Y.position.z=a<560?5.6:a<760?4.95:4.35,Y.updateProjectionMatrix(),M.dirty=!0}new ResizeObserver(Z7).observe(J),Z7();let y9=performance.now(),A8=0,P8=[v,CJ,c0,s0,V,R];function K7(a){A8=requestAnimationFrame(K7);let N=Math.min(0.25,(a-y9)/1000),A=Math.min(0.05,N);y9=a;let y=a/1000;S.t=y;let j=M.step(N,y),b=a-r<2500;if(!(!M.booted||M.busy||j||b||P8.some((F0)=>!F0.settled())))if(Math.abs(L.position.y-0.02)>0.0004)L.position.y+=(0.02-L.position.y)*Math.min(1,A*3);else return;else if(!$9&&b)L.position.y=0.02+Math.sin(y*0.9)*0.012;if(!$9)L.rotation.x=v.step(A),L.rotation.y=CJ.step(A);x.rotation.z=c0.step(A),k.position.z=s0.step(A),a0.rotation.z=V.step(A),zJ.position.y=R.step(A),x0.material.color.set(M.lane==="devtools"?k8:1327146),A0.material.color.set(M.lane==="inference"?k8:1327146),q.color.setHex(k8).multiplyScalar(M.busy?0.75+Math.sin(y*9)*0.25:1),$.render(Z,Y)}if($9){let a=()=>{M.step(0.03333333333333333,performance.now()/1000),x.rotation.z=c0.target,k.position.z=s0.target,a0.rotation.z=V.target,zJ.position.y=R.target,$.render(Z,Y)};setInterval(a,250),a()}else{let a=!0,N=!1,A=()=>{let y=a&&!document.hidden;if(y&&!N)N=!0,y9=performance.now(),A8=requestAnimationFrame(K7);else if(!y&&N)N=!1,cancelAnimationFrame(A8)};new IntersectionObserver((y)=>{a=y[0]?.isIntersecting!==!1,A()},{threshold:0.02}).observe(J),document.addEventListener("visibilitychange",A),A()}let t9=new h;function x6(a){return a.getWorldPosition(t9),t9.project(Y),{x:(t9.x+1)/2*$.domElement.clientWidth,y:(1-t9.y)/2*$.domElement.clientHeight}}function g6(){let a=[{obj:z,ring:200,k:"The screen",txt:"Everything happens here. Tap the tabs to switch tools — chat, search, lookups, your ledger."},{obj:w,ring:110,k:"The green key",txt:"Fires the current tool. Spending arms first with a printed quote — nothing costs money on a single press."},{obj:x,ring:110,k:"The dial",txt:"Steps through the same tools. Drag it, scroll over it, or use the arrow keys."},{obj:k0,ring:110,k:"The lanes",txt:"The paddle picks which lane spends — Inference is live today. Your card up top is the session cartridge."}],N=document.createElement("div");N.className="dv-coach",N.innerHTML='<div class="dv-coach-ring"></div><div class="dv-coach-card"><div class="dv-coach-step"></div><div class="dv-coach-txt"></div><div class="dv-coach-row"><button data-a="skip">Skip</button><button class="pri" data-a="next">Next</button></div></div>',J.appendChild(N);let A=N.querySelector(".dv-coach-ring"),y=N.querySelector(".dv-coach-step"),j=N.querySelector(".dv-coach-txt"),b=N.querySelector('[data-a="next"]'),J0=0,F0=()=>{let V0=a[J0],B0=x6(V0.obj);A.style.left=B0.x+"px",A.style.top=B0.y+"px",A.style.width=A.style.height=V0.ring+"px",y.textContent=`${J0+1} / ${a.length} — ${V0.k}`,j.textContent=V0.txt,b.textContent=J0===a.length-1?"Start":"Next",wJ.detent(J0)},K0=()=>{try{localStorage.setItem("vc-device-coach","1")}catch{}N.remove()};N.querySelector('[data-a="skip"]').addEventListener("click",K0),b.addEventListener("click",()=>{if(J0++,J0>=a.length)K0();else F0()}),F0()}let y7=!1;try{y7=!!localStorage.getItem("vc-device-coach")}catch{}if(!y7&&!$9)setTimeout(g6,$9?0:2200);document.body.classList.add("dv-on"),document.getElementById("dv-console")?.removeAttribute("open"),N0(),Z0().then(I0),setTimeout(()=>{M.powered=!0},3200),window.__device={ready:!0,os:M,setMode:(a)=>p(a),pickAt:(a,N)=>J7({clientX:a,clientY:N}),frames:()=>$.info.render.frame,screenClientPoint:(a,N)=>{let A=new h((a-0.5)*0.76,(N-0.5)*0.57,0);z.localToWorld(A),A.project(Y);let y=$.domElement.getBoundingClientRect();return{x:y.left+(A.x+1)/2*y.width,y:y.top+(1-A.y)/2*y.height}},fire:D0,snapshot:()=>{return $.render(Z,Y),$.domElement.toDataURL("image/png")}}}if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",FW);else FW();
