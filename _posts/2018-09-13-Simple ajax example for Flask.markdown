---
layout: post
title:  "Simple ajax example for Flask"
date:   2018-09-13 00:01:57 +0800
categories: python flask ajax
---
## Steps
1. Edit a test.html.
```html
<html>
<body>
<p id="ParkingStatus">test</p>
				<script>
				function loadDoc(url, cFunction) {
				  var xhttp;
				  xhttp=new XMLHttpRequest();
				  xhttp.onreadystatechange = function() {
					if (this.readyState == 4 && this.status == 200) {
					  cFunction(this);
					}
				  };
				  xhttp.open("GET", url, true);
				  xhttp.send();
				}
				function myFunction(xhttp) {
				var obj = JSON.parse(xhttp.responseText);
				  document.getElementById("ParkingStatus").innerHTML =obj["result"];
				  
				  console.log(xhttp);
				}
				setInterval(function() {
loadDoc('/parking', myFunction);
}, 2000);
				
				</script>
</body>
</html>
2. Edit the server file.
```python
@bp.route('/parking')
def parking():
    #ajax test
    db = get_db()
    data = db.execute(
        'SELECT event_time,plate_number,occupancy_status,parking_space_no,device_ip_address'
        ' FROM parking'
        ' ORDER BY event_time DESC'
    ).fetchall()
    result="Hey, I saw that! You clicked at".format(datetime.datetime.now())
    count=28
    print (data)
    return jsonify(result=count)
```
