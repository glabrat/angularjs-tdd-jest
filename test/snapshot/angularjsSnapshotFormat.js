import "angular";
import "angular-mocks";
import { domAttributesList } from "./domAttributesList"
import { removeHTMLComments } from "./utils"

const HTMLNormalizer = (element) => {
    const allChildrenNodes = removeHTMLComments(element[0].childNodes);
    const allChildrenElements = element[0].getElementsByTagName("*");

    [...allChildrenElements].forEach((child) => {
		[...child.attributes].forEach((attr) => {
			if(attr.value && domAttributesList.indexOf(attr.name) === -1) {
                attr.value = "[ngExpression]";
            }
		});
	});
    return element[0];
}
export const angularjsSnapshotFormat = (html, scope) => {
    let el;
    inject(($compile) => {
        el = $compile(html)(scope);
        scope.$digest();
        el = HTMLNormalizer(el);
    });
    return el.outerHTML;
}
