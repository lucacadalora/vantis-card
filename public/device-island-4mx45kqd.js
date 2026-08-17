var SY=Object.create;var{getPrototypeOf:jY,defineProperty:_8,getOwnPropertyNames:K$,getOwnPropertyDescriptor:vY}=Object,S6=Object.prototype.hasOwnProperty;function j6(J){return this[J]}var pG=(J,Q,$)=>{var Z=K$(Q);for(let K of Z)if(!S6.call(J,K)&&K!=="default")_8(J,K,{get:j6.bind(Q,K),enumerable:!0});if($){for(let K of Z)if(!S6.call($,K)&&K!=="default")_8($,K,{get:j6.bind(Q,K),enumerable:!0});return $}},fY,yY,mG=(J,Q,$)=>{var Z=J!=null&&typeof J==="object";if(Z){var K=Q?fY??=new WeakMap:yY??=new WeakMap,W=K.get(J);if(W)return W}$=J!=null?SY(jY(J)):{};let X=Q||!J||!J.__esModule?_8($,"default",{value:J,enumerable:!0}):$;for(let Y of K$(J))if(!S6.call(X,Y))_8(X,Y,{get:j6.bind(J,Y),enumerable:!0});if(Z)K.set(J,X);return X},lG=(J)=>{var Q=(uK??=new WeakMap).get(J),$;if(Q)return Q;if(Q=_8({},"__esModule",{value:!0}),J&&typeof J==="object"||typeof J==="function"){for(var Z of K$(J))if(!S6.call(Q,Z))_8(Q,Z,{get:j6.bind(J,Z),enumerable:!($=vY(J,Z))||$.enumerable})}return uK.set(J,Q),Q},uK,dG=(J,Q)=>()=>(Q||J((Q={exports:{}}).exports,Q),Q.exports);var bY=(J)=>J;function hY(J,Q){this[J]=bY.bind(null,Q)}var uG=(J,Q)=>{for(var $ in Q)_8(J,$,{get:Q[$],enumerable:!0,configurable:!0,set:hY.bind(Q,$)})};var cG=(J,Q)=>()=>(J&&(Q=J(J=0)),Q);var nG=((J)=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(J,{get:(Q,$)=>(typeof require<"u"?require:Q)[$]}):J)(function(J){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+J+'" is not supported')});var BW="185";var MW=0,b$=1,IW=2;var J6=1,AW=2,k7=3,V7=0,eJ=1,m9=2,l9=0,Q6=1,h$=2,x$=3,g$=4,PW=5;var L7=100,CW=101,_W=102,wW=103,TW=104,SW=200,jW=201,vW=202,fW=203,yW=204,bW=205,hW=206,xW=207,gW=208,pW=209,mW=210,lW=211,dW=212,uW=213,cW=214,nW=0,sW=1,iW=2,p$=3,oW=4,aW=5,rW=6,tW=7,eW=0,JX=1,QX=2,f9=0,m$=1,l$=2,d$=3,$6=4,u$=5,c$=6,n$=7;var z7=301,b8=302,XQ=303,YQ=304,Z6=306,UQ=1000,HQ=1001,$X=1002,k8=1003,ZX=1004;var K6=1005;var fJ=1006,qQ=1007;var $8=1008;var y9=1009,KX=1010,WX=1011,W6=1012,s$=1013,V8=1014,Z8=1015,K8=1016,i$=1017,o$=1018,B7=1020,XX=35902,YX=35899,UX=1021,HX=1022,d9=1023,h8=1026,x8=1027,qX=1028,a$=1029,g8=1030,r$=1031;var t$=1033,GQ=33776,NQ=33777,FQ=33778,OQ=33779,e$=35840,JZ=35841,QZ=35842,$Z=35843,ZZ=36196,KZ=37492,WZ=37496,XZ=37488,YZ=37489,EQ=37490,UZ=37491,HZ=37808,qZ=37809,GZ=37810,NZ=37811,FZ=37812,OZ=37813,EZ=37814,DZ=37815,RZ=37816,kZ=37817,VZ=37818,LZ=37819,zZ=37820,BZ=37821,MZ=36492,IZ=36494,AZ=36495,PZ=36283,CZ=36284,DQ=36285,_Z=36286;var wZ=0,GX=1,p8="",b9="srgb",TZ="srgb-linear",SZ="linear",zJ="srgb";var NX=512,FX=513,OX=514,RQ=515,EX=516,DX=517,kQ=518,RX=519;var jZ="300 es",vZ=2000;function xY(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function gY(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function E7(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function kX(){let J=E7("canvas");return J.style.display="block",J}var cK={},D7=null;function fZ(...J){let Q="THREE."+J.shift();if(D7)D7("log",Q,...J);else console.log(Q,...J)}function VX(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let $=J[1];if($&&$.isStackTrace)J[0]+=" "+$.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function l0(...J){J=VX(J);let Q="THREE."+J.shift();if(D7)D7("warn",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.warn($.getError(Q));else console.warn(Q,...J)}}function m0(...J){J=VX(J);let Q="THREE."+J.shift();if(D7)D7("error",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.error($.getError(Q));else console.error(Q,...J)}}function f8(...J){let Q=J.join(" ");if(Q in cK)return;cK[Q]=!0,l0(...J)}function LX(J,Q,$){return new Promise(function(Z,K){function W(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:K();break;case J.TIMEOUT_EXPIRED:setTimeout(W,$);break;default:Z()}}setTimeout(W,$)})}var zX={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class W8{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let Z=$[J];if(Z!==void 0){let K=Z.indexOf(Q);if(K!==-1)Z.splice(K,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let Z=$.slice(0);for(let K=0,W=Z.length;K<W;K++)Z[K].call(this,J);J.target=null}}}var oJ=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var W$=Math.PI/180,ZQ=180/Math.PI;function M7(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(oJ[J&255]+oJ[J>>8&255]+oJ[J>>16&255]+oJ[J>>24&255]+"-"+oJ[Q&255]+oJ[Q>>8&255]+"-"+oJ[Q>>16&15|64]+oJ[Q>>24&255]+"-"+oJ[$&63|128]+oJ[$>>8&255]+"-"+oJ[$>>16&255]+oJ[$>>24&255]+oJ[Z&255]+oJ[Z>>8&255]+oJ[Z>>16&255]+oJ[Z>>24&255]).toLowerCase()}function WJ(J,Q,$){return Math.max(Q,Math.min($,J))}function pY(J,Q){return(J%Q+Q)%Q}function X$(J,Q,$){return(1-$)*J+$*Q}function m7(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function X9(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}class E0{static{E0.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,Z=J.elements;return this.x=Z[0]*Q+Z[3]*$+Z[6],this.y=Z[1]*Q+Z[4]*$+Z[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=WJ(this.x,J.x,Q.x),this.y=WJ(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=WJ(this.x,J,Q),this.y=WJ(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(WJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(WJ($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),K=this.x-J.x,W=this.y-J.y;return this.x=K*$-W*Z+J.x,this.y=K*Z+W*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class N9{constructor(J=0,Q=0,$=0,Z=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=Z}static slerpFlat(J,Q,$,Z,K,W,X){let Y=$[Z+0],U=$[Z+1],H=$[Z+2],G=$[Z+3],N=K[W+0],q=K[W+1],F=K[W+2],R=K[W+3];if(G!==R||Y!==N||U!==q||H!==F){let I=Y*N+U*q+H*F+G*R;if(I<0)N=-N,q=-q,F=-F,R=-R,I=-I;let O=1-X;if(I<0.9995){let E=Math.acos(I),w=Math.sin(E);O=Math.sin(O*E)/w,X=Math.sin(X*E)/w,Y=Y*O+N*X,U=U*O+q*X,H=H*O+F*X,G=G*O+R*X}else{Y=Y*O+N*X,U=U*O+q*X,H=H*O+F*X,G=G*O+R*X;let E=1/Math.sqrt(Y*Y+U*U+H*H+G*G);Y*=E,U*=E,H*=E,G*=E}}J[Q]=Y,J[Q+1]=U,J[Q+2]=H,J[Q+3]=G}static multiplyQuaternionsFlat(J,Q,$,Z,K,W){let X=$[Z],Y=$[Z+1],U=$[Z+2],H=$[Z+3],G=K[W],N=K[W+1],q=K[W+2],F=K[W+3];return J[Q]=X*F+H*G+Y*q-U*N,J[Q+1]=Y*F+H*N+U*G-X*q,J[Q+2]=U*F+H*q+X*N-Y*G,J[Q+3]=H*F-X*G-Y*N-U*q,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,Z){return this._x=J,this._y=Q,this._z=$,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:Z,_z:K,_order:W}=J,X=Math.cos,Y=Math.sin,U=X($/2),H=X(Z/2),G=X(K/2),N=Y($/2),q=Y(Z/2),F=Y(K/2);switch(W){case"XYZ":this._x=N*H*G+U*q*F,this._y=U*q*G-N*H*F,this._z=U*H*F+N*q*G,this._w=U*H*G-N*q*F;break;case"YXZ":this._x=N*H*G+U*q*F,this._y=U*q*G-N*H*F,this._z=U*H*F-N*q*G,this._w=U*H*G+N*q*F;break;case"ZXY":this._x=N*H*G-U*q*F,this._y=U*q*G+N*H*F,this._z=U*H*F+N*q*G,this._w=U*H*G-N*q*F;break;case"ZYX":this._x=N*H*G-U*q*F,this._y=U*q*G+N*H*F,this._z=U*H*F-N*q*G,this._w=U*H*G+N*q*F;break;case"YZX":this._x=N*H*G+U*q*F,this._y=U*q*G+N*H*F,this._z=U*H*F-N*q*G,this._w=U*H*G-N*q*F;break;case"XZY":this._x=N*H*G-U*q*F,this._y=U*q*G-N*H*F,this._z=U*H*F+N*q*G,this._w=U*H*G+N*q*F;break;default:l0("Quaternion: .setFromEuler() encountered an unknown order: "+W)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,Z=Math.sin($);return this._x=J.x*Z,this._y=J.y*Z,this._z=J.z*Z,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],Z=Q[4],K=Q[8],W=Q[1],X=Q[5],Y=Q[9],U=Q[2],H=Q[6],G=Q[10],N=$+X+G;if(N>0){let q=0.5/Math.sqrt(N+1);this._w=0.25/q,this._x=(H-Y)*q,this._y=(K-U)*q,this._z=(W-Z)*q}else if($>X&&$>G){let q=2*Math.sqrt(1+$-X-G);this._w=(H-Y)/q,this._x=0.25*q,this._y=(Z+W)/q,this._z=(K+U)/q}else if(X>G){let q=2*Math.sqrt(1+X-$-G);this._w=(K-U)/q,this._x=(Z+W)/q,this._y=0.25*q,this._z=(Y+H)/q}else{let q=2*Math.sqrt(1+G-$-X);this._w=(W-Z)/q,this._x=(K+U)/q,this._y=(Y+H)/q,this._z=0.25*q}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(WJ(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let Z=Math.min(1,Q/$);return this.slerp(J,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:Z,_z:K,_w:W}=J,X=Q._x,Y=Q._y,U=Q._z,H=Q._w;return this._x=$*H+W*X+Z*U-K*Y,this._y=Z*H+W*Y+K*X-$*U,this._z=K*H+W*U+$*Y-Z*X,this._w=W*H-$*X-Z*Y-K*U,this._onChangeCallback(),this}slerp(J,Q){let{_x:$,_y:Z,_z:K,_w:W}=J,X=this.dot(J);if(X<0)$=-$,Z=-Z,K=-K,W=-W,X=-X;let Y=1-Q;if(X<0.9995){let U=Math.acos(X),H=Math.sin(U);Y=Math.sin(Y*U)/H,Q=Math.sin(Q*U)/H,this._x=this._x*Y+$*Q,this._y=this._y*Y+Z*Q,this._z=this._z*Y+K*Q,this._w=this._w*Y+W*Q,this._onChangeCallback()}else this._x=this._x*Y+$*Q,this._y=this._y*Y+Z*Q,this._z=this._z*Y+K*Q,this._w=this._w*Y+W*Q,this.normalize();return this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),Z=Math.sqrt(1-$),K=Math.sqrt($);return this.set(Z*Math.sin(J),Z*Math.cos(J),K*Math.sin(Q),K*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class v{static{v.prototype.isVector3=!0}constructor(J=0,Q=0,$=0){this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(nK.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(nK.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements;return this.x=K[0]*Q+K[3]*$+K[6]*Z,this.y=K[1]*Q+K[4]*$+K[7]*Z,this.z=K[2]*Q+K[5]*$+K[8]*Z,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements,W=1/(K[3]*Q+K[7]*$+K[11]*Z+K[15]);return this.x=(K[0]*Q+K[4]*$+K[8]*Z+K[12])*W,this.y=(K[1]*Q+K[5]*$+K[9]*Z+K[13])*W,this.z=(K[2]*Q+K[6]*$+K[10]*Z+K[14])*W,this}applyQuaternion(J){let Q=this.x,$=this.y,Z=this.z,K=J.x,W=J.y,X=J.z,Y=J.w,U=2*(W*Z-X*$),H=2*(X*Q-K*Z),G=2*(K*$-W*Q);return this.x=Q+Y*U+W*G-X*H,this.y=$+Y*H+X*U-K*G,this.z=Z+Y*G+K*H-W*U,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements;return this.x=K[0]*Q+K[4]*$+K[8]*Z,this.y=K[1]*Q+K[5]*$+K[9]*Z,this.z=K[2]*Q+K[6]*$+K[10]*Z,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=WJ(this.x,J.x,Q.x),this.y=WJ(this.y,J.y,Q.y),this.z=WJ(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=WJ(this.x,J,Q),this.y=WJ(this.y,J,Q),this.z=WJ(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(WJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:Z,z:K}=J,W=Q.x,X=Q.y,Y=Q.z;return this.x=Z*Y-K*X,this.y=K*W-$*Y,this.z=$*X-Z*W,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return Y$.copy(this).projectOnVector(J),this.sub(Y$)}reflect(J){return this.sub(Y$.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(WJ($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,Z=this.z-J.z;return Q*Q+$*$+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let Z=Math.sin(Q)*J;return this.x=Z*Math.sin($),this.y=Math.cos(Q)*J,this.z=Z*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),Z=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=Z,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var Y$=new v,nK=new N9;class o0{static{o0.prototype.isMatrix3=!0}constructor(J,Q,$,Z,K,W,X,Y,U){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,K,W,X,Y,U)}set(J,Q,$,Z,K,W,X,Y,U){let H=this.elements;return H[0]=J,H[1]=Z,H[2]=X,H[3]=Q,H[4]=K,H[5]=Y,H[6]=$,H[7]=W,H[8]=U,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,K=this.elements,W=$[0],X=$[3],Y=$[6],U=$[1],H=$[4],G=$[7],N=$[2],q=$[5],F=$[8],R=Z[0],I=Z[3],O=Z[6],E=Z[1],w=Z[4],P=Z[7],L=Z[2],A=Z[5],C=Z[8];return K[0]=W*R+X*E+Y*L,K[3]=W*I+X*w+Y*A,K[6]=W*O+X*P+Y*C,K[1]=U*R+H*E+G*L,K[4]=U*I+H*w+G*A,K[7]=U*O+H*P+G*C,K[2]=N*R+q*E+F*L,K[5]=N*I+q*w+F*A,K[8]=N*O+q*P+F*C,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],X=J[5],Y=J[6],U=J[7],H=J[8];return Q*W*H-Q*X*U-$*K*H+$*X*Y+Z*K*U-Z*W*Y}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],X=J[5],Y=J[6],U=J[7],H=J[8],G=H*W-X*U,N=X*Y-H*K,q=U*K-W*Y,F=Q*G+$*N+Z*q;if(F===0)return this.set(0,0,0,0,0,0,0,0,0);let R=1/F;return J[0]=G*R,J[1]=(Z*U-H*$)*R,J[2]=(X*$-Z*W)*R,J[3]=N*R,J[4]=(H*Q-Z*Y)*R,J[5]=(Z*K-X*Q)*R,J[6]=q*R,J[7]=($*Y-U*Q)*R,J[8]=(W*Q-$*K)*R,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,Z,K,W,X){let Y=Math.cos(K),U=Math.sin(K);return this.set($*Y,$*U,-$*(Y*W+U*X)+W+J,-Z*U,Z*Y,-Z*(-U*W+Y*X)+X+Q,0,0,1),this}scale(J,Q){return f8("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(U$.makeScale(J,Q)),this}rotate(J){return f8("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(U$.makeRotation(-J)),this}translate(J,Q){return f8("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(U$.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<9;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var U$=new o0,sK=new o0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),iK=new o0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function mY(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(K,W,X){if(this.enabled===!1||W===X||!W||!X)return K;if(this.spaces[W].transfer==="srgb")K.r=Q8(K.r),K.g=Q8(K.g),K.b=Q8(K.b);if(this.spaces[W].primaries!==this.spaces[X].primaries)K.applyMatrix3(this.spaces[W].toXYZ),K.applyMatrix3(this.spaces[X].fromXYZ);if(this.spaces[X].transfer==="srgb")K.r=O7(K.r),K.g=O7(K.g),K.b=O7(K.b);return K},workingToColorSpace:function(K,W){return this.convert(K,this.workingColorSpace,W)},colorSpaceToWorking:function(K,W){return this.convert(K,W,this.workingColorSpace)},getPrimaries:function(K){return this.spaces[K].primaries},getTransfer:function(K){if(K==="")return"linear";return this.spaces[K].transfer},getToneMappingMode:function(K){return this.spaces[K].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(K,W=this.workingColorSpace){return K.fromArray(this.spaces[W].luminanceCoefficients)},define:function(K){Object.assign(this.spaces,K)},_getMatrix:function(K,W,X){return K.copy(this.spaces[W].toXYZ).multiply(this.spaces[X].fromXYZ)},_getDrawingBufferColorSpace:function(K){return this.spaces[K].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(K=this.workingColorSpace){return this.spaces[K].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(K,W){return f8("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(K,W)},toWorkingColorSpace:function(K,W){return f8("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(K,W)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],Z=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:Z,transfer:"linear",toXYZ:sK,fromXYZ:iK,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:Z,transfer:"srgb",toXYZ:sK,fromXYZ:iK,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var XJ=mY();function Q8(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function O7(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var J7;class yZ{static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(J7===void 0)J7=E7("canvas");J7.width=J.width,J7.height=J.height;let Z=J7.getContext("2d");if(J instanceof ImageData)Z.putImageData(J,0,0);else Z.drawImage(J,0,0,J.width,J.height);$=J7}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=E7("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let Z=$.getImageData(0,0,J.width,J.height),K=Z.data;for(let W=0;W<K.length;W++)K[W]=Q8(K[W]/255)*255;return $.putImageData(Z,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(Q8(Q[$]/255)*255);else Q[$]=Q8(Q[$]);return{data:Q,width:J.width,height:J.height}}else return l0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var lY=0;class X6{constructor(J=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lY++}),this.uuid=M7(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame<"u"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let K;if(Array.isArray(Z)){K=[];for(let W=0,X=Z.length;W<X;W++)if(Z[W].isDataTexture)K.push(H$(Z[W].image));else K.push(H$(Z[W]))}else K=H$(Z);$.url=K}if(!Q)J.images[this.uuid]=$;return $}}function H$(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return yZ.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return l0("Texture: Unable to serialize Texture."),{}}var dY=0,q$=new v;class mJ extends W8{constructor(J=mJ.DEFAULT_IMAGE,Q=mJ.DEFAULT_MAPPING,$=1001,Z=1001,K=1006,W=1008,X=1023,Y=1009,U=mJ.DEFAULT_ANISOTROPY,H=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:dY++}),this.uuid=M7(),this.name="",this.source=new X6(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=Z,this.magFilter=K,this.minFilter=W,this.anisotropy=U,this.format=X,this.internalFormat=null,this.type=Y,this.offset=new E0(0,0),this.repeat=new E0(1,1),this.center=new E0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new o0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=H,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(q$).x}get height(){return this.source.getSize(q$).y}get depth(){return this.source.getSize(q$).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){l0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){l0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(Z&&$&&(Z.isVector2&&$.isVector2))Z.copy($);else if(Z&&$&&(Z.isVector3&&$.isVector3))Z.copy($);else if(Z&&$&&(Z.isMatrix3&&$.isMatrix3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}mJ.DEFAULT_IMAGE=null;mJ.DEFAULT_MAPPING=300;mJ.DEFAULT_ANISOTROPY=1;class PJ{static{PJ.prototype.isVector4=!0}constructor(J=0,Q=0,$=0,Z=1){this.x=J,this.y=Q,this.z=$,this.w=Z}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,Z){return this.x=J,this.y=Q,this.z=$,this.w=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,K=this.w,W=J.elements;return this.x=W[0]*Q+W[4]*$+W[8]*Z+W[12]*K,this.y=W[1]*Q+W[5]*$+W[9]*Z+W[13]*K,this.z=W[2]*Q+W[6]*$+W[10]*Z+W[14]*K,this.w=W[3]*Q+W[7]*$+W[11]*Z+W[15]*K,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,Z,K,W=0.01,X=0.1,Y=J.elements,U=Y[0],H=Y[4],G=Y[8],N=Y[1],q=Y[5],F=Y[9],R=Y[2],I=Y[6],O=Y[10];if(Math.abs(H-N)<0.01&&Math.abs(G-R)<0.01&&Math.abs(F-I)<0.01){if(Math.abs(H+N)<0.1&&Math.abs(G+R)<0.1&&Math.abs(F+I)<0.1&&Math.abs(U+q+O-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let w=(U+1)/2,P=(q+1)/2,L=(O+1)/2,A=(H+N)/4,C=(G+R)/4,_=(F+I)/4;if(w>P&&w>L)if(w<0.01)$=0,Z=0.707106781,K=0.707106781;else $=Math.sqrt(w),Z=A/$,K=C/$;else if(P>L)if(P<0.01)$=0.707106781,Z=0,K=0.707106781;else Z=Math.sqrt(P),$=A/Z,K=_/Z;else if(L<0.01)$=0.707106781,Z=0.707106781,K=0;else K=Math.sqrt(L),$=C/K,Z=_/K;return this.set($,Z,K,Q),this}let E=Math.sqrt((I-F)*(I-F)+(G-R)*(G-R)+(N-H)*(N-H));if(Math.abs(E)<0.001)E=1;return this.x=(I-F)/E,this.y=(G-R)/E,this.z=(N-H)/E,this.w=Math.acos((U+q+O-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=WJ(this.x,J.x,Q.x),this.y=WJ(this.y,J.y,Q.y),this.z=WJ(this.z,J.z,Q.z),this.w=WJ(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=WJ(this.x,J,Q),this.y=WJ(this.y,J,Q),this.z=WJ(this.z,J,Q),this.w=WJ(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(WJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bZ extends W8{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new PJ(0,0,J,Q),this.scissorTest=!1,this.viewport=new PJ(0,0,J,Q),this.textures=[];let Z={width:J,height:Q,depth:$.depth},K=new mJ(Z),W=$.count;for(let X=0;X<W;X++)this.textures[X]=K.clone(),this.textures[X].isRenderTargetTexture=!0,this.textures[X].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview,this.useArrayDepthTexture=$.useArrayDepthTexture}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if(J!==null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let Z=0,K=this.textures.length;Z<K;Z++)if(this.textures[Z].image.width=J,this.textures[Z].image.height=Q,this.textures[Z].image.depth=$,this.textures[Z].isData3DTexture!==!0)this.textures[Z].isArrayTexture=this.textures[Z].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let Z=Object.assign({},J.textures[Q].image);this.textures[Q].source=new X6(Z)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,J.depthTexture!==null)this.depthTexture=J.depthTexture.clone();return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class z9 extends bZ{constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class VQ extends mJ{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class hZ extends mJ{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class VJ{static{VJ.prototype.isMatrix4=!0}constructor(J,Q,$,Z,K,W,X,Y,U,H,G,N,q,F,R,I){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,K,W,X,Y,U,H,G,N,q,F,R,I)}set(J,Q,$,Z,K,W,X,Y,U,H,G,N,q,F,R,I){let O=this.elements;return O[0]=J,O[4]=Q,O[8]=$,O[12]=Z,O[1]=K,O[5]=W,O[9]=X,O[13]=Y,O[2]=U,O[6]=H,O[10]=G,O[14]=N,O[3]=q,O[7]=F,O[11]=R,O[15]=I,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new VJ().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){if(this.determinantAffine()===0)return J.set(1,0,0),Q.set(0,1,0),$.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let Q=this.elements,$=J.elements,Z=1/Q7.setFromMatrixColumn(J,0).length(),K=1/Q7.setFromMatrixColumn(J,1).length(),W=1/Q7.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*Z,Q[1]=$[1]*Z,Q[2]=$[2]*Z,Q[3]=0,Q[4]=$[4]*K,Q[5]=$[5]*K,Q[6]=$[6]*K,Q[7]=0,Q[8]=$[8]*W,Q[9]=$[9]*W,Q[10]=$[10]*W,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,Z=J.y,K=J.z,W=Math.cos($),X=Math.sin($),Y=Math.cos(Z),U=Math.sin(Z),H=Math.cos(K),G=Math.sin(K);if(J.order==="XYZ"){let N=W*H,q=W*G,F=X*H,R=X*G;Q[0]=Y*H,Q[4]=-Y*G,Q[8]=U,Q[1]=q+F*U,Q[5]=N-R*U,Q[9]=-X*Y,Q[2]=R-N*U,Q[6]=F+q*U,Q[10]=W*Y}else if(J.order==="YXZ"){let N=Y*H,q=Y*G,F=U*H,R=U*G;Q[0]=N+R*X,Q[4]=F*X-q,Q[8]=W*U,Q[1]=W*G,Q[5]=W*H,Q[9]=-X,Q[2]=q*X-F,Q[6]=R+N*X,Q[10]=W*Y}else if(J.order==="ZXY"){let N=Y*H,q=Y*G,F=U*H,R=U*G;Q[0]=N-R*X,Q[4]=-W*G,Q[8]=F+q*X,Q[1]=q+F*X,Q[5]=W*H,Q[9]=R-N*X,Q[2]=-W*U,Q[6]=X,Q[10]=W*Y}else if(J.order==="ZYX"){let N=W*H,q=W*G,F=X*H,R=X*G;Q[0]=Y*H,Q[4]=F*U-q,Q[8]=N*U+R,Q[1]=Y*G,Q[5]=R*U+N,Q[9]=q*U-F,Q[2]=-U,Q[6]=X*Y,Q[10]=W*Y}else if(J.order==="YZX"){let N=W*Y,q=W*U,F=X*Y,R=X*U;Q[0]=Y*H,Q[4]=R-N*G,Q[8]=F*G+q,Q[1]=G,Q[5]=W*H,Q[9]=-X*H,Q[2]=-U*H,Q[6]=q*G+F,Q[10]=N-R*G}else if(J.order==="XZY"){let N=W*Y,q=W*U,F=X*Y,R=X*U;Q[0]=Y*H,Q[4]=-G,Q[8]=U*H,Q[1]=N*G+R,Q[5]=W*H,Q[9]=q*G-F,Q[2]=F*G-q,Q[6]=X*H,Q[10]=R*G+N}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(uY,J,cY)}lookAt(J,Q,$){let Z=this.elements;if(U9.subVectors(J,Q),U9.lengthSq()===0)U9.z=1;if(U9.normalize(),N8.crossVectors($,U9),N8.lengthSq()===0){if(Math.abs($.z)===1)U9.x+=0.0001;else U9.z+=0.0001;U9.normalize(),N8.crossVectors($,U9)}return N8.normalize(),v6.crossVectors(U9,N8),Z[0]=N8.x,Z[4]=v6.x,Z[8]=U9.x,Z[1]=N8.y,Z[5]=v6.y,Z[9]=U9.y,Z[2]=N8.z,Z[6]=v6.z,Z[10]=U9.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,K=this.elements,W=$[0],X=$[4],Y=$[8],U=$[12],H=$[1],G=$[5],N=$[9],q=$[13],F=$[2],R=$[6],I=$[10],O=$[14],E=$[3],w=$[7],P=$[11],L=$[15],A=Z[0],C=Z[4],_=Z[8],V=Z[12],M=Z[1],l=Z[5],D=Z[9],m=Z[13],o=Z[2],b=Z[6],c=Z[10],s=Z[14],x=Z[3],J0=Z[7],W0=Z[11],H0=Z[15];return K[0]=W*A+X*M+Y*o+U*x,K[4]=W*C+X*l+Y*b+U*J0,K[8]=W*_+X*D+Y*c+U*W0,K[12]=W*V+X*m+Y*s+U*H0,K[1]=H*A+G*M+N*o+q*x,K[5]=H*C+G*l+N*b+q*J0,K[9]=H*_+G*D+N*c+q*W0,K[13]=H*V+G*m+N*s+q*H0,K[2]=F*A+R*M+I*o+O*x,K[6]=F*C+R*l+I*b+O*J0,K[10]=F*_+R*D+I*c+O*W0,K[14]=F*V+R*m+I*s+O*H0,K[3]=E*A+w*M+P*o+L*x,K[7]=E*C+w*l+P*b+L*J0,K[11]=E*_+w*D+P*c+L*W0,K[15]=E*V+w*m+P*s+L*H0,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],K=J[12],W=J[1],X=J[5],Y=J[9],U=J[13],H=J[2],G=J[6],N=J[10],q=J[14],F=J[3],R=J[7],I=J[11],O=J[15],E=Y*q-U*N,w=X*q-U*G,P=X*N-Y*G,L=W*q-U*H,A=W*N-Y*H,C=W*G-X*H;return Q*(R*E-I*w+O*P)-$*(F*E-I*L+O*A)+Z*(F*w-R*L+O*C)-K*(F*P-R*A+I*C)}determinantAffine(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],K=J[1],W=J[5],X=J[9],Y=J[2],U=J[6],H=J[10];return Q*(W*H-X*U)-$*(K*H-X*Y)+Z*(K*U-W*Y)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let Z=this.elements;if(J.isVector3)Z[12]=J.x,Z[13]=J.y,Z[14]=J.z;else Z[12]=J,Z[13]=Q,Z[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],X=J[5],Y=J[6],U=J[7],H=J[8],G=J[9],N=J[10],q=J[11],F=J[12],R=J[13],I=J[14],O=J[15],E=Q*X-$*W,w=Q*Y-Z*W,P=Q*U-K*W,L=$*Y-Z*X,A=$*U-K*X,C=Z*U-K*Y,_=H*R-G*F,V=H*I-N*F,M=H*O-q*F,l=G*I-N*R,D=G*O-q*R,m=N*O-q*I,o=E*m-w*D+P*l+L*M-A*V+C*_;if(o===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/o;return J[0]=(X*m-Y*D+U*l)*b,J[1]=(Z*D-$*m-K*l)*b,J[2]=(R*C-I*A+O*L)*b,J[3]=(N*A-G*C-q*L)*b,J[4]=(Y*M-W*m-U*V)*b,J[5]=(Q*m-Z*M+K*V)*b,J[6]=(I*P-F*C-O*w)*b,J[7]=(H*C-N*P+q*w)*b,J[8]=(W*D-X*M+U*_)*b,J[9]=($*M-Q*D-K*_)*b,J[10]=(F*A-R*P+O*E)*b,J[11]=(G*P-H*A-q*E)*b,J[12]=(X*V-W*l-Y*_)*b,J[13]=(Q*l-$*V+Z*_)*b,J[14]=(R*w-F*L-I*E)*b,J[15]=(H*L-G*w+N*E)*b,this}scale(J){let Q=this.elements,$=J.x,Z=J.y,K=J.z;return Q[0]*=$,Q[4]*=Z,Q[8]*=K,Q[1]*=$,Q[5]*=Z,Q[9]*=K,Q[2]*=$,Q[6]*=Z,Q[10]*=K,Q[3]*=$,Q[7]*=Z,Q[11]*=K,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Z=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,Z))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),K=1-$,W=J.x,X=J.y,Y=J.z,U=K*W,H=K*X;return this.set(U*W+$,U*X-Z*Y,U*Y+Z*X,0,U*X+Z*Y,H*X+$,H*Y-Z*W,0,U*Y-Z*X,H*Y+Z*W,K*Y*Y+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,Z,K,W){return this.set(1,$,K,0,J,1,W,0,Q,Z,1,0,0,0,0,1),this}compose(J,Q,$){let Z=this.elements,K=Q._x,W=Q._y,X=Q._z,Y=Q._w,U=K+K,H=W+W,G=X+X,N=K*U,q=K*H,F=K*G,R=W*H,I=W*G,O=X*G,E=Y*U,w=Y*H,P=Y*G,L=$.x,A=$.y,C=$.z;return Z[0]=(1-(R+O))*L,Z[1]=(q+P)*L,Z[2]=(F-w)*L,Z[3]=0,Z[4]=(q-P)*A,Z[5]=(1-(N+O))*A,Z[6]=(I+E)*A,Z[7]=0,Z[8]=(F+w)*C,Z[9]=(I-E)*C,Z[10]=(1-(N+R))*C,Z[11]=0,Z[12]=J.x,Z[13]=J.y,Z[14]=J.z,Z[15]=1,this}decompose(J,Q,$){let Z=this.elements;J.x=Z[12],J.y=Z[13],J.z=Z[14];let K=this.determinantAffine();if(K===0)return $.set(1,1,1),Q.identity(),this;let W=Q7.set(Z[0],Z[1],Z[2]).length(),X=Q7.set(Z[4],Z[5],Z[6]).length(),Y=Q7.set(Z[8],Z[9],Z[10]).length();if(K<0)W=-W;S9.copy(this);let U=1/W,H=1/X,G=1/Y;return S9.elements[0]*=U,S9.elements[1]*=U,S9.elements[2]*=U,S9.elements[4]*=H,S9.elements[5]*=H,S9.elements[6]*=H,S9.elements[8]*=G,S9.elements[9]*=G,S9.elements[10]*=G,Q.setFromRotationMatrix(S9),$.x=W,$.y=X,$.z=Y,this}makePerspective(J,Q,$,Z,K,W,X=2000,Y=!1){let U=this.elements,H=2*K/(Q-J),G=2*K/($-Z),N=(Q+J)/(Q-J),q=($+Z)/($-Z),F,R;if(Y)F=K/(W-K),R=W*K/(W-K);else if(X===2000)F=-(W+K)/(W-K),R=-2*W*K/(W-K);else if(X===2001)F=-W/(W-K),R=-W*K/(W-K);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+X);return U[0]=H,U[4]=0,U[8]=N,U[12]=0,U[1]=0,U[5]=G,U[9]=q,U[13]=0,U[2]=0,U[6]=0,U[10]=F,U[14]=R,U[3]=0,U[7]=0,U[11]=-1,U[15]=0,this}makeOrthographic(J,Q,$,Z,K,W,X=2000,Y=!1){let U=this.elements,H=2/(Q-J),G=2/($-Z),N=-(Q+J)/(Q-J),q=-($+Z)/($-Z),F,R;if(Y)F=1/(W-K),R=W/(W-K);else if(X===2000)F=-2/(W-K),R=-(W+K)/(W-K);else if(X===2001)F=-1/(W-K),R=-K/(W-K);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+X);return U[0]=H,U[4]=0,U[8]=0,U[12]=N,U[1]=0,U[5]=G,U[9]=0,U[13]=q,U[2]=0,U[6]=0,U[10]=F,U[14]=R,U[3]=0,U[7]=0,U[11]=0,U[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<16;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var Q7=new v,S9=new VJ,uY=new v(0,0,0),cY=new v(1,1,1),N8=new v,v6=new v,U9=new v,oK=new VJ,aK=new N9;class G9{constructor(J=0,Q=0,$=0,Z=G9.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=Z}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,Z=this._order){return this._x=J,this._y=Q,this._z=$,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let Z=J.elements,K=Z[0],W=Z[4],X=Z[8],Y=Z[1],U=Z[5],H=Z[9],G=Z[2],N=Z[6],q=Z[10];switch(Q){case"XYZ":if(this._y=Math.asin(WJ(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-H,q),this._z=Math.atan2(-W,K);else this._x=Math.atan2(N,U),this._z=0;break;case"YXZ":if(this._x=Math.asin(-WJ(H,-1,1)),Math.abs(H)<0.9999999)this._y=Math.atan2(X,q),this._z=Math.atan2(Y,U);else this._y=Math.atan2(-G,K),this._z=0;break;case"ZXY":if(this._x=Math.asin(WJ(N,-1,1)),Math.abs(N)<0.9999999)this._y=Math.atan2(-G,q),this._z=Math.atan2(-W,U);else this._y=0,this._z=Math.atan2(Y,K);break;case"ZYX":if(this._y=Math.asin(-WJ(G,-1,1)),Math.abs(G)<0.9999999)this._x=Math.atan2(N,q),this._z=Math.atan2(Y,K);else this._x=0,this._z=Math.atan2(-W,U);break;case"YZX":if(this._z=Math.asin(WJ(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-H,U),this._y=Math.atan2(-G,K);else this._x=0,this._y=Math.atan2(X,q);break;case"XZY":if(this._z=Math.asin(-WJ(W,-1,1)),Math.abs(W)<0.9999999)this._x=Math.atan2(N,U),this._y=Math.atan2(X,K);else this._x=Math.atan2(-H,q),this._y=0;break;default:l0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return oK.makeRotationFromQuaternion(J),this.setFromRotationMatrix(oK,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return aK.setFromEuler(this),this.setFromQuaternion(aK,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}G9.DEFAULT_ORDER="XYZ";class Y6{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var nY=0,rK=new v,$7=new N9,o9=new VJ,f6=new v,l7=new v,sY=new v,iY=new N9,tK=new v(1,0,0),eK=new v(0,1,0),JW=new v(0,0,1),QW={type:"added"},oY={type:"removed"},Z7={type:"childadded",child:null},G$={type:"childremoved",child:null};class TJ extends W8{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:nY++}),this.uuid=M7(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=TJ.DEFAULT_UP.clone();let J=new v,Q=new G9,$=new N9,Z=new v(1,1,1);function K(){$.setFromEuler(Q,!1)}function W(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(K),$._onChange(W),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new VJ},normalMatrix:{value:new o0}}),this.matrix=new VJ,this.matrixWorld=new VJ,this.matrixAutoUpdate=TJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=TJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Y6,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return $7.setFromAxisAngle(J,Q),this.quaternion.multiply($7),this}rotateOnWorldAxis(J,Q){return $7.setFromAxisAngle(J,Q),this.quaternion.premultiply($7),this}rotateX(J){return this.rotateOnAxis(tK,J)}rotateY(J){return this.rotateOnAxis(eK,J)}rotateZ(J){return this.rotateOnAxis(JW,J)}translateOnAxis(J,Q){return rK.copy(J).applyQuaternion(this.quaternion),this.position.add(rK.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(tK,J)}translateY(J){return this.translateOnAxis(eK,J)}translateZ(J){return this.translateOnAxis(JW,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(o9.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)f6.copy(J);else f6.set(J,Q,$);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),l7.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)o9.lookAt(l7,f6,this.up);else o9.lookAt(f6,l7,this.up);if(this.quaternion.setFromRotationMatrix(o9),Z)o9.extractRotation(Z.matrixWorld),$7.setFromRotationMatrix(o9),this.quaternion.premultiply($7.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return m0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(QW),Z7.child=J,this.dispatchEvent(Z7),Z7.child=null;else m0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(oY),G$.child=J,this.dispatchEvent(G$),G$.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),o9.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),o9.multiply(J.parent.matrixWorld);return J.applyMatrix4(o9),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(QW),Z7.child=J,this.dispatchEvent(Z7),Z7.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,Z=this.children.length;$<Z;$++){let W=this.children[$].getObjectByProperty(J,Q);if(W!==void 0)return W}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let Z=this.children;for(let K=0,W=Z.length;K<W;K++)Z[K].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(l7,J,sY),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(l7,iY,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}traverse(J){J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:$,z:Z}=J,K=this.matrix.elements;K[12]+=Q-K[0]*Q-K[4]*$-K[8]*Z,K[13]+=$-K[1]*Q-K[5]*$-K[9]*Z,K[14]+=Z-K[2]*Q-K[6]*$-K[10]*Z}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q,$=!1){let Z=this.parent;if(J===!0&&Z!==null)Z.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||$){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,$=!0}if(Q===!0){let K=this.children;for(let W=0,X=K.length;W<X;W++)K[W].updateWorldMatrix(!1,!0,$)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,this.name!=="")Z.name=this.name;if(this.castShadow===!0)Z.castShadow=!0;if(this.receiveShadow===!0)Z.receiveShadow=!0;if(this.visible===!1)Z.visible=!1;if(this.frustumCulled===!1)Z.frustumCulled=!1;if(this.renderOrder!==0)Z.renderOrder=this.renderOrder;if(this.static!==!1)Z.static=this.static;if(Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.pivot!==null)Z.pivot=this.pivot.toArray();if(this.matrixAutoUpdate===!1)Z.matrixAutoUpdate=!1;if(this.morphTargetDictionary!==void 0)Z.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)Z.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.geometryInfo=this._geometryInfo.map((X)=>({...X,boundingBox:X.boundingBox?X.boundingBox.toJSON():void 0,boundingSphere:X.boundingSphere?X.boundingSphere.toJSON():void 0})),Z.instanceInfo=this._instanceInfo.map((X)=>({...X})),Z.availableInstanceIds=this._availableInstanceIds.slice(),Z.availableGeometryIds=this._availableGeometryIds.slice(),Z.nextIndexStart=this._nextIndexStart,Z.nextVertexStart=this._nextVertexStart,Z.geometryCount=this._geometryCount,Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.matricesTexture=this._matricesTexture.toJSON(J),Z.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)Z.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)Z.boundingBox=this.boundingBox.toJSON()}function K(X,Y){if(X[Y.uuid]===void 0)X[Y.uuid]=Y.toJSON(J);return Y.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=K(J.geometries,this.geometry);let X=this.geometry.parameters;if(X!==void 0&&X.shapes!==void 0){let Y=X.shapes;if(Array.isArray(Y))for(let U=0,H=Y.length;U<H;U++){let G=Y[U];K(J.shapes,G)}else K(J.shapes,Y)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)K(J.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let X=[];for(let Y=0,U=this.material.length;Y<U;Y++)X.push(K(J.materials,this.material[Y]));Z.material=X}else Z.material=K(J.materials,this.material);if(this.children.length>0){Z.children=[];for(let X=0;X<this.children.length;X++)Z.children.push(this.children[X].toJSON(J).object)}if(this.animations.length>0){Z.animations=[];for(let X=0;X<this.animations.length;X++){let Y=this.animations[X];Z.animations.push(K(J.animations,Y))}}if(Q){let X=W(J.geometries),Y=W(J.materials),U=W(J.textures),H=W(J.images),G=W(J.shapes),N=W(J.skeletons),q=W(J.animations),F=W(J.nodes);if(X.length>0)$.geometries=X;if(Y.length>0)$.materials=Y;if(U.length>0)$.textures=U;if(H.length>0)$.images=H;if(G.length>0)$.shapes=G;if(N.length>0)$.skeletons=N;if(q.length>0)$.animations=q;if(F.length>0)$.nodes=F}return $.object=Z,$;function W(X){let Y=[];for(let U in X){let H=X[U];delete H.metadata,Y.push(H)}return Y}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let Z=J.children[$];this.add(Z.clone())}return this}}TJ.DEFAULT_UP=new v(0,1,0);TJ.DEFAULT_MATRIX_AUTO_UPDATE=!0;TJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class sJ extends TJ{constructor(){super();this.isGroup=!0,this.type="Group"}}var aY={type:"move"};class U6{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new sJ,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new sJ,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new v,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new v;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new sJ,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new v,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new v,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let Z=null,K=null,W=null,X=this._targetRay,Y=this._grip,U=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(U&&J.hand){W=!0;for(let R of J.hand.values()){let I=Q.getJointPose(R,$),O=this._getHandJoint(U,R);if(I!==null)O.matrix.fromArray(I.transform.matrix),O.matrix.decompose(O.position,O.rotation,O.scale),O.matrixWorldNeedsUpdate=!0,O.jointRadius=I.radius;O.visible=I!==null}let H=U.joints["index-finger-tip"],G=U.joints["thumb-tip"],N=H.position.distanceTo(G.position),q=0.02,F=0.005;if(U.inputState.pinching&&N>q+F)U.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!U.inputState.pinching&&N<=q-F)U.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(Y!==null&&J.gripSpace){if(K=Q.getPose(J.gripSpace,$),K!==null){if(Y.matrix.fromArray(K.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,K.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(K.linearVelocity);else Y.hasLinearVelocity=!1;if(K.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(K.angularVelocity);else Y.hasAngularVelocity=!1;if(Y.eventsEnabled)Y.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(X!==null){if(Z=Q.getPose(J.targetRaySpace,$),Z===null&&K!==null)Z=K;if(Z!==null){if(X.matrix.fromArray(Z.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.matrixWorldNeedsUpdate=!0,Z.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(Z.linearVelocity);else X.hasLinearVelocity=!1;if(Z.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(Z.angularVelocity);else X.hasAngularVelocity=!1;this.dispatchEvent(aY)}}}if(X!==null)X.visible=Z!==null;if(Y!==null)Y.visible=K!==null;if(U!==null)U.visible=W!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new sJ;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}var BX={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},F8={h:0,s:0,l:0},y6={h:0,s:0,l:0};function N$(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class KJ{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let Z=J;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,XJ.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,Z=XJ.workingColorSpace){return this.r=J,this.g=Q,this.b=$,XJ.colorSpaceToWorking(this,Z),this}setHSL(J,Q,$,Z=XJ.workingColorSpace){if(J=pY(J,1),Q=WJ(Q,0,1),$=WJ($,0,1),Q===0)this.r=this.g=this.b=$;else{let K=$<=0.5?$*(1+Q):$+Q-$*Q,W=2*$-K;this.r=N$(W,K,J+0.3333333333333333),this.g=N$(W,K,J),this.b=N$(W,K,J-0.3333333333333333)}return XJ.colorSpaceToWorking(this,Z),this}setStyle(J,Q="srgb"){function $(K){if(K===void 0)return;if(parseFloat(K)<1)l0("Color: Alpha component of "+J+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec(J)){let K,W=Z[1],X=Z[2];switch(W){case"rgb":case"rgba":if(K=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(K[4]),this.setRGB(Math.min(255,parseInt(K[1],10))/255,Math.min(255,parseInt(K[2],10))/255,Math.min(255,parseInt(K[3],10))/255,Q);if(K=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(K[4]),this.setRGB(Math.min(100,parseInt(K[1],10))/100,Math.min(100,parseInt(K[2],10))/100,Math.min(100,parseInt(K[3],10))/100,Q);break;case"hsl":case"hsla":if(K=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(K[4]),this.setHSL(parseFloat(K[1])/360,parseFloat(K[2])/100,parseFloat(K[3])/100,Q);break;default:l0("Color: Unknown color model "+J)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec(J)){let K=Z[1],W=K.length;if(W===3)return this.setRGB(parseInt(K.charAt(0),16)/15,parseInt(K.charAt(1),16)/15,parseInt(K.charAt(2),16)/15,Q);else if(W===6)return this.setHex(parseInt(K,16),Q);else l0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=BX[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else l0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=Q8(J.r),this.g=Q8(J.g),this.b=Q8(J.b),this}copyLinearToSRGB(J){return this.r=O7(J.r),this.g=O7(J.g),this.b=O7(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return XJ.workingToColorSpace(aJ.copy(this),J),Math.round(WJ(aJ.r*255,0,255))*65536+Math.round(WJ(aJ.g*255,0,255))*256+Math.round(WJ(aJ.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=XJ.workingColorSpace){XJ.workingToColorSpace(aJ.copy(this),Q);let{r:$,g:Z,b:K}=aJ,W=Math.max($,Z,K),X=Math.min($,Z,K),Y,U,H=(X+W)/2;if(X===W)Y=0,U=0;else{let G=W-X;switch(U=H<=0.5?G/(W+X):G/(2-W-X),W){case $:Y=(Z-K)/G+(Z<K?6:0);break;case Z:Y=(K-$)/G+2;break;case K:Y=($-Z)/G+4;break}Y/=6}return J.h=Y,J.s=U,J.l=H,J}getRGB(J,Q=XJ.workingColorSpace){return XJ.workingToColorSpace(aJ.copy(this),Q),J.r=aJ.r,J.g=aJ.g,J.b=aJ.b,J}getStyle(J="srgb"){XJ.workingToColorSpace(aJ.copy(this),J);let{r:Q,g:$,b:Z}=aJ;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(Z*255)})`}offsetHSL(J,Q,$){return this.getHSL(F8),this.setHSL(F8.h+J,F8.s+Q,F8.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(F8),J.getHSL(y6);let $=X$(F8.h,y6.h,Q),Z=X$(F8.s,y6.s,Q),K=X$(F8.l,y6.l,Q);return this.setHSL($,Z,K),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,Z=this.b,K=J.elements;return this.r=K[0]*Q+K[3]*$+K[6]*Z,this.g=K[1]*Q+K[4]*$+K[7]*Z,this.b=K[2]*Q+K[5]*$+K[8]*Z,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var aJ=new KJ;KJ.NAMES=BX;class I7 extends TJ{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new G9,this.environmentIntensity=1,this.environmentRotation=new G9,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)Q.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)Q.object.backgroundIntensity=this.backgroundIntensity;if(Q.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)Q.object.environmentIntensity=this.environmentIntensity;return Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var j9=new v,a9=new v,F$=new v,r9=new v,K7=new v,W7=new v,$W=new v,O$=new v,E$=new v,D$=new v,R$=new PJ,k$=new PJ,V$=new PJ;class L9{constructor(J=new v,Q=new v,$=new v){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,Z){Z.subVectors($,Q),j9.subVectors(J,Q),Z.cross(j9);let K=Z.lengthSq();if(K>0)return Z.multiplyScalar(1/Math.sqrt(K));return Z.set(0,0,0)}static getBarycoord(J,Q,$,Z,K){j9.subVectors(Z,Q),a9.subVectors($,Q),F$.subVectors(J,Q);let W=j9.dot(j9),X=j9.dot(a9),Y=j9.dot(F$),U=a9.dot(a9),H=a9.dot(F$),G=W*U-X*X;if(G===0)return K.set(0,0,0),null;let N=1/G,q=(U*Y-X*H)*N,F=(W*H-X*Y)*N;return K.set(1-q-F,F,q)}static containsPoint(J,Q,$,Z){if(this.getBarycoord(J,Q,$,Z,r9)===null)return!1;return r9.x>=0&&r9.y>=0&&r9.x+r9.y<=1}static getInterpolation(J,Q,$,Z,K,W,X,Y){if(this.getBarycoord(J,Q,$,Z,r9)===null){if(Y.x=0,Y.y=0,"z"in Y)Y.z=0;if("w"in Y)Y.w=0;return null}return Y.setScalar(0),Y.addScaledVector(K,r9.x),Y.addScaledVector(W,r9.y),Y.addScaledVector(X,r9.z),Y}static getInterpolatedAttribute(J,Q,$,Z,K,W){return R$.setScalar(0),k$.setScalar(0),V$.setScalar(0),R$.fromBufferAttribute(J,Q),k$.fromBufferAttribute(J,$),V$.fromBufferAttribute(J,Z),W.setScalar(0),W.addScaledVector(R$,K.x),W.addScaledVector(k$,K.y),W.addScaledVector(V$,K.z),W}static isFrontFacing(J,Q,$,Z){return j9.subVectors($,Q),a9.subVectors(J,Q),j9.cross(a9).dot(Z)<0}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,Z){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[Z]),this}setFromAttributeAndIndices(J,Q,$,Z){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,Z),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return j9.subVectors(this.c,this.b),a9.subVectors(this.a,this.b),j9.cross(a9).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return L9.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return L9.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,Z,K){return L9.getInterpolation(J,this.a,this.b,this.c,Q,$,Z,K)}containsPoint(J){return L9.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return L9.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,Z=this.b,K=this.c,W,X;K7.subVectors(Z,$),W7.subVectors(K,$),O$.subVectors(J,$);let Y=K7.dot(O$),U=W7.dot(O$);if(Y<=0&&U<=0)return Q.copy($);E$.subVectors(J,Z);let H=K7.dot(E$),G=W7.dot(E$);if(H>=0&&G<=H)return Q.copy(Z);let N=Y*G-H*U;if(N<=0&&Y>=0&&H<=0)return W=Y/(Y-H),Q.copy($).addScaledVector(K7,W);D$.subVectors(J,K);let q=K7.dot(D$),F=W7.dot(D$);if(F>=0&&q<=F)return Q.copy(K);let R=q*U-Y*F;if(R<=0&&U>=0&&F<=0)return X=U/(U-F),Q.copy($).addScaledVector(W7,X);let I=H*F-q*G;if(I<=0&&G-H>=0&&q-F>=0)return $W.subVectors(K,Z),X=(G-H)/(G-H+(q-F)),Q.copy(Z).addScaledVector($W,X);let O=1/(I+R+N);return W=R*O,X=N*O,Q.copy($).addScaledVector(K7,W).addScaledVector(W7,X)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class X8{constructor(J=new v(1/0,1/0,1/0),Q=new v(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(v9.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(v9.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=v9.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let K=$.getAttribute("position");if(Q===!0&&K!==void 0&&J.isInstancedMesh!==!0)for(let W=0,X=K.count;W<X;W++){if(J.isMesh===!0)J.getVertexPosition(W,v9);else v9.fromBufferAttribute(K,W);v9.applyMatrix4(J.matrixWorld),this.expandByPoint(v9)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();b6.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();b6.copy($.boundingBox)}b6.applyMatrix4(J.matrixWorld),this.union(b6)}}let Z=J.children;for(let K=0,W=Z.length;K<W;K++)this.expandByObject(Z[K],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,v9),v9.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(d7),h6.subVectors(this.max,d7),X7.subVectors(J.a,d7),Y7.subVectors(J.b,d7),U7.subVectors(J.c,d7),O8.subVectors(Y7,X7),E8.subVectors(U7,Y7),w8.subVectors(X7,U7);let Q=[0,-O8.z,O8.y,0,-E8.z,E8.y,0,-w8.z,w8.y,O8.z,0,-O8.x,E8.z,0,-E8.x,w8.z,0,-w8.x,-O8.y,O8.x,0,-E8.y,E8.x,0,-w8.y,w8.x,0];if(!L$(Q,X7,Y7,U7,h6))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!L$(Q,X7,Y7,U7,h6))return!1;return x6.crossVectors(O8,E8),Q=[x6.x,x6.y,x6.z],L$(Q,X7,Y7,U7,h6)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,v9).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(v9).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return t9[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),t9[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),t9[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),t9[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),t9[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),t9[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),t9[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),t9[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(t9),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var t9=[new v,new v,new v,new v,new v,new v,new v,new v],v9=new v,b6=new X8,X7=new v,Y7=new v,U7=new v,O8=new v,E8=new v,w8=new v,d7=new v,h6=new v,x6=new v,T8=new v;function L$(J,Q,$,Z,K){for(let W=0,X=J.length-3;W<=X;W+=3){T8.fromArray(J,W);let Y=K.x*Math.abs(T8.x)+K.y*Math.abs(T8.y)+K.z*Math.abs(T8.z),U=Q.dot(T8),H=$.dot(T8),G=Z.dot(T8);if(Math.max(-Math.max(U,H,G),Math.min(U,H,G))>Y)return!1}return!0}var vJ=new v,g6=new E0,rY=0;class q9 extends W8{constructor(J,Q,$=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rY++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let Z=0,K=this.itemSize;Z<K;Z++)this.array[J+Z]=Q.array[$+Z];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)g6.fromBufferAttribute(this,Q),g6.applyMatrix3(J),this.setXY(Q,g6.x,g6.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)vJ.fromBufferAttribute(this,Q),vJ.applyMatrix3(J),this.setXYZ(Q,vJ.x,vJ.y,vJ.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)vJ.fromBufferAttribute(this,Q),vJ.applyMatrix4(J),this.setXYZ(Q,vJ.x,vJ.y,vJ.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)vJ.fromBufferAttribute(this,Q),vJ.applyNormalMatrix(J),this.setXYZ(Q,vJ.x,vJ.y,vJ.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)vJ.fromBufferAttribute(this,Q),vJ.transformDirection(J),this.setXYZ(Q,vJ.x,vJ.y,vJ.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=m7($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=X9($,this.array);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=m7(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=X9(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=m7(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=X9(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=m7(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=X9(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=m7(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=X9(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=X9(Q,this.array),$=X9($,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J*=this.itemSize,this.normalized)Q=X9(Q,this.array),$=X9($,this.array),Z=X9(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this}setXYZW(J,Q,$,Z,K){if(J*=this.itemSize,this.normalized)Q=X9(Q,this.array),$=X9($,this.array),Z=X9(Z,this.array),K=X9(K,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this.array[J+3]=K,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")J.name=this.name;if(this.usage!==35044)J.usage=this.usage;return J}dispose(){this.dispatchEvent({type:"dispose"})}}class LQ extends q9{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class zQ extends q9{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class tJ extends q9{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var tY=new X8,u7=new v,z$=new v;class m8{constructor(J=new v,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else tY.setFromPoints(J).getCenter($);let Z=0;for(let K=0,W=J.length;K<W;K++)Z=Math.max(Z,$.distanceToSquared(J[K]));return this.radius=Math.sqrt(Z),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;u7.subVectors(J,this.center);let Q=u7.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),Z=($-this.radius)*0.5;this.center.addScaledVector(u7,Z/$),this.radius+=Z}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else z$.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(u7.copy(J.center).add(z$)),this.expandByPoint(u7.copy(J.center).sub(z$));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var eY=0,V9=new VJ,B$=new TJ,H7=new v,H9=new X8,c7=new X8,pJ=new v;class B9 extends W8{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eY++}),this.uuid=M7(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((xY(J))?zQ:LQ)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let K=new o0().getNormalMatrix(J);$.applyNormalMatrix(K),$.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection(J),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return V9.makeRotationFromQuaternion(J),this.applyMatrix4(V9),this}rotateX(J){return V9.makeRotationX(J),this.applyMatrix4(V9),this}rotateY(J){return V9.makeRotationY(J),this.applyMatrix4(V9),this}rotateZ(J){return V9.makeRotationZ(J),this.applyMatrix4(V9),this}translate(J,Q,$){return V9.makeTranslation(J,Q,$),this.applyMatrix4(V9),this}scale(J,Q,$){return V9.makeScale(J,Q,$),this.applyMatrix4(V9),this}lookAt(J){return B$.lookAt(J),B$.updateMatrix(),this.applyMatrix4(B$.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(H7).negate(),this.translate(H7.x,H7.y,H7.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let Z=0,K=J.length;Z<K;Z++){let W=J[Z];$.push(W.x,W.y,W.z||0)}this.setAttribute("position",new tJ($,3))}else{let $=Math.min(J.length,Q.count);for(let Z=0;Z<$;Z++){let K=J[Z];Q.setXYZ(Z,K.x,K.y,K.z||0)}if(J.length>Q.count)l0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new X8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){m0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new v(-1/0,-1/0,-1/0),new v(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,Z=Q.length;$<Z;$++){let K=Q[$];if(H9.setFromBufferAttribute(K),this.morphTargetsRelative)pJ.addVectors(this.boundingBox.min,H9.min),this.boundingBox.expandByPoint(pJ),pJ.addVectors(this.boundingBox.max,H9.max),this.boundingBox.expandByPoint(pJ);else this.boundingBox.expandByPoint(H9.min),this.boundingBox.expandByPoint(H9.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))m0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new m8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){m0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new v,1/0);return}if(J){let $=this.boundingSphere.center;if(H9.setFromBufferAttribute(J),Q)for(let K=0,W=Q.length;K<W;K++){let X=Q[K];if(c7.setFromBufferAttribute(X),this.morphTargetsRelative)pJ.addVectors(H9.min,c7.min),H9.expandByPoint(pJ),pJ.addVectors(H9.max,c7.max),H9.expandByPoint(pJ);else H9.expandByPoint(c7.min),H9.expandByPoint(c7.max)}H9.getCenter($);let Z=0;for(let K=0,W=J.count;K<W;K++)pJ.fromBufferAttribute(J,K),Z=Math.max(Z,$.distanceToSquared(pJ));if(Q)for(let K=0,W=Q.length;K<W;K++){let X=Q[K],Y=this.morphTargetsRelative;for(let U=0,H=X.count;U<H;U++){if(pJ.fromBufferAttribute(X,U),Y)H7.fromBufferAttribute(J,U),pJ.add(H7);Z=Math.max(Z,$.distanceToSquared(pJ))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))m0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){m0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:Z,uv:K}=Q,W=this.getAttribute("tangent");if(W===void 0||W.count!==$.count)W=new q9(new Float32Array(4*$.count),4),this.setAttribute("tangent",W);let X=[],Y=[];for(let _=0;_<$.count;_++)X[_]=new v,Y[_]=new v;let U=new v,H=new v,G=new v,N=new E0,q=new E0,F=new E0,R=new v,I=new v;function O(_,V,M){U.fromBufferAttribute($,_),H.fromBufferAttribute($,V),G.fromBufferAttribute($,M),N.fromBufferAttribute(K,_),q.fromBufferAttribute(K,V),F.fromBufferAttribute(K,M),H.sub(U),G.sub(U),q.sub(N),F.sub(N);let l=1/(q.x*F.y-F.x*q.y);if(!isFinite(l))return;R.copy(H).multiplyScalar(F.y).addScaledVector(G,-q.y).multiplyScalar(l),I.copy(G).multiplyScalar(q.x).addScaledVector(H,-F.x).multiplyScalar(l),X[_].add(R),X[V].add(R),X[M].add(R),Y[_].add(I),Y[V].add(I),Y[M].add(I)}let E=this.groups;if(E.length===0)E=[{start:0,count:J.count}];for(let _=0,V=E.length;_<V;++_){let M=E[_],l=M.start,D=M.count;for(let m=l,o=l+D;m<o;m+=3)O(J.getX(m+0),J.getX(m+1),J.getX(m+2))}let w=new v,P=new v,L=new v,A=new v;function C(_){L.fromBufferAttribute(Z,_),A.copy(L);let V=X[_];w.copy(V),w.sub(L.multiplyScalar(L.dot(V))).normalize(),P.crossVectors(A,V);let l=P.dot(Y[_])<0?-1:1;W.setXYZW(_,w.x,w.y,w.z,l)}for(let _=0,V=E.length;_<V;++_){let M=E[_],l=M.start,D=M.count;for(let m=l,o=l+D;m<o;m+=3)C(J.getX(m+0)),C(J.getX(m+1)),C(J.getX(m+2))}this._transformed=!0}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0||$.count!==Q.count)$=new q9(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let N=0,q=$.count;N<q;N++)$.setXYZ(N,0,0,0);let Z=new v,K=new v,W=new v,X=new v,Y=new v,U=new v,H=new v,G=new v;if(J)for(let N=0,q=J.count;N<q;N+=3){let F=J.getX(N+0),R=J.getX(N+1),I=J.getX(N+2);Z.fromBufferAttribute(Q,F),K.fromBufferAttribute(Q,R),W.fromBufferAttribute(Q,I),H.subVectors(W,K),G.subVectors(Z,K),H.cross(G),X.fromBufferAttribute($,F),Y.fromBufferAttribute($,R),U.fromBufferAttribute($,I),X.add(H),Y.add(H),U.add(H),$.setXYZ(F,X.x,X.y,X.z),$.setXYZ(R,Y.x,Y.y,Y.z),$.setXYZ(I,U.x,U.y,U.z)}else for(let N=0,q=Q.count;N<q;N+=3)Z.fromBufferAttribute(Q,N+0),K.fromBufferAttribute(Q,N+1),W.fromBufferAttribute(Q,N+2),H.subVectors(W,K),G.subVectors(Z,K),H.cross(G),$.setXYZ(N+0,H.x,H.y,H.z),$.setXYZ(N+1,H.x,H.y,H.z),$.setXYZ(N+2,H.x,H.y,H.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)pJ.fromBufferAttribute(J,Q),pJ.normalize(),J.setXYZ(Q,pJ.x,pJ.y,pJ.z)}toNonIndexed(){function J(X,Y){let{array:U,itemSize:H,normalized:G}=X,N=new U.constructor(Y.length*H),q=0,F=0;for(let R=0,I=Y.length;R<I;R++){if(X.isInterleavedBufferAttribute)q=Y[R]*X.data.stride+X.offset;else q=Y[R]*H;for(let O=0;O<H;O++)N[F++]=U[q++]}return new q9(N,H,G)}if(this.index===null)return l0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new B9,$=this.index.array,Z=this.attributes;for(let X in Z){let Y=Z[X],U=J(Y,$);Q.setAttribute(X,U)}let K=this.morphAttributes;for(let X in K){let Y=[],U=K[X];for(let H=0,G=U.length;H<G;H++){let N=U[H],q=J(N,$);Y.push(q)}Q.morphAttributes[X]=Y}Q.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;for(let X=0,Y=W.length;X<Y;X++){let U=W[X];Q.addGroup(U.start,U.count,U.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!=="")J.name=this.name;if(Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let Y=this.parameters;for(let U in Y)if(Y[U]!==void 0)J[U]=Y[U];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let Y in $){let U=$[Y];J.data.attributes[Y]=U.toJSON(J.data)}let Z={},K=!1;for(let Y in this.morphAttributes){let U=this.morphAttributes[Y],H=[];for(let G=0,N=U.length;G<N;G++){let q=U[G];H.push(q.toJSON(J.data))}if(H.length>0)Z[Y]=H,K=!0}if(K)J.data.morphAttributes=Z,J.data.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;if(W.length>0)J.data.groups=JSON.parse(JSON.stringify(W));let X=this.boundingSphere;if(X!==null)J.data.boundingSphere=X.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let Z=J.attributes;for(let U in Z){let H=Z[U];this.setAttribute(U,H.clone(Q))}let K=J.morphAttributes;for(let U in K){let H=[],G=K[U];for(let N=0,q=G.length;N<q;N++)H.push(G[N].clone(Q));this.morphAttributes[U]=H}this.morphTargetsRelative=J.morphTargetsRelative;let W=J.groups;for(let U=0,H=W.length;U<H;U++){let G=W[U];this.addGroup(G.start,G.count,G.materialIndex)}let X=J.boundingBox;if(X!==null)this.boundingBox=X.clone();let Y=J.boundingSphere;if(Y!==null)this.boundingSphere=Y.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}var JU=0;class L8 extends W8{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:JU++}),this.uuid=M7(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new KJ(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){l0(`Material: parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){l0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set($);else if(Z&&Z.isVector2&&($&&$.isVector2)||Z&&Z.isEuler&&($&&$.isEuler)||Z&&Z.isVector3&&($&&$.isVector3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,this.name!=="")$.name=this.name;if(this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)$.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)$.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)$.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.shadowSide!==null)$.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)$.blending=this.blending;if(this.side!==0)$.side=this.side;if(this.vertexColors===!0)$.vertexColors=!0;if(this.opacity<1)$.opacity=this.opacity;if(this.transparent===!0)$.transparent=!0;if(this.blendSrc!==204)$.blendSrc=this.blendSrc;if(this.blendDst!==205)$.blendDst=this.blendDst;if(this.blendEquation!==100)$.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)$.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)$.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)$.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)$.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)$.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)$.depthFunc=this.depthFunc;if(this.depthTest===!1)$.depthTest=this.depthTest;if(this.depthWrite===!1)$.depthWrite=this.depthWrite;if(this.colorWrite===!1)$.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)$.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)$.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)$.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)$.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)$.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)$.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)$.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)$.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)$.rotation=this.rotation;if(this.polygonOffset===!0)$.polygonOffset=!0;if(this.polygonOffsetFactor!==0)$.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)$.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)$.linewidth=this.linewidth;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.dithering===!0)$.dithering=!0;if(this.alphaTest>0)$.alphaTest=this.alphaTest;if(this.alphaHash===!0)$.alphaHash=!0;if(this.alphaToCoverage===!0)$.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)$.premultipliedAlpha=!0;if(this.forceSinglePass===!0)$.forceSinglePass=!0;if(this.allowOverride===!1)$.allowOverride=!1;if(this.wireframe===!0)$.wireframe=!0;if(this.wireframeLinewidth>1)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)$.flatShading=!0;if(this.visible===!1)$.visible=!1;if(this.toneMapped===!1)$.toneMapped=!1;if(this.fog===!1)$.fog=!1;if(Object.keys(this.userData).length>0)$.userData=this.userData;function Z(K){let W=[];for(let X in K){let Y=K[X];delete Y.metadata,W.push(Y)}return W}if(Q){let K=Z(J.textures),W=Z(J.images);if(K.length>0)$.textures=K;if(W.length>0)$.images=W}return $}fromJSON(J,Q){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new KJ().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=J.iridescenceThicknessRange;if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=Q[J.map]||null;if(J.matcap!==void 0)this.matcap=Q[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=Q[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=Q[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=Q[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let $=J.normalScale;if(Array.isArray($)===!1)$=[$,$];this.normalScale=new E0().fromArray($)}if(J.displacementMap!==void 0)this.displacementMap=Q[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=Q[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=Q[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=Q[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=Q[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=Q[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=Q[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=Q[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=Q[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=Q[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=Q[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=Q[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=Q[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=Q[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new E0().fromArray(J.clearcoatNormalScale);if(J.iridescenceMap!==void 0)this.iridescenceMap=Q[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=Q[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=Q[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=Q[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=Q[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=Q[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=Q[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let Z=Q.length;$=Array(Z);for(let K=0;K!==Z;++K)$[K]=Q[K].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}var e9=new v,M$=new v,p6=new v,D8=new v,I$=new v,m6=new v,A$=new v;class BQ{constructor(J=new v,Q=new v(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,e9)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=e9.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return e9.copy(this.origin).addScaledVector(this.direction,Q),e9.distanceToSquared(J)}distanceSqToSegment(J,Q,$,Z){M$.copy(J).add(Q).multiplyScalar(0.5),p6.copy(Q).sub(J).normalize(),D8.copy(this.origin).sub(M$);let K=J.distanceTo(Q)*0.5,W=-this.direction.dot(p6),X=D8.dot(this.direction),Y=-D8.dot(p6),U=D8.lengthSq(),H=Math.abs(1-W*W),G,N,q,F;if(H>0)if(G=W*Y-X,N=W*X-Y,F=K*H,G>=0)if(N>=-F)if(N<=F){let R=1/H;G*=R,N*=R,q=G*(G+W*N+2*X)+N*(W*G+N+2*Y)+U}else N=K,G=Math.max(0,-(W*N+X)),q=-G*G+N*(N+2*Y)+U;else N=-K,G=Math.max(0,-(W*N+X)),q=-G*G+N*(N+2*Y)+U;else if(N<=-F)G=Math.max(0,-(-W*K+X)),N=G>0?-K:Math.min(Math.max(-K,-Y),K),q=-G*G+N*(N+2*Y)+U;else if(N<=F)G=0,N=Math.min(Math.max(-K,-Y),K),q=N*(N+2*Y)+U;else G=Math.max(0,-(W*K+X)),N=G>0?K:Math.min(Math.max(-K,-Y),K),q=-G*G+N*(N+2*Y)+U;else N=W>0?-K:K,G=Math.max(0,-(W*N+X)),q=-G*G+N*(N+2*Y)+U;if($)$.copy(this.origin).addScaledVector(this.direction,G);if(Z)Z.copy(M$).addScaledVector(p6,N);return q}intersectSphere(J,Q){e9.subVectors(J.center,this.origin);let $=e9.dot(this.direction),Z=e9.dot(e9)-$*$,K=J.radius*J.radius;if(Z>K)return null;let W=Math.sqrt(K-Z),X=$-W,Y=$+W;if(Y<0)return null;if(X<0)return this.at(Y,Q);return this.at(X,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,Z,K,W,X,Y,U=1/this.direction.x,H=1/this.direction.y,G=1/this.direction.z,N=this.origin;if(U>=0)$=(J.min.x-N.x)*U,Z=(J.max.x-N.x)*U;else $=(J.max.x-N.x)*U,Z=(J.min.x-N.x)*U;if(H>=0)K=(J.min.y-N.y)*H,W=(J.max.y-N.y)*H;else K=(J.max.y-N.y)*H,W=(J.min.y-N.y)*H;if($>W||K>Z)return null;if(K>$||isNaN($))$=K;if(W<Z||isNaN(Z))Z=W;if(G>=0)X=(J.min.z-N.z)*G,Y=(J.max.z-N.z)*G;else X=(J.max.z-N.z)*G,Y=(J.min.z-N.z)*G;if($>Y||X>Z)return null;if(X>$||$!==$)$=X;if(Y<Z||Z!==Z)Z=Y;if(Z<0)return null;return this.at($>=0?$:Z,Q)}intersectsBox(J){return this.intersectBox(J,e9)!==null}intersectTriangle(J,Q,$,Z,K){I$.subVectors(Q,J),m6.subVectors($,J),A$.crossVectors(I$,m6);let W=this.direction.dot(A$),X;if(W>0){if(Z)return null;X=1}else if(W<0)X=-1,W=-W;else return null;D8.subVectors(this.origin,J);let Y=X*this.direction.dot(m6.crossVectors(D8,m6));if(Y<0)return null;let U=X*this.direction.dot(I$.cross(D8));if(U<0)return null;if(Y+U>W)return null;let H=-X*D8.dot(A$);if(H<0)return null;return this.at(H/W,K)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lJ extends L8{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new KJ(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new G9,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var ZW=new VJ,S8=new BQ,l6=new m8,KW=new v,d6=new v,u6=new v,c6=new v,P$=new v,n6=new v,WW=new v,s6=new v;class h0 extends TJ{constructor(J=new B9,Q=new lJ){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let K=0,W=Z.length;K<W;K++){let X=Z[K].name||String(K);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=K}}}}getVertexPosition(J,Q){let $=this.geometry,Z=$.attributes.position,K=$.morphAttributes.position,W=$.morphTargetsRelative;Q.fromBufferAttribute(Z,J);let X=this.morphTargetInfluences;if(K&&X){n6.set(0,0,0);for(let Y=0,U=K.length;Y<U;Y++){let H=X[Y],G=K[Y];if(H===0)continue;if(P$.fromBufferAttribute(G,J),W)n6.addScaledVector(P$,H);else n6.addScaledVector(P$.sub(Q),H)}Q.add(n6)}return Q}raycast(J,Q){let $=this.geometry,Z=this.material,K=this.matrixWorld;if(Z===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(l6.copy($.boundingSphere),l6.applyMatrix4(K),S8.copy(J.ray).recast(J.near),l6.containsPoint(S8.origin)===!1){if(S8.intersectSphere(l6,KW)===null)return;if(S8.origin.distanceToSquared(KW)>(J.far-J.near)**2)return}if(ZW.copy(K).invert(),S8.copy(J.ray).applyMatrix4(ZW),$.boundingBox!==null){if(S8.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,S8)}_computeIntersections(J,Q,$){let Z,K=this.geometry,W=this.material,X=K.index,Y=K.attributes.position,U=K.attributes.uv,H=K.attributes.uv1,G=K.attributes.normal,N=K.groups,q=K.drawRange;if(X!==null)if(Array.isArray(W))for(let F=0,R=N.length;F<R;F++){let I=N[F],O=W[I.materialIndex],E=Math.max(I.start,q.start),w=Math.min(X.count,Math.min(I.start+I.count,q.start+q.count));for(let P=E,L=w;P<L;P+=3){let A=X.getX(P),C=X.getX(P+1),_=X.getX(P+2);if(Z=i6(this,O,J,$,U,H,G,A,C,_),Z)Z.faceIndex=Math.floor(P/3),Z.face.materialIndex=I.materialIndex,Q.push(Z)}}else{let F=Math.max(0,q.start),R=Math.min(X.count,q.start+q.count);for(let I=F,O=R;I<O;I+=3){let E=X.getX(I),w=X.getX(I+1),P=X.getX(I+2);if(Z=i6(this,W,J,$,U,H,G,E,w,P),Z)Z.faceIndex=Math.floor(I/3),Q.push(Z)}}else if(Y!==void 0)if(Array.isArray(W))for(let F=0,R=N.length;F<R;F++){let I=N[F],O=W[I.materialIndex],E=Math.max(I.start,q.start),w=Math.min(Y.count,Math.min(I.start+I.count,q.start+q.count));for(let P=E,L=w;P<L;P+=3){let A=P,C=P+1,_=P+2;if(Z=i6(this,O,J,$,U,H,G,A,C,_),Z)Z.faceIndex=Math.floor(P/3),Z.face.materialIndex=I.materialIndex,Q.push(Z)}}else{let F=Math.max(0,q.start),R=Math.min(Y.count,q.start+q.count);for(let I=F,O=R;I<O;I+=3){let E=I,w=I+1,P=I+2;if(Z=i6(this,W,J,$,U,H,G,E,w,P),Z)Z.faceIndex=Math.floor(I/3),Q.push(Z)}}}}function QU(J,Q,$,Z,K,W,X,Y){let U;if(Q.side===1)U=Z.intersectTriangle(X,W,K,!0,Y);else U=Z.intersectTriangle(K,W,X,Q.side===0,Y);if(U===null)return null;s6.copy(Y),s6.applyMatrix4(J.matrixWorld);let H=$.ray.origin.distanceTo(s6);if(H<$.near||H>$.far)return null;return{distance:H,point:s6.clone(),object:J}}function i6(J,Q,$,Z,K,W,X,Y,U,H){J.getVertexPosition(Y,d6),J.getVertexPosition(U,u6),J.getVertexPosition(H,c6);let G=QU(J,Q,$,Z,d6,u6,c6,WW);if(G){let N=new v;if(L9.getBarycoord(WW,d6,u6,c6,N),K)G.uv=L9.getInterpolatedAttribute(K,Y,U,H,N,new E0);if(W)G.uv1=L9.getInterpolatedAttribute(W,Y,U,H,N,new E0);if(X){if(G.normal=L9.getInterpolatedAttribute(X,Y,U,H,N,new v),G.normal.dot(Z.direction)>0)G.normal.multiplyScalar(-1)}let q={a:Y,b:U,c:H,normal:new v,materialIndex:0};L9.getNormal(d6,u6,c6,q.normal),G.face=q,G.barycoord=N}return G}class MQ extends mJ{constructor(J=null,Q=1,$=1,Z,K,W,X,Y,U=1003,H=1003,G,N){super(null,W,X,Y,U,H,Z,K,G,N);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class KQ extends q9{constructor(J,Q,$,Z=1){super(J,Q,$);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=Z}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var q7=new VJ,XW=new VJ,o6=[],YW=new X8,$U=new VJ,n7=new h0,s7=new m8;class A7 extends h0{constructor(J,Q,$){super(J,Q);this.isInstancedMesh=!0,this.instanceMatrix=new KQ(new Float32Array($*16),16),this.instanceColor=null,this.morphTexture=null,this.count=$,this.boundingBox=null,this.boundingSphere=null;for(let Z=0;Z<$;Z++)this.setMatrixAt(Z,$U)}computeBoundingBox(){let J=this.geometry,Q=this.count;if(this.boundingBox===null)this.boundingBox=new X8;if(J.boundingBox===null)J.computeBoundingBox();this.boundingBox.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,q7),YW.copy(J.boundingBox).applyMatrix4(q7),this.boundingBox.union(YW)}computeBoundingSphere(){let J=this.geometry,Q=this.count;if(this.boundingSphere===null)this.boundingSphere=new m8;if(J.boundingSphere===null)J.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,q7),s7.copy(J.boundingSphere).applyMatrix4(q7),this.boundingSphere.union(s7)}copy(J,Q){if(super.copy(J,Q),this.instanceMatrix.copy(J.instanceMatrix),J.morphTexture!==null)this.morphTexture=J.morphTexture.clone();if(J.instanceColor!==null)this.instanceColor=J.instanceColor.clone();if(this.count=J.count,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}getColorAt(J,Q){if(this.instanceColor===null)return Q.setRGB(1,1,1);else return Q.fromArray(this.instanceColor.array,J*3)}getMatrixAt(J,Q){return Q.fromArray(this.instanceMatrix.array,J*16)}getMorphAt(J,Q){let $=Q.morphTargetInfluences,Z=this.morphTexture.source.data.data,K=$.length+1,W=J*K+1;for(let X=0;X<$.length;X++)$[X]=Z[W+X]}raycast(J,Q){let $=this.matrixWorld,Z=this.count;if(n7.geometry=this.geometry,n7.material=this.material,n7.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(s7.copy(this.boundingSphere),s7.applyMatrix4($),J.ray.intersectsSphere(s7)===!1)return;for(let K=0;K<Z;K++){this.getMatrixAt(K,q7),XW.multiplyMatrices($,q7),n7.matrixWorld=XW,n7.raycast(J,o6);for(let W=0,X=o6.length;W<X;W++){let Y=o6[W];Y.instanceId=K,Y.object=this,Q.push(Y)}o6.length=0}}setColorAt(J,Q){if(this.instanceColor===null)this.instanceColor=new KQ(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return Q.toArray(this.instanceColor.array,J*3),this}setMatrixAt(J,Q){return Q.toArray(this.instanceMatrix.array,J*16),this}setMorphAt(J,Q){let $=Q.morphTargetInfluences,Z=$.length+1;if(this.morphTexture===null)this.morphTexture=new MQ(new Float32Array(Z*this.count),Z,this.count,1028,1015);let K=this.morphTexture.source.data.data,W=0;for(let U=0;U<$.length;U++)W+=$[U];let X=this.geometry.morphTargetsRelative?1:1-W,Y=Z*J;return K[Y]=X,K.set($,Y+1),this}updateMorphTargets(){}dispose(){if(this.dispatchEvent({type:"dispose"}),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var C$=new v,ZU=new v,KU=new o0;class J8{constructor(J=new v(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,Z){return this.normal.set(J,Q,$),this.constant=Z,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let Z=C$.subVectors($,Q).cross(ZU.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(Z,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,$=!0){let Z=J.delta(C$),K=this.normal.dot(Z);if(K===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let W=-(J.start.dot(this.normal)+this.constant)/K;if($===!0&&(W<0||W>1))return null;return Q.copy(J.start).addScaledVector(Z,W)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||KU.getNormalMatrix(J),Z=this.coplanarPoint(C$).applyMatrix4(J),K=this.normal.applyMatrix3($).normalize();return this.constant=-Z.dot(K),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}}var j8=new m8,WU=new E0(0.5,0.5),a6=new v;class H6{constructor(J=new J8,Q=new J8,$=new J8,Z=new J8,K=new J8,W=new J8){this.planes=[J,Q,$,Z,K,W]}set(J,Q,$,Z,K,W){let X=this.planes;return X[0].copy(J),X[1].copy(Q),X[2].copy($),X[3].copy(Z),X[4].copy(K),X[5].copy(W),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let Z=this.planes,K=J.elements,W=K[0],X=K[1],Y=K[2],U=K[3],H=K[4],G=K[5],N=K[6],q=K[7],F=K[8],R=K[9],I=K[10],O=K[11],E=K[12],w=K[13],P=K[14],L=K[15];if(Z[0].setComponents(U-W,q-H,O-F,L-E).normalize(),Z[1].setComponents(U+W,q+H,O+F,L+E).normalize(),Z[2].setComponents(U+X,q+G,O+R,L+w).normalize(),Z[3].setComponents(U-X,q-G,O-R,L-w).normalize(),$)Z[4].setComponents(Y,N,I,P).normalize(),Z[5].setComponents(U-Y,q-N,O-I,L-P).normalize();else if(Z[4].setComponents(U-Y,q-N,O-I,L-P).normalize(),Q===2000)Z[5].setComponents(U+Y,q+N,O+I,L+P).normalize();else if(Q===2001)Z[5].setComponents(Y,N,I,P).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();j8.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();j8.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(j8)}intersectsSprite(J){j8.center.set(0,0,0);let Q=WU.distanceTo(J.center);return j8.radius=0.7071067811865476+Q,j8.applyMatrix4(J.matrixWorld),this.intersectsSphere(j8)}intersectsSphere(J){let Q=this.planes,$=J.center,Z=-J.radius;for(let K=0;K<6;K++)if(Q[K].distanceToPoint($)<Z)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let Z=Q[$];if(a6.x=Z.normal.x>0?J.max.x:J.min.x,a6.y=Z.normal.y>0?J.max.y:J.min.y,a6.z=Z.normal.z>0?J.max.z:J.min.z,Z.distanceToPoint(a6)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class IQ extends mJ{constructor(J=[],Q=301,$,Z,K,W,X,Y,U,H){super(J,Q,$,Z,K,W,X,Y,U,H);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class u9 extends mJ{constructor(J,Q,$,Z,K,W,X,Y,U){super(J,Q,$,Z,K,W,X,Y,U);this.isCanvasTexture=!0,this.needsUpdate=!0}}class z8 extends mJ{constructor(J,Q,$=1014,Z,K,W,X=1003,Y=1003,U,H=1026,G=1){if(H!==1026&&H!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let N={width:J,height:Q,depth:G};super(N,Z,K,W,X,Y,H,$,U);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new X6(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);if(this.compareFunction!==null)Q.compareFunction=this.compareFunction;return Q}}class xZ extends z8{constructor(J,Q=1014,$=301,Z,K,W=1003,X=1003,Y,U=1026){let H={width:J,height:J,depth:1},G=[H,H,H,H,H,H];super(J,J,Q,$,Z,K,W,X,Y,U);this.image=G,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class AQ extends mJ{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class CJ extends B9{constructor(J=1,Q=1,$=1,Z=1,K=1,W=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:Z,heightSegments:K,depthSegments:W};let X=this;Z=Math.floor(Z),K=Math.floor(K),W=Math.floor(W);let Y=[],U=[],H=[],G=[],N=0,q=0;F("z","y","x",-1,-1,$,Q,J,W,K,0),F("z","y","x",1,-1,$,Q,-J,W,K,1),F("x","z","y",1,1,J,$,Q,Z,W,2),F("x","z","y",1,-1,J,$,-Q,Z,W,3),F("x","y","z",1,-1,J,Q,$,Z,K,4),F("x","y","z",-1,-1,J,Q,-$,Z,K,5),this.setIndex(Y),this.setAttribute("position",new tJ(U,3)),this.setAttribute("normal",new tJ(H,3)),this.setAttribute("uv",new tJ(G,2));function F(R,I,O,E,w,P,L,A,C,_,V){let M=P/C,l=L/_,D=P/2,m=L/2,o=A/2,b=C+1,c=_+1,s=0,x=0,J0=new v;for(let W0=0;W0<c;W0++){let H0=W0*l-m;for(let C0=0;C0<b;C0++){let D0=C0*M-D;J0[R]=D0*E,J0[I]=H0*w,J0[O]=o,U.push(J0.x,J0.y,J0.z),J0[R]=0,J0[I]=0,J0[O]=A>0?1:-1,H.push(J0.x,J0.y,J0.z),G.push(C0/C),G.push(1-W0/_),s+=1}}for(let W0=0;W0<_;W0++)for(let H0=0;H0<C;H0++){let C0=N+H0+b*W0,D0=N+H0+b*(W0+1),HJ=N+(H0+1)+b*(W0+1),UJ=N+(H0+1)+b*W0;Y.push(C0,D0,UJ),Y.push(D0,HJ,UJ),x+=6}X.addGroup(q,x,V),q+=x,N+=s}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new CJ(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class h9 extends B9{constructor(J=1,Q=1,$=1,Z=32,K=1,W=!1,X=0,Y=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:Q,height:$,radialSegments:Z,heightSegments:K,openEnded:W,thetaStart:X,thetaLength:Y};let U=this;Z=Math.floor(Z),K=Math.floor(K);let H=[],G=[],N=[],q=[],F=0,R=[],I=$/2,O=0;if(E(),W===!1){if(J>0)w(!0);if(Q>0)w(!1)}this.setIndex(H),this.setAttribute("position",new tJ(G,3)),this.setAttribute("normal",new tJ(N,3)),this.setAttribute("uv",new tJ(q,2));function E(){let P=new v,L=new v,A=0,C=(Q-J)/$;for(let _=0;_<=K;_++){let V=[],M=_/K,l=M*(Q-J)+J;for(let D=0;D<=Z;D++){let m=D/Z,o=m*Y+X,b=Math.sin(o),c=Math.cos(o);L.x=l*b,L.y=-M*$+I,L.z=l*c,G.push(L.x,L.y,L.z),P.set(b,C,c).normalize(),N.push(P.x,P.y,P.z),q.push(m,1-M),V.push(F++)}R.push(V)}for(let _=0;_<Z;_++)for(let V=0;V<K;V++){let M=R[V][_],l=R[V+1][_],D=R[V+1][_+1],m=R[V][_+1];if(J>0||V!==0)H.push(M,l,m),A+=3;if(Q>0||V!==K-1)H.push(l,D,m),A+=3}U.addGroup(O,A,0),O+=A}function w(P){let L=F,A=new E0,C=new v,_=0,V=P===!0?J:Q,M=P===!0?1:-1;for(let D=1;D<=Z;D++)G.push(0,I*M,0),N.push(0,M,0),q.push(0.5,0.5),F++;let l=F;for(let D=0;D<=Z;D++){let o=D/Z*Y+X,b=Math.cos(o),c=Math.sin(o);C.x=V*c,C.y=I*M,C.z=V*b,G.push(C.x,C.y,C.z),N.push(0,M,0),A.x=b*0.5+0.5,A.y=c*0.5*M+0.5,q.push(A.x,A.y),F++}for(let D=0;D<Z;D++){let m=L+D,o=l+D;if(P===!0)H.push(o,o+1,m);else H.push(o+1,o,m);_+=3}U.addGroup(O,_,P===!0?1:2),O+=_}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new h9(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class M9{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){l0("Curve: .getPoint() not implemented.")}getPointAt(J,Q){let $=this.getUtoTmapping(J);return this.getPoint($,Q)}getPoints(J=5){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPoint($/J));return Q}getSpacedPoints(J=5){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPointAt($/J));return Q}getLength(){let J=this.getLengths();return J[J.length-1]}getLengths(J=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===J+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let Q=[],$,Z=this.getPoint(0),K=0;Q.push(0);for(let W=1;W<=J;W++)$=this.getPoint(W/J),K+=$.distanceTo(Z),Q.push(K),Z=$;return this.cacheArcLengths=Q,Q}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(J,Q=null){let $=this.getLengths(),Z=0,K=$.length,W;if(Q)W=Q;else W=J*$[K-1];let X=0,Y=K-1,U;while(X<=Y)if(Z=Math.floor(X+(Y-X)/2),U=$[Z]-W,U<0)X=Z+1;else if(U>0)Y=Z-1;else{Y=Z;break}if(Z=Y,$[Z]===W)return Z/(K-1);let H=$[Z],N=$[Z+1]-H,q=(W-H)/N;return(Z+q)/(K-1)}getTangent(J,Q){let Z=J-0.0001,K=J+0.0001;if(Z<0)Z=0;if(K>1)K=1;let W=this.getPoint(Z),X=this.getPoint(K),Y=Q||(W.isVector2?new E0:new v);return Y.copy(X).sub(W).normalize(),Y}getTangentAt(J,Q){let $=this.getUtoTmapping(J);return this.getTangent($,Q)}computeFrenetFrames(J,Q=!1){let $=new v,Z=[],K=[],W=[],X=new v,Y=new VJ;for(let q=0;q<=J;q++){let F=q/J;Z[q]=this.getTangentAt(F,new v)}K[0]=new v,W[0]=new v;let U=Number.MAX_VALUE,H=Math.abs(Z[0].x),G=Math.abs(Z[0].y),N=Math.abs(Z[0].z);if(H<=U)U=H,$.set(1,0,0);if(G<=U)U=G,$.set(0,1,0);if(N<=U)$.set(0,0,1);X.crossVectors(Z[0],$).normalize(),K[0].crossVectors(Z[0],X),W[0].crossVectors(Z[0],K[0]);for(let q=1;q<=J;q++){if(K[q]=K[q-1].clone(),W[q]=W[q-1].clone(),X.crossVectors(Z[q-1],Z[q]),X.length()>Number.EPSILON){X.normalize();let F=Math.acos(WJ(Z[q-1].dot(Z[q]),-1,1));K[q].applyMatrix4(Y.makeRotationAxis(X,F))}W[q].crossVectors(Z[q],K[q])}if(Q===!0){let q=Math.acos(WJ(K[0].dot(K[J]),-1,1));if(q/=J,Z[0].dot(X.crossVectors(K[0],K[J]))>0)q=-q;for(let F=1;F<=J;F++)K[F].applyMatrix4(Y.makeRotationAxis(Z[F],q*F)),W[F].crossVectors(Z[F],K[F])}return{tangents:Z,normals:K,binormals:W}}clone(){return new this.constructor().copy(this)}copy(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}toJSON(){let J={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return J.arcLengthDivisions=this.arcLengthDivisions,J.type=this.type,J}fromJSON(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}}class q6 extends M9{constructor(J=0,Q=0,$=1,Z=1,K=0,W=Math.PI*2,X=!1,Y=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=J,this.aY=Q,this.xRadius=$,this.yRadius=Z,this.aStartAngle=K,this.aEndAngle=W,this.aClockwise=X,this.aRotation=Y}getPoint(J,Q=new E0){let $=Q,Z=Math.PI*2,K=this.aEndAngle-this.aStartAngle,W=Math.abs(K)<Number.EPSILON;while(K<0)K+=Z;while(K>Z)K-=Z;if(K<Number.EPSILON)if(W)K=0;else K=Z;if(this.aClockwise===!0&&!W)if(K===Z)K=-Z;else K=K-Z;let X=this.aStartAngle+J*K,Y=this.aX+this.xRadius*Math.cos(X),U=this.aY+this.yRadius*Math.sin(X);if(this.aRotation!==0){let H=Math.cos(this.aRotation),G=Math.sin(this.aRotation),N=Y-this.aX,q=U-this.aY;Y=N*H-q*G+this.aX,U=N*G+q*H+this.aY}return $.set(Y,U)}copy(J){return super.copy(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}toJSON(){let J=super.toJSON();return J.aX=this.aX,J.aY=this.aY,J.xRadius=this.xRadius,J.yRadius=this.yRadius,J.aStartAngle=this.aStartAngle,J.aEndAngle=this.aEndAngle,J.aClockwise=this.aClockwise,J.aRotation=this.aRotation,J}fromJSON(J){return super.fromJSON(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}}class gZ extends q6{constructor(J,Q,$,Z,K,W){super(J,Q,$,$,Z,K,W);this.isArcCurve=!0,this.type="ArcCurve"}}function pZ(){let J=0,Q=0,$=0,Z=0;function K(W,X,Y,U){J=W,Q=Y,$=-3*W+3*X-2*Y-U,Z=2*W-2*X+Y+U}return{initCatmullRom:function(W,X,Y,U,H){K(X,Y,H*(Y-W),H*(U-X))},initNonuniformCatmullRom:function(W,X,Y,U,H,G,N){let q=(X-W)/H-(Y-W)/(H+G)+(Y-X)/G,F=(Y-X)/G-(U-X)/(G+N)+(U-Y)/N;q*=G,F*=G,K(X,Y,q,F)},calc:function(W){let X=W*W,Y=X*W;return J+Q*W+$*X+Z*Y}}}var UW=new v,HW=new v,_$=new pZ,w$=new pZ,T$=new pZ;class mZ extends M9{constructor(J=[],Q=!1,$="centripetal",Z=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=J,this.closed=Q,this.curveType=$,this.tension=Z}getPoint(J,Q=new v){let $=Q,Z=this.points,K=Z.length,W=(K-(this.closed?0:1))*J,X=Math.floor(W),Y=W-X;if(this.closed)X+=X>0?0:(Math.floor(Math.abs(X)/K)+1)*K;else if(Y===0&&X===K-1)X=K-2,Y=1;let U,H;if(this.closed||X>0)U=Z[(X-1)%K];else HW.subVectors(Z[0],Z[1]).add(Z[0]),U=HW;let G=Z[X%K],N=Z[(X+1)%K];if(this.closed||X+2<K)H=Z[(X+2)%K];else UW.subVectors(Z[K-1],Z[K-2]).add(Z[K-1]),H=UW;if(this.curveType==="centripetal"||this.curveType==="chordal"){let q=this.curveType==="chordal"?0.5:0.25,F=Math.pow(U.distanceToSquared(G),q),R=Math.pow(G.distanceToSquared(N),q),I=Math.pow(N.distanceToSquared(H),q);if(R<0.0001)R=1;if(F<0.0001)F=R;if(I<0.0001)I=R;_$.initNonuniformCatmullRom(U.x,G.x,N.x,H.x,F,R,I),w$.initNonuniformCatmullRom(U.y,G.y,N.y,H.y,F,R,I),T$.initNonuniformCatmullRom(U.z,G.z,N.z,H.z,F,R,I)}else if(this.curveType==="catmullrom")_$.initCatmullRom(U.x,G.x,N.x,H.x,this.tension),w$.initCatmullRom(U.y,G.y,N.y,H.y,this.tension),T$.initCatmullRom(U.z,G.z,N.z,H.z,this.tension);return $.set(_$.calc(Y),w$.calc(Y),T$.calc(Y)),$}copy(J){super.copy(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(Z.clone())}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,$=this.points.length;Q<$;Q++){let Z=this.points[Q];J.points.push(Z.toArray())}return J.closed=this.closed,J.curveType=this.curveType,J.tension=this.tension,J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(new v().fromArray(Z))}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}}function qW(J,Q,$,Z,K){let W=(Z-Q)*0.5,X=(K-$)*0.5,Y=J*J,U=J*Y;return(2*$-2*Z+W+X)*U+(-3*$+3*Z-2*W-X)*Y+W*J+$}function XU(J,Q){let $=1-J;return $*$*Q}function YU(J,Q){return 2*(1-J)*J*Q}function UU(J,Q){return J*J*Q}function o7(J,Q,$,Z){return XU(J,Q)+YU(J,$)+UU(J,Z)}function HU(J,Q){let $=1-J;return $*$*$*Q}function qU(J,Q){let $=1-J;return 3*$*$*J*Q}function GU(J,Q){return 3*(1-J)*J*J*Q}function NU(J,Q){return J*J*J*Q}function a7(J,Q,$,Z,K){return HU(J,Q)+qU(J,$)+GU(J,Z)+NU(J,K)}class PQ extends M9{constructor(J=new E0,Q=new E0,$=new E0,Z=new E0){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=J,this.v1=Q,this.v2=$,this.v3=Z}getPoint(J,Q=new E0){let $=Q,Z=this.v0,K=this.v1,W=this.v2,X=this.v3;return $.set(a7(J,Z.x,K.x,W.x,X.x),a7(J,Z.y,K.y,W.y,X.y)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class lZ extends M9{constructor(J=new v,Q=new v,$=new v,Z=new v){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=J,this.v1=Q,this.v2=$,this.v3=Z}getPoint(J,Q=new v){let $=Q,Z=this.v0,K=this.v1,W=this.v2,X=this.v3;return $.set(a7(J,Z.x,K.x,W.x,X.x),a7(J,Z.y,K.y,W.y,X.y),a7(J,Z.z,K.z,W.z,X.z)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class CQ extends M9{constructor(J=new E0,Q=new E0){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=J,this.v2=Q}getPoint(J,Q=new E0){let $=Q;if(J===1)$.copy(this.v2);else $.copy(this.v2).sub(this.v1),$.multiplyScalar(J).add(this.v1);return $}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new E0){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class dZ extends M9{constructor(J=new v,Q=new v){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=J,this.v2=Q}getPoint(J,Q=new v){let $=Q;if(J===1)$.copy(this.v2);else $.copy(this.v2).sub(this.v1),$.multiplyScalar(J).add(this.v1);return $}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new v){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class _Q extends M9{constructor(J=new E0,Q=new E0,$=new E0){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=J,this.v1=Q,this.v2=$}getPoint(J,Q=new E0){let $=Q,Z=this.v0,K=this.v1,W=this.v2;return $.set(o7(J,Z.x,K.x,W.x),o7(J,Z.y,K.y,W.y)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class uZ extends M9{constructor(J=new v,Q=new v,$=new v){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=J,this.v1=Q,this.v2=$}getPoint(J,Q=new v){let $=Q,Z=this.v0,K=this.v1,W=this.v2;return $.set(o7(J,Z.x,K.x,W.x),o7(J,Z.y,K.y,W.y),o7(J,Z.z,K.z,W.z)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class wQ extends M9{constructor(J=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=J}getPoint(J,Q=new E0){let $=Q,Z=this.points,K=(Z.length-1)*J,W=Math.floor(K),X=K-W,Y=Z[W===0?W:W-1],U=Z[W],H=Z[W>Z.length-2?Z.length-1:W+1],G=Z[W>Z.length-3?Z.length-1:W+2];return $.set(qW(X,Y.x,U.x,H.x,G.x),qW(X,Y.y,U.y,H.y,G.y)),$}copy(J){super.copy(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(Z.clone())}return this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,$=this.points.length;Q<$;Q++){let Z=this.points[Q];J.points.push(Z.toArray())}return J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(new E0().fromArray(Z))}return this}}var j$=Object.freeze({__proto__:null,ArcCurve:gZ,CatmullRomCurve3:mZ,CubicBezierCurve:PQ,CubicBezierCurve3:lZ,EllipseCurve:q6,LineCurve:CQ,LineCurve3:dZ,QuadraticBezierCurve:_Q,QuadraticBezierCurve3:uZ,SplineCurve:wQ});class cZ extends M9{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(J){this.curves.push(J)}closePath(){let J=this.curves[0].getPoint(0),Q=this.curves[this.curves.length-1].getPoint(1);if(!J.equals(Q)){let $=J.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new j$[$](Q,J))}return this}getPoint(J,Q){let $=J*this.getLength(),Z=this.getCurveLengths(),K=0;while(K<Z.length){if(Z[K]>=$){let W=Z[K]-$,X=this.curves[K],Y=X.getLength(),U=Y===0?0:1-W/Y;return X.getPointAt(U,Q)}K++}return null}getLength(){let J=this.getCurveLengths();return J[J.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let J=[],Q=0;for(let $=0,Z=this.curves.length;$<Z;$++)Q+=this.curves[$].getLength(),J.push(Q);return this.cacheLengths=J,J}getSpacedPoints(J=40){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPoint($/J));if(this.autoClose)Q.push(Q[0]);return Q}getPoints(J=12){let Q=[],$;for(let Z=0,K=this.curves;Z<K.length;Z++){let W=K[Z],X=W.isEllipseCurve?J*2:W.isLineCurve||W.isLineCurve3?1:W.isSplineCurve?J*W.points.length:J,Y=W.getPoints(X);for(let U=0;U<Y.length;U++){let H=Y[U];if($&&$.equals(H))continue;Q.push(H),$=H}}if(this.autoClose&&Q.length>1&&!Q[Q.length-1].equals(Q[0]))Q.push(Q[0]);return Q}copy(J){super.copy(J),this.curves=[];for(let Q=0,$=J.curves.length;Q<$;Q++){let Z=J.curves[Q];this.curves.push(Z.clone())}return this.autoClose=J.autoClose,this}toJSON(){let J=super.toJSON();J.autoClose=this.autoClose,J.curves=[];for(let Q=0,$=this.curves.length;Q<$;Q++){let Z=this.curves[Q];J.curves.push(Z.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.autoClose=J.autoClose,this.curves=[];for(let Q=0,$=J.curves.length;Q<$;Q++){let Z=J.curves[Q];this.curves.push(new j$[Z.type]().fromJSON(Z))}return this}}class WQ extends cZ{constructor(J){super();if(this.type="Path",this.currentPoint=new E0,J)this.setFromPoints(J)}setFromPoints(J){this.moveTo(J[0].x,J[0].y);for(let Q=1,$=J.length;Q<$;Q++)this.lineTo(J[Q].x,J[Q].y);return this}moveTo(J,Q){return this.currentPoint.set(J,Q),this}lineTo(J,Q){let $=new CQ(this.currentPoint.clone(),new E0(J,Q));return this.curves.push($),this.currentPoint.set(J,Q),this}quadraticCurveTo(J,Q,$,Z){let K=new _Q(this.currentPoint.clone(),new E0(J,Q),new E0($,Z));return this.curves.push(K),this.currentPoint.set($,Z),this}bezierCurveTo(J,Q,$,Z,K,W){let X=new PQ(this.currentPoint.clone(),new E0(J,Q),new E0($,Z),new E0(K,W));return this.curves.push(X),this.currentPoint.set(K,W),this}splineThru(J){let Q=[this.currentPoint.clone()].concat(J),$=new wQ(Q);return this.curves.push($),this.currentPoint.copy(J[J.length-1]),this}arc(J,Q,$,Z,K,W){let X=this.currentPoint.x,Y=this.currentPoint.y;return this.absarc(J+X,Q+Y,$,Z,K,W),this}absarc(J,Q,$,Z,K,W){return this.absellipse(J,Q,$,$,Z,K,W),this}ellipse(J,Q,$,Z,K,W,X,Y){let U=this.currentPoint.x,H=this.currentPoint.y;return this.absellipse(J+U,Q+H,$,Z,K,W,X,Y),this}absellipse(J,Q,$,Z,K,W,X,Y){let U=new q6(J,Q,$,Z,K,W,X,Y);if(this.curves.length>0){let G=U.getPoint(0);if(!G.equals(this.currentPoint))this.lineTo(G.x,G.y)}this.curves.push(U);let H=U.getPoint(1);return this.currentPoint.copy(H),this}copy(J){return super.copy(J),this.currentPoint.copy(J.currentPoint),this}toJSON(){let J=super.toJSON();return J.currentPoint=this.currentPoint.toArray(),J}fromJSON(J){return super.fromJSON(J),this.currentPoint.fromArray(J.currentPoint),this}}class G6 extends WQ{constructor(J){super(J);this.uuid=M7(),this.type="Shape",this.holes=[]}getPointsHoles(J){let Q=[];for(let $=0,Z=this.holes.length;$<Z;$++)Q[$]=this.holes[$].getPoints(J);return Q}extractPoints(J){return{shape:this.getPoints(J),holes:this.getPointsHoles(J)}}copy(J){super.copy(J),this.holes=[];for(let Q=0,$=J.holes.length;Q<$;Q++){let Z=J.holes[Q];this.holes.push(Z.clone())}return this}toJSON(){let J=super.toJSON();J.uuid=this.uuid,J.holes=[];for(let Q=0,$=this.holes.length;Q<$;Q++){let Z=this.holes[Q];J.holes.push(Z.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.uuid=J.uuid,this.holes=[];for(let Q=0,$=J.holes.length;Q<$;Q++){let Z=J.holes[Q];this.holes.push(new WQ().fromJSON(Z))}return this}}function FU(J,Q,$=2){let Z=Q&&Q.length,K=Z?Q[0]*$:J.length,W=MX(J,0,K,$,!0),X=[];if(!W||W.next===W.prev)return X;let Y,U,H;if(Z)W=kU(J,Q,W,$);if(J.length>80*$){Y=J[0],U=J[1];let G=Y,N=U;for(let q=$;q<K;q+=$){let F=J[q],R=J[q+1];if(F<Y)Y=F;if(R<U)U=R;if(F>G)G=F;if(R>N)N=R}H=Math.max(G-Y,N-U),H=H!==0?32767/H:0}return r7(W,X,$,Y,U,H,0),X}function MX(J,Q,$,Z,K){let W;if(K===wU(J,Q,$,Z)>0)for(let X=Q;X<$;X+=Z)W=GW(X/Z|0,J[X],J[X+1],W);else for(let X=$-Z;X>=Q;X-=Z)W=GW(X/Z|0,J[X],J[X+1],W);if(W&&R7(W,W.next))e7(W),W=W.next;return W}function y8(J,Q){if(!J)return J;if(!Q)Q=J;let $=J,Z;do if(Z=!1,!$.steiner&&(R7($,$.next)||_J($.prev,$,$.next)===0)){if(e7($),$=Q=$.prev,$===$.next)break;Z=!0}else $=$.next;while(Z||$!==Q);return Q}function r7(J,Q,$,Z,K,W,X){if(!J)return;if(!X&&W)MU(J,Z,K,W);let Y=J;while(J.prev!==J.next){let{prev:U,next:H}=J;if(W?EU(J,Z,K,W):OU(J)){Q.push(U.i,J.i,H.i),e7(J),J=H.next,Y=H.next;continue}if(J=H,J===Y){if(!X)r7(y8(J),Q,$,Z,K,W,1);else if(X===1)J=DU(y8(J),Q),r7(J,Q,$,Z,K,W,2);else if(X===2)RU(J,Q,$,Z,K,W);break}}}function OU(J){let Q=J.prev,$=J,Z=J.next;if(_J(Q,$,Z)>=0)return!1;let K=Q.x,W=$.x,X=Z.x,Y=Q.y,U=$.y,H=Z.y,G=Math.min(K,W,X),N=Math.min(Y,U,H),q=Math.max(K,W,X),F=Math.max(Y,U,H),R=Z.next;while(R!==Q){if(R.x>=G&&R.x<=q&&R.y>=N&&R.y<=F&&i7(K,Y,W,U,X,H,R.x,R.y)&&_J(R.prev,R,R.next)>=0)return!1;R=R.next}return!0}function EU(J,Q,$,Z){let K=J.prev,W=J,X=J.next;if(_J(K,W,X)>=0)return!1;let Y=K.x,U=W.x,H=X.x,G=K.y,N=W.y,q=X.y,F=Math.min(Y,U,H),R=Math.min(G,N,q),I=Math.max(Y,U,H),O=Math.max(G,N,q),E=v$(F,R,Q,$,Z),w=v$(I,O,Q,$,Z),P=J.prevZ,L=J.nextZ;while(P&&P.z>=E&&L&&L.z<=w){if(P.x>=F&&P.x<=I&&P.y>=R&&P.y<=O&&P!==K&&P!==X&&i7(Y,G,U,N,H,q,P.x,P.y)&&_J(P.prev,P,P.next)>=0)return!1;if(P=P.prevZ,L.x>=F&&L.x<=I&&L.y>=R&&L.y<=O&&L!==K&&L!==X&&i7(Y,G,U,N,H,q,L.x,L.y)&&_J(L.prev,L,L.next)>=0)return!1;L=L.nextZ}while(P&&P.z>=E){if(P.x>=F&&P.x<=I&&P.y>=R&&P.y<=O&&P!==K&&P!==X&&i7(Y,G,U,N,H,q,P.x,P.y)&&_J(P.prev,P,P.next)>=0)return!1;P=P.prevZ}while(L&&L.z<=w){if(L.x>=F&&L.x<=I&&L.y>=R&&L.y<=O&&L!==K&&L!==X&&i7(Y,G,U,N,H,q,L.x,L.y)&&_J(L.prev,L,L.next)>=0)return!1;L=L.nextZ}return!0}function DU(J,Q){let $=J;do{let Z=$.prev,K=$.next.next;if(!R7(Z,K)&&AX(Z,$,$.next,K)&&t7(Z,K)&&t7(K,Z))Q.push(Z.i,$.i,K.i),e7($),e7($.next),$=J=K;$=$.next}while($!==J);return y8($)}function RU(J,Q,$,Z,K,W){let X=J;do{let Y=X.next.next;while(Y!==X.prev){if(X.i!==Y.i&&PU(X,Y)){let U=PX(X,Y);X=y8(X,X.next),U=y8(U,U.next),r7(X,Q,$,Z,K,W,0),r7(U,Q,$,Z,K,W,0);return}Y=Y.next}X=X.next}while(X!==J)}function kU(J,Q,$,Z){let K=[];for(let W=0,X=Q.length;W<X;W++){let Y=Q[W]*Z,U=W<X-1?Q[W+1]*Z:J.length,H=MX(J,Y,U,Z,!1);if(H===H.next)H.steiner=!0;K.push(AU(H))}K.sort(VU);for(let W=0;W<K.length;W++)$=LU(K[W],$);return $}function VU(J,Q){let $=J.x-Q.x;if($===0){if($=J.y-Q.y,$===0){let Z=(J.next.y-J.y)/(J.next.x-J.x),K=(Q.next.y-Q.y)/(Q.next.x-Q.x);$=Z-K}}return $}function LU(J,Q){let $=zU(J,Q);if(!$)return Q;let Z=PX($,J);return y8(Z,Z.next),y8($,$.next)}function zU(J,Q){let $=Q,Z=J.x,K=J.y,W=-1/0,X;if(R7(J,$))return $;do{if(R7(J,$.next))return $.next;else if(K<=$.y&&K>=$.next.y&&$.next.y!==$.y){let N=$.x+(K-$.y)*($.next.x-$.x)/($.next.y-$.y);if(N<=Z&&N>W){if(W=N,X=$.x<$.next.x?$:$.next,N===Z)return X}}$=$.next}while($!==Q);if(!X)return null;let Y=X,U=X.x,H=X.y,G=1/0;$=X;do{if(Z>=$.x&&$.x>=U&&Z!==$.x&&IX(K<H?Z:W,K,U,H,K<H?W:Z,K,$.x,$.y)){let N=Math.abs(K-$.y)/(Z-$.x);if(t7($,J)&&(N<G||N===G&&($.x>X.x||$.x===X.x&&BU(X,$))))X=$,G=N}$=$.next}while($!==Y);return X}function BU(J,Q){return _J(J.prev,J,Q.prev)<0&&_J(Q.next,J,J.next)<0}function MU(J,Q,$,Z){let K=J;do{if(K.z===0)K.z=v$(K.x,K.y,Q,$,Z);K.prevZ=K.prev,K.nextZ=K.next,K=K.next}while(K!==J);K.prevZ.nextZ=null,K.prevZ=null,IU(K)}function IU(J){let Q,$=1;do{let Z=J,K;J=null;let W=null;Q=0;while(Z){Q++;let X=Z,Y=0;for(let H=0;H<$;H++)if(Y++,X=X.nextZ,!X)break;let U=$;while(Y>0||U>0&&X){if(Y!==0&&(U===0||!X||Z.z<=X.z))K=Z,Z=Z.nextZ,Y--;else K=X,X=X.nextZ,U--;if(W)W.nextZ=K;else J=K;K.prevZ=W,W=K}Z=X}W.nextZ=null,$*=2}while(Q>1);return J}function v$(J,Q,$,Z,K){return J=(J-$)*K|0,Q=(Q-Z)*K|0,J=(J|J<<8)&16711935,J=(J|J<<4)&252645135,J=(J|J<<2)&858993459,J=(J|J<<1)&1431655765,Q=(Q|Q<<8)&16711935,Q=(Q|Q<<4)&252645135,Q=(Q|Q<<2)&858993459,Q=(Q|Q<<1)&1431655765,J|Q<<1}function AU(J){let Q=J,$=J;do{if(Q.x<$.x||Q.x===$.x&&Q.y<$.y)$=Q;Q=Q.next}while(Q!==J);return $}function IX(J,Q,$,Z,K,W,X,Y){return(K-X)*(Q-Y)>=(J-X)*(W-Y)&&(J-X)*(Z-Y)>=($-X)*(Q-Y)&&($-X)*(W-Y)>=(K-X)*(Z-Y)}function i7(J,Q,$,Z,K,W,X,Y){return!(J===X&&Q===Y)&&IX(J,Q,$,Z,K,W,X,Y)}function PU(J,Q){return J.next.i!==Q.i&&J.prev.i!==Q.i&&!CU(J,Q)&&(t7(J,Q)&&t7(Q,J)&&_U(J,Q)&&(_J(J.prev,J,Q.prev)||_J(J,Q.prev,Q))||R7(J,Q)&&_J(J.prev,J,J.next)>0&&_J(Q.prev,Q,Q.next)>0)}function _J(J,Q,$){return(Q.y-J.y)*($.x-Q.x)-(Q.x-J.x)*($.y-Q.y)}function R7(J,Q){return J.x===Q.x&&J.y===Q.y}function AX(J,Q,$,Z){let K=t6(_J(J,Q,$)),W=t6(_J(J,Q,Z)),X=t6(_J($,Z,J)),Y=t6(_J($,Z,Q));if(K!==W&&X!==Y)return!0;if(K===0&&r6(J,$,Q))return!0;if(W===0&&r6(J,Z,Q))return!0;if(X===0&&r6($,J,Z))return!0;if(Y===0&&r6($,Q,Z))return!0;return!1}function r6(J,Q,$){return Q.x<=Math.max(J.x,$.x)&&Q.x>=Math.min(J.x,$.x)&&Q.y<=Math.max(J.y,$.y)&&Q.y>=Math.min(J.y,$.y)}function t6(J){return J>0?1:J<0?-1:0}function CU(J,Q){let $=J;do{if($.i!==J.i&&$.next.i!==J.i&&$.i!==Q.i&&$.next.i!==Q.i&&AX($,$.next,J,Q))return!0;$=$.next}while($!==J);return!1}function t7(J,Q){return _J(J.prev,J,J.next)<0?_J(J,Q,J.next)>=0&&_J(J,J.prev,Q)>=0:_J(J,Q,J.prev)<0||_J(J,J.next,Q)<0}function _U(J,Q){let $=J,Z=!1,K=(J.x+Q.x)/2,W=(J.y+Q.y)/2;do{if($.y>W!==$.next.y>W&&$.next.y!==$.y&&K<($.next.x-$.x)*(W-$.y)/($.next.y-$.y)+$.x)Z=!Z;$=$.next}while($!==J);return Z}function PX(J,Q){let $=f$(J.i,J.x,J.y),Z=f$(Q.i,Q.x,Q.y),K=J.next,W=Q.prev;return J.next=Q,Q.prev=J,$.next=K,K.prev=$,Z.next=$,$.prev=Z,W.next=Z,Z.prev=W,Z}function GW(J,Q,$,Z){let K=f$(J,Q,$);if(!Z)K.prev=K,K.next=K;else K.next=Z.next,K.prev=Z,Z.next.prev=K,Z.next=K;return K}function e7(J){if(J.next.prev=J.prev,J.prev.next=J.next,J.prevZ)J.prevZ.nextZ=J.nextZ;if(J.nextZ)J.nextZ.prevZ=J.prevZ}function f$(J,Q,$){return{i:J,x:Q,y:$,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function wU(J,Q,$,Z){let K=0;for(let W=Q,X=$-Z;W<$;W+=Z)K+=(J[X]-J[W])*(J[W+1]+J[X+1]),X=W;return K}class CX{static triangulate(J,Q,$=2){return FU(J,Q,$)}}class v8{static area(J){let Q=J.length,$=0;for(let Z=Q-1,K=0;K<Q;Z=K++)$+=J[Z].x*J[K].y-J[K].x*J[Z].y;return $*0.5}static isClockWise(J){return v8.area(J)<0}static triangulateShape(J,Q){let $=[],Z=[],K=[];NW(J),FW($,J);let W=J.length;Q.forEach(NW);for(let Y=0;Y<Q.length;Y++)Z.push(W),W+=Q[Y].length,FW($,Q[Y]);let X=CX.triangulate($,Z);for(let Y=0;Y<X.length;Y+=3)K.push(X.slice(Y,Y+3));return K}}function NW(J){let Q=J.length;if(Q>2&&J[Q-1].equals(J[0]))J.pop()}function FW(J,Q){for(let $=0;$<Q.length;$++)J.push(Q[$].x),J.push(Q[$].y)}class N6 extends B9{constructor(J=new G6([new E0(0.5,0.5),new E0(-0.5,0.5),new E0(-0.5,-0.5),new E0(0.5,-0.5)]),Q={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:J,options:Q},J=Array.isArray(J)?J:[J];let $=this,Z=[],K=[];for(let X=0,Y=J.length;X<Y;X++){let U=J[X];W(U)}this.setAttribute("position",new tJ(Z,3)),this.setAttribute("uv",new tJ(K,2)),this.computeVertexNormals();function W(X){let Y=[],U=Q.curveSegments!==void 0?Q.curveSegments:12,H=Q.steps!==void 0?Q.steps:1,G=Q.depth!==void 0?Q.depth:1,N=Q.bevelEnabled!==void 0?Q.bevelEnabled:!0,q=Q.bevelThickness!==void 0?Q.bevelThickness:0.2,F=Q.bevelSize!==void 0?Q.bevelSize:q-0.1,R=Q.bevelOffset!==void 0?Q.bevelOffset:0,I=Q.bevelSegments!==void 0?Q.bevelSegments:3,O=Q.extrudePath,E=Q.UVGenerator!==void 0?Q.UVGenerator:TU,w,P=!1,L,A,C,_;if(O){w=O.getSpacedPoints(H),P=!0,N=!1;let e=O.isCatmullRomCurve3?O.closed:!1;L=O.computeFrenetFrames(H,e),A=new v,C=new v,_=new v}if(!N)I=0,q=0,F=0,R=0;let V=X.extractPoints(U),M=V.shape,l=V.holes;if(!v8.isClockWise(M)){M=M.reverse();for(let e=0,K0=l.length;e<K0;e++){let Q0=l[e];if(v8.isClockWise(Q0))l[e]=Q0.reverse()}}function m(e){let z0=e[0];for(let P0=1;P0<=e.length;P0++){let j0=P0%e.length,b0=e[j0],n0=b0.x-z0.x,c0=b0.y-z0.y,T=n0*n0+c0*c0,DJ=Math.max(Math.abs(b0.x),Math.abs(b0.y),Math.abs(z0.x),Math.abs(z0.y)),t0=0.000000000000000000010000000000000001*DJ*DJ;if(T<=t0){e.splice(j0,1),P0--;continue}z0=b0}}m(M),l.forEach(m);let o=l.length,b=M;for(let e=0;e<o;e++){let K0=l[e];M=M.concat(K0)}function c(e,K0,Q0){if(!K0)m0("ExtrudeGeometry: vec does not exist");return e.clone().addScaledVector(K0,Q0)}let s=M.length;function x(e,K0,Q0){let z0,P0,j0,b0=e.x-K0.x,n0=e.y-K0.y,c0=Q0.x-e.x,T=Q0.y-e.y,DJ=b0*b0+n0*n0,t0=b0*T-n0*c0;if(Math.abs(t0)>Number.EPSILON){let e0=Math.sqrt(DJ),B=Math.sqrt(c0*c0+T*T),k=K0.x-n0/e0,S=K0.y+b0/e0,d=Q0.x-T/B,$0=Q0.y+c0/B,X0=((d-k)*T-($0-S)*c0)/(b0*T-n0*c0);z0=k+b0*X0-e.x,P0=S+n0*X0-e.y;let F0=z0*z0+P0*P0;if(F0<=2)return new E0(z0,P0);else j0=Math.sqrt(F0/2)}else{let e0=!1;if(b0>Number.EPSILON){if(c0>Number.EPSILON)e0=!0}else if(b0<-Number.EPSILON){if(c0<-Number.EPSILON)e0=!0}else if(Math.sign(n0)===Math.sign(T))e0=!0;if(e0)z0=-n0,P0=b0,j0=Math.sqrt(DJ);else z0=b0,P0=n0,j0=Math.sqrt(DJ/2)}return new E0(z0/j0,P0/j0)}let J0=[];for(let e=0,K0=b.length,Q0=K0-1,z0=e+1;e<K0;e++,Q0++,z0++){if(Q0===K0)Q0=0;if(z0===K0)z0=0;J0[e]=x(b[e],b[Q0],b[z0])}let W0=[],H0,C0=J0.concat();for(let e=0,K0=o;e<K0;e++){let Q0=l[e];H0=[];for(let z0=0,P0=Q0.length,j0=P0-1,b0=z0+1;z0<P0;z0++,j0++,b0++){if(j0===P0)j0=0;if(b0===P0)b0=0;H0[z0]=x(Q0[z0],Q0[j0],Q0[b0])}W0.push(H0),C0=C0.concat(H0)}let D0;if(I===0)D0=v8.triangulateShape(b,l);else{let e=[],K0=[];for(let Q0=0;Q0<I;Q0++){let z0=Q0/I,P0=q*Math.cos(z0*Math.PI/2),j0=F*Math.sin(z0*Math.PI/2)+R;for(let b0=0,n0=b.length;b0<n0;b0++){let c0=c(b[b0],J0[b0],j0);if(N0(c0.x,c0.y,-P0),z0===0)e.push(c0)}for(let b0=0,n0=o;b0<n0;b0++){let c0=l[b0];H0=W0[b0];let T=[];for(let DJ=0,t0=c0.length;DJ<t0;DJ++){let e0=c(c0[DJ],H0[DJ],j0);if(N0(e0.x,e0.y,-P0),z0===0)T.push(e0)}if(z0===0)K0.push(T)}}D0=v8.triangulateShape(e,K0)}let HJ=D0.length,UJ=F+R;for(let e=0;e<s;e++){let K0=N?c(M[e],C0[e],UJ):M[e];if(!P)N0(K0.x,K0.y,0);else C.copy(L.normals[0]).multiplyScalar(K0.x),A.copy(L.binormals[0]).multiplyScalar(K0.y),_.copy(w[0]).add(C).add(A),N0(_.x,_.y,_.z)}for(let e=1;e<=H;e++)for(let K0=0;K0<s;K0++){let Q0=N?c(M[K0],C0[K0],UJ):M[K0];if(!P)N0(Q0.x,Q0.y,G/H*e);else C.copy(L.normals[e]).multiplyScalar(Q0.x),A.copy(L.binormals[e]).multiplyScalar(Q0.y),_.copy(w[e]).add(C).add(A),N0(_.x,_.y,_.z)}for(let e=I-1;e>=0;e--){let K0=e/I,Q0=q*Math.cos(K0*Math.PI/2),z0=F*Math.sin(K0*Math.PI/2)+R;for(let P0=0,j0=b.length;P0<j0;P0++){let b0=c(b[P0],J0[P0],z0);N0(b0.x,b0.y,G+Q0)}for(let P0=0,j0=l.length;P0<j0;P0++){let b0=l[P0];H0=W0[P0];for(let n0=0,c0=b0.length;n0<c0;n0++){let T=c(b0[n0],H0[n0],z0);if(!P)N0(T.x,T.y,G+Q0);else N0(T.x,T.y+w[H-1].y,w[H-1].x+Q0)}}}a(),q0();function a(){let e=Z.length/3;if(N){let K0=0,Q0=s*K0;for(let z0=0;z0<HJ;z0++){let P0=D0[z0];y0(P0[2]+Q0,P0[1]+Q0,P0[0]+Q0)}K0=H+I*2,Q0=s*K0;for(let z0=0;z0<HJ;z0++){let P0=D0[z0];y0(P0[0]+Q0,P0[1]+Q0,P0[2]+Q0)}}else{for(let K0=0;K0<HJ;K0++){let Q0=D0[K0];y0(Q0[2],Q0[1],Q0[0])}for(let K0=0;K0<HJ;K0++){let Q0=D0[K0];y0(Q0[0]+s*H,Q0[1]+s*H,Q0[2]+s*H)}}$.addGroup(e,Z.length/3-e,0)}function q0(){let e=Z.length/3,K0=0;L0(b,K0),K0+=b.length;for(let Q0=0,z0=l.length;Q0<z0;Q0++){let P0=l[Q0];L0(P0,K0),K0+=P0.length}$.addGroup(e,Z.length/3-e,1)}function L0(e,K0){let Q0=e.length;while(--Q0>=0){let z0=Q0,P0=Q0-1;if(P0<0)P0=e.length-1;for(let j0=0,b0=H+I*2;j0<b0;j0++){let n0=s*j0,c0=s*(j0+1),T=K0+z0+n0,DJ=K0+P0+n0,t0=K0+P0+c0,e0=K0+z0+c0;ZJ(T,DJ,t0,e0)}}}function N0(e,K0,Q0){Y.push(e),Y.push(K0),Y.push(Q0)}function y0(e,K0,Q0){d0(e),d0(K0),d0(Q0);let z0=Z.length/3,P0=E.generateTopUV($,Z,z0-3,z0-2,z0-1);u0(P0[0]),u0(P0[1]),u0(P0[2])}function ZJ(e,K0,Q0,z0){d0(e),d0(K0),d0(z0),d0(K0),d0(Q0),d0(z0);let P0=Z.length/3,j0=E.generateSideWallUV($,Z,P0-6,P0-3,P0-2,P0-1);u0(j0[0]),u0(j0[1]),u0(j0[3]),u0(j0[1]),u0(j0[2]),u0(j0[3])}function d0(e){Z.push(Y[e*3+0]),Z.push(Y[e*3+1]),Z.push(Y[e*3+2])}function u0(e){K.push(e.x),K.push(e.y)}}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON(),Q=this.parameters.shapes,$=this.parameters.options;return SU(Q,$,J)}static fromJSON(J,Q){let $=[];for(let K=0,W=J.shapes.length;K<W;K++){let X=Q[J.shapes[K]];$.push(X)}let Z=J.options.extrudePath;if(Z!==void 0)J.options.extrudePath=new j$[Z.type]().fromJSON(Z);return new N6($,J.options)}}var TU={generateTopUV:function(J,Q,$,Z,K){let W=Q[$*3],X=Q[$*3+1],Y=Q[Z*3],U=Q[Z*3+1],H=Q[K*3],G=Q[K*3+1];return[new E0(W,X),new E0(Y,U),new E0(H,G)]},generateSideWallUV:function(J,Q,$,Z,K,W){let X=Q[$*3],Y=Q[$*3+1],U=Q[$*3+2],H=Q[Z*3],G=Q[Z*3+1],N=Q[Z*3+2],q=Q[K*3],F=Q[K*3+1],R=Q[K*3+2],I=Q[W*3],O=Q[W*3+1],E=Q[W*3+2];if(Math.abs(Y-G)<Math.abs(X-H))return[new E0(X,1-U),new E0(H,1-N),new E0(q,1-R),new E0(I,1-E)];else return[new E0(Y,1-U),new E0(G,1-N),new E0(F,1-R),new E0(O,1-E)]}};function SU(J,Q,$){if($.shapes=[],Array.isArray(J))for(let Z=0,K=J.length;Z<K;Z++){let W=J[Z];$.shapes.push(W.uuid)}else $.shapes.push(J.uuid);if($.options=Object.assign({},Q),Q.extrudePath!==void 0)$.options.extrudePath=Q.extrudePath.toJSON();return $}class dJ extends B9{constructor(J=1,Q=1,$=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:Z};let K=J/2,W=Q/2,X=Math.floor($),Y=Math.floor(Z),U=X+1,H=Y+1,G=J/X,N=Q/Y,q=[],F=[],R=[],I=[];for(let O=0;O<H;O++){let E=O*N-W;for(let w=0;w<U;w++){let P=w*G-K;F.push(P,-E,0),R.push(0,0,1),I.push(w/X),I.push(1-O/Y)}}for(let O=0;O<Y;O++)for(let E=0;E<X;E++){let w=E+U*O,P=E+U*(O+1),L=E+1+U*(O+1),A=E+1+U*O;q.push(w,P,A),q.push(P,L,A)}this.setIndex(q),this.setAttribute("position",new tJ(F,3)),this.setAttribute("normal",new tJ(R,3)),this.setAttribute("uv",new tJ(I,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new dJ(J.width,J.height,J.widthSegments,J.heightSegments)}}function l8(J){let Q={};for(let $ in J){Q[$]={};for(let Z in J[$]){let K=J[$][Z];if(OW(K))if(K.isRenderTargetTexture)l0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][Z]=null;else Q[$][Z]=K.clone();else if(Array.isArray(K))if(OW(K[0])){let W=[];for(let X=0,Y=K.length;X<Y;X++)W[X]=K[X].clone();Q[$][Z]=W}else Q[$][Z]=K.slice();else Q[$][Z]=K}}return Q}function J9(J){let Q={};for(let $=0;$<J.length;$++){let Z=l8(J[$]);for(let K in Z)Q[K]=Z[K]}return Q}function OW(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function jU(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function nZ(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return XJ.workingColorSpace}var _X={clone:l8,merge:J9},vU=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fU=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class I9 extends L8{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vU,this.fragmentShader=fU,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=l8(J.uniforms),this.uniformsGroups=jU(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let Z in this.uniforms){let W=this.uniforms[Z].value;if(W&&W.isTexture)Q.uniforms[Z]={type:"t",value:W.toJSON(J).uuid};else if(W&&W.isColor)Q.uniforms[Z]={type:"c",value:W.getHex()};else if(W&&W.isVector2)Q.uniforms[Z]={type:"v2",value:W.toArray()};else if(W&&W.isVector3)Q.uniforms[Z]={type:"v3",value:W.toArray()};else if(W&&W.isVector4)Q.uniforms[Z]={type:"v4",value:W.toArray()};else if(W&&W.isMatrix3)Q.uniforms[Z]={type:"m3",value:W.toArray()};else if(W&&W.isMatrix4)Q.uniforms[Z]={type:"m4",value:W.toArray()};else Q.uniforms[Z]={value:W}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let Z in this.extensions)if(this.extensions[Z]===!0)$[Z]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}fromJSON(J,Q){if(super.fromJSON(J,Q),J.uniforms!==void 0)for(let $ in J.uniforms){let Z=J.uniforms[$];switch(this.uniforms[$]={},Z.type){case"t":this.uniforms[$].value=Q[Z.value]||null;break;case"c":this.uniforms[$].value=new KJ().setHex(Z.value);break;case"v2":this.uniforms[$].value=new E0().fromArray(Z.value);break;case"v3":this.uniforms[$].value=new v().fromArray(Z.value);break;case"v4":this.uniforms[$].value=new PJ().fromArray(Z.value);break;case"m3":this.uniforms[$].value=new o0().fromArray(Z.value);break;case"m4":this.uniforms[$].value=new VJ().fromArray(Z.value);break;default:this.uniforms[$].value=Z.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let $ in J.extensions)this.extensions[$]=J.extensions[$];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class sZ extends I9{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class uJ extends L8{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new KJ(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new KJ(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new E0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new G9,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class TQ extends L8{constructor(J){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new KJ(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new KJ(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new E0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new G9,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.envMapIntensity=J.envMapIntensity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class iZ extends L8{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class oZ extends L8{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function e6(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}class d8{constructor(J,Q,$,Z){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,Z=Q[$],K=Q[$-1];$:{J:{let W;Q:{Z:if(!(J<Z)){for(let X=$+2;;){if(Z===void 0){if(J<K)break Z;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===X)break;if(K=Z,Z=Q[++$],J<Z)break J}W=Q.length;break Q}if(!(J>=K)){let X=Q[1];if(J<X)$=2,K=X;for(let Y=$-2;;){if(K===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===Y)break;if(Z=K,K=Q[--$-1],J>=K)break J}W=$,$=0;break Q}break $}while($<W){let X=$+W>>>1;if(J<Q[X])W=X;else $=X+1}if(Z=Q[$],K=Q[$-1],K===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,K,Z)}return this.interpolate_($,K,J,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,K=J*Z;for(let W=0;W!==Z;++W)Q[W]=$[K+W];return Q}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class aZ extends d8{constructor(J,Q,$,Z){super(J,Q,$,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let Z=this.parameterPositions,K=J-2,W=J+1,X=Z[K],Y=Z[W];if(X===void 0)switch(this.getSettings_().endingStart){case 2401:K=J,X=2*Q-$;break;case 2402:K=Z.length-2,X=Q+Z[K]-Z[K+1];break;default:K=J,X=$}if(Y===void 0)switch(this.getSettings_().endingEnd){case 2401:W=J,Y=2*$-Q;break;case 2402:W=1,Y=$+Z[1]-Z[0];break;default:W=J-1,Y=Q}let U=($-Q)*0.5,H=this.valueSize;this._weightPrev=U/(Q-X),this._weightNext=U/(Y-$),this._offsetPrev=K*H,this._offsetNext=W*H}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,U=Y-X,H=this._offsetPrev,G=this._offsetNext,N=this._weightPrev,q=this._weightNext,F=($-Q)/(Z-Q),R=F*F,I=R*F,O=-N*I+2*N*R-N*F,E=(1+N)*I+(-1.5-2*N)*R+(-0.5+N)*F+1,w=(-1-q)*I+(1.5+q)*R+0.5*F,P=q*I-q*R;for(let L=0;L!==X;++L)K[L]=O*W[H+L]+E*W[U+L]+w*W[Y+L]+P*W[G+L];return K}}class rZ extends d8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,U=Y-X,H=($-Q)/(Z-Q),G=1-H;for(let N=0;N!==X;++N)K[N]=W[U+N]*G+W[Y+N]*H;return K}}class tZ extends d8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J){return this.copySampleValue_(J-1)}}class eZ extends d8{interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,U=Y-X,H=this.inTangents,G=this.outTangents;if(!H||!G){let F=($-Q)/(Z-Q),R=1-F;for(let I=0;I!==X;++I)K[I]=W[U+I]*R+W[Y+I]*F;return K}let N=X*2,q=J-1;for(let F=0;F!==X;++F){let R=W[U+F],I=W[Y+F],O=q*N+F*2,E=G[O],w=G[O+1],P=J*N+F*2,L=H[P],A=H[P+1],C=($-Q)/(Z-Q),_,V,M,l,D;for(let m=0;m<8;m++){_=C*C,V=_*C,M=1-C,l=M*M,D=l*M;let b=D*Q+3*l*C*E+3*M*_*L+V*Z-$;if(Math.abs(b)<0.0000000001)break;let c=3*l*(E-Q)+6*M*C*(L-E)+3*_*(Z-L);if(Math.abs(c)<0.0000000001)break;C=C-b/c,C=Math.max(0,Math.min(1,C))}K[F]=D*R+3*l*C*w+3*M*_*A+V*I}return K}}class A9{constructor(J,Q,$,Z){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=e6(Q,this.TimeBufferType),this.values=e6($,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:e6(J.times,Array),values:e6(J.values,Array)};let Z=J.getInterpolation();if(Z!==J.DefaultInterpolation)$.interpolation=Z}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new tZ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new rZ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new aZ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new eZ(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.inTangents=this.settings.inTangents,Q.outTangents=this.settings.outTangents;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return l0("KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]*=J}return this}trim(J,Q){let $=this.times,Z=$.length,K=0,W=Z-1;while(K!==Z&&$[K]<J)++K;while(W!==-1&&$[W]>Q)--W;if(++W,K!==0||W!==Z){if(K>=W)W=Math.max(W,1),K=W-1;let X=this.getValueSize();this.times=$.slice(K,W),this.values=this.values.slice(K*X,W*X)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)m0("KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,Z=this.values,K=$.length;if(K===0)m0("KeyframeTrack: Track is empty.",this),J=!1;let W=null;for(let X=0;X!==K;X++){let Y=$[X];if(typeof Y==="number"&&isNaN(Y)){m0("KeyframeTrack: Time is not a valid number.",this,X,Y),J=!1;break}if(W!==null&&W>Y){m0("KeyframeTrack: Out of order keys.",this,X,Y,W),J=!1;break}W=Y}if(Z!==void 0){if(gY(Z))for(let X=0,Y=Z.length;X!==Y;++X){let U=Z[X];if(isNaN(U)){m0("KeyframeTrack: Value is not a valid number.",this,X,U),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),Z=this.getInterpolation()===2302,K=J.length-1,W=1;for(let X=1;X<K;++X){let Y=!1,U=J[X],H=J[X+1];if(U!==H&&(X!==1||U!==J[0]))if(!Z){let G=X*$,N=G-$,q=G+$;for(let F=0;F!==$;++F){let R=Q[G+F];if(R!==Q[N+F]||R!==Q[q+F]){Y=!0;break}}}else Y=!0;if(Y){if(X!==W){J[W]=J[X];let G=X*$,N=W*$;for(let q=0;q!==$;++q)Q[N+q]=Q[G+q]}++W}}if(K>0){J[W]=J[K];for(let X=K*$,Y=W*$,U=0;U!==$;++U)Q[Y+U]=Q[X+U];++W}if(W!==J.length)this.times=J.slice(0,W),this.values=Q.slice(0,W*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),Z=new this.constructor(this.name,J,Q);return Z.createInterpolant=this.createInterpolant,Z}}A9.prototype.ValueTypeName="";A9.prototype.TimeBufferType=Float32Array;A9.prototype.ValueBufferType=Float32Array;A9.prototype.DefaultInterpolation=2301;class u8 extends A9{constructor(J,Q,$){super(J,Q,$)}}u8.prototype.ValueTypeName="bool";u8.prototype.ValueBufferType=Array;u8.prototype.DefaultInterpolation=2300;u8.prototype.InterpolantFactoryMethodLinear=void 0;u8.prototype.InterpolantFactoryMethodSmooth=void 0;class JK extends A9{constructor(J,Q,$,Z){super(J,Q,$,Z)}}JK.prototype.ValueTypeName="color";class QK extends A9{constructor(J,Q,$,Z){super(J,Q,$,Z)}}QK.prototype.ValueTypeName="number";class $K extends d8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=($-Q)/(Z-Q),U=J*X;for(let H=U+X;U!==H;U+=4)N9.slerpFlat(K,0,W,U-X,W,U,Y);return K}}class SQ extends A9{constructor(J,Q,$,Z){super(J,Q,$,Z)}InterpolantFactoryMethodLinear(J){return new $K(this.times,this.values,this.getValueSize(),J)}}SQ.prototype.ValueTypeName="quaternion";SQ.prototype.InterpolantFactoryMethodSmooth=void 0;class c8 extends A9{constructor(J,Q,$){super(J,Q,$)}}c8.prototype.ValueTypeName="string";c8.prototype.ValueBufferType=Array;c8.prototype.DefaultInterpolation=2300;c8.prototype.InterpolantFactoryMethodLinear=void 0;c8.prototype.InterpolantFactoryMethodSmooth=void 0;class ZK extends A9{constructor(J,Q,$,Z){super(J,Q,$,Z)}}ZK.prototype.ValueTypeName="vector";var $Q={enabled:!1,files:{},add:function(J,Q){if(this.enabled===!1)return;if(EW(J))return;this.files[J]=Q},get:function(J){if(this.enabled===!1)return;if(EW(J))return;return this.files[J]},remove:function(J){delete this.files[J]},clear:function(){this.files={}}};function EW(J){try{let Q=J.slice(J.indexOf(":")+1);return new URL(Q).protocol==="blob:"}catch(Q){return!1}}class KK{constructor(J,Q,$){let Z=this,K=!1,W=0,X=0,Y=void 0,U=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this._abortController=null,this.itemStart=function(H){if(X++,K===!1){if(Z.onStart!==void 0)Z.onStart(H,W,X)}K=!0},this.itemEnd=function(H){if(W++,Z.onProgress!==void 0)Z.onProgress(H,W,X);if(W===X){if(K=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(H){if(Z.onError!==void 0)Z.onError(H)},this.resolveURL=function(H){if(H=H.normalize("NFC"),Y)return Y(H);return H},this.setURLModifier=function(H){return Y=H,this},this.addHandler=function(H,G){return U.push(H,G),this},this.removeHandler=function(H){let G=U.indexOf(H);if(G!==-1)U.splice(G,2);return this},this.getHandler=function(H){for(let G=0,N=U.length;G<N;G+=2){let q=U[G],F=U[G+1];if(q.global)q.lastIndex=0;if(q.test(H))return F}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var wX=new KK;class F6{constructor(J){if(this.manager=J!==void 0?J:wX,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let $=this;return new Promise(function(Z,K){$.load(J,Z,Q,K)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}F6.DEFAULT_MATERIAL_NAME="__DEFAULT";var G7=new WeakMap;class WK extends F6{constructor(J){super(J)}load(J,Q,$,Z){if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let K=this,W=$Q.get(`image:${J}`);if(W!==void 0){if(W.complete===!0)K.manager.itemStart(J),setTimeout(function(){if(Q)Q(W);K.manager.itemEnd(J)},0);else{let G=G7.get(W);if(G===void 0)G=[],G7.set(W,G);G.push({onLoad:Q,onError:Z})}return W}let X=E7("img");function Y(){if(H(),Q)Q(this);let G=G7.get(this)||[];for(let N=0;N<G.length;N++){let q=G[N];if(q.onLoad)q.onLoad(this)}G7.delete(this),K.manager.itemEnd(J)}function U(G){if(H(),Z)Z(G);$Q.remove(`image:${J}`);let N=G7.get(this)||[];for(let q=0;q<N.length;q++){let F=N[q];if(F.onError)F.onError(G)}G7.delete(this),K.manager.itemError(J),K.manager.itemEnd(J)}function H(){X.removeEventListener("load",Y,!1),X.removeEventListener("error",U,!1)}if(X.addEventListener("load",Y,!1),X.addEventListener("error",U,!1),J.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)X.crossOrigin=this.crossOrigin}return $Q.add(`image:${J}`,X),K.manager.itemStart(J),X.src=J,X}}class jQ extends F6{constructor(J){super(J)}load(J,Q,$,Z){let K=new mJ,W=new WK(this.manager);return W.setCrossOrigin(this.crossOrigin),W.setPath(this.path),W.load(J,function(X){if(K.image=X,K.needsUpdate=!0,Q!==void 0)Q(K)},$,Z),K}}class vQ extends TJ{constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new KJ(J),this.intensity=Q}dispose(){this.dispatchEvent({type:"dispose"})}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);return Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,Q}}var S$=new VJ,DW=new v,RW=new v;class XK{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new E0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new VJ,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new H6,this._frameExtents=new E0(1,1),this._viewportCount=1,this._viewports=[new PJ(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera,$=this.matrix;if(DW.setFromMatrixPosition(J.matrixWorld),Q.position.copy(DW),RW.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(RW),Q.updateMatrixWorld(),S$.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),this._frustum.setFromProjectionMatrix(S$,Q.coordinateSystem,Q.reversedDepth),Q.coordinateSystem===2001||Q.reversedDepth)$.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,1,0,0,0,0,1);else $.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1);$.multiply(S$)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this.biasNode=J.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};if(this.intensity!==1)J.intensity=this.intensity;if(this.bias!==0)J.bias=this.bias;if(this.normalBias!==0)J.normalBias=this.normalBias;if(this.radius!==1)J.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)J.mapSize=this.mapSize.toArray();return J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var JQ=new v,QQ=new N9,p9=new v;class fQ extends TJ{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new VJ,this.projectionMatrix=new VJ,this.projectionMatrixInverse=new VJ,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(JQ,QQ,p9),p9.x===1&&p9.y===1&&p9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(JQ,QQ,p9.set(1,1,1)).invert()}updateWorldMatrix(J,Q,$=!1){if(super.updateWorldMatrix(J,Q,$),this.matrixWorld.decompose(JQ,QQ,p9),p9.x===1&&p9.y===1&&p9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(JQ,QQ,p9.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var R8=new v,kW=new E0,VW=new E0;class rJ extends fQ{constructor(J=50,Q=1,$=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=Z,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=ZQ*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(W$*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return ZQ*2*Math.atan(Math.tan(W$*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){R8.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(R8.x,R8.y).multiplyScalar(-J/R8.z),R8.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(R8.x,R8.y).multiplyScalar(-J/R8.z)}getViewSize(J,Q){return this.getViewBounds(J,kW,VW),Q.subVectors(VW,kW)}setViewOffset(J,Q,$,Z,K,W){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=K,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(W$*0.5*this.fov)/this.zoom,$=2*Q,Z=this.aspect*$,K=-0.5*Z,W=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Y,fullHeight:U}=W;K+=W.offsetX*Z/Y,Q-=W.offsetY*$/U,Z*=W.width/Y,$*=W.height/U}let X=this.filmOffset;if(X!==0)K+=J*X/this.getFilmWidth();this.projectionMatrix.makePerspective(K,K+Z,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class TX extends XK{constructor(){super(new rJ(90,1,0.5,500));this.isPointLightShadow=!0}}class yQ extends vQ{constructor(J,Q,$=0,Z=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=$,this.decay=Z,this.shadow=new TX}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.distance=this.distance,Q.object.decay=this.decay,Q.object.shadow=this.shadow.toJSON(),Q}}class O6 extends fQ{constructor(J=-1,Q=1,$=1,Z=-1,K=0.1,W=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=Z,this.near=K,this.far=W,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,Z,K,W){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=K,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,K=$-J,W=$+J,X=Z+Q,Y=Z-Q;if(this.view!==null&&this.view.enabled){let U=(this.right-this.left)/this.view.fullWidth/this.zoom,H=(this.top-this.bottom)/this.view.fullHeight/this.zoom;K+=U*this.view.offsetX,W=K+U*this.view.width,X-=H*this.view.offsetY,Y=X-H*this.view.height}this.projectionMatrix.makeOrthographic(K,W,X,Y,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class SX extends XK{constructor(){super(new O6(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class P7 extends vQ{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(TJ.DEFAULT_UP),this.updateMatrix(),this.target=new TJ,this.shadow=new SX}dispose(){super.dispose(),this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.shadow=this.shadow.toJSON(),Q.object.target=this.target.uuid,Q}}var N7=-90,F7=1;class YK extends TJ{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new rJ(N7,F7,J,Q);Z.layers=this.layers,this.add(Z);let K=new rJ(N7,F7,J,Q);K.layers=this.layers,this.add(K);let W=new rJ(N7,F7,J,Q);W.layers=this.layers,this.add(W);let X=new rJ(N7,F7,J,Q);X.layers=this.layers,this.add(X);let Y=new rJ(N7,F7,J,Q);Y.layers=this.layers,this.add(Y);let U=new rJ(N7,F7,J,Q);U.layers=this.layers,this.add(U)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,Z,K,W,X,Y]=Q;for(let U of Q)this.remove(U);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),K.up.set(0,0,-1),K.lookAt(0,1,0),W.up.set(0,0,1),W.lookAt(0,-1,0),X.up.set(0,1,0),X.lookAt(0,0,1),Y.up.set(0,1,0),Y.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),K.up.set(0,0,1),K.lookAt(0,1,0),W.up.set(0,0,-1),W.lookAt(0,-1,0),X.up.set(0,-1,0),X.lookAt(0,0,1),Y.up.set(0,-1,0),Y.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let U of Q)this.add(U),U.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[K,W,X,Y,U,H]=this.children,G=J.getRenderTarget(),N=J.getActiveCubeFace(),q=J.getActiveMipmapLevel(),F=J.xr.enabled;J.xr.enabled=!1;let R=$.texture.generateMipmaps;$.texture.generateMipmaps=!1;let I=!1;if(J.isWebGLRenderer===!0)I=J.state.buffers.depth.getReversed();else I=J.reversedDepthBuffer;if(J.setRenderTarget($,0,Z),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,K),J.setRenderTarget($,1,Z),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,W),J.setRenderTarget($,2,Z),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,X),J.setRenderTarget($,3,Z),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),J.setRenderTarget($,4,Z),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,U),$.texture.generateMipmaps=R,J.setRenderTarget($,5,Z),I&&J.autoClear===!1)J.clearDepth();J.render(Q,H),J.setRenderTarget(G,N,q),J.xr.enabled=F,$.texture.needsPMREMUpdate=!0}}class UK extends rJ{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}var HK="\\[\\]\\.:\\/",yU=new RegExp("["+HK+"]","g"),qK="[^"+HK+"]",bU="[^"+HK.replace("\\.","")+"]",hU=/((?:WC+[\/:])*)/.source.replace("WC",qK),xU=/(WCOD+)?/.source.replace("WCOD",bU),gU=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qK),pU=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qK),mU=new RegExp("^"+hU+xU+gU+pU+"$"),lU=["material","materials","bones","map"];class jX{constructor(J,Q,$){let Z=$||kJ.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,Z)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,Z=this._bindings[$];if(Z!==void 0)Z.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,K=$.length;Z!==K;++Z)$[Z].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class kJ{constructor(J,Q,$){this.path=Q,this.parsedPath=$||kJ.parseTrackName(Q),this.node=kJ.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new kJ(J,Q,$);else return new kJ.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(yU,"")}static parseTrackName(J){let Q=mU.exec(J);if(Q===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},Z=$.nodeName&&$.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let K=$.nodeName.substring(Z+1);if(lU.indexOf(K)!==-1)$.nodeName=$.nodeName.substring(0,Z),$.objectName=K}if($.propertyName===null||$.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(K){for(let W=0;W<K.length;W++){let X=K[W];if(X.name===Q||X.uuid===Q)return X;let Y=$(X.children);if(Y)return Y}return null},Z=$(J.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)J[Q++]=$[Z]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,Z=Q.propertyName,K=Q.propertyIndex;if(!J)J=kJ.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){l0("PropertyBinding: No target node found for track: "+this.path+".");return}if($){let U=Q.objectIndex;switch($){case"materials":if(!J.material){m0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){m0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){m0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let H=0;H<J.length;H++)if(J[H].name===U){U=H;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){m0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){m0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){m0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(U!==void 0){if(J[U]===void 0){m0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[U]}}let W=J[Z];if(W===void 0){let U=Q.nodeName;m0("PropertyBinding: Trying to update property for track: "+U+"."+Z+" but it wasn't found.",J);return}let X=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)X=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)X=this.Versioning.MatrixWorldNeedsUpdate;let Y=this.BindingType.Direct;if(K!==void 0){if(Z==="morphTargetInfluences"){if(!J.geometry){m0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){m0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[K]!==void 0)K=J.morphTargetDictionary[K]}Y=this.BindingType.ArrayElement,this.resolvedProperty=W,this.propertyIndex=K}else if(W.fromArray!==void 0&&W.toArray!==void 0)Y=this.BindingType.HasFromToArray,this.resolvedProperty=W;else if(Array.isArray(W))Y=this.BindingType.EntireArray,this.resolvedProperty=W;else this.propertyName=Z;this.getValue=this.GetterByBindingType[Y],this.setValue=this.SetterByBindingTypeAndVersioning[Y][X]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}kJ.Composite=jX;kJ.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};kJ.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};kJ.prototype.GetterByBindingType=[kJ.prototype._getValue_direct,kJ.prototype._getValue_array,kJ.prototype._getValue_arrayElement,kJ.prototype._getValue_toArray];kJ.prototype.SetterByBindingTypeAndVersioning=[[kJ.prototype._setValue_direct,kJ.prototype._setValue_direct_setNeedsUpdate,kJ.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[kJ.prototype._setValue_array,kJ.prototype._setValue_array_setNeedsUpdate,kJ.prototype._setValue_array_setMatrixWorldNeedsUpdate],[kJ.prototype._setValue_arrayElement,kJ.prototype._setValue_arrayElement_setNeedsUpdate,kJ.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[kJ.prototype._setValue_fromArray,kJ.prototype._setValue_fromArray_setNeedsUpdate,kJ.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var iG=new Float32Array(1);var LW=new VJ;class bQ{constructor(J,Q,$=0,Z=1/0){this.ray=new BQ(J,Q),this.near=$,this.far=Z,this.camera=null,this.layers=new Y6,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(J,Q){this.ray.set(J,Q)}setFromCamera(J,Q){if(Q.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(Q.matrixWorld),this.ray.direction.set(J.x,J.y,0.5).unproject(Q).sub(this.ray.origin).normalize(),this.camera=Q;else if(Q.isOrthographicCamera)this.ray.origin.set(J.x,J.y,Q.projectionMatrix.elements[14]).unproject(Q),this.ray.direction.set(0,0,-1).transformDirection(Q.matrixWorld),this.camera=Q;else m0("Raycaster: Unsupported camera type: "+Q.type)}setFromXRController(J){return LW.identity().extractRotation(J.matrixWorld),this.ray.origin.setFromMatrixPosition(J.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(LW),this}intersectObject(J,Q=!0,$=[]){return y$(J,this,$,Q),$.sort(zW),$}intersectObjects(J,Q=!0,$=[]){for(let Z=0,K=J.length;Z<K;Z++)y$(J[Z],this,$,Q);return $.sort(zW),$}}function zW(J,Q){return J.distance-Q.distance}function y$(J,Q,$,Z){let K=!0;if(J.layers.test(Q.layers)){if(J.raycast(Q,$)===!1)K=!1}if(K===!0&&Z===!0){let W=J.children;for(let X=0,Y=W.length;X<Y;X++)y$(W[X],Q,$,!0)}}class GK{static{GK.prototype.isMatrix2=!0}constructor(J,Q,$,Z){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,$,Z)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let $=0;$<4;$++)this.elements[$]=J[$+Q];return this}set(J,Q,$,Z){let K=this.elements;return K[0]=J,K[2]=Q,K[1]=$,K[3]=Z,this}}function NK(J,Q,$,Z){let K=dU(Z);switch($){case 1021:return J*Q;case 1028:return J*Q/K.components*K.byteLength;case 1029:return J*Q/K.components*K.byteLength;case 1030:return J*Q*2/K.components*K.byteLength;case 1031:return J*Q*2/K.components*K.byteLength;case 1022:return J*Q*3/K.components*K.byteLength;case 1023:return J*Q*4/K.components*K.byteLength;case 1033:return J*Q*4/K.components*K.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function dU(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));if(typeof window<"u")if(window.__THREE__)l0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="185";function QY(){let J=null,Q=!1,$=null,Z=null;function K(W,X){$(W,X),Z=J.requestAnimationFrame(K)}return{start:function(){if(Q===!0)return;if($===null)return;if(J===null)return;Z=J.requestAnimationFrame(K),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(Z);Q=!1},setAnimationLoop:function(W){$=W},setContext:function(W){J=W}}}function uU(J){let Q=new WeakMap;function $(Y,U){let{array:H,usage:G}=Y,N=H.byteLength,q=J.createBuffer();J.bindBuffer(U,q),J.bufferData(U,H,G),Y.onUploadCallback();let F;if(H instanceof Float32Array)F=J.FLOAT;else if(typeof Float16Array<"u"&&H instanceof Float16Array)F=J.HALF_FLOAT;else if(H instanceof Uint16Array)if(Y.isFloat16BufferAttribute)F=J.HALF_FLOAT;else F=J.UNSIGNED_SHORT;else if(H instanceof Int16Array)F=J.SHORT;else if(H instanceof Uint32Array)F=J.UNSIGNED_INT;else if(H instanceof Int32Array)F=J.INT;else if(H instanceof Int8Array)F=J.BYTE;else if(H instanceof Uint8Array)F=J.UNSIGNED_BYTE;else if(H instanceof Uint8ClampedArray)F=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+H);return{buffer:q,type:F,bytesPerElement:H.BYTES_PER_ELEMENT,version:Y.version,size:N}}function Z(Y,U,H){let{array:G,updateRanges:N}=U;if(J.bindBuffer(H,Y),N.length===0)J.bufferSubData(H,0,G);else{N.sort((F,R)=>F.start-R.start);let q=0;for(let F=1;F<N.length;F++){let R=N[q],I=N[F];if(I.start<=R.start+R.count+1)R.count=Math.max(R.count,I.start+I.count-R.start);else++q,N[q]=I}N.length=q+1;for(let F=0,R=N.length;F<R;F++){let I=N[F];J.bufferSubData(H,I.start*G.BYTES_PER_ELEMENT,G,I.start,I.count)}U.clearUpdateRanges()}U.onUploadCallback()}function K(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;return Q.get(Y)}function W(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;let U=Q.get(Y);if(U)J.deleteBuffer(U.buffer),Q.delete(Y)}function X(Y,U){if(Y.isInterleavedBufferAttribute)Y=Y.data;if(Y.isGLBufferAttribute){let G=Q.get(Y);if(!G||G.version<Y.version)Q.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}let H=Q.get(Y);if(H===void 0)Q.set(Y,$(Y,U));else if(H.version<Y.version){if(H.size!==Y.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(H.buffer,Y,U),H.version=Y.version}}return{get:K,remove:W,update:X}}var cU=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nU=`#ifdef USE_ALPHAHASH
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
#endif`,sU=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iU=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oU=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,aU=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rU=`#ifdef USE_AOMAP
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
#endif`,tU=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eU=`#ifdef USE_BATCHING
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
#endif`,JH=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,QH=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$H=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ZH=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,KH=`#ifdef USE_IRIDESCENCE
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
#endif`,WH=`#ifdef USE_BUMPMAP
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
#endif`,XH=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,YH=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,UH=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,HH=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qH=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,GH=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,NH=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,FH=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,OH=`#define PI 3.141592653589793
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
} // validated`,EH=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,DH=`vec3 transformedNormal = objectNormal;
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
#endif`,RH=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kH=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,VH=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,LH=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zH="gl_FragColor = linearToOutputTexel( gl_FragColor );",BH=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,MH=`#ifdef USE_ENVMAP
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
#endif`,IH=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,AH=`#ifdef USE_ENVMAP
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
#endif`,PH=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,CH=`#ifdef USE_ENVMAP
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
#endif`,_H=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wH=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,TH=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,SH=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jH=`#ifdef USE_GRADIENTMAP
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
}`,vH=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fH=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yH=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bH=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,hH=`#ifdef USE_ENVMAP
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
#endif`,xH=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gH=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pH=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mH=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lH=`PhysicalMaterial material;
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
#endif`,dH=`uniform sampler2D dfgLUT;
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
}`,uH=`
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
#endif`,cH=`#if defined( RE_IndirectDiffuse )
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
#endif`,nH=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sH=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,iH=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oH=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aH=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rH=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tH=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eH=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,J5=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Q5=`#if defined( USE_POINTS_UV )
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
#endif`,$5=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Z5=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,K5=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,W5=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,X5=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Y5=`#ifdef USE_MORPHTARGETS
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
#endif`,U5=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H5=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,q5=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,G5=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N5=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F5=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,O5=`#ifdef USE_NORMALMAP
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
#endif`,E5=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,D5=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,R5=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,k5=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,V5=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,L5=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,z5=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,B5=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,M5=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,I5=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,A5=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,P5=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,C5=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_5=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,w5=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,T5=`float getShadowMask() {
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
}`,S5=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,j5=`#ifdef USE_SKINNING
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
#endif`,v5=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,f5=`#ifdef USE_SKINNING
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
#endif`,y5=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,b5=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,h5=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,x5=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,g5=`#ifdef USE_TRANSMISSION
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
#endif`,p5=`#ifdef USE_TRANSMISSION
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
#endif`,m5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u5=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,c5=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,n5=`uniform sampler2D t2D;
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
}`,s5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i5=`#ifdef ENVMAP_TYPE_CUBE
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
}`,o5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a5=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r5=`#include <common>
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
}`,t5=`#if DEPTH_PACKING == 3200
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
}`,e5=`#define DISTANCE
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
}`,Jq=`#define DISTANCE
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
}`,Qq=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$q=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zq=`uniform float scale;
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
}`,Kq=`uniform vec3 diffuse;
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
}`,Wq=`#include <common>
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
}`,Xq=`uniform vec3 diffuse;
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
}`,Yq=`#define LAMBERT
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
}`,Uq=`#define LAMBERT
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
}`,Hq=`#define MATCAP
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
}`,qq=`#define MATCAP
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
}`,Gq=`#define NORMAL
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
}`,Nq=`#define NORMAL
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
}`,Fq=`#define PHONG
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
}`,Oq=`#define PHONG
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
}`,Eq=`#define STANDARD
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
}`,Dq=`#define STANDARD
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
}`,Rq=`#define TOON
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
}`,kq=`#define TOON
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
}`,Vq=`uniform float size;
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
}`,Lq=`uniform vec3 diffuse;
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
}`,zq=`#include <common>
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
}`,Bq=`uniform vec3 color;
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
}`,Mq=`uniform float rotation;
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
}`,Iq=`uniform vec3 diffuse;
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
}`,$J={alphahash_fragment:cU,alphahash_pars_fragment:nU,alphamap_fragment:sU,alphamap_pars_fragment:iU,alphatest_fragment:oU,alphatest_pars_fragment:aU,aomap_fragment:rU,aomap_pars_fragment:tU,batching_pars_vertex:eU,batching_vertex:JH,begin_vertex:QH,beginnormal_vertex:$H,bsdfs:ZH,iridescence_fragment:KH,bumpmap_pars_fragment:WH,clipping_planes_fragment:XH,clipping_planes_pars_fragment:YH,clipping_planes_pars_vertex:UH,clipping_planes_vertex:HH,color_fragment:qH,color_pars_fragment:GH,color_pars_vertex:NH,color_vertex:FH,common:OH,cube_uv_reflection_fragment:EH,defaultnormal_vertex:DH,displacementmap_pars_vertex:RH,displacementmap_vertex:kH,emissivemap_fragment:VH,emissivemap_pars_fragment:LH,colorspace_fragment:zH,colorspace_pars_fragment:BH,envmap_fragment:MH,envmap_common_pars_fragment:IH,envmap_pars_fragment:AH,envmap_pars_vertex:PH,envmap_physical_pars_fragment:hH,envmap_vertex:CH,fog_vertex:_H,fog_pars_vertex:wH,fog_fragment:TH,fog_pars_fragment:SH,gradientmap_pars_fragment:jH,lightmap_pars_fragment:vH,lights_lambert_fragment:fH,lights_lambert_pars_fragment:yH,lights_pars_begin:bH,lights_toon_fragment:xH,lights_toon_pars_fragment:gH,lights_phong_fragment:pH,lights_phong_pars_fragment:mH,lights_physical_fragment:lH,lights_physical_pars_fragment:dH,lights_fragment_begin:uH,lights_fragment_maps:cH,lights_fragment_end:nH,lightprobes_pars_fragment:sH,logdepthbuf_fragment:iH,logdepthbuf_pars_fragment:oH,logdepthbuf_pars_vertex:aH,logdepthbuf_vertex:rH,map_fragment:tH,map_pars_fragment:eH,map_particle_fragment:J5,map_particle_pars_fragment:Q5,metalnessmap_fragment:$5,metalnessmap_pars_fragment:Z5,morphinstance_vertex:K5,morphcolor_vertex:W5,morphnormal_vertex:X5,morphtarget_pars_vertex:Y5,morphtarget_vertex:U5,normal_fragment_begin:H5,normal_fragment_maps:q5,normal_pars_fragment:G5,normal_pars_vertex:N5,normal_vertex:F5,normalmap_pars_fragment:O5,clearcoat_normal_fragment_begin:E5,clearcoat_normal_fragment_maps:D5,clearcoat_pars_fragment:R5,iridescence_pars_fragment:k5,opaque_fragment:V5,packing:L5,premultiplied_alpha_fragment:z5,project_vertex:B5,dithering_fragment:M5,dithering_pars_fragment:I5,roughnessmap_fragment:A5,roughnessmap_pars_fragment:P5,shadowmap_pars_fragment:C5,shadowmap_pars_vertex:_5,shadowmap_vertex:w5,shadowmask_pars_fragment:T5,skinbase_vertex:S5,skinning_pars_vertex:j5,skinning_vertex:v5,skinnormal_vertex:f5,specularmap_fragment:y5,specularmap_pars_fragment:b5,tonemapping_fragment:h5,tonemapping_pars_fragment:x5,transmission_fragment:g5,transmission_pars_fragment:p5,uv_pars_fragment:m5,uv_pars_vertex:l5,uv_vertex:d5,worldpos_vertex:u5,background_vert:c5,background_frag:n5,backgroundCube_vert:s5,backgroundCube_frag:i5,cube_vert:o5,cube_frag:a5,depth_vert:r5,depth_frag:t5,distance_vert:e5,distance_frag:Jq,equirect_vert:Qq,equirect_frag:$q,linedashed_vert:Zq,linedashed_frag:Kq,meshbasic_vert:Wq,meshbasic_frag:Xq,meshlambert_vert:Yq,meshlambert_frag:Uq,meshmatcap_vert:Hq,meshmatcap_frag:qq,meshnormal_vert:Gq,meshnormal_frag:Nq,meshphong_vert:Fq,meshphong_frag:Oq,meshphysical_vert:Eq,meshphysical_frag:Dq,meshtoon_vert:Rq,meshtoon_frag:kq,points_vert:Vq,points_frag:Lq,shadow_vert:zq,shadow_frag:Bq,sprite_vert:Mq,sprite_frag:Iq},B0={common:{diffuse:{value:new KJ(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new o0},alphaMap:{value:null},alphaMapTransform:{value:new o0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new o0}},envmap:{envMap:{value:null},envMapRotation:{value:new o0},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new o0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new o0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new o0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new o0},normalScale:{value:new E0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new o0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new o0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new o0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new o0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new KJ(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new v},probesMax:{value:new v},probesResolution:{value:new v}},points:{diffuse:{value:new KJ(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new o0},alphaTest:{value:0},uvTransform:{value:new o0}},sprite:{diffuse:{value:new KJ(16777215)},opacity:{value:1},center:{value:new E0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new o0},alphaMap:{value:null},alphaMapTransform:{value:new o0},alphaTest:{value:0}}},n9={basic:{uniforms:J9([B0.common,B0.specularmap,B0.envmap,B0.aomap,B0.lightmap,B0.fog]),vertexShader:$J.meshbasic_vert,fragmentShader:$J.meshbasic_frag},lambert:{uniforms:J9([B0.common,B0.specularmap,B0.envmap,B0.aomap,B0.lightmap,B0.emissivemap,B0.bumpmap,B0.normalmap,B0.displacementmap,B0.fog,B0.lights,{emissive:{value:new KJ(0)},envMapIntensity:{value:1}}]),vertexShader:$J.meshlambert_vert,fragmentShader:$J.meshlambert_frag},phong:{uniforms:J9([B0.common,B0.specularmap,B0.envmap,B0.aomap,B0.lightmap,B0.emissivemap,B0.bumpmap,B0.normalmap,B0.displacementmap,B0.fog,B0.lights,{emissive:{value:new KJ(0)},specular:{value:new KJ(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$J.meshphong_vert,fragmentShader:$J.meshphong_frag},standard:{uniforms:J9([B0.common,B0.envmap,B0.aomap,B0.lightmap,B0.emissivemap,B0.bumpmap,B0.normalmap,B0.displacementmap,B0.roughnessmap,B0.metalnessmap,B0.fog,B0.lights,{emissive:{value:new KJ(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$J.meshphysical_vert,fragmentShader:$J.meshphysical_frag},toon:{uniforms:J9([B0.common,B0.aomap,B0.lightmap,B0.emissivemap,B0.bumpmap,B0.normalmap,B0.displacementmap,B0.gradientmap,B0.fog,B0.lights,{emissive:{value:new KJ(0)}}]),vertexShader:$J.meshtoon_vert,fragmentShader:$J.meshtoon_frag},matcap:{uniforms:J9([B0.common,B0.bumpmap,B0.normalmap,B0.displacementmap,B0.fog,{matcap:{value:null}}]),vertexShader:$J.meshmatcap_vert,fragmentShader:$J.meshmatcap_frag},points:{uniforms:J9([B0.points,B0.fog]),vertexShader:$J.points_vert,fragmentShader:$J.points_frag},dashed:{uniforms:J9([B0.common,B0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$J.linedashed_vert,fragmentShader:$J.linedashed_frag},depth:{uniforms:J9([B0.common,B0.displacementmap]),vertexShader:$J.depth_vert,fragmentShader:$J.depth_frag},normal:{uniforms:J9([B0.common,B0.bumpmap,B0.normalmap,B0.displacementmap,{opacity:{value:1}}]),vertexShader:$J.meshnormal_vert,fragmentShader:$J.meshnormal_frag},sprite:{uniforms:J9([B0.sprite,B0.fog]),vertexShader:$J.sprite_vert,fragmentShader:$J.sprite_frag},background:{uniforms:{uvTransform:{value:new o0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$J.background_vert,fragmentShader:$J.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new o0}},vertexShader:$J.backgroundCube_vert,fragmentShader:$J.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$J.cube_vert,fragmentShader:$J.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$J.equirect_vert,fragmentShader:$J.equirect_frag},distance:{uniforms:J9([B0.common,B0.displacementmap,{referencePosition:{value:new v},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:$J.distance_vert,fragmentShader:$J.distance_frag},shadow:{uniforms:J9([B0.lights,B0.fog,{color:{value:new KJ(0)},opacity:{value:1}}]),vertexShader:$J.shadow_vert,fragmentShader:$J.shadow_frag}};n9.physical={uniforms:J9([n9.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new o0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new o0},clearcoatNormalScale:{value:new E0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new o0},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new o0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new o0},sheen:{value:0},sheenColor:{value:new KJ(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new o0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new o0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new o0},transmissionSamplerSize:{value:new E0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new o0},attenuationDistance:{value:0},attenuationColor:{value:new KJ(0)},specularColor:{value:new KJ(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new o0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new o0},anisotropyVector:{value:new E0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new o0}}]),vertexShader:$J.meshphysical_vert,fragmentShader:$J.meshphysical_frag};var hQ={r:0,b:0,g:0},Aq=new VJ,$Y=new o0;$Y.set(-1,0,0,0,1,0,0,0,1);function Pq(J,Q,$,Z,K,W){let X=new KJ(0),Y=K===!0?0:1,U,H,G=null,N=0,q=null;function F(w){let P=w.isScene===!0?w.background:null;if(P&&P.isTexture){let L=w.backgroundBlurriness>0;P=Q.get(P,L)}return P}function R(w){let P=!1,L=F(w);if(L===null)O(X,Y);else if(L&&L.isColor)O(L,1),P=!0;let A=J.xr.getEnvironmentBlendMode();if(A==="additive")$.buffers.color.setClear(0,0,0,1,W);else if(A==="alpha-blend")$.buffers.color.setClear(0,0,0,0,W);if(J.autoClear||P)$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function I(w,P){let L=F(P);if(L&&(L.isCubeTexture||L.mapping===Z6)){if(H===void 0)H=new h0(new CJ(1,1,1),new I9({name:"BackgroundCubeMaterial",uniforms:l8(n9.backgroundCube.uniforms),vertexShader:n9.backgroundCube.vertexShader,fragmentShader:n9.backgroundCube.fragmentShader,side:eJ,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),H.geometry.deleteAttribute("normal"),H.geometry.deleteAttribute("uv"),H.onBeforeRender=function(A,C,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(H.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),Z.update(H);if(H.material.uniforms.envMap.value=L,H.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,H.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,H.material.uniforms.backgroundRotation.value.setFromMatrix4(Aq.makeRotationFromEuler(P.backgroundRotation)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1)H.material.uniforms.backgroundRotation.value.premultiply($Y);if(H.material.toneMapped=XJ.getTransfer(L.colorSpace)!==zJ,G!==L||N!==L.version||q!==J.toneMapping)H.material.needsUpdate=!0,G=L,N=L.version,q=J.toneMapping;H.layers.enableAll(),w.unshift(H,H.geometry,H.material,0,0,null)}else if(L&&L.isTexture){if(U===void 0)U=new h0(new dJ(2,2),new I9({name:"BackgroundMaterial",uniforms:l8(n9.background.uniforms),vertexShader:n9.background.vertexShader,fragmentShader:n9.background.fragmentShader,side:V7,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),Object.defineProperty(U.material,"map",{get:function(){return this.uniforms.t2D.value}}),Z.update(U);if(U.material.uniforms.t2D.value=L,U.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,U.material.toneMapped=XJ.getTransfer(L.colorSpace)!==zJ,L.matrixAutoUpdate===!0)L.updateMatrix();if(U.material.uniforms.uvTransform.value.copy(L.matrix),G!==L||N!==L.version||q!==J.toneMapping)U.material.needsUpdate=!0,G=L,N=L.version,q=J.toneMapping;U.layers.enableAll(),w.unshift(U,U.geometry,U.material,0,0,null)}}function O(w,P){w.getRGB(hQ,nZ(J)),$.buffers.color.setClear(hQ.r,hQ.g,hQ.b,P,W)}function E(){if(H!==void 0)H.geometry.dispose(),H.material.dispose(),H=void 0;if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0}return{getClearColor:function(){return X},setClearColor:function(w,P=1){X.set(w),Y=P,O(X,Y)},getClearAlpha:function(){return Y},setClearAlpha:function(w){Y=w,O(X,Y)},render:R,addToRenderList:I,dispose:E}}function Cq(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),Z={},K=q(null),W=K,X=!1;function Y(D,m,o,b,c){let s=!1,x=N(D,b,o,m);if(W!==x)W=x,H(W.object);if(s=F(D,b,o,c),s)R(D,b,o,c);if(c!==null)Q.update(c,J.ELEMENT_ARRAY_BUFFER);if(s||X){if(X=!1,L(D,m,o,b),c!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(c).buffer)}}function U(){return J.createVertexArray()}function H(D){return J.bindVertexArray(D)}function G(D){return J.deleteVertexArray(D)}function N(D,m,o,b){let c=b.wireframe===!0,s=Z[m.id];if(s===void 0)s={},Z[m.id]=s;let x=D.isInstancedMesh===!0?D.id:0,J0=s[x];if(J0===void 0)J0={},s[x]=J0;let W0=J0[o.id];if(W0===void 0)W0={},J0[o.id]=W0;let H0=W0[c];if(H0===void 0)H0=q(U()),W0[c]=H0;return H0}function q(D){let m=[],o=[],b=[];for(let c=0;c<$;c++)m[c]=0,o[c]=0,b[c]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:m,enabledAttributes:o,attributeDivisors:b,object:D,attributes:{},index:null}}function F(D,m,o,b){let c=W.attributes,s=m.attributes,x=0,J0=o.getAttributes();for(let W0 in J0)if(J0[W0].location>=0){let C0=c[W0],D0=s[W0];if(D0===void 0){if(W0==="instanceMatrix"&&D.instanceMatrix)D0=D.instanceMatrix;if(W0==="instanceColor"&&D.instanceColor)D0=D.instanceColor}if(C0===void 0)return!0;if(C0.attribute!==D0)return!0;if(D0&&C0.data!==D0.data)return!0;x++}if(W.attributesNum!==x)return!0;if(W.index!==b)return!0;return!1}function R(D,m,o,b){let c={},s=m.attributes,x=0,J0=o.getAttributes();for(let W0 in J0)if(J0[W0].location>=0){let C0=s[W0];if(C0===void 0){if(W0==="instanceMatrix"&&D.instanceMatrix)C0=D.instanceMatrix;if(W0==="instanceColor"&&D.instanceColor)C0=D.instanceColor}let D0={};if(D0.attribute=C0,C0&&C0.data)D0.data=C0.data;c[W0]=D0,x++}W.attributes=c,W.attributesNum=x,W.index=b}function I(){let D=W.newAttributes;for(let m=0,o=D.length;m<o;m++)D[m]=0}function O(D){E(D,0)}function E(D,m){let{newAttributes:o,enabledAttributes:b,attributeDivisors:c}=W;if(o[D]=1,b[D]===0)J.enableVertexAttribArray(D),b[D]=1;if(c[D]!==m)J.vertexAttribDivisor(D,m),c[D]=m}function w(){let{newAttributes:D,enabledAttributes:m}=W;for(let o=0,b=m.length;o<b;o++)if(m[o]!==D[o])J.disableVertexAttribArray(o),m[o]=0}function P(D,m,o,b,c,s,x){if(x===!0)J.vertexAttribIPointer(D,m,o,c,s);else J.vertexAttribPointer(D,m,o,b,c,s)}function L(D,m,o,b){I();let c=b.attributes,s=o.getAttributes(),x=m.defaultAttributeValues;for(let J0 in s){let W0=s[J0];if(W0.location>=0){let H0=c[J0];if(H0===void 0){if(J0==="instanceMatrix"&&D.instanceMatrix)H0=D.instanceMatrix;if(J0==="instanceColor"&&D.instanceColor)H0=D.instanceColor}if(H0!==void 0){let{normalized:C0,itemSize:D0}=H0,HJ=Q.get(H0);if(HJ===void 0)continue;let{buffer:UJ,type:a,bytesPerElement:q0}=HJ,L0=a===J.INT||a===J.UNSIGNED_INT||H0.gpuType===s$;if(H0.isInterleavedBufferAttribute){let N0=H0.data,y0=N0.stride,ZJ=H0.offset;if(N0.isInstancedInterleavedBuffer){for(let d0=0;d0<W0.locationSize;d0++)E(W0.location+d0,N0.meshPerAttribute);if(D.isInstancedMesh!==!0&&b._maxInstanceCount===void 0)b._maxInstanceCount=N0.meshPerAttribute*N0.count}else for(let d0=0;d0<W0.locationSize;d0++)O(W0.location+d0);J.bindBuffer(J.ARRAY_BUFFER,UJ);for(let d0=0;d0<W0.locationSize;d0++)P(W0.location+d0,D0/W0.locationSize,a,C0,y0*q0,(ZJ+D0/W0.locationSize*d0)*q0,L0)}else{if(H0.isInstancedBufferAttribute){for(let N0=0;N0<W0.locationSize;N0++)E(W0.location+N0,H0.meshPerAttribute);if(D.isInstancedMesh!==!0&&b._maxInstanceCount===void 0)b._maxInstanceCount=H0.meshPerAttribute*H0.count}else for(let N0=0;N0<W0.locationSize;N0++)O(W0.location+N0);J.bindBuffer(J.ARRAY_BUFFER,UJ);for(let N0=0;N0<W0.locationSize;N0++)P(W0.location+N0,D0/W0.locationSize,a,C0,D0*q0,D0/W0.locationSize*N0*q0,L0)}}else if(x!==void 0){let C0=x[J0];if(C0!==void 0)switch(C0.length){case 2:J.vertexAttrib2fv(W0.location,C0);break;case 3:J.vertexAttrib3fv(W0.location,C0);break;case 4:J.vertexAttrib4fv(W0.location,C0);break;default:J.vertexAttrib1fv(W0.location,C0)}}}}w()}function A(){M();for(let D in Z){let m=Z[D];for(let o in m){let b=m[o];for(let c in b){let s=b[c];for(let x in s)G(s[x].object),delete s[x];delete b[c]}}delete Z[D]}}function C(D){if(Z[D.id]===void 0)return;let m=Z[D.id];for(let o in m){let b=m[o];for(let c in b){let s=b[c];for(let x in s)G(s[x].object),delete s[x];delete b[c]}}delete Z[D.id]}function _(D){for(let m in Z){let o=Z[m];for(let b in o){let c=o[b];if(c[D.id]===void 0)continue;let s=c[D.id];for(let x in s)G(s[x].object),delete s[x];delete c[D.id]}}}function V(D){for(let m in Z){let o=Z[m],b=D.isInstancedMesh===!0?D.id:0,c=o[b];if(c===void 0)continue;for(let s in c){let x=c[s];for(let J0 in x)G(x[J0].object),delete x[J0];delete c[s]}if(delete o[b],Object.keys(o).length===0)delete Z[m]}}function M(){if(l(),X=!0,W===K)return;W=K,H(W.object)}function l(){K.geometry=null,K.program=null,K.wireframe=!1}return{setup:Y,reset:M,resetDefaultState:l,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfObject:V,releaseStatesOfProgram:_,initAttributes:I,enableAttribute:O,disableUnusedAttributes:w}}function _q(J,Q,$){let Z;function K(U){Z=U}function W(U,H){J.drawArrays(Z,U,H),$.update(H,Z,1)}function X(U,H,G){if(G===0)return;J.drawArraysInstanced(Z,U,H,G),$.update(H,Z,G)}function Y(U,H,G){if(G===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,U,0,H,0,G);let q=0;for(let F=0;F<G;F++)q+=H[F];$.update(q,Z,1)}this.setMode=K,this.render=W,this.renderInstances=X,this.renderMultiDraw=Y}function wq(J,Q,$,Z){let K;function W(){if(K!==void 0)return K;if(Q.has("EXT_texture_filter_anisotropic")===!0){let _=Q.get("EXT_texture_filter_anisotropic");K=J.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else K=0;return K}function X(_){if(_!==d9&&Z.convert(_)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Y(_){let V=_===K8&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(_!==y9&&Z.convert(_)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&_!==Z8&&!V)return!1;return!0}function U(_){if(_==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";_="mediump"}if(_==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let H=$.precision!==void 0?$.precision:"highp",G=U(H);if(G!==H)l0("WebGLRenderer:",H,"not supported, using",G,"instead."),H=G;let N=$.logarithmicDepthBuffer===!0,q=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control");if($.reversedDepthBuffer===!0&&q===!1)l0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let F=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),R=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),I=J.getParameter(J.MAX_TEXTURE_SIZE),O=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),E=J.getParameter(J.MAX_VERTEX_ATTRIBS),w=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),P=J.getParameter(J.MAX_VARYING_VECTORS),L=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),A=J.getParameter(J.MAX_SAMPLES),C=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:W,getMaxPrecision:U,textureFormatReadable:X,textureTypeReadable:Y,precision:H,logarithmicDepthBuffer:N,reversedDepthBuffer:q,maxTextures:F,maxVertexTextures:R,maxTextureSize:I,maxCubemapSize:O,maxAttributes:E,maxVertexUniforms:w,maxVaryings:P,maxFragmentUniforms:L,maxSamples:A,samples:C}}function Tq(J){let Q=this,$=null,Z=0,K=!1,W=!1,X=new J8,Y=new o0,U={value:null,needsUpdate:!1};this.uniform=U,this.numPlanes=0,this.numIntersection=0,this.init=function(N,q){let F=N.length!==0||q||Z!==0||K;return K=q,Z=N.length,F},this.beginShadows=function(){W=!0,G(null)},this.endShadows=function(){W=!1},this.setGlobalState=function(N,q){$=G(N,q,0)},this.setState=function(N,q,F){let{clippingPlanes:R,clipIntersection:I,clipShadows:O}=N,E=J.get(N);if(!K||R===null||R.length===0||W&&!O)if(W)G(null);else H();else{let w=W?0:Z,P=w*4,L=E.clippingState||null;U.value=L,L=G(R,q,P,F);for(let A=0;A!==P;++A)L[A]=$[A];E.clippingState=L,this.numIntersection=I?this.numPlanes:0,this.numPlanes+=w}};function H(){if(U.value!==$)U.value=$,U.needsUpdate=Z>0;Q.numPlanes=Z,Q.numIntersection=0}function G(N,q,F,R){let I=N!==null?N.length:0,O=null;if(I!==0){if(O=U.value,R!==!0||O===null){let E=F+I*4,w=q.matrixWorldInverse;if(Y.getNormalMatrix(w),O===null||O.length<E)O=new Float32Array(E);for(let P=0,L=F;P!==I;++P,L+=4)X.copy(N[P]).applyMatrix4(w,Y),X.normal.toArray(O,L),O[L+3]=X.constant}U.value=O,U.needsUpdate=!0}return Q.numPlanes=I,Q.numIntersection=0,O}}var B8=4,vX=[0.125,0.215,0.35,0.446,0.526,0.582],n8=20,Sq=256,E6=new O6,fX=new KJ,FK=null,OK=0,EK=0,DK=!1,jq=new v;class V6{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,Q=0,$=0.1,Z=100,K={}){let{size:W=256,position:X=jq}=K;FK=this._renderer.getRenderTarget(),OK=this._renderer.getActiveCubeFace(),EK=this._renderer.getActiveMipmapLevel(),DK=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(W);let Y=this._allocateTargets();if(Y.depthBuffer=!0,this._sceneToCubeUV(J,$,Z,Y,X),Q>0)this._blur(Y,0,0,Q);return this._applyPMREM(Y),this._cleanup(Y),Y}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=hX(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=bX(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget(FK,OK,EK),this._renderer.xr.enabled=DK,J.scissorTest=!1,C7(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===z7||J.mapping===b8)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);FK=this._renderer.getRenderTarget(),OK=this._renderer.getActiveCubeFace(),EK=this._renderer.getActiveMipmapLevel(),DK=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let $=Q||this._allocateTargets();return this._textureToCubeUV(J,$),this._applyPMREM($),this._cleanup($),$}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,$={magFilter:fJ,minFilter:fJ,generateMipmaps:!1,type:K8,format:d9,colorSpace:TZ,depthBuffer:!1},Z=yX(J,Q,$);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=yX(J,Q,$);let{_lodMax:K}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=vq(K)),this._blurMaterial=yq(K,J,Q),this._ggxMaterial=fq(K,J,Q)}return Z}_compileMaterial(J){let Q=new h0(new B9,J);this._renderer.compile(Q,E6)}_sceneToCubeUV(J,Q,$,Z,K){let Y=new rJ(90,1,Q,$),U=[1,-1,1,1,1,1],H=[1,1,1,-1,-1,-1],G=this._renderer,N=G.autoClear,q=G.toneMapping;if(G.getClearColor(fX),G.toneMapping=f9,G.autoClear=!1,G.state.buffers.depth.getReversed())G.setRenderTarget(Z),G.clearDepth(),G.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new h0(new CJ,new lJ({name:"PMREM.Background",side:eJ,depthWrite:!1,depthTest:!1}));let R=this._backgroundBox,I=R.material,O=!1,E=J.background;if(E){if(E.isColor)I.color.copy(E),J.background=null,O=!0}else I.color.copy(fX),O=!0;for(let w=0;w<6;w++){let P=w%3;if(P===0)Y.up.set(0,U[w],0),Y.position.set(K.x,K.y,K.z),Y.lookAt(K.x+H[w],K.y,K.z);else if(P===1)Y.up.set(0,0,U[w]),Y.position.set(K.x,K.y,K.z),Y.lookAt(K.x,K.y+H[w],K.z);else Y.up.set(0,U[w],0),Y.position.set(K.x,K.y,K.z),Y.lookAt(K.x,K.y,K.z+H[w]);let L=this._cubeSize;if(C7(Z,P*L,w>2?L:0,L,L),G.setRenderTarget(Z),O)G.render(R,Y);G.render(J,Y)}G.toneMapping=q,G.autoClear=N,J.background=E}_textureToCubeUV(J,Q){let $=this._renderer,Z=J.mapping===z7||J.mapping===b8;if(Z){if(this._cubemapMaterial===null)this._cubemapMaterial=hX();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=bX();let K=Z?this._cubemapMaterial:this._equirectMaterial,W=this._lodMeshes[0];W.material=K;let X=K.uniforms;X.envMap.value=J;let Y=this._cubeSize;C7(Q,0,0,3*Y,2*Y),$.setRenderTarget(Q),$.render(W,E6)}_applyPMREM(J){let Q=this._renderer,$=Q.autoClear;Q.autoClear=!1;let Z=this._lodMeshes.length;for(let K=1;K<Z;K++)this._applyGGXFilter(J,K-1,K);Q.autoClear=$}_applyGGXFilter(J,Q,$){let Z=this._renderer,K=this._pingPongRenderTarget,W=this._ggxMaterial,X=this._lodMeshes[$];X.material=W;let Y=W.uniforms,U=$/(this._lodMeshes.length-1),H=Q/(this._lodMeshes.length-1),G=Math.sqrt(U*U-H*H),N=0+U*1.25,q=G*N,{_lodMax:F}=this,R=this._sizeLods[$],I=3*R*($>F-B8?$-F+B8:0),O=4*(this._cubeSize-R);Y.envMap.value=J.texture,Y.roughness.value=q,Y.mipInt.value=F-Q,C7(K,I,O,3*R,2*R),Z.setRenderTarget(K),Z.render(X,E6),Y.envMap.value=K.texture,Y.roughness.value=0,Y.mipInt.value=F-$,C7(J,I,O,3*R,2*R),Z.setRenderTarget(J),Z.render(X,E6)}_blur(J,Q,$,Z,K){let W=this._pingPongRenderTarget;this._halfBlur(J,W,Q,$,Z,"latitudinal",K),this._halfBlur(W,J,$,$,Z,"longitudinal",K)}_halfBlur(J,Q,$,Z,K,W,X){let Y=this._renderer,U=this._blurMaterial;if(W!=="latitudinal"&&W!=="longitudinal")m0("blur direction must be either latitudinal or longitudinal!");let H=3,G=this._lodMeshes[Z];G.material=U;let N=U.uniforms,q=this._sizeLods[$]-1,F=isFinite(K)?Math.PI/(2*q):2*Math.PI/(2*n8-1),R=K/F,I=isFinite(K)?1+Math.floor(H*R):n8;if(I>n8)l0(`sigmaRadians, ${K}, is too large and will clip, as it requested ${I} samples when the maximum is set to ${n8}`);let O=[],E=0;for(let C=0;C<n8;++C){let _=C/R,V=Math.exp(-_*_/2);if(O.push(V),C===0)E+=V;else if(C<I)E+=2*V}for(let C=0;C<O.length;C++)O[C]=O[C]/E;if(N.envMap.value=J.texture,N.samples.value=I,N.weights.value=O,N.latitudinal.value=W==="latitudinal",X)N.poleAxis.value=X;let{_lodMax:w}=this;N.dTheta.value=F,N.mipInt.value=w-$;let P=this._sizeLods[Z],L=3*P*(Z>w-B8?Z-w+B8:0),A=4*(this._cubeSize-P);C7(Q,L,A,3*P,2*P),Y.setRenderTarget(Q),Y.render(G,E6)}}function vq(J){let Q=[],$=[],Z=[],K=J,W=J-B8+1+vX.length;for(let X=0;X<W;X++){let Y=Math.pow(2,K);Q.push(Y);let U=1/Y;if(X>J-B8)U=vX[X-J+B8-1];else if(X===0)U=0;$.push(U);let H=1/(Y-2),G=-H,N=1+H,q=[G,G,N,G,N,N,G,G,N,N,G,N],F=6,R=6,I=3,O=2,E=1,w=new Float32Array(I*R*F),P=new Float32Array(O*R*F),L=new Float32Array(E*R*F);for(let C=0;C<F;C++){let _=C%3*2/3-1,V=C>2?0:-1,M=[_,V,0,_+0.6666666666666666,V,0,_+0.6666666666666666,V+1,0,_,V,0,_+0.6666666666666666,V+1,0,_,V+1,0];w.set(M,I*R*C),P.set(q,O*R*C);let l=[C,C,C,C,C,C];L.set(l,E*R*C)}let A=new B9;if(A.setAttribute("position",new q9(w,I)),A.setAttribute("uv",new q9(P,O)),A.setAttribute("faceIndex",new q9(L,E)),Z.push(new h0(A,null)),K>B8)K--}return{lodMeshes:Z,sizeLods:Q,sigmas:$}}function yX(J,Q,$){let Z=new z9(J,Q,$);return Z.texture.mapping=Z6,Z.texture.name="PMREM.cubeUv",Z.scissorTest=!0,Z}function C7(J,Q,$,Z,K){J.viewport.set(Q,$,Z,K),J.scissor.set(Q,$,Z,K)}function fq(J,Q,$){return new I9({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Sq,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gQ(),fragmentShader:`

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
		`,blending:l9,depthTest:!1,depthWrite:!1})}function yq(J,Q,$){let Z=new Float32Array(n8),K=new v(0,1,0);return new I9({name:"SphericalGaussianBlur",defines:{n:n8,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:Z},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:K}},vertexShader:gQ(),fragmentShader:`

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
		`,blending:l9,depthTest:!1,depthWrite:!1})}function bX(){return new I9({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gQ(),fragmentShader:`

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
		`,blending:l9,depthTest:!1,depthWrite:!1})}function hX(){return new I9({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gQ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:l9,depthTest:!1,depthWrite:!1})}function gQ(){return`

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
	`}class zK extends z9{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},Z=[$,$,$,$,$,$];this.texture=new IQ(Z),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},Z=new CJ(5,5,5),K=new I9({name:"CubemapFromEquirect",uniforms:l8($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:eJ,blending:l9});K.uniforms.tEquirect.value=Q;let W=new h0(Z,K),X=Q.minFilter;if(Q.minFilter===$8)Q.minFilter=fJ;return new YK(1,10,this).update(J,W),Q.minFilter=X,W.geometry.dispose(),W.material.dispose(),this}clear(J,Q=!0,$=!0,Z=!0){let K=J.getRenderTarget();for(let W=0;W<6;W++)J.setRenderTarget(this,W),J.clear(Q,$,Z);J.setRenderTarget(K)}}function bq(J){let Q=new WeakMap,$=new WeakMap,Z=null;function K(q,F=!1){if(q===null||q===void 0)return null;if(F)return X(q);return W(q)}function W(q){if(q&&q.isTexture){let F=q.mapping;if(F===XQ||F===YQ)if(Q.has(q)){let R=Q.get(q).texture;return Y(R,q.mapping)}else{let R=q.image;if(R&&R.height>0){let I=new zK(R.height);return I.fromEquirectangularTexture(J,q),Q.set(q,I),q.addEventListener("dispose",H),Y(I.texture,q.mapping)}else return null}}return q}function X(q){if(q&&q.isTexture){let F=q.mapping,R=F===XQ||F===YQ,I=F===z7||F===b8;if(R||I){let O=$.get(q),E=O!==void 0?O.texture.pmremVersion:0;if(q.isRenderTargetTexture&&q.pmremVersion!==E){if(Z===null)Z=new V6(J);return O=R?Z.fromEquirectangular(q,O):Z.fromCubemap(q,O),O.texture.pmremVersion=q.pmremVersion,$.set(q,O),O.texture}else if(O!==void 0)return O.texture;else{let w=q.image;if(R&&w&&w.height>0||I&&w&&U(w)){if(Z===null)Z=new V6(J);return O=R?Z.fromEquirectangular(q):Z.fromCubemap(q),O.texture.pmremVersion=q.pmremVersion,$.set(q,O),q.addEventListener("dispose",G),O.texture}else return null}}}return q}function Y(q,F){if(F===XQ)q.mapping=z7;else if(F===YQ)q.mapping=b8;return q}function U(q){let F=0,R=6;for(let I=0;I<R;I++)if(q[I]!==void 0)F++;return F===R}function H(q){let F=q.target;F.removeEventListener("dispose",H);let R=Q.get(F);if(R!==void 0)Q.delete(F),R.dispose()}function G(q){let F=q.target;F.removeEventListener("dispose",G);let R=$.get(F);if(R!==void 0)$.delete(F),R.dispose()}function N(){if(Q=new WeakMap,$=new WeakMap,Z!==null)Z.dispose(),Z=null}return{get:K,dispose:N}}function hq(J){let Q={};function $(Z){if(Q[Z]!==void 0)return Q[Z];let K=J.getExtension(Z);return Q[Z]=K,K}return{has:function(Z){return $(Z)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(Z){let K=$(Z);if(K===null)f8("WebGLRenderer: "+Z+" extension not supported.");return K}}}function xq(J,Q,$,Z){let K={},W=new WeakMap;function X(N){let q=N.target;if(q.index!==null)Q.remove(q.index);for(let R in q.attributes)Q.remove(q.attributes[R]);q.removeEventListener("dispose",X),delete K[q.id];let F=W.get(q);if(F)Q.remove(F),W.delete(q);if(Z.releaseStatesOfGeometry(q),q.isInstancedBufferGeometry===!0)delete q._maxInstanceCount;$.memory.geometries--}function Y(N,q){if(K[q.id]===!0)return q;return q.addEventListener("dispose",X),K[q.id]=!0,$.memory.geometries++,q}function U(N){let q=N.attributes;for(let F in q)Q.update(q[F],J.ARRAY_BUFFER)}function H(N){let q=[],F=N.index,R=N.attributes.position,I=0;if(R===void 0)return;if(F!==null){let w=F.array;I=F.version;for(let P=0,L=w.length;P<L;P+=3){let A=w[P+0],C=w[P+1],_=w[P+2];q.push(A,C,C,_,_,A)}}else{let w=R.array;I=R.version;for(let P=0,L=w.length/3-1;P<L;P+=3){let A=P+0,C=P+1,_=P+2;q.push(A,C,C,_,_,A)}}let O=new(R.count>=65535?zQ:LQ)(q,1);O.version=I;let E=W.get(N);if(E)Q.remove(E);W.set(N,O)}function G(N){let q=W.get(N);if(q){let F=N.index;if(F!==null){if(q.version<F.version)H(N)}}else H(N);return W.get(N)}return{get:Y,update:U,getWireframeAttribute:G}}function gq(J,Q,$){let Z;function K(N){Z=N}let W,X;function Y(N){W=N.type,X=N.bytesPerElement}function U(N,q){J.drawElements(Z,q,W,N*X),$.update(q,Z,1)}function H(N,q,F){if(F===0)return;J.drawElementsInstanced(Z,q,W,N*X,F),$.update(q,Z,F)}function G(N,q,F){if(F===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,q,0,W,N,0,F);let I=0;for(let O=0;O<F;O++)I+=q[O];$.update(I,Z,1)}this.setMode=K,this.setIndex=Y,this.render=U,this.renderInstances=H,this.renderMultiDraw=G}function pq(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(W,X,Y){switch($.calls++,X){case J.TRIANGLES:$.triangles+=Y*(W/3);break;case J.LINES:$.lines+=Y*(W/2);break;case J.LINE_STRIP:$.lines+=Y*(W-1);break;case J.LINE_LOOP:$.lines+=Y*W;break;case J.POINTS:$.points+=Y*W;break;default:m0("WebGLInfo: Unknown draw mode:",X);break}}function K(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:K,update:Z}}function mq(J,Q,$){let Z=new WeakMap,K=new PJ;function W(X,Y,U){let H=X.morphTargetInfluences,G=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,N=G!==void 0?G.length:0,q=Z.get(Y);if(q===void 0||q.count!==N){let M=function(){_.dispose(),Z.delete(Y),Y.removeEventListener("dispose",M)};if(q!==void 0)q.texture.dispose();let F=Y.morphAttributes.position!==void 0,R=Y.morphAttributes.normal!==void 0,I=Y.morphAttributes.color!==void 0,O=Y.morphAttributes.position||[],E=Y.morphAttributes.normal||[],w=Y.morphAttributes.color||[],P=0;if(F===!0)P=1;if(R===!0)P=2;if(I===!0)P=3;let L=Y.attributes.position.count*P,A=1;if(L>Q.maxTextureSize)A=Math.ceil(L/Q.maxTextureSize),L=Q.maxTextureSize;let C=new Float32Array(L*A*4*N),_=new VQ(C,L,A,N);_.type=Z8,_.needsUpdate=!0;let V=P*4;for(let l=0;l<N;l++){let D=O[l],m=E[l],o=w[l],b=L*A*4*l;for(let c=0;c<D.count;c++){let s=c*V;if(F===!0)K.fromBufferAttribute(D,c),C[b+s+0]=K.x,C[b+s+1]=K.y,C[b+s+2]=K.z,C[b+s+3]=0;if(R===!0)K.fromBufferAttribute(m,c),C[b+s+4]=K.x,C[b+s+5]=K.y,C[b+s+6]=K.z,C[b+s+7]=0;if(I===!0)K.fromBufferAttribute(o,c),C[b+s+8]=K.x,C[b+s+9]=K.y,C[b+s+10]=K.z,C[b+s+11]=o.itemSize===4?K.w:1}}q={count:N,texture:_,size:new E0(L,A)},Z.set(Y,q),Y.addEventListener("dispose",M)}if(X.isInstancedMesh===!0&&X.morphTexture!==null)U.getUniforms().setValue(J,"morphTexture",X.morphTexture,$);else{let F=0;for(let I=0;I<H.length;I++)F+=H[I];let R=Y.morphTargetsRelative?1:1-F;U.getUniforms().setValue(J,"morphTargetBaseInfluence",R),U.getUniforms().setValue(J,"morphTargetInfluences",H)}U.getUniforms().setValue(J,"morphTargetsTexture",q.texture,$),U.getUniforms().setValue(J,"morphTargetsTextureSize",q.size)}return{update:W}}function lq(J,Q,$,Z,K){let W=new WeakMap;function X(H){let G=K.render.frame,N=H.geometry,q=Q.get(H,N);if(W.get(q)!==G)Q.update(q),W.set(q,G);if(H.isInstancedMesh){if(H.hasEventListener("dispose",U)===!1)H.addEventListener("dispose",U);if(W.get(H)!==G){if($.update(H.instanceMatrix,J.ARRAY_BUFFER),H.instanceColor!==null)$.update(H.instanceColor,J.ARRAY_BUFFER);W.set(H,G)}}if(H.isSkinnedMesh){let F=H.skeleton;if(W.get(F)!==G)F.update(),W.set(F,G)}return q}function Y(){W=new WeakMap}function U(H){let G=H.target;if(G.removeEventListener("dispose",U),Z.releaseStatesOfObject(G),$.remove(G.instanceMatrix),G.instanceColor!==null)$.remove(G.instanceColor)}return{update:X,dispose:Y}}var dq={[m$]:"LINEAR_TONE_MAPPING",[l$]:"REINHARD_TONE_MAPPING",[d$]:"CINEON_TONE_MAPPING",[$6]:"ACES_FILMIC_TONE_MAPPING",[c$]:"AGX_TONE_MAPPING",[n$]:"NEUTRAL_TONE_MAPPING",[u$]:"CUSTOM_TONE_MAPPING"};function uq(J,Q,$,Z,K,W){let X=new z9(Q,$,{type:J,depthBuffer:K,stencilBuffer:W,samples:Z?4:0,depthTexture:K?new z8(Q,$):void 0}),Y=new z9(Q,$,{type:K8,depthBuffer:!1,stencilBuffer:!1}),U=new B9;U.setAttribute("position",new tJ([-1,3,0,-1,-1,0,3,-1,0],3)),U.setAttribute("uv",new tJ([0,2,0,0,2,0],2));let H=new sZ({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),G=new h0(U,H),N=new O6(-1,1,1,-1,0,1),q=null,F=null,R=!1,I,O=null,E=[],w=!1;this.setSize=function(P,L){X.setSize(P,L),Y.setSize(P,L);for(let A=0;A<E.length;A++){let C=E[A];if(C.setSize)C.setSize(P,L)}},this.setEffects=function(P){E=P,w=E.length>0&&E[0].isRenderPass===!0;let{width:L,height:A}=X;for(let C=0;C<E.length;C++){let _=E[C];if(_.setSize)_.setSize(L,A)}},this.begin=function(P,L){if(R)return!1;if(P.toneMapping===f9&&E.length===0)return!1;if(O=L,L!==null){let{width:A,height:C}=L;if(X.width!==A||X.height!==C)this.setSize(A,C)}if(w===!1)P.setRenderTarget(X);return I=P.toneMapping,P.toneMapping=f9,!0},this.hasRenderPass=function(){return w},this.end=function(P,L){P.toneMapping=I,R=!0;let A=X,C=Y;for(let _=0;_<E.length;_++){let V=E[_];if(V.enabled===!1)continue;if(V.render(P,C,A,L),V.needsSwap!==!1){let M=A;A=C,C=M}}if(q!==P.outputColorSpace||F!==P.toneMapping){if(q=P.outputColorSpace,F=P.toneMapping,H.defines={},XJ.getTransfer(q)===zJ)H.defines.SRGB_TRANSFER="";let _=dq[F];if(_)H.defines[_]="";H.needsUpdate=!0}H.uniforms.tDiffuse.value=A.texture,P.setRenderTarget(O),P.render(G,N),O=null,R=!1},this.isCompositing=function(){return R},this.dispose=function(){if(X.depthTexture)X.depthTexture.dispose();X.dispose(),Y.dispose(),U.dispose(),H.dispose()}}var ZY=new mJ,VK=new z8(1,1),KY=new VQ,WY=new hZ,XY=new IQ,xX=[],gX=[],pX=new Float32Array(16),mX=new Float32Array(9),lX=new Float32Array(4);function _7(J,Q,$){let Z=J[0];if(Z<=0||Z>0)return J;let K=Q*$,W=xX[K];if(W===void 0)W=new Float32Array(K),xX[K]=W;if(Q!==0){Z.toArray(W,0);for(let X=1,Y=0;X!==Q;++X)Y+=$,J[X].toArray(W,Y)}return W}function xJ(J,Q){if(J.length!==Q.length)return!1;for(let $=0,Z=J.length;$<Z;$++)if(J[$]!==Q[$])return!1;return!0}function gJ(J,Q){for(let $=0,Z=Q.length;$<Z;$++)J[$]=Q[$]}function pQ(J,Q){let $=gX[Q];if($===void 0)$=new Int32Array(Q),gX[Q]=$;for(let Z=0;Z!==Q;++Z)$[Z]=J.allocateTextureUnit();return $}function cq(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function nq(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(xJ($,Q))return;J.uniform2fv(this.addr,Q),gJ($,Q)}}function sq(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(xJ($,Q))return;J.uniform3fv(this.addr,Q),gJ($,Q)}}function iq(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(xJ($,Q))return;J.uniform4fv(this.addr,Q),gJ($,Q)}}function oq(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(xJ($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),gJ($,Q)}else{if(xJ($,Z))return;lX.set(Z),J.uniformMatrix2fv(this.addr,!1,lX),gJ($,Z)}}function aq(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(xJ($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),gJ($,Q)}else{if(xJ($,Z))return;mX.set(Z),J.uniformMatrix3fv(this.addr,!1,mX),gJ($,Z)}}function rq(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(xJ($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),gJ($,Q)}else{if(xJ($,Z))return;pX.set(Z),J.uniformMatrix4fv(this.addr,!1,pX),gJ($,Z)}}function tq(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function eq(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(xJ($,Q))return;J.uniform2iv(this.addr,Q),gJ($,Q)}}function J1(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(xJ($,Q))return;J.uniform3iv(this.addr,Q),gJ($,Q)}}function Q1(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(xJ($,Q))return;J.uniform4iv(this.addr,Q),gJ($,Q)}}function $1(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function Z1(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(xJ($,Q))return;J.uniform2uiv(this.addr,Q),gJ($,Q)}}function K1(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(xJ($,Q))return;J.uniform3uiv(this.addr,Q),gJ($,Q)}}function W1(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(xJ($,Q))return;J.uniform4uiv(this.addr,Q),gJ($,Q)}}function X1(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;let W;if(this.type===J.SAMPLER_2D_SHADOW)VK.compareFunction=$.isReversedDepthBuffer()?kQ:RQ,W=VK;else W=ZY;$.setTexture2D(Q||W,K)}function Y1(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTexture3D(Q||WY,K)}function U1(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTextureCube(Q||XY,K)}function H1(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTexture2DArray(Q||KY,K)}function q1(J){switch(J){case 5126:return cq;case 35664:return nq;case 35665:return sq;case 35666:return iq;case 35674:return oq;case 35675:return aq;case 35676:return rq;case 5124:case 35670:return tq;case 35667:case 35671:return eq;case 35668:case 35672:return J1;case 35669:case 35673:return Q1;case 5125:return $1;case 36294:return Z1;case 36295:return K1;case 36296:return W1;case 35678:case 36198:case 36298:case 36306:case 35682:return X1;case 35679:case 36299:case 36307:return Y1;case 35680:case 36300:case 36308:case 36293:return U1;case 36289:case 36303:case 36311:case 36292:return H1}}function G1(J,Q){J.uniform1fv(this.addr,Q)}function N1(J,Q){let $=_7(Q,this.size,2);J.uniform2fv(this.addr,$)}function F1(J,Q){let $=_7(Q,this.size,3);J.uniform3fv(this.addr,$)}function O1(J,Q){let $=_7(Q,this.size,4);J.uniform4fv(this.addr,$)}function E1(J,Q){let $=_7(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function D1(J,Q){let $=_7(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function R1(J,Q){let $=_7(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function k1(J,Q){J.uniform1iv(this.addr,Q)}function V1(J,Q){J.uniform2iv(this.addr,Q)}function L1(J,Q){J.uniform3iv(this.addr,Q)}function z1(J,Q){J.uniform4iv(this.addr,Q)}function B1(J,Q){J.uniform1uiv(this.addr,Q)}function M1(J,Q){J.uniform2uiv(this.addr,Q)}function I1(J,Q){J.uniform3uiv(this.addr,Q)}function A1(J,Q){J.uniform4uiv(this.addr,Q)}function P1(J,Q,$){let Z=this.cache,K=Q.length,W=pQ($,K);if(!xJ(Z,W))J.uniform1iv(this.addr,W),gJ(Z,W);let X;if(this.type===J.SAMPLER_2D_SHADOW)X=VK;else X=ZY;for(let Y=0;Y!==K;++Y)$.setTexture2D(Q[Y]||X,W[Y])}function C1(J,Q,$){let Z=this.cache,K=Q.length,W=pQ($,K);if(!xJ(Z,W))J.uniform1iv(this.addr,W),gJ(Z,W);for(let X=0;X!==K;++X)$.setTexture3D(Q[X]||WY,W[X])}function _1(J,Q,$){let Z=this.cache,K=Q.length,W=pQ($,K);if(!xJ(Z,W))J.uniform1iv(this.addr,W),gJ(Z,W);for(let X=0;X!==K;++X)$.setTextureCube(Q[X]||XY,W[X])}function w1(J,Q,$){let Z=this.cache,K=Q.length,W=pQ($,K);if(!xJ(Z,W))J.uniform1iv(this.addr,W),gJ(Z,W);for(let X=0;X!==K;++X)$.setTexture2DArray(Q[X]||KY,W[X])}function T1(J){switch(J){case 5126:return G1;case 35664:return N1;case 35665:return F1;case 35666:return O1;case 35674:return E1;case 35675:return D1;case 35676:return R1;case 5124:case 35670:return k1;case 35667:case 35671:return V1;case 35668:case 35672:return L1;case 35669:case 35673:return z1;case 5125:return B1;case 36294:return M1;case 36295:return I1;case 36296:return A1;case 35678:case 36198:case 36298:case 36306:case 35682:return P1;case 35679:case 36299:case 36307:return C1;case 35680:case 36300:case 36308:case 36293:return _1;case 36289:case 36303:case 36311:case 36292:return w1}}class YY{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=q1(Q.type)}}class UY{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=T1(Q.type)}}class HY{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let Z=this.seq;for(let K=0,W=Z.length;K!==W;++K){let X=Z[K];X.setValue(J,Q[X.id],$)}}}var RK=/(\w+)(\])?(\[|\.)?/g;function dX(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function S1(J,Q,$){let Z=J.name,K=Z.length;RK.lastIndex=0;while(!0){let W=RK.exec(Z),X=RK.lastIndex,Y=W[1],U=W[2]==="]",H=W[3];if(U)Y=Y|0;if(H===void 0||H==="["&&X+2===K){dX($,H===void 0?new YY(Y,J,Q):new UY(Y,J,Q));break}else{let N=$.map[Y];if(N===void 0)N=new HY(Y),dX($,N);$=N}}}class k6{constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let W=0;W<$;++W){let X=J.getActiveUniform(Q,W),Y=J.getUniformLocation(Q,X.name);S1(X,Y,this)}let Z=[],K=[];for(let W of this.seq)if(W.type===J.SAMPLER_2D_SHADOW||W.type===J.SAMPLER_CUBE_SHADOW||W.type===J.SAMPLER_2D_ARRAY_SHADOW)Z.push(W);else K.push(W);if(Z.length>0)this.seq=Z.concat(K)}setValue(J,Q,$,Z){let K=this.map[Q];if(K!==void 0)K.setValue(J,$,Z)}setOptional(J,Q,$){let Z=Q[$];if(Z!==void 0)this.setValue(J,$,Z)}static upload(J,Q,$,Z){for(let K=0,W=Q.length;K!==W;++K){let X=Q[K],Y=$[X.id];if(Y.needsUpdate!==!1)X.setValue(J,Y.value,Z)}}static seqWithValue(J,Q){let $=[];for(let Z=0,K=J.length;Z!==K;++Z){let W=J[Z];if(W.id in Q)$.push(W)}return $}}function uX(J,Q,$){let Z=J.createShader(Q);return J.shaderSource(Z,$),J.compileShader(Z),Z}var j1=37297,v1=0;function f1(J,Q){let $=J.split(`
`),Z=[],K=Math.max(Q-6,0),W=Math.min(Q+6,$.length);for(let X=K;X<W;X++){let Y=X+1;Z.push(`${Y===Q?">":" "} ${Y}: ${$[X]}`)}return Z.join(`
`)}var cX=new o0;function y1(J){XJ._getMatrix(cX,XJ.workingColorSpace,J);let Q=`mat3( ${cX.elements.map(($)=>$.toFixed(4))} )`;switch(XJ.getTransfer(J)){case SZ:return[Q,"LinearTransferOETF"];case zJ:return[Q,"sRGBTransferOETF"];default:return l0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function nX(J,Q,$){let Z=J.getShaderParameter(Q,J.COMPILE_STATUS),W=(J.getShaderInfoLog(Q)||"").trim();if(Z&&W==="")return"";let X=/ERROR: 0:(\d+)/.exec(W);if(X){let Y=parseInt(X[1]);return $.toUpperCase()+`

`+W+`

`+f1(J.getShaderSource(Q),Y)}else return W}function b1(J,Q){let $=y1(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( value.rgb * ${$[0]}, value.a ) );`,"}"].join(`
`)}var h1={[m$]:"Linear",[l$]:"Reinhard",[d$]:"Cineon",[$6]:"ACESFilmic",[c$]:"AgX",[n$]:"Neutral",[u$]:"Custom"};function x1(J,Q){let $=h1[Q];if($===void 0)return l0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var xQ=new v;function g1(){XJ.getLuminanceCoefficients(xQ);let J=xQ.x.toFixed(4),Q=xQ.y.toFixed(4),$=xQ.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function p1(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(R6).join(`
`)}function m1(J){let Q=[];for(let $ in J){let Z=J[$];if(Z===!1)continue;Q.push("#define "+$+" "+Z)}return Q.join(`
`)}function l1(J,Q){let $={},Z=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let K=0;K<Z;K++){let W=J.getActiveAttrib(Q,K),X=W.name,Y=1;if(W.type===J.FLOAT_MAT2)Y=2;if(W.type===J.FLOAT_MAT3)Y=3;if(W.type===J.FLOAT_MAT4)Y=4;$[X]={type:W.type,location:J.getAttribLocation(Q,X),locationSize:Y}}return $}function R6(J){return J!==""}function sX(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function iX(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var d1=/^[ \t]*#include +<([\w\d./]+)>/gm;function LK(J){return J.replace(d1,c1)}var u1=new Map;function c1(J,Q){let $=$J[Q];if($===void 0){let Z=u1.get(Q);if(Z!==void 0)$=$J[Z],l0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,Z);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+Q+">")}return LK($)}var n1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oX(J){return J.replace(n1,s1)}function s1(J,Q,$,Z){let K="";for(let W=parseInt(Q);W<parseInt($);W++)K+=Z.replace(/\[\s*i\s*\]/g,"[ "+W+" ]").replace(/UNROLLED_LOOP_INDEX/g,W);return K}function aX(J){let Q=`precision ${J.precision} float;
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
#define LOW_PRECISION`;return Q}var i1={[J6]:"SHADOWMAP_TYPE_PCF",[k7]:"SHADOWMAP_TYPE_VSM"};function o1(J){return i1[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var a1={[z7]:"ENVMAP_TYPE_CUBE",[b8]:"ENVMAP_TYPE_CUBE",[Z6]:"ENVMAP_TYPE_CUBE_UV"};function r1(J){if(J.envMap===!1)return"ENVMAP_TYPE_CUBE";return a1[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var t1={[b8]:"ENVMAP_MODE_REFRACTION"};function e1(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return t1[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var JG={[eW]:"ENVMAP_BLENDING_MULTIPLY",[JX]:"ENVMAP_BLENDING_MIX",[QX]:"ENVMAP_BLENDING_ADD"};function QG(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return JG[J.combine]||"ENVMAP_BLENDING_NONE"}function $G(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let $=Math.log2(Q)-2,Z=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,$),112)),texelHeight:Z,maxMip:$}}function ZG(J,Q,$,Z){let K=J.getContext(),W=$.defines,X=$.vertexShader,Y=$.fragmentShader,U=o1($),H=r1($),G=e1($),N=QG($),q=$G($),F=p1($),R=m1(W),I=K.createProgram(),O,E,w=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(O=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R].filter(R6).join(`
`),O.length>0)O+=`
`;if(E=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R].filter(R6).join(`
`),E.length>0)E+=`
`}else O=[aX($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+G:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexNormals?"#define HAS_NORMAL":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+U:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(R6).join(`
`),E=[aX($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+H:"",$.envMap?"#define "+G:"",$.envMap?"#define "+N:"",q?"#define CUBEUV_TEXEL_WIDTH "+q.texelWidth:"",q?"#define CUBEUV_TEXEL_HEIGHT "+q.texelHeight:"",q?"#define CUBEUV_MAX_MIP "+q.maxMip+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor?"#define USE_COLOR":"",$.vertexAlphas||$.batchingColor?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+U:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==f9?"#define TONE_MAPPING":"",$.toneMapping!==f9?$J.tonemapping_pars_fragment:"",$.toneMapping!==f9?x1("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",$J.colorspace_pars_fragment,b1("linearToOutputTexel",$.outputColorSpace),g1(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(R6).join(`
`);if(X=LK(X),X=sX(X,$),X=iX(X,$),Y=LK(Y),Y=sX(Y,$),Y=iX(Y,$),X=oX(X),Y=oX(Y),$.isRawShaderMaterial!==!0)w=`#version 300 es
`,O=[F,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+O,E=["#define varying in",$.glslVersion===jZ?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===jZ?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E;let P=w+O+X,L=w+E+Y,A=uX(K,K.VERTEX_SHADER,P),C=uX(K,K.FRAGMENT_SHADER,L);if(K.attachShader(I,A),K.attachShader(I,C),$.index0AttributeName!==void 0)K.bindAttribLocation(I,0,$.index0AttributeName);else if($.hasPositionAttribute===!0)K.bindAttribLocation(I,0,"position");K.linkProgram(I);function _(D){if(J.debug.checkShaderErrors){let m=K.getProgramInfoLog(I)||"",o=K.getShaderInfoLog(A)||"",b=K.getShaderInfoLog(C)||"",c=m.trim(),s=o.trim(),x=b.trim(),J0=!0,W0=!0;if(K.getProgramParameter(I,K.LINK_STATUS)===!1)if(J0=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(K,I,A,C);else{let H0=nX(K,A,"vertex"),C0=nX(K,C,"fragment");m0("WebGLProgram: Shader Error "+K.getError()+" - VALIDATE_STATUS "+K.getProgramParameter(I,K.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+c+`
`+H0+`
`+C0)}else if(c!=="")l0("WebGLProgram: Program Info Log:",c);else if(s===""||x==="")W0=!1;if(W0)D.diagnostics={runnable:J0,programLog:c,vertexShader:{log:s,prefix:O},fragmentShader:{log:x,prefix:E}}}K.deleteShader(A),K.deleteShader(C),V=new k6(K,I),M=l1(K,I)}let V;this.getUniforms=function(){if(V===void 0)_(this);return V};let M;this.getAttributes=function(){if(M===void 0)_(this);return M};let l=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(l===!1)l=K.getProgramParameter(I,j1);return l},this.destroy=function(){Z.releaseStatesOfProgram(this),K.deleteProgram(I),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=v1++,this.cacheKey=Q,this.usedTimes=1,this.program=I,this.vertexShader=A,this.fragmentShader=C,this}var KG=0;class qY{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,Q,$){let Z=this._getShaderCacheForMaterial(J);if(Z.has(Q)===!1)Z.add(Q),Q.usedTimes++;if(Z.has($)===!1)Z.add($),$.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new GY(J),Q.set(J,$);return $}}class GY{constructor(J){this.id=KG++,this.code=J,this.usedTimes=0}}function WG(J){return J===g8||J===EQ||J===DQ}function XG(J,Q,$,Z,K,W){let X=new Y6,Y=new qY,U=new Set,H=[],G=new Map,N=Z.logarithmicDepthBuffer,q=Z.precision,F={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(V){if(U.add(V),V===0)return"uv";return`uv${V}`}function I(V,M,l,D,m,o){let b=D.fog,c=m.geometry,s=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?D.environment:null,x=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,J0=Q.get(V.envMap||s,x),W0=!!J0&&J0.mapping===Z6?J0.image.height:null,H0=F[V.type];if(V.precision!==null){if(q=Z.getMaxPrecision(V.precision),q!==V.precision)l0("WebGLProgram.getParameters:",V.precision,"not supported, using",q,"instead.")}let C0=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,D0=C0!==void 0?C0.length:0,HJ=0;if(c.morphAttributes.position!==void 0)HJ=1;if(c.morphAttributes.normal!==void 0)HJ=2;if(c.morphAttributes.color!==void 0)HJ=3;let UJ,a,q0,L0;if(H0){let p0=n9[H0];UJ=p0.vertexShader,a=p0.fragmentShader}else{UJ=V.vertexShader,a=V.fragmentShader;let p0=Y.getVertexShaderStage(V),LJ=Y.getFragmentShaderStage(V);Y.update(V,p0,LJ),q0=p0.id,L0=LJ.id}let N0=J.getRenderTarget(),y0=J.state.buffers.depth.getReversed(),ZJ=m.isInstancedMesh===!0,d0=m.isBatchedMesh===!0,u0=!!V.map,e=!!V.matcap,K0=!!J0,Q0=!!V.aoMap,z0=!!V.lightMap,P0=!!V.bumpMap&&V.wireframe===!1,j0=!!V.normalMap,b0=!!V.displacementMap,n0=!!V.emissiveMap,c0=!!V.metalnessMap,T=!!V.roughnessMap,DJ=V.anisotropy>0,t0=V.clearcoat>0,e0=V.dispersion>0,B=V.iridescence>0,k=V.sheen>0,S=V.transmission>0,d=DJ&&!!V.anisotropyMap,$0=t0&&!!V.clearcoatMap,X0=t0&&!!V.clearcoatNormalMap,F0=t0&&!!V.clearcoatRoughnessMap,n=B&&!!V.iridescenceMap,r=B&&!!V.iridescenceThicknessMap,M0=k&&!!V.sheenColorMap,v0=k&&!!V.sheenRoughnessMap,G0=!!V.specularMap,Y0=!!V.specularColorMap,x0=!!V.specularIntensityMap,g0=S&&!!V.transmissionMap,qJ=S&&!!V.thicknessMap,f=!!V.gradientMap,O0=!!V.alphaMap,i=V.alphaTest>0,R0=!!V.alphaHash,I0=!!V.extensions,Z0=f9;if(V.toneMapped){if(N0===null||N0.isXRRenderTarget===!0)Z0=J.toneMapping}let U0={shaderID:H0,shaderType:V.type,shaderName:V.name,vertexShader:UJ,fragmentShader:a,defines:V.defines,customVertexShaderID:q0,customFragmentShaderID:L0,isRawShaderMaterial:V.isRawShaderMaterial===!0,glslVersion:V.glslVersion,precision:q,batching:d0,batchingColor:d0&&m._colorsTexture!==null,instancing:ZJ,instancingColor:ZJ&&m.instanceColor!==null,instancingMorph:ZJ&&m.morphTexture!==null,outputColorSpace:N0===null?J.outputColorSpace:N0.isXRRenderTarget===!0?N0.texture.colorSpace:XJ.workingColorSpace,alphaToCoverage:!!V.alphaToCoverage,map:u0,matcap:e,envMap:K0,envMapMode:K0&&J0.mapping,envMapCubeUVHeight:W0,aoMap:Q0,lightMap:z0,bumpMap:P0,normalMap:j0,displacementMap:b0,emissiveMap:n0,normalMapObjectSpace:j0&&V.normalMapType===GX,normalMapTangentSpace:j0&&V.normalMapType===wZ,packedNormalMap:j0&&V.normalMapType===wZ&&WG(V.normalMap.format),metalnessMap:c0,roughnessMap:T,anisotropy:DJ,anisotropyMap:d,clearcoat:t0,clearcoatMap:$0,clearcoatNormalMap:X0,clearcoatRoughnessMap:F0,dispersion:e0,iridescence:B,iridescenceMap:n,iridescenceThicknessMap:r,sheen:k,sheenColorMap:M0,sheenRoughnessMap:v0,specularMap:G0,specularColorMap:Y0,specularIntensityMap:x0,transmission:S,transmissionMap:g0,thicknessMap:qJ,gradientMap:f,opaque:V.transparent===!1&&V.blending===Q6&&V.alphaToCoverage===!1,alphaMap:O0,alphaTest:i,alphaHash:R0,combine:V.combine,mapUv:u0&&R(V.map.channel),aoMapUv:Q0&&R(V.aoMap.channel),lightMapUv:z0&&R(V.lightMap.channel),bumpMapUv:P0&&R(V.bumpMap.channel),normalMapUv:j0&&R(V.normalMap.channel),displacementMapUv:b0&&R(V.displacementMap.channel),emissiveMapUv:n0&&R(V.emissiveMap.channel),metalnessMapUv:c0&&R(V.metalnessMap.channel),roughnessMapUv:T&&R(V.roughnessMap.channel),anisotropyMapUv:d&&R(V.anisotropyMap.channel),clearcoatMapUv:$0&&R(V.clearcoatMap.channel),clearcoatNormalMapUv:X0&&R(V.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:F0&&R(V.clearcoatRoughnessMap.channel),iridescenceMapUv:n&&R(V.iridescenceMap.channel),iridescenceThicknessMapUv:r&&R(V.iridescenceThicknessMap.channel),sheenColorMapUv:M0&&R(V.sheenColorMap.channel),sheenRoughnessMapUv:v0&&R(V.sheenRoughnessMap.channel),specularMapUv:G0&&R(V.specularMap.channel),specularColorMapUv:Y0&&R(V.specularColorMap.channel),specularIntensityMapUv:x0&&R(V.specularIntensityMap.channel),transmissionMapUv:g0&&R(V.transmissionMap.channel),thicknessMapUv:qJ&&R(V.thicknessMap.channel),alphaMapUv:O0&&R(V.alphaMap.channel),vertexTangents:!!c.attributes.tangent&&(j0||DJ),vertexNormals:!!c.attributes.normal,vertexColors:V.vertexColors,vertexAlphas:V.vertexColors===!0&&!!c.attributes.color&&c.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!c.attributes.uv&&(u0||O0),fog:!!b,useFog:V.fog===!0,fogExp2:!!b&&b.isFogExp2,flatShading:V.wireframe===!1&&(V.flatShading===!0||c.attributes.normal===void 0&&j0===!1&&(V.isMeshLambertMaterial||V.isMeshPhongMaterial||V.isMeshStandardMaterial||V.isMeshPhysicalMaterial)),sizeAttenuation:V.sizeAttenuation===!0,logarithmicDepthBuffer:N,reversedDepthBuffer:y0,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:c.attributes.position!==void 0,morphTargets:c.morphAttributes.position!==void 0,morphNormals:c.morphAttributes.normal!==void 0,morphColors:c.morphAttributes.color!==void 0,morphTargetsCount:D0,morphTextureStride:HJ,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:o.length,numClippingPlanes:W.numPlanes,numClipIntersection:W.numIntersection,dithering:V.dithering,shadowMapEnabled:J.shadowMap.enabled&&l.length>0,shadowMapType:J.shadowMap.type,toneMapping:Z0,decodeVideoTexture:u0&&V.map.isVideoTexture===!0&&XJ.getTransfer(V.map.colorSpace)===zJ,decodeVideoTextureEmissive:n0&&V.emissiveMap.isVideoTexture===!0&&XJ.getTransfer(V.emissiveMap.colorSpace)===zJ,premultipliedAlpha:V.premultipliedAlpha,doubleSided:V.side===m9,flipSided:V.side===eJ,useDepthPacking:V.depthPacking>=0,depthPacking:V.depthPacking||0,index0AttributeName:V.index0AttributeName,extensionClipCullDistance:I0&&V.extensions.clipCullDistance===!0&&$.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(I0&&V.extensions.multiDraw===!0||d0)&&$.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:$.has("KHR_parallel_shader_compile"),customProgramCacheKey:V.customProgramCacheKey()};return U0.vertexUv1s=U.has(1),U0.vertexUv2s=U.has(2),U0.vertexUv3s=U.has(3),U.clear(),U0}function O(V){let M=[];if(V.shaderID)M.push(V.shaderID);else M.push(V.customVertexShaderID),M.push(V.customFragmentShaderID);if(V.defines!==void 0)for(let l in V.defines)M.push(l),M.push(V.defines[l]);if(V.isRawShaderMaterial===!1)E(M,V),w(M,V),M.push(J.outputColorSpace);return M.push(V.customProgramCacheKey),M.join()}function E(V,M){V.push(M.precision),V.push(M.outputColorSpace),V.push(M.envMapMode),V.push(M.envMapCubeUVHeight),V.push(M.mapUv),V.push(M.alphaMapUv),V.push(M.lightMapUv),V.push(M.aoMapUv),V.push(M.bumpMapUv),V.push(M.normalMapUv),V.push(M.displacementMapUv),V.push(M.emissiveMapUv),V.push(M.metalnessMapUv),V.push(M.roughnessMapUv),V.push(M.anisotropyMapUv),V.push(M.clearcoatMapUv),V.push(M.clearcoatNormalMapUv),V.push(M.clearcoatRoughnessMapUv),V.push(M.iridescenceMapUv),V.push(M.iridescenceThicknessMapUv),V.push(M.sheenColorMapUv),V.push(M.sheenRoughnessMapUv),V.push(M.specularMapUv),V.push(M.specularColorMapUv),V.push(M.specularIntensityMapUv),V.push(M.transmissionMapUv),V.push(M.thicknessMapUv),V.push(M.combine),V.push(M.fogExp2),V.push(M.sizeAttenuation),V.push(M.morphTargetsCount),V.push(M.morphAttributeCount),V.push(M.numDirLights),V.push(M.numPointLights),V.push(M.numSpotLights),V.push(M.numSpotLightMaps),V.push(M.numHemiLights),V.push(M.numRectAreaLights),V.push(M.numDirLightShadows),V.push(M.numPointLightShadows),V.push(M.numSpotLightShadows),V.push(M.numSpotLightShadowsWithMaps),V.push(M.numLightProbes),V.push(M.shadowMapType),V.push(M.toneMapping),V.push(M.numClippingPlanes),V.push(M.numClipIntersection),V.push(M.depthPacking)}function w(V,M){if(X.disableAll(),M.instancing)X.enable(0);if(M.instancingColor)X.enable(1);if(M.instancingMorph)X.enable(2);if(M.matcap)X.enable(3);if(M.envMap)X.enable(4);if(M.normalMapObjectSpace)X.enable(5);if(M.normalMapTangentSpace)X.enable(6);if(M.clearcoat)X.enable(7);if(M.iridescence)X.enable(8);if(M.alphaTest)X.enable(9);if(M.vertexColors)X.enable(10);if(M.vertexAlphas)X.enable(11);if(M.vertexUv1s)X.enable(12);if(M.vertexUv2s)X.enable(13);if(M.vertexUv3s)X.enable(14);if(M.vertexTangents)X.enable(15);if(M.anisotropy)X.enable(16);if(M.alphaHash)X.enable(17);if(M.batching)X.enable(18);if(M.dispersion)X.enable(19);if(M.batchingColor)X.enable(20);if(M.gradientMap)X.enable(21);if(M.packedNormalMap)X.enable(22);if(M.vertexNormals)X.enable(23);if(V.push(X.mask),X.disableAll(),M.fog)X.enable(0);if(M.useFog)X.enable(1);if(M.flatShading)X.enable(2);if(M.logarithmicDepthBuffer)X.enable(3);if(M.reversedDepthBuffer)X.enable(4);if(M.skinning)X.enable(5);if(M.morphTargets)X.enable(6);if(M.morphNormals)X.enable(7);if(M.morphColors)X.enable(8);if(M.premultipliedAlpha)X.enable(9);if(M.shadowMapEnabled)X.enable(10);if(M.doubleSided)X.enable(11);if(M.flipSided)X.enable(12);if(M.useDepthPacking)X.enable(13);if(M.dithering)X.enable(14);if(M.transmission)X.enable(15);if(M.sheen)X.enable(16);if(M.opaque)X.enable(17);if(M.pointsUvs)X.enable(18);if(M.decodeVideoTexture)X.enable(19);if(M.decodeVideoTextureEmissive)X.enable(20);if(M.alphaToCoverage)X.enable(21);if(M.numLightProbeGrids>0)X.enable(22);if(M.hasPositionAttribute)X.enable(23);V.push(X.mask)}function P(V){let M=F[V.type],l;if(M){let D=n9[M];l=_X.clone(D.uniforms)}else l=V.uniforms;return l}function L(V,M){let l=G.get(M);if(l!==void 0)++l.usedTimes;else l=new ZG(J,M,V,K),H.push(l),G.set(M,l);return l}function A(V){if(--V.usedTimes===0){let M=H.indexOf(V);H[M]=H[H.length-1],H.pop(),G.delete(V.cacheKey),V.destroy()}}function C(V){Y.remove(V)}function _(){Y.dispose()}return{getParameters:I,getProgramCacheKey:O,getUniforms:P,acquireProgram:L,releaseProgram:A,releaseShaderCache:C,programs:H,dispose:_}}function YG(){let J=new WeakMap;function Q(X){return J.has(X)}function $(X){let Y=J.get(X);if(Y===void 0)Y={},J.set(X,Y);return Y}function Z(X){J.delete(X)}function K(X,Y,U){J.get(X)[Y]=U}function W(){J=new WeakMap}return{has:Q,get:$,remove:Z,update:K,dispose:W}}function UG(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function rX(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function tX(){let J=[],Q=0,$=[],Z=[],K=[];function W(){Q=0,$.length=0,Z.length=0,K.length=0}function X(q){let F=0;if(q.isInstancedMesh)F+=2;if(q.isSkinnedMesh)F+=1;return F}function Y(q,F,R,I,O,E){let w=J[Q];if(w===void 0)w={id:q.id,object:q,geometry:F,material:R,materialVariant:X(q),groupOrder:I,renderOrder:q.renderOrder,z:O,group:E},J[Q]=w;else w.id=q.id,w.object=q,w.geometry=F,w.material=R,w.materialVariant=X(q),w.groupOrder=I,w.renderOrder=q.renderOrder,w.z=O,w.group=E;return Q++,w}function U(q,F,R,I,O,E){let w=Y(q,F,R,I,O,E);if(R.transmission>0)Z.push(w);else if(R.transparent===!0)K.push(w);else $.push(w)}function H(q,F,R,I,O,E){let w=Y(q,F,R,I,O,E);if(R.transmission>0)Z.unshift(w);else if(R.transparent===!0)K.unshift(w);else $.unshift(w)}function G(q,F,R){if($.length>1)$.sort(q||UG);if(Z.length>1)Z.sort(F||rX);if(K.length>1)K.sort(F||rX);if(R)$.reverse(),Z.reverse(),K.reverse()}function N(){for(let q=Q,F=J.length;q<F;q++){let R=J[q];if(R.id===null)break;R.id=null,R.object=null,R.geometry=null,R.material=null,R.group=null}}return{opaque:$,transmissive:Z,transparent:K,init:W,push:U,unshift:H,finish:N,sort:G}}function HG(){let J=new WeakMap;function Q(Z,K){let W=J.get(Z),X;if(W===void 0)X=new tX,J.set(Z,[X]);else if(K>=W.length)X=new tX,W.push(X);else X=W[K];return X}function $(){J=new WeakMap}return{get:Q,dispose:$}}function qG(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={direction:new v,color:new KJ};break;case"SpotLight":$={position:new v,direction:new v,color:new KJ,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new v,color:new KJ,distance:0,decay:0};break;case"HemisphereLight":$={direction:new v,skyColor:new KJ,groundColor:new KJ};break;case"RectAreaLight":$={color:new KJ,position:new v,halfWidth:new v,halfHeight:new v};break}return J[Q.id]=$,$}}}function GG(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new E0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new E0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new E0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var NG=0;function FG(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function OG(J){let Q=new qG,$=GG(),Z={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let H=0;H<9;H++)Z.probe.push(new v);let K=new v,W=new VJ,X=new VJ;function Y(H){let G=0,N=0,q=0;for(let M=0;M<9;M++)Z.probe[M].set(0,0,0);let F=0,R=0,I=0,O=0,E=0,w=0,P=0,L=0,A=0,C=0,_=0;H.sort(FG);for(let M=0,l=H.length;M<l;M++){let D=H[M],m=D.color,o=D.intensity,b=D.distance,c=null;if(D.shadow&&D.shadow.map)if(D.shadow.map.texture.format===g8)c=D.shadow.map.texture;else c=D.shadow.map.depthTexture||D.shadow.map.texture;if(D.isAmbientLight)G+=m.r*o,N+=m.g*o,q+=m.b*o;else if(D.isLightProbe){for(let s=0;s<9;s++)Z.probe[s].addScaledVector(D.sh.coefficients[s],o);_++}else if(D.isDirectionalLight){let s=Q.get(D);if(s.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let x=D.shadow,J0=$.get(D);J0.shadowIntensity=x.intensity,J0.shadowBias=x.bias,J0.shadowNormalBias=x.normalBias,J0.shadowRadius=x.radius,J0.shadowMapSize=x.mapSize,Z.directionalShadow[F]=J0,Z.directionalShadowMap[F]=c,Z.directionalShadowMatrix[F]=D.shadow.matrix,w++}Z.directional[F]=s,F++}else if(D.isSpotLight){let s=Q.get(D);s.position.setFromMatrixPosition(D.matrixWorld),s.color.copy(m).multiplyScalar(o),s.distance=b,s.coneCos=Math.cos(D.angle),s.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),s.decay=D.decay,Z.spot[I]=s;let x=D.shadow;if(D.map){if(Z.spotLightMap[A]=D.map,A++,x.updateMatrices(D),D.castShadow)C++}if(Z.spotLightMatrix[I]=x.matrix,D.castShadow){let J0=$.get(D);J0.shadowIntensity=x.intensity,J0.shadowBias=x.bias,J0.shadowNormalBias=x.normalBias,J0.shadowRadius=x.radius,J0.shadowMapSize=x.mapSize,Z.spotShadow[I]=J0,Z.spotShadowMap[I]=c,L++}I++}else if(D.isRectAreaLight){let s=Q.get(D);s.color.copy(m).multiplyScalar(o),s.halfWidth.set(D.width*0.5,0,0),s.halfHeight.set(0,D.height*0.5,0),Z.rectArea[O]=s,O++}else if(D.isPointLight){let s=Q.get(D);if(s.color.copy(D.color).multiplyScalar(D.intensity),s.distance=D.distance,s.decay=D.decay,D.castShadow){let x=D.shadow,J0=$.get(D);J0.shadowIntensity=x.intensity,J0.shadowBias=x.bias,J0.shadowNormalBias=x.normalBias,J0.shadowRadius=x.radius,J0.shadowMapSize=x.mapSize,J0.shadowCameraNear=x.camera.near,J0.shadowCameraFar=x.camera.far,Z.pointShadow[R]=J0,Z.pointShadowMap[R]=c,Z.pointShadowMatrix[R]=D.shadow.matrix,P++}Z.point[R]=s,R++}else if(D.isHemisphereLight){let s=Q.get(D);s.skyColor.copy(D.color).multiplyScalar(o),s.groundColor.copy(D.groundColor).multiplyScalar(o),Z.hemi[E]=s,E++}}if(O>0)if(J.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=B0.LTC_FLOAT_1,Z.rectAreaLTC2=B0.LTC_FLOAT_2;else Z.rectAreaLTC1=B0.LTC_HALF_1,Z.rectAreaLTC2=B0.LTC_HALF_2;Z.ambient[0]=G,Z.ambient[1]=N,Z.ambient[2]=q;let V=Z.hash;if(V.directionalLength!==F||V.pointLength!==R||V.spotLength!==I||V.rectAreaLength!==O||V.hemiLength!==E||V.numDirectionalShadows!==w||V.numPointShadows!==P||V.numSpotShadows!==L||V.numSpotMaps!==A||V.numLightProbes!==_)Z.directional.length=F,Z.spot.length=I,Z.rectArea.length=O,Z.point.length=R,Z.hemi.length=E,Z.directionalShadow.length=w,Z.directionalShadowMap.length=w,Z.pointShadow.length=P,Z.pointShadowMap.length=P,Z.spotShadow.length=L,Z.spotShadowMap.length=L,Z.directionalShadowMatrix.length=w,Z.pointShadowMatrix.length=P,Z.spotLightMatrix.length=L+A-C,Z.spotLightMap.length=A,Z.numSpotLightShadowsWithMaps=C,Z.numLightProbes=_,V.directionalLength=F,V.pointLength=R,V.spotLength=I,V.rectAreaLength=O,V.hemiLength=E,V.numDirectionalShadows=w,V.numPointShadows=P,V.numSpotShadows=L,V.numSpotMaps=A,V.numLightProbes=_,Z.version=NG++}function U(H,G){let N=0,q=0,F=0,R=0,I=0,O=G.matrixWorldInverse;for(let E=0,w=H.length;E<w;E++){let P=H[E];if(P.isDirectionalLight){let L=Z.directional[N];L.direction.setFromMatrixPosition(P.matrixWorld),K.setFromMatrixPosition(P.target.matrixWorld),L.direction.sub(K),L.direction.transformDirection(O),N++}else if(P.isSpotLight){let L=Z.spot[F];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(O),L.direction.setFromMatrixPosition(P.matrixWorld),K.setFromMatrixPosition(P.target.matrixWorld),L.direction.sub(K),L.direction.transformDirection(O),F++}else if(P.isRectAreaLight){let L=Z.rectArea[R];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(O),X.identity(),W.copy(P.matrixWorld),W.premultiply(O),X.extractRotation(W),L.halfWidth.set(P.width*0.5,0,0),L.halfHeight.set(0,P.height*0.5,0),L.halfWidth.applyMatrix4(X),L.halfHeight.applyMatrix4(X),R++}else if(P.isPointLight){let L=Z.point[q];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(O),q++}else if(P.isHemisphereLight){let L=Z.hemi[I];L.direction.setFromMatrixPosition(P.matrixWorld),L.direction.transformDirection(O),I++}}}return{setup:Y,setupView:U,state:Z}}function eX(J){let Q=new OG(J),$=[],Z=[],K=[];function W(q){N.camera=q,$.length=0,Z.length=0,K.length=0}function X(q){$.push(q)}function Y(q){Z.push(q)}function U(q){K.push(q)}function H(){Q.setup($)}function G(q){Q.setupView($,q)}let N={lightsArray:$,shadowsArray:Z,lightProbeGridArray:K,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:W,state:N,setupLights:H,setupLightsView:G,pushLight:X,pushShadow:Y,pushLightProbeGrid:U}}function EG(J){let Q=new WeakMap;function $(K,W=0){let X=Q.get(K),Y;if(X===void 0)Y=new eX(J),Q.set(K,[Y]);else if(W>=X.length)Y=new eX(J),X.push(Y);else Y=X[W];return Y}function Z(){Q=new WeakMap}return{get:$,dispose:Z}}var DG=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,RG=`uniform sampler2D shadow_pass;
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
}`,kG=[new v(1,0,0),new v(-1,0,0),new v(0,1,0),new v(0,-1,0),new v(0,0,1),new v(0,0,-1)],VG=[new v(0,-1,0),new v(0,-1,0),new v(0,0,1),new v(0,0,-1),new v(0,-1,0),new v(0,-1,0)],JY=new VJ,D6=new v,kK=new v;function LG(J,Q,$){let Z=new H6,K=new E0,W=new E0,X=new PJ,Y=new iZ,U=new oZ,H={},G=$.maxTextureSize,N={[V7]:eJ,[eJ]:V7,[m9]:m9},q=new I9({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new E0},radius:{value:4}},vertexShader:DG,fragmentShader:RG}),F=q.clone();F.defines.HORIZONTAL_PASS=1;let R=new B9;R.setAttribute("position",new q9(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let I=new h0(R,q),O=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=J6;let E=this.type;this.render=function(C,_,V){if(O.enabled===!1)return;if(O.autoUpdate===!1&&O.needsUpdate===!1)return;if(C.length===0)return;if(this.type===AW)l0("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=J6;let M=J.getRenderTarget(),l=J.getActiveCubeFace(),D=J.getActiveMipmapLevel(),m=J.state;if(m.setBlending(l9),m.buffers.depth.getReversed()===!0)m.buffers.color.setClear(0,0,0,0);else m.buffers.color.setClear(1,1,1,1);m.buffers.depth.setTest(!0),m.setScissorTest(!1);let o=E!==this.type;if(o)_.traverse(function(b){if(b.material)if(Array.isArray(b.material))b.material.forEach((c)=>c.needsUpdate=!0);else b.material.needsUpdate=!0});for(let b=0,c=C.length;b<c;b++){let s=C[b],x=s.shadow;if(x===void 0){l0("WebGLShadowMap:",s,"has no shadow.");continue}if(x.autoUpdate===!1&&x.needsUpdate===!1)continue;K.copy(x.mapSize);let J0=x.getFrameExtents();if(K.multiply(J0),W.copy(x.mapSize),K.x>G||K.y>G){if(K.x>G)W.x=Math.floor(G/J0.x),K.x=W.x*J0.x,x.mapSize.x=W.x;if(K.y>G)W.y=Math.floor(G/J0.y),K.y=W.y*J0.y,x.mapSize.y=W.y}let W0=J.state.buffers.depth.getReversed();if(x.camera._reversedDepth=W0,x.map===null||o===!0){if(x.map!==null){if(x.map.depthTexture!==null)x.map.depthTexture.dispose(),x.map.depthTexture=null;x.map.dispose()}if(this.type===k7){if(s.isPointLight){l0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}x.map=new z9(K.x,K.y,{format:g8,type:K8,minFilter:fJ,magFilter:fJ,generateMipmaps:!1}),x.map.texture.name=s.name+".shadowMap",x.map.depthTexture=new z8(K.x,K.y,Z8),x.map.depthTexture.name=s.name+".shadowMapDepth",x.map.depthTexture.format=h8,x.map.depthTexture.compareFunction=null,x.map.depthTexture.minFilter=k8,x.map.depthTexture.magFilter=k8}else{if(s.isPointLight)x.map=new zK(K.x),x.map.depthTexture=new xZ(K.x,V8);else x.map=new z9(K.x,K.y),x.map.depthTexture=new z8(K.x,K.y,V8);if(x.map.depthTexture.name=s.name+".shadowMap",x.map.depthTexture.format=h8,this.type===J6)x.map.depthTexture.compareFunction=W0?kQ:RQ,x.map.depthTexture.minFilter=fJ,x.map.depthTexture.magFilter=fJ;else x.map.depthTexture.compareFunction=null,x.map.depthTexture.minFilter=k8,x.map.depthTexture.magFilter=k8}x.camera.updateProjectionMatrix()}let H0=x.map.isWebGLCubeRenderTarget?6:1;for(let C0=0;C0<H0;C0++){if(x.map.isWebGLCubeRenderTarget)J.setRenderTarget(x.map,C0),J.clear();else{if(C0===0)J.setRenderTarget(x.map),J.clear();let D0=x.getViewport(C0);X.set(W.x*D0.x,W.y*D0.y,W.x*D0.z,W.y*D0.w),m.viewport(X)}if(s.isPointLight){let{camera:D0,matrix:HJ}=x,UJ=s.distance||D0.far;if(UJ!==D0.far)D0.far=UJ,D0.updateProjectionMatrix();D6.setFromMatrixPosition(s.matrixWorld),D0.position.copy(D6),kK.copy(D0.position),kK.add(kG[C0]),D0.up.copy(VG[C0]),D0.lookAt(kK),D0.updateMatrixWorld(),HJ.makeTranslation(-D6.x,-D6.y,-D6.z),JY.multiplyMatrices(D0.projectionMatrix,D0.matrixWorldInverse),x._frustum.setFromProjectionMatrix(JY,D0.coordinateSystem,D0.reversedDepth)}else x.updateMatrices(s);Z=x.getFrustum(),L(_,V,x.camera,s,this.type)}if(x.isPointLightShadow!==!0&&this.type===k7)w(x,V);x.needsUpdate=!1}E=this.type,O.needsUpdate=!1,J.setRenderTarget(M,l,D)};function w(C,_){let V=Q.update(I);if(q.defines.VSM_SAMPLES!==C.blurSamples)q.defines.VSM_SAMPLES=C.blurSamples,F.defines.VSM_SAMPLES=C.blurSamples,q.needsUpdate=!0,F.needsUpdate=!0;if(C.mapPass===null)C.mapPass=new z9(K.x,K.y,{format:g8,type:K8});q.uniforms.shadow_pass.value=C.map.depthTexture,q.uniforms.resolution.value=C.mapSize,q.uniforms.radius.value=C.radius,J.setRenderTarget(C.mapPass),J.clear(),J.renderBufferDirect(_,null,V,q,I,null),F.uniforms.shadow_pass.value=C.mapPass.texture,F.uniforms.resolution.value=C.mapSize,F.uniforms.radius.value=C.radius,J.setRenderTarget(C.map),J.clear(),J.renderBufferDirect(_,null,V,F,I,null)}function P(C,_,V,M){let l=null,D=V.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)l=D;else if(l=V.isPointLight===!0?U:Y,J.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let m=l.uuid,o=_.uuid,b=H[m];if(b===void 0)b={},H[m]=b;let c=b[o];if(c===void 0)c=l.clone(),b[o]=c,_.addEventListener("dispose",A);l=c}if(l.visible=_.visible,l.wireframe=_.wireframe,M===k7)l.side=_.shadowSide!==null?_.shadowSide:_.side;else l.side=_.shadowSide!==null?_.shadowSide:N[_.side];if(l.alphaMap=_.alphaMap,l.alphaTest=_.alphaToCoverage===!0?0.5:_.alphaTest,l.map=_.map,l.clipShadows=_.clipShadows,l.clippingPlanes=_.clippingPlanes,l.clipIntersection=_.clipIntersection,l.displacementMap=_.displacementMap,l.displacementScale=_.displacementScale,l.displacementBias=_.displacementBias,l.wireframeLinewidth=_.wireframeLinewidth,l.linewidth=_.linewidth,V.isPointLight===!0&&l.isMeshDistanceMaterial===!0){let m=J.properties.get(l);m.light=V}return l}function L(C,_,V,M,l){if(C.visible===!1)return;if(C.layers.test(_.layers)&&(C.isMesh||C.isLine||C.isPoints)){if((C.castShadow||C.receiveShadow&&l===k7)&&(!C.frustumCulled||Z.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,C.matrixWorld);let o=Q.update(C),b=C.material;if(Array.isArray(b)){let c=o.groups;for(let s=0,x=c.length;s<x;s++){let J0=c[s],W0=b[J0.materialIndex];if(W0&&W0.visible){let H0=P(C,W0,M,l);C.onBeforeShadow(J,C,_,V,o,H0,J0),J.renderBufferDirect(V,null,o,H0,C,J0),C.onAfterShadow(J,C,_,V,o,H0,J0)}}}else if(b.visible){let c=P(C,b,M,l);C.onBeforeShadow(J,C,_,V,o,c,null),J.renderBufferDirect(V,null,o,c,C,null),C.onAfterShadow(J,C,_,V,o,c,null)}}}let m=C.children;for(let o=0,b=m.length;o<b;o++)L(m[o],_,V,M,l)}function A(C){C.target.removeEventListener("dispose",A);for(let V in H){let M=H[V],l=C.target.uuid;if(l in M)M[l].dispose(),delete M[l]}}}function zG(J,Q){function $(){let f=!1,O0=new PJ,i=null,R0=new PJ(0,0,0,0);return{setMask:function(I0){if(i!==I0&&!f)J.colorMask(I0,I0,I0,I0),i=I0},setLocked:function(I0){f=I0},setClear:function(I0,Z0,U0,p0,LJ){if(LJ===!0)I0*=p0,Z0*=p0,U0*=p0;if(O0.set(I0,Z0,U0,p0),R0.equals(O0)===!1)J.clearColor(I0,Z0,U0,p0),R0.copy(O0)},reset:function(){f=!1,i=null,R0.set(-1,0,0,0)}}}function Z(){let f=!1,O0=!1,i=null,R0=null,I0=null;return{setReversed:function(Z0){if(O0!==Z0){let U0=Q.get("EXT_clip_control");if(Z0)U0.clipControlEXT(U0.LOWER_LEFT_EXT,U0.ZERO_TO_ONE_EXT);else U0.clipControlEXT(U0.LOWER_LEFT_EXT,U0.NEGATIVE_ONE_TO_ONE_EXT);O0=Z0;let p0=I0;I0=null,this.setClear(p0)}},getReversed:function(){return O0},setTest:function(Z0){if(Z0)N0(J.DEPTH_TEST);else y0(J.DEPTH_TEST)},setMask:function(Z0){if(i!==Z0&&!f)J.depthMask(Z0),i=Z0},setFunc:function(Z0){if(O0)Z0=zX[Z0];if(R0!==Z0){switch(Z0){case nW:J.depthFunc(J.NEVER);break;case sW:J.depthFunc(J.ALWAYS);break;case iW:J.depthFunc(J.LESS);break;case p$:J.depthFunc(J.LEQUAL);break;case oW:J.depthFunc(J.EQUAL);break;case aW:J.depthFunc(J.GEQUAL);break;case rW:J.depthFunc(J.GREATER);break;case tW:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}R0=Z0}},setLocked:function(Z0){f=Z0},setClear:function(Z0){if(I0!==Z0){if(I0=Z0,O0)Z0=1-Z0;J.clearDepth(Z0)}},reset:function(){f=!1,i=null,R0=null,I0=null,O0=!1}}}function K(){let f=!1,O0=null,i=null,R0=null,I0=null,Z0=null,U0=null,p0=null,LJ=null;return{setTest:function(OJ){if(!f)if(OJ)N0(J.STENCIL_TEST);else y0(J.STENCIL_TEST)},setMask:function(OJ){if(O0!==OJ&&!f)J.stencilMask(OJ),O0=OJ},setFunc:function(OJ,Q9,E9){if(i!==OJ||R0!==Q9||I0!==E9)J.stencilFunc(OJ,Q9,E9),i=OJ,R0=Q9,I0=E9},setOp:function(OJ,Q9,E9){if(Z0!==OJ||U0!==Q9||p0!==E9)J.stencilOp(OJ,Q9,E9),Z0=OJ,U0=Q9,p0=E9},setLocked:function(OJ){f=OJ},setClear:function(OJ){if(LJ!==OJ)J.clearStencil(OJ),LJ=OJ},reset:function(){f=!1,O0=null,i=null,R0=null,I0=null,Z0=null,U0=null,p0=null,LJ=null}}}let W=new $,X=new Z,Y=new K,U=new WeakMap,H=new WeakMap,G={},N={},q={},F=new WeakMap,R=[],I=null,O=!1,E=null,w=null,P=null,L=null,A=null,C=null,_=null,V=new KJ(0,0,0),M=0,l=!1,D=null,m=null,o=null,b=null,c=null,s=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),x=!1,J0=0,W0=J.getParameter(J.VERSION);if(W0.indexOf("WebGL")!==-1)J0=parseFloat(/^WebGL (\d)/.exec(W0)[1]),x=J0>=1;else if(W0.indexOf("OpenGL ES")!==-1)J0=parseFloat(/^OpenGL ES (\d)/.exec(W0)[1]),x=J0>=2;let H0=null,C0={},D0=J.getParameter(J.SCISSOR_BOX),HJ=J.getParameter(J.VIEWPORT),UJ=new PJ().fromArray(D0),a=new PJ().fromArray(HJ);function q0(f,O0,i,R0){let I0=new Uint8Array(4),Z0=J.createTexture();J.bindTexture(f,Z0),J.texParameteri(f,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(f,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let U0=0;U0<i;U0++)if(f===J.TEXTURE_3D||f===J.TEXTURE_2D_ARRAY)J.texImage3D(O0,0,J.RGBA,1,1,R0,0,J.RGBA,J.UNSIGNED_BYTE,I0);else J.texImage2D(O0+U0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,I0);return Z0}let L0={};L0[J.TEXTURE_2D]=q0(J.TEXTURE_2D,J.TEXTURE_2D,1),L0[J.TEXTURE_CUBE_MAP]=q0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),L0[J.TEXTURE_2D_ARRAY]=q0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),L0[J.TEXTURE_3D]=q0(J.TEXTURE_3D,J.TEXTURE_3D,1,1),W.setClear(0,0,0,1),X.setClear(1),Y.setClear(0),N0(J.DEPTH_TEST),X.setFunc(p$),P0(!1),j0(b$),N0(J.CULL_FACE),Q0(l9);function N0(f){if(G[f]!==!0)J.enable(f),G[f]=!0}function y0(f){if(G[f]!==!1)J.disable(f),G[f]=!1}function ZJ(f,O0){if(q[f]!==O0){if(J.bindFramebuffer(f,O0),q[f]=O0,f===J.DRAW_FRAMEBUFFER)q[J.FRAMEBUFFER]=O0;if(f===J.FRAMEBUFFER)q[J.DRAW_FRAMEBUFFER]=O0;return!0}return!1}function d0(f,O0){let i=R,R0=!1;if(f){if(i=F.get(O0),i===void 0)i=[],F.set(O0,i);let I0=f.textures;if(i.length!==I0.length||i[0]!==J.COLOR_ATTACHMENT0){for(let Z0=0,U0=I0.length;Z0<U0;Z0++)i[Z0]=J.COLOR_ATTACHMENT0+Z0;i.length=I0.length,R0=!0}}else if(i[0]!==J.BACK)i[0]=J.BACK,R0=!0;if(R0)J.drawBuffers(i)}function u0(f){if(I!==f)return J.useProgram(f),I=f,!0;return!1}let e={[L7]:J.FUNC_ADD,[CW]:J.FUNC_SUBTRACT,[_W]:J.FUNC_REVERSE_SUBTRACT};e[wW]=J.MIN,e[TW]=J.MAX;let K0={[SW]:J.ZERO,[jW]:J.ONE,[vW]:J.SRC_COLOR,[yW]:J.SRC_ALPHA,[mW]:J.SRC_ALPHA_SATURATE,[gW]:J.DST_COLOR,[hW]:J.DST_ALPHA,[fW]:J.ONE_MINUS_SRC_COLOR,[bW]:J.ONE_MINUS_SRC_ALPHA,[pW]:J.ONE_MINUS_DST_COLOR,[xW]:J.ONE_MINUS_DST_ALPHA,[lW]:J.CONSTANT_COLOR,[dW]:J.ONE_MINUS_CONSTANT_COLOR,[uW]:J.CONSTANT_ALPHA,[cW]:J.ONE_MINUS_CONSTANT_ALPHA};function Q0(f,O0,i,R0,I0,Z0,U0,p0,LJ,OJ){if(f===l9){if(O===!0)y0(J.BLEND),O=!1;return}if(O===!1)N0(J.BLEND),O=!0;if(f!==PW){if(f!==E||OJ!==l){if(w!==L7||A!==L7)J.blendEquation(J.FUNC_ADD),w=L7,A=L7;if(OJ)switch(f){case Q6:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case h$:J.blendFunc(J.ONE,J.ONE);break;case x$:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case g$:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:m0("WebGLState: Invalid blending: ",f);break}else switch(f){case Q6:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case h$:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case x$:m0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case g$:m0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:m0("WebGLState: Invalid blending: ",f);break}P=null,L=null,C=null,_=null,V.set(0,0,0),M=0,E=f,l=OJ}return}if(I0=I0||O0,Z0=Z0||i,U0=U0||R0,O0!==w||I0!==A)J.blendEquationSeparate(e[O0],e[I0]),w=O0,A=I0;if(i!==P||R0!==L||Z0!==C||U0!==_)J.blendFuncSeparate(K0[i],K0[R0],K0[Z0],K0[U0]),P=i,L=R0,C=Z0,_=U0;if(p0.equals(V)===!1||LJ!==M)J.blendColor(p0.r,p0.g,p0.b,LJ),V.copy(p0),M=LJ;E=f,l=!1}function z0(f,O0){f.side===m9?y0(J.CULL_FACE):N0(J.CULL_FACE);let i=f.side===eJ;if(O0)i=!i;P0(i),f.blending===Q6&&f.transparent===!1?Q0(l9):Q0(f.blending,f.blendEquation,f.blendSrc,f.blendDst,f.blendEquationAlpha,f.blendSrcAlpha,f.blendDstAlpha,f.blendColor,f.blendAlpha,f.premultipliedAlpha),X.setFunc(f.depthFunc),X.setTest(f.depthTest),X.setMask(f.depthWrite),W.setMask(f.colorWrite);let R0=f.stencilWrite;if(Y.setTest(R0),R0)Y.setMask(f.stencilWriteMask),Y.setFunc(f.stencilFunc,f.stencilRef,f.stencilFuncMask),Y.setOp(f.stencilFail,f.stencilZFail,f.stencilZPass);n0(f.polygonOffset,f.polygonOffsetFactor,f.polygonOffsetUnits),f.alphaToCoverage===!0?N0(J.SAMPLE_ALPHA_TO_COVERAGE):y0(J.SAMPLE_ALPHA_TO_COVERAGE)}function P0(f){if(D!==f){if(f)J.frontFace(J.CW);else J.frontFace(J.CCW);D=f}}function j0(f){if(f!==MW){if(N0(J.CULL_FACE),f!==m)if(f===b$)J.cullFace(J.BACK);else if(f===IW)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else y0(J.CULL_FACE);m=f}function b0(f){if(f!==o){if(x)J.lineWidth(f);o=f}}function n0(f,O0,i){if(f){if(N0(J.POLYGON_OFFSET_FILL),b!==O0||c!==i){if(b=O0,c=i,X.getReversed())O0=-O0;J.polygonOffset(O0,i)}}else y0(J.POLYGON_OFFSET_FILL)}function c0(f){if(f)N0(J.SCISSOR_TEST);else y0(J.SCISSOR_TEST)}function T(f){if(f===void 0)f=J.TEXTURE0+s-1;if(H0!==f)J.activeTexture(f),H0=f}function DJ(f,O0,i){if(i===void 0)if(H0===null)i=J.TEXTURE0+s-1;else i=H0;let R0=C0[i];if(R0===void 0)R0={type:void 0,texture:void 0},C0[i]=R0;if(R0.type!==f||R0.texture!==O0){if(H0!==i)J.activeTexture(i),H0=i;J.bindTexture(f,O0||L0[f]),R0.type=f,R0.texture=O0}}function t0(){let f=C0[H0];if(f!==void 0&&f.type!==void 0)J.bindTexture(f.type,null),f.type=void 0,f.texture=void 0}function e0(){try{J.compressedTexImage2D(...arguments)}catch(f){m0("WebGLState:",f)}}function B(){try{J.compressedTexImage3D(...arguments)}catch(f){m0("WebGLState:",f)}}function k(){try{J.texSubImage2D(...arguments)}catch(f){m0("WebGLState:",f)}}function S(){try{J.texSubImage3D(...arguments)}catch(f){m0("WebGLState:",f)}}function d(){try{J.compressedTexSubImage2D(...arguments)}catch(f){m0("WebGLState:",f)}}function $0(){try{J.compressedTexSubImage3D(...arguments)}catch(f){m0("WebGLState:",f)}}function X0(){try{J.texStorage2D(...arguments)}catch(f){m0("WebGLState:",f)}}function F0(){try{J.texStorage3D(...arguments)}catch(f){m0("WebGLState:",f)}}function n(){try{J.texImage2D(...arguments)}catch(f){m0("WebGLState:",f)}}function r(){try{J.texImage3D(...arguments)}catch(f){m0("WebGLState:",f)}}function M0(f){if(N[f]!==void 0)return N[f];else return J.getParameter(f)}function v0(f,O0){if(N[f]!==O0)J.pixelStorei(f,O0),N[f]=O0}function G0(f){if(UJ.equals(f)===!1)J.scissor(f.x,f.y,f.z,f.w),UJ.copy(f)}function Y0(f){if(a.equals(f)===!1)J.viewport(f.x,f.y,f.z,f.w),a.copy(f)}function x0(f,O0){let i=H.get(O0);if(i===void 0)i=new WeakMap,H.set(O0,i);let R0=i.get(f);if(R0===void 0)R0=J.getUniformBlockIndex(O0,f.name),i.set(f,R0)}function g0(f,O0){let R0=H.get(O0).get(f);if(U.get(O0)!==R0)J.uniformBlockBinding(O0,R0,f.__bindingPointIndex),U.set(O0,R0)}function qJ(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),X.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),G={},N={},H0=null,C0={},q={},F=new WeakMap,R=[],I=null,O=!1,E=null,w=null,P=null,L=null,A=null,C=null,_=null,V=new KJ(0,0,0),M=0,l=!1,D=null,m=null,o=null,b=null,c=null,UJ.set(0,0,J.canvas.width,J.canvas.height),a.set(0,0,J.canvas.width,J.canvas.height),W.reset(),X.reset(),Y.reset()}return{buffers:{color:W,depth:X,stencil:Y},enable:N0,disable:y0,bindFramebuffer:ZJ,drawBuffers:d0,useProgram:u0,setBlending:Q0,setMaterial:z0,setFlipSided:P0,setCullFace:j0,setLineWidth:b0,setPolygonOffset:n0,setScissorTest:c0,activeTexture:T,bindTexture:DJ,unbindTexture:t0,compressedTexImage2D:e0,compressedTexImage3D:B,texImage2D:n,texImage3D:r,pixelStorei:v0,getParameter:M0,updateUBOMapping:x0,uniformBlockBinding:g0,texStorage2D:X0,texStorage3D:F0,texSubImage2D:k,texSubImage3D:S,compressedTexSubImage2D:d,compressedTexSubImage3D:$0,scissor:G0,viewport:Y0,reset:qJ}}function BG(J,Q,$,Z,K,W,X){let Y=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,U=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),H=new E0,G=new WeakMap,N=new Set,q,F=new WeakMap,R=!1;try{R=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(B){}function I(B,k){return R?new OffscreenCanvas(B,k):E7("canvas")}function O(B,k,S){let d=1,$0=e0(B);if($0.width>S||$0.height>S)d=S/Math.max($0.width,$0.height);if(d<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){let X0=Math.floor(d*$0.width),F0=Math.floor(d*$0.height);if(q===void 0)q=I(X0,F0);let n=k?I(X0,F0):q;return n.width=X0,n.height=F0,n.getContext("2d").drawImage(B,0,0,X0,F0),l0("WebGLRenderer: Texture has been resized from ("+$0.width+"x"+$0.height+") to ("+X0+"x"+F0+")."),n}else{if("data"in B)l0("WebGLRenderer: Image in DataTexture is too big ("+$0.width+"x"+$0.height+").");return B}return B}function E(B){return B.generateMipmaps}function w(B){J.generateMipmap(B)}function P(B){if(B.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(B.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function L(B,k,S,d,$0,X0=!1){if(B!==null){if(J[B]!==void 0)return J[B];l0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let F0;if(d){if(F0=Q.get("EXT_texture_norm16"),!F0)l0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let n=k;if(k===J.RED){if(S===J.FLOAT)n=J.R32F;if(S===J.HALF_FLOAT)n=J.R16F;if(S===J.UNSIGNED_BYTE)n=J.R8;if(S===J.UNSIGNED_SHORT&&F0)n=F0.R16_EXT;if(S===J.SHORT&&F0)n=F0.R16_SNORM_EXT}if(k===J.RED_INTEGER){if(S===J.UNSIGNED_BYTE)n=J.R8UI;if(S===J.UNSIGNED_SHORT)n=J.R16UI;if(S===J.UNSIGNED_INT)n=J.R32UI;if(S===J.BYTE)n=J.R8I;if(S===J.SHORT)n=J.R16I;if(S===J.INT)n=J.R32I}if(k===J.RG){if(S===J.FLOAT)n=J.RG32F;if(S===J.HALF_FLOAT)n=J.RG16F;if(S===J.UNSIGNED_BYTE)n=J.RG8;if(S===J.UNSIGNED_SHORT&&F0)n=F0.RG16_EXT;if(S===J.SHORT&&F0)n=F0.RG16_SNORM_EXT}if(k===J.RG_INTEGER){if(S===J.UNSIGNED_BYTE)n=J.RG8UI;if(S===J.UNSIGNED_SHORT)n=J.RG16UI;if(S===J.UNSIGNED_INT)n=J.RG32UI;if(S===J.BYTE)n=J.RG8I;if(S===J.SHORT)n=J.RG16I;if(S===J.INT)n=J.RG32I}if(k===J.RGB_INTEGER){if(S===J.UNSIGNED_BYTE)n=J.RGB8UI;if(S===J.UNSIGNED_SHORT)n=J.RGB16UI;if(S===J.UNSIGNED_INT)n=J.RGB32UI;if(S===J.BYTE)n=J.RGB8I;if(S===J.SHORT)n=J.RGB16I;if(S===J.INT)n=J.RGB32I}if(k===J.RGBA_INTEGER){if(S===J.UNSIGNED_BYTE)n=J.RGBA8UI;if(S===J.UNSIGNED_SHORT)n=J.RGBA16UI;if(S===J.UNSIGNED_INT)n=J.RGBA32UI;if(S===J.BYTE)n=J.RGBA8I;if(S===J.SHORT)n=J.RGBA16I;if(S===J.INT)n=J.RGBA32I}if(k===J.RGB){if(S===J.UNSIGNED_SHORT&&F0)n=F0.RGB16_EXT;if(S===J.SHORT&&F0)n=F0.RGB16_SNORM_EXT;if(S===J.UNSIGNED_INT_5_9_9_9_REV)n=J.RGB9_E5;if(S===J.UNSIGNED_INT_10F_11F_11F_REV)n=J.R11F_G11F_B10F}if(k===J.RGBA){let r=X0?SZ:XJ.getTransfer($0);if(S===J.FLOAT)n=J.RGBA32F;if(S===J.HALF_FLOAT)n=J.RGBA16F;if(S===J.UNSIGNED_BYTE)n=r===zJ?J.SRGB8_ALPHA8:J.RGBA8;if(S===J.UNSIGNED_SHORT&&F0)n=F0.RGBA16_EXT;if(S===J.SHORT&&F0)n=F0.RGBA16_SNORM_EXT;if(S===J.UNSIGNED_SHORT_4_4_4_4)n=J.RGBA4;if(S===J.UNSIGNED_SHORT_5_5_5_1)n=J.RGB5_A1}if(n===J.R16F||n===J.R32F||n===J.RG16F||n===J.RG32F||n===J.RGBA16F||n===J.RGBA32F)Q.get("EXT_color_buffer_float");return n}function A(B,k){let S;if(B){if(k===null||k===V8||k===B7)S=J.DEPTH24_STENCIL8;else if(k===Z8)S=J.DEPTH32F_STENCIL8;else if(k===W6)S=J.DEPTH24_STENCIL8,l0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(k===null||k===V8||k===B7)S=J.DEPTH_COMPONENT24;else if(k===Z8)S=J.DEPTH_COMPONENT32F;else if(k===W6)S=J.DEPTH_COMPONENT16;return S}function C(B,k){if(E(B)===!0||B.isFramebufferTexture&&B.minFilter!==k8&&B.minFilter!==fJ)return Math.log2(Math.max(k.width,k.height))+1;else if(B.mipmaps!==void 0&&B.mipmaps.length>0)return B.mipmaps.length;else if(B.isCompressedTexture&&Array.isArray(B.image))return k.mipmaps.length;else return 1}function _(B){let k=B.target;if(k.removeEventListener("dispose",_),M(k),k.isVideoTexture)G.delete(k);if(k.isHTMLTexture)N.delete(k)}function V(B){let k=B.target;k.removeEventListener("dispose",V),D(k)}function M(B){let k=Z.get(B);if(k.__webglInit===void 0)return;let S=B.source,d=F.get(S);if(d){let $0=d[k.__cacheKey];if($0.usedTimes--,$0.usedTimes===0)l(B);if(Object.keys(d).length===0)F.delete(S)}Z.remove(B)}function l(B){let k=Z.get(B);J.deleteTexture(k.__webglTexture);let S=B.source,d=F.get(S);delete d[k.__cacheKey],X.memory.textures--}function D(B){let k=Z.get(B);if(B.depthTexture)B.depthTexture.dispose(),Z.remove(B.depthTexture);if(B.isWebGLCubeRenderTarget)for(let d=0;d<6;d++){if(Array.isArray(k.__webglFramebuffer[d]))for(let $0=0;$0<k.__webglFramebuffer[d].length;$0++)J.deleteFramebuffer(k.__webglFramebuffer[d][$0]);else J.deleteFramebuffer(k.__webglFramebuffer[d]);if(k.__webglDepthbuffer)J.deleteRenderbuffer(k.__webglDepthbuffer[d])}else{if(Array.isArray(k.__webglFramebuffer))for(let d=0;d<k.__webglFramebuffer.length;d++)J.deleteFramebuffer(k.__webglFramebuffer[d]);else J.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer)J.deleteRenderbuffer(k.__webglDepthbuffer);if(k.__webglMultisampledFramebuffer)J.deleteFramebuffer(k.__webglMultisampledFramebuffer);if(k.__webglColorRenderbuffer){for(let d=0;d<k.__webglColorRenderbuffer.length;d++)if(k.__webglColorRenderbuffer[d])J.deleteRenderbuffer(k.__webglColorRenderbuffer[d])}if(k.__webglDepthRenderbuffer)J.deleteRenderbuffer(k.__webglDepthRenderbuffer)}let S=B.textures;for(let d=0,$0=S.length;d<$0;d++){let X0=Z.get(S[d]);if(X0.__webglTexture)J.deleteTexture(X0.__webglTexture),X.memory.textures--;Z.remove(S[d])}Z.remove(B)}let m=0;function o(){m=0}function b(){return m}function c(B){m=B}function s(){let B=m;if(B>=K.maxTextures)l0("WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+K.maxTextures);return m+=1,B}function x(B){let k=[];return k.push(B.wrapS),k.push(B.wrapT),k.push(B.wrapR||0),k.push(B.magFilter),k.push(B.minFilter),k.push(B.anisotropy),k.push(B.internalFormat),k.push(B.format),k.push(B.type),k.push(B.generateMipmaps),k.push(B.premultiplyAlpha),k.push(B.flipY),k.push(B.unpackAlignment),k.push(B.colorSpace),k.join()}function J0(B,k){let S=Z.get(B);if(B.isVideoTexture)DJ(B);if(B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&S.__version!==B.version){let d=B.image;if(d===null)l0("WebGLRenderer: Texture marked for update but no image data found.");else if(d.complete===!1)l0("WebGLRenderer: Texture marked for update but image is incomplete");else{y0(S,B,k);return}}else if(B.isExternalTexture)S.__webglTexture=B.sourceTexture?B.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,S.__webglTexture,J.TEXTURE0+k)}function W0(B,k){let S=Z.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&S.__version!==B.version){y0(S,B,k);return}else if(B.isExternalTexture)S.__webglTexture=B.sourceTexture?B.sourceTexture:null;$.bindTexture(J.TEXTURE_2D_ARRAY,S.__webglTexture,J.TEXTURE0+k)}function H0(B,k){let S=Z.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&S.__version!==B.version){y0(S,B,k);return}$.bindTexture(J.TEXTURE_3D,S.__webglTexture,J.TEXTURE0+k)}function C0(B,k){let S=Z.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&S.__version!==B.version){ZJ(S,B,k);return}$.bindTexture(J.TEXTURE_CUBE_MAP,S.__webglTexture,J.TEXTURE0+k)}let D0={[UQ]:J.REPEAT,[HQ]:J.CLAMP_TO_EDGE,[$X]:J.MIRRORED_REPEAT},HJ={[k8]:J.NEAREST,[ZX]:J.NEAREST_MIPMAP_NEAREST,[K6]:J.NEAREST_MIPMAP_LINEAR,[fJ]:J.LINEAR,[qQ]:J.LINEAR_MIPMAP_NEAREST,[$8]:J.LINEAR_MIPMAP_LINEAR},UJ={[NX]:J.NEVER,[RX]:J.ALWAYS,[FX]:J.LESS,[RQ]:J.LEQUAL,[OX]:J.EQUAL,[kQ]:J.GEQUAL,[EX]:J.GREATER,[DX]:J.NOTEQUAL};function a(B,k){if(k.type===Z8&&Q.has("OES_texture_float_linear")===!1&&(k.magFilter===fJ||k.magFilter===qQ||k.magFilter===K6||k.magFilter===$8||k.minFilter===fJ||k.minFilter===qQ||k.minFilter===K6||k.minFilter===$8))l0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(B,J.TEXTURE_WRAP_S,D0[k.wrapS]),J.texParameteri(B,J.TEXTURE_WRAP_T,D0[k.wrapT]),B===J.TEXTURE_3D||B===J.TEXTURE_2D_ARRAY)J.texParameteri(B,J.TEXTURE_WRAP_R,D0[k.wrapR]);if(J.texParameteri(B,J.TEXTURE_MAG_FILTER,HJ[k.magFilter]),J.texParameteri(B,J.TEXTURE_MIN_FILTER,HJ[k.minFilter]),k.compareFunction)J.texParameteri(B,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(B,J.TEXTURE_COMPARE_FUNC,UJ[k.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(k.magFilter===k8)return;if(k.minFilter!==K6&&k.minFilter!==$8)return;if(k.type===Z8&&Q.has("OES_texture_float_linear")===!1)return;if(k.anisotropy>1||Z.get(k).__currentAnisotropy){let S=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(B,S.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(k.anisotropy,K.getMaxAnisotropy())),Z.get(k).__currentAnisotropy=k.anisotropy}}}function q0(B,k){let S=!1;if(B.__webglInit===void 0)B.__webglInit=!0,k.addEventListener("dispose",_);let d=k.source,$0=F.get(d);if($0===void 0)$0={},F.set(d,$0);let X0=x(k);if(X0!==B.__cacheKey){if($0[X0]===void 0)$0[X0]={texture:J.createTexture(),usedTimes:0},X.memory.textures++,S=!0;$0[X0].usedTimes++;let F0=$0[B.__cacheKey];if(F0!==void 0){if($0[B.__cacheKey].usedTimes--,F0.usedTimes===0)l(k)}B.__cacheKey=X0,B.__webglTexture=$0[X0].texture}return S}function L0(B,k,S){return Math.floor(Math.floor(B/S)/k)}function N0(B,k,S,d){let X0=B.updateRanges;if(X0.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,k.width,k.height,S,d,k.data);else{X0.sort((v0,G0)=>v0.start-G0.start);let F0=0;for(let v0=1;v0<X0.length;v0++){let G0=X0[F0],Y0=X0[v0],x0=G0.start+G0.count,g0=L0(Y0.start,k.width,4),qJ=L0(G0.start,k.width,4);if(Y0.start<=x0+1&&g0===qJ&&L0(Y0.start+Y0.count-1,k.width,4)===g0)G0.count=Math.max(G0.count,Y0.start+Y0.count-G0.start);else++F0,X0[F0]=Y0}X0.length=F0+1;let n=$.getParameter(J.UNPACK_ROW_LENGTH),r=$.getParameter(J.UNPACK_SKIP_PIXELS),M0=$.getParameter(J.UNPACK_SKIP_ROWS);$.pixelStorei(J.UNPACK_ROW_LENGTH,k.width);for(let v0=0,G0=X0.length;v0<G0;v0++){let Y0=X0[v0],x0=Math.floor(Y0.start/4),g0=Math.ceil(Y0.count/4),qJ=x0%k.width,f=Math.floor(x0/k.width),O0=g0,i=1;$.pixelStorei(J.UNPACK_SKIP_PIXELS,qJ),$.pixelStorei(J.UNPACK_SKIP_ROWS,f),$.texSubImage2D(J.TEXTURE_2D,0,qJ,f,O0,1,S,d,k.data)}B.clearUpdateRanges(),$.pixelStorei(J.UNPACK_ROW_LENGTH,n),$.pixelStorei(J.UNPACK_SKIP_PIXELS,r),$.pixelStorei(J.UNPACK_SKIP_ROWS,M0)}}function y0(B,k,S){let d=J.TEXTURE_2D;if(k.isDataArrayTexture||k.isCompressedArrayTexture)d=J.TEXTURE_2D_ARRAY;if(k.isData3DTexture)d=J.TEXTURE_3D;let $0=q0(B,k),X0=k.source;$.bindTexture(d,B.__webglTexture,J.TEXTURE0+S);let F0=Z.get(X0);if(X0.version!==F0.__version||$0===!0){if($.activeTexture(J.TEXTURE0+S),(typeof ImageBitmap<"u"&&k.image instanceof ImageBitmap)===!1){let i=XJ.getPrimaries(XJ.workingColorSpace),R0=k.colorSpace===p8?null:XJ.getPrimaries(k.colorSpace),I0=k.colorSpace===p8||i===R0?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,k.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,I0)}$.pixelStorei(J.UNPACK_ALIGNMENT,k.unpackAlignment);let r=O(k.image,!1,K.maxTextureSize);r=t0(k,r);let M0=W.convert(k.format,k.colorSpace),v0=W.convert(k.type),G0=L(k.internalFormat,M0,v0,k.normalized,k.colorSpace,k.isVideoTexture);a(d,k);let Y0,x0=k.mipmaps,g0=k.isVideoTexture!==!0,qJ=F0.__version===void 0||$0===!0,f=X0.dataReady,O0=C(k,r);if(k.isDepthTexture){if(G0=A(k.format===x8,k.type),qJ)if(g0)$.texStorage2D(J.TEXTURE_2D,1,G0,r.width,r.height);else $.texImage2D(J.TEXTURE_2D,0,G0,r.width,r.height,0,M0,v0,null)}else if(k.isDataTexture)if(x0.length>0){if(g0&&qJ)$.texStorage2D(J.TEXTURE_2D,O0,G0,x0[0].width,x0[0].height);for(let i=0,R0=x0.length;i<R0;i++)if(Y0=x0[i],g0){if(f)$.texSubImage2D(J.TEXTURE_2D,i,0,0,Y0.width,Y0.height,M0,v0,Y0.data)}else $.texImage2D(J.TEXTURE_2D,i,G0,Y0.width,Y0.height,0,M0,v0,Y0.data);k.generateMipmaps=!1}else if(g0){if(qJ)$.texStorage2D(J.TEXTURE_2D,O0,G0,r.width,r.height);if(f)N0(k,r,M0,v0)}else $.texImage2D(J.TEXTURE_2D,0,G0,r.width,r.height,0,M0,v0,r.data);else if(k.isCompressedTexture)if(k.isCompressedArrayTexture){if(g0&&qJ)$.texStorage3D(J.TEXTURE_2D_ARRAY,O0,G0,x0[0].width,x0[0].height,r.depth);for(let i=0,R0=x0.length;i<R0;i++)if(Y0=x0[i],k.format!==d9)if(M0!==null)if(g0){if(f)if(k.layerUpdates.size>0){let I0=NK(Y0.width,Y0.height,k.format,k.type);for(let Z0 of k.layerUpdates){let U0=Y0.data.subarray(Z0*I0/Y0.data.BYTES_PER_ELEMENT,(Z0+1)*I0/Y0.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,i,0,0,Z0,Y0.width,Y0.height,1,M0,U0)}k.clearLayerUpdates()}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,i,0,0,0,Y0.width,Y0.height,r.depth,M0,Y0.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,i,G0,Y0.width,Y0.height,r.depth,0,Y0.data,0,0);else l0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(g0){if(f)$.texSubImage3D(J.TEXTURE_2D_ARRAY,i,0,0,0,Y0.width,Y0.height,r.depth,M0,v0,Y0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,i,G0,Y0.width,Y0.height,r.depth,0,M0,v0,Y0.data)}else{if(g0&&qJ)$.texStorage2D(J.TEXTURE_2D,O0,G0,x0[0].width,x0[0].height);for(let i=0,R0=x0.length;i<R0;i++)if(Y0=x0[i],k.format!==d9)if(M0!==null)if(g0){if(f)$.compressedTexSubImage2D(J.TEXTURE_2D,i,0,0,Y0.width,Y0.height,M0,Y0.data)}else $.compressedTexImage2D(J.TEXTURE_2D,i,G0,Y0.width,Y0.height,0,Y0.data);else l0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(g0){if(f)$.texSubImage2D(J.TEXTURE_2D,i,0,0,Y0.width,Y0.height,M0,v0,Y0.data)}else $.texImage2D(J.TEXTURE_2D,i,G0,Y0.width,Y0.height,0,M0,v0,Y0.data)}else if(k.isDataArrayTexture)if(g0){if(qJ)$.texStorage3D(J.TEXTURE_2D_ARRAY,O0,G0,r.width,r.height,r.depth);if(f)if(k.layerUpdates.size>0){let i=NK(r.width,r.height,k.format,k.type);for(let R0 of k.layerUpdates){let I0=r.data.subarray(R0*i/r.data.BYTES_PER_ELEMENT,(R0+1)*i/r.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,R0,r.width,r.height,1,M0,v0,I0)}k.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,r.width,r.height,r.depth,M0,v0,r.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,G0,r.width,r.height,r.depth,0,M0,v0,r.data);else if(k.isData3DTexture)if(g0){if(qJ)$.texStorage3D(J.TEXTURE_3D,O0,G0,r.width,r.height,r.depth);if(f)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,r.width,r.height,r.depth,M0,v0,r.data)}else $.texImage3D(J.TEXTURE_3D,0,G0,r.width,r.height,r.depth,0,M0,v0,r.data);else if(k.isFramebufferTexture){if(qJ)if(g0)$.texStorage2D(J.TEXTURE_2D,O0,G0,r.width,r.height);else{let{width:i,height:R0}=r;for(let I0=0;I0<O0;I0++)$.texImage2D(J.TEXTURE_2D,I0,G0,i,R0,0,M0,v0,null),i>>=1,R0>>=1}}else if(k.isHTMLTexture){if("texElementImage2D"in J){let i=J.canvas;if(!i.hasAttribute("layoutsubtree"))i.setAttribute("layoutsubtree","true");if(r.parentNode!==i){i.appendChild(r),N.add(k),i.onpaint=(R0)=>{let I0=R0.changedElements;for(let Z0 of N)if(I0.includes(Z0.image))Z0.needsUpdate=!0},i.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,r);else{let{RGBA:I0,RGBA:Z0,UNSIGNED_BYTE:U0}=J;J.texElementImage2D(J.TEXTURE_2D,0,I0,Z0,U0,r)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(x0.length>0){if(g0&&qJ){let i=e0(x0[0]);$.texStorage2D(J.TEXTURE_2D,O0,G0,i.width,i.height)}for(let i=0,R0=x0.length;i<R0;i++)if(Y0=x0[i],g0){if(f)$.texSubImage2D(J.TEXTURE_2D,i,0,0,M0,v0,Y0)}else $.texImage2D(J.TEXTURE_2D,i,G0,M0,v0,Y0);k.generateMipmaps=!1}else if(g0){if(qJ){let i=e0(r);$.texStorage2D(J.TEXTURE_2D,O0,G0,i.width,i.height)}if(f)$.texSubImage2D(J.TEXTURE_2D,0,0,0,M0,v0,r)}else $.texImage2D(J.TEXTURE_2D,0,G0,M0,v0,r);if(E(k))w(d);if(F0.__version=X0.version,k.onUpdate)k.onUpdate(k)}B.__version=k.version}function ZJ(B,k,S){if(k.image.length!==6)return;let d=q0(B,k),$0=k.source;$.bindTexture(J.TEXTURE_CUBE_MAP,B.__webglTexture,J.TEXTURE0+S);let X0=Z.get($0);if($0.version!==X0.__version||d===!0){$.activeTexture(J.TEXTURE0+S);let F0=XJ.getPrimaries(XJ.workingColorSpace),n=k.colorSpace===p8?null:XJ.getPrimaries(k.colorSpace),r=k.colorSpace===p8||F0===n?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,k.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),$.pixelStorei(J.UNPACK_ALIGNMENT,k.unpackAlignment),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,r);let M0=k.isCompressedTexture||k.image[0].isCompressedTexture,v0=k.image[0]&&k.image[0].isDataTexture,G0=[];for(let Z0=0;Z0<6;Z0++){if(!M0&&!v0)G0[Z0]=O(k.image[Z0],!0,K.maxCubemapSize);else G0[Z0]=v0?k.image[Z0].image:k.image[Z0];G0[Z0]=t0(k,G0[Z0])}let Y0=G0[0],x0=W.convert(k.format,k.colorSpace),g0=W.convert(k.type),qJ=L(k.internalFormat,x0,g0,k.normalized,k.colorSpace),f=k.isVideoTexture!==!0,O0=X0.__version===void 0||d===!0,i=$0.dataReady,R0=C(k,Y0);a(J.TEXTURE_CUBE_MAP,k);let I0;if(M0){if(f&&O0)$.texStorage2D(J.TEXTURE_CUBE_MAP,R0,qJ,Y0.width,Y0.height);for(let Z0=0;Z0<6;Z0++){I0=G0[Z0].mipmaps;for(let U0=0;U0<I0.length;U0++){let p0=I0[U0];if(k.format!==d9)if(x0!==null)if(f){if(i)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Z0,U0,0,0,p0.width,p0.height,x0,p0.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Z0,U0,qJ,p0.width,p0.height,0,p0.data);else l0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(f){if(i)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Z0,U0,0,0,p0.width,p0.height,x0,g0,p0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Z0,U0,qJ,p0.width,p0.height,0,x0,g0,p0.data)}}}else{if(I0=k.mipmaps,f&&O0){if(I0.length>0)R0++;let Z0=e0(G0[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,R0,qJ,Z0.width,Z0.height)}for(let Z0=0;Z0<6;Z0++)if(v0){if(f){if(i)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Z0,0,0,0,G0[Z0].width,G0[Z0].height,x0,g0,G0[Z0].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Z0,0,qJ,G0[Z0].width,G0[Z0].height,0,x0,g0,G0[Z0].data);for(let U0=0;U0<I0.length;U0++){let LJ=I0[U0].image[Z0].image;if(f){if(i)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Z0,U0+1,0,0,LJ.width,LJ.height,x0,g0,LJ.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Z0,U0+1,qJ,LJ.width,LJ.height,0,x0,g0,LJ.data)}}else{if(f){if(i)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Z0,0,0,0,x0,g0,G0[Z0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Z0,0,qJ,x0,g0,G0[Z0]);for(let U0=0;U0<I0.length;U0++){let p0=I0[U0];if(f){if(i)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Z0,U0+1,0,0,x0,g0,p0.image[Z0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Z0,U0+1,qJ,x0,g0,p0.image[Z0])}}}if(E(k))w(J.TEXTURE_CUBE_MAP);if(X0.__version=$0.version,k.onUpdate)k.onUpdate(k)}B.__version=k.version}function d0(B,k,S,d,$0,X0){let F0=W.convert(S.format,S.colorSpace),n=W.convert(S.type),r=L(S.internalFormat,F0,n,S.normalized,S.colorSpace),M0=Z.get(k),v0=Z.get(S);if(v0.__renderTarget=k,!M0.__hasExternalTextures){let G0=Math.max(1,k.width>>X0),Y0=Math.max(1,k.height>>X0);if($0===J.TEXTURE_3D||$0===J.TEXTURE_2D_ARRAY)$.texImage3D($0,X0,r,G0,Y0,k.depth,0,F0,n,null);else $.texImage2D($0,X0,r,G0,Y0,0,F0,n,null)}if($.bindFramebuffer(J.FRAMEBUFFER,B),T(k))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,d,$0,v0.__webglTexture,0,c0(k));else if($0===J.TEXTURE_2D||$0>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&$0<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,d,$0,v0.__webglTexture,X0);$.bindFramebuffer(J.FRAMEBUFFER,null)}function u0(B,k,S){if(J.bindRenderbuffer(J.RENDERBUFFER,B),k.depthBuffer){let d=k.depthTexture,$0=d&&d.isDepthTexture?d.type:null,X0=A(k.stencilBuffer,$0),F0=k.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(T(k))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,c0(k),X0,k.width,k.height);else if(S)J.renderbufferStorageMultisample(J.RENDERBUFFER,c0(k),X0,k.width,k.height);else J.renderbufferStorage(J.RENDERBUFFER,X0,k.width,k.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,F0,J.RENDERBUFFER,B)}else{let d=k.textures;for(let $0=0;$0<d.length;$0++){let X0=d[$0],F0=W.convert(X0.format,X0.colorSpace),n=W.convert(X0.type),r=L(X0.internalFormat,F0,n,X0.normalized,X0.colorSpace);if(T(k))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,c0(k),r,k.width,k.height);else if(S)J.renderbufferStorageMultisample(J.RENDERBUFFER,c0(k),r,k.width,k.height);else J.renderbufferStorage(J.RENDERBUFFER,r,k.width,k.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function e(B,k,S){let d=k.isWebGLCubeRenderTarget===!0;if($.bindFramebuffer(J.FRAMEBUFFER,B),!(k.depthTexture&&k.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $0=Z.get(k.depthTexture);if($0.__renderTarget=k,!$0.__webglTexture||k.depthTexture.image.width!==k.width||k.depthTexture.image.height!==k.height)k.depthTexture.image.width=k.width,k.depthTexture.image.height=k.height,k.depthTexture.needsUpdate=!0;if(d){if($0.__webglInit===void 0)$0.__webglInit=!0,k.depthTexture.addEventListener("dispose",_);if($0.__webglTexture===void 0){$0.__webglTexture=J.createTexture(),$.bindTexture(J.TEXTURE_CUBE_MAP,$0.__webglTexture),a(J.TEXTURE_CUBE_MAP,k.depthTexture);let M0=W.convert(k.depthTexture.format),v0=W.convert(k.depthTexture.type),G0;if(k.depthTexture.format===h8)G0=J.DEPTH_COMPONENT24;else if(k.depthTexture.format===x8)G0=J.DEPTH24_STENCIL8;for(let Y0=0;Y0<6;Y0++)J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,0,G0,k.width,k.height,0,M0,v0,null)}}else J0(k.depthTexture,0);let X0=$0.__webglTexture,F0=c0(k),n=d?J.TEXTURE_CUBE_MAP_POSITIVE_X+S:J.TEXTURE_2D,r=k.depthTexture.format===x8?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(k.depthTexture.format===h8)if(T(k))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,r,n,X0,0,F0);else J.framebufferTexture2D(J.FRAMEBUFFER,r,n,X0,0);else if(k.depthTexture.format===x8)if(T(k))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,r,n,X0,0,F0);else J.framebufferTexture2D(J.FRAMEBUFFER,r,n,X0,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function K0(B){let k=Z.get(B),S=B.isWebGLCubeRenderTarget===!0;if(k.__boundDepthTexture!==B.depthTexture){let d=B.depthTexture;if(k.__depthDisposeCallback)k.__depthDisposeCallback();if(d){let $0=()=>{delete k.__boundDepthTexture,delete k.__depthDisposeCallback,d.removeEventListener("dispose",$0)};d.addEventListener("dispose",$0),k.__depthDisposeCallback=$0}k.__boundDepthTexture=d}if(B.depthTexture&&!k.__autoAllocateDepthBuffer)if(S)for(let d=0;d<6;d++)e(k.__webglFramebuffer[d],B,d);else{let d=B.texture.mipmaps;if(d&&d.length>0)e(k.__webglFramebuffer[0],B,0);else e(k.__webglFramebuffer,B,0)}else if(S){k.__webglDepthbuffer=[];for(let d=0;d<6;d++)if($.bindFramebuffer(J.FRAMEBUFFER,k.__webglFramebuffer[d]),k.__webglDepthbuffer[d]===void 0)k.__webglDepthbuffer[d]=J.createRenderbuffer(),u0(k.__webglDepthbuffer[d],B,!1);else{let $0=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,X0=k.__webglDepthbuffer[d];J.bindRenderbuffer(J.RENDERBUFFER,X0),J.framebufferRenderbuffer(J.FRAMEBUFFER,$0,J.RENDERBUFFER,X0)}}else{let d=B.texture.mipmaps;if(d&&d.length>0)$.bindFramebuffer(J.FRAMEBUFFER,k.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,k.__webglFramebuffer);if(k.__webglDepthbuffer===void 0)k.__webglDepthbuffer=J.createRenderbuffer(),u0(k.__webglDepthbuffer,B,!1);else{let $0=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,X0=k.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,X0),J.framebufferRenderbuffer(J.FRAMEBUFFER,$0,J.RENDERBUFFER,X0)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function Q0(B,k,S){let d=Z.get(B);if(k!==void 0)d0(d.__webglFramebuffer,B,B.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(S!==void 0)K0(B)}function z0(B){let k=B.texture,S=Z.get(B),d=Z.get(k);B.addEventListener("dispose",V);let $0=B.textures,X0=B.isWebGLCubeRenderTarget===!0,F0=$0.length>1;if(!F0){if(d.__webglTexture===void 0)d.__webglTexture=J.createTexture();d.__version=k.version,X.memory.textures++}if(X0){S.__webglFramebuffer=[];for(let n=0;n<6;n++)if(k.mipmaps&&k.mipmaps.length>0){S.__webglFramebuffer[n]=[];for(let r=0;r<k.mipmaps.length;r++)S.__webglFramebuffer[n][r]=J.createFramebuffer()}else S.__webglFramebuffer[n]=J.createFramebuffer()}else{if(k.mipmaps&&k.mipmaps.length>0){S.__webglFramebuffer=[];for(let n=0;n<k.mipmaps.length;n++)S.__webglFramebuffer[n]=J.createFramebuffer()}else S.__webglFramebuffer=J.createFramebuffer();if(F0)for(let n=0,r=$0.length;n<r;n++){let M0=Z.get($0[n]);if(M0.__webglTexture===void 0)M0.__webglTexture=J.createTexture(),X.memory.textures++}if(B.samples>0&&T(B)===!1){S.__webglMultisampledFramebuffer=J.createFramebuffer(),S.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,S.__webglMultisampledFramebuffer);for(let n=0;n<$0.length;n++){let r=$0[n];S.__webglColorRenderbuffer[n]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,S.__webglColorRenderbuffer[n]);let M0=W.convert(r.format,r.colorSpace),v0=W.convert(r.type),G0=L(r.internalFormat,M0,v0,r.normalized,r.colorSpace,B.isXRRenderTarget===!0),Y0=c0(B);J.renderbufferStorageMultisample(J.RENDERBUFFER,Y0,G0,B.width,B.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+n,J.RENDERBUFFER,S.__webglColorRenderbuffer[n])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),B.depthBuffer)S.__webglDepthRenderbuffer=J.createRenderbuffer(),u0(S.__webglDepthRenderbuffer,B,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(X0){$.bindTexture(J.TEXTURE_CUBE_MAP,d.__webglTexture),a(J.TEXTURE_CUBE_MAP,k);for(let n=0;n<6;n++)if(k.mipmaps&&k.mipmaps.length>0)for(let r=0;r<k.mipmaps.length;r++)d0(S.__webglFramebuffer[n][r],B,k,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else d0(S.__webglFramebuffer[n],B,k,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);if(E(k))w(J.TEXTURE_CUBE_MAP);$.unbindTexture()}else if(F0){for(let n=0,r=$0.length;n<r;n++){let M0=$0[n],v0=Z.get(M0),G0=J.TEXTURE_2D;if(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)G0=B.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(G0,v0.__webglTexture),a(G0,M0),d0(S.__webglFramebuffer,B,M0,J.COLOR_ATTACHMENT0+n,G0,0),E(M0))w(G0)}$.unbindTexture()}else{let n=J.TEXTURE_2D;if(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)n=B.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(n,d.__webglTexture),a(n,k),k.mipmaps&&k.mipmaps.length>0)for(let r=0;r<k.mipmaps.length;r++)d0(S.__webglFramebuffer[r],B,k,J.COLOR_ATTACHMENT0,n,r);else d0(S.__webglFramebuffer,B,k,J.COLOR_ATTACHMENT0,n,0);if(E(k))w(n);$.unbindTexture()}if(B.depthBuffer)K0(B)}function P0(B){let k=B.textures;for(let S=0,d=k.length;S<d;S++){let $0=k[S];if(E($0)){let X0=P(B),F0=Z.get($0).__webglTexture;$.bindTexture(X0,F0),w(X0),$.unbindTexture()}}}let j0=[],b0=[];function n0(B){if(B.samples>0){if(T(B)===!1){let{textures:k,width:S,height:d}=B,$0=J.COLOR_BUFFER_BIT,X0=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,F0=Z.get(B),n=k.length>1;if(n)for(let M0=0;M0<k.length;M0++)$.bindFramebuffer(J.FRAMEBUFFER,F0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+M0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,F0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+M0,J.TEXTURE_2D,null,0);$.bindFramebuffer(J.READ_FRAMEBUFFER,F0.__webglMultisampledFramebuffer);let r=B.texture.mipmaps;if(r&&r.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,F0.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,F0.__webglFramebuffer);for(let M0=0;M0<k.length;M0++){if(B.resolveDepthBuffer){if(B.depthBuffer)$0|=J.DEPTH_BUFFER_BIT;if(B.stencilBuffer&&B.resolveStencilBuffer)$0|=J.STENCIL_BUFFER_BIT}if(n){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,F0.__webglColorRenderbuffer[M0]);let v0=Z.get(k[M0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,v0,0)}if(J.blitFramebuffer(0,0,S,d,0,0,S,d,$0,J.NEAREST),U===!0){if(j0.length=0,b0.length=0,j0.push(J.COLOR_ATTACHMENT0+M0),B.depthBuffer&&B.resolveDepthBuffer===!1)j0.push(X0),b0.push(X0),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,b0);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,j0)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),n)for(let M0=0;M0<k.length;M0++){$.bindFramebuffer(J.FRAMEBUFFER,F0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+M0,J.RENDERBUFFER,F0.__webglColorRenderbuffer[M0]);let v0=Z.get(k[M0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,F0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+M0,J.TEXTURE_2D,v0,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,F0.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&U){let k=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[k])}}}function c0(B){return Math.min(K.maxSamples,B.samples)}function T(B){let k=Z.get(B);return B.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&k.__useRenderToTexture!==!1}function DJ(B){let k=X.render.frame;if(G.get(B)!==k)G.set(B,k),B.update()}function t0(B,k){let{colorSpace:S,format:d,type:$0}=B;if(B.isCompressedTexture===!0||B.isVideoTexture===!0)return k;if(S!==TZ&&S!==p8)if(XJ.getTransfer(S)===zJ){if(d!==d9||$0!==y9)l0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else m0("WebGLTextures: Unsupported texture color space:",S);return k}function e0(B){if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement)H.width=B.naturalWidth||B.width,H.height=B.naturalHeight||B.height;else if(typeof VideoFrame<"u"&&B instanceof VideoFrame)H.width=B.displayWidth,H.height=B.displayHeight;else H.width=B.width,H.height=B.height;return H}this.allocateTextureUnit=s,this.resetTextureUnits=o,this.getTextureUnits=b,this.setTextureUnits=c,this.setTexture2D=J0,this.setTexture2DArray=W0,this.setTexture3D=H0,this.setTextureCube=C0,this.rebindTextures=Q0,this.setupRenderTarget=z0,this.updateRenderTargetMipmap=P0,this.updateMultisampleRenderTarget=n0,this.setupDepthRenderbuffer=K0,this.setupFrameBufferTexture=d0,this.useMultisampledRTT=T,this.isReversedDepthBuffer=function(){return $.buffers.depth.getReversed()}}function MG(J,Q){function $(Z,K=p8){let W,X=XJ.getTransfer(K);if(Z===y9)return J.UNSIGNED_BYTE;if(Z===i$)return J.UNSIGNED_SHORT_4_4_4_4;if(Z===o$)return J.UNSIGNED_SHORT_5_5_5_1;if(Z===XX)return J.UNSIGNED_INT_5_9_9_9_REV;if(Z===YX)return J.UNSIGNED_INT_10F_11F_11F_REV;if(Z===KX)return J.BYTE;if(Z===WX)return J.SHORT;if(Z===W6)return J.UNSIGNED_SHORT;if(Z===s$)return J.INT;if(Z===V8)return J.UNSIGNED_INT;if(Z===Z8)return J.FLOAT;if(Z===K8)return J.HALF_FLOAT;if(Z===UX)return J.ALPHA;if(Z===HX)return J.RGB;if(Z===d9)return J.RGBA;if(Z===h8)return J.DEPTH_COMPONENT;if(Z===x8)return J.DEPTH_STENCIL;if(Z===qX)return J.RED;if(Z===a$)return J.RED_INTEGER;if(Z===g8)return J.RG;if(Z===r$)return J.RG_INTEGER;if(Z===t$)return J.RGBA_INTEGER;if(Z===GQ||Z===NQ||Z===FQ||Z===OQ)if(X===zJ)if(W=Q.get("WEBGL_compressed_texture_s3tc_srgb"),W!==null){if(Z===GQ)return W.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===NQ)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===FQ)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===OQ)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(W=Q.get("WEBGL_compressed_texture_s3tc"),W!==null){if(Z===GQ)return W.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===NQ)return W.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===FQ)return W.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===OQ)return W.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===e$||Z===JZ||Z===QZ||Z===$Z)if(W=Q.get("WEBGL_compressed_texture_pvrtc"),W!==null){if(Z===e$)return W.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===JZ)return W.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===QZ)return W.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===$Z)return W.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===ZZ||Z===KZ||Z===WZ||Z===XZ||Z===YZ||Z===EQ||Z===UZ)if(W=Q.get("WEBGL_compressed_texture_etc"),W!==null){if(Z===ZZ||Z===KZ)return X===zJ?W.COMPRESSED_SRGB8_ETC2:W.COMPRESSED_RGB8_ETC2;if(Z===WZ)return X===zJ?W.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:W.COMPRESSED_RGBA8_ETC2_EAC;if(Z===XZ)return W.COMPRESSED_R11_EAC;if(Z===YZ)return W.COMPRESSED_SIGNED_R11_EAC;if(Z===EQ)return W.COMPRESSED_RG11_EAC;if(Z===UZ)return W.COMPRESSED_SIGNED_RG11_EAC}else return null;if(Z===HZ||Z===qZ||Z===GZ||Z===NZ||Z===FZ||Z===OZ||Z===EZ||Z===DZ||Z===RZ||Z===kZ||Z===VZ||Z===LZ||Z===zZ||Z===BZ)if(W=Q.get("WEBGL_compressed_texture_astc"),W!==null){if(Z===HZ)return X===zJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:W.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===qZ)return X===zJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:W.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===GZ)return X===zJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:W.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===NZ)return X===zJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:W.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===FZ)return X===zJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:W.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===OZ)return X===zJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:W.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===EZ)return X===zJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:W.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===DZ)return X===zJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:W.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===RZ)return X===zJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:W.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===kZ)return X===zJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:W.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===VZ)return X===zJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:W.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===LZ)return X===zJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:W.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===zZ)return X===zJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:W.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===BZ)return X===zJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:W.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===MZ||Z===IZ||Z===AZ)if(W=Q.get("EXT_texture_compression_bptc"),W!==null){if(Z===MZ)return X===zJ?W.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:W.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===IZ)return W.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===AZ)return W.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===PZ||Z===CZ||Z===DQ||Z===_Z)if(W=Q.get("EXT_texture_compression_rgtc"),W!==null){if(Z===PZ)return W.COMPRESSED_RED_RGTC1_EXT;if(Z===CZ)return W.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===DQ)return W.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===_Z)return W.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===B7)return J.UNSIGNED_INT_24_8;return J[Z]!==void 0?J[Z]:null}return{convert:$}}var IG=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,AG=`
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

}`;class NY{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new AQ(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new I9({vertexShader:IG,fragmentShader:AG,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new h0(new dJ(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class FY extends W8{constructor(J,Q){super();let $=this,Z=null,K=1,W=null,X="local-floor",Y=1,U=null,H=null,G=null,N=null,q=null,F=null,R=typeof XRWebGLBinding<"u",I=new NY,O={},E=Q.getContextAttributes(),w=null,P=null,L=[],A=[],C=new E0,_=null,V=new rJ;V.viewport=new PJ;let M=new rJ;M.viewport=new PJ;let l=[V,M],D=new UK,m=null,o=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(a){let q0=L[a];if(q0===void 0)q0=new U6,L[a]=q0;return q0.getTargetRaySpace()},this.getControllerGrip=function(a){let q0=L[a];if(q0===void 0)q0=new U6,L[a]=q0;return q0.getGripSpace()},this.getHand=function(a){let q0=L[a];if(q0===void 0)q0=new U6,L[a]=q0;return q0.getHandSpace()};function b(a){let q0=A.indexOf(a.inputSource);if(q0===-1)return;let L0=L[q0];if(L0!==void 0)L0.update(a.inputSource,a.frame,U||W),L0.dispatchEvent({type:a.type,data:a.inputSource})}function c(){Z.removeEventListener("select",b),Z.removeEventListener("selectstart",b),Z.removeEventListener("selectend",b),Z.removeEventListener("squeeze",b),Z.removeEventListener("squeezestart",b),Z.removeEventListener("squeezeend",b),Z.removeEventListener("end",c),Z.removeEventListener("inputsourceschange",s);for(let a=0;a<L.length;a++){let q0=A[a];if(q0===null)continue;A[a]=null,L[a].disconnect(q0)}m=null,o=null,I.reset();for(let a in O)delete O[a];J.setRenderTarget(w),q=null,N=null,G=null,Z=null,P=null,UJ.stop(),$.isPresenting=!1,J.setPixelRatio(_),J.setSize(C.width,C.height,!1),$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(a){if(K=a,$.isPresenting===!0)l0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(a){if(X=a,$.isPresenting===!0)l0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return U||W},this.setReferenceSpace=function(a){U=a},this.getBaseLayer=function(){return N!==null?N:q},this.getBinding=function(){if(G===null&&R)G=new XRWebGLBinding(Z,Q);return G},this.getFrame=function(){return F},this.getSession=function(){return Z},this.setSession=async function(a){if(Z=a,Z!==null){if(w=J.getRenderTarget(),Z.addEventListener("select",b),Z.addEventListener("selectstart",b),Z.addEventListener("selectend",b),Z.addEventListener("squeeze",b),Z.addEventListener("squeezestart",b),Z.addEventListener("squeezeend",b),Z.addEventListener("end",c),Z.addEventListener("inputsourceschange",s),E.xrCompatible!==!0)await Q.makeXRCompatible();if(_=J.getPixelRatio(),J.getSize(C),!(R&&("createProjectionLayer"in XRWebGLBinding.prototype))){let L0={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:K};q=new XRWebGLLayer(Z,Q,L0),Z.updateRenderState({baseLayer:q}),J.setPixelRatio(1),J.setSize(q.framebufferWidth,q.framebufferHeight,!1),P=new z9(q.framebufferWidth,q.framebufferHeight,{format:d9,type:y9,colorSpace:J.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:q.ignoreDepthValues===!1,resolveStencilBuffer:q.ignoreDepthValues===!1})}else{let L0=null,N0=null,y0=null;if(E.depth)y0=E.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,L0=E.stencil?x8:h8,N0=E.stencil?B7:V8;let ZJ={colorFormat:Q.RGBA8,depthFormat:y0,scaleFactor:K};G=this.getBinding(),N=G.createProjectionLayer(ZJ),Z.updateRenderState({layers:[N]}),J.setPixelRatio(1),J.setSize(N.textureWidth,N.textureHeight,!1),P=new z9(N.textureWidth,N.textureHeight,{format:d9,type:y9,depthTexture:new z8(N.textureWidth,N.textureHeight,N0,void 0,void 0,void 0,void 0,void 0,void 0,L0),stencilBuffer:E.stencil,colorSpace:J.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:N.ignoreDepthValues===!1,resolveStencilBuffer:N.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(Y),U=null,W=await Z.requestReferenceSpace(X),UJ.setContext(Z),UJ.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return I.getDepthTexture()};function s(a){for(let q0=0;q0<a.removed.length;q0++){let L0=a.removed[q0],N0=A.indexOf(L0);if(N0>=0)A[N0]=null,L[N0].disconnect(L0)}for(let q0=0;q0<a.added.length;q0++){let L0=a.added[q0],N0=A.indexOf(L0);if(N0===-1){for(let ZJ=0;ZJ<L.length;ZJ++)if(ZJ>=A.length){A.push(L0),N0=ZJ;break}else if(A[ZJ]===null){A[ZJ]=L0,N0=ZJ;break}if(N0===-1)break}let y0=L[N0];if(y0)y0.connect(L0)}}let x=new v,J0=new v;function W0(a,q0,L0){x.setFromMatrixPosition(q0.matrixWorld),J0.setFromMatrixPosition(L0.matrixWorld);let N0=x.distanceTo(J0),y0=q0.projectionMatrix.elements,ZJ=L0.projectionMatrix.elements,d0=y0[14]/(y0[10]-1),u0=y0[14]/(y0[10]+1),e=(y0[9]+1)/y0[5],K0=(y0[9]-1)/y0[5],Q0=(y0[8]-1)/y0[0],z0=(ZJ[8]+1)/ZJ[0],P0=d0*Q0,j0=d0*z0,b0=N0/(-Q0+z0),n0=b0*-Q0;if(q0.matrixWorld.decompose(a.position,a.quaternion,a.scale),a.translateX(n0),a.translateZ(b0),a.matrixWorld.compose(a.position,a.quaternion,a.scale),a.matrixWorldInverse.copy(a.matrixWorld).invert(),y0[10]===-1)a.projectionMatrix.copy(q0.projectionMatrix),a.projectionMatrixInverse.copy(q0.projectionMatrixInverse);else{let c0=d0+b0,T=u0+b0,DJ=P0-n0,t0=j0+(N0-n0),e0=e*u0/T*c0,B=K0*u0/T*c0;a.projectionMatrix.makePerspective(DJ,t0,e0,B,c0,T),a.projectionMatrixInverse.copy(a.projectionMatrix).invert()}}function H0(a,q0){if(q0===null)a.matrixWorld.copy(a.matrix);else a.matrixWorld.multiplyMatrices(q0.matrixWorld,a.matrix);a.matrixWorldInverse.copy(a.matrixWorld).invert()}this.updateCamera=function(a){if(Z===null)return;let{near:q0,far:L0}=a;if(I.texture!==null){if(I.depthNear>0)q0=I.depthNear;if(I.depthFar>0)L0=I.depthFar}if(D.near=M.near=V.near=q0,D.far=M.far=V.far=L0,m!==D.near||o!==D.far)Z.updateRenderState({depthNear:D.near,depthFar:D.far}),m=D.near,o=D.far;D.layers.mask=a.layers.mask|6,V.layers.mask=D.layers.mask&-5,M.layers.mask=D.layers.mask&-3;let N0=a.parent,y0=D.cameras;H0(D,N0);for(let ZJ=0;ZJ<y0.length;ZJ++)H0(y0[ZJ],N0);if(y0.length===2)W0(D,V,M);else D.projectionMatrix.copy(V.projectionMatrix);C0(a,D,N0)};function C0(a,q0,L0){if(L0===null)a.matrix.copy(q0.matrixWorld);else a.matrix.copy(L0.matrixWorld),a.matrix.invert(),a.matrix.multiply(q0.matrixWorld);if(a.matrix.decompose(a.position,a.quaternion,a.scale),a.updateMatrixWorld(!0),a.projectionMatrix.copy(q0.projectionMatrix),a.projectionMatrixInverse.copy(q0.projectionMatrixInverse),a.isPerspectiveCamera)a.fov=ZQ*2*Math.atan(1/a.projectionMatrix.elements[5]),a.zoom=1}this.getCamera=function(){return D},this.getFoveation=function(){if(N===null&&q===null)return;return Y},this.setFoveation=function(a){if(Y=a,N!==null)N.fixedFoveation=a;if(q!==null&&q.fixedFoveation!==void 0)q.fixedFoveation=a},this.hasDepthSensing=function(){return I.texture!==null},this.getDepthSensingMesh=function(){return I.getMesh(D)},this.getCameraTexture=function(a){return O[a]};let D0=null;function HJ(a,q0){if(H=q0.getViewerPose(U||W),F=q0,H!==null){let L0=H.views;if(q!==null)J.setRenderTargetFramebuffer(P,q.framebuffer),J.setRenderTarget(P);let N0=!1;if(L0.length!==D.cameras.length)D.cameras.length=0,N0=!0;for(let u0=0;u0<L0.length;u0++){let e=L0[u0],K0=null;if(q!==null)K0=q.getViewport(e);else{let z0=G.getViewSubImage(N,e);if(K0=z0.viewport,u0===0)J.setRenderTargetTextures(P,z0.colorTexture,z0.depthStencilTexture),J.setRenderTarget(P)}let Q0=l[u0];if(Q0===void 0)Q0=new rJ,Q0.layers.enable(u0),Q0.viewport=new PJ,l[u0]=Q0;if(Q0.matrix.fromArray(e.transform.matrix),Q0.matrix.decompose(Q0.position,Q0.quaternion,Q0.scale),Q0.projectionMatrix.fromArray(e.projectionMatrix),Q0.projectionMatrixInverse.copy(Q0.projectionMatrix).invert(),Q0.viewport.set(K0.x,K0.y,K0.width,K0.height),u0===0)D.matrix.copy(Q0.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale);if(N0===!0)D.cameras.push(Q0)}let y0=Z.enabledFeatures;if(y0&&y0.includes("depth-sensing")&&Z.depthUsage=="gpu-optimized"&&R){G=$.getBinding();let u0=G.getDepthInformation(L0[0]);if(u0&&u0.isValid&&u0.texture)I.init(u0,Z.renderState)}if(y0&&y0.includes("camera-access")&&R){J.state.unbindTexture(),G=$.getBinding();for(let u0=0;u0<L0.length;u0++){let e=L0[u0].camera;if(e){let K0=O[e];if(!K0)K0=new AQ,O[e]=K0;let Q0=G.getCameraImage(e);K0.sourceTexture=Q0}}}}for(let L0=0;L0<L.length;L0++){let N0=A[L0],y0=L[L0];if(N0!==null&&y0!==void 0)y0.update(N0,q0,U||W)}if(D0)D0(a,q0);if(q0.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:q0});F=null}let UJ=new QY;UJ.setAnimationLoop(HJ),this.setAnimationLoop=function(a){D0=a},this.dispose=function(){}}}var PG=new VJ,OY=new o0;OY.set(-1,0,0,0,1,0,0,0,1);function CG(J,Q){function $(O,E){if(O.matrixAutoUpdate===!0)O.updateMatrix();E.value.copy(O.matrix)}function Z(O,E){if(E.color.getRGB(O.fogColor.value,nZ(J)),E.isFog)O.fogNear.value=E.near,O.fogFar.value=E.far;else if(E.isFogExp2)O.fogDensity.value=E.density}function K(O,E,w,P,L){if(E.isNodeMaterial)E.uniformsNeedUpdate=!1;else if(E.isMeshBasicMaterial)W(O,E);else if(E.isMeshLambertMaterial){if(W(O,E),E.envMap)O.envMapIntensity.value=E.envMapIntensity}else if(E.isMeshToonMaterial)W(O,E),N(O,E);else if(E.isMeshPhongMaterial){if(W(O,E),G(O,E),E.envMap)O.envMapIntensity.value=E.envMapIntensity}else if(E.isMeshStandardMaterial){if(W(O,E),q(O,E),E.isMeshPhysicalMaterial)F(O,E,L)}else if(E.isMeshMatcapMaterial)W(O,E),R(O,E);else if(E.isMeshDepthMaterial)W(O,E);else if(E.isMeshDistanceMaterial)W(O,E),I(O,E);else if(E.isMeshNormalMaterial)W(O,E);else if(E.isLineBasicMaterial){if(X(O,E),E.isLineDashedMaterial)Y(O,E)}else if(E.isPointsMaterial)U(O,E,w,P);else if(E.isSpriteMaterial)H(O,E);else if(E.isShadowMaterial)O.color.value.copy(E.color),O.opacity.value=E.opacity;else if(E.isShaderMaterial)E.uniformsNeedUpdate=!1}function W(O,E){if(O.opacity.value=E.opacity,E.color)O.diffuse.value.copy(E.color);if(E.emissive)O.emissive.value.copy(E.emissive).multiplyScalar(E.emissiveIntensity);if(E.map)O.map.value=E.map,$(E.map,O.mapTransform);if(E.alphaMap)O.alphaMap.value=E.alphaMap,$(E.alphaMap,O.alphaMapTransform);if(E.bumpMap){if(O.bumpMap.value=E.bumpMap,$(E.bumpMap,O.bumpMapTransform),O.bumpScale.value=E.bumpScale,E.side===eJ)O.bumpScale.value*=-1}if(E.normalMap){if(O.normalMap.value=E.normalMap,$(E.normalMap,O.normalMapTransform),O.normalScale.value.copy(E.normalScale),E.side===eJ)O.normalScale.value.negate()}if(E.displacementMap)O.displacementMap.value=E.displacementMap,$(E.displacementMap,O.displacementMapTransform),O.displacementScale.value=E.displacementScale,O.displacementBias.value=E.displacementBias;if(E.emissiveMap)O.emissiveMap.value=E.emissiveMap,$(E.emissiveMap,O.emissiveMapTransform);if(E.specularMap)O.specularMap.value=E.specularMap,$(E.specularMap,O.specularMapTransform);if(E.alphaTest>0)O.alphaTest.value=E.alphaTest;let w=Q.get(E),P=w.envMap,L=w.envMapRotation;if(P){if(O.envMap.value=P,O.envMapRotation.value.setFromMatrix4(PG.makeRotationFromEuler(L)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1)O.envMapRotation.value.premultiply(OY);O.reflectivity.value=E.reflectivity,O.ior.value=E.ior,O.refractionRatio.value=E.refractionRatio}if(E.lightMap)O.lightMap.value=E.lightMap,O.lightMapIntensity.value=E.lightMapIntensity,$(E.lightMap,O.lightMapTransform);if(E.aoMap)O.aoMap.value=E.aoMap,O.aoMapIntensity.value=E.aoMapIntensity,$(E.aoMap,O.aoMapTransform)}function X(O,E){if(O.diffuse.value.copy(E.color),O.opacity.value=E.opacity,E.map)O.map.value=E.map,$(E.map,O.mapTransform)}function Y(O,E){O.dashSize.value=E.dashSize,O.totalSize.value=E.dashSize+E.gapSize,O.scale.value=E.scale}function U(O,E,w,P){if(O.diffuse.value.copy(E.color),O.opacity.value=E.opacity,O.size.value=E.size*w,O.scale.value=P*0.5,E.map)O.map.value=E.map,$(E.map,O.uvTransform);if(E.alphaMap)O.alphaMap.value=E.alphaMap,$(E.alphaMap,O.alphaMapTransform);if(E.alphaTest>0)O.alphaTest.value=E.alphaTest}function H(O,E){if(O.diffuse.value.copy(E.color),O.opacity.value=E.opacity,O.rotation.value=E.rotation,E.map)O.map.value=E.map,$(E.map,O.mapTransform);if(E.alphaMap)O.alphaMap.value=E.alphaMap,$(E.alphaMap,O.alphaMapTransform);if(E.alphaTest>0)O.alphaTest.value=E.alphaTest}function G(O,E){O.specular.value.copy(E.specular),O.shininess.value=Math.max(E.shininess,0.0001)}function N(O,E){if(E.gradientMap)O.gradientMap.value=E.gradientMap}function q(O,E){if(O.metalness.value=E.metalness,E.metalnessMap)O.metalnessMap.value=E.metalnessMap,$(E.metalnessMap,O.metalnessMapTransform);if(O.roughness.value=E.roughness,E.roughnessMap)O.roughnessMap.value=E.roughnessMap,$(E.roughnessMap,O.roughnessMapTransform);if(E.envMap)O.envMapIntensity.value=E.envMapIntensity}function F(O,E,w){if(O.ior.value=E.ior,E.sheen>0){if(O.sheenColor.value.copy(E.sheenColor).multiplyScalar(E.sheen),O.sheenRoughness.value=E.sheenRoughness,E.sheenColorMap)O.sheenColorMap.value=E.sheenColorMap,$(E.sheenColorMap,O.sheenColorMapTransform);if(E.sheenRoughnessMap)O.sheenRoughnessMap.value=E.sheenRoughnessMap,$(E.sheenRoughnessMap,O.sheenRoughnessMapTransform)}if(E.clearcoat>0){if(O.clearcoat.value=E.clearcoat,O.clearcoatRoughness.value=E.clearcoatRoughness,E.clearcoatMap)O.clearcoatMap.value=E.clearcoatMap,$(E.clearcoatMap,O.clearcoatMapTransform);if(E.clearcoatRoughnessMap)O.clearcoatRoughnessMap.value=E.clearcoatRoughnessMap,$(E.clearcoatRoughnessMap,O.clearcoatRoughnessMapTransform);if(E.clearcoatNormalMap){if(O.clearcoatNormalMap.value=E.clearcoatNormalMap,$(E.clearcoatNormalMap,O.clearcoatNormalMapTransform),O.clearcoatNormalScale.value.copy(E.clearcoatNormalScale),E.side===eJ)O.clearcoatNormalScale.value.negate()}}if(E.dispersion>0)O.dispersion.value=E.dispersion;if(E.iridescence>0){if(O.iridescence.value=E.iridescence,O.iridescenceIOR.value=E.iridescenceIOR,O.iridescenceThicknessMinimum.value=E.iridescenceThicknessRange[0],O.iridescenceThicknessMaximum.value=E.iridescenceThicknessRange[1],E.iridescenceMap)O.iridescenceMap.value=E.iridescenceMap,$(E.iridescenceMap,O.iridescenceMapTransform);if(E.iridescenceThicknessMap)O.iridescenceThicknessMap.value=E.iridescenceThicknessMap,$(E.iridescenceThicknessMap,O.iridescenceThicknessMapTransform)}if(E.transmission>0){if(O.transmission.value=E.transmission,O.transmissionSamplerMap.value=w.texture,O.transmissionSamplerSize.value.set(w.width,w.height),E.transmissionMap)O.transmissionMap.value=E.transmissionMap,$(E.transmissionMap,O.transmissionMapTransform);if(O.thickness.value=E.thickness,E.thicknessMap)O.thicknessMap.value=E.thicknessMap,$(E.thicknessMap,O.thicknessMapTransform);O.attenuationDistance.value=E.attenuationDistance,O.attenuationColor.value.copy(E.attenuationColor)}if(E.anisotropy>0){if(O.anisotropyVector.value.set(E.anisotropy*Math.cos(E.anisotropyRotation),E.anisotropy*Math.sin(E.anisotropyRotation)),E.anisotropyMap)O.anisotropyMap.value=E.anisotropyMap,$(E.anisotropyMap,O.anisotropyMapTransform)}if(O.specularIntensity.value=E.specularIntensity,O.specularColor.value.copy(E.specularColor),E.specularColorMap)O.specularColorMap.value=E.specularColorMap,$(E.specularColorMap,O.specularColorMapTransform);if(E.specularIntensityMap)O.specularIntensityMap.value=E.specularIntensityMap,$(E.specularIntensityMap,O.specularIntensityMapTransform)}function R(O,E){if(E.matcap)O.matcap.value=E.matcap}function I(O,E){let w=Q.get(E).light;O.referencePosition.value.setFromMatrixPosition(w.matrixWorld),O.nearDistance.value=w.shadow.camera.near,O.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:K}}function _G(J,Q,$,Z){let K={},W={},X=[],Y=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function U(L,A){let C=A.program;Z.uniformBlockBinding(L,C)}function H(L,A){let C=K[L.id];if(C===void 0)O(L),C=G(L),K[L.id]=C,L.addEventListener("dispose",w);let _=A.program;Z.updateUBOMapping(L,_);let V=Q.render.frame;if(W[L.id]!==V)q(L),W[L.id]=V}function G(L){let A=N();L.__bindingPointIndex=A;let C=J.createBuffer(),_=L.__size,V=L.usage;return J.bindBuffer(J.UNIFORM_BUFFER,C),J.bufferData(J.UNIFORM_BUFFER,_,V),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,A,C),C}function N(){for(let L=0;L<Y;L++)if(X.indexOf(L)===-1)return X.push(L),L;return m0("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function q(L){let A=K[L.id],C=L.uniforms,_=L.__cache;J.bindBuffer(J.UNIFORM_BUFFER,A);for(let V=0,M=C.length;V<M;V++){let l=C[V];if(Array.isArray(l))for(let D=0,m=l.length;D<m;D++)F(l[D],V,D,_);else F(l,V,0,_)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function F(L,A,C,_){if(I(L,A,C,_)===!0){let{__offset:V,value:M}=L;if(Array.isArray(M)){let l=0;for(let D=0;D<M.length;D++){let m=M[D],o=E(m);if(R(m,L.__data,l),typeof m!=="number"&&typeof m!=="boolean"&&!m.isMatrix3&&!ArrayBuffer.isView(m))l+=o.storage/Float32Array.BYTES_PER_ELEMENT}}else R(M,L.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,V,L.__data)}}function R(L,A,C){if(typeof L==="number"||typeof L==="boolean")A[0]=L;else if(L.isMatrix3)A[0]=L.elements[0],A[1]=L.elements[1],A[2]=L.elements[2],A[3]=0,A[4]=L.elements[3],A[5]=L.elements[4],A[6]=L.elements[5],A[7]=0,A[8]=L.elements[6],A[9]=L.elements[7],A[10]=L.elements[8],A[11]=0;else if(ArrayBuffer.isView(L))A.set(new L.constructor(L.buffer,L.byteOffset,A.length));else L.toArray(A,C)}function I(L,A,C,_){let V=L.value,M=A+"_"+C;if(_[M]===void 0){if(typeof V==="number"||typeof V==="boolean")_[M]=V;else if(ArrayBuffer.isView(V))_[M]=V.slice();else _[M]=V.clone();return!0}else{let l=_[M];if(typeof V==="number"||typeof V==="boolean"){if(l!==V)return _[M]=V,!0}else if(ArrayBuffer.isView(V))return!0;else if(l.equals(V)===!1)return l.copy(V),!0}return!1}function O(L){let A=L.uniforms,C=0,_=16;for(let M=0,l=A.length;M<l;M++){let D=Array.isArray(A[M])?A[M]:[A[M]];for(let m=0,o=D.length;m<o;m++){let b=D[m],c=Array.isArray(b.value)?b.value:[b.value];for(let s=0,x=c.length;s<x;s++){let J0=c[s],W0=E(J0),H0=C%_,C0=H0%W0.boundary,D0=H0+C0;if(C+=C0,D0!==0&&_-D0<W0.storage)C+=_-D0;b.__data=new Float32Array(W0.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=C,C+=W0.storage}}}let V=C%_;if(V>0)C+=_-V;return L.__size=C,L.__cache={},this}function E(L){let A={boundary:0,storage:0};if(typeof L==="number"||typeof L==="boolean")A.boundary=4,A.storage=4;else if(L.isVector2)A.boundary=8,A.storage=8;else if(L.isVector3||L.isColor)A.boundary=16,A.storage=12;else if(L.isVector4)A.boundary=16,A.storage=16;else if(L.isMatrix3)A.boundary=48,A.storage=48;else if(L.isMatrix4)A.boundary=64,A.storage=64;else if(L.isTexture)l0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(L))A.boundary=16,A.storage=L.byteLength;else l0("WebGLRenderer: Unsupported uniform value type.",L);return A}function w(L){let A=L.target;A.removeEventListener("dispose",w);let C=X.indexOf(A.__bindingPointIndex);X.splice(C,1),J.deleteBuffer(K[A.id]),delete K[A.id],delete W[A.id]}function P(){for(let L in K)J.deleteBuffer(K[L]);X=[],K={},W={}}return{bind:U,update:H,dispose:P}}var wG=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),c9=null;function TG(){if(c9===null)c9=new MQ(wG,16,16,g8,K8),c9.name="DFG_LUT",c9.minFilter=fJ,c9.magFilter=fJ,c9.wrapS=HQ,c9.wrapT=HQ,c9.generateMipmaps=!1,c9.needsUpdate=!0;return c9}class BK{constructor(J={}){let{canvas:Q=kX(),context:$=null,depth:Z=!0,stencil:K=!1,alpha:W=!1,antialias:X=!1,premultipliedAlpha:Y=!0,preserveDrawingBuffer:U=!1,powerPreference:H="default",failIfMajorPerformanceCaveat:G=!1,reversedDepthBuffer:N=!1,outputBufferType:q=y9}=J;this.isWebGLRenderer=!0;let F;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");F=$.getContextAttributes().alpha}else F=W;let R=q,I=new Set([t$,r$,a$]),O=new Set([y9,V8,W6,B7,i$,o$]),E=new Uint32Array(4),w=new Int32Array(4),P=new v,L=null,A=null,C=[],_=[],V=null;this.domElement=Q,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=f9,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,l=!1,D=null,m=null,o=null,b=null;this._outputColorSpace=b9;let c=0,s=0,x=null,J0=-1,W0=null,H0=new PJ,C0=new PJ,D0=null,HJ=new KJ(0),UJ=0,a=Q.width,q0=Q.height,L0=1,N0=null,y0=null,ZJ=new PJ(0,0,a,q0),d0=new PJ(0,0,a,q0),u0=!1,e=new H6,K0=!1,Q0=!1,z0=new VJ,P0=new v,j0=new PJ,b0={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},n0=!1;function c0(){return x===null?L0:1}let T=$;function DJ(z,y){return Q.getContext(z,y)}try{let z={alpha:!0,depth:Z,stencil:K,antialias:X,premultipliedAlpha:Y,preserveDrawingBuffer:U,powerPreference:H,failIfMajorPerformanceCaveat:G};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${BW}`);if(Q.addEventListener("webglcontextlost",p0,!1),Q.addEventListener("webglcontextrestored",LJ,!1),Q.addEventListener("webglcontextcreationerror",OJ,!1),T===null){if(T=DJ("webgl2",z),T===null)if(DJ("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(z){throw m0("WebGLRenderer: "+z.message),z}let t0,e0,B,k,S,d,$0,X0,F0,n,r,M0,v0,G0,Y0,x0,g0,qJ,f,O0,i,R0,I0;function Z0(){if(t0=new hq(T),t0.init(),i=new MG(T,t0),e0=new wq(T,t0,J,i),B=new zG(T,t0),e0.reversedDepthBuffer&&N)B.buffers.depth.setReversed(!0);m=T.createFramebuffer(),o=T.createFramebuffer(),b=T.createFramebuffer(),k=new pq(T),S=new YG,d=new BG(T,t0,B,S,e0,i,k),$0=new bq(M),X0=new uU(T),R0=new Cq(T,X0),F0=new xq(T,X0,k,R0),n=new lq(T,F0,X0,R0,k),qJ=new mq(T,e0,d),Y0=new Tq(S),r=new XG(M,$0,t0,e0,R0,Y0),M0=new CG(M,S),v0=new HG,G0=new EG(t0),g0=new Pq(M,$0,B,n,F,Y),x0=new LG(M,n,e0),I0=new _G(T,k,e0,B),f=new _q(T,t0,k),O0=new gq(T,t0,k),k.programs=r.programs,M.capabilities=e0,M.extensions=t0,M.properties=S,M.renderLists=v0,M.shadowMap=x0,M.state=B,M.info=k}if(Z0(),R!==y9)V=new uq(R,Q.width,Q.height,X,Z,K);let U0=new FY(M,T);this.xr=U0,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let z=t0.get("WEBGL_lose_context");if(z)z.loseContext()},this.forceContextRestore=function(){let z=t0.get("WEBGL_lose_context");if(z)z.restoreContext()},this.getPixelRatio=function(){return L0},this.setPixelRatio=function(z){if(z===void 0)return;L0=z,this.setSize(a,q0,!1)},this.getSize=function(z){return z.set(a,q0)},this.setSize=function(z,y,u=!0){if(U0.isPresenting){l0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(a=z,q0=y,Q.width=Math.floor(z*L0),Q.height=Math.floor(y*L0),u===!0)Q.style.width=z+"px",Q.style.height=y+"px";if(V!==null)V.setSize(Q.width,Q.height);this.setViewport(0,0,z,y)},this.getDrawingBufferSize=function(z){return z.set(a*L0,q0*L0).floor()},this.setDrawingBufferSize=function(z,y,u){a=z,q0=y,L0=u,Q.width=Math.floor(z*u),Q.height=Math.floor(y*u),this.setViewport(0,0,z,y)},this.setEffects=function(z){if(R===y9){m0("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(z){for(let y=0;y<z.length;y++)if(z[y].isOutputPass===!0){l0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}V.setEffects(z||[])},this.getCurrentViewport=function(z){return z.copy(H0)},this.getViewport=function(z){return z.copy(ZJ)},this.setViewport=function(z,y,u,h){if(z.isVector4)ZJ.set(z.x,z.y,z.z,z.w);else ZJ.set(z,y,u,h);B.viewport(H0.copy(ZJ).multiplyScalar(L0).round())},this.getScissor=function(z){return z.copy(d0)},this.setScissor=function(z,y,u,h){if(z.isVector4)d0.set(z.x,z.y,z.z,z.w);else d0.set(z,y,u,h);B.scissor(C0.copy(d0).multiplyScalar(L0).round())},this.getScissorTest=function(){return u0},this.setScissorTest=function(z){B.setScissorTest(u0=z)},this.setOpaqueSort=function(z){N0=z},this.setTransparentSort=function(z){y0=z},this.getClearColor=function(z){return z.copy(g0.getClearColor())},this.setClearColor=function(){g0.setClearColor(...arguments)},this.getClearAlpha=function(){return g0.getClearAlpha()},this.setClearAlpha=function(){g0.setClearAlpha(...arguments)},this.clear=function(z=!0,y=!0,u=!0){let h=0;if(z){let g=!1;if(x!==null){let k0=x.texture.format;g=I.has(k0)}if(g){let k0=x.texture.type,A0=O.has(k0),V0=g0.getClearColor(),S0=g0.getClearAlpha(),f0=V0.r,s0=V0.g,a0=V0.b;if(A0)E[0]=f0,E[1]=s0,E[2]=a0,E[3]=S0,T.clearBufferuiv(T.COLOR,0,E);else w[0]=f0,w[1]=s0,w[2]=a0,w[3]=S0,T.clearBufferiv(T.COLOR,0,w)}else h|=T.COLOR_BUFFER_BIT}if(y)h|=T.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(u)h|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(h!==0)T.clear(h)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(z){z.setRenderer(this),D=z},this.dispose=function(){Q.removeEventListener("webglcontextlost",p0,!1),Q.removeEventListener("webglcontextrestored",LJ,!1),Q.removeEventListener("webglcontextcreationerror",OJ,!1),g0.dispose(),v0.dispose(),G0.dispose(),S.dispose(),$0.dispose(),n.dispose(),R0.dispose(),I0.dispose(),r.dispose(),U0.dispose(),U0.removeEventListener("sessionstart",D9),U0.removeEventListener("sessionend",f7),C9.stop()};function p0(z){z.preventDefault(),fZ("WebGLRenderer: Context Lost."),l=!0}function LJ(){fZ("WebGLRenderer: Context Restored."),l=!1;let z=k.autoReset,y=x0.enabled,u=x0.autoUpdate,h=x0.needsUpdate,g=x0.type;Z0(),k.autoReset=z,x0.enabled=y,x0.autoUpdate=u,x0.needsUpdate=h,x0.type=g}function OJ(z){m0("WebGLRenderer: A WebGL context could not be created. Reason: ",z.statusMessage)}function Q9(z){let y=z.target;y.removeEventListener("dispose",Q9),E9(y)}function E9(z){I6(z),S.remove(z)}function I6(z){let y=S.get(z).programs;if(y!==void 0){if(y.forEach(function(u){r.releaseProgram(u)}),z.isShaderMaterial)r.releaseShaderCache(z)}}this.renderBufferDirect=function(z,y,u,h,g,k0){if(y===null)y=b0;let A0=g.isMesh&&g.matrixWorld.determinantAffine()<0,V0=cQ(z,y,u,h,g);B.setMaterial(h,A0);let S0=u.index,f0=1;if(h.wireframe===!0){if(S0=F0.getWireframeAttribute(u),S0===void 0)return;f0=2}let s0=u.drawRange,a0=u.attributes.position,T0=s0.start*f0,YJ=(s0.start+s0.count)*f0;if(k0!==null)T0=Math.max(T0,k0.start*f0),YJ=Math.min(YJ,(k0.start+k0.count)*f0);if(S0!==null)T0=Math.max(T0,0),YJ=Math.min(YJ,S0.count);else if(a0!==void 0&&a0!==null)T0=Math.max(T0,0),YJ=Math.min(YJ,a0.count);let JJ=YJ-T0;if(JJ<0||JJ===1/0)return;R0.setup(g,h,V0,u,S0);let r0,RJ=f;if(S0!==null)r0=X0.get(S0),RJ=O0,RJ.setIndex(r0);if(g.isMesh)if(h.wireframe===!0)B.setLineWidth(h.wireframeLinewidth*c0()),RJ.setMode(T.LINES);else RJ.setMode(T.TRIANGLES);else if(g.isLine){let hJ=h.linewidth;if(hJ===void 0)hJ=1;if(B.setLineWidth(hJ*c0()),g.isLineSegments)RJ.setMode(T.LINES);else if(g.isLineLoop)RJ.setMode(T.LINE_LOOP);else RJ.setMode(T.LINE_STRIP)}else if(g.isPoints)RJ.setMode(T.POINTS);else if(g.isSprite)RJ.setMode(T.TRIANGLES);if(g.isBatchedMesh)if(!t0.get("WEBGL_multi_draw")){let{_multiDrawStarts:hJ,_multiDrawCounts:_0,_multiDrawCount:$9}=g,QJ=S0?X0.get(S0).bytesPerElement:1,Z9=S.get(h).currentProgram.getUniforms();for(let GJ=0;GJ<$9;GJ++)Z9.setValue(T,"_gl_DrawID",GJ),RJ.render(hJ[GJ]/QJ,_0[GJ])}else RJ.renderMultiDraw(g._multiDrawStarts,g._multiDrawCounts,g._multiDrawCount);else if(g.isInstancedMesh)RJ.renderInstances(T0,JJ,g.count);else if(u.isInstancedBufferGeometry){let hJ=u._maxInstanceCount!==void 0?u._maxInstanceCount:1/0,_0=Math.min(u.instanceCount,hJ);RJ.renderInstances(T0,JJ,_0)}else RJ.render(T0,JJ)};function j7(z,y,u){if(z.transparent===!0&&z.side===m9&&z.forceSinglePass===!1)z.side=eJ,z.needsUpdate=!0,P8(z,y,u),z.side=V7,z.needsUpdate=!0,P8(z,y,u),z.side=m9;else P8(z,y,u)}this.compile=function(z,y,u=null){if(u===null)u=z;if(A=G0.get(u),A.init(y),_.push(A),u.traverseVisible(function(g){if(g.isLight&&g.layers.test(y.layers)){if(A.pushLight(g),g.castShadow)A.pushShadow(g)}}),z!==u)z.traverseVisible(function(g){if(g.isLight&&g.layers.test(y.layers)){if(A.pushLight(g),g.castShadow)A.pushShadow(g)}});A.setupLights();let h=new Set;return z.traverse(function(g){if(!(g.isMesh||g.isPoints||g.isLine||g.isSprite))return;let k0=g.material;if(k0)if(Array.isArray(k0))for(let A0=0;A0<k0.length;A0++){let V0=k0[A0];j7(V0,u,g),h.add(V0)}else j7(k0,u,g),h.add(k0)}),A=_.pop(),h},this.compileAsync=function(z,y,u=null){let h=this.compile(z,y,u);return new Promise((g)=>{function k0(){if(h.forEach(function(A0){if(S.get(A0).currentProgram.isReady())h.delete(A0)}),h.size===0){g(z);return}setTimeout(k0,10)}if(t0.get("KHR_parallel_shader_compile")!==null)k0();else setTimeout(k0,10)})};let v7=null;function dQ(z){if(v7)v7(z)}function D9(){C9.stop()}function f7(){C9.start()}let C9=new QY;if(C9.setAnimationLoop(dQ),typeof self<"u")C9.setContext(self);this.setAnimationLoop=function(z){v7=z,U0.setAnimationLoop(z),z===null?C9.stop():C9.start()},U0.addEventListener("sessionstart",D9),U0.addEventListener("sessionend",f7),this.render=function(z,y){if(y!==void 0&&y.isCamera!==!0){m0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(l===!0)return;if(D!==null)D.renderStart(z,y);let u=U0.enabled===!0&&U0.isPresenting===!0,h=V!==null&&(x===null||u)&&V.begin(M,x);if(z.matrixWorldAutoUpdate===!0)z.updateMatrixWorld();if(y.parent===null&&y.matrixWorldAutoUpdate===!0)y.updateMatrixWorld();if(U0.enabled===!0&&U0.isPresenting===!0&&(V===null||V.isCompositing()===!1)){if(U0.cameraAutoUpdate===!0)U0.updateCamera(y);y=U0.getCamera()}if(z.isScene===!0)z.onBeforeRender(M,z,y,x);if(A=G0.get(z,_.length),A.init(y),A.state.textureUnits=d.getTextureUnits(),_.push(A),z0.multiplyMatrices(y.projectionMatrix,y.matrixWorldInverse),e.setFromProjectionMatrix(z0,vZ,y.reversedDepth),Q0=this.localClippingEnabled,K0=Y0.init(this.clippingPlanes,Q0),L=v0.get(z,C.length),L.init(),C.push(L),U0.enabled===!0&&U0.isPresenting===!0){let A0=M.xr.getDepthSensingMesh();if(A0!==null)i8(A0,y,-1/0,M.sortObjects)}if(i8(z,y,0,M.sortObjects),L.finish(),M.sortObjects===!0)L.sort(N0,y0,y.reversedDepth);if(n0=U0.enabled===!1||U0.isPresenting===!1||U0.hasDepthSensing()===!1,n0)g0.addToRenderList(L,z);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(K0===!0)Y0.beginShadows();let g=A.state.shadowsArray;if(x0.render(g,z,y),K0===!0)Y0.endShadows();if((h&&V.hasRenderPass())===!1){let{opaque:A0,transmissive:V0}=L;if(A.setupLights(),y.isArrayCamera){let S0=y.cameras;if(V0.length>0)for(let f0=0,s0=S0.length;f0<s0;f0++){let a0=S0[f0];b7(A0,V0,z,a0)}if(n0)g0.render(z);for(let f0=0,s0=S0.length;f0<s0;f0++){let a0=S0[f0];y7(L,z,a0,a0.viewport)}}else{if(V0.length>0)b7(A0,V0,z,y);if(n0)g0.render(z);y7(L,z,y)}}if(x!==null&&s===0)d.updateMultisampleRenderTarget(x),d.updateRenderTargetMipmap(x);if(h)V.end(M);if(z.isScene===!0)z.onAfterRender(M,z,y);if(R0.resetDefaultState(),J0=-1,W0=null,_.pop(),_.length>0){if(A=_[_.length-1],d.setTextureUnits(A.state.textureUnits),K0===!0)Y0.setGlobalState(M.clippingPlanes,A.state.camera)}else A=null;if(C.pop(),C.length>0)L=C[C.length-1];else L=null;if(D!==null)D.renderEnd()};function i8(z,y,u,h){if(z.visible===!1)return;if(z.layers.test(y.layers)){if(z.isGroup)u=z.renderOrder;else if(z.isLOD){if(z.autoUpdate===!0)z.update(y)}else if(z.isLightProbeGrid)A.pushLightProbeGrid(z);else if(z.isLight){if(A.pushLight(z),z.castShadow)A.pushShadow(z)}else if(z.isSprite){if(!z.frustumCulled||e.intersectsSprite(z)){if(h)j0.setFromMatrixPosition(z.matrixWorld).applyMatrix4(z0);let A0=n.update(z),V0=z.material;if(V0.visible)L.push(z,A0,V0,u,j0.z,null)}}else if(z.isMesh||z.isLine||z.isPoints){if(!z.frustumCulled||e.intersectsObject(z)){let A0=n.update(z),V0=z.material;if(h){if(z.boundingSphere!==void 0){if(z.boundingSphere===null)z.computeBoundingSphere();j0.copy(z.boundingSphere.center)}else{if(A0.boundingSphere===null)A0.computeBoundingSphere();j0.copy(A0.boundingSphere.center)}j0.applyMatrix4(z.matrixWorld).applyMatrix4(z0)}if(Array.isArray(V0)){let S0=A0.groups;for(let f0=0,s0=S0.length;f0<s0;f0++){let a0=S0[f0],T0=V0[a0.materialIndex];if(T0&&T0.visible)L.push(z,A0,T0,u,j0.z,a0)}}else if(V0.visible)L.push(z,A0,V0,u,j0.z,null)}}}let k0=z.children;for(let A0=0,V0=k0.length;A0<V0;A0++)i8(k0[A0],y,u,h)}function y7(z,y,u,h){let{opaque:g,transmissive:k0,transparent:A0}=z;if(A.setupLightsView(u),K0===!0)Y0.setGlobalState(M.clippingPlanes,u);if(h)B.viewport(H0.copy(h));if(g.length>0)G8(g,y,u);if(k0.length>0)G8(k0,y,u);if(A0.length>0)G8(A0,y,u);B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function b7(z,y,u,h){if((u.isScene===!0?u.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[h.id]===void 0){let T0=t0.has("EXT_color_buffer_half_float")||t0.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[h.id]=new z9(1,1,{generateMipmaps:!0,type:T0?K8:y9,minFilter:$8,samples:Math.max(4,e0.samples),stencilBuffer:K,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:XJ.workingColorSpace})}let k0=A.state.transmissionRenderTarget[h.id],A0=h.viewport||H0;k0.setSize(A0.z*M.transmissionResolutionScale,A0.w*M.transmissionResolutionScale);let V0=M.getRenderTarget(),S0=M.getActiveCubeFace(),f0=M.getActiveMipmapLevel();if(M.setRenderTarget(k0),M.getClearColor(HJ),UJ=M.getClearAlpha(),UJ<1)M.setClearColor(16777215,0.5);if(M.clear(),n0)g0.render(u);let s0=M.toneMapping;M.toneMapping=f9;let a0=h.viewport;if(h.viewport!==void 0)h.viewport=void 0;if(A.setupLightsView(h),K0===!0)Y0.setGlobalState(M.clippingPlanes,h);if(G8(z,u,h),d.updateMultisampleRenderTarget(k0),d.updateRenderTargetMipmap(k0),t0.has("WEBGL_multisampled_render_to_texture")===!1){let T0=!1;for(let YJ=0,JJ=y.length;YJ<JJ;YJ++){let r0=y[YJ],{object:RJ,geometry:hJ,material:_0,group:$9}=r0;if(_0.side===m9&&RJ.layers.test(h.layers)){let QJ=_0.side;_0.side=eJ,_0.needsUpdate=!0,o8(RJ,u,h,hJ,_0,$9),_0.side=QJ,_0.needsUpdate=!0,T0=!0}}if(T0===!0)d.updateMultisampleRenderTarget(k0),d.updateRenderTargetMipmap(k0)}if(M.setRenderTarget(V0,S0,f0),M.setClearColor(HJ,UJ),a0!==void 0)h.viewport=a0;M.toneMapping=s0}function G8(z,y,u){let h=y.isScene===!0?y.overrideMaterial:null;for(let g=0,k0=z.length;g<k0;g++){let A0=z[g],{object:V0,geometry:S0,group:f0}=A0,s0=A0.material;if(s0.allowOverride===!0&&h!==null)s0=h;if(V0.layers.test(u.layers))o8(V0,y,u,S0,s0,f0)}}function o8(z,y,u,h,g,k0){if(z.onBeforeRender(M,y,u,h,g,k0),z.modelViewMatrix.multiplyMatrices(u.matrixWorldInverse,z.matrixWorld),z.normalMatrix.getNormalMatrix(z.modelViewMatrix),g.onBeforeRender(M,y,u,h,z,k0),g.transparent===!0&&g.side===m9&&g.forceSinglePass===!1)g.side=eJ,g.needsUpdate=!0,M.renderBufferDirect(u,y,h,g,z,k0),g.side=V7,g.needsUpdate=!0,M.renderBufferDirect(u,y,h,g,z,k0),g.side=m9;else M.renderBufferDirect(u,y,h,g,z,k0);z.onAfterRender(M,y,u,h,g,k0)}function P8(z,y,u){if(y.isScene!==!0)y=b0;let h=S.get(z),g=A.state.lights,k0=A.state.shadowsArray,A0=g.state.version,V0=r.getParameters(z,g.state,k0,y,u,A.state.lightProbeGridArray),S0=r.getProgramCacheKey(V0),f0=h.programs;h.environment=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?y.environment:null,h.fog=y.fog;let s0=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap;if(h.envMap=$0.get(z.envMap||h.environment,s0),h.envMapRotation=h.environment!==null&&z.envMap===null?y.environmentRotation:z.envMapRotation,f0===void 0)z.addEventListener("dispose",Q9),f0=new Map,h.programs=f0;let a0=f0.get(S0);if(a0!==void 0){if(h.currentProgram===a0&&h.lightsStateVersion===A0)return P6(z,V0),a0}else{if(V0.uniforms=r.getUniforms(z),D!==null&&z.isNodeMaterial)D.build(z,u,V0);z.onBeforeCompile(V0,M),a0=r.acquireProgram(V0,S0),f0.set(S0,a0),h.uniforms=V0.uniforms}let T0=h.uniforms;if(!z.isShaderMaterial&&!z.isRawShaderMaterial||z.clipping===!0)T0.clippingPlanes=Y0.uniform;if(P6(z,V0),h.needsLights=nQ(z),h.lightsStateVersion=A0,h.needsLights)T0.ambientLightColor.value=g.state.ambient,T0.lightProbe.value=g.state.probe,T0.directionalLights.value=g.state.directional,T0.directionalLightShadows.value=g.state.directionalShadow,T0.spotLights.value=g.state.spot,T0.spotLightShadows.value=g.state.spotShadow,T0.rectAreaLights.value=g.state.rectArea,T0.ltc_1.value=g.state.rectAreaLTC1,T0.ltc_2.value=g.state.rectAreaLTC2,T0.pointLights.value=g.state.point,T0.pointLightShadows.value=g.state.pointShadow,T0.hemisphereLights.value=g.state.hemi,T0.directionalShadowMatrix.value=g.state.directionalShadowMatrix,T0.spotLightMatrix.value=g.state.spotLightMatrix,T0.spotLightMap.value=g.state.spotLightMap,T0.pointShadowMatrix.value=g.state.pointShadowMatrix;return h.lightProbeGrid=A.state.lightProbeGridArray.length>0,h.currentProgram=a0,h.uniformsList=null,a0}function A6(z){if(z.uniformsList===null){let y=z.currentProgram.getUniforms();z.uniformsList=k6.seqWithValue(y.seq,z.uniforms)}return z.uniformsList}function P6(z,y){let u=S.get(z);u.outputColorSpace=y.outputColorSpace,u.batching=y.batching,u.batchingColor=y.batchingColor,u.instancing=y.instancing,u.instancingColor=y.instancingColor,u.instancingMorph=y.instancingMorph,u.skinning=y.skinning,u.morphTargets=y.morphTargets,u.morphNormals=y.morphNormals,u.morphColors=y.morphColors,u.morphTargetsCount=y.morphTargetsCount,u.numClippingPlanes=y.numClippingPlanes,u.numIntersection=y.numClipIntersection,u.vertexAlphas=y.vertexAlphas,u.vertexTangents=y.vertexTangents,u.toneMapping=y.toneMapping}function uQ(z,y){if(z.length===0)return null;if(z.length===1)return z[0].texture!==null?z[0]:null;P.setFromMatrixPosition(y.matrixWorld);for(let u=0,h=z.length;u<h;u++){let g=z[u];if(g.texture!==null&&g.boundingBox.containsPoint(P))return g}return null}function cQ(z,y,u,h,g){if(y.isScene!==!0)y=b0;d.resetTextureUnits();let k0=y.fog,A0=h.isMeshStandardMaterial||h.isMeshLambertMaterial||h.isMeshPhongMaterial?y.environment:null,V0=x===null?M.outputColorSpace:x.isXRRenderTarget===!0?x.texture.colorSpace:XJ.workingColorSpace,S0=h.isMeshStandardMaterial||h.isMeshLambertMaterial&&!h.envMap||h.isMeshPhongMaterial&&!h.envMap,f0=$0.get(h.envMap||A0,S0),s0=h.vertexColors===!0&&!!u.attributes.color&&u.attributes.color.itemSize===4,a0=!!u.attributes.tangent&&(!!h.normalMap||h.anisotropy>0),T0=!!u.morphAttributes.position,YJ=!!u.morphAttributes.normal,JJ=!!u.morphAttributes.color,r0=f9;if(h.toneMapped){if(x===null||x.isXRRenderTarget===!0)r0=M.toneMapping}let RJ=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,hJ=RJ!==void 0?RJ.length:0,_0=S.get(h),$9=A.state.lights;if(K0===!0){if(Q0===!0||z!==W0){let EJ=z===W0&&h.id===J0;Y0.setState(h,z,EJ)}}let QJ=!1;if(h.version===_0.__version){if(_0.needsLights&&_0.lightsStateVersion!==$9.state.version)QJ=!0;else if(_0.outputColorSpace!==V0)QJ=!0;else if(g.isBatchedMesh&&_0.batching===!1)QJ=!0;else if(!g.isBatchedMesh&&_0.batching===!0)QJ=!0;else if(g.isBatchedMesh&&_0.batchingColor===!0&&g.colorTexture===null)QJ=!0;else if(g.isBatchedMesh&&_0.batchingColor===!1&&g.colorTexture!==null)QJ=!0;else if(g.isInstancedMesh&&_0.instancing===!1)QJ=!0;else if(!g.isInstancedMesh&&_0.instancing===!0)QJ=!0;else if(g.isSkinnedMesh&&_0.skinning===!1)QJ=!0;else if(!g.isSkinnedMesh&&_0.skinning===!0)QJ=!0;else if(g.isInstancedMesh&&_0.instancingColor===!0&&g.instanceColor===null)QJ=!0;else if(g.isInstancedMesh&&_0.instancingColor===!1&&g.instanceColor!==null)QJ=!0;else if(g.isInstancedMesh&&_0.instancingMorph===!0&&g.morphTexture===null)QJ=!0;else if(g.isInstancedMesh&&_0.instancingMorph===!1&&g.morphTexture!==null)QJ=!0;else if(_0.envMap!==f0)QJ=!0;else if(h.fog===!0&&_0.fog!==k0)QJ=!0;else if(_0.numClippingPlanes!==void 0&&(_0.numClippingPlanes!==Y0.numPlanes||_0.numIntersection!==Y0.numIntersection))QJ=!0;else if(_0.vertexAlphas!==s0)QJ=!0;else if(_0.vertexTangents!==a0)QJ=!0;else if(_0.morphTargets!==T0)QJ=!0;else if(_0.morphNormals!==YJ)QJ=!0;else if(_0.morphColors!==JJ)QJ=!0;else if(_0.toneMapping!==r0)QJ=!0;else if(_0.morphTargetsCount!==hJ)QJ=!0;else if(!!_0.lightProbeGrid!==A.state.lightProbeGridArray.length>0)QJ=!0}else QJ=!0,_0.__version=h.version;let Z9=_0.currentProgram;if(QJ===!0){if(Z9=P8(h,y,g),D&&h.isNodeMaterial)D.onUpdateProgram(h,Z9,_0)}let GJ=!1,R9=!1,k9=!1,NJ=Z9.getUniforms(),AJ=_0.uniforms;if(B.useProgram(Z9.program))GJ=!0,R9=!0,k9=!0;if(h.id!==J0)J0=h.id,R9=!0;if(_0.needsLights){let EJ=uQ(A.state.lightProbeGridArray,g);if(_0.lightProbeGrid!==EJ)_0.lightProbeGrid=EJ,R9=!0}if(GJ||W0!==z){if(B.buffers.depth.getReversed()&&z.reversedDepth!==!0)z._reversedDepth=!0,z.updateProjectionMatrix();NJ.setValue(T,"projectionMatrix",z.projectionMatrix),NJ.setValue(T,"viewMatrix",z.matrixWorldInverse);let w9=NJ.map.cameraPosition;if(w9!==void 0)w9.setValue(T,P0.setFromMatrixPosition(z.matrixWorld));if(e0.logarithmicDepthBuffer)NJ.setValue(T,"logDepthBufFC",2/(Math.log(z.far+1)/Math.LN2));if(h.isMeshPhongMaterial||h.isMeshToonMaterial||h.isMeshLambertMaterial||h.isMeshBasicMaterial||h.isMeshStandardMaterial||h.isShaderMaterial)NJ.setValue(T,"isOrthographic",z.isOrthographicCamera===!0);if(W0!==z)W0=z,R9=!0,k9=!0}if(_0.needsLights){if($9.state.directionalShadowMap.length>0)NJ.setValue(T,"directionalShadowMap",$9.state.directionalShadowMap,d);if($9.state.spotShadowMap.length>0)NJ.setValue(T,"spotShadowMap",$9.state.spotShadowMap,d);if($9.state.pointShadowMap.length>0)NJ.setValue(T,"pointShadowMap",$9.state.pointShadowMap,d)}if(g.isSkinnedMesh){NJ.setOptional(T,g,"bindMatrix"),NJ.setOptional(T,g,"bindMatrixInverse");let EJ=g.skeleton;if(EJ){if(EJ.boneTexture===null)EJ.computeBoneTexture();NJ.setValue(T,"boneTexture",EJ.boneTexture,d)}}if(g.isBatchedMesh){if(NJ.setOptional(T,g,"batchingTexture"),NJ.setValue(T,"batchingTexture",g._matricesTexture,d),NJ.setOptional(T,g,"batchingIdTexture"),NJ.setValue(T,"batchingIdTexture",g._indirectTexture,d),NJ.setOptional(T,g,"batchingColorTexture"),g._colorsTexture!==null)NJ.setValue(T,"batchingColorTexture",g._colorsTexture,d)}let _9=u.morphAttributes;if(_9.position!==void 0||_9.normal!==void 0||_9.color!==void 0)qJ.update(g,u,Z9);if(R9||_0.receiveShadow!==g.receiveShadow)_0.receiveShadow=g.receiveShadow,NJ.setValue(T,"receiveShadow",g.receiveShadow);if((h.isMeshStandardMaterial||h.isMeshLambertMaterial||h.isMeshPhongMaterial)&&h.envMap===null&&y.environment!==null)AJ.envMapIntensity.value=y.environmentIntensity;if(AJ.dfgLUT!==void 0)AJ.dfgLUT.value=TG();if(R9){if(NJ.setValue(T,"toneMappingExposure",M.toneMappingExposure),_0.needsLights)h7(AJ,k9);if(k0&&h.fog===!0)M0.refreshFogUniforms(AJ,k0);if(M0.refreshMaterialUniforms(AJ,h,L0,q0,A.state.transmissionRenderTarget[z.id]),_0.needsLights&&_0.lightProbeGrid){let EJ=_0.lightProbeGrid;AJ.probesSH.value=EJ.texture,AJ.probesMin.value.copy(EJ.boundingBox.min),AJ.probesMax.value.copy(EJ.boundingBox.max),AJ.probesResolution.value.copy(EJ.resolution)}k6.upload(T,A6(_0),AJ,d)}if(h.isShaderMaterial&&h.uniformsNeedUpdate===!0)k6.upload(T,A6(_0),AJ,d),h.uniformsNeedUpdate=!1;if(h.isSpriteMaterial)NJ.setValue(T,"center",g.center);if(NJ.setValue(T,"modelViewMatrix",g.modelViewMatrix),NJ.setValue(T,"normalMatrix",g.normalMatrix),NJ.setValue(T,"modelMatrix",g.matrixWorld),h.uniformsGroups!==void 0){let EJ=h.uniformsGroups;for(let w9=0,cJ=EJ.length;w9<cJ;w9++){let a8=EJ[w9];I0.update(a8,Z9),I0.bind(a8,Z9)}}return Z9}function h7(z,y){z.ambientLightColor.needsUpdate=y,z.lightProbe.needsUpdate=y,z.directionalLights.needsUpdate=y,z.directionalLightShadows.needsUpdate=y,z.pointLights.needsUpdate=y,z.pointLightShadows.needsUpdate=y,z.spotLights.needsUpdate=y,z.spotLightShadows.needsUpdate=y,z.rectAreaLights.needsUpdate=y,z.hemisphereLights.needsUpdate=y}function nQ(z){return z.isMeshLambertMaterial||z.isMeshToonMaterial||z.isMeshPhongMaterial||z.isMeshStandardMaterial||z.isShadowMaterial||z.isShaderMaterial&&z.lights===!0}if(this.getActiveCubeFace=function(){return c},this.getActiveMipmapLevel=function(){return s},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(z,y,u){let h=S.get(z);if(h.__autoAllocateDepthBuffer=z.resolveDepthBuffer===!1,h.__autoAllocateDepthBuffer===!1)h.__useRenderToTexture=!1;S.get(z.texture).__webglTexture=y,S.get(z.depthTexture).__webglTexture=h.__autoAllocateDepthBuffer?void 0:u,h.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(z,y){let u=S.get(z);u.__webglFramebuffer=y,u.__useDefaultFramebuffer=y===void 0},this.setRenderTarget=function(z,y=0,u=0){x=z,c=y,s=u;let h=null,g=!1,k0=!1;if(z){let V0=S.get(z);if(V0.__useDefaultFramebuffer!==void 0){B.bindFramebuffer(T.FRAMEBUFFER,V0.__webglFramebuffer),H0.copy(z.viewport),C0.copy(z.scissor),D0=z.scissorTest,B.viewport(H0),B.scissor(C0),B.setScissorTest(D0),J0=-1;return}else if(V0.__webglFramebuffer===void 0)d.setupRenderTarget(z);else if(V0.__hasExternalTextures)d.rebindTextures(z,S.get(z.texture).__webglTexture,S.get(z.depthTexture).__webglTexture);else if(z.depthBuffer){let s0=z.depthTexture;if(V0.__boundDepthTexture!==s0){if(s0!==null&&S.has(s0)&&(z.width!==s0.image.width||z.height!==s0.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");d.setupDepthRenderbuffer(z)}}let S0=z.texture;if(S0.isData3DTexture||S0.isDataArrayTexture||S0.isCompressedArrayTexture)k0=!0;let f0=S.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget){if(Array.isArray(f0[y]))h=f0[y][u];else h=f0[y];g=!0}else if(z.samples>0&&d.useMultisampledRTT(z)===!1)h=S.get(z).__webglMultisampledFramebuffer;else if(Array.isArray(f0))h=f0[u];else h=f0;H0.copy(z.viewport),C0.copy(z.scissor),D0=z.scissorTest}else H0.copy(ZJ).multiplyScalar(L0).floor(),C0.copy(d0).multiplyScalar(L0).floor(),D0=u0;if(u!==0)h=m;if(B.bindFramebuffer(T.FRAMEBUFFER,h))B.drawBuffers(z,h);if(B.viewport(H0),B.scissor(C0),B.setScissorTest(D0),g){let V0=S.get(z.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+y,V0.__webglTexture,u)}else if(k0){let V0=y;for(let S0=0;S0<z.textures.length;S0++){let f0=S.get(z.textures[S0]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+S0,f0.__webglTexture,u,V0)}}else if(z!==null&&u!==0){let V0=S.get(z.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,V0.__webglTexture,u)}J0=-1},this.readRenderTargetPixels=function(z,y,u,h,g,k0,A0,V0=0){if(!(z&&z.isWebGLRenderTarget)){m0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let S0=S.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget&&A0!==void 0)S0=S0[A0];if(S0){B.bindFramebuffer(T.FRAMEBUFFER,S0);try{let f0=z.textures[V0],s0=f0.format,a0=f0.type;if(z.textures.length>1)T.readBuffer(T.COLOR_ATTACHMENT0+V0);if(!e0.textureFormatReadable(s0)){m0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!e0.textureTypeReadable(a0)){m0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(y>=0&&y<=z.width-h&&(u>=0&&u<=z.height-g))T.readPixels(y,u,h,g,i.convert(s0),i.convert(a0),k0)}finally{let f0=x!==null?S.get(x).__webglFramebuffer:null;B.bindFramebuffer(T.FRAMEBUFFER,f0)}}},this.readRenderTargetPixelsAsync=async function(z,y,u,h,g,k0,A0,V0=0){if(!(z&&z.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let S0=S.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget&&A0!==void 0)S0=S0[A0];if(S0)if(y>=0&&y<=z.width-h&&(u>=0&&u<=z.height-g)){B.bindFramebuffer(T.FRAMEBUFFER,S0);let f0=z.textures[V0],s0=f0.format,a0=f0.type;if(z.textures.length>1)T.readBuffer(T.COLOR_ATTACHMENT0+V0);if(!e0.textureFormatReadable(s0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!e0.textureTypeReadable(a0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let T0=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,T0),T.bufferData(T.PIXEL_PACK_BUFFER,k0.byteLength,T.STREAM_READ),T.readPixels(y,u,h,g,i.convert(s0),i.convert(a0),0);let YJ=x!==null?S.get(x).__webglFramebuffer:null;B.bindFramebuffer(T.FRAMEBUFFER,YJ);let JJ=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await LX(T,JJ,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,T0),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,k0),T.deleteBuffer(T0),T.deleteSync(JJ),k0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(z,y=null,u=0){let h=Math.pow(2,-u),g=Math.floor(z.image.width*h),k0=Math.floor(z.image.height*h),A0=y!==null?y.x:0,V0=y!==null?y.y:0;d.setTexture2D(z,0),T.copyTexSubImage2D(T.TEXTURE_2D,u,0,0,A0,V0,g,k0),B.unbindTexture()},this.copyTextureToTexture=function(z,y,u=null,h=null,g=0,k0=0){let A0,V0,S0,f0,s0,a0,T0,YJ,JJ,r0=z.isCompressedTexture?z.mipmaps[k0]:z.image;if(u!==null)A0=u.max.x-u.min.x,V0=u.max.y-u.min.y,S0=u.isBox3?u.max.z-u.min.z:1,f0=u.min.x,s0=u.min.y,a0=u.isBox3?u.min.z:0;else{let AJ=Math.pow(2,-g);if(A0=Math.floor(r0.width*AJ),V0=Math.floor(r0.height*AJ),z.isDataArrayTexture)S0=r0.depth;else if(z.isData3DTexture)S0=Math.floor(r0.depth*AJ);else S0=1;f0=0,s0=0,a0=0}if(h!==null)T0=h.x,YJ=h.y,JJ=h.z;else T0=0,YJ=0,JJ=0;let RJ=i.convert(y.format),hJ=i.convert(y.type),_0;if(y.isData3DTexture)d.setTexture3D(y,0),_0=T.TEXTURE_3D;else if(y.isDataArrayTexture||y.isCompressedArrayTexture)d.setTexture2DArray(y,0),_0=T.TEXTURE_2D_ARRAY;else d.setTexture2D(y,0),_0=T.TEXTURE_2D;B.activeTexture(T.TEXTURE0),B.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,y.flipY),B.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),B.pixelStorei(T.UNPACK_ALIGNMENT,y.unpackAlignment);let $9=B.getParameter(T.UNPACK_ROW_LENGTH),QJ=B.getParameter(T.UNPACK_IMAGE_HEIGHT),Z9=B.getParameter(T.UNPACK_SKIP_PIXELS),GJ=B.getParameter(T.UNPACK_SKIP_ROWS),R9=B.getParameter(T.UNPACK_SKIP_IMAGES);B.pixelStorei(T.UNPACK_ROW_LENGTH,r0.width),B.pixelStorei(T.UNPACK_IMAGE_HEIGHT,r0.height),B.pixelStorei(T.UNPACK_SKIP_PIXELS,f0),B.pixelStorei(T.UNPACK_SKIP_ROWS,s0),B.pixelStorei(T.UNPACK_SKIP_IMAGES,a0);let k9=z.isDataArrayTexture||z.isData3DTexture,NJ=y.isDataArrayTexture||y.isData3DTexture;if(z.isDepthTexture){let AJ=S.get(z),_9=S.get(y),EJ=S.get(AJ.__renderTarget),w9=S.get(_9.__renderTarget);B.bindFramebuffer(T.READ_FRAMEBUFFER,EJ.__webglFramebuffer),B.bindFramebuffer(T.DRAW_FRAMEBUFFER,w9.__webglFramebuffer);for(let cJ=0;cJ<S0;cJ++){if(k9)T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,S.get(z).__webglTexture,g,a0+cJ),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,S.get(y).__webglTexture,k0,JJ+cJ);T.blitFramebuffer(f0,s0,A0,V0,T0,YJ,A0,V0,T.DEPTH_BUFFER_BIT,T.NEAREST)}B.bindFramebuffer(T.READ_FRAMEBUFFER,null),B.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(g!==0||z.isRenderTargetTexture||S.has(z)){let AJ=S.get(z),_9=S.get(y);B.bindFramebuffer(T.READ_FRAMEBUFFER,o),B.bindFramebuffer(T.DRAW_FRAMEBUFFER,b);for(let EJ=0;EJ<S0;EJ++){if(k9)T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,AJ.__webglTexture,g,a0+EJ);else T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,AJ.__webglTexture,g);if(NJ)T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,_9.__webglTexture,k0,JJ+EJ);else T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,_9.__webglTexture,k0);if(g!==0)T.blitFramebuffer(f0,s0,A0,V0,T0,YJ,A0,V0,T.COLOR_BUFFER_BIT,T.NEAREST);else if(NJ)T.copyTexSubImage3D(_0,k0,T0,YJ,JJ+EJ,f0,s0,A0,V0);else T.copyTexSubImage2D(_0,k0,T0,YJ,f0,s0,A0,V0)}B.bindFramebuffer(T.READ_FRAMEBUFFER,null),B.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(NJ)if(z.isDataTexture||z.isData3DTexture)T.texSubImage3D(_0,k0,T0,YJ,JJ,A0,V0,S0,RJ,hJ,r0.data);else if(y.isCompressedArrayTexture)T.compressedTexSubImage3D(_0,k0,T0,YJ,JJ,A0,V0,S0,RJ,r0.data);else T.texSubImage3D(_0,k0,T0,YJ,JJ,A0,V0,S0,RJ,hJ,r0);else if(z.isDataTexture)T.texSubImage2D(T.TEXTURE_2D,k0,T0,YJ,A0,V0,RJ,hJ,r0.data);else if(z.isCompressedTexture)T.compressedTexSubImage2D(T.TEXTURE_2D,k0,T0,YJ,r0.width,r0.height,RJ,r0.data);else T.texSubImage2D(T.TEXTURE_2D,k0,T0,YJ,A0,V0,RJ,hJ,r0);if(B.pixelStorei(T.UNPACK_ROW_LENGTH,$9),B.pixelStorei(T.UNPACK_IMAGE_HEIGHT,QJ),B.pixelStorei(T.UNPACK_SKIP_PIXELS,Z9),B.pixelStorei(T.UNPACK_SKIP_ROWS,GJ),B.pixelStorei(T.UNPACK_SKIP_IMAGES,R9),k0===0&&y.generateMipmaps)T.generateMipmap(_0);B.unbindTexture()},this.initRenderTarget=function(z){if(S.get(z).__webglFramebuffer===void 0)d.setupRenderTarget(z)},this.initTexture=function(z){if(z.isCubeTexture)d.setTextureCube(z,0);else if(z.isData3DTexture)d.setTexture3D(z,0);else if(z.isDataArrayTexture||z.isCompressedArrayTexture)d.setTexture2DArray(z,0);else d.setTexture2D(z,0);B.unbindTexture()},this.resetState=function(){c=0,s=0,x=null,B.reset(),R0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vZ}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=XJ._getDrawingBufferColorSpace(J),Q.unpackColorSpace=XJ._getUnpackColorSpace()}}var L6=new v;function P9(J,Q,$,Z,K,W){let X=2*Math.PI*K/4,Y=Math.max(W-2*K,0),U=Math.PI/4;L6.copy(Q),L6[Z]=0,L6.normalize();let H=0.5*X/(X+Y),G=1-L6.angleTo(J)/U;if(Math.sign(L6[$])===1)return G*H;else return Y/(X+Y)+H+H*(1-G)}class s9 extends CJ{constructor(J=1,Q=1,$=1,Z=2,K=0.1){let W=Z*2+1;K=Math.min(J/2,Q/2,$/2,K);super(1,1,1,W,W,W);if(this.type="RoundedBoxGeometry",this.parameters={width:J,height:Q,depth:$,segments:Z,radius:K},W===1)return;let X=this.toNonIndexed();this.index=null,this.attributes.position=X.attributes.position,this.attributes.normal=X.attributes.normal,this.attributes.uv=X.attributes.uv;let Y=new v,U=new v,H=new v(J,Q,$).divideScalar(2).subScalar(K),G=this.attributes.position.array,N=this.attributes.normal.array,q=this.attributes.uv.array,F=G.length/6,R=new v,I=0.5/W;for(let O=0,E=0;O<G.length;O+=3,E+=2)switch(Y.fromArray(G,O),U.copy(Y),U.x-=Math.sign(U.x)*I,U.y-=Math.sign(U.y)*I,U.z-=Math.sign(U.z)*I,U.normalize(),G[O+0]=H.x*Math.sign(Y.x)+U.x*K,G[O+1]=H.y*Math.sign(Y.y)+U.y*K,G[O+2]=H.z*Math.sign(Y.z)+U.z*K,N[O+0]=U.x,N[O+1]=U.y,N[O+2]=U.z,Math.floor(O/F)){case 0:R.set(1,0,0),q[E+0]=P9(R,U,"z","y",K,$),q[E+1]=1-P9(R,U,"y","z",K,Q);break;case 1:R.set(-1,0,0),q[E+0]=1-P9(R,U,"z","y",K,$),q[E+1]=1-P9(R,U,"y","z",K,Q);break;case 2:R.set(0,1,0),q[E+0]=1-P9(R,U,"x","z",K,J),q[E+1]=P9(R,U,"z","x",K,$);break;case 3:R.set(0,-1,0),q[E+0]=1-P9(R,U,"x","z",K,J),q[E+1]=1-P9(R,U,"z","x",K,$);break;case 4:R.set(0,0,1),q[E+0]=1-P9(R,U,"x","y",K,J),q[E+1]=1-P9(R,U,"y","x",K,Q);break;case 5:R.set(0,0,-1),q[E+0]=P9(R,U,"x","y",K,J),q[E+1]=1-P9(R,U,"y","x",K,Q);break}}static fromJSON(J){return new s9(J.width,J.height,J.depth,J.segments,J.radius)}}class MK extends I7{constructor(){super();this.name="RoomEnvironment",this.position.y=-3.5;let J=new CJ;J.deleteAttribute("uv");let Q=new uJ({side:eJ}),$=new uJ,Z=new yQ(16777215,900,28,2);Z.position.set(0.418,16.199,0.3),this.add(Z);let K=new h0(J,Q);K.position.set(-0.757,13.219,0.717),K.scale.set(31.713,28.305,28.591),this.add(K);let W=new A7(J,$,6),X=new TJ;X.position.set(-10.906,2.009,1.846),X.rotation.set(0,-0.195,0),X.scale.set(2.328,7.905,4.651),X.updateMatrix(),W.setMatrixAt(0,X.matrix),X.position.set(-5.607,-0.754,-0.758),X.rotation.set(0,0.994,0),X.scale.set(1.97,1.534,3.955),X.updateMatrix(),W.setMatrixAt(1,X.matrix),X.position.set(6.167,0.857,7.803),X.rotation.set(0,0.561,0),X.scale.set(3.927,6.285,3.687),X.updateMatrix(),W.setMatrixAt(2,X.matrix),X.position.set(-2.017,0.018,6.124),X.rotation.set(0,0.333,0),X.scale.set(2.002,4.566,2.064),X.updateMatrix(),W.setMatrixAt(3,X.matrix),X.position.set(2.291,-0.756,-2.621),X.rotation.set(0,-0.286,0),X.scale.set(1.546,1.552,1.496),X.updateMatrix(),W.setMatrixAt(4,X.matrix),X.position.set(-2.193,-0.369,-5.547),X.rotation.set(0,0.516,0),X.scale.set(3.875,3.487,2.986),X.updateMatrix(),W.setMatrixAt(5,X.matrix),this.add(W);let Y=new h0(J,w7(50));Y.position.set(-16.116,14.37,8.208),Y.scale.set(0.1,2.428,2.739),this.add(Y);let U=new h0(J,w7(50));U.position.set(-16.109,18.021,-8.207),U.scale.set(0.1,2.425,2.751),this.add(U);let H=new h0(J,w7(17));H.position.set(14.904,12.198,-1.832),H.scale.set(0.15,4.265,6.331),this.add(H);let G=new h0(J,w7(43));G.position.set(-0.462,8.89,14.52),G.scale.set(4.38,5.441,0.088),this.add(G);let N=new h0(J,w7(20));N.position.set(3.235,11.486,-12.541),N.scale.set(2.5,2,0.1),this.add(N);let q=new h0(J,w7(100));q.position.set(0,20,0),q.scale.set(1,0.1,1),this.add(q)}dispose(){let J=new Set;this.traverse((Q)=>{if(Q.isMesh)J.add(Q.geometry),J.add(Q.material)});for(let Q of J)Q.dispose()}}function w7(J){return new TQ({color:0,emissive:16777215,emissiveIntensity:J})}var s8=653429,MJ="#09F875",FJ="rgba(9,248,117,0.55)",z6="rgba(9,248,117,0.28)",SG="#0A0A0A",PK="#070808";var yJ="#CFFFE2",S7="'SF Mono', ui-monospace, Menlo, Consolas, monospace",Y8="'Space Grotesk', -apple-system, sans-serif",I8=["HOME","CHAT","SEARCH","X LOOKUP","LEDGER","LANES"],x9=matchMedia("(prefers-reduced-motion: reduce)").matches,VY="vc_sound",jG=2.6,vG=0.32,H8=(()=>{try{return localStorage.getItem(VY)!=="off"}catch{return!0}})();document.addEventListener("vc-sound-change",(J)=>{H8=!!(J&&J.detail)});var EY=null,q8=()=>EY=EY||new(window.AudioContext||window.webkitAudioContext);function K9(J,Q,$,Z=0.045,K="triangle"){if(!H8)return;let W=q8(),X=W.createOscillator(),Y=W.createGain();if(W.state==="suspended")W.resume();X.type=K,X.frequency.value=J,Y.gain.setValueAtTime(Math.min(vG,$*jG),Q),Y.gain.exponentialRampToValueAtTime(0.0001,Q+Z),X.connect(Y),Y.connect(W.destination),X.start(Q),X.stop(Q+Z+0.02)}var SJ={detent(J=0){try{let Q=q8();if(Q.state==="suspended")Q.resume();K9(640+J*46,Q.currentTime+0.01,0.022,0.03)}catch{}},lever(){try{let J=q8();K9(420,J.currentTime+0.01,0.04,0.05),K9(640,J.currentTime+0.06,0.03,0.04)}catch{}},press(){try{let J=q8();K9(120,J.currentTime+0.01,0.09,0.08,"sine"),K9(88,J.currentTime+0.05,0.05,0.09,"sine")}catch{}},ok(){try{let J=q8();K9(660,J.currentTime+0.02,0.05),K9(880,J.currentTime+0.1,0.045)}catch{}},err(){try{let J=q8();K9(220,J.currentTime+0.02,0.05,0.07),K9(180,J.currentTime+0.1,0.05,0.09)}catch{}},dock(){try{let J=q8();K9(240,J.currentTime+0.01,0.05,0.05,"sine"),K9(180,J.currentTime+0.07,0.07,0.06,"sine")}catch{}}};class M8{k;d;v;target;vel=0;constructor(J,Q=120,$=18){this.k=Q;this.d=$;this.v=J,this.target=J}step(J){let Q=-this.k*(this.v-this.target)-this.d*this.vel;return this.vel+=Q*J,this.v+=this.vel*J,this.v}settled(){return Math.abs(this.v-this.target)<0.0001&&Math.abs(this.vel)<0.0001}}var fG=[new Path2D("M20 0 L47 1 L47 213 L238 23 L239 104 L90 253 L0 253 L0 20 Z"),new Path2D("M238 151 L239 215 L203 253 L134 253 Z")],mQ={w:240,h:254};function A8(J,Q,$,Z,K,W=1){J.save(),J.globalAlpha=W,J.translate(Q,$),J.scale(Z/mQ.w,Z/mQ.w),J.fillStyle=K;for(let X of fG)J.fill(X);J.restore()}var yG=[[5,8,12,7],[12,3,6,6],[1,6,3,3],[3,8,3,3]],bG=[[18,5,3,2]],IK=[[6,4,8,4]],hG=[[6,9,8,4]],AK=[[7,12,7,3]],B6=[15.2,4.6,1.6,1.6];class LY{state="sleep";t=0;unfold=0;flapRate=0;blinkAt=2.5;hopV=0;hopY=0;set(J){if(this.state===J)return;if(J==="wake"&&this.state!=="sleep")return;if(this.state=J,this.t=0,J==="happy")this.hopV=-46}poke(){if(this.state==="sleep")this.set("wake")}step(J){this.t+=J;let Q=this.state==="sleep"?0:1;if(this.unfold+=(Q-this.unfold)*Math.min(1,J*(this.state==="wake"?9:5)),this.state==="wake"&&this.unfold>0.98)this.set("idle"),this.hopV=-34;if(this.state==="happy"&&this.t>1.5)this.set("idle");if(this.state==="alert"&&this.t>1.1)this.set("idle");if(this.state==="idle"&&this.t>45)this.state="sleep",this.t=0;if(this.hopV+=340*J,this.hopY=Math.max(0,this.hopY-this.hopV*J*0.28),this.hopY===0&&this.hopV>0)this.hopV=0;if(this.state==="happy"&&this.hopY===0&&this.t<1&&this.hopV===0)this.hopV=-40;if(this.t>this.blinkAt)this.blinkAt=this.t+2.5+Math.random()*3.5}blinking(){return this.state!=="sleep"&&this.t>this.blinkAt-0.12&&this.t<this.blinkAt}wingCells(J){if(this.state==="work"){let Q=Math.max(3,this.flapRate);return Math.floor(J*Q*2)%2?IK:AK}if(this.state==="happy")return Math.floor(J*8)%2?IK:AK;if(this.state==="droop")return AK;return Math.floor(J)%7===6?IK:hG}draw(J,Q,$,Z,K){let W=Math.floor(K*10)/10,X=1-Math.min(1,this.unfold*1.6),Y=Math.max(0,this.unfold*1.4-0.4),U=18*Z;if(X>0.01){let H=1+Math.sin(W*1.1)*0.012,G=15*Z*H;A8(J,Q+(24*Z-G)/2,$+U-G*(mQ.h/mQ.w),G,MJ,X)}if(Y>0.01){let H=this.state==="droop",G=this.state==="idle"&&Math.floor(W*2)%4===3?0.6:0;J.save(),J.globalAlpha=Y,J.fillStyle=MJ;let N=(q,F,R,I,O=0)=>{let E=Q+q*Z,w=$+(F+G-this.hopY/24)*Z;if(O>0)J.beginPath(),J.roundRect(E,w,R*Z,I*Z,O*Z),J.fill();else J.fillRect(E,w,R*Z,I*Z)};for(let[q,F,R,I]of yG){let O=H&&q>=12&&F<=4?F+2:F;N(q,O,R,I,Math.min(R,I)*0.42)}for(let[q,F,R,I]of bG)N(q,H?F+2:F,R,I,0.6);for(let[q,F,R,I]of this.wingCells(W))N(q,H?F+2:F,R,I,1.1);if(!this.blinking()){J.fillStyle=PK;let q=H?B6[1]+2:B6[1];J.fillRect(Q+B6[0]*Z,$+(q+G-this.hopY/24)*Z,B6[2]*Z,B6[3]*Z)}J.restore()}}}var F9=1024,U8=768;class zY{canvas=document.createElement("canvas");ctx;tex;vireo=new LY;mode=0;lane="inference";meta=null;history=[];booted=x9;bootT=0;powered=x9;busy=!1;status="";chat=null;chatLog=[];chatScroll=0;chatMaxScroll=0;search=null;xprof=null;err=null;armed=null;tabRects=[];stepRan=0;drawRan=0;lastDrawAt=-1e9;crt=null;crtOverlay(){if(this.crt)return this.crt;let J=document.createElement("canvas");J.width=F9*1.5,J.height=U8*1.5;let Q=J.getContext("2d");Q.fillStyle="rgba(0,0,0,0.16)";for(let Z=0;Z<J.height;Z+=5)Q.fillRect(0,Z,J.width,2);let $=Q.createRadialGradient(J.width/2,J.height/2,J.height*0.34,J.width/2,J.height/2,J.height*0.92);return $.addColorStop(0,"rgba(0,0,0,0)"),$.addColorStop(1,"rgba(0,6,3,0.42)"),Q.fillStyle=$,Q.fillRect(0,0,J.width,J.height),this.crt=J,J}dirty=!0;acc=0;lastKey="";constructor(){this.canvas.width=F9*1.5,this.canvas.height=U8*1.5,this.ctx=this.canvas.getContext("2d"),this.ctx.setTransform(1.5,0,0,1.5,0,0),this.tex=new u9(this.canvas),this.tex.colorSpace=b9,this.tex.generateMipmaps=!1,this.tex.minFilter=fJ}modeName(){return I8[this.mode]}frameKey(J){let Q=this.vireo,$=Q.state!=="sleep"||Q.unfold>0.001,Z=!this.powered?Math.floor(J*2):!this.booted||$||this.busy?Math.floor(J*10):0,K=this.meta;return[this.mode,this.lane,this.powered,this.booted,this.busy,this.err,this.status,this.armed?.quote,Z,Q.state,this.chat?`${this.chat.prompt}|${Math.floor(this.chat.shown)}|${this.chat.line}`:"",this.chatLog.length,this.chatScroll,this.search?.query,this.search?.results?.length,this.xprof?.profile?.handle,this.history.length,K?`${K.main_balance_usd}|${K.lanes?.inference?.balance_usd}|${K.lanes?.devtools?.balance_usd}|${K.handle}`:""].join("~")}step(J,Q){if(this.stepRan++,this.powered&&!this.booted){if(this.bootT+=J,this.bootT>2.1)this.booted=!0}if(this.vireo.step(J),this.armed&&Q*1000>this.armed.until)this.armed=null;if(this.chat&&this.chat.shown<this.chat.text.length){let Z=x9?1e9:60;if(this.chat.shown=Math.min(this.chat.text.length,this.chat.shown+Z*J),this.vireo.flapRate=Math.max(2.5,Z/12),this.chat.shown>=this.chat.text.length&&!this.busy)this.vireo.set("idle")}this.acc=Math.max(0,this.acc+J);let $=!this.booted?0.05:0.1;if(this.acc>=$||Q-this.lastDrawAt>2){this.acc=0;let Z=this.frameKey(Q);if(Z!==this.lastKey||Q-this.lastDrawAt>2)return this.lastKey=Z,this.lastDrawAt=Q,this.drawRan++,this.draw(Q),this.tex.needsUpdate=!0,this.dirty=!1,!0}return!1}text(J,Q,$,Z,K=MJ,W=S7,X="500"){this.ctx.fillStyle=K,this.ctx.font=`${X} ${Z}px ${W}`,this.ctx.textBaseline="top",this.ctx.fillText(J,Q,$)}wrap(J,Q){let $=[];for(let Z of J.split(/\n+/)){let K="";for(let W of Z.split(/\s+/))if((K+" "+W).trim().length>Q)$.push(K.trim()),K=W;else K+=" "+W;if(K.trim())$.push(K.trim())}return $}draw(J){let Q=this.ctx;if(Q.fillStyle=PK,Q.fillRect(0,0,F9,U8),!this.powered){if(this.ctx.shadowColor=MJ,this.ctx.shadowBlur=8,this.text("NO CARD",F9/2-118,U8/2-64,52,MJ,Y8,"700"),this.ctx.shadowBlur=0,Math.floor(J*2)%2===0)this.text("TAP THE CARTRIDGE TO START",F9/2-196,U8/2+22,24,FJ);this.compositeCrt();return}if(!this.booted){let Y=this.bootT,H=["VANTIS UNIFIED OPERATING SYSTEM","COPYRIGHT 2026 VANTIS.SH","WLT-01 WALLET TERMINAL","","MEMORY CHECK ............... OK","RAIL LINK .................. OK",`CARD ....................... ${this.meta?.handle?"@"+String(this.meta.handle).replace(/^@+/,"").toUpperCase():"…"}`,...this.meta?.cartridge?[`CARTRIDGE .................. ${String(this.meta.cartridge.name)} · ${String(this.meta.cartridge.grade)}`]:[],"LANES ...................... INF · DEV","","BOOT COMPLETE"],G=340,N=Math.floor(Y*340),q=96;this.ctx.shadowColor=MJ,this.ctx.shadowBlur=7;for(let F of H){if(N<=0)break;let R=F.slice(0,N);N-=F.length+6,this.text(R,72,q,24,MJ),q+=40}if(this.ctx.shadowBlur=0,Math.floor(J*3)%2===0)this.ctx.fillStyle=MJ,this.ctx.fillRect(72,q+4,15,26);this.compositeCrt();return}this.tabRects=[];let $=44;for(let Y=0;Y<I8.length;Y++){let U=Y===this.mode;Q.font=`600 22px ${S7}`;let H=Q.measureText(I8[Y]).width;if(U)Q.fillStyle=MJ,Q.beginPath(),Q.roundRect($-14,24,H+28,40,8),Q.fill();this.text(I8[Y],$,33,22,U?PK:FJ),this.tabRects.push({x:$-14,y:16,w:H+28,h:56,mode:Y}),$+=H+42}let Z=this.meta?`$${(this.meta.main_balance_usd||0).toFixed(2)}`:"$—";Q.font=`600 22px ${S7}`,this.text(`MAIN ${Z}`,F9-44-Q.measureText(`MAIN ${Z}`).width,33,22,yJ),Q.fillStyle=z6,Q.fillRect(44,80,F9-88,2);let K=108,W=this.modeName();if(this.err)this.text("PROBLEM",64,K+8,22,FJ),this.wrap(this.err,52).slice(0,4).forEach((Y,U)=>this.text(Y,64,K+46+U*34,24,yJ));else if(W==="HOME")this.drawHome(K);else if(W==="CHAT")this.drawChat(K);else if(W==="SEARCH")this.drawSearch(K);else if(W==="X LOOKUP")this.drawX(K);else if(W==="LEDGER")this.drawLedger(K);else this.drawLanes(K);Q.fillStyle=z6,Q.fillRect(44,U8-140,F9-88,2),this.vireo.draw(Q,52,U8-126,6,J);let X=this.busy?"WORKING…":this.status||"TAP A TAB · GREEN KEY FIRES";Q.font=`600 21px ${S7}`,this.text(X,F9-44-Q.measureText(X).width,U8-72,21,this.busy?MJ:FJ),this.compositeCrt()}compositeCrt(){let J=this.ctx;J.save(),J.setTransform(1,0,0,1,0,0),J.drawImage(this.crtOverlay(),0,0),J.restore()}drawHome(J){let Q=this.meta,$=Q?.lanes?.inference,Z=Q?.lanes?.devtools;if(this.text("ONE CARD. EVERY RAIL.",44,J+2,21,FJ),this.ctx.shadowColor=MJ,this.ctx.shadowBlur=10,this.text(Q?`$${(Q.main_balance_usd||0).toFixed(2)}`:"$—",44,J+34,104,yJ,Y8,"700"),this.ctx.shadowBlur=0,this.text("MAIN BALANCE",46,J+156,20,FJ),Q?.tier){let Y=this.ctx;Y.font=`600 20px ${S7}`;let U=`TIER ${String(Q.tier).toUpperCase()}`,H=Y.measureText(U).width;Y.strokeStyle=FJ,Y.lineWidth=2,Y.beginPath(),Y.roundRect(44,J+198,H+28,38,19),Y.stroke(),this.text(U,58,J+207,20,MJ),this.text(`${(Q.vantis_burned||0).toFixed(2)} VANTIS BURNED`,94+H,J+207,20,FJ)}let K=(Y,U,H,G)=>{let N=this.ctx;this.text(Y,560,H,22,G?MJ:FJ);let q=U?`$${U.balance_usd.toFixed(2)}`:"$—";N.font=`700 30px ${Y8}`,this.text(q,F9-44-N.measureText(q).width,H-6,30,yJ,Y8,"700");let F=Math.max(0.01,(Q?.main_balance_usd||0)+($?.balance_usd||0)+(Z?.balance_usd||0)),R=Math.max(6,(U?.balance_usd||0)/F*420);N.fillStyle="rgba(9,248,117,0.16)",N.fillRect(560,H+44,420,10),N.fillStyle=G?MJ:FJ,N.fillRect(560,H+44,R,10),this.text(G?"LIVE — BILLS THE MODEL RAIL":"ROUTES OPENING — FUND AHEAD",560,H+68,18,FJ)},W=Q?.cartridge;if(W){let Y=this.ctx;this.text("INFERENCE",560,J+10,22,MJ);let U=String(W.grade);Y.font=`700 30px ${Y8}`,this.text(U,F9-44-Y.measureText(U).width,J+4,30,yJ,Y8,"700");let H=W.allowance?.used||0,G=Math.max(1,W.allowance?.limit||1),N=Math.max(6,Math.min(1,H/G)*420);Y.fillStyle="rgba(9,248,117,0.16)",Y.fillRect(560,J+54,420,10),Y.fillStyle=MJ,Y.fillRect(560,J+54,N,10);let q=(F)=>F>=1e8?F%1e9===0?`${F/1e9}B`:`${Math.round(F/1e6)}M`:F.toLocaleString("en-US");this.text(`${String(W.name).toUpperCase()} IN — ${q(H)}/${q(G)} TOKENS TODAY`,560,J+78,18,FJ),this.text("NO CREDIT SPEND WHILE THE ALLOWANCE HOLDS",560,J+102,18,FJ)}else K("INFERENCE",$,J+10,!0);K("DEV TOOLS",Z,J+130,!1);let X=this.history[0];if(X){let Y=X.amount_usd>=0?`+$${X.amount_usd.toFixed(2)}`:`−$${Math.abs(X.amount_usd).toFixed(2)}`;this.text("LAST MOVE",44,J+268,18,FJ),this.text(`${Y}  ${String(X.description||"").slice(0,52)}`,200,J+268,20,yJ)}this.status="GREEN KEY = FUND INFERENCE"}drawChat(J){let Q=this.chat;if(this.armed){this.text("QUOTE",64,J+6,22,FJ),this.text(this.armed.quote,64,J+44,25,yJ),this.text("ARMED — PRESS AGAIN TO FIRE",64,J+100,30,MJ,Y8,"700"),this.status="FIRST FIRE ARMS · AFTER THAT IT JUST FIRES";return}if(!Q&&!this.chatLog.length){let X=os.meta?.chat_models||[],Y=X.length?X[(os.chatIdx||0)%X.length]:{label:"DeepSeek V4 Flash",covered:!1,via:null};this.text("TEST-FIRE THE RAIL",64,J+6,22,FJ),this.text(`${String(Y.label)}.`,64,J+44,26,yJ),this.text(Y.covered?`Unlocked by ${String(Y.via||"your card").toUpperCase()} — no credit charge.`:"Real call, real cost, billed to your Inference lane.",64,J+80,24,yJ),this.text("Type below, then press the green key.",64,J+138,24,FJ),this.status=X.length>1?"MODEL KEY ON THE BAR SWITCHES THE LANE":"TYPE A PROMPT · GREEN KEY FIRES";return}let $=[];for(let X of this.chatLog){$.push({t:"> "+X.prompt.slice(0,58),c:z6,px:21});for(let Y of this.wrap(X.text,62))$.push({t:Y,c:FJ,px:22});if(X.line)$.push({t:X.line,c:z6,px:18})}if(Q){$.push({t:"> "+Q.prompt.slice(0,58),c:FJ,px:21});let X=Q.text.slice(0,Math.floor(Q.shown));for(let Y of this.wrap(X,62))$.push({t:Y,c:yJ,px:24});if(this.busy&&!Q.text)$.push({t:Math.floor(Date.now()/400)%2?"▍":"",c:MJ,px:24});if(Q.line&&Q.shown>=Q.text.length)$.push({t:Q.line,c:MJ,px:19})}let Z=13;if(this.chatMaxScroll=Math.max(0,$.length-Z),this.chatScroll>this.chatMaxScroll)this.chatScroll=this.chatMaxScroll;let K=Math.max(0,$.length-Z-this.chatScroll);if($.slice(K,K+Z).forEach((X,Y)=>this.text(X.t,64,J+4+Y*33,X.px,X.c)),K>0)this.text("▲",30,J+4,18,FJ);if(this.chatScroll>0)this.text("▼",30,J+4+(Z-1)*33,18,MJ);this.status=this.chatMaxScroll>0?"WHEEL OVER THE SCREEN SCROLLS · SETTLES FROM REAL USAGE":"SETTLES FROM REAL USAGE"}drawSearch(J){let Q=this.search;if(!Q){this.text("WEB SEARCH — EXA CLASS",64,J+6,22,FJ),this.text("One real query against the open web.",64,J+44,26,yJ);let $=this.meta?.tools?.find((Z)=>Z.key==="search");this.text($?`${$.left_today} OF ${$.per_day} ON THE HOUSE TODAY`:"",64,J+100,22,FJ),this.status="TYPE A QUERY · GREEN KEY FIRES";return}this.text("? "+Q.query.slice(0,46),64,J+4,22,FJ),Q.results.slice(0,5).forEach(($,Z)=>{this.text(($.title||"").slice(0,54),64,J+42+Z*62,24,yJ),this.text(($.url||"").replace(/^https?:\/\//,"").slice(0,58),64,J+42+Z*62+28,19,FJ)}),this.text(`${Q.left} LEFT TODAY`,64,J+358,20,MJ)}drawX(J){let Q=this.xprof?.profile;if(!Q){this.text("X PROFILE LOOKUP",64,J+6,22,FJ),this.text("Public metrics for any handle —",64,J+44,26,yJ),this.text("the same read the scoring agent makes.",64,J+80,26,yJ);let Z=this.meta?.tools?.find((K)=>K.key==="x");this.text(Z?.status==="off"?"ROUTE OFFLINE":Z?`${Z.left_today} OF ${Z.per_day} ON THE HOUSE TODAY`:"",64,J+138,22,FJ),this.status="TYPE @HANDLE · GREEN KEY FIRES";return}this.text(`@${Q.handle}`,64,J+4,34,yJ,Y8,"700"),this.text(String(Q.name||"").slice(0,40),64,J+50,22,FJ);let $=(Z)=>Z>=1e6?(Z/1e6).toFixed(1)+"M":Z>=1000?(Z/1000).toFixed(1)+"K":String(Z);if(this.text(`${$(Q.followers)} FOLLOWERS · ${$(Q.posts)} POSTS`,64,J+96,26,MJ),Q.created_at)this.text(`SINCE ${String(Q.created_at).slice(0,4)}`,64,J+138,22,FJ);this.wrap(Q.bio||"",58).slice(0,3).forEach((Z,K)=>this.text(Z,64,J+182+K*30,21,yJ))}drawLedger(J){if(this.text("RECENT MOVES",64,J+6,22,FJ),!this.history.length)this.text("Nothing yet — fund a lane, fire a call.",64,J+48,24,yJ);this.history.slice(0,7).forEach((Q,$)=>{let Z=Q.amount_usd>=0?`+$${Q.amount_usd.toFixed(2)}`:`−$${Math.abs(Q.amount_usd).toFixed(2)}`;this.text(Z.padStart(9),64,J+46+$*42,23,Q.amount_usd>=0?MJ:FJ),this.text(String(Q.description||Q.type||"").slice(0,44),220,J+46+$*42,23,yJ)}),this.status="THE FULL LEDGER LIVES IN THE BELL"}drawLanes(J){let Q=this.meta,$=Q?.lanes?.inference,Z=Q?.lanes?.devtools,K=(W,X,Y,U,H,G)=>{let N=this.ctx;N.strokeStyle=U?MJ:z6,N.lineWidth=U?3:2,N.strokeRect(Y,J+10,420,300),this.text(W,Y+28,J+34,24,U?MJ:FJ),this.text(X?`$${X.balance_usd.toFixed(2)}`:"$—",Y+28,J+76,56,yJ,Y8,"700"),this.text(X?`SPENT $${X.consumed_usd.toFixed(2)}`:"",Y+28,J+152,20,FJ),this.wrap(G,30).slice(0,3).forEach((q,F)=>this.text(q,Y+28,J+196+F*28,19,H?yJ:FJ))};K("INFERENCE",$,64,this.lane==="inference",!0,"Bills the model rail. Live now."),K("DEV TOOLS",Z,520,this.lane==="devtools",!1,"Metered catalog — routes opening. Fund ahead if you like."),this.status="LEVER PICKS LANE · KEY FUNDS · HOLD = SWEEP"}}var W9=1200,O9=756,T7=60,i9="'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",Y9="'SF Mono', ui-monospace, Menlo, Consolas, monospace",DY={ink:{bg:["#0C0C0B","#191917","#0E0E0D"],tex:"rgba(255,255,255,0.022)",fg:"#FFFFFF",acc:"#09F875",sub:"rgba(255,255,255,0.52)",edge:"rgba(255,255,255,0.10)"},carbon:{bg:["#151515","#2B2B29","#1A1A18"],tex:"rgba(255,255,255,0.02)",fg:"#E8E8E4",acc:"#09F875",sub:"rgba(232,232,228,0.5)",edge:"rgba(255,255,255,0.09)"},signal:{bg:["#0AF77A","#07DE6C","#05C75F"],tex:"rgba(10,10,10,0.05)",fg:"#0A0A0A",acc:"#0A0A0A",sub:"rgba(10,10,10,0.55)",edge:"rgba(10,10,10,0.14)"},mint:{bg:["#F2FFF8","#D3FFE7","#BFFADA"],tex:"rgba(10,10,10,0.035)",fg:"#0A0A0A",acc:"#0B7A3E",sub:"rgba(10,10,10,0.5)",edge:"rgba(10,10,10,0.10)"},mono:{bg:["#FFFFFF","#F1F1ED","#E8E8E2"],tex:"rgba(10,10,10,0.03)",fg:"#0A0A0A",acc:"#0B7A3E",sub:"rgba(10,10,10,0.5)",edge:"rgba(10,10,10,0.10)"}};function lQ(J,Q,$,Z,K,W){J.clearRect(0,0,W9,O9),J.beginPath(),J.roundRect(0,0,W9,O9,T7),J.clip();let X=J.createLinearGradient(0,0,W9,O9);X.addColorStop(0,Q[0]),X.addColorStop(0.55,Q[1]),X.addColorStop(1,Q[2]),J.fillStyle=X,J.fillRect(0,0,W9,O9);let Y=J.createRadialGradient(K[0],K[1],0,K[0],K[1],740);Y.addColorStop(0,`rgba(255,255,255,${W})`),Y.addColorStop(0.55,"rgba(255,255,255,0)"),J.fillStyle=Y,J.fillRect(0,0,W9,O9),J.save(),J.translate(W9/2,O9/2),J.rotate(15*Math.PI/180),J.fillStyle=$;for(let U=-W9;U<W9;U+=15)J.fillRect(U,-O9,3,O9*2);J.restore(),J.strokeStyle=Z,J.lineWidth=3,J.beginPath(),J.roundRect(1.5,1.5,W9-3,O9-3,T7-1.5),J.stroke(),J.strokeStyle="rgba(255,255,255,0.14)",J.beginPath(),J.moveTo(T7,3.5),J.lineTo(W9-T7,3.5),J.stroke(),J.strokeStyle="rgba(0,0,0,0.18)",J.beginPath(),J.moveTo(T7,O9-3.5),J.lineTo(W9-T7,O9-3.5),J.stroke()}function bJ(J,Q,$,Z,K,W,X={}){if(J.font=K,J.fillStyle=W,J.textAlign=X.align||"left",J.textBaseline="alphabetic",X.ls&&"letterSpacing"in J)J.letterSpacing=`${X.ls}px`;if(J.fillText(Q,$,Z),"letterSpacing"in J)J.letterSpacing="0px"}function M6(J){let Q=new u9(J);return Q.colorSpace=b9,Q.generateMipmaps=!0,Q.minFilter=$8,Q.anisotropy=4,Q}function xG(J){let Q=DY[J.variant||"ink"]||DY.ink,$=(J.handle||"").replace(/^@+/,""),Z=$?`@${$}`:"VANTIS",K=J.stamp||"RESERVED",W=document.createElement("canvas");W.width=W9,W.height=O9;let X=W.getContext("2d");X.save(),lQ(X,Q.bg,Q.tex,Q.edge,[216,0],0.09),A8(X,72,60,45.4,Q.acc),bJ(X,"VANTIS",141,102,`700 42px ${i9}`,Q.fg,{ls:3.36}),bJ(X,K,1128,96,`500 33px ${Y9}`,Q.sub,{align:"right"}),X.save(),X.beginPath(),X.roundRect(72,204,132,96,21),X.clip();let Y=X.createLinearGradient(72,204,204,300);Y.addColorStop(0,"#9BFFC9"),Y.addColorStop(0.22,"#09F875"),Y.addColorStop(0.45,"#58D5FF"),Y.addColorStop(0.65,"#C79BFF"),Y.addColorStop(0.82,"#FFE79B"),Y.addColorStop(1,"#09F875"),X.fillStyle=Y,X.fillRect(72,204,132,96),X.fillStyle="rgba(10,10,10,0.35)",X.fillRect(132.72,204,10.56,96),X.fillRect(72,232.8,132,5.76),X.fillRect(72,265.44,132,5.76),X.strokeStyle="rgba(255,255,255,0.5)",X.lineWidth=3,X.beginPath(),X.moveTo(78,206.5),X.lineTo(198,206.5),X.stroke(),X.strokeStyle="rgba(0,0,0,0.25)",X.beginPath(),X.moveTo(78,297.5),X.lineTo(198,297.5),X.stroke(),X.restore();let U=Z.length>21?57:Z.length>15?72:90;bJ(X,Z,72,453,`700 ${U}px ${i9}`,Q.fg,{ls:-U*0.01}),bJ(X,"IDENTITY",72,594,`600 27px ${i9}`,Q.sub,{ls:3.78}),bJ(X,"Account & Agent",72,636,`600 36px ${i9}`,Q.fg),bJ(X,`card.vantis.sh/${$||"yourhandle"}`,72,681,`500 30px ${Y9}`,Q.sub),bJ(X,"ONE OF ONE",1128,588,`700 30px ${Y9}`,Q.acc,{align:"right",ls:3}),bJ(X,"TIER",1128,630,`600 27px ${i9}`,Q.sub,{align:"right",ls:3.78});let H=J.tierLabel?`${J.tierLabel}${J.grantStr?` · $${J.grantStr}`:""}`:"—";bJ(X,H,1128,672,`600 36px ${i9}`,Q.fg,{align:"right"}),X.restore();let G=document.createElement("canvas");G.width=W9,G.height=O9;let N=G.getContext("2d");N.save(),lQ(N,["#0AF77A","#07DE6C","#05C75F"],"rgba(10,10,10,0.045)","rgba(10,10,10,0.14)",[960,756],0.22);let q=N.createLinearGradient(0,78,0,210);q.addColorStop(0,"#111111"),q.addColorStop(0.45,"#1D1D1B"),q.addColorStop(1,"#0C0C0B"),N.fillStyle=q,N.fillRect(0,78,W9,132),N.strokeStyle="rgba(255,255,255,0.08)",N.lineWidth=3,N.beginPath(),N.moveTo(0,79.5),N.lineTo(W9,79.5),N.stroke(),bJ(N,"VANTIS CARDS",72,525,`700 36px ${i9}`,"#0A0A0A",{ls:2.88});let F="rgba(10,10,10,0.75)";return bJ(N,`card.vantis.sh/${$||"yourhandle"}`,72,582,`500 30px ${Y9}`,F),bJ(N,`ONE OF ONE · ${K}`,72,639,`500 30px ${Y9}`,F),bJ(N,"Virtual identity card. Not a payment instrument.",72,696,`500 30px ${Y9}`,F),N.globalAlpha=0.92,A8(N,833.2,384,294.8,"#0A0A0A"),N.globalAlpha=1,N.restore(),{front:M6(W),back:M6(G)}}function gG(J){let Z=["#161815","#0B0C0B","#050605"],K="rgba(255,255,255,0.028)",W="#F2F5F1",X="#09F875",Y="#8A928C",U="rgba(9,248,117,0.35)",H=String(J.name||"GENESIS"),G=String(J.grade||""),N=String(J.serial||""),q=document.createElement("canvas");q.width=900,q.height=1257;let F=q.getContext("2d");F.save(),lQ(F,Z,"rgba(255,255,255,0.028)","rgba(9,248,117,0.35)",[180,0],0.045);for(let[L,A,C,_]of[[140,420,34,0.05],[430,560,26,0.04],[700,470,30,0.05],[240,820,24,0.04],[640,900,36,0.05]])F.globalAlpha=_,A8(F,L,A,C,"#09F875"),F.globalAlpha=1;bJ(F,H.length>18?H.slice(0,17)+"…":H,56,84,`700 52px ${i9}`,"#F2F5F1",{ls:1}),F.strokeStyle="#09F875",F.lineWidth=3,F.font=`700 28px ${Y9}`;let R=F.measureText(G).width;F.beginPath(),F.roundRect(844-R-36,56,R+36,54,13),F.stroke(),bJ(F,G,826,70,`700 28px ${Y9}`,"#09F875",{align:"right"}),bJ(F,"READING CARD…",56,614.5,`500 26px ${Y9}`,"#8A928C",{ls:3}),bJ(F,N,56,1173,`500 24px ${Y9}`,"#8A928C"),A8(F,800,1157,44,"#09F875"),F.restore();let I=document.createElement("canvas");I.width=900,I.height=1257;let O=I.getContext("2d");O.save(),lQ(O,Z,"rgba(255,255,255,0.028)","rgba(9,248,117,0.35)",[720,1100],0.04),O.shadowColor="#09F875",O.shadowBlur=30,A8(O,370,380,160,"#09F875"),O.shadowBlur=0;let E=String(J.series||"GENESIS 001").replace(" "," / ");O.font=`700 40px ${i9}`,bJ(O,E,450-O.measureText(E).width/2,680,`700 40px ${i9}`,"#F2F5F1",{ls:4});let w=String(J.title||"");O.font=`500 28px ${Y9}`,bJ(O,w,450-O.measureText(w).width/2,760,`500 28px ${Y9}`,"#8A928C"),O.font=`500 24px ${Y9}`;let P="ONE-OF-ONE COLLECTIBLE · NOT A PAYMENT INSTRUMENT";return bJ(O,P,450-O.measureText(P).width/2,1160,`500 24px ${Y9}`,"#8A928C"),O.restore(),{front:M6(q),back:M6(I)}}function RY(){let J=document.createElement("canvas");J.width=J.height=256;let Q=J.getContext("2d"),$=Q.createRadialGradient(128,128,10,128,128,126);$.addColorStop(0,"rgba(8,10,9,0.5)"),$.addColorStop(0.6,"rgba(8,10,9,0.22)"),$.addColorStop(1,"rgba(8,10,9,0)"),Q.fillStyle=$,Q.fillRect(0,0,256,256);let Z=new u9(J);return Z.colorSpace=b9,Z}function kY(){try{if(localStorage.getItem("vc_ez")==="1")return}catch{}let J=document.getElementById("device-stage");if(!J)return;let Q=Math.min(2,devicePixelRatio||1),$;try{$=new BK({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{document.body.classList.add("dv-fail");return}$.setPixelRatio(Q),$.outputColorSpace=b9,$.toneMapping=$6,$.toneMappingExposure=1,J.appendChild($.domElement),$.domElement.setAttribute("aria-hidden","true");let Z=new I7,K=new V6($);Z.environment=K.fromScene(new MK,0.04).texture;let W=new P7(16777215,1.15);W.position.set(-1.6,2.4,1.8),Z.add(W);let X=new P7(14680046,0.16);X.position.set(1.8,0.6,1.2),Z.add(X);let Y=new P7(10485709,0.4);Y.position.set(2.2,1.4,-2),Z.add(Y);let U=new rJ(28,1,0.1,20),H=new v(0.1,0.7,4.3),G=new v(0,0.44,0);U.position.copy(H),U.lookAt(G);function N(j,p,t="rgba(9,248,117,0.65)"){let w0=document.createElement("canvas"),i0=Math.max(64,j.length*p*0.75),IJ=p*2;w0.width=i0*2,w0.height=IJ*2;let BJ=w0.getContext("2d");BJ.scale(2,2),BJ.font=`600 ${p}px ${S7}`,BJ.fillStyle=t,BJ.textBaseline="middle",BJ.textAlign="center",BJ.fillText(j,i0/2,IJ/2);let wJ=new u9(w0);wJ.colorSpace=b9,wJ.generateMipmaps=!1,wJ.minFilter=fJ;let jJ=new h0(new dJ(i0/640,IJ/640),new lJ({map:wJ,transparent:!0}));return jJ.material.toneMapped=!1,jJ}let q=new uJ({color:724236,roughness:0.64,metalness:0.2,envMapIntensity:0.3}),F=new uJ({color:658186,roughness:0.75,metalness:0.25}),R=new uJ({color:790029,roughness:0.92,metalness:0.05}),I=new uJ({color:s8,roughness:0.42,metalness:0,envMapIntensity:0.3,emissive:s8,emissiveIntensity:0.42});I.toneMapped=!1;let O=new lJ({color:s8});O.toneMapped=!1;let E=new KJ(1327146),w=new jQ,P=(j,p)=>w.load(j,(t)=>{t.wrapS=t.wrapT=UQ,t.anisotropy=4,p(t)});P("/tex/metal030-normal-v1.jpg",(j)=>{j.repeat.set(2,1.4),q.normalMap=j,q.normalScale.set(0.65,0.65),q.needsUpdate=!0}),P("/tex/metal030-rough-v1.jpg",(j)=>{j.repeat.set(2,1.4),q.roughnessMap=j,q.roughness=0.9,q.needsUpdate=!0});let L=new sJ;Z.add(L);let A=new sJ,C=new h0(new s9(1.9,1.25,0.34,4,0.07),q);A.add(C),A.position.set(0,0.62,0),A.rotation.x=-0.06,L.add(A);let _=A,V=1.15,M=0.8625,l=new h0(new CJ(1.23,0.94,0.02),F);l.position.set(-0.26,0.02,0.164),A.add(l);let D=new zY,m=new h0(new dJ(V,M),new lJ({map:D.tex}));m.position.set(-0.26,0.02,0.178),A.add(m);let o=new h0(new dJ(1.21,0.92),new uJ({color:16777215,transparent:!0,opacity:0.045,roughness:0.12,metalness:0,envMapIntensity:1.5}));o.position.set(-0.26,0.02,0.184),A.add(o);let b=new h0(new CJ(0.01,1.08,0.012),O);b.position.set(0.4,0,0.172),A.add(b);let c=new sJ,s=new h0(new h9(0.155,0.155,0.075,48),new uJ({color:1053201,roughness:0.5,metalness:0.35,envMapIntensity:0.45}));s.rotation.x=Math.PI/2,c.add(s);let x=new h0(new h9(0.135,0.135,0.014,40),new uJ({color:790029,roughness:0.42,metalness:0.4,envMapIntensity:0.45}));x.rotation.x=Math.PI/2,x.position.z=0.042,c.add(x);let J0=new A7(new CJ(0.016,0.032,0.062),new uJ({color:1711131,roughness:0.5,metalness:0.5,envMapIntensity:0.7}),28),W0=new TJ;for(let j=0;j<28;j++){let p=j/28*Math.PI*2;W0.position.set(Math.cos(p)*0.157,Math.sin(p)*0.157,0),W0.rotation.z=p,W0.updateMatrix(),J0.setMatrixAt(j,W0.matrix)}c.add(J0);let H0=new h0(new CJ(0.014,0.072,0.012),O);H0.position.set(0,0.1,0.046),c.add(H0),c.position.set(0.67,0.3,0.17),A.add(c);let C0=document.createElement("canvas");C0.width=C0.height=256;let D0=C0.getContext("2d");D0.translate(128,128),D0.strokeStyle="rgba(9,248,117,0.4)",D0.lineWidth=3;for(let j=0;j<24;j++)D0.beginPath(),D0.moveTo(0,-104),D0.lineTo(0,j%6===0?-88:-96),D0.stroke(),D0.rotate(Math.PI/12);let HJ=new u9(C0);HJ.colorSpace=b9,HJ.generateMipmaps=!1,HJ.minFilter=fJ;let UJ=new h0(new dJ(0.43,0.43),new lJ({map:HJ,transparent:!0}));UJ.material.toneMapped=!1,UJ.position.set(0.67,0.3,0.165),A.add(UJ);let a=N("DIAL",12);a.position.set(0.67,0.06,0.168),A.add(a);let q0=new sJ,L0=new h0(new s9(0.24,0.24,0.07,3,0.024),I);q0.add(L0);let N0=document.createElement("canvas");N0.width=N0.height=128,A8(N0.getContext("2d"),28,24,72,SG);let y0=new u9(N0);y0.colorSpace=b9,y0.generateMipmaps=!1,y0.minFilter=fJ;let ZJ=new h0(new dJ(0.11,0.11),new lJ({map:y0,transparent:!0}));ZJ.material.toneMapped=!1,ZJ.position.z=0.037,L0.add(ZJ);let d0=new h0(new CJ(0.3,0.3,0.02),F);d0.position.z=-0.028,q0.add(d0),q0.position.set(0.67,-0.14,0.17),A.add(q0);let u0=N("FIRE",12);u0.position.set(0.67,-0.32,0.168),A.add(u0);let e=new sJ,K0=new h0(new s9(0.24,0.09,0.03,2,0.012),F);e.add(K0);let Q0=new sJ,z0=new h0(new CJ(0.04,0.085,0.04),new uJ({color:1316373,roughness:0.5,metalness:0.35,envMapIntensity:0.45}));z0.position.y=0.042,Q0.add(z0);let P0=new h0(new s9(0.06,0.048,0.048,2,0.014),I);P0.position.y=0.095,Q0.add(P0),Q0.position.z=0.03,e.add(Q0),e.position.set(0.67,-0.52,0.17),A.add(e);let j0=N("INF",11);j0.position.set(0.51,-0.42,0.168),A.add(j0);let b0=N("DEV",11);b0.position.set(0.83,-0.42,0.168),A.add(b0);let n0=new h9(0.012,0.012,0.014,12),c0=new h0(n0,new lJ({color:s8}));c0.material.toneMapped=!1,c0.rotation.x=Math.PI/2,c0.position.set(0.51,-0.48,0.17),A.add(c0);let T=new h0(n0,new lJ({color:E}));T.material.toneMapped=!1,T.rotation.x=Math.PI/2,T.position.set(0.83,-0.48,0.17),A.add(T);let DJ=document.createElement("canvas");DJ.width=240,DJ.height=254,A8(DJ.getContext("2d"),0,0,240,MJ);let t0=new u9(DJ);t0.colorSpace=b9,t0.generateMipmaps=!1,t0.minFilter=fJ;let e0=new h0(new dJ(0.07,0.074),new lJ({map:t0,transparent:!0}));e0.material.toneMapped=!1,e0.position.set(-0.82,-0.55,0.172),A.add(e0);let B=N("WLT-01",11,"rgba(9,248,117,0.5)");B.position.set(-0.62,-0.56,0.168),A.add(B);for(let j=0;j<5;j++){let p=new h0(new CJ(0.14,0.008,0.006),F);p.position.set(0.06+j%2*0,-0.5-Math.floor(j)*0.022,0.17),p.position.x=-0.2,p.position.y=-0.5-j*0.024,A.add(p)}let k=new uJ({color:2764075,roughness:0.42,metalness:0.75,envMapIntensity:0.9}),S=new h9(0.016,0.016,0.01,12);for(let[j,p]of[[-0.88,0.56],[0.88,0.56],[-0.88,-0.56],[0.88,-0.56]]){let t=new h0(S,k);t.rotation.x=Math.PI/2,t.position.set(j,p,0.172),A.add(t);let w0=new h0(new CJ(0.02,0.003,0.004),F);w0.position.set(j,p,0.178),w0.rotation.z=j*p>0?0.6:-0.5,A.add(w0)}let d=new sJ,$0=new h0(new h9(0.4,0.4,1.5,36),R);$0.rotation.z=Math.PI/2,d.add($0);for(let j of[-0.56,-0.2,0.16,0.52]){let p=new h0(new h9(0.412,0.412,0.05,36),F);p.rotation.z=Math.PI/2,p.position.x=j,d.add(p)}let X0=new h0(new h9(0.425,0.425,0.06,36),R);X0.rotation.z=Math.PI/2,X0.position.x=-0.76,d.add(X0);let F0=X0.clone();F0.position.x=0.76,d.add(F0),d.position.set(0,0.12,-0.62),L.add(d);let n=new sJ;n.position.set(-0.26,0.645,0.06),A.add(n);let r=new h0(new s9(0.74,0.07,0.11,2,0.02),F);n.add(r);let M0=new h0(new CJ(0.68,0.005,0.004),O);M0.position.set(0,0.037,0.056),n.add(M0);let v0=-0.065,G0=new sJ,Y0=0.66,x0=0.4158,g0=0.05,qJ=Y0*g0,f=0.43,O0=+0.6006349206349206 .toFixed(4),i=(j,p,t)=>{let w0=new G6;return w0.moveTo(-j/2+t,-p/2),w0.lineTo(j/2-t,-p/2),w0.absarc(j/2-t,-p/2+t,t,-Math.PI/2,0,!1),w0.lineTo(j/2,p/2-t),w0.absarc(j/2-t,p/2-t,t,0,Math.PI/2,!1),w0.lineTo(-j/2+t,p/2),w0.absarc(-j/2+t,p/2-t,t,Math.PI/2,Math.PI,!1),w0.lineTo(-j/2,-p/2+t),w0.absarc(-j/2+t,-p/2+t,t,Math.PI,Math.PI*1.5,!1),w0},R0=(j,p)=>{let t=new N6(i(j,p,j*g0),{depth:0.018,bevelEnabled:!1});return t.translate(0,0,-0.009),t},I0=new uJ({color:1645337,roughness:0.45,metalness:0.3,envMapIntensity:0.8}),Z0=new h0(R0(Y0,x0),I0);G0.add(Z0);let U0=new lJ({transparent:!0,alphaTest:0.5});U0.toneMapped=!1;let p0=new lJ({transparent:!0,alphaTest:0.5});p0.toneMapped=!1;let LJ=new h0(new dJ(Y0,x0),U0);LJ.position.z=0.0105,G0.add(LJ);let OJ=new h0(new dJ(Y0,x0),p0);OJ.rotation.y=Math.PI,OJ.position.z=-0.0105,G0.add(OJ);let Q9=!1,E9=()=>{},I6=(j)=>{if(Q9===j)return;Q9=j;let p=j?f:Y0,t=j?Number(O0):x0;Z0.geometry.dispose(),Z0.geometry=R0(p,t),LJ.geometry.dispose(),LJ.geometry=new dJ(p,t),OJ.geometry.dispose(),OJ.geometry=new dJ(p,t),E9(),D.dirty=!0},j7=(j)=>{I6(!1);let p=xG(j);if(U0.map?.dispose(),p0.map?.dispose(),U0.map=p.front,U0.needsUpdate=!0,p0.map=p.back,p0.needsUpdate=!0,j.variant==="mint"||j.variant==="mono")I0.color.setHex(14211282)},v7=(j)=>{I6(!0);let p=gG(j);U0.map?.dispose(),p0.map?.dispose(),U0.map=p.front,U0.needsUpdate=!0,p0.map=p.back,p0.needsUpdate=!0,I0.color.setHex(1053200),dQ(j)},dQ=(j)=>{let p=String(j.slug||"");if(!p)return;let t=new Image;t.onload=()=>{if(D.meta?.cartridge?.slug!==p)return;let w0=document.createElement("canvas");w0.width=t.width,w0.height=t.height;let i0=w0.getContext("2d");i0.drawImage(t,0,0);let IJ=g0*t.width;i0.globalCompositeOperation="destination-in",i0.beginPath(),i0.roundRect(0,0,w0.width,w0.height,IJ),i0.fill(),i0.globalCompositeOperation="source-over",U0.map?.dispose(),U0.map=M6(w0),U0.needsUpdate=!0,D.dirty=!0},t.src=`/marketplace/${p}/face.png`};j7({handle:null,variant:"ink"}),G0.position.y=v0,n.add(G0);let D9=new sJ,f7=new h0(new s9(0.72,0.05,0.3,2,0.015),F);f7.position.set(0,0.025,0),D9.add(f7);let C9=new h0(new s9(0.68,0.3,0.028,2,0.012),F);C9.rotation.x=-0.64,C9.position.set(0,0.16,-0.1),D9.add(C9);let i8=new h0(new CJ(0.68,0.03,0.03),F);i8.position.set(0,0.065,0.09),D9.add(i8);let y7=new h0(new CJ(0.64,0.02,0.05),new uJ({color:395015,roughness:0.9,metalness:0.1}));y7.position.set(0,0.045,0.05),D9.add(y7);let b7=new h0(new CJ(0.64,0.004,0.004),O);b7.position.set(0,0.082,0.075),D9.add(b7);let G8=new h0(new dJ(0.9,0.55),new lJ({map:RY(),transparent:!0,depthWrite:!1}));G8.rotation.x=-Math.PI/2,G8.position.y=0.002,D9.add(G8),D9.position.set(-0.84,-0.2,0.56),D9.rotation.y=0.32,L.add(D9),L.updateMatrixWorld(!0);let o8=L.worldToLocal(n.localToWorld(new v(0,v0,0))),P8=new N9;n.getWorldQuaternion(P8),n.remove(G0),L.add(G0);let A6=new v(-0.865,0.02,0.485),P6=new N9().setFromEuler(new G9(-0.64,0.32,0,"YXZ")),uQ=new v(-0.865,0.127,0.47),cQ=new N9().setFromEuler(new G9(-0.42,0.32,0,"YXZ")),h7=new v(-0.55,1.55,0.42),nQ=(j)=>j*j*(3-2*j),z=0;function y(j){let p=Math.max(0,Math.min(1,j));z=p;let t=1-p,w0=Q9?uQ:A6,i0=Q9?cQ:P6;G0.position.set(t*t*w0.x+2*t*p*h7.x+p*p*o8.x,t*t*w0.y+2*t*p*h7.y+p*p*o8.y,t*t*w0.z+2*t*p*h7.z+p*p*o8.z),G0.quaternion.slerpQuaternions(i0,P8,nQ(p))}y(0),E9=()=>{try{y(z)}catch{}};let u=new h0(new dJ(3,1.8),new lJ({map:RY(),transparent:!0,depthWrite:!1}));u.rotation.x=-Math.PI/2,u.position.y=-0.2,Z.add(u),L.position.y=0.02;let h=new M8(0,60,14),g=new M8(0,60,14),k0=new M8(0,70,15),A0=!1,V0=new v,S0=new v,f0=new v;function s0(j){A0=j??!A0,k0.target=A0?1:0,SJ.lever(),cJ(A0?"Screen raised":"Screen lowered")}let a0=new M8(0,170,20),T0=new M8(0,400,24),YJ=new M8(-0.22,240,20),JJ=new M8(0,60,12),r0="hover",RJ=0;function hJ(){if(r0!=="hover")return;r0="inserting",JJ.target=1,D.vireo.poke()}function _0(){if(r0!=="seated"||D.busy){if(D.busy)SJ.err();return}r0="ejecting",JJ.target=0,D.powered=!1,D.booted=x9,D.bootT=0,D.dirty=!0;try{let j=q8();K9(500,j.currentTime+0.01,0.05,0.05,"sine"),K9(340,j.currentTime+0.08,0.06,0.07,"sine")}catch{}cJ("Card ejected — screen off")}let $9={t:0},QJ=(j,p=!1)=>{let t=(j%I8.length+I8.length)%I8.length;if(t===D.mode)return;if(D.mode=t,D.err=null,D.armed=null,D.dirty=!0,a0.target=-t*(Math.PI*2/8),!p)SJ.detent(t);D.vireo.poke(),CK(),cJ(`Mode: ${I8[t]}`)},Z9=document.getElementById("dv-input-row"),GJ=document.getElementById("dv-input"),R9=document.getElementById("dv-go"),k9=document.getElementById("dv-alt"),NJ=document.getElementById("dv-model"),AJ=()=>D.meta?.chat_models||[],_9=()=>{if(!NJ)return;let j=AJ();if(j.length<2){NJ.hidden=!0;return}let p=j[(D.chatIdx||0)%j.length]||j[0];NJ.hidden=!1,NJ.textContent=`Model · ${String(p.label)}`};NJ?.addEventListener("click",()=>{let j=AJ();if(j.length<2)return;D.chatIdx=((D.chatIdx||0)+1)%j.length,_9(),D.dirty=!0});let EJ=document.getElementById("dv-sound");if(EJ){let j=()=>{EJ.textContent=H8?"Sound on":"Sound off",EJ.setAttribute("aria-pressed",H8?"true":"false"),EJ.style.opacity=H8?"1":"0.55"};j(),EJ.addEventListener("click",()=>{H8=!H8;try{localStorage.setItem(VY,H8?"on":"off")}catch{}if(j(),H8)SJ.ok()})}let w9=document.getElementById("dv-live"),cJ=(j)=>{if(w9)w9.textContent=j},a8={CHAT:{ph:"Ask the rail anything…",go:"Fire"},SEARCH:{ph:"Search the open web…",go:"Search"},"X LOOKUP":{ph:"@handle",go:"Look up"}},C6="";function CK(){let j=D.modeName(),p=a8[j];if(Z9)Z9.style.display=p?"flex":"none";if(p&&GJ&&j!==C6){if(C6)C8[C6]=GJ.value;GJ.value=C8[j]||"",C6=j}if(p&&GJ)GJ.placeholder=p.ph;if(p&&R9)R9.textContent=p.go;if(k9)if(j==="HOME"||j==="LANES")k9.style.display="",k9.textContent=j==="LANES"?"Sweep lane":"Fund lane";else k9.style.display="none"}let _K=0;async function wK(){let j=++_K;try{let p=await fetch("/api/playground/meta");if(!p.ok)return;let t=await p.json();if(j!==_K)return;D.meta=t;let w0=D.meta?.chat_models||[];if((D.chatIdx||0)>=w0.length)D.chatIdx=0;if(_9(),D.meta?.cartridge)v7(D.meta.cartridge);else if(D.meta?.handle)j7({handle:D.meta.handle,variant:D.meta.variant,stamp:D.meta.stamp,tierLabel:D.meta.tier_label,grantStr:D.meta.grant_str});D.dirty=!0}catch{}}async function sQ(){try{let j=await fetch("/api/credits/history");if(!j.ok)return;let p=await j.json();D.history=p.entries||[],D.dirty=!0}catch{}}addEventListener("vc-deck-change",()=>{wK()}),addEventListener("vc-balances",(j)=>{let p=j.detail||{};if(!D.meta)return;let t=D.meta.main_balance_usd;D.meta.main_balance_usd=p.main??D.meta.main_balance_usd;for(let w0 of p.wallets||[]){let i0=w0.purpose==="inference"?D.meta.lanes?.inference:D.meta.lanes?.devtools;if(i0)i0.balance_usd=w0.balance_usd,i0.consumed_usd=w0.consumed_usd}if(typeof p.main==="number"&&p.main!==t)D.vireo.set("happy");D.dirty=!0,sQ()});function TK(j){let p=D.meta?.lanes?.[j];return p?{id:p.id,name:j==="inference"?"Inference":"Developer tools"}:null}function iQ(j){let p=TK(j);if(!p)return;dispatchEvent(new CustomEvent("vc-device-fund",{detail:p}))}async function SK(j){let p=TK(j);if(!p)return;dispatchEvent(new CustomEvent("vc-device-sweep",{detail:p}))}let jK=null,oQ=!1,vK=!1,C8={};function fK(){if(D.busy)return!1;if(a8[D.modeName()]&&!(GJ?.value||"").trim())return GJ?.focus(),D.vireo.set("alert"),D.dirty=!0,SJ.err(),!1;return!0}async function aQ(){if(D.busy)return;let j=D.modeName();if(D.err=null,j==="HOME"){iQ("inference");return}if(j==="LANES"){iQ(D.lane);return}if(j==="LEDGER"){sQ();return}let p=a8[j],t=(GJ?.value||"").trim();if(p&&!t){GJ?.focus(),D.vireo.set("alert"),SJ.err();return}if(j==="CHAT"&&!D.armed&&!vK){let i0=(Math.ceil((t.length+180)/4)*0.14+112.00000000000001)/1e6,IJ=D.meta?.vantis_price_usd?i0/D.meta.vantis_price_usd:null;D.armed={until:performance.now()+3000,quote:`UP TO $${i0.toFixed(6)}${IJ?` · ~${IJ.toFixed(4)} VANTIS`:""} AT LIST`},D.dirty=!0,cJ("Armed. Press again to fire.");return}D.armed=null,D.busy=!0,D.vireo.set("work"),D.vireo.flapRate=3,D.dirty=!0;try{if(j==="CHAT"){if(D.chat&&D.chat.text)D.chatLog.push({prompt:D.chat.prompt,text:D.chat.text,line:D.chat.line});if(D.chatLog.length>6)D.chatLog.shift();if(D.chat={prompt:t,text:"",shown:0,line:""},D.chatScroll=0,GJ)GJ.value="";C8[j]="";let w0=performance.now(),i0=D.meta?.chat_models||[],IJ=i0.length?i0[(D.chatIdx||0)%i0.length]:null,BJ=await fetch("/api/playground/fire",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:t,stream:!0,...IJ&&IJ.covered?{model:IJ.id}:{}})});if(!BJ.ok){let wJ=await BJ.json().catch(()=>({}));if(D.chat=null,GJ&&!GJ.value.trim())GJ.value=t,C8[j]=t;if(wJ.error==="lane_empty")D.err=`Inference lane is empty — it needs about $${(wJ.required_usd||0.001).toFixed(4)} for this call. Green key on HOME funds it.`,D.vireo.set("droop");else if(wJ.error==="rate_limited")D.err="Easy — a few seconds between fires.",D.vireo.set("alert");else D.err="The rail refused that one. Try again.",D.vireo.set("alert");SJ.err()}else{let wJ=BJ.body.getReader(),jJ=new TextDecoder,g9="",g7=null,iJ=null;for(;;){let{value:p7,done:wY}=await wJ.read();if(wY)break;g9+=jJ.decode(p7,{stream:!0});let Z$;while((Z$=g9.indexOf(`

`))>=0){let TY=g9.slice(0,Z$);g9=g9.slice(Z$+2);for(let mK of TY.split(`
`)){if(!mK.startsWith("data: "))continue;let lK=mK.slice(6);if(lK==="[DONE]")continue;let e8;try{e8=JSON.parse(lK)}catch{continue}let dK=e8.choices?.[0]?.delta?.content;if(dK&&D.chat)D.chat.text+=dK,D.chat.shown=D.chat.text.length,D.vireo.flapRate=6,D.dirty=!0;if(e8.usage)g7=e8.usage;if(e8.vantis)iJ=e8.vantis}}}let $$=((performance.now()-w0)/1000).toFixed(1);if(D.chat&&D.chat.text){let p7=g7?.completion_tokens??Math.round(D.chat.text.length/4);if(D.chat.line=iJ&&iJ.cartridge?`${$$}s · ${p7} TOK OUT · CARTRIDGE ${String(iJ.cartridge.card).toUpperCase()} — ${Number(iJ.cartridge.tokens_used_today).toLocaleString("en-US")}/${Number(iJ.cartridge.daily_allowance).toLocaleString("en-US")} TODAY · $0 CHARGED`:iJ&&iJ.cost_usd!=null?`${$$}s · ${p7} TOK OUT · $${Number(iJ.cost_usd).toFixed(6)} → ${Number(iJ.vantis_burned||0).toFixed(4)} VANTIS BURNED`:`${$$}s · ${p7} TOK OUT`,iJ&&iJ.balance_usd!=null&&D.meta?.lanes?.inference)D.meta.lanes.inference.balance_usd=iJ.balance_usd;if(iJ?.cartridge&&D.meta?.cartridge?.allowance)D.meta.cartridge.allowance.used=iJ.cartridge.tokens_used_today,D.meta.cartridge.allowance.remaining=iJ.cartridge.tokens_remaining_today;vK=!0,SJ.ok(),cJ(`Answer: ${D.chat.text}`)}else D.chat=null,D.err="The stream came back empty — try again.",D.vireo.set("alert"),SJ.err()}}else if(j==="SEARCH"){let w0=await fetch("/api/playground/search",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:t})}),i0=await w0.json();if(!w0.ok){if(i0.error==="demo_exhausted")D.err="Today's free searches are spent — more tomorrow.";else D.err="Search did not go through.";D.vireo.set("alert"),SJ.err()}else{if(D.search={query:t,results:i0.results,left:i0.left_today},GJ)GJ.value="",C8[j]="";D.vireo.set("happy"),SJ.ok(),cJ(`${i0.results.length} results`)}}else if(j==="X LOOKUP"){let w0=await fetch("/api/playground/x",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({handle:t})}),i0=await w0.json();if(!w0.ok)D.err=i0.error==="demo_exhausted"?"Today's free lookups are spent — more tomorrow.":i0.error==="handle_not_found"?"No such handle — check the spelling.":i0.error==="tool_off"?"This route is offline right now.":"Lookup did not go through.",D.vireo.set("alert"),SJ.err();else{if(D.xprof={profile:i0.profile,left:i0.left_today},GJ)GJ.value="",C8[j]="";D.vireo.set("happy"),SJ.ok(),cJ(`@${i0.profile.handle}: ${i0.profile.followers} followers`)}}}catch{if(D.err="Network hiccup — try again.",j==="CHAT"&&D.chat&&!D.chat.text){if(GJ&&!GJ.value.trim())GJ.value=D.chat.prompt,C8[j]=D.chat.prompt;D.chat=null}D.vireo.set("alert"),SJ.err()}finally{if(D.busy=!1,D.vireo.state==="work")D.vireo.set("idle");D.dirty=!0}}let rQ=-1e9,_6=new bQ,r8=new E0,T9=null,nJ=null,BY=new lJ({visible:!1}),x7=(j,p,t,w0,i0,IJ=0,BJ=0,wJ=0)=>{let jJ=new h0(new CJ(p,t,w0),BY);return jJ.position.set(IJ,BJ,wJ),jJ.userData.hit=j,i0.add(jJ),jJ},MY=[x7("knob",0.42,0.42,0.22,c),x7("key",0.34,0.34,0.2,q0),x7("lever",0.3,0.26,0.18,e,0,0.05,0.03),x7("card",0.74,0.5,0.26,G0,0,0,0),x7("screen",1.17,0.88,0.06,_,-0.26,0.02,0.19)];function tQ(j){let p=$.domElement.getBoundingClientRect();r8.x=(j.clientX-p.left)/p.width*2-1,r8.y=-((j.clientY-p.top)/p.height)*2+1,_6.setFromCamera(r8,U);let t=_6.intersectObjects(MY,!1);return t.length?t[0].object.userData.hit:null}function IY(j){let p=$.domElement.getBoundingClientRect();r8.x=(j.clientX-p.left)/p.width*2-1,r8.y=-((j.clientY-p.top)/p.height)*2+1,_6.setFromCamera(r8,U);let t=_6.intersectObject(m,!1)[0];if(!t?.uv)return null;return{cx:t.uv.x*F9,cy:(1-t.uv.y)*U8}}function AY(j){let p=IY(j);if(!p)return;for(let t of D.tabRects)if(p.cx>=t.x&&p.cx<=t.x+t.w&&p.cy>=t.y&&p.cy<=t.y+t.h){QJ(t.mode);return}if(D.modeName()==="LANES"&&p.cy>100&&p.cy<460){let t=p.cx<F9/2?"inference":"devtools";if(t!==D.lane){D.lane=t,YJ.target=t==="inference"?-0.22:0.22,SJ.lever(),D.dirty=!0,cJ(`Lane: ${D.lane}`);return}}s0()}$.domElement.addEventListener("pointerdown",(j)=>{rQ=performance.now();let p=tQ(j);if(!p)return;if(D.vireo.poke(),p==="knob")T9={x:j.clientX,base:D.mode,acc:0},$.domElement.setPointerCapture(j.pointerId);else if(p==="key"){if(!fK())return;T0.target=-0.032,SJ.press(),oQ=!1,jK=setTimeout(()=>{if(oQ=!0,D.modeName()==="LANES")SK(D.lane)},650)}else if(p==="lever"){if(D.lane=D.lane==="inference"?"devtools":"inference",YJ.target=D.lane==="inference"?-0.22:0.22,SJ.lever(),D.dirty=!0,D.modeName()!=="LANES")QJ(5,!0);cJ(`Lane: ${D.lane}`)}else if(p==="screen")AY(j);else if(p==="card"){if(r0==="inserting"||r0==="ejecting")return;nJ={startX:j.clientX,startY:j.clientY,startV:JJ.v,moved:!1,pulledOut:!1},$.domElement.setPointerCapture(j.pointerId)}});let yK=0,w6=null;$.domElement.addEventListener("pointermove",(j)=>{rQ=performance.now();let p=$.domElement.getBoundingClientRect(),t=(j.clientX-p.left)/p.width*2-1,w0=(j.clientY-p.top)/p.height*2-1;if(!x9)g.target=t*0.1,h.target=w0*0.055;if(T9){let IJ=j.clientX-T9.x,BJ=Math.round(IJ/52);if(BJ!==T9.acc)QJ(T9.base+BJ),T9.acc=BJ;$.domElement.style.cursor="grabbing";return}if(nJ){let IJ=$.domElement.getBoundingClientRect(),BJ=(nJ.startY-j.clientY)/IJ.height*1.5-(nJ.startX-j.clientX)/IJ.width*1.1;if(Math.abs(j.clientY-nJ.startY)+Math.abs(j.clientX-nJ.startX)>8)nJ.moved=!0;let wJ=D.busy?0.9:0;if(JJ.v=Math.max(wJ,Math.min(1,nJ.startV+BJ)),JJ.target=JJ.v,JJ.vel=0,!nJ.pulledOut&&JJ.v<0.86&&D.powered){nJ.pulledOut=!0,D.powered=!1,D.booted=x9,D.bootT=0,D.dirty=!0;try{let jJ=q8();K9(500,jJ.currentTime+0.01,0.05,0.05,"sine"),K9(340,jJ.currentTime+0.08,0.06,0.07,"sine")}catch{}cJ("Card out — screen off")}$.domElement.style.cursor="grabbing";return}let i0=performance.now();if(i0-yK>80)yK=i0,w6=tQ(j),$.domElement.style.cursor=w6?"pointer":"default"});let bK=(j)=>{if(nJ){let p=!nJ.moved,t=JJ.v;nJ=null;try{$.domElement.releasePointerCapture(j.pointerId)}catch{}if(p){if(r0==="hover")hJ();else if(r0==="seated")_0()}else if(t>0.55)r0="inserting",JJ.target=1;else r0="ejecting",JJ.target=0;return}if(T9){T9=null;try{$.domElement.releasePointerCapture(j.pointerId)}catch{}}if(T0.target!==0){if(T0.target=0,clearTimeout(jK),!oQ)aQ()}};$.domElement.addEventListener("pointerup",bK),$.domElement.addEventListener("pointerleave",(j)=>{if(!T9)h.target=0,g.target=0;bK(j)});let t8=0,hK=null;$.domElement.addEventListener("wheel",(j)=>{if(w6==="screen"&&D.modeName()==="CHAT"&&D.chatMaxScroll>0&&!T9){j.preventDefault();let p=Math.max(1,Math.round(Math.abs(j.deltaY)/60));D.chatScroll=Math.max(0,Math.min(D.chatMaxScroll,D.chatScroll+(j.deltaY<0?p:-p))),D.dirty=!0;return}if(w6!=="knob"&&!T9)return;j.preventDefault(),t8+=j.deltaY,clearTimeout(hK),hK=setTimeout(()=>t8=0,200);while(Math.abs(t8)>=100)QJ(D.mode+(t8>0?1:-1)),t8-=Math.sign(t8)*100},{passive:!1});let eQ=()=>{if(!fK())return;T0.target=-0.032,setTimeout(()=>T0.target=0,130),SJ.press(),aQ()};addEventListener("keydown",(j)=>{if(j.target===GJ){if(j.key==="Enter")j.preventDefault(),eQ();return}if(j.target?.tagName==="INPUT"||j.target?.tagName==="TEXTAREA")return;if(j.key==="ArrowRight")QJ(D.mode+1);else if(j.key==="ArrowLeft")QJ(D.mode-1);else if(j.key==="Enter")eQ();else if(j.key==="Escape"){if(A0)s0(!1)}else if(j.key.toLowerCase()==="z")s0();else if(j.key.toLowerCase()==="l")D.lane=D.lane==="inference"?"devtools":"inference",YJ.target=D.lane==="inference"?-0.22:0.22,SJ.lever(),D.dirty=!0}),R9?.addEventListener("click",eQ),k9?.addEventListener("click",()=>{if(D.modeName()==="LANES")SK(D.lane);else iQ("inference")});function xK(){let j=J.clientWidth,p=Math.max(440,Math.min(700,Math.round(j*0.72)));$.setSize(j,p),U.aspect=j/p,H.z=j<560?6:j<760?4.9:4.3,U.updateProjectionMatrix(),D.dirty=!0}new ResizeObserver(xK).observe(J),xK();let J$=performance.now(),Q$=0,PY=[h,g,a0,T0,YJ,JJ];function gK(j){Q$=requestAnimationFrame(gK);let p=Math.max(0,Math.min(0.25,(j-J$)/1000)),t=Math.min(0.05,p);J$=j;let w0=j/1000;$9.t=w0;let i0=D.step(p,w0),IJ=j-rQ<2500;if(!(D.powered&&!D.booted||D.busy||i0||IJ||!k0.settled()||r0==="inserting"||r0==="ejecting"||!!nJ||PY.some((jJ)=>!jJ.settled())))if(Math.abs(L.position.y-0.02)>0.0004)L.position.y+=(0.02-L.position.y)*Math.min(1,t*3);else return;else if(!x9&&IJ)L.position.y=0.02+Math.sin(w0*0.9)*0.012;if(!x9){let jJ=1-k0.v*0.75;L.rotation.x=h.step(t)*jJ,L.rotation.y=g.step(t)*jJ}let wJ=k0.step(t);if(wJ>0.001)m.getWorldPosition(V0),f0.set(0,0,1),m.getWorldQuaternion(U.quaternion),f0.applyQuaternion(U.quaternion),S0.lerpVectors(G,V0,wJ),U.position.lerpVectors(H,V0.clone().addScaledVector(f0,1.92),wJ),U.lookAt(S0);else U.position.copy(H),U.lookAt(G);if(c.rotation.z=a0.step(t),L0.position.z=T0.step(t),Q0.rotation.z=YJ.step(t),y(nJ?JJ.v:JJ.step(t)),!nJ&&r0==="inserting"&&Math.abs(JJ.v-1)<0.01)r0="seated",SJ.dock(),D.powered=!0,D.dirty=!0;else if(!nJ&&r0==="ejecting"&&JJ.v<0.02)r0="hover",RJ=0;T.material.color.set(D.lane==="devtools"?s8:1327146),c0.material.color.set(D.lane==="inference"?s8:1327146),O.color.setHex(s8).multiplyScalar(D.busy?0.75+Math.sin(w0*9)*0.25:1),$.render(Z,U)}if(x9){let j=()=>{if(D.step(0.03333333333333333,performance.now()/1000),c.rotation.z=a0.target,L0.position.z=T0.target,Q0.rotation.z=YJ.target,JJ.v=JJ.target,y(JJ.v),r0==="inserting")r0="seated",D.powered=!0,D.dirty=!0;else if(r0==="ejecting")r0="hover";$.render(Z,U)};setInterval(j,250),j()}else{let j=!0,p=!1,t=()=>{let w0=j&&!document.hidden;if(w0&&!p)p=!0,J$=performance.now(),Q$=requestAnimationFrame(gK);else if(!w0&&p)p=!1,cancelAnimationFrame(Q$)};new IntersectionObserver((w0)=>{j=w0[0]?.isIntersecting!==!1,t()},{threshold:0.02}).observe(J),document.addEventListener("visibilitychange",t),t()}let T6=new v;function CY(j){return j.getWorldPosition(T6),T6.project(U),{x:(T6.x+1)/2*$.domElement.clientWidth,y:(1-T6.y)/2*$.domElement.clientHeight}}function _Y(){let j=[{obj:m,ring:200,k:"The screen",txt:"Everything happens here. Tap the tabs to switch tools — and tap the screen itself to raise it closer."},{obj:q0,ring:110,k:"The green key",txt:"Fires the current tool. Spending arms first with a printed quote — nothing costs money on a single press."},{obj:c,ring:110,k:"The dial",txt:"Steps through the same tools. Drag it, scroll over it, or use the arrow keys."},{obj:e,ring:110,k:"The lanes",txt:"The paddle picks which lane spends — Inference is live today. Your card up top is the session cartridge."}],p=document.createElement("div");p.className="dv-coach",p.innerHTML='<div class="dv-coach-ring"></div><div class="dv-coach-card"><div class="dv-coach-step"></div><div class="dv-coach-txt"></div><div class="dv-coach-row"><button data-a="skip">Skip</button><button class="pri" data-a="next">Next</button></div></div>',J.appendChild(p);let t=p.querySelector(".dv-coach-ring"),w0=p.querySelector(".dv-coach-step"),i0=p.querySelector(".dv-coach-txt"),IJ=p.querySelector('[data-a="next"]'),BJ=0,wJ=()=>{let g9=j[BJ],g7=CY(g9.obj);t.style.left=g7.x+"px",t.style.top=g7.y+"px",t.style.width=t.style.height=g9.ring+"px",w0.textContent=`${BJ+1} / ${j.length} — ${g9.k}`,i0.textContent=g9.txt,IJ.textContent=BJ===j.length-1?"Start":"Next",SJ.detent(BJ)},jJ=()=>{try{localStorage.setItem("vc-device-coach","1")}catch{}p.remove()};p.querySelector('[data-a="skip"]').addEventListener("click",jJ),IJ.addEventListener("click",()=>{if(BJ++,BJ>=j.length)jJ();else wJ()}),wJ()}let pK=!1;try{pK=!!localStorage.getItem("vc-device-coach")}catch{}if(!pK&&!x9)setTimeout(_Y,x9?0:2200);document.body.classList.add("dv-on"),document.getElementById("dv-console")?.removeAttribute("open"),CK(),wK().then(sQ),window.__device={ready:!0,os:D,setMode:(j)=>QJ(j),pickAt:(j,p)=>tQ({clientX:j,clientY:p}),insertCard:hJ,ejectCard:_0,cardState:()=>r0,frames:()=>$.info.render.frame,screenClientPoint:(j,p)=>{let t=new v((j-0.5)*1.15,(p-0.5)*0.8625,0);m.localToWorld(t),t.project(U);let w0=$.domElement.getBoundingClientRect();return{x:w0.left+(t.x+1)/2*w0.width,y:w0.top+(1-t.y)/2*w0.height}},fire:aQ,snapshot:()=>{return $.render(Z,U),$.domElement.toDataURL("image/png")}}}if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",kY);else kY();
