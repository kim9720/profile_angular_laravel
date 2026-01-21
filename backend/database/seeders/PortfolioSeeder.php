<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Profile;
use App\Models\Category;
use App\Models\Technology;
use App\Models\Project;
use App\Models\Experience;

class PortfolioSeeder extends Seeder
{
    public function run(): void
    {
        DB::transaction(function () {

            /* =======================
             * PROFILE
             * ======================= */
            $profile = Profile::create([
                'user_id' => 1,
                'title' => 'Full Stack Software Engineer',
                'tagline' => 'Passionate about building scalable solutions with clean, maintainable code.',
                'bio' => 'Passionate full-stack software engineer with 5+ years of experience building scalable, high-performance applications, focused on clean architecture, efficient problem-solving, and great user experience.',
                'github' => 'https://github.com/kim9720',
                'linkedin' => 'https://www.linkedin.com/in/mohamed-hababuu-49b79120a/',
                'twitter' => 'https://twitter.com/johndev',
                'location' => 'Sanawari, Arusha, TZ',
            ]);

            /* =======================
             * SKILLS (CATEGORIES + TECHNOLOGIES)
             * ======================= */
            $skills = [
                'Frontend' => ['Angular', 'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
                'Backend' => ['Laravel', 'RESTful APIs', 'Spring Boot'],
                'Database' => ['PostgreSQL', 'MySQL'],
                'Tools & Others' => ['Git', 'CI/CD', 'Agile/Scrum'],
            ];

            $technologyMap = [];

            foreach ($skills as $categoryName => $techs) {
                $category = Category::create([
                    'name' => $categoryName,
                    'slug' => strtolower(str_replace(' ', '-', $categoryName)),
                ]);

                foreach ($techs as $tech) {
                    $technology = Technology::create([
                        'category_id' => $category->id,
                        'name' => $tech,
                        'description' => $tech,
                        'profile_id' => $profile->id,
                    ]);

                    $technologyMap[$tech] = $technology->id;
                }
            }

            /* =======================
             * USER TECHNOLOGIES
             * ======================= */
            foreach ($technologyMap as $techId) {
                DB::table('user_technology')->insert([
                    'user_id' => 1,
                    'technology_id' => $techId,
                    'proficiency' => 1,
                ]);
            }

            /* =======================
             * PROJECTS + PROJECT TECHNOLOGIES
             * ======================= */
            $projects = [
                [
                    'title' => 'E-Commerce Platform',
                    'description' => 'Full-stack e-commerce solution with real-time inventory management and payment processing',
                    'technologies' => ['Angular'],
                    'image' => 'ecommerce.jpg',
                    'github' => 'https://github.com/johndev/ecommerce',
                    'demo' => 'https://demo-ecommerce.example.com',
                    'featured' => true,
                ],
                [
                    'title' => 'Task Management System',
                    'description' => 'Collaborative project management tool with real-time updates and team collaboration features',
                    'technologies' => ['React', 'PostgreSQL'],
                    'image' => 'taskmanager.jpg',
                    'github' => 'https://github.com/johndev/taskmanager',
                    'demo' => 'https://demo-taskmanager.example.com',
                    'featured' => true,
                ],
                [
                    'title' => 'Analytics Dashboard',
                    'description' => 'Real-time analytics dashboard with interactive data visualizations and reporting',
                    'technologies' => ['Angular'],
                    'image' => 'analytics.jpg',
                    'github' => 'https://github.com/johndev/analytics',
                    'demo' => 'https://demo-analytics.example.com',
                    'featured' => true,
                ],
            ];

            foreach ($projects as $data) {
                $project = Project::create([
                    'title' => $data['title'],
                    'description' => $data['description'],
                    'image' => $data['image'],
                    'github' => $data['github'],
                    'demo' => $data['demo'],
                    'featured' => $data['featured'],
                    'profile_id' => $profile->id,
                ]);

                foreach ($data['technologies'] as $tech) {
                    if (isset($technologyMap[$tech])) {
                        DB::table('project_technology')->insert([
                            'project_id' => $project->id,
                            'technology_id' => $technologyMap[$tech],
                        ]);
                    }
                }
            }

            /* =======================
             * EXPERIENCE
             * ======================= */
            $experiences = [
                [
                    'company' => 'Tech Innovations Inc.',
                    'position' => 'Senior Full Stack Developer',
                    'duration' => '2022 - Present',
                    'location' => 'San Francisco, CA',
                    'description' => implode("\n", [
                        'Lead development of microservices architecture serving 1M+ users',
                        'Mentor junior developers and conduct code reviews',
                        'Implemented CI/CD pipelines reducing deployment time by 60%',
                    ]),
                ],
                [
                    'company' => 'StartupXYZ',
                    'position' => 'Full Stack Developer',
                    'duration' => '2020 - 2022',
                    'location' => 'Remote',
                    'description' => implode("\n", [
                        'Built scalable web applications using Angular and Node.js',
                        'Optimized database queries improving performance by 40%',
                        'Collaborated with design team to implement responsive UIs',
                    ]),
                ],
            ];

            foreach ($experiences as $exp) {
                Experience::create([
                    ...$exp,
                    'profile_id' => $profile->id,
                ]);
            }

        });
    }
}
