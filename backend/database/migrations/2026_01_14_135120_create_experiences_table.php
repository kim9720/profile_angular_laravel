<?php
// database/migrations/xxxx_create_experiences_table.php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('experiences', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('company');
            $table->string('position');
            $table->string('duration'); // e.g., '2022 - Present'
            $table->string('location')->nullable();
            $table->json('description'); // Array of bullet points
            $table->timestamps();
            $table->softDeletes();
            $table->index('duration'); // For sorting by time
        });
    }

    public function down(): void {
        Schema::dropIfExists('experiences');
    }
};
