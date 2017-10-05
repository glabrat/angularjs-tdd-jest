import "angular";
import "angular-mocks";
import { domAttributesList } from "./domAttributesList"
const HTMLNormalizer = (element, injector) => {
    const hyphenToCamelCase = (text) => text.replace(/-(.)/g, (match, group1) => group1.toUpperCase())
    const removeHTMLComments = (allChildrenNodes) => {
        for(let i = 0; i < allChildrenNodes.length ; i++) {
            if(allChildrenNodes[i].nodeType === 8) {
                allChildrenNodes[i].parentNode.removeChild(allChildrenNodes[i]);
            }
        }
        return allChildrenNodes;
    };
    const allChildrenNodes = removeHTMLComments(element[0].childNodes);
    const allChildrenElements = element[0].getElementsByTagName("*");

    Array.from(allChildrenElements)
		.forEach((child) => {
    		Array.from(child.attributes).forEach((attr) => {
    			if(attr.value && domAttributesList.indexOf(attr.name) === -1) {
                    attr.value = "[ngExpression]";
                }
    		});
		});
    console.log(element[0].outerHTML);
    return element[0];
}
export const angularjsSnapshotFormat = (html, scope) => {
    let el;
    inject(($compile, $injector) => {
        el = $compile(html)(scope);
        scope.$digest();

        el = HTMLNormalizer(el, $injector);
    });
    return el.outerHTML;
}
