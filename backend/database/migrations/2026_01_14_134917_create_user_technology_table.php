<?php
// database/migrations/xxxx_create_user_technology_table.php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('user_technology', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('technology_id')->constrained()->onDelete('cascade');
            $table->integer('proficiency')->default(1)->comment('1-5 scale, optional');
            $table->timestamps();
            $table->unique(['user_id', 'technology_id']); // Prevent duplicates
        });
    }

    public function down(): void {
        Schema::dropIfExists('user_technology');
    }
};
