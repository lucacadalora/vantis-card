var NY=Object.create;var{getPrototypeOf:GY,defineProperty:P8,getOwnPropertyNames:cQ,getOwnPropertyDescriptor:FY}=Object,_6=Object.prototype.hasOwnProperty;function C6(J){return this[J]}var kN=(J,Q,$)=>{var Z=cQ(Q);for(let K of Z)if(!_6.call(J,K)&&K!=="default")P8(J,K,{get:C6.bind(Q,K),enumerable:!0});if($){for(let K of Z)if(!_6.call($,K)&&K!=="default")P8($,K,{get:C6.bind(Q,K),enumerable:!0});return $}},OY,EY,RN=(J,Q,$)=>{var Z=J!=null&&typeof J==="object";if(Z){var K=Q?OY??=new WeakMap:EY??=new WeakMap,W=K.get(J);if(W)return W}$=J!=null?NY(GY(J)):{};let X=Q||!J||!J.__esModule?P8($,"default",{value:J,enumerable:!0}):$;for(let Y of cQ(J))if(!_6.call(X,Y))P8(X,Y,{get:C6.bind(J,Y),enumerable:!0});if(Z)K.set(J,X);return X},VN=(J)=>{var Q=(MK??=new WeakMap).get(J),$;if(Q)return Q;if(Q=P8({},"__esModule",{value:!0}),J&&typeof J==="object"||typeof J==="function"){for(var Z of cQ(J))if(!_6.call(Q,Z))P8(Q,Z,{get:C6.bind(J,Z),enumerable:!($=FY(J,Z))||$.enumerable})}return MK.set(J,Q),Q},MK,LN=(J,Q)=>()=>(Q||J((Q={exports:{}}).exports,Q),Q.exports);var DY=(J)=>J;function kY(J,Q){this[J]=DY.bind(null,Q)}var zN=(J,Q)=>{for(var $ in Q)P8(J,$,{get:Q[$],enumerable:!0,configurable:!0,set:kY.bind(Q,$)})};var BN=(J,Q)=>()=>(J&&(Q=J(J=0)),Q);var MN=((J)=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(J,{get:(Q,$)=>(typeof require<"u"?require:Q)[$]}):J)(function(J){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+J+'" is not supported')});var QW="185";var $W=0,M$=1,ZW=2;var e7=1,KW=2,k7=3,R7=0,iJ=1,b9=2,h9=0,J6=1,I$=2,A$=3,P$=4,WW=5;var V7=100,XW=101,YW=102,UW=103,HW=104,qW=200,NW=201,GW=202,FW=203,OW=204,EW=205,DW=206,kW=207,RW=208,VW=209,LW=210,zW=211,BW=212,MW=213,IW=214,AW=0,PW=1,wW=2,w$=3,_W=4,CW=5,TW=6,SW=7,jW=0,vW=1,fW=2,_9=0,_$=1,C$=2,T$=3,Q6=4,S$=5,j$=6,v$=7;var L7=301,f8=302,ZQ=303,KQ=304,$6=306,WQ=1000,XQ=1001,yW=1002,O8=1003,bW=1004;var Z6=1005;var vJ=1006,YQ=1007;var e9=1008;var C9=1009,hW=1010,xW=1011,K6=1012,f$=1013,E8=1014,J8=1015,Q8=1016,y$=1017,b$=1018,z7=1020,gW=35902,pW=35899,mW=1021,lW=1022,x9=1023,y8=1026,b8=1027,dW=1028,h$=1029,h8=1030,x$=1031;var g$=1033,UQ=33776,HQ=33777,qQ=33778,NQ=33779,p$=35840,m$=35841,l$=35842,d$=35843,u$=36196,c$=37492,n$=37496,s$=37488,i$=37489,GQ=37490,o$=37491,a$=37808,r$=37809,t$=37810,e$=37811,JZ=37812,QZ=37813,$Z=37814,ZZ=37815,KZ=37816,WZ=37817,XZ=37818,YZ=37819,UZ=37820,HZ=37821,qZ=36492,NZ=36494,GZ=36495,FZ=36283,OZ=36284,FQ=36285,EZ=36286;var DZ=0,uW=1,x8="",T9="srgb",kZ="srgb-linear",RZ="linear",VJ="srgb";var cW=512,nW=513,sW=514,OQ=515,iW=516,oW=517,EQ=518,aW=519;var VZ="300 es",LZ=2000;function RY(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function VY(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function O7(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function rW(){let J=O7("canvas");return J.style.display="block",J}var IK={},E7=null;function zZ(...J){let Q="THREE."+J.shift();if(E7)E7("log",Q,...J);else console.log(Q,...J)}function tW(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let $=J[1];if($&&$.isStackTrace)J[0]+=" "+$.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function m0(...J){J=tW(J);let Q="THREE."+J.shift();if(E7)E7("warn",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.warn($.getError(Q));else console.warn(Q,...J)}}function p0(...J){J=tW(J);let Q="THREE."+J.shift();if(E7)E7("error",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.error($.getError(Q));else console.error(Q,...J)}}function j8(...J){let Q=J.join(" ");if(Q in IK)return;IK[Q]=!0,m0(...J)}function eW(J,Q,$){return new Promise(function(Z,K){function W(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:K();break;case J.TIMEOUT_EXPIRED:setTimeout(W,$);break;default:Z()}}setTimeout(W,$)})}var JX={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class $8{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let Z=$[J];if(Z!==void 0){let K=Z.indexOf(Q);if(K!==-1)Z.splice(K,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let Z=$.slice(0);for(let K=0,W=Z.length;K<W;K++)Z[K].call(this,J);J.target=null}}}var uJ=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var nQ=Math.PI/180,JQ=180/Math.PI;function B7(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(uJ[J&255]+uJ[J>>8&255]+uJ[J>>16&255]+uJ[J>>24&255]+"-"+uJ[Q&255]+uJ[Q>>8&255]+"-"+uJ[Q>>16&15|64]+uJ[Q>>24&255]+"-"+uJ[$&63|128]+uJ[$>>8&255]+"-"+uJ[$>>16&255]+uJ[$>>24&255]+uJ[Z&255]+uJ[Z>>8&255]+uJ[Z>>16&255]+uJ[Z>>24&255]).toLowerCase()}function ZJ(J,Q,$){return Math.max(Q,Math.min($,J))}function LY(J,Q){return(J%Q+Q)%Q}function sQ(J,Q,$){return(1-$)*J+$*Q}function p7(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function K9(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}class D0{static{D0.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,Z=J.elements;return this.x=Z[0]*Q+Z[3]*$+Z[6],this.y=Z[1]*Q+Z[4]*$+Z[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=ZJ(this.x,J.x,Q.x),this.y=ZJ(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=ZJ(this.x,J,Q),this.y=ZJ(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(ZJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(ZJ($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),K=this.x-J.x,W=this.y-J.y;return this.x=K*$-W*Z+J.x,this.y=K*Z+W*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class D9{constructor(J=0,Q=0,$=0,Z=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=Z}static slerpFlat(J,Q,$,Z,K,W,X){let Y=$[Z+0],U=$[Z+1],H=$[Z+2],N=$[Z+3],G=K[W+0],q=K[W+1],F=K[W+2],k=K[W+3];if(N!==k||Y!==G||U!==q||H!==F){let I=Y*G+U*q+H*F+N*k;if(I<0)G=-G,q=-q,F=-F,k=-k,I=-I;let O=1-X;if(I<0.9995){let E=Math.acos(I),C=Math.sin(E);O=Math.sin(O*E)/C,X=Math.sin(X*E)/C,Y=Y*O+G*X,U=U*O+q*X,H=H*O+F*X,N=N*O+k*X}else{Y=Y*O+G*X,U=U*O+q*X,H=H*O+F*X,N=N*O+k*X;let E=1/Math.sqrt(Y*Y+U*U+H*H+N*N);Y*=E,U*=E,H*=E,N*=E}}J[Q]=Y,J[Q+1]=U,J[Q+2]=H,J[Q+3]=N}static multiplyQuaternionsFlat(J,Q,$,Z,K,W){let X=$[Z],Y=$[Z+1],U=$[Z+2],H=$[Z+3],N=K[W],G=K[W+1],q=K[W+2],F=K[W+3];return J[Q]=X*F+H*N+Y*q-U*G,J[Q+1]=Y*F+H*G+U*N-X*q,J[Q+2]=U*F+H*q+X*G-Y*N,J[Q+3]=H*F-X*N-Y*G-U*q,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,Z){return this._x=J,this._y=Q,this._z=$,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:Z,_z:K,_order:W}=J,X=Math.cos,Y=Math.sin,U=X($/2),H=X(Z/2),N=X(K/2),G=Y($/2),q=Y(Z/2),F=Y(K/2);switch(W){case"XYZ":this._x=G*H*N+U*q*F,this._y=U*q*N-G*H*F,this._z=U*H*F+G*q*N,this._w=U*H*N-G*q*F;break;case"YXZ":this._x=G*H*N+U*q*F,this._y=U*q*N-G*H*F,this._z=U*H*F-G*q*N,this._w=U*H*N+G*q*F;break;case"ZXY":this._x=G*H*N-U*q*F,this._y=U*q*N+G*H*F,this._z=U*H*F+G*q*N,this._w=U*H*N-G*q*F;break;case"ZYX":this._x=G*H*N-U*q*F,this._y=U*q*N+G*H*F,this._z=U*H*F-G*q*N,this._w=U*H*N+G*q*F;break;case"YZX":this._x=G*H*N+U*q*F,this._y=U*q*N+G*H*F,this._z=U*H*F-G*q*N,this._w=U*H*N-G*q*F;break;case"XZY":this._x=G*H*N-U*q*F,this._y=U*q*N-G*H*F,this._z=U*H*F+G*q*N,this._w=U*H*N+G*q*F;break;default:m0("Quaternion: .setFromEuler() encountered an unknown order: "+W)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,Z=Math.sin($);return this._x=J.x*Z,this._y=J.y*Z,this._z=J.z*Z,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],Z=Q[4],K=Q[8],W=Q[1],X=Q[5],Y=Q[9],U=Q[2],H=Q[6],N=Q[10],G=$+X+N;if(G>0){let q=0.5/Math.sqrt(G+1);this._w=0.25/q,this._x=(H-Y)*q,this._y=(K-U)*q,this._z=(W-Z)*q}else if($>X&&$>N){let q=2*Math.sqrt(1+$-X-N);this._w=(H-Y)/q,this._x=0.25*q,this._y=(Z+W)/q,this._z=(K+U)/q}else if(X>N){let q=2*Math.sqrt(1+X-$-N);this._w=(K-U)/q,this._x=(Z+W)/q,this._y=0.25*q,this._z=(Y+H)/q}else{let q=2*Math.sqrt(1+N-$-X);this._w=(W-Z)/q,this._x=(K+U)/q,this._y=(Y+H)/q,this._z=0.25*q}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(ZJ(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let Z=Math.min(1,Q/$);return this.slerp(J,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:Z,_z:K,_w:W}=J,X=Q._x,Y=Q._y,U=Q._z,H=Q._w;return this._x=$*H+W*X+Z*U-K*Y,this._y=Z*H+W*Y+K*X-$*U,this._z=K*H+W*U+$*Y-Z*X,this._w=W*H-$*X-Z*Y-K*U,this._onChangeCallback(),this}slerp(J,Q){let{_x:$,_y:Z,_z:K,_w:W}=J,X=this.dot(J);if(X<0)$=-$,Z=-Z,K=-K,W=-W,X=-X;let Y=1-Q;if(X<0.9995){let U=Math.acos(X),H=Math.sin(U);Y=Math.sin(Y*U)/H,Q=Math.sin(Q*U)/H,this._x=this._x*Y+$*Q,this._y=this._y*Y+Z*Q,this._z=this._z*Y+K*Q,this._w=this._w*Y+W*Q,this._onChangeCallback()}else this._x=this._x*Y+$*Q,this._y=this._y*Y+Z*Q,this._z=this._z*Y+K*Q,this._w=this._w*Y+W*Q,this.normalize();return this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),Z=Math.sqrt(1-$),K=Math.sqrt($);return this.set(Z*Math.sin(J),Z*Math.cos(J),K*Math.sin(Q),K*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{static{j.prototype.isVector3=!0}constructor(J=0,Q=0,$=0){this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(AK.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(AK.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements;return this.x=K[0]*Q+K[3]*$+K[6]*Z,this.y=K[1]*Q+K[4]*$+K[7]*Z,this.z=K[2]*Q+K[5]*$+K[8]*Z,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements,W=1/(K[3]*Q+K[7]*$+K[11]*Z+K[15]);return this.x=(K[0]*Q+K[4]*$+K[8]*Z+K[12])*W,this.y=(K[1]*Q+K[5]*$+K[9]*Z+K[13])*W,this.z=(K[2]*Q+K[6]*$+K[10]*Z+K[14])*W,this}applyQuaternion(J){let Q=this.x,$=this.y,Z=this.z,K=J.x,W=J.y,X=J.z,Y=J.w,U=2*(W*Z-X*$),H=2*(X*Q-K*Z),N=2*(K*$-W*Q);return this.x=Q+Y*U+W*N-X*H,this.y=$+Y*H+X*U-K*N,this.z=Z+Y*N+K*H-W*U,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements;return this.x=K[0]*Q+K[4]*$+K[8]*Z,this.y=K[1]*Q+K[5]*$+K[9]*Z,this.z=K[2]*Q+K[6]*$+K[10]*Z,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=ZJ(this.x,J.x,Q.x),this.y=ZJ(this.y,J.y,Q.y),this.z=ZJ(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=ZJ(this.x,J,Q),this.y=ZJ(this.y,J,Q),this.z=ZJ(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(ZJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:Z,z:K}=J,W=Q.x,X=Q.y,Y=Q.z;return this.x=Z*Y-K*X,this.y=K*W-$*Y,this.z=$*X-Z*W,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return iQ.copy(this).projectOnVector(J),this.sub(iQ)}reflect(J){return this.sub(iQ.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(ZJ($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,Z=this.z-J.z;return Q*Q+$*$+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let Z=Math.sin(Q)*J;return this.x=Z*Math.sin($),this.y=Math.cos(Q)*J,this.z=Z*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),Z=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=Z,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var iQ=new j,AK=new D9;class o0{static{o0.prototype.isMatrix3=!0}constructor(J,Q,$,Z,K,W,X,Y,U){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,K,W,X,Y,U)}set(J,Q,$,Z,K,W,X,Y,U){let H=this.elements;return H[0]=J,H[1]=Z,H[2]=X,H[3]=Q,H[4]=K,H[5]=Y,H[6]=$,H[7]=W,H[8]=U,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,K=this.elements,W=$[0],X=$[3],Y=$[6],U=$[1],H=$[4],N=$[7],G=$[2],q=$[5],F=$[8],k=Z[0],I=Z[3],O=Z[6],E=Z[1],C=Z[4],P=Z[7],L=Z[2],A=Z[5],w=Z[8];return K[0]=W*k+X*E+Y*L,K[3]=W*I+X*C+Y*A,K[6]=W*O+X*P+Y*w,K[1]=U*k+H*E+N*L,K[4]=U*I+H*C+N*A,K[7]=U*O+H*P+N*w,K[2]=G*k+q*E+F*L,K[5]=G*I+q*C+F*A,K[8]=G*O+q*P+F*w,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],X=J[5],Y=J[6],U=J[7],H=J[8];return Q*W*H-Q*X*U-$*K*H+$*X*Y+Z*K*U-Z*W*Y}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],X=J[5],Y=J[6],U=J[7],H=J[8],N=H*W-X*U,G=X*Y-H*K,q=U*K-W*Y,F=Q*N+$*G+Z*q;if(F===0)return this.set(0,0,0,0,0,0,0,0,0);let k=1/F;return J[0]=N*k,J[1]=(Z*U-H*$)*k,J[2]=(X*$-Z*W)*k,J[3]=G*k,J[4]=(H*Q-Z*Y)*k,J[5]=(Z*K-X*Q)*k,J[6]=q*k,J[7]=($*Y-U*Q)*k,J[8]=(W*Q-$*K)*k,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,Z,K,W,X){let Y=Math.cos(K),U=Math.sin(K);return this.set($*Y,$*U,-$*(Y*W+U*X)+W+J,-Z*U,Z*Y,-Z*(-U*W+Y*X)+X+Q,0,0,1),this}scale(J,Q){return j8("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(oQ.makeScale(J,Q)),this}rotate(J){return j8("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(oQ.makeRotation(-J)),this}translate(J,Q){return j8("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(oQ.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<9;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var oQ=new o0,PK=new o0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),wK=new o0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function zY(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(K,W,X){if(this.enabled===!1||W===X||!W||!X)return K;if(this.spaces[W].transfer==="srgb")K.r=t9(K.r),K.g=t9(K.g),K.b=t9(K.b);if(this.spaces[W].primaries!==this.spaces[X].primaries)K.applyMatrix3(this.spaces[W].toXYZ),K.applyMatrix3(this.spaces[X].fromXYZ);if(this.spaces[X].transfer==="srgb")K.r=F7(K.r),K.g=F7(K.g),K.b=F7(K.b);return K},workingToColorSpace:function(K,W){return this.convert(K,this.workingColorSpace,W)},colorSpaceToWorking:function(K,W){return this.convert(K,W,this.workingColorSpace)},getPrimaries:function(K){return this.spaces[K].primaries},getTransfer:function(K){if(K==="")return"linear";return this.spaces[K].transfer},getToneMappingMode:function(K){return this.spaces[K].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(K,W=this.workingColorSpace){return K.fromArray(this.spaces[W].luminanceCoefficients)},define:function(K){Object.assign(this.spaces,K)},_getMatrix:function(K,W,X){return K.copy(this.spaces[W].toXYZ).multiply(this.spaces[X].fromXYZ)},_getDrawingBufferColorSpace:function(K){return this.spaces[K].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(K=this.workingColorSpace){return this.spaces[K].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(K,W){return j8("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(K,W)},toWorkingColorSpace:function(K,W){return j8("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(K,W)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],Z=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:Z,transfer:"linear",toXYZ:PK,fromXYZ:wK,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:Z,transfer:"srgb",toXYZ:PK,fromXYZ:wK,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var WJ=zY();function t9(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function F7(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var e8;class BZ{static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(e8===void 0)e8=O7("canvas");e8.width=J.width,e8.height=J.height;let Z=e8.getContext("2d");if(J instanceof ImageData)Z.putImageData(J,0,0);else Z.drawImage(J,0,0,J.width,J.height);$=e8}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=O7("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let Z=$.getImageData(0,0,J.width,J.height),K=Z.data;for(let W=0;W<K.length;W++)K[W]=t9(K[W]/255)*255;return $.putImageData(Z,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(t9(Q[$]/255)*255);else Q[$]=t9(Q[$]);return{data:Q,width:J.width,height:J.height}}else return m0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var BY=0;class W6{constructor(J=null){this.isSource=!0,Object.defineProperty(this,"id",{value:BY++}),this.uuid=B7(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame<"u"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let K;if(Array.isArray(Z)){K=[];for(let W=0,X=Z.length;W<X;W++)if(Z[W].isDataTexture)K.push(aQ(Z[W].image));else K.push(aQ(Z[W]))}else K=aQ(Z);$.url=K}if(!Q)J.images[this.uuid]=$;return $}}function aQ(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return BZ.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return m0("Texture: Unable to serialize Texture."),{}}var MY=0,rQ=new j;class gJ extends $8{constructor(J=gJ.DEFAULT_IMAGE,Q=gJ.DEFAULT_MAPPING,$=1001,Z=1001,K=1006,W=1008,X=1023,Y=1009,U=gJ.DEFAULT_ANISOTROPY,H=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:MY++}),this.uuid=B7(),this.name="",this.source=new W6(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=Z,this.magFilter=K,this.minFilter=W,this.anisotropy=U,this.format=X,this.internalFormat=null,this.type=Y,this.offset=new D0(0,0),this.repeat=new D0(1,1),this.center=new D0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new o0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=H,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(rQ).x}get height(){return this.source.getSize(rQ).y}get depth(){return this.source.getSize(rQ).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){m0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){m0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(Z&&$&&(Z.isVector2&&$.isVector2))Z.copy($);else if(Z&&$&&(Z.isVector3&&$.isVector3))Z.copy($);else if(Z&&$&&(Z.isMatrix3&&$.isMatrix3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}gJ.DEFAULT_IMAGE=null;gJ.DEFAULT_MAPPING=300;gJ.DEFAULT_ANISOTROPY=1;class IJ{static{IJ.prototype.isVector4=!0}constructor(J=0,Q=0,$=0,Z=1){this.x=J,this.y=Q,this.z=$,this.w=Z}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,Z){return this.x=J,this.y=Q,this.z=$,this.w=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,K=this.w,W=J.elements;return this.x=W[0]*Q+W[4]*$+W[8]*Z+W[12]*K,this.y=W[1]*Q+W[5]*$+W[9]*Z+W[13]*K,this.z=W[2]*Q+W[6]*$+W[10]*Z+W[14]*K,this.w=W[3]*Q+W[7]*$+W[11]*Z+W[15]*K,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,Z,K,W=0.01,X=0.1,Y=J.elements,U=Y[0],H=Y[4],N=Y[8],G=Y[1],q=Y[5],F=Y[9],k=Y[2],I=Y[6],O=Y[10];if(Math.abs(H-G)<0.01&&Math.abs(N-k)<0.01&&Math.abs(F-I)<0.01){if(Math.abs(H+G)<0.1&&Math.abs(N+k)<0.1&&Math.abs(F+I)<0.1&&Math.abs(U+q+O-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let C=(U+1)/2,P=(q+1)/2,L=(O+1)/2,A=(H+G)/4,w=(N+k)/4,_=(F+I)/4;if(C>P&&C>L)if(C<0.01)$=0,Z=0.707106781,K=0.707106781;else $=Math.sqrt(C),Z=A/$,K=w/$;else if(P>L)if(P<0.01)$=0.707106781,Z=0,K=0.707106781;else Z=Math.sqrt(P),$=A/Z,K=_/Z;else if(L<0.01)$=0.707106781,Z=0.707106781,K=0;else K=Math.sqrt(L),$=w/K,Z=_/K;return this.set($,Z,K,Q),this}let E=Math.sqrt((I-F)*(I-F)+(N-k)*(N-k)+(G-H)*(G-H));if(Math.abs(E)<0.001)E=1;return this.x=(I-F)/E,this.y=(N-k)/E,this.z=(G-H)/E,this.w=Math.acos((U+q+O-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=ZJ(this.x,J.x,Q.x),this.y=ZJ(this.y,J.y,Q.y),this.z=ZJ(this.z,J.z,Q.z),this.w=ZJ(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=ZJ(this.x,J,Q),this.y=ZJ(this.y,J,Q),this.z=ZJ(this.z,J,Q),this.w=ZJ(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(ZJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class MZ extends $8{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new IJ(0,0,J,Q),this.scissorTest=!1,this.viewport=new IJ(0,0,J,Q),this.textures=[];let Z={width:J,height:Q,depth:$.depth},K=new gJ(Z),W=$.count;for(let X=0;X<W;X++)this.textures[X]=K.clone(),this.textures[X].isRenderTargetTexture=!0,this.textures[X].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview,this.useArrayDepthTexture=$.useArrayDepthTexture}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if(J!==null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let Z=0,K=this.textures.length;Z<K;Z++)if(this.textures[Z].image.width=J,this.textures[Z].image.height=Q,this.textures[Z].image.depth=$,this.textures[Z].isData3DTexture!==!0)this.textures[Z].isArrayTexture=this.textures[Z].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let Z=Object.assign({},J.textures[Q].image);this.textures[Q].source=new W6(Z)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,J.depthTexture!==null)this.depthTexture=J.depthTexture.clone();return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class k9 extends MZ{constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class DQ extends gJ{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class IZ extends gJ{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class RJ{static{RJ.prototype.isMatrix4=!0}constructor(J,Q,$,Z,K,W,X,Y,U,H,N,G,q,F,k,I){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,K,W,X,Y,U,H,N,G,q,F,k,I)}set(J,Q,$,Z,K,W,X,Y,U,H,N,G,q,F,k,I){let O=this.elements;return O[0]=J,O[4]=Q,O[8]=$,O[12]=Z,O[1]=K,O[5]=W,O[9]=X,O[13]=Y,O[2]=U,O[6]=H,O[10]=N,O[14]=G,O[3]=q,O[7]=F,O[11]=k,O[15]=I,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new RJ().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){if(this.determinantAffine()===0)return J.set(1,0,0),Q.set(0,1,0),$.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let Q=this.elements,$=J.elements,Z=1/J7.setFromMatrixColumn(J,0).length(),K=1/J7.setFromMatrixColumn(J,1).length(),W=1/J7.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*Z,Q[1]=$[1]*Z,Q[2]=$[2]*Z,Q[3]=0,Q[4]=$[4]*K,Q[5]=$[5]*K,Q[6]=$[6]*K,Q[7]=0,Q[8]=$[8]*W,Q[9]=$[9]*W,Q[10]=$[10]*W,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,Z=J.y,K=J.z,W=Math.cos($),X=Math.sin($),Y=Math.cos(Z),U=Math.sin(Z),H=Math.cos(K),N=Math.sin(K);if(J.order==="XYZ"){let G=W*H,q=W*N,F=X*H,k=X*N;Q[0]=Y*H,Q[4]=-Y*N,Q[8]=U,Q[1]=q+F*U,Q[5]=G-k*U,Q[9]=-X*Y,Q[2]=k-G*U,Q[6]=F+q*U,Q[10]=W*Y}else if(J.order==="YXZ"){let G=Y*H,q=Y*N,F=U*H,k=U*N;Q[0]=G+k*X,Q[4]=F*X-q,Q[8]=W*U,Q[1]=W*N,Q[5]=W*H,Q[9]=-X,Q[2]=q*X-F,Q[6]=k+G*X,Q[10]=W*Y}else if(J.order==="ZXY"){let G=Y*H,q=Y*N,F=U*H,k=U*N;Q[0]=G-k*X,Q[4]=-W*N,Q[8]=F+q*X,Q[1]=q+F*X,Q[5]=W*H,Q[9]=k-G*X,Q[2]=-W*U,Q[6]=X,Q[10]=W*Y}else if(J.order==="ZYX"){let G=W*H,q=W*N,F=X*H,k=X*N;Q[0]=Y*H,Q[4]=F*U-q,Q[8]=G*U+k,Q[1]=Y*N,Q[5]=k*U+G,Q[9]=q*U-F,Q[2]=-U,Q[6]=X*Y,Q[10]=W*Y}else if(J.order==="YZX"){let G=W*Y,q=W*U,F=X*Y,k=X*U;Q[0]=Y*H,Q[4]=k-G*N,Q[8]=F*N+q,Q[1]=N,Q[5]=W*H,Q[9]=-X*H,Q[2]=-U*H,Q[6]=q*N+F,Q[10]=G-k*N}else if(J.order==="XZY"){let G=W*Y,q=W*U,F=X*Y,k=X*U;Q[0]=Y*H,Q[4]=-N,Q[8]=U*H,Q[1]=G*N+k,Q[5]=W*H,Q[9]=q*N-F,Q[2]=F*N-q,Q[6]=X*H,Q[10]=k*N+G}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(IY,J,AY)}lookAt(J,Q,$){let Z=this.elements;if(X9.subVectors(J,Q),X9.lengthSq()===0)X9.z=1;if(X9.normalize(),U8.crossVectors($,X9),U8.lengthSq()===0){if(Math.abs($.z)===1)X9.x+=0.0001;else X9.z+=0.0001;X9.normalize(),U8.crossVectors($,X9)}return U8.normalize(),T6.crossVectors(X9,U8),Z[0]=U8.x,Z[4]=T6.x,Z[8]=X9.x,Z[1]=U8.y,Z[5]=T6.y,Z[9]=X9.y,Z[2]=U8.z,Z[6]=T6.z,Z[10]=X9.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,K=this.elements,W=$[0],X=$[4],Y=$[8],U=$[12],H=$[1],N=$[5],G=$[9],q=$[13],F=$[2],k=$[6],I=$[10],O=$[14],E=$[3],C=$[7],P=$[11],L=$[15],A=Z[0],w=Z[4],_=Z[8],V=Z[12],M=Z[1],m=Z[5],R=Z[9],p=Z[13],i=Z[2],x=Z[6],u=Z[10],n=Z[14],g=Z[3],e=Z[7],K0=Z[11],Y0=Z[15];return K[0]=W*A+X*M+Y*i+U*g,K[4]=W*w+X*m+Y*x+U*e,K[8]=W*_+X*R+Y*u+U*K0,K[12]=W*V+X*p+Y*n+U*Y0,K[1]=H*A+N*M+G*i+q*g,K[5]=H*w+N*m+G*x+q*e,K[9]=H*_+N*R+G*u+q*K0,K[13]=H*V+N*p+G*n+q*Y0,K[2]=F*A+k*M+I*i+O*g,K[6]=F*w+k*m+I*x+O*e,K[10]=F*_+k*R+I*u+O*K0,K[14]=F*V+k*p+I*n+O*Y0,K[3]=E*A+C*M+P*i+L*g,K[7]=E*w+C*m+P*x+L*e,K[11]=E*_+C*R+P*u+L*K0,K[15]=E*V+C*p+P*n+L*Y0,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],K=J[12],W=J[1],X=J[5],Y=J[9],U=J[13],H=J[2],N=J[6],G=J[10],q=J[14],F=J[3],k=J[7],I=J[11],O=J[15],E=Y*q-U*G,C=X*q-U*N,P=X*G-Y*N,L=W*q-U*H,A=W*G-Y*H,w=W*N-X*H;return Q*(k*E-I*C+O*P)-$*(F*E-I*L+O*A)+Z*(F*C-k*L+O*w)-K*(F*P-k*A+I*w)}determinantAffine(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],K=J[1],W=J[5],X=J[9],Y=J[2],U=J[6],H=J[10];return Q*(W*H-X*U)-$*(K*H-X*Y)+Z*(K*U-W*Y)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let Z=this.elements;if(J.isVector3)Z[12]=J.x,Z[13]=J.y,Z[14]=J.z;else Z[12]=J,Z[13]=Q,Z[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],X=J[5],Y=J[6],U=J[7],H=J[8],N=J[9],G=J[10],q=J[11],F=J[12],k=J[13],I=J[14],O=J[15],E=Q*X-$*W,C=Q*Y-Z*W,P=Q*U-K*W,L=$*Y-Z*X,A=$*U-K*X,w=Z*U-K*Y,_=H*k-N*F,V=H*I-G*F,M=H*O-q*F,m=N*I-G*k,R=N*O-q*k,p=G*O-q*I,i=E*p-C*R+P*m+L*M-A*V+w*_;if(i===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let x=1/i;return J[0]=(X*p-Y*R+U*m)*x,J[1]=(Z*R-$*p-K*m)*x,J[2]=(k*w-I*A+O*L)*x,J[3]=(G*A-N*w-q*L)*x,J[4]=(Y*M-W*p-U*V)*x,J[5]=(Q*p-Z*M+K*V)*x,J[6]=(I*P-F*w-O*C)*x,J[7]=(H*w-G*P+q*C)*x,J[8]=(W*R-X*M+U*_)*x,J[9]=($*M-Q*R-K*_)*x,J[10]=(F*A-k*P+O*E)*x,J[11]=(N*P-H*A-q*E)*x,J[12]=(X*V-W*m-Y*_)*x,J[13]=(Q*m-$*V+Z*_)*x,J[14]=(k*C-F*L-I*E)*x,J[15]=(H*L-N*C+G*E)*x,this}scale(J){let Q=this.elements,$=J.x,Z=J.y,K=J.z;return Q[0]*=$,Q[4]*=Z,Q[8]*=K,Q[1]*=$,Q[5]*=Z,Q[9]*=K,Q[2]*=$,Q[6]*=Z,Q[10]*=K,Q[3]*=$,Q[7]*=Z,Q[11]*=K,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Z=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,Z))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),K=1-$,W=J.x,X=J.y,Y=J.z,U=K*W,H=K*X;return this.set(U*W+$,U*X-Z*Y,U*Y+Z*X,0,U*X+Z*Y,H*X+$,H*Y-Z*W,0,U*Y-Z*X,H*Y+Z*W,K*Y*Y+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,Z,K,W){return this.set(1,$,K,0,J,1,W,0,Q,Z,1,0,0,0,0,1),this}compose(J,Q,$){let Z=this.elements,K=Q._x,W=Q._y,X=Q._z,Y=Q._w,U=K+K,H=W+W,N=X+X,G=K*U,q=K*H,F=K*N,k=W*H,I=W*N,O=X*N,E=Y*U,C=Y*H,P=Y*N,L=$.x,A=$.y,w=$.z;return Z[0]=(1-(k+O))*L,Z[1]=(q+P)*L,Z[2]=(F-C)*L,Z[3]=0,Z[4]=(q-P)*A,Z[5]=(1-(G+O))*A,Z[6]=(I+E)*A,Z[7]=0,Z[8]=(F+C)*w,Z[9]=(I-E)*w,Z[10]=(1-(G+k))*w,Z[11]=0,Z[12]=J.x,Z[13]=J.y,Z[14]=J.z,Z[15]=1,this}decompose(J,Q,$){let Z=this.elements;J.x=Z[12],J.y=Z[13],J.z=Z[14];let K=this.determinantAffine();if(K===0)return $.set(1,1,1),Q.identity(),this;let W=J7.set(Z[0],Z[1],Z[2]).length(),X=J7.set(Z[4],Z[5],Z[6]).length(),Y=J7.set(Z[8],Z[9],Z[10]).length();if(K<0)W=-W;A9.copy(this);let U=1/W,H=1/X,N=1/Y;return A9.elements[0]*=U,A9.elements[1]*=U,A9.elements[2]*=U,A9.elements[4]*=H,A9.elements[5]*=H,A9.elements[6]*=H,A9.elements[8]*=N,A9.elements[9]*=N,A9.elements[10]*=N,Q.setFromRotationMatrix(A9),$.x=W,$.y=X,$.z=Y,this}makePerspective(J,Q,$,Z,K,W,X=2000,Y=!1){let U=this.elements,H=2*K/(Q-J),N=2*K/($-Z),G=(Q+J)/(Q-J),q=($+Z)/($-Z),F,k;if(Y)F=K/(W-K),k=W*K/(W-K);else if(X===2000)F=-(W+K)/(W-K),k=-2*W*K/(W-K);else if(X===2001)F=-W/(W-K),k=-W*K/(W-K);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+X);return U[0]=H,U[4]=0,U[8]=G,U[12]=0,U[1]=0,U[5]=N,U[9]=q,U[13]=0,U[2]=0,U[6]=0,U[10]=F,U[14]=k,U[3]=0,U[7]=0,U[11]=-1,U[15]=0,this}makeOrthographic(J,Q,$,Z,K,W,X=2000,Y=!1){let U=this.elements,H=2/(Q-J),N=2/($-Z),G=-(Q+J)/(Q-J),q=-($+Z)/($-Z),F,k;if(Y)F=1/(W-K),k=W/(W-K);else if(X===2000)F=-2/(W-K),k=-(W+K)/(W-K);else if(X===2001)F=-1/(W-K),k=-K/(W-K);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+X);return U[0]=H,U[4]=0,U[8]=0,U[12]=G,U[1]=0,U[5]=N,U[9]=0,U[13]=q,U[2]=0,U[6]=0,U[10]=F,U[14]=k,U[3]=0,U[7]=0,U[11]=0,U[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<16;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var J7=new j,A9=new RJ,IY=new j(0,0,0),AY=new j(1,1,1),U8=new j,T6=new j,X9=new j,_K=new RJ,CK=new D9;class E9{constructor(J=0,Q=0,$=0,Z=E9.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=Z}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,Z=this._order){return this._x=J,this._y=Q,this._z=$,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let Z=J.elements,K=Z[0],W=Z[4],X=Z[8],Y=Z[1],U=Z[5],H=Z[9],N=Z[2],G=Z[6],q=Z[10];switch(Q){case"XYZ":if(this._y=Math.asin(ZJ(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-H,q),this._z=Math.atan2(-W,K);else this._x=Math.atan2(G,U),this._z=0;break;case"YXZ":if(this._x=Math.asin(-ZJ(H,-1,1)),Math.abs(H)<0.9999999)this._y=Math.atan2(X,q),this._z=Math.atan2(Y,U);else this._y=Math.atan2(-N,K),this._z=0;break;case"ZXY":if(this._x=Math.asin(ZJ(G,-1,1)),Math.abs(G)<0.9999999)this._y=Math.atan2(-N,q),this._z=Math.atan2(-W,U);else this._y=0,this._z=Math.atan2(Y,K);break;case"ZYX":if(this._y=Math.asin(-ZJ(N,-1,1)),Math.abs(N)<0.9999999)this._x=Math.atan2(G,q),this._z=Math.atan2(Y,K);else this._x=0,this._z=Math.atan2(-W,U);break;case"YZX":if(this._z=Math.asin(ZJ(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-H,U),this._y=Math.atan2(-N,K);else this._x=0,this._y=Math.atan2(X,q);break;case"XZY":if(this._z=Math.asin(-ZJ(W,-1,1)),Math.abs(W)<0.9999999)this._x=Math.atan2(G,U),this._y=Math.atan2(X,K);else this._x=Math.atan2(-H,q),this._y=0;break;default:m0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return _K.makeRotationFromQuaternion(J),this.setFromRotationMatrix(_K,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return CK.setFromEuler(this),this.setFromQuaternion(CK,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}E9.DEFAULT_ORDER="XYZ";class X6{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var PY=0,TK=new j,Q7=new D9,n9=new RJ,S6=new j,m7=new j,wY=new j,_Y=new D9,SK=new j(1,0,0),jK=new j(0,1,0),vK=new j(0,0,1),fK={type:"added"},CY={type:"removed"},$7={type:"childadded",child:null},tQ={type:"childremoved",child:null};class SJ extends $8{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:PY++}),this.uuid=B7(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=SJ.DEFAULT_UP.clone();let J=new j,Q=new E9,$=new D9,Z=new j(1,1,1);function K(){$.setFromEuler(Q,!1)}function W(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(K),$._onChange(W),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new RJ},normalMatrix:{value:new o0}}),this.matrix=new RJ,this.matrixWorld=new RJ,this.matrixAutoUpdate=SJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=SJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new X6,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return Q7.setFromAxisAngle(J,Q),this.quaternion.multiply(Q7),this}rotateOnWorldAxis(J,Q){return Q7.setFromAxisAngle(J,Q),this.quaternion.premultiply(Q7),this}rotateX(J){return this.rotateOnAxis(SK,J)}rotateY(J){return this.rotateOnAxis(jK,J)}rotateZ(J){return this.rotateOnAxis(vK,J)}translateOnAxis(J,Q){return TK.copy(J).applyQuaternion(this.quaternion),this.position.add(TK.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(SK,J)}translateY(J){return this.translateOnAxis(jK,J)}translateZ(J){return this.translateOnAxis(vK,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(n9.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)S6.copy(J);else S6.set(J,Q,$);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),m7.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)n9.lookAt(m7,S6,this.up);else n9.lookAt(S6,m7,this.up);if(this.quaternion.setFromRotationMatrix(n9),Z)n9.extractRotation(Z.matrixWorld),Q7.setFromRotationMatrix(n9),this.quaternion.premultiply(Q7.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return p0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(fK),$7.child=J,this.dispatchEvent($7),$7.child=null;else p0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(CY),tQ.child=J,this.dispatchEvent(tQ),tQ.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),n9.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),n9.multiply(J.parent.matrixWorld);return J.applyMatrix4(n9),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(fK),$7.child=J,this.dispatchEvent($7),$7.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,Z=this.children.length;$<Z;$++){let W=this.children[$].getObjectByProperty(J,Q);if(W!==void 0)return W}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let Z=this.children;for(let K=0,W=Z.length;K<W;K++)Z[K].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(m7,J,wY),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(m7,_Y,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}traverse(J){J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:$,z:Z}=J,K=this.matrix.elements;K[12]+=Q-K[0]*Q-K[4]*$-K[8]*Z,K[13]+=$-K[1]*Q-K[5]*$-K[9]*Z,K[14]+=Z-K[2]*Q-K[6]*$-K[10]*Z}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q,$=!1){let Z=this.parent;if(J===!0&&Z!==null)Z.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||$){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,$=!0}if(Q===!0){let K=this.children;for(let W=0,X=K.length;W<X;W++)K[W].updateWorldMatrix(!1,!0,$)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,this.name!=="")Z.name=this.name;if(this.castShadow===!0)Z.castShadow=!0;if(this.receiveShadow===!0)Z.receiveShadow=!0;if(this.visible===!1)Z.visible=!1;if(this.frustumCulled===!1)Z.frustumCulled=!1;if(this.renderOrder!==0)Z.renderOrder=this.renderOrder;if(this.static!==!1)Z.static=this.static;if(Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.pivot!==null)Z.pivot=this.pivot.toArray();if(this.matrixAutoUpdate===!1)Z.matrixAutoUpdate=!1;if(this.morphTargetDictionary!==void 0)Z.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)Z.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.geometryInfo=this._geometryInfo.map((X)=>({...X,boundingBox:X.boundingBox?X.boundingBox.toJSON():void 0,boundingSphere:X.boundingSphere?X.boundingSphere.toJSON():void 0})),Z.instanceInfo=this._instanceInfo.map((X)=>({...X})),Z.availableInstanceIds=this._availableInstanceIds.slice(),Z.availableGeometryIds=this._availableGeometryIds.slice(),Z.nextIndexStart=this._nextIndexStart,Z.nextVertexStart=this._nextVertexStart,Z.geometryCount=this._geometryCount,Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.matricesTexture=this._matricesTexture.toJSON(J),Z.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)Z.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)Z.boundingBox=this.boundingBox.toJSON()}function K(X,Y){if(X[Y.uuid]===void 0)X[Y.uuid]=Y.toJSON(J);return Y.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=K(J.geometries,this.geometry);let X=this.geometry.parameters;if(X!==void 0&&X.shapes!==void 0){let Y=X.shapes;if(Array.isArray(Y))for(let U=0,H=Y.length;U<H;U++){let N=Y[U];K(J.shapes,N)}else K(J.shapes,Y)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)K(J.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let X=[];for(let Y=0,U=this.material.length;Y<U;Y++)X.push(K(J.materials,this.material[Y]));Z.material=X}else Z.material=K(J.materials,this.material);if(this.children.length>0){Z.children=[];for(let X=0;X<this.children.length;X++)Z.children.push(this.children[X].toJSON(J).object)}if(this.animations.length>0){Z.animations=[];for(let X=0;X<this.animations.length;X++){let Y=this.animations[X];Z.animations.push(K(J.animations,Y))}}if(Q){let X=W(J.geometries),Y=W(J.materials),U=W(J.textures),H=W(J.images),N=W(J.shapes),G=W(J.skeletons),q=W(J.animations),F=W(J.nodes);if(X.length>0)$.geometries=X;if(Y.length>0)$.materials=Y;if(U.length>0)$.textures=U;if(H.length>0)$.images=H;if(N.length>0)$.shapes=N;if(G.length>0)$.skeletons=G;if(q.length>0)$.animations=q;if(F.length>0)$.nodes=F}return $.object=Z,$;function W(X){let Y=[];for(let U in X){let H=X[U];delete H.metadata,Y.push(H)}return Y}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let Z=J.children[$];this.add(Z.clone())}return this}}SJ.DEFAULT_UP=new j(0,1,0);SJ.DEFAULT_MATRIX_AUTO_UPDATE=!0;SJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class dJ extends SJ{constructor(){super();this.isGroup=!0,this.type="Group"}}var TY={type:"move"};class Y6{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new dJ,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new dJ,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new dJ,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let Z=null,K=null,W=null,X=this._targetRay,Y=this._grip,U=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(U&&J.hand){W=!0;for(let k of J.hand.values()){let I=Q.getJointPose(k,$),O=this._getHandJoint(U,k);if(I!==null)O.matrix.fromArray(I.transform.matrix),O.matrix.decompose(O.position,O.rotation,O.scale),O.matrixWorldNeedsUpdate=!0,O.jointRadius=I.radius;O.visible=I!==null}let H=U.joints["index-finger-tip"],N=U.joints["thumb-tip"],G=H.position.distanceTo(N.position),q=0.02,F=0.005;if(U.inputState.pinching&&G>q+F)U.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!U.inputState.pinching&&G<=q-F)U.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(Y!==null&&J.gripSpace){if(K=Q.getPose(J.gripSpace,$),K!==null){if(Y.matrix.fromArray(K.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,K.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(K.linearVelocity);else Y.hasLinearVelocity=!1;if(K.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(K.angularVelocity);else Y.hasAngularVelocity=!1;if(Y.eventsEnabled)Y.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(X!==null){if(Z=Q.getPose(J.targetRaySpace,$),Z===null&&K!==null)Z=K;if(Z!==null){if(X.matrix.fromArray(Z.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.matrixWorldNeedsUpdate=!0,Z.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(Z.linearVelocity);else X.hasLinearVelocity=!1;if(Z.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(Z.angularVelocity);else X.hasAngularVelocity=!1;this.dispatchEvent(TY)}}}if(X!==null)X.visible=Z!==null;if(Y!==null)Y.visible=K!==null;if(U!==null)U.visible=W!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new dJ;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}var QX={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},H8={h:0,s:0,l:0},j6={h:0,s:0,l:0};function eQ(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class QJ{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let Z=J;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,WJ.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,Z=WJ.workingColorSpace){return this.r=J,this.g=Q,this.b=$,WJ.colorSpaceToWorking(this,Z),this}setHSL(J,Q,$,Z=WJ.workingColorSpace){if(J=LY(J,1),Q=ZJ(Q,0,1),$=ZJ($,0,1),Q===0)this.r=this.g=this.b=$;else{let K=$<=0.5?$*(1+Q):$+Q-$*Q,W=2*$-K;this.r=eQ(W,K,J+0.3333333333333333),this.g=eQ(W,K,J),this.b=eQ(W,K,J-0.3333333333333333)}return WJ.colorSpaceToWorking(this,Z),this}setStyle(J,Q="srgb"){function $(K){if(K===void 0)return;if(parseFloat(K)<1)m0("Color: Alpha component of "+J+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec(J)){let K,W=Z[1],X=Z[2];switch(W){case"rgb":case"rgba":if(K=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(K[4]),this.setRGB(Math.min(255,parseInt(K[1],10))/255,Math.min(255,parseInt(K[2],10))/255,Math.min(255,parseInt(K[3],10))/255,Q);if(K=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(K[4]),this.setRGB(Math.min(100,parseInt(K[1],10))/100,Math.min(100,parseInt(K[2],10))/100,Math.min(100,parseInt(K[3],10))/100,Q);break;case"hsl":case"hsla":if(K=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(K[4]),this.setHSL(parseFloat(K[1])/360,parseFloat(K[2])/100,parseFloat(K[3])/100,Q);break;default:m0("Color: Unknown color model "+J)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec(J)){let K=Z[1],W=K.length;if(W===3)return this.setRGB(parseInt(K.charAt(0),16)/15,parseInt(K.charAt(1),16)/15,parseInt(K.charAt(2),16)/15,Q);else if(W===6)return this.setHex(parseInt(K,16),Q);else m0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=QX[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else m0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=t9(J.r),this.g=t9(J.g),this.b=t9(J.b),this}copyLinearToSRGB(J){return this.r=F7(J.r),this.g=F7(J.g),this.b=F7(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return WJ.workingToColorSpace(cJ.copy(this),J),Math.round(ZJ(cJ.r*255,0,255))*65536+Math.round(ZJ(cJ.g*255,0,255))*256+Math.round(ZJ(cJ.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=WJ.workingColorSpace){WJ.workingToColorSpace(cJ.copy(this),Q);let{r:$,g:Z,b:K}=cJ,W=Math.max($,Z,K),X=Math.min($,Z,K),Y,U,H=(X+W)/2;if(X===W)Y=0,U=0;else{let N=W-X;switch(U=H<=0.5?N/(W+X):N/(2-W-X),W){case $:Y=(Z-K)/N+(Z<K?6:0);break;case Z:Y=(K-$)/N+2;break;case K:Y=($-Z)/N+4;break}Y/=6}return J.h=Y,J.s=U,J.l=H,J}getRGB(J,Q=WJ.workingColorSpace){return WJ.workingToColorSpace(cJ.copy(this),Q),J.r=cJ.r,J.g=cJ.g,J.b=cJ.b,J}getStyle(J="srgb"){WJ.workingToColorSpace(cJ.copy(this),J);let{r:Q,g:$,b:Z}=cJ;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(Z*255)})`}offsetHSL(J,Q,$){return this.getHSL(H8),this.setHSL(H8.h+J,H8.s+Q,H8.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(H8),J.getHSL(j6);let $=sQ(H8.h,j6.h,Q),Z=sQ(H8.s,j6.s,Q),K=sQ(H8.l,j6.l,Q);return this.setHSL($,Z,K),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,Z=this.b,K=J.elements;return this.r=K[0]*Q+K[3]*$+K[6]*Z,this.g=K[1]*Q+K[4]*$+K[7]*Z,this.b=K[2]*Q+K[5]*$+K[8]*Z,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var cJ=new QJ;QJ.NAMES=QX;class M7 extends SJ{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new E9,this.environmentIntensity=1,this.environmentRotation=new E9,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)Q.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)Q.object.backgroundIntensity=this.backgroundIntensity;if(Q.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)Q.object.environmentIntensity=this.environmentIntensity;return Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var P9=new j,s9=new j,J$=new j,i9=new j,Z7=new j,K7=new j,yK=new j,Q$=new j,$$=new j,Z$=new j,K$=new IJ,W$=new IJ,X$=new IJ;class O9{constructor(J=new j,Q=new j,$=new j){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,Z){Z.subVectors($,Q),P9.subVectors(J,Q),Z.cross(P9);let K=Z.lengthSq();if(K>0)return Z.multiplyScalar(1/Math.sqrt(K));return Z.set(0,0,0)}static getBarycoord(J,Q,$,Z,K){P9.subVectors(Z,Q),s9.subVectors($,Q),J$.subVectors(J,Q);let W=P9.dot(P9),X=P9.dot(s9),Y=P9.dot(J$),U=s9.dot(s9),H=s9.dot(J$),N=W*U-X*X;if(N===0)return K.set(0,0,0),null;let G=1/N,q=(U*Y-X*H)*G,F=(W*H-X*Y)*G;return K.set(1-q-F,F,q)}static containsPoint(J,Q,$,Z){if(this.getBarycoord(J,Q,$,Z,i9)===null)return!1;return i9.x>=0&&i9.y>=0&&i9.x+i9.y<=1}static getInterpolation(J,Q,$,Z,K,W,X,Y){if(this.getBarycoord(J,Q,$,Z,i9)===null){if(Y.x=0,Y.y=0,"z"in Y)Y.z=0;if("w"in Y)Y.w=0;return null}return Y.setScalar(0),Y.addScaledVector(K,i9.x),Y.addScaledVector(W,i9.y),Y.addScaledVector(X,i9.z),Y}static getInterpolatedAttribute(J,Q,$,Z,K,W){return K$.setScalar(0),W$.setScalar(0),X$.setScalar(0),K$.fromBufferAttribute(J,Q),W$.fromBufferAttribute(J,$),X$.fromBufferAttribute(J,Z),W.setScalar(0),W.addScaledVector(K$,K.x),W.addScaledVector(W$,K.y),W.addScaledVector(X$,K.z),W}static isFrontFacing(J,Q,$,Z){return P9.subVectors($,Q),s9.subVectors(J,Q),P9.cross(s9).dot(Z)<0}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,Z){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[Z]),this}setFromAttributeAndIndices(J,Q,$,Z){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,Z),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return P9.subVectors(this.c,this.b),s9.subVectors(this.a,this.b),P9.cross(s9).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return O9.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return O9.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,Z,K){return O9.getInterpolation(J,this.a,this.b,this.c,Q,$,Z,K)}containsPoint(J){return O9.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return O9.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,Z=this.b,K=this.c,W,X;Z7.subVectors(Z,$),K7.subVectors(K,$),Q$.subVectors(J,$);let Y=Z7.dot(Q$),U=K7.dot(Q$);if(Y<=0&&U<=0)return Q.copy($);$$.subVectors(J,Z);let H=Z7.dot($$),N=K7.dot($$);if(H>=0&&N<=H)return Q.copy(Z);let G=Y*N-H*U;if(G<=0&&Y>=0&&H<=0)return W=Y/(Y-H),Q.copy($).addScaledVector(Z7,W);Z$.subVectors(J,K);let q=Z7.dot(Z$),F=K7.dot(Z$);if(F>=0&&q<=F)return Q.copy(K);let k=q*U-Y*F;if(k<=0&&U>=0&&F<=0)return X=U/(U-F),Q.copy($).addScaledVector(K7,X);let I=H*F-q*N;if(I<=0&&N-H>=0&&q-F>=0)return yK.subVectors(K,Z),X=(N-H)/(N-H+(q-F)),Q.copy(Z).addScaledVector(yK,X);let O=1/(I+k+G);return W=k*O,X=G*O,Q.copy($).addScaledVector(Z7,W).addScaledVector(K7,X)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class Z8{constructor(J=new j(1/0,1/0,1/0),Q=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(w9.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(w9.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=w9.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let K=$.getAttribute("position");if(Q===!0&&K!==void 0&&J.isInstancedMesh!==!0)for(let W=0,X=K.count;W<X;W++){if(J.isMesh===!0)J.getVertexPosition(W,w9);else w9.fromBufferAttribute(K,W);w9.applyMatrix4(J.matrixWorld),this.expandByPoint(w9)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();v6.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();v6.copy($.boundingBox)}v6.applyMatrix4(J.matrixWorld),this.union(v6)}}let Z=J.children;for(let K=0,W=Z.length;K<W;K++)this.expandByObject(Z[K],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,w9),w9.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(l7),f6.subVectors(this.max,l7),W7.subVectors(J.a,l7),X7.subVectors(J.b,l7),Y7.subVectors(J.c,l7),q8.subVectors(X7,W7),N8.subVectors(Y7,X7),w8.subVectors(W7,Y7);let Q=[0,-q8.z,q8.y,0,-N8.z,N8.y,0,-w8.z,w8.y,q8.z,0,-q8.x,N8.z,0,-N8.x,w8.z,0,-w8.x,-q8.y,q8.x,0,-N8.y,N8.x,0,-w8.y,w8.x,0];if(!Y$(Q,W7,X7,Y7,f6))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!Y$(Q,W7,X7,Y7,f6))return!1;return y6.crossVectors(q8,N8),Q=[y6.x,y6.y,y6.z],Y$(Q,W7,X7,Y7,f6)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,w9).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(w9).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return o9[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),o9[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),o9[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),o9[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),o9[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),o9[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),o9[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),o9[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(o9),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var o9=[new j,new j,new j,new j,new j,new j,new j,new j],w9=new j,v6=new Z8,W7=new j,X7=new j,Y7=new j,q8=new j,N8=new j,w8=new j,l7=new j,f6=new j,y6=new j,_8=new j;function Y$(J,Q,$,Z,K){for(let W=0,X=J.length-3;W<=X;W+=3){_8.fromArray(J,W);let Y=K.x*Math.abs(_8.x)+K.y*Math.abs(_8.y)+K.z*Math.abs(_8.z),U=Q.dot(_8),H=$.dot(_8),N=Z.dot(_8);if(Math.max(-Math.max(U,H,N),Math.min(U,H,N))>Y)return!1}return!0}var jJ=new j,b6=new D0,SY=0;class U9 extends $8{constructor(J,Q,$=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:SY++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let Z=0,K=this.itemSize;Z<K;Z++)this.array[J+Z]=Q.array[$+Z];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)b6.fromBufferAttribute(this,Q),b6.applyMatrix3(J),this.setXY(Q,b6.x,b6.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)jJ.fromBufferAttribute(this,Q),jJ.applyMatrix3(J),this.setXYZ(Q,jJ.x,jJ.y,jJ.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)jJ.fromBufferAttribute(this,Q),jJ.applyMatrix4(J),this.setXYZ(Q,jJ.x,jJ.y,jJ.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)jJ.fromBufferAttribute(this,Q),jJ.applyNormalMatrix(J),this.setXYZ(Q,jJ.x,jJ.y,jJ.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)jJ.fromBufferAttribute(this,Q),jJ.transformDirection(J),this.setXYZ(Q,jJ.x,jJ.y,jJ.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=p7($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=K9($,this.array);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=p7(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=K9(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=p7(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=K9(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=p7(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=K9(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=p7(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=K9(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=K9(Q,this.array),$=K9($,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J*=this.itemSize,this.normalized)Q=K9(Q,this.array),$=K9($,this.array),Z=K9(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this}setXYZW(J,Q,$,Z,K){if(J*=this.itemSize,this.normalized)Q=K9(Q,this.array),$=K9($,this.array),Z=K9(Z,this.array),K=K9(K,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this.array[J+3]=K,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")J.name=this.name;if(this.usage!==35044)J.usage=this.usage;return J}dispose(){this.dispatchEvent({type:"dispose"})}}class kQ extends U9{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class RQ extends U9{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class sJ extends U9{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var jY=new Z8,d7=new j,U$=new j;class g8{constructor(J=new j,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else jY.setFromPoints(J).getCenter($);let Z=0;for(let K=0,W=J.length;K<W;K++)Z=Math.max(Z,$.distanceToSquared(J[K]));return this.radius=Math.sqrt(Z),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;d7.subVectors(J,this.center);let Q=d7.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),Z=($-this.radius)*0.5;this.center.addScaledVector(d7,Z/$),this.radius+=Z}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else U$.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(d7.copy(J.center).add(U$)),this.expandByPoint(d7.copy(J.center).sub(U$));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var vY=0,F9=new RJ,H$=new SJ,U7=new j,Y9=new Z8,u7=new Z8,xJ=new j;class R9 extends $8{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vY++}),this.uuid=B7(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((RY(J))?RQ:kQ)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let K=new o0().getNormalMatrix(J);$.applyNormalMatrix(K),$.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection(J),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return F9.makeRotationFromQuaternion(J),this.applyMatrix4(F9),this}rotateX(J){return F9.makeRotationX(J),this.applyMatrix4(F9),this}rotateY(J){return F9.makeRotationY(J),this.applyMatrix4(F9),this}rotateZ(J){return F9.makeRotationZ(J),this.applyMatrix4(F9),this}translate(J,Q,$){return F9.makeTranslation(J,Q,$),this.applyMatrix4(F9),this}scale(J,Q,$){return F9.makeScale(J,Q,$),this.applyMatrix4(F9),this}lookAt(J){return H$.lookAt(J),H$.updateMatrix(),this.applyMatrix4(H$.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(U7).negate(),this.translate(U7.x,U7.y,U7.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let Z=0,K=J.length;Z<K;Z++){let W=J[Z];$.push(W.x,W.y,W.z||0)}this.setAttribute("position",new sJ($,3))}else{let $=Math.min(J.length,Q.count);for(let Z=0;Z<$;Z++){let K=J[Z];Q.setXYZ(Z,K.x,K.y,K.z||0)}if(J.length>Q.count)m0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new Z8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){p0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,Z=Q.length;$<Z;$++){let K=Q[$];if(Y9.setFromBufferAttribute(K),this.morphTargetsRelative)xJ.addVectors(this.boundingBox.min,Y9.min),this.boundingBox.expandByPoint(xJ),xJ.addVectors(this.boundingBox.max,Y9.max),this.boundingBox.expandByPoint(xJ);else this.boundingBox.expandByPoint(Y9.min),this.boundingBox.expandByPoint(Y9.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))p0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new g8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){p0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(J){let $=this.boundingSphere.center;if(Y9.setFromBufferAttribute(J),Q)for(let K=0,W=Q.length;K<W;K++){let X=Q[K];if(u7.setFromBufferAttribute(X),this.morphTargetsRelative)xJ.addVectors(Y9.min,u7.min),Y9.expandByPoint(xJ),xJ.addVectors(Y9.max,u7.max),Y9.expandByPoint(xJ);else Y9.expandByPoint(u7.min),Y9.expandByPoint(u7.max)}Y9.getCenter($);let Z=0;for(let K=0,W=J.count;K<W;K++)xJ.fromBufferAttribute(J,K),Z=Math.max(Z,$.distanceToSquared(xJ));if(Q)for(let K=0,W=Q.length;K<W;K++){let X=Q[K],Y=this.morphTargetsRelative;for(let U=0,H=X.count;U<H;U++){if(xJ.fromBufferAttribute(X,U),Y)U7.fromBufferAttribute(J,U),xJ.add(U7);Z=Math.max(Z,$.distanceToSquared(xJ))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))p0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){p0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:Z,uv:K}=Q,W=this.getAttribute("tangent");if(W===void 0||W.count!==$.count)W=new U9(new Float32Array(4*$.count),4),this.setAttribute("tangent",W);let X=[],Y=[];for(let _=0;_<$.count;_++)X[_]=new j,Y[_]=new j;let U=new j,H=new j,N=new j,G=new D0,q=new D0,F=new D0,k=new j,I=new j;function O(_,V,M){U.fromBufferAttribute($,_),H.fromBufferAttribute($,V),N.fromBufferAttribute($,M),G.fromBufferAttribute(K,_),q.fromBufferAttribute(K,V),F.fromBufferAttribute(K,M),H.sub(U),N.sub(U),q.sub(G),F.sub(G);let m=1/(q.x*F.y-F.x*q.y);if(!isFinite(m))return;k.copy(H).multiplyScalar(F.y).addScaledVector(N,-q.y).multiplyScalar(m),I.copy(N).multiplyScalar(q.x).addScaledVector(H,-F.x).multiplyScalar(m),X[_].add(k),X[V].add(k),X[M].add(k),Y[_].add(I),Y[V].add(I),Y[M].add(I)}let E=this.groups;if(E.length===0)E=[{start:0,count:J.count}];for(let _=0,V=E.length;_<V;++_){let M=E[_],m=M.start,R=M.count;for(let p=m,i=m+R;p<i;p+=3)O(J.getX(p+0),J.getX(p+1),J.getX(p+2))}let C=new j,P=new j,L=new j,A=new j;function w(_){L.fromBufferAttribute(Z,_),A.copy(L);let V=X[_];C.copy(V),C.sub(L.multiplyScalar(L.dot(V))).normalize(),P.crossVectors(A,V);let m=P.dot(Y[_])<0?-1:1;W.setXYZW(_,C.x,C.y,C.z,m)}for(let _=0,V=E.length;_<V;++_){let M=E[_],m=M.start,R=M.count;for(let p=m,i=m+R;p<i;p+=3)w(J.getX(p+0)),w(J.getX(p+1)),w(J.getX(p+2))}this._transformed=!0}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0||$.count!==Q.count)$=new U9(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let G=0,q=$.count;G<q;G++)$.setXYZ(G,0,0,0);let Z=new j,K=new j,W=new j,X=new j,Y=new j,U=new j,H=new j,N=new j;if(J)for(let G=0,q=J.count;G<q;G+=3){let F=J.getX(G+0),k=J.getX(G+1),I=J.getX(G+2);Z.fromBufferAttribute(Q,F),K.fromBufferAttribute(Q,k),W.fromBufferAttribute(Q,I),H.subVectors(W,K),N.subVectors(Z,K),H.cross(N),X.fromBufferAttribute($,F),Y.fromBufferAttribute($,k),U.fromBufferAttribute($,I),X.add(H),Y.add(H),U.add(H),$.setXYZ(F,X.x,X.y,X.z),$.setXYZ(k,Y.x,Y.y,Y.z),$.setXYZ(I,U.x,U.y,U.z)}else for(let G=0,q=Q.count;G<q;G+=3)Z.fromBufferAttribute(Q,G+0),K.fromBufferAttribute(Q,G+1),W.fromBufferAttribute(Q,G+2),H.subVectors(W,K),N.subVectors(Z,K),H.cross(N),$.setXYZ(G+0,H.x,H.y,H.z),$.setXYZ(G+1,H.x,H.y,H.z),$.setXYZ(G+2,H.x,H.y,H.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)xJ.fromBufferAttribute(J,Q),xJ.normalize(),J.setXYZ(Q,xJ.x,xJ.y,xJ.z)}toNonIndexed(){function J(X,Y){let{array:U,itemSize:H,normalized:N}=X,G=new U.constructor(Y.length*H),q=0,F=0;for(let k=0,I=Y.length;k<I;k++){if(X.isInterleavedBufferAttribute)q=Y[k]*X.data.stride+X.offset;else q=Y[k]*H;for(let O=0;O<H;O++)G[F++]=U[q++]}return new U9(G,H,N)}if(this.index===null)return m0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new R9,$=this.index.array,Z=this.attributes;for(let X in Z){let Y=Z[X],U=J(Y,$);Q.setAttribute(X,U)}let K=this.morphAttributes;for(let X in K){let Y=[],U=K[X];for(let H=0,N=U.length;H<N;H++){let G=U[H],q=J(G,$);Y.push(q)}Q.morphAttributes[X]=Y}Q.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;for(let X=0,Y=W.length;X<Y;X++){let U=W[X];Q.addGroup(U.start,U.count,U.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!=="")J.name=this.name;if(Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let Y=this.parameters;for(let U in Y)if(Y[U]!==void 0)J[U]=Y[U];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let Y in $){let U=$[Y];J.data.attributes[Y]=U.toJSON(J.data)}let Z={},K=!1;for(let Y in this.morphAttributes){let U=this.morphAttributes[Y],H=[];for(let N=0,G=U.length;N<G;N++){let q=U[N];H.push(q.toJSON(J.data))}if(H.length>0)Z[Y]=H,K=!0}if(K)J.data.morphAttributes=Z,J.data.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;if(W.length>0)J.data.groups=JSON.parse(JSON.stringify(W));let X=this.boundingSphere;if(X!==null)J.data.boundingSphere=X.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let Z=J.attributes;for(let U in Z){let H=Z[U];this.setAttribute(U,H.clone(Q))}let K=J.morphAttributes;for(let U in K){let H=[],N=K[U];for(let G=0,q=N.length;G<q;G++)H.push(N[G].clone(Q));this.morphAttributes[U]=H}this.morphTargetsRelative=J.morphTargetsRelative;let W=J.groups;for(let U=0,H=W.length;U<H;U++){let N=W[U];this.addGroup(N.start,N.count,N.materialIndex)}let X=J.boundingBox;if(X!==null)this.boundingBox=X.clone();let Y=J.boundingSphere;if(Y!==null)this.boundingSphere=Y.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}var fY=0;class D8 extends $8{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:fY++}),this.uuid=B7(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new QJ(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){m0(`Material: parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){m0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set($);else if(Z&&Z.isVector2&&($&&$.isVector2)||Z&&Z.isEuler&&($&&$.isEuler)||Z&&Z.isVector3&&($&&$.isVector3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,this.name!=="")$.name=this.name;if(this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)$.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)$.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)$.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.shadowSide!==null)$.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)$.blending=this.blending;if(this.side!==0)$.side=this.side;if(this.vertexColors===!0)$.vertexColors=!0;if(this.opacity<1)$.opacity=this.opacity;if(this.transparent===!0)$.transparent=!0;if(this.blendSrc!==204)$.blendSrc=this.blendSrc;if(this.blendDst!==205)$.blendDst=this.blendDst;if(this.blendEquation!==100)$.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)$.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)$.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)$.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)$.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)$.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)$.depthFunc=this.depthFunc;if(this.depthTest===!1)$.depthTest=this.depthTest;if(this.depthWrite===!1)$.depthWrite=this.depthWrite;if(this.colorWrite===!1)$.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)$.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)$.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)$.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)$.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)$.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)$.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)$.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)$.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)$.rotation=this.rotation;if(this.polygonOffset===!0)$.polygonOffset=!0;if(this.polygonOffsetFactor!==0)$.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)$.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)$.linewidth=this.linewidth;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.dithering===!0)$.dithering=!0;if(this.alphaTest>0)$.alphaTest=this.alphaTest;if(this.alphaHash===!0)$.alphaHash=!0;if(this.alphaToCoverage===!0)$.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)$.premultipliedAlpha=!0;if(this.forceSinglePass===!0)$.forceSinglePass=!0;if(this.allowOverride===!1)$.allowOverride=!1;if(this.wireframe===!0)$.wireframe=!0;if(this.wireframeLinewidth>1)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)$.flatShading=!0;if(this.visible===!1)$.visible=!1;if(this.toneMapped===!1)$.toneMapped=!1;if(this.fog===!1)$.fog=!1;if(Object.keys(this.userData).length>0)$.userData=this.userData;function Z(K){let W=[];for(let X in K){let Y=K[X];delete Y.metadata,W.push(Y)}return W}if(Q){let K=Z(J.textures),W=Z(J.images);if(K.length>0)$.textures=K;if(W.length>0)$.images=W}return $}fromJSON(J,Q){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new QJ().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=J.iridescenceThicknessRange;if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=Q[J.map]||null;if(J.matcap!==void 0)this.matcap=Q[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=Q[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=Q[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=Q[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let $=J.normalScale;if(Array.isArray($)===!1)$=[$,$];this.normalScale=new D0().fromArray($)}if(J.displacementMap!==void 0)this.displacementMap=Q[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=Q[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=Q[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=Q[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=Q[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=Q[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=Q[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=Q[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=Q[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=Q[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=Q[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=Q[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=Q[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=Q[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new D0().fromArray(J.clearcoatNormalScale);if(J.iridescenceMap!==void 0)this.iridescenceMap=Q[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=Q[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=Q[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=Q[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=Q[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=Q[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=Q[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let Z=Q.length;$=Array(Z);for(let K=0;K!==Z;++K)$[K]=Q[K].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}var a9=new j,q$=new j,h6=new j,G8=new j,N$=new j,x6=new j,G$=new j;class VQ{constructor(J=new j,Q=new j(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,a9)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=a9.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return a9.copy(this.origin).addScaledVector(this.direction,Q),a9.distanceToSquared(J)}distanceSqToSegment(J,Q,$,Z){q$.copy(J).add(Q).multiplyScalar(0.5),h6.copy(Q).sub(J).normalize(),G8.copy(this.origin).sub(q$);let K=J.distanceTo(Q)*0.5,W=-this.direction.dot(h6),X=G8.dot(this.direction),Y=-G8.dot(h6),U=G8.lengthSq(),H=Math.abs(1-W*W),N,G,q,F;if(H>0)if(N=W*Y-X,G=W*X-Y,F=K*H,N>=0)if(G>=-F)if(G<=F){let k=1/H;N*=k,G*=k,q=N*(N+W*G+2*X)+G*(W*N+G+2*Y)+U}else G=K,N=Math.max(0,-(W*G+X)),q=-N*N+G*(G+2*Y)+U;else G=-K,N=Math.max(0,-(W*G+X)),q=-N*N+G*(G+2*Y)+U;else if(G<=-F)N=Math.max(0,-(-W*K+X)),G=N>0?-K:Math.min(Math.max(-K,-Y),K),q=-N*N+G*(G+2*Y)+U;else if(G<=F)N=0,G=Math.min(Math.max(-K,-Y),K),q=G*(G+2*Y)+U;else N=Math.max(0,-(W*K+X)),G=N>0?K:Math.min(Math.max(-K,-Y),K),q=-N*N+G*(G+2*Y)+U;else G=W>0?-K:K,N=Math.max(0,-(W*G+X)),q=-N*N+G*(G+2*Y)+U;if($)$.copy(this.origin).addScaledVector(this.direction,N);if(Z)Z.copy(q$).addScaledVector(h6,G);return q}intersectSphere(J,Q){a9.subVectors(J.center,this.origin);let $=a9.dot(this.direction),Z=a9.dot(a9)-$*$,K=J.radius*J.radius;if(Z>K)return null;let W=Math.sqrt(K-Z),X=$-W,Y=$+W;if(Y<0)return null;if(X<0)return this.at(Y,Q);return this.at(X,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,Z,K,W,X,Y,U=1/this.direction.x,H=1/this.direction.y,N=1/this.direction.z,G=this.origin;if(U>=0)$=(J.min.x-G.x)*U,Z=(J.max.x-G.x)*U;else $=(J.max.x-G.x)*U,Z=(J.min.x-G.x)*U;if(H>=0)K=(J.min.y-G.y)*H,W=(J.max.y-G.y)*H;else K=(J.max.y-G.y)*H,W=(J.min.y-G.y)*H;if($>W||K>Z)return null;if(K>$||isNaN($))$=K;if(W<Z||isNaN(Z))Z=W;if(N>=0)X=(J.min.z-G.z)*N,Y=(J.max.z-G.z)*N;else X=(J.max.z-G.z)*N,Y=(J.min.z-G.z)*N;if($>Y||X>Z)return null;if(X>$||$!==$)$=X;if(Y<Z||Z!==Z)Z=Y;if(Z<0)return null;return this.at($>=0?$:Z,Q)}intersectsBox(J){return this.intersectBox(J,a9)!==null}intersectTriangle(J,Q,$,Z,K){N$.subVectors(Q,J),x6.subVectors($,J),G$.crossVectors(N$,x6);let W=this.direction.dot(G$),X;if(W>0){if(Z)return null;X=1}else if(W<0)X=-1,W=-W;else return null;G8.subVectors(this.origin,J);let Y=X*this.direction.dot(x6.crossVectors(G8,x6));if(Y<0)return null;let U=X*this.direction.dot(N$.cross(G8));if(U<0)return null;if(Y+U>W)return null;let H=-X*G8.dot(G$);if(H<0)return null;return this.at(H/W,K)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pJ extends D8{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new QJ(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new E9,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var bK=new RJ,C8=new VQ,g6=new g8,hK=new j,p6=new j,m6=new j,l6=new j,F$=new j,d6=new j,xK=new j,u6=new j;class x0 extends SJ{constructor(J=new R9,Q=new pJ){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let K=0,W=Z.length;K<W;K++){let X=Z[K].name||String(K);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=K}}}}getVertexPosition(J,Q){let $=this.geometry,Z=$.attributes.position,K=$.morphAttributes.position,W=$.morphTargetsRelative;Q.fromBufferAttribute(Z,J);let X=this.morphTargetInfluences;if(K&&X){d6.set(0,0,0);for(let Y=0,U=K.length;Y<U;Y++){let H=X[Y],N=K[Y];if(H===0)continue;if(F$.fromBufferAttribute(N,J),W)d6.addScaledVector(F$,H);else d6.addScaledVector(F$.sub(Q),H)}Q.add(d6)}return Q}raycast(J,Q){let $=this.geometry,Z=this.material,K=this.matrixWorld;if(Z===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(g6.copy($.boundingSphere),g6.applyMatrix4(K),C8.copy(J.ray).recast(J.near),g6.containsPoint(C8.origin)===!1){if(C8.intersectSphere(g6,hK)===null)return;if(C8.origin.distanceToSquared(hK)>(J.far-J.near)**2)return}if(bK.copy(K).invert(),C8.copy(J.ray).applyMatrix4(bK),$.boundingBox!==null){if(C8.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,C8)}_computeIntersections(J,Q,$){let Z,K=this.geometry,W=this.material,X=K.index,Y=K.attributes.position,U=K.attributes.uv,H=K.attributes.uv1,N=K.attributes.normal,G=K.groups,q=K.drawRange;if(X!==null)if(Array.isArray(W))for(let F=0,k=G.length;F<k;F++){let I=G[F],O=W[I.materialIndex],E=Math.max(I.start,q.start),C=Math.min(X.count,Math.min(I.start+I.count,q.start+q.count));for(let P=E,L=C;P<L;P+=3){let A=X.getX(P),w=X.getX(P+1),_=X.getX(P+2);if(Z=c6(this,O,J,$,U,H,N,A,w,_),Z)Z.faceIndex=Math.floor(P/3),Z.face.materialIndex=I.materialIndex,Q.push(Z)}}else{let F=Math.max(0,q.start),k=Math.min(X.count,q.start+q.count);for(let I=F,O=k;I<O;I+=3){let E=X.getX(I),C=X.getX(I+1),P=X.getX(I+2);if(Z=c6(this,W,J,$,U,H,N,E,C,P),Z)Z.faceIndex=Math.floor(I/3),Q.push(Z)}}else if(Y!==void 0)if(Array.isArray(W))for(let F=0,k=G.length;F<k;F++){let I=G[F],O=W[I.materialIndex],E=Math.max(I.start,q.start),C=Math.min(Y.count,Math.min(I.start+I.count,q.start+q.count));for(let P=E,L=C;P<L;P+=3){let A=P,w=P+1,_=P+2;if(Z=c6(this,O,J,$,U,H,N,A,w,_),Z)Z.faceIndex=Math.floor(P/3),Z.face.materialIndex=I.materialIndex,Q.push(Z)}}else{let F=Math.max(0,q.start),k=Math.min(Y.count,q.start+q.count);for(let I=F,O=k;I<O;I+=3){let E=I,C=I+1,P=I+2;if(Z=c6(this,W,J,$,U,H,N,E,C,P),Z)Z.faceIndex=Math.floor(I/3),Q.push(Z)}}}}function yY(J,Q,$,Z,K,W,X,Y){let U;if(Q.side===1)U=Z.intersectTriangle(X,W,K,!0,Y);else U=Z.intersectTriangle(K,W,X,Q.side===0,Y);if(U===null)return null;u6.copy(Y),u6.applyMatrix4(J.matrixWorld);let H=$.ray.origin.distanceTo(u6);if(H<$.near||H>$.far)return null;return{distance:H,point:u6.clone(),object:J}}function c6(J,Q,$,Z,K,W,X,Y,U,H){J.getVertexPosition(Y,p6),J.getVertexPosition(U,m6),J.getVertexPosition(H,l6);let N=yY(J,Q,$,Z,p6,m6,l6,xK);if(N){let G=new j;if(O9.getBarycoord(xK,p6,m6,l6,G),K)N.uv=O9.getInterpolatedAttribute(K,Y,U,H,G,new D0);if(W)N.uv1=O9.getInterpolatedAttribute(W,Y,U,H,G,new D0);if(X){if(N.normal=O9.getInterpolatedAttribute(X,Y,U,H,G,new j),N.normal.dot(Z.direction)>0)N.normal.multiplyScalar(-1)}let q={a:Y,b:U,c:H,normal:new j,materialIndex:0};O9.getNormal(p6,m6,l6,q.normal),N.face=q,N.barycoord=G}return N}class LQ extends gJ{constructor(J=null,Q=1,$=1,Z,K,W,X,Y,U=1003,H=1003,N,G){super(null,W,X,Y,U,H,Z,K,N,G);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class QQ extends U9{constructor(J,Q,$,Z=1){super(J,Q,$);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=Z}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var H7=new RJ,gK=new RJ,n6=[],pK=new Z8,bY=new RJ,c7=new x0,n7=new g8;class I7 extends x0{constructor(J,Q,$){super(J,Q);this.isInstancedMesh=!0,this.instanceMatrix=new QQ(new Float32Array($*16),16),this.instanceColor=null,this.morphTexture=null,this.count=$,this.boundingBox=null,this.boundingSphere=null;for(let Z=0;Z<$;Z++)this.setMatrixAt(Z,bY)}computeBoundingBox(){let J=this.geometry,Q=this.count;if(this.boundingBox===null)this.boundingBox=new Z8;if(J.boundingBox===null)J.computeBoundingBox();this.boundingBox.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,H7),pK.copy(J.boundingBox).applyMatrix4(H7),this.boundingBox.union(pK)}computeBoundingSphere(){let J=this.geometry,Q=this.count;if(this.boundingSphere===null)this.boundingSphere=new g8;if(J.boundingSphere===null)J.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,H7),n7.copy(J.boundingSphere).applyMatrix4(H7),this.boundingSphere.union(n7)}copy(J,Q){if(super.copy(J,Q),this.instanceMatrix.copy(J.instanceMatrix),J.morphTexture!==null)this.morphTexture=J.morphTexture.clone();if(J.instanceColor!==null)this.instanceColor=J.instanceColor.clone();if(this.count=J.count,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}getColorAt(J,Q){if(this.instanceColor===null)return Q.setRGB(1,1,1);else return Q.fromArray(this.instanceColor.array,J*3)}getMatrixAt(J,Q){return Q.fromArray(this.instanceMatrix.array,J*16)}getMorphAt(J,Q){let $=Q.morphTargetInfluences,Z=this.morphTexture.source.data.data,K=$.length+1,W=J*K+1;for(let X=0;X<$.length;X++)$[X]=Z[W+X]}raycast(J,Q){let $=this.matrixWorld,Z=this.count;if(c7.geometry=this.geometry,c7.material=this.material,c7.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(n7.copy(this.boundingSphere),n7.applyMatrix4($),J.ray.intersectsSphere(n7)===!1)return;for(let K=0;K<Z;K++){this.getMatrixAt(K,H7),gK.multiplyMatrices($,H7),c7.matrixWorld=gK,c7.raycast(J,n6);for(let W=0,X=n6.length;W<X;W++){let Y=n6[W];Y.instanceId=K,Y.object=this,Q.push(Y)}n6.length=0}}setColorAt(J,Q){if(this.instanceColor===null)this.instanceColor=new QQ(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return Q.toArray(this.instanceColor.array,J*3),this}setMatrixAt(J,Q){return Q.toArray(this.instanceMatrix.array,J*16),this}setMorphAt(J,Q){let $=Q.morphTargetInfluences,Z=$.length+1;if(this.morphTexture===null)this.morphTexture=new LQ(new Float32Array(Z*this.count),Z,this.count,1028,1015);let K=this.morphTexture.source.data.data,W=0;for(let U=0;U<$.length;U++)W+=$[U];let X=this.geometry.morphTargetsRelative?1:1-W,Y=Z*J;return K[Y]=X,K.set($,Y+1),this}updateMorphTargets(){}dispose(){if(this.dispatchEvent({type:"dispose"}),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var O$=new j,hY=new j,xY=new o0;class r9{constructor(J=new j(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,Z){return this.normal.set(J,Q,$),this.constant=Z,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let Z=O$.subVectors($,Q).cross(hY.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(Z,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,$=!0){let Z=J.delta(O$),K=this.normal.dot(Z);if(K===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let W=-(J.start.dot(this.normal)+this.constant)/K;if($===!0&&(W<0||W>1))return null;return Q.copy(J.start).addScaledVector(Z,W)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||xY.getNormalMatrix(J),Z=this.coplanarPoint(O$).applyMatrix4(J),K=this.normal.applyMatrix3($).normalize();return this.constant=-Z.dot(K),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}}var T8=new g8,gY=new D0(0.5,0.5),s6=new j;class U6{constructor(J=new r9,Q=new r9,$=new r9,Z=new r9,K=new r9,W=new r9){this.planes=[J,Q,$,Z,K,W]}set(J,Q,$,Z,K,W){let X=this.planes;return X[0].copy(J),X[1].copy(Q),X[2].copy($),X[3].copy(Z),X[4].copy(K),X[5].copy(W),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let Z=this.planes,K=J.elements,W=K[0],X=K[1],Y=K[2],U=K[3],H=K[4],N=K[5],G=K[6],q=K[7],F=K[8],k=K[9],I=K[10],O=K[11],E=K[12],C=K[13],P=K[14],L=K[15];if(Z[0].setComponents(U-W,q-H,O-F,L-E).normalize(),Z[1].setComponents(U+W,q+H,O+F,L+E).normalize(),Z[2].setComponents(U+X,q+N,O+k,L+C).normalize(),Z[3].setComponents(U-X,q-N,O-k,L-C).normalize(),$)Z[4].setComponents(Y,G,I,P).normalize(),Z[5].setComponents(U-Y,q-G,O-I,L-P).normalize();else if(Z[4].setComponents(U-Y,q-G,O-I,L-P).normalize(),Q===2000)Z[5].setComponents(U+Y,q+G,O+I,L+P).normalize();else if(Q===2001)Z[5].setComponents(Y,G,I,P).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();T8.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();T8.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(T8)}intersectsSprite(J){T8.center.set(0,0,0);let Q=gY.distanceTo(J.center);return T8.radius=0.7071067811865476+Q,T8.applyMatrix4(J.matrixWorld),this.intersectsSphere(T8)}intersectsSphere(J){let Q=this.planes,$=J.center,Z=-J.radius;for(let K=0;K<6;K++)if(Q[K].distanceToPoint($)<Z)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let Z=Q[$];if(s6.x=Z.normal.x>0?J.max.x:J.min.x,s6.y=Z.normal.y>0?J.max.y:J.min.y,s6.z=Z.normal.z>0?J.max.z:J.min.z,Z.distanceToPoint(s6)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zQ extends gJ{constructor(J=[],Q=301,$,Z,K,W,X,Y,U,H){super(J,Q,$,Z,K,W,X,Y,U,H);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class g9 extends gJ{constructor(J,Q,$,Z,K,W,X,Y,U){super(J,Q,$,Z,K,W,X,Y,U);this.isCanvasTexture=!0,this.needsUpdate=!0}}class k8 extends gJ{constructor(J,Q,$=1014,Z,K,W,X=1003,Y=1003,U,H=1026,N=1){if(H!==1026&&H!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let G={width:J,height:Q,depth:N};super(G,Z,K,W,X,Y,H,$,U);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new W6(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);if(this.compareFunction!==null)Q.compareFunction=this.compareFunction;return Q}}class AZ extends k8{constructor(J,Q=1014,$=301,Z,K,W=1003,X=1003,Y,U=1026){let H={width:J,height:J,depth:1},N=[H,H,H,H,H,H];super(J,J,Q,$,Z,K,W,X,Y,U);this.image=N,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class BQ extends gJ{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class AJ extends R9{constructor(J=1,Q=1,$=1,Z=1,K=1,W=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:Z,heightSegments:K,depthSegments:W};let X=this;Z=Math.floor(Z),K=Math.floor(K),W=Math.floor(W);let Y=[],U=[],H=[],N=[],G=0,q=0;F("z","y","x",-1,-1,$,Q,J,W,K,0),F("z","y","x",1,-1,$,Q,-J,W,K,1),F("x","z","y",1,1,J,$,Q,Z,W,2),F("x","z","y",1,-1,J,$,-Q,Z,W,3),F("x","y","z",1,-1,J,Q,$,Z,K,4),F("x","y","z",-1,-1,J,Q,-$,Z,K,5),this.setIndex(Y),this.setAttribute("position",new sJ(U,3)),this.setAttribute("normal",new sJ(H,3)),this.setAttribute("uv",new sJ(N,2));function F(k,I,O,E,C,P,L,A,w,_,V){let M=P/w,m=L/_,R=P/2,p=L/2,i=A/2,x=w+1,u=_+1,n=0,g=0,e=new j;for(let K0=0;K0<u;K0++){let Y0=K0*m-p;for(let P0=0;P0<x;P0++){let k0=P0*M-R;e[k]=k0*E,e[I]=Y0*C,e[O]=i,U.push(e.x,e.y,e.z),e[k]=0,e[I]=0,e[O]=A>0?1:-1,H.push(e.x,e.y,e.z),N.push(P0/w),N.push(1-K0/_),n+=1}}for(let K0=0;K0<_;K0++)for(let Y0=0;Y0<w;Y0++){let P0=G+Y0+x*K0,k0=G+Y0+x*(K0+1),UJ=G+(Y0+1)+x*(K0+1),XJ=G+(Y0+1)+x*K0;Y.push(P0,k0,XJ),Y.push(k0,UJ,XJ),g+=6}X.addGroup(q,g,V),q+=g,G+=n}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new AJ(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class S9 extends R9{constructor(J=1,Q=1,$=1,Z=32,K=1,W=!1,X=0,Y=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:Q,height:$,radialSegments:Z,heightSegments:K,openEnded:W,thetaStart:X,thetaLength:Y};let U=this;Z=Math.floor(Z),K=Math.floor(K);let H=[],N=[],G=[],q=[],F=0,k=[],I=$/2,O=0;if(E(),W===!1){if(J>0)C(!0);if(Q>0)C(!1)}this.setIndex(H),this.setAttribute("position",new sJ(N,3)),this.setAttribute("normal",new sJ(G,3)),this.setAttribute("uv",new sJ(q,2));function E(){let P=new j,L=new j,A=0,w=(Q-J)/$;for(let _=0;_<=K;_++){let V=[],M=_/K,m=M*(Q-J)+J;for(let R=0;R<=Z;R++){let p=R/Z,i=p*Y+X,x=Math.sin(i),u=Math.cos(i);L.x=m*x,L.y=-M*$+I,L.z=m*u,N.push(L.x,L.y,L.z),P.set(x,w,u).normalize(),G.push(P.x,P.y,P.z),q.push(p,1-M),V.push(F++)}k.push(V)}for(let _=0;_<Z;_++)for(let V=0;V<K;V++){let M=k[V][_],m=k[V+1][_],R=k[V+1][_+1],p=k[V][_+1];if(J>0||V!==0)H.push(M,m,p),A+=3;if(Q>0||V!==K-1)H.push(m,R,p),A+=3}U.addGroup(O,A,0),O+=A}function C(P){let L=F,A=new D0,w=new j,_=0,V=P===!0?J:Q,M=P===!0?1:-1;for(let R=1;R<=Z;R++)N.push(0,I*M,0),G.push(0,M,0),q.push(0.5,0.5),F++;let m=F;for(let R=0;R<=Z;R++){let i=R/Z*Y+X,x=Math.cos(i),u=Math.sin(i);w.x=V*u,w.y=I*M,w.z=V*x,N.push(w.x,w.y,w.z),G.push(0,M,0),A.x=x*0.5+0.5,A.y=u*0.5*M+0.5,q.push(A.x,A.y),F++}for(let R=0;R<Z;R++){let p=L+R,i=m+R;if(P===!0)H.push(i,i+1,p);else H.push(i+1,i,p);_+=3}U.addGroup(O,_,P===!0?1:2),O+=_}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new S9(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class V9{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){m0("Curve: .getPoint() not implemented.")}getPointAt(J,Q){let $=this.getUtoTmapping(J);return this.getPoint($,Q)}getPoints(J=5){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPoint($/J));return Q}getSpacedPoints(J=5){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPointAt($/J));return Q}getLength(){let J=this.getLengths();return J[J.length-1]}getLengths(J=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===J+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let Q=[],$,Z=this.getPoint(0),K=0;Q.push(0);for(let W=1;W<=J;W++)$=this.getPoint(W/J),K+=$.distanceTo(Z),Q.push(K),Z=$;return this.cacheArcLengths=Q,Q}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(J,Q=null){let $=this.getLengths(),Z=0,K=$.length,W;if(Q)W=Q;else W=J*$[K-1];let X=0,Y=K-1,U;while(X<=Y)if(Z=Math.floor(X+(Y-X)/2),U=$[Z]-W,U<0)X=Z+1;else if(U>0)Y=Z-1;else{Y=Z;break}if(Z=Y,$[Z]===W)return Z/(K-1);let H=$[Z],G=$[Z+1]-H,q=(W-H)/G;return(Z+q)/(K-1)}getTangent(J,Q){let Z=J-0.0001,K=J+0.0001;if(Z<0)Z=0;if(K>1)K=1;let W=this.getPoint(Z),X=this.getPoint(K),Y=Q||(W.isVector2?new D0:new j);return Y.copy(X).sub(W).normalize(),Y}getTangentAt(J,Q){let $=this.getUtoTmapping(J);return this.getTangent($,Q)}computeFrenetFrames(J,Q=!1){let $=new j,Z=[],K=[],W=[],X=new j,Y=new RJ;for(let q=0;q<=J;q++){let F=q/J;Z[q]=this.getTangentAt(F,new j)}K[0]=new j,W[0]=new j;let U=Number.MAX_VALUE,H=Math.abs(Z[0].x),N=Math.abs(Z[0].y),G=Math.abs(Z[0].z);if(H<=U)U=H,$.set(1,0,0);if(N<=U)U=N,$.set(0,1,0);if(G<=U)$.set(0,0,1);X.crossVectors(Z[0],$).normalize(),K[0].crossVectors(Z[0],X),W[0].crossVectors(Z[0],K[0]);for(let q=1;q<=J;q++){if(K[q]=K[q-1].clone(),W[q]=W[q-1].clone(),X.crossVectors(Z[q-1],Z[q]),X.length()>Number.EPSILON){X.normalize();let F=Math.acos(ZJ(Z[q-1].dot(Z[q]),-1,1));K[q].applyMatrix4(Y.makeRotationAxis(X,F))}W[q].crossVectors(Z[q],K[q])}if(Q===!0){let q=Math.acos(ZJ(K[0].dot(K[J]),-1,1));if(q/=J,Z[0].dot(X.crossVectors(K[0],K[J]))>0)q=-q;for(let F=1;F<=J;F++)K[F].applyMatrix4(Y.makeRotationAxis(Z[F],q*F)),W[F].crossVectors(Z[F],K[F])}return{tangents:Z,normals:K,binormals:W}}clone(){return new this.constructor().copy(this)}copy(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}toJSON(){let J={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return J.arcLengthDivisions=this.arcLengthDivisions,J.type=this.type,J}fromJSON(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}}class H6 extends V9{constructor(J=0,Q=0,$=1,Z=1,K=0,W=Math.PI*2,X=!1,Y=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=J,this.aY=Q,this.xRadius=$,this.yRadius=Z,this.aStartAngle=K,this.aEndAngle=W,this.aClockwise=X,this.aRotation=Y}getPoint(J,Q=new D0){let $=Q,Z=Math.PI*2,K=this.aEndAngle-this.aStartAngle,W=Math.abs(K)<Number.EPSILON;while(K<0)K+=Z;while(K>Z)K-=Z;if(K<Number.EPSILON)if(W)K=0;else K=Z;if(this.aClockwise===!0&&!W)if(K===Z)K=-Z;else K=K-Z;let X=this.aStartAngle+J*K,Y=this.aX+this.xRadius*Math.cos(X),U=this.aY+this.yRadius*Math.sin(X);if(this.aRotation!==0){let H=Math.cos(this.aRotation),N=Math.sin(this.aRotation),G=Y-this.aX,q=U-this.aY;Y=G*H-q*N+this.aX,U=G*N+q*H+this.aY}return $.set(Y,U)}copy(J){return super.copy(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}toJSON(){let J=super.toJSON();return J.aX=this.aX,J.aY=this.aY,J.xRadius=this.xRadius,J.yRadius=this.yRadius,J.aStartAngle=this.aStartAngle,J.aEndAngle=this.aEndAngle,J.aClockwise=this.aClockwise,J.aRotation=this.aRotation,J}fromJSON(J){return super.fromJSON(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}}class PZ extends H6{constructor(J,Q,$,Z,K,W){super(J,Q,$,$,Z,K,W);this.isArcCurve=!0,this.type="ArcCurve"}}function wZ(){let J=0,Q=0,$=0,Z=0;function K(W,X,Y,U){J=W,Q=Y,$=-3*W+3*X-2*Y-U,Z=2*W-2*X+Y+U}return{initCatmullRom:function(W,X,Y,U,H){K(X,Y,H*(Y-W),H*(U-X))},initNonuniformCatmullRom:function(W,X,Y,U,H,N,G){let q=(X-W)/H-(Y-W)/(H+N)+(Y-X)/N,F=(Y-X)/N-(U-X)/(N+G)+(U-Y)/G;q*=N,F*=N,K(X,Y,q,F)},calc:function(W){let X=W*W,Y=X*W;return J+Q*W+$*X+Z*Y}}}var mK=new j,lK=new j,E$=new wZ,D$=new wZ,k$=new wZ;class _Z extends V9{constructor(J=[],Q=!1,$="centripetal",Z=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=J,this.closed=Q,this.curveType=$,this.tension=Z}getPoint(J,Q=new j){let $=Q,Z=this.points,K=Z.length,W=(K-(this.closed?0:1))*J,X=Math.floor(W),Y=W-X;if(this.closed)X+=X>0?0:(Math.floor(Math.abs(X)/K)+1)*K;else if(Y===0&&X===K-1)X=K-2,Y=1;let U,H;if(this.closed||X>0)U=Z[(X-1)%K];else lK.subVectors(Z[0],Z[1]).add(Z[0]),U=lK;let N=Z[X%K],G=Z[(X+1)%K];if(this.closed||X+2<K)H=Z[(X+2)%K];else mK.subVectors(Z[K-1],Z[K-2]).add(Z[K-1]),H=mK;if(this.curveType==="centripetal"||this.curveType==="chordal"){let q=this.curveType==="chordal"?0.5:0.25,F=Math.pow(U.distanceToSquared(N),q),k=Math.pow(N.distanceToSquared(G),q),I=Math.pow(G.distanceToSquared(H),q);if(k<0.0001)k=1;if(F<0.0001)F=k;if(I<0.0001)I=k;E$.initNonuniformCatmullRom(U.x,N.x,G.x,H.x,F,k,I),D$.initNonuniformCatmullRom(U.y,N.y,G.y,H.y,F,k,I),k$.initNonuniformCatmullRom(U.z,N.z,G.z,H.z,F,k,I)}else if(this.curveType==="catmullrom")E$.initCatmullRom(U.x,N.x,G.x,H.x,this.tension),D$.initCatmullRom(U.y,N.y,G.y,H.y,this.tension),k$.initCatmullRom(U.z,N.z,G.z,H.z,this.tension);return $.set(E$.calc(Y),D$.calc(Y),k$.calc(Y)),$}copy(J){super.copy(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(Z.clone())}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,$=this.points.length;Q<$;Q++){let Z=this.points[Q];J.points.push(Z.toArray())}return J.closed=this.closed,J.curveType=this.curveType,J.tension=this.tension,J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(new j().fromArray(Z))}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}}function dK(J,Q,$,Z,K){let W=(Z-Q)*0.5,X=(K-$)*0.5,Y=J*J,U=J*Y;return(2*$-2*Z+W+X)*U+(-3*$+3*Z-2*W-X)*Y+W*J+$}function pY(J,Q){let $=1-J;return $*$*Q}function mY(J,Q){return 2*(1-J)*J*Q}function lY(J,Q){return J*J*Q}function i7(J,Q,$,Z){return pY(J,Q)+mY(J,$)+lY(J,Z)}function dY(J,Q){let $=1-J;return $*$*$*Q}function uY(J,Q){let $=1-J;return 3*$*$*J*Q}function cY(J,Q){return 3*(1-J)*J*J*Q}function nY(J,Q){return J*J*J*Q}function o7(J,Q,$,Z,K){return dY(J,Q)+uY(J,$)+cY(J,Z)+nY(J,K)}class MQ extends V9{constructor(J=new D0,Q=new D0,$=new D0,Z=new D0){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=J,this.v1=Q,this.v2=$,this.v3=Z}getPoint(J,Q=new D0){let $=Q,Z=this.v0,K=this.v1,W=this.v2,X=this.v3;return $.set(o7(J,Z.x,K.x,W.x,X.x),o7(J,Z.y,K.y,W.y,X.y)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class CZ extends V9{constructor(J=new j,Q=new j,$=new j,Z=new j){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=J,this.v1=Q,this.v2=$,this.v3=Z}getPoint(J,Q=new j){let $=Q,Z=this.v0,K=this.v1,W=this.v2,X=this.v3;return $.set(o7(J,Z.x,K.x,W.x,X.x),o7(J,Z.y,K.y,W.y,X.y),o7(J,Z.z,K.z,W.z,X.z)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class IQ extends V9{constructor(J=new D0,Q=new D0){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=J,this.v2=Q}getPoint(J,Q=new D0){let $=Q;if(J===1)$.copy(this.v2);else $.copy(this.v2).sub(this.v1),$.multiplyScalar(J).add(this.v1);return $}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new D0){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class TZ extends V9{constructor(J=new j,Q=new j){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=J,this.v2=Q}getPoint(J,Q=new j){let $=Q;if(J===1)$.copy(this.v2);else $.copy(this.v2).sub(this.v1),$.multiplyScalar(J).add(this.v1);return $}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new j){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class AQ extends V9{constructor(J=new D0,Q=new D0,$=new D0){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=J,this.v1=Q,this.v2=$}getPoint(J,Q=new D0){let $=Q,Z=this.v0,K=this.v1,W=this.v2;return $.set(i7(J,Z.x,K.x,W.x),i7(J,Z.y,K.y,W.y)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class SZ extends V9{constructor(J=new j,Q=new j,$=new j){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=J,this.v1=Q,this.v2=$}getPoint(J,Q=new j){let $=Q,Z=this.v0,K=this.v1,W=this.v2;return $.set(i7(J,Z.x,K.x,W.x),i7(J,Z.y,K.y,W.y),i7(J,Z.z,K.z,W.z)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class PQ extends V9{constructor(J=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=J}getPoint(J,Q=new D0){let $=Q,Z=this.points,K=(Z.length-1)*J,W=Math.floor(K),X=K-W,Y=Z[W===0?W:W-1],U=Z[W],H=Z[W>Z.length-2?Z.length-1:W+1],N=Z[W>Z.length-3?Z.length-1:W+2];return $.set(dK(X,Y.x,U.x,H.x,N.x),dK(X,Y.y,U.y,H.y,N.y)),$}copy(J){super.copy(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(Z.clone())}return this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,$=this.points.length;Q<$;Q++){let Z=this.points[Q];J.points.push(Z.toArray())}return J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(new D0().fromArray(Z))}return this}}var V$=Object.freeze({__proto__:null,ArcCurve:PZ,CatmullRomCurve3:_Z,CubicBezierCurve:MQ,CubicBezierCurve3:CZ,EllipseCurve:H6,LineCurve:IQ,LineCurve3:TZ,QuadraticBezierCurve:AQ,QuadraticBezierCurve3:SZ,SplineCurve:PQ});class jZ extends V9{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(J){this.curves.push(J)}closePath(){let J=this.curves[0].getPoint(0),Q=this.curves[this.curves.length-1].getPoint(1);if(!J.equals(Q)){let $=J.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new V$[$](Q,J))}return this}getPoint(J,Q){let $=J*this.getLength(),Z=this.getCurveLengths(),K=0;while(K<Z.length){if(Z[K]>=$){let W=Z[K]-$,X=this.curves[K],Y=X.getLength(),U=Y===0?0:1-W/Y;return X.getPointAt(U,Q)}K++}return null}getLength(){let J=this.getCurveLengths();return J[J.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let J=[],Q=0;for(let $=0,Z=this.curves.length;$<Z;$++)Q+=this.curves[$].getLength(),J.push(Q);return this.cacheLengths=J,J}getSpacedPoints(J=40){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPoint($/J));if(this.autoClose)Q.push(Q[0]);return Q}getPoints(J=12){let Q=[],$;for(let Z=0,K=this.curves;Z<K.length;Z++){let W=K[Z],X=W.isEllipseCurve?J*2:W.isLineCurve||W.isLineCurve3?1:W.isSplineCurve?J*W.points.length:J,Y=W.getPoints(X);for(let U=0;U<Y.length;U++){let H=Y[U];if($&&$.equals(H))continue;Q.push(H),$=H}}if(this.autoClose&&Q.length>1&&!Q[Q.length-1].equals(Q[0]))Q.push(Q[0]);return Q}copy(J){super.copy(J),this.curves=[];for(let Q=0,$=J.curves.length;Q<$;Q++){let Z=J.curves[Q];this.curves.push(Z.clone())}return this.autoClose=J.autoClose,this}toJSON(){let J=super.toJSON();J.autoClose=this.autoClose,J.curves=[];for(let Q=0,$=this.curves.length;Q<$;Q++){let Z=this.curves[Q];J.curves.push(Z.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.autoClose=J.autoClose,this.curves=[];for(let Q=0,$=J.curves.length;Q<$;Q++){let Z=J.curves[Q];this.curves.push(new V$[Z.type]().fromJSON(Z))}return this}}class $Q extends jZ{constructor(J){super();if(this.type="Path",this.currentPoint=new D0,J)this.setFromPoints(J)}setFromPoints(J){this.moveTo(J[0].x,J[0].y);for(let Q=1,$=J.length;Q<$;Q++)this.lineTo(J[Q].x,J[Q].y);return this}moveTo(J,Q){return this.currentPoint.set(J,Q),this}lineTo(J,Q){let $=new IQ(this.currentPoint.clone(),new D0(J,Q));return this.curves.push($),this.currentPoint.set(J,Q),this}quadraticCurveTo(J,Q,$,Z){let K=new AQ(this.currentPoint.clone(),new D0(J,Q),new D0($,Z));return this.curves.push(K),this.currentPoint.set($,Z),this}bezierCurveTo(J,Q,$,Z,K,W){let X=new MQ(this.currentPoint.clone(),new D0(J,Q),new D0($,Z),new D0(K,W));return this.curves.push(X),this.currentPoint.set(K,W),this}splineThru(J){let Q=[this.currentPoint.clone()].concat(J),$=new PQ(Q);return this.curves.push($),this.currentPoint.copy(J[J.length-1]),this}arc(J,Q,$,Z,K,W){let X=this.currentPoint.x,Y=this.currentPoint.y;return this.absarc(J+X,Q+Y,$,Z,K,W),this}absarc(J,Q,$,Z,K,W){return this.absellipse(J,Q,$,$,Z,K,W),this}ellipse(J,Q,$,Z,K,W,X,Y){let U=this.currentPoint.x,H=this.currentPoint.y;return this.absellipse(J+U,Q+H,$,Z,K,W,X,Y),this}absellipse(J,Q,$,Z,K,W,X,Y){let U=new H6(J,Q,$,Z,K,W,X,Y);if(this.curves.length>0){let N=U.getPoint(0);if(!N.equals(this.currentPoint))this.lineTo(N.x,N.y)}this.curves.push(U);let H=U.getPoint(1);return this.currentPoint.copy(H),this}copy(J){return super.copy(J),this.currentPoint.copy(J.currentPoint),this}toJSON(){let J=super.toJSON();return J.currentPoint=this.currentPoint.toArray(),J}fromJSON(J){return super.fromJSON(J),this.currentPoint.fromArray(J.currentPoint),this}}class q6 extends $Q{constructor(J){super(J);this.uuid=B7(),this.type="Shape",this.holes=[]}getPointsHoles(J){let Q=[];for(let $=0,Z=this.holes.length;$<Z;$++)Q[$]=this.holes[$].getPoints(J);return Q}extractPoints(J){return{shape:this.getPoints(J),holes:this.getPointsHoles(J)}}copy(J){super.copy(J),this.holes=[];for(let Q=0,$=J.holes.length;Q<$;Q++){let Z=J.holes[Q];this.holes.push(Z.clone())}return this}toJSON(){let J=super.toJSON();J.uuid=this.uuid,J.holes=[];for(let Q=0,$=this.holes.length;Q<$;Q++){let Z=this.holes[Q];J.holes.push(Z.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.uuid=J.uuid,this.holes=[];for(let Q=0,$=J.holes.length;Q<$;Q++){let Z=J.holes[Q];this.holes.push(new $Q().fromJSON(Z))}return this}}function sY(J,Q,$=2){let Z=Q&&Q.length,K=Z?Q[0]*$:J.length,W=$X(J,0,K,$,!0),X=[];if(!W||W.next===W.prev)return X;let Y,U,H;if(Z)W=tY(J,Q,W,$);if(J.length>80*$){Y=J[0],U=J[1];let N=Y,G=U;for(let q=$;q<K;q+=$){let F=J[q],k=J[q+1];if(F<Y)Y=F;if(k<U)U=k;if(F>N)N=F;if(k>G)G=k}H=Math.max(N-Y,G-U),H=H!==0?32767/H:0}return a7(W,X,$,Y,U,H,0),X}function $X(J,Q,$,Z,K){let W;if(K===HU(J,Q,$,Z)>0)for(let X=Q;X<$;X+=Z)W=uK(X/Z|0,J[X],J[X+1],W);else for(let X=$-Z;X>=Q;X-=Z)W=uK(X/Z|0,J[X],J[X+1],W);if(W&&D7(W,W.next))t7(W),W=W.next;return W}function v8(J,Q){if(!J)return J;if(!Q)Q=J;let $=J,Z;do if(Z=!1,!$.steiner&&(D7($,$.next)||PJ($.prev,$,$.next)===0)){if(t7($),$=Q=$.prev,$===$.next)break;Z=!0}else $=$.next;while(Z||$!==Q);return Q}function a7(J,Q,$,Z,K,W,X){if(!J)return;if(!X&&W)ZU(J,Z,K,W);let Y=J;while(J.prev!==J.next){let{prev:U,next:H}=J;if(W?oY(J,Z,K,W):iY(J)){Q.push(U.i,J.i,H.i),t7(J),J=H.next,Y=H.next;continue}if(J=H,J===Y){if(!X)a7(v8(J),Q,$,Z,K,W,1);else if(X===1)J=aY(v8(J),Q),a7(J,Q,$,Z,K,W,2);else if(X===2)rY(J,Q,$,Z,K,W);break}}}function iY(J){let Q=J.prev,$=J,Z=J.next;if(PJ(Q,$,Z)>=0)return!1;let K=Q.x,W=$.x,X=Z.x,Y=Q.y,U=$.y,H=Z.y,N=Math.min(K,W,X),G=Math.min(Y,U,H),q=Math.max(K,W,X),F=Math.max(Y,U,H),k=Z.next;while(k!==Q){if(k.x>=N&&k.x<=q&&k.y>=G&&k.y<=F&&s7(K,Y,W,U,X,H,k.x,k.y)&&PJ(k.prev,k,k.next)>=0)return!1;k=k.next}return!0}function oY(J,Q,$,Z){let K=J.prev,W=J,X=J.next;if(PJ(K,W,X)>=0)return!1;let Y=K.x,U=W.x,H=X.x,N=K.y,G=W.y,q=X.y,F=Math.min(Y,U,H),k=Math.min(N,G,q),I=Math.max(Y,U,H),O=Math.max(N,G,q),E=L$(F,k,Q,$,Z),C=L$(I,O,Q,$,Z),P=J.prevZ,L=J.nextZ;while(P&&P.z>=E&&L&&L.z<=C){if(P.x>=F&&P.x<=I&&P.y>=k&&P.y<=O&&P!==K&&P!==X&&s7(Y,N,U,G,H,q,P.x,P.y)&&PJ(P.prev,P,P.next)>=0)return!1;if(P=P.prevZ,L.x>=F&&L.x<=I&&L.y>=k&&L.y<=O&&L!==K&&L!==X&&s7(Y,N,U,G,H,q,L.x,L.y)&&PJ(L.prev,L,L.next)>=0)return!1;L=L.nextZ}while(P&&P.z>=E){if(P.x>=F&&P.x<=I&&P.y>=k&&P.y<=O&&P!==K&&P!==X&&s7(Y,N,U,G,H,q,P.x,P.y)&&PJ(P.prev,P,P.next)>=0)return!1;P=P.prevZ}while(L&&L.z<=C){if(L.x>=F&&L.x<=I&&L.y>=k&&L.y<=O&&L!==K&&L!==X&&s7(Y,N,U,G,H,q,L.x,L.y)&&PJ(L.prev,L,L.next)>=0)return!1;L=L.nextZ}return!0}function aY(J,Q){let $=J;do{let Z=$.prev,K=$.next.next;if(!D7(Z,K)&&KX(Z,$,$.next,K)&&r7(Z,K)&&r7(K,Z))Q.push(Z.i,$.i,K.i),t7($),t7($.next),$=J=K;$=$.next}while($!==J);return v8($)}function rY(J,Q,$,Z,K,W){let X=J;do{let Y=X.next.next;while(Y!==X.prev){if(X.i!==Y.i&&XU(X,Y)){let U=WX(X,Y);X=v8(X,X.next),U=v8(U,U.next),a7(X,Q,$,Z,K,W,0),a7(U,Q,$,Z,K,W,0);return}Y=Y.next}X=X.next}while(X!==J)}function tY(J,Q,$,Z){let K=[];for(let W=0,X=Q.length;W<X;W++){let Y=Q[W]*Z,U=W<X-1?Q[W+1]*Z:J.length,H=$X(J,Y,U,Z,!1);if(H===H.next)H.steiner=!0;K.push(WU(H))}K.sort(eY);for(let W=0;W<K.length;W++)$=JU(K[W],$);return $}function eY(J,Q){let $=J.x-Q.x;if($===0){if($=J.y-Q.y,$===0){let Z=(J.next.y-J.y)/(J.next.x-J.x),K=(Q.next.y-Q.y)/(Q.next.x-Q.x);$=Z-K}}return $}function JU(J,Q){let $=QU(J,Q);if(!$)return Q;let Z=WX($,J);return v8(Z,Z.next),v8($,$.next)}function QU(J,Q){let $=Q,Z=J.x,K=J.y,W=-1/0,X;if(D7(J,$))return $;do{if(D7(J,$.next))return $.next;else if(K<=$.y&&K>=$.next.y&&$.next.y!==$.y){let G=$.x+(K-$.y)*($.next.x-$.x)/($.next.y-$.y);if(G<=Z&&G>W){if(W=G,X=$.x<$.next.x?$:$.next,G===Z)return X}}$=$.next}while($!==Q);if(!X)return null;let Y=X,U=X.x,H=X.y,N=1/0;$=X;do{if(Z>=$.x&&$.x>=U&&Z!==$.x&&ZX(K<H?Z:W,K,U,H,K<H?W:Z,K,$.x,$.y)){let G=Math.abs(K-$.y)/(Z-$.x);if(r7($,J)&&(G<N||G===N&&($.x>X.x||$.x===X.x&&$U(X,$))))X=$,N=G}$=$.next}while($!==Y);return X}function $U(J,Q){return PJ(J.prev,J,Q.prev)<0&&PJ(Q.next,J,J.next)<0}function ZU(J,Q,$,Z){let K=J;do{if(K.z===0)K.z=L$(K.x,K.y,Q,$,Z);K.prevZ=K.prev,K.nextZ=K.next,K=K.next}while(K!==J);K.prevZ.nextZ=null,K.prevZ=null,KU(K)}function KU(J){let Q,$=1;do{let Z=J,K;J=null;let W=null;Q=0;while(Z){Q++;let X=Z,Y=0;for(let H=0;H<$;H++)if(Y++,X=X.nextZ,!X)break;let U=$;while(Y>0||U>0&&X){if(Y!==0&&(U===0||!X||Z.z<=X.z))K=Z,Z=Z.nextZ,Y--;else K=X,X=X.nextZ,U--;if(W)W.nextZ=K;else J=K;K.prevZ=W,W=K}Z=X}W.nextZ=null,$*=2}while(Q>1);return J}function L$(J,Q,$,Z,K){return J=(J-$)*K|0,Q=(Q-Z)*K|0,J=(J|J<<8)&16711935,J=(J|J<<4)&252645135,J=(J|J<<2)&858993459,J=(J|J<<1)&1431655765,Q=(Q|Q<<8)&16711935,Q=(Q|Q<<4)&252645135,Q=(Q|Q<<2)&858993459,Q=(Q|Q<<1)&1431655765,J|Q<<1}function WU(J){let Q=J,$=J;do{if(Q.x<$.x||Q.x===$.x&&Q.y<$.y)$=Q;Q=Q.next}while(Q!==J);return $}function ZX(J,Q,$,Z,K,W,X,Y){return(K-X)*(Q-Y)>=(J-X)*(W-Y)&&(J-X)*(Z-Y)>=($-X)*(Q-Y)&&($-X)*(W-Y)>=(K-X)*(Z-Y)}function s7(J,Q,$,Z,K,W,X,Y){return!(J===X&&Q===Y)&&ZX(J,Q,$,Z,K,W,X,Y)}function XU(J,Q){return J.next.i!==Q.i&&J.prev.i!==Q.i&&!YU(J,Q)&&(r7(J,Q)&&r7(Q,J)&&UU(J,Q)&&(PJ(J.prev,J,Q.prev)||PJ(J,Q.prev,Q))||D7(J,Q)&&PJ(J.prev,J,J.next)>0&&PJ(Q.prev,Q,Q.next)>0)}function PJ(J,Q,$){return(Q.y-J.y)*($.x-Q.x)-(Q.x-J.x)*($.y-Q.y)}function D7(J,Q){return J.x===Q.x&&J.y===Q.y}function KX(J,Q,$,Z){let K=o6(PJ(J,Q,$)),W=o6(PJ(J,Q,Z)),X=o6(PJ($,Z,J)),Y=o6(PJ($,Z,Q));if(K!==W&&X!==Y)return!0;if(K===0&&i6(J,$,Q))return!0;if(W===0&&i6(J,Z,Q))return!0;if(X===0&&i6($,J,Z))return!0;if(Y===0&&i6($,Q,Z))return!0;return!1}function i6(J,Q,$){return Q.x<=Math.max(J.x,$.x)&&Q.x>=Math.min(J.x,$.x)&&Q.y<=Math.max(J.y,$.y)&&Q.y>=Math.min(J.y,$.y)}function o6(J){return J>0?1:J<0?-1:0}function YU(J,Q){let $=J;do{if($.i!==J.i&&$.next.i!==J.i&&$.i!==Q.i&&$.next.i!==Q.i&&KX($,$.next,J,Q))return!0;$=$.next}while($!==J);return!1}function r7(J,Q){return PJ(J.prev,J,J.next)<0?PJ(J,Q,J.next)>=0&&PJ(J,J.prev,Q)>=0:PJ(J,Q,J.prev)<0||PJ(J,J.next,Q)<0}function UU(J,Q){let $=J,Z=!1,K=(J.x+Q.x)/2,W=(J.y+Q.y)/2;do{if($.y>W!==$.next.y>W&&$.next.y!==$.y&&K<($.next.x-$.x)*(W-$.y)/($.next.y-$.y)+$.x)Z=!Z;$=$.next}while($!==J);return Z}function WX(J,Q){let $=z$(J.i,J.x,J.y),Z=z$(Q.i,Q.x,Q.y),K=J.next,W=Q.prev;return J.next=Q,Q.prev=J,$.next=K,K.prev=$,Z.next=$,$.prev=Z,W.next=Z,Z.prev=W,Z}function uK(J,Q,$,Z){let K=z$(J,Q,$);if(!Z)K.prev=K,K.next=K;else K.next=Z.next,K.prev=Z,Z.next.prev=K,Z.next=K;return K}function t7(J){if(J.next.prev=J.prev,J.prev.next=J.next,J.prevZ)J.prevZ.nextZ=J.nextZ;if(J.nextZ)J.nextZ.prevZ=J.prevZ}function z$(J,Q,$){return{i:J,x:Q,y:$,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function HU(J,Q,$,Z){let K=0;for(let W=Q,X=$-Z;W<$;W+=Z)K+=(J[X]-J[W])*(J[W+1]+J[X+1]),X=W;return K}class XX{static triangulate(J,Q,$=2){return sY(J,Q,$)}}class S8{static area(J){let Q=J.length,$=0;for(let Z=Q-1,K=0;K<Q;Z=K++)$+=J[Z].x*J[K].y-J[K].x*J[Z].y;return $*0.5}static isClockWise(J){return S8.area(J)<0}static triangulateShape(J,Q){let $=[],Z=[],K=[];cK(J),nK($,J);let W=J.length;Q.forEach(cK);for(let Y=0;Y<Q.length;Y++)Z.push(W),W+=Q[Y].length,nK($,Q[Y]);let X=XX.triangulate($,Z);for(let Y=0;Y<X.length;Y+=3)K.push(X.slice(Y,Y+3));return K}}function cK(J){let Q=J.length;if(Q>2&&J[Q-1].equals(J[0]))J.pop()}function nK(J,Q){for(let $=0;$<Q.length;$++)J.push(Q[$].x),J.push(Q[$].y)}class N6 extends R9{constructor(J=new q6([new D0(0.5,0.5),new D0(-0.5,0.5),new D0(-0.5,-0.5),new D0(0.5,-0.5)]),Q={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:J,options:Q},J=Array.isArray(J)?J:[J];let $=this,Z=[],K=[];for(let X=0,Y=J.length;X<Y;X++){let U=J[X];W(U)}this.setAttribute("position",new sJ(Z,3)),this.setAttribute("uv",new sJ(K,2)),this.computeVertexNormals();function W(X){let Y=[],U=Q.curveSegments!==void 0?Q.curveSegments:12,H=Q.steps!==void 0?Q.steps:1,N=Q.depth!==void 0?Q.depth:1,G=Q.bevelEnabled!==void 0?Q.bevelEnabled:!0,q=Q.bevelThickness!==void 0?Q.bevelThickness:0.2,F=Q.bevelSize!==void 0?Q.bevelSize:q-0.1,k=Q.bevelOffset!==void 0?Q.bevelOffset:0,I=Q.bevelSegments!==void 0?Q.bevelSegments:3,O=Q.extrudePath,E=Q.UVGenerator!==void 0?Q.UVGenerator:qU,C,P=!1,L,A,w,_;if(O){C=O.getSpacedPoints(H),P=!0,G=!1;let t=O.isCatmullRomCurve3?O.closed:!1;L=O.computeFrenetFrames(H,t),A=new j,w=new j,_=new j}if(!G)I=0,q=0,F=0,k=0;let V=X.extractPoints(U),M=V.shape,m=V.holes;if(!S8.isClockWise(M)){M=M.reverse();for(let t=0,Z0=m.length;t<Z0;t++){let J0=m[t];if(S8.isClockWise(J0))m[t]=J0.reverse()}}function p(t){let L0=t[0];for(let A0=1;A0<=t.length;A0++){let v0=A0%t.length,b0=t[v0],n0=b0.x-L0.x,c0=b0.y-L0.y,T=n0*n0+c0*c0,NJ=Math.max(Math.abs(b0.x),Math.abs(b0.y),Math.abs(L0.x),Math.abs(L0.y)),a0=0.000000000000000000010000000000000001*NJ*NJ;if(T<=a0){t.splice(v0,1),A0--;continue}L0=b0}}p(M),m.forEach(p);let i=m.length,x=M;for(let t=0;t<i;t++){let Z0=m[t];M=M.concat(Z0)}function u(t,Z0,J0){if(!Z0)p0("ExtrudeGeometry: vec does not exist");return t.clone().addScaledVector(Z0,J0)}let n=M.length;function g(t,Z0,J0){let L0,A0,v0,b0=t.x-Z0.x,n0=t.y-Z0.y,c0=J0.x-t.x,T=J0.y-t.y,NJ=b0*b0+n0*n0,a0=b0*T-n0*c0;if(Math.abs(a0)>Number.EPSILON){let r0=Math.sqrt(NJ),B=Math.sqrt(c0*c0+T*T),D=Z0.x-n0/r0,S=Z0.y+b0/r0,l=J0.x-T/B,Q0=J0.y+c0/B,X0=((l-D)*T-(Q0-S)*c0)/(b0*T-n0*c0);L0=D+b0*X0-t.x,A0=S+n0*X0-t.y;let O0=L0*L0+A0*A0;if(O0<=2)return new D0(L0,A0);else v0=Math.sqrt(O0/2)}else{let r0=!1;if(b0>Number.EPSILON){if(c0>Number.EPSILON)r0=!0}else if(b0<-Number.EPSILON){if(c0<-Number.EPSILON)r0=!0}else if(Math.sign(n0)===Math.sign(T))r0=!0;if(r0)L0=-n0,A0=b0,v0=Math.sqrt(NJ);else L0=b0,A0=n0,v0=Math.sqrt(NJ/2)}return new D0(L0/v0,A0/v0)}let e=[];for(let t=0,Z0=x.length,J0=Z0-1,L0=t+1;t<Z0;t++,J0++,L0++){if(J0===Z0)J0=0;if(L0===Z0)L0=0;e[t]=g(x[t],x[J0],x[L0])}let K0=[],Y0,P0=e.concat();for(let t=0,Z0=i;t<Z0;t++){let J0=m[t];Y0=[];for(let L0=0,A0=J0.length,v0=A0-1,b0=L0+1;L0<A0;L0++,v0++,b0++){if(v0===A0)v0=0;if(b0===A0)b0=0;Y0[L0]=g(J0[L0],J0[v0],J0[b0])}K0.push(Y0),P0=P0.concat(Y0)}let k0;if(I===0)k0=S8.triangulateShape(x,m);else{let t=[],Z0=[];for(let J0=0;J0<I;J0++){let L0=J0/I,A0=q*Math.cos(L0*Math.PI/2),v0=F*Math.sin(L0*Math.PI/2)+k;for(let b0=0,n0=x.length;b0<n0;b0++){let c0=u(x[b0],e[b0],v0);if(N0(c0.x,c0.y,-A0),L0===0)t.push(c0)}for(let b0=0,n0=i;b0<n0;b0++){let c0=m[b0];Y0=K0[b0];let T=[];for(let NJ=0,a0=c0.length;NJ<a0;NJ++){let r0=u(c0[NJ],Y0[NJ],v0);if(N0(r0.x,r0.y,-A0),L0===0)T.push(r0)}if(L0===0)Z0.push(T)}}k0=S8.triangulateShape(t,Z0)}let UJ=k0.length,XJ=F+k;for(let t=0;t<n;t++){let Z0=G?u(M[t],P0[t],XJ):M[t];if(!P)N0(Z0.x,Z0.y,0);else w.copy(L.normals[0]).multiplyScalar(Z0.x),A.copy(L.binormals[0]).multiplyScalar(Z0.y),_.copy(C[0]).add(w).add(A),N0(_.x,_.y,_.z)}for(let t=1;t<=H;t++)for(let Z0=0;Z0<n;Z0++){let J0=G?u(M[Z0],P0[Z0],XJ):M[Z0];if(!P)N0(J0.x,J0.y,N/H*t);else w.copy(L.normals[t]).multiplyScalar(J0.x),A.copy(L.binormals[t]).multiplyScalar(J0.y),_.copy(C[t]).add(w).add(A),N0(_.x,_.y,_.z)}for(let t=I-1;t>=0;t--){let Z0=t/I,J0=q*Math.cos(Z0*Math.PI/2),L0=F*Math.sin(Z0*Math.PI/2)+k;for(let A0=0,v0=x.length;A0<v0;A0++){let b0=u(x[A0],e[A0],L0);N0(b0.x,b0.y,N+J0)}for(let A0=0,v0=m.length;A0<v0;A0++){let b0=m[A0];Y0=K0[A0];for(let n0=0,c0=b0.length;n0<c0;n0++){let T=u(b0[n0],Y0[n0],L0);if(!P)N0(T.x,T.y,N+J0);else N0(T.x,T.y+C[H-1].y,C[H-1].x+J0)}}}o(),U0();function o(){let t=Z.length/3;if(G){let Z0=0,J0=n*Z0;for(let L0=0;L0<UJ;L0++){let A0=k0[L0];y0(A0[2]+J0,A0[1]+J0,A0[0]+J0)}Z0=H+I*2,J0=n*Z0;for(let L0=0;L0<UJ;L0++){let A0=k0[L0];y0(A0[0]+J0,A0[1]+J0,A0[2]+J0)}}else{for(let Z0=0;Z0<UJ;Z0++){let J0=k0[Z0];y0(J0[2],J0[1],J0[0])}for(let Z0=0;Z0<UJ;Z0++){let J0=k0[Z0];y0(J0[0]+n*H,J0[1]+n*H,J0[2]+n*H)}}$.addGroup(t,Z.length/3-t,0)}function U0(){let t=Z.length/3,Z0=0;V0(x,Z0),Z0+=x.length;for(let J0=0,L0=m.length;J0<L0;J0++){let A0=m[J0];V0(A0,Z0),Z0+=A0.length}$.addGroup(t,Z.length/3-t,1)}function V0(t,Z0){let J0=t.length;while(--J0>=0){let L0=J0,A0=J0-1;if(A0<0)A0=t.length-1;for(let v0=0,b0=H+I*2;v0<b0;v0++){let n0=n*v0,c0=n*(v0+1),T=Z0+L0+n0,NJ=Z0+A0+n0,a0=Z0+A0+c0,r0=Z0+L0+c0;JJ(T,NJ,a0,r0)}}}function N0(t,Z0,J0){Y.push(t),Y.push(Z0),Y.push(J0)}function y0(t,Z0,J0){l0(t),l0(Z0),l0(J0);let L0=Z.length/3,A0=E.generateTopUV($,Z,L0-3,L0-2,L0-1);u0(A0[0]),u0(A0[1]),u0(A0[2])}function JJ(t,Z0,J0,L0){l0(t),l0(Z0),l0(L0),l0(Z0),l0(J0),l0(L0);let A0=Z.length/3,v0=E.generateSideWallUV($,Z,A0-6,A0-3,A0-2,A0-1);u0(v0[0]),u0(v0[1]),u0(v0[3]),u0(v0[1]),u0(v0[2]),u0(v0[3])}function l0(t){Z.push(Y[t*3+0]),Z.push(Y[t*3+1]),Z.push(Y[t*3+2])}function u0(t){K.push(t.x),K.push(t.y)}}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON(),Q=this.parameters.shapes,$=this.parameters.options;return NU(Q,$,J)}static fromJSON(J,Q){let $=[];for(let K=0,W=J.shapes.length;K<W;K++){let X=Q[J.shapes[K]];$.push(X)}let Z=J.options.extrudePath;if(Z!==void 0)J.options.extrudePath=new V$[Z.type]().fromJSON(Z);return new N6($,J.options)}}var qU={generateTopUV:function(J,Q,$,Z,K){let W=Q[$*3],X=Q[$*3+1],Y=Q[Z*3],U=Q[Z*3+1],H=Q[K*3],N=Q[K*3+1];return[new D0(W,X),new D0(Y,U),new D0(H,N)]},generateSideWallUV:function(J,Q,$,Z,K,W){let X=Q[$*3],Y=Q[$*3+1],U=Q[$*3+2],H=Q[Z*3],N=Q[Z*3+1],G=Q[Z*3+2],q=Q[K*3],F=Q[K*3+1],k=Q[K*3+2],I=Q[W*3],O=Q[W*3+1],E=Q[W*3+2];if(Math.abs(Y-N)<Math.abs(X-H))return[new D0(X,1-U),new D0(H,1-G),new D0(q,1-k),new D0(I,1-E)];else return[new D0(Y,1-U),new D0(N,1-G),new D0(F,1-k),new D0(O,1-E)]}};function NU(J,Q,$){if($.shapes=[],Array.isArray(J))for(let Z=0,K=J.length;Z<K;Z++){let W=J[Z];$.shapes.push(W.uuid)}else $.shapes.push(J.uuid);if($.options=Object.assign({},Q),Q.extrudePath!==void 0)$.options.extrudePath=Q.extrudePath.toJSON();return $}class oJ extends R9{constructor(J=1,Q=1,$=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:Z};let K=J/2,W=Q/2,X=Math.floor($),Y=Math.floor(Z),U=X+1,H=Y+1,N=J/X,G=Q/Y,q=[],F=[],k=[],I=[];for(let O=0;O<H;O++){let E=O*G-W;for(let C=0;C<U;C++){let P=C*N-K;F.push(P,-E,0),k.push(0,0,1),I.push(C/X),I.push(1-O/Y)}}for(let O=0;O<Y;O++)for(let E=0;E<X;E++){let C=E+U*O,P=E+U*(O+1),L=E+1+U*(O+1),A=E+1+U*O;q.push(C,P,A),q.push(P,L,A)}this.setIndex(q),this.setAttribute("position",new sJ(F,3)),this.setAttribute("normal",new sJ(k,3)),this.setAttribute("uv",new sJ(I,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new oJ(J.width,J.height,J.widthSegments,J.heightSegments)}}function p8(J){let Q={};for(let $ in J){Q[$]={};for(let Z in J[$]){let K=J[$][Z];if(sK(K))if(K.isRenderTargetTexture)m0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][Z]=null;else Q[$][Z]=K.clone();else if(Array.isArray(K))if(sK(K[0])){let W=[];for(let X=0,Y=K.length;X<Y;X++)W[X]=K[X].clone();Q[$][Z]=W}else Q[$][Z]=K.slice();else Q[$][Z]=K}}return Q}function aJ(J){let Q={};for(let $=0;$<J.length;$++){let Z=p8(J[$]);for(let K in Z)Q[K]=Z[K]}return Q}function sK(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function GU(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function vZ(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return WJ.workingColorSpace}var YX={clone:p8,merge:aJ},FU=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,OU=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class L9 extends D8{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=FU,this.fragmentShader=OU,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=p8(J.uniforms),this.uniformsGroups=GU(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let Z in this.uniforms){let W=this.uniforms[Z].value;if(W&&W.isTexture)Q.uniforms[Z]={type:"t",value:W.toJSON(J).uuid};else if(W&&W.isColor)Q.uniforms[Z]={type:"c",value:W.getHex()};else if(W&&W.isVector2)Q.uniforms[Z]={type:"v2",value:W.toArray()};else if(W&&W.isVector3)Q.uniforms[Z]={type:"v3",value:W.toArray()};else if(W&&W.isVector4)Q.uniforms[Z]={type:"v4",value:W.toArray()};else if(W&&W.isMatrix3)Q.uniforms[Z]={type:"m3",value:W.toArray()};else if(W&&W.isMatrix4)Q.uniforms[Z]={type:"m4",value:W.toArray()};else Q.uniforms[Z]={value:W}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let Z in this.extensions)if(this.extensions[Z]===!0)$[Z]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}fromJSON(J,Q){if(super.fromJSON(J,Q),J.uniforms!==void 0)for(let $ in J.uniforms){let Z=J.uniforms[$];switch(this.uniforms[$]={},Z.type){case"t":this.uniforms[$].value=Q[Z.value]||null;break;case"c":this.uniforms[$].value=new QJ().setHex(Z.value);break;case"v2":this.uniforms[$].value=new D0().fromArray(Z.value);break;case"v3":this.uniforms[$].value=new j().fromArray(Z.value);break;case"v4":this.uniforms[$].value=new IJ().fromArray(Z.value);break;case"m3":this.uniforms[$].value=new o0().fromArray(Z.value);break;case"m4":this.uniforms[$].value=new RJ().fromArray(Z.value);break;default:this.uniforms[$].value=Z.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let $ in J.extensions)this.extensions[$]=J.extensions[$];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class fZ extends L9{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class mJ extends D8{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new QJ(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new QJ(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new D0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new E9,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class wQ extends D8{constructor(J){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new QJ(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new QJ(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new D0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new E9,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.envMapIntensity=J.envMapIntensity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class yZ extends D8{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class bZ extends D8{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function a6(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}class m8{constructor(J,Q,$,Z){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,Z=Q[$],K=Q[$-1];$:{J:{let W;Q:{Z:if(!(J<Z)){for(let X=$+2;;){if(Z===void 0){if(J<K)break Z;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===X)break;if(K=Z,Z=Q[++$],J<Z)break J}W=Q.length;break Q}if(!(J>=K)){let X=Q[1];if(J<X)$=2,K=X;for(let Y=$-2;;){if(K===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===Y)break;if(Z=K,K=Q[--$-1],J>=K)break J}W=$,$=0;break Q}break $}while($<W){let X=$+W>>>1;if(J<Q[X])W=X;else $=X+1}if(Z=Q[$],K=Q[$-1],K===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,K,Z)}return this.interpolate_($,K,J,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,K=J*Z;for(let W=0;W!==Z;++W)Q[W]=$[K+W];return Q}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class hZ extends m8{constructor(J,Q,$,Z){super(J,Q,$,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let Z=this.parameterPositions,K=J-2,W=J+1,X=Z[K],Y=Z[W];if(X===void 0)switch(this.getSettings_().endingStart){case 2401:K=J,X=2*Q-$;break;case 2402:K=Z.length-2,X=Q+Z[K]-Z[K+1];break;default:K=J,X=$}if(Y===void 0)switch(this.getSettings_().endingEnd){case 2401:W=J,Y=2*$-Q;break;case 2402:W=1,Y=$+Z[1]-Z[0];break;default:W=J-1,Y=Q}let U=($-Q)*0.5,H=this.valueSize;this._weightPrev=U/(Q-X),this._weightNext=U/(Y-$),this._offsetPrev=K*H,this._offsetNext=W*H}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,U=Y-X,H=this._offsetPrev,N=this._offsetNext,G=this._weightPrev,q=this._weightNext,F=($-Q)/(Z-Q),k=F*F,I=k*F,O=-G*I+2*G*k-G*F,E=(1+G)*I+(-1.5-2*G)*k+(-0.5+G)*F+1,C=(-1-q)*I+(1.5+q)*k+0.5*F,P=q*I-q*k;for(let L=0;L!==X;++L)K[L]=O*W[H+L]+E*W[U+L]+C*W[Y+L]+P*W[N+L];return K}}class xZ extends m8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,U=Y-X,H=($-Q)/(Z-Q),N=1-H;for(let G=0;G!==X;++G)K[G]=W[U+G]*N+W[Y+G]*H;return K}}class gZ extends m8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J){return this.copySampleValue_(J-1)}}class pZ extends m8{interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,U=Y-X,H=this.inTangents,N=this.outTangents;if(!H||!N){let F=($-Q)/(Z-Q),k=1-F;for(let I=0;I!==X;++I)K[I]=W[U+I]*k+W[Y+I]*F;return K}let G=X*2,q=J-1;for(let F=0;F!==X;++F){let k=W[U+F],I=W[Y+F],O=q*G+F*2,E=N[O],C=N[O+1],P=J*G+F*2,L=H[P],A=H[P+1],w=($-Q)/(Z-Q),_,V,M,m,R;for(let p=0;p<8;p++){_=w*w,V=_*w,M=1-w,m=M*M,R=m*M;let x=R*Q+3*m*w*E+3*M*_*L+V*Z-$;if(Math.abs(x)<0.0000000001)break;let u=3*m*(E-Q)+6*M*w*(L-E)+3*_*(Z-L);if(Math.abs(u)<0.0000000001)break;w=w-x/u,w=Math.max(0,Math.min(1,w))}K[F]=R*k+3*m*w*C+3*M*_*A+V*I}return K}}class z9{constructor(J,Q,$,Z){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=a6(Q,this.TimeBufferType),this.values=a6($,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:a6(J.times,Array),values:a6(J.values,Array)};let Z=J.getInterpolation();if(Z!==J.DefaultInterpolation)$.interpolation=Z}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new gZ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new xZ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new hZ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new pZ(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.inTangents=this.settings.inTangents,Q.outTangents=this.settings.outTangents;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return m0("KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]*=J}return this}trim(J,Q){let $=this.times,Z=$.length,K=0,W=Z-1;while(K!==Z&&$[K]<J)++K;while(W!==-1&&$[W]>Q)--W;if(++W,K!==0||W!==Z){if(K>=W)W=Math.max(W,1),K=W-1;let X=this.getValueSize();this.times=$.slice(K,W),this.values=this.values.slice(K*X,W*X)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)p0("KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,Z=this.values,K=$.length;if(K===0)p0("KeyframeTrack: Track is empty.",this),J=!1;let W=null;for(let X=0;X!==K;X++){let Y=$[X];if(typeof Y==="number"&&isNaN(Y)){p0("KeyframeTrack: Time is not a valid number.",this,X,Y),J=!1;break}if(W!==null&&W>Y){p0("KeyframeTrack: Out of order keys.",this,X,Y,W),J=!1;break}W=Y}if(Z!==void 0){if(VY(Z))for(let X=0,Y=Z.length;X!==Y;++X){let U=Z[X];if(isNaN(U)){p0("KeyframeTrack: Value is not a valid number.",this,X,U),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),Z=this.getInterpolation()===2302,K=J.length-1,W=1;for(let X=1;X<K;++X){let Y=!1,U=J[X],H=J[X+1];if(U!==H&&(X!==1||U!==J[0]))if(!Z){let N=X*$,G=N-$,q=N+$;for(let F=0;F!==$;++F){let k=Q[N+F];if(k!==Q[G+F]||k!==Q[q+F]){Y=!0;break}}}else Y=!0;if(Y){if(X!==W){J[W]=J[X];let N=X*$,G=W*$;for(let q=0;q!==$;++q)Q[G+q]=Q[N+q]}++W}}if(K>0){J[W]=J[K];for(let X=K*$,Y=W*$,U=0;U!==$;++U)Q[Y+U]=Q[X+U];++W}if(W!==J.length)this.times=J.slice(0,W),this.values=Q.slice(0,W*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),Z=new this.constructor(this.name,J,Q);return Z.createInterpolant=this.createInterpolant,Z}}z9.prototype.ValueTypeName="";z9.prototype.TimeBufferType=Float32Array;z9.prototype.ValueBufferType=Float32Array;z9.prototype.DefaultInterpolation=2301;class l8 extends z9{constructor(J,Q,$){super(J,Q,$)}}l8.prototype.ValueTypeName="bool";l8.prototype.ValueBufferType=Array;l8.prototype.DefaultInterpolation=2300;l8.prototype.InterpolantFactoryMethodLinear=void 0;l8.prototype.InterpolantFactoryMethodSmooth=void 0;class mZ extends z9{constructor(J,Q,$,Z){super(J,Q,$,Z)}}mZ.prototype.ValueTypeName="color";class lZ extends z9{constructor(J,Q,$,Z){super(J,Q,$,Z)}}lZ.prototype.ValueTypeName="number";class dZ extends m8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=($-Q)/(Z-Q),U=J*X;for(let H=U+X;U!==H;U+=4)D9.slerpFlat(K,0,W,U-X,W,U,Y);return K}}class _Q extends z9{constructor(J,Q,$,Z){super(J,Q,$,Z)}InterpolantFactoryMethodLinear(J){return new dZ(this.times,this.values,this.getValueSize(),J)}}_Q.prototype.ValueTypeName="quaternion";_Q.prototype.InterpolantFactoryMethodSmooth=void 0;class d8 extends z9{constructor(J,Q,$){super(J,Q,$)}}d8.prototype.ValueTypeName="string";d8.prototype.ValueBufferType=Array;d8.prototype.DefaultInterpolation=2300;d8.prototype.InterpolantFactoryMethodLinear=void 0;d8.prototype.InterpolantFactoryMethodSmooth=void 0;class uZ extends z9{constructor(J,Q,$,Z){super(J,Q,$,Z)}}uZ.prototype.ValueTypeName="vector";var e6={enabled:!1,files:{},add:function(J,Q){if(this.enabled===!1)return;if(iK(J))return;this.files[J]=Q},get:function(J){if(this.enabled===!1)return;if(iK(J))return;return this.files[J]},remove:function(J){delete this.files[J]},clear:function(){this.files={}}};function iK(J){try{let Q=J.slice(J.indexOf(":")+1);return new URL(Q).protocol==="blob:"}catch(Q){return!1}}class cZ{constructor(J,Q,$){let Z=this,K=!1,W=0,X=0,Y=void 0,U=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this._abortController=null,this.itemStart=function(H){if(X++,K===!1){if(Z.onStart!==void 0)Z.onStart(H,W,X)}K=!0},this.itemEnd=function(H){if(W++,Z.onProgress!==void 0)Z.onProgress(H,W,X);if(W===X){if(K=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(H){if(Z.onError!==void 0)Z.onError(H)},this.resolveURL=function(H){if(H=H.normalize("NFC"),Y)return Y(H);return H},this.setURLModifier=function(H){return Y=H,this},this.addHandler=function(H,N){return U.push(H,N),this},this.removeHandler=function(H){let N=U.indexOf(H);if(N!==-1)U.splice(N,2);return this},this.getHandler=function(H){for(let N=0,G=U.length;N<G;N+=2){let q=U[N],F=U[N+1];if(q.global)q.lastIndex=0;if(q.test(H))return F}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var UX=new cZ;class G6{constructor(J){if(this.manager=J!==void 0?J:UX,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let $=this;return new Promise(function(Z,K){$.load(J,Z,Q,K)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}G6.DEFAULT_MATERIAL_NAME="__DEFAULT";var q7=new WeakMap;class nZ extends G6{constructor(J){super(J)}load(J,Q,$,Z){if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let K=this,W=e6.get(`image:${J}`);if(W!==void 0){if(W.complete===!0)K.manager.itemStart(J),setTimeout(function(){if(Q)Q(W);K.manager.itemEnd(J)},0);else{let N=q7.get(W);if(N===void 0)N=[],q7.set(W,N);N.push({onLoad:Q,onError:Z})}return W}let X=O7("img");function Y(){if(H(),Q)Q(this);let N=q7.get(this)||[];for(let G=0;G<N.length;G++){let q=N[G];if(q.onLoad)q.onLoad(this)}q7.delete(this),K.manager.itemEnd(J)}function U(N){if(H(),Z)Z(N);e6.remove(`image:${J}`);let G=q7.get(this)||[];for(let q=0;q<G.length;q++){let F=G[q];if(F.onError)F.onError(N)}q7.delete(this),K.manager.itemError(J),K.manager.itemEnd(J)}function H(){X.removeEventListener("load",Y,!1),X.removeEventListener("error",U,!1)}if(X.addEventListener("load",Y,!1),X.addEventListener("error",U,!1),J.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)X.crossOrigin=this.crossOrigin}return e6.add(`image:${J}`,X),K.manager.itemStart(J),X.src=J,X}}class CQ extends G6{constructor(J){super(J)}load(J,Q,$,Z){let K=new gJ,W=new nZ(this.manager);return W.setCrossOrigin(this.crossOrigin),W.setPath(this.path),W.load(J,function(X){if(K.image=X,K.needsUpdate=!0,Q!==void 0)Q(K)},$,Z),K}}class TQ extends SJ{constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new QJ(J),this.intensity=Q}dispose(){this.dispatchEvent({type:"dispose"})}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);return Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,Q}}var R$=new RJ,oK=new j,aK=new j;class sZ{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new D0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new RJ,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new U6,this._frameExtents=new D0(1,1),this._viewportCount=1,this._viewports=[new IJ(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera,$=this.matrix;if(oK.setFromMatrixPosition(J.matrixWorld),Q.position.copy(oK),aK.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(aK),Q.updateMatrixWorld(),R$.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),this._frustum.setFromProjectionMatrix(R$,Q.coordinateSystem,Q.reversedDepth),Q.coordinateSystem===2001||Q.reversedDepth)$.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,1,0,0,0,0,1);else $.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1);$.multiply(R$)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this.biasNode=J.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};if(this.intensity!==1)J.intensity=this.intensity;if(this.bias!==0)J.bias=this.bias;if(this.normalBias!==0)J.normalBias=this.normalBias;if(this.radius!==1)J.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)J.mapSize=this.mapSize.toArray();return J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var r6=new j,t6=new D9,y9=new j;class SQ extends SJ{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new RJ,this.projectionMatrix=new RJ,this.projectionMatrixInverse=new RJ,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(r6,t6,y9),y9.x===1&&y9.y===1&&y9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(r6,t6,y9.set(1,1,1)).invert()}updateWorldMatrix(J,Q,$=!1){if(super.updateWorldMatrix(J,Q,$),this.matrixWorld.decompose(r6,t6,y9),y9.x===1&&y9.y===1&&y9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(r6,t6,y9.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var F8=new j,rK=new D0,tK=new D0;class nJ extends SQ{constructor(J=50,Q=1,$=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=Z,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=JQ*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(nQ*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return JQ*2*Math.atan(Math.tan(nQ*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){F8.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(F8.x,F8.y).multiplyScalar(-J/F8.z),F8.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(F8.x,F8.y).multiplyScalar(-J/F8.z)}getViewSize(J,Q){return this.getViewBounds(J,rK,tK),Q.subVectors(tK,rK)}setViewOffset(J,Q,$,Z,K,W){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=K,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(nQ*0.5*this.fov)/this.zoom,$=2*Q,Z=this.aspect*$,K=-0.5*Z,W=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Y,fullHeight:U}=W;K+=W.offsetX*Z/Y,Q-=W.offsetY*$/U,Z*=W.width/Y,$*=W.height/U}let X=this.filmOffset;if(X!==0)K+=J*X/this.getFilmWidth();this.projectionMatrix.makePerspective(K,K+Z,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class HX extends sZ{constructor(){super(new nJ(90,1,0.5,500));this.isPointLightShadow=!0}}class jQ extends TQ{constructor(J,Q,$=0,Z=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=$,this.decay=Z,this.shadow=new HX}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.distance=this.distance,Q.object.decay=this.decay,Q.object.shadow=this.shadow.toJSON(),Q}}class F6 extends SQ{constructor(J=-1,Q=1,$=1,Z=-1,K=0.1,W=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=Z,this.near=K,this.far=W,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,Z,K,W){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=K,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,K=$-J,W=$+J,X=Z+Q,Y=Z-Q;if(this.view!==null&&this.view.enabled){let U=(this.right-this.left)/this.view.fullWidth/this.zoom,H=(this.top-this.bottom)/this.view.fullHeight/this.zoom;K+=U*this.view.offsetX,W=K+U*this.view.width,X-=H*this.view.offsetY,Y=X-H*this.view.height}this.projectionMatrix.makeOrthographic(K,W,X,Y,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class qX extends sZ{constructor(){super(new F6(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class A7 extends TQ{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(SJ.DEFAULT_UP),this.updateMatrix(),this.target=new SJ,this.shadow=new qX}dispose(){super.dispose(),this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.shadow=this.shadow.toJSON(),Q.object.target=this.target.uuid,Q}}var N7=-90,G7=1;class iZ extends SJ{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new nJ(N7,G7,J,Q);Z.layers=this.layers,this.add(Z);let K=new nJ(N7,G7,J,Q);K.layers=this.layers,this.add(K);let W=new nJ(N7,G7,J,Q);W.layers=this.layers,this.add(W);let X=new nJ(N7,G7,J,Q);X.layers=this.layers,this.add(X);let Y=new nJ(N7,G7,J,Q);Y.layers=this.layers,this.add(Y);let U=new nJ(N7,G7,J,Q);U.layers=this.layers,this.add(U)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,Z,K,W,X,Y]=Q;for(let U of Q)this.remove(U);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),K.up.set(0,0,-1),K.lookAt(0,1,0),W.up.set(0,0,1),W.lookAt(0,-1,0),X.up.set(0,1,0),X.lookAt(0,0,1),Y.up.set(0,1,0),Y.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),K.up.set(0,0,1),K.lookAt(0,1,0),W.up.set(0,0,-1),W.lookAt(0,-1,0),X.up.set(0,-1,0),X.lookAt(0,0,1),Y.up.set(0,-1,0),Y.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let U of Q)this.add(U),U.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[K,W,X,Y,U,H]=this.children,N=J.getRenderTarget(),G=J.getActiveCubeFace(),q=J.getActiveMipmapLevel(),F=J.xr.enabled;J.xr.enabled=!1;let k=$.texture.generateMipmaps;$.texture.generateMipmaps=!1;let I=!1;if(J.isWebGLRenderer===!0)I=J.state.buffers.depth.getReversed();else I=J.reversedDepthBuffer;if(J.setRenderTarget($,0,Z),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,K),J.setRenderTarget($,1,Z),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,W),J.setRenderTarget($,2,Z),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,X),J.setRenderTarget($,3,Z),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),J.setRenderTarget($,4,Z),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,U),$.texture.generateMipmaps=k,J.setRenderTarget($,5,Z),I&&J.autoClear===!1)J.clearDepth();J.render(Q,H),J.setRenderTarget(N,G,q),J.xr.enabled=F,$.texture.needsPMREMUpdate=!0}}class oZ extends nJ{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}var aZ="\\[\\]\\.:\\/",EU=new RegExp("["+aZ+"]","g"),rZ="[^"+aZ+"]",DU="[^"+aZ.replace("\\.","")+"]",kU=/((?:WC+[\/:])*)/.source.replace("WC",rZ),RU=/(WCOD+)?/.source.replace("WCOD",DU),VU=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rZ),LU=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rZ),zU=new RegExp("^"+kU+RU+VU+LU+"$"),BU=["material","materials","bones","map"];class NX{constructor(J,Q,$){let Z=$||kJ.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,Z)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,Z=this._bindings[$];if(Z!==void 0)Z.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,K=$.length;Z!==K;++Z)$[Z].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class kJ{constructor(J,Q,$){this.path=Q,this.parsedPath=$||kJ.parseTrackName(Q),this.node=kJ.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new kJ(J,Q,$);else return new kJ.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(EU,"")}static parseTrackName(J){let Q=zU.exec(J);if(Q===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},Z=$.nodeName&&$.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let K=$.nodeName.substring(Z+1);if(BU.indexOf(K)!==-1)$.nodeName=$.nodeName.substring(0,Z),$.objectName=K}if($.propertyName===null||$.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(K){for(let W=0;W<K.length;W++){let X=K[W];if(X.name===Q||X.uuid===Q)return X;let Y=$(X.children);if(Y)return Y}return null},Z=$(J.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)J[Q++]=$[Z]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,Z=Q.propertyName,K=Q.propertyIndex;if(!J)J=kJ.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){m0("PropertyBinding: No target node found for track: "+this.path+".");return}if($){let U=Q.objectIndex;switch($){case"materials":if(!J.material){p0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){p0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){p0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let H=0;H<J.length;H++)if(J[H].name===U){U=H;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){p0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){p0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){p0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(U!==void 0){if(J[U]===void 0){p0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[U]}}let W=J[Z];if(W===void 0){let U=Q.nodeName;p0("PropertyBinding: Trying to update property for track: "+U+"."+Z+" but it wasn't found.",J);return}let X=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)X=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)X=this.Versioning.MatrixWorldNeedsUpdate;let Y=this.BindingType.Direct;if(K!==void 0){if(Z==="morphTargetInfluences"){if(!J.geometry){p0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){p0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[K]!==void 0)K=J.morphTargetDictionary[K]}Y=this.BindingType.ArrayElement,this.resolvedProperty=W,this.propertyIndex=K}else if(W.fromArray!==void 0&&W.toArray!==void 0)Y=this.BindingType.HasFromToArray,this.resolvedProperty=W;else if(Array.isArray(W))Y=this.BindingType.EntireArray,this.resolvedProperty=W;else this.propertyName=Z;this.getValue=this.GetterByBindingType[Y],this.setValue=this.SetterByBindingTypeAndVersioning[Y][X]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}kJ.Composite=NX;kJ.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};kJ.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};kJ.prototype.GetterByBindingType=[kJ.prototype._getValue_direct,kJ.prototype._getValue_array,kJ.prototype._getValue_arrayElement,kJ.prototype._getValue_toArray];kJ.prototype.SetterByBindingTypeAndVersioning=[[kJ.prototype._setValue_direct,kJ.prototype._setValue_direct_setNeedsUpdate,kJ.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[kJ.prototype._setValue_array,kJ.prototype._setValue_array_setNeedsUpdate,kJ.prototype._setValue_array_setMatrixWorldNeedsUpdate],[kJ.prototype._setValue_arrayElement,kJ.prototype._setValue_arrayElement_setNeedsUpdate,kJ.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[kJ.prototype._setValue_fromArray,kJ.prototype._setValue_fromArray_setNeedsUpdate,kJ.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var AN=new Float32Array(1);var eK=new RJ;class vQ{constructor(J,Q,$=0,Z=1/0){this.ray=new VQ(J,Q),this.near=$,this.far=Z,this.camera=null,this.layers=new X6,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(J,Q){this.ray.set(J,Q)}setFromCamera(J,Q){if(Q.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(Q.matrixWorld),this.ray.direction.set(J.x,J.y,0.5).unproject(Q).sub(this.ray.origin).normalize(),this.camera=Q;else if(Q.isOrthographicCamera)this.ray.origin.set(J.x,J.y,Q.projectionMatrix.elements[14]).unproject(Q),this.ray.direction.set(0,0,-1).transformDirection(Q.matrixWorld),this.camera=Q;else p0("Raycaster: Unsupported camera type: "+Q.type)}setFromXRController(J){return eK.identity().extractRotation(J.matrixWorld),this.ray.origin.setFromMatrixPosition(J.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(eK),this}intersectObject(J,Q=!0,$=[]){return B$(J,this,$,Q),$.sort(JW),$}intersectObjects(J,Q=!0,$=[]){for(let Z=0,K=J.length;Z<K;Z++)B$(J[Z],this,$,Q);return $.sort(JW),$}}function JW(J,Q){return J.distance-Q.distance}function B$(J,Q,$,Z){let K=!0;if(J.layers.test(Q.layers)){if(J.raycast(Q,$)===!1)K=!1}if(K===!0&&Z===!0){let W=J.children;for(let X=0,Y=W.length;X<Y;X++)B$(W[X],Q,$,!0)}}class tZ{static{tZ.prototype.isMatrix2=!0}constructor(J,Q,$,Z){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,$,Z)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let $=0;$<4;$++)this.elements[$]=J[$+Q];return this}set(J,Q,$,Z){let K=this.elements;return K[0]=J,K[2]=Q,K[1]=$,K[3]=Z,this}}function eZ(J,Q,$,Z){let K=MU(Z);switch($){case 1021:return J*Q;case 1028:return J*Q/K.components*K.byteLength;case 1029:return J*Q/K.components*K.byteLength;case 1030:return J*Q*2/K.components*K.byteLength;case 1031:return J*Q*2/K.components*K.byteLength;case 1022:return J*Q*3/K.components*K.byteLength;case 1023:return J*Q*4/K.components*K.byteLength;case 1033:return J*Q*4/K.components*K.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function MU(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));if(typeof window<"u")if(window.__THREE__)m0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="185";function fX(){let J=null,Q=!1,$=null,Z=null;function K(W,X){$(W,X),Z=J.requestAnimationFrame(K)}return{start:function(){if(Q===!0)return;if($===null)return;if(J===null)return;Z=J.requestAnimationFrame(K),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(Z);Q=!1},setAnimationLoop:function(W){$=W},setContext:function(W){J=W}}}function IU(J){let Q=new WeakMap;function $(Y,U){let{array:H,usage:N}=Y,G=H.byteLength,q=J.createBuffer();J.bindBuffer(U,q),J.bufferData(U,H,N),Y.onUploadCallback();let F;if(H instanceof Float32Array)F=J.FLOAT;else if(typeof Float16Array<"u"&&H instanceof Float16Array)F=J.HALF_FLOAT;else if(H instanceof Uint16Array)if(Y.isFloat16BufferAttribute)F=J.HALF_FLOAT;else F=J.UNSIGNED_SHORT;else if(H instanceof Int16Array)F=J.SHORT;else if(H instanceof Uint32Array)F=J.UNSIGNED_INT;else if(H instanceof Int32Array)F=J.INT;else if(H instanceof Int8Array)F=J.BYTE;else if(H instanceof Uint8Array)F=J.UNSIGNED_BYTE;else if(H instanceof Uint8ClampedArray)F=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+H);return{buffer:q,type:F,bytesPerElement:H.BYTES_PER_ELEMENT,version:Y.version,size:G}}function Z(Y,U,H){let{array:N,updateRanges:G}=U;if(J.bindBuffer(H,Y),G.length===0)J.bufferSubData(H,0,N);else{G.sort((F,k)=>F.start-k.start);let q=0;for(let F=1;F<G.length;F++){let k=G[q],I=G[F];if(I.start<=k.start+k.count+1)k.count=Math.max(k.count,I.start+I.count-k.start);else++q,G[q]=I}G.length=q+1;for(let F=0,k=G.length;F<k;F++){let I=G[F];J.bufferSubData(H,I.start*N.BYTES_PER_ELEMENT,N,I.start,I.count)}U.clearUpdateRanges()}U.onUploadCallback()}function K(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;return Q.get(Y)}function W(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;let U=Q.get(Y);if(U)J.deleteBuffer(U.buffer),Q.delete(Y)}function X(Y,U){if(Y.isInterleavedBufferAttribute)Y=Y.data;if(Y.isGLBufferAttribute){let N=Q.get(Y);if(!N||N.version<Y.version)Q.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}let H=Q.get(Y);if(H===void 0)Q.set(Y,$(Y,U));else if(H.version<Y.version){if(H.size!==Y.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(H.buffer,Y,U),H.version=Y.version}}return{get:K,remove:W,update:X}}var AU=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,PU=`#ifdef USE_ALPHAHASH
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
#endif`,wU=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_U=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CU=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,TU=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,SU=`#ifdef USE_AOMAP
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
#endif`,jU=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vU=`#ifdef USE_BATCHING
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
#endif`,fU=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yU=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bU=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hU=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xU=`#ifdef USE_IRIDESCENCE
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
#endif`,gU=`#ifdef USE_BUMPMAP
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
#endif`,pU=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dU=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uU=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,cU=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,nU=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,sU=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,iU=`#define PI 3.141592653589793
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
} // validated`,oU=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,aU=`vec3 transformedNormal = objectNormal;
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
#endif`,rU=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tU=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eU=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,JH=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,QH="gl_FragColor = linearToOutputTexel( gl_FragColor );",$H=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ZH=`#ifdef USE_ENVMAP
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
#endif`,KH=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,WH=`#ifdef USE_ENVMAP
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
#endif`,XH=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,YH=`#ifdef USE_ENVMAP
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
#endif`,UH=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,HH=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qH=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,NH=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,GH=`#ifdef USE_GRADIENTMAP
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
}`,FH=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,OH=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,EH=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,DH=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,kH=`#ifdef USE_ENVMAP
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
#endif`,RH=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,VH=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,LH=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zH=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,BH=`PhysicalMaterial material;
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
#endif`,MH=`uniform sampler2D dfgLUT;
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
}`,IH=`
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
#endif`,AH=`#if defined( RE_IndirectDiffuse )
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
#endif`,PH=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wH=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,_H=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,CH=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TH=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SH=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jH=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vH=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fH=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yH=`#if defined( USE_POINTS_UV )
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
#endif`,bH=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hH=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xH=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gH=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pH=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mH=`#ifdef USE_MORPHTARGETS
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
#endif`,lH=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dH=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,uH=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cH=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nH=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sH=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,iH=`#ifdef USE_NORMALMAP
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
#endif`,oH=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,aH=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rH=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tH=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eH=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,J5=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Q5=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$5=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Z5=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,K5=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,W5=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,X5=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Y5=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,U5=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,H5=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,q5=`float getShadowMask() {
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
}`,N5=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,G5=`#ifdef USE_SKINNING
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
#endif`,F5=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,O5=`#ifdef USE_SKINNING
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
#endif`,E5=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,D5=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,k5=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,R5=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,V5=`#ifdef USE_TRANSMISSION
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
#endif`,L5=`#ifdef USE_TRANSMISSION
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
#endif`,z5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I5=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,A5=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,P5=`uniform sampler2D t2D;
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
}`,w5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_5=`#ifdef ENVMAP_TYPE_CUBE
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
}`,C5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T5=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S5=`#include <common>
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
}`,j5=`#if DEPTH_PACKING == 3200
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
}`,v5=`#define DISTANCE
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
}`,f5=`#define DISTANCE
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
}`,y5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,b5=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h5=`uniform float scale;
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
}`,x5=`uniform vec3 diffuse;
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
}`,g5=`#include <common>
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
}`,p5=`uniform vec3 diffuse;
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
}`,m5=`#define LAMBERT
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
}`,l5=`#define LAMBERT
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
}`,d5=`#define MATCAP
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
}`,u5=`#define MATCAP
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
}`,c5=`#define NORMAL
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
}`,n5=`#define NORMAL
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
}`,s5=`#define PHONG
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
}`,i5=`#define PHONG
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
}`,o5=`#define STANDARD
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
}`,a5=`#define STANDARD
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
}`,r5=`#define TOON
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
}`,t5=`#define TOON
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
}`,e5=`uniform float size;
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
}`,Jq=`uniform vec3 diffuse;
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
}`,Qq=`#include <common>
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
}`,$q=`uniform vec3 color;
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
}`,Zq=`uniform float rotation;
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
}`,Kq=`uniform vec3 diffuse;
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
}`,e0={alphahash_fragment:AU,alphahash_pars_fragment:PU,alphamap_fragment:wU,alphamap_pars_fragment:_U,alphatest_fragment:CU,alphatest_pars_fragment:TU,aomap_fragment:SU,aomap_pars_fragment:jU,batching_pars_vertex:vU,batching_vertex:fU,begin_vertex:yU,beginnormal_vertex:bU,bsdfs:hU,iridescence_fragment:xU,bumpmap_pars_fragment:gU,clipping_planes_fragment:pU,clipping_planes_pars_fragment:mU,clipping_planes_pars_vertex:lU,clipping_planes_vertex:dU,color_fragment:uU,color_pars_fragment:cU,color_pars_vertex:nU,color_vertex:sU,common:iU,cube_uv_reflection_fragment:oU,defaultnormal_vertex:aU,displacementmap_pars_vertex:rU,displacementmap_vertex:tU,emissivemap_fragment:eU,emissivemap_pars_fragment:JH,colorspace_fragment:QH,colorspace_pars_fragment:$H,envmap_fragment:ZH,envmap_common_pars_fragment:KH,envmap_pars_fragment:WH,envmap_pars_vertex:XH,envmap_physical_pars_fragment:kH,envmap_vertex:YH,fog_vertex:UH,fog_pars_vertex:HH,fog_fragment:qH,fog_pars_fragment:NH,gradientmap_pars_fragment:GH,lightmap_pars_fragment:FH,lights_lambert_fragment:OH,lights_lambert_pars_fragment:EH,lights_pars_begin:DH,lights_toon_fragment:RH,lights_toon_pars_fragment:VH,lights_phong_fragment:LH,lights_phong_pars_fragment:zH,lights_physical_fragment:BH,lights_physical_pars_fragment:MH,lights_fragment_begin:IH,lights_fragment_maps:AH,lights_fragment_end:PH,lightprobes_pars_fragment:wH,logdepthbuf_fragment:_H,logdepthbuf_pars_fragment:CH,logdepthbuf_pars_vertex:TH,logdepthbuf_vertex:SH,map_fragment:jH,map_pars_fragment:vH,map_particle_fragment:fH,map_particle_pars_fragment:yH,metalnessmap_fragment:bH,metalnessmap_pars_fragment:hH,morphinstance_vertex:xH,morphcolor_vertex:gH,morphnormal_vertex:pH,morphtarget_pars_vertex:mH,morphtarget_vertex:lH,normal_fragment_begin:dH,normal_fragment_maps:uH,normal_pars_fragment:cH,normal_pars_vertex:nH,normal_vertex:sH,normalmap_pars_fragment:iH,clearcoat_normal_fragment_begin:oH,clearcoat_normal_fragment_maps:aH,clearcoat_pars_fragment:rH,iridescence_pars_fragment:tH,opaque_fragment:eH,packing:J5,premultiplied_alpha_fragment:Q5,project_vertex:$5,dithering_fragment:Z5,dithering_pars_fragment:K5,roughnessmap_fragment:W5,roughnessmap_pars_fragment:X5,shadowmap_pars_fragment:Y5,shadowmap_pars_vertex:U5,shadowmap_vertex:H5,shadowmask_pars_fragment:q5,skinbase_vertex:N5,skinning_pars_vertex:G5,skinning_vertex:F5,skinnormal_vertex:O5,specularmap_fragment:E5,specularmap_pars_fragment:D5,tonemapping_fragment:k5,tonemapping_pars_fragment:R5,transmission_fragment:V5,transmission_pars_fragment:L5,uv_pars_fragment:z5,uv_pars_vertex:B5,uv_vertex:M5,worldpos_vertex:I5,background_vert:A5,background_frag:P5,backgroundCube_vert:w5,backgroundCube_frag:_5,cube_vert:C5,cube_frag:T5,depth_vert:S5,depth_frag:j5,distance_vert:v5,distance_frag:f5,equirect_vert:y5,equirect_frag:b5,linedashed_vert:h5,linedashed_frag:x5,meshbasic_vert:g5,meshbasic_frag:p5,meshlambert_vert:m5,meshlambert_frag:l5,meshmatcap_vert:d5,meshmatcap_frag:u5,meshnormal_vert:c5,meshnormal_frag:n5,meshphong_vert:s5,meshphong_frag:i5,meshphysical_vert:o5,meshphysical_frag:a5,meshtoon_vert:r5,meshtoon_frag:t5,points_vert:e5,points_frag:Jq,shadow_vert:Qq,shadow_frag:$q,sprite_vert:Zq,sprite_frag:Kq},B0={common:{diffuse:{value:new QJ(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new o0},alphaMap:{value:null},alphaMapTransform:{value:new o0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new o0}},envmap:{envMap:{value:null},envMapRotation:{value:new o0},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new o0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new o0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new o0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new o0},normalScale:{value:new D0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new o0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new o0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new o0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new o0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new QJ(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new j},probesMax:{value:new j},probesResolution:{value:new j}},points:{diffuse:{value:new QJ(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new o0},alphaTest:{value:0},uvTransform:{value:new o0}},sprite:{diffuse:{value:new QJ(16777215)},opacity:{value:1},center:{value:new D0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new o0},alphaMap:{value:null},alphaMapTransform:{value:new o0},alphaTest:{value:0}}},m9={basic:{uniforms:aJ([B0.common,B0.specularmap,B0.envmap,B0.aomap,B0.lightmap,B0.fog]),vertexShader:e0.meshbasic_vert,fragmentShader:e0.meshbasic_frag},lambert:{uniforms:aJ([B0.common,B0.specularmap,B0.envmap,B0.aomap,B0.lightmap,B0.emissivemap,B0.bumpmap,B0.normalmap,B0.displacementmap,B0.fog,B0.lights,{emissive:{value:new QJ(0)},envMapIntensity:{value:1}}]),vertexShader:e0.meshlambert_vert,fragmentShader:e0.meshlambert_frag},phong:{uniforms:aJ([B0.common,B0.specularmap,B0.envmap,B0.aomap,B0.lightmap,B0.emissivemap,B0.bumpmap,B0.normalmap,B0.displacementmap,B0.fog,B0.lights,{emissive:{value:new QJ(0)},specular:{value:new QJ(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:e0.meshphong_vert,fragmentShader:e0.meshphong_frag},standard:{uniforms:aJ([B0.common,B0.envmap,B0.aomap,B0.lightmap,B0.emissivemap,B0.bumpmap,B0.normalmap,B0.displacementmap,B0.roughnessmap,B0.metalnessmap,B0.fog,B0.lights,{emissive:{value:new QJ(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:e0.meshphysical_vert,fragmentShader:e0.meshphysical_frag},toon:{uniforms:aJ([B0.common,B0.aomap,B0.lightmap,B0.emissivemap,B0.bumpmap,B0.normalmap,B0.displacementmap,B0.gradientmap,B0.fog,B0.lights,{emissive:{value:new QJ(0)}}]),vertexShader:e0.meshtoon_vert,fragmentShader:e0.meshtoon_frag},matcap:{uniforms:aJ([B0.common,B0.bumpmap,B0.normalmap,B0.displacementmap,B0.fog,{matcap:{value:null}}]),vertexShader:e0.meshmatcap_vert,fragmentShader:e0.meshmatcap_frag},points:{uniforms:aJ([B0.points,B0.fog]),vertexShader:e0.points_vert,fragmentShader:e0.points_frag},dashed:{uniforms:aJ([B0.common,B0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:e0.linedashed_vert,fragmentShader:e0.linedashed_frag},depth:{uniforms:aJ([B0.common,B0.displacementmap]),vertexShader:e0.depth_vert,fragmentShader:e0.depth_frag},normal:{uniforms:aJ([B0.common,B0.bumpmap,B0.normalmap,B0.displacementmap,{opacity:{value:1}}]),vertexShader:e0.meshnormal_vert,fragmentShader:e0.meshnormal_frag},sprite:{uniforms:aJ([B0.sprite,B0.fog]),vertexShader:e0.sprite_vert,fragmentShader:e0.sprite_frag},background:{uniforms:{uvTransform:{value:new o0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:e0.background_vert,fragmentShader:e0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new o0}},vertexShader:e0.backgroundCube_vert,fragmentShader:e0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:e0.cube_vert,fragmentShader:e0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:e0.equirect_vert,fragmentShader:e0.equirect_frag},distance:{uniforms:aJ([B0.common,B0.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:e0.distance_vert,fragmentShader:e0.distance_frag},shadow:{uniforms:aJ([B0.lights,B0.fog,{color:{value:new QJ(0)},opacity:{value:1}}]),vertexShader:e0.shadow_vert,fragmentShader:e0.shadow_frag}};m9.physical={uniforms:aJ([m9.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new o0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new o0},clearcoatNormalScale:{value:new D0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new o0},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new o0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new o0},sheen:{value:0},sheenColor:{value:new QJ(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new o0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new o0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new o0},transmissionSamplerSize:{value:new D0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new o0},attenuationDistance:{value:0},attenuationColor:{value:new QJ(0)},specularColor:{value:new QJ(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new o0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new o0},anisotropyVector:{value:new D0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new o0}}]),vertexShader:e0.meshphysical_vert,fragmentShader:e0.meshphysical_frag};var fQ={r:0,b:0,g:0},Wq=new RJ,yX=new o0;yX.set(-1,0,0,0,1,0,0,0,1);function Xq(J,Q,$,Z,K,W){let X=new QJ(0),Y=K===!0?0:1,U,H,N=null,G=0,q=null;function F(C){let P=C.isScene===!0?C.background:null;if(P&&P.isTexture){let L=C.backgroundBlurriness>0;P=Q.get(P,L)}return P}function k(C){let P=!1,L=F(C);if(L===null)O(X,Y);else if(L&&L.isColor)O(L,1),P=!0;let A=J.xr.getEnvironmentBlendMode();if(A==="additive")$.buffers.color.setClear(0,0,0,1,W);else if(A==="alpha-blend")$.buffers.color.setClear(0,0,0,0,W);if(J.autoClear||P)$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function I(C,P){let L=F(P);if(L&&(L.isCubeTexture||L.mapping===$6)){if(H===void 0)H=new x0(new AJ(1,1,1),new L9({name:"BackgroundCubeMaterial",uniforms:p8(m9.backgroundCube.uniforms),vertexShader:m9.backgroundCube.vertexShader,fragmentShader:m9.backgroundCube.fragmentShader,side:iJ,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),H.geometry.deleteAttribute("normal"),H.geometry.deleteAttribute("uv"),H.onBeforeRender=function(A,w,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(H.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),Z.update(H);if(H.material.uniforms.envMap.value=L,H.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,H.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,H.material.uniforms.backgroundRotation.value.setFromMatrix4(Wq.makeRotationFromEuler(P.backgroundRotation)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1)H.material.uniforms.backgroundRotation.value.premultiply(yX);if(H.material.toneMapped=WJ.getTransfer(L.colorSpace)!==VJ,N!==L||G!==L.version||q!==J.toneMapping)H.material.needsUpdate=!0,N=L,G=L.version,q=J.toneMapping;H.layers.enableAll(),C.unshift(H,H.geometry,H.material,0,0,null)}else if(L&&L.isTexture){if(U===void 0)U=new x0(new oJ(2,2),new L9({name:"BackgroundMaterial",uniforms:p8(m9.background.uniforms),vertexShader:m9.background.vertexShader,fragmentShader:m9.background.fragmentShader,side:R7,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),Object.defineProperty(U.material,"map",{get:function(){return this.uniforms.t2D.value}}),Z.update(U);if(U.material.uniforms.t2D.value=L,U.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,U.material.toneMapped=WJ.getTransfer(L.colorSpace)!==VJ,L.matrixAutoUpdate===!0)L.updateMatrix();if(U.material.uniforms.uvTransform.value.copy(L.matrix),N!==L||G!==L.version||q!==J.toneMapping)U.material.needsUpdate=!0,N=L,G=L.version,q=J.toneMapping;U.layers.enableAll(),C.unshift(U,U.geometry,U.material,0,0,null)}}function O(C,P){C.getRGB(fQ,vZ(J)),$.buffers.color.setClear(fQ.r,fQ.g,fQ.b,P,W)}function E(){if(H!==void 0)H.geometry.dispose(),H.material.dispose(),H=void 0;if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0}return{getClearColor:function(){return X},setClearColor:function(C,P=1){X.set(C),Y=P,O(X,Y)},getClearAlpha:function(){return Y},setClearAlpha:function(C){Y=C,O(X,Y)},render:k,addToRenderList:I,dispose:E}}function Yq(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),Z={},K=q(null),W=K,X=!1;function Y(R,p,i,x,u){let n=!1,g=G(R,x,i,p);if(W!==g)W=g,H(W.object);if(n=F(R,x,i,u),n)k(R,x,i,u);if(u!==null)Q.update(u,J.ELEMENT_ARRAY_BUFFER);if(n||X){if(X=!1,L(R,p,i,x),u!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(u).buffer)}}function U(){return J.createVertexArray()}function H(R){return J.bindVertexArray(R)}function N(R){return J.deleteVertexArray(R)}function G(R,p,i,x){let u=x.wireframe===!0,n=Z[p.id];if(n===void 0)n={},Z[p.id]=n;let g=R.isInstancedMesh===!0?R.id:0,e=n[g];if(e===void 0)e={},n[g]=e;let K0=e[i.id];if(K0===void 0)K0={},e[i.id]=K0;let Y0=K0[u];if(Y0===void 0)Y0=q(U()),K0[u]=Y0;return Y0}function q(R){let p=[],i=[],x=[];for(let u=0;u<$;u++)p[u]=0,i[u]=0,x[u]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:p,enabledAttributes:i,attributeDivisors:x,object:R,attributes:{},index:null}}function F(R,p,i,x){let u=W.attributes,n=p.attributes,g=0,e=i.getAttributes();for(let K0 in e)if(e[K0].location>=0){let P0=u[K0],k0=n[K0];if(k0===void 0){if(K0==="instanceMatrix"&&R.instanceMatrix)k0=R.instanceMatrix;if(K0==="instanceColor"&&R.instanceColor)k0=R.instanceColor}if(P0===void 0)return!0;if(P0.attribute!==k0)return!0;if(k0&&P0.data!==k0.data)return!0;g++}if(W.attributesNum!==g)return!0;if(W.index!==x)return!0;return!1}function k(R,p,i,x){let u={},n=p.attributes,g=0,e=i.getAttributes();for(let K0 in e)if(e[K0].location>=0){let P0=n[K0];if(P0===void 0){if(K0==="instanceMatrix"&&R.instanceMatrix)P0=R.instanceMatrix;if(K0==="instanceColor"&&R.instanceColor)P0=R.instanceColor}let k0={};if(k0.attribute=P0,P0&&P0.data)k0.data=P0.data;u[K0]=k0,g++}W.attributes=u,W.attributesNum=g,W.index=x}function I(){let R=W.newAttributes;for(let p=0,i=R.length;p<i;p++)R[p]=0}function O(R){E(R,0)}function E(R,p){let{newAttributes:i,enabledAttributes:x,attributeDivisors:u}=W;if(i[R]=1,x[R]===0)J.enableVertexAttribArray(R),x[R]=1;if(u[R]!==p)J.vertexAttribDivisor(R,p),u[R]=p}function C(){let{newAttributes:R,enabledAttributes:p}=W;for(let i=0,x=p.length;i<x;i++)if(p[i]!==R[i])J.disableVertexAttribArray(i),p[i]=0}function P(R,p,i,x,u,n,g){if(g===!0)J.vertexAttribIPointer(R,p,i,u,n);else J.vertexAttribPointer(R,p,i,x,u,n)}function L(R,p,i,x){I();let u=x.attributes,n=i.getAttributes(),g=p.defaultAttributeValues;for(let e in n){let K0=n[e];if(K0.location>=0){let Y0=u[e];if(Y0===void 0){if(e==="instanceMatrix"&&R.instanceMatrix)Y0=R.instanceMatrix;if(e==="instanceColor"&&R.instanceColor)Y0=R.instanceColor}if(Y0!==void 0){let{normalized:P0,itemSize:k0}=Y0,UJ=Q.get(Y0);if(UJ===void 0)continue;let{buffer:XJ,type:o,bytesPerElement:U0}=UJ,V0=o===J.INT||o===J.UNSIGNED_INT||Y0.gpuType===f$;if(Y0.isInterleavedBufferAttribute){let N0=Y0.data,y0=N0.stride,JJ=Y0.offset;if(N0.isInstancedInterleavedBuffer){for(let l0=0;l0<K0.locationSize;l0++)E(K0.location+l0,N0.meshPerAttribute);if(R.isInstancedMesh!==!0&&x._maxInstanceCount===void 0)x._maxInstanceCount=N0.meshPerAttribute*N0.count}else for(let l0=0;l0<K0.locationSize;l0++)O(K0.location+l0);J.bindBuffer(J.ARRAY_BUFFER,XJ);for(let l0=0;l0<K0.locationSize;l0++)P(K0.location+l0,k0/K0.locationSize,o,P0,y0*U0,(JJ+k0/K0.locationSize*l0)*U0,V0)}else{if(Y0.isInstancedBufferAttribute){for(let N0=0;N0<K0.locationSize;N0++)E(K0.location+N0,Y0.meshPerAttribute);if(R.isInstancedMesh!==!0&&x._maxInstanceCount===void 0)x._maxInstanceCount=Y0.meshPerAttribute*Y0.count}else for(let N0=0;N0<K0.locationSize;N0++)O(K0.location+N0);J.bindBuffer(J.ARRAY_BUFFER,XJ);for(let N0=0;N0<K0.locationSize;N0++)P(K0.location+N0,k0/K0.locationSize,o,P0,k0*U0,k0/K0.locationSize*N0*U0,V0)}}else if(g!==void 0){let P0=g[e];if(P0!==void 0)switch(P0.length){case 2:J.vertexAttrib2fv(K0.location,P0);break;case 3:J.vertexAttrib3fv(K0.location,P0);break;case 4:J.vertexAttrib4fv(K0.location,P0);break;default:J.vertexAttrib1fv(K0.location,P0)}}}}C()}function A(){M();for(let R in Z){let p=Z[R];for(let i in p){let x=p[i];for(let u in x){let n=x[u];for(let g in n)N(n[g].object),delete n[g];delete x[u]}}delete Z[R]}}function w(R){if(Z[R.id]===void 0)return;let p=Z[R.id];for(let i in p){let x=p[i];for(let u in x){let n=x[u];for(let g in n)N(n[g].object),delete n[g];delete x[u]}}delete Z[R.id]}function _(R){for(let p in Z){let i=Z[p];for(let x in i){let u=i[x];if(u[R.id]===void 0)continue;let n=u[R.id];for(let g in n)N(n[g].object),delete n[g];delete u[R.id]}}}function V(R){for(let p in Z){let i=Z[p],x=R.isInstancedMesh===!0?R.id:0,u=i[x];if(u===void 0)continue;for(let n in u){let g=u[n];for(let e in g)N(g[e].object),delete g[e];delete u[n]}if(delete i[x],Object.keys(i).length===0)delete Z[p]}}function M(){if(m(),X=!0,W===K)return;W=K,H(W.object)}function m(){K.geometry=null,K.program=null,K.wireframe=!1}return{setup:Y,reset:M,resetDefaultState:m,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:V,releaseStatesOfProgram:_,initAttributes:I,enableAttribute:O,disableUnusedAttributes:C}}function Uq(J,Q,$){let Z;function K(U){Z=U}function W(U,H){J.drawArrays(Z,U,H),$.update(H,Z,1)}function X(U,H,N){if(N===0)return;J.drawArraysInstanced(Z,U,H,N),$.update(H,Z,N)}function Y(U,H,N){if(N===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,U,0,H,0,N);let q=0;for(let F=0;F<N;F++)q+=H[F];$.update(q,Z,1)}this.setMode=K,this.render=W,this.renderInstances=X,this.renderMultiDraw=Y}function Hq(J,Q,$,Z){let K;function W(){if(K!==void 0)return K;if(Q.has("EXT_texture_filter_anisotropic")===!0){let _=Q.get("EXT_texture_filter_anisotropic");K=J.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else K=0;return K}function X(_){if(_!==x9&&Z.convert(_)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Y(_){let V=_===Q8&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(_!==C9&&Z.convert(_)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&_!==J8&&!V)return!1;return!0}function U(_){if(_==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";_="mediump"}if(_==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let H=$.precision!==void 0?$.precision:"highp",N=U(H);if(N!==H)m0("WebGLRenderer:",H,"not supported, using",N,"instead."),H=N;let G=$.logarithmicDepthBuffer===!0,q=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control");if($.reversedDepthBuffer===!0&&q===!1)m0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let F=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),k=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),I=J.getParameter(J.MAX_TEXTURE_SIZE),O=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),E=J.getParameter(J.MAX_VERTEX_ATTRIBS),C=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),P=J.getParameter(J.MAX_VARYING_VECTORS),L=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),A=J.getParameter(J.MAX_SAMPLES),w=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:W,getMaxPrecision:U,textureFormatReadable:X,textureTypeReadable:Y,precision:H,logarithmicDepthBuffer:G,reversedDepthBuffer:q,maxTextures:F,maxVertexTextures:k,maxTextureSize:I,maxCubemapSize:O,maxAttributes:E,maxVertexUniforms:C,maxVaryings:P,maxFragmentUniforms:L,maxSamples:A,samples:w}}function qq(J){let Q=this,$=null,Z=0,K=!1,W=!1,X=new r9,Y=new o0,U={value:null,needsUpdate:!1};this.uniform=U,this.numPlanes=0,this.numIntersection=0,this.init=function(G,q){let F=G.length!==0||q||Z!==0||K;return K=q,Z=G.length,F},this.beginShadows=function(){W=!0,N(null)},this.endShadows=function(){W=!1},this.setGlobalState=function(G,q){$=N(G,q,0)},this.setState=function(G,q,F){let{clippingPlanes:k,clipIntersection:I,clipShadows:O}=G,E=J.get(G);if(!K||k===null||k.length===0||W&&!O)if(W)N(null);else H();else{let C=W?0:Z,P=C*4,L=E.clippingState||null;U.value=L,L=N(k,q,P,F);for(let A=0;A!==P;++A)L[A]=$[A];E.clippingState=L,this.numIntersection=I?this.numPlanes:0,this.numPlanes+=C}};function H(){if(U.value!==$)U.value=$,U.needsUpdate=Z>0;Q.numPlanes=Z,Q.numIntersection=0}function N(G,q,F,k){let I=G!==null?G.length:0,O=null;if(I!==0){if(O=U.value,k!==!0||O===null){let E=F+I*4,C=q.matrixWorldInverse;if(Y.getNormalMatrix(C),O===null||O.length<E)O=new Float32Array(E);for(let P=0,L=F;P!==I;++P,L+=4)X.copy(G[P]).applyMatrix4(C,Y),X.normal.toArray(O,L),O[L+3]=X.constant}U.value=O,U.needsUpdate=!0}return Q.numPlanes=I,Q.numIntersection=0,O}}var R8=4,GX=[0.125,0.215,0.35,0.446,0.526,0.582],u8=20,Nq=256,O6=new F6,FX=new QJ,JK=null,QK=0,$K=0,ZK=!1,Gq=new j;class R6{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,Q=0,$=0.1,Z=100,K={}){let{size:W=256,position:X=Gq}=K;JK=this._renderer.getRenderTarget(),QK=this._renderer.getActiveCubeFace(),$K=this._renderer.getActiveMipmapLevel(),ZK=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(W);let Y=this._allocateTargets();if(Y.depthBuffer=!0,this._sceneToCubeUV(J,$,Z,Y,X),Q>0)this._blur(Y,0,0,Q);return this._applyPMREM(Y),this._cleanup(Y),Y}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=DX(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=EX(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget(JK,QK,$K),this._renderer.xr.enabled=ZK,J.scissorTest=!1,P7(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===L7||J.mapping===f8)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);JK=this._renderer.getRenderTarget(),QK=this._renderer.getActiveCubeFace(),$K=this._renderer.getActiveMipmapLevel(),ZK=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let $=Q||this._allocateTargets();return this._textureToCubeUV(J,$),this._applyPMREM($),this._cleanup($),$}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,$={magFilter:vJ,minFilter:vJ,generateMipmaps:!1,type:Q8,format:x9,colorSpace:kZ,depthBuffer:!1},Z=OX(J,Q,$);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=OX(J,Q,$);let{_lodMax:K}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Fq(K)),this._blurMaterial=Eq(K,J,Q),this._ggxMaterial=Oq(K,J,Q)}return Z}_compileMaterial(J){let Q=new x0(new R9,J);this._renderer.compile(Q,O6)}_sceneToCubeUV(J,Q,$,Z,K){let Y=new nJ(90,1,Q,$),U=[1,-1,1,1,1,1],H=[1,1,1,-1,-1,-1],N=this._renderer,G=N.autoClear,q=N.toneMapping;if(N.getClearColor(FX),N.toneMapping=_9,N.autoClear=!1,N.state.buffers.depth.getReversed())N.setRenderTarget(Z),N.clearDepth(),N.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new x0(new AJ,new pJ({name:"PMREM.Background",side:iJ,depthWrite:!1,depthTest:!1}));let k=this._backgroundBox,I=k.material,O=!1,E=J.background;if(E){if(E.isColor)I.color.copy(E),J.background=null,O=!0}else I.color.copy(FX),O=!0;for(let C=0;C<6;C++){let P=C%3;if(P===0)Y.up.set(0,U[C],0),Y.position.set(K.x,K.y,K.z),Y.lookAt(K.x+H[C],K.y,K.z);else if(P===1)Y.up.set(0,0,U[C]),Y.position.set(K.x,K.y,K.z),Y.lookAt(K.x,K.y+H[C],K.z);else Y.up.set(0,U[C],0),Y.position.set(K.x,K.y,K.z),Y.lookAt(K.x,K.y,K.z+H[C]);let L=this._cubeSize;if(P7(Z,P*L,C>2?L:0,L,L),N.setRenderTarget(Z),O)N.render(k,Y);N.render(J,Y)}N.toneMapping=q,N.autoClear=G,J.background=E}_textureToCubeUV(J,Q){let $=this._renderer,Z=J.mapping===L7||J.mapping===f8;if(Z){if(this._cubemapMaterial===null)this._cubemapMaterial=DX();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=EX();let K=Z?this._cubemapMaterial:this._equirectMaterial,W=this._lodMeshes[0];W.material=K;let X=K.uniforms;X.envMap.value=J;let Y=this._cubeSize;P7(Q,0,0,3*Y,2*Y),$.setRenderTarget(Q),$.render(W,O6)}_applyPMREM(J){let Q=this._renderer,$=Q.autoClear;Q.autoClear=!1;let Z=this._lodMeshes.length;for(let K=1;K<Z;K++)this._applyGGXFilter(J,K-1,K);Q.autoClear=$}_applyGGXFilter(J,Q,$){let Z=this._renderer,K=this._pingPongRenderTarget,W=this._ggxMaterial,X=this._lodMeshes[$];X.material=W;let Y=W.uniforms,U=$/(this._lodMeshes.length-1),H=Q/(this._lodMeshes.length-1),N=Math.sqrt(U*U-H*H),G=0+U*1.25,q=N*G,{_lodMax:F}=this,k=this._sizeLods[$],I=3*k*($>F-R8?$-F+R8:0),O=4*(this._cubeSize-k);Y.envMap.value=J.texture,Y.roughness.value=q,Y.mipInt.value=F-Q,P7(K,I,O,3*k,2*k),Z.setRenderTarget(K),Z.render(X,O6),Y.envMap.value=K.texture,Y.roughness.value=0,Y.mipInt.value=F-$,P7(J,I,O,3*k,2*k),Z.setRenderTarget(J),Z.render(X,O6)}_blur(J,Q,$,Z,K){let W=this._pingPongRenderTarget;this._halfBlur(J,W,Q,$,Z,"latitudinal",K),this._halfBlur(W,J,$,$,Z,"longitudinal",K)}_halfBlur(J,Q,$,Z,K,W,X){let Y=this._renderer,U=this._blurMaterial;if(W!=="latitudinal"&&W!=="longitudinal")p0("blur direction must be either latitudinal or longitudinal!");let H=3,N=this._lodMeshes[Z];N.material=U;let G=U.uniforms,q=this._sizeLods[$]-1,F=isFinite(K)?Math.PI/(2*q):2*Math.PI/(2*u8-1),k=K/F,I=isFinite(K)?1+Math.floor(H*k):u8;if(I>u8)m0(`sigmaRadians, ${K}, is too large and will clip, as it requested ${I} samples when the maximum is set to ${u8}`);let O=[],E=0;for(let w=0;w<u8;++w){let _=w/k,V=Math.exp(-_*_/2);if(O.push(V),w===0)E+=V;else if(w<I)E+=2*V}for(let w=0;w<O.length;w++)O[w]=O[w]/E;if(G.envMap.value=J.texture,G.samples.value=I,G.weights.value=O,G.latitudinal.value=W==="latitudinal",X)G.poleAxis.value=X;let{_lodMax:C}=this;G.dTheta.value=F,G.mipInt.value=C-$;let P=this._sizeLods[Z],L=3*P*(Z>C-R8?Z-C+R8:0),A=4*(this._cubeSize-P);P7(Q,L,A,3*P,2*P),Y.setRenderTarget(Q),Y.render(N,O6)}}function Fq(J){let Q=[],$=[],Z=[],K=J,W=J-R8+1+GX.length;for(let X=0;X<W;X++){let Y=Math.pow(2,K);Q.push(Y);let U=1/Y;if(X>J-R8)U=GX[X-J+R8-1];else if(X===0)U=0;$.push(U);let H=1/(Y-2),N=-H,G=1+H,q=[N,N,G,N,G,G,N,N,G,G,N,G],F=6,k=6,I=3,O=2,E=1,C=new Float32Array(I*k*F),P=new Float32Array(O*k*F),L=new Float32Array(E*k*F);for(let w=0;w<F;w++){let _=w%3*2/3-1,V=w>2?0:-1,M=[_,V,0,_+0.6666666666666666,V,0,_+0.6666666666666666,V+1,0,_,V,0,_+0.6666666666666666,V+1,0,_,V+1,0];C.set(M,I*k*w),P.set(q,O*k*w);let m=[w,w,w,w,w,w];L.set(m,E*k*w)}let A=new R9;if(A.setAttribute("position",new U9(C,I)),A.setAttribute("uv",new U9(P,O)),A.setAttribute("faceIndex",new U9(L,E)),Z.push(new x0(A,null)),K>R8)K--}return{lodMeshes:Z,sizeLods:Q,sigmas:$}}function OX(J,Q,$){let Z=new k9(J,Q,$);return Z.texture.mapping=$6,Z.texture.name="PMREM.cubeUv",Z.scissorTest=!0,Z}function P7(J,Q,$,Z,K){J.viewport.set(Q,$,Z,K),J.scissor.set(Q,$,Z,K)}function Oq(J,Q,$){return new L9({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Nq,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bQ(),fragmentShader:`

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
		`,blending:h9,depthTest:!1,depthWrite:!1})}function Eq(J,Q,$){let Z=new Float32Array(u8),K=new j(0,1,0);return new L9({name:"SphericalGaussianBlur",defines:{n:u8,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:Z},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:K}},vertexShader:bQ(),fragmentShader:`

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
		`,blending:h9,depthTest:!1,depthWrite:!1})}function EX(){return new L9({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bQ(),fragmentShader:`

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
		`,blending:h9,depthTest:!1,depthWrite:!1})}function DX(){return new L9({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bQ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:h9,depthTest:!1,depthWrite:!1})}function bQ(){return`

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
	`}class UK extends k9{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},Z=[$,$,$,$,$,$];this.texture=new zQ(Z),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},Z=new AJ(5,5,5),K=new L9({name:"CubemapFromEquirect",uniforms:p8($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:iJ,blending:h9});K.uniforms.tEquirect.value=Q;let W=new x0(Z,K),X=Q.minFilter;if(Q.minFilter===e9)Q.minFilter=vJ;return new iZ(1,10,this).update(J,W),Q.minFilter=X,W.geometry.dispose(),W.material.dispose(),this}clear(J,Q=!0,$=!0,Z=!0){let K=J.getRenderTarget();for(let W=0;W<6;W++)J.setRenderTarget(this,W),J.clear(Q,$,Z);J.setRenderTarget(K)}}function Dq(J){let Q=new WeakMap,$=new WeakMap,Z=null;function K(q,F=!1){if(q===null||q===void 0)return null;if(F)return X(q);return W(q)}function W(q){if(q&&q.isTexture){let F=q.mapping;if(F===ZQ||F===KQ)if(Q.has(q)){let k=Q.get(q).texture;return Y(k,q.mapping)}else{let k=q.image;if(k&&k.height>0){let I=new UK(k.height);return I.fromEquirectangularTexture(J,q),Q.set(q,I),q.addEventListener("dispose",H),Y(I.texture,q.mapping)}else return null}}return q}function X(q){if(q&&q.isTexture){let F=q.mapping,k=F===ZQ||F===KQ,I=F===L7||F===f8;if(k||I){let O=$.get(q),E=O!==void 0?O.texture.pmremVersion:0;if(q.isRenderTargetTexture&&q.pmremVersion!==E){if(Z===null)Z=new R6(J);return O=k?Z.fromEquirectangular(q,O):Z.fromCubemap(q,O),O.texture.pmremVersion=q.pmremVersion,$.set(q,O),O.texture}else if(O!==void 0)return O.texture;else{let C=q.image;if(k&&C&&C.height>0||I&&C&&U(C)){if(Z===null)Z=new R6(J);return O=k?Z.fromEquirectangular(q):Z.fromCubemap(q),O.texture.pmremVersion=q.pmremVersion,$.set(q,O),q.addEventListener("dispose",N),O.texture}else return null}}}return q}function Y(q,F){if(F===ZQ)q.mapping=L7;else if(F===KQ)q.mapping=f8;return q}function U(q){let F=0,k=6;for(let I=0;I<k;I++)if(q[I]!==void 0)F++;return F===k}function H(q){let F=q.target;F.removeEventListener("dispose",H);let k=Q.get(F);if(k!==void 0)Q.delete(F),k.dispose()}function N(q){let F=q.target;F.removeEventListener("dispose",N);let k=$.get(F);if(k!==void 0)$.delete(F),k.dispose()}function G(){if(Q=new WeakMap,$=new WeakMap,Z!==null)Z.dispose(),Z=null}return{get:K,dispose:G}}function kq(J){let Q={};function $(Z){if(Q[Z]!==void 0)return Q[Z];let K=J.getExtension(Z);return Q[Z]=K,K}return{has:function(Z){return $(Z)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(Z){let K=$(Z);if(K===null)j8("WebGLRenderer: "+Z+" extension not supported.");return K}}}function Rq(J,Q,$,Z){let K={},W=new WeakMap;function X(G){let q=G.target;if(q.index!==null)Q.remove(q.index);for(let k in q.attributes)Q.remove(q.attributes[k]);q.removeEventListener("dispose",X),delete K[q.id];let F=W.get(q);if(F)Q.remove(F),W.delete(q);if(Z.releaseStatesOfGeometry(q),q.isInstancedBufferGeometry===!0)delete q._maxInstanceCount;$.memory.geometries--}function Y(G,q){if(K[q.id]===!0)return q;return q.addEventListener("dispose",X),K[q.id]=!0,$.memory.geometries++,q}function U(G){let q=G.attributes;for(let F in q)Q.update(q[F],J.ARRAY_BUFFER)}function H(G){let q=[],F=G.index,k=G.attributes.position,I=0;if(k===void 0)return;if(F!==null){let C=F.array;I=F.version;for(let P=0,L=C.length;P<L;P+=3){let A=C[P+0],w=C[P+1],_=C[P+2];q.push(A,w,w,_,_,A)}}else{let C=k.array;I=k.version;for(let P=0,L=C.length/3-1;P<L;P+=3){let A=P+0,w=P+1,_=P+2;q.push(A,w,w,_,_,A)}}let O=new(k.count>=65535?RQ:kQ)(q,1);O.version=I;let E=W.get(G);if(E)Q.remove(E);W.set(G,O)}function N(G){let q=W.get(G);if(q){let F=G.index;if(F!==null){if(q.version<F.version)H(G)}}else H(G);return W.get(G)}return{get:Y,update:U,getWireframeAttribute:N}}function Vq(J,Q,$){let Z;function K(G){Z=G}let W,X;function Y(G){W=G.type,X=G.bytesPerElement}function U(G,q){J.drawElements(Z,q,W,G*X),$.update(q,Z,1)}function H(G,q,F){if(F===0)return;J.drawElementsInstanced(Z,q,W,G*X,F),$.update(q,Z,F)}function N(G,q,F){if(F===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,q,0,W,G,0,F);let I=0;for(let O=0;O<F;O++)I+=q[O];$.update(I,Z,1)}this.setMode=K,this.setIndex=Y,this.render=U,this.renderInstances=H,this.renderMultiDraw=N}function Lq(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(W,X,Y){switch($.calls++,X){case J.TRIANGLES:$.triangles+=Y*(W/3);break;case J.LINES:$.lines+=Y*(W/2);break;case J.LINE_STRIP:$.lines+=Y*(W-1);break;case J.LINE_LOOP:$.lines+=Y*W;break;case J.POINTS:$.points+=Y*W;break;default:p0("WebGLInfo: Unknown draw mode:",X);break}}function K(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:K,update:Z}}function zq(J,Q,$){let Z=new WeakMap,K=new IJ;function W(X,Y,U){let H=X.morphTargetInfluences,N=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,G=N!==void 0?N.length:0,q=Z.get(Y);if(q===void 0||q.count!==G){let M=function(){_.dispose(),Z.delete(Y),Y.removeEventListener("dispose",M)};if(q!==void 0)q.texture.dispose();let F=Y.morphAttributes.position!==void 0,k=Y.morphAttributes.normal!==void 0,I=Y.morphAttributes.color!==void 0,O=Y.morphAttributes.position||[],E=Y.morphAttributes.normal||[],C=Y.morphAttributes.color||[],P=0;if(F===!0)P=1;if(k===!0)P=2;if(I===!0)P=3;let L=Y.attributes.position.count*P,A=1;if(L>Q.maxTextureSize)A=Math.ceil(L/Q.maxTextureSize),L=Q.maxTextureSize;let w=new Float32Array(L*A*4*G),_=new DQ(w,L,A,G);_.type=J8,_.needsUpdate=!0;let V=P*4;for(let m=0;m<G;m++){let R=O[m],p=E[m],i=C[m],x=L*A*4*m;for(let u=0;u<R.count;u++){let n=u*V;if(F===!0)K.fromBufferAttribute(R,u),w[x+n+0]=K.x,w[x+n+1]=K.y,w[x+n+2]=K.z,w[x+n+3]=0;if(k===!0)K.fromBufferAttribute(p,u),w[x+n+4]=K.x,w[x+n+5]=K.y,w[x+n+6]=K.z,w[x+n+7]=0;if(I===!0)K.fromBufferAttribute(i,u),w[x+n+8]=K.x,w[x+n+9]=K.y,w[x+n+10]=K.z,w[x+n+11]=i.itemSize===4?K.w:1}}q={count:G,texture:_,size:new D0(L,A)},Z.set(Y,q),Y.addEventListener("dispose",M)}if(X.isInstancedMesh===!0&&X.morphTexture!==null)U.getUniforms().setValue(J,"morphTexture",X.morphTexture,$);else{let F=0;for(let I=0;I<H.length;I++)F+=H[I];let k=Y.morphTargetsRelative?1:1-F;U.getUniforms().setValue(J,"morphTargetBaseInfluence",k),U.getUniforms().setValue(J,"morphTargetInfluences",H)}U.getUniforms().setValue(J,"morphTargetsTexture",q.texture,$),U.getUniforms().setValue(J,"morphTargetsTextureSize",q.size)}return{update:W}}function Bq(J,Q,$,Z,K){let W=new WeakMap;function X(H){let N=K.render.frame,G=H.geometry,q=Q.get(H,G);if(W.get(q)!==N)Q.update(q),W.set(q,N);if(H.isInstancedMesh){if(H.hasEventListener("dispose",U)===!1)H.addEventListener("dispose",U);if(W.get(H)!==N){if($.update(H.instanceMatrix,J.ARRAY_BUFFER),H.instanceColor!==null)$.update(H.instanceColor,J.ARRAY_BUFFER);W.set(H,N)}}if(H.isSkinnedMesh){let F=H.skeleton;if(W.get(F)!==N)F.update(),W.set(F,N)}return q}function Y(){W=new WeakMap}function U(H){let N=H.target;if(N.removeEventListener("dispose",U),Z.releaseStatesOfObject(N),$.remove(N.instanceMatrix),N.instanceColor!==null)$.remove(N.instanceColor)}return{update:X,dispose:Y}}var Mq={[_$]:"LINEAR_TONE_MAPPING",[C$]:"REINHARD_TONE_MAPPING",[T$]:"CINEON_TONE_MAPPING",[Q6]:"ACES_FILMIC_TONE_MAPPING",[j$]:"AGX_TONE_MAPPING",[v$]:"NEUTRAL_TONE_MAPPING",[S$]:"CUSTOM_TONE_MAPPING"};function Iq(J,Q,$,Z,K,W){let X=new k9(Q,$,{type:J,depthBuffer:K,stencilBuffer:W,samples:Z?4:0,depthTexture:K?new k8(Q,$):void 0}),Y=new k9(Q,$,{type:Q8,depthBuffer:!1,stencilBuffer:!1}),U=new R9;U.setAttribute("position",new sJ([-1,3,0,-1,-1,0,3,-1,0],3)),U.setAttribute("uv",new sJ([0,2,0,0,2,0],2));let H=new fZ({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),N=new x0(U,H),G=new F6(-1,1,1,-1,0,1),q=null,F=null,k=!1,I,O=null,E=[],C=!1;this.setSize=function(P,L){X.setSize(P,L),Y.setSize(P,L);for(let A=0;A<E.length;A++){let w=E[A];if(w.setSize)w.setSize(P,L)}},this.setEffects=function(P){E=P,C=E.length>0&&E[0].isRenderPass===!0;let{width:L,height:A}=X;for(let w=0;w<E.length;w++){let _=E[w];if(_.setSize)_.setSize(L,A)}},this.begin=function(P,L){if(k)return!1;if(P.toneMapping===_9&&E.length===0)return!1;if(O=L,L!==null){let{width:A,height:w}=L;if(X.width!==A||X.height!==w)this.setSize(A,w)}if(C===!1)P.setRenderTarget(X);return I=P.toneMapping,P.toneMapping=_9,!0},this.hasRenderPass=function(){return C},this.end=function(P,L){P.toneMapping=I,k=!0;let A=X,w=Y;for(let _=0;_<E.length;_++){let V=E[_];if(V.enabled===!1)continue;if(V.render(P,w,A,L),V.needsSwap!==!1){let M=A;A=w,w=M}}if(q!==P.outputColorSpace||F!==P.toneMapping){if(q=P.outputColorSpace,F=P.toneMapping,H.defines={},WJ.getTransfer(q)===VJ)H.defines.SRGB_TRANSFER="";let _=Mq[F];if(_)H.defines[_]="";H.needsUpdate=!0}H.uniforms.tDiffuse.value=A.texture,P.setRenderTarget(O),P.render(N,G),O=null,k=!1},this.isCompositing=function(){return k},this.dispose=function(){if(X.depthTexture)X.depthTexture.dispose();X.dispose(),Y.dispose(),U.dispose(),H.dispose()}}var bX=new gJ,XK=new k8(1,1),hX=new DQ,xX=new IZ,gX=new zQ,kX=[],RX=[],VX=new Float32Array(16),LX=new Float32Array(9),zX=new Float32Array(4);function w7(J,Q,$){let Z=J[0];if(Z<=0||Z>0)return J;let K=Q*$,W=kX[K];if(W===void 0)W=new Float32Array(K),kX[K]=W;if(Q!==0){Z.toArray(W,0);for(let X=1,Y=0;X!==Q;++X)Y+=$,J[X].toArray(W,Y)}return W}function yJ(J,Q){if(J.length!==Q.length)return!1;for(let $=0,Z=J.length;$<Z;$++)if(J[$]!==Q[$])return!1;return!0}function bJ(J,Q){for(let $=0,Z=Q.length;$<Z;$++)J[$]=Q[$]}function hQ(J,Q){let $=RX[Q];if($===void 0)$=new Int32Array(Q),RX[Q]=$;for(let Z=0;Z!==Q;++Z)$[Z]=J.allocateTextureUnit();return $}function Aq(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function Pq(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(yJ($,Q))return;J.uniform2fv(this.addr,Q),bJ($,Q)}}function wq(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(yJ($,Q))return;J.uniform3fv(this.addr,Q),bJ($,Q)}}function _q(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(yJ($,Q))return;J.uniform4fv(this.addr,Q),bJ($,Q)}}function Cq(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(yJ($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),bJ($,Q)}else{if(yJ($,Z))return;zX.set(Z),J.uniformMatrix2fv(this.addr,!1,zX),bJ($,Z)}}function Tq(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(yJ($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),bJ($,Q)}else{if(yJ($,Z))return;LX.set(Z),J.uniformMatrix3fv(this.addr,!1,LX),bJ($,Z)}}function Sq(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(yJ($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),bJ($,Q)}else{if(yJ($,Z))return;VX.set(Z),J.uniformMatrix4fv(this.addr,!1,VX),bJ($,Z)}}function jq(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function vq(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(yJ($,Q))return;J.uniform2iv(this.addr,Q),bJ($,Q)}}function fq(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(yJ($,Q))return;J.uniform3iv(this.addr,Q),bJ($,Q)}}function yq(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(yJ($,Q))return;J.uniform4iv(this.addr,Q),bJ($,Q)}}function bq(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function hq(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(yJ($,Q))return;J.uniform2uiv(this.addr,Q),bJ($,Q)}}function xq(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(yJ($,Q))return;J.uniform3uiv(this.addr,Q),bJ($,Q)}}function gq(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(yJ($,Q))return;J.uniform4uiv(this.addr,Q),bJ($,Q)}}function pq(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;let W;if(this.type===J.SAMPLER_2D_SHADOW)XK.compareFunction=$.isReversedDepthBuffer()?EQ:OQ,W=XK;else W=bX;$.setTexture2D(Q||W,K)}function mq(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTexture3D(Q||xX,K)}function lq(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTextureCube(Q||gX,K)}function dq(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTexture2DArray(Q||hX,K)}function uq(J){switch(J){case 5126:return Aq;case 35664:return Pq;case 35665:return wq;case 35666:return _q;case 35674:return Cq;case 35675:return Tq;case 35676:return Sq;case 5124:case 35670:return jq;case 35667:case 35671:return vq;case 35668:case 35672:return fq;case 35669:case 35673:return yq;case 5125:return bq;case 36294:return hq;case 36295:return xq;case 36296:return gq;case 35678:case 36198:case 36298:case 36306:case 35682:return pq;case 35679:case 36299:case 36307:return mq;case 35680:case 36300:case 36308:case 36293:return lq;case 36289:case 36303:case 36311:case 36292:return dq}}function cq(J,Q){J.uniform1fv(this.addr,Q)}function nq(J,Q){let $=w7(Q,this.size,2);J.uniform2fv(this.addr,$)}function sq(J,Q){let $=w7(Q,this.size,3);J.uniform3fv(this.addr,$)}function iq(J,Q){let $=w7(Q,this.size,4);J.uniform4fv(this.addr,$)}function oq(J,Q){let $=w7(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function aq(J,Q){let $=w7(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function rq(J,Q){let $=w7(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function tq(J,Q){J.uniform1iv(this.addr,Q)}function eq(J,Q){J.uniform2iv(this.addr,Q)}function J1(J,Q){J.uniform3iv(this.addr,Q)}function Q1(J,Q){J.uniform4iv(this.addr,Q)}function $1(J,Q){J.uniform1uiv(this.addr,Q)}function Z1(J,Q){J.uniform2uiv(this.addr,Q)}function K1(J,Q){J.uniform3uiv(this.addr,Q)}function W1(J,Q){J.uniform4uiv(this.addr,Q)}function X1(J,Q,$){let Z=this.cache,K=Q.length,W=hQ($,K);if(!yJ(Z,W))J.uniform1iv(this.addr,W),bJ(Z,W);let X;if(this.type===J.SAMPLER_2D_SHADOW)X=XK;else X=bX;for(let Y=0;Y!==K;++Y)$.setTexture2D(Q[Y]||X,W[Y])}function Y1(J,Q,$){let Z=this.cache,K=Q.length,W=hQ($,K);if(!yJ(Z,W))J.uniform1iv(this.addr,W),bJ(Z,W);for(let X=0;X!==K;++X)$.setTexture3D(Q[X]||xX,W[X])}function U1(J,Q,$){let Z=this.cache,K=Q.length,W=hQ($,K);if(!yJ(Z,W))J.uniform1iv(this.addr,W),bJ(Z,W);for(let X=0;X!==K;++X)$.setTextureCube(Q[X]||gX,W[X])}function H1(J,Q,$){let Z=this.cache,K=Q.length,W=hQ($,K);if(!yJ(Z,W))J.uniform1iv(this.addr,W),bJ(Z,W);for(let X=0;X!==K;++X)$.setTexture2DArray(Q[X]||hX,W[X])}function q1(J){switch(J){case 5126:return cq;case 35664:return nq;case 35665:return sq;case 35666:return iq;case 35674:return oq;case 35675:return aq;case 35676:return rq;case 5124:case 35670:return tq;case 35667:case 35671:return eq;case 35668:case 35672:return J1;case 35669:case 35673:return Q1;case 5125:return $1;case 36294:return Z1;case 36295:return K1;case 36296:return W1;case 35678:case 36198:case 36298:case 36306:case 35682:return X1;case 35679:case 36299:case 36307:return Y1;case 35680:case 36300:case 36308:case 36293:return U1;case 36289:case 36303:case 36311:case 36292:return H1}}class pX{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=uq(Q.type)}}class mX{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=q1(Q.type)}}class lX{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let Z=this.seq;for(let K=0,W=Z.length;K!==W;++K){let X=Z[K];X.setValue(J,Q[X.id],$)}}}var KK=/(\w+)(\])?(\[|\.)?/g;function BX(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function N1(J,Q,$){let Z=J.name,K=Z.length;KK.lastIndex=0;while(!0){let W=KK.exec(Z),X=KK.lastIndex,Y=W[1],U=W[2]==="]",H=W[3];if(U)Y=Y|0;if(H===void 0||H==="["&&X+2===K){BX($,H===void 0?new pX(Y,J,Q):new mX(Y,J,Q));break}else{let G=$.map[Y];if(G===void 0)G=new lX(Y),BX($,G);$=G}}}class k6{constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let W=0;W<$;++W){let X=J.getActiveUniform(Q,W),Y=J.getUniformLocation(Q,X.name);N1(X,Y,this)}let Z=[],K=[];for(let W of this.seq)if(W.type===J.SAMPLER_2D_SHADOW||W.type===J.SAMPLER_CUBE_SHADOW||W.type===J.SAMPLER_2D_ARRAY_SHADOW)Z.push(W);else K.push(W);if(Z.length>0)this.seq=Z.concat(K)}setValue(J,Q,$,Z){let K=this.map[Q];if(K!==void 0)K.setValue(J,$,Z)}setOptional(J,Q,$){let Z=Q[$];if(Z!==void 0)this.setValue(J,$,Z)}static upload(J,Q,$,Z){for(let K=0,W=Q.length;K!==W;++K){let X=Q[K],Y=$[X.id];if(Y.needsUpdate!==!1)X.setValue(J,Y.value,Z)}}static seqWithValue(J,Q){let $=[];for(let Z=0,K=J.length;Z!==K;++Z){let W=J[Z];if(W.id in Q)$.push(W)}return $}}function MX(J,Q,$){let Z=J.createShader(Q);return J.shaderSource(Z,$),J.compileShader(Z),Z}var G1=37297,F1=0;function O1(J,Q){let $=J.split(`
`),Z=[],K=Math.max(Q-6,0),W=Math.min(Q+6,$.length);for(let X=K;X<W;X++){let Y=X+1;Z.push(`${Y===Q?">":" "} ${Y}: ${$[X]}`)}return Z.join(`
`)}var IX=new o0;function E1(J){WJ._getMatrix(IX,WJ.workingColorSpace,J);let Q=`mat3( ${IX.elements.map(($)=>$.toFixed(4))} )`;switch(WJ.getTransfer(J)){case RZ:return[Q,"LinearTransferOETF"];case VJ:return[Q,"sRGBTransferOETF"];default:return m0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function AX(J,Q,$){let Z=J.getShaderParameter(Q,J.COMPILE_STATUS),W=(J.getShaderInfoLog(Q)||"").trim();if(Z&&W==="")return"";let X=/ERROR: 0:(\d+)/.exec(W);if(X){let Y=parseInt(X[1]);return $.toUpperCase()+`

`+W+`

`+O1(J.getShaderSource(Q),Y)}else return W}function D1(J,Q){let $=E1(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( value.rgb * ${$[0]}, value.a ) );`,"}"].join(`
`)}var k1={[_$]:"Linear",[C$]:"Reinhard",[T$]:"Cineon",[Q6]:"ACESFilmic",[j$]:"AgX",[v$]:"Neutral",[S$]:"Custom"};function R1(J,Q){let $=k1[Q];if($===void 0)return m0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var yQ=new j;function V1(){WJ.getLuminanceCoefficients(yQ);let J=yQ.x.toFixed(4),Q=yQ.y.toFixed(4),$=yQ.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function L1(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(D6).join(`
`)}function z1(J){let Q=[];for(let $ in J){let Z=J[$];if(Z===!1)continue;Q.push("#define "+$+" "+Z)}return Q.join(`
`)}function B1(J,Q){let $={},Z=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let K=0;K<Z;K++){let W=J.getActiveAttrib(Q,K),X=W.name,Y=1;if(W.type===J.FLOAT_MAT2)Y=2;if(W.type===J.FLOAT_MAT3)Y=3;if(W.type===J.FLOAT_MAT4)Y=4;$[X]={type:W.type,location:J.getAttribLocation(Q,X),locationSize:Y}}return $}function D6(J){return J!==""}function PX(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function wX(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var M1=/^[ \t]*#include +<([\w\d./]+)>/gm;function YK(J){return J.replace(M1,A1)}var I1=new Map;function A1(J,Q){let $=e0[Q];if($===void 0){let Z=I1.get(Q);if(Z!==void 0)$=e0[Z],m0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,Z);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+Q+">")}return YK($)}var P1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _X(J){return J.replace(P1,w1)}function w1(J,Q,$,Z){let K="";for(let W=parseInt(Q);W<parseInt($);W++)K+=Z.replace(/\[\s*i\s*\]/g,"[ "+W+" ]").replace(/UNROLLED_LOOP_INDEX/g,W);return K}function CX(J){let Q=`precision ${J.precision} float;
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
#define LOW_PRECISION`;return Q}var _1={[e7]:"SHADOWMAP_TYPE_PCF",[k7]:"SHADOWMAP_TYPE_VSM"};function C1(J){return _1[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var T1={[L7]:"ENVMAP_TYPE_CUBE",[f8]:"ENVMAP_TYPE_CUBE",[$6]:"ENVMAP_TYPE_CUBE_UV"};function S1(J){if(J.envMap===!1)return"ENVMAP_TYPE_CUBE";return T1[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var j1={[f8]:"ENVMAP_MODE_REFRACTION"};function v1(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return j1[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var f1={[jW]:"ENVMAP_BLENDING_MULTIPLY",[vW]:"ENVMAP_BLENDING_MIX",[fW]:"ENVMAP_BLENDING_ADD"};function y1(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return f1[J.combine]||"ENVMAP_BLENDING_NONE"}function b1(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let $=Math.log2(Q)-2,Z=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,$),112)),texelHeight:Z,maxMip:$}}function h1(J,Q,$,Z){let K=J.getContext(),W=$.defines,X=$.vertexShader,Y=$.fragmentShader,U=C1($),H=S1($),N=v1($),G=y1($),q=b1($),F=L1($),k=z1(W),I=K.createProgram(),O,E,C=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(O=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,k].filter(D6).join(`
`),O.length>0)O+=`
`;if(E=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,k].filter(D6).join(`
`),E.length>0)E+=`
`}else O=[CX($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,k,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+N:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexNormals?"#define HAS_NORMAL":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+U:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(D6).join(`
`),E=[CX($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,k,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+H:"",$.envMap?"#define "+N:"",$.envMap?"#define "+G:"",q?"#define CUBEUV_TEXEL_WIDTH "+q.texelWidth:"",q?"#define CUBEUV_TEXEL_HEIGHT "+q.texelHeight:"",q?"#define CUBEUV_MAX_MIP "+q.maxMip+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor?"#define USE_COLOR":"",$.vertexAlphas||$.batchingColor?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+U:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==_9?"#define TONE_MAPPING":"",$.toneMapping!==_9?e0.tonemapping_pars_fragment:"",$.toneMapping!==_9?R1("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",e0.colorspace_pars_fragment,D1("linearToOutputTexel",$.outputColorSpace),V1(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(D6).join(`
`);if(X=YK(X),X=PX(X,$),X=wX(X,$),Y=YK(Y),Y=PX(Y,$),Y=wX(Y,$),X=_X(X),Y=_X(Y),$.isRawShaderMaterial!==!0)C=`#version 300 es
`,O=[F,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+O,E=["#define varying in",$.glslVersion===VZ?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===VZ?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E;let P=C+O+X,L=C+E+Y,A=MX(K,K.VERTEX_SHADER,P),w=MX(K,K.FRAGMENT_SHADER,L);if(K.attachShader(I,A),K.attachShader(I,w),$.index0AttributeName!==void 0)K.bindAttribLocation(I,0,$.index0AttributeName);else if($.hasPositionAttribute===!0)K.bindAttribLocation(I,0,"position");K.linkProgram(I);function _(R){if(J.debug.checkShaderErrors){let p=K.getProgramInfoLog(I)||"",i=K.getShaderInfoLog(A)||"",x=K.getShaderInfoLog(w)||"",u=p.trim(),n=i.trim(),g=x.trim(),e=!0,K0=!0;if(K.getProgramParameter(I,K.LINK_STATUS)===!1)if(e=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(K,I,A,w);else{let Y0=AX(K,A,"vertex"),P0=AX(K,w,"fragment");p0("WebGLProgram: Shader Error "+K.getError()+" - VALIDATE_STATUS "+K.getProgramParameter(I,K.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+u+`
`+Y0+`
`+P0)}else if(u!=="")m0("WebGLProgram: Program Info Log:",u);else if(n===""||g==="")K0=!1;if(K0)R.diagnostics={runnable:e,programLog:u,vertexShader:{log:n,prefix:O},fragmentShader:{log:g,prefix:E}}}K.deleteShader(A),K.deleteShader(w),V=new k6(K,I),M=B1(K,I)}let V;this.getUniforms=function(){if(V===void 0)_(this);return V};let M;this.getAttributes=function(){if(M===void 0)_(this);return M};let m=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(m===!1)m=K.getProgramParameter(I,G1);return m},this.destroy=function(){Z.releaseStatesOfProgram(this),K.deleteProgram(I),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=F1++,this.cacheKey=Q,this.usedTimes=1,this.program=I,this.vertexShader=A,this.fragmentShader=w,this}var x1=0;class dX{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,Q,$){let Z=this._getShaderCacheForMaterial(J);if(Z.has(Q)===!1)Z.add(Q),Q.usedTimes++;if(Z.has($)===!1)Z.add($),$.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new uX(J),Q.set(J,$);return $}}class uX{constructor(J){this.id=x1++,this.code=J,this.usedTimes=0}}function g1(J){return J===h8||J===GQ||J===FQ}function p1(J,Q,$,Z,K,W){let X=new X6,Y=new dX,U=new Set,H=[],N=new Map,G=Z.logarithmicDepthBuffer,q=Z.precision,F={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function k(V){if(U.add(V),V===0)return"uv";return`uv${V}`}function I(V,M,m,R,p,i){let x=R.fog,u=p.geometry,n=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?R.environment:null,g=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,e=Q.get(V.envMap||n,g),K0=!!e&&e.mapping===$6?e.image.height:null,Y0=F[V.type];if(V.precision!==null){if(q=Z.getMaxPrecision(V.precision),q!==V.precision)m0("WebGLProgram.getParameters:",V.precision,"not supported, using",q,"instead.")}let P0=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,k0=P0!==void 0?P0.length:0,UJ=0;if(u.morphAttributes.position!==void 0)UJ=1;if(u.morphAttributes.normal!==void 0)UJ=2;if(u.morphAttributes.color!==void 0)UJ=3;let XJ,o,U0,V0;if(Y0){let s0=m9[Y0];XJ=s0.vertexShader,o=s0.fragmentShader}else{XJ=V.vertexShader,o=V.fragmentShader;let s0=Y.getVertexShaderStage(V),qJ=Y.getFragmentShaderStage(V);Y.update(V,s0,qJ),U0=s0.id,V0=qJ.id}let N0=J.getRenderTarget(),y0=J.state.buffers.depth.getReversed(),JJ=p.isInstancedMesh===!0,l0=p.isBatchedMesh===!0,u0=!!V.map,t=!!V.matcap,Z0=!!e,J0=!!V.aoMap,L0=!!V.lightMap,A0=!!V.bumpMap&&V.wireframe===!1,v0=!!V.normalMap,b0=!!V.displacementMap,n0=!!V.emissiveMap,c0=!!V.metalnessMap,T=!!V.roughnessMap,NJ=V.anisotropy>0,a0=V.clearcoat>0,r0=V.dispersion>0,B=V.iridescence>0,D=V.sheen>0,S=V.transmission>0,l=NJ&&!!V.anisotropyMap,Q0=a0&&!!V.clearcoatMap,X0=a0&&!!V.clearcoatNormalMap,O0=a0&&!!V.clearcoatRoughnessMap,c=B&&!!V.iridescenceMap,r=B&&!!V.iridescenceThicknessMap,M0=D&&!!V.sheenColorMap,f0=D&&!!V.sheenRoughnessMap,H0=!!V.specularMap,W0=!!V.specularColorMap,C0=!!V.specularIntensityMap,S0=S&&!!V.transmissionMap,d0=S&&!!V.thicknessMap,v=!!V.gradientMap,G0=!!V.alphaMap,s=V.alphaTest>0,F0=!!V.alphaHash,I0=!!V.extensions,$0=_9;if(V.toneMapped){if(N0===null||N0.isXRRenderTarget===!0)$0=J.toneMapping}let E0={shaderID:Y0,shaderType:V.type,shaderName:V.name,vertexShader:XJ,fragmentShader:o,defines:V.defines,customVertexShaderID:U0,customFragmentShaderID:V0,isRawShaderMaterial:V.isRawShaderMaterial===!0,glslVersion:V.glslVersion,precision:q,batching:l0,batchingColor:l0&&p._colorsTexture!==null,instancing:JJ,instancingColor:JJ&&p.instanceColor!==null,instancingMorph:JJ&&p.morphTexture!==null,outputColorSpace:N0===null?J.outputColorSpace:N0.isXRRenderTarget===!0?N0.texture.colorSpace:WJ.workingColorSpace,alphaToCoverage:!!V.alphaToCoverage,map:u0,matcap:t,envMap:Z0,envMapMode:Z0&&e.mapping,envMapCubeUVHeight:K0,aoMap:J0,lightMap:L0,bumpMap:A0,normalMap:v0,displacementMap:b0,emissiveMap:n0,normalMapObjectSpace:v0&&V.normalMapType===uW,normalMapTangentSpace:v0&&V.normalMapType===DZ,packedNormalMap:v0&&V.normalMapType===DZ&&g1(V.normalMap.format),metalnessMap:c0,roughnessMap:T,anisotropy:NJ,anisotropyMap:l,clearcoat:a0,clearcoatMap:Q0,clearcoatNormalMap:X0,clearcoatRoughnessMap:O0,dispersion:r0,iridescence:B,iridescenceMap:c,iridescenceThicknessMap:r,sheen:D,sheenColorMap:M0,sheenRoughnessMap:f0,specularMap:H0,specularColorMap:W0,specularIntensityMap:C0,transmission:S,transmissionMap:S0,thicknessMap:d0,gradientMap:v,opaque:V.transparent===!1&&V.blending===J6&&V.alphaToCoverage===!1,alphaMap:G0,alphaTest:s,alphaHash:F0,combine:V.combine,mapUv:u0&&k(V.map.channel),aoMapUv:J0&&k(V.aoMap.channel),lightMapUv:L0&&k(V.lightMap.channel),bumpMapUv:A0&&k(V.bumpMap.channel),normalMapUv:v0&&k(V.normalMap.channel),displacementMapUv:b0&&k(V.displacementMap.channel),emissiveMapUv:n0&&k(V.emissiveMap.channel),metalnessMapUv:c0&&k(V.metalnessMap.channel),roughnessMapUv:T&&k(V.roughnessMap.channel),anisotropyMapUv:l&&k(V.anisotropyMap.channel),clearcoatMapUv:Q0&&k(V.clearcoatMap.channel),clearcoatNormalMapUv:X0&&k(V.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:O0&&k(V.clearcoatRoughnessMap.channel),iridescenceMapUv:c&&k(V.iridescenceMap.channel),iridescenceThicknessMapUv:r&&k(V.iridescenceThicknessMap.channel),sheenColorMapUv:M0&&k(V.sheenColorMap.channel),sheenRoughnessMapUv:f0&&k(V.sheenRoughnessMap.channel),specularMapUv:H0&&k(V.specularMap.channel),specularColorMapUv:W0&&k(V.specularColorMap.channel),specularIntensityMapUv:C0&&k(V.specularIntensityMap.channel),transmissionMapUv:S0&&k(V.transmissionMap.channel),thicknessMapUv:d0&&k(V.thicknessMap.channel),alphaMapUv:G0&&k(V.alphaMap.channel),vertexTangents:!!u.attributes.tangent&&(v0||NJ),vertexNormals:!!u.attributes.normal,vertexColors:V.vertexColors,vertexAlphas:V.vertexColors===!0&&!!u.attributes.color&&u.attributes.color.itemSize===4,pointsUvs:p.isPoints===!0&&!!u.attributes.uv&&(u0||G0),fog:!!x,useFog:V.fog===!0,fogExp2:!!x&&x.isFogExp2,flatShading:V.wireframe===!1&&(V.flatShading===!0||u.attributes.normal===void 0&&v0===!1&&(V.isMeshLambertMaterial||V.isMeshPhongMaterial||V.isMeshStandardMaterial||V.isMeshPhysicalMaterial)),sizeAttenuation:V.sizeAttenuation===!0,logarithmicDepthBuffer:G,reversedDepthBuffer:y0,skinning:p.isSkinnedMesh===!0,hasPositionAttribute:u.attributes.position!==void 0,morphTargets:u.morphAttributes.position!==void 0,morphNormals:u.morphAttributes.normal!==void 0,morphColors:u.morphAttributes.color!==void 0,morphTargetsCount:k0,morphTextureStride:UJ,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:i.length,numClippingPlanes:W.numPlanes,numClipIntersection:W.numIntersection,dithering:V.dithering,shadowMapEnabled:J.shadowMap.enabled&&m.length>0,shadowMapType:J.shadowMap.type,toneMapping:$0,decodeVideoTexture:u0&&V.map.isVideoTexture===!0&&WJ.getTransfer(V.map.colorSpace)===VJ,decodeVideoTextureEmissive:n0&&V.emissiveMap.isVideoTexture===!0&&WJ.getTransfer(V.emissiveMap.colorSpace)===VJ,premultipliedAlpha:V.premultipliedAlpha,doubleSided:V.side===b9,flipSided:V.side===iJ,useDepthPacking:V.depthPacking>=0,depthPacking:V.depthPacking||0,index0AttributeName:V.index0AttributeName,extensionClipCullDistance:I0&&V.extensions.clipCullDistance===!0&&$.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(I0&&V.extensions.multiDraw===!0||l0)&&$.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:$.has("KHR_parallel_shader_compile"),customProgramCacheKey:V.customProgramCacheKey()};return E0.vertexUv1s=U.has(1),E0.vertexUv2s=U.has(2),E0.vertexUv3s=U.has(3),U.clear(),E0}function O(V){let M=[];if(V.shaderID)M.push(V.shaderID);else M.push(V.customVertexShaderID),M.push(V.customFragmentShaderID);if(V.defines!==void 0)for(let m in V.defines)M.push(m),M.push(V.defines[m]);if(V.isRawShaderMaterial===!1)E(M,V),C(M,V),M.push(J.outputColorSpace);return M.push(V.customProgramCacheKey),M.join()}function E(V,M){V.push(M.precision),V.push(M.outputColorSpace),V.push(M.envMapMode),V.push(M.envMapCubeUVHeight),V.push(M.mapUv),V.push(M.alphaMapUv),V.push(M.lightMapUv),V.push(M.aoMapUv),V.push(M.bumpMapUv),V.push(M.normalMapUv),V.push(M.displacementMapUv),V.push(M.emissiveMapUv),V.push(M.metalnessMapUv),V.push(M.roughnessMapUv),V.push(M.anisotropyMapUv),V.push(M.clearcoatMapUv),V.push(M.clearcoatNormalMapUv),V.push(M.clearcoatRoughnessMapUv),V.push(M.iridescenceMapUv),V.push(M.iridescenceThicknessMapUv),V.push(M.sheenColorMapUv),V.push(M.sheenRoughnessMapUv),V.push(M.specularMapUv),V.push(M.specularColorMapUv),V.push(M.specularIntensityMapUv),V.push(M.transmissionMapUv),V.push(M.thicknessMapUv),V.push(M.combine),V.push(M.fogExp2),V.push(M.sizeAttenuation),V.push(M.morphTargetsCount),V.push(M.morphAttributeCount),V.push(M.numDirLights),V.push(M.numPointLights),V.push(M.numSpotLights),V.push(M.numSpotLightMaps),V.push(M.numHemiLights),V.push(M.numRectAreaLights),V.push(M.numDirLightShadows),V.push(M.numPointLightShadows),V.push(M.numSpotLightShadows),V.push(M.numSpotLightShadowsWithMaps),V.push(M.numLightProbes),V.push(M.shadowMapType),V.push(M.toneMapping),V.push(M.numClippingPlanes),V.push(M.numClipIntersection),V.push(M.depthPacking)}function C(V,M){if(X.disableAll(),M.instancing)X.enable(0);if(M.instancingColor)X.enable(1);if(M.instancingMorph)X.enable(2);if(M.matcap)X.enable(3);if(M.envMap)X.enable(4);if(M.normalMapObjectSpace)X.enable(5);if(M.normalMapTangentSpace)X.enable(6);if(M.clearcoat)X.enable(7);if(M.iridescence)X.enable(8);if(M.alphaTest)X.enable(9);if(M.vertexColors)X.enable(10);if(M.vertexAlphas)X.enable(11);if(M.vertexUv1s)X.enable(12);if(M.vertexUv2s)X.enable(13);if(M.vertexUv3s)X.enable(14);if(M.vertexTangents)X.enable(15);if(M.anisotropy)X.enable(16);if(M.alphaHash)X.enable(17);if(M.batching)X.enable(18);if(M.dispersion)X.enable(19);if(M.batchingColor)X.enable(20);if(M.gradientMap)X.enable(21);if(M.packedNormalMap)X.enable(22);if(M.vertexNormals)X.enable(23);if(V.push(X.mask),X.disableAll(),M.fog)X.enable(0);if(M.useFog)X.enable(1);if(M.flatShading)X.enable(2);if(M.logarithmicDepthBuffer)X.enable(3);if(M.reversedDepthBuffer)X.enable(4);if(M.skinning)X.enable(5);if(M.morphTargets)X.enable(6);if(M.morphNormals)X.enable(7);if(M.morphColors)X.enable(8);if(M.premultipliedAlpha)X.enable(9);if(M.shadowMapEnabled)X.enable(10);if(M.doubleSided)X.enable(11);if(M.flipSided)X.enable(12);if(M.useDepthPacking)X.enable(13);if(M.dithering)X.enable(14);if(M.transmission)X.enable(15);if(M.sheen)X.enable(16);if(M.opaque)X.enable(17);if(M.pointsUvs)X.enable(18);if(M.decodeVideoTexture)X.enable(19);if(M.decodeVideoTextureEmissive)X.enable(20);if(M.alphaToCoverage)X.enable(21);if(M.numLightProbeGrids>0)X.enable(22);if(M.hasPositionAttribute)X.enable(23);V.push(X.mask)}function P(V){let M=F[V.type],m;if(M){let R=m9[M];m=YX.clone(R.uniforms)}else m=V.uniforms;return m}function L(V,M){let m=N.get(M);if(m!==void 0)++m.usedTimes;else m=new h1(J,M,V,K),H.push(m),N.set(M,m);return m}function A(V){if(--V.usedTimes===0){let M=H.indexOf(V);H[M]=H[H.length-1],H.pop(),N.delete(V.cacheKey),V.destroy()}}function w(V){Y.remove(V)}function _(){Y.dispose()}return{getParameters:I,getProgramCacheKey:O,getUniforms:P,acquireProgram:L,releaseProgram:A,releaseShaderCache:w,programs:H,dispose:_}}function m1(){let J=new WeakMap;function Q(X){return J.has(X)}function $(X){let Y=J.get(X);if(Y===void 0)Y={},J.set(X,Y);return Y}function Z(X){J.delete(X)}function K(X,Y,U){J.get(X)[Y]=U}function W(){J=new WeakMap}return{has:Q,get:$,remove:Z,update:K,dispose:W}}function l1(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function TX(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function SX(){let J=[],Q=0,$=[],Z=[],K=[];function W(){Q=0,$.length=0,Z.length=0,K.length=0}function X(q){let F=0;if(q.isInstancedMesh)F+=2;if(q.isSkinnedMesh)F+=1;return F}function Y(q,F,k,I,O,E){let C=J[Q];if(C===void 0)C={id:q.id,object:q,geometry:F,material:k,materialVariant:X(q),groupOrder:I,renderOrder:q.renderOrder,z:O,group:E},J[Q]=C;else C.id=q.id,C.object=q,C.geometry=F,C.material=k,C.materialVariant=X(q),C.groupOrder=I,C.renderOrder=q.renderOrder,C.z=O,C.group=E;return Q++,C}function U(q,F,k,I,O,E){let C=Y(q,F,k,I,O,E);if(k.transmission>0)Z.push(C);else if(k.transparent===!0)K.push(C);else $.push(C)}function H(q,F,k,I,O,E){let C=Y(q,F,k,I,O,E);if(k.transmission>0)Z.unshift(C);else if(k.transparent===!0)K.unshift(C);else $.unshift(C)}function N(q,F,k){if($.length>1)$.sort(q||l1);if(Z.length>1)Z.sort(F||TX);if(K.length>1)K.sort(F||TX);if(k)$.reverse(),Z.reverse(),K.reverse()}function G(){for(let q=Q,F=J.length;q<F;q++){let k=J[q];if(k.id===null)break;k.id=null,k.object=null,k.geometry=null,k.material=null,k.group=null}}return{opaque:$,transmissive:Z,transparent:K,init:W,push:U,unshift:H,finish:G,sort:N}}function d1(){let J=new WeakMap;function Q(Z,K){let W=J.get(Z),X;if(W===void 0)X=new SX,J.set(Z,[X]);else if(K>=W.length)X=new SX,W.push(X);else X=W[K];return X}function $(){J=new WeakMap}return{get:Q,dispose:$}}function u1(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={direction:new j,color:new QJ};break;case"SpotLight":$={position:new j,direction:new j,color:new QJ,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new j,color:new QJ,distance:0,decay:0};break;case"HemisphereLight":$={direction:new j,skyColor:new QJ,groundColor:new QJ};break;case"RectAreaLight":$={color:new QJ,position:new j,halfWidth:new j,halfHeight:new j};break}return J[Q.id]=$,$}}}function c1(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new D0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new D0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new D0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var n1=0;function s1(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function i1(J){let Q=new u1,$=c1(),Z={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let H=0;H<9;H++)Z.probe.push(new j);let K=new j,W=new RJ,X=new RJ;function Y(H){let N=0,G=0,q=0;for(let M=0;M<9;M++)Z.probe[M].set(0,0,0);let F=0,k=0,I=0,O=0,E=0,C=0,P=0,L=0,A=0,w=0,_=0;H.sort(s1);for(let M=0,m=H.length;M<m;M++){let R=H[M],p=R.color,i=R.intensity,x=R.distance,u=null;if(R.shadow&&R.shadow.map)if(R.shadow.map.texture.format===h8)u=R.shadow.map.texture;else u=R.shadow.map.depthTexture||R.shadow.map.texture;if(R.isAmbientLight)N+=p.r*i,G+=p.g*i,q+=p.b*i;else if(R.isLightProbe){for(let n=0;n<9;n++)Z.probe[n].addScaledVector(R.sh.coefficients[n],i);_++}else if(R.isDirectionalLight){let n=Q.get(R);if(n.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let g=R.shadow,e=$.get(R);e.shadowIntensity=g.intensity,e.shadowBias=g.bias,e.shadowNormalBias=g.normalBias,e.shadowRadius=g.radius,e.shadowMapSize=g.mapSize,Z.directionalShadow[F]=e,Z.directionalShadowMap[F]=u,Z.directionalShadowMatrix[F]=R.shadow.matrix,C++}Z.directional[F]=n,F++}else if(R.isSpotLight){let n=Q.get(R);n.position.setFromMatrixPosition(R.matrixWorld),n.color.copy(p).multiplyScalar(i),n.distance=x,n.coneCos=Math.cos(R.angle),n.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),n.decay=R.decay,Z.spot[I]=n;let g=R.shadow;if(R.map){if(Z.spotLightMap[A]=R.map,A++,g.updateMatrices(R),R.castShadow)w++}if(Z.spotLightMatrix[I]=g.matrix,R.castShadow){let e=$.get(R);e.shadowIntensity=g.intensity,e.shadowBias=g.bias,e.shadowNormalBias=g.normalBias,e.shadowRadius=g.radius,e.shadowMapSize=g.mapSize,Z.spotShadow[I]=e,Z.spotShadowMap[I]=u,L++}I++}else if(R.isRectAreaLight){let n=Q.get(R);n.color.copy(p).multiplyScalar(i),n.halfWidth.set(R.width*0.5,0,0),n.halfHeight.set(0,R.height*0.5,0),Z.rectArea[O]=n,O++}else if(R.isPointLight){let n=Q.get(R);if(n.color.copy(R.color).multiplyScalar(R.intensity),n.distance=R.distance,n.decay=R.decay,R.castShadow){let g=R.shadow,e=$.get(R);e.shadowIntensity=g.intensity,e.shadowBias=g.bias,e.shadowNormalBias=g.normalBias,e.shadowRadius=g.radius,e.shadowMapSize=g.mapSize,e.shadowCameraNear=g.camera.near,e.shadowCameraFar=g.camera.far,Z.pointShadow[k]=e,Z.pointShadowMap[k]=u,Z.pointShadowMatrix[k]=R.shadow.matrix,P++}Z.point[k]=n,k++}else if(R.isHemisphereLight){let n=Q.get(R);n.skyColor.copy(R.color).multiplyScalar(i),n.groundColor.copy(R.groundColor).multiplyScalar(i),Z.hemi[E]=n,E++}}if(O>0)if(J.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=B0.LTC_FLOAT_1,Z.rectAreaLTC2=B0.LTC_FLOAT_2;else Z.rectAreaLTC1=B0.LTC_HALF_1,Z.rectAreaLTC2=B0.LTC_HALF_2;Z.ambient[0]=N,Z.ambient[1]=G,Z.ambient[2]=q;let V=Z.hash;if(V.directionalLength!==F||V.pointLength!==k||V.spotLength!==I||V.rectAreaLength!==O||V.hemiLength!==E||V.numDirectionalShadows!==C||V.numPointShadows!==P||V.numSpotShadows!==L||V.numSpotMaps!==A||V.numLightProbes!==_)Z.directional.length=F,Z.spot.length=I,Z.rectArea.length=O,Z.point.length=k,Z.hemi.length=E,Z.directionalShadow.length=C,Z.directionalShadowMap.length=C,Z.pointShadow.length=P,Z.pointShadowMap.length=P,Z.spotShadow.length=L,Z.spotShadowMap.length=L,Z.directionalShadowMatrix.length=C,Z.pointShadowMatrix.length=P,Z.spotLightMatrix.length=L+A-w,Z.spotLightMap.length=A,Z.numSpotLightShadowsWithMaps=w,Z.numLightProbes=_,V.directionalLength=F,V.pointLength=k,V.spotLength=I,V.rectAreaLength=O,V.hemiLength=E,V.numDirectionalShadows=C,V.numPointShadows=P,V.numSpotShadows=L,V.numSpotMaps=A,V.numLightProbes=_,Z.version=n1++}function U(H,N){let G=0,q=0,F=0,k=0,I=0,O=N.matrixWorldInverse;for(let E=0,C=H.length;E<C;E++){let P=H[E];if(P.isDirectionalLight){let L=Z.directional[G];L.direction.setFromMatrixPosition(P.matrixWorld),K.setFromMatrixPosition(P.target.matrixWorld),L.direction.sub(K),L.direction.transformDirection(O),G++}else if(P.isSpotLight){let L=Z.spot[F];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(O),L.direction.setFromMatrixPosition(P.matrixWorld),K.setFromMatrixPosition(P.target.matrixWorld),L.direction.sub(K),L.direction.transformDirection(O),F++}else if(P.isRectAreaLight){let L=Z.rectArea[k];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(O),X.identity(),W.copy(P.matrixWorld),W.premultiply(O),X.extractRotation(W),L.halfWidth.set(P.width*0.5,0,0),L.halfHeight.set(0,P.height*0.5,0),L.halfWidth.applyMatrix4(X),L.halfHeight.applyMatrix4(X),k++}else if(P.isPointLight){let L=Z.point[q];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(O),q++}else if(P.isHemisphereLight){let L=Z.hemi[I];L.direction.setFromMatrixPosition(P.matrixWorld),L.direction.transformDirection(O),I++}}}return{setup:Y,setupView:U,state:Z}}function jX(J){let Q=new i1(J),$=[],Z=[],K=[];function W(q){G.camera=q,$.length=0,Z.length=0,K.length=0}function X(q){$.push(q)}function Y(q){Z.push(q)}function U(q){K.push(q)}function H(){Q.setup($)}function N(q){Q.setupView($,q)}let G={lightsArray:$,shadowsArray:Z,lightProbeGridArray:K,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:W,state:G,setupLights:H,setupLightsView:N,pushLight:X,pushShadow:Y,pushLightProbeGrid:U}}function o1(J){let Q=new WeakMap;function $(K,W=0){let X=Q.get(K),Y;if(X===void 0)Y=new jX(J),Q.set(K,[Y]);else if(W>=X.length)Y=new jX(J),X.push(Y);else Y=X[W];return Y}function Z(){Q=new WeakMap}return{get:$,dispose:Z}}var a1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,r1=`uniform sampler2D shadow_pass;
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
}`,t1=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],e1=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],vX=new RJ,E6=new j,WK=new j;function JN(J,Q,$){let Z=new U6,K=new D0,W=new D0,X=new IJ,Y=new yZ,U=new bZ,H={},N=$.maxTextureSize,G={[R7]:iJ,[iJ]:R7,[b9]:b9},q=new L9({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new D0},radius:{value:4}},vertexShader:a1,fragmentShader:r1}),F=q.clone();F.defines.HORIZONTAL_PASS=1;let k=new R9;k.setAttribute("position",new U9(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let I=new x0(k,q),O=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=e7;let E=this.type;this.render=function(w,_,V){if(O.enabled===!1)return;if(O.autoUpdate===!1&&O.needsUpdate===!1)return;if(w.length===0)return;if(this.type===KW)m0("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=e7;let M=J.getRenderTarget(),m=J.getActiveCubeFace(),R=J.getActiveMipmapLevel(),p=J.state;if(p.setBlending(h9),p.buffers.depth.getReversed()===!0)p.buffers.color.setClear(0,0,0,0);else p.buffers.color.setClear(1,1,1,1);p.buffers.depth.setTest(!0),p.setScissorTest(!1);let i=E!==this.type;if(i)_.traverse(function(x){if(x.material)if(Array.isArray(x.material))x.material.forEach((u)=>u.needsUpdate=!0);else x.material.needsUpdate=!0});for(let x=0,u=w.length;x<u;x++){let n=w[x],g=n.shadow;if(g===void 0){m0("WebGLShadowMap:",n,"has no shadow.");continue}if(g.autoUpdate===!1&&g.needsUpdate===!1)continue;K.copy(g.mapSize);let e=g.getFrameExtents();if(K.multiply(e),W.copy(g.mapSize),K.x>N||K.y>N){if(K.x>N)W.x=Math.floor(N/e.x),K.x=W.x*e.x,g.mapSize.x=W.x;if(K.y>N)W.y=Math.floor(N/e.y),K.y=W.y*e.y,g.mapSize.y=W.y}let K0=J.state.buffers.depth.getReversed();if(g.camera._reversedDepth=K0,g.map===null||i===!0){if(g.map!==null){if(g.map.depthTexture!==null)g.map.depthTexture.dispose(),g.map.depthTexture=null;g.map.dispose()}if(this.type===k7){if(n.isPointLight){m0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}g.map=new k9(K.x,K.y,{format:h8,type:Q8,minFilter:vJ,magFilter:vJ,generateMipmaps:!1}),g.map.texture.name=n.name+".shadowMap",g.map.depthTexture=new k8(K.x,K.y,J8),g.map.depthTexture.name=n.name+".shadowMapDepth",g.map.depthTexture.format=y8,g.map.depthTexture.compareFunction=null,g.map.depthTexture.minFilter=O8,g.map.depthTexture.magFilter=O8}else{if(n.isPointLight)g.map=new UK(K.x),g.map.depthTexture=new AZ(K.x,E8);else g.map=new k9(K.x,K.y),g.map.depthTexture=new k8(K.x,K.y,E8);if(g.map.depthTexture.name=n.name+".shadowMap",g.map.depthTexture.format=y8,this.type===e7)g.map.depthTexture.compareFunction=K0?EQ:OQ,g.map.depthTexture.minFilter=vJ,g.map.depthTexture.magFilter=vJ;else g.map.depthTexture.compareFunction=null,g.map.depthTexture.minFilter=O8,g.map.depthTexture.magFilter=O8}g.camera.updateProjectionMatrix()}let Y0=g.map.isWebGLCubeRenderTarget?6:1;for(let P0=0;P0<Y0;P0++){if(g.map.isWebGLCubeRenderTarget)J.setRenderTarget(g.map,P0),J.clear();else{if(P0===0)J.setRenderTarget(g.map),J.clear();let k0=g.getViewport(P0);X.set(W.x*k0.x,W.y*k0.y,W.x*k0.z,W.y*k0.w),p.viewport(X)}if(n.isPointLight){let{camera:k0,matrix:UJ}=g,XJ=n.distance||k0.far;if(XJ!==k0.far)k0.far=XJ,k0.updateProjectionMatrix();E6.setFromMatrixPosition(n.matrixWorld),k0.position.copy(E6),WK.copy(k0.position),WK.add(t1[P0]),k0.up.copy(e1[P0]),k0.lookAt(WK),k0.updateMatrixWorld(),UJ.makeTranslation(-E6.x,-E6.y,-E6.z),vX.multiplyMatrices(k0.projectionMatrix,k0.matrixWorldInverse),g._frustum.setFromProjectionMatrix(vX,k0.coordinateSystem,k0.reversedDepth)}else g.updateMatrices(n);Z=g.getFrustum(),L(_,V,g.camera,n,this.type)}if(g.isPointLightShadow!==!0&&this.type===k7)C(g,V);g.needsUpdate=!1}E=this.type,O.needsUpdate=!1,J.setRenderTarget(M,m,R)};function C(w,_){let V=Q.update(I);if(q.defines.VSM_SAMPLES!==w.blurSamples)q.defines.VSM_SAMPLES=w.blurSamples,F.defines.VSM_SAMPLES=w.blurSamples,q.needsUpdate=!0,F.needsUpdate=!0;if(w.mapPass===null)w.mapPass=new k9(K.x,K.y,{format:h8,type:Q8});q.uniforms.shadow_pass.value=w.map.depthTexture,q.uniforms.resolution.value=w.mapSize,q.uniforms.radius.value=w.radius,J.setRenderTarget(w.mapPass),J.clear(),J.renderBufferDirect(_,null,V,q,I,null),F.uniforms.shadow_pass.value=w.mapPass.texture,F.uniforms.resolution.value=w.mapSize,F.uniforms.radius.value=w.radius,J.setRenderTarget(w.map),J.clear(),J.renderBufferDirect(_,null,V,F,I,null)}function P(w,_,V,M){let m=null,R=V.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)m=R;else if(m=V.isPointLight===!0?U:Y,J.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let p=m.uuid,i=_.uuid,x=H[p];if(x===void 0)x={},H[p]=x;let u=x[i];if(u===void 0)u=m.clone(),x[i]=u,_.addEventListener("dispose",A);m=u}if(m.visible=_.visible,m.wireframe=_.wireframe,M===k7)m.side=_.shadowSide!==null?_.shadowSide:_.side;else m.side=_.shadowSide!==null?_.shadowSide:G[_.side];if(m.alphaMap=_.alphaMap,m.alphaTest=_.alphaToCoverage===!0?0.5:_.alphaTest,m.map=_.map,m.clipShadows=_.clipShadows,m.clippingPlanes=_.clippingPlanes,m.clipIntersection=_.clipIntersection,m.displacementMap=_.displacementMap,m.displacementScale=_.displacementScale,m.displacementBias=_.displacementBias,m.wireframeLinewidth=_.wireframeLinewidth,m.linewidth=_.linewidth,V.isPointLight===!0&&m.isMeshDistanceMaterial===!0){let p=J.properties.get(m);p.light=V}return m}function L(w,_,V,M,m){if(w.visible===!1)return;if(w.layers.test(_.layers)&&(w.isMesh||w.isLine||w.isPoints)){if((w.castShadow||w.receiveShadow&&m===k7)&&(!w.frustumCulled||Z.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld);let i=Q.update(w),x=w.material;if(Array.isArray(x)){let u=i.groups;for(let n=0,g=u.length;n<g;n++){let e=u[n],K0=x[e.materialIndex];if(K0&&K0.visible){let Y0=P(w,K0,M,m);w.onBeforeShadow(J,w,_,V,i,Y0,e),J.renderBufferDirect(V,null,i,Y0,w,e),w.onAfterShadow(J,w,_,V,i,Y0,e)}}}else if(x.visible){let u=P(w,x,M,m);w.onBeforeShadow(J,w,_,V,i,u,null),J.renderBufferDirect(V,null,i,u,w,null),w.onAfterShadow(J,w,_,V,i,u,null)}}}let p=w.children;for(let i=0,x=p.length;i<x;i++)L(p[i],_,V,M,m)}function A(w){w.target.removeEventListener("dispose",A);for(let V in H){let M=H[V],m=w.target.uuid;if(m in M)M[m].dispose(),delete M[m]}}}function QN(J,Q){function $(){let v=!1,G0=new IJ,s=null,F0=new IJ(0,0,0,0);return{setMask:function(I0){if(s!==I0&&!v)J.colorMask(I0,I0,I0,I0),s=I0},setLocked:function(I0){v=I0},setClear:function(I0,$0,E0,s0,qJ){if(qJ===!0)I0*=s0,$0*=s0,E0*=s0;if(G0.set(I0,$0,E0,s0),F0.equals(G0)===!1)J.clearColor(I0,$0,E0,s0),F0.copy(G0)},reset:function(){v=!1,s=null,F0.set(-1,0,0,0)}}}function Z(){let v=!1,G0=!1,s=null,F0=null,I0=null;return{setReversed:function($0){if(G0!==$0){let E0=Q.get("EXT_clip_control");if($0)E0.clipControlEXT(E0.LOWER_LEFT_EXT,E0.ZERO_TO_ONE_EXT);else E0.clipControlEXT(E0.LOWER_LEFT_EXT,E0.NEGATIVE_ONE_TO_ONE_EXT);G0=$0;let s0=I0;I0=null,this.setClear(s0)}},getReversed:function(){return G0},setTest:function($0){if($0)N0(J.DEPTH_TEST);else y0(J.DEPTH_TEST)},setMask:function($0){if(s!==$0&&!v)J.depthMask($0),s=$0},setFunc:function($0){if(G0)$0=JX[$0];if(F0!==$0){switch($0){case AW:J.depthFunc(J.NEVER);break;case PW:J.depthFunc(J.ALWAYS);break;case wW:J.depthFunc(J.LESS);break;case w$:J.depthFunc(J.LEQUAL);break;case _W:J.depthFunc(J.EQUAL);break;case CW:J.depthFunc(J.GEQUAL);break;case TW:J.depthFunc(J.GREATER);break;case SW:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}F0=$0}},setLocked:function($0){v=$0},setClear:function($0){if(I0!==$0){if(I0=$0,G0)$0=1-$0;J.clearDepth($0)}},reset:function(){v=!1,s=null,F0=null,I0=null,G0=!1}}}function K(){let v=!1,G0=null,s=null,F0=null,I0=null,$0=null,E0=null,s0=null,qJ=null;return{setTest:function(EJ){if(!v)if(EJ)N0(J.STENCIL_TEST);else y0(J.STENCIL_TEST)},setMask:function(EJ){if(G0!==EJ&&!v)J.stencilMask(EJ),G0=EJ},setFunc:function(EJ,Q9,N9){if(s!==EJ||F0!==Q9||I0!==N9)J.stencilFunc(EJ,Q9,N9),s=EJ,F0=Q9,I0=N9},setOp:function(EJ,Q9,N9){if($0!==EJ||E0!==Q9||s0!==N9)J.stencilOp(EJ,Q9,N9),$0=EJ,E0=Q9,s0=N9},setLocked:function(EJ){v=EJ},setClear:function(EJ){if(qJ!==EJ)J.clearStencil(EJ),qJ=EJ},reset:function(){v=!1,G0=null,s=null,F0=null,I0=null,$0=null,E0=null,s0=null,qJ=null}}}let W=new $,X=new Z,Y=new K,U=new WeakMap,H=new WeakMap,N={},G={},q={},F=new WeakMap,k=[],I=null,O=!1,E=null,C=null,P=null,L=null,A=null,w=null,_=null,V=new QJ(0,0,0),M=0,m=!1,R=null,p=null,i=null,x=null,u=null,n=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),g=!1,e=0,K0=J.getParameter(J.VERSION);if(K0.indexOf("WebGL")!==-1)e=parseFloat(/^WebGL (\d)/.exec(K0)[1]),g=e>=1;else if(K0.indexOf("OpenGL ES")!==-1)e=parseFloat(/^OpenGL ES (\d)/.exec(K0)[1]),g=e>=2;let Y0=null,P0={},k0=J.getParameter(J.SCISSOR_BOX),UJ=J.getParameter(J.VIEWPORT),XJ=new IJ().fromArray(k0),o=new IJ().fromArray(UJ);function U0(v,G0,s,F0){let I0=new Uint8Array(4),$0=J.createTexture();J.bindTexture(v,$0),J.texParameteri(v,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(v,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let E0=0;E0<s;E0++)if(v===J.TEXTURE_3D||v===J.TEXTURE_2D_ARRAY)J.texImage3D(G0,0,J.RGBA,1,1,F0,0,J.RGBA,J.UNSIGNED_BYTE,I0);else J.texImage2D(G0+E0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,I0);return $0}let V0={};V0[J.TEXTURE_2D]=U0(J.TEXTURE_2D,J.TEXTURE_2D,1),V0[J.TEXTURE_CUBE_MAP]=U0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),V0[J.TEXTURE_2D_ARRAY]=U0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),V0[J.TEXTURE_3D]=U0(J.TEXTURE_3D,J.TEXTURE_3D,1,1),W.setClear(0,0,0,1),X.setClear(1),Y.setClear(0),N0(J.DEPTH_TEST),X.setFunc(w$),A0(!1),v0(M$),N0(J.CULL_FACE),J0(h9);function N0(v){if(N[v]!==!0)J.enable(v),N[v]=!0}function y0(v){if(N[v]!==!1)J.disable(v),N[v]=!1}function JJ(v,G0){if(q[v]!==G0){if(J.bindFramebuffer(v,G0),q[v]=G0,v===J.DRAW_FRAMEBUFFER)q[J.FRAMEBUFFER]=G0;if(v===J.FRAMEBUFFER)q[J.DRAW_FRAMEBUFFER]=G0;return!0}return!1}function l0(v,G0){let s=k,F0=!1;if(v){if(s=F.get(G0),s===void 0)s=[],F.set(G0,s);let I0=v.textures;if(s.length!==I0.length||s[0]!==J.COLOR_ATTACHMENT0){for(let $0=0,E0=I0.length;$0<E0;$0++)s[$0]=J.COLOR_ATTACHMENT0+$0;s.length=I0.length,F0=!0}}else if(s[0]!==J.BACK)s[0]=J.BACK,F0=!0;if(F0)J.drawBuffers(s)}function u0(v){if(I!==v)return J.useProgram(v),I=v,!0;return!1}let t={[V7]:J.FUNC_ADD,[XW]:J.FUNC_SUBTRACT,[YW]:J.FUNC_REVERSE_SUBTRACT};t[UW]=J.MIN,t[HW]=J.MAX;let Z0={[qW]:J.ZERO,[NW]:J.ONE,[GW]:J.SRC_COLOR,[OW]:J.SRC_ALPHA,[LW]:J.SRC_ALPHA_SATURATE,[RW]:J.DST_COLOR,[DW]:J.DST_ALPHA,[FW]:J.ONE_MINUS_SRC_COLOR,[EW]:J.ONE_MINUS_SRC_ALPHA,[VW]:J.ONE_MINUS_DST_COLOR,[kW]:J.ONE_MINUS_DST_ALPHA,[zW]:J.CONSTANT_COLOR,[BW]:J.ONE_MINUS_CONSTANT_COLOR,[MW]:J.CONSTANT_ALPHA,[IW]:J.ONE_MINUS_CONSTANT_ALPHA};function J0(v,G0,s,F0,I0,$0,E0,s0,qJ,EJ){if(v===h9){if(O===!0)y0(J.BLEND),O=!1;return}if(O===!1)N0(J.BLEND),O=!0;if(v!==WW){if(v!==E||EJ!==m){if(C!==V7||A!==V7)J.blendEquation(J.FUNC_ADD),C=V7,A=V7;if(EJ)switch(v){case J6:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case I$:J.blendFunc(J.ONE,J.ONE);break;case A$:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case P$:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:p0("WebGLState: Invalid blending: ",v);break}else switch(v){case J6:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case I$:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case A$:p0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case P$:p0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:p0("WebGLState: Invalid blending: ",v);break}P=null,L=null,w=null,_=null,V.set(0,0,0),M=0,E=v,m=EJ}return}if(I0=I0||G0,$0=$0||s,E0=E0||F0,G0!==C||I0!==A)J.blendEquationSeparate(t[G0],t[I0]),C=G0,A=I0;if(s!==P||F0!==L||$0!==w||E0!==_)J.blendFuncSeparate(Z0[s],Z0[F0],Z0[$0],Z0[E0]),P=s,L=F0,w=$0,_=E0;if(s0.equals(V)===!1||qJ!==M)J.blendColor(s0.r,s0.g,s0.b,qJ),V.copy(s0),M=qJ;E=v,m=!1}function L0(v,G0){v.side===b9?y0(J.CULL_FACE):N0(J.CULL_FACE);let s=v.side===iJ;if(G0)s=!s;A0(s),v.blending===J6&&v.transparent===!1?J0(h9):J0(v.blending,v.blendEquation,v.blendSrc,v.blendDst,v.blendEquationAlpha,v.blendSrcAlpha,v.blendDstAlpha,v.blendColor,v.blendAlpha,v.premultipliedAlpha),X.setFunc(v.depthFunc),X.setTest(v.depthTest),X.setMask(v.depthWrite),W.setMask(v.colorWrite);let F0=v.stencilWrite;if(Y.setTest(F0),F0)Y.setMask(v.stencilWriteMask),Y.setFunc(v.stencilFunc,v.stencilRef,v.stencilFuncMask),Y.setOp(v.stencilFail,v.stencilZFail,v.stencilZPass);n0(v.polygonOffset,v.polygonOffsetFactor,v.polygonOffsetUnits),v.alphaToCoverage===!0?N0(J.SAMPLE_ALPHA_TO_COVERAGE):y0(J.SAMPLE_ALPHA_TO_COVERAGE)}function A0(v){if(R!==v){if(v)J.frontFace(J.CW);else J.frontFace(J.CCW);R=v}}function v0(v){if(v!==$W){if(N0(J.CULL_FACE),v!==p)if(v===M$)J.cullFace(J.BACK);else if(v===ZW)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else y0(J.CULL_FACE);p=v}function b0(v){if(v!==i){if(g)J.lineWidth(v);i=v}}function n0(v,G0,s){if(v){if(N0(J.POLYGON_OFFSET_FILL),x!==G0||u!==s){if(x=G0,u=s,X.getReversed())G0=-G0;J.polygonOffset(G0,s)}}else y0(J.POLYGON_OFFSET_FILL)}function c0(v){if(v)N0(J.SCISSOR_TEST);else y0(J.SCISSOR_TEST)}function T(v){if(v===void 0)v=J.TEXTURE0+n-1;if(Y0!==v)J.activeTexture(v),Y0=v}function NJ(v,G0,s){if(s===void 0)if(Y0===null)s=J.TEXTURE0+n-1;else s=Y0;let F0=P0[s];if(F0===void 0)F0={type:void 0,texture:void 0},P0[s]=F0;if(F0.type!==v||F0.texture!==G0){if(Y0!==s)J.activeTexture(s),Y0=s;J.bindTexture(v,G0||V0[v]),F0.type=v,F0.texture=G0}}function a0(){let v=P0[Y0];if(v!==void 0&&v.type!==void 0)J.bindTexture(v.type,null),v.type=void 0,v.texture=void 0}function r0(){try{J.compressedTexImage2D(...arguments)}catch(v){p0("WebGLState:",v)}}function B(){try{J.compressedTexImage3D(...arguments)}catch(v){p0("WebGLState:",v)}}function D(){try{J.texSubImage2D(...arguments)}catch(v){p0("WebGLState:",v)}}function S(){try{J.texSubImage3D(...arguments)}catch(v){p0("WebGLState:",v)}}function l(){try{J.compressedTexSubImage2D(...arguments)}catch(v){p0("WebGLState:",v)}}function Q0(){try{J.compressedTexSubImage3D(...arguments)}catch(v){p0("WebGLState:",v)}}function X0(){try{J.texStorage2D(...arguments)}catch(v){p0("WebGLState:",v)}}function O0(){try{J.texStorage3D(...arguments)}catch(v){p0("WebGLState:",v)}}function c(){try{J.texImage2D(...arguments)}catch(v){p0("WebGLState:",v)}}function r(){try{J.texImage3D(...arguments)}catch(v){p0("WebGLState:",v)}}function M0(v){if(G[v]!==void 0)return G[v];else return J.getParameter(v)}function f0(v,G0){if(G[v]!==G0)J.pixelStorei(v,G0),G[v]=G0}function H0(v){if(XJ.equals(v)===!1)J.scissor(v.x,v.y,v.z,v.w),XJ.copy(v)}function W0(v){if(o.equals(v)===!1)J.viewport(v.x,v.y,v.z,v.w),o.copy(v)}function C0(v,G0){let s=H.get(G0);if(s===void 0)s=new WeakMap,H.set(G0,s);let F0=s.get(v);if(F0===void 0)F0=J.getUniformBlockIndex(G0,v.name),s.set(v,F0)}function S0(v,G0){let F0=H.get(G0).get(v);if(U.get(G0)!==F0)J.uniformBlockBinding(G0,F0,v.__bindingPointIndex),U.set(G0,F0)}function d0(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),X.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),N={},G={},Y0=null,P0={},q={},F=new WeakMap,k=[],I=null,O=!1,E=null,C=null,P=null,L=null,A=null,w=null,_=null,V=new QJ(0,0,0),M=0,m=!1,R=null,p=null,i=null,x=null,u=null,XJ.set(0,0,J.canvas.width,J.canvas.height),o.set(0,0,J.canvas.width,J.canvas.height),W.reset(),X.reset(),Y.reset()}return{buffers:{color:W,depth:X,stencil:Y},enable:N0,disable:y0,bindFramebuffer:JJ,drawBuffers:l0,useProgram:u0,setBlending:J0,setMaterial:L0,setFlipSided:A0,setCullFace:v0,setLineWidth:b0,setPolygonOffset:n0,setScissorTest:c0,activeTexture:T,bindTexture:NJ,unbindTexture:a0,compressedTexImage2D:r0,compressedTexImage3D:B,texImage2D:c,texImage3D:r,pixelStorei:f0,getParameter:M0,updateUBOMapping:C0,uniformBlockBinding:S0,texStorage2D:X0,texStorage3D:O0,texSubImage2D:D,texSubImage3D:S,compressedTexSubImage2D:l,compressedTexSubImage3D:Q0,scissor:H0,viewport:W0,reset:d0}}function $N(J,Q,$,Z,K,W,X){let Y=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,U=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),H=new D0,N=new WeakMap,G=new Set,q,F=new WeakMap,k=!1;try{k=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(B){}function I(B,D){return k?new OffscreenCanvas(B,D):O7("canvas")}function O(B,D,S){let l=1,Q0=r0(B);if(Q0.width>S||Q0.height>S)l=S/Math.max(Q0.width,Q0.height);if(l<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){let X0=Math.floor(l*Q0.width),O0=Math.floor(l*Q0.height);if(q===void 0)q=I(X0,O0);let c=D?I(X0,O0):q;return c.width=X0,c.height=O0,c.getContext("2d").drawImage(B,0,0,X0,O0),m0("WebGLRenderer: Texture has been resized from ("+Q0.width+"x"+Q0.height+") to ("+X0+"x"+O0+")."),c}else{if("data"in B)m0("WebGLRenderer: Image in DataTexture is too big ("+Q0.width+"x"+Q0.height+").");return B}return B}function E(B){return B.generateMipmaps}function C(B){J.generateMipmap(B)}function P(B){if(B.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(B.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function L(B,D,S,l,Q0,X0=!1){if(B!==null){if(J[B]!==void 0)return J[B];m0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let O0;if(l){if(O0=Q.get("EXT_texture_norm16"),!O0)m0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let c=D;if(D===J.RED){if(S===J.FLOAT)c=J.R32F;if(S===J.HALF_FLOAT)c=J.R16F;if(S===J.UNSIGNED_BYTE)c=J.R8;if(S===J.UNSIGNED_SHORT&&O0)c=O0.R16_EXT;if(S===J.SHORT&&O0)c=O0.R16_SNORM_EXT}if(D===J.RED_INTEGER){if(S===J.UNSIGNED_BYTE)c=J.R8UI;if(S===J.UNSIGNED_SHORT)c=J.R16UI;if(S===J.UNSIGNED_INT)c=J.R32UI;if(S===J.BYTE)c=J.R8I;if(S===J.SHORT)c=J.R16I;if(S===J.INT)c=J.R32I}if(D===J.RG){if(S===J.FLOAT)c=J.RG32F;if(S===J.HALF_FLOAT)c=J.RG16F;if(S===J.UNSIGNED_BYTE)c=J.RG8;if(S===J.UNSIGNED_SHORT&&O0)c=O0.RG16_EXT;if(S===J.SHORT&&O0)c=O0.RG16_SNORM_EXT}if(D===J.RG_INTEGER){if(S===J.UNSIGNED_BYTE)c=J.RG8UI;if(S===J.UNSIGNED_SHORT)c=J.RG16UI;if(S===J.UNSIGNED_INT)c=J.RG32UI;if(S===J.BYTE)c=J.RG8I;if(S===J.SHORT)c=J.RG16I;if(S===J.INT)c=J.RG32I}if(D===J.RGB_INTEGER){if(S===J.UNSIGNED_BYTE)c=J.RGB8UI;if(S===J.UNSIGNED_SHORT)c=J.RGB16UI;if(S===J.UNSIGNED_INT)c=J.RGB32UI;if(S===J.BYTE)c=J.RGB8I;if(S===J.SHORT)c=J.RGB16I;if(S===J.INT)c=J.RGB32I}if(D===J.RGBA_INTEGER){if(S===J.UNSIGNED_BYTE)c=J.RGBA8UI;if(S===J.UNSIGNED_SHORT)c=J.RGBA16UI;if(S===J.UNSIGNED_INT)c=J.RGBA32UI;if(S===J.BYTE)c=J.RGBA8I;if(S===J.SHORT)c=J.RGBA16I;if(S===J.INT)c=J.RGBA32I}if(D===J.RGB){if(S===J.UNSIGNED_SHORT&&O0)c=O0.RGB16_EXT;if(S===J.SHORT&&O0)c=O0.RGB16_SNORM_EXT;if(S===J.UNSIGNED_INT_5_9_9_9_REV)c=J.RGB9_E5;if(S===J.UNSIGNED_INT_10F_11F_11F_REV)c=J.R11F_G11F_B10F}if(D===J.RGBA){let r=X0?RZ:WJ.getTransfer(Q0);if(S===J.FLOAT)c=J.RGBA32F;if(S===J.HALF_FLOAT)c=J.RGBA16F;if(S===J.UNSIGNED_BYTE)c=r===VJ?J.SRGB8_ALPHA8:J.RGBA8;if(S===J.UNSIGNED_SHORT&&O0)c=O0.RGBA16_EXT;if(S===J.SHORT&&O0)c=O0.RGBA16_SNORM_EXT;if(S===J.UNSIGNED_SHORT_4_4_4_4)c=J.RGBA4;if(S===J.UNSIGNED_SHORT_5_5_5_1)c=J.RGB5_A1}if(c===J.R16F||c===J.R32F||c===J.RG16F||c===J.RG32F||c===J.RGBA16F||c===J.RGBA32F)Q.get("EXT_color_buffer_float");return c}function A(B,D){let S;if(B){if(D===null||D===E8||D===z7)S=J.DEPTH24_STENCIL8;else if(D===J8)S=J.DEPTH32F_STENCIL8;else if(D===K6)S=J.DEPTH24_STENCIL8,m0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(D===null||D===E8||D===z7)S=J.DEPTH_COMPONENT24;else if(D===J8)S=J.DEPTH_COMPONENT32F;else if(D===K6)S=J.DEPTH_COMPONENT16;return S}function w(B,D){if(E(B)===!0||B.isFramebufferTexture&&B.minFilter!==O8&&B.minFilter!==vJ)return Math.log2(Math.max(D.width,D.height))+1;else if(B.mipmaps!==void 0&&B.mipmaps.length>0)return B.mipmaps.length;else if(B.isCompressedTexture&&Array.isArray(B.image))return D.mipmaps.length;else return 1}function _(B){let D=B.target;if(D.removeEventListener("dispose",_),M(D),D.isVideoTexture)N.delete(D);if(D.isHTMLTexture)G.delete(D)}function V(B){let D=B.target;D.removeEventListener("dispose",V),R(D)}function M(B){let D=Z.get(B);if(D.__webglInit===void 0)return;let S=B.source,l=F.get(S);if(l){let Q0=l[D.__cacheKey];if(Q0.usedTimes--,Q0.usedTimes===0)m(B);if(Object.keys(l).length===0)F.delete(S)}Z.remove(B)}function m(B){let D=Z.get(B);J.deleteTexture(D.__webglTexture);let S=B.source,l=F.get(S);delete l[D.__cacheKey],X.memory.textures--}function R(B){let D=Z.get(B);if(B.depthTexture)B.depthTexture.dispose(),Z.remove(B.depthTexture);if(B.isWebGLCubeRenderTarget)for(let l=0;l<6;l++){if(Array.isArray(D.__webglFramebuffer[l]))for(let Q0=0;Q0<D.__webglFramebuffer[l].length;Q0++)J.deleteFramebuffer(D.__webglFramebuffer[l][Q0]);else J.deleteFramebuffer(D.__webglFramebuffer[l]);if(D.__webglDepthbuffer)J.deleteRenderbuffer(D.__webglDepthbuffer[l])}else{if(Array.isArray(D.__webglFramebuffer))for(let l=0;l<D.__webglFramebuffer.length;l++)J.deleteFramebuffer(D.__webglFramebuffer[l]);else J.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer)J.deleteRenderbuffer(D.__webglDepthbuffer);if(D.__webglMultisampledFramebuffer)J.deleteFramebuffer(D.__webglMultisampledFramebuffer);if(D.__webglColorRenderbuffer){for(let l=0;l<D.__webglColorRenderbuffer.length;l++)if(D.__webglColorRenderbuffer[l])J.deleteRenderbuffer(D.__webglColorRenderbuffer[l])}if(D.__webglDepthRenderbuffer)J.deleteRenderbuffer(D.__webglDepthRenderbuffer)}let S=B.textures;for(let l=0,Q0=S.length;l<Q0;l++){let X0=Z.get(S[l]);if(X0.__webglTexture)J.deleteTexture(X0.__webglTexture),X.memory.textures--;Z.remove(S[l])}Z.remove(B)}let p=0;function i(){p=0}function x(){return p}function u(B){p=B}function n(){let B=p;if(B>=K.maxTextures)m0("WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+K.maxTextures);return p+=1,B}function g(B){let D=[];return D.push(B.wrapS),D.push(B.wrapT),D.push(B.wrapR||0),D.push(B.magFilter),D.push(B.minFilter),D.push(B.anisotropy),D.push(B.internalFormat),D.push(B.format),D.push(B.type),D.push(B.generateMipmaps),D.push(B.premultiplyAlpha),D.push(B.flipY),D.push(B.unpackAlignment),D.push(B.colorSpace),D.join()}function e(B,D){let S=Z.get(B);if(B.isVideoTexture)NJ(B);if(B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&S.__version!==B.version){let l=B.image;if(l===null)m0("WebGLRenderer: Texture marked for update but no image data found.");else if(l.complete===!1)m0("WebGLRenderer: Texture marked for update but image is incomplete");else{y0(S,B,D);return}}else if(B.isExternalTexture)S.__webglTexture=B.sourceTexture?B.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,S.__webglTexture,J.TEXTURE0+D)}function K0(B,D){let S=Z.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&S.__version!==B.version){y0(S,B,D);return}else if(B.isExternalTexture)S.__webglTexture=B.sourceTexture?B.sourceTexture:null;$.bindTexture(J.TEXTURE_2D_ARRAY,S.__webglTexture,J.TEXTURE0+D)}function Y0(B,D){let S=Z.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&S.__version!==B.version){y0(S,B,D);return}$.bindTexture(J.TEXTURE_3D,S.__webglTexture,J.TEXTURE0+D)}function P0(B,D){let S=Z.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&S.__version!==B.version){JJ(S,B,D);return}$.bindTexture(J.TEXTURE_CUBE_MAP,S.__webglTexture,J.TEXTURE0+D)}let k0={[WQ]:J.REPEAT,[XQ]:J.CLAMP_TO_EDGE,[yW]:J.MIRRORED_REPEAT},UJ={[O8]:J.NEAREST,[bW]:J.NEAREST_MIPMAP_NEAREST,[Z6]:J.NEAREST_MIPMAP_LINEAR,[vJ]:J.LINEAR,[YQ]:J.LINEAR_MIPMAP_NEAREST,[e9]:J.LINEAR_MIPMAP_LINEAR},XJ={[cW]:J.NEVER,[aW]:J.ALWAYS,[nW]:J.LESS,[OQ]:J.LEQUAL,[sW]:J.EQUAL,[EQ]:J.GEQUAL,[iW]:J.GREATER,[oW]:J.NOTEQUAL};function o(B,D){if(D.type===J8&&Q.has("OES_texture_float_linear")===!1&&(D.magFilter===vJ||D.magFilter===YQ||D.magFilter===Z6||D.magFilter===e9||D.minFilter===vJ||D.minFilter===YQ||D.minFilter===Z6||D.minFilter===e9))m0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(B,J.TEXTURE_WRAP_S,k0[D.wrapS]),J.texParameteri(B,J.TEXTURE_WRAP_T,k0[D.wrapT]),B===J.TEXTURE_3D||B===J.TEXTURE_2D_ARRAY)J.texParameteri(B,J.TEXTURE_WRAP_R,k0[D.wrapR]);if(J.texParameteri(B,J.TEXTURE_MAG_FILTER,UJ[D.magFilter]),J.texParameteri(B,J.TEXTURE_MIN_FILTER,UJ[D.minFilter]),D.compareFunction)J.texParameteri(B,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(B,J.TEXTURE_COMPARE_FUNC,XJ[D.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(D.magFilter===O8)return;if(D.minFilter!==Z6&&D.minFilter!==e9)return;if(D.type===J8&&Q.has("OES_texture_float_linear")===!1)return;if(D.anisotropy>1||Z.get(D).__currentAnisotropy){let S=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(B,S.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,K.getMaxAnisotropy())),Z.get(D).__currentAnisotropy=D.anisotropy}}}function U0(B,D){let S=!1;if(B.__webglInit===void 0)B.__webglInit=!0,D.addEventListener("dispose",_);let l=D.source,Q0=F.get(l);if(Q0===void 0)Q0={},F.set(l,Q0);let X0=g(D);if(X0!==B.__cacheKey){if(Q0[X0]===void 0)Q0[X0]={texture:J.createTexture(),usedTimes:0},X.memory.textures++,S=!0;Q0[X0].usedTimes++;let O0=Q0[B.__cacheKey];if(O0!==void 0){if(Q0[B.__cacheKey].usedTimes--,O0.usedTimes===0)m(D)}B.__cacheKey=X0,B.__webglTexture=Q0[X0].texture}return S}function V0(B,D,S){return Math.floor(Math.floor(B/S)/D)}function N0(B,D,S,l){let X0=B.updateRanges;if(X0.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,D.width,D.height,S,l,D.data);else{X0.sort((f0,H0)=>f0.start-H0.start);let O0=0;for(let f0=1;f0<X0.length;f0++){let H0=X0[O0],W0=X0[f0],C0=H0.start+H0.count,S0=V0(W0.start,D.width,4),d0=V0(H0.start,D.width,4);if(W0.start<=C0+1&&S0===d0&&V0(W0.start+W0.count-1,D.width,4)===S0)H0.count=Math.max(H0.count,W0.start+W0.count-H0.start);else++O0,X0[O0]=W0}X0.length=O0+1;let c=$.getParameter(J.UNPACK_ROW_LENGTH),r=$.getParameter(J.UNPACK_SKIP_PIXELS),M0=$.getParameter(J.UNPACK_SKIP_ROWS);$.pixelStorei(J.UNPACK_ROW_LENGTH,D.width);for(let f0=0,H0=X0.length;f0<H0;f0++){let W0=X0[f0],C0=Math.floor(W0.start/4),S0=Math.ceil(W0.count/4),d0=C0%D.width,v=Math.floor(C0/D.width),G0=S0,s=1;$.pixelStorei(J.UNPACK_SKIP_PIXELS,d0),$.pixelStorei(J.UNPACK_SKIP_ROWS,v),$.texSubImage2D(J.TEXTURE_2D,0,d0,v,G0,1,S,l,D.data)}B.clearUpdateRanges(),$.pixelStorei(J.UNPACK_ROW_LENGTH,c),$.pixelStorei(J.UNPACK_SKIP_PIXELS,r),$.pixelStorei(J.UNPACK_SKIP_ROWS,M0)}}function y0(B,D,S){let l=J.TEXTURE_2D;if(D.isDataArrayTexture||D.isCompressedArrayTexture)l=J.TEXTURE_2D_ARRAY;if(D.isData3DTexture)l=J.TEXTURE_3D;let Q0=U0(B,D),X0=D.source;$.bindTexture(l,B.__webglTexture,J.TEXTURE0+S);let O0=Z.get(X0);if(X0.version!==O0.__version||Q0===!0){if($.activeTexture(J.TEXTURE0+S),(typeof ImageBitmap<"u"&&D.image instanceof ImageBitmap)===!1){let s=WJ.getPrimaries(WJ.workingColorSpace),F0=D.colorSpace===x8?null:WJ.getPrimaries(D.colorSpace),I0=D.colorSpace===x8||s===F0?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,D.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,I0)}$.pixelStorei(J.UNPACK_ALIGNMENT,D.unpackAlignment);let r=O(D.image,!1,K.maxTextureSize);r=a0(D,r);let M0=W.convert(D.format,D.colorSpace),f0=W.convert(D.type),H0=L(D.internalFormat,M0,f0,D.normalized,D.colorSpace,D.isVideoTexture);o(l,D);let W0,C0=D.mipmaps,S0=D.isVideoTexture!==!0,d0=O0.__version===void 0||Q0===!0,v=X0.dataReady,G0=w(D,r);if(D.isDepthTexture){if(H0=A(D.format===b8,D.type),d0)if(S0)$.texStorage2D(J.TEXTURE_2D,1,H0,r.width,r.height);else $.texImage2D(J.TEXTURE_2D,0,H0,r.width,r.height,0,M0,f0,null)}else if(D.isDataTexture)if(C0.length>0){if(S0&&d0)$.texStorage2D(J.TEXTURE_2D,G0,H0,C0[0].width,C0[0].height);for(let s=0,F0=C0.length;s<F0;s++)if(W0=C0[s],S0){if(v)$.texSubImage2D(J.TEXTURE_2D,s,0,0,W0.width,W0.height,M0,f0,W0.data)}else $.texImage2D(J.TEXTURE_2D,s,H0,W0.width,W0.height,0,M0,f0,W0.data);D.generateMipmaps=!1}else if(S0){if(d0)$.texStorage2D(J.TEXTURE_2D,G0,H0,r.width,r.height);if(v)N0(D,r,M0,f0)}else $.texImage2D(J.TEXTURE_2D,0,H0,r.width,r.height,0,M0,f0,r.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){if(S0&&d0)$.texStorage3D(J.TEXTURE_2D_ARRAY,G0,H0,C0[0].width,C0[0].height,r.depth);for(let s=0,F0=C0.length;s<F0;s++)if(W0=C0[s],D.format!==x9)if(M0!==null)if(S0){if(v)if(D.layerUpdates.size>0){let I0=eZ(W0.width,W0.height,D.format,D.type);for(let $0 of D.layerUpdates){let E0=W0.data.subarray($0*I0/W0.data.BYTES_PER_ELEMENT,($0+1)*I0/W0.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,s,0,0,$0,W0.width,W0.height,1,M0,E0)}D.clearLayerUpdates()}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,s,0,0,0,W0.width,W0.height,r.depth,M0,W0.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,s,H0,W0.width,W0.height,r.depth,0,W0.data,0,0);else m0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(S0){if(v)$.texSubImage3D(J.TEXTURE_2D_ARRAY,s,0,0,0,W0.width,W0.height,r.depth,M0,f0,W0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,s,H0,W0.width,W0.height,r.depth,0,M0,f0,W0.data)}else{if(S0&&d0)$.texStorage2D(J.TEXTURE_2D,G0,H0,C0[0].width,C0[0].height);for(let s=0,F0=C0.length;s<F0;s++)if(W0=C0[s],D.format!==x9)if(M0!==null)if(S0){if(v)$.compressedTexSubImage2D(J.TEXTURE_2D,s,0,0,W0.width,W0.height,M0,W0.data)}else $.compressedTexImage2D(J.TEXTURE_2D,s,H0,W0.width,W0.height,0,W0.data);else m0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(S0){if(v)$.texSubImage2D(J.TEXTURE_2D,s,0,0,W0.width,W0.height,M0,f0,W0.data)}else $.texImage2D(J.TEXTURE_2D,s,H0,W0.width,W0.height,0,M0,f0,W0.data)}else if(D.isDataArrayTexture)if(S0){if(d0)$.texStorage3D(J.TEXTURE_2D_ARRAY,G0,H0,r.width,r.height,r.depth);if(v)if(D.layerUpdates.size>0){let s=eZ(r.width,r.height,D.format,D.type);for(let F0 of D.layerUpdates){let I0=r.data.subarray(F0*s/r.data.BYTES_PER_ELEMENT,(F0+1)*s/r.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,F0,r.width,r.height,1,M0,f0,I0)}D.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,r.width,r.height,r.depth,M0,f0,r.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,H0,r.width,r.height,r.depth,0,M0,f0,r.data);else if(D.isData3DTexture)if(S0){if(d0)$.texStorage3D(J.TEXTURE_3D,G0,H0,r.width,r.height,r.depth);if(v)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,r.width,r.height,r.depth,M0,f0,r.data)}else $.texImage3D(J.TEXTURE_3D,0,H0,r.width,r.height,r.depth,0,M0,f0,r.data);else if(D.isFramebufferTexture){if(d0)if(S0)$.texStorage2D(J.TEXTURE_2D,G0,H0,r.width,r.height);else{let{width:s,height:F0}=r;for(let I0=0;I0<G0;I0++)$.texImage2D(J.TEXTURE_2D,I0,H0,s,F0,0,M0,f0,null),s>>=1,F0>>=1}}else if(D.isHTMLTexture){if("texElementImage2D"in J){let s=J.canvas;if(!s.hasAttribute("layoutsubtree"))s.setAttribute("layoutsubtree","true");if(r.parentNode!==s){s.appendChild(r),G.add(D),s.onpaint=(F0)=>{let I0=F0.changedElements;for(let $0 of G)if(I0.includes($0.image))$0.needsUpdate=!0},s.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,r);else{let{RGBA:I0,RGBA:$0,UNSIGNED_BYTE:E0}=J;J.texElementImage2D(J.TEXTURE_2D,0,I0,$0,E0,r)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(C0.length>0){if(S0&&d0){let s=r0(C0[0]);$.texStorage2D(J.TEXTURE_2D,G0,H0,s.width,s.height)}for(let s=0,F0=C0.length;s<F0;s++)if(W0=C0[s],S0){if(v)$.texSubImage2D(J.TEXTURE_2D,s,0,0,M0,f0,W0)}else $.texImage2D(J.TEXTURE_2D,s,H0,M0,f0,W0);D.generateMipmaps=!1}else if(S0){if(d0){let s=r0(r);$.texStorage2D(J.TEXTURE_2D,G0,H0,s.width,s.height)}if(v)$.texSubImage2D(J.TEXTURE_2D,0,0,0,M0,f0,r)}else $.texImage2D(J.TEXTURE_2D,0,H0,M0,f0,r);if(E(D))C(l);if(O0.__version=X0.version,D.onUpdate)D.onUpdate(D)}B.__version=D.version}function JJ(B,D,S){if(D.image.length!==6)return;let l=U0(B,D),Q0=D.source;$.bindTexture(J.TEXTURE_CUBE_MAP,B.__webglTexture,J.TEXTURE0+S);let X0=Z.get(Q0);if(Q0.version!==X0.__version||l===!0){$.activeTexture(J.TEXTURE0+S);let O0=WJ.getPrimaries(WJ.workingColorSpace),c=D.colorSpace===x8?null:WJ.getPrimaries(D.colorSpace),r=D.colorSpace===x8||O0===c?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,D.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),$.pixelStorei(J.UNPACK_ALIGNMENT,D.unpackAlignment),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,r);let M0=D.isCompressedTexture||D.image[0].isCompressedTexture,f0=D.image[0]&&D.image[0].isDataTexture,H0=[];for(let $0=0;$0<6;$0++){if(!M0&&!f0)H0[$0]=O(D.image[$0],!0,K.maxCubemapSize);else H0[$0]=f0?D.image[$0].image:D.image[$0];H0[$0]=a0(D,H0[$0])}let W0=H0[0],C0=W.convert(D.format,D.colorSpace),S0=W.convert(D.type),d0=L(D.internalFormat,C0,S0,D.normalized,D.colorSpace),v=D.isVideoTexture!==!0,G0=X0.__version===void 0||l===!0,s=Q0.dataReady,F0=w(D,W0);o(J.TEXTURE_CUBE_MAP,D);let I0;if(M0){if(v&&G0)$.texStorage2D(J.TEXTURE_CUBE_MAP,F0,d0,W0.width,W0.height);for(let $0=0;$0<6;$0++){I0=H0[$0].mipmaps;for(let E0=0;E0<I0.length;E0++){let s0=I0[E0];if(D.format!==x9)if(C0!==null)if(v){if(s)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+$0,E0,0,0,s0.width,s0.height,C0,s0.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+$0,E0,d0,s0.width,s0.height,0,s0.data);else m0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(v){if(s)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+$0,E0,0,0,s0.width,s0.height,C0,S0,s0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+$0,E0,d0,s0.width,s0.height,0,C0,S0,s0.data)}}}else{if(I0=D.mipmaps,v&&G0){if(I0.length>0)F0++;let $0=r0(H0[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,F0,d0,$0.width,$0.height)}for(let $0=0;$0<6;$0++)if(f0){if(v){if(s)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+$0,0,0,0,H0[$0].width,H0[$0].height,C0,S0,H0[$0].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+$0,0,d0,H0[$0].width,H0[$0].height,0,C0,S0,H0[$0].data);for(let E0=0;E0<I0.length;E0++){let qJ=I0[E0].image[$0].image;if(v){if(s)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+$0,E0+1,0,0,qJ.width,qJ.height,C0,S0,qJ.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+$0,E0+1,d0,qJ.width,qJ.height,0,C0,S0,qJ.data)}}else{if(v){if(s)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+$0,0,0,0,C0,S0,H0[$0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+$0,0,d0,C0,S0,H0[$0]);for(let E0=0;E0<I0.length;E0++){let s0=I0[E0];if(v){if(s)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+$0,E0+1,0,0,C0,S0,s0.image[$0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+$0,E0+1,d0,C0,S0,s0.image[$0])}}}if(E(D))C(J.TEXTURE_CUBE_MAP);if(X0.__version=Q0.version,D.onUpdate)D.onUpdate(D)}B.__version=D.version}function l0(B,D,S,l,Q0,X0){let O0=W.convert(S.format,S.colorSpace),c=W.convert(S.type),r=L(S.internalFormat,O0,c,S.normalized,S.colorSpace),M0=Z.get(D),f0=Z.get(S);if(f0.__renderTarget=D,!M0.__hasExternalTextures){let H0=Math.max(1,D.width>>X0),W0=Math.max(1,D.height>>X0);if(Q0===J.TEXTURE_3D||Q0===J.TEXTURE_2D_ARRAY)$.texImage3D(Q0,X0,r,H0,W0,D.depth,0,O0,c,null);else $.texImage2D(Q0,X0,r,H0,W0,0,O0,c,null)}if($.bindFramebuffer(J.FRAMEBUFFER,B),T(D))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,l,Q0,f0.__webglTexture,0,c0(D));else if(Q0===J.TEXTURE_2D||Q0>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&Q0<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,l,Q0,f0.__webglTexture,X0);$.bindFramebuffer(J.FRAMEBUFFER,null)}function u0(B,D,S){if(J.bindRenderbuffer(J.RENDERBUFFER,B),D.depthBuffer){let l=D.depthTexture,Q0=l&&l.isDepthTexture?l.type:null,X0=A(D.stencilBuffer,Q0),O0=D.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(T(D))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,c0(D),X0,D.width,D.height);else if(S)J.renderbufferStorageMultisample(J.RENDERBUFFER,c0(D),X0,D.width,D.height);else J.renderbufferStorage(J.RENDERBUFFER,X0,D.width,D.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,O0,J.RENDERBUFFER,B)}else{let l=D.textures;for(let Q0=0;Q0<l.length;Q0++){let X0=l[Q0],O0=W.convert(X0.format,X0.colorSpace),c=W.convert(X0.type),r=L(X0.internalFormat,O0,c,X0.normalized,X0.colorSpace);if(T(D))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,c0(D),r,D.width,D.height);else if(S)J.renderbufferStorageMultisample(J.RENDERBUFFER,c0(D),r,D.width,D.height);else J.renderbufferStorage(J.RENDERBUFFER,r,D.width,D.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function t(B,D,S){let l=D.isWebGLCubeRenderTarget===!0;if($.bindFramebuffer(J.FRAMEBUFFER,B),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q0=Z.get(D.depthTexture);if(Q0.__renderTarget=D,!Q0.__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0;if(l){if(Q0.__webglInit===void 0)Q0.__webglInit=!0,D.depthTexture.addEventListener("dispose",_);if(Q0.__webglTexture===void 0){Q0.__webglTexture=J.createTexture(),$.bindTexture(J.TEXTURE_CUBE_MAP,Q0.__webglTexture),o(J.TEXTURE_CUBE_MAP,D.depthTexture);let M0=W.convert(D.depthTexture.format),f0=W.convert(D.depthTexture.type),H0;if(D.depthTexture.format===y8)H0=J.DEPTH_COMPONENT24;else if(D.depthTexture.format===b8)H0=J.DEPTH24_STENCIL8;for(let W0=0;W0<6;W0++)J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+W0,0,H0,D.width,D.height,0,M0,f0,null)}}else e(D.depthTexture,0);let X0=Q0.__webglTexture,O0=c0(D),c=l?J.TEXTURE_CUBE_MAP_POSITIVE_X+S:J.TEXTURE_2D,r=D.depthTexture.format===b8?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(D.depthTexture.format===y8)if(T(D))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,r,c,X0,0,O0);else J.framebufferTexture2D(J.FRAMEBUFFER,r,c,X0,0);else if(D.depthTexture.format===b8)if(T(D))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,r,c,X0,0,O0);else J.framebufferTexture2D(J.FRAMEBUFFER,r,c,X0,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Z0(B){let D=Z.get(B),S=B.isWebGLCubeRenderTarget===!0;if(D.__boundDepthTexture!==B.depthTexture){let l=B.depthTexture;if(D.__depthDisposeCallback)D.__depthDisposeCallback();if(l){let Q0=()=>{delete D.__boundDepthTexture,delete D.__depthDisposeCallback,l.removeEventListener("dispose",Q0)};l.addEventListener("dispose",Q0),D.__depthDisposeCallback=Q0}D.__boundDepthTexture=l}if(B.depthTexture&&!D.__autoAllocateDepthBuffer)if(S)for(let l=0;l<6;l++)t(D.__webglFramebuffer[l],B,l);else{let l=B.texture.mipmaps;if(l&&l.length>0)t(D.__webglFramebuffer[0],B,0);else t(D.__webglFramebuffer,B,0)}else if(S){D.__webglDepthbuffer=[];for(let l=0;l<6;l++)if($.bindFramebuffer(J.FRAMEBUFFER,D.__webglFramebuffer[l]),D.__webglDepthbuffer[l]===void 0)D.__webglDepthbuffer[l]=J.createRenderbuffer(),u0(D.__webglDepthbuffer[l],B,!1);else{let Q0=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,X0=D.__webglDepthbuffer[l];J.bindRenderbuffer(J.RENDERBUFFER,X0),J.framebufferRenderbuffer(J.FRAMEBUFFER,Q0,J.RENDERBUFFER,X0)}}else{let l=B.texture.mipmaps;if(l&&l.length>0)$.bindFramebuffer(J.FRAMEBUFFER,D.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,D.__webglFramebuffer);if(D.__webglDepthbuffer===void 0)D.__webglDepthbuffer=J.createRenderbuffer(),u0(D.__webglDepthbuffer,B,!1);else{let Q0=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,X0=D.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,X0),J.framebufferRenderbuffer(J.FRAMEBUFFER,Q0,J.RENDERBUFFER,X0)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function J0(B,D,S){let l=Z.get(B);if(D!==void 0)l0(l.__webglFramebuffer,B,B.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(S!==void 0)Z0(B)}function L0(B){let D=B.texture,S=Z.get(B),l=Z.get(D);B.addEventListener("dispose",V);let Q0=B.textures,X0=B.isWebGLCubeRenderTarget===!0,O0=Q0.length>1;if(!O0){if(l.__webglTexture===void 0)l.__webglTexture=J.createTexture();l.__version=D.version,X.memory.textures++}if(X0){S.__webglFramebuffer=[];for(let c=0;c<6;c++)if(D.mipmaps&&D.mipmaps.length>0){S.__webglFramebuffer[c]=[];for(let r=0;r<D.mipmaps.length;r++)S.__webglFramebuffer[c][r]=J.createFramebuffer()}else S.__webglFramebuffer[c]=J.createFramebuffer()}else{if(D.mipmaps&&D.mipmaps.length>0){S.__webglFramebuffer=[];for(let c=0;c<D.mipmaps.length;c++)S.__webglFramebuffer[c]=J.createFramebuffer()}else S.__webglFramebuffer=J.createFramebuffer();if(O0)for(let c=0,r=Q0.length;c<r;c++){let M0=Z.get(Q0[c]);if(M0.__webglTexture===void 0)M0.__webglTexture=J.createTexture(),X.memory.textures++}if(B.samples>0&&T(B)===!1){S.__webglMultisampledFramebuffer=J.createFramebuffer(),S.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,S.__webglMultisampledFramebuffer);for(let c=0;c<Q0.length;c++){let r=Q0[c];S.__webglColorRenderbuffer[c]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,S.__webglColorRenderbuffer[c]);let M0=W.convert(r.format,r.colorSpace),f0=W.convert(r.type),H0=L(r.internalFormat,M0,f0,r.normalized,r.colorSpace,B.isXRRenderTarget===!0),W0=c0(B);J.renderbufferStorageMultisample(J.RENDERBUFFER,W0,H0,B.width,B.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+c,J.RENDERBUFFER,S.__webglColorRenderbuffer[c])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),B.depthBuffer)S.__webglDepthRenderbuffer=J.createRenderbuffer(),u0(S.__webglDepthRenderbuffer,B,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(X0){$.bindTexture(J.TEXTURE_CUBE_MAP,l.__webglTexture),o(J.TEXTURE_CUBE_MAP,D);for(let c=0;c<6;c++)if(D.mipmaps&&D.mipmaps.length>0)for(let r=0;r<D.mipmaps.length;r++)l0(S.__webglFramebuffer[c][r],B,D,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+c,r);else l0(S.__webglFramebuffer[c],B,D,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+c,0);if(E(D))C(J.TEXTURE_CUBE_MAP);$.unbindTexture()}else if(O0){for(let c=0,r=Q0.length;c<r;c++){let M0=Q0[c],f0=Z.get(M0),H0=J.TEXTURE_2D;if(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)H0=B.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(H0,f0.__webglTexture),o(H0,M0),l0(S.__webglFramebuffer,B,M0,J.COLOR_ATTACHMENT0+c,H0,0),E(M0))C(H0)}$.unbindTexture()}else{let c=J.TEXTURE_2D;if(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)c=B.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(c,l.__webglTexture),o(c,D),D.mipmaps&&D.mipmaps.length>0)for(let r=0;r<D.mipmaps.length;r++)l0(S.__webglFramebuffer[r],B,D,J.COLOR_ATTACHMENT0,c,r);else l0(S.__webglFramebuffer,B,D,J.COLOR_ATTACHMENT0,c,0);if(E(D))C(c);$.unbindTexture()}if(B.depthBuffer)Z0(B)}function A0(B){let D=B.textures;for(let S=0,l=D.length;S<l;S++){let Q0=D[S];if(E(Q0)){let X0=P(B),O0=Z.get(Q0).__webglTexture;$.bindTexture(X0,O0),C(X0),$.unbindTexture()}}}let v0=[],b0=[];function n0(B){if(B.samples>0){if(T(B)===!1){let{textures:D,width:S,height:l}=B,Q0=J.COLOR_BUFFER_BIT,X0=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,O0=Z.get(B),c=D.length>1;if(c)for(let M0=0;M0<D.length;M0++)$.bindFramebuffer(J.FRAMEBUFFER,O0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+M0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,O0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+M0,J.TEXTURE_2D,null,0);$.bindFramebuffer(J.READ_FRAMEBUFFER,O0.__webglMultisampledFramebuffer);let r=B.texture.mipmaps;if(r&&r.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,O0.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,O0.__webglFramebuffer);for(let M0=0;M0<D.length;M0++){if(B.resolveDepthBuffer){if(B.depthBuffer)Q0|=J.DEPTH_BUFFER_BIT;if(B.stencilBuffer&&B.resolveStencilBuffer)Q0|=J.STENCIL_BUFFER_BIT}if(c){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,O0.__webglColorRenderbuffer[M0]);let f0=Z.get(D[M0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,f0,0)}if(J.blitFramebuffer(0,0,S,l,0,0,S,l,Q0,J.NEAREST),U===!0){if(v0.length=0,b0.length=0,v0.push(J.COLOR_ATTACHMENT0+M0),B.depthBuffer&&B.resolveDepthBuffer===!1)v0.push(X0),b0.push(X0),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,b0);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,v0)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),c)for(let M0=0;M0<D.length;M0++){$.bindFramebuffer(J.FRAMEBUFFER,O0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+M0,J.RENDERBUFFER,O0.__webglColorRenderbuffer[M0]);let f0=Z.get(D[M0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,O0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+M0,J.TEXTURE_2D,f0,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,O0.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&U){let D=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[D])}}}function c0(B){return Math.min(K.maxSamples,B.samples)}function T(B){let D=Z.get(B);return B.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function NJ(B){let D=X.render.frame;if(N.get(B)!==D)N.set(B,D),B.update()}function a0(B,D){let{colorSpace:S,format:l,type:Q0}=B;if(B.isCompressedTexture===!0||B.isVideoTexture===!0)return D;if(S!==kZ&&S!==x8)if(WJ.getTransfer(S)===VJ){if(l!==x9||Q0!==C9)m0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else p0("WebGLTextures: Unsupported texture color space:",S);return D}function r0(B){if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement)H.width=B.naturalWidth||B.width,H.height=B.naturalHeight||B.height;else if(typeof VideoFrame<"u"&&B instanceof VideoFrame)H.width=B.displayWidth,H.height=B.displayHeight;else H.width=B.width,H.height=B.height;return H}this.allocateTextureUnit=n,this.resetTextureUnits=i,this.getTextureUnits=x,this.setTextureUnits=u,this.setTexture2D=e,this.setTexture2DArray=K0,this.setTexture3D=Y0,this.setTextureCube=P0,this.rebindTextures=J0,this.setupRenderTarget=L0,this.updateRenderTargetMipmap=A0,this.updateMultisampleRenderTarget=n0,this.setupDepthRenderbuffer=Z0,this.setupFrameBufferTexture=l0,this.useMultisampledRTT=T,this.isReversedDepthBuffer=function(){return $.buffers.depth.getReversed()}}function ZN(J,Q){function $(Z,K=x8){let W,X=WJ.getTransfer(K);if(Z===C9)return J.UNSIGNED_BYTE;if(Z===y$)return J.UNSIGNED_SHORT_4_4_4_4;if(Z===b$)return J.UNSIGNED_SHORT_5_5_5_1;if(Z===gW)return J.UNSIGNED_INT_5_9_9_9_REV;if(Z===pW)return J.UNSIGNED_INT_10F_11F_11F_REV;if(Z===hW)return J.BYTE;if(Z===xW)return J.SHORT;if(Z===K6)return J.UNSIGNED_SHORT;if(Z===f$)return J.INT;if(Z===E8)return J.UNSIGNED_INT;if(Z===J8)return J.FLOAT;if(Z===Q8)return J.HALF_FLOAT;if(Z===mW)return J.ALPHA;if(Z===lW)return J.RGB;if(Z===x9)return J.RGBA;if(Z===y8)return J.DEPTH_COMPONENT;if(Z===b8)return J.DEPTH_STENCIL;if(Z===dW)return J.RED;if(Z===h$)return J.RED_INTEGER;if(Z===h8)return J.RG;if(Z===x$)return J.RG_INTEGER;if(Z===g$)return J.RGBA_INTEGER;if(Z===UQ||Z===HQ||Z===qQ||Z===NQ)if(X===VJ)if(W=Q.get("WEBGL_compressed_texture_s3tc_srgb"),W!==null){if(Z===UQ)return W.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===HQ)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===qQ)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===NQ)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(W=Q.get("WEBGL_compressed_texture_s3tc"),W!==null){if(Z===UQ)return W.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===HQ)return W.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===qQ)return W.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===NQ)return W.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===p$||Z===m$||Z===l$||Z===d$)if(W=Q.get("WEBGL_compressed_texture_pvrtc"),W!==null){if(Z===p$)return W.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===m$)return W.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===l$)return W.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===d$)return W.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===u$||Z===c$||Z===n$||Z===s$||Z===i$||Z===GQ||Z===o$)if(W=Q.get("WEBGL_compressed_texture_etc"),W!==null){if(Z===u$||Z===c$)return X===VJ?W.COMPRESSED_SRGB8_ETC2:W.COMPRESSED_RGB8_ETC2;if(Z===n$)return X===VJ?W.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:W.COMPRESSED_RGBA8_ETC2_EAC;if(Z===s$)return W.COMPRESSED_R11_EAC;if(Z===i$)return W.COMPRESSED_SIGNED_R11_EAC;if(Z===GQ)return W.COMPRESSED_RG11_EAC;if(Z===o$)return W.COMPRESSED_SIGNED_RG11_EAC}else return null;if(Z===a$||Z===r$||Z===t$||Z===e$||Z===JZ||Z===QZ||Z===$Z||Z===ZZ||Z===KZ||Z===WZ||Z===XZ||Z===YZ||Z===UZ||Z===HZ)if(W=Q.get("WEBGL_compressed_texture_astc"),W!==null){if(Z===a$)return X===VJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:W.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===r$)return X===VJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:W.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===t$)return X===VJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:W.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===e$)return X===VJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:W.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===JZ)return X===VJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:W.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===QZ)return X===VJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:W.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===$Z)return X===VJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:W.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===ZZ)return X===VJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:W.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===KZ)return X===VJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:W.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===WZ)return X===VJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:W.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===XZ)return X===VJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:W.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===YZ)return X===VJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:W.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===UZ)return X===VJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:W.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===HZ)return X===VJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:W.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===qZ||Z===NZ||Z===GZ)if(W=Q.get("EXT_texture_compression_bptc"),W!==null){if(Z===qZ)return X===VJ?W.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:W.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===NZ)return W.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===GZ)return W.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===FZ||Z===OZ||Z===FQ||Z===EZ)if(W=Q.get("EXT_texture_compression_rgtc"),W!==null){if(Z===FZ)return W.COMPRESSED_RED_RGTC1_EXT;if(Z===OZ)return W.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===FQ)return W.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===EZ)return W.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===z7)return J.UNSIGNED_INT_24_8;return J[Z]!==void 0?J[Z]:null}return{convert:$}}var KN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WN=`
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

}`;class cX{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new BQ(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new L9({vertexShader:KN,fragmentShader:WN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new x0(new oJ(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nX extends $8{constructor(J,Q){super();let $=this,Z=null,K=1,W=null,X="local-floor",Y=1,U=null,H=null,N=null,G=null,q=null,F=null,k=typeof XRWebGLBinding<"u",I=new cX,O={},E=Q.getContextAttributes(),C=null,P=null,L=[],A=[],w=new D0,_=null,V=new nJ;V.viewport=new IJ;let M=new nJ;M.viewport=new IJ;let m=[V,M],R=new oZ,p=null,i=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(o){let U0=L[o];if(U0===void 0)U0=new Y6,L[o]=U0;return U0.getTargetRaySpace()},this.getControllerGrip=function(o){let U0=L[o];if(U0===void 0)U0=new Y6,L[o]=U0;return U0.getGripSpace()},this.getHand=function(o){let U0=L[o];if(U0===void 0)U0=new Y6,L[o]=U0;return U0.getHandSpace()};function x(o){let U0=A.indexOf(o.inputSource);if(U0===-1)return;let V0=L[U0];if(V0!==void 0)V0.update(o.inputSource,o.frame,U||W),V0.dispatchEvent({type:o.type,data:o.inputSource})}function u(){Z.removeEventListener("select",x),Z.removeEventListener("selectstart",x),Z.removeEventListener("selectend",x),Z.removeEventListener("squeeze",x),Z.removeEventListener("squeezestart",x),Z.removeEventListener("squeezeend",x),Z.removeEventListener("end",u),Z.removeEventListener("inputsourceschange",n);for(let o=0;o<L.length;o++){let U0=A[o];if(U0===null)continue;A[o]=null,L[o].disconnect(U0)}p=null,i=null,I.reset();for(let o in O)delete O[o];J.setRenderTarget(C),q=null,G=null,N=null,Z=null,P=null,XJ.stop(),$.isPresenting=!1,J.setPixelRatio(_),J.setSize(w.width,w.height,!1),$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(o){if(K=o,$.isPresenting===!0)m0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(o){if(X=o,$.isPresenting===!0)m0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return U||W},this.setReferenceSpace=function(o){U=o},this.getBaseLayer=function(){return G!==null?G:q},this.getBinding=function(){if(N===null&&k)N=new XRWebGLBinding(Z,Q);return N},this.getFrame=function(){return F},this.getSession=function(){return Z},this.setSession=async function(o){if(Z=o,Z!==null){if(C=J.getRenderTarget(),Z.addEventListener("select",x),Z.addEventListener("selectstart",x),Z.addEventListener("selectend",x),Z.addEventListener("squeeze",x),Z.addEventListener("squeezestart",x),Z.addEventListener("squeezeend",x),Z.addEventListener("end",u),Z.addEventListener("inputsourceschange",n),E.xrCompatible!==!0)await Q.makeXRCompatible();if(_=J.getPixelRatio(),J.getSize(w),!(k&&("createProjectionLayer"in XRWebGLBinding.prototype))){let V0={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:K};q=new XRWebGLLayer(Z,Q,V0),Z.updateRenderState({baseLayer:q}),J.setPixelRatio(1),J.setSize(q.framebufferWidth,q.framebufferHeight,!1),P=new k9(q.framebufferWidth,q.framebufferHeight,{format:x9,type:C9,colorSpace:J.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:q.ignoreDepthValues===!1,resolveStencilBuffer:q.ignoreDepthValues===!1})}else{let V0=null,N0=null,y0=null;if(E.depth)y0=E.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,V0=E.stencil?b8:y8,N0=E.stencil?z7:E8;let JJ={colorFormat:Q.RGBA8,depthFormat:y0,scaleFactor:K};N=this.getBinding(),G=N.createProjectionLayer(JJ),Z.updateRenderState({layers:[G]}),J.setPixelRatio(1),J.setSize(G.textureWidth,G.textureHeight,!1),P=new k9(G.textureWidth,G.textureHeight,{format:x9,type:C9,depthTexture:new k8(G.textureWidth,G.textureHeight,N0,void 0,void 0,void 0,void 0,void 0,void 0,V0),stencilBuffer:E.stencil,colorSpace:J.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:G.ignoreDepthValues===!1,resolveStencilBuffer:G.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(Y),U=null,W=await Z.requestReferenceSpace(X),XJ.setContext(Z),XJ.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return I.getDepthTexture()};function n(o){for(let U0=0;U0<o.removed.length;U0++){let V0=o.removed[U0],N0=A.indexOf(V0);if(N0>=0)A[N0]=null,L[N0].disconnect(V0)}for(let U0=0;U0<o.added.length;U0++){let V0=o.added[U0],N0=A.indexOf(V0);if(N0===-1){for(let JJ=0;JJ<L.length;JJ++)if(JJ>=A.length){A.push(V0),N0=JJ;break}else if(A[JJ]===null){A[JJ]=V0,N0=JJ;break}if(N0===-1)break}let y0=L[N0];if(y0)y0.connect(V0)}}let g=new j,e=new j;function K0(o,U0,V0){g.setFromMatrixPosition(U0.matrixWorld),e.setFromMatrixPosition(V0.matrixWorld);let N0=g.distanceTo(e),y0=U0.projectionMatrix.elements,JJ=V0.projectionMatrix.elements,l0=y0[14]/(y0[10]-1),u0=y0[14]/(y0[10]+1),t=(y0[9]+1)/y0[5],Z0=(y0[9]-1)/y0[5],J0=(y0[8]-1)/y0[0],L0=(JJ[8]+1)/JJ[0],A0=l0*J0,v0=l0*L0,b0=N0/(-J0+L0),n0=b0*-J0;if(U0.matrixWorld.decompose(o.position,o.quaternion,o.scale),o.translateX(n0),o.translateZ(b0),o.matrixWorld.compose(o.position,o.quaternion,o.scale),o.matrixWorldInverse.copy(o.matrixWorld).invert(),y0[10]===-1)o.projectionMatrix.copy(U0.projectionMatrix),o.projectionMatrixInverse.copy(U0.projectionMatrixInverse);else{let c0=l0+b0,T=u0+b0,NJ=A0-n0,a0=v0+(N0-n0),r0=t*u0/T*c0,B=Z0*u0/T*c0;o.projectionMatrix.makePerspective(NJ,a0,r0,B,c0,T),o.projectionMatrixInverse.copy(o.projectionMatrix).invert()}}function Y0(o,U0){if(U0===null)o.matrixWorld.copy(o.matrix);else o.matrixWorld.multiplyMatrices(U0.matrixWorld,o.matrix);o.matrixWorldInverse.copy(o.matrixWorld).invert()}this.updateCamera=function(o){if(Z===null)return;let{near:U0,far:V0}=o;if(I.texture!==null){if(I.depthNear>0)U0=I.depthNear;if(I.depthFar>0)V0=I.depthFar}if(R.near=M.near=V.near=U0,R.far=M.far=V.far=V0,p!==R.near||i!==R.far)Z.updateRenderState({depthNear:R.near,depthFar:R.far}),p=R.near,i=R.far;R.layers.mask=o.layers.mask|6,V.layers.mask=R.layers.mask&-5,M.layers.mask=R.layers.mask&-3;let N0=o.parent,y0=R.cameras;Y0(R,N0);for(let JJ=0;JJ<y0.length;JJ++)Y0(y0[JJ],N0);if(y0.length===2)K0(R,V,M);else R.projectionMatrix.copy(V.projectionMatrix);P0(o,R,N0)};function P0(o,U0,V0){if(V0===null)o.matrix.copy(U0.matrixWorld);else o.matrix.copy(V0.matrixWorld),o.matrix.invert(),o.matrix.multiply(U0.matrixWorld);if(o.matrix.decompose(o.position,o.quaternion,o.scale),o.updateMatrixWorld(!0),o.projectionMatrix.copy(U0.projectionMatrix),o.projectionMatrixInverse.copy(U0.projectionMatrixInverse),o.isPerspectiveCamera)o.fov=JQ*2*Math.atan(1/o.projectionMatrix.elements[5]),o.zoom=1}this.getCamera=function(){return R},this.getFoveation=function(){if(G===null&&q===null)return;return Y},this.setFoveation=function(o){if(Y=o,G!==null)G.fixedFoveation=o;if(q!==null&&q.fixedFoveation!==void 0)q.fixedFoveation=o},this.hasDepthSensing=function(){return I.texture!==null},this.getDepthSensingMesh=function(){return I.getMesh(R)},this.getCameraTexture=function(o){return O[o]};let k0=null;function UJ(o,U0){if(H=U0.getViewerPose(U||W),F=U0,H!==null){let V0=H.views;if(q!==null)J.setRenderTargetFramebuffer(P,q.framebuffer),J.setRenderTarget(P);let N0=!1;if(V0.length!==R.cameras.length)R.cameras.length=0,N0=!0;for(let u0=0;u0<V0.length;u0++){let t=V0[u0],Z0=null;if(q!==null)Z0=q.getViewport(t);else{let L0=N.getViewSubImage(G,t);if(Z0=L0.viewport,u0===0)J.setRenderTargetTextures(P,L0.colorTexture,L0.depthStencilTexture),J.setRenderTarget(P)}let J0=m[u0];if(J0===void 0)J0=new nJ,J0.layers.enable(u0),J0.viewport=new IJ,m[u0]=J0;if(J0.matrix.fromArray(t.transform.matrix),J0.matrix.decompose(J0.position,J0.quaternion,J0.scale),J0.projectionMatrix.fromArray(t.projectionMatrix),J0.projectionMatrixInverse.copy(J0.projectionMatrix).invert(),J0.viewport.set(Z0.x,Z0.y,Z0.width,Z0.height),u0===0)R.matrix.copy(J0.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale);if(N0===!0)R.cameras.push(J0)}let y0=Z.enabledFeatures;if(y0&&y0.includes("depth-sensing")&&Z.depthUsage=="gpu-optimized"&&k){N=$.getBinding();let u0=N.getDepthInformation(V0[0]);if(u0&&u0.isValid&&u0.texture)I.init(u0,Z.renderState)}if(y0&&y0.includes("camera-access")&&k){J.state.unbindTexture(),N=$.getBinding();for(let u0=0;u0<V0.length;u0++){let t=V0[u0].camera;if(t){let Z0=O[t];if(!Z0)Z0=new BQ,O[t]=Z0;let J0=N.getCameraImage(t);Z0.sourceTexture=J0}}}}for(let V0=0;V0<L.length;V0++){let N0=A[V0],y0=L[V0];if(N0!==null&&y0!==void 0)y0.update(N0,U0,U||W)}if(k0)k0(o,U0);if(U0.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:U0});F=null}let XJ=new fX;XJ.setAnimationLoop(UJ),this.setAnimationLoop=function(o){k0=o},this.dispose=function(){}}}var XN=new RJ,sX=new o0;sX.set(-1,0,0,0,1,0,0,0,1);function YN(J,Q){function $(O,E){if(O.matrixAutoUpdate===!0)O.updateMatrix();E.value.copy(O.matrix)}function Z(O,E){if(E.color.getRGB(O.fogColor.value,vZ(J)),E.isFog)O.fogNear.value=E.near,O.fogFar.value=E.far;else if(E.isFogExp2)O.fogDensity.value=E.density}function K(O,E,C,P,L){if(E.isNodeMaterial)E.uniformsNeedUpdate=!1;else if(E.isMeshBasicMaterial)W(O,E);else if(E.isMeshLambertMaterial){if(W(O,E),E.envMap)O.envMapIntensity.value=E.envMapIntensity}else if(E.isMeshToonMaterial)W(O,E),G(O,E);else if(E.isMeshPhongMaterial){if(W(O,E),N(O,E),E.envMap)O.envMapIntensity.value=E.envMapIntensity}else if(E.isMeshStandardMaterial){if(W(O,E),q(O,E),E.isMeshPhysicalMaterial)F(O,E,L)}else if(E.isMeshMatcapMaterial)W(O,E),k(O,E);else if(E.isMeshDepthMaterial)W(O,E);else if(E.isMeshDistanceMaterial)W(O,E),I(O,E);else if(E.isMeshNormalMaterial)W(O,E);else if(E.isLineBasicMaterial){if(X(O,E),E.isLineDashedMaterial)Y(O,E)}else if(E.isPointsMaterial)U(O,E,C,P);else if(E.isSpriteMaterial)H(O,E);else if(E.isShadowMaterial)O.color.value.copy(E.color),O.opacity.value=E.opacity;else if(E.isShaderMaterial)E.uniformsNeedUpdate=!1}function W(O,E){if(O.opacity.value=E.opacity,E.color)O.diffuse.value.copy(E.color);if(E.emissive)O.emissive.value.copy(E.emissive).multiplyScalar(E.emissiveIntensity);if(E.map)O.map.value=E.map,$(E.map,O.mapTransform);if(E.alphaMap)O.alphaMap.value=E.alphaMap,$(E.alphaMap,O.alphaMapTransform);if(E.bumpMap){if(O.bumpMap.value=E.bumpMap,$(E.bumpMap,O.bumpMapTransform),O.bumpScale.value=E.bumpScale,E.side===iJ)O.bumpScale.value*=-1}if(E.normalMap){if(O.normalMap.value=E.normalMap,$(E.normalMap,O.normalMapTransform),O.normalScale.value.copy(E.normalScale),E.side===iJ)O.normalScale.value.negate()}if(E.displacementMap)O.displacementMap.value=E.displacementMap,$(E.displacementMap,O.displacementMapTransform),O.displacementScale.value=E.displacementScale,O.displacementBias.value=E.displacementBias;if(E.emissiveMap)O.emissiveMap.value=E.emissiveMap,$(E.emissiveMap,O.emissiveMapTransform);if(E.specularMap)O.specularMap.value=E.specularMap,$(E.specularMap,O.specularMapTransform);if(E.alphaTest>0)O.alphaTest.value=E.alphaTest;let C=Q.get(E),P=C.envMap,L=C.envMapRotation;if(P){if(O.envMap.value=P,O.envMapRotation.value.setFromMatrix4(XN.makeRotationFromEuler(L)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1)O.envMapRotation.value.premultiply(sX);O.reflectivity.value=E.reflectivity,O.ior.value=E.ior,O.refractionRatio.value=E.refractionRatio}if(E.lightMap)O.lightMap.value=E.lightMap,O.lightMapIntensity.value=E.lightMapIntensity,$(E.lightMap,O.lightMapTransform);if(E.aoMap)O.aoMap.value=E.aoMap,O.aoMapIntensity.value=E.aoMapIntensity,$(E.aoMap,O.aoMapTransform)}function X(O,E){if(O.diffuse.value.copy(E.color),O.opacity.value=E.opacity,E.map)O.map.value=E.map,$(E.map,O.mapTransform)}function Y(O,E){O.dashSize.value=E.dashSize,O.totalSize.value=E.dashSize+E.gapSize,O.scale.value=E.scale}function U(O,E,C,P){if(O.diffuse.value.copy(E.color),O.opacity.value=E.opacity,O.size.value=E.size*C,O.scale.value=P*0.5,E.map)O.map.value=E.map,$(E.map,O.uvTransform);if(E.alphaMap)O.alphaMap.value=E.alphaMap,$(E.alphaMap,O.alphaMapTransform);if(E.alphaTest>0)O.alphaTest.value=E.alphaTest}function H(O,E){if(O.diffuse.value.copy(E.color),O.opacity.value=E.opacity,O.rotation.value=E.rotation,E.map)O.map.value=E.map,$(E.map,O.mapTransform);if(E.alphaMap)O.alphaMap.value=E.alphaMap,$(E.alphaMap,O.alphaMapTransform);if(E.alphaTest>0)O.alphaTest.value=E.alphaTest}function N(O,E){O.specular.value.copy(E.specular),O.shininess.value=Math.max(E.shininess,0.0001)}function G(O,E){if(E.gradientMap)O.gradientMap.value=E.gradientMap}function q(O,E){if(O.metalness.value=E.metalness,E.metalnessMap)O.metalnessMap.value=E.metalnessMap,$(E.metalnessMap,O.metalnessMapTransform);if(O.roughness.value=E.roughness,E.roughnessMap)O.roughnessMap.value=E.roughnessMap,$(E.roughnessMap,O.roughnessMapTransform);if(E.envMap)O.envMapIntensity.value=E.envMapIntensity}function F(O,E,C){if(O.ior.value=E.ior,E.sheen>0){if(O.sheenColor.value.copy(E.sheenColor).multiplyScalar(E.sheen),O.sheenRoughness.value=E.sheenRoughness,E.sheenColorMap)O.sheenColorMap.value=E.sheenColorMap,$(E.sheenColorMap,O.sheenColorMapTransform);if(E.sheenRoughnessMap)O.sheenRoughnessMap.value=E.sheenRoughnessMap,$(E.sheenRoughnessMap,O.sheenRoughnessMapTransform)}if(E.clearcoat>0){if(O.clearcoat.value=E.clearcoat,O.clearcoatRoughness.value=E.clearcoatRoughness,E.clearcoatMap)O.clearcoatMap.value=E.clearcoatMap,$(E.clearcoatMap,O.clearcoatMapTransform);if(E.clearcoatRoughnessMap)O.clearcoatRoughnessMap.value=E.clearcoatRoughnessMap,$(E.clearcoatRoughnessMap,O.clearcoatRoughnessMapTransform);if(E.clearcoatNormalMap){if(O.clearcoatNormalMap.value=E.clearcoatNormalMap,$(E.clearcoatNormalMap,O.clearcoatNormalMapTransform),O.clearcoatNormalScale.value.copy(E.clearcoatNormalScale),E.side===iJ)O.clearcoatNormalScale.value.negate()}}if(E.dispersion>0)O.dispersion.value=E.dispersion;if(E.iridescence>0){if(O.iridescence.value=E.iridescence,O.iridescenceIOR.value=E.iridescenceIOR,O.iridescenceThicknessMinimum.value=E.iridescenceThicknessRange[0],O.iridescenceThicknessMaximum.value=E.iridescenceThicknessRange[1],E.iridescenceMap)O.iridescenceMap.value=E.iridescenceMap,$(E.iridescenceMap,O.iridescenceMapTransform);if(E.iridescenceThicknessMap)O.iridescenceThicknessMap.value=E.iridescenceThicknessMap,$(E.iridescenceThicknessMap,O.iridescenceThicknessMapTransform)}if(E.transmission>0){if(O.transmission.value=E.transmission,O.transmissionSamplerMap.value=C.texture,O.transmissionSamplerSize.value.set(C.width,C.height),E.transmissionMap)O.transmissionMap.value=E.transmissionMap,$(E.transmissionMap,O.transmissionMapTransform);if(O.thickness.value=E.thickness,E.thicknessMap)O.thicknessMap.value=E.thicknessMap,$(E.thicknessMap,O.thicknessMapTransform);O.attenuationDistance.value=E.attenuationDistance,O.attenuationColor.value.copy(E.attenuationColor)}if(E.anisotropy>0){if(O.anisotropyVector.value.set(E.anisotropy*Math.cos(E.anisotropyRotation),E.anisotropy*Math.sin(E.anisotropyRotation)),E.anisotropyMap)O.anisotropyMap.value=E.anisotropyMap,$(E.anisotropyMap,O.anisotropyMapTransform)}if(O.specularIntensity.value=E.specularIntensity,O.specularColor.value.copy(E.specularColor),E.specularColorMap)O.specularColorMap.value=E.specularColorMap,$(E.specularColorMap,O.specularColorMapTransform);if(E.specularIntensityMap)O.specularIntensityMap.value=E.specularIntensityMap,$(E.specularIntensityMap,O.specularIntensityMapTransform)}function k(O,E){if(E.matcap)O.matcap.value=E.matcap}function I(O,E){let C=Q.get(E).light;O.referencePosition.value.setFromMatrixPosition(C.matrixWorld),O.nearDistance.value=C.shadow.camera.near,O.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:K}}function UN(J,Q,$,Z){let K={},W={},X=[],Y=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function U(L,A){let w=A.program;Z.uniformBlockBinding(L,w)}function H(L,A){let w=K[L.id];if(w===void 0)O(L),w=N(L),K[L.id]=w,L.addEventListener("dispose",C);let _=A.program;Z.updateUBOMapping(L,_);let V=Q.render.frame;if(W[L.id]!==V)q(L),W[L.id]=V}function N(L){let A=G();L.__bindingPointIndex=A;let w=J.createBuffer(),_=L.__size,V=L.usage;return J.bindBuffer(J.UNIFORM_BUFFER,w),J.bufferData(J.UNIFORM_BUFFER,_,V),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,A,w),w}function G(){for(let L=0;L<Y;L++)if(X.indexOf(L)===-1)return X.push(L),L;return p0("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function q(L){let A=K[L.id],w=L.uniforms,_=L.__cache;J.bindBuffer(J.UNIFORM_BUFFER,A);for(let V=0,M=w.length;V<M;V++){let m=w[V];if(Array.isArray(m))for(let R=0,p=m.length;R<p;R++)F(m[R],V,R,_);else F(m,V,0,_)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function F(L,A,w,_){if(I(L,A,w,_)===!0){let{__offset:V,value:M}=L;if(Array.isArray(M)){let m=0;for(let R=0;R<M.length;R++){let p=M[R],i=E(p);if(k(p,L.__data,m),typeof p!=="number"&&typeof p!=="boolean"&&!p.isMatrix3&&!ArrayBuffer.isView(p))m+=i.storage/Float32Array.BYTES_PER_ELEMENT}}else k(M,L.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,V,L.__data)}}function k(L,A,w){if(typeof L==="number"||typeof L==="boolean")A[0]=L;else if(L.isMatrix3)A[0]=L.elements[0],A[1]=L.elements[1],A[2]=L.elements[2],A[3]=0,A[4]=L.elements[3],A[5]=L.elements[4],A[6]=L.elements[5],A[7]=0,A[8]=L.elements[6],A[9]=L.elements[7],A[10]=L.elements[8],A[11]=0;else if(ArrayBuffer.isView(L))A.set(new L.constructor(L.buffer,L.byteOffset,A.length));else L.toArray(A,w)}function I(L,A,w,_){let V=L.value,M=A+"_"+w;if(_[M]===void 0){if(typeof V==="number"||typeof V==="boolean")_[M]=V;else if(ArrayBuffer.isView(V))_[M]=V.slice();else _[M]=V.clone();return!0}else{let m=_[M];if(typeof V==="number"||typeof V==="boolean"){if(m!==V)return _[M]=V,!0}else if(ArrayBuffer.isView(V))return!0;else if(m.equals(V)===!1)return m.copy(V),!0}return!1}function O(L){let A=L.uniforms,w=0,_=16;for(let M=0,m=A.length;M<m;M++){let R=Array.isArray(A[M])?A[M]:[A[M]];for(let p=0,i=R.length;p<i;p++){let x=R[p],u=Array.isArray(x.value)?x.value:[x.value];for(let n=0,g=u.length;n<g;n++){let e=u[n],K0=E(e),Y0=w%_,P0=Y0%K0.boundary,k0=Y0+P0;if(w+=P0,k0!==0&&_-k0<K0.storage)w+=_-k0;x.__data=new Float32Array(K0.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=w,w+=K0.storage}}}let V=w%_;if(V>0)w+=_-V;return L.__size=w,L.__cache={},this}function E(L){let A={boundary:0,storage:0};if(typeof L==="number"||typeof L==="boolean")A.boundary=4,A.storage=4;else if(L.isVector2)A.boundary=8,A.storage=8;else if(L.isVector3||L.isColor)A.boundary=16,A.storage=12;else if(L.isVector4)A.boundary=16,A.storage=16;else if(L.isMatrix3)A.boundary=48,A.storage=48;else if(L.isMatrix4)A.boundary=64,A.storage=64;else if(L.isTexture)m0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(L))A.boundary=16,A.storage=L.byteLength;else m0("WebGLRenderer: Unsupported uniform value type.",L);return A}function C(L){let A=L.target;A.removeEventListener("dispose",C);let w=X.indexOf(A.__bindingPointIndex);X.splice(w,1),J.deleteBuffer(K[A.id]),delete K[A.id],delete W[A.id]}function P(){for(let L in K)J.deleteBuffer(K[L]);X=[],K={},W={}}return{bind:U,update:H,dispose:P}}var HN=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),p9=null;function qN(){if(p9===null)p9=new LQ(HN,16,16,h8,Q8),p9.name="DFG_LUT",p9.minFilter=vJ,p9.magFilter=vJ,p9.wrapS=XQ,p9.wrapT=XQ,p9.generateMipmaps=!1,p9.needsUpdate=!0;return p9}class HK{constructor(J={}){let{canvas:Q=rW(),context:$=null,depth:Z=!0,stencil:K=!1,alpha:W=!1,antialias:X=!1,premultipliedAlpha:Y=!0,preserveDrawingBuffer:U=!1,powerPreference:H="default",failIfMajorPerformanceCaveat:N=!1,reversedDepthBuffer:G=!1,outputBufferType:q=C9}=J;this.isWebGLRenderer=!0;let F;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");F=$.getContextAttributes().alpha}else F=W;let k=q,I=new Set([g$,x$,h$]),O=new Set([C9,E8,K6,z7,y$,b$]),E=new Uint32Array(4),C=new Int32Array(4),P=new j,L=null,A=null,w=[],_=[],V=null;this.domElement=Q,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_9,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,m=!1,R=null,p=null,i=null,x=null;this._outputColorSpace=T9;let u=0,n=0,g=null,e=-1,K0=null,Y0=new IJ,P0=new IJ,k0=null,UJ=new QJ(0),XJ=0,o=Q.width,U0=Q.height,V0=1,N0=null,y0=null,JJ=new IJ(0,0,o,U0),l0=new IJ(0,0,o,U0),u0=!1,t=new U6,Z0=!1,J0=!1,L0=new RJ,A0=new j,v0=new IJ,b0={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},n0=!1;function c0(){return g===null?V0:1}let T=$;function NJ(z,f){return Q.getContext(z,f)}try{let z={alpha:!0,depth:Z,stencil:K,antialias:X,premultipliedAlpha:Y,preserveDrawingBuffer:U,powerPreference:H,failIfMajorPerformanceCaveat:N};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${QW}`);if(Q.addEventListener("webglcontextlost",s0,!1),Q.addEventListener("webglcontextrestored",qJ,!1),Q.addEventListener("webglcontextcreationerror",EJ,!1),T===null){if(T=NJ("webgl2",z),T===null)if(NJ("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(z){throw p0("WebGLRenderer: "+z.message),z}let a0,r0,B,D,S,l,Q0,X0,O0,c,r,M0,f0,H0,W0,C0,S0,d0,v,G0,s,F0,I0;function $0(){if(a0=new kq(T),a0.init(),s=new ZN(T,a0),r0=new Hq(T,a0,J,s),B=new QN(T,a0),r0.reversedDepthBuffer&&G)B.buffers.depth.setReversed(!0);p=T.createFramebuffer(),i=T.createFramebuffer(),x=T.createFramebuffer(),D=new Lq(T),S=new m1,l=new $N(T,a0,B,S,r0,s,D),Q0=new Dq(M),X0=new IU(T),F0=new Yq(T,X0),O0=new Rq(T,X0,D,F0),c=new Bq(T,O0,X0,F0,D),d0=new zq(T,r0,l),W0=new qq(S),r=new p1(M,Q0,a0,r0,F0,W0),M0=new YN(M,S),f0=new d1,H0=new o1(a0),S0=new Xq(M,Q0,B,c,F,Y),C0=new JN(M,c,r0),I0=new UN(T,D,r0,B),v=new Uq(T,a0,D),G0=new Vq(T,a0,D),D.programs=r.programs,M.capabilities=r0,M.extensions=a0,M.properties=S,M.renderLists=f0,M.shadowMap=C0,M.state=B,M.info=D}if($0(),k!==C9)V=new Iq(k,Q.width,Q.height,X,Z,K);let E0=new nX(M,T);this.xr=E0,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let z=a0.get("WEBGL_lose_context");if(z)z.loseContext()},this.forceContextRestore=function(){let z=a0.get("WEBGL_lose_context");if(z)z.restoreContext()},this.getPixelRatio=function(){return V0},this.setPixelRatio=function(z){if(z===void 0)return;V0=z,this.setSize(o,U0,!1)},this.getSize=function(z){return z.set(o,U0)},this.setSize=function(z,f,d=!0){if(E0.isPresenting){m0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(o=z,U0=f,Q.width=Math.floor(z*V0),Q.height=Math.floor(f*V0),d===!0)Q.style.width=z+"px",Q.style.height=f+"px";if(V!==null)V.setSize(Q.width,Q.height);this.setViewport(0,0,z,f)},this.getDrawingBufferSize=function(z){return z.set(o*V0,U0*V0).floor()},this.setDrawingBufferSize=function(z,f,d){o=z,U0=f,V0=d,Q.width=Math.floor(z*d),Q.height=Math.floor(f*d),this.setViewport(0,0,z,f)},this.setEffects=function(z){if(k===C9){p0("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(z){for(let f=0;f<z.length;f++)if(z[f].isOutputPass===!0){m0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}V.setEffects(z||[])},this.getCurrentViewport=function(z){return z.copy(Y0)},this.getViewport=function(z){return z.copy(JJ)},this.setViewport=function(z,f,d,b){if(z.isVector4)JJ.set(z.x,z.y,z.z,z.w);else JJ.set(z,f,d,b);B.viewport(Y0.copy(JJ).multiplyScalar(V0).round())},this.getScissor=function(z){return z.copy(l0)},this.setScissor=function(z,f,d,b){if(z.isVector4)l0.set(z.x,z.y,z.z,z.w);else l0.set(z,f,d,b);B.scissor(P0.copy(l0).multiplyScalar(V0).round())},this.getScissorTest=function(){return u0},this.setScissorTest=function(z){B.setScissorTest(u0=z)},this.setOpaqueSort=function(z){N0=z},this.setTransparentSort=function(z){y0=z},this.getClearColor=function(z){return z.copy(S0.getClearColor())},this.setClearColor=function(){S0.setClearColor(...arguments)},this.getClearAlpha=function(){return S0.getClearAlpha()},this.setClearAlpha=function(){S0.setClearAlpha(...arguments)},this.clear=function(z=!0,f=!0,d=!0){let b=0;if(z){let y=!1;if(g!==null){let z0=g.texture.format;y=I.has(z0)}if(y){let z0=g.texture.type,_0=O.has(z0),R0=S0.getClearColor(),j0=S0.getClearAlpha(),T0=R0.r,i0=R0.g,g0=R0.b;if(_0)E[0]=T0,E[1]=i0,E[2]=g0,E[3]=j0,T.clearBufferuiv(T.COLOR,0,E);else C[0]=T0,C[1]=i0,C[2]=g0,C[3]=j0,T.clearBufferiv(T.COLOR,0,C)}else b|=T.COLOR_BUFFER_BIT}if(f)b|=T.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(d)b|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(b!==0)T.clear(b)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(z){z.setRenderer(this),R=z},this.dispose=function(){Q.removeEventListener("webglcontextlost",s0,!1),Q.removeEventListener("webglcontextrestored",qJ,!1),Q.removeEventListener("webglcontextcreationerror",EJ,!1),S0.dispose(),f0.dispose(),H0.dispose(),S.dispose(),Q0.dispose(),c.dispose(),F0.dispose(),I0.dispose(),r.dispose(),E0.dispose(),E0.removeEventListener("sessionstart",f7),E0.removeEventListener("sessionend",i8),d9.stop()};function s0(z){z.preventDefault(),zZ("WebGLRenderer: Context Lost."),m=!0}function qJ(){zZ("WebGLRenderer: Context Restored."),m=!1;let z=D.autoReset,f=C0.enabled,d=C0.autoUpdate,b=C0.needsUpdate,y=C0.type;$0(),D.autoReset=z,C0.enabled=f,C0.autoUpdate=d,C0.needsUpdate=b,C0.type=y}function EJ(z){p0("WebGLRenderer: A WebGL context could not be created. Reason: ",z.statusMessage)}function Q9(z){let f=z.target;f.removeEventListener("dispose",Q9),N9(f)}function N9(z){M6(z),S.remove(z)}function M6(z){let f=S.get(z).programs;if(f!==void 0){if(f.forEach(function(d){r.releaseProgram(d)}),z.isShaderMaterial)r.releaseShaderCache(z)}}this.renderBufferDirect=function(z,f,d,b,y,z0){if(f===null)f=b0;let _0=y.isMesh&&y.matrixWorld.determinantAffine()<0,R0=A6(z,f,d,b,y);B.setMaterial(b,_0);let j0=d.index,T0=1;if(b.wireframe===!0){if(j0=O0.getWireframeAttribute(d),j0===void 0)return;T0=2}let i0=d.drawRange,g0=d.attributes.position,h0=i0.start*T0,YJ=(i0.start+i0.count)*T0;if(z0!==null)h0=Math.max(h0,z0.start*T0),YJ=Math.min(YJ,(z0.start+z0.count)*T0);if(j0!==null)h0=Math.max(h0,0),YJ=Math.min(YJ,j0.count);else if(g0!==void 0&&g0!==null)h0=Math.max(h0,0),YJ=Math.min(YJ,g0.count);let zJ=YJ-h0;if(zJ<0||zJ===1/0)return;F0.setup(y,b,R0,d,j0);let HJ,GJ=v;if(j0!==null)HJ=X0.get(j0),GJ=G0,GJ.setIndex(HJ);if(y.isMesh)if(b.wireframe===!0)B.setLineWidth(b.wireframeLinewidth*c0()),GJ.setMode(T.LINES);else GJ.setMode(T.TRIANGLES);else if(y.isLine){let _J=b.linewidth;if(_J===void 0)_J=1;if(B.setLineWidth(_J*c0()),y.isLineSegments)GJ.setMode(T.LINES);else if(y.isLineLoop)GJ.setMode(T.LINE_LOOP);else GJ.setMode(T.LINE_STRIP)}else if(y.isPoints)GJ.setMode(T.POINTS);else if(y.isSprite)GJ.setMode(T.TRIANGLES);if(y.isBatchedMesh)if(!a0.get("WEBGL_multi_draw")){let{_multiDrawStarts:_J,_multiDrawCounts:w0,_multiDrawCount:rJ}=y,$J=j0?X0.get(j0).bytesPerElement:1,tJ=S.get(b).currentProgram.getUniforms();for(let $9=0;$9<rJ;$9++)tJ.setValue(T,"_gl_DrawID",$9),GJ.render(_J[$9]/$J,w0[$9])}else GJ.renderMultiDraw(y._multiDrawStarts,y._multiDrawCounts,y._multiDrawCount);else if(y.isInstancedMesh)GJ.renderInstances(h0,zJ,y.count);else if(d.isInstancedBufferGeometry){let _J=d._maxInstanceCount!==void 0?d._maxInstanceCount:1/0,w0=Math.min(d.instanceCount,_J);GJ.renderInstances(h0,zJ,w0)}else GJ.render(h0,zJ)};function j7(z,f,d){if(z.transparent===!0&&z.side===b9&&z.forceSinglePass===!1)z.side=iJ,z.needsUpdate=!0,u9(z,f,d),z.side=R7,z.needsUpdate=!0,u9(z,f,d),z.side=b9;else u9(z,f,d)}this.compile=function(z,f,d=null){if(d===null)d=z;if(A=H0.get(d),A.init(f),_.push(A),d.traverseVisible(function(y){if(y.isLight&&y.layers.test(f.layers)){if(A.pushLight(y),y.castShadow)A.pushShadow(y)}}),z!==d)z.traverseVisible(function(y){if(y.isLight&&y.layers.test(f.layers)){if(A.pushLight(y),y.castShadow)A.pushShadow(y)}});A.setupLights();let b=new Set;return z.traverse(function(y){if(!(y.isMesh||y.isPoints||y.isLine||y.isSprite))return;let z0=y.material;if(z0)if(Array.isArray(z0))for(let _0=0;_0<z0.length;_0++){let R0=z0[_0];j7(R0,d,y),b.add(R0)}else j7(z0,d,y),b.add(z0)}),A=_.pop(),b},this.compileAsync=function(z,f,d=null){let b=this.compile(z,f,d);return new Promise((y)=>{function z0(){if(b.forEach(function(_0){if(S.get(_0).currentProgram.isReady())b.delete(_0)}),b.size===0){y(z);return}setTimeout(z0,10)}if(a0.get("KHR_parallel_shader_compile")!==null)z0();else setTimeout(z0,10)})};let z8=null;function v7(z){if(z8)z8(z)}function f7(){d9.stop()}function i8(){d9.start()}let d9=new fX;if(d9.setAnimationLoop(v7),typeof self<"u")d9.setContext(self);this.setAnimationLoop=function(z){z8=z,E0.setAnimationLoop(z),z===null?d9.stop():d9.start()},E0.addEventListener("sessionstart",f7),E0.addEventListener("sessionend",i8),this.render=function(z,f){if(f!==void 0&&f.isCamera!==!0){p0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;if(R!==null)R.renderStart(z,f);let d=E0.enabled===!0&&E0.isPresenting===!0,b=V!==null&&(g===null||d)&&V.begin(M,g);if(z.matrixWorldAutoUpdate===!0)z.updateMatrixWorld();if(f.parent===null&&f.matrixWorldAutoUpdate===!0)f.updateMatrixWorld();if(E0.enabled===!0&&E0.isPresenting===!0&&(V===null||V.isCompositing()===!1)){if(E0.cameraAutoUpdate===!0)E0.updateCamera(f);f=E0.getCamera()}if(z.isScene===!0)z.onBeforeRender(M,z,f,g);if(A=H0.get(z,_.length),A.init(f),A.state.textureUnits=l.getTextureUnits(),_.push(A),L0.multiplyMatrices(f.projectionMatrix,f.matrixWorldInverse),t.setFromProjectionMatrix(L0,LZ,f.reversedDepth),J0=this.localClippingEnabled,Z0=W0.init(this.clippingPlanes,J0),L=f0.get(z,w.length),L.init(),w.push(L),E0.enabled===!0&&E0.isPresenting===!0){let _0=M.xr.getDepthSensingMesh();if(_0!==null)B8(_0,f,-1/0,M.sortObjects)}if(B8(z,f,0,M.sortObjects),L.finish(),M.sortObjects===!0)L.sort(N0,y0,f.reversedDepth);if(n0=E0.enabled===!1||E0.isPresenting===!1||E0.hasDepthSensing()===!1,n0)S0.addToRenderList(L,z);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(Z0===!0)W0.beginShadows();let y=A.state.shadowsArray;if(C0.render(y,z,f),Z0===!0)W0.endShadows();if((b&&V.hasRenderPass())===!1){let{opaque:_0,transmissive:R0}=L;if(A.setupLights(),f.isArrayCamera){let j0=f.cameras;if(R0.length>0)for(let T0=0,i0=j0.length;T0<i0;T0++){let g0=j0[T0];o8(_0,R0,z,g0)}if(n0)S0.render(z);for(let T0=0,i0=j0.length;T0<i0;T0++){let g0=j0[T0];I6(L,z,g0,g0.viewport)}}else{if(R0.length>0)o8(_0,R0,z,f);if(n0)S0.render(z);I6(L,z,f)}}if(g!==null&&n===0)l.updateMultisampleRenderTarget(g),l.updateRenderTargetMipmap(g);if(b)V.end(M);if(z.isScene===!0)z.onAfterRender(M,z,f);if(F0.resetDefaultState(),e=-1,K0=null,_.pop(),_.length>0){if(A=_[_.length-1],l.setTextureUnits(A.state.textureUnits),Z0===!0)W0.setGlobalState(M.clippingPlanes,A.state.camera)}else A=null;if(w.pop(),w.length>0)L=w[w.length-1];else L=null;if(R!==null)R.renderEnd()};function B8(z,f,d,b){if(z.visible===!1)return;if(z.layers.test(f.layers)){if(z.isGroup)d=z.renderOrder;else if(z.isLOD){if(z.autoUpdate===!0)z.update(f)}else if(z.isLightProbeGrid)A.pushLightProbeGrid(z);else if(z.isLight){if(A.pushLight(z),z.castShadow)A.pushShadow(z)}else if(z.isSprite){if(!z.frustumCulled||t.intersectsSprite(z)){if(b)v0.setFromMatrixPosition(z.matrixWorld).applyMatrix4(L0);let _0=c.update(z),R0=z.material;if(R0.visible)L.push(z,_0,R0,d,v0.z,null)}}else if(z.isMesh||z.isLine||z.isPoints){if(!z.frustumCulled||t.intersectsObject(z)){let _0=c.update(z),R0=z.material;if(b){if(z.boundingSphere!==void 0){if(z.boundingSphere===null)z.computeBoundingSphere();v0.copy(z.boundingSphere.center)}else{if(_0.boundingSphere===null)_0.computeBoundingSphere();v0.copy(_0.boundingSphere.center)}v0.applyMatrix4(z.matrixWorld).applyMatrix4(L0)}if(Array.isArray(R0)){let j0=_0.groups;for(let T0=0,i0=j0.length;T0<i0;T0++){let g0=j0[T0],h0=R0[g0.materialIndex];if(h0&&h0.visible)L.push(z,_0,h0,d,v0.z,g0)}}else if(R0.visible)L.push(z,_0,R0,d,v0.z,null)}}}let z0=z.children;for(let _0=0,R0=z0.length;_0<R0;_0++)B8(z0[_0],f,d,b)}function I6(z,f,d,b){let{opaque:y,transmissive:z0,transparent:_0}=z;if(A.setupLightsView(d),Z0===!0)W0.setGlobalState(M.clippingPlanes,d);if(b)B.viewport(Y0.copy(b));if(y.length>0)X8(y,f,d);if(z0.length>0)X8(z0,f,d);if(_0.length>0)X8(_0,f,d);B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function o8(z,f,d,b){if((d.isScene===!0?d.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[b.id]===void 0){let h0=a0.has("EXT_color_buffer_half_float")||a0.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[b.id]=new k9(1,1,{generateMipmaps:!0,type:h0?Q8:C9,minFilter:e9,samples:Math.max(4,r0.samples),stencilBuffer:K,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:WJ.workingColorSpace})}let z0=A.state.transmissionRenderTarget[b.id],_0=b.viewport||Y0;z0.setSize(_0.z*M.transmissionResolutionScale,_0.w*M.transmissionResolutionScale);let R0=M.getRenderTarget(),j0=M.getActiveCubeFace(),T0=M.getActiveMipmapLevel();if(M.setRenderTarget(z0),M.getClearColor(UJ),XJ=M.getClearAlpha(),XJ<1)M.setClearColor(16777215,0.5);if(M.clear(),n0)S0.render(d);let i0=M.toneMapping;M.toneMapping=_9;let g0=b.viewport;if(b.viewport!==void 0)b.viewport=void 0;if(A.setupLightsView(b),Z0===!0)W0.setGlobalState(M.clippingPlanes,b);if(X8(z,d,b),l.updateMultisampleRenderTarget(z0),l.updateRenderTargetMipmap(z0),a0.has("WEBGL_multisampled_render_to_texture")===!1){let h0=!1;for(let YJ=0,zJ=f.length;YJ<zJ;YJ++){let HJ=f[YJ],{object:GJ,geometry:_J,material:w0,group:rJ}=HJ;if(w0.side===b9&&GJ.layers.test(b.layers)){let $J=w0.side;w0.side=iJ,w0.needsUpdate=!0,M8(GJ,d,b,_J,w0,rJ),w0.side=$J,w0.needsUpdate=!0,h0=!0}}if(h0===!0)l.updateMultisampleRenderTarget(z0),l.updateRenderTargetMipmap(z0)}if(M.setRenderTarget(R0,j0,T0),M.setClearColor(UJ,XJ),g0!==void 0)b.viewport=g0;M.toneMapping=i0}function X8(z,f,d){let b=f.isScene===!0?f.overrideMaterial:null;for(let y=0,z0=z.length;y<z0;y++){let _0=z[y],{object:R0,geometry:j0,group:T0}=_0,i0=_0.material;if(i0.allowOverride===!0&&b!==null)i0=b;if(R0.layers.test(d.layers))M8(R0,f,d,j0,i0,T0)}}function M8(z,f,d,b,y,z0){if(z.onBeforeRender(M,f,d,b,y,z0),z.modelViewMatrix.multiplyMatrices(d.matrixWorldInverse,z.matrixWorld),z.normalMatrix.getNormalMatrix(z.modelViewMatrix),y.onBeforeRender(M,f,d,b,z,z0),y.transparent===!0&&y.side===b9&&y.forceSinglePass===!1)y.side=iJ,y.needsUpdate=!0,M.renderBufferDirect(d,f,b,y,z,z0),y.side=R7,y.needsUpdate=!0,M.renderBufferDirect(d,f,b,y,z,z0),y.side=b9;else M.renderBufferDirect(d,f,b,y,z,z0);z.onAfterRender(M,f,d,b,y,z0)}function u9(z,f,d){if(f.isScene!==!0)f=b0;let b=S.get(z),y=A.state.lights,z0=A.state.shadowsArray,_0=y.state.version,R0=r.getParameters(z,y.state,z0,f,d,A.state.lightProbeGridArray),j0=r.getProgramCacheKey(R0),T0=b.programs;b.environment=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?f.environment:null,b.fog=f.fog;let i0=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap;if(b.envMap=Q0.get(z.envMap||b.environment,i0),b.envMapRotation=b.environment!==null&&z.envMap===null?f.environmentRotation:z.envMapRotation,T0===void 0)z.addEventListener("dispose",Q9),T0=new Map,b.programs=T0;let g0=T0.get(j0);if(g0!==void 0){if(b.currentProgram===g0&&b.lightsStateVersion===_0)return Y8(z,R0),g0}else{if(R0.uniforms=r.getUniforms(z),R!==null&&z.isNodeMaterial)R.build(z,d,R0);z.onBeforeCompile(R0,M),g0=r.acquireProgram(R0,j0),T0.set(j0,g0),b.uniforms=R0.uniforms}let h0=b.uniforms;if(!z.isShaderMaterial&&!z.isRawShaderMaterial||z.clipping===!0)h0.clippingPlanes=W0.uniform;if(Y8(z,R0),b.needsLights=h7(z),b.lightsStateVersion=_0,b.needsLights)h0.ambientLightColor.value=y.state.ambient,h0.lightProbe.value=y.state.probe,h0.directionalLights.value=y.state.directional,h0.directionalLightShadows.value=y.state.directionalShadow,h0.spotLights.value=y.state.spot,h0.spotLightShadows.value=y.state.spotShadow,h0.rectAreaLights.value=y.state.rectArea,h0.ltc_1.value=y.state.rectAreaLTC1,h0.ltc_2.value=y.state.rectAreaLTC2,h0.pointLights.value=y.state.point,h0.pointLightShadows.value=y.state.pointShadow,h0.hemisphereLights.value=y.state.hemi,h0.directionalShadowMatrix.value=y.state.directionalShadowMatrix,h0.spotLightMatrix.value=y.state.spotLightMatrix,h0.spotLightMap.value=y.state.spotLightMap,h0.pointShadowMatrix.value=y.state.pointShadowMatrix;return b.lightProbeGrid=A.state.lightProbeGridArray.length>0,b.currentProgram=g0,b.uniformsList=null,g0}function I8(z){if(z.uniformsList===null){let f=z.currentProgram.getUniforms();z.uniformsList=k6.seqWithValue(f.seq,z.uniforms)}return z.uniformsList}function Y8(z,f){let d=S.get(z);d.outputColorSpace=f.outputColorSpace,d.batching=f.batching,d.batchingColor=f.batchingColor,d.instancing=f.instancing,d.instancingColor=f.instancingColor,d.instancingMorph=f.instancingMorph,d.skinning=f.skinning,d.morphTargets=f.morphTargets,d.morphNormals=f.morphNormals,d.morphColors=f.morphColors,d.morphTargetsCount=f.morphTargetsCount,d.numClippingPlanes=f.numClippingPlanes,d.numIntersection=f.numClipIntersection,d.vertexAlphas=f.vertexAlphas,d.vertexTangents=f.vertexTangents,d.toneMapping=f.toneMapping}function y7(z,f){if(z.length===0)return null;if(z.length===1)return z[0].texture!==null?z[0]:null;P.setFromMatrixPosition(f.matrixWorld);for(let d=0,b=z.length;d<b;d++){let y=z[d];if(y.texture!==null&&y.boundingBox.containsPoint(P))return y}return null}function A6(z,f,d,b,y){if(f.isScene!==!0)f=b0;l.resetTextureUnits();let z0=f.fog,_0=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?f.environment:null,R0=g===null?M.outputColorSpace:g.isXRRenderTarget===!0?g.texture.colorSpace:WJ.workingColorSpace,j0=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,T0=Q0.get(b.envMap||_0,j0),i0=b.vertexColors===!0&&!!d.attributes.color&&d.attributes.color.itemSize===4,g0=!!d.attributes.tangent&&(!!b.normalMap||b.anisotropy>0),h0=!!d.morphAttributes.position,YJ=!!d.morphAttributes.normal,zJ=!!d.morphAttributes.color,HJ=_9;if(b.toneMapped){if(g===null||g.isXRRenderTarget===!0)HJ=M.toneMapping}let GJ=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_J=GJ!==void 0?GJ.length:0,w0=S.get(b),rJ=A.state.lights;if(Z0===!0){if(J0===!0||z!==K0){let DJ=z===K0&&b.id===e;W0.setState(b,z,DJ)}}let $J=!1;if(b.version===w0.__version){if(w0.needsLights&&w0.lightsStateVersion!==rJ.state.version)$J=!0;else if(w0.outputColorSpace!==R0)$J=!0;else if(y.isBatchedMesh&&w0.batching===!1)$J=!0;else if(!y.isBatchedMesh&&w0.batching===!0)$J=!0;else if(y.isBatchedMesh&&w0.batchingColor===!0&&y.colorTexture===null)$J=!0;else if(y.isBatchedMesh&&w0.batchingColor===!1&&y.colorTexture!==null)$J=!0;else if(y.isInstancedMesh&&w0.instancing===!1)$J=!0;else if(!y.isInstancedMesh&&w0.instancing===!0)$J=!0;else if(y.isSkinnedMesh&&w0.skinning===!1)$J=!0;else if(!y.isSkinnedMesh&&w0.skinning===!0)$J=!0;else if(y.isInstancedMesh&&w0.instancingColor===!0&&y.instanceColor===null)$J=!0;else if(y.isInstancedMesh&&w0.instancingColor===!1&&y.instanceColor!==null)$J=!0;else if(y.isInstancedMesh&&w0.instancingMorph===!0&&y.morphTexture===null)$J=!0;else if(y.isInstancedMesh&&w0.instancingMorph===!1&&y.morphTexture!==null)$J=!0;else if(w0.envMap!==T0)$J=!0;else if(b.fog===!0&&w0.fog!==z0)$J=!0;else if(w0.numClippingPlanes!==void 0&&(w0.numClippingPlanes!==W0.numPlanes||w0.numIntersection!==W0.numIntersection))$J=!0;else if(w0.vertexAlphas!==i0)$J=!0;else if(w0.vertexTangents!==g0)$J=!0;else if(w0.morphTargets!==h0)$J=!0;else if(w0.morphNormals!==YJ)$J=!0;else if(w0.morphColors!==zJ)$J=!0;else if(w0.toneMapping!==HJ)$J=!0;else if(w0.morphTargetsCount!==_J)$J=!0;else if(!!w0.lightProbeGrid!==A.state.lightProbeGridArray.length>0)$J=!0}else $J=!0,w0.__version=b.version;let tJ=w0.currentProgram;if($J===!0){if(tJ=u9(b,f,y),R&&b.isNodeMaterial)R.onUpdateProgram(b,tJ,w0)}let $9=!1,I9=!1,c9=!1,FJ=tJ.getUniforms(),BJ=w0.uniforms;if(B.useProgram(tJ.program))$9=!0,I9=!0,c9=!0;if(b.id!==e)e=b.id,I9=!0;if(w0.needsLights){let DJ=y7(A.state.lightProbeGridArray,y);if(w0.lightProbeGrid!==DJ)w0.lightProbeGrid=DJ,I9=!0}if($9||K0!==z){if(B.buffers.depth.getReversed()&&z.reversedDepth!==!0)z._reversedDepth=!0,z.updateProjectionMatrix();FJ.setValue(T,"projectionMatrix",z.projectionMatrix),FJ.setValue(T,"viewMatrix",z.matrixWorldInverse);let G9=FJ.map.cameraPosition;if(G9!==void 0)G9.setValue(T,A0.setFromMatrixPosition(z.matrixWorld));if(r0.logarithmicDepthBuffer)FJ.setValue(T,"logDepthBufFC",2/(Math.log(z.far+1)/Math.LN2));if(b.isMeshPhongMaterial||b.isMeshToonMaterial||b.isMeshLambertMaterial||b.isMeshBasicMaterial||b.isMeshStandardMaterial||b.isShaderMaterial)FJ.setValue(T,"isOrthographic",z.isOrthographicCamera===!0);if(K0!==z)K0=z,I9=!0,c9=!0}if(w0.needsLights){if(rJ.state.directionalShadowMap.length>0)FJ.setValue(T,"directionalShadowMap",rJ.state.directionalShadowMap,l);if(rJ.state.spotShadowMap.length>0)FJ.setValue(T,"spotShadowMap",rJ.state.spotShadowMap,l);if(rJ.state.pointShadowMap.length>0)FJ.setValue(T,"pointShadowMap",rJ.state.pointShadowMap,l)}if(y.isSkinnedMesh){FJ.setOptional(T,y,"bindMatrix"),FJ.setOptional(T,y,"bindMatrixInverse");let DJ=y.skeleton;if(DJ){if(DJ.boneTexture===null)DJ.computeBoneTexture();FJ.setValue(T,"boneTexture",DJ.boneTexture,l)}}if(y.isBatchedMesh){if(FJ.setOptional(T,y,"batchingTexture"),FJ.setValue(T,"batchingTexture",y._matricesTexture,l),FJ.setOptional(T,y,"batchingIdTexture"),FJ.setValue(T,"batchingIdTexture",y._indirectTexture,l),FJ.setOptional(T,y,"batchingColorTexture"),y._colorsTexture!==null)FJ.setValue(T,"batchingColorTexture",y._colorsTexture,l)}let Z9=d.morphAttributes;if(Z9.position!==void 0||Z9.normal!==void 0||Z9.color!==void 0)d0.update(y,d,tJ);if(I9||w0.receiveShadow!==y.receiveShadow)w0.receiveShadow=y.receiveShadow,FJ.setValue(T,"receiveShadow",y.receiveShadow);if((b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial)&&b.envMap===null&&f.environment!==null)BJ.envMapIntensity.value=f.environmentIntensity;if(BJ.dfgLUT!==void 0)BJ.dfgLUT.value=qN();if(I9){if(FJ.setValue(T,"toneMappingExposure",M.toneMappingExposure),w0.needsLights)b7(BJ,c9);if(z0&&b.fog===!0)M0.refreshFogUniforms(BJ,z0);if(M0.refreshMaterialUniforms(BJ,b,V0,U0,A.state.transmissionRenderTarget[z.id]),w0.needsLights&&w0.lightProbeGrid){let DJ=w0.lightProbeGrid;BJ.probesSH.value=DJ.texture,BJ.probesMin.value.copy(DJ.boundingBox.min),BJ.probesMax.value.copy(DJ.boundingBox.max),BJ.probesResolution.value.copy(DJ.resolution)}k6.upload(T,I8(w0),BJ,l)}if(b.isShaderMaterial&&b.uniformsNeedUpdate===!0)k6.upload(T,I8(w0),BJ,l),b.uniformsNeedUpdate=!1;if(b.isSpriteMaterial)FJ.setValue(T,"center",y.center);if(FJ.setValue(T,"modelViewMatrix",y.modelViewMatrix),FJ.setValue(T,"normalMatrix",y.normalMatrix),FJ.setValue(T,"modelMatrix",y.matrixWorld),b.uniformsGroups!==void 0){let DJ=b.uniformsGroups;for(let G9=0,v9=DJ.length;G9<v9;G9++){let A8=DJ[G9];I0.update(A8,tJ),I0.bind(A8,tJ)}}return tJ}function b7(z,f){z.ambientLightColor.needsUpdate=f,z.lightProbe.needsUpdate=f,z.directionalLights.needsUpdate=f,z.directionalLightShadows.needsUpdate=f,z.pointLights.needsUpdate=f,z.pointLightShadows.needsUpdate=f,z.spotLights.needsUpdate=f,z.spotLightShadows.needsUpdate=f,z.rectAreaLights.needsUpdate=f,z.hemisphereLights.needsUpdate=f}function h7(z){return z.isMeshLambertMaterial||z.isMeshToonMaterial||z.isMeshPhongMaterial||z.isMeshStandardMaterial||z.isShadowMaterial||z.isShaderMaterial&&z.lights===!0}if(this.getActiveCubeFace=function(){return u},this.getActiveMipmapLevel=function(){return n},this.getRenderTarget=function(){return g},this.setRenderTargetTextures=function(z,f,d){let b=S.get(z);if(b.__autoAllocateDepthBuffer=z.resolveDepthBuffer===!1,b.__autoAllocateDepthBuffer===!1)b.__useRenderToTexture=!1;S.get(z.texture).__webglTexture=f,S.get(z.depthTexture).__webglTexture=b.__autoAllocateDepthBuffer?void 0:d,b.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(z,f){let d=S.get(z);d.__webglFramebuffer=f,d.__useDefaultFramebuffer=f===void 0},this.setRenderTarget=function(z,f=0,d=0){g=z,u=f,n=d;let b=null,y=!1,z0=!1;if(z){let R0=S.get(z);if(R0.__useDefaultFramebuffer!==void 0){B.bindFramebuffer(T.FRAMEBUFFER,R0.__webglFramebuffer),Y0.copy(z.viewport),P0.copy(z.scissor),k0=z.scissorTest,B.viewport(Y0),B.scissor(P0),B.setScissorTest(k0),e=-1;return}else if(R0.__webglFramebuffer===void 0)l.setupRenderTarget(z);else if(R0.__hasExternalTextures)l.rebindTextures(z,S.get(z.texture).__webglTexture,S.get(z.depthTexture).__webglTexture);else if(z.depthBuffer){let i0=z.depthTexture;if(R0.__boundDepthTexture!==i0){if(i0!==null&&S.has(i0)&&(z.width!==i0.image.width||z.height!==i0.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");l.setupDepthRenderbuffer(z)}}let j0=z.texture;if(j0.isData3DTexture||j0.isDataArrayTexture||j0.isCompressedArrayTexture)z0=!0;let T0=S.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget){if(Array.isArray(T0[f]))b=T0[f][d];else b=T0[f];y=!0}else if(z.samples>0&&l.useMultisampledRTT(z)===!1)b=S.get(z).__webglMultisampledFramebuffer;else if(Array.isArray(T0))b=T0[d];else b=T0;Y0.copy(z.viewport),P0.copy(z.scissor),k0=z.scissorTest}else Y0.copy(JJ).multiplyScalar(V0).floor(),P0.copy(l0).multiplyScalar(V0).floor(),k0=u0;if(d!==0)b=p;if(B.bindFramebuffer(T.FRAMEBUFFER,b))B.drawBuffers(z,b);if(B.viewport(Y0),B.scissor(P0),B.setScissorTest(k0),y){let R0=S.get(z.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+f,R0.__webglTexture,d)}else if(z0){let R0=f;for(let j0=0;j0<z.textures.length;j0++){let T0=S.get(z.textures[j0]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+j0,T0.__webglTexture,d,R0)}}else if(z!==null&&d!==0){let R0=S.get(z.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,R0.__webglTexture,d)}e=-1},this.readRenderTargetPixels=function(z,f,d,b,y,z0,_0,R0=0){if(!(z&&z.isWebGLRenderTarget)){p0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let j0=S.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget&&_0!==void 0)j0=j0[_0];if(j0){B.bindFramebuffer(T.FRAMEBUFFER,j0);try{let T0=z.textures[R0],i0=T0.format,g0=T0.type;if(z.textures.length>1)T.readBuffer(T.COLOR_ATTACHMENT0+R0);if(!r0.textureFormatReadable(i0)){p0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!r0.textureTypeReadable(g0)){p0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(f>=0&&f<=z.width-b&&(d>=0&&d<=z.height-y))T.readPixels(f,d,b,y,s.convert(i0),s.convert(g0),z0)}finally{let T0=g!==null?S.get(g).__webglFramebuffer:null;B.bindFramebuffer(T.FRAMEBUFFER,T0)}}},this.readRenderTargetPixelsAsync=async function(z,f,d,b,y,z0,_0,R0=0){if(!(z&&z.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let j0=S.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget&&_0!==void 0)j0=j0[_0];if(j0)if(f>=0&&f<=z.width-b&&(d>=0&&d<=z.height-y)){B.bindFramebuffer(T.FRAMEBUFFER,j0);let T0=z.textures[R0],i0=T0.format,g0=T0.type;if(z.textures.length>1)T.readBuffer(T.COLOR_ATTACHMENT0+R0);if(!r0.textureFormatReadable(i0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!r0.textureTypeReadable(g0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let h0=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,h0),T.bufferData(T.PIXEL_PACK_BUFFER,z0.byteLength,T.STREAM_READ),T.readPixels(f,d,b,y,s.convert(i0),s.convert(g0),0);let YJ=g!==null?S.get(g).__webglFramebuffer:null;B.bindFramebuffer(T.FRAMEBUFFER,YJ);let zJ=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await eW(T,zJ,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,h0),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,z0),T.deleteBuffer(h0),T.deleteSync(zJ),z0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(z,f=null,d=0){let b=Math.pow(2,-d),y=Math.floor(z.image.width*b),z0=Math.floor(z.image.height*b),_0=f!==null?f.x:0,R0=f!==null?f.y:0;l.setTexture2D(z,0),T.copyTexSubImage2D(T.TEXTURE_2D,d,0,0,_0,R0,y,z0),B.unbindTexture()},this.copyTextureToTexture=function(z,f,d=null,b=null,y=0,z0=0){let _0,R0,j0,T0,i0,g0,h0,YJ,zJ,HJ=z.isCompressedTexture?z.mipmaps[z0]:z.image;if(d!==null)_0=d.max.x-d.min.x,R0=d.max.y-d.min.y,j0=d.isBox3?d.max.z-d.min.z:1,T0=d.min.x,i0=d.min.y,g0=d.isBox3?d.min.z:0;else{let BJ=Math.pow(2,-y);if(_0=Math.floor(HJ.width*BJ),R0=Math.floor(HJ.height*BJ),z.isDataArrayTexture)j0=HJ.depth;else if(z.isData3DTexture)j0=Math.floor(HJ.depth*BJ);else j0=1;T0=0,i0=0,g0=0}if(b!==null)h0=b.x,YJ=b.y,zJ=b.z;else h0=0,YJ=0,zJ=0;let GJ=s.convert(f.format),_J=s.convert(f.type),w0;if(f.isData3DTexture)l.setTexture3D(f,0),w0=T.TEXTURE_3D;else if(f.isDataArrayTexture||f.isCompressedArrayTexture)l.setTexture2DArray(f,0),w0=T.TEXTURE_2D_ARRAY;else l.setTexture2D(f,0),w0=T.TEXTURE_2D;B.activeTexture(T.TEXTURE0),B.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,f.flipY),B.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),B.pixelStorei(T.UNPACK_ALIGNMENT,f.unpackAlignment);let rJ=B.getParameter(T.UNPACK_ROW_LENGTH),$J=B.getParameter(T.UNPACK_IMAGE_HEIGHT),tJ=B.getParameter(T.UNPACK_SKIP_PIXELS),$9=B.getParameter(T.UNPACK_SKIP_ROWS),I9=B.getParameter(T.UNPACK_SKIP_IMAGES);B.pixelStorei(T.UNPACK_ROW_LENGTH,HJ.width),B.pixelStorei(T.UNPACK_IMAGE_HEIGHT,HJ.height),B.pixelStorei(T.UNPACK_SKIP_PIXELS,T0),B.pixelStorei(T.UNPACK_SKIP_ROWS,i0),B.pixelStorei(T.UNPACK_SKIP_IMAGES,g0);let c9=z.isDataArrayTexture||z.isData3DTexture,FJ=f.isDataArrayTexture||f.isData3DTexture;if(z.isDepthTexture){let BJ=S.get(z),Z9=S.get(f),DJ=S.get(BJ.__renderTarget),G9=S.get(Z9.__renderTarget);B.bindFramebuffer(T.READ_FRAMEBUFFER,DJ.__webglFramebuffer),B.bindFramebuffer(T.DRAW_FRAMEBUFFER,G9.__webglFramebuffer);for(let v9=0;v9<j0;v9++){if(c9)T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,S.get(z).__webglTexture,y,g0+v9),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,S.get(f).__webglTexture,z0,zJ+v9);T.blitFramebuffer(T0,i0,_0,R0,h0,YJ,_0,R0,T.DEPTH_BUFFER_BIT,T.NEAREST)}B.bindFramebuffer(T.READ_FRAMEBUFFER,null),B.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(y!==0||z.isRenderTargetTexture||S.has(z)){let BJ=S.get(z),Z9=S.get(f);B.bindFramebuffer(T.READ_FRAMEBUFFER,i),B.bindFramebuffer(T.DRAW_FRAMEBUFFER,x);for(let DJ=0;DJ<j0;DJ++){if(c9)T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,BJ.__webglTexture,y,g0+DJ);else T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,BJ.__webglTexture,y);if(FJ)T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Z9.__webglTexture,z0,zJ+DJ);else T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Z9.__webglTexture,z0);if(y!==0)T.blitFramebuffer(T0,i0,_0,R0,h0,YJ,_0,R0,T.COLOR_BUFFER_BIT,T.NEAREST);else if(FJ)T.copyTexSubImage3D(w0,z0,h0,YJ,zJ+DJ,T0,i0,_0,R0);else T.copyTexSubImage2D(w0,z0,h0,YJ,T0,i0,_0,R0)}B.bindFramebuffer(T.READ_FRAMEBUFFER,null),B.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(FJ)if(z.isDataTexture||z.isData3DTexture)T.texSubImage3D(w0,z0,h0,YJ,zJ,_0,R0,j0,GJ,_J,HJ.data);else if(f.isCompressedArrayTexture)T.compressedTexSubImage3D(w0,z0,h0,YJ,zJ,_0,R0,j0,GJ,HJ.data);else T.texSubImage3D(w0,z0,h0,YJ,zJ,_0,R0,j0,GJ,_J,HJ);else if(z.isDataTexture)T.texSubImage2D(T.TEXTURE_2D,z0,h0,YJ,_0,R0,GJ,_J,HJ.data);else if(z.isCompressedTexture)T.compressedTexSubImage2D(T.TEXTURE_2D,z0,h0,YJ,HJ.width,HJ.height,GJ,HJ.data);else T.texSubImage2D(T.TEXTURE_2D,z0,h0,YJ,_0,R0,GJ,_J,HJ);if(B.pixelStorei(T.UNPACK_ROW_LENGTH,rJ),B.pixelStorei(T.UNPACK_IMAGE_HEIGHT,$J),B.pixelStorei(T.UNPACK_SKIP_PIXELS,tJ),B.pixelStorei(T.UNPACK_SKIP_ROWS,$9),B.pixelStorei(T.UNPACK_SKIP_IMAGES,I9),z0===0&&f.generateMipmaps)T.generateMipmap(w0);B.unbindTexture()},this.initRenderTarget=function(z){if(S.get(z).__webglFramebuffer===void 0)l.setupRenderTarget(z)},this.initTexture=function(z){if(z.isCubeTexture)l.setTextureCube(z,0);else if(z.isData3DTexture)l.setTexture3D(z,0);else if(z.isDataArrayTexture||z.isCompressedArrayTexture)l.setTexture2DArray(z,0);else l.setTexture2D(z,0);B.unbindTexture()},this.resetState=function(){u=0,n=0,g=null,B.reset(),F0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return LZ}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=WJ._getDrawingBufferColorSpace(J),Q.unpackColorSpace=WJ._getUnpackColorSpace()}}var V6=new j;function B9(J,Q,$,Z,K,W){let X=2*Math.PI*K/4,Y=Math.max(W-2*K,0),U=Math.PI/4;V6.copy(Q),V6[Z]=0,V6.normalize();let H=0.5*X/(X+Y),N=1-V6.angleTo(J)/U;if(Math.sign(V6[$])===1)return N*H;else return Y/(X+Y)+H+H*(1-N)}class l9 extends AJ{constructor(J=1,Q=1,$=1,Z=2,K=0.1){let W=Z*2+1;K=Math.min(J/2,Q/2,$/2,K);super(1,1,1,W,W,W);if(this.type="RoundedBoxGeometry",this.parameters={width:J,height:Q,depth:$,segments:Z,radius:K},W===1)return;let X=this.toNonIndexed();this.index=null,this.attributes.position=X.attributes.position,this.attributes.normal=X.attributes.normal,this.attributes.uv=X.attributes.uv;let Y=new j,U=new j,H=new j(J,Q,$).divideScalar(2).subScalar(K),N=this.attributes.position.array,G=this.attributes.normal.array,q=this.attributes.uv.array,F=N.length/6,k=new j,I=0.5/W;for(let O=0,E=0;O<N.length;O+=3,E+=2)switch(Y.fromArray(N,O),U.copy(Y),U.x-=Math.sign(U.x)*I,U.y-=Math.sign(U.y)*I,U.z-=Math.sign(U.z)*I,U.normalize(),N[O+0]=H.x*Math.sign(Y.x)+U.x*K,N[O+1]=H.y*Math.sign(Y.y)+U.y*K,N[O+2]=H.z*Math.sign(Y.z)+U.z*K,G[O+0]=U.x,G[O+1]=U.y,G[O+2]=U.z,Math.floor(O/F)){case 0:k.set(1,0,0),q[E+0]=B9(k,U,"z","y",K,$),q[E+1]=1-B9(k,U,"y","z",K,Q);break;case 1:k.set(-1,0,0),q[E+0]=1-B9(k,U,"z","y",K,$),q[E+1]=1-B9(k,U,"y","z",K,Q);break;case 2:k.set(0,1,0),q[E+0]=1-B9(k,U,"x","z",K,J),q[E+1]=B9(k,U,"z","x",K,$);break;case 3:k.set(0,-1,0),q[E+0]=1-B9(k,U,"x","z",K,J),q[E+1]=1-B9(k,U,"z","x",K,$);break;case 4:k.set(0,0,1),q[E+0]=1-B9(k,U,"x","y",K,J),q[E+1]=1-B9(k,U,"y","x",K,Q);break;case 5:k.set(0,0,-1),q[E+0]=B9(k,U,"x","y",K,J),q[E+1]=1-B9(k,U,"y","x",K,Q);break}}static fromJSON(J){return new l9(J.width,J.height,J.depth,J.segments,J.radius)}}class qK extends M7{constructor(){super();this.name="RoomEnvironment",this.position.y=-3.5;let J=new AJ;J.deleteAttribute("uv");let Q=new mJ({side:iJ}),$=new mJ,Z=new jQ(16777215,900,28,2);Z.position.set(0.418,16.199,0.3),this.add(Z);let K=new x0(J,Q);K.position.set(-0.757,13.219,0.717),K.scale.set(31.713,28.305,28.591),this.add(K);let W=new I7(J,$,6),X=new SJ;X.position.set(-10.906,2.009,1.846),X.rotation.set(0,-0.195,0),X.scale.set(2.328,7.905,4.651),X.updateMatrix(),W.setMatrixAt(0,X.matrix),X.position.set(-5.607,-0.754,-0.758),X.rotation.set(0,0.994,0),X.scale.set(1.97,1.534,3.955),X.updateMatrix(),W.setMatrixAt(1,X.matrix),X.position.set(6.167,0.857,7.803),X.rotation.set(0,0.561,0),X.scale.set(3.927,6.285,3.687),X.updateMatrix(),W.setMatrixAt(2,X.matrix),X.position.set(-2.017,0.018,6.124),X.rotation.set(0,0.333,0),X.scale.set(2.002,4.566,2.064),X.updateMatrix(),W.setMatrixAt(3,X.matrix),X.position.set(2.291,-0.756,-2.621),X.rotation.set(0,-0.286,0),X.scale.set(1.546,1.552,1.496),X.updateMatrix(),W.setMatrixAt(4,X.matrix),X.position.set(-2.193,-0.369,-5.547),X.rotation.set(0,0.516,0),X.scale.set(3.875,3.487,2.986),X.updateMatrix(),W.setMatrixAt(5,X.matrix),this.add(W);let Y=new x0(J,_7(50));Y.position.set(-16.116,14.37,8.208),Y.scale.set(0.1,2.428,2.739),this.add(Y);let U=new x0(J,_7(50));U.position.set(-16.109,18.021,-8.207),U.scale.set(0.1,2.425,2.751),this.add(U);let H=new x0(J,_7(17));H.position.set(14.904,12.198,-1.832),H.scale.set(0.15,4.265,6.331),this.add(H);let N=new x0(J,_7(43));N.position.set(-0.462,8.89,14.52),N.scale.set(4.38,5.441,0.088),this.add(N);let G=new x0(J,_7(20));G.position.set(3.235,11.486,-12.541),G.scale.set(2.5,2,0.1),this.add(G);let q=new x0(J,_7(100));q.position.set(0,20,0),q.scale.set(1,0.1,1),this.add(q)}dispose(){let J=new Set;this.traverse((Q)=>{if(Q.isMesh)J.add(Q.geometry),J.add(Q.material)});for(let Q of J)Q.dispose()}}function _7(J){return new wQ({color:0,emissive:16777215,emissiveIntensity:J})}var c8=653429,wJ="#09F875",OJ="rgba(9,248,117,0.55)",L6="rgba(9,248,117,0.28)",NN="#0A0A0A",FK="#070808";var hJ="#CFFFE2",S7="'SF Mono', ui-monospace, Menlo, Consolas, monospace",n8="'Space Grotesk', -apple-system, sans-serif",L8=["HOME","CHAT","SEARCH","X LOOKUP","LEDGER","LANES"],j9=matchMedia("(prefers-reduced-motion: reduce)").matches,iX=null,W8=()=>iX=iX||new(window.AudioContext||window.webkitAudioContext);function eJ(J,Q,$,Z=0.045,K="triangle"){let W=W8(),X=W.createOscillator(),Y=W.createGain();X.type=K,X.frequency.value=J,Y.gain.setValueAtTime($,Q),Y.gain.exponentialRampToValueAtTime(0.0001,Q+Z),X.connect(Y),Y.connect(W.destination),X.start(Q),X.stop(Q+Z+0.02)}var fJ={detent(J=0){try{let Q=W8();if(Q.state==="suspended")Q.resume();eJ(640+J*46,Q.currentTime+0.01,0.022,0.03)}catch{}},lever(){try{let J=W8();eJ(420,J.currentTime+0.01,0.04,0.05),eJ(640,J.currentTime+0.06,0.03,0.04)}catch{}},press(){try{let J=W8();eJ(120,J.currentTime+0.01,0.09,0.08,"sine"),eJ(88,J.currentTime+0.05,0.05,0.09,"sine")}catch{}},ok(){try{let J=W8();eJ(660,J.currentTime+0.02,0.05),eJ(880,J.currentTime+0.1,0.045)}catch{}},err(){try{let J=W8();eJ(220,J.currentTime+0.02,0.05,0.07),eJ(180,J.currentTime+0.1,0.05,0.09)}catch{}},dock(){try{let J=W8();eJ(240,J.currentTime+0.01,0.05,0.05,"sine"),eJ(180,J.currentTime+0.07,0.07,0.06,"sine")}catch{}}};class V8{k;d;v;target;vel=0;constructor(J,Q=120,$=18){this.k=Q;this.d=$;this.v=J,this.target=J}step(J){let Q=-this.k*(this.v-this.target)-this.d*this.vel;return this.vel+=Q*J,this.v+=this.vel*J,this.v}settled(){return Math.abs(this.v-this.target)<0.0001&&Math.abs(this.vel)<0.0001}}var GN=[new Path2D("M20 0 L47 1 L47 213 L238 23 L239 104 L90 253 L0 253 L0 20 Z"),new Path2D("M238 151 L239 215 L203 253 L134 253 Z")],xQ={w:240,h:254};function B6(J,Q,$,Z,K,W=1){J.save(),J.globalAlpha=W,J.translate(Q,$),J.scale(Z/xQ.w,Z/xQ.w),J.fillStyle=K;for(let X of GN)J.fill(X);J.restore()}var FN=[[5,8,12,7],[12,3,6,6],[1,6,3,3],[3,8,3,3]],ON=[[18,5,3,2]],NK=[[6,4,8,4]],EN=[[6,9,8,4]],GK=[[7,12,7,3]],z6=[15.2,4.6,1.6,1.6];class JY{state="sleep";t=0;unfold=0;flapRate=0;blinkAt=2.5;hopV=0;hopY=0;set(J){if(this.state===J)return;if(J==="wake"&&this.state!=="sleep")return;if(this.state=J,this.t=0,J==="happy")this.hopV=-46}poke(){if(this.state==="sleep")this.set("wake")}step(J){this.t+=J;let Q=this.state==="sleep"?0:1;if(this.unfold+=(Q-this.unfold)*Math.min(1,J*(this.state==="wake"?9:5)),this.state==="wake"&&this.unfold>0.98)this.set("idle"),this.hopV=-34;if(this.state==="happy"&&this.t>1.5)this.set("idle");if(this.state==="alert"&&this.t>1.1)this.set("idle");if(this.state==="idle"&&this.t>45)this.state="sleep",this.t=0;if(this.hopV+=340*J,this.hopY=Math.max(0,this.hopY-this.hopV*J*0.28),this.hopY===0&&this.hopV>0)this.hopV=0;if(this.state==="happy"&&this.hopY===0&&this.t<1&&this.hopV===0)this.hopV=-40;if(this.t>this.blinkAt)this.blinkAt=this.t+2.5+Math.random()*3.5}blinking(){return this.state!=="sleep"&&this.t>this.blinkAt-0.12&&this.t<this.blinkAt}wingCells(J){if(this.state==="work"){let Q=Math.max(3,this.flapRate);return Math.floor(J*Q*2)%2?NK:GK}if(this.state==="happy")return Math.floor(J*8)%2?NK:GK;if(this.state==="droop")return GK;return Math.floor(J)%7===6?NK:EN}draw(J,Q,$,Z,K){let W=Math.floor(K*10)/10,X=1-Math.min(1,this.unfold*1.6),Y=Math.max(0,this.unfold*1.4-0.4),U=18*Z;if(X>0.01){let H=1+Math.sin(W*1.1)*0.012,N=15*Z*H;B6(J,Q+(24*Z-N)/2,$+U-N*(xQ.h/xQ.w),N,wJ,X)}if(Y>0.01){let H=this.state==="droop",N=this.state==="idle"&&Math.floor(W*2)%4===3?0.6:0;J.save(),J.globalAlpha=Y,J.fillStyle=wJ;let G=(q,F,k,I,O=0)=>{let E=Q+q*Z,C=$+(F+N-this.hopY/24)*Z;if(O>0)J.beginPath(),J.roundRect(E,C,k*Z,I*Z,O*Z),J.fill();else J.fillRect(E,C,k*Z,I*Z)};for(let[q,F,k,I]of FN){let O=H&&q>=12&&F<=4?F+2:F;G(q,O,k,I,Math.min(k,I)*0.42)}for(let[q,F,k,I]of ON)G(q,H?F+2:F,k,I,0.6);for(let[q,F,k,I]of this.wingCells(W))G(q,H?F+2:F,k,I,1.1);if(!this.blinking()){J.fillStyle=FK;let q=H?z6[1]+2:z6[1];J.fillRect(Q+z6[0]*Z,$+(q+N-this.hopY/24)*Z,z6[2]*Z,z6[3]*Z)}J.restore()}}}var M9=1024,K8=768;class QY{canvas=document.createElement("canvas");ctx;tex;vireo=new JY;mode=0;lane="inference";meta=null;history=[];booted=j9;bootT=0;powered=j9;busy=!1;status="";chat=null;chatLog=[];search=null;xprof=null;err=null;armed=null;tabRects=[];stepRan=0;drawRan=0;lastDrawAt=-1e9;crt=null;crtOverlay(){if(this.crt)return this.crt;let J=document.createElement("canvas");J.width=M9*1.5,J.height=K8*1.5;let Q=J.getContext("2d");Q.fillStyle="rgba(0,0,0,0.16)";for(let Z=0;Z<J.height;Z+=5)Q.fillRect(0,Z,J.width,2);let $=Q.createRadialGradient(J.width/2,J.height/2,J.height*0.34,J.width/2,J.height/2,J.height*0.92);return $.addColorStop(0,"rgba(0,0,0,0)"),$.addColorStop(1,"rgba(0,6,3,0.42)"),Q.fillStyle=$,Q.fillRect(0,0,J.width,J.height),this.crt=J,J}dirty=!0;acc=0;lastKey="";constructor(){this.canvas.width=M9*1.5,this.canvas.height=K8*1.5,this.ctx=this.canvas.getContext("2d"),this.ctx.setTransform(1.5,0,0,1.5,0,0),this.tex=new g9(this.canvas),this.tex.colorSpace=T9,this.tex.generateMipmaps=!1,this.tex.minFilter=vJ}modeName(){return L8[this.mode]}frameKey(J){let Q=this.vireo,$=Q.state!=="sleep"||Q.unfold>0.001,Z=!this.powered?Math.floor(J*2):!this.booted||$||this.busy?Math.floor(J*10):0,K=this.meta;return[this.mode,this.lane,this.powered,this.booted,this.busy,this.err,this.status,this.armed?.quote,Z,Q.state,this.chat?`${this.chat.prompt}|${Math.floor(this.chat.shown)}|${this.chat.line}`:"",this.chatLog.length,this.search?.query,this.search?.results?.length,this.xprof?.profile?.handle,this.history.length,K?`${K.main_balance_usd}|${K.lanes?.inference?.balance_usd}|${K.lanes?.devtools?.balance_usd}|${K.handle}`:""].join("~")}step(J,Q){if(this.stepRan++,this.powered&&!this.booted){if(this.bootT+=J,this.bootT>2.1)this.booted=!0}if(this.vireo.step(J),this.armed&&Q*1000>this.armed.until)this.armed=null;if(this.chat&&this.chat.shown<this.chat.text.length){let Z=j9?1e9:60;if(this.chat.shown=Math.min(this.chat.text.length,this.chat.shown+Z*J),this.vireo.flapRate=Math.max(2.5,Z/12),this.chat.shown>=this.chat.text.length&&!this.busy)this.vireo.set("idle")}this.acc=Math.max(0,this.acc+J);let $=!this.booted?0.05:0.1;if(this.acc>=$||Q-this.lastDrawAt>2){this.acc=0;let Z=this.frameKey(Q);if(Z!==this.lastKey||Q-this.lastDrawAt>2)return this.lastKey=Z,this.lastDrawAt=Q,this.drawRan++,this.draw(Q),this.tex.needsUpdate=!0,this.dirty=!1,!0}return!1}text(J,Q,$,Z,K=wJ,W=S7,X="500"){this.ctx.fillStyle=K,this.ctx.font=`${X} ${Z}px ${W}`,this.ctx.textBaseline="top",this.ctx.fillText(J,Q,$)}wrap(J,Q){let $=[];for(let Z of J.split(/\n+/)){let K="";for(let W of Z.split(/\s+/))if((K+" "+W).trim().length>Q)$.push(K.trim()),K=W;else K+=" "+W;if(K.trim())$.push(K.trim())}return $}draw(J){let Q=this.ctx;if(Q.fillStyle=FK,Q.fillRect(0,0,M9,K8),!this.powered){if(this.ctx.shadowColor=wJ,this.ctx.shadowBlur=8,this.text("NO CARD",M9/2-118,K8/2-64,52,wJ,n8,"700"),this.ctx.shadowBlur=0,Math.floor(J*2)%2===0)this.text("TAP THE CARTRIDGE TO START",M9/2-196,K8/2+22,24,OJ);this.compositeCrt();return}if(!this.booted){let Y=this.bootT,H=["VANTIS UNIFIED OPERATING SYSTEM","COPYRIGHT 2026 VANTIS.SH","WLT-01 WALLET TERMINAL","","MEMORY CHECK ............... OK","RAIL LINK .................. OK",`CARD ....................... ${this.meta?.handle?"@"+String(this.meta.handle).replace(/^@+/,"").toUpperCase():"…"}`,"LANES ...................... INF · DEV","","BOOT COMPLETE"],N=340,G=Math.floor(Y*340),q=96;this.ctx.shadowColor=wJ,this.ctx.shadowBlur=7;for(let F of H){if(G<=0)break;let k=F.slice(0,G);G-=F.length+6,this.text(k,72,q,24,wJ),q+=40}if(this.ctx.shadowBlur=0,Math.floor(J*3)%2===0)this.ctx.fillStyle=wJ,this.ctx.fillRect(72,q+4,15,26);this.compositeCrt();return}this.tabRects=[];let $=44;for(let Y=0;Y<L8.length;Y++){let U=Y===this.mode;Q.font=`600 22px ${S7}`;let H=Q.measureText(L8[Y]).width;if(U)Q.fillStyle=wJ,Q.beginPath(),Q.roundRect($-14,24,H+28,40,8),Q.fill();this.text(L8[Y],$,33,22,U?FK:OJ),this.tabRects.push({x:$-14,y:16,w:H+28,h:56,mode:Y}),$+=H+42}let Z=this.meta?`$${(this.meta.main_balance_usd||0).toFixed(2)}`:"$—";Q.font=`600 22px ${S7}`,this.text(`MAIN ${Z}`,M9-44-Q.measureText(`MAIN ${Z}`).width,33,22,hJ),Q.fillStyle=L6,Q.fillRect(44,80,M9-88,2);let K=108,W=this.modeName();if(this.err)this.text("PROBLEM",64,K+8,22,OJ),this.wrap(this.err,52).slice(0,4).forEach((Y,U)=>this.text(Y,64,K+46+U*34,24,hJ));else if(W==="HOME")this.drawHome(K);else if(W==="CHAT")this.drawChat(K);else if(W==="SEARCH")this.drawSearch(K);else if(W==="X LOOKUP")this.drawX(K);else if(W==="LEDGER")this.drawLedger(K);else this.drawLanes(K);Q.fillStyle=L6,Q.fillRect(44,K8-140,M9-88,2),this.vireo.draw(Q,52,K8-126,6,J);let X=this.busy?"WORKING…":this.status||"TAP A TAB · GREEN KEY FIRES";Q.font=`600 21px ${S7}`,this.text(X,M9-44-Q.measureText(X).width,K8-72,21,this.busy?wJ:OJ),this.compositeCrt()}compositeCrt(){let J=this.ctx;J.save(),J.setTransform(1,0,0,1,0,0),J.drawImage(this.crtOverlay(),0,0),J.restore()}drawHome(J){let Q=this.meta,$=Q?.lanes?.inference,Z=Q?.lanes?.devtools;if(this.text("ONE CARD. EVERY RAIL.",44,J+2,21,OJ),this.ctx.shadowColor=wJ,this.ctx.shadowBlur=10,this.text(Q?`$${(Q.main_balance_usd||0).toFixed(2)}`:"$—",44,J+34,104,hJ,n8,"700"),this.ctx.shadowBlur=0,this.text("MAIN BALANCE",46,J+156,20,OJ),Q?.tier){let X=this.ctx;X.font=`600 20px ${S7}`;let Y=`TIER ${String(Q.tier).toUpperCase()}`,U=X.measureText(Y).width;X.strokeStyle=OJ,X.lineWidth=2,X.beginPath(),X.roundRect(44,J+198,U+28,38,19),X.stroke(),this.text(Y,58,J+207,20,wJ),this.text(`${(Q.vantis_burned||0).toFixed(2)} VANTIS BURNED`,94+U,J+207,20,OJ)}let K=(X,Y,U,H)=>{let N=this.ctx;this.text(X,560,U,22,H?wJ:OJ);let G=Y?`$${Y.balance_usd.toFixed(2)}`:"$—";N.font=`700 30px ${n8}`,this.text(G,M9-44-N.measureText(G).width,U-6,30,hJ,n8,"700");let q=Math.max(0.01,(Q?.main_balance_usd||0)+($?.balance_usd||0)+(Z?.balance_usd||0)),F=Math.max(6,(Y?.balance_usd||0)/q*420);N.fillStyle="rgba(9,248,117,0.16)",N.fillRect(560,U+44,420,10),N.fillStyle=H?wJ:OJ,N.fillRect(560,U+44,F,10),this.text(H?"LIVE — BILLS THE MODEL RAIL":"ROUTES OPENING — FUND AHEAD",560,U+68,18,OJ)};K("INFERENCE",$,J+10,!0),K("DEV TOOLS",Z,J+130,!1);let W=this.history[0];if(W){let X=W.amount_usd>=0?`+$${W.amount_usd.toFixed(2)}`:`−$${Math.abs(W.amount_usd).toFixed(2)}`;this.text("LAST MOVE",44,J+268,18,OJ),this.text(`${X}  ${String(W.description||"").slice(0,52)}`,200,J+268,20,hJ)}this.status="GREEN KEY = FUND INFERENCE"}drawChat(J){let Q=this.chat;if(this.armed){this.text("QUOTE",64,J+6,22,OJ),this.text(this.armed.quote,64,J+44,25,hJ),this.text("ARMED — PRESS AGAIN TO FIRE",64,J+100,30,wJ,n8,"700"),this.status="FIRST FIRE ARMS · AFTER THAT IT JUST FIRES";return}if(!Q&&!this.chatLog.length){this.text("TEST-FIRE THE RAIL",64,J+6,22,OJ),this.text("DeepSeek V4 Flash. Real call, real cost,",64,J+44,26,hJ),this.text("billed to your Inference lane.",64,J+80,26,hJ),this.text("Type below, then press the green key.",64,J+138,24,OJ),this.status="TYPE A PROMPT · GREEN KEY FIRES";return}let $=[];for(let W of this.chatLog.slice(-3)){$.push({t:"> "+W.prompt.slice(0,58),c:L6,px:21});for(let X of this.wrap(W.text,62).slice(0,4))$.push({t:X,c:OJ,px:22});if(W.line)$.push({t:W.line,c:L6,px:18})}if(Q){$.push({t:"> "+Q.prompt.slice(0,58),c:OJ,px:21});let W=Q.text.slice(0,Math.floor(Q.shown));for(let X of this.wrap(W,62))$.push({t:X,c:hJ,px:24});if(this.busy&&!Q.text)$.push({t:Math.floor(Date.now()/400)%2?"▍":"",c:wJ,px:24});if(Q.line&&Q.shown>=Q.text.length)$.push({t:Q.line,c:wJ,px:19})}let Z=13;$.slice(-Z).forEach((W,X)=>this.text(W.t,64,J+4+X*33,W.px,W.c)),this.status="SETTLES FROM REAL USAGE"}drawSearch(J){let Q=this.search;if(!Q){this.text("WEB SEARCH — EXA CLASS",64,J+6,22,OJ),this.text("One real query against the open web.",64,J+44,26,hJ);let $=this.meta?.tools?.find((Z)=>Z.key==="search");this.text($?`${$.left_today} OF ${$.per_day} ON THE HOUSE TODAY`:"",64,J+100,22,OJ),this.status="TYPE A QUERY · GREEN KEY FIRES";return}this.text("? "+Q.query.slice(0,46),64,J+4,22,OJ),Q.results.slice(0,5).forEach(($,Z)=>{this.text(($.title||"").slice(0,54),64,J+42+Z*62,24,hJ),this.text(($.url||"").replace(/^https?:\/\//,"").slice(0,58),64,J+42+Z*62+28,19,OJ)}),this.text(`${Q.left} LEFT TODAY`,64,J+358,20,wJ)}drawX(J){let Q=this.xprof?.profile;if(!Q){this.text("X PROFILE LOOKUP",64,J+6,22,OJ),this.text("Public metrics for any handle —",64,J+44,26,hJ),this.text("the same read the scoring agent makes.",64,J+80,26,hJ);let Z=this.meta?.tools?.find((K)=>K.key==="x");this.text(Z?.status==="off"?"ROUTE OFFLINE":Z?`${Z.left_today} OF ${Z.per_day} ON THE HOUSE TODAY`:"",64,J+138,22,OJ),this.status="TYPE @HANDLE · GREEN KEY FIRES";return}this.text(`@${Q.handle}`,64,J+4,34,hJ,n8,"700"),this.text(String(Q.name||"").slice(0,40),64,J+50,22,OJ);let $=(Z)=>Z>=1e6?(Z/1e6).toFixed(1)+"M":Z>=1000?(Z/1000).toFixed(1)+"K":String(Z);if(this.text(`${$(Q.followers)} FOLLOWERS · ${$(Q.posts)} POSTS`,64,J+96,26,wJ),Q.created_at)this.text(`SINCE ${String(Q.created_at).slice(0,4)}`,64,J+138,22,OJ);this.wrap(Q.bio||"",58).slice(0,3).forEach((Z,K)=>this.text(Z,64,J+182+K*30,21,hJ))}drawLedger(J){if(this.text("RECENT MOVES",64,J+6,22,OJ),!this.history.length)this.text("Nothing yet — fund a lane, fire a call.",64,J+48,24,hJ);this.history.slice(0,7).forEach((Q,$)=>{let Z=Q.amount_usd>=0?`+$${Q.amount_usd.toFixed(2)}`:`−$${Math.abs(Q.amount_usd).toFixed(2)}`;this.text(Z.padStart(9),64,J+46+$*42,23,Q.amount_usd>=0?wJ:OJ),this.text(String(Q.description||Q.type||"").slice(0,44),220,J+46+$*42,23,hJ)}),this.status="THE FULL LEDGER LIVES IN THE BELL"}drawLanes(J){let Q=this.meta,$=Q?.lanes?.inference,Z=Q?.lanes?.devtools,K=(W,X,Y,U,H,N)=>{let G=this.ctx;G.strokeStyle=U?wJ:L6,G.lineWidth=U?3:2,G.strokeRect(Y,J+10,420,300),this.text(W,Y+28,J+34,24,U?wJ:OJ),this.text(X?`$${X.balance_usd.toFixed(2)}`:"$—",Y+28,J+76,56,hJ,n8,"700"),this.text(X?`SPENT $${X.consumed_usd.toFixed(2)}`:"",Y+28,J+152,20,OJ),this.wrap(N,30).slice(0,3).forEach((q,F)=>this.text(q,Y+28,J+196+F*28,19,H?hJ:OJ))};K("INFERENCE",$,64,this.lane==="inference",!0,"Bills the model rail. Live now."),K("DEV TOOLS",Z,520,this.lane==="devtools",!1,"Metered catalog — routes opening. Fund ahead if you like."),this.status="LEVER PICKS LANE · KEY FUNDS · HOLD = SWEEP"}}var J9=1200,q9=756,C7=60,s8="'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",T7="'SF Mono', ui-monospace, Menlo, Consolas, monospace",oX={ink:{bg:["#0C0C0B","#191917","#0E0E0D"],tex:"rgba(255,255,255,0.022)",fg:"#FFFFFF",acc:"#09F875",sub:"rgba(255,255,255,0.52)",edge:"rgba(255,255,255,0.10)"},carbon:{bg:["#151515","#2B2B29","#1A1A18"],tex:"rgba(255,255,255,0.02)",fg:"#E8E8E4",acc:"#09F875",sub:"rgba(232,232,228,0.5)",edge:"rgba(255,255,255,0.09)"},signal:{bg:["#0AF77A","#07DE6C","#05C75F"],tex:"rgba(10,10,10,0.05)",fg:"#0A0A0A",acc:"#0A0A0A",sub:"rgba(10,10,10,0.55)",edge:"rgba(10,10,10,0.14)"},mint:{bg:["#F2FFF8","#D3FFE7","#BFFADA"],tex:"rgba(10,10,10,0.035)",fg:"#0A0A0A",acc:"#0B7A3E",sub:"rgba(10,10,10,0.5)",edge:"rgba(10,10,10,0.10)"},mono:{bg:["#FFFFFF","#F1F1ED","#E8E8E2"],tex:"rgba(10,10,10,0.03)",fg:"#0A0A0A",acc:"#0B7A3E",sub:"rgba(10,10,10,0.5)",edge:"rgba(10,10,10,0.10)"}};function aX(J,Q,$,Z,K,W){J.clearRect(0,0,J9,q9),J.beginPath(),J.roundRect(0,0,J9,q9,C7),J.clip();let X=J.createLinearGradient(0,0,J9,q9);X.addColorStop(0,Q[0]),X.addColorStop(0.55,Q[1]),X.addColorStop(1,Q[2]),J.fillStyle=X,J.fillRect(0,0,J9,q9);let Y=J.createRadialGradient(K[0],K[1],0,K[0],K[1],740);Y.addColorStop(0,`rgba(255,255,255,${W})`),Y.addColorStop(0.55,"rgba(255,255,255,0)"),J.fillStyle=Y,J.fillRect(0,0,J9,q9),J.save(),J.translate(J9/2,q9/2),J.rotate(15*Math.PI/180),J.fillStyle=$;for(let U=-J9;U<J9;U+=15)J.fillRect(U,-q9,3,q9*2);J.restore(),J.strokeStyle=Z,J.lineWidth=3,J.beginPath(),J.roundRect(1.5,1.5,J9-3,q9-3,C7-1.5),J.stroke(),J.strokeStyle="rgba(255,255,255,0.14)",J.beginPath(),J.moveTo(C7,3.5),J.lineTo(J9-C7,3.5),J.stroke(),J.strokeStyle="rgba(0,0,0,0.18)",J.beginPath(),J.moveTo(C7,q9-3.5),J.lineTo(J9-C7,q9-3.5),J.stroke()}function H9(J,Q,$,Z,K,W,X={}){if(J.font=K,J.fillStyle=W,J.textAlign=X.align||"left",J.textBaseline="alphabetic",X.ls&&"letterSpacing"in J)J.letterSpacing=`${X.ls}px`;if(J.fillText(Q,$,Z),"letterSpacing"in J)J.letterSpacing="0px"}function rX(J){let Q=new g9(J);return Q.colorSpace=T9,Q.generateMipmaps=!0,Q.minFilter=e9,Q.anisotropy=4,Q}function DN(J){let Q=oX[J.variant||"ink"]||oX.ink,$=(J.handle||"").replace(/^@+/,""),Z=$?`@${$}`:"VANTIS",K=J.stamp||"RESERVED",W=document.createElement("canvas");W.width=J9,W.height=q9;let X=W.getContext("2d");X.save(),aX(X,Q.bg,Q.tex,Q.edge,[216,0],0.09),B6(X,72,60,45.4,Q.acc),H9(X,"VANTIS",141,102,`700 42px ${s8}`,Q.fg,{ls:3.36}),H9(X,K,1128,96,`500 33px ${T7}`,Q.sub,{align:"right"}),X.save(),X.beginPath(),X.roundRect(72,204,132,96,21),X.clip();let Y=X.createLinearGradient(72,204,204,300);Y.addColorStop(0,"#9BFFC9"),Y.addColorStop(0.22,"#09F875"),Y.addColorStop(0.45,"#58D5FF"),Y.addColorStop(0.65,"#C79BFF"),Y.addColorStop(0.82,"#FFE79B"),Y.addColorStop(1,"#09F875"),X.fillStyle=Y,X.fillRect(72,204,132,96),X.fillStyle="rgba(10,10,10,0.35)",X.fillRect(132.72,204,10.56,96),X.fillRect(72,232.8,132,5.76),X.fillRect(72,265.44,132,5.76),X.strokeStyle="rgba(255,255,255,0.5)",X.lineWidth=3,X.beginPath(),X.moveTo(78,206.5),X.lineTo(198,206.5),X.stroke(),X.strokeStyle="rgba(0,0,0,0.25)",X.beginPath(),X.moveTo(78,297.5),X.lineTo(198,297.5),X.stroke(),X.restore();let U=Z.length>21?57:Z.length>15?72:90;H9(X,Z,72,453,`700 ${U}px ${s8}`,Q.fg,{ls:-U*0.01}),H9(X,"IDENTITY",72,594,`600 27px ${s8}`,Q.sub,{ls:3.78}),H9(X,"Account & Agent",72,636,`600 36px ${s8}`,Q.fg),H9(X,`card.vantis.sh/${$||"yourhandle"}`,72,681,`500 30px ${T7}`,Q.sub),H9(X,"ONE OF ONE",1128,588,`700 30px ${T7}`,Q.acc,{align:"right",ls:3}),H9(X,"TIER",1128,630,`600 27px ${s8}`,Q.sub,{align:"right",ls:3.78});let H=J.tierLabel?`${J.tierLabel}${J.grantStr?` · $${J.grantStr}`:""}`:"—";H9(X,H,1128,672,`600 36px ${s8}`,Q.fg,{align:"right"}),X.restore();let N=document.createElement("canvas");N.width=J9,N.height=q9;let G=N.getContext("2d");G.save(),aX(G,["#0AF77A","#07DE6C","#05C75F"],"rgba(10,10,10,0.045)","rgba(10,10,10,0.14)",[960,756],0.22);let q=G.createLinearGradient(0,78,0,210);q.addColorStop(0,"#111111"),q.addColorStop(0.45,"#1D1D1B"),q.addColorStop(1,"#0C0C0B"),G.fillStyle=q,G.fillRect(0,78,J9,132),G.strokeStyle="rgba(255,255,255,0.08)",G.lineWidth=3,G.beginPath(),G.moveTo(0,79.5),G.lineTo(J9,79.5),G.stroke(),H9(G,"VANTIS CARDS",72,525,`700 36px ${s8}`,"#0A0A0A",{ls:2.88});let F="rgba(10,10,10,0.75)";return H9(G,`card.vantis.sh/${$||"yourhandle"}`,72,582,`500 30px ${T7}`,F),H9(G,`ONE OF ONE · ${K}`,72,639,`500 30px ${T7}`,F),H9(G,"Virtual identity card. Not a payment instrument.",72,696,`500 30px ${T7}`,F),G.globalAlpha=0.92,B6(G,833.2,384,294.8,"#0A0A0A"),G.globalAlpha=1,G.restore(),{front:rX(W),back:rX(N)}}function tX(){let J=document.createElement("canvas");J.width=J.height=256;let Q=J.getContext("2d"),$=Q.createRadialGradient(128,128,10,128,128,126);$.addColorStop(0,"rgba(8,10,9,0.5)"),$.addColorStop(0.6,"rgba(8,10,9,0.22)"),$.addColorStop(1,"rgba(8,10,9,0)"),Q.fillStyle=$,Q.fillRect(0,0,256,256);let Z=new g9(J);return Z.colorSpace=T9,Z}function eX(){let J=document.getElementById("device-stage");if(!J)return;let Q=Math.min(2,devicePixelRatio||1),$;try{$=new HK({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{document.body.classList.add("dv-fail");return}$.setPixelRatio(Q),$.outputColorSpace=T9,$.toneMapping=Q6,$.toneMappingExposure=1,J.appendChild($.domElement),$.domElement.setAttribute("aria-hidden","true");let Z=new M7,K=new R6($);Z.environment=K.fromScene(new qK,0.04).texture;let W=new A7(16777215,1.15);W.position.set(-1.6,2.4,1.8),Z.add(W);let X=new A7(14680046,0.16);X.position.set(1.8,0.6,1.2),Z.add(X);let Y=new A7(10485709,0.4);Y.position.set(2.2,1.4,-2),Z.add(Y);let U=new nJ(28,1,0.1,20),H=new j(0.1,0.7,4.3),N=new j(0,0.44,0);U.position.copy(H),U.lookAt(N);function G(h,a,q0="rgba(9,248,117,0.65)"){let t0=document.createElement("canvas"),KJ=Math.max(64,h.length*a*0.75),LJ=a*2;t0.width=KJ*2,t0.height=LJ*2;let MJ=t0.getContext("2d");MJ.scale(2,2),MJ.font=`600 ${a}px ${S7}`,MJ.fillStyle=q0,MJ.textBaseline="middle",MJ.textAlign="center",MJ.fillText(h,KJ/2,LJ/2);let CJ=new g9(t0);CJ.colorSpace=T9,CJ.generateMipmaps=!1,CJ.minFilter=vJ;let TJ=new x0(new oJ(KJ/640,LJ/640),new pJ({map:CJ,transparent:!0}));return TJ.material.toneMapped=!1,TJ}let q=new mJ({color:724236,roughness:0.64,metalness:0.2,envMapIntensity:0.3}),F=new mJ({color:658186,roughness:0.75,metalness:0.25}),k=new mJ({color:790029,roughness:0.92,metalness:0.05}),I=new mJ({color:c8,roughness:0.42,metalness:0,envMapIntensity:0.3,emissive:c8,emissiveIntensity:0.42});I.toneMapped=!1;let O=new pJ({color:c8});O.toneMapped=!1;let E=new QJ(1327146),C=new CQ,P=(h,a)=>C.load(h,(q0)=>{q0.wrapS=q0.wrapT=WQ,q0.anisotropy=4,a(q0)});P("/tex/metal030-normal-v1.jpg",(h)=>{h.repeat.set(2,1.4),q.normalMap=h,q.normalScale.set(0.65,0.65),q.needsUpdate=!0}),P("/tex/metal030-rough-v1.jpg",(h)=>{h.repeat.set(2,1.4),q.roughnessMap=h,q.roughness=0.9,q.needsUpdate=!0});let L=new dJ;Z.add(L);let A=new dJ,w=new x0(new l9(1.9,1.25,0.34,4,0.07),q);A.add(w),A.position.set(0,0.62,0),A.rotation.x=-0.06,L.add(A);let _=A,V=1.15,M=0.8625,m=new x0(new AJ(1.23,0.94,0.02),F);m.position.set(-0.26,0.02,0.164),A.add(m);let R=new QY,p=new x0(new oJ(V,M),new pJ({map:R.tex}));p.position.set(-0.26,0.02,0.178),A.add(p);let i=new x0(new oJ(1.21,0.92),new mJ({color:16777215,transparent:!0,opacity:0.045,roughness:0.12,metalness:0,envMapIntensity:1.5}));i.position.set(-0.26,0.02,0.184),A.add(i);let x=new x0(new AJ(0.01,1.08,0.012),O);x.position.set(0.4,0,0.172),A.add(x);let u=new dJ,n=new x0(new S9(0.155,0.155,0.075,48),new mJ({color:1053201,roughness:0.5,metalness:0.35,envMapIntensity:0.45}));n.rotation.x=Math.PI/2,u.add(n);let g=new x0(new S9(0.135,0.135,0.014,40),new mJ({color:790029,roughness:0.42,metalness:0.4,envMapIntensity:0.45}));g.rotation.x=Math.PI/2,g.position.z=0.042,u.add(g);let e=new I7(new AJ(0.016,0.032,0.062),new mJ({color:1711131,roughness:0.5,metalness:0.5,envMapIntensity:0.7}),28),K0=new SJ;for(let h=0;h<28;h++){let a=h/28*Math.PI*2;K0.position.set(Math.cos(a)*0.157,Math.sin(a)*0.157,0),K0.rotation.z=a,K0.updateMatrix(),e.setMatrixAt(h,K0.matrix)}u.add(e);let Y0=new x0(new AJ(0.014,0.072,0.012),O);Y0.position.set(0,0.1,0.046),u.add(Y0),u.position.set(0.67,0.3,0.17),A.add(u);let P0=document.createElement("canvas");P0.width=P0.height=256;let k0=P0.getContext("2d");k0.translate(128,128),k0.strokeStyle="rgba(9,248,117,0.4)",k0.lineWidth=3;for(let h=0;h<24;h++)k0.beginPath(),k0.moveTo(0,-104),k0.lineTo(0,h%6===0?-88:-96),k0.stroke(),k0.rotate(Math.PI/12);let UJ=new g9(P0);UJ.colorSpace=T9,UJ.generateMipmaps=!1,UJ.minFilter=vJ;let XJ=new x0(new oJ(0.43,0.43),new pJ({map:UJ,transparent:!0}));XJ.material.toneMapped=!1,XJ.position.set(0.67,0.3,0.165),A.add(XJ);let o=G("DIAL",12);o.position.set(0.67,0.06,0.168),A.add(o);let U0=new dJ,V0=new x0(new l9(0.24,0.24,0.07,3,0.024),I);U0.add(V0);let N0=document.createElement("canvas");N0.width=N0.height=128,B6(N0.getContext("2d"),28,24,72,NN);let y0=new g9(N0);y0.colorSpace=T9,y0.generateMipmaps=!1,y0.minFilter=vJ;let JJ=new x0(new oJ(0.11,0.11),new pJ({map:y0,transparent:!0}));JJ.material.toneMapped=!1,JJ.position.z=0.037,V0.add(JJ);let l0=new x0(new AJ(0.3,0.3,0.02),F);l0.position.z=-0.028,U0.add(l0),U0.position.set(0.67,-0.14,0.17),A.add(U0);let u0=G("FIRE",12);u0.position.set(0.67,-0.32,0.168),A.add(u0);let t=new dJ,Z0=new x0(new l9(0.24,0.09,0.03,2,0.012),F);t.add(Z0);let J0=new dJ,L0=new x0(new AJ(0.04,0.085,0.04),new mJ({color:1316373,roughness:0.5,metalness:0.35,envMapIntensity:0.45}));L0.position.y=0.042,J0.add(L0);let A0=new x0(new l9(0.06,0.048,0.048,2,0.014),I);A0.position.y=0.095,J0.add(A0),J0.position.z=0.03,t.add(J0),t.position.set(0.67,-0.52,0.17),A.add(t);let v0=G("INF",11);v0.position.set(0.51,-0.42,0.168),A.add(v0);let b0=G("DEV",11);b0.position.set(0.83,-0.42,0.168),A.add(b0);let n0=new S9(0.012,0.012,0.014,12),c0=new x0(n0,new pJ({color:c8}));c0.material.toneMapped=!1,c0.rotation.x=Math.PI/2,c0.position.set(0.51,-0.48,0.17),A.add(c0);let T=new x0(n0,new pJ({color:E}));T.material.toneMapped=!1,T.rotation.x=Math.PI/2,T.position.set(0.83,-0.48,0.17),A.add(T);let NJ=document.createElement("canvas");NJ.width=240,NJ.height=254,B6(NJ.getContext("2d"),0,0,240,wJ);let a0=new g9(NJ);a0.colorSpace=T9,a0.generateMipmaps=!1,a0.minFilter=vJ;let r0=new x0(new oJ(0.07,0.074),new pJ({map:a0,transparent:!0}));r0.material.toneMapped=!1,r0.position.set(-0.82,-0.55,0.172),A.add(r0);let B=G("WLT-01",11,"rgba(9,248,117,0.5)");B.position.set(-0.62,-0.56,0.168),A.add(B);for(let h=0;h<5;h++){let a=new x0(new AJ(0.14,0.008,0.006),F);a.position.set(0.06+h%2*0,-0.5-Math.floor(h)*0.022,0.17),a.position.x=-0.2,a.position.y=-0.5-h*0.024,A.add(a)}let D=new mJ({color:2764075,roughness:0.42,metalness:0.75,envMapIntensity:0.9}),S=new S9(0.016,0.016,0.01,12);for(let[h,a]of[[-0.88,0.56],[0.88,0.56],[-0.88,-0.56],[0.88,-0.56]]){let q0=new x0(S,D);q0.rotation.x=Math.PI/2,q0.position.set(h,a,0.172),A.add(q0);let t0=new x0(new AJ(0.02,0.003,0.004),F);t0.position.set(h,a,0.178),t0.rotation.z=h*a>0?0.6:-0.5,A.add(t0)}let l=new dJ,Q0=new x0(new S9(0.4,0.4,1.5,36),k);Q0.rotation.z=Math.PI/2,l.add(Q0);for(let h of[-0.56,-0.2,0.16,0.52]){let a=new x0(new S9(0.412,0.412,0.05,36),F);a.rotation.z=Math.PI/2,a.position.x=h,l.add(a)}let X0=new x0(new S9(0.425,0.425,0.06,36),k);X0.rotation.z=Math.PI/2,X0.position.x=-0.76,l.add(X0);let O0=X0.clone();O0.position.x=0.76,l.add(O0),l.position.set(0,0.12,-0.62),L.add(l);let c=new dJ;c.position.set(-0.26,0.645,0.06),A.add(c);let r=new x0(new l9(0.74,0.07,0.11,2,0.02),F);c.add(r);let M0=new x0(new AJ(0.68,0.005,0.004),O);M0.position.set(0,0.037,0.056),c.add(M0);let f0=-0.065,H0=new dJ,W0=new q6,C0=0.66,S0=0.4158,d0=0.033;W0.moveTo(-C0/2+d0,-S0/2),W0.lineTo(C0/2-d0,-S0/2),W0.absarc(C0/2-d0,-S0/2+d0,d0,-Math.PI/2,0,!1),W0.lineTo(C0/2,S0/2-d0),W0.absarc(C0/2-d0,S0/2-d0,d0,0,Math.PI/2,!1),W0.lineTo(-C0/2+d0,S0/2),W0.absarc(-C0/2+d0,S0/2-d0,d0,Math.PI/2,Math.PI,!1),W0.lineTo(-C0/2,-S0/2+d0),W0.absarc(-C0/2+d0,-S0/2+d0,d0,Math.PI,Math.PI*1.5,!1);let v=new N6(W0,{depth:0.018,bevelEnabled:!1});v.translate(0,0,-0.009);let G0=new mJ({color:1645337,roughness:0.45,metalness:0.3,envMapIntensity:0.8}),s=new x0(v,G0);H0.add(s);let F0=new pJ({transparent:!0,alphaTest:0.5});F0.toneMapped=!1;let I0=new pJ({transparent:!0,alphaTest:0.5});I0.toneMapped=!1;let $0=new x0(new oJ(C0,S0),F0);$0.position.z=0.0105,H0.add($0);let E0=new x0(new oJ(C0,S0),I0);E0.rotation.y=Math.PI,E0.position.z=-0.0105,H0.add(E0);let s0=(h)=>{let a=DN(h);if(F0.map?.dispose(),I0.map?.dispose(),F0.map=a.front,F0.needsUpdate=!0,I0.map=a.back,I0.needsUpdate=!0,h.variant==="mint"||h.variant==="mono")G0.color.setHex(14211282)};s0({handle:null,variant:"ink"}),H0.position.y=f0,c.add(H0);let qJ=new dJ,EJ=new x0(new l9(0.72,0.05,0.3,2,0.015),F);EJ.position.set(0,0.025,0),qJ.add(EJ);let Q9=new x0(new l9(0.68,0.3,0.028,2,0.012),F);Q9.rotation.x=-0.64,Q9.position.set(0,0.16,-0.1),qJ.add(Q9);let N9=new x0(new AJ(0.68,0.03,0.03),F);N9.position.set(0,0.065,0.09),qJ.add(N9);let M6=new x0(new AJ(0.64,0.02,0.05),new mJ({color:395015,roughness:0.9,metalness:0.1}));M6.position.set(0,0.045,0.05),qJ.add(M6);let j7=new x0(new AJ(0.64,0.004,0.004),O);j7.position.set(0,0.082,0.075),qJ.add(j7);let z8=new x0(new oJ(0.9,0.55),new pJ({map:tX(),transparent:!0,depthWrite:!1}));z8.rotation.x=-Math.PI/2,z8.position.y=0.002,qJ.add(z8),qJ.position.set(-0.86,-0.2,0.42),qJ.rotation.y=0.32,L.add(qJ),L.updateMatrixWorld(!0);let v7=L.worldToLocal(c.localToWorld(new j(0,f0,0))),f7=new D9;c.getWorldQuaternion(f7),c.remove(H0),L.add(H0);let i8=new j(-0.885,0.02,0.345),d9=new D9().setFromEuler(new E9(-0.64,0.32,0,"YXZ")),B8=new j(-0.55,1.55,0.42),I6=(h)=>h*h*(3-2*h);function o8(h){let a=Math.max(0,Math.min(1,h)),q0=1-a;H0.position.set(q0*q0*i8.x+2*q0*a*B8.x+a*a*v7.x,q0*q0*i8.y+2*q0*a*B8.y+a*a*v7.y,q0*q0*i8.z+2*q0*a*B8.z+a*a*v7.z),H0.quaternion.slerpQuaternions(d9,f7,I6(a))}o8(0);let X8=new x0(new oJ(3,1.8),new pJ({map:tX(),transparent:!0,depthWrite:!1}));X8.rotation.x=-Math.PI/2,X8.position.y=-0.2,Z.add(X8),L.position.y=0.02;let M8=new V8(0,60,14),u9=new V8(0,60,14),I8=new V8(0,70,15),Y8=!1,y7=new j,A6=new j,b7=new j;function h7(h){Y8=h??!Y8,I8.target=Y8?1:0,fJ.lever(),HJ(Y8?"Screen raised":"Screen lowered")}let z=new V8(0,170,20),f=new V8(0,400,24),d=new V8(-0.22,240,20),b=new V8(0,60,12),y="hover",z0=0;function _0(){if(y!=="hover")return;y="inserting",b.target=1,R.vireo.poke()}function R0(){if(y!=="seated"||R.busy){if(R.busy)fJ.err();return}y="ejecting",b.target=0,R.powered=!1,R.booted=j9,R.bootT=0,R.dirty=!0;try{let h=W8();eJ(500,h.currentTime+0.01,0.05,0.05,"sine"),eJ(340,h.currentTime+0.08,0.06,0.07,"sine")}catch{}HJ("Card ejected — screen off")}let j0={t:0},T0=(h,a=!1)=>{let q0=(h%L8.length+L8.length)%L8.length;if(q0===R.mode)return;if(R.mode=q0,R.err=null,R.armed=null,R.dirty=!0,z.target=-q0*(Math.PI*2/8),!a)fJ.detent(q0);R.vireo.poke(),w0(),HJ(`Mode: ${L8[q0]}`)},i0=document.getElementById("dv-input-row"),g0=document.getElementById("dv-input"),h0=document.getElementById("dv-go"),YJ=document.getElementById("dv-alt"),zJ=document.getElementById("dv-live"),HJ=(h)=>{if(zJ)zJ.textContent=h},GJ={CHAT:{ph:"Ask the rail anything…",go:"Fire"},SEARCH:{ph:"Search the open web…",go:"Search"},"X LOOKUP":{ph:"@handle",go:"Look up"}},_J="";function w0(){let h=R.modeName(),a=GJ[h];if(i0)i0.style.display=a?"flex":"none";if(a&&g0&&h!==_J){if(_J)Z9[_J]=g0.value;g0.value=Z9[h]||"",_J=h}if(a&&g0)g0.placeholder=a.ph;if(a&&h0)h0.textContent=a.go;if(YJ)if(h==="HOME"||h==="LANES")YJ.style.display="",YJ.textContent=h==="LANES"?"Sweep lane":"Fund lane";else YJ.style.display="none"}async function rJ(){try{let h=await fetch("/api/playground/meta");if(!h.ok)return;if(R.meta=await h.json(),R.meta?.handle)s0({handle:R.meta.handle,variant:R.meta.variant,stamp:R.meta.stamp,tierLabel:R.meta.tier_label,grantStr:R.meta.grant_str});R.dirty=!0}catch{}}async function $J(){try{let h=await fetch("/api/credits/history");if(!h.ok)return;let a=await h.json();R.history=a.entries||[],R.dirty=!0}catch{}}addEventListener("vc-balances",(h)=>{let a=h.detail||{};if(!R.meta)return;let q0=R.meta.main_balance_usd;R.meta.main_balance_usd=a.main??R.meta.main_balance_usd;for(let t0 of a.wallets||[]){let KJ=t0.purpose==="inference"?R.meta.lanes?.inference:R.meta.lanes?.devtools;if(KJ)KJ.balance_usd=t0.balance_usd,KJ.consumed_usd=t0.consumed_usd}if(typeof a.main==="number"&&a.main!==q0)R.vireo.set("happy");R.dirty=!0,$J()});function tJ(h){let a=R.meta?.lanes?.[h];return a?{id:a.id,name:h==="inference"?"Inference":"Developer tools"}:null}function $9(h){let a=tJ(h);if(!a)return;dispatchEvent(new CustomEvent("vc-device-fund",{detail:a}))}async function I9(h){let a=tJ(h);if(!a)return;dispatchEvent(new CustomEvent("vc-device-sweep",{detail:a}))}let c9=null,FJ=!1,BJ=!1,Z9={};function DJ(){if(R.busy)return!1;if(GJ[R.modeName()]&&!(g0?.value||"").trim())return g0?.focus(),R.vireo.set("alert"),R.dirty=!0,fJ.err(),!1;return!0}async function G9(){if(R.busy)return;let h=R.modeName();if(R.err=null,h==="HOME"){$9("inference");return}if(h==="LANES"){$9(R.lane);return}if(h==="LEDGER"){$J();return}let a=GJ[h],q0=(g0?.value||"").trim();if(a&&!q0){g0?.focus(),R.vireo.set("alert"),fJ.err();return}if(h==="CHAT"&&!R.armed&&!BJ){let KJ=(Math.ceil((q0.length+180)/4)*0.14+112.00000000000001)/1e6,LJ=R.meta?.vantis_price_usd?KJ/R.meta.vantis_price_usd:null;R.armed={until:performance.now()+3000,quote:`UP TO $${KJ.toFixed(6)}${LJ?` · ~${LJ.toFixed(4)} VANTIS`:""} AT LIST`},R.dirty=!0,HJ("Armed. Press again to fire.");return}R.armed=null,R.busy=!0,R.vireo.set("work"),R.vireo.flapRate=3,R.dirty=!0;try{if(h==="CHAT"){if(R.chat&&R.chat.text)R.chatLog.push({prompt:R.chat.prompt,text:R.chat.text,line:R.chat.line});if(R.chatLog.length>6)R.chatLog.shift();R.chat={prompt:q0,text:"",shown:0,line:""};let t0=performance.now(),KJ=await fetch("/api/playground/fire",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:q0,stream:!0})});if(!KJ.ok){let LJ=await KJ.json().catch(()=>({}));if(R.chat=null,LJ.error==="lane_empty")R.err=`Inference lane is empty — it needs about $${(LJ.required_usd||0.001).toFixed(4)} for this call. Green key on HOME funds it.`,R.vireo.set("droop");else if(LJ.error==="rate_limited")R.err="Easy — a few seconds between fires.",R.vireo.set("alert");else R.err="The rail refused that one. Try again.",R.vireo.set("alert");fJ.err()}else{let LJ=KJ.body.getReader(),MJ=new TextDecoder,CJ="",TJ=null,W9=null;for(;;){let{value:w6,done:HY}=await LJ.read();if(HY)break;CJ+=MJ.decode(w6,{stream:!0});let uQ;while((uQ=CJ.indexOf(`

`))>=0){let qY=CJ.slice(0,uQ);CJ=CJ.slice(uQ+2);for(let LK of qY.split(`
`)){if(!LK.startsWith("data: "))continue;let zK=LK.slice(6);if(zK==="[DONE]")continue;let t8;try{t8=JSON.parse(zK)}catch{continue}let BK=t8.choices?.[0]?.delta?.content;if(BK&&R.chat)R.chat.text+=BK,R.chat.shown=R.chat.text.length,R.vireo.flapRate=6,R.dirty=!0;if(t8.usage)TJ=t8.usage;if(t8.vantis)W9=t8.vantis}}}let g7=((performance.now()-t0)/1000).toFixed(1);if(R.chat&&R.chat.text){let w6=TJ?.completion_tokens??Math.round(R.chat.text.length/4);if(R.chat.line=W9&&W9.cost_usd!=null?`${g7}s · ${w6} TOK OUT · $${Number(W9.cost_usd).toFixed(6)} → ${Number(W9.vantis_burned||0).toFixed(4)} VANTIS BURNED`:`${g7}s · ${w6} TOK OUT`,W9&&W9.balance_usd!=null&&R.meta?.lanes?.inference)R.meta.lanes.inference.balance_usd=W9.balance_usd;if(BJ=!0,g0)g0.value="",Z9[h]="";fJ.ok(),HJ(`Answer: ${R.chat.text}`)}else R.chat=null,R.err="The stream came back empty — try again.",R.vireo.set("alert"),fJ.err()}}else if(h==="SEARCH"){let t0=await fetch("/api/playground/search",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:q0})}),KJ=await t0.json();if(!t0.ok){if(KJ.error==="demo_exhausted")R.err="Today's free searches are spent — more tomorrow.";else R.err="Search did not go through.";R.vireo.set("alert"),fJ.err()}else{if(R.search={query:q0,results:KJ.results,left:KJ.left_today},g0)g0.value="",Z9[h]="";R.vireo.set("happy"),fJ.ok(),HJ(`${KJ.results.length} results`)}}else if(h==="X LOOKUP"){let t0=await fetch("/api/playground/x",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({handle:q0})}),KJ=await t0.json();if(!t0.ok)R.err=KJ.error==="demo_exhausted"?"Today's free lookups are spent — more tomorrow.":KJ.error==="handle_not_found"?"No such handle — check the spelling.":KJ.error==="tool_off"?"This route is offline right now.":"Lookup did not go through.",R.vireo.set("alert"),fJ.err();else{if(R.xprof={profile:KJ.profile,left:KJ.left_today},g0)g0.value="",Z9[h]="";R.vireo.set("happy"),fJ.ok(),HJ(`@${KJ.profile.handle}: ${KJ.profile.followers} followers`)}}}catch{R.err="Network hiccup — try again.",R.vireo.set("alert"),fJ.err()}finally{if(R.busy=!1,R.vireo.state==="work")R.vireo.set("idle");R.dirty=!0}}let v9=-1e9,A8=new vQ,a8=new D0,f9=null,lJ=null,$Y=new pJ({visible:!1}),x7=(h,a,q0,t0,KJ,LJ=0,MJ=0,CJ=0)=>{let TJ=new x0(new AJ(a,q0,t0),$Y);return TJ.position.set(LJ,MJ,CJ),TJ.userData.hit=h,KJ.add(TJ),TJ},ZY=[x7("knob",0.42,0.42,0.22,u),x7("key",0.34,0.34,0.2,U0),x7("lever",0.3,0.26,0.18,t,0,0.05,0.03),x7("card",0.74,0.5,0.26,H0,0,0,0),x7("screen",1.17,0.88,0.06,_,-0.26,0.02,0.19)];function gQ(h){let a=$.domElement.getBoundingClientRect();a8.x=(h.clientX-a.left)/a.width*2-1,a8.y=-((h.clientY-a.top)/a.height)*2+1,A8.setFromCamera(a8,U);let q0=A8.intersectObjects(ZY,!1);return q0.length?q0[0].object.userData.hit:null}function KY(h){let a=$.domElement.getBoundingClientRect();a8.x=(h.clientX-a.left)/a.width*2-1,a8.y=-((h.clientY-a.top)/a.height)*2+1,A8.setFromCamera(a8,U);let q0=A8.intersectObject(p,!1)[0];if(!q0?.uv)return null;return{cx:q0.uv.x*M9,cy:(1-q0.uv.y)*K8}}function WY(h){let a=KY(h);if(!a)return;for(let q0 of R.tabRects)if(a.cx>=q0.x&&a.cx<=q0.x+q0.w&&a.cy>=q0.y&&a.cy<=q0.y+q0.h){T0(q0.mode);return}if(R.modeName()==="LANES"&&a.cy>100&&a.cy<460){let q0=a.cx<M9/2?"inference":"devtools";if(q0!==R.lane){R.lane=q0,d.target=q0==="inference"?-0.22:0.22,fJ.lever(),R.dirty=!0,HJ(`Lane: ${R.lane}`);return}}h7()}$.domElement.addEventListener("pointerdown",(h)=>{v9=performance.now();let a=gQ(h);if(!a)return;if(R.vireo.poke(),a==="knob")f9={x:h.clientX,base:R.mode,acc:0},$.domElement.setPointerCapture(h.pointerId);else if(a==="key"){if(!DJ())return;f.target=-0.032,fJ.press(),FJ=!1,c9=setTimeout(()=>{if(FJ=!0,R.modeName()==="LANES")I9(R.lane)},650)}else if(a==="lever"){if(R.lane=R.lane==="inference"?"devtools":"inference",d.target=R.lane==="inference"?-0.22:0.22,fJ.lever(),R.dirty=!0,R.modeName()!=="LANES")T0(5,!0);HJ(`Lane: ${R.lane}`)}else if(a==="screen")WY(h);else if(a==="card"){if(y==="inserting"||y==="ejecting")return;lJ={startX:h.clientX,startY:h.clientY,startV:b.v,moved:!1,pulledOut:!1},$.domElement.setPointerCapture(h.pointerId)}});let OK=0,pQ=null;$.domElement.addEventListener("pointermove",(h)=>{v9=performance.now();let a=$.domElement.getBoundingClientRect(),q0=(h.clientX-a.left)/a.width*2-1,t0=(h.clientY-a.top)/a.height*2-1;if(!j9)u9.target=q0*0.1,M8.target=t0*0.055;if(f9){let LJ=h.clientX-f9.x,MJ=Math.round(LJ/52);if(MJ!==f9.acc)T0(f9.base+MJ),f9.acc=MJ;$.domElement.style.cursor="grabbing";return}if(lJ){let LJ=$.domElement.getBoundingClientRect(),MJ=(lJ.startY-h.clientY)/LJ.height*1.5-(lJ.startX-h.clientX)/LJ.width*1.1;if(Math.abs(h.clientY-lJ.startY)+Math.abs(h.clientX-lJ.startX)>8)lJ.moved=!0;let CJ=R.busy?0.9:0;if(b.v=Math.max(CJ,Math.min(1,lJ.startV+MJ)),b.target=b.v,b.vel=0,!lJ.pulledOut&&b.v<0.86&&R.powered){lJ.pulledOut=!0,R.powered=!1,R.booted=j9,R.bootT=0,R.dirty=!0;try{let TJ=W8();eJ(500,TJ.currentTime+0.01,0.05,0.05,"sine"),eJ(340,TJ.currentTime+0.08,0.06,0.07,"sine")}catch{}HJ("Card out — screen off")}$.domElement.style.cursor="grabbing";return}let KJ=performance.now();if(KJ-OK>80)OK=KJ,pQ=gQ(h),$.domElement.style.cursor=pQ?"pointer":"default"});let EK=(h)=>{if(lJ){let a=!lJ.moved,q0=b.v;lJ=null;try{$.domElement.releasePointerCapture(h.pointerId)}catch{}if(a){if(y==="hover")_0();else if(y==="seated")R0()}else if(q0>0.55)y="inserting",b.target=1;else y="ejecting",b.target=0;return}if(f9){f9=null;try{$.domElement.releasePointerCapture(h.pointerId)}catch{}}if(f.target!==0){if(f.target=0,clearTimeout(c9),!FJ)G9()}};$.domElement.addEventListener("pointerup",EK),$.domElement.addEventListener("pointerleave",(h)=>{if(!f9)M8.target=0,u9.target=0;EK(h)});let r8=0,DK=null;$.domElement.addEventListener("wheel",(h)=>{if(pQ!=="knob"&&!f9)return;h.preventDefault(),r8+=h.deltaY,clearTimeout(DK),DK=setTimeout(()=>r8=0,200);while(Math.abs(r8)>=100)T0(R.mode+(r8>0?1:-1)),r8-=Math.sign(r8)*100},{passive:!1});let mQ=()=>{if(!DJ())return;f.target=-0.032,setTimeout(()=>f.target=0,130),fJ.press(),G9()};addEventListener("keydown",(h)=>{if(h.target===g0){if(h.key==="Enter")h.preventDefault(),mQ();return}if(h.target?.tagName==="INPUT"||h.target?.tagName==="TEXTAREA")return;if(h.key==="ArrowRight")T0(R.mode+1);else if(h.key==="ArrowLeft")T0(R.mode-1);else if(h.key==="Enter")mQ();else if(h.key==="Escape"){if(Y8)h7(!1)}else if(h.key.toLowerCase()==="z")h7();else if(h.key.toLowerCase()==="l")R.lane=R.lane==="inference"?"devtools":"inference",d.target=R.lane==="inference"?-0.22:0.22,fJ.lever(),R.dirty=!0}),h0?.addEventListener("click",mQ),YJ?.addEventListener("click",()=>{if(R.modeName()==="LANES")I9(R.lane);else $9("inference")});function kK(){let h=J.clientWidth,a=Math.max(440,Math.min(700,Math.round(h*0.72)));$.setSize(h,a),U.aspect=h/a,H.z=h<560?6:h<760?4.9:4.3,U.updateProjectionMatrix(),R.dirty=!0}new ResizeObserver(kK).observe(J),kK();let lQ=performance.now(),dQ=0,XY=[M8,u9,z,f,d,b];function RK(h){dQ=requestAnimationFrame(RK);let a=Math.max(0,Math.min(0.25,(h-lQ)/1000)),q0=Math.min(0.05,a);lQ=h;let t0=h/1000;j0.t=t0;let KJ=R.step(a,t0),LJ=h-v9<2500;if(!(R.powered&&!R.booted||R.busy||KJ||LJ||!I8.settled()||y==="inserting"||y==="ejecting"||!!lJ||XY.some((TJ)=>!TJ.settled())))if(Math.abs(L.position.y-0.02)>0.0004)L.position.y+=(0.02-L.position.y)*Math.min(1,q0*3);else return;else if(!j9&&LJ)L.position.y=0.02+Math.sin(t0*0.9)*0.012;if(!j9){let TJ=1-I8.v*0.75;L.rotation.x=M8.step(q0)*TJ,L.rotation.y=u9.step(q0)*TJ}let CJ=I8.step(q0);if(CJ>0.001)p.getWorldPosition(y7),b7.set(0,0,1),p.getWorldQuaternion(U.quaternion),b7.applyQuaternion(U.quaternion),A6.lerpVectors(N,y7,CJ),U.position.lerpVectors(H,y7.clone().addScaledVector(b7,1.92),CJ),U.lookAt(A6);else U.position.copy(H),U.lookAt(N);if(u.rotation.z=z.step(q0),V0.position.z=f.step(q0),J0.rotation.z=d.step(q0),o8(lJ?b.v:b.step(q0)),!lJ&&y==="inserting"&&Math.abs(b.v-1)<0.01)y="seated",fJ.dock(),R.powered=!0,R.dirty=!0;else if(!lJ&&y==="ejecting"&&b.v<0.02)y="hover",z0=0;T.material.color.set(R.lane==="devtools"?c8:1327146),c0.material.color.set(R.lane==="inference"?c8:1327146),O.color.setHex(c8).multiplyScalar(R.busy?0.75+Math.sin(t0*9)*0.25:1),$.render(Z,U)}if(j9){let h=()=>{if(R.step(0.03333333333333333,performance.now()/1000),u.rotation.z=z.target,V0.position.z=f.target,J0.rotation.z=d.target,b.v=b.target,o8(b.v),y==="inserting")y="seated",R.powered=!0,R.dirty=!0;else if(y==="ejecting")y="hover";$.render(Z,U)};setInterval(h,250),h()}else{let h=!0,a=!1,q0=()=>{let t0=h&&!document.hidden;if(t0&&!a)a=!0,lQ=performance.now(),dQ=requestAnimationFrame(RK);else if(!t0&&a)a=!1,cancelAnimationFrame(dQ)};new IntersectionObserver((t0)=>{h=t0[0]?.isIntersecting!==!1,q0()},{threshold:0.02}).observe(J),document.addEventListener("visibilitychange",q0),q0()}let P6=new j;function YY(h){return h.getWorldPosition(P6),P6.project(U),{x:(P6.x+1)/2*$.domElement.clientWidth,y:(1-P6.y)/2*$.domElement.clientHeight}}function UY(){let h=[{obj:p,ring:200,k:"The screen",txt:"Everything happens here. Tap the tabs to switch tools — and tap the screen itself to raise it closer."},{obj:U0,ring:110,k:"The green key",txt:"Fires the current tool. Spending arms first with a printed quote — nothing costs money on a single press."},{obj:u,ring:110,k:"The dial",txt:"Steps through the same tools. Drag it, scroll over it, or use the arrow keys."},{obj:t,ring:110,k:"The lanes",txt:"The paddle picks which lane spends — Inference is live today. Your card up top is the session cartridge."}],a=document.createElement("div");a.className="dv-coach",a.innerHTML='<div class="dv-coach-ring"></div><div class="dv-coach-card"><div class="dv-coach-step"></div><div class="dv-coach-txt"></div><div class="dv-coach-row"><button data-a="skip">Skip</button><button class="pri" data-a="next">Next</button></div></div>',J.appendChild(a);let q0=a.querySelector(".dv-coach-ring"),t0=a.querySelector(".dv-coach-step"),KJ=a.querySelector(".dv-coach-txt"),LJ=a.querySelector('[data-a="next"]'),MJ=0,CJ=()=>{let W9=h[MJ],g7=YY(W9.obj);q0.style.left=g7.x+"px",q0.style.top=g7.y+"px",q0.style.width=q0.style.height=W9.ring+"px",t0.textContent=`${MJ+1} / ${h.length} — ${W9.k}`,KJ.textContent=W9.txt,LJ.textContent=MJ===h.length-1?"Start":"Next",fJ.detent(MJ)},TJ=()=>{try{localStorage.setItem("vc-device-coach","1")}catch{}a.remove()};a.querySelector('[data-a="skip"]').addEventListener("click",TJ),LJ.addEventListener("click",()=>{if(MJ++,MJ>=h.length)TJ();else CJ()}),CJ()}let VK=!1;try{VK=!!localStorage.getItem("vc-device-coach")}catch{}if(!VK&&!j9)setTimeout(UY,j9?0:2200);document.body.classList.add("dv-on"),document.getElementById("dv-console")?.removeAttribute("open"),w0(),rJ().then($J),window.__device={ready:!0,os:R,setMode:(h)=>T0(h),pickAt:(h,a)=>gQ({clientX:h,clientY:a}),insertCard:_0,ejectCard:R0,cardState:()=>y,frames:()=>$.info.render.frame,screenClientPoint:(h,a)=>{let q0=new j((h-0.5)*1.15,(a-0.5)*0.8625,0);p.localToWorld(q0),q0.project(U);let t0=$.domElement.getBoundingClientRect();return{x:t0.left+(q0.x+1)/2*t0.width,y:t0.top+(1-q0.y)/2*t0.height}},fire:G9,snapshot:()=>{return $.render(Z,U),$.domElement.toDataURL("image/png")}}}if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",eX);else eX();
