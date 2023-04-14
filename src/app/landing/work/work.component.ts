import { Component } from '@angular/core';

export interface workContentItem {
  title: string,
  description: string,
  imagePath: string,
  content: string[],
  showContent: boolean
}

@Component({
  selector: 'app-roles',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})

export class WorkComponent {
  contentItems: workContentItem[] = [
    {
      title: 'Projects',
      description: 'Web Applications in the Healthcare Industry.',
      imagePath: 'assets/images/work/projects.jpg',
      content: [
        'Insurance Broker Application for employees, employers, pensioners, students, families.',
        'Prescription generator Application for Doctors.',
        'Hospital Care costs generator Application.',
        'Medical re-invoicing tool.',
        'Health insurance, cost and receipt generator Application based on German law and benefits.'
      ],
      showContent: false
    },
    {
      title: 'Responsibilities',
      description: 'How I make sure nothing\'s falling apart.',
      imagePath: 'assets/images/work/responsibility.jpg',
      content: [
        'I\'m no workaholic, but I take my projects seriously. Meaning I\'m reachable 24/7, ' +
        'if there\'s an urgent issue.',
        'I keep my dependencies updated.',
        'If I feel like there\'s a design flaw, I\'ll not hesitate to mention it, and change it if agreed.',
        'I keep a friendly yet professional relationship with my client. Communication is key in progress.',
        'I document as much as I can, keep track of release versions. I prefer building reusable code.',
        'I put emphasis on optimisation.'
      ],
      showContent: false
    },
    {
      title: 'My Workflow',
      description: 'Routine. How I investigate, identify, implement then test.',
      imagePath: 'assets/images/work/workflow.jpeg',
      content: [
        'Feature or fix, the methods are similar. I start with an action plan. If it\'s a complex issue, ' +
        'I\'ll write it down, otherwise I\'ll run it in my head.',
        'The plan starts with investigation, which usually includes communication with the reporter of the issue.',
        'Then I\'ll identify the components I\'m working with, and their structure.',
        'After studying my "battleground", it\'s easier to address the issue directly, and actually start implementing. ' +
        'This is the part where the actual coding takes place.',
        'Finally, I\'ll test my solution locally, in every scenario that I see reasonable. ' +
        'I don\'t like to make any tester\'s life hard.'
      ],
      showContent: false
    }
  ];

  toggleContent(item: workContentItem, height: number, content: HTMLDivElement): void {
    item.showContent = !item.showContent
    if (item.showContent) {
      if (window.matchMedia('(max-width: 991px)').matches && window.outerWidth < window.outerHeight) {
        setTimeout((): void => {
          window.scroll({ top: content.offsetTop + window.innerHeight / 2 - 150 });
        }, 100);
      }
      if (window.matchMedia('(min-width: 992px)').matches && !window.scrollY) {
        window.scroll({ top: 250 })
      }
    }
    content.style.marginBottom = (item.showContent ? height + 24 : 0) + 'px';
  }

}
