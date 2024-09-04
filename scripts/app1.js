        const fileInput = document.getElementById('fileInput');
        const fileNameDisplay = document.getElementById('file-name');
        fileInput.addEventListener('change', function() {
            const fileName = fileInput.files[0] ? fileInput.files[0].name : 'Chưa có tệp';
            fileNameDisplay.textContent = fileName;
            loadFromFile();
        });
        function generateRandomPairs() {
            const boys = document.getElementById('boys').value.trim().split('\n').filter(Boolean);
            const girls = document.getElementById('girls').value.trim().split('\n').filter(Boolean);
             if (boys.length + girls.length < 6) {
                alert("Cần ít nhất 6 học sinh để xếp.");
                return;
            }        
            let choice = function (list) {
    return list[Math.floor(Math.random() * list.length)]
}
let remove = function (list, element) {
    let index = list.indexOf(element);
    list.splice(index, 1)
}
let tongds = [...boys, ...girls];
let ds_den = [];
let lan=parseInt(36/tongds.length);
let scv=lan*tongds.length;
while (scv < 36) {
    let den = choice(tongds);
    if (!ds_den.includes(den)) {
        ds_den.push(den);
        remove(tongds, den);
        scv++;
    }
}
            if(ds_den.length==0){
                document.getElementById("den").textContent="Các học sinh trực nhiều là: không có.";
            }
           else {       
            document.getElementById("den").textContent="Các học sinh trực nhiều là: "+ds_den.join(", ")+".";
        }
let tongcongviec =[];
for (let i = 0; i < lan; i++) {
  tongcongviec =[...tongcongviec,...boys,...girls];
}
tongcongviec=[...tongcongviec,...ds_den];
let ham = function (tongcongviec,boys,girls,ds_den) {
    let ds = []
    //thứ 2
    let qs2 = [];
    let ql2 = [];
    let lb_dr2 = [];
    switch (boys.length) {
      case 0:  
        while (qs2.length < 2) {
        let tam = choice(girls);
        if (!qs2.includes(tam)) {
            qs2.push(tam);
            remove(tongcongviec, tam);
        }
        }
        break;
      case 1:
        qs2.push(boys[0]);
        remove(tongcongviec,boys[0]);
        let tam = choice(girls);
        qs2.push(tam);
        remove(tongcongviec, tam);
        break; 
      default :
        while (qs2.length < 2) {
          let tam = choice(boys);
          if (!girls.includes(tam) && !qs2.includes(tam)) {
            qs2.push(tam);
            remove(tongcongviec, tam);
          }
        }
    }
    switch (boys.length) {
      case 0:
      case 1:
      case 2:
         while (ql2.length < 2) {
            let tam = choice(girls);
            if (!(qs2.includes(tam) || ql2.includes(tam))) {
            ql2.push(tam);
            remove(tongcongviec, tam);
            }
         }
         break;
      case 3:
        while (ql2.length < 1) {
            let tam = choice(boys);
            if (!qs2.includes(tam)) {
            ql2.push(tam);
            remove(tongcongviec, tam);
            }
        }
        let tam = choice(girls);
        ql2.push(tam);
        remove(tongcongviec, tam);
        break;
      default :
        while (ql2.length < 2) {
            let tam = choice(boys);
            if (!girls.includes(tam) && !(qs2.includes(tam) || ql2.includes(tam))) {
            ql2.push(tam);
            remove(tongcongviec, tam);
            }
        }
   }
  
    while (lb_dr2.length < 2) {
        let tam = choice([...boys, ...girls]);
        if (qs2.includes(tam) || ql2.includes(tam) || lb_dr2.includes(tam)) {
            continue
        }
        lb_dr2.push(tam);
        remove(tongcongviec, tam);

    }
    let thu2 = [qs2.join(" và "), ql2.join(" và "), lb_dr2.join(" và ")];
    ds = [...ds, ...thu2];
    /*for (let i = 3; i < 8; i++) {
      if (tongcongviec){
        console.log("hết bạn");
        break 
      }
      thu=phancong(tongcongviec);
      ds=[...ds,...thu];
    }*/
    //thứ 3
    let qs3 = [];
    let ql3 = [];
    let lb_dr3 = [];
    while (qs3.length < 2) {
        let tam = choice(tongcongviec);
        if (!qs3.includes(tam)) {
            qs3.push(tam);
            remove(tongcongviec, tam);
        }
    }
    while (ql3.length < 2) {
        let tam = choice(tongcongviec);
        if (!(qs3.includes(tam) || ql3.includes(tam))) {
            ql3.push(tam);
            remove(tongcongviec, tam);
        }
    }
    while (lb_dr3.length < 2) {
        let tam = choice(tongcongviec);
        if (qs3.includes(tam) || ql3.includes(tam) || lb_dr3.includes(tam)) {
            continue
        }
        lb_dr3.push(tam);
        remove(tongcongviec, tam);

    }
    let thu3 = [qs3.join(" và "), ql3.join(" và "), lb_dr3.join(" và ")];
    ds = [...ds, ...thu3];
    //thứ 4
    let qs4 = [];
    let ql4 = [];
    let lb_dr4 = [];
    while (qs4.length < 2) {
        let tam = choice(tongcongviec);
        if (!qs4.includes(tam)) {
            qs4.push(tam);
            remove(tongcongviec, tam);
        }
    }
    while (ql4.length < 2) {
        let tam = choice(tongcongviec);
        if (!(qs4.includes(tam) || ql4.includes(tam))) {
            ql4.push(tam);
            remove(tongcongviec, tam);
        }
    }
    while (lb_dr4.length < 2) {
        let tam = choice(tongcongviec);
        if (qs4.includes(tam) || ql4.includes(tam) || lb_dr4.includes(tam)) {
            continue
        }
        lb_dr4.push(tam);
        remove(tongcongviec, tam);

    }
    let thu4 = [qs4.join(" và "), ql4.join(" và "), lb_dr4.join(" và ")];
    ds = [...ds, ...thu4];
    //thứ 5
    let qs5 = [];
    let ql5 = [];
    let lb_dr5 = [];
    while (qs5.length < 2) {
        let tam = choice(tongcongviec);
        if (!qs5.includes(tam)) {
            qs5.push(tam);
            remove(tongcongviec, tam);
        }
    }
    while (ql5.length < 2) {
        let tam = choice(tongcongviec);
        if (!(qs5.includes(tam) || ql5.includes(tam))) {
            ql5.push(tam);
            remove(tongcongviec, tam);
        }
    }
    while (lb_dr5.length < 2) {
        let tam = choice(tongcongviec);
        if (qs5.includes(tam) || ql5.includes(tam) || lb_dr5.includes(tam)) {
            continue
        }
        lb_dr5.push(tam);
        remove(tongcongviec, tam);

    }
    let thu5 = [qs5.join(" và "), ql5.join(" và "), lb_dr5.join(" và ")];
    ds = [...ds, ...thu5];
    //thứ 6
    let qs6 = [];
    let ql6 = [];
    let lb_dr6 = [];
    while (qs6.length < 2) {
        let tam = choice(tongcongviec);
        if (!qs6.includes(tam)) {
            qs6.push(tam);
            remove(tongcongviec, tam);
        }
    }
    while (ql6.length < 2) {
        let tam = choice(tongcongviec);
        if (!(qs6.includes(tam) || ql6.includes(tam))) {
            ql6.push(tam);
            remove(tongcongviec, tam);
        }
    }
    while (lb_dr6.length < 2) {
        let tam = choice(tongcongviec);
        if (qs6.includes(tam) || ql6.includes(tam) || lb_dr6.includes(tam)) {
            continue
        }
        lb_dr6.push(tam);
        remove(tongcongviec, tam);

    }
    let thu6 = [qs6.join(" và "), ql6.join(" và "), lb_dr6.join(" và ")];
    ds = [...ds, ...thu6];
    //thứ 7
    let qs7 = [];
    let ql7 = [];
    let lb_dr7 = [];
    while (qs7.length < 2) {
        let tam = choice(tongcongviec);
        if (!qs7.includes(tam)) {
            qs7.push(tam);
            remove(tongcongviec, tam);
        }
    }
    while (ql7.length < 2) {
        let tam = choice(tongcongviec);
        if (qs7.includes(tam)) {
            return false;
        }
        if (!ql7.includes(tam)){
            ql7.push(tam);
          remove(tongcongviec, tam);
          }

    }
    if (tongcongviec[0]== tongcongviec[1]) {
      return false ;
    }
    while (lb_dr7.length <2 ) {
      let tam=choice(tongcongviec);
      if (qs7.includes(tam) || ql7.includes(tam)){
        return false ;
        }
      if (!lb_dr7.includes(tam)){
      lb_dr7.push(tam);
      remove(tongcongviec,tam);
      } 
    }
    
    let thu7 = [qs7.join(" và "), ql7.join(" và "), lb_dr7.join(" và ")];
  ds = [...ds, ...thu7];
  return ds;
}
let ds =[]
while (ds==false) {
  let ds1=[...tongcongviec];
  ds=ham(ds1,boys,girls,ds_den);
}
      const rows=document.getElementById("mytable").rows;
    const cells = document.querySelectorAll('#mytable td');
    if(rows.length==7){ 
            cells.forEach(cell => {
                
                //if (!cell.innerHTML) {
                    cell.innerHTML = ds[0]//getRandomPair(boys, girls);
                ds.splice(0,1);
               // }
            });
    }
    else{
        let i=0;
        let j=0;
           cells.forEach(cell=> {
              cell.innerHTML=ds[3*j+i];
            if (j==5){
                i++;
                j=0;
            }
             else{  j++}
           });
        
    } 
        }

        function loadFromFile() {
            const fileInput = document.getElementById('fileInput');
            const file = fileInput.files[0];
            if (!file) {
                alert("Vui lòng chọn một file trước.");
                return;
            }

            const reader = new FileReader();
            reader.onload = function(e) {
                const content = e.target.result.split('\n').filter(Boolean).map(line=>line.trim());
                //const middleIndex = Math.ceil(content.length / 2);
                //const boys = content.slice(0, middleIndex+1);
                //const girls = content.slice(middleIndex+1);
                const nam=content.indexOf("Nam:");
                const nu=content.indexOf("Nữ:");
                if (nu==-1 && nam==-1){
                    alert("định dạng không được chấp nhận");
                }
                if ((nu==-1||nu==content.length)&& nam!=-1){
                    const boys=content.slice(nam+1);
                document.getElementById('boys').value = boys.join('\n');
                document.getElementById("girls").value='';    
                }
                if ((nam==0 || nam==-1)&& nu!=-1){
                     
                const girls=content.slice(nu+1);
                document.getElementById('girls').value = girls.join('\n');
                document.getElementById('boys').value='';    
                }
                if ((nam+1 != nu) && nam!=-1 && nu!=-1){
                const boys=content.slice(nam+1,nu);
                const girls=content.slice(nu+1);
                document.getElementById('boys').value = boys.join('\n');
                document.getElementById('girls').value = girls.join('\n');
                }
            };
            reader.readAsText(file);
        }
        function myFunction() {
        const table = document.getElementById('mytable');
        var box=document.getElementById('xoaybang');
        const rows = table.rows;
        const rowCount = rows.length;
        const colCount = rows[0].cells.length;

        let newTable = '';

        if (box.checked) {
            for (let i = 0; i < colCount; i++) {
                newTable += '<tr>';
                for (let j = 0; j < rowCount; j++) {
                    if (i==0 || j==0){
                        newTable+="<th>"+rows[j].cells[i].innerHTML+"</th>"
                    }
                    else{
                        newTable += '<td>' + rows[j].cells[i].innerHTML + '</td>';
                    }
                }
                newTable += '</tr>';
            }
        } else {
            for (let i = 0; i < colCount; i++) {
                newTable += '<tr>';
                for (let j = 0; j < rowCount; j++) {
                    if (i==0 || j==0){
                        newTable+="<th>"+rows[j].cells[i].innerHTML+"</th>"
                    }
                    else{
                        newTable += '<td>' + rows[j].cells[i].innerHTML + '</td>';
                    }
                }
                newTable += '</tr>';
            }
        }

        table.innerHTML = newTable;
    }
function hientobang(){
    var mytable=document.getElementById("mytable").outerHTML;
    var css=`
   table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px;
        }

        table, th, td {
            border: 1px solid #000;
            text-align: center;
            padding: 15px;
            width: 130px;
            height: 50px;
        }
        button{
         margin:15px;
        padding: 7px 12px;
        font-size: 16px;
        cursor: pointer;
        border: none;
        background-color:#7FFFD4;
        width:100px;
        color:red;
        
        }`
    var mywindow=window.open();
    mywindow.document.write(`
    <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>${css}</style>
                    <title>New Table Document</title>
                </head>
                <body>
                    ${mytable}
                    <br><br>
                    <button id="btn" onclick="inbang()">In lịch trật</button>
    <button id='btn1' onclick="downloadTableAsImage()">tải</button>
    <canvas id="canvas" style="display:none"></canvas>
                 <script>
                    function inbang(){
    document.getElementById('btn1').style='display: none';
    document.getElementById('btn').style='display: none';
    window.print();
    setTimeout(function(){document.getElementById('btn').style='display: inline-block'
    document.getElementById('btn1').style='display:inline-block';},1500);
                    }
      function downloadTableAsImage() {
            const table = document.getElementById('mytable');
            const canvas = document.getElementById('canvas');
            const ctx = canvas.getContext('2d');
            const tableStyle = window.getComputedStyle(table);
            
            // Xác định kích thước bảng
            const width = table.offsetWidth;
            const height = table.offsetHeight;
            canvas.width = width;
            canvas.height = height;
            
            // Vẽ nền trắng cho canvas
           // ctx.fillStyle = "white";
          //  ctx.fillRect(0, 0, width, height);

            // Vẽ các ô trong bảng
            const rows = table.rows;

            let y = 0; // Vị trí y ban đầu
            for (let i = 0; i < rows.length; i++) {
                const row = rows[i];
                const cells = row.cells;
                let x = 0; // Vị trí x ban đầu

                for (let j = 0; j < cells.length; j++) {
                    const cell = cells[j];
                    const cellStyle = window.getComputedStyle(cell);
                    const cellWidth = cell.offsetWidth;
                    const cellHeight = cell.offsetHeight;

                    // Vẽ ô
                    ctx.strokeStyle = "black";
                    ctx.lineWidth = 1;
                    ctx.strokeRect(x, y, cellWidth, cellHeight);

                    // Thiết lập font chữ và vẽ chữ
                    //ctx.font = 'cellStyle.fontSize'+' '+'cellStyle.fontFamily';
                     ctx.font='16px Arial,sans-serif'; 
                    ctx.fillStyle = cellStyle.color;
                    ctx.textAlign = "center";
                    ctx.textBaseline = "middle";

                    // Chia text thành dòng (nếu cần)
                    const text = cell.innerText || cell.textContent;
                    const words = text.split(' ');
                    let line = '';
                    const lines = [];
                    const maxWidth = cellWidth - 20; // Trừ khoảng cách padding

                    words.forEach(word => {
                        const testLine = line + word + ' ';
                        const metrics = ctx.measureText(testLine);
                        const testWidth = metrics.width;
                        if (testWidth > maxWidth && line) {
                            lines.push(line);
                            line = word + ' ';
                        } else {
                            line = testLine;
                        }
                    });
                    lines.push(line);

                    // Vẽ từng dòng text
                    lines.forEach((line, index) => {
                        ctx.fillText(line, x + cellWidth / 2, y + cellHeight / 2 + (index - (lines.length - 1) / 2) * parseInt(cellStyle.fontSize));
                    });

                    x += cellWidth; // Cập nhật vị trí x cho ô tiếp theo
                }
                y += row.offsetHeight; // Cập nhật vị trí y cho hàng tiếp theo
            }

            // Chuyển canvas thành hình ảnh và tải xuống
            const image = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.download = 'table-image.png';
            link.href = image;
            link.click();
        }
                 \</script\>
                </body>
                </html>
    `);
}
