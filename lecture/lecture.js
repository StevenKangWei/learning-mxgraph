 // Program starts here. Creates a sample graph in the
 // DOM node with the specified ID. This function is invoked
 // from the onLoad event handler of the document (see below).


 lecture = {
     "type": "lecture",
     "id": "432ec53c-68c0-4b98-9710-0a460e85a85e",
     "name": "",
     "main": "37f5e916-1cd7-42d2-b38b-8b5b42430654",
     "nodes": {
         "37f5e916-1cd7-42d2-b38b-8b5b42430654": {
             "type": "video",
             "id": "37f5e916-1cd7-42d2-b38b-8b5b42430654",
             "name": "video1",
             "position": [200, 20],
             "size": [100, 40],
             "switch": [{
                 "type": "edge",
                 "id": "f0320c75-3116-46ff-96ca-5e57a1128ce7",
                 "name": "",
                 "node": "da2f40d4-be8e-466e-8f27-d16fa755f6c8",
                 "actions": [],
                 "action_define": {},
                 "conditions": []
             }],
             "actions": ["be6248cb-5c36-4370-9311-8cf476261fd3"],
             "action_define": {},
             "url": "https://vvvvvvv.mp4"
         },
         "d199cd81-ca4e-4348-a866-b73e219ce154": {
             "type": "video",
             "id": "d199cd81-ca4e-4348-a866-b73e219ce154",
             "name": "video3",
             "position": [300, 600],
             "size": [100, 40],
             "switch": [],
             "actions": [],
             "action_define": {},
             "url": "https://vvvvvvv.mp4"
         },
         "779cea97-11f9-4d15-8dfd-dc29d7c3ca7a": {
             "type": "video",
             "id": "779cea97-11f9-4d15-8dfd-dc29d7c3ca7a",
             "name": "video2",
             "position": [300, 400],
             "size": [100, 40],
             "switch": [{
                 "type": "edge",
                 "id": "9b7fe3f9-b84b-491b-a8c0-ee8f4b90881c",
                 "name": "",
                 "node": "d199cd81-ca4e-4348-a866-b73e219ce154",
                 "actions": [],
                 "action_define": {},
                 "conditions": []
             }],
             "actions": [],
             "action_define": {},
             "url": "https://vvvvvvv.mp4"
         },
         "da2f40d4-be8e-466e-8f27-d16fa755f6c8": {
             "type": "question",
             "id": "da2f40d4-be8e-466e-8f27-d16fa755f6c8",
             "name": "question",
             "position": [200, 200],
             "size": [100, 40],
             "switch": [{
                 "type": "edge",
                 "id": "9fa9dd53-9df5-401d-b443-42c2d72b74f1",
                 "name": "",
                 "node": "d156db0f-6e36-40ba-b681-4c3942901fa9",
                 "actions": [],
                 "action_define": {},
                 "conditions": [{
                     "type": "condition",
                     "id": "4281f09b-0a84-4c30-b37e-b7f6418fab7e",
                     "name": "",
                     "match": "option",
                     "operator": "==",
                     "value": "A"
                 }, {
                     "type": "condition",
                     "id": "b1a36839-c049-4002-a8ab-6abec0ac9076",
                     "name": "",
                     "match": "result",
                     "operator": ">",
                     "value": 80
                 }]
             }, {
                 "type": "edge",
                 "id": "99f2d0f0-bc72-44fd-bf1c-dcdea361ad93",
                 "name": "",
                 "node": "779cea97-11f9-4d15-8dfd-dc29d7c3ca7a",
                 "actions": [],
                 "action_define": {},
                 "conditions": [{
                     "type": "condition",
                     "id": "4d21a351-3fc3-434c-9b84-22b14691b67d",
                     "name": "",
                     "match": "option",
                     "operator": "==",
                     "value": "B"
                 }]
             }],
             "actions": [],
             "action_define": {}
         },
         "d156db0f-6e36-40ba-b681-4c3942901fa9": {
             "type": "audio",
             "id": "d156db0f-6e36-40ba-b681-4c3942901fa9",
             "name": "audio",
             "position": [100, 400],
             "size": [100, 40],
             "switch": [{
                 "type": "edge",
                 "id": "58a40c13-a481-4ca2-b501-08f1db15fe3b",
                 "name": "combine",
                 "node": "1001163a-65d9-4853-ac53-a0053635e4f0",
                 "actions": [],
                 "action_define": {},
                 "conditions": []
             }],
             "actions": [],
             "action_define": {},
             "url": "https://aaaaaaa.mp3"
         },
         "1001163a-65d9-4853-ac53-a0053635e4f0": {
             "type": "combine",
             "id": "1001163a-65d9-4853-ac53-a0053635e4f0",
             "name": "combine",
             "position": [100, 600],
             "size": [100, 40],
             "switch": [],
             "actions": [],
             "action_define": {},
             "nodes": ["d156db0f-6e36-40ba-b681-4c3942901fa9", "37f5e916-1cd7-42d2-b38b-8b5b42430654"]
         }
     },
     "action_define": {
         "be6248cb-5c36-4370-9311-8cf476261fd3": {
             "type": "action_audio",
             "id": "be6248cb-5c36-4370-9311-8cf476261fd3",
             "name": "action11",
             "pause": false,
             "start": 0,
             "url": "https://aaaaaaa.mp3"
         }
     }
 }

 function main(container) {
     // Checks if the browser is supported
     if (!mxClient.isBrowserSupported()) {
         // Displays an error message if the browser is not supported.
         mxUtils.error('Browser is not supported!', 200, false);
     } else {
         // Disables the built-in context menu
         mxEvent.disableContextMenu(container);

         // Creates the graph inside the given container
         var graph = new mxGraph(container);

         // Enables rubberband selection
         new mxRubberband(graph);

         // Gets the default parent for inserting new cells. This
         // is normally the first child of the root (ie. layer 0).
         var parent = graph.getDefaultParent();

         // Adds cells to the model in a single step
         graph.getModel().beginUpdate();
         var edges = {}
         try {
             let i = 0;
             for (let key in lecture.nodes) {
                 i++;
                 node = lecture.nodes[key];
                 name = node.name
                 var x = node.position[0]
                 var y = node.position[1]
                 var w = node.size[0]
                 var h = node.size[1]
                 var vertice = graph.insertVertex(parent, null, name, x, y, w, h);
                 node.vertice = vertice;
             }

             for (let key in lecture.nodes) {
                 var node = lecture.nodes[key];
                 var v1 = node.vertice;

                 node.switch.forEach(element => {
                     node_id = element.node
                     var v2 = lecture.nodes[node_id].vertice;
                     var name = '';
                     element.conditions.forEach((con, i) => {
                         if (i > 0) {
                             name += " &&\n";
                         }
                         name += con.match + " " + con.operator + " " + con.value;
                     });
                     var edge = graph.insertEdge(parent, null, name, v1, v2);
                 });
             }


         } finally {
             // Updates the display
             graph.getModel().endUpdate();
         }
     }
 };