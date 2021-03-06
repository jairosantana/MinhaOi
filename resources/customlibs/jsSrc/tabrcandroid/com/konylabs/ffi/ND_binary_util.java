package com.konylabs.ffi;
import java.util.HashMap;
import java.util.Hashtable;
import java.util.Vector;
import com.konylabs.api.TableLib;
import com.konylabs.vm.LuaTable;



import com.kony.binary.utility.BlobStoreUtil;
import com.kony.binary.utility.DownloadUtil;
import com.kony.binary.utility.PollingUtility;
import com.konylabs.libintf.Library;
import com.konylabs.libintf.JSLibrary;
import com.konylabs.vm.LuaError;
import com.konylabs.vm.LuaNil;


public class ND_binary_util extends JSLibrary {

 
 
	public static final String saveBase64File = "saveBase64File";
 
 
	public static final String getBase64FromFile = "getBase64FromFile";
 
 
	public static final String deleteBlobFile = "deleteBlobFile";
 
 
	public static final String getBase64FromFiles = "getBase64FromFiles";
 
 
	public static final String decodeBase64File = "decodeBase64File";
 
 
	public static final String decodeBase64Files = "decodeBase64Files";
 
 
	public static final String deleteAllBinaryFiles = "deleteAllBinaryFiles";
 
 
	public static final String binaryThreadInit = "binaryThreadInit";
 
 
	public static final String notifyToPrepareJobs = "notifyToPrepareJobs";
 
 
	public static final String notifyToProcessJobs = "notifyToProcessJobs";
 
 
	public static final String createBlobsDir = "createBlobsDir";
 
 
	public static final String renameFile = "renameFile";
 
	String[] methods = { saveBase64File, getBase64FromFile, deleteBlobFile, getBase64FromFiles, decodeBase64File, decodeBase64Files, deleteAllBinaryFiles, binaryThreadInit, notifyToPrepareJobs, notifyToProcessJobs, createBlobsDir, renameFile };


 Library libs[] = null;
 public Library[] getClasses() {
 libs = new Library[0];
 return libs;
 }



	public ND_binary_util(){
	}

	public Object[] execute(int index, Object[] params) {
		// TODO Auto-generated method stub
		Object[] ret = null;
 try {
		int paramLen = params.length;
 int inc = 1;
		switch (index) {
 		case 0:
 if (paramLen != 2){ return new Object[] {new Double(100),"Invalid Params"}; }
 java.lang.String filename0 = null;
 if(params[0] != null && params[0] != LuaNil.nil) {
 filename0 = (java.lang.String)params[0];
 }
 java.lang.String base640 = null;
 if(params[1] != null && params[1] != LuaNil.nil) {
 base640 = (java.lang.String)params[1];
 }
 ret = this.saveBase64File( filename0, base640 );
 
 			break;
 		case 1:
 if (paramLen != 1){ return new Object[] {new Double(100),"Invalid Params"}; }
 java.lang.String filePath1 = null;
 if(params[0] != null && params[0] != LuaNil.nil) {
 filePath1 = (java.lang.String)params[0];
 }
 ret = this.getBase64FromFile( filePath1 );
 
 			break;
 		case 2:
 if (paramLen != 1){ return new Object[] {new Double(100),"Invalid Params"}; }
 java.lang.String filePath2 = null;
 if(params[0] != null && params[0] != LuaNil.nil) {
 filePath2 = (java.lang.String)params[0];
 }
 ret = this.deleteBlobFile( filePath2 );
 
 			break;
 		case 3:
 if (paramLen != 1){ return new Object[] {new Double(100),"Invalid Params"}; }
 com.konylabs.vm.LuaTable filePaths3 = null;
 if(params[0] != null && params[0] != LuaNil.nil) {
 filePaths3 = (com.konylabs.vm.LuaTable)params[0];
 }
 ret = this.getBase64FromFiles( filePaths3 );
 
 			break;
 		case 4:
 if (paramLen != 1){ return new Object[] {new Double(100),"Invalid Params"}; }
 java.lang.String filePath4 = null;
 if(params[0] != null && params[0] != LuaNil.nil) {
 filePath4 = (java.lang.String)params[0];
 }
 ret = this.decodeBase64File( filePath4 );
 
 			break;
 		case 5:
 if (paramLen != 1){ return new Object[] {new Double(100),"Invalid Params"}; }
 com.konylabs.vm.LuaTable filePaths5 = null;
 if(params[0] != null && params[0] != LuaNil.nil) {
 filePaths5 = (com.konylabs.vm.LuaTable)params[0];
 }
 ret = this.decodeBase64Files( filePaths5 );
 
 			break;
 		case 6:
 if (paramLen != 0){ return new Object[] {new Double(100),"Invalid Params"}; }
 ret = this.deleteAllBinaryFiles( );
 
 			break;
 		case 7:
 if (paramLen != 4){ return new Object[] {new Double(100),"Invalid Params"}; }
 com.konylabs.vm.Function prepareJobs7 = null;
 if(params[0] != null && params[0] != LuaNil.nil) {
 prepareJobs7 = (com.konylabs.vm.Function)params[0];
 }
 com.konylabs.vm.Function getPreparedJobs7 = null;
 if(params[1] != null && params[1] != LuaNil.nil) {
 getPreparedJobs7 = (com.konylabs.vm.Function)params[1];
 }
 com.konylabs.vm.Function succCallback7 = null;
 if(params[2] != null && params[2] != LuaNil.nil) {
 succCallback7 = (com.konylabs.vm.Function)params[2];
 }
 com.konylabs.vm.Function errCallback7 = null;
 if(params[3] != null && params[3] != LuaNil.nil) {
 errCallback7 = (com.konylabs.vm.Function)params[3];
 }
 ret = this.binaryThreadInit( prepareJobs7, getPreparedJobs7, succCallback7, errCallback7 );
 
 			break;
 		case 8:
 if (paramLen != 0){ return new Object[] {new Double(100),"Invalid Params"}; }
 ret = this.notifyToPrepareJobs( );
 
 			break;
 		case 9:
 if (paramLen != 0){ return new Object[] {new Double(100),"Invalid Params"}; }
 ret = this.notifyToProcessJobs( );
 
 			break;
 		case 10:
 if (paramLen != 0){ return new Object[] {new Double(100),"Invalid Params"}; }
 ret = this.createBlobsDir( );
 
 			break;
 		case 11:
 if (paramLen != 2){ return new Object[] {new Double(100),"Invalid Params"}; }
 java.lang.String oldFilePath11 = null;
 if(params[0] != null && params[0] != LuaNil.nil) {
 oldFilePath11 = (java.lang.String)params[0];
 }
 java.lang.String newFilePath11 = null;
 if(params[1] != null && params[1] != LuaNil.nil) {
 newFilePath11 = (java.lang.String)params[1];
 }
 ret = this.renameFile( oldFilePath11, newFilePath11 );
 
 			break;
 		default:
			break;
		}
 }catch (Exception e){
			ret = new Object[]{e.getMessage(), new Double(101), e.getMessage()};
		}
		return ret;
	}

	public String[] getMethods() {
		// TODO Auto-generated method stub
		return methods;
	}
	public String getNameSpace() {
		// TODO Auto-generated method stub
		return "binary.util";
	}


	/*
	 * return should be status(0 and !0),address
	 */
 
 
 	public final Object[] saveBase64File( java.lang.String inputKey0, java.lang.String inputKey1 ){
 
		Object[] ret = null;
 java.lang.String val = com.kony.binary.utility.BlobStoreUtil.saveBase64File( inputKey0
 , inputKey1
 );
 
 			ret = new Object[]{val, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] getBase64FromFile( java.lang.String inputKey0 ){
 
		Object[] ret = null;
 java.lang.String val = com.kony.binary.utility.BlobStoreUtil.getBase64FromFile( inputKey0
 );
 
 			ret = new Object[]{val, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] deleteBlobFile( java.lang.String inputKey0 ){
 
		Object[] ret = null;
 Boolean val = new Boolean(com.kony.binary.utility.BlobStoreUtil.deleteBlobFile( inputKey0
 ));
 
 			ret = new Object[]{val, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] getBase64FromFiles( com.konylabs.vm.LuaTable inputKey0 ){
 
		Object[] ret = null;
 java.util.Vector retval = com.kony.binary.utility.BlobStoreUtil.getBase64FromFiles( (java.util.Vector)TableLib.convertToList(inputKey0)
 );
 LuaTable val = TableLib.convertToLuaTable(retval);
 
 			ret = new Object[]{val, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] decodeBase64File( java.lang.String inputKey0 ){
 
		Object[] ret = null;
 java.lang.String val = com.kony.binary.utility.BlobStoreUtil.decodeBase64File( inputKey0
 );
 
 			ret = new Object[]{val, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] decodeBase64Files( com.konylabs.vm.LuaTable inputKey0 ){
 
		Object[] ret = null;
 java.util.Vector retval = com.kony.binary.utility.BlobStoreUtil.decodeBase64Files( (java.util.Vector)TableLib.convertToList(inputKey0)
 );
 LuaTable val = TableLib.convertToLuaTable(retval);
 
 			ret = new Object[]{val, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] deleteAllBinaryFiles( ){
 
		Object[] ret = null;
 Boolean val = new Boolean(com.kony.binary.utility.BlobStoreUtil.deleteAllBinaryFiles( ));
 
 			ret = new Object[]{val, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] binaryThreadInit( com.konylabs.vm.Function inputKey0, com.konylabs.vm.Function inputKey1, com.konylabs.vm.Function inputKey2, com.konylabs.vm.Function inputKey3 ){
 
		Object[] ret = null;
 com.kony.binary.utility.DownloadUtil.binaryThreadInit( (com.konylabs.vm.Function)inputKey0
 , (com.konylabs.vm.Function)inputKey1
 , (com.konylabs.vm.Function)inputKey2
 , (com.konylabs.vm.Function)inputKey3
 );
 
 ret = new Object[]{LuaNil.nil, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] notifyToPrepareJobs( ){
 
		Object[] ret = null;
 com.kony.binary.utility.PollingUtility.notifyToPrepareJobs( );
 
 ret = new Object[]{LuaNil.nil, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] notifyToProcessJobs( ){
 
		Object[] ret = null;
 com.kony.binary.utility.PollingUtility.notifyToProcessJobs( );
 
 ret = new Object[]{LuaNil.nil, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] createBlobsDir( ){
 
		Object[] ret = null;
 com.kony.binary.utility.BlobStoreUtil.createBlobsDir( );
 
 ret = new Object[]{LuaNil.nil, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] renameFile( java.lang.String inputKey0, java.lang.String inputKey1 ){
 
		Object[] ret = null;
 Boolean val = new Boolean(com.kony.binary.utility.BlobStoreUtil.renameFile( inputKey0
 , inputKey1
 ));
 
 			ret = new Object[]{val, new Double(0)};
 		return ret;
	}
 
};
