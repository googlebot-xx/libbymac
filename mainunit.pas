unit MainUnit;

{$I cef.inc}

interface

uses
  Windows, Messages, SysUtils, Variants, Classes, Graphics, Controls, Forms,
  Dialogs, StdCtrls, ExtCtrls, ComCtrls, Buttons, pngimage, Spin,
  ImgList, jpeg, DateUtils,
  uCEFChromium, uCEFWindowParent, uCEFInterfaces, uCEFApplication, uCEFTypes,
  uCEFConstants, uCEFv8Value, uCEFMiscFunctions,
  uCEFWinControl;

const
  cr = #10;
//  c_captcha=80;
  c_captcha=90;

{$ifdef CHEGG}
  c_home = 'https://www.chegg.com/';
{$else}
  c_home = 'https://www.vitalsource.com/';
{$endif}
  // c_home1 = 'file:///D:/Myfile/Net/MSN/vbkbrowser604/dom/browser-test.htm';
//  c_home1 = c_home;
{$IFDEF release}
//  c_home1 = c_home;
  c_home1 = 'https://bookshelf.vitalsource.com/#/user/signin';
{$ELSE}
  c_home1 = 'https://bookshelf.vitalsource.com/#/user/signin';
//   c_home1 = c_home;
//  c_home1 = 'http://www.flyos.net/bt4.htm';
//  c_home1 = 'http://flyos.net/imgdata.html';
//  c_home1 = 'http://flyos.net/js/iframe/bt1.html';
  //c_home1 = c_home;// 'https://bookshelf.vitalsource.com/#/';
  //c_home1 = 'https://www.flyos.net/browser.htm';
  //c_home1 = 'https://browserleaks.com/canvas';
  //c_home1 = 'file:///D:/Myfile/Net/MSN/vbkbrowser604/dom/browser.htm';
 //  c_home1 = 'file:///D:/Myfile/Net/MSN/vbkbrowser200/dom/browser-test.htm';
// c_home1 ='file:///D:/Myfile/Net/MSN/vbkbrowser200/dom/bt4.htm';
// c_home1 ='http://www.flyos.net/fs';
// c_home1 ='file:///C:/Users/e570/Documents/eBook%20Converter/VitalSource%20Downloader/temp/9780636176881/epub/OPS/xhtml/fileP700print.xhtml';
// c_home1 ='http://www.flyos.net/browser.php';
// c_home1 ='http://www.google.com';
{$ENDIF}
//  c_home1 = 'https://bookshelf.vitalsource.com/#/' ;
 // c_home1 ='https://bookshelf.vitalsource.com/#/user/signin'  ;
  j_inject = '/assets/application';
  j_inject2='challenge?id=';
  //j_inject = '?jigsaw_brand=vitalsource&xdm_c=';
  WM_JASON = WM_USER + 100;
  WM_ROBOT = WM_USER + 101;
  c_timeout = 100;
{$IFnDEF release}
//  c_login = 'a03@pwqsoft.com';
//  c_pass = '600338qQ~';
//  c_login = 'mdsgrade4@gmail.com';
//  c_pass = 'MDSpass@123';
//  c_login = 'souzaehsouza@hotmail.com';
//  c_pass = 'Gen351444#';
  {$ifdef CHEGG}
    c_login = 'vinestee@gmail.com';
    c_pass = 'dUXQJ9jUq';
  {$else}
    c_login = 'youhdtv@gmail.com';
    c_pass = '600338qQ@';
//    c_login = 'tr287@exeter.ac.uk';
//    c_pass = 'Swimmer#2020!';
//    c_login = 'a03@pwqsoft.com';
//    c_pass = '600338qQ~';
  {$endif}
{$ENDIF}
  // Delphi Chromium Embeded
  // http://www.magpcss.org/ceforum/viewtopic.php?f=6&t=10831
  // http://www.magpcss.org/ceforum/viewtopic.php?f=6&t=12627
  // http://wiki.freepascal.org/fpCEF3

type
  TMainfm = class(TForm)
    Panel1: TPanel;
    Panel3: TPanel;
    SaveDialog1: TSaveDialog;
    orderbtn: TSpeedButton;
    Aboutbtn: TSpeedButton;
    SpeedButton1: TSpeedButton;
    addressed: TEdit;
    IconImage: TImage;
    downloadPanel: TPanel;
    panel6: TPanel;
    Memo1: TMemo;
    Panel5: TPanel;
    downloadbtn: TButton;
    ticklabel: TLabel;
    Timer1: TTimer;
    statusLabel: TLabel;
    forwardbtn: TSpeedButton;
    backbtn: TSpeedButton;
    SpeedButton2: TSpeedButton;
    goBtn: TSpeedButton;
    loginbtn: TButton;
    ImageList1: TImageList;
    stopbtn: TButton;
    youtubebtn: TSpeedButton;
    testbtn: TButton;
    buildbtn: TButton;
    waitPanel: TPanel;
    chm: TChromium;
    started: TEdit;
    DevTools: TCEFWindowParent;
    devbtn: TButton;
    Splitter1: TSplitter;
    ChromeWin: TCEFWindowParent;
    Label1: TLabel;
    timeouted: TEdit;
    Splitter2: TSplitter;
    Label2: TLabel;
    pdfradio: TRadioButton;
    epubradio: TRadioButton;
    Label3: TLabel;
    ended: TEdit;
    procedure FormCreate(Sender: TObject);
    procedure FormDestroy(Sender: TObject);
    procedure OutputBtnClick(Sender: TObject);
    procedure orderbtnClick(Sender: TObject);
    procedure SpeedButton1Click(Sender: TObject);
    procedure AboutbtnClick(Sender: TObject);
    procedure rebuildClick(Sender: TObject);
    procedure chmLoadEnd(Sender: TObject; const browser: ICefBrowser;
      const frame: ICefFrame; httpStatusCode: Integer);
    procedure loginbtnClick(Sender: TObject);
    procedure downloadbtnClick(Sender: TObject);
    procedure TestbtnClick(Sender: TObject);
    procedure homebtnClick(Sender: TObject);
    procedure Timer1Timer(Sender: TObject);
    procedure TickedChange(Sender: TObject);
    procedure closedownloadbtnClick(Sender: TObject);
    procedure backbtnClick(Sender: TObject);
    procedure forwardbtnClick(Sender: TObject);
    procedure goBtnClick(Sender: TObject);
    procedure addressedClick(Sender: TObject);
    procedure addressedKeyPress(Sender: TObject; var Key: Char);
    procedure stopbtnClick(Sender: TObject);
    procedure youtubebtnClick(Sender: TObject);
    procedure FormShow(Sender: TObject);
    procedure chmAfterCreated(Sender: TObject; const browser: ICefBrowser);
    procedure devbtnClick(Sender: TObject);


    procedure chmBeforePopup(Sender: TObject; const browser: ICefBrowser;
      const frame: ICefFrame; const targetUrl, targetFrameName: ustring;
      targetDisposition: TCefWindowOpenDisposition; userGesture: Boolean;
      const popupFeatures: TCefPopupFeatures; var windowInfo: TCefWindowInfo;
      var client: ICefClient; var settings: TCefBrowserSettings;
      var extra_info: ICefDictionaryValue; var noJavascriptAccess,
      Result: Boolean);
    procedure chmConsoleMessage(Sender: TObject; const browser: ICefBrowser;
      level: Cardinal; const message, source: ustring; line: Integer;
      out Result: Boolean);
    procedure chmAddressChange(Sender: TObject; const browser: ICefBrowser;
      const frame: ICefFrame; const url: ustring);
    procedure chmTitleChange(Sender: TObject; const browser: ICefBrowser;
      const title: ustring);
    procedure chmGetResourceHandler(Sender: TObject; const browser: ICefBrowser;
      const frame: ICefFrame; const request: ICefRequest;
      var aResourceHandler: ICefResourceHandler);
  private
    { Private declarations }
    procedure OnIdle(Sender: TObject; var Done: Boolean);
    function GetOutput(Sender: TObject): Boolean;
    procedure BrowserIdle(Sender: TObject);
    procedure DefaultHandler(var Message); override;
    procedure SetButton();
    procedure Saveini;
    procedure Loadini;
    function IsMain(const b: ICefBrowser; const f: ICefFrame): Boolean;
    procedure Clicklistbtn();
    procedure ReloadKey(Sender: TObject);
    procedure reBuildebook() ;
    procedure PrintPDF(afile: string);
    procedure PrintPDF2(afile: string);
    procedure MessageHandle(str:string);
    function runJavascript(js:string):boolean;
    function saveimgjs:boolean;
    function printjs:boolean;
    procedure SendchmKeydown(akey:word; up:Boolean);
    procedure SendchmMouse(x,y:integer);
    procedure nextpagejs();
  protected
    procedure WMMove(var aMessage: TWMMove); message WM_MOVE;
    procedure WMMoving(var aMessage: TMessage); message WM_MOVING;
    procedure BrowserCreatedMsg(var aMessage: TMessage);
      message CEF_AFTERCREATED;
    procedure FindjasonMsg(var aMessage: TMessage); message WM_JASON;
    procedure FindROBOT(var aMessage: TMessage); message WM_ROBOT;
  public
    { Public declarations }
    procedure setworking(b: Boolean);
    procedure Taskhandle;
    procedure TaskhandlePDF;
    function PDFnextpage():integer;
  end;

procedure Log(msg: string);
procedure UpdateLog(msg: string);
procedure debug(msg: string);
procedure goUrl(aurl: string);
procedure onTick(tick: Integer);
procedure findjason;
procedure init;
// procedure GlobalCEFApp_OnContextCreated(const browser: ICefBrowser; const frame: ICefFrame; const context: ICefv8Context);
procedure CreateGlobalCEFApp;
function loadprintjs(sfile:string):string;

const
  jsplug: string = '';
  ticknum: Integer=0;

var
  Mainfm: TMainfm;
  dataroot: string;
  ebookroot: string;
  root: string;
  bkbmp: Tbitmap;
  pagelist: Tstringlist;
  working: Boolean;
  epubfile: string;
  ebooktitle: string;
  js_canvas,js_inject2:string;
  js_todata:string;
  vtimeout:integer;
  addresschanged:integer;
  s_domain,s_subdomain,s_site:string;
    pagenum: Integer = 0;
    pausing:boolean = false;
    pausenum:integer;
    msgpagetype:string;
  startno,endno: integer;

implementation

{$R *.dfm}
// {$R myres.RES}

// http://stackoverflow.com/questions/10670452/how-to-get-elements-by-name-in-delphi-chromium-embedded

uses strconst, rsaunit, myutils, shellapi, BuyUnit, vbooks, { myrequest , }
  myResourceHandler, JsonDataObjects,  md5,
  AboutUt;

//const

var
  OldHandle: THandle = 0;
  oldtop: Integer;
  DllFile: string;
  outputfile: string;
  totalpage: Integer;
//  ticknum: Integer;
  checktimer: TTimer;
  task: Integer = 0;
  recaptcha:integer =0;

  framenum: Integer = 0;
  s_seed,s_canvas,s_plugin,s_webgl,s_fraction:string;
  isjsend:boolean;
  jsmsg:string;

type
  EXECUTION_STATE = DWORD;

const
  ES_SYSTEM_REQUIRED = $00000001;
  ES_DISPLAY_REQUIRED = $00000002;
  ES_USER_PRESENT = $00000004;
  ES_AWAYMODE_REQUIRED = $00000040;
  ES_CONTINUOUS = $80000000;
  KernelDLL = 'kernel32.dll';

procedure SetThreadExecutionState(ESFlags: EXECUTION_STATE); stdcall;
external 'kernel32.dll' name 'SetThreadExecutionState';

function Randomstr(PLen: Integer): string;
var
  str,s1: string;
  i1,i2:integer;
begin
  //string with all possible chars

  str    := 'abcdef0124569783';
  s1 := '';
  repeat
    s1 := s1 + str[Random(Length(str)) + 1];
  until (Length(s1) = PLen);
  result:=s1;
end;

procedure randstr;
var s1:string;
begin
   s_seed := FormatDateTime('yyyymmddhh',now());
   s1:= strmd5(s_seed+'2');
   s_canvas:= strmd5(s_seed+'1')+copy(s1,16,8);
   s1:=strmd5(s_seed+'4');
   s_plugin:=strmd5(s_seed+'3')+'::'+copy(s1,1,16)+'~'+copy(s1,17,16);
   s_plugin:='Chrome PDF Plugin::Portable Document Format::application/x-google-chrome-pdf~pdf;Chrome PDF Viewer::::application/pdf~pdf';
   s1:=strmd5(s_seed+'5');
   s_webgl:='bd6549c125f67b18985a8c509803f4b883ff810c';// strmd5(s_seed+'6')+copy(s1,1,8);
   //debug(s_img);
end;

function rightstr(str:string):string;
var i,p,l:integer;
begin
    result:='';
    p:=pos('=',str);
    if p>0 then begin
       result:=copy(str,p+1,length(str)-p);
    end;
end ;

function intright(str:string):integer;
var i:integer;
  List: TStrings;
begin
  result:=0;
  List := TStringList.Create;
  try
    ExtractStrings(['='], [], pchar(str), List);
    if list.Count=2 then begin
          result:= strtoint(list[1]);
    end;
  finally
    List.Free;
  end;
end;

procedure Loadjsstr;
var s1,s2:string;
begin
    randstr;
  //jsplug := LoadResStr('jsmock', 'HTML');
   jsplug:= LoadResStr('jsimg','HTML');
   //js_canvas:= LoadResStr('jscanvas','HTML');
   s1:= LoadResStr('jscanvas','HTML');
   s_fraction:= LoadResStr('jscssrule','HTML');
{$IFDEF release}
   s2:='';
{$ELSE}
   s2:= 'console.log(value);';
{$ENDIF}
   //js_canvas:= format(s1,[s_plugin,s_webgl,s2,s_canvas]);
   //js_inject2:= format(j_inject2,[s_plugin,s_canvas,s_webgl,s2]);
   //js_inject2:= format(s_fraction,[s_plugin,s_canvas,s_webgl]);

   //js_canvas:= format(s1,[s_canvas,s_webgl,s2]);
   js_todata := LoadResStr('jsdata','HTML');
  // jsplug:= LoadResStr('canvas','HTML');
  // jsplug:=j_plugin6 ;
end;

procedure GlobalCEFApp_OnContextCreated(const browser: ICefBrowser;
  const frame: ICefFrame; const context: ICefv8Context);
var
  TempValue: ICEFv8Value;
  s:string;
begin
  // This is the first JS Window Binding example in the "JavaScript Integration" wiki page at
  // https://bitbucket.org/chromiumembedded/cef/wiki/JavaScriptIntegration.md

   TempValue := TCefv8ValueRef.NewNull;//NewString('My Value!');
   s:=frame.Url;
  // context.Global.SetValueByKey('chrometest', TempValue, V8_PROPERTY_ATTRIBUTE_NONE);
   //context.Global.SetValueByKey('chrome', TempValue, V8_PROPERTY_ATTRIBUTE_NONE);
   //context.Global.SetValueByKey('chrome',Nil, V8_PROPERTY_ATTRIBUTE_NONE);
   //TempValue := TCefv8ValueRef.NewString('application/x-pnacl');
   //context.Global.SetValueByKey('name', TempValue, V8_PROPERTY_ATTRIBUTE_NONE);
  //context.Global.DeleteValueByKey('chrome');
  //frame.ExecuteJavaScript(js_todata, 'about:blank', 0);
  //frame.ExecuteJavaScript(js_todata, s, 0);
end;

procedure CreateGlobalCEFApp;
begin
  GlobalCEFApp := TCefApplication.Create;
  GlobalCEFApp.OnContextCreated := GlobalCEFApp_OnContextCreated;
  Loadjsstr;
end;

function ActiveApp(ahwnd: HWND): Boolean;
var
  wc: Trect;
begin
  Getwindowrect(ahwnd, wc);
  setwindowpos(ahwnd, HWND_TOP, wc.Left, wc.Top, wc.Right - wc.Left,
    wc.Bottom - wc.Top, 0);
  SendMessage(ahwnd, WM_SYSCOMMAND, SC_HOTKEY, ahwnd);
  SendMessage(ahwnd, WM_SYSCOMMAND, SC_RESTORE, ahwnd);
  SetForegroundWindow(ahwnd);
end;

procedure Wait(ms: DWORD);
var
  FirstTickCount: DWORD;
begin
  FirstTickCount := GetTickCount;
  repeat
    // Application.HandleMessage
    Application.ProcessMessages
  until ((GetTickCount - FirstTickCount) >= DWORD(ms));
end;

procedure goUrl(aurl: string);
begin
  // debug('go page '+s);
  Mainfm.chm.LoadURL(aurl);
  // log(aurl);
end;

procedure findjason;
begin
  if not working  then
    PostMessage(Mainfm.Handle, WM_JASON, 0, 0);

  // debug('post message');
  // log(aurl);
end;

procedure onTick(tick: Integer);
var
  i: Integer;
begin

  exit;

  //inc(ticknum);
//  i := ticknum mod 2;
//  if tick = 0 then  begin
//    if i = 0 then
//      Mainfm.ticklabel.Caption := '--'
//    else
//      Mainfm.ticklabel.Caption := '|';
//  end  else
//    Mainfm.ticklabel.Caption := inttostr(ticknum);

  if working then begin
    Mainfm.Taskhandle;
  end;
  exit;

  if timer.stage = c_openbook then
  begin
    timer.DisableTimer();
    if Application.MessageBox('Do you want to open ebook file?',
      'Open ebook file', MB_YESNO) = IDYes then
    begin
      ShellExecute(0, 'Open', pchar(MainUnit.epubfile), nil, nil,
        sw_shownormal);
    end;
    ShellExecute(0, 'Open', pchar(ebookroot), nil, nil, sw_shownormal);
    timer.stage := c_idle;
    timer.ResetTimer();
    epub.jnodes.Clear();
    // mainfm.downloadPanel.Visible:=false;
    // log('open book');
  end;

end;

procedure printcallback(const path: ustring; ok: Boolean);
begin
  debug('print ok ' + path);
  Log('print ok ' + path);
end;

function printCallback2() : ICefPdfPrintCallback;
begin
  debug('print ok ');
end;


procedure TMainfm.PrintPDF2(afile: string);
var
  s, s1: string;
  settings:  TCefPdfPrintSettings;
  EmptyCefStringUtf16: TCefStringUtf16;
  i: Integer;
  h,w:real;
  frame: ICefFrame;
begin
  // s1:= IncludeTrailingPathDelimiter(dataroot)+'test.pdf';
  //frame := chm.browser.GetFrame('easyXDM_default1795_provider') ;
  //frame.ExecuteJavaScript('focus();', 'about:blank', 0);
//  frame.SelectAll;
  //s:='document.querySelector("#easyXDM_default1795_provider").focus();';
  //chm.browser.MainFrame.ExecuteJavaScript(s,'about:blank', 0);
  s1 := ebookroot +'test-9.pdf';
  //if msgpagetype='type=2' then begin
  if epub.booktype=2 then begin
    h:=0.0;
    w:=0.0;
    chm.PDFPrintOptions.scale_factor := 95;
  end else begin
    h:=60.0;
    w:=30.0;
    chm.PDFPrintOptions.scale_factor := 95;
  end;
  chm.PDFPrintOptions.margin_left := w;
  chm.PDFPrintOptions.margin_right := w;
  chm.PDFPrintOptions.margin_bottom := h; // 30.0;
  chm.PDFPrintOptions.margin_top := h; // 30.0;
  chm.PDFPrintOptions.margin_type := PDF_PRINT_MARGIN_CUSTOM;
  //wait(800);

  chm.PrintToPDF(s1, chm.DocumentURL, chm.DocumentURL);
  //chm.Browser.Host.PrintToPdf(s1,@settings,nil);
  debug('print ok');
  exit;
end;

procedure TMainfm.reBuildebook() ;
begin
   if pdfradio.checked then
       epub.reBuildebook(2)
   else
       epub.reBuildebook(1);
end;

procedure TMainfm.PrintPDF(afile: string);
var
  s, s1,s2: string;
  h,w:real;
begin
  //s1 := ebookroot +'test-9.pdf';
  s2 := IncludeTrailingPathDelimiter(dataroot);
  s1:= format('%s%s\%0.4d.pdf',[s2,epub.id,epub.index]);
  if epub.booktype=2 then begin
    chm.PDFPrintOptions.margin_left := 0;
    chm.PDFPrintOptions.margin_right := 0;
    chm.PDFPrintOptions.margin_bottom := 0; // 30.0;
    chm.PDFPrintOptions.margin_top := 0; // 30.0;
    chm.PDFPrintOptions.scale_factor := 95;
  end else begin
    chm.PDFPrintOptions.margin_left := 30;
    chm.PDFPrintOptions.margin_right := 30;
    chm.PDFPrintOptions.margin_bottom := 60; // 30.0;
    chm.PDFPrintOptions.margin_top := 60; // 30.0;
    chm.PDFPrintOptions.scale_factor := 95;
  end;
  chm.PDFPrintOptions.margin_type := PDF_PRINT_MARGIN_CUSTOM;
  chm.PrintToPDF(s1, chm.DocumentURL, chm.DocumentURL);
end;

function TMainfm.IsMain(const b: ICefBrowser; const f: ICefFrame): Boolean;
begin
  Result := (b <> nil) and (b.Identifier = chm.BrowserId) and
    ((f = nil) or (f.IsMain));
end;


procedure TMainfm.chmAddressChange(Sender: TObject; const browser: ICefBrowser;
  const frame: ICefFrame; const url: ustring);
begin
//{$IFNDEF release}
  // OutputDebugString(pwidechar(msg));
  //debug('url change ' + url);
  inc(addresschanged);
  if IsMain(browser, frame) then  begin
    addressed.Text := url;
    if (not working) then begin
       downloadbtn.Enabled:= pos('/books/',url)>0;
    end;
    //if working then
    //  Log('url change ' + url);
  end;
//{$ENDIF}
end;

procedure TMainfm.chmAfterCreated(Sender: TObject; const browser: ICefBrowser);
begin
  PostMessage(Handle, CEF_AFTERCREATED, 0, 0);
end;

procedure TMainfm.chmBeforePopup(Sender: TObject; const browser: ICefBrowser;
  const frame: ICefFrame; const targetUrl, targetFrameName: ustring;
  targetDisposition: TCefWindowOpenDisposition; userGesture: Boolean;
  const popupFeatures: TCefPopupFeatures; var windowInfo: TCefWindowInfo;
  var client: ICefClient; var settings: TCefBrowserSettings;
  var extra_info: ICefDictionaryValue; var noJavascriptAccess, Result: Boolean);
begin
  if targetUrl = 'about:blank' then
    Result := False
  else
  begin
    Result := True;
    browser.MainFrame.LoadURL(targetUrl);
  end;
end;

procedure TMainfm.MessageHandle(str:string);
var s:string;
    l:integer;
begin
{$ifndef release}
    //log(str);
{$endif}
    l:= length(str);
    if l>300 then begin
         jsmsg := str;
         isjsend:=true;
         debug(format('img data %d',[l]));
         exit;
    end else begin
       if str = '###end' then
           isjsend:=true
        //if status=c_source then status:=c_idle;
        else if pos('img',str)>0 then begin
           msgpagetype:=str;
{$ifndef release}
           log(format('page %d frame=%d %s',[epub.index,framenum,msgpagetype]));
           //log('');
{$endif}
        end else if str = 'recaptcha' then begin
           recaptcha:=1;
        end;
    end;
    exit;

    if str = '###end' then begin
        //if status=c_source then status:=c_idle;
        isjsend:=true;
        //if status=c_buildepub then epub.BuilePub('');
    end else if pos('###output=',str)>0 then begin //save page
         //outputstr:=rightstr(str);
         //if epub<>nil then
         //   epub.Saveiframe(str);
    end else if pos('###pageno',str)>0 then begin //save page
         //pageno:=intright(message);
    end else if pos('###totalpage',str)>0 then begin
         //totalpage:=intright(str);
    end;
end;

function TMainfm.runJavascript(js:string):boolean;
var s:string;
    i:integer;
begin
   isjsend:=false;
   result:=false;
   jsmsg:='';
   msgpagetype:='none';
   i:=0;
   chm.Browser.MainFrame.ExecuteJavaScript(js, 'about:blank', 0);
   while not isjsend do begin
      wait(100);
      inc(i);
      if i>15 then break;
   end;
   result:=isjsend;
end;

procedure TMainfm.chmConsoleMessage(Sender: TObject; const browser: ICefBrowser;
  level: Cardinal; const message, source: ustring; line: Integer;
  out Result: Boolean);
begin
   MessageHandle(message);
{$IFNDEF release}
 // debug(format('message %d',[length(message)]));
{$ENDIF}
end;


procedure TMainfm.chmGetResourceHandler(Sender: TObject;
  const browser: ICefBrowser; const frame: ICefFrame;
  const request: ICefRequest; var aResourceHandler: ICefResourceHandler);
var
  url: string;
begin
  aResourceHandler := nil;
  // first trigger the browser's OnGetResourceHandler event
  url := request.url;

  // if pos('/pages/recent',url)>0 then begin
  // //
  // end else
  if pos('https://jigsaw.',url)<>1 then exit;


  if pos('/js/', url) > 0 then   begin //
    // debug('****chmGetResourceHandler**'+url);
  end   else if pos('/logs', url) > 0 then   begin //
  end    else if pos('/cfi/', url) > 0 then  begin //
  end    else if pos('?refreshed=true', url) > 0 then  begin //
  //end   else if pos('cfi=', url) > 0 then   begin //
  end   else if pos('/recent', url) > 0 then   begin //
    // debug('****chmGetResourceHandler**'+url);
  end else if pos('/books/', url) > 0 then   begin
    // end else if timer.stage=c_auto then begin
    // if working then  debug('***/books/**'+url);
    //debug('***/books/**'+url);
    if posright('pages', url) = 1 then     begin //
      aResourceHandler := TCustomResourceHandler.Create(browser, frame, 0, request);
    //end else if pos('/content?', url) > 0 then   begin //
    //  aResourceHandler := TCustomResourceHandler.Create(browser, frame, 0, request);
    // debug('****chmGetResourceHandler**'+url);
    end else if pos('/api/', url) = 0 then     begin
      debug('***/books/**'+url);
      // log('***/books/**'+url);
      if pos('/epub/', url)>0 then
         aResourceHandler := TCustomResourceHandler.Create(browser, frame, 0, request);
      ticknum := 10;//vtimeout -30;
    end;
  end;
end;
// all download handle
// http://stackoverflow.com/questions/11882945/deplhi-filtering-loaded-html-by-chromium-enbedded-cef-vcl

procedure TMainfm.chmLoadEnd(Sender: TObject; const browser: ICefBrowser;
  const frame: ICefFrame; httpStatusCode: Integer);
var
  msg: ICefProcessMessage;
  url, aframe: string;
begin
  // if not frame.IsMain then exit;
  //debug('loadend ['+frame.Name+']'+frame.url);
  // log('loadend ['+frame.Name+']'+frame.url);
  // log('mainurl '+chm.Browser.MainFrame.url);
  // exit;
  // if not frame.IsMain then exit;
  if (pos('dynamic', frame.Name)> 0) then
         waitpanel.visible:=false;
  if working then begin
{$ifndef release}
  //   Log(format('loadend %d-%d [%s] %s',[ticknum,framenum,frame.Name,frame.url]));
{$endif}
    // if  true then begin
//    Log('loadend [' + frame.Name + '] ' + frame.url);
    debug('loadend ['+frame.Name+']'+frame.url);
    if pos('dynamic', frame.Name) > 0 then    begin
      inc( framenum);
      //Log('loadend [' frame.Name + '] ' + frame.url);      inc(framenum);
      if epub.booktype =1 then begin //epub just 1 frame load end
         if framenum >1 then
           ticknum := vtimeout -5
         else
           ticknum := vtimeout-6;
           //log('Loadend');
      end else begin  //pdf has 3 frame load end
        if framenum >=5 then  begin
           //if pagenum>0 then chm.Browser.StopLoad;
           ticknum := vtimeout-3;
           //log('Loadend');
        end else begin
           ticknum := vtimeout*framenum div 6-2;
        end;
      end;
    end;

//  end else if pos('/recent?',frame.url)>0 then begin   //no working , recent call
  end else if frame.IsMain then begin    //no working, main frame, check book
//       downloadbtn.Enabled:=pos('/books/',frame.url)>0;
//     debug('loadend ['+frame.Name+']'+frame.url);
//     if pos('/books/',frame.url)>0 then
//       downloadbtn.Enabled:=true
//     else
//       downloadbtn.Enabled:=false;
  end;

end;


procedure TMainfm.chmTitleChange(Sender: TObject; const browser: ICefBrowser;
  const title: ustring);
begin
  // debug(title);
  if pos('Sign In',title)>0  then
      waitpanel.Visible:=false;

  if (ebooktitle = '') and working then begin
    ebooktitle := stringreplace(title, 'VitalSource Bookshelf', '', [rfReplaceAll, rfIgnoreCase]);
    Log(ebooktitle);
  end;
end;

procedure TMainfm.closedownloadbtnClick(Sender: TObject);
begin
  //downloadPanel.Visible := False;
  // if downloadPanel.Height<85 then begin
  // downloadpanel.height := ChromeWin.Height*2 div 3;
  /// /      downloadpanel.Visible:=false;
  // end else begin
  // downloadpanel.height := 80;
  // end;;
  // downloadPanel.top :=  ChromeWin.Height - downloadpanel.height -10;
  // downloadPanel.Left :=  ChromeWin.Width - downloadpanel.Width -10;

end;

procedure TMainfm.loginbtnClick(Sender: TObject);
const
  p1='password-field';
  e1='email-field';
  f1='signin-form';
  p2='session_password';
  e2='session_email';
  f2='new_session';
var
  js: string;
begin
{$IFNDEF release}
  // chm.Browser.SendProcessMessage(PID_RENDERER, TCefProcessMessageRef.New('visitdom'));
//  js :='document.getElementById("session_email").value = "Lamlaitudau250789@gmail.com"; '
//    + 'document.getElementById("session_password").value = "Sangcon140715@";' + 'document.getElementById("new_session").submit();';
//  js :='document.getElementById("session_email").value = "Mydreamgrade5@gmail.com"; '
//    + 'document.getElementById("session_password").value = "MDSpass@123";'+ 'document.getElementById("new_session").submit();';
{$ifdef CHEGG}
  js :='document.getElementById("emailForSignIn").value = "%s"; '
    + 'document.getElementById("passwordForSignIn").value = "%s";'+ 'document.getElementsByTagName("button")[0].click();';
{$ELSE}
  js :='document.getElementById("'+e1+'").value = "%s"; '
    + 'document.getElementById("'+p1+'").value = "%s";'+ 'document.getElementById("'+f1+'").submit();';
{$endif}
  js := format(js,[c_login,c_pass]);
//  js :='document.getElementById("session_email").value = "pameliaandres99@aol.com"; '
//    + 'document.getElementById("session_password").value = "Sangcon2015@";'+ 'document.getElementById("new_session").submit();';

//   js := 'document.getElementById("session_email").value = "mdsgrade8@gmail.com"; '
//    + 'document.getElementById("session_password").value = "MDSPass@123";' + 'document.getElementById("new_session").submit();';

//   js := 'document.getElementById("session_email").value = "a03@pwqsoft.com"; ' +
//     'document.getElementById("session_password").value = "600338qQ~";' + 'document.getElementById("new_session").submit();';
//   js:= 'document.getElementById("email-field").value = "a03@pwqsoft.com"; '+
//   'document.getElementById("password-field").value = "600338qQ~";'+
//   'document.getElementById("signin-form").submit();';
  // js:= 'document.getElementById("email-field").value = "rashadjefferson@gmail.com"; '+
  // 'document.getElementById("password-field").value = "Nkbagroup$";'+
  // 'document.getElementById("signin-form").submit();';
//   js:= 'document.getElementById("email-field").value = "Mydreamgrade5@gmail.com"; '+
//   'document.getElementById("password-field").value = "MDSpass@123";'+
//   'document.getElementById("signin-form").submit();';
  // js:= 'document.getElementById("email-field").value = "jamsheer@inoks.com"; '+
  // 'document.getElementById("password-field").value = "Asdf@1234";'+
  // 'document.getElementById("signin-form").submit();';//   js:= 'document.getElementById("email-field").value = "Turnerjoseph58@yahoo.com"; '+
  // 'document.getElementById("password-field").value = "790825One#";'+
  // 'document.getElementById("signin-form").submit();';
  chm.browser.MainFrame.ExecuteJavaScript(js, 'about:blank', 0);
{$ENDIF}
end;

procedure TMainfm.Clicklistbtn();
var
  js: string;
begin
  // chm.Browser.SendProcessMessage(PID_RENDERER, TCefProcessMessageRef.New('visitdom'));
  js := 'document.getElementsByClassName("toolbar-button toc-button /img/toc/toc.svg")[0].click();';
  chm.browser.MainFrame.ExecuteJavaScript(js, 'about:blank', 0);
end;

procedure TMainfm.DefaultHandler(var Message);
var
  m: TMessage;
begin
  inherited DefaultHandler(Message);
end;

procedure TMainfm.AboutbtnClick(Sender: TObject);
begin
  AboutFm := TAboutFm.Create(Application);
  AboutFm.showmodal();
  AboutFm.free;
end;

procedure TMainfm.SetButton();
begin

end;

procedure TMainfm.Loadini;
var
  s: string;
begin
  //
end;

procedure TMainfm.Saveini;
var
  s: string;
begin
end;

procedure TMainfm.SpeedButton1Click(Sender: TObject);
begin
  ShellExecute(Handle, 'Open', pchar(c_help), nil, nil, sw_shownormal);
end;

procedure testhtml;
var
  s: string;
  SS: TStringStream;
  s1, s2: string;
begin
  SS := TStringStream.Create('');
  // ss.LoadFromFile('C:\Users\e570\Documents\eBook Converter\VitalSource Downloader\temp\9788893620710\epub\OEBPS\Text\c01_09.xhtml');
  SS.LoadFromFile(
    'C:\Users\e570\Documents\eBook Converter\VitalSource Downloader\temp\9781506346571DEMO\epub\OEBPS\ch0011.xlink.xhtml');
  s1 := SS.DataString;
  s2 := RemoveTagstr(s1, '<script', '</script>', 'document|removeChild');
  SS.Clear;
  SS.WriteString(s2);
  SS.SaveToFile('C:\Users\e570\Documents\7.html');
  Log(s2);
  SS.free;
end;

function loadprintjs(sfile:string):string;
var list:Tstringlist;
begin
    list:=Tstringlist.create;
    list.loadfromfile(sfile);
    result:=list.text;
    list.free;
end;

procedure TMainfm.TestbtnClick(Sender: TObject);
var
  s, s1: string;
  list: Tstringlist;
  id: string;
  p: Integer;
  obj: TvBookobj;
  ms: Tmemorystream;
  settings: TCefPdfPrintSettings;
  EmptyCefStringUtf16: TCefStringUtf16;
begin
  chm.DeleteCookies('jiasaw.vitalsource.com','_jigsaw_session');
  wait(200);
  gourl('https://bookshelf.vitalsource.com/#/');
  //chm.Reload;
  exit;
  epub.BuildPDF;
  exit;
  chm.SetFocus(true);
     chromewin.setfocus();
     wait(100);
    s1:=loadprintjs('D:\Myfile\Net\MSN\vbkbrowser200\epub\cssrule.js');
   runjavascript(s1);
     wait(400);

  PrintPDF2('');
  exit;
//  epub.Saveblobimg('');
    s1:=loadprintjs('D:\Myfile\Net\MSN\vbkbrowser200\epub\imgdata.js');
//    s1:=loadprintjs('D:\Myfile\Net\MSN\vbkbrowser200\epub\imgtest.js');
   runjavascript(s1);
   if length(jsmsg)>300 then
    epub.Saveblobimg(jsmsg);
  exit;
  chm.browser.MainFrame.ExecuteJavaScript(s1, 'about:blank', 0);
//  chm.browser.MainFrame.ExecuteJavaScript(j_pnum, 'about:blank', 0);
//  PrintPDF('');
  exit;
  epub.cleancss('D:\download\9781259899232\9781483390437.epub');
  Log('done');
  exit;
  s := '< > : " / \ | ? * $%^&*() adfad';
  s := clearstr(s);
  Log(s);
  exit;

  // s:='https://jigsaw.vitalsource.com/books/9781446297650DEMO/images/553246736447566b5831396d5a784b6b6139376e6677534a5356344e4d6857772b4768374c526b516769453d0a/encrypted/800';
  // id:=getbookid(s);
  // epub:=booklist.findbook(id);
  // epub.pages.Add('https://jigsaw.vitalsource.com/books/9781446297650DEMO/images/553246736447566b5831396d5a784b6b6139376e6677534a5356344e4d6857772b4768374c526b516769453d0a/encrypted/800');
  // epub.pages.Add('https://jigsaw.vitalsource.com/books/9781446297650DEMO/images/553246736447566b58312f414c4d704e7342612b2f6d456b7858753145387038564d4c58645043395867553d0a/encrypted/800');
   // epub.BuildPDF();

  exit;

  // s:='https://jigsaw.vitalsource.com/books/9781446297650DEMO/images/553246736447566b58312f42716d646753765673476b6352462f38474c33787041596f662f5363794b4a673d0a/encrypted/800';
  // s1:=urltofile(s);
  // log(s1);
  exit;

  // list:=urlsplit(s);

  obj := booklist.findbook('9781506301532DEMO');
  s1 := IncludeTrailingPathDelimiter(ebookroot) + 'test.epub';
  obj.BuilePub(s1);
  Log('done');
  // timer.ResetTimer();
  exit;

  // s:='https://jigsaw.vitalsource.com/books/9781506301457DEMO/epub/OEBPS/ch0008.xlink.xhtml?create=true#cfi=/6/4';
  s := 'https://jigsaw.vitalsource.com/books/9781506301457DEMO/epub/OEBPS/js/fancybox2/lib/jquery.mousewheel-3.0.6.pack.js';
  // list:=urlsplit(s);
  // clearnurl(list);
  // log(list.Text);
  // list.Free;

  id := getbookid(s);
  obj := booklist.findbook(id);
  ms := Tmemorystream.Create;
  s1 := IncludeTrailingPathDelimiter(dataroot) + 'pages';
  ms.LoadFromFile(s1);
  Saveepubfile(s, ms);
  ms.free;

end;

procedure TMainfm.TickedChange(Sender: TObject);
begin
  n_tick := 10; // ticked.Value;
end;

procedure TMainfm.Timer1Timer(Sender: TObject);
var
  i: Integer;
begin
  // inc(ticknum);
  // i:= ticknum mod 2;
  // if i=0 then
  // ticklabel.Caption:='--'
  // else
  // ticklabel.Caption:='Waiting';
  timer1.Enabled:=false;
  if not pausing then begin
       if epub.booktype=1 then
          Taskhandle()
       else
          TaskhandlePDF();
  end;
  if working then timer1.Enabled:=true;
end;

procedure TMainfm.youtubebtnClick(Sender: TObject);
begin
  ShellExecute(Handle, 'Open', pchar(c_youtube + c_id), nil, nil,
    sw_shownormal);
end;

procedure TMainfm.addressedClick(Sender: TObject);
begin
  addressed.selectall;
end;

procedure TMainfm.addressedKeyPress(Sender: TObject; var Key: Char);
begin
  ///exit;
  if Key = #13 then begin
    // if chm.Browser <> nil then  begin
//addressbox
{$IFNDEF release}
   // chm.browser.MainFrame.LoadURL(addressed.Text);
     goUrl(addressed.Text);
{$ENDIF}
    // Abort;
    // end;
  end;
end;

procedure TMainfm.backbtnClick(Sender: TObject);
begin
  if chm.browser <> nil then
    chm.browser.GoBack;
end;

procedure TMainfm.BrowserIdle(Sender: TObject);
var n:integer;
begin
  // log('BrowserIdle ****************************');
  if epub = nil then
    exit;

  if epub.jnodes = nil then
    exit;

  if epub.pageobjs.Count = 0 then
    exit;
  memo1.Lines.Clear;
  vbooks.Updatepages(pagelist);
  //Log(ebooktitle);
  Log('Total page: ' + inttostr(epub.total));
  if epub.booktype=1 then begin
       started.text:= '1';
       ended.text:= '9999';
  end;
  if (epub.booktype=2) and (username <>'') then begin
    //load last download
    epub.Loadconfig;
    if epub.lastno>0 then begin
        startno:=epub.lastno;
    end else begin
        startno:=1;
    end;
    endno:= epub.lastno+c_captcha;
    started.Text:= inttostr(startno);
    ended.Text:= inttostr(endno);
    n:=  (epub.total-startno) div c_captcha;
    maxpage:=c_captcha;
    log('PDF book');
    log(format('%d pages downloaded',[epub.lastno+1]));
    log(format('rest pages download by %d times',[n+1]));
    log(format('each time download %d pages',[c_captcha]));
  end;
  log('ready to download');
  buildbtn.Visible := epub.checklastpage;

  //timer.DownloadNext();
end;

procedure TMainfm.FormCreate(Sender: TObject);
var
  i: Integer;
  s: string;
begin
  Application.OnIdle := OnIdle;
  getkey();
  // CheckKey();
  root := extractfilepath(paramstr(0));
  // dataroot:=root+'tmp\';
  ebookroot := GetMyAppDoc(c_title);
  dataroot := IncludeTrailingPathDelimiter(ebookroot) + 'temp';
  CheckDir(dataroot);
  DllFile := IncludeTrailingPathDelimiter(ebookroot) + 'cache';
  CheckDir(DllFile);
  // CefCache := DllFile;
  DllFile := root + 'plugin.dll';
  // GetIconImage(IconImage);
  LoadPngBMP('BUY', bkbmp);
  LoadPngImage('ICONBMP', IconImage);
  // LoadPngImage('NOTICE',image1);
  // jsplug:= LoadResStr('jsinject','HTML');
  caption := c_title;
  Loadini();
  self.left:=self.left+Random(30);
  Application.title := c_title;
  //self.Caption := c_title;
  // downloadpanel.Visible := false;
  Memo1.Top := panel6.Height + 1;
  stopbtn.Top := downloadbtn.Top;
  stopbtn.Left := downloadbtn.Left;
  stopbtn.Visible := False;

  vbooks.timer := TTimeObj.Create;
  timer.OnIdle := self.BrowserIdle;
  waitPanel.Left := (Panel3.Width - waitPanel.Width) div 2;
{$IFDEF release}
  loginbtn.Visible := False;
  testbtn.Visible := False;
  downloadbtn.enabled := False;
  devbtn.Visible := False;
  addressed.readonly:=true;
  //addressed.ReadOnly:=true;
   timeouted.text:='60';
{$else}
   timeouted.text:='30';
   started.text:= inttostr(5+Random(20));   //first page
{$ENDIF}
  downloadbtn.Enabled:=false;
{$ifdef CHEGG}
 s_domain:='chegg.com';
 s_subdomain:='ereader';
{$else}
 s_domain:='vitalsource.com';
 s_subdomain:='bookshelf';
{$endif}
  s_site:=s_subdomain+'.'+s_domain;
  if username <> '' then
    s := 'true';
  // show;
{$IFDEF release}
  // s:='true';
  if username <> '' then
    orderbtn.Visible := False;

{$ENDIF}
  if username = '' then
     log('Demo version limit to 7  pages,'#10'Full version download all pages book.');
  buildbtn.Visible := False;
  // memo1.Lines.Add('Run VitalSource Bookshelf first, select then click "Capture" button to start. ');

//  BuyFm := TBuyFm.Create(Application);
//  if s <> 'true' then
//  begin
//    hide;
//    BuyFm.showmodal; // beforebuy();
//  end;

  // DevTools.ShowDevTools(chm.Browser);
  Panel5.Height := 3;
  DevTools.Width := 1;
  Splitter2.width:=0;

  n_tick := 10; // Ticked.Value;
  task := 0; // first get title
  // self.WindowState:= wsMaximized;
  // ListPrinters;
  // Width := width+Random(100);
  // height := height+Random(100);
  // self.WindowState := wsMaximized;
  //log(s_canvas);
  //log(s_plugin);
  //show;
  hide;
  outputfile := ''; // fileed.Text;
end;

procedure TMainfm.FormDestroy(Sender: TObject);
begin
  Saveini;
  chm.StopLoad;
  // if pinfo.injected then
  // apps.UnInjectDll(DllFile, pinfo.pId );
end;

procedure TMainfm.FormShow(Sender: TObject);
begin
  chm.CreateBrowser(ChromeWin, '');
end;

procedure TMainfm.WMMove(var aMessage: TWMMove);
begin
  inherited;

  if (chm <> nil) then
    chm.NotifyMoveOrResizeStarted;
end;

procedure TMainfm.WMMoving(var aMessage: TMessage);
begin
  inherited;

  if (chm <> nil) then
    chm.NotifyMoveOrResizeStarted;
end;

procedure TMainfm.BrowserCreatedMsg(var aMessage: TMessage);
var y,x,w,h:integer  ;
begin
  ChromeWin.UpdateSize;
  goUrl(c_home1);
  closedownloadbtnClick(nil);
  if  Screen.WorkAreaHeight>900 then begin
    self.height:=900;
  end else begin
    self.top:=0;
    self.height:= Screen.WorkAreaHeight-10;
  end;
  exit;
  if screen.height<800 then begin
    w:= random(100)+screen.width - 480;
    h:= random(100)+screen.height - 150;
  end else begin
    w:= random(400)+screen.width - 680;
    h:= random(200)+screen.height - 250;
  end;

  self.left:= (screen.width-w) div 2;
  self.top:= (screen.height-h) div 2;
  if self.top<0 then
        self.top:=0;
  self.height:= h;
  self.width:= w;  // apps.GetDebugPrivs;

  // gourl('C:\Users\e570\Documents\eBook Converter\VitalSource Downloader\temp\9781506346571DEMO\epub\OEBPS\7.html');
{$IFDEF release}
  //MessageDlg('if robot show up, close downloader and wait minutes to try again.',mtInformation,[mbOk], 0);
{$ELSE}
  //MessageDlg('if robot show up, close downloader and wait minutes to try again.',mtInformation,[mbOk], 0);
{$ENDIF}

end;

procedure TMainfm.FindjasonMsg(var aMessage: TMessage);
var s:string;
begin
  // log('find book');
  //debug('find jason message');
  //Memo1.Clear;
  // if not downloadPanel.Visible then
  // timer.tick:=100;

  //ebooktitle:='';

  BrowserIdle(nil);
  downloadbtn.Caption:='Download';
  if epub.booktype=2 then begin
    pdfradio.Checked:=true;
    epubradio.Enabled:=false;
  end else epubradio.Enabled:=true;

  //downloadbtn.enabled:=true;
end;

procedure TMainfm.FindROBOT(var aMessage: TMessage);
begin
    MessageDlg('Robot show up, restart Vitalsource Downloader and try again.',mtError,[mbOk], 0);
    application.Terminate();
end;


procedure TMainfm.forwardbtnClick(Sender: TObject);
begin
  if chm.browser <> nil then
    chm.browser.GoForward;
end;

procedure TMainfm.OnIdle(Sender: TObject; var Done: Boolean);
var
  s: string;
begin
  Application.OnIdle := nil;
  if username <> '' then begin
    checktimer := TTimer.Create(nil);
    checktimer.Interval := 3000;
    checktimer.Enabled := True;
    checktimer.OnTimer := ReloadKey;
  end;
  // vbooks.timer.ResetTimer();
end;

procedure TMainfm.ReloadKey(Sender: TObject);
var
  d: Tdatetime;
begin
  // log('reloadkey');
  checktimer.Enabled := False;
  ReCheckkey();
end;

procedure TMainfm.orderbtnClick(Sender: TObject);
begin
  ShellExecute(Handle, 'Open', pchar(c_order), nil, nil, sw_shownormal);
end;

procedure TMainfm.OutputBtnClick(Sender: TObject);
begin
  GetOutput(nil);
end;

procedure TMainfm.setworking(b: Boolean);
var n:integer;
begin
  working := b;
  downloadbtn.Visible := not b;
  stopbtn.Visible := b;
  SendchmMouse(150,100);
  if pausing then begin //from pausing
    ticknum := 0;
    task := 10; // first get title
    startno := pausenum;
    vtimeout:= strtoint(timeouted.text);

    epub.setworking(b);
    timer1.enabled:=true;
    SetThreadExecutionState(ES_CONTINUOUS or ES_SYSTEM_REQUIRED);

  end else if b then   begin  //new start
    // statusLabel.Caption:='working and wait ....';
    //if  username = '' then
    //   log('*Demo version only download '+IntToStr(c_maxpage)+' pages!!');
    if epub.booktype=2 then begin
        log('PDF book');
    end else log('ePub book');
    chm.Browser.StopLoad;
    wait(300);

    ebooktitle := '';
    startno := strtoint(started.Text) - 1;
    if startno<0 then startno:=1;
    if startno>epub.total then startno:=epub.total;

    if epub.booktype=2 then begin    // download serveral times
      endno:= strtoint(ended.text);
      if (endno> startno+c_captcha) then begin
         endno:= startno+c_captcha;
         ended.Text:=inttostr(endno);
      end;
    end;
    vtimeout:= strtoint(timeouted.text);
    if startno>1 then
       epub.index := startno;
    ticknum := 0;
    task := 10; // first get title

    epub.setworking(b);
    timer1.enabled:=true;
    SetThreadExecutionState(ES_CONTINUOUS or ES_SYSTEM_REQUIRED);
    log('');
  end else begin
    // statusLabel.Caption:='ready to download';
    timer1.enabled:=false;
    epub.setworking(b);
    SetThreadExecutionState(ES_CONTINUOUS);
  end;
  // Timer1.Enabled:=b;
end;

function TMainfm.saveimgjs:boolean;
var s,s1:string;
begin

   runjavascript(jsplug);
   if epub.booktype=1 then begin
      result:=true;
      exit;
   end;
   result:= length(jsmsg)>300;
   if result then
      epub.Saveblobimg(jsmsg);
end;

function TMainfm.printjs:boolean;
var s,s1:string;
begin
   chm.SetFocus(true);
   chromewin.setfocus();
   //s1:=loadprintjs('D:\Myfile\Net\MSN\vbkbrowser200\epub\cssrule.js');
   //runjavascript(s1);
   wait(200);
   runjavascript(s_fraction);
   //wait(500);
   result:=true;
   if (epub.booktype=2) and (msgpagetype='img=0') then
        result:=false;
   //result:= msgpagetype<>'none';
end;

//   <style type="text/css" class="qtgnzpvs">body{visibility:hidden !important;}</style>
procedure TMainfm.Taskhandle;
var
  i: Integer;
  b: boolean;
  s: string;
begin
  //debug('taskhandle '+inttostr(task));
  case task of
    10:
      begin // next page
        // read pageno
        ticknum := 0;
        framenum := 0;
        addresschanged:=0;
        recaptcha:=0;
        task:=20;
        if username='' then begin
            if epub.index>=(startno+7) then  task:=90;
        end;
        if task=20 then begin
           if not epub.DownloadNext() then task := 90;
        end;

        if task=20 then begin
          updateLog(format('Load page %d', [epub.index]));
          //started.text:=inttostr(epub.index);
        end;
      end;
    20:
      begin // waiting timeout
        inc(ticknum);
        ticklabel.Caption := inttostr(ticknum);
        if (ticknum > vtimeout) then begin // timeout  nextpage
          //b:= epub.encrypthtml();
          //b:= saveimgjs();
          b:= printjs();
          if recaptcha>0 then begin
            log('---------------------------------');
            log('Recaptcha, clear recaptcha and click download button again.');
            beep();
            beep();
            stopbtnclick(nil);
          end else if (epub.index=0) or ((addresschanged>0) and b) then begin
            //saveimgjs();
            task := 40;
            inc(pagenum);

            //print
          end else begin
            ticknum:=0;
            framenum:=0;
            addresschanged:=1;
            chm.Browser.StopLoad;
            wait(300);
            chm.Browser.reload;
            updatelog(format('reload this page %d ...',[epub.index]));
          end;
          // reload
        end;
      end;
    40:
      begin // save page end
        // epub.Saveiframe(pagestr);
        inc(ticknum);
        ticklabel.Caption := inttostr(ticknum);
        printpdf('');
        task := 10;
      end;
    90:
      begin // epub build
        Log('Build ebook file, wait....');
        // epub.BuildBook('');
        Log('download end');
        setworking(False);
        reBuildebook();
        beep();
        beep();
        // epub.BuildBook('');
        //exit;
         //if application.messagebox('Do you want to open ebook?','Open book',MB_YESNO)= IDYES then
         //shellexecute(0,'Open',pchar(epub.outputfile),nil,nil,sw_shownormal);
         shellexecute(0,'Open',pchar(ebookroot),nil,nil,sw_shownormal);
      end;
  end;
end;

procedure TMainfm.TaskhandlePDF;
var
  i: Integer;
  b: boolean;
  s: string;
begin
  //debug('taskhandle '+inttostr(task));
  case task of
    10:
      begin // next page
        // read pageno
        ticknum := 0;
        framenum := 0;
        addresschanged:=0;
        recaptcha:=0;
        chm.Browser.StopLoad;
        wait(300);
        task:= pdfnextpage();
//        if not epub.DownloadNext() then begin
//          task := 90;
//        end else begin
//          task := 20;
//          updateLog(format('Load page %d', [epub.index]));
//        end;
      end;
    20:
      begin // waiting timeout
        inc(ticknum);
        ticklabel.Caption := inttostr(ticknum);
        if (ticknum > vtimeout) then begin // timeout  nextpage
          //b:= epub.encrypthtml();
          b:= saveimgjs();
          //b:= printjs();
          if recaptcha>0 then begin
            log('---------------------------------');
            log('Recaptcha, clear recaptcha and click download button again.');
            beep();
            beep();
            stopbtnclick(nil);
          end else if (epub.index=0) or ((addresschanged>0) and b) then begin
            //saveimgjs();
            task := 10;
            inc(pagenum);
            //print
          end else begin
            ticknum:=0;
            framenum:=0;
            addresschanged:=1;
            chm.Browser.StopLoad;
            wait(300);
            chm.Browser.reload;
            updatelog(format('reload this page %d ...',[epub.index]));
          end;
          // reload
        end;
      end;
    80: begin //stop
        setworking(False);
        log('Stop at page '+inttostr(epub.index));
        log('Login and open same book, continue to download rest pages');
        chm.DeleteCookies('jiasaw.vitalsource.com','_jigsaw_session');
        wait(200);
        gourl('https://bookshelf.vitalsource.com/#/');
        beep();
        beep();
      end;
    90:
      begin // pdf build
        Log('Build ebook file, wait....');
        // epub.BuildBook('');
        Log('download end');
        setworking(False);
        reBuildebook();
        beep();
        beep();
        // epub.BuildBook('');
         //if application.messagebox('Do you want to open ebook?','Open book',MB_YESNO)= IDYES then
         //shellexecute(0,'Open',pchar(epub.outputfile),nil,nil,sw_shownormal);
         shellexecute(0,'Open',pchar(ebookroot),nil,nil,sw_shownormal);
      end;
  end;
end;

function TMainfm.PDFnextpage():integer;
var i,n:integer;
    b:boolean;
begin
  n:=20; //next page,
  if epub.index=epub.total then
    n:=90 //book end
  else if epub.index>=endno then
    n:=80;  //pdf stop;

  if username='' then begin
    if epub.index>=(startno+7) then
      n:=90;
  end;

  if n=20 then begin
    b:=epub.DownloadNext();
    updateLog(format('Load page %d', [epub.index]));
    if not b then n:=90;
  end;

  result:=n;
end;

procedure TMainfm.nextpagejs();
var
  js,s1,s2: string;
begin
  if epub.booktype=1 then
     s1:='#jigsaw-placeholder-inner > div.vertical-button-wrapper.next-wrapper > button'
  else begin
     s1:='#jigsaw-placeholder-inner > div.horizontal-button-wrapper.next-wrapper > button';
  end;
  s2 := 'var node = document.querySelector("%s");'+
        'if (node) { node.click(); '+
        'console.log("button="+node.className); }'+
        'else {console.log("button=none");}';
  js := format(s2,[s1]);
  runJavascript(js);
end;

procedure TMainfm.devbtnClick(Sender: TObject);
begin
{$ifndef release}
  if DevTools.width>3 then
  begin
    chm.CloseDevTools(DevTools);
    //Splitter2.Visible := False;
    //DevTools.Visible := False;
    DevTools.Width := 0;
    Splitter2.width:=0;
  end  else  begin
//    self.WindowState := wsMaximized;
//    DevTools.Visible := True;
//    Splitter2.Visible := True;
//    Splitter2.width:=3;
    DevTools.Width := 660;
    self.WindowState := wsMaximized;
    chm.ShowDevTools(Point(0, 0), DevTools);
  end;
{$endif}
end;

procedure TMainfm.downloadbtnClick(Sender: TObject);
var
  i: Integer;
begin
  setworking(True);
  pausing:=false;
end;

procedure TMainfm.rebuildClick(Sender: TObject);
var
  i: Integer;
begin
  reBuildebook();
end;

procedure TMainfm.stopbtnClick(Sender: TObject);
begin
  timer.Stop;
  setworking(False);
  pausing:=true;
  pausenum:= epub.index-1;
  //epub.Saveconfig;
  if pausenum<0 then
     pausenum:=0;
  updatelog(format('Pause at page %d',[pausenum]));
  downloadbtn.Caption:='Resume';
  started.text:= inttostr(pausenum);
end;

function TMainfm.GetOutput(Sender: TObject): Boolean;
begin
  if outputfile <> '' then
    SaveDialog1.FileName := outputfile;
  Result := False;
  if SaveDialog1.Execute(self.Handle) then
  begin
    // if savedialog1.Execute(0) then begin
    Result := True;
    outputfile := SaveDialog1.FileName;
    // fileed.Text:= outputfile;
  end;
end;

procedure TMainfm.SendchmKeydown(akey:word; up:Boolean);
var
  TempEvent : TCefKeyEvent;
begin
    if up then
        TempEvent.kind                    := KEYEVENT_KEYUP
    else
        TempEvent.kind                    := KEYEVENT_RAWKEYDOWN;

    TempEvent.modifiers               := GetCefKeyboardModifiers(akey, 0);
    TempEvent.windows_key_code        := akey;
    TempEvent.native_key_code         := 0;
    TempEvent.is_system_key           := ord(false);
    TempEvent.character               := #0;
    TempEvent.unmodified_character    := #0;
    TempEvent.focus_on_editable_field := ord(False);
    //cefwin.SetFocus;
    //chm.SendKeyEvent(@TempEvent);
    chm.Browser.Host.SetFocus(true);
    chm.Browser.Host.SendKeyEvent(@TempEvent);
end;

//  TCefMouseEvent = record
//    x         : Integer;
//    y         : Integer;
//    modifiers : TCefEventFlags;
//  end;
procedure TMainfm.SendchmMouse(x,y:integer);
var
  TempEvent : TCefMouseEvent;
begin
    TempEvent.x:=x;
    TempEvent.y:=y;
    //TempEvent.modifiers               := GetCefKeyboardModifiers(akey, 0);
    chm.SendMouseClickEvent(@TempEvent, MBT_LEFT,false,1);
    wait(100);
    chm.SendMouseClickEvent(@TempEvent, MBT_LEFT,true,1);
    wait(100);
end;

procedure TMainfm.goBtnClick(Sender: TObject);
begin
//addressbox
//{$IFNDEF release}
//  goUrl(addressed.Text);
//{$ENDIF}
  if chm.browser <> nil then
    chm.browser.Reload;
end;

procedure TMainfm.homebtnClick(Sender: TObject);
begin
  // goURL('https://vsaccess.vitalsource.com/#');
  goUrl(c_home);
  pagelist.Clear;
  // listbox1.Items.Clear;
end;

procedure Log(msg: string);
begin
  // {$ifndef release}
  Mainfm.Memo1.Lines.Add(msg);
  // {$ENDIF}
end;

procedure UpdateLog(msg: string);
var l:integer;
begin
  // {$ifndef release}
  l:=mainfm.memo1.lines.count-1;
  mainfm.memo1.lines[l]:=msg;
//  Mainfm.Memo1.Lines.Add(msg);
  // {$ENDIF}
end;

procedure debug(msg: string);
begin
{$IFNDEF release1}
  OutputDebugString(pwidechar(msg));
{$ENDIF}
end;

procedure init;
var
  i: Integer;
  s: string;
begin
  ebookroot := GetMyAppDoc(c_title);
  dataroot := IncludeTrailingPathDelimiter(ebookroot); // +'cef';
  CheckDir(dataroot);
  ticknum := 0;
end;

Initialization

bkbmp := Tbitmap.Create;
pagelist := Tstringlist.Create;

// init;
// CefCache := 'e:\temp\cef'
Finalization

debug('main Finalization fina');
bkbmp.free;
pagelist.free;

end.