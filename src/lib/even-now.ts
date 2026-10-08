export function pageHead(title: string, description: string) {
 return { meta: [{title: `${title} | Even Now`}, {name:'description',content:description}, {property:'og:title',content:`${title} | Even Now`}, {property:'og:description',content:description}, {property:'og:type',content:'website'}, {name:'twitter:card',content:'summary_large_image'}] };
}
export const diagnosticAreas = [
 ['Positioning','Clarify why the right customer should choose you.'],
 ['Demand','Create demand that aligns with your commercial objectives.'],
 ['Acquisition','Connect the right channels to the right customers.'],
 ['Conversion','Find the friction between interest and a decision.'],
 ['Sales','Build a repeatable path from opportunity to revenue.'],
 ['Retention & distribution','Strengthen repeat business and routes to market.'],
];
export const method = [['Discover','Understand your business, customers, market and constraints.'],['Diagnose','Identify what is limiting commercial performance.'],['Prioritize','Rank opportunities by impact and feasibility.'],['Design','Develop an integrated commercial roadmap.'],['Deploy','Connect strategy to coordinated execution.'],['Measure','Track outcomes and refine what matters.']];
export function diagnose(challenge: string) {
 const areas: Record<string,[string,string]> = {'Unclear positioning':['Positioning','Demand'],'Not enough demand':['Demand','Acquisition'],'Low conversion':['Conversion','Sales'],'Inconsistent sales':['Sales','Conversion'],'Low repeat purchases':['Retention & distribution','Conversion'],'New market entry':['Retention & distribution','Positioning']};
 const result = areas[challenge] ?? ['Positioning','Demand'];
 return {primary:result[0],secondary:result[1],risk:'Requires deeper assessment'};
}
