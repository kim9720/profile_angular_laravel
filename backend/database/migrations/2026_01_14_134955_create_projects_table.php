<?php
// database/migrations/xxxx_create_projects_table.php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('title');
            $table->text('description');
            $table->string('image')->nullable(); // URL or path
            $table->string('github')->nullable();
            $table->string('demo')->nullable();
            $table->boolean('featured')->default(false);
            $table->timestamps();
            $table->softDeletes();
            $table->index('featured'); // For quick featured queries
        });
    }

    public function down(): void {
        Schema::dropIfExists('projects');
    }
};
