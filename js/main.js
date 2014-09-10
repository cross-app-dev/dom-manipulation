function getNodeType(titleElemNode){
    switch(titleElemNode){
            case 1:
                return "Element Node";
                break;
            case 2:
                return "Attribute Node"
                break;
            case 3:
                return "Text Node";
            default:
                console.error("Unkwon node type");
                return "";
    }
}

var titleElemNode = document.getElementById("titleID");
console.log("Type of node is :" , getNodeType(titleElemNode.nodeType));
console.log("Number of attributes of node is :" , titleElemNode.attributes.length);
console.log("Enum for element node type", titleElemNode.ELEMENT_NODE);
/* The structure of the name will differ with the name type. E.g.
An HTMLElement will contain the name of the corresponding tag,
a Text node will have the '#text' string*/
console.log("HTML tag name of node is: " , titleElemNode.nodeName);
console.log("HTML code of element is : ", titleElemNode.innerHTML);
/* For most Node type, this returns null and any set operation is ignored. For nodes of type TEXT_NODE (Text Object),
 the value corresponds to the text data contained in the object.*/
console.log("node value is: ",titleElemNode.nodeValue);

/* Returns a String with the name of the tag for the given element.*/
console.log("HTML tag name is :", titleElemNode.tagName);
console.log("color of element node is: ",titleElemNode.style.color);
console.log("enumration of text node is: ",titleElemNode.TEXT_NODE);
console.log("Number of child nodes is: " , titleElemNode.childNodes.length);
console.log("But it has ", titleElemNode.childElementCount , "child element nodes");
var textNode = titleElemNode.childNodes[0];
console.log("Type of node is:" , getNodeType(textNode.nodeType));
var attributeNode = titleElemNode.getAttributeNode("id");
console.log("value of attribute ", attributeNode.name , "is :", attributeNode.value );
